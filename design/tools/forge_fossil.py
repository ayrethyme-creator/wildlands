"""The Fossil Rift, rebuilt full size: the camp, and three digs that are each
one continuous walk now.

Run from the repo root:   python design/tools/forge_fossil.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part127.jsx. The landmarks' words and drawings are in game.part126.jsx.

Ayr, 2026-09-26, of the post-game zones: "I want all of those to be larger too."

THE SHAPE. Fossil Rift Camp is the hub, reached from the Singing Dunes (for
Champions). From it three digs run north into the rock - the Triassic (three
maps), the Jurassic (three) and the Cretaceous (four) - and each dig is now
one continuous walk, map into map, the way the main road is. The camp's doors
lead into the first map of each.

WHAT IT LOOKS LIKE. Badlands: pale dry ground, banded rock (the palette draws
'^' as a dune/rock and 'T' as a great bone, so the edges are rock and bones
stand out only where something is exposed), bone beds laid bare, a dry wash,
an old sea floor. Every sign that was here is still here.

THE DIG STORY. The people in the digs tell a story about fossils being taken
and sold; the landmarks stay out of it.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import forgekit as fk  # noqa: E402
from forgekit import (Region, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, enclose, rock_edges, W, H)

GEN = 12   # twelfth rebuild. A save made before this, standing here, is relocated.
MID = 13   # every map's door and landing column


def bones(g, cx, cy, n, spread=2):
    """A few big bones exposed in the rock (the palette draws 'T' as a bone)."""
    clump(g, cx, cy, n, "T", spread)


def rocks(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


def beds(g, cx, cy, rx, ry):
    """A bone bed: bare, dug-over ground."""
    patch(g, cx, cy, rx, ry)


def dig_base(key, seed, first=False, last=False):
    """A map in a dig: badland rock for edges, closed at the far end of the
    dig, and at its start a door back down to the camp."""
    g = base(key, seed, rocks=0.15)
    rock_edges(g)
    if first:
        enclose(g, "s", ch="^")
    if last:
        enclose(g, "n", ch="^")
    return g


def branch_door(g, back_x, back_y):
    road(g, [(MID, H - 1), (MID, H - 4)])
    g.door(MID, H - 1, "s", "digsite", back_x, back_y)


# ------------------------------------------------------------------ camp ---
def digsite():
    """Fossil Rift Camp: tents, the field lab, the finds tables - and the
    three digs going off into the rock, north, east and south."""
    g = base("digsite", 1001, rocks=0.15)
    rock_edges(g)
    enclose(g, "ns", ch="^")
    road(g, [(1, 12), (25, 12)])
    road(g, [(MID, 1), (MID, 22)])
    g.door(0, 12, "e", "route4", W - 2, 11)
    g.set(0, 13, "^")
    g.door(MID, 0, "n", "dig3", MID, H - 2)          # the Cretaceous, north
    g.door(W - 1, 12, "e", "dig2", MID, H - 2)       # the Jurassic, east
    g.set(W - 1, 13, "^")
    g.door(MID, H - 1, "s", "dig1", MID, H - 2)      # the Triassic, south
    g.landmark(18, 7, "lm_field_jacket")
    g.set(7, 8, "C"); g.set(20, 17, "M")
    beds(g, 6, 18, 3, 2); bones(g, 22, 4, 2); rocks(g, 5, 4, 2); rocks(g, 23, 20, 2)
    flowers(g, 6, (3, 2, 24, 21))
    person(g, 10, 9, "!", "digsite:4,2")     # FOSSIL RIFT CAMP
    person(g, 16, 9, "!", "digsite:11,2")    # not everything is a dinosaur
    person(g, 10, 15, "!", "digsite:6,4")    # dig etiquette
    person(g, 16, 15, "!", "digsite:4,9")    # camp rumour
    signpost(g, 11, 2, "digsite:north")
    signpost(g, 24, 10, "digsite:east")
    signpost(g, 11, 21, "digsite:south")
    pieces(g, [(4, 9, "tent"), (8, 20, "tent"), (22, 8, "crates"), (18, 16, "crates"), (4, 15, "bench")])
    g.land = (MID, 13)
    return [finish(g, [(4, 21, "fos_camp_beds", "revives", 1)], fill="^")]


# -------------------------------------------------------------- Triassic ---
def triassic():
    def dig1():
        """Triassic Beds: after the Great Dying, the first dinosaurs among
        everything else. Footprints in the old mud."""
        g = dig_base("dig1", 1011, first=True)
        branch_door(g, MID, 21)
        road(g, [(MID, 20), (MID, 12), (12, 12), (12, 0)])
        g.landmark(19, 9, "lm_chirotherium")
        beds(g, 19, 11, 3, 2); tall(g, 6, 6, 3, 2); tall(g, 21, 18, 3, 2); bones(g, 6, 17, 2); rocks(g, 22, 4, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 8, 9, "R", "dig1:2,2")         # Mary Annering
        person(g, 17, 5, "R", "dig1:6,2")        # Charles Darwen
        person(g, 16, 16, "!", "dig1:8,3")       # TRIASSIC
        g.land = (MID, 21)
        return finish(g, [(4, 3, "fos_d1_corner", "treats", 3)], fill="^")

    def dig1b():
        """The Bone Wash: a flash-flood channel full of sorted bones."""
        g = dig_base("dig1b", 1021)
        road(g, [(12, 23), (12, 14), (14, 14), (14, 0)])
        g.rect(3, 9, W - 4, 10, ".")                  # the dry wash across the map
        g.landmark(8, 8, "lm_coelophysis")
        bones(g, 18, 9, 3); bones(g, 5, 10, 2); tall(g, 6, 18, 3, 2); tall(g, 21, 4, 3, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 18, 12, "!", "dig1b:8,2")      # THE BONE WASH
        g.land = (MID, 21)
        return finish(g, [(23, 19, "fos_d1b_wash", "coins", 400)], fill="^")

    def dig1c():
        """The Inland Sea: the floor of a sea that dried up, and something
        that was born in it."""
        g = dig_base("dig1c", 1031, last=True)
        road(g, [(14, 23), (14, 12)])
        mere(g, 8, 8, 4, 3); mere(g, 20, 16, 3, 2)
        g.landmark(16, 7, "lm_ichthyosaur")
        beds(g, 15, 9, 3, 1); tall(g, 6, 18, 3, 2); rocks(g, 22, 5, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 12, 11, "!", "dig1c:7,3")      # THE INLAND SEA
        g.land = (15, 20)
        return finish(g, [(4, 3, "fos_d1c_shore", "bigberries", 1)], fill="^")

    return [dig1(), dig1b(), dig1c()]


# -------------------------------------------------------------- Jurassic ---
def jurassic():
    def dig2():
        """Jurassic Beds: ferns and the tracks of a herd of giants."""
        g = dig_base("dig2", 1041, first=True)
        branch_door(g, W - 2, 12)
        road(g, [(MID, 20), (MID, 0)])
        g.landmark(19, 10, "lm_sauropod_tracks")
        for y in (6, 8, 10, 12, 14):
            g.set(21, y, "⁂")
        tall(g, 6, 6, 3, 3); tall(g, 6, 17, 3, 2); tall(g, 21, 19, 2, 1); bones(g, 22, 4, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 16, 5, "!", "dig2:8,3")        # JURASSIC
        person(g, 9, 13, "R", "dig2:4,6")        # Surveyor Nadia Haddad
        g.land = (MID, 21)
        return finish(g, [(4, 3, "fos_d2_ferns", "treats", 3)], fill="^")

    def dig2b():
        """The Sky Quarry: fine limestone that kept feathers."""
        g = dig_base("dig2b", 1051)
        road(g, [(13, 23), (13, 12), (11, 12), (11, 0)])
        beds(g, 19, 8, 4, 3)
        g.landmark(19, 7, "lm_archaeopteryx")
        tall(g, 6, 5, 3, 2); tall(g, 6, 17, 3, 2); rocks(g, 22, 16, 2); bones(g, 23, 20, 1)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 16, 14, "!", "dig2b:8,2")      # THE SKY QUARRY
        person(g, 22, 12, "R", "dig2b:12,3")     # "What the field is for"
        person(g, 8, 10, "R", "dig2b:6,5")       # "What is next door"
        person(g, 9, 20, "R", "dig2b:1,8")       # "What is under the site"
        g.land = (MID, 21)
        return finish(g, [(24, 3, "fos_d2b_quarry", "coins", 420)], fill="^")

    def dig2c():
        """Amber Seep: resin weeping from the old trees, and what it caught."""
        g = dig_base("dig2c", 1061, last=True)
        road(g, [(11, 23), (11, 12)])
        bones(g, 18, 7, 3); pond(g, 20, 14, 2, 1)
        g.landmark(8, 8, "lm_amber")
        tall(g, 6, 17, 3, 2); tall(g, 21, 4, 3, 1); rocks(g, 22, 20, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 15, 10, "!", "dig2c:7,3")      # AMBER SEEP
        person(g, 17, 17, "R", "dig2c:8,4")      # "What the fence does"
        person(g, 6, 12, "R", "dig2c:1,8")       # "What happens when you move them"
        g.land = (12, 20)
        return finish(g, [(4, 3, "fos_d2c_resin", "antidote", 1)], fill="^")

    return [dig2(), dig2b(), dig2c()]


# ------------------------------------------------------------ Cretaceous ---
def cretaceous():
    def dig3():
        """Cretaceous Beds: the last of the dinosaurs, and shells everywhere."""
        g = dig_base("dig3", 1071, first=True)
        branch_door(g, MID, 1)
        road(g, [(MID, 20), (MID, 11), (11, 11), (11, 0)])
        g.landmark(19, 8, "lm_ammonite")
        beds(g, 18, 10, 3, 2); tall(g, 6, 6, 3, 2); tall(g, 6, 18, 3, 2); bones(g, 22, 18, 2); rocks(g, 22, 4, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 8, 12, "R", "dig3:2,3")        # Dr. Yusuf Karim
        person(g, 16, 16, "!", "dig3:8,3")       # CRETACEOUS
        g.land = (MID, 21)
        return finish(g, [(4, 3, "fos_d3_shells", "treats", 3)], fill="^")

    def dig3b():
        """The Nesting Grounds: a colony of nests, and good mothers."""
        g = dig_base("dig3b", 1081)
        road(g, [(11, 23), (11, 14), (13, 14), (13, 0)])
        beds(g, 19, 9, 4, 3)
        g.landmark(19, 8, "lm_maiasaura")
        for x, y in ((17, 11), (21, 11), (22, 7)):
            g.set(x, y, "⁅")
        tall(g, 6, 5, 3, 2); tall(g, 6, 18, 3, 2); rocks(g, 22, 18, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 16, 4, "R", "dig3b:8,1")       # "What is being taken"
        person(g, 16, 13, "!", "dig3b:8,2")      # THE NESTING GROUNDS
        person(g, 8, 11, "R", "dig3b:1,8")       # "Why the rest of it mattered"
        g.land = (12, 21)
        return finish(g, [(24, 3, "fos_d3b_nests", "berries", 3)], fill="^")

    def dig3c():
        """Ashfall Beds: a valley buried in one day, everything where it fell."""
        g = dig_base("dig3c", 1091)
        road(g, [(13, 23), (13, 12), (12, 12), (12, 0)])
        beds(g, 7, 8, 4, 3); beds(g, 20, 16, 3, 2)
        g.landmark(7, 7, "lm_ashfall")
        bones(g, 20, 6, 3); tall(g, 21, 10, 2, 1); tall(g, 6, 18, 3, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 16, 10, "!", "dig3c:8,2")      # ASHFALL BEDS
        person(g, 18, 19, "R", "dig3c:13,3")     # "Who is doing the digging"
        person(g, 9, 14, "R", "dig3c:1,8")       # "Where it ends up"
        g.land = (14, 21)
        return finish(g, [(24, 3, "fos_d3c_ash", "coins", 440)], fill="^")

    def dig3d():
        """The Last Day: the thin line in the rock where the dinosaurs end."""
        g = dig_base("dig3d", 1101, last=True)
        road(g, [(12, 23), (12, 12)])
        for x in range(3, W - 3):                     # the boundary layer, across the map
            if (x, 9) not in g.road_set and g.get(x, 9) in "gG*":
                g.set(x, 9, "^" if x % 5 else ".")
        g.set(12, 9, "."); g.set(13, 9, ".")
        g.landmark(18, 10, "lm_kpg_boundary")
        bones(g, 7, 13, 3); tall(g, 6, 18, 3, 2); tall(g, 20, 17, 3, 2); rocks(g, 21, 4, 2)
        flowers(g, 5, (3, 2, 24, 21))
        person(g, 15, 14, "R", "dig3d:14,1")     # "What happens where digging is legal and paid"
        person(g, 9, 11, "!", "dig3d:7,3")       # THE LAST DAY
        g.land = (13, 20)
        return finish(g, [(4, 4, "fos_d3d_last", "revives", 1)], fill="^")

    return [dig3(), dig3b(), dig3c(), dig3d()]


def rock_seam(r):
    """A seam with badland rock either side rather than the palette's bone."""
    return dict(road=r, L=3, R=3, row="^^^" + "g" * (r - 3) + ".." + "g" * (W - 3 - r - 2) + "^^^")


def chain_region(keys, roads):
    return Region(keys, {(a, b): rock_seam(r) for (a, b), r in zip(zip(keys, keys[1:]), roads)})


def main():
    fk.run_regions("forge_fossil.py", [
        ("fossil_camp", Region(["digsite"], {}, standalone=True), digsite,
         [{"from": "route4", "tile": "27,11", "map": "digsite", "x": 1, "y": 12}]),
        ("fossil_triassic", chain_region(["dig1", "dig1b", "dig1c"], [12, 14]), triassic, []),
        ("fossil_jurassic", chain_region(["dig2", "dig2b", "dig2c"], [13, 11]), jurassic, []),
        ("fossil_cretaceous", chain_region(["dig3", "dig3b", "dig3c", "dig3d"], [11, 13, 12]), cretaceous, []),
    ], GEN, "game.part127.jsx", merge="fossil")


if __name__ == "__main__":
    main()
