"""The grove, rebuilt: Cinder Town's north gate to the door of the Summit
Citadel - the end of the main road.

Run from the repo root:   python design/tools/forge_grove.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part121.jsx. The landmarks' words and drawings are in game.part120.jsx.

The eighth region rebuilt, 2026-09-25 (Ayr: "Please just do the rest of the
maps needed").

WHAT MAKES IT THE GROVE. Old-growth forest at dusk - the palette is violet
and the trees are broad and dark - with dead wood lying where it fell, pools,
glades, and a great old oak in Gloam Town. Past the town, Victory Trail
climbs out of the trees into bare rock to the Citadel's door; it is the
summit zone, and draws its rock as peaks.

THE LIGHTS STORY. The people in the grove tell a story about the insects and
the lights; the landmarks stay out of it (and away from artificial light).

The Summit Citadel itself stays a room, as the shrines do; Victory Trail ends
at its door.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, W, H)

GEN = 9   # ninth rebuild. A save made before this, standing here, is relocated.
CHAIN = ["route8", "seg_g1", "seg_g2", "seg_g3", "seg_g4", "town9", "route9"]
SEAM = {
    ("route8", "seg_g1"): dict(road=12, L=3, R=3),
    ("seg_g1", "seg_g2"): dict(road=14, L=3, R=2),
    ("seg_g2", "seg_g3"): dict(road=11, L=2, R=3),
    ("seg_g3", "seg_g4"): dict(road=13, L=3, R=3),
    ("seg_g4", "town9"): dict(road=13, L=3, R=3),
    # Gloam Town's north gate: narrow, the arena's guard standing in it.
    ("town9", "route9"): dict(road=13, L=11, R=13),
}
setup(Region(CHAIN, SEAM, prev="town8"))


def wood(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def rock(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


# --------------------------------------------------------------- route8 ---
def route8():
    """Gloamwood. Out of the ash and into old forest going violet at dusk.
    A fallen giant lies where it came down, and the Whispering Taiga is
    through the trees to the west."""
    g = base("route8", 701, rocks=0.05)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 0)])
    road(g, [(1, 11), (12, 11)])
    g.door(0, 11, "e", "taiga", 7, 8)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    g.landmark(19, 16, "lm_nurse_log")
    for x in range(16, 23):                    # the rest of the fallen giant
        if x != 19:
            g.set(x, 17, "¡")
    tall(g, 6, 6, 3, 2); tall(g, 21, 8, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 21, 21, 2, 1)
    wood(g, 22, 12, 3); wood(g, 17, 3, 3); wood(g, 8, 14, 2); wood(g, 5, 2, 2)
    pond(g, 5, 21, 2, 1)
    flowers(g, 10, (3, 2, 24, 21))
    signpost(g, 3, 10, "route8:gate")          # -> the Whispering Taiga
    person(g, 8, 8, "R", "route8:4,4")         # Moth Keeper Lua
    person(g, 16, 13, "R", "route8:5,10")      # Councillor Bea Lindqvist
    person(g, 20, 5, "R", "route8:11,10")      # Night Warden Rue
    g.set(9, 4, "⁄"); g.set(15, 20, "⁅")
    g.land = (13, 21)
    return finish(g, [
        (23, 18, "grv_r8_log", "berries", 3),        # past the end of the fallen tree
        (4, 4, "grv_r8_corner", "coins", 260),
    ])


# --------------------------------------------------------------- seg_g1 ---
def seg_g1():
    """Lantern Grove. A stream through the trees, and on the rotting stumps
    by it, a faint green glow of their own."""
    g = base("seg_g1", 711, rocks=0.05)
    g.rect(0, 12, W - 1, 13, "W")              # the stream
    for x in range(W):
        if g.rng.random() < 0.3:
            g.set(x, 11 if g.rng.random() < 0.5 else 14, "W")
    road(g, [(12, 23), (12, 16), (14, 16), (14, 0)])
    g.landmark(8, 9, "lm_foxfire")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 19, 3, 2); tall(g, 21, 19, 3, 2)
    wood(g, 18, 9, 3); wood(g, 5, 8, 2); wood(g, 9, 21, 2); wood(g, 23, 17, 2)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 22, 3, "R", "seg_g1:14,2")       # "What followed the insects"
    person(g, 16, 7, "R", "seg_g1:7,6")        # "What happened to the insects"
    person(g, 9, 17, "R", "seg_g1:7,8")        # Forester Esi
    person(g, 5, 15, "R", "seg_g1:3,10")       # Lantern-keeper Ulla
    person(g, 18, 18, "R", "seg_g1:11,10")     # Owler Kai
    g.set(10, 5, "⁄"); g.set(17, 21, "¡"); g.set(3, 5, "⁅")
    g.land = (13, 21)
    return finish(g, [
        (4, 3, "grv_g1_corner", "treats", 2),
        (24, 9, "grv_g1_stream", "wakeberry", 1),
    ])


# --------------------------------------------------------------- seg_g2 ---
def seg_g2():
    """The Old Growth. The biggest, oldest trees on the road, and under them
    the fungi that tie them together."""
    g = base("seg_g2", 721, rocks=0.05)
    road(g, [(14, 23), (14, 14), (11, 14), (11, 0)])
    g.landmark(19, 10, "lm_fungal_web")
    # The Old Growth should be the most forest on the road: big stands.
    for cx, cy, rx, ry in ((20, 5, 3, 2), (6, 10, 2, 3), (22, 16, 2, 2), (7, 20, 2, 1), (18, 20, 1, 1)):
        g.blob(cx, cy, rx, ry, "T", 0.45, only_on="g*")
    tall(g, 6, 4, 3, 2); tall(g, 20, 20, 3, 2); tall(g, 21, 13, 2, 1)
    pond(g, 6, 16, 2, 1)
    flowers(g, 12, (3, 2, 24, 21))
    person(g, 16, 3, "R", "seg_g2:6,1")        # Forester Pim
    person(g, 8, 7, "R", "seg_g2:3,3")         # Sir Davan Attenbury
    person(g, 17, 12, "R", "seg_g2:10,3")      # "Why the lights went in"
    person(g, 9, 17, "R", "seg_g2:1,5")        # Owler Ulla
    person(g, 18, 19, "R", "seg_g2:13,5")      # Mosser Kai
    g.set(9, 3, "⁄"); g.set(16, 16, "⁅"); g.set(4, 21, "¡")
    g.land = (15, 21)
    return finish(g, [
        (24, 10, "grv_g2_roots", "antidote", 1),     # among the great roots
        (4, 3, "grv_g2_corner", "coins", 270),
    ])


# --------------------------------------------------------------- seg_g3 ---
def seg_g3():
    """Moonlit Glade. An open glade under an owl's roost, and the Long
    Shadow's shrine through the trees to the west."""
    g = base("seg_g3", 731, rocks=0.05)
    road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
    road(g, [(1, 8), (13, 8)])
    g.door(0, 8, "e", "shrine_nyxfang", 7, 8)
    g.set(1, 8, "."); g.set(1, 9, "."); g.set(0, 9, "T")
    patch(g, 20, 13, 3, 2)                     # the glade
    g.landmark(22, 12, "lm_owl_pellet")
    tall(g, 6, 4, 3, 2); tall(g, 21, 5, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 20, 20, 3, 1)
    wood(g, 8, 12, 3); wood(g, 17, 3, 2); wood(g, 24, 9, 2); wood(g, 5, 21, 2)
    flowers(g, 12, (3, 2, 24, 21))
    signpost(g, 3, 7, "seg_g3:gate")           # -> the Long Shadow
    person(g, 7, 10, "R", "seg_g3:4,3")        # Forester Ade
    person(g, 23, 3, "R", "seg_g3:14,3")       # "What kind of light it is"
    person(g, 17, 11, "R", "seg_g3:9,4")       # Lantern-keeper Pim
    person(g, 18, 17, "R", "seg_g3:5,7")       # Owler Esi, in the glade
    person(g, 8, 17, "R", "seg_g3:9,7")        # Mosser Ulla
    g.set(9, 5, "⁄"); g.set(16, 20, "⁅"); g.set(4, 12, "¡")
    g.land = (12, 21)
    return finish(g, [
        (24, 14, "grv_g3_glade", "bigberries", 1),
        (4, 3, "grv_g3_corner", "treats", 2),
    ])


# --------------------------------------------------------------- seg_g4 ---
def seg_g4():
    """Gloam Approach. The forest thins toward town. A dead tree still standing
    is riddled with holes - and every hole has a tenant."""
    g = base("seg_g4", 741, rocks=0.05)
    road(g, [(13, 23), (13, 15), (14, 15), (14, 8), (13, 8), (13, 0)])
    g.landmark(20, 7, "lm_woodpecker_tree")
    tall(g, 6, 4, 3, 2); tall(g, 21, 17, 3, 2); tall(g, 6, 18, 3, 2); tall(g, 21, 3, 2, 1)
    wood(g, 8, 11, 3); wood(g, 23, 11, 2); wood(g, 5, 21, 2); wood(g, 18, 21, 2)
    pond(g, 20, 13, 2, 1)
    flowers(g, 12, (3, 2, 24, 21))
    person(g, 8, 7, "R", "seg_g4:3,4")         # Forester Jax
    person(g, 18, 4, "R", "seg_g4:11,4")       # Lantern-keeper Ade
    person(g, 9, 15, "R", "seg_g4:6,7")        # "Where the animals still are"
    g.set(10, 3, "⁄"); g.set(17, 18, "⁅"); g.set(4, 12, "¡")
    g.land = (14, 21)
    return finish(g, [
        (24, 8, "grv_g4_snag", "berries", 3),
        (4, 21, "grv_g4_south", "coins", 280),
    ])


# ---------------------------------------------------------------- town9 ---
def town9():
    """Gloam Town, the eighth and last arena: "last town before the Citadel.
    Sleep here." Built round an oak older than anything else on the road, lit
    by lamps. The Vigil Gate is on the west road, for Champions. The guard
    stands in the north gate: Victory Trail goes through the arena."""
    g = base("town9", 751, rocks=0.03)
    g.rect(0, 0, W - 1, 2, "T")                # the north wall of trees, one gate
    g.rect(11, 0, 14, 1, "g")
    road(g, [(13, 0), (13, 0)])                # rows 0-1: the road, 2 wide
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    road(g, [(13, 3), (13, 23)])
    g.rect(7, 7, 20, 13, ".")                  # the square, round the oak
    road(g, [(1, 16), (23, 16)])
    g.door(0, 16, "e", "vigil", 7, 8, req="champion",
           reqMsg="🕯️ A keeper in grey stands in the doorway. \"The Vigil is not a trophy hall, ranger. Come back when you've finished the trail — and come back ready to be sad for a while.\"")
    g.set(0, 17, "T")
    g.landmark(10, 10, "lm_ancient_oak")
    g.set(18, 5, "Y")                          # the arena
    g.set(9, 5, "C"); g.set(19, 19, "M")
    g.set(4, 5, "H"); g.set(23, 5, "H"); g.set(4, 12, "H"); g.set(23, 12, "H"); g.set(9, 20, "H"); g.set(23, 21, "H")
    for x, y in ((7, 7), (20, 7), (7, 13), (20, 13), (11, 18), (16, 18), (5, 15), (22, 15)):
        g.set(x, y, "¦")
    wood(g, 4, 21, 2); wood(g, 24, 9, 1)
    flowers(g, 10, (3, 4, 24, 21))
    signpost(g, 15, 3, "town9:gate")           # -> Victory Trail, through the arena
    signpost(g, 3, 15, "town9:gate2")          # -> the Vigil Gate
    person(g, 12, 21, "!", "town9:9,3")        # GLOAM TOWN - you read it coming in
    person(g, 6, 19, "!", "town9:8,12")        # a sign worn past reading - it always was
    person(g, 8, 11, "R", "town9:3,8")         # Owler Fen, under the oak
    person(g, 17, 14, "V", "town9:9,10")       # Lamplighter Cass
    pieces(g, [
        (16, 9, "stall"), (16, 12, "stall"), (11, 13, "bench"), (8, 8, "bench"),
        (21, 18, "crates"), (6, 22, "woodpile"), (17, 21, "garden"), (18, 21, "garden"),
    ])
    g.land = (14, 21)
    return finish(g, [
        (24, 14, "grv_t9_oak", "revives", 1),
    ])


# --------------------------------------------------------------- route9 ---
def route9():
    """Victory Trail. Out of Gloam Town's gate and up, out of the trees, onto
    bare rock with the Summit Citadel's door at the top. Lichen on every stone."""
    g = base("route9", 761, rocks=0.15)
    road(g, [(13, 23), (13, 15), (12, 15), (12, 3), (13, 3), (13, 1)])
    g.rect(0, 0, W - 1, 0, "T")                # the Citadel's wall across the top
    g.door(13, 0, "n", "summit", 7, 13)
    g.set(14, 0, "T")
    g.landmark(19, 12, "lm_lichen")
    rock(g, 20, 5, 3, 2); rock(g, 6, 7, 3, 2); rock(g, 22, 18, 2); rock(g, 6, 18, 2)
    tall(g, 6, 13, 3, 2); tall(g, 20, 8, 2, 1); tall(g, 21, 21, 2, 1)
    flowers(g, 8, (3, 2, 24, 21))
    signpost(g, 11, 2, "route9:gate")          # -> the Summit Citadel
    person(g, 9, 9, "R", "route9:4,4")         # Trailmaster Odu
    person(g, 16, 17, "R", "route9:3,10")      # Mayor Silje Hansen
    person(g, 16, 5, "R", "route9:11,10")      # Gatekeeper Ivo, near the door
    g.set(9, 19, "⁂")
    g.land = (13, 21)
    return finish(g, [
        (23, 4, "grv_r9_rocks", "revives", 1),
        (4, 20, "grv_r9_south", "coins", 300),
    ])


def main():
    grids = [route8(), seg_g1(), seg_g2(), seg_g3(), seg_g4(), town9(), route9()]
    inbound = [
        {"from": "taiga", "tile": "7,9", "map": "route8", "x": 1, "y": 11},
        {"from": "shrine_nyxfang", "tile": "7,9", "map": "seg_g3", "x": 1, "y": 8},
        {"from": "vigil", "tile": "7,9", "map": "town9", "x": 1, "y": 16},
        {"from": "summit", "tile": "7,14", "map": "route9", "x": 13, "y": 1},
    ]
    run("grove", "forge_grove.py", grids, inbound, GEN, "game.part121.jsx")


if __name__ == "__main__":
    main()
