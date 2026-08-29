"""Find sprites whose background was never removed.

    python design/art_pipeline/alpha_audit.py                 # every sprite in art/
    python design/art_pipeline/alpha_audit.py batch_x.json    # just one batch

WHY THIS EXISTS

postprocess.py clears background-coloured regions CONNECTED TO AN EDGE. When the
model paints a bounded panel - a frame, a plate, a card behind the animal - the
flood fill stops at that border and the whole panel survives as opaque pixels.
The sprite then looks fine in a folder and wrong the moment it is composited over
anything.

It had already happened three times before anyone was looking for it:
anomalocaris, the Burmese cat and the mutt all came back sitting on a pale slab.

THE TEST is opaque coverage. A clean cut-out sprite covers a small share of its
own canvas because an animal is not a rectangle; a sprite with its background
still attached covers most of it. The old art notes record measured figures -
clean sprites ran 12-21%, leaked ones 54-62% - so anything above 45% is worth a
human eye, and anything above 60% is almost certainly a panel.

A CORNER CHECK IS NOT ENOUGH and that is the trap this replaces: postprocess
often clears the four corners while leaving a rounded panel in the middle, so
corner sampling reports clean on exactly the sprites that are broken.
"""
import io, json, os, sys
from PIL import Image

REPO = "C:/Claude/wildlands"
ART = os.path.join(REPO, "art")
ALPHA = 40          # same threshold postprocess uses for "empty"
# CALIBRATED against the three known leaks and the 1184 sprites around them.
# The three that were caught by eye - anomalocaris, the Burmese cat, the mutt -
# all measure 87.5-87.9%. Clean sprites run 21-46%, and the heaviest legitimate
# subjects (a jaguar, a giant clam, an elephant) top out near 65%. So the gap is
# wide and the line sits well clear of both sides.
WARN = 60.0
BAD = 80.0


def coverage(path):
    im = Image.open(path).convert("RGBA")
    a = im.getchannel("A")
    opaque = sum(1 for p in a.tobytes() if p > ALPHA)
    return 100.0 * opaque / (im.width * im.height)


def keys_for(argv):
    if len(argv) > 1:
        out = []
        for p in argv[1:]:
            if not os.path.isabs(p):
                p = os.path.join(REPO, "design", "art_prompts", os.path.basename(p))
            out += list(json.load(io.open(p, encoding="utf-8")))
        return out
    return sorted(f[:-4] for f in os.listdir(ART) if f.endswith(".png"))


if __name__ == "__main__":
    keys = keys_for(sys.argv)
    rows = []
    for k in keys:
        p = os.path.join(ART, k + ".png")
        if not os.path.exists(p):
            continue
        try:
            rows.append((coverage(p), k))
        except Exception as e:
            print("  unreadable %s: %s" % (k, str(e)[:60]))
    rows.sort(reverse=True)

    bad = [r for r in rows if r[0] >= BAD]
    warn = [r for r in rows if WARN <= r[0] < BAD]
    print("=" * 56)
    print("ALPHA AUDIT - %d sprites checked" % len(rows))
    print("=" * 56)
    print("   %-34s %4d" % ("almost certainly a leaked panel", len(bad)))
    print("   %-34s %4d" % ("worth a look", len(warn)))
    print()
    for pct, k in bad:
        print("   BACKGROUND LEAK   %-26s %5.1f%% opaque" % (k, pct))
    for pct, k in warn:
        print("   check             %-26s %5.1f%% opaque" % (k, pct))
    if rows:
        med = rows[len(rows) // 2][0]
        print()
        print("   median coverage %.1f%%  (a clean cut-out normally runs 12-25%%)" % med)
    sys.exit(1 if bad else 0)
