"""The savanna, rebuilt: Baobab Base north to Marula Town as one continuous walk.

Run from the repo root:   python design/tools/forge_savanna.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part104.jsx.

THE SHAPE. Eight outdoor maps stacked south to north, all 28 wide so every seam
lines up column for column. The three rooms off this road - the Archive and the
two shrines - stay small, as Fire Red's interiors do.

SECOND PASS, 2026-09-24, after Ayr walked the first one:
  "There's a grid on the ground on all of the roads"   -> part4/part5 (pixels)
  "The transition between each route is awkward"       -> seams, below
  "Each area is very empty now"                        -> grassland, variety,
                                                          landmarks, pouches
  "The large walls of trees is awkward"                -> organic edges

What changed here, and why:

GRASSLAND WITH DIRT ROADS. The first pass was bare earth with things placed on
it, so the road was invisible and everything around it read as empty. Tested
on the Acacia Trail first: short grass as the ground and dirt as the road is
the single biggest step toward Fire Red. The dirt tears raggedly into the grass
(part45), so a road looks worn rather than painted.

SEAMS ARE WIDE OPEN. The first pass closed every map with a two-deep band of
trees and left a four-tile gap, so crossing from one route to the next meant
squeezing through eight rows of forest - a tunnel between rooms, which is what
"awkward" was. Now the edge row a seam shares is stamped IDENTICALLY into both
maps (stamp_seams), so the forest line runs straight on from one map into the
next and the ground between is simply open.

EDGES ARE ORGANIC. The side forest wanders between one and four tiles deep,
with rock outcrops in it and lone trees standing out from it, instead of a
ruler-straight wall two trees thick. Roads keep to the middle columns, so the
camera spends less of the screen on the wall.

EVERY MAP HAS SOMETHING TO FIND. A landmark (part106) and a pouch or two, plus
water, rocks, tree clusters and trampled patches, so walking across a map is
walking past things.

EVERY PERSON HERE ALREADY EXISTS. Nobody is added and nobody is removed. Each is
placed under the identity key they have always had (see mapforge).
"""
import os
import random
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mapforge import Grid, check, check_seam, preview, emit_js, entries, _flood, WALK, DOOR  # noqa: E402

W, H = 28, 24
GEN = 2   # second rebuild. A save made before this, standing here, is relocated.
CHAIN = ["town1", "route1", "seg_m1", "seg_m2", "seg_m3", "seg_m4", "seg_m5", "town2"]

# Each seam: where the road crosses it, and how deep the forest is on each side
# at that line. Both maps stamp the same edge row from this, so they always
# agree. Road columns drift across the middle of the map, never the sides.
SEAM = {
    ("town1", "route1"): dict(road=13, L=2, R=2),
    ("route1", "seg_m1"): dict(road=10, L=3, R=2),
    ("seg_m1", "seg_m2"): dict(road=15, L=2, R=3),
    ("seg_m2", "seg_m3"): dict(road=12, L=2, R=2),
    ("seg_m3", "seg_m4"): dict(road=10, L=3, R=3),
    ("seg_m4", "seg_m5"): dict(road=14, L=2, R=2),
    ("seg_m5", "town2"): dict(road=13, L=2, R=3),
}


def seam_row(s):
    row = ["T"] * s["L"] + ["g"] * (W - s["L"] - s["R"]) + ["T"] * s["R"]
    row[s["road"]] = row[s["road"] + 1] = "."
    return row


def edges_of(key):
    """The seam spec below this map (south) and above it (north), or None."""
    i = CHAIN.index(key)
    s = SEAM[(CHAIN[i - 1], key)] if i > 0 else None
    n = SEAM[(key, CHAIN[i + 1])] if i < len(CHAIN) - 1 else None
    return s, n


def base(key, seed):
    """Grassland, with an organic forest edge down both sides that matches the
    seam above and the seam below exactly where it meets them."""
    g = Grid(key, W, H, "g", seed)
    rng = g.rng
    s, n = edges_of(key)
    top = n or dict(L=3, R=3)       # no seam: a closed edge, handled per map
    bot = s or dict(L=3, R=3)
    for side in ("L", "R"):
        a, b = top[side], bot[side]
        drift = 0.0
        for y in range(H):
            t = y / (H - 1)
            drift += rng.uniform(-0.8, 0.8)
            drift *= 0.75                       # wander, but come back
            d = round(a + (b - a) * t + drift)
            if y in (0, 1):
                d = a
            if y in (H - 1, H - 2):
                d = b
            d = max(1, min(4, d))
            for i in range(d):
                x = i if side == "L" else W - 1 - i
                g.set(x, y, "^" if (i == d - 1 and rng.random() < 0.12) else "T")
            # a lone tree standing out from the edge, now and then
            if 3 < y < H - 4 and rng.random() < 0.16:
                x = d + 1 if side == "L" else W - 2 - d
                g.set(x, y, "T")
    if s:
        g.gaps["s"] = (s["road"], s["road"] + 1)
    if n:
        g.gaps["n"] = (n["road"], n["road"] + 1)
    return g


def stamp_seams(g):
    """Last thing every map does: write the shared seam rows over whatever the
    decoration left there, so the two maps meeting at a seam can never
    disagree about a single column of it."""
    s, n = edges_of(g.key)
    if n:
        g.g[0] = seam_row(n)
    if s:
        g.g[H - 1] = seam_row(s)


def reachable(g):
    walk = lambda ch, x, y: ch in WALK or ch in DOOR or "%d,%d" % (x, y) in g.allow_block
    e = entries(g)
    return _flood(g, e[0][0], e[0][1], walk)


def seal_pockets(g):
    """Ground nobody can reach becomes forest. Random edges and tree clumps
    will now and then wall off a single tile of grass, and a tile you can see
    but never stand on is worse than a tree - and a save that somehow woke up
    in one could not move. The seam rows are never touched: they are shared
    with the next map and must stay exactly as stamped."""
    reach = reachable(g)
    for y in range(1, H - 1):
        for x in range(W):
            if g.get(x, y) in WALK and (x, y) not in reach:
                g.set(x, y, "T")


def pouch(g, x, y, ident, item, n):
    """A pouch at (x, y), or the nearest spot to it that is real, reachable
    ground off the road - so the decoration can never bury one in a tree, and
    the design still says roughly where it lies ("behind the kopje")."""
    reach = reachable(g)
    for r in range(0, 5):
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


def finish(g, pouches):
    """Every map ends the same way: shared seam rows stamped, unreachable
    ground sealed, then the pouches laid on what is left."""
    stamp_seams(g)
    seal_pockets(g)
    for p in pouches:
        pouch(g, *p)
    return g


def road(g, pts):
    g.road(pts, ".", 2)


def clump(g, cx, cy, n, ch="T", spread=2):
    """A few trees (or rocks) together, the way acacias stand on a plain -
    never on the road, never on the seam rows."""
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
    """Water with a margin of bare trodden earth, where animals come down to drink."""
    g.rect(x0 - 1, y0 - 1, x0 + w, y0 + h, ".", only_on="g")
    g.rect(x0, y0, x0 + w - 1, y0 + h - 1, "W")


def tall(g, cx, cy, rx, ry, rough=0.3):
    g.blob(cx, cy, rx, ry, "G", rough, only_on="g")


def patch(g, cx, cy, rx, ry):
    """A trampled bare patch - an animal trail, a dust bath."""
    g.blob(cx, cy, rx, ry, ".", 0.4, only_on="g")


def flowers(g, n, box):
    g.scatter("*", n, box, only_on="g", avoid=g.road_set)


# ---------------------------------------------------------------- town1 ---
def town1():
    """Baobab Base: the first place anyone sees. It is named for its tree, so
    the great baobab stands in the middle of the square, and the town is built
    round it. The Professor's tent has the mess outside it the sign promises.
    South is the edge of the world; east is the Archive's door."""
    g = base("town1", 11)
    # THE SOUTH EDGE OF THE WORLD IS A RIVER. It was three rows of forest, and
    # with the forest the camera draws past the edge on top of that, a third of
    # the screen at the landing spot was a wall of trees - the thing Ayr called
    # awkward, in the most-seen spot in the game. A river bounds the world just
    # as firmly, reads as open country, and past the edge it simply carries on
    # (g.beyond), where more forest used to be.
    g.rect(0, H - 2, W - 1, H - 1, "W")
    g.rect(2, H - 3, W - 3, H - 3, ".", only_on="gT")   # the sandy bank
    g.beyond["s"] = "W"
    road(g, [(13, 0), (13, 9)])
    g.rect(8, 9, 19, 16, ".")                          # the square
    road(g, [(13, 16), (13, 19)])
    road(g, [(19, 12), (24, 12)])
    g.door(27, 12, "e", "archive", 7, 1)
    g.set(26, 12, "."); g.set(26, 13, "T")
    g.landmark(13, 12, "lm_great_baobab")
    pond(g, 4, 5, 3, 2)
    g.set(4, 12, "H"); g.set(22, 6, "H"); g.set(21, 17, "H")
    g.set(9, 15, "C"); g.set(18, 15, "M")
    for x, y in ((8, 9), (19, 9), (8, 16), (19, 16), (11, 4), (16, 4)):
        g.set(x, y, "¦")
    g.set(20, 4, "P"); g.set(22, 3, "¡"); g.set(19, 2, "¡")
    clump(g, 5, 16, 3); clump(g, 23, 20, 2)
    tall(g, 23, 9, 2, 1)
    flowers(g, 12, (3, 2, 24, 20))
    g.person(12, 2, "!", "town1:8,2")      # the gate sign - the trail starts north
    g.person(19, 5, "R", "town1:9,2")      # Prof. Amara, outside her tent
    g.person(5, 18, "R", "town1:3,8")      # Keeper Ruth, by the start
    g.person(22, 15, "R", "town1:16,8")    # Nan Ifeoma
    g.person(16, 18, "V", "town1:9,10")    # Kid Tobi
    g.person(11, 18, "!", "town1:8,12")    # "Every ranger starts here"
    g.land = (13, 18)
    return finish(g, [
        (3, 8, "sav_t1_pond", "berries", 3),
    ])


# --------------------------------------------------------------- route1 ---
def route1():
    """The Acacia Trail. Grassland either side of a dirt track, a weaver colony
    in an acacia by the road, Thabo's hives in the grass, and a ridge of rock
    across the north end with one way through it - where Zuri waits, and does
    not move until you beat her (part84)."""
    g = base("route1", 22)
    road(g, [(13, 23), (13, 15), (10, 15), (10, 0)])
    tall(g, 20, 18, 4, 3); tall(g, 5, 18, 2, 3); tall(g, 19, 9, 5, 3); tall(g, 5, 10, 2, 2)
    # the ridge: rock and thorn across the map, one gap, Zuri in it
    for x in range(2, W - 2):
        g.set(x, 5, "^" if (x * 7) % 3 else "T")
        if g.rng.random() < 0.5:
            g.set(x, 4, "^")
    g.set(10, 5, "V"); g.cast["10,5"] = "route1:7,1"; g.allow_block.add("10,5")
    g.set(10, 4, "."); g.set(11, 4, "^"); g.set(11, 5, "^"); g.road_set.discard((11, 5)); g.road_set.discard((11, 4))
    g.landmark(15, 13, "lm_weaver_acacia")
    clump(g, 22, 13, 3); clump(g, 4, 14, 2); clump(g, 17, 3, 3); clump(g, 6, 2, 2)
    patch(g, 17, 20, 1, 1)
    g.set(8, 19, "⁃"); g.set(8, 21, "⁃")
    g.person(9, 20, "R", "route1:5,12")    # Thabo Sithole, by his hives
    g.person(12, 11, "R", "route1:4,4")    # Scout Jabu, beside the track
    g.person(16, 16, "R", "route1:11,10")  # Sprout Bo, by the grass
    g.set(15, 17, "⁂")                     # tracks
    g.set(8, 8, "⁌")                       # a page somebody left (note 1)
    g.set(3, 12, "¡")
    flowers(g, 10, (3, 2, 24, 21))
    g.land = (13, 21)
    return finish(g, [
        (22, 19, "sav_r1_grass", "treats", 2),       # in the long grass
        (4, 2, "sav_r1_ridge", "coins", 60),         # behind the ridge, far side
    ])


# --------------------------------------------------------------- seg_m1 ---
def seg_m1():
    """Fernhollow Path. A wooded hollow: more trees, fern, a pool off to the
    west, and a termite mound taller than a person beside the track."""
    g = base("seg_m1", 31)
    road(g, [(10, 23), (10, 12), (15, 12), (15, 0)])
    pond(g, 4, 5, 3, 3)
    tall(g, 20, 18, 4, 3); tall(g, 20, 5, 3, 3); tall(g, 6, 18, 2, 2)
    clump(g, 5, 13, 4); clump(g, 22, 11, 4); clump(g, 11, 4, 3); clump(g, 18, 20, 3)
    g.landmark(8, 11, "lm_termite_mound")
    patch(g, 7, 10, 1, 1)
    g.person(4, 16, "R", "seg_m1:1,5")     # Ranger Pim
    g.person(22, 15, "R", "seg_m1:13,5")   # Watcher Esi
    g.person(18, 3, "R", "seg_m1:6,1")     # Herder Ade
    g.person(12, 9, "R", "seg_m1:6,7")     # Drover Ulla
    g.set(13, 20, "⁃")
    g.person(13, 21, "R", "seg_m1:6,10")   # the hive rows - a Beeloud finding
    g.set(17, 8, "⁂"); g.set(23, 19, "¡")
    flowers(g, 8, (3, 2, 24, 21))
    g.land = (11, 21)
    return finish(g, [
        (3, 9, "sav_m1_pool", "wakeberry", 1),
        (21, 5, "sav_m1_grass", "berries", 2),
    ])


# --------------------------------------------------------------- seg_m2 ---
def seg_m2():
    """Sunmote Meadow. Open ground, the most long grass on the road, flowers
    everywhere, a pond with the tadpole sign, and a mud wallow worn into the
    earth beside it. The Trampled Round - a shrine - is through the west gap."""
    g = base("seg_m2", 47)
    road(g, [(15, 23), (15, 16), (12, 16), (12, 0)])
    road(g, [(1, 11), (12, 11)])
    g.door(0, 11, "e", "shrine_bramwold", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    tall(g, 6, 18, 4, 3); tall(g, 21, 8, 4, 5); tall(g, 6, 5, 3, 2); tall(g, 21, 20, 2, 1)
    pond(g, 19, 2, 3, 2)
    g.landmark(17, 3, "lm_mud_wallow")
    clump(g, 7, 14, 2); clump(g, 24, 15, 3)
    flowers(g, 26, (3, 2, 24, 21))
    g.person(17, 21, "!", "seg_m2:7,4")    # the road sign
    g.person(18, 5, "!", "seg_m2:7,3")     # the tadpole, by the pond
    g.person(15, 9, "R", "seg_m2:9,4")     # Ranger Ade
    g.person(9, 14, "R", "seg_m2:5,7")     # Watcher Pim
    g.person(20, 14, "R", "seg_m2:9,7")    # Drover Esi
    g.person(9, 3, "R", "seg_m2:4,3")      # Herder Jax
    g.set(4, 9, "⁃"); g.set(17, 18, "⁂"); g.set(24, 17, "¡")
    g.land = (16, 21)
    return finish(g, [
        (4, 20, "sav_m2_grass", "treats", 2),
        (24, 3, "sav_m2_pond", "coins", 80),
    ])


# --------------------------------------------------------------- seg_m3 ---
def seg_m3():
    """The Old Fence Line. What is left of a fence runs across the map - posts
    and fallen rails with gaps where they have rotted through - and one post
    still stands with its wire. Rachel Carsen is here, watching what grows
    either side of it."""
    g = base("seg_m3", 53)
    road(g, [(12, 23), (12, 14), (10, 14), (10, 0)])
    for x in range(3, W - 3):
        r = g.rng.random()
        if (x, 12) in g.road_set:
            continue
        g.set(x, 12, "¡" if r < 0.45 else ("T" if r < 0.55 else "g"))
    g.landmark(16, 12, "lm_fence_break")
    tall(g, 20, 18, 4, 3); tall(g, 19, 6, 5, 3); tall(g, 5, 19, 2, 2); tall(g, 5, 5, 2, 2)
    pond(g, 22, 15, 2, 2)
    clump(g, 5, 16, 3); clump(g, 15, 3, 2); clump(g, 23, 10, 2)
    clump(g, 17, 20, 2, "^", 1)
    g.person(7, 9, "R", "seg_m3:4,4")      # Rachel Carsen
    g.person(4, 17, "R", "seg_m3:3,4")     # Herder Uzo
    g.person(15, 10, "R", "seg_m3:11,4")   # Watcher Ade
    g.set(16, 20, "⁃")
    g.person(15, 21, "R", "seg_m3:5,10")   # the old hives - a Beeloud finding
    g.set(13, 5, "⁂")
    flowers(g, 10, (3, 2, 24, 21))
    g.land = (13, 21)
    return finish(g, [
        (24, 13, "sav_m3_pond", "antidote", 1),
        (4, 3, "sav_m3_corner", "bigberries", 1),   # the far corner, past the grass
    ])


# --------------------------------------------------------------- seg_m4 ---
def seg_m4():
    """Beeloud Clearing. The heart of Thabo's story: the wrecked outer hives, a
    ring of stands, flowers everywhere because bees - and a honeyguide on a
    stump, watching. Karl von Frische, who worked out the bees' dance, is here
    too. The Hollow Mound shrine is off the west edge."""
    g = base("seg_m4", 61)
    road(g, [(10, 23), (10, 16), (14, 16), (14, 0)])
    road(g, [(1, 9), (14, 9)])
    g.door(0, 9, "e", "shrine_myrmedon", 7, 8)
    g.set(1, 9, "."); g.set(1, 10, "."); g.set(0, 10, "T")
    patch(g, 21, 8, 3, 3)                              # the clearing itself
    for x, y in ((20, 6), (23, 7), (19, 10), (23, 10)):
        g.set(x, y, "⁃")
    g.landmark(18, 4, "lm_honeyguide")
    tall(g, 7, 4, 3, 2); tall(g, 21, 18, 3, 3); tall(g, 5, 19, 2, 2)
    pond(g, 4, 13, 2, 2)
    clump(g, 18, 20, 2, "^", 1); clump(g, 24, 3, 2); clump(g, 6, 16, 2)
    flowers(g, 30, (3, 2, 24, 21))
    g.person(22, 9, "R", "seg_m4:13,8")    # the wrecked hives
    g.person(20, 12, "R", "seg_m4:1,3")    # Karl von Frische, watching them
    g.person(8, 12, "R", "seg_m4:1,4")     # Watcher Jax
    g.person(12, 19, "R", "seg_m4:14,4")   # Drover Ade
    g.person(11, 3, "R", "seg_m4:6,2")     # Ranger Uzo
    g.person(16, 14, "!", "seg_m4:7,3")    # the chrysalis
    g.set(9, 6, "⁌")                       # a page somebody left (note 2)
    g.set(16, 18, "⁂"); g.set(3, 20, "¡")
    g.land = (11, 21)
    return finish(g, [
        (24, 12, "sav_m4_hives", "berries", 3),
        (3, 16, "sav_m4_pool", "coins", 100),
    ])


# --------------------------------------------------------------- seg_m5 ---
def seg_m5():
    """Marula Approach. The land opens out toward town: the old marula dropping
    fruit, the tree the cubs were hiding under, and the road sign for Marula."""
    g = base("seg_m5", 71)
    road(g, [(14, 23), (14, 11), (13, 11), (13, 0)])
    g.landmark(8, 12, "lm_marula")
    tall(g, 6, 18, 3, 3); tall(g, 21, 5, 3, 3); tall(g, 6, 5, 3, 2); tall(g, 21, 17, 2, 2)
    pond(g, 21, 11, 2, 2)
    clump(g, 5, 9, 2); clump(g, 22, 21, 2); clump(g, 9, 3, 2); clump(g, 18, 8, 2, "^", 1)
    patch(g, 9, 14, 1, 1)
    flowers(g, 12, (3, 2, 24, 21))
    g.person(16, 3, "!", "seg_m5:7,4")     # the road sign
    g.person(11, 16, "R", "seg_m5:5,8")    # Herder Otto
    g.person(19, 8, "R", "seg_m5:11,8")    # Ranger Fen
    g.person(6, 11, "R", "seg_m5:3,10")    # under the marula roots
    g.set(4, 17, "⁃"); g.set(17, 14, "⁂"); g.set(10, 7, "¡")
    g.land = (15, 21)
    return finish(g, [
        (7, 13, "sav_m5_marula", "treats", 3),       # under the marula
    ])


# ---------------------------------------------------------------- town2 ---
def town2():
    """Marula Town, the first arena, built against a kopje. The guard stands in
    the north gate, so the road on to the Fen goes through the gym - the same
    rule as before. Zuri waits beside the arena. Hearthside's latched gate is on
    the west road, for Champions only."""
    g = base("town2", 83)
    g.rect(0, 0, W - 1, 2, "T")                          # the north edge: a town wall of trees
    g.set(13, 0, "."); g.set(13, 1, "."); g.set(13, 2, ".")
    g.door(13, 0, "n", "route2", 7, 14)
    g.set(13, 3, "X"); g.allow_block.add("13,3")
    g.set(12, 3, "T"); g.set(14, 3, "T")
    road(g, [(13, 4), (13, 23)])
    g.rect(7, 8, 20, 14, ".")                          # the square
    road(g, [(1, 11), (7, 11)])
    g.door(0, 11, "e", "hearthgate", 7, 8, req="champion",
           reqMsg="🏡 A breeder's gate, latched. \"Hearthside is for Champions — folks who've met enough wild animals to think properly about the tame ones. Come back after the Citadel.\"")
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    g.set(17, 6, "Y")                                  # the arena
    g.set(8, 9, "C"); g.set(19, 13, "M"); g.set(5, 17, "H"); g.set(22, 17, "H")
    for x, y in ((11, 5), (16, 5), (7, 8), (20, 8), (7, 14), (20, 14)):
        g.set(x, y, "¦")
    g.landmark(23, 5, "lm_kopje")
    clump(g, 23, 5, 3, "^", 1)
    pond(g, 21, 19, 2, 2)
    clump(g, 5, 5, 2); clump(g, 8, 20, 2)
    flowers(g, 14, (3, 4, 24, 21))
    g.person(11, 7, "!", "town2:9,3")      # MARULA TOWN - first arena
    g.person(10, 20, "!", "town2:8,12")    # a sign worn past reading - it always was
    g.person(8, 10, "R", "town2:3,8")      # Vet Adaeze, by the care center
    g.person(18, 12, "V", "town2:9,10")    # Trader Osk, by the post
    g.person(16, 7, "R", "town2:13,11")    # Zuri, beside the arena door
    g.land = (13, 21)
    return finish(g, [
        (24, 9, "sav_t2_kopje", "revives", 1),       # up behind the kopje
    ])


def main():
    grids = [town1(), route1(), seg_m1(), seg_m2(), seg_m3(), seg_m4(), seg_m5(), town2()]
    by = {g.key: g for g in grids}
    problems = []
    for g in grids:
        print("\n=== %s (%dx%d) ===" % (g.key, g.w, g.h))
        print(preview(g))
        for p in check(g):
            problems.append("%s: %s" % (g.key, p))
    for a, b in zip(CHAIN, CHAIN[1:]):
        problems += check_seam(by[a], by[b])
    if problems:
        print("\nREFUSING TO WRITE - %d problem(s):" % len(problems))
        for p in problems:
            print("  " + p)
        sys.exit(1)

    links = {}
    for a, b in zip(CHAIN, CHAIN[1:]):
        links.setdefault(a, {})["n"] = {"map": b, "off": 0}
        links.setdefault(b, {})["s"] = {"map": a, "off": 0}
    # Doors in OTHER maps that lead into these ones, re-aimed at the new ground.
    inbound = [
        {"from": "archive", "tile": "7,0", "map": "town1", "x": 26, "y": 12},
        {"from": "shrine_bramwold", "tile": "7,9", "map": "seg_m2", "x": 1, "y": 11},
        {"from": "shrine_myrmedon", "tile": "7,9", "map": "seg_m4", "x": 1, "y": 9},
        {"from": "hearthgate", "tile": "7,9", "map": "town2", "x": 1, "y": 11},
        {"from": "route2", "tile": "7,15", "map": "town2", "x": 13, "y": 1},
    ]
    js = emit_js("savanna", "forge_savanna.py", grids, links, inbound, GEN)
    root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    out = os.path.join(root, "game.part104.jsx")
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        f.write(js)
    print("\nall checks passed - wrote %s" % out)


if __name__ == "__main__":
    main()
