"""Find sprites where the background removal ate INTO the animal.

    python design/art_pipeline/hole_audit.py                 # every sprite in art/
    python design/art_pipeline/hole_audit.py batch_x.json    # just one batch

WHY THIS EXISTS, AND WHY alpha_audit.py IS NOT ENOUGH

postprocess clears background-coloured regions connected to an edge. That can go
wrong in two opposite directions, and until now only one of them was checked.

  TOO LITTLE REMOVED - a bounded panel survives and the sprite sits on a slab.
  That is alpha_audit.py, and it works by measuring how much of the canvas is
  opaque: an animal is not a rectangle, so very high coverage means a leak.

  TOO MUCH REMOVED - the fill reaches through a gap in the outline and eats a
  hole in the animal itself. Ayr, 2026-09-13, listing faults: "Airavata ...
  the rear is transparent in this sprite and it shouldn't be", and the same
  complaint against the amarok, the angora rabbit, the Arabian oryx and the
  arctic fox.

alpha_audit CANNOT SEE THE SECOND KIND. A sprite with a hole in it has LOWER
coverage, and low coverage is what a clean cut-out looks like. Four faults Ayr
found by eye scored as healthy, because the tool was only ever asked one of the
two questions.

THE TEST. Transparency that belongs to the background is connected to the edge
of the canvas; transparency inside the animal is not. So flood the alpha channel
inward from all four edges, and anything still transparent afterwards is a hole
surrounded by animal. A few stray pixels are antialiasing noise; a hole worth
seeing is a contiguous region of real size.

Deliberately NOT flagged: legitimately enclosed background. The gap inside a
curled tail, the space between a leg and a body, the hole in a ring of coral -
all of those are real holes that should be transparent. So the threshold is set
by area and the report prints the size, because the difference between a hole in
a rump and a gap between two legs is a judgement a person makes.
"""
import io, json, os, sys
from collections import deque
from PIL import Image

REPO = "C:/Claude/wildlands"
ART = os.path.join(REPO, "art")
ALPHA = 40          # same threshold postprocess treats as empty
# A hole smaller than this is antialiasing or a real gap between limbs. Tuned
# against the five Ayr named plus a sample of sprites known to be clean.
MIN_HOLE = 60       # pixels, on the 256x256 shipped sprite
LOUD = 400          # a hole this big is almost certainly eaten anatomy


def holes(path):
    """Return the sizes of transparent regions not connected to the canvas edge."""
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    a = im.split()[3].load()
    clear = [[a[x, y] < ALPHA for x in range(w)] for y in range(h)]

    seen = [[False] * w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if clear[y][x] and not seen[y][x]: seen[y][x] = True; q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if clear[y][x] and not seen[y][x]: seen[y][x] = True; q.append((x, y))
    while q:                                    # background: reachable from an edge
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and clear[ny][nx] and not seen[ny][nx]:
                seen[ny][nx] = True; q.append((nx, ny))

    out = []
    for y in range(h):
        for x in range(w):
            if not clear[y][x] or seen[y][x]: continue
            size = 0; q.append((x, y)); seen[y][x] = True
            while q:                            # everything else is a hole
                cx, cy = q.popleft(); size += 1
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < w and 0 <= ny < h and clear[ny][nx] and not seen[ny][nx]:
                        seen[ny][nx] = True; q.append((nx, ny))
            if size >= MIN_HOLE: out.append(size)
    return sorted(out, reverse=True)


def main(argv):
    if argv:
        keys = []
        for p in argv:
            d = json.load(io.open(p, encoding="utf-8"))
            keys += list(d)
    else:
        keys = [f[:-4] for f in sorted(os.listdir(ART)) if f.endswith(".png")]

    bad, look = [], []
    for k in keys:
        p = os.path.join(ART, k + ".png")
        if not os.path.exists(p): continue
        hs = holes(p)
        if not hs: continue
        (bad if hs[0] >= LOUD else look).append((k, hs))

    print("=" * 56)
    print("HOLE AUDIT - %d sprites checked" % len(keys))
    print("=" * 56)
    print("   the fill ate into the animal      %d" % len(bad))
    print("   worth a look                      %d" % len(look))
    print()
    for k, hs in sorted(bad, key=lambda r: -r[1][0]):
        print("   HOLE IN THE ANIMAL   %-24s largest %d px, %d hole(s)" % (k, hs[0], len(hs)))
    for k, hs in sorted(look, key=lambda r: -r[1][0]):
        print("   check                %-24s largest %d px, %d hole(s)" % (k, hs[0], len(hs)))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
