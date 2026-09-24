"""The savanna, rebuilt: Baobab Base north to Marula Town as one continuous walk.

Run from the repo root:   python design/tools/forge_savanna.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part104.jsx.

THE SHAPE. Eight outdoor maps stacked south to north, all 28 wide so every seam
lines up column for column - Baobab Base at the bottom, then the Acacia Trail,
the five road segments, and Marula Town at the top. 28x24 is the size worked out
on 2026-09-23 for a 15x13 phone camera: large enough that roughly half of any
map is free of void. The three rooms off this road - the Archive and the two
shrines - stay small, as Fire Red's interiors do.

THE ROAD MOVES ACROSS EACH SEAM. Every seam opens at a different column, so the
trail has to cross each map to find the next one instead of running straight up
a single column for two hundred tiles. That is most of what makes it a route and
not a corridor.

EVERY PERSON HERE ALREADY EXISTS. Nobody is added and nobody is removed. Each is
placed under the identity key they have always had (see mapforge), which is what
keeps their story, their rematch, and the beaten-flag in every old save pointed
at the right person. The four signs on the road segments are the one
restoration: their text was always there, but their sign tiles had been cleared
at some point, so nothing could be read. They stand again.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mapforge import Grid, check, check_seam, preview, emit_js  # noqa: E402

W, H = 28, 24
GEN = 1   # first rebuild. A save made before this, standing here, is relocated.

# Seams between each map and the next one north: (x0, x1) of the open gap.
SEAM = {
    ("town1", "route1"): (12, 15),
    ("route1", "seg_m1"): (5, 8),
    ("seg_m1", "seg_m2"): (18, 21),
    ("seg_m2", "seg_m3"): (11, 14),
    ("seg_m3", "seg_m4"): (4, 7),
    ("seg_m4", "seg_m5"): (16, 19),
    ("seg_m5", "town2"): (12, 15),
}
CHAIN = ["town1", "route1", "seg_m1", "seg_m2", "seg_m3", "seg_m4", "seg_m5", "town2"]


def base(key, seed, edge="T"):
    g = Grid(key, W, H, ".", seed)
    g.border(edge, thick=2)
    i = CHAIN.index(key)
    if i > 0:
        g.gap("s", *SEAM[(CHAIN[i - 1], key)])
    if i < len(CHAIN) - 1:
        g.gap("n", *SEAM[(key, CHAIN[i + 1])])
    return g


# ---------------------------------------------------------------- town1 ---
def town1():
    """Baobab Base. The first place anyone sees, so it should look lived in:
    the Professor's tent with the mess outside it (the sign says so), a pond,
    lamps, a square. South is the edge of the world - closed. North is the gate
    to the trail. East is the door to the Naturalist's Archive."""
    g = base("town1", 11)
    # the avenue from the north gate down to the square
    g.road([(13, 0), (13, 17)], ".", 2)
    g.road([(8, 17), (19, 17)], ".", 2)
    # the east lane to the Archive
    g.road([(15, 13), (26, 13)], ".", 1)
    g.door(27, 13, "e", "archive", 7, 1)
    # pond, with reeds of short grass round it
    g.blob(6, 12, 3, 2, "g", 0.15)
    g.rect(5, 11, 7, 13, "W")
    g.blob(22, 20, 3, 1, "g", 0.3)
    # houses and lamps
    g.set(5, 5, "H"); g.set(9, 7, "H"); g.set(22, 9, "H")
    g.set(10, 16, "C")     # care center, on the square
    g.set(18, 16, "M")     # the trading post opposite it
    for x, y in ((4, 4), (11, 4), (16, 4), (23, 7), (11, 19), (20, 19), (4, 16)):
        g.set(x, y, "¦")
    # the Professor's tent, and the mess
    g.set(19, 5, "P")
    g.set(21, 5, "¡"); g.set(20, 3, "¡")
    g.scatter("*", 12, (3, 3, 24, 21), avoid={(x, y) for x in range(12, 17) for y in range(0, 20)})
    g.scatter("g", 10, (3, 3, 24, 21))
    g.scatter("T", 4, (3, 3, 24, 8), avoid={(x, y) for x in range(11, 18) for y in range(0, 9)})

    # people, under the names they have always had
    g.person(12, 3, "!", "town1:8,2")      # the gate sign - the trail starts north
    g.person(18, 6, "R", "town1:9,2")      # Prof. Amara, outside her tent
    g.person(4, 18, "R", "town1:3,8")      # Keeper Ruth, by the start
    g.person(22, 15, "R", "town1:16,8")    # Nan Ifeoma
    g.person(16, 20, "V", "town1:9,10")    # Kid Tobi
    g.person(8, 19, "!", "town1:8,12")     # "Every ranger starts here"
    g.land = (6, 19)                       # new game, blackout, relocated saves
    return g


# --------------------------------------------------------------- route1 ---
def route1():
    """The Acacia Trail. The first real route: tall grass either side of a dirt
    track, acacias, and Zuri waiting in the one gap through the thornbrake at
    the north end - she blocks it until you beat her, which is the point of her
    (part84). Thabo keeps his hives just off the track."""
    g = base("route1", 22)
    g.road([(13, 23), (13, 15), (6, 15), (6, 0)], ".", 2)
    g.blob(20, 18, 5, 3, "G", 0.3)
    g.blob(4, 19, 2, 3, "G", 0.25)
    g.blob(19, 8, 6, 4, "G", 0.3)
    g.blob(12, 10, 3, 2, "G", 0.3)
    g.scatter("T", 14, (2, 2, 25, 21), avoid={(x, y) for x in range(4, 16) for y in range(0, 24)})
    # the thornbrake: a hedge of trees across the top, one gap, and Zuri in it
    g.rect(2, 4, 25, 4, "T")
    g.set(6, 4, "V"); g.cast["6,4"] = "route1:7,1"; g.allow_block.add("6,4")
    # The track is two wide and the gap is one, so the hedge takes the other
    # half of the track here. Deliberate, and the only tree allowed on a road.
    g.set(7, 4, "T"); g.road_set.discard((7, 4))
    # Thabo's apiary
    g.set(10, 19, "⁃"); g.set(10, 21, "⁃")
    g.person(11, 20, "R", "route1:5,12")   # Thabo Sithole
    g.person(9, 13, "R", "route1:4,4")     # Scout Jabu, at the bend
    g.person(16, 11, "R", "route1:11,10")  # Sprout Bo, by the grass
    g.set(15, 16, "⁂")                     # tracks
    g.set(8, 7, "⁌")                       # a page somebody left (note 1)
    g.set(3, 12, "¡"); g.set(22, 14, "¦")
    g.scatter("*", 8, (2, 2, 25, 21))
    g.land = (13, 21)
    return g


# --------------------------------------------------------------- seg_m1 ---
def seg_m1():
    """Fernhollow Path. A wooded hollow: denser trees, fern (short grass), a
    pool off to the west. The track crosses it diagonally."""
    g = base("seg_m1", 31)
    g.road([(6, 23), (6, 12), (19, 12), (19, 0)], ".", 2)
    g.blob(5, 5, 3, 3, "g", 0.2)
    g.rect(4, 4, 6, 6, "W")
    g.blob(12, 18, 4, 3, "G", 0.3)
    g.blob(22, 6, 3, 4, "G", 0.3)
    g.blob(13, 5, 3, 2, "G", 0.3)
    g.scatter("T", 26, (2, 2, 25, 21), avoid={(x, y) for x in range(5, 22) for y in range(11, 15)}
              | {(x, y) for x in range(5, 9) for y in range(12, 24)}
              | {(x, y) for x in range(18, 22) for y in range(0, 14)})
    g.person(3, 16, "R", "seg_m1:1,5")     # Ranger Pim
    g.person(23, 14, "R", "seg_m1:13,5")   # Watcher Esi
    g.person(17, 3, "R", "seg_m1:6,1")     # Herder Ade
    g.person(9, 9, "R", "seg_m1:6,7")      # Drover Ulla
    g.set(10, 20, "⁃")
    g.person(11, 21, "R", "seg_m1:6,10")   # the hive rows - a Beeloud finding
    g.set(15, 8, "⁂"); g.set(24, 19, "¡"); g.set(21, 10, "¦")
    g.scatter("*", 6, (2, 2, 25, 21))
    g.land = (7, 21)
    return g


# --------------------------------------------------------------- seg_m2 ---
def seg_m2():
    """Sunmote Meadow. Open ground, the most tall grass on the road, flowers,
    and a pond where the tadpole sign stands. The Trampled Round - a shrine -
    is through the gap in the west hedge."""
    g = base("seg_m2", 47)
    g.road([(19, 23), (19, 16), (12, 16), (12, 0)], ".", 2)
    g.road([(1, 11), (12, 11)], ".", 2)
    g.door(0, 11, "e", "shrine_bramwold", 7, 8)
    g.set(0, 12, "T")
    g.blob(6, 18, 4, 3, "G", 0.3)
    g.blob(22, 8, 4, 5, "G", 0.3)
    g.blob(6, 5, 4, 3, "G", 0.3)
    g.blob(17, 20, 2, 1, "G", 0.3)
    g.blob(20, 3, 2, 1, "g", 0.2)
    g.rect(19, 2, 21, 3, "W")
    g.scatter("*", 22, (2, 2, 25, 21))
    g.scatter("T", 8, (2, 2, 25, 21), avoid={(x, y) for x in range(10, 22) for y in range(0, 24)}
              | {(x, y) for x in range(0, 14) for y in range(10, 14)})
    g.person(21, 21, "!", "seg_m2:7,4")    # the road sign
    g.person(18, 4, "!", "seg_m2:7,3")     # the tadpole, by the pond
    g.person(15, 9, "R", "seg_m2:9,4")     # Ranger Ade
    g.person(9, 14, "R", "seg_m2:5,7")     # Watcher Pim
    g.person(22, 14, "R", "seg_m2:9,7")    # Drover Esi
    g.person(9, 3, "R", "seg_m2:4,3")      # Herder Jax
    g.set(4, 9, "⁃"); g.set(16, 18, "⁂"); g.set(24, 17, "¡")
    g.land = (20, 21)
    return g


# --------------------------------------------------------------- seg_m3 ---
def seg_m3():
    """The Old Fence Line. A line of old posts and fallen rails runs right
    across the map with one break in it, and the track goes through the break.
    Rachel Carsen is here - watching the fence, and what grows either side."""
    g = base("seg_m3", 53)
    g.road([(12, 23), (12, 14), (5, 14), (5, 0)], ".", 2)
    # the fence: rails and posts, one gap where the track crosses
    for x in range(2, 26):
        g.set(x, 12, "¡" if x % 3 else "T")
    g.rect(5, 12, 6, 12, ".")
    g.blob(19, 18, 5, 3, "G", 0.3)
    g.blob(18, 6, 6, 3, "G", 0.3)
    g.blob(9, 19, 2, 2, "G", 0.3)
    g.rect(22, 15, 24, 16, "W")
    g.scatter("T", 12, (2, 2, 25, 21), avoid={(x, y) for x in range(3, 15) for y in range(0, 24)})
    g.scatter("*", 8, (2, 2, 25, 21))
    g.person(8, 9, "R", "seg_m3:4,4")      # Rachel Carsen
    g.person(3, 17, "R", "seg_m3:3,4")     # Herder Uzo
    g.person(16, 10, "R", "seg_m3:11,4")   # Watcher Ade
    g.set(15, 20, "⁃")
    g.person(16, 21, "R", "seg_m3:5,10")   # the old hives - a Beeloud finding
    g.set(10, 5, "⁂")
    g.land = (13, 21)
    return g


# --------------------------------------------------------------- seg_m4 ---
def seg_m4():
    """Beeloud Clearing. The heart of Thabo's story: the wrecked outer hives, a
    ring of stands, flowers everywhere because bees. Karl von Frische - the man
    who worked out the waggle dance - is watching them. The Hollow Mound shrine
    is off the west edge."""
    g = base("seg_m4", 61)
    g.road([(5, 23), (5, 17), (17, 17), (17, 0)], ".", 2)
    g.road([(1, 9), (17, 9)], ".", 2)
    g.door(0, 9, "e", "shrine_myrmedon", 7, 8)
    g.set(0, 10, "T")
    g.blob(10, 4, 5, 2, "G", 0.3)
    g.blob(23, 14, 3, 5, "G", 0.3)
    g.blob(10, 20, 3, 2, "G", 0.3)
    g.scatter("*", 30, (2, 2, 25, 21))
    for x, y in ((21, 6), (23, 8), (20, 10)):
        g.set(x, y, "⁃")
    g.rect(3, 13, 4, 14, "W")
    g.set(24, 3, "^"); g.set(25, 4, "^"); g.set(3, 5, "^")
    g.person(22, 8, "R", "seg_m4:13,8")    # the wrecked hives
    g.person(20, 12, "R", "seg_m4:1,3")    # Karl von Frische, watching them
    g.person(8, 12, "R", "seg_m4:1,4")     # Watcher Jax
    g.person(12, 19, "R", "seg_m4:14,4")   # Drover Ade
    g.person(14, 4, "R", "seg_m4:6,2")     # Ranger Uzo
    g.person(19, 15, "!", "seg_m4:7,3")    # the chrysalis
    g.set(9, 7, "⁌")                       # a page somebody left (note 2)
    g.set(13, 14, "⁂"); g.set(3, 20, "¡")
    g.land = (6, 21)
    return g


# --------------------------------------------------------------- seg_m5 ---
def seg_m5():
    """Marula Approach. The land opens out toward town: the big marula trees,
    under one of which the cubs were hiding, and the road sign for Marula."""
    g = base("seg_m5", 71)
    g.road([(17, 23), (17, 11), (13, 11), (13, 0)], ".", 2)
    g.blob(7, 17, 4, 4, "G", 0.3)
    g.blob(22, 5, 3, 3, "G", 0.3)
    g.blob(6, 5, 3, 2, "G", 0.3)
    g.rect(22, 15, 23, 17, "W")
    for x, y in ((4, 10), (8, 11), (22, 11), (24, 20), (9, 4), (20, 19)):
        g.set(x, y, "T")
    g.scatter("*", 10, (2, 2, 25, 21))
    g.scatter("g", 10, (2, 2, 25, 21))
    g.person(16, 3, "!", "seg_m5:7,4")     # the road sign
    g.person(11, 15, "R", "seg_m5:5,8")    # Herder Otto
    g.person(21, 8, "R", "seg_m5:11,8")    # Ranger Fen
    g.person(5, 11, "R", "seg_m5:3,10")    # under the marula roots
    g.set(3, 17, "⁃"); g.set(20, 13, "⁂"); g.set(10, 7, "¡")
    g.land = (18, 21)
    return g


# ---------------------------------------------------------------- town2 ---
def town2():
    """Marula Town, the first arena. The guard stands in the north gate, so the
    road on to the Fen goes through the gym - the same rule as before. Zuri
    waits beside the arena. Hearthside's latched gate is on the west road, for
    Champions only."""
    g = base("town2", 83)
    # the north gate: one gap in the hedge, the guard in it, the door behind
    g.rect(2, 0, 25, 1, "T")
    g.set(13, 1, "."); g.door(13, 0, "n", "route2", 7, 14)
    g.set(13, 2, "X"); g.allow_block.add("13,2")
    g.set(12, 2, "T"); g.set(14, 2, "T")
    g.road([(13, 3), (13, 23)], ".", 2)
    g.road([(4, 12), (22, 12)], ".", 2)
    g.road([(1, 12), (4, 12)], ".", 1)
    g.door(0, 12, "e", "hearthgate", 7, 8, req="champion",
           reqMsg="🏡 A breeder's gate, latched. \"Hearthside is for Champions — folks who've met enough wild animals to think properly about the tame ones. Come back after the Citadel.\"")
    g.set(0, 13, "T")
    g.set(17, 5, "Y")                      # the arena
    g.set(8, 9, "C"); g.set(19, 15, "M"); g.set(6, 18, "H")
    for x, y in ((11, 4), (16, 4), (4, 10), (22, 10), (11, 18), (16, 18), (4, 15)):
        g.set(x, y, "¦")
    g.blob(22, 20, 3, 2, "g", 0.2)
    g.rect(21, 19, 23, 20, "W")
    g.scatter("*", 14, (2, 3, 25, 21), avoid={(x, y) for x in range(12, 16) for y in range(0, 24)})
    g.scatter("g", 8, (2, 3, 25, 21))
    g.person(11, 7, "!", "town2:9,3")      # MARULA TOWN - first arena
    g.person(11, 20, "!", "town2:8,12")    # a sign worn past reading - it always was
    g.person(7, 10, "R", "town2:3,8")      # Vet Adaeze, by the care center
    g.person(18, 14, "V", "town2:9,10")    # Trader Osk, by the post
    g.person(16, 6, "R", "town2:13,11")    # Zuri, beside the arena door
    g.land = (13, 21)
    return g


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
        {"from": "archive", "tile": "7,0", "map": "town1", "x": 26, "y": 13},
        {"from": "shrine_bramwold", "tile": "7,9", "map": "seg_m2", "x": 1, "y": 11},
        {"from": "shrine_myrmedon", "tile": "7,9", "map": "seg_m4", "x": 1, "y": 9},
        {"from": "hearthgate", "tile": "7,9", "map": "town2", "x": 1, "y": 12},
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
