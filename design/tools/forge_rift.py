"""The Rift, rebuilt full size: the Crossroads behind the Summit Citadel, its
six rifts, the story rooms off them, and the Twilight road to the First Story.

Run from the repo root:   python design/tools/forge_rift.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part133.jsx. The landmarks' words and drawings are in game.part132.jsx.

Ayr, 2026-09-26, of the post-game zones: "I want all of those to be larger too."

THE SHAPE. The Rift Crossroads is the hub (through the Citadel, for
Champions). Six rifts open off it - Olympus and the Hearth to the west, the
Aurora and the Celestial to the east, the Monsoon and the Twilight to the
north - and story rooms open off most rifts. From the Twilight Rift a road
runs on north as one continuous walk: the Weaving, the Deluge, the Underworld
Gate, the First Story. Everything else joins by doors, the hub's six and the
rifts' own. The whole zone ships as one region.

WHAT IT LOOKS LIKE. The rift palette: violet ground, a starfield for its
"trees", carved stone for its rock. Every sign that was here is still here;
each room's landmark is the real animal behind the kind of story told there.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import forgekit as fk  # noqa: E402
from forgekit import (Region, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, enclose, W, H)

GEN = 15   # fifteenth rebuild. A save made before this, standing here, is relocated.
MID, ROW = 13, 12

# Where a door sits on each edge, and where you land beside it.
EDGE = {
    "s": ((MID, H - 1), (MID, H - 2)), "e": ((W - 1, ROW), (W - 2, ROW)),
    "w": ((0, ROW), (1, ROW)),
    "n1": ((8, 0), (8, 1)), "n2": ((19, 0), (19, 1)), "n": ((MID, 0), (MID, 1)),
}


def door_at(g, side, to_map, to_xy):
    (x, y), (lx, ly) = EDGE[side]
    ch = "n" if side.startswith("n") else "s" if side == "s" else "e"
    if side == "s":
        road(g, [(MID, H - 1), (MID, H - 4)])
    elif side == "e":
        road(g, [(W - 4, ROW), (W - 1, ROW)])
    elif side == "w":
        road(g, [(0, ROW), (3, ROW)])
    else:
        road(g, [(x, 0), (x, 3)])
    g.door(x, y, ch, to_map, *to_xy)


def land_of(side):
    return EDGE[side][1]


def scenery(g, seed_shift=0):
    """The otherworld: violet grass, stones standing in it, pools of starlight."""
    r = g.rng
    for _ in range(3):
        tall(g, r.randint(5, 22), r.randint(4, 19), r.randint(2, 3), r.randint(1, 2))
    for _ in range(3):
        clump(g, r.randint(5, 22), r.randint(4, 19), 2, "^", 1)
    for _ in range(2):
        clump(g, r.randint(5, 22), r.randint(4, 19), 3, "T", 2)
    mere(g, r.randint(6, 21), r.randint(5, 18), 2, 1)
    flowers(g, 8, (3, 2, 24, 21))


def room(key, seed, doors, lm, lmxy, signs=(), people=(), pouch=None, closed="ns", land=None, route=None):
    """One rift room. doors: [(side, to_map, to_xy)]. The first door is the way
    you came in; the room's roads join every door through the middle."""
    g = base(key, seed, rocks=0.1)
    if closed:
        enclose(g, closed)
    for side, to_map, to_xy in doors:
        door_at(g, side, to_map, to_xy)
    road(g, route or [(3, ROW), (24, ROW)])
    if key == "rift1":
        g.set(15, 14, "¦")   # its lamp post
    road(g, [(MID, 3), (MID, H - 4)])
    g.landmark(*lmxy, lm)
    scenery(g)
    for (x, y), ident in signs:
        person(g, x, y, "!", ident)
    for (x, y), ident in people:
        person(g, x, y, "R", ident)
    g.land = land or land_of(doors[0][0])
    return finish(g, [pouch] if pouch else [])


# ----------------------------------------------------------------- hub ---
def hub():
    def mythhub():
        g = base("mythhub", 1601, rocks=0.1)
        enclose(g, "ns")
        door_at(g, "s", "summit", (7, 2))   # the step below the Citadel gate
        door_at(g, "w", "rift1", land_of("e"))
        door_at(g, "e", "rift2", land_of("w"))
        door_at(g, "n1", "rift5", land_of("s"))
        door_at(g, "n2", "rift6", land_of("s"))
        # the Hearth and the Celestial rifts, lower on the west and east sides
        road(g, [(0, 17), (3, 17)]); g.door(0, 17, "e", "rift3", *land_of("e"))
        road(g, [(W - 4, 17), (W - 1, 17)]); g.door(W - 1, 17, "e", "rift4", *land_of("w"))
        road(g, [(3, ROW), (24, ROW)]); road(g, [(3, 17), (24, 17)]); road(g, [(MID, 3), (MID, H - 4)])
        road(g, [(8, 3), (19, 3)])
        g.set(6, 20, "C"); g.set(6, 19, "¡"); g.set(10, 14, "¦"); g.set(16, 14, "¦")   # the old lamps and lantern
        g.landmark(18, 7, "lm_where_monsters_come_from")
        scenery(g)
        person(g, 8, 5, "!", "mythhub:4,1")     # MONSOON RIFT (north)
        person(g, 19, 5, "!", "mythhub:10,2")   # TWILIGHT RIFT (north)
        person(g, 4, 10, "!", "mythhub:4,3")    # OLYMPUS RIFT (west)
        person(g, 23, 10, "!", "mythhub:11,3")  # AURORA RIFT (east)
        person(g, 4, 15, "!", "mythhub:4,7")    # HEARTH RIFT (west)
        person(g, 23, 15, "!", "mythhub:11,7")  # CELESTIAL RIFT (east)
        person(g, 10, 20, "R", "mythhub:9,9")   # Ranger Tomas Reyes
        g.land = land_of("s")
        return finish(g, [(24, 21, "rift_hub_star", "revives", 1)])

    rooms = [mythhub()]
    rooms.append(room("rift1", 1611, [("e", "mythhub", (1, ROW))], "lm_cyclops", (8, 7),
                      [((16, 9), "rift1:7,3")], [((8, 16), "rift1:14,1")], (4, 3, "rift_r1", "treats", 3)))
    rooms.append(room("rift2", 1621, [("w", "mythhub", (W - 2, ROW)), ("n1", "rift_north", land_of("s")), ("n2", "rift_isles", land_of("s"))],
                      "lm_kraken", (18, 7), [((10, 9), "rift2:7,3")], [((18, 16), "rift2:13,2")], (24, 21, "rift_r2", "coins", 540)))
    rooms.append(room("rift3", 1631, [("e", "mythhub", (1, 17)), ("n1", "rift_africa", land_of("s")), ("n2", "rift_neareast", land_of("s"))],
                      "lm_sacred_ibis", (8, 7), [((16, 9), "rift3:7,3")], [((10, 16), "rift3:8,7")], (4, 21, "rift_r3", "berries", 3)))
    rooms.append(room("rift4", 1641, [("w", "mythhub", (W - 2, 17)), ("n", "rift_eastasia", land_of("s"))],
                      "lm_dragon_bones", (18, 7), [((10, 9), "rift4:7,3")], [((18, 16), "rift4:8,1")], (24, 21, "rift_r4", "antidote", 1)))
    rooms.append(room("rift5", 1651, [("s", "mythhub", (8, 1)), ("w", "rift_oceania", land_of("e"))],
                      "lm_komodo", (18, 7), [((10, 9), "rift5:7,3")], [((17, 16), "rift5:6,5")], (24, 3, "rift_r5", "bigberries", 1), closed="n"))
    # the story rooms
    for key, seed, side, back, lm, pouch in (
        ("rift_north", 1661, "s", ("rift2", (8, 1)), "lm_reindeer_eyes", ("rift_s_north", "coins", 560)),
        ("rift_isles", 1671, "s", ("rift2", (19, 1)), "lm_wild_hunt", ("rift_s_isles", "treats", 3)),
        ("rift_africa", 1681, "s", ("rift3", (8, 1)), "lm_aye_aye", ("rift_s_africa", "berries", 3)),
        ("rift_neareast", 1691, "s", ("rift3", (19, 1)), "lm_hoopoe", ("rift_s_neareast", "coins", 560)),
        ("rift_eastasia", 1701, "s", ("rift4", (MID, 1)), "lm_tanuki", ("rift_s_eastasia", "revives", 1)),
        ("rift_oceania", 1711, "e", ("rift5", (1, ROW)), "lm_wayfinding", ("rift_s_oceania", "bigberries", 1)),
        ("rift_arctic", 1721, "e", ("rift6", (1, ROW)), "lm_greenland_shark", ("rift_s_arctic", "antidote", 1)),
        ("rift_americas", 1731, "w", ("rift6", (W - 2, ROW)), "lm_potoo", ("rift_s_americas", "coins", 580)),
    ):
        rooms.append(room(key, seed, [(side, back[0], back[1])], lm, (18, 7),
                          [((10, 9), key + ":7,3")], [], (4, 3) + pouch))
    return rooms


# ------------------------------------------------------ the Twilight road ---
def twilight():
    def rift6():
        g = base("rift6", 1741, rocks=0.1)
        enclose(g, "s")
        door_at(g, "s", "mythhub", (19, 1))
        door_at(g, "w", "rift_arctic", land_of("e"))
        door_at(g, "e", "rift_americas", land_of("w"))
        road(g, [(3, ROW), (24, ROW)]); road(g, [(MID, 0), (MID, H - 4)])
        g.landmark(18, 7, "lm_mothman_crane")
        g.set(15, 14, "¦")   # its lamp post
        scenery(g)
        person(g, 10, 8, "!", "rift6:8,2")      # legends still being written
        person(g, 17, 16, "R", "rift6:9,5")     # Nomsa Dlamini
        g.land = land_of("s")
        return finish(g, [(4, 21, "rift_r6", "treats", 3)])

    def along(key, seed, lm, signs, people, pouch, last=False):
        g = base(key, seed, rocks=0.1)
        if last:
            enclose(g, "n")
        road(g, [(MID, H - 1), (MID, 12 if last else 0)])
        g.landmark(18, 8, lm)
        scenery(g)
        for (x, y), ident in signs:
            person(g, x, y, "!", ident)
        for (x, y), ident in people:
            person(g, x, y, "R", ident)
        g.land = (MID, 21)
        return finish(g, [pouch])

    return [
        rift6(),
        along("rift7", 1751, "lm_drongo", [((10, 8), "rift7:8,2")], [((17, 15), "rift7:13,3"), ((7, 17), "rift7:1,8")], (24, 3, "rift_r7", "coins", 600)),
        along("rift8", 1761, "lm_lungfish", [((10, 8), "rift8:7,3")], [((17, 15), "rift8:7,5")], (4, 3, "rift_r8", "berries", 3)),
        along("rift9", 1771, "lm_olm", [((10, 8), "rift9:8,2")], [((17, 15), "rift9:13,6")], (24, 21, "rift_r9", "revives", 1)),
        along("rift10", 1781, "lm_first_painting", [((10, 9), "rift10:7,3")], [], (4, 21, "rift_r10", "bigberries", 1), last=True),
    ]


def main():
    fk.run_regions("forge_rift.py", [
        ("rift_rooms", Region(["mythhub", "rift1", "rift2", "rift3", "rift4", "rift5", "rift_north", "rift_isles",
                               "rift_africa", "rift_neareast", "rift_eastasia", "rift_oceania", "rift_arctic",
                               "rift_americas"], {}, standalone=True), hub,
         [{"from": "summit", "tile": "7,0", "map": "mythhub", "x": MID, "y": H - 2}]),
        ("rift_twilight", Region(["rift6", "rift7", "rift8", "rift9", "rift10"],
                                 {("rift6", "rift7"): dict(road=MID, L=3, R=3), ("rift7", "rift8"): dict(road=MID, L=3, R=3),
                                  ("rift8", "rift9"): dict(road=MID, L=3, R=3), ("rift9", "rift10"): dict(road=MID, L=3, R=3)}),
         twilight, []),
    ], GEN, "game.part133.jsx", merge="rift")


if __name__ == "__main__":
    main()
