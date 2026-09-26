"""The Vigil, rebuilt full size: the gate, and four quiet paths.

Run from the repo root:   python design/tools/forge_vigil.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part129.jsx. The landmarks' words and drawings are in game.part128.jsx.

Ayr, 2026-09-26, of the post-game zones: "I want all of those to be larger too."

THE VIGIL IS A MEMORIAL. part67: "It is a memorial to animals that are gone.
It does not sparkle." So it is built quietly: dark yews for its edges (the
palette's tree was a candle, drawn as an emoji on every edge tile; part128
draws it as a yew, the tree of old memorial grounds), still water, low grass,
a few candles on the ground, and no clutter. Every sign that was here is still
here, word for word; the landmarks add what the signs do not say.

THE SHAPE. The Vigil Gate is the hub, reached from Gloam Town (for Champions).
Four paths leave it, each one continuous walk now:
  west       the Roll Call, the Striped Hollow, the Ice Wake
  east       the Island Grave, the Sky That Darkened
  north-west the Last Song, the Drowned Song
  north-east the Thin Edge, the Glass Ark, What We Kept
The last room is not sad, as the keeper promised; it keeps its own palette.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import forgekit as fk  # noqa: E402
from forgekit import (Region, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, enclose, W, H)

GEN = 13   # thirteenth rebuild. A save made before this, standing here, is relocated.
MID = 13


def yews(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def path_base(key, seed, first=False, last=False):
    g = base(key, seed, rocks=0.03)
    if first:
        enclose(g, "s")
    if last:
        enclose(g, "n")
    return g


def back_door(g, back_x, back_y):
    road(g, [(MID, H - 1), (MID, H - 4)])
    g.door(MID, H - 1, "s", "vigil", back_x, back_y)


def quiet(g, pools=(), grass=(), stands=()):
    """What every Vigil room has: still water, low grass, yews - and a few
    candles on the ground, and nothing else."""
    for p in pools:
        mere(g, *p)
    for t in grass:
        tall(g, *t)
    for s in stands:
        yews(g, *s)
    flowers(g, 4, (3, 2, 24, 21))


# ------------------------------------------------------------------ gate ---
def vigil():
    """The Vigil Gate: a quiet square, a keeper's house, and four paths."""
    g = base("vigil", 1201, rocks=0.03)
    enclose(g, "ns")
    road(g, [(1, 12), (25, 12)])
    road(g, [(MID, 22), (MID, 3)])
    road(g, [(8, 3), (19, 3)])
    road(g, [(8, 1), (8, 3)]); road(g, [(19, 1), (19, 3)])
    g.door(0, 12, "e", "vig1", MID, H - 2); g.set(0, 13, "T")
    g.door(W - 1, 12, "e", "vig4", MID, H - 2); g.set(W - 1, 13, "T")
    g.door(8, 0, "n", "vig6", MID, H - 2); g.set(9, 0, "T")
    g.door(19, 0, "n", "vig8", MID, H - 2); g.set(20, 0, "T")
    g.door(MID, H - 1, "s", "town9", 1, 16)
    g.set(7, 16, "C"); g.set(20, 16, "M")
    g.landmark(16, 8, "lm_vigil_candles")
    quiet(g, pools=[(6, 7, 2, 1), (21, 7, 2, 1)], stands=[(5, 19, 2), (22, 19, 2), (4, 4, 2), (23, 4, 2)])
    person(g, 10, 9, "!", "vigil:4,1")       # THE VIGIL - nothing here is invented
    person(g, 16, 10, "!", "vigil:11,1")     # the keeper's rule
    person(g, 10, 15, "!", "vigil:4,7")      # the paths
    person(g, 16, 15, "!", "vigil:11,7")     # the last room is not sad
    signpost(g, 3, 11, "vigil:west"); signpost(g, 24, 11, "vigil:east")
    signpost(g, 7, 4, "vigil:nw"); signpost(g, 20, 4, "vigil:ne")
    g.land = (MID, 20)
    return [finish(g, [(4, 21, "vig_gate_pool", "revives", 1)])]


def chain(keys, roads):
    return Region(keys, {(a, b): dict(road=r, L=3, R=3) for (a, b), r in zip(zip(keys, keys[1:]), roads)})


def one(key, seed, first, last, door, route, lm, lmxy, signs, people, pools, stands, pouch):
    """One Vigil room. The same shape every time on purpose - a memorial is
    not the place for variety for its own sake."""
    g = path_base(key, seed, first, last)
    if first:
        back_door(g, *door)
    road(g, route)
    g.landmark(*lmxy, lm)
    quiet(g, pools=pools, grass=[(6, 19, 3, 1), (21, 4, 2, 1)], stands=stands)
    for (x, y), ident in signs:
        person(g, x, y, "!", ident)
    for (x, y), ident in people:
        person(g, x, y, "R", ident)
    g.land = (MID, 21) if first else (route[0][0], 21)
    return finish(g, [pouch])


def west():
    return [
        one("vig1", 1211, True, False, (1, 12), [(MID, 20), (MID, 0)], "lm_thylacine_film", (18, 9),
            [((9, 8), "vig1:7,3"), ((17, 15), "vig1:7,7")], [((9, 14), "vig1:10,3")],
            [(20, 17, 2, 1)], [(5, 5, 2), (22, 5, 2)], (4, 3, "vig_v1_corner", "treats", 2)),
        one("vig2", 1221, False, False, None, [(13, 23), (13, 12), (11, 12), (11, 0)], "lm_tiger_census", (18, 8),
            [((8, 8), "vig2:7,3"), ((16, 15), "vig2:7,7")],
            [((6, 13), "vig2:3,3"), ((17, 19), "vig2:6,8"), ((21, 12), "vig2:14,8")],
            [(6, 18, 2, 1)], [(22, 4, 2), (5, 5, 2)], (24, 21, "vig_v2_hollow", "coins", 450)),
        one("vig3", 1231, False, True, None, [(11, 23), (11, 12)], "lm_mammoth_steppe", (17, 8),
            [((8, 9), "vig3:7,3"), ((16, 14), "vig3:7,7")], [((20, 12), "vig3:9,1"), ((7, 16), "vig3:1,8")],
            [(20, 17, 3, 2)], [(5, 5, 2), (22, 4, 2)], (4, 3, "vig_v3_ice", "bigberries", 1)),
    ]


def east():
    return [
        one("vig4", 1241, True, False, (W - 2, 12), [(MID, 20), (MID, 0)], "lm_dodo", (18, 9),
            [((9, 8), "vig4:7,3"), ((17, 15), "vig4:7,7")], [],
            [(6, 17, 3, 2)], [(22, 5, 2), (5, 4, 2)], (24, 21, "vig_v4_isle", "treats", 2)),
        one("vig5", 1251, False, True, None, [(13, 23), (13, 12)], "lm_martha", (18, 8),
            [((9, 9), "vig5:7,3"), ((17, 14), "vig5:7,7")], [],
            [(6, 16, 2, 1)], [(5, 5, 2), (22, 18, 2)], (4, 3, "vig_v5_sky", "coins", 460)),
    ]


def northwest():
    return [
        one("vig6", 1261, True, False, (8, 1), [(MID, 20), (MID, 0)], "lm_mosquito", (18, 9),
            [((9, 8), "vig6:7,3"), ((17, 15), "vig6:7,7")], [],
            [(6, 17, 2, 1)], [(22, 5, 2), (5, 4, 2)], (24, 21, "vig_v6_song", "berries", 3)),
        one("vig7", 1271, False, True, None, [(13, 23), (13, 12)], "lm_river_dolphin", (8, 8),
            [((16, 9), "vig7:7,3"), ((9, 15), "vig7:7,7")], [],
            [(19, 12, 4, 3)], [(5, 18, 2), (22, 4, 2)], (4, 3, "vig_v7_river", "antidote", 1)),
    ]


def northeast():
    return [
        one("vig8", 1281, True, False, (19, 1), [(MID, 20), (MID, 0)], "lm_frozen_zoo", (18, 9),
            [((9, 8), "vig8:7,3"), ((17, 15), "vig8:7,7")], [],
            [(6, 17, 2, 1)], [(22, 5, 2), (5, 4, 2)], (4, 3, "vig_v8_edge", "revives", 1)),
        one("vig9", 1291, False, False, None, [(13, 23), (13, 12), (11, 12), (11, 0)], "lm_chinampas", (18, 8),
            [((8, 8), "vig9:7,3"), ((16, 15), "vig9:7,7")], [],
            [(19, 13, 3, 2), (6, 17, 2, 1)], [(22, 4, 2), (5, 5, 2)], (24, 21, "vig_v9_ark", "coins", 480)),
        one("vig10", 1301, False, True, None, [(11, 23), (11, 12)], "lm_arabian_oryx", (17, 8),
            [((8, 9), "vig10:7,3"), ((16, 14), "vig10:7,7")], [],
            [(20, 17, 2, 1)], [(5, 5, 2), (22, 4, 2)], (4, 3, "vig_v10_kept", "bigberries", 1)),
    ]


def main():
    fk.run_regions("forge_vigil.py", [
        ("vigil_gate", Region(["vigil"], {}, standalone=True), vigil,
         [{"from": "town9", "tile": "0,16", "map": "vigil", "x": MID, "y": H - 2}]),
        ("vigil_west", chain(["vig1", "vig2", "vig3"], [13, 11]), west, []),
        ("vigil_east", chain(["vig4", "vig5"], [13]), east, []),
        ("vigil_nw", chain(["vig6", "vig7"], [13]), northwest, []),
        ("vigil_ne", chain(["vig8", "vig9", "vig10"], [13, 11]), northeast, []),
    ], GEN, "game.part129.jsx", merge="vigil")


if __name__ == "__main__":
    main()
