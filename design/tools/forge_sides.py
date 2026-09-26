"""The side areas, rebuilt full size.

Run from the repo root:   python design/tools/forge_sides.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part125.jsx. The landmarks' words and drawings are in game.part124.jsx.

Ayr, 2026-09-25: "The side areas need to be bigger actually."

Bramble Thicket, the Emerald Canopy Walk, the Red Sand Outback, the Long
Grass Savanna, Hoarfrost Tundra and the Whispering Taiga open off the west
side of their routes; the Whispering Cave off the east side of Canopy Deep.
Each is its own place behind a door, so they are forged standalone: 28x24,
closed all round, the door on the side you come in from, with a landmark,
pouches and room to wander. Storm Peak and Ember Hollow stay as they are:
each is a legendary's puzzle room, like the shrines.

The route maps' doors still aim at the old coordinates; this region re-aims
them (inbound) when it applies, so if it is ever refused the old side areas
and the old doors still match.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, enclose, W, H)

GEN = 11   # eleventh rebuild. A save made before this, standing here, is relocated.
CHAIN = ["thicket", "canopywalk", "outback", "savanna", "tundra", "taiga", "cave1"]
setup(Region(CHAIN, {}, standalone=True))
DOOR_ROW = 12


def side(key, seed, back_to, back_x, back_y, door_side="e", rocks=0.08, fill="g"):
    """A side area: closed all round, its door in the middle of the side you
    come in from, a trail in from the door."""
    g = base(key, seed, fill=fill, rocks=rocks)
    enclose(g, "ns")
    x = W - 1 if door_side == "e" else 0
    inner = x - 1 if door_side == "e" else 1
    g.door(x, DOOR_ROW, "e", back_to, back_x, back_y)
    g.set(inner, DOOR_ROW, "."); g.set(inner, DOOR_ROW + 1, ".")
    g.set(x, DOOR_ROW + 1, "T")
    return g


def stand(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def grove(g, cx, cy, rx, ry):
    g.blob(cx, cy, rx, ry, "T", 0.45, only_on="g*")


def rock(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


# -------------------------------------------------------------- thicket ---
def thicket():
    """Bramble Thicket, off the Reedwater Fen. Tangles of bramble and thorn
    with young trees coming up through them, ledges, and a stream."""
    g = side("thicket", 901, "route2", 1, 11)
    road(g, [(25, 12), (14, 12), (14, 5)])
    road(g, [(14, 12), (14, 19), (6, 19)])
    g.rect(0, 15, 9, 15, "W"); mere(g, 5, 16, 2, 1)
    g.landmark(18, 8, "lm_bramble")
    grove(g, 20, 6, 3, 2); grove(g, 7, 7, 3, 3); grove(g, 22, 18, 3, 2); grove(g, 9, 22, 2, 1)
    tall(g, 9, 11, 3, 2); tall(g, 21, 13, 2, 1); tall(g, 18, 21, 2, 1); tall(g, 5, 3, 2, 1)
    flowers(g, 12, (3, 2, 24, 21))
    person(g, 12, 9, "R", "thicket:7,2")        # Dr. Edmund Willson
    person(g, 22, 10, "!", "thicket:8,3")       # BRAMBLE THICKET
    person(g, 10, 17, "!", "thicket:8,8")       # ninety percent of flowering plants
    g.set(16, 4, "⁂"); g.set(4, 20, "¡"); g.set(20, 15, "⁅")
    g.land = (24, 12)
    return finish(g, [
        (4, 3, "side_th_tangle", "berries", 3),
        (23, 21, "side_th_stream", "coins", 160),
    ])


# ----------------------------------------------------------- canopywalk ---
def canopywalk():
    """The Emerald Canopy Walk, off Canopy Deep: up in the trees, the walkway
    winding between the crowns of the rainforest giants."""
    g = side("canopywalk", 911, "route3", 1, 11)
    road(g, [(25, 12), (18, 12), (18, 5), (8, 5), (8, 17), (16, 17)])
    g.landmark(13, 10, "lm_canopy_fogging")
    grove(g, 13, 10, 2, 2); grove(g, 22, 4, 3, 2); grove(g, 4, 11, 2, 4); grove(g, 22, 20, 3, 2); grove(g, 12, 21, 2, 1)
    g.set(13, 10, "Ω"); g.set(13, 11, "g"); g.set(13, 12, "g")          # clear the landmark's front
    tall(g, 13, 2, 3, 1); tall(g, 4, 20, 2, 1); tall(g, 21, 15, 2, 1)
    flowers(g, 14, (3, 2, 24, 21))
    person(g, 5, 3, "R", "highstation:10,2")    # Dr. Diane Ferris (from Highcanopy Station)
    person(g, 11, 3, "R", "canopywalk:7,2")     # Jed Corwell
    person(g, 20, 8, "R", "canopywalk:8,2")     # Dr. Biruta Galdis
    person(g, 10, 15, "R", "canopywalk:10,3")   # Dr. Jane Fairbrook
    person(g, 23, 13, "!", "canopywalk:8,3")    # EMERALD CANOPY WALK
    person(g, 17, 19, "!", "canopywalk:8,8")    # macaws pair for life
    g.set(16, 3, "⁌"); g.set(6, 13, "⁂"); g.set(19, 15, "¡")
    g.land = (24, 12)
    return finish(g, [
        (4, 21, "side_cw_crown", "treats", 3),
        (24, 3, "side_cw_top", "coins", 200),
    ])


# -------------------------------------------------------------- outback ---
def outback():
    """The Red Sand Outback, off the Singing Dunes: red earth, spinifex, rock
    outcrops, a dry creek and a waterhole - and a mound somebody is tending."""
    g = side("outback", 921, "route4", 1, 11, rocks=0.12)
    road(g, [(25, 12), (12, 12), (12, 4)])
    patch(g, 18, 18, 4, 2); patch(g, 7, 7, 3, 2)
    pond(g, 6, 17, 3, 2)
    g.landmark(19, 6, "lm_malleefowl")
    stand(g, 22, 9, 3); stand(g, 6, 12, 3); stand(g, 21, 21, 2); rock(g, 16, 16, 2); rock(g, 4, 4, 2)
    tall(g, 17, 3, 3, 1); tall(g, 21, 14, 2, 2); tall(g, 8, 21, 3, 1)
    flowers(g, 8, (3, 2, 24, 21))
    person(g, 15, 8, "R", "outback:7,2")        # Bindy Ervin
    person(g, 22, 11, "!", "outback:8,3")       # RED SAND OUTBACK
    person(g, 10, 17, "!", "outback:8,8")       # the numbat
    g.set(9, 9, "⁂"); g.set(16, 20, "¡")
    g.land = (24, 12)
    return finish(g, [
        (23, 3, "side_ob_mound", "bigberries", 1),
        (4, 21, "side_ob_water", "coins", 240),
    ])


# -------------------------------------------------------------- savanna ---
def savanna():
    """The Long Grass Savanna, off the Highveld Steps: grass taller than a
    person, broken trees where the elephants have been, and a herd road."""
    g = side("savanna", 931, "route5", 1, 11)
    road(g, [(25, 12), (4, 12)])
    tall(g, 8, 6, 5, 3); tall(g, 19, 5, 5, 3); tall(g, 8, 18, 5, 3); tall(g, 20, 18, 4, 3)
    g.landmark(14, 8, "lm_elephant_trees")
    for x, y in ((12, 9), (16, 7), (15, 10)):
        g.set(x, y, "¡")
    pond(g, 22, 10, 2, 1)
    stand(g, 4, 9, 2); stand(g, 24, 20, 2); stand(g, 5, 21, 2)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 10, 3, "R", "savanna:7,2")        # Joy Adamsen
    person(g, 17, 3, "R", "savanna:8,2")        # Iain Douglass-Hamill
    person(g, 23, 7, "R", "savanna:9,2")        # Jonty Scarr
    person(g, 5, 15, "R", "savanna:2,3")        # Simon Kingsley
    person(g, 14, 16, "R", "savanna:6,3")       # Saba Douglass-Hamill
    person(g, 21, 15, "R", "savanna:10,3")      # Dr. Cynthia Mosse
    person(g, 11, 14, "!", "savanna:8,3")       # LONG GRASS SAVANNA
    person(g, 22, 14, "!", "savanna:8,8")       # giraffe vertebrae
    g.set(18, 11, "⁃"); g.set(6, 10, "⁂")
    g.land = (24, 12)
    return finish(g, [
        (4, 3, "side_sv_grass", "treats", 3),
        (23, 21, "side_sv_herd", "coins", 260),
    ])


# --------------------------------------------------------------- tundra ---
def tundra():
    """Hoarfrost Tundra, off Frostmere Pass: flat white ground over frozen
    earth, ice ridges, and meltwater pools in the hollows."""
    g = side("tundra", 941, "route6", 1, 11)
    road(g, [(25, 12), (10, 12), (10, 5)])
    mere(g, 18, 6, 3, 2); mere(g, 7, 18, 3, 2); mere(g, 20, 18, 2, 1)
    g.landmark(16, 15, "lm_permafrost")
    stand(g, 22, 3, 2); stand(g, 4, 8, 2); stand(g, 14, 21, 2); rock(g, 24, 9, 2)
    tall(g, 5, 3, 3, 1); tall(g, 15, 3, 2, 1); tall(g, 22, 22, 2, 1); tall(g, 4, 13, 2, 1)
    flowers(g, 8, (3, 2, 24, 21))
    person(g, 14, 9, "R", "tundra:7,2")         # Dr. George Schalla
    person(g, 20, 14, "R", "tundra:10,3")       # Konrad Lorentz
    person(g, 22, 11, "!", "tundra:8,3")        # HOARFROST TUNDRA
    person(g, 8, 14, "!", "tundra:8,8")         # Pallas's cats
    g.set(12, 17, "⁂"); g.set(19, 10, "¡")
    g.land = (24, 12)
    return finish(g, [
        (4, 21, "side_tn_pool", "antidote", 1),
        (24, 3, "side_tn_ridge", "coins", 280),
    ])


# ---------------------------------------------------------------- taiga ---
def taiga():
    """The Whispering Taiga, off Gloamwood: spruce going on for ever, bog
    between the trees, and the tracks of a lynx following a hare."""
    g = side("taiga", 951, "route8", 1, 11)
    road(g, [(25, 12), (13, 12), (13, 20)])
    road(g, [(13, 12), (13, 4)])
    grove(g, 7, 6, 3, 3); grove(g, 20, 5, 3, 2); grove(g, 6, 19, 3, 2); grove(g, 21, 19, 3, 2)
    mere(g, 18, 15, 2, 1); pond(g, 7, 13, 2, 1)
    g.landmark(17, 9, "lm_lynx_hare")
    tall(g, 9, 16, 2, 1); tall(g, 21, 10, 2, 1); tall(g, 4, 3, 1, 1)
    flowers(g, 10, (3, 2, 24, 21))
    person(g, 10, 9, "R", "taiga:7,2")          # Farley Mowatt
    person(g, 22, 13, "!", "taiga:8,3")         # WHISPERING TAIGA
    person(g, 15, 18, "!", "taiga:8,8")         # wolverines
    g.set(15, 7, "⁂"); g.set(19, 11, "⁂"); g.set(10, 21, "¡")
    g.land = (24, 12)
    return finish(g, [
        (24, 21, "side_tg_bog", "berries", 3),
        (4, 10, "side_tg_spruce", "coins", 300),
    ])


# ---------------------------------------------------------------- cave1 ---
def cave1():
    """The Whispering Cave, off the east side of Canopy Deep. Dark (only the
    ground round you can be seen), a maze of rock with a pool, bats, and the
    way to the Qilin's shrine at the far end."""
    g = side("cave1", 961, "route3", W - 2, 11, door_side="w", rocks=0.2, fill=".")
    # the cave itself: rock walls in broken lines, passages between them
    for y in (5, 9, 16, 20):
        for x in range(2, W - 2):
            if g.rng.random() < 0.7:
                g.set(x, y, "^")
    for x in (7, 14, 21):
        for y in range(2, H - 2):
            if g.rng.random() < 0.55:
                g.set(x, y, "^")
    road(g, [(1, 12), (24, 12)])
    road(g, [(24, 12), (24, 3), (18, 3)])
    g.door(18, 0, "n", "shrine_qilin", 7, 8)
    g.set(18, 1, "."); g.set(18, 2, "."); g.set(19, 1, "^"); g.set(19, 2, "^"); g.set(19, 0, "^")
    mere(g, 10, 18, 2, 1)
    g.landmark(17, 14, "lm_cave_bats")
    person(g, 5, 10, "!", "cave1:4,6")          # a sign nobody can read any more
    signpost(g, 16, 2, "cave1:gate")            # -> the Qilin's shrine
    g.set(11, 7, "⁂"); g.set(20, 21, "¡")
    g.land = (2, 12)
    return finish(g, [
        (24, 21, "side_cv_deep", "revives", 1),
        (4, 3, "side_cv_corner", "coins", 220),
    ], fill="^")


def main():
    grids = [thicket(), canopywalk(), outback(), savanna(), tundra(), taiga(), cave1()]
    # The routes' doors still aim at the old side areas; re-aimed here, when
    # (and only if) this region applies.
    inbound = [
        {"from": "route2", "tile": "0,11", "map": "thicket", "x": W - 2, "y": DOOR_ROW},
        {"from": "route3", "tile": "0,11", "map": "canopywalk", "x": W - 2, "y": DOOR_ROW},
        {"from": "route3", "tile": "27,11", "map": "cave1", "x": 1, "y": DOOR_ROW},
        {"from": "route4", "tile": "0,11", "map": "outback", "x": W - 2, "y": DOOR_ROW},
        {"from": "route5", "tile": "0,11", "map": "savanna", "x": W - 2, "y": DOOR_ROW},
        {"from": "route6", "tile": "0,11", "map": "tundra", "x": W - 2, "y": DOOR_ROW},
        {"from": "route8", "tile": "0,11", "map": "taiga", "x": W - 2, "y": DOOR_ROW},
        {"from": "shrine_qilin", "tile": "7,9", "map": "cave1", "x": 18, "y": 1},
    ]
    run("sides", "forge_sides.py", grids, inbound, GEN, "game.part125.jsx")


if __name__ == "__main__":
    main()
