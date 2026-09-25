"""The jungle, rebuilt: Delta Town's north gate to Canopy Town as one walk.

Run from the repo root:   python design/tools/forge_jungle.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part111.jsx. The landmarks' words and drawings are in game.part110.jsx.

The third region rebuilt, 2026-09-25 (Ayr: "Please continue with the maps").
Same rules as the savanna and the wetland: ground with dirt roads, seams wide
open, no walls, a landmark and pouches on every map, a signpost at every
doorway, the town full of things.

WHAT MAKES IT A JUNGLE. The palms stand in groves rather than lone clumps,
the undergrowth - the long grass - is thick and everywhere, and water runs
through it in creeks rather than lying in meres. The zone's palette draws the
"tree" as a palm.

ZURI. She waits at the north end of Canopy Deep, as she did on the Acacia
Trail, in the one gap through a line of fallen trunks and buttress roots, and
does not move until she is beaten (part84; beaten, the road is open).

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, mere, tall, reeds,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 4   # fourth rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route3", "seg_j1", "seg_j2", "seg_j3", "town4"]
SEAM = {
    ("route3", "seg_j1"): dict(road=12, L=3, R=3),
    ("seg_j1", "seg_j2"): dict(road=14, L=3, R=2),
    ("seg_j2", "seg_j3"): dict(road=11, L=2, R=3),
    ("seg_j3", "town4"): dict(road=13, L=3, R=3),
}
setup(Region(CHAIN, SEAM, prev="town3"))


def grove(g, cx, cy, n, spread=2):
    """A stand of palms - the jungle's trees come in groves, not ones and twos."""
    clump(g, cx, cy, n, "T", spread)


def creek(g, pts):
    """A creek: a winding line of water, one tile wide, laid BEFORE the roads so
    a road that meets it crosses it."""
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        for y in range(min(y0, y1), max(y0, y1) + 1):
            for x in range(min(x0, x1), max(x0, x1) + 1):
                if 0 <= x < W and 1 <= y < H - 1:
                    g.set(x, y, "W")


# --------------------------------------------------------------- route3 ---
def route3():
    """Canopy Deep. Out of Delta Town's gate and straight into the forest: palm
    groves, thick undergrowth, a creek, and a strangler fig that has swallowed
    the tree it grew on. A trail crosses east and west - the Emerald Canopy Walk
    one way, the Whispering Cave the other - and at the north end Zuri waits."""
    g = base("route3", 203, rocks=0.05)
    creek(g, [(W - 1, 17), (19, 17), (19, 20), (4, 20)])
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (25, 11)])
    g.door(0, 11, "e", "canopywalk", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    g.door(W - 1, 11, "e", "cave1", 14, 10)
    g.set(W - 2, 11, "."); g.set(W - 2, 12, "."); g.set(W - 1, 12, "T")
    # the line of fallen trunks and roots across the north, one gap, Zuri in it
    for x in range(2, W - 2):
        g.set(x, 5, "^" if (x * 5) % 3 == 0 else "T")
        if g.rng.random() < 0.5:
            g.set(x, 4, "T")
    g.set(12, 5, "V"); g.cast["12,5"] = "route3:7,1"; g.allow_block.add("12,5")
    g.set(12, 4, "."); g.set(13, 4, "T"); g.set(13, 5, "T")
    g.road_set.discard((13, 4)); g.road_set.discard((13, 5))
    g.landmark(18, 15, "lm_strangler_fig")
    tall(g, 6, 16, 3, 2); tall(g, 21, 7, 4, 2); tall(g, 6, 7, 3, 2); tall(g, 21, 21, 3, 1); tall(g, 8, 2, 3, 1)
    grove(g, 5, 14, 3); grove(g, 22, 14, 3); grove(g, 17, 2, 3); grove(g, 8, 22, 2)
    flowers(g, 12, (3, 2, 24, 21))
    signpost(g, 3, 10, "route3:gate")          # -> Emerald Canopy Walk
    signpost(g, 24, 10, "route3:gate2")        # -> Whispering Cave
    person(g, 7, 17, "R", "route3:2,2")        # Dr. Irene Pepperbourne
    person(g, 6, 9, "R", "route3:4,4")         # Herper Nia
    person(g, 20, 9, "R", "route3:11,10")      # Canopy Kato
    person(g, 16, 18, "R", "route3:3,14")      # Ifeoma Balogun, by the fig
    g.set(9, 14, "⁄"); g.set(17, 13, "⁂"); g.set(24, 16, "¡")
    g.land = (13, 21)
    return finish(g, [
        (22, 18, "jun_r3_creek", "berries", 3),      # over the creek, east
        (4, 2, "jun_r3_ridge", "coins", 130),        # past Zuri, in the far corner
    ])


# --------------------------------------------------------------- seg_j1 ---
def seg_j1():
    """The Vine Curtain. The forest closes in: groves either side, lianas hung
    between them. A leafcutter trail crosses the path, and the Quiet Leaf's
    shrine is through the palms to the west."""
    g = base("seg_j1", 211, rocks=0.05)
    creek(g, [(4, 16), (8, 16), (8, 19)])
    road(g, [(12, 23), (12, 14), (14, 14), (14, 0)])
    road(g, [(1, 9), (14, 9)])
    g.door(0, 9, "e", "shrine_solenn", 7, 8)
    g.set(1, 9, "."); g.set(1, 10, "."); g.set(0, 10, "T")
    patch(g, 18, 16, 2, 1)                     # the ants' cleared trail
    g.landmark(19, 15, "lm_leafcutter")
    tall(g, 6, 5, 3, 2); tall(g, 21, 7, 3, 2); tall(g, 20, 20, 3, 1); tall(g, 5, 13, 2, 1)
    grove(g, 9, 3, 3); grove(g, 23, 12, 3); grove(g, 4, 21, 2); grove(g, 17, 4, 2)
    flowers(g, 10, (3, 2, 24, 21))
    signpost(g, 3, 8, "seg_j1:gate")           # -> the Quiet Leaf
    person(g, 9, 6, "R", "seg_j1:3,1")         # Herper Pim
    person(g, 19, 3, "R", "seg_j1:11,1")       # Canopyist Esi
    person(g, 6, 11, "R", "seg_j1:3,3")        # Mycologist Ulla
    person(g, 22, 17, "R", "seg_j1:4,3")       # Dr. Gladys Kalema-Zikusoka
    person(g, 17, 11, "R", "seg_j1:14,3")      # "Why they were cleared"
    person(g, 9, 21, "R", "seg_j1:1,10")       # "What came after"
    g.set(10, 12, "⁅"); g.set(16, 20, "⁂"); g.set(5, 18, "¡")
    g.land = (13, 21)
    return finish(g, [
        (4, 4, "jun_j1_grove", "treats", 2),
        (24, 20, "jun_j1_trail", "wakeberry", 1),
    ])


# --------------------------------------------------------------- seg_j2 ---
def seg_j2():
    """Liana Bridge. A river cuts the forest in two and the road crosses it on a
    bridge of lashed lianas. On the far bank a bromeliad holds its own small
    pond, high in a tree."""
    g = base("seg_j2", 223, rocks=0.05)
    g.rect(0, 12, W - 1, 14, "W")              # the river
    for x in range(W):
        if g.rng.random() < 0.35:
            g.set(x, 11 if g.rng.random() < 0.5 else 15, "W")
    road(g, [(14, 23), (14, 9), (11, 9), (11, 0)])
    g.landmark(8, 9, "lm_bromeliad")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 19, 3, 2); tall(g, 21, 19, 3, 2)
    grove(g, 18, 8, 3); grove(g, 5, 8, 2); grove(g, 9, 17, 3); grove(g, 22, 22, 2)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 23, 3, "R", "seg_j2:13,1")       # "Where the bites actually happened"
    person(g, 7, 6, "R", "seg_j2:3,3")         # Alfred Russel Wallace
    person(g, 16, 16, "R", "seg_j2:6,8")       # Canopyist Pim, at the bridge
    person(g, 6, 17, "R", "seg_j2:3,10")       # Mycologist Esi
    person(g, 9, 21, "R", "seg_j2:4,10")       # "What the snakes were eating"
    person(g, 20, 17, "R", "seg_j2:11,10")     # Tracker Ulla
    g.set(16, 7, "⁄"); g.set(10, 3, "⁂"); g.set(19, 21, "¡")
    g.land = (15, 21)
    return finish(g, [
        (3, 10, "jun_j2_bank", "antidote", 1),       # up the north bank, west
        (24, 16, "jun_j2_south", "coins", 140),
    ])


# --------------------------------------------------------------- seg_j3 ---
def seg_j3():
    """Canopy Approach. The forest opens toward town. A clay bank above the
    creek is where the macaws come down to eat the earth. The Slow Bough's
    shrine is through the palms to the west."""
    g = base("seg_j3", 233, rocks=0.05)
    creek(g, [(W - 1, 14), (20, 14), (20, 17), (15, 17)])
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_verdanmane", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 22, 12, 2, 1)                     # the bare clay
    g.landmark(22, 12, "lm_clay_lick")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 22, 20, 2, 1)
    grove(g, 8, 13, 3); grove(g, 17, 3, 2); grove(g, 4, 21, 2); grove(g, 24, 8, 2)
    flowers(g, 14, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_j3:gate")           # -> the Slow Bough
    person(g, 16, 4, "R", "seg_j3:6,1")        # Herper Jax, near the town gate
    person(g, 7, 10, "R", "seg_j3:3,3")        # Dr. Alan Rabinowitz
    person(g, 5, 15, "R", "seg_j3:1,5")        # Mycologist Pim
    person(g, 17, 20, "R", "seg_j3:13,5")      # Tracker Esi
    person(g, 18, 11, "R", "seg_j3:12,6")      # "How the grain is kept"
    g.set(9, 6, "⁌"); g.set(15, 12, "⁂"); g.set(8, 20, "¡")
    g.land = (12, 21)
    return finish(g, [
        (24, 10, "jun_j3_clay", "bigberries", 1),    # up by the clay lick
        (4, 11, "jun_j3_west", "treats", 2),
    ])


# ---------------------------------------------------------------- town4 ---
def town4():
    """Canopy Town, the third arena: "the walkway is 40 metres up. Do not look
    down; do look up." Built round a kapok that stands over everything, with
    hammocks slung under the palms and a market by the creek. The guard stands
    in the north gate: the road on to the Singing Dunes goes through the arena."""
    g = base("town4", 241, rocks=0)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of palms, one gate
    g.door(13, 0, "n", "route4", 7, 14)
    g.set(13, 1, ".")
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    creek(g, [(0, 17), (6, 17), (6, 20), (2, 20)])
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 6, 20, 11, ".")                  # the square, round the kapok
    road(g, [(4, 14), (23, 14)])
    g.landmark(10, 8, "lm_kapok")
    g.set(18, 5, "Y")                          # the arena
    g.set(8, 5, "C"); g.set(20, 16, "M")
    g.set(4, 5, "H"); g.set(23, 5, "H"); g.set(5, 12, "H"); g.set(23, 11, "H"); g.set(9, 19, "H"); g.set(18, 20, "H")
    for x, y in ((7, 6), (20, 6), (7, 11), (20, 11), (11, 16), (16, 16)):
        g.set(x, y, "¦")
    grove(g, 4, 9, 2); grove(g, 24, 20, 2); grove(g, 22, 2, 1)
    flowers(g, 14, (3, 4, 24, 21))
    signpost(g, 15, 3, "town4:gate")           # -> the Singing Dunes, through the arena
    person(g, 12, 21, "!", "town4:7,3")        # CANOPY TOWN - you read it coming in
    person(g, 5, 15, "!", "town4:6,12")        # a sign worn past reading - it always was
    person(g, 9, 9, "R", "town4:3,8")          # Canopy Ede, under the kapok
    person(g, 17, 13, "V", "town4:9,10")       # Botanist Rui, by the market
    pieces(g, [
        (10, 13, "stall"), (16, 13, "stall"), (18, 17, "stall"),
        (6, 8, "hammock"), (21, 8, "hammock"), (9, 16, "hammock"),
        (11, 10, "bench"), (16, 10, "bench"),
        (22, 16, "crates"), (4, 18, "canoe"),
        (8, 21, "garden"), (7, 21, "garden"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 13, "jun_t4_market", "revives", 1),     # behind the market
    ])


def main():
    grids = [route3(), seg_j1(), seg_j2(), seg_j3(), town4()]
    inbound = [
        {"from": "canopywalk", "tile": "7,9", "map": "route3", "x": 1, "y": 11},
        {"from": "cave1", "tile": "15,10", "map": "route3", "x": W - 2, "y": 11},
        {"from": "shrine_solenn", "tile": "7,9", "map": "seg_j1", "x": 1, "y": 9},
        {"from": "shrine_verdanmane", "tile": "7,9", "map": "seg_j3", "x": 1, "y": 8},
        {"from": "route4", "tile": "7,15", "map": "town4", "x": 13, "y": 1},
    ]
    run("jungle", "forge_jungle.py", grids, inbound, GEN, "game.part111.jsx")


if __name__ == "__main__":
    main()
