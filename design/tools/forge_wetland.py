"""The wetland, rebuilt: Marula Town's north gate to Delta Town as one walk.

Run from the repo root:   python design/tools/forge_wetland.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part109.jsx. The landmarks' words and drawings are in game.part108.jsx.

The second region rebuilt, 2026-09-25, after Ayr approved the savanna ("This
looks great now. Please do the entire map"). Built to everything the savanna
review taught - grassland with dirt roads, seams wide open, no walls, a
landmark and a pouch or two on every map, a signpost at every doorway, and the
towns full of things.

WHAT MAKES IT A WETLAND AND NOT MORE SAVANNA. Water, mostly: meres with ragged
edges, a river across the Crossing, the Boardwalk's road running out over open
water, the bend at Otter Bend, the channels Delta Town is built between. The
zone's palette draws a "tree" as a reed bed, so the edges here are reeds and
not forest, and reed beds stand in the open the way acacia clumps did.

THE JOIN WITH THE SAVANNA. Marula Town's north gate used to be a door. It is a
seam now (xseams.py): walk through the gate and you are in the fen, with the
fen in view before you get there. The gym guard still stands in the gate.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall, reeds,  # noqa: E402
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 3   # third rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route2", "seg_w1", "seg_w2", "seg_w3", "seg_w4", "town3"]
SEAM = {
    ("route2", "seg_w1"): dict(road=12, L=2, R=3),
    ("seg_w1", "seg_w2"): dict(road=14, L=3, R=2),
    ("seg_w2", "seg_w3"): dict(road=11, L=2, R=2),
    ("seg_w3", "seg_w4"): dict(road=13, L=2, R=3),
    ("seg_w4", "town3"): dict(road=13, L=3, R=2),
}
setup(Region(CHAIN, SEAM, prev="town2", nxt="route3"))   # the jungle (forge_jungle.py) is north


# --------------------------------------------------------------- route2 ---
def route2():
    """Reedwater Fen. Through Marula's gate and the grass turns wet: meres,
    reed beds, lotus. A beaver dam holds back the big mere on the east side.
    Bramble Thicket is through the gap in the west reeds."""
    g = base("route2", 102, rocks=0)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (12, 11)])
    g.door(0, 11, "e", "thicket", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    mere(g, 21, 7, 4, 3)                       # the beaver pond
    g.landmark(20, 11, "lm_beaver_dam")        # the dam at its lower end
    mere(g, 5, 18, 2, 2)
    tall(g, 20, 17, 4, 3); tall(g, 6, 5, 3, 2); tall(g, 7, 14, 2, 1)
    reeds(g, 23, 20, 2, 1); reeds(g, 16, 5, 1, 2); reeds(g, 4, 8, 1, 1)
    reeds(g, 17, 20, 1, 1)
    flowers(g, 12, (3, 2, 24, 21))
    signpost(g, 3, 10, "route2:gate")          # -> Bramble Thicket
    person(g, 6, 9, "R", "route2:3,1")         # Warden Beatrix Nel, by the thicket road
    person(g, 23, 12, "R", "route2:4,4")       # Fisher Timo, at the beaver pond
    person(g, 8, 16, "R", "route2:11,10")      # Wader Asha, in the wet grass
    g.set(18, 3, "⁅"); g.set(9, 19, "⁂"); g.set(16, 13, "¡")
    g.land = (13, 20)
    return finish(g, [
        (25, 4, "wet_r2_pond", "berries", 3),        # round the far side of the pond
        (3, 20, "wet_r2_mere", "coins", 90),
    ])


# --------------------------------------------------------------- seg_w1 ---
def seg_w1():
    """Reedwater Crossing. A slow river runs right across the map and the road
    crosses it on a causeway. A reed warbler has nested in the reeds on the
    south bank - and a cuckoo has found it."""
    g = base("seg_w1", 111, rocks=0)
    g.rect(0, 10, W - 1, 12, "W")              # the river, bank to bank
    for x in range(W):                          # ragged banks
        if g.rng.random() < 0.4:
            g.set(x, 9 if g.rng.random() < 0.5 else 13, "W")
    road(g, [(12, 23), (12, 8), (14, 8), (14, 0)])
    g.landmark(8, 14, "lm_reed_warbler")
    reeds(g, 5, 15, 2, 1); reeds(g, 20, 7, 2, 1); reeds(g, 22, 15, 2, 1)
    tall(g, 19, 19, 4, 2); tall(g, 6, 4, 3, 2); tall(g, 20, 3, 2, 1)
    mere(g, 5, 20, 2, 1)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 18, 8, "R", "seg_w1:6,3")        # "Dawn and dusk", looking out over the river
    person(g, 10, 15, "R", "seg_w1:6,8")       # Fisher Zev, on the south bank
    person(g, 8, 19, "R", "seg_w1:3,10")       # Wader Otto
    person(g, 23, 5, "R", "seg_w1:11,10")      # Reedcutter Fen, by the reed bed
    g.set(9, 7, "⁅"); g.set(17, 16, "¡"); g.set(4, 7, "⁂")
    g.land = (13, 20)
    return finish(g, [
        (3, 6, "wet_w1_bank", "wakeberry", 1),       # up the north bank, west
        (24, 20, "wet_w1_grass", "treats", 2),
    ])


# --------------------------------------------------------------- seg_w2 ---
def seg_w2():
    """The Sunken Boardwalk. The fen opens into water, and the road goes out
    across it: a boardwalk from island to island. Old peat cuttings on the
    west side, and the Still Water's shrine through the reeds beyond them."""
    g = base("seg_w2", 127, rocks=0)
    mere(g, 14, 15, 9, 3, 0.2)                 # the open water the boardwalk crosses
    mere(g, 21, 7, 4, 3)
    road(g, [(14, 23), (14, 15), (11, 15), (11, 0)])
    road(g, [(1, 8), (11, 8)])
    g.door(0, 8, "e", "shrine_cetarch", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 6, 4, 2, 1)                       # the old cuttings, bare peat
    g.landmark(6, 4, "lm_peat_bank")
    tall(g, 6, 12, 2, 1); tall(g, 21, 21, 3, 1); tall(g, 6, 20, 3, 1); tall(g, 18, 3, 2, 1)
    reeds(g, 16, 10, 1, 1); reeds(g, 4, 17, 1, 1)
    flowers(g, 10, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_w2:gate")           # -> the Still Water
    person(g, 17, 5, "R", "seg_w2:6,1")        # Fisher Kai, at the east pool
    person(g, 8, 21, "R", "seg_w2:3,3")        # Ranger Bruce Ervin
    person(g, 4, 11, "R", "seg_w2:1,5")        # Reedcutter Otto
    person(g, 18, 20, "R", "seg_w2:13,5")      # Ferryman Fen, at the water's edge
    person(g, 24, 3, "R", "seg_w2:4,10")       # "The fen edge at dusk"
    g.set(8, 6, "⁌"); g.set(9, 11, "⁅"); g.set(20, 11, "¡")
    g.land = (15, 21)
    return finish(g, [
        (8, 3, "wet_w2_peat", "antidote", 1),        # among the peat cuttings
        (24, 11, "wet_w2_isle", "coins", 110),       # the far side of the east pool
    ])


# --------------------------------------------------------------- seg_w3 ---
def seg_w3():
    """Otter Bend. A river comes in from the east, turns hard south at the
    bend and runs away west under the road. Otters have a holt in the roots of
    the bank on the inside of the turn."""
    g = base("seg_w3", 139, rocks=0)
    g.rect(21, 6, W - 1, 7, "W")               # in from the east
    g.rect(19, 6, 20, 16, "W")                 # the bend, running south
    g.rect(3, 15, 20, 16, "W")                 # and away west
    mere(g, 5, 15, 2, 2)
    road(g, [(11, 23), (11, 12), (13, 12), (13, 0)])
    g.landmark(17, 9, "lm_otter_holt")         # on the inside of the bend
    tall(g, 6, 7, 3, 3); tall(g, 23, 12, 2, 2); tall(g, 16, 20, 4, 2); tall(g, 22, 3, 2, 1)
    reeds(g, 24, 19, 2, 2); reeds(g, 7, 20, 1, 1); reeds(g, 17, 3, 1, 1)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 8, 11, "R", "seg_w3:3,2")        # Dr. Salim Alvi
    person(g, 5, 4, "R", "seg_w3:5,4")         # Wader Kai
    person(g, 16, 12, "R", "seg_w3:7,4")       # "What the cats are wearing"
    person(g, 23, 9, "R", "seg_w3:9,4")        # Reedcutter Zev, over the river
    person(g, 8, 19, "R", "seg_w3:5,7")        # Ferryman Otto, below the ford
    g.set(15, 7, "⁂"); g.set(18, 12, "⁂"); g.set(4, 12, "¡")
    g.land = (12, 20)
    return finish(g, [
        (24, 15, "wet_w3_bend", "bigberries", 1),    # across the river, east bank
        (4, 19, "wet_w3_pool", "treats", 2),
    ])


# --------------------------------------------------------------- seg_w4 ---
def seg_w4():
    """Delta Approach. The river splits into channels as it nears the sea, and
    the still water between them is full of lotus. Delta Town's gate is ahead."""
    g = base("seg_w4", 151, rocks=0)
    mere(g, 7, 10, 3, 2)                       # the lotus pool
    mere(g, 21, 15, 3, 2)
    g.rect(0, 5, 9, 5, "W"); g.rect(18, 5, W - 1, 5, "W")   # a channel either side
    road(g, [(13, 23), (13, 16), (15, 16), (15, 8), (13, 8), (13, 0)])
    g.landmark(10, 12, "lm_lotus")
    tall(g, 6, 18, 3, 2); tall(g, 21, 9, 3, 2); tall(g, 7, 2, 3, 1); tall(g, 21, 21, 2, 1)
    reeds(g, 23, 2, 1, 1); reeds(g, 4, 14, 1, 1)
    flowers(g, 18, (3, 2, 24, 21))
    person(g, 18, 3, "R", "seg_w4:9,1")        # Mr Adeyemi, near the town gate
    person(g, 8, 14, "R", "seg_w4:3,4")        # Fisher Esi, at the lotus pool
    person(g, 5, 8, "R", "seg_w4:4,4")         # Niko Tinbergen-Haas
    person(g, 20, 12, "R", "seg_w4:11,4")      # Reedcutter Kai
    g.set(18, 19, "⁅"); g.set(10, 20, "¡"); g.set(17, 11, "⁂")
    g.land = (14, 20)
    return finish(g, [
        (4, 11, "wet_w4_lotus", "berries", 2),       # the far side of the lotus pool
        (24, 18, "wet_w4_channel", "coins", 120),
    ])


# ---------------------------------------------------------------- town3 ---
def town3():
    """Delta Town, the second arena: "built on stilts, because the river
    decides where the town is, not us." A channel runs through the middle of
    town with a bridge on the high street; canoes pulled up on the banks,
    nets drying, a market by the water. The flood post by the bridge shows how
    high the river has come. The guard stands in the north gate: the road on
    to Canopy Deep goes through the arena."""
    g = base("town3", 163, rocks=0)
    g.beyond["e"] = "W"; g.beyond["w"] = "W"   # the delta: water either side
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of reeds, one gate
    # Since the jungle was rebuilt (2026-09-25) the gate is a seam onto Canopy
    # Deep, not a door; everything from row 3 down is exactly as it was.
    g.rect(11, 0, 14, 1, "g")
    road(g, [(13, 0), (13, 0)])                # rows 0-1: the road, 2 wide
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(0, 11, W - 1, 12, "W")              # the channel through town
    road(g, [(13, 10), (13, 12)])              # the bridge (the road over it)
    g.rect(6, 5, 21, 8, ".")                   # the upper square
    g.rect(7, 15, 20, 18, ".")                 # the lower square, the market
    g.set(9, 5, "Y")                           # the arena
    g.set(18, 5, "C"); g.set(8, 17, "M")
    g.set(4, 4, "H"); g.set(23, 5, "H"); g.set(4, 16, "H"); g.set(23, 17, "H"); g.set(22, 21, "H")
    for x, y in ((6, 8), (21, 8), (7, 15), (20, 15), (12, 9), (15, 13)):
        g.set(x, y, "¦")
    g.landmark(16, 10, "lm_flood_post")
    reeds(g, 4, 20, 2, 1)
    flowers(g, 10, (3, 4, 24, 21))
    signpost(g, 15, 3, "town3:gate")           # -> Canopy Deep, through the arena
    person(g, 11, 4, "!", "town3:11,12")       # a sign worn past reading - it always was
    person(g, 15, 20, "!", "town3:11,3")       # DELTA TOWN - you read it coming in
    person(g, 18, 10, "R", "town3:16,7")       # Ferryman Silt, by the canoes
    person(g, 6, 20, "V", "town3:9,10")        # Reedcutter Bo, by the reeds
    pieces(g, [
        (10, 16, "stall"), (17, 16, "stall"), (11, 18, "stall"),
        (19, 9, "canoe"), (8, 10, "canoe"), (20, 13, "canoe"),
        (5, 9, "nets"), (22, 9, "nets"), (6, 13, "nets"),
        (16, 7, "bench"), (10, 7, "bench"),
        (18, 18, "crates"), (5, 6, "crates"),
    ])
    g.land = (14, 20)
    return finish(g, [
        (24, 14, "wet_t3_bank", "revives", 1),       # down on the east bank
    ])


def main():
    grids = [route2(), seg_w1(), seg_w2(), seg_w3(), seg_w4(), town3()]
    inbound = [
        {"from": "thicket", "tile": "7,9", "map": "route2", "x": 1, "y": 11},
        {"from": "shrine_cetarch", "tile": "7,9", "map": "seg_w2", "x": 1, "y": 8},
        {"from": "route3", "tile": "7,15", "map": "town3", "x": 13, "y": 1},
    ]
    run("wetland", "forge_wetland.py", grids, inbound, GEN, "game.part109.jsx")


if __name__ == "__main__":
    main()
