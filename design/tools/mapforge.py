"""mapforge - author the rebuilt Wildlands maps as code, and check their geometry.

WHY MAPS ARE PAINTED HERE RATHER THAN TYPED. A 28x24 map is 672 characters, and
a region is eight of them stitched edge to edge. Typing those as string literals
is how you get a row one character short, a seam that is open on one side and a
tree on the other, or a trainer standing in the only gap in a hedge - each of
which the game would find for you at the worst possible moment, as a player who
cannot move. So a map is DESCRIBED - borders, roads, fields, where each person
stands and who they are - and this builds the rows from that and refuses to emit
anything it can prove is broken.

WHAT IS CHECKED HERE, AND WHAT IS NOT. This file only knows geometry: widths,
seams, reachability, whether a person is in the road. It cannot know who a
person IS, whether their story text exists, or what the game's own walk rules
make of a beaten trainer. Those are checked again inside the running game by
part103, which has TRAINERS and SIGNS to hand. Both have to pass. Neither is a
substitute for the other, because each can see something the other cannot.

IDENTITY. The game names a person by the tile they stood on when they were
written - TRAINERS["route1:4,4"] is Scout Jabu, and so are the arc tables, the
solved-text, the rematch record and the beaten-flag in every save. A rebuilt map
moves Jabu, but his NAME must not change, or every one of those forgets him. So
each placed person carries their original key as `id`, and part103 translates
"the person standing here" back to it. That is what keeps old saves' beaten
trainers beaten without migrating a single save.
"""
import json
import random
from collections import deque

# What a player can stand on. Must agree with part4's walk rule for anything a
# fresh save could step onto; the MAP_MARKS (tracks, hive, web, nest, a page)
# are walked ONTO, which is why they are here and not in SOLID.
WALK = set(".gGp*") | set("⁂⁃⁄⁅⁌")
# Map-edge door tiles. Stepping on one takes you somewhere; part4 skips the walk
# rule for them entirely.
DOOR = set("nsec")
# Things you walk up to and bump. They need an open, reachable tile beside them,
# and they must never stand in the way of the road - Ayr, 2026-09-18: "Water and
# buildings are ok, but not clues, people, or signs".
BUMP_PERSON = set("RV!X")
BUILDING = set("HPCYM")
# A landmark - the great baobab, a termite mound - is one solid tile you walk up
# to and read (part106). It is the only thing in the game written as this glyph.
LANDMARK = "Ω"
MARKS = set("⁂⁃⁄⁅⁌")


class Grid:
    def __init__(self, key, w, h, fill=".", seed=0):
        self.key, self.w, self.h = key, w, h
        self.g = [[fill] * w for _ in range(h)]
        self.rng = random.Random(seed)
        self.cast = {}          # "x,y" -> original identity key
        self.exits = {}         # "x,y" -> {map, x, y, [req, reqMsg]}
        self.gaps = {}          # "n"/"s" -> (x0, x1) open seam columns
        self.allow_block = set()  # "x,y" of the ONE person allowed to hold a road
        self.road_set = set()   # every tile painted as road - it must stay clear
        self.marks = {}         # "x,y" -> landmark id (part106's LANDMARKS)
        self.finds = {}         # "x,y" -> {id, item, n}: a pouch to pick up
        self.beyond = {}        # side -> what the camera shows past a CLOSED
                                # edge instead of forest, e.g. {"s": "W"}
        self.land = None        # where a relocated old save wakes up

    # ----- painting -------------------------------------------------------
    def inb(self, x, y):
        return 0 <= x < self.w and 0 <= y < self.h

    def get(self, x, y):
        return self.g[y][x]

    def set(self, x, y, ch):
        if self.inb(x, y):
            self.g[y][x] = ch

    def rect(self, x0, y0, x1, y1, ch, only_on=None):
        for y in range(min(y0, y1), max(y0, y1) + 1):
            for x in range(min(x0, x1), max(x0, x1) + 1):
                if self.inb(x, y) and (only_on is None or self.g[y][x] in only_on):
                    self.g[y][x] = ch

    def border(self, ch="T", thick=2, sides="nsew"):
        for t in range(thick):
            if "n" in sides: self.rect(0, t, self.w - 1, t, ch)
            if "s" in sides: self.rect(0, self.h - 1 - t, self.w - 1, self.h - 1 - t, ch)
            if "w" in sides: self.rect(t, 0, t, self.h - 1, ch)
            if "e" in sides: self.rect(self.w - 1 - t, 0, self.w - 1 - t, self.h - 1, ch)

    def blob(self, cx, cy, rx, ry, ch, rough=0.3, only_on=".g*"):
        """An organic patch - an ellipse whose edge is nibbled at random, so a
        field of tall grass reads as a field and not as a pasted rectangle."""
        for y in range(cy - ry - 1, cy + ry + 2):
            for x in range(cx - rx - 1, cx + rx + 2):
                if not self.inb(x, y):
                    continue
                d = ((x - cx) / max(rx, 0.5)) ** 2 + ((y - cy) / max(ry, 0.5)) ** 2
                if d <= 1.0 - rough * self.rng.random() and self.g[y][x] in only_on:
                    self.g[y][x] = ch

    def road(self, pts, ch=".", width=2, only_on=None):
        """A road through a list of points, drawn as axis-aligned legs. Width
        grows right and down from the line, so a width-2 road from x=12 covers
        12 and 13."""
        for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
            if x0 != x1 and y0 != y1:
                raise ValueError("road legs must be straight: %s -> %s" % ((x0, y0), (x1, y1)))
            for y in range(min(y0, y1), max(y0, y1) + 1):
                for x in range(min(x0, x1), max(x0, x1) + 1):
                    for dy in range(width):
                        for dx in range(width):
                            if self.inb(x + dx, y + dy) and (only_on is None or self.g[y + dy][x + dx] in only_on):
                                self.g[y + dy][x + dx] = ch
                                self.road_set.add((x + dx, y + dy))

    def scatter(self, ch, n, box, only_on=".", avoid=None, tries=4000):
        x0, y0, x1, y1 = box
        placed = 0
        avoid = avoid or set()
        for _ in range(tries):
            if placed >= n:
                break
            x, y = self.rng.randint(x0, x1), self.rng.randint(y0, y1)
            if (x, y) in avoid or self.g[y][x] not in only_on:
                continue
            self.g[y][x] = ch
            placed += 1
        return placed

    # ----- people and doors -----------------------------------------------
    def person(self, x, y, ch, ident):
        """Place someone who already exists in the game, under the name they
        already have. ch is R, V, ! or X - the glyph they were written with."""
        self.g[y][x] = ch
        self.cast["%d,%d" % (x, y)] = ident

    def landmark(self, x, y, ident):
        """A feature to walk up to and read. ident is a key in part106's
        LANDMARKS; part105 refuses the region if it is not one."""
        self.g[y][x] = LANDMARK
        self.marks["%d,%d" % (x, y)] = ident

    def decor(self, x, y, kind):
        """A piece of a town - a well, a stall, a granary (part106's
        DECOR_SHAPES). Solid scenery, drawn like a landmark but saying nothing."""
        self.g[y][x] = LANDMARK
        self.marks["%d,%d" % (x, y)] = "decor:" + kind

    def find(self, x, y, ident, item, n):
        """A pouch lying on (x, y), picked up by walking onto it. The tile keeps
        whatever it already is - long grass stays long grass - so ident, not the
        position, is what the save remembers it by."""
        self.finds["%d,%d" % (x, y)] = {"id": ident, "item": item, "n": n}

    def gap(self, side, x0, x1, ch="."):
        """An open seam: columns x0..x1 of the top (n) or bottom (s) edge are
        ground, and the neighbour's matching edge must be ground too."""
        y = 0 if side == "n" else self.h - 1
        rows = [y, y + 1] if side == "n" else [y, y - 1]
        for yy in rows:
            for x in range(x0, x1 + 1):
                self.g[yy][x] = ch
        self.gaps[side] = (x0, x1)

    def door(self, x, y, ch, to_map, to_x, to_y, **extra):
        self.g[y][x] = ch
        e = {"map": to_map, "x": to_x, "y": to_y}
        e.update(extra)
        self.exits["%d,%d" % (x, y)] = e

    def rows(self):
        return ["".join(r) for r in self.g]


# ----- checks ------------------------------------------------------------
def _flood(g, sx, sy, passable):
    seen = {(sx, sy)}
    q = deque([(sx, sy)])
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if g.inb(nx, ny) and (nx, ny) not in seen and passable(g.get(nx, ny), nx, ny):
                seen.add((nx, ny))
                q.append((nx, ny))
    return seen


def entries(g):
    """Every way into this map: each seam column and each door tile."""
    pts = []
    for side, (x0, x1) in g.gaps.items():
        y = 0 if side == "n" else g.h - 1
        pts += [(x, y) for x in range(x0, x1 + 1)]
    for k in g.exits:
        x, y = map(int, k.split(","))
        pts.append((x, y))
    return pts


def check(g):
    """Return a list of problems. An empty list is the only passing grade."""
    bad = []
    for y, r in enumerate(g.g):
        if len(r) != g.w:
            bad.append("row %d is %d wide, not %d" % (y, len(r), g.w))
    if bad:
        return bad

    ent = entries(g)
    if not ent:
        return ["no way in at all"]

    # 1. Everything reachable from the first entrance, walking normally, with
    #    people counted as solid - they are, until beaten or until you talk.
    #    A declared gate (the rival in her gap, the gym guard in his) counts as
    #    open here: it is passable once earned, and the whole point of it is
    #    that the road beyond is reached THROUGH it.
    walk = lambda ch, x, y: ch in WALK or ch in DOOR or "%d,%d" % (x, y) in g.allow_block
    reach = _flood(g, ent[0][0], ent[0][1], walk)
    for (x, y) in ent:
        if (x, y) not in reach:
            bad.append("entrance/door %d,%d cannot be reached from %d,%d" % (x, y, ent[0][0], ent[0][1]))

    # 2. Every person, sign and building has a reachable tile beside it, or it
    #    cannot be talked to, read or entered.
    for y in range(g.h):
        for x in range(g.w):
            ch = g.get(x, y)
            is_decor = str(g.marks.get("%d,%d" % (x, y), "")).startswith("decor:")
            if (ch in BUMP_PERSON or ch in BUILDING or ch == LANDMARK) and not is_decor:
                near = [(x + dx, y + dy) for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))]
                if not any(p in reach for p in near):
                    bad.append("%s at %d,%d has no reachable side" % (ch, x, y))
            if ch == LANDMARK and "%d,%d" % (x, y) not in g.marks:
                bad.append("a landmark at %d,%d with no id - what is it?" % (x, y))
            if ch in BUMP_PERSON and ch != "X" and "%d,%d" % (x, y) not in g.cast:
                bad.append("%s at %d,%d has no identity - who is it?" % (ch, x, y))

    # Pouches: on ground you can stand on and actually reach, and never on the
    # very edge of the map, where a step would carry you across a seam instead.
    for k, f in g.finds.items():
        x, y = map(int, k.split(","))
        if g.get(x, y) not in WALK:
            bad.append("pouch %s at %s is on %r, not ground" % (f["id"], k, g.get(x, y)))
        elif (x, y) not in reach:
            bad.append("pouch %s at %s cannot be reached" % (f["id"], k))
        if y in (0, g.h - 1) or x in (0, g.w - 1):
            bad.append("pouch %s at %s is on the map's edge" % (f["id"], k))

    # 3. Nothing stands on the road. This is Ayr's rule from 2026-09-18 - "Water
    #    and buildings are ok, but not clues, people, or signs" - and the first
    #    version of this check got it wrong: it only complained if a person CUT
    #    a route off entirely, so a trainer planted in the middle of the track
    #    with grass to walk round passed. That is exactly the thing Ayr objected
    #    to. So the test is the road itself: every tile painted as road must
    #    still be walkable, bar the declared gates.
    for (x, y) in sorted(g.road_set):
        ch = g.get(x, y)
        if not (ch in WALK or ch in DOOR or "%d,%d" % (x, y) in g.allow_block):
            bad.append("%r stands on the road at %d,%d" % (ch, x, y))
    # 4. No isolated pockets of walkable ground a save could be stranded in.
    allw = {(x, y) for y in range(g.h) for x in range(g.w) if g.get(x, y) in WALK}
    orphan = allw - reach
    if orphan:
        bad.append("%d walkable tiles unreachable, e.g. %s" % (len(orphan), sorted(orphan)[:4]))

    if g.land is None:
        bad.append("no landing spot for relocated saves")
    elif g.land not in reach:
        bad.append("landing spot %s is not reachable ground" % (g.land,))
    return bad


def check_seam(south, north):
    """`south` lies below `north` on the map of the world: walking up off
    south's top edge lands on north's bottom edge in the same column."""
    bad = []
    if south.w != north.w:
        bad.append("%s and %s differ in width - offsets not supported here yet" % (south.key, north.key))
    a, b = south.gaps.get("n"), north.gaps.get("s")
    if a != b:
        bad.append("seam %s/%s: gaps %s vs %s" % (south.key, north.key, a, b))
    for x in range(south.w):
        up, dn = south.get(x, 0), north.get(x, north.h - 1)
        if (up in WALK) != (dn in WALK):
            bad.append("seam %s/%s col %d: %r below, %r above - open on one side only"
                       % (south.key, north.key, x, up, dn))
    return bad


def preview(g):
    return "\n".join("%2d %s" % (i, r) for i, r in enumerate(g.rows()))


def emit_js(name, source, grids, links, inbound, gen):
    """The data block part103 consumes. Only data - no behaviour lives here.
    `gen` is the rebuild generation: a save made before it, standing on one of
    these maps, is moved to that map's landing spot on load."""
    out = {}
    for g in grids:
        out[g.key] = {
            "rows": g.rows(),
            "cast": g.cast,
            "marks": g.marks,
            "finds": g.finds,
            "exits": g.exits,
            "beyond": g.beyond,
            "land": list(g.land),
            "links": links.get(g.key, {}),
            "gen": gen,
        }
    return (
        "// GENERATED by design/tools/%s - edit the design there and re-run it,\n"
        "// never by hand here. mapforge refuses to write a map it can prove is\n"
        "// broken, and part103 checks it again against the live game on load.\n"
        "REBUILT_REGIONS.push({ name: %s, maps: %s, inbound: %s });\n"
    ) % (source, json.dumps(name), json.dumps(out, ensure_ascii=False, indent=1),
         json.dumps(inbound, ensure_ascii=False, indent=1))
