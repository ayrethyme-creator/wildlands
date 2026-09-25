"""The highveld, rebuilt: Dune Town's north gate to Crag Town as one walk.

Run from the repo root:   python design/tools/forge_highveld.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part115.jsx. The landmarks' words and drawings are in game.part114.jsx.

The fifth region rebuilt, 2026-09-25 (Ayr: "Keep going please").

WHAT MAKES IT THE HIGHVELD. High open grassland climbing in steps toward the
crags: the zone's palette draws its "tree" as a boulder, so the edges and the
standing clumps here are outcrops of rock rather than woods, with lone thorn
trees and a watering hole the whole plain comes to.

THE FENCE STORY. The people on these maps tell one story between them, about
a fence and what it does to the animals that meet it. The landmarks here stay
out of it on purpose - they would give its answers away before the people who
tell it do.

ZURI waits at the top of the Highveld Steps, in the one gap through a line of
boulders, and does not move until she is beaten (part84).

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 6   # sixth rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route5", "seg_s1", "seg_s2", "seg_s3", "seg_s4", "town6"]
SEAM = {
    ("route5", "seg_s1"): dict(road=12, L=3, R=3),
    ("seg_s1", "seg_s2"): dict(road=14, L=3, R=2),
    ("seg_s2", "seg_s3"): dict(road=11, L=2, R=3),
    ("seg_s3", "seg_s4"): dict(road=13, L=3, R=3),
    ("seg_s4", "town6"): dict(road=13, L=3, R=3),
}
setup(Region(CHAIN, SEAM, prev="town5", nxt="route6"))   # the alpine (forge_alpine.py) is north


def outcrop(g, cx, cy, n, spread=2):
    """Boulders together - the highveld's 'trees' (its palette draws T as rock)."""
    clump(g, cx, cy, n, "T", spread)


def hills(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


# --------------------------------------------------------------- route5 ---
def route5():
    """The Highveld Steps. Out of Dune Town the ground climbs into open high
    grassland in broad steps, outcrops of rock standing out of the grass. The
    Long Grass Savanna is through the gap to the west, and at the top of the
    steps Zuri waits in a line of boulders."""
    g = base("route5", 401, rocks=0.1)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (12, 11)])
    g.door(0, 11, "e", "savanna", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    for x in range(2, W - 2):                  # the top step: a line of boulders
        g.set(x, 5, "^" if (x * 7) % 4 == 0 else "T")
        if g.rng.random() < 0.45:
            g.set(x, 4, "T")
    g.set(12, 5, "V"); g.cast["12,5"] = "route5:7,1"; g.allow_block.add("12,5")
    g.set(12, 4, "."); g.set(13, 4, "T"); g.set(13, 5, "T")
    g.road_set.discard((13, 4)); g.road_set.discard((13, 5))
    g.landmark(19, 15, "lm_grass_roots")
    tall(g, 6, 16, 3, 2); tall(g, 21, 8, 4, 2); tall(g, 6, 7, 3, 2); tall(g, 21, 20, 3, 1); tall(g, 18, 2, 3, 1)
    outcrop(g, 22, 14, 3); outcrop(g, 5, 20, 2); outcrop(g, 16, 8, 2); hills(g, 7, 2, 2)
    flowers(g, 12, (3, 2, 24, 21))
    signpost(g, 3, 10, "route5:gate")          # -> Long Grass Savanna
    person(g, 7, 9, "R", "route5:4,4")         # Warden Lulu
    person(g, 20, 11, "R", "route5:11,10")     # Herd Guard Obi
    person(g, 9, 18, "R", "route5:9,12")       # Mason Bram, by the stones
    g.set(16, 17, "⁂"); g.set(9, 14, "¡")
    g.land = (13, 21)
    return finish(g, [
        (23, 18, "hv_r5_step", "berries", 3),
        (4, 2, "hv_r5_top", "coins", 180),           # past Zuri, in the far corner
    ])


# --------------------------------------------------------------- seg_s1 ---
def seg_s1():
    """The Acacia Line. A spruit crosses the grassland, and along it a line of
    whistling thorn - the acacia that keeps an army of ants."""
    g = base("seg_s1", 411, rocks=0.1)
    g.rect(0, 12, W - 1, 13, "W")              # the spruit
    for x in range(W):
        if g.rng.random() < 0.3:
            g.set(x, 11 if g.rng.random() < 0.5 else 14, "W")
    road(g, [(12, 23), (12, 16), (14, 16), (14, 0)])
    g.landmark(8, 10, "lm_whistling_thorn")
    for x in (4, 17, 21, 24):                  # the rest of the acacia line: rock and thorn
        g.set(x, 10, "T")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 19, 3, 2); tall(g, 20, 19, 3, 2)
    outcrop(g, 18, 3, 2); outcrop(g, 9, 20, 2); hills(g, 23, 21, 2)
    flowers(g, 12, (3, 2, 24, 21))
    person(g, 5, 8, "R", "seg_s1:1,2")         # "Why the fence kills them specifically"
    person(g, 16, 18, "R", "seg_s1:6,8")       # Beekeeper Kai
    person(g, 18, 8, "R", "seg_s1:10,9")       # "What is being found on the wire"
    person(g, 7, 16, "R", "seg_s1:3,10")       # Haymaker Zev
    person(g, 22, 16, "R", "seg_s1:11,10")     # Scout Otto
    g.set(10, 6, "⁂"); g.set(17, 21, "¡"); g.set(3, 5, "⁅")
    g.land = (13, 21)
    return finish(g, [
        (3, 2, "hv_s1_corner", "treats", 2),
        (24, 9, "hv_s1_spruit", "wakeberry", 1),
    ])


# --------------------------------------------------------------- seg_s2 ---
def seg_s2():
    """Termite Cathedral. The mounds here stand tall enough to name a place
    after - and something has been digging into the biggest of them. The
    Old Kill's shrine is through the rocks to the west."""
    g = base("seg_s2", 421, rocks=0.1)
    road(g, [(14, 23), (14, 14), (11, 14), (11, 0)])
    road(g, [(1, 8), (11, 8)])
    g.door(0, 8, "e", "shrine_sarkoth", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 20, 13, 2, 1)
    g.landmark(20, 12, "lm_aardvark_burrow")
    pond(g, 5, 13, 3, 2)
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 20, 3, 1); tall(g, 21, 19, 3, 2)
    outcrop(g, 17, 3, 2); outcrop(g, 23, 16, 2); outcrop(g, 8, 17, 2); hills(g, 4, 10, 1)
    flowers(g, 12, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_s2:gate")           # -> the Old Kill
    person(g, 16, 5, "R", "seg_s2:6,1")        # Beekeeper Ulla
    person(g, 5, 17, "R", "seg_s2:1,5")        # Haymaker Kai
    person(g, 22, 10, "R", "seg_s2:13,5")      # Scout Zev, by the burrow
    person(g, 17, 18, "R", "seg_s2:6,7")       # Hedgewitch Otto
    person(g, 8, 11, "R", "seg_s2:4,10")       # "Why the fence is there"
    g.set(9, 5, "⁌"); g.set(17, 11, "⁂"); g.set(4, 21, "¡")
    g.land = (15, 21)
    return finish(g, [
        (24, 12, "hv_s2_mound", "antidote", 1),      # behind the burrow
        (4, 3, "hv_s2_rocks", "coins", 190),
    ])


# --------------------------------------------------------------- seg_s3 ---
def seg_s3():
    """The Watering Hole. The whole plain comes to drink here, and leaves its
    dung behind - which is where the dung beetles come in."""
    g = base("seg_s3", 431, rocks=0.1)
    mere(g, 18, 10, 4, 3)                      # the watering hole
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    patch(g, 17, 15, 3, 1)                     # the trampled margin
    g.landmark(19, 15, "lm_dung_beetle")
    tall(g, 6, 4, 3, 2); tall(g, 6, 12, 3, 2); tall(g, 6, 20, 3, 1); tall(g, 21, 20, 3, 1)
    outcrop(g, 22, 4, 2); outcrop(g, 8, 17, 2); hills(g, 23, 17, 2)
    flowers(g, 12, (3, 2, 24, 21))
    person(g, 8, 7, "R", "seg_s3:4,3")         # Beekeeper Esi
    person(g, 22, 13, "R", "seg_s3:9,4")       # Haymaker Ulla, at the water
    person(g, 7, 15, "R", "seg_s3:5,7")        # Scout Kai
    person(g, 16, 18, "R", "seg_s3:7,7")       # "How high the killing strand sits"
    person(g, 16, 4, "R", "seg_s3:9,7")        # Hedgewitch Zev
    g.set(15, 12, "⁂"); g.set(20, 17, "⁂"); g.set(5, 9, "¡")
    g.land = (12, 21)
    return finish(g, [
        (24, 8, "hv_s3_water", "berries", 3),        # the far side of the watering hole
        (4, 21, "hv_s3_south", "treats", 2),
    ])


# --------------------------------------------------------------- seg_s4 ---
def seg_s4():
    """Crag Approach. The grassland breaks up against the crags. A bone lies
    split on a flat rock, dropped from a great height - a bearded vulture's
    anvil. The Unsettled Dust's shrine is up through the rocks to the west."""
    g = base("seg_s4", 441, rocks=0.15)
    road(g, [(13, 23), (13, 15), (14, 15), (14, 8), (13, 8), (13, 0)])
    road(g, [(1, 10), (13, 10)])
    g.door(0, 10, "e", "shrine_velissa", 7, 8)
    g.set(1, 10, "."); g.set(1, 11, "."); g.set(0, 11, "T")
    g.landmark(21, 6, "lm_bone_anvil")
    hills(g, 21, 3, 3); hills(g, 5, 4, 2); hills(g, 22, 18, 3)
    outcrop(g, 19, 9, 3); outcrop(g, 7, 15, 3); outcrop(g, 23, 12, 2)
    tall(g, 6, 7, 3, 1); tall(g, 20, 14, 2, 1); tall(g, 7, 20, 3, 1)
    flowers(g, 8, (3, 2, 24, 21))
    signpost(g, 3, 9, "seg_s4:gate")           # -> the Unsettled Dust
    person(g, 17, 3, "R", "seg_s4:14,1")       # "What the bottom strand is actually for"
    person(g, 9, 13, "R", "seg_s4:3,4")        # Beekeeper Pim
    person(g, 19, 17, "R", "seg_s4:11,4")      # Haymaker Esi
    g.set(10, 6, "⁂"); g.set(17, 20, "¡"); g.set(6, 11, "⁅")
    g.land = (14, 21)
    return finish(g, [
        (24, 8, "hv_s4_crag", "bigberries", 1),      # up among the crags
        (4, 21, "hv_s4_south", "coins", 200),
    ])


# ---------------------------------------------------------------- town6 ---
def town6():
    """Crag Town, the fifth arena: "every stone in these walls came out of the
    hill behind you." Stone houses against the crag, goat pens, cairns - and in
    the rock shelter behind the square, paintings older than the town. The
    guard stands in the north gate: the road on to Frostmere Pass goes through
    the arena."""
    g = base("town6", 451, rocks=0.1)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of rock, one gate
    # Since the alpine was rebuilt (2026-09-25) the gate is a seam onto
    # Frostmere Pass, not a door; everything from row 3 down is as it was.
    g.rect(11, 0, 14, 1, "g")
    road(g, [(13, 0), (13, 0)])                # rows 0-1: the road, 2 wide
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 7, 20, 13, ".")                  # the square
    road(g, [(4, 16), (23, 16)])
    g.landmark(5, 8, "lm_rock_art")
    outcrop(g, 4, 5, 3, 1)                     # the rock shelter the paintings are in
    g.set(18, 5, "Y")                          # the arena
    g.set(9, 5, "C"); g.set(19, 19, "M")
    g.set(23, 5, "H"); g.set(4, 12, "H"); g.set(23, 11, "H"); g.set(8, 20, "H"); g.set(23, 21, "H")
    for x, y in ((7, 7), (20, 7), (7, 13), (20, 13), (11, 18), (16, 18)):
        g.set(x, y, "¦")
    hills(g, 24, 15, 1)
    flowers(g, 10, (3, 4, 24, 21))
    signpost(g, 15, 3, "town6:gate")           # -> Frostmere Pass, through the arena
    person(g, 12, 21, "!", "town6:9,3")        # CRAG TOWN - you read it coming in
    person(g, 5, 17, "!", "town6:8,12")        # a sign worn past reading - it always was
    person(g, 9, 11, "R", "town6:3,8")         # Quarryman Pell
    person(g, 17, 20, "V", "town6:9,10")       # Goatherd Elis, by the goats
    pieces(g, [
        (15, 21, "goats"), (20, 22, "goats"), (5, 20, "goats"),
        (10, 9, "cairn"), (17, 12, "cairn"), (22, 8, "cairn"),
        (16, 9, "stall"), (10, 12, "stall"), (18, 17, "well"),
        (12, 10, "bench"), (6, 14, "crates"), (9, 17, "garden"), (10, 17, "garden"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 13, "hv_t6_crag", "revives", 1),
    ])


def main():
    grids = [route5(), seg_s1(), seg_s2(), seg_s3(), seg_s4(), town6()]
    inbound = [
        {"from": "savanna", "tile": "7,9", "map": "route5", "x": 1, "y": 11},
        {"from": "shrine_sarkoth", "tile": "7,9", "map": "seg_s2", "x": 1, "y": 8},
        {"from": "shrine_velissa", "tile": "7,9", "map": "seg_s4", "x": 1, "y": 10},
        {"from": "route6", "tile": "7,15", "map": "town6", "x": 13, "y": 1},
    ]
    run("highveld", "forge_highveld.py", grids, inbound, GEN, "game.part115.jsx")


if __name__ == "__main__":
    main()
