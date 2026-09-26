"""The volcanic coast, rebuilt: Frost Town's north gate to Cinder Town.

Run from the repo root:   python design/tools/forge_volcanic.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part119.jsx. The landmarks' words and drawings are in game.part118.jsx.

The seventh region rebuilt, 2026-09-25 (Ayr: "Please just do the rest of the
maps needed").

WHAT MAKES IT VOLCANIC. Ash for ground and burnt rust-red scrub for grass;
rock outcrops and cones for its edges (the palette draws both its tree and its
rock as a volcano); fields of black glass, steaming vents, a lava tube, and
water only in hot pools. Flowers are few - this palette draws a flower as a
flame.

THE RABBIT STORY. The people here tell a story about rabbits and the grass
they need; the landmarks stay out of it.

ZURI waits at the top of the Cinder Flats for the last time on the road, in
the one gap through a line of cones, and does not move until she is beaten.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 8   # eighth rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route7", "seg_v1", "seg_v2", "seg_v3", "seg_v4", "seg_v5", "town8"]
SEAM = {
    ("route7", "seg_v1"): dict(road=12, L=3, R=3),
    ("seg_v1", "seg_v2"): dict(road=14, L=3, R=2),
    ("seg_v2", "seg_v3"): dict(road=11, L=2, R=3),
    ("seg_v3", "seg_v4"): dict(road=13, L=3, R=3),
    ("seg_v4", "seg_v5"): dict(road=12, L=2, R=3),
    ("seg_v5", "town8"): dict(road=13, L=3, R=3),
}
setup(Region(CHAIN, SEAM, prev="town7", nxt="route8"))   # the grove (forge_grove.py) is north


def cones(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def rock(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


def ash(g, cx, cy, rx, ry):
    """Bare ash - nothing has grown back here yet."""
    patch(g, cx, cy, rx, ry)


# --------------------------------------------------------------- route7 ---
def route7():
    """The Cinder Flats. Out of the snow and down into ash and burnt scrub,
    new ground from the last eruption with the first things growing on it.
    At the north end Zuri waits in a line of cones."""
    g = base("route7", 601, rocks=0.12)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    ash(g, 6, 17, 3, 2); ash(g, 20, 9, 3, 2); ash(g, 19, 19, 2, 1)
    for x in range(2, W - 2):                  # the line of cones
        g.set(x, 5, "^" if (x * 3) % 4 == 0 else "T")
        if g.rng.random() < 0.4:
            g.set(x, 4, "^")
    g.set(12, 5, "V"); g.cast["12,5"] = "route7:7,1"; g.allow_block.add("12,5")
    g.set(12, 4, "."); g.set(13, 4, "T"); g.set(13, 5, "T")
    g.road_set.discard((13, 4)); g.road_set.discard((13, 5))
    g.landmark(19, 12, "lm_first_plants")
    tall(g, 6, 9, 3, 2); tall(g, 21, 16, 3, 2); tall(g, 6, 21, 2, 1); tall(g, 18, 2, 3, 1)
    cones(g, 23, 12, 2); rock(g, 5, 13, 2); rock(g, 7, 2, 2)
    flowers(g, 3, (3, 2, 24, 21))
    person(g, 7, 7, "R", "route7:4,4")         # Ash Walker Emb
    person(g, 20, 7, "R", "route7:11,10")      # Cinder Kip
    person(g, 9, 19, "R", "route7:2,13")       # Herder Tefo Molefe
    g.set(16, 17, "⁂"); g.set(9, 14, "¡"); g.set(21, 3, "⁌")
    g.land = (13, 21)
    return finish(g, [
        (23, 18, "vol_r7_ash", "berries", 3),
        (4, 2, "vol_r7_top", "coins", 230),          # past Zuri, in the far corner
    ])


# --------------------------------------------------------------- seg_v1 ---
def seg_v1():
    """Ash Fall. A slope buried by the last eruption's ash - and already
    greening, in lines, where something underneath has been turning it over."""
    g = base("seg_v1", 611, rocks=0.1)
    road(g, [(12, 23), (12, 14), (14, 14), (14, 0)])
    ash(g, 19, 7, 4, 3); ash(g, 6, 18, 3, 2)
    g.landmark(19, 9, "lm_gopher_mounds")
    tall(g, 6, 5, 3, 2); tall(g, 21, 18, 3, 2); tall(g, 6, 12, 2, 1)
    cones(g, 9, 21, 2); rock(g, 23, 13, 2); rock(g, 4, 9, 1)
    flowers(g, 3, (3, 2, 24, 21))
    person(g, 16, 3, "R", "seg_v1:6,1")        # Geologist Fen
    person(g, 22, 4, "R", "seg_v1:9,1")        # "Where else these rabbits live"
    person(g, 5, 15, "R", "seg_v1:1,5")        # Ashwalker Uzo
    person(g, 20, 15, "R", "seg_v1:13,5")      # Smith Jax
    person(g, 9, 9, "R", "seg_v1:6,7")         # Ventwatcher Ade
    g.set(17, 12, "⁂"); g.set(8, 5, "¡")
    g.land = (13, 21)
    return finish(g, [
        (23, 9, "vol_v1_mounds", "treats", 2),
        (4, 21, "vol_v1_south", "wakeberry", 1),
    ])


# --------------------------------------------------------------- seg_v2 ---
def seg_v2():
    """The Obsidian Field. Black glass where a lava flow cooled too fast to
    crystallise - and the flakes of people who came here to make blades."""
    g = base("seg_v2", 621, rocks=0.12)
    road(g, [(14, 23), (14, 12), (11, 12), (11, 0)])
    ash(g, 19, 7, 4, 3); ash(g, 6, 16, 3, 3)
    rock(g, 18, 5, 4, 2); rock(g, 22, 9, 3, 1); rock(g, 5, 18, 3, 1)   # the glass
    g.landmark(20, 8, "lm_obsidian")
    tall(g, 6, 5, 3, 2); tall(g, 21, 18, 3, 2); tall(g, 7, 11, 2, 1)
    cones(g, 23, 21, 2); cones(g, 4, 21, 1)
    flowers(g, 3, (3, 2, 24, 21))
    person(g, 8, 8, "R", "seg_v2:3,2")         # "Why the grass is burned"
    person(g, 17, 10, "R", "seg_v2:4,3")       # Geologist Otto, at the glass
    person(g, 16, 3, "R", "seg_v2:9,4")        # Ashwalker Fen
    person(g, 9, 16, "R", "seg_v2:5,7")        # Smith Uzo
    person(g, 18, 16, "R", "seg_v2:9,7")       # Ventwatcher Jax
    g.set(9, 3, "⁂"); g.set(17, 20, "¡")
    g.land = (15, 21)
    return finish(g, [
        (23, 5, "vol_v2_glass", "antidote", 1),      # out among the glass
        (4, 12, "vol_v2_west", "coins", 240),
    ])


# --------------------------------------------------------------- seg_v3 ---
def seg_v3():
    """Steam Vents. The ground breathes: vents hissing, hot pools stained every
    colour by what lives in them. The Banked Hearth's shrine is to the west."""
    g = base("seg_v3", 631, rocks=0.1)
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_pyrelynx", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    ash(g, 20, 13, 4, 3)
    pond(g, 18, 11, 2, 1); pond(g, 22, 15, 2, 1)            # the hot pools
    g.landmark(20, 14, "lm_hot_vent")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 21, 21, 2, 1)
    cones(g, 8, 12, 2); rock(g, 17, 3, 2); rock(g, 24, 9, 2)
    flowers(g, 3, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_v3:gate")           # -> the Banked Hearth
    person(g, 7, 10, "R", "seg_v3:3,4")        # Geologist Zev
    person(g, 17, 5, "R", "seg_v3:11,4")       # Ashwalker Otto
    person(g, 16, 17, "R", "seg_v3:9,5")       # "What the rabbits need from the grass"
    g.set(9, 5, "⁌"); g.set(16, 11, "⁂"); g.set(5, 20, "¡")
    g.land = (12, 21)
    return finish(g, [
        (24, 12, "vol_v3_vents", "bigberries", 1),
        (4, 3, "vol_v3_corner", "treats", 2),
    ])


# --------------------------------------------------------------- seg_v4 ---
def seg_v4():
    """The Lava Tube. A lava flow crusted over and the molten rock inside ran
    out, leaving a tunnel. Its roof has fallen in here, and the skylight shows
    the way down."""
    g = base("seg_v4", 641, rocks=0.12)
    road(g, [(13, 23), (13, 16), (12, 16), (12, 0)])
    # the line of the tube under the ground: a ridge of rock with the one
    # collapsed skylight in it
    for x in range(15, 26):
        g.set(x, 9, "^")
    g.set(20, 10, ".")
    g.landmark(20, 9, "lm_lava_tube")
    ash(g, 6, 17, 3, 2); ash(g, 20, 17, 3, 2)
    tall(g, 6, 5, 3, 2); tall(g, 20, 4, 3, 2); tall(g, 6, 11, 2, 1); tall(g, 21, 21, 2, 1)
    cones(g, 8, 21, 2); rock(g, 4, 14, 1); cones(g, 23, 13, 2)
    flowers(g, 3, (3, 2, 24, 21))
    person(g, 16, 4, "R", "seg_v4:6,2")        # Geologist Kai
    person(g, 8, 8, "R", "seg_v4:1,4")         # Ashwalker Zev
    person(g, 22, 11, "R", "seg_v4:6,4")       # "What the mountain used to look like"
    person(g, 8, 15, "R", "seg_v4:14,4")       # Smith Otto
    person(g, 18, 19, "R", "seg_v4:6,6")       # Ventwatcher Fen
    g.set(10, 3, "⁂"); g.set(17, 14, "¡")
    g.land = (14, 21)
    return finish(g, [
        (24, 11, "vol_v4_tube", "revives", 1),       # by the skylight
        (4, 21, "vol_v4_south", "coins", 250),
    ])


# --------------------------------------------------------------- seg_v5 ---
def seg_v5():
    """Cinder Approach. Warm ground under the ash near town - warm enough that
    a bird buries its eggs in it and leaves the volcano to hatch them."""
    g = base("seg_v5", 651, rocks=0.1)
    road(g, [(12, 23), (12, 14), (13, 14), (13, 0)])
    ash(g, 20, 12, 3, 2)
    g.landmark(20, 12, "lm_maleo")
    pond(g, 6, 9, 2, 1)
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 21, 20, 2, 1)
    cones(g, 23, 16, 2); rock(g, 5, 14, 2); rock(g, 17, 3, 1)
    flowers(g, 3, (3, 2, 24, 21))
    person(g, 9, 12, "R", "seg_v5:5,8")        # Geologist Ulla
    person(g, 17, 15, "R", "seg_v5:6,8")       # "Which ground matters most"
    person(g, 17, 5, "R", "seg_v5:11,8")       # Ashwalker Kai
    g.set(9, 3, "⁌"); g.set(16, 19, "⁂"); g.set(5, 21, "¡")
    g.land = (13, 21)
    return finish(g, [
        (23, 11, "vol_v5_warm", "berries", 3),
        (4, 3, "vol_v5_corner", "treats", 2),
    ])


# ---------------------------------------------------------------- town8 ---
def town8():
    """Cinder Town, the seventh arena: "we live on a volcano on purpose. The
    soil is worth it." Terraced gardens on black soil, a forge, a hot pool.
    Emberglass Shore is through the east gate. The guard stands in the north
    gate: the road on to Gloamwood goes through the arena."""
    g = base("town8", 661, rocks=0.05)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of cones, one gate
    # Since the grove was rebuilt (2026-09-25) the gate is a seam onto
    # Gloamwood, not a door; everything from row 3 down is as it was.
    g.rect(11, 0, 14, 1, "g")
    road(g, [(13, 0), (13, 0)])                # rows 0-1: the road, 2 wide
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 7, 20, 13, ".")                  # the square
    road(g, [(20, 11), (25, 11)])
    g.door(W - 1, 11, "e", "shore", 1, 11)
    g.set(W - 1, 12, "T")
    road(g, [(4, 16), (23, 16)])
    pond(g, 10, 9, 2, 1)                       # the hot pool
    g.landmark(6, 20, "lm_volcanic_soil")
    g.set(18, 5, "Y")                          # the arena
    g.set(9, 5, "C"); g.set(19, 19, "M")
    g.set(4, 5, "H"); g.set(23, 5, "H"); g.set(4, 12, "H"); g.set(23, 14, "H"); g.set(10, 20, "H"); g.set(23, 21, "H")
    for x, y in ((7, 7), (20, 7), (7, 13), (20, 13), (11, 18), (16, 18)):
        g.set(x, y, "¦")
    flowers(g, 3, (3, 4, 24, 21))
    signpost(g, 15, 3, "town8:gate")           # -> Gloamwood, through the arena
    signpost(g, 24, 10, "town8:gate2")         # -> Emberglass Shore
    person(g, 12, 21, "!", "town8:9,3")        # CINDER TOWN - you read it coming in
    person(g, 5, 17, "!", "town8:8,12")        # a sign worn past reading - it always was
    person(g, 9, 12, "R", "town8:3,8")         # Ventwatcher Ash, by the pool
    person(g, 17, 14, "V", "town8:9,10")       # Smith Corra, by the forge
    pieces(g, [
        (4, 18, "garden"), (5, 18, "garden"), (4, 19, "garden"), (7, 22, "garden"), (8, 22, "garden"),
        (16, 13, "forge"), (17, 9, "stall"), (15, 9, "stall"),
        (8, 11, "bench"), (21, 18, "crates"), (5, 9, "woodpile"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 19, "vol_t8_gardens", "revives", 1),
    ])


def main():
    grids = [route7(), seg_v1(), seg_v2(), seg_v3(), seg_v4(), seg_v5(), town8()]
    inbound = [
        {"from": "shrine_pyrelynx", "tile": "7,9", "map": "seg_v3", "x": 1, "y": 8},
        {"from": "route8", "tile": "7,15", "map": "town8", "x": 13, "y": 1},
    ]
    run("volcanic", "forge_volcanic.py", grids, inbound, GEN, "game.part119.jsx")


if __name__ == "__main__":
    main()
