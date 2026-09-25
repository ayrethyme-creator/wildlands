"""The alpine, rebuilt: Crag Town's north gate to Frost Town as one walk.

Run from the repo root:   python design/tools/forge_alpine.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part117.jsx. The landmarks' words and drawings are in game.part116.jsx.

The sixth region rebuilt, 2026-09-25 (Ayr: "Continue").

WHAT MAKES IT ALPINE. Snow for ground, conifers in dark stands, peaks for
rock (the palette draws '^' as a snowy peak), scree, a glacier's meltwater
lake, and the snow that always falls here now falls properly (part88).

THE FLOCK STORY. The people on these maps tell one story between them, about
the flocks and what comes for them. The landmarks stay out of it, so as not
to give its answers away before the people who tell it do.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 7   # seventh rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route6", "seg_a1", "seg_a2", "seg_a3", "town7"]
SEAM = {
    ("route6", "seg_a1"): dict(road=12, L=3, R=3),
    ("seg_a1", "seg_a2"): dict(road=14, L=3, R=2),
    ("seg_a2", "seg_a3"): dict(road=11, L=2, R=3),
    ("seg_a3", "town7"): dict(road=13, L=3, R=3),
}
setup(Region(CHAIN, SEAM, prev="town6"))


def stand(g, cx, cy, n, spread=2):
    """A stand of conifers."""
    clump(g, cx, cy, n, "T", spread)


def peaks(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


# --------------------------------------------------------------- route6 ---
def route6():
    """Frostmere Pass. Out of Crag Town the road climbs into the snow. At the
    treeline the last firs grow bent and low. Hoarfrost Tundra is west and
    the trail up Storm Peak east."""
    g = base("route6", 501, rocks=0.12)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (25, 11)])
    g.door(0, 11, "e", "tundra", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    g.door(W - 1, 11, "e", "peak", 7, 14)
    g.set(W - 2, 11, "."); g.set(W - 2, 12, "."); g.set(W - 1, 12, "T")
    g.landmark(19, 6, "lm_krummholz")
    mere(g, 6, 18, 2, 1)
    tall(g, 6, 6, 3, 2); tall(g, 21, 16, 3, 2); tall(g, 21, 3, 2, 1); tall(g, 6, 14, 2, 1)
    stand(g, 22, 20, 3); stand(g, 16, 7, 2); stand(g, 8, 21, 2)
    peaks(g, 23, 7, 2); peaks(g, 4, 3, 2)
    flowers(g, 8, (3, 2, 24, 21))
    signpost(g, 3, 10, "route6:gate")          # -> Hoarfrost Tundra
    signpost(g, 24, 10, "route6:gate2")        # -> Storm Peak
    person(g, 8, 8, "R", "route6:4,4")         # Powder Nell
    person(g, 20, 13, "R", "route6:11,10")     # Ridge Sven
    person(g, 9, 17, "R", "route6:6,12")       # Ilse Brunner
    g.set(16, 17, "⁂"); g.set(17, 3, "¡")
    g.land = (13, 21)
    return finish(g, [
        (23, 4, "alp_r6_trees", "berries", 3),       # up among the bent firs
        (4, 20, "alp_r6_tarn", "coins", 210),
    ])


# --------------------------------------------------------------- seg_a1 ---
def seg_a1():
    """Scree Slope. Loose rock off the peaks, all the way down to the road -
    and among it the hay piles a pika has been making all summer. The Folded
    Dusk's shrine is under the crag to the west."""
    g = base("seg_a1", 511, rocks=0.15)
    road(g, [(12, 23), (12, 14), (14, 14), (14, 0)])
    road(g, [(1, 8), (14, 8)])
    g.door(0, 8, "e", "shrine_nycterion", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 20, 5, 4, 2)                      # the scree itself, bare
    g.landmark(20, 6, "lm_pika")
    peaks(g, 18, 3, 3); peaks(g, 23, 4, 3); peaks(g, 5, 4, 2); peaks(g, 22, 13, 2)
    tall(g, 6, 13, 3, 2); tall(g, 20, 18, 3, 2); tall(g, 6, 20, 2, 1)
    stand(g, 9, 18, 2); stand(g, 24, 20, 2); stand(g, 17, 11, 2)
    flowers(g, 8, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_a1:gate")           # -> the Folded Dusk
    person(g, 6, 10, "R", "seg_a1:1,1")        # "When it happens"
    person(g, 9, 4, "R", "seg_a1:3,1")         # Climber Ade
    person(g, 17, 3, "R", "seg_a1:11,1")       # Glaciologist Pim
    person(g, 8, 16, "R", "seg_a1:3,3")        # Shepherd Esi
    person(g, 22, 9, "R", "seg_a1:11,3")       # Cairnbuilder Ulla
    person(g, 17, 19, "R", "seg_a1:8,7")       # "What is actually being lost"
    g.set(10, 6, "⁌"); g.set(16, 16, "⁂"); g.set(5, 17, "¡")
    g.land = (13, 21)
    return finish(g, [
        (24, 8, "alp_a1_scree", "wakeberry", 1),     # up the scree
        (4, 21, "alp_a1_south", "treats", 2),
    ])


# --------------------------------------------------------------- seg_a2 ---
def seg_a2():
    """Glacier Tongue. The glacier used to come down this valley. Now it ends
    in a meltwater lake well up the slope, and a line of marker posts shows
    where its edge was, year by year."""
    g = base("seg_a2", 521, rocks=0.12)
    peaks(g, 19, 3, 4, 2); peaks(g, 23, 5, 3); peaks(g, 15, 2, 2)
    mere(g, 19, 9, 4, 2)                       # the meltwater lake
    g.rect(21, 12, 22, H - 2, "W")             # and the stream out of it
    road(g, [(14, 23), (14, 15), (11, 15), (11, 0)])
    g.landmark(17, 13, "lm_glacier_posts")
    for x, y in ((17, 17), (17, 20)):          # older posts, further down
        g.set(x, y, "¡")
    tall(g, 6, 5, 3, 2); tall(g, 6, 17, 3, 2); tall(g, 18, 21, 2, 1)
    stand(g, 5, 11, 3); stand(g, 8, 21, 2); stand(g, 25, 18, 2)
    flowers(g, 8, (3, 2, 24, 21))
    person(g, 24, 13, "R", "seg_a2:12,1")      # "Why nobody knows what to do"
    person(g, 8, 8, "R", "seg_a2:6,8")         # Climber Jax
    person(g, 6, 14, "R", "seg_a2:1,10")       # "What happened last time they were shot"
    person(g, 9, 19, "R", "seg_a2:3,10")       # Glaciologist Ade
    person(g, 17, 18, "R", "seg_a2:11,10")     # Shepherd Pim
    g.set(9, 3, "⁂")
    g.land = (15, 21)
    return finish(g, [
        (24, 9, "alp_a2_lake", "antidote", 1),       # the far shore of the meltwater lake
        (4, 3, "alp_a2_corner", "coins", 220),
    ])


# --------------------------------------------------------------- seg_a3 ---
def seg_a3():
    """Frost Approach. Deep snow on the last stretch before town - and under
    it, a whole world keeping warm. The Kept Winter's shrine is through the
    firs to the west."""
    g = base("seg_a3", 531, rocks=0.1)
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_rimehorn", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    g.landmark(20, 14, "lm_under_snow")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 20, 19, 3, 2); tall(g, 6, 17, 2, 1)
    stand(g, 8, 12, 3); stand(g, 17, 3, 2); stand(g, 23, 11, 2); stand(g, 5, 21, 2)
    peaks(g, 24, 16, 2)
    flowers(g, 8, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_a3:gate")           # -> the Kept Winter
    person(g, 16, 4, "R", "seg_a3:6,1")        # Climber Uzo
    person(g, 5, 11, "R", "seg_a3:1,5")        # Glaciologist Jax
    person(g, 18, 11, "R", "seg_a3:6,5")       # "What the neighbouring valley does"
    person(g, 22, 8, "R", "seg_a3:13,5")       # Shepherd Ade
    person(g, 7, 19, "R", "seg_a3:6,7")        # Cairnbuilder Pim
    g.set(9, 5, "⁌"); g.set(16, 16, "⁂"); g.set(17, 20, "¡")
    g.land = (12, 21)
    return finish(g, [
        (23, 15, "alp_a3_drift", "bigberries", 1),   # in the drift by the landmark
        (4, 3, "alp_a3_firs", "treats", 2),
    ])


# ---------------------------------------------------------------- town7 ---
def town7():
    """Frost Town, the sixth arena: "the hot springs are free. The clinic is
    free. The advice is free." The springs steam in the middle of town, with
    woodpiles stacked by every house and sleds left at the doors. The guard
    stands in the north gate: the road on to the Cinder Flats goes through the
    arena."""
    g = base("town7", 541, rocks=0.05)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of firs, one gate
    g.door(13, 0, "n", "route7", 7, 14)
    g.set(13, 1, ".")
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 7, 20, 13, ".")                  # the square
    mere(g, 17, 10, 3, 2, 0.25)                # the hot springs
    road(g, [(4, 16), (23, 16)])
    g.landmark(16, 12, "lm_hot_spring")
    g.set(18, 5, "Y")                          # the arena
    g.set(8, 5, "C"); g.set(19, 19, "M")
    g.set(4, 5, "H"); g.set(23, 5, "H"); g.set(4, 12, "H"); g.set(23, 12, "H"); g.set(8, 20, "H"); g.set(23, 21, "H")
    for x, y in ((7, 7), (20, 7), (7, 13), (20, 13), (11, 18), (16, 18)):
        g.set(x, y, "¦")
    stand(g, 24, 8, 2); stand(g, 4, 20, 2)
    flowers(g, 6, (3, 4, 24, 21))
    signpost(g, 15, 3, "town7:gate")           # -> the Cinder Flats, through the arena
    person(g, 12, 21, "!", "town7:9,3")        # FROST TOWN - you read it coming in
    person(g, 5, 17, "!", "town7:8,12")        # a sign worn past reading - it always was
    person(g, 9, 10, "R", "town7:3,8")         # Glaciologist Vend
    person(g, 17, 14, "V", "town7:9,10")       # Knitter Halla, by the springs
    pieces(g, [
        (5, 7, "woodpile"), (22, 7, "woodpile"), (5, 14, "woodpile"), (22, 14, "woodpile"), (10, 21, "woodpile"),
        (9, 8, "sled"), (20, 18, "sled"),
        (10, 12, "stall"), (14, 9, "bench"), (19, 9, "bench"), (6, 18, "crates"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 15, "alp_t7_firs", "revives", 1),
    ])


def main():
    grids = [route6(), seg_a1(), seg_a2(), seg_a3(), town7()]
    inbound = [
        {"from": "tundra", "tile": "7,9", "map": "route6", "x": 1, "y": 11},
        {"from": "peak", "tile": "7,15", "map": "route6", "x": W - 2, "y": 11},
        {"from": "shrine_nycterion", "tile": "7,9", "map": "seg_a1", "x": 1, "y": 8},
        {"from": "shrine_rimehorn", "tile": "7,9", "map": "seg_a3", "x": 1, "y": 8},
        {"from": "route7", "tile": "7,15", "map": "town7", "x": 13, "y": 1},
    ]
    run("alpine", "forge_alpine.py", grids, inbound, GEN, "game.part117.jsx")


if __name__ == "__main__":
    main()
