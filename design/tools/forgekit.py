"""forgekit - the pieces every region's forge is built from.

forge_savanna.py was the first region and has these as its own functions,
bound to its own chain of maps. From the wetland on, each region sets up a
Region (its chain, its seams, and the regions either side of it) and calls the
same pieces from here, so what Ayr's reviews taught the first region - wide
open seams, organic edges, nothing sealed off, pouches on real ground - is
built into every one after it rather than copied into each.

forge_savanna.py is left as it is: its output is live, and re-routing it
through here would reshuffle every random choice in it for no gain.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mapforge import Grid, check, check_seam, preview, emit_js, entries, _flood, WALK, DOOR  # noqa: E402,F401
from xseams import XSEAM, xseam_row  # noqa: E402

W, H = 28, 24


class Region:
    """chain: the maps south to north. seam: {(a, b): dict(road, L, R)} for
    each pair. prev/nxt: the map of the neighbouring region that joins the
    first map's south edge / the last map's north edge, if one does (the spec
    for that seam is in xseams, shared with the other region's forge)."""

    def __init__(self, chain, seam, prev=None, nxt=None):
        self.chain, self.seam, self.prev, self.nxt = chain, seam, prev, nxt

    def edges_of(self, key):
        i = self.chain.index(key)
        if i > 0:
            s = self.seam[(self.chain[i - 1], key)]
        else:
            s = XSEAM.get((self.prev, key)) if self.prev else None
        if i < len(self.chain) - 1:
            n = self.seam[(key, self.chain[i + 1])]
        else:
            n = XSEAM.get((key, self.nxt)) if self.nxt else None
        return s, n

    def links(self):
        out = {}
        for a, b in zip(self.chain, self.chain[1:]):
            out.setdefault(a, {})["n"] = {"map": b, "off": 0}
            out.setdefault(b, {})["s"] = {"map": a, "off": 0}
        if self.prev:
            out.setdefault(self.chain[0], {})["s"] = {"map": self.prev, "off": 0}
        if self.nxt:
            x = XSEAM[(self.chain[-1], self.nxt)]
            out.setdefault(self.chain[-1], {})["n"] = {"map": self.nxt, "off": 0, "fallback": x["fallback"]}
        return out


R = None   # the region being forged; set by setup()


def setup(region):
    global R
    R = region


def seam_row(s):
    """The shared edge row. Usually forest either side of open ground, but a
    seam can spell its row out (`row`) - the desert meets the sea at Tidewater
    Cove, and there the edge is water either side of a neck of land."""
    if "row" in s:
        assert len(s["row"]) == W, "seam row is %d wide" % len(s["row"])
        return list(s["row"])
    return xseam_row(s, W)


def _drift_spec(s):
    # A town gate into another region draws its own wall; the side forest
    # runs as it would along a closed edge.
    return dict(L=3, R=3) if (s is None or "fallback" in s) else s


def base(key, seed, fill="g", rocks=0.08):
    """Grassland, with an organic edge down both sides that matches the seam
    above and below exactly where it meets them. `rocks` is how often the
    innermost tile of the edge is a rock outcrop instead - none in a fen."""
    g = Grid(key, W, H, fill, seed)
    rng = g.rng
    s, n = R.edges_of(key)
    top, bot = _drift_spec(n), _drift_spec(s)
    for side in ("L", "R"):
        a, b = top[side], bot[side]
        drift = 0.0
        for y in range(H):
            t = y / (H - 1)
            drift += rng.uniform(-0.8, 0.8)
            drift *= 0.75
            d = round(a + (b - a) * t + drift)
            if y in (0, 1):
                d = a
            if y in (H - 1, H - 2):
                d = b
            d = max(1, min(4, d))
            for i in range(d):
                x = i if side == "L" else W - 1 - i
                g.set(x, y, "^" if (i == d - 1 and rng.random() < rocks) else "T")
            if 3 < y < H - 4 and rng.random() < 0.16:
                x = d + 1 if side == "L" else W - 2 - d
                g.set(x, y, "T")
    if s:
        g.gaps["s"] = (s["road"], s["road"] + 1)
    if n:
        g.gaps["n"] = (n["road"], n["road"] + 1)
    return g


def stamp_seams(g):
    s, n = R.edges_of(g.key)
    if n:
        g.g[0] = seam_row(n)
    if s:
        g.g[H - 1] = seam_row(s)


def reachable(g):
    walk = lambda ch, x, y: ch in WALK or ch in DOOR or "%d,%d" % (x, y) in g.allow_block
    e = entries(g)
    return _flood(g, e[0][0], e[0][1], walk)


def seal_pockets(g, fill="T"):
    """Ground nobody can reach becomes forest (or reeds). The seam rows are
    shared with the next map and never touched."""
    reach = reachable(g)
    for y in range(1, H - 1):
        for x in range(W):
            if g.get(x, y) in WALK and (x, y) not in reach:
                g.set(x, y, fill)


def pouch(g, x, y, ident, item, n):
    """A pouch at (x, y), or the nearest real, reachable, off-road ground."""
    reach = reachable(g)
    for r in range(0, 6):
        for dy in range(-r, r + 1):
            for dx in range(-r, r + 1):
                if max(abs(dx), abs(dy)) != r:
                    continue
                px, py = x + dx, y + dy
                if 1 < py < H - 2 and 1 < px < W - 2 and g.get(px, py) in WALK \
                        and (px, py) in reach and (px, py) not in g.road_set \
                        and "%d,%d" % (px, py) not in g.finds:
                    g.find(px, py, ident, item, n)
                    return
    raise ValueError("no ground anywhere near %d,%d for %s" % (x, y, ident))


def finish(g, pouches, fill="T"):
    stamp_seams(g)
    seal_pockets(g, fill)
    for p in pouches:
        pouch(g, *p)
    return g


def _free_near(g, x, y, r=3):
    """The nearest open, off-road, unoccupied tile to (x, y)."""
    for d in range(0, r + 1):
        for dy in range(-d, d + 1):
            for dx in range(-d, d + 1):
                if max(abs(dx), abs(dy)) != d:
                    continue
                px, py = x + dx, y + dy
                if 1 < py < H - 2 and 1 < px < W - 2 and g.get(px, py) in "g.*" \
                        and (px, py) not in g.road_set and "%d,%d" % (px, py) not in g.cast \
                        and "%d,%d" % (px, py) not in g.finds:
                    return px, py
    raise ValueError("nothing free near %d,%d" % (x, y))


def pieces(g, spec):
    for x, y, kind in spec:
        g.decor(*_free_near(g, x, y), kind)


def signpost(g, x, y, ident):
    g.person(*_free_near(g, x, y), "!", ident)


def person(g, x, y, ch, ident):
    """Someone who already exists, at (x, y) or the nearest free ground to it -
    so a scatter of flowers can never make a design refuse to build."""
    g.person(*_free_near(g, x, y), ch, ident)


def road(g, pts):
    g.road(pts, ".", 2)


def clump(g, cx, cy, n, ch="T", spread=2):
    placed = 0
    for _ in range(60):
        if placed >= n:
            break
        x = cx + g.rng.randint(-spread, spread)
        y = cy + g.rng.randint(-spread, spread)
        if 1 < y < H - 2 and 2 < x < W - 3 and (x, y) not in g.road_set and g.get(x, y) in "g*":
            g.set(x, y, ch)
            placed += 1


def pond(g, x0, y0, w, h):
    """Water with a margin of bare trodden earth."""
    g.rect(x0 - 1, y0 - 1, x0 + w, y0 + h, ".", only_on="g")
    g.rect(x0, y0, x0 + w - 1, y0 + h - 1, "W")


def mere(g, cx, cy, rx, ry, rough=0.3):
    """Open water with a ragged natural edge - a fen pool, not a dug pond.
    Never on the road: water laid before the road is crossed by it (a
    causeway), water laid after it leaves the road alone."""
    for y in range(cy - ry - 1, cy + ry + 2):
        for x in range(cx - rx - 1, cx + rx + 2):
            if not (0 <= x < W and 1 <= y < H - 1) or (x, y) in g.road_set:
                continue
            d = ((x - cx) / max(rx, 0.5)) ** 2 + ((y - cy) / max(ry, 0.5)) ** 2
            if d <= 1.0 - rough * g.rng.random() and g.get(x, y) in "g.*GT^":
                g.set(x, y, "W")


def tall(g, cx, cy, rx, ry, rough=0.3):
    g.blob(cx, cy, rx, ry, "G", rough, only_on="g")


def reeds(g, cx, cy, rx, ry, rough=0.35):
    """A reed bed - the wetland's 'tree' (its palette draws T as reeds)."""
    g.blob(cx, cy, rx, ry, "T", rough, only_on="g*")


def patch(g, cx, cy, rx, ry):
    g.blob(cx, cy, rx, ry, ".", 0.4, only_on="g")


def flowers(g, n, box):
    g.scatter("*", n, box, only_on="g", avoid=g.road_set)


def run(region_name, source, grids, inbound, gen, out_name):
    """Print, check every map and every seam, and write only if all pass."""
    by = {g.key: g for g in grids}
    problems = []
    for g in grids:
        print("\n=== %s (%dx%d) ===" % (g.key, g.w, g.h))
        print(preview(g))
        for p in check(g):
            problems.append("%s: %s" % (g.key, p))
    for a, b in zip(R.chain, R.chain[1:]):
        problems += check_seam(by[a], by[b])
    if problems:
        print("\nREFUSING TO WRITE - %d problem(s):" % len(problems))
        for p in problems:
            print("  " + p)
        sys.exit(1)
    js = emit_js(region_name, source, grids, R.links(), inbound, gen)
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    out = os.path.join(root, out_name)
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        f.write(js)
    print("\nall checks passed - wrote %s" % out)
