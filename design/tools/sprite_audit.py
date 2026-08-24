"""
Sprite audit for HD-2D conversion.

A billboarded sprite is a quad standing on the ground. If the animal's feet sit
at a different height in each PNG, every creature floats or sinks by a different
amount and the whole scene looks wrong. Before 1000 sprites go into a 3D world
somebody has to know, per sprite:

  * where the ground line actually is (lowest opaque row)
  * how much dead transparent margin surrounds it
  * the true drawn size, so scale can be set from the animal rather than the canvas

This is pipeline work: boring, mechanical, and exactly the kind of thing that
should be measured once rather than eyeballed 1000 times.
"""
import os, json, sys
from PIL import Image

ART = sys.argv[1] if len(sys.argv) > 1 else "art"
ALPHA = 40          # below this counts as empty
rows = []

for fn in sorted(f for f in os.listdir(ART) if f.endswith(".png")):
    im = Image.open(os.path.join(ART, fn)).convert("RGBA")
    w, h = im.size
    a = im.getchannel("A")
    bbox = a.point(lambda v: 255 if v > ALPHA else 0).getbbox()
    if not bbox:
        rows.append({"key": fn[:-4], "empty": True})
        continue
    x0, y0, x1, y1 = bbox
    rows.append({
        "key": fn[:-4],
        "w": w, "h": h,
        "drawn_w": x1 - x0, "drawn_h": y1 - y0,
        "left": x0, "right": w - x1,
        "top": y0,
        "bottom_gap": h - y1,               # transparent rows under the feet
        "ground_line": y1 / float(h),       # 1.0 = feet on the canvas edge
        "fill": round((x1 - x0) * (y1 - y0) / float(w * h), 3),
    })

ok = [r for r in rows if not r.get("empty")]
gaps = sorted(r["bottom_gap"] for r in ok)
def pct(p): return gaps[int(len(gaps) * p)]

print("sprites audited: %d   (empty: %d)" % (len(ok), len(rows) - len(ok)))
print()
print("BOTTOM GAP - transparent rows beneath the lowest drawn pixel")
print("  min %3d   p25 %3d   median %3d   p75 %3d   max %3d"
      % (gaps[0], pct(.25), pct(.5), pct(.75), gaps[-1]))
print("  spread of %d px on a 256px canvas = %.1f%% of sprite height"
      % (gaps[-1] - gaps[0], 100.0 * (gaps[-1] - gaps[0]) / 256))
print()
worst = sorted(ok, key=lambda r: -r["bottom_gap"])[:8]
print("FLOATERS - largest gap under the feet, these would hover above terrain")
for r in worst:
    print("  %-22s gap %3dpx   drawn %dx%d" % (r["key"], r["bottom_gap"], r["drawn_w"], r["drawn_h"]))
print()
fills = sorted(r["fill"] for r in ok)
print("CANVAS USE - fraction of the 256x256 actually drawn on")
print("  median %.0f%%   worst %.0f%%   best %.0f%%"
      % (100 * fills[len(fills)//2], 100 * fills[0], 100 * fills[-1]))

json.dump(rows, open("design/tools/sprite_audit.json", "w"), indent=1)
print("\nwritten: design/tools/sprite_audit.json  (per-sprite, for the import step)")
