"""Hearthside, rebuilt full size: the breeders' estate, the Cattery and the
Kennels.

Run from the repo root:   python design/tools/forge_hearth.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part131.jsx. The landmarks' words and drawings are in game.part130.jsx.

Ayr, 2026-09-26, of the post-game zones: "I want all of those to be larger too."

THE SHAPE. Hearthside is the hub, behind Marula Town's latched gate (for
Champions). From it:
  west       the Cattery: the Sunroom, Long Coats, Shorthairs
  north-west the Cattery: the Wild Line (one room)
  east       the Kennels: the Yard, the Working Line, the Snow Yard
  north-east the Kennels: the Long Fence, the Retired, Rescue Row
Each path is one continuous walk now. The hub and its paths ship as one
region, like the Fossil Rift and the Vigil.

WHAT IT LOOKS LIKE. An estate: lawns, gravel walks, runs and yards, benches,
kennels and cat trees. The zone's palette draws its "tree" as a house and its
rock as a basket, which the game draws as a thicket; so the edges here are
hedges ('^'), and every sign that was here is still here.

The people here tell stories about the pet trade and about beavers damming a
stream; the landmarks stay out of both.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import forgekit as fk  # noqa: E402
from forgekit import (Region, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, enclose, rock_edges, W, H)

GEN = 14   # fourteenth rebuild. A save made before this, standing here, is relocated.
MID = 13


def hedges(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "^", spread)


def estate(key, seed, closed=""):
    g = base(key, seed, rocks=0)
    rock_edges(g)
    if closed:
        enclose(g, closed, ch="^", rocks=0)
    return g


def hedge_seam(r):
    return dict(road=r, L=3, R=3, row="^^^" + "g" * (r - 3) + ".." + "g" * (W - 3 - r - 2) + "^^^")


def chain(keys, roads):
    return Region(keys, {(a, b): hedge_seam(r) for (a, b), r in zip(zip(keys, keys[1:]), roads)})


def back_door(g, back_x, back_y):
    road(g, [(MID, H - 1), (MID, H - 4)])
    g.door(MID, H - 1, "s", "hearthgate", back_x, back_y)


# ------------------------------------------------------------------ hub ---
def hub():
    def hearthgate():
        """Hearthside: the house, the lawns, and the four ways out."""
        g = estate("hearthgate", 1401, "ns")
        road(g, [(1, 12), (25, 12)])
        road(g, [(MID, 22), (MID, 3)])
        road(g, [(8, 3), (19, 3)])
        road(g, [(8, 1), (8, 3)]); road(g, [(19, 1), (19, 3)])
        g.door(0, 12, "e", "cattery1", MID, H - 2); g.set(0, 13, "^")
        g.door(W - 1, 12, "e", "kennel1", MID, H - 2); g.set(W - 1, 13, "^")
        g.door(8, 0, "n", "cattery3", MID, H - 2); g.set(9, 0, "^")
        g.door(19, 0, "n", "kennel4", MID, H - 2); g.set(20, 0, "^")
        g.door(MID, H - 1, "s", "town2", 1, 11)
        g.set(7, 16, "C"); g.set(20, 16, "M"); g.set(5, 7, "H"); g.set(22, 7, "H")
        g.landmark(16, 8, "lm_first_dog")
        pond(g, 6, 19, 2, 1)
        hedges(g, 22, 20, 3); hedges(g, 4, 4, 2)
        flowers(g, 10, (3, 2, 24, 21))
        person(g, 10, 9, "!", "hearthgate:4,1")      # HEARTHSIDE
        person(g, 16, 10, "!", "hearthgate:11,1")    # the paths
        person(g, 10, 15, "!", "hearthgate:4,7")     # dogs split from wolves
        person(g, 16, 15, "!", "hearthgate:11,7")    # cats domesticated themselves
        person(g, 9, 6, "R", "hearthgate:2,2")       # Dr. Temperance Grandell
        signpost(g, 3, 11, "hearth:west"); signpost(g, 24, 11, "hearth:east")
        signpost(g, 7, 4, "hearth:nw"); signpost(g, 20, 4, "hearth:ne")
        pieces(g, [(11, 19, "bench"), (16, 19, "bench"), (4, 9, "garden"), (5, 9, "garden"), (23, 9, "doghouse")])
        g.land = (MID, 20)
        return finish(g, [(4, 21, "hth_hub_pond", "revives", 1)], fill="^")

    def cattery3():
        """The Wild Line: high fences, tall perches - hybrids of wild cats."""
        g = estate("cattery3", 1411, "ns")
        back_door(g, 8, 1)
        road(g, [(MID, 20), (MID, 8)])
        g.landmark(18, 8, "lm_serval")
        tall(g, 6, 6, 3, 2); tall(g, 21, 17, 3, 2); hedges(g, 6, 16, 3); hedges(g, 22, 4, 2)
        flowers(g, 8, (3, 2, 24, 21))
        person(g, 9, 9, "!", "cattery3:7,3")         # THE WILD LINE
        person(g, 17, 14, "!", "cattery3:7,7")       # an F1 Savannah
        pieces(g, [(20, 12, "cattree"), (7, 13, "cattree")])
        g.land = (MID, 21)
        return finish(g, [(4, 3, "hth_c3_perch", "bigberries", 1)], fill="^")

    return [hearthgate(), cattery3()]


# --------------------------------------------------------------- cattery ---
def cattery():
    def cattery1():
        """The Sunroom: glass, warm floors, cats asleep in every patch of sun."""
        g = estate("cattery1", 1421, "s")
        back_door(g, 1, 12)
        road(g, [(MID, 20), (MID, 0)])
        g.landmark(18, 9, "lm_cyprus_cat")
        patch(g, 7, 8, 3, 2); patch(g, 19, 17, 3, 2)
        hedges(g, 5, 16, 2); hedges(g, 22, 4, 2)
        flowers(g, 10, (3, 2, 24, 21))
        person(g, 9, 11, "!", "cattery1:7,3")        # THE CATTERY
        person(g, 17, 15, "!", "cattery1:7,7")       # the Scottish Fold
        person(g, 9, 18, "R", "cattery1:13,8")       # Rescue Lead Hana Okada
        pieces(g, [(6, 7, "cattree"), (20, 7, "cattree"), (8, 20, "bench")])
        g.land = (MID, 21)
        return finish(g, [(24, 21, "hth_c1_sun", "treats", 3)], fill="^")

    def cattery2():
        """Long Coats: cold-country cats, and the grooming tables."""
        g = estate("cattery2", 1431)
        road(g, [(13, 23), (13, 12), (11, 12), (11, 0)])
        g.landmark(18, 8, "lm_fel_d_1")
        hedges(g, 6, 5, 2); hedges(g, 21, 18, 3)
        flowers(g, 10, (3, 2, 24, 21))
        person(g, 17, 4, "R", "cattery2:9,1")        # "What keeping one properly costs"
        person(g, 6, 9, "R", "cattery2:1,3")         # "What is actually coming in"
        person(g, 8, 14, "!", "cattery2:7,3")        # long coats
        person(g, 16, 16, "!", "cattery2:7,7")       # the Persian
        person(g, 21, 12, "R", "cattery2:14,8")      # "Where they come from"
        pieces(g, [(7, 19, "cattree"), (20, 21, "bench")])
        g.land = (MID, 21)
        return finish(g, [(4, 21, "hth_c2_coats", "coins", 500)], fill="^")

    def cattery4():
        """Shorthairs: the plainest cats, the closest to the wildcat."""
        g = estate("cattery4", 1441, "n")
        road(g, [(11, 23), (11, 12)])
        g.landmark(18, 9, "lm_ship_cats")
        hedges(g, 6, 6, 3); hedges(g, 21, 18, 2)
        flowers(g, 10, (3, 2, 24, 21))
        person(g, 6, 12, "R", "cattery4:1,1")        # "Whether captive breeding takes the pressure off"
        person(g, 15, 13, "!", "cattery4:7,3")       # SHORTHAIRS
        person(g, 8, 17, "!", "cattery4:7,7")        # a sign worn past reading
        person(g, 21, 14, "R", "cattery4:14,8")      # "What the good keepers have in common"
        pieces(g, [(20, 6, "cattree"), (6, 20, "bench")])
        g.land = (12, 21)
        return finish(g, [(4, 3, "hth_c4_short", "berries", 3)], fill="^")

    return [cattery1(), cattery2(), cattery4()]


# --------------------------------------------------------------- kennels ---
def kennels():
    def kennel1():
        """The Yard: runs, a sandpit, balls lost in the hedge."""
        g = estate("kennel1", 1451, "s")
        back_door(g, W - 2, 12)
        road(g, [(MID, 20), (MID, 0)])
        g.landmark(18, 9, "lm_dog_nose")
        patch(g, 7, 7, 3, 2); patch(g, 19, 17, 3, 2)
        hedges(g, 5, 16, 2); hedges(g, 22, 4, 2)
        flowers(g, 8, (3, 2, 24, 21))
        person(g, 9, 11, "!", "kennel1:7,3")         # THE KENNELS
        person(g, 16, 5, "R", "kennel1:9,3")         # Ada Oyelaran
        person(g, 17, 15, "!", "kennel1:7,7")        # the pug and the bulldog
        pieces(g, [(6, 20, "doghouse"), (21, 7, "doghouse"), (8, 4, "bench")])
        g.land = (MID, 21)
        return finish(g, [(24, 21, "hth_k1_yard", "treats", 3)], fill="^")

    def kennel2():
        """The Working Line: a training field, jumps and gates - and a stream
        at the bottom of the field."""
        g = estate("kennel2", 1461)
        g.rect(3, 19, W - 4, 19, "W")
        road(g, [(13, 23), (13, 12), (11, 12), (11, 0)])
        g.landmark(19, 8, "lm_scent_dogs")
        hedges(g, 6, 5, 2); hedges(g, 22, 15, 2)
        flowers(g, 8, (3, 2, 24, 21))
        person(g, 6, 10, "R", "kennel2:4,3")         # "What the dam is holding"
        person(g, 8, 15, "!", "kennel2:7,3")         # a border collie
        person(g, 17, 14, "!", "kennel2:7,7")        # the Dalmatian and the greyhound
        person(g, 5, 21, "R", "kennel2:1,8")         # "How fast they rebuild"
        person(g, 21, 21, "R", "kennel2:14,8")       # "What the flooding is doing further down"
        pieces(g, [(17, 4, "doghouse"), (7, 5, "bench")])
        g.land = (MID, 22)
        return finish(g, [(24, 3, "hth_k2_field", "coins", 520)], fill="^")

    def kennel3():
        """The Snow Yard: sled runs, harness racks, a lodge."""
        g = estate("kennel3", 1471, "n")
        mere(g, 19, 8, 3, 2)
        road(g, [(11, 23), (11, 12)])
        g.landmark(7, 8, "lm_serum_run")
        hedges(g, 21, 18, 3); hedges(g, 5, 17, 2)
        flowers(g, 8, (3, 2, 24, 21))
        person(g, 21, 13, "R", "kennel3:14,1")       # "Who is in the lodge"
        person(g, 15, 10, "!", "kennel3:7,3")        # THE SNOW YARD
        person(g, 16, 5, "R", "kennel3:7,5")         # "Why they are damming here and not elsewhere"
        person(g, 8, 14, "!", "kennel3:7,7")         # Barry
        pieces(g, [(8, 18, "sled"), (15, 18, "sled"), (5, 12, "doghouse")])
        g.land = (12, 21)
        return finish(g, [(24, 21, "hth_k3_snow", "antidote", 1)], fill="^")

    return [kennel1(), kennel2(), kennel3()]


def longfence():
    def kennel4():
        """The Long Fence: a very long, very high fence, and what is behind it."""
        g = estate("kennel4", 1481, "s")
        back_door(g, 19, 1)
        road(g, [(MID, 20), (MID, 0)])
        for y in range(3, 21):                        # the long fence itself
            if y not in (11, 12):
                g.set(20, y, "¡")
        g.landmark(8, 8, "lm_guardian_dogs")
        hedges(g, 5, 16, 2); tall(g, 24, 8, 1, 3)
        flowers(g, 8, (3, 2, 24, 21))
        person(g, 9, 11, "!", "kennel4:7,3")         # THE LONG FENCE
        person(g, 16, 15, "!", "kennel4:7,7")        # the wolves who chose the fire
        g.land = (MID, 21)
        return finish(g, [(24, 21, "hth_k4_fence", "revives", 1)], fill="^")

    def kennel5():
        """The Retired: soft beds, a sunny lawn, very little running."""
        g = estate("kennel5", 1491)
        road(g, [(13, 23), (13, 12), (11, 12), (11, 0)])
        g.landmark(18, 8, "lm_old_dogs")
        hedges(g, 6, 5, 2); hedges(g, 21, 18, 2)
        flowers(g, 12, (3, 2, 24, 21))
        person(g, 8, 14, "!", "kennel5:7,3")         # THE RETIRED
        person(g, 16, 15, "!", "kennel5:7,7")        # working dogs retire too
        pieces(g, [(6, 9, "bench"), (20, 13, "doghouse"), (7, 19, "garden"), (8, 19, "garden")])
        g.land = (MID, 21)
        return finish(g, [(24, 3, "hth_k5_lawn", "berries", 3)], fill="^")

    def rescue():
        """Rescue Row: every kind of mix, and all of them waiting."""
        g = estate("rescue", 1501, "n")
        road(g, [(11, 23), (11, 12)])
        g.landmark(18, 8, "lm_mixed_breed")
        hedges(g, 6, 5, 2); hedges(g, 21, 18, 2)
        flowers(g, 12, (3, 2, 24, 21))
        person(g, 15, 11, "!", "rescue:7,3")         # RESCUE ROW
        person(g, 8, 15, "!", "rescue:7,7")          # you walked past them all
        pieces(g, [(6, 9, "doghouse"), (20, 13, "cattree"), (7, 19, "doghouse"), (20, 20, "bench")])
        g.land = (12, 21)
        return finish(g, [(4, 21, "hth_rescue", "bigberries", 1)], fill="^")

    return [kennel4(), kennel5(), rescue()]


def main():
    fk.run_regions("forge_hearth.py", [
        ("hearth_hub", Region(["hearthgate", "cattery3"], {}, standalone=True), hub,
         [{"from": "town2", "tile": "0,11", "map": "hearthgate", "x": MID, "y": H - 2}]),
        ("hearth_cattery", chain(["cattery1", "cattery2", "cattery4"], [13, 11]), cattery, []),
        ("hearth_kennels", chain(["kennel1", "kennel2", "kennel3"], [13, 11]), kennels, []),
        ("hearth_longfence", chain(["kennel4", "kennel5", "rescue"], [13, 11]), longfence, []),
    ], GEN, "game.part131.jsx", merge="hearth")


if __name__ == "__main__":
    main()
