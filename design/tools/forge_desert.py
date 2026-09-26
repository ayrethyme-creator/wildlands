"""The desert, rebuilt: Canopy Town's north gate to Dune Town as one walk -
by way of the sea.

Run from the repo root:   python design/tools/forge_desert.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part113.jsx. The landmarks' words and drawings are in game.part112.jsx.

The fourth region rebuilt, 2026-09-25 (Ayr: "Keep going").

THE ROAD GOES THROUGH TIDEWATER COVE. It always did: the Singing Dunes' north
door led to the cove, and the desert path left the cove from its top corner.
So the desert here is a coastal one, like the Namib's Skeleton Coast: dunes
running down to the sea. The cove is a sandy spit with water all round it. The
road arrives from the south and leaves north along a narrow neck of land, and
four piers run out into the water to the boats for the reef, the kelp forest,
the open ocean and the ice floes - which used to be doors on the cove's top
edge, the edge the road now carries on across.

WHAT MAKES IT A DESERT. Dry scrub rather than grass, cactus for its trees,
dunes (the palette draws a rock as a dune), bare sand in washes and riverbeds,
and water only where it is precious: a waterhole, a pool in a dry riverbed,
Dune Town's famous well.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 16  # was 5; 16 since the cove became an oasis (2026-09-26). A save made before this, standing here, is relocated.
CHAIN = ["route4", "tidewater", "seg_d1", "seg_d2", "seg_d3", "seg_d4", "town5"]
SEAM = {
    # The cove and its coast were made an oasis, 2026-09-26: no sea here now.
    ("route4", "tidewater"): dict(road=12, L=3, R=3),
    ("tidewater", "seg_d1"): dict(road=13, L=3, R=3),
    ("seg_d1", "seg_d2"): dict(road=13, L=3, R=3),
    ("seg_d2", "seg_d3"): dict(road=11, L=2, R=3),
    ("seg_d3", "seg_d4"): dict(road=14, L=3, R=2),
    ("seg_d4", "town5"): dict(road=13, L=3, R=3),
}
setup(Region(CHAIN, SEAM, prev="town4", nxt="route5"))   # the highveld (forge_highveld.py) is north


def dunes(g, cx, cy, n, spread=2):
    """A few dunes together (the desert palette draws '^' as a dune)."""
    clump(g, cx, cy, n, "^", spread)


def cacti(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def wash(g, pts):
    """A dry wash or riverbed: bare sand two wide, laid before the road."""
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        for y in range(min(y0, y1), max(y0, y1) + 2):
            for x in range(min(x0, x1), max(x0, x1) + 2):
                if 0 < x < W - 1 and 1 <= y < H - 1 and g.get(x, y) in "gG*":
                    g.set(x, y, ".")


# --------------------------------------------------------------- route4 ---
def route4():
    """The Singing Dunes. Out of Canopy Town's gate the forest gives out into
    dry scrub and dunes, and one great dune that hums when the sand slides.
    The Red Sand Outback is west; the Fossil Rift camp east, for Champions."""
    g = base("route4", 301, rocks=0.1)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (25, 11)])
    g.door(0, 11, "e", "outback", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    g.door(W - 1, 11, "e", "digsite", 1, 6, req="champion",
           reqMsg="🚧 Ranger barricade: \"The Fossil Rift canyon is champions-only. Earn the title first!\"")
    g.set(W - 2, 11, "."); g.set(W - 2, 12, "."); g.set(W - 1, 12, "T")
    patch(g, 20, 5, 4, 2); patch(g, 6, 18, 3, 2)          # open sand
    g.landmark(20, 5, "lm_singing_dune")
    dunes(g, 18, 3, 3); dunes(g, 23, 6, 2); dunes(g, 5, 4, 2); dunes(g, 21, 19, 2)
    tall(g, 6, 7, 3, 2); tall(g, 20, 16, 3, 2); tall(g, 6, 15, 2, 1)
    cacti(g, 9, 20, 3); cacti(g, 23, 14, 2); cacti(g, 16, 7, 2)
    flowers(g, 6, (3, 2, 24, 21))
    signpost(g, 3, 10, "route4:gate")          # -> Red Sand Outback
    signpost(g, 24, 10, "route4:gate2")        # -> Fossil Rift Camp
    person(g, 8, 8, "R", "route4:4,4")         # Dune Runner Riya
    person(g, 18, 18, "R", "route4:11,10")     # Nomad Tarek
    person(g, 15, 3, "R", "route4:12,10")      # Skipper Rosa Delgado, heading for the cove
    g.set(9, 14, "⁂"); g.set(17, 13, "¡")
    g.land = (13, 21)
    return finish(g, [
        (24, 4, "des_r4_dune", "treats", 2),         # round the back of the dune
        (4, 20, "des_r4_scrub", "coins", 150),
    ])


# ------------------------------------------------------------ tidewater ---
def tidewater():
    """Tidewater Oasis. It was a cove on the sea; Ayr, 2026-09-26: "Turn tide
    water cove into a desert oasis." A spring in the dunes: one pool, palms
    standing round it with their feet in the damp, gardens in their shade, and
    the road going round the water rather than through it. The town's clinic
    and shop stay, just outside the ring of palms. (The zone and the palm
    palette are set in game.part134.jsx.)"""
    g = base("tidewater", 312, rocks=0.1)
    road(g, [(12, 23), (12, 18)])
    road(g, [(5, 18), (21, 18)])                # the road round the spring
    road(g, [(5, 4), (5, 18)])
    road(g, [(21, 4), (21, 18)])
    road(g, [(5, 4), (21, 4)])
    road(g, [(13, 0), (13, 4)])
    mere(g, 13, 11, 5, 3, rough=0.25)           # the spring
    for y in range(6, 18):                      # palms with their feet in the damp
        for x in range(7, 21):
            if g.get(x, y) != "g":
                continue
            d = ((x - 13) / 6.0) ** 2 + ((y - 11) / 4.6) ** 2
            if 0.8 < d < 1.4 and g.rng.random() < 0.75:
                g.set(x, y, "T")
    g.landmark(17, 15, "lm_sandgrouse")
    g.set(8, 21, "C"); g.set(17, 21, "M")
    dunes(g, 3, 2, 2); dunes(g, 24, 2, 2); dunes(g, 24, 21, 2); dunes(g, 3, 21, 1)
    tall(g, 9, 2, 3, 1); tall(g, 19, 2, 3, 1); tall(g, 22, 22, 2, 1)
    cacti(g, 25, 16, 1); cacti(g, 2, 7, 1)
    flowers(g, 5, (7, 6, 20, 17))
    person(g, 15, 21, "!", "tidewater:3,2")     # the welcome, as you come in
    person(g, 8, 16, "!", "tidewater:11,1")     # where the water comes from
    person(g, 18, 7, "!", "tidewater:4,7")      # the date palm
    person(g, 9, 7, "!", "tidewater:11,7")      # the oasis rule
    signpost(g, 10, 21, "tidewater:boats")     # no boats here: they sail from Emberglass Shore
    pieces(g, [
        (15, 16, "garden"), (16, 16, "garden"), (10, 16, "garden"),
        (24, 8, "tent"), (24, 14, "jars"), (3, 15, "tent"), (19, 21, "jars"),
    ])
    g.land = (12, 21)
    return finish(g, [
        (25, 6, "des_tw_spit", "revives", 1),        # behind the tents
    ])


# --------------------------------------------------------------- seg_d1 ---
def seg_d1():
    """Scorpion Wash. North of the oasis and up into the dunes, where the fog
    rolls in off the distant sea at dawn and a beetle stands on its head to
    drink it. (Its south end was coast until the cove became an oasis.)"""
    g = base("seg_d1", 321, rocks=0.1)
    road(g, [(13, 23), (13, 0)])
    wash(g, [(3, 9), (10, 9), (10, 5), (20, 5)])
    patch(g, 20, 11, 2, 1)
    g.landmark(20, 10, "lm_fog_beetle")
    dunes(g, 21, 8, 3); dunes(g, 6, 3, 2); dunes(g, 23, 2, 2)
    tall(g, 6, 12, 3, 2); tall(g, 19, 13, 2, 1); tall(g, 18, 2, 2, 1)
    cacti(g, 8, 18, 2); cacti(g, 16, 10, 2)
    flowers(g, 5, (3, 2, 24, 16))
    person(g, 6, 19, "R", "seg_d1:2,1")        # "What the boats are living on"
    person(g, 16, 17, "R", "seg_d1:10,6")      # "How many are coming up dead"
    person(g, 8, 7, "R", "seg_d1:6,8")         # Digger Uzo
    person(g, 17, 3, "R", "seg_d1:3,10")       # Nomad Jax
    person(g, 5, 13, "R", "seg_d1:11,10")      # Prospector Ade
    g.set(11, 12, "⁂"); g.set(7, 14, "¡")
    g.land = (13, 21)
    return finish(g, [
        (23, 11, "des_d1_crest", "wakeberry", 1),    # up on the dune crest
        (3, 3, "des_d1_corner", "treats", 2),
    ])


# --------------------------------------------------------------- seg_d2 ---
def seg_d2():
    """Wind-Carved Arches - which the wind, as it turns out, mostly did not
    carve. A sandstone arch over the old track, rock and dunes, and the Turned
    Earth's shrine through the rocks to the west."""
    g = base("seg_d2", 331, rocks=0.1)
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_bathynax", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 20, 13, 3, 2)
    g.landmark(20, 12, "lm_sandstone_arch")
    dunes(g, 18, 4, 3); dunes(g, 23, 16, 3); dunes(g, 6, 19, 2); dunes(g, 7, 12, 2)
    tall(g, 6, 4, 3, 2); tall(g, 20, 20, 3, 1); tall(g, 21, 7, 2, 1)
    cacti(g, 9, 16, 2); cacti(g, 17, 18, 2); cacti(g, 5, 11, 1)
    flowers(g, 6, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_d2:gate")           # -> the Turned Earth
    person(g, 16, 3, "R", "seg_d2:6,1")        # Digger Fen
    person(g, 8, 11, "R", "seg_d2:2,4")        # "How long a turtle takes to replace"
    person(g, 5, 15, "R", "seg_d2:1,5")        # Nomad Uzo
    person(g, 22, 10, "R", "seg_d2:13,5")      # Prospector Jax, under the arch
    person(g, 16, 20, "R", "seg_d2:6,7")       # Waterfinder Ade
    g.set(9, 5, "⁌"); g.set(16, 15, "⁂"); g.set(8, 21, "¡")
    g.land = (12, 21)
    return finish(g, [
        (23, 14, "des_d2_arch", "antidote", 1),      # the far side of the arch
        (4, 3, "des_d2_rocks", "coins", 160),
    ])


# --------------------------------------------------------------- seg_d3 ---
def seg_d3():
    """The Dry Riverbed. A river that runs perhaps one year in ten, its bed a
    road of bare sand with one pool left in it. A welwitschia on the bank has
    been there longer than any town."""
    g = base("seg_d3", 341, rocks=0.1)
    wash(g, [(3, 19), (9, 19), (9, 12), (18, 12), (18, 6), (24, 6)])
    pond(g, 10, 14, 2, 1)
    road(g, [(14, 23), (14, 9), (11, 9), (11, 0)])
    g.landmark(21, 9, "lm_welwitschia")
    dunes(g, 22, 3, 3); dunes(g, 5, 7, 2); dunes(g, 22, 18, 2)
    tall(g, 6, 3, 3, 1); tall(g, 21, 14, 2, 1); tall(g, 5, 14, 2, 1)
    cacti(g, 17, 20, 2); cacti(g, 7, 10, 2); cacti(g, 19, 2, 1)
    flowers(g, 6, (3, 2, 24, 21))
    person(g, 23, 12, "R", "seg_d3:14,1")      # "What a turtle excluder costs the catch"
    person(g, 8, 5, "R", "seg_d3:4,3")         # Digger Otto
    person(g, 13, 13, "R", "seg_d3:9,4")       # Nomad Fen, by the pool
    person(g, 6, 17, "R", "seg_d3:5,7")        # Prospector Uzo
    person(g, 18, 16, "R", "seg_d3:9,7")       # Waterfinder Jax
    g.set(16, 11, "⁂"); g.set(4, 21, "¡")
    g.land = (15, 21)
    return finish(g, [
        (22, 7, "des_d3_bank", "bigberries", 1),     # up the bank by the welwitschia
        (4, 11, "des_d3_west", "treats", 2),
    ])


# --------------------------------------------------------------- seg_d4 ---
def seg_d4():
    """Dune Approach. The last waterhole before town, where the sandgrouse come
    in at dawn - and the Shield Wall's shrine through the dunes to the west."""
    g = base("seg_d4", 351, rocks=0.1)
    road(g, [(14, 23), (14, 15), (13, 15), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_glyptor", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    pond(g, 19, 12, 3, 2)
    g.landmark(18, 15, "lm_sandgrouse")
    dunes(g, 7, 13, 3); dunes(g, 22, 4, 3); dunes(g, 21, 20, 2)
    tall(g, 6, 4, 3, 1); tall(g, 6, 19, 3, 2); tall(g, 21, 8, 2, 1)
    cacti(g, 9, 10, 2); cacti(g, 18, 20, 2); cacti(g, 17, 3, 1)
    flowers(g, 6, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_d4:gate")           # -> the Shield Wall
    person(g, 17, 5, "R", "seg_d4:11,1")       # "Why the first attempt failed"
    person(g, 22, 11, "R", "seg_d4:3,4")       # Digger Zev, at the waterhole
    person(g, 8, 17, "R", "seg_d4:11,4")       # Nomad Otto
    g.set(10, 5, "⁂"); g.set(16, 18, "⁅"); g.set(5, 11, "¡")
    g.land = (15, 21)
    return finish(g, [
        (23, 14, "des_d4_water", "berries", 3),      # round the far side of the waterhole
        (4, 21, "des_d4_south", "coins", 170),
    ])


# ---------------------------------------------------------------- town5 ---
def town5():
    """Dune Town, the fourth arena: "the well is 60 metres deep and has never
    once run dry." The well stands in the square; the line of a qanat - the
    old underground channel that brings the water - runs in across the sand.
    Tents, water jars, a market. The guard stands in the north gate: the road
    on to the Highveld Steps goes through the arena."""
    g = base("town5", 361, rocks=0.05)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of cactus, one gate
    # Since the highveld was rebuilt (2026-09-25) the gate is a seam onto the
    # Highveld Steps, not a door; everything from row 3 down is as it was.
    g.rect(11, 0, 14, 1, "g")
    road(g, [(13, 0), (13, 0)])                # rows 0-1: the road, 2 wide
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 7, 20, 13, ".")                  # the square, round the well
    road(g, [(4, 16), (23, 16)])
    g.landmark(21, 19, "lm_qanat")
    g.set(18, 5, "Y")                          # the arena
    g.set(8, 5, "C"); g.set(19, 18, "M")
    g.set(4, 5, "H"); g.set(23, 5, "H"); g.set(4, 12, "H"); g.set(23, 11, "H"); g.set(8, 20, "H")
    for x, y in ((7, 7), (20, 7), (7, 13), (20, 13), (11, 18), (16, 18)):
        g.set(x, y, "¦")
    dunes(g, 23, 21, 2); cacti(g, 4, 8, 2); cacti(g, 24, 14, 1)
    flowers(g, 5, (3, 4, 24, 21))
    signpost(g, 15, 3, "town5:gate")           # -> the Highveld Steps, through the arena
    person(g, 12, 21, "!", "town5:9,3")        # DUNE TOWN - you read it coming in
    person(g, 5, 17, "!", "town5:8,12")        # a sign worn past reading - it always was
    person(g, 9, 11, "R", "town5:3,8")         # Waterfinder Sal, by the well
    person(g, 17, 14, "V", "town5:9,10")       # Digger Amos
    pieces(g, [
        (11, 10, "well"),
        (9, 9, "jars"), (12, 12, "jars"), (22, 17, "jars"),
        (16, 9, "stall"), (16, 12, "stall"), (10, 15, "stall"),
        (5, 9, "tent"), (22, 8, "tent"), (5, 20, "tent"), (17, 21, "tent"),
        (18, 10, "bench"), (6, 14, "crates"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 12, "des_t5_tents", "revives", 1),
    ])


def main():
    grids = [route4(), tidewater(), seg_d1(), seg_d2(), seg_d3(), seg_d4(), town5()]
    inbound = [
        {"from": "outback", "tile": "7,9", "map": "route4", "x": 1, "y": 11},
        {"from": "digsite", "tile": "0,6", "map": "route4", "x": W - 2, "y": 11},
        {"from": "shrine_bathynax", "tile": "7,9", "map": "seg_d2", "x": 1, "y": 8},
        {"from": "shrine_glyptor", "tile": "7,9", "map": "seg_d4", "x": 1, "y": 8},
        {"from": "route5", "tile": "7,15", "map": "town5", "x": 13, "y": 1},
    ]
    run("desert", "forge_desert.py", grids, inbound, GEN, "game.part113.jsx")


if __name__ == "__main__":
    main()
