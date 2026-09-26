"""The sea, rebuilt and moved: Emberglass Shore is the harbour now, and the
five seas are full size.

Run from the repo root:   python design/tools/forge_sea.py
It prints each map, refuses to write if any check fails, and otherwise writes
game.part123.jsx. The landmarks' words and drawings are in game.part122.jsx.

Ayr, 2026-09-25: "The side areas need to be bigger actually. And the ocean
area is in the wrong challenge area, it needs to be further on in the game."

THE MOVE. The seas are level 38 to 52, and their boats sailed from Tidewater
Cove - on the desert road, where everything round them is level 21 to 30.
Emberglass Shore, off Cinder Town, is level 37 to 41, already on the sea, and
already the way to the Aquarium: the right harbour. So the four boats sail
from its jetties now, and the Cove keeps its jetties for fishing (and its
signs say where the boats went).

THE SEAS. Each is a full 28x24 seascape. Swimming needs a badge and a water
animal in the party, so nothing here needs it: shallows you can wade (the sea
zones draw their "ground" as shallow water), sandbars and seagrass, with the
deep water open to swim for anyone who can. The zone draws its "trees" as
what stands in that sea - coral, kelp, breaking waves, ice, the dark.

These are not in a chain - each is its own place reached by a boat (a door) -
so they are forged standalone: no seams, closed on every side.

EVERY PERSON HERE ALREADY EXISTS, under the identity key they have always had.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from forgekit import (Region, setup, base, finish, road, clump, pond, mere, tall,  # noqa: E402,F401
                      patch, flowers, pieces, signpost, person, run, enclose, W, H)

GEN = 17  # was 10; 17 when the Tidewater door came out (2026-09-26). A save made before this, standing here, is relocated.
CHAIN = ["shore", "reef", "kelp", "openocean", "polarsea", "abyss"]
setup(Region(CHAIN, {}, standalone=True))

# The pier each sea's boat leaves from on Emberglass Shore: (row, sea). North
# to south: the cold seas at the top, the warm reef at the bottom.
PIERS = [(4, "polarsea"), (9, "openocean"), (14, "kelp"), (19, "reef")]
PIER_END = 24          # the door at the end of each jetty


def stand(g, cx, cy, n, spread=2):
    clump(g, cx, cy, n, "T", spread)


def rocks(g, cx, cy, n, spread=1):
    clump(g, cx, cy, n, "^", spread)


# ---------------------------------------------------------------- shore ---
def shore():
    """Emberglass Shore. Black volcanic sand, the sea to the east, four jetties
    running out to the boats. The volcano's slope rises to the north with
    Ember Hollow in it; the Aquarium is down the beach; Cinder Town is west."""
    g = base("shore", 801, rocks=0.1)
    enclose(g, "ns")
    g.beyond["e"] = "W"
    g.rect(15, 1, W - 1, H - 2, "W")                     # the sea
    for y in range(1, H - 1):                           # a ragged tideline
        if g.rng.random() < 0.5:
            g.set(14 + g.rng.randint(0, 2), y, "W" if g.rng.random() < 0.5 else ".")
    patch(g, 11, 12, 3, 8)                              # the black sand beach
    road(g, [(1, 11), (12, 11)])
    road(g, [(12, 3), (12, 21)])
    g.door(0, 11, "e", "town8", W - 2, 11)
    g.set(1, 11, "."); g.set(1, 12, "."); g.set(0, 12, "T")
    # The coast path south to Tidewater Cove is gone: the cove became a desert
    # oasis, and Ayr, 2026-09-26: "get rid of the door that leads to it from
    # the ocean area." The path now only runs down to the Aquarium.
    road(g, [(6, 17), (12, 17)])
    road(g, [(6, 17), (6, 22)])
    g.door(6, H - 1, "s", "aquarium", 7, 8)
    road(g, [(5, 1), (12, 1)])
    g.door(5, 0, "n", "ember", 7, 10)
    g.set(6, 0, "T")
    for row, sea in PIERS:                               # the jetties and their boats
        g.road([(13, row), (PIER_END - 1, row)], ".", 1)
        g.door(PIER_END, row, "e", sea, 13, 22)
    g.landmark(9, 7, "lm_tide_pool")
    stand(g, 5, 4, 3); stand(g, 4, 14, 2); rocks(g, 8, 20, 2); rocks(g, 3, 8, 2)
    tall(g, 5, 9, 2, 1); tall(g, 4, 20, 2, 1)
    person(g, 10, 5, "R", "shore:2,2")         # Archie Karr, turtle man, on the beach
    person(g, 10, 13, "R", "shore:2,5")        # Isle Fisher Mko, by the jetties
    person(g, 10, 20, "R", "shore:2,10")       # Reef Rana, by the reef boat
    signpost(g, 11, 4, "shore:ice")
    signpost(g, 11, 8, "shore:blue")
    signpost(g, 11, 15, "shore:kelp")
    signpost(g, 11, 19, "shore:reef")
    signpost(g, 3, 10, "shore:west")
    signpost(g, 7, 2, "shore:ember")
    pieces(g, [(4, 12, "nets"), (9, 16, "canoe"), (8, 3, "crates"), (3, 16, "nets")])
    g.land = (10, 11)
    return finish(g, [
        (13, 22, "sea_sh_south", "revives", 1),
        (3, 3, "sea_sh_slope", "coins", 300),
    ])


def seascape(key, seed, pools, grass, stands, isle_rocks):
    """The shape every sea shares: shallows, deep pools to swim, seagrass, and
    whatever stands in that sea. The boat lands at the bottom middle."""
    g = base(key, seed, rocks=0.05)
    enclose(g, "ns")
    g.beyond["n"] = "W"; g.beyond["e"] = "W"; g.beyond["w"] = "W"
    for cx, cy, rx, ry in pools:
        mere(g, cx, cy, rx, ry)
    for cx, cy, rx, ry in grass:
        tall(g, cx, cy, rx, ry)
    for cx, cy, n in stands:
        stand(g, cx, cy, n)
    for cx, cy, n in isle_rocks:
        rocks(g, cx, cy, n)
    road(g, [(13, 22), (13, 18)])              # the landing
    piers = dict((s, r) for r, s in PIERS)
    if key in piers:                           # the abyss is dived into, not sailed to
        g.door(13, H - 1, "s", "shore", PIER_END - 1, piers[key])
    return g


# ----------------------------------------------------------------- reef ---
def reef():
    """Coral Reef Shallows. Warm, clear, bright: coral heads standing out of
    turquoise shallows, and a cleaning station where fish queue."""
    g = seascape("reef", 811,
                 pools=[(7, 6, 4, 3), (21, 8, 4, 3), (20, 17, 3, 2)],
                 grass=[(6, 16, 3, 2), (21, 3, 2, 1), (8, 21, 2, 1)],
                 stands=[(14, 5, 3), (4, 11, 2), (24, 13, 2), (10, 12, 2)],
                 isle_rocks=[(17, 12, 2)])
    g.landmark(15, 10, "lm_cleaning_station")
    flowers(g, 8, (3, 2, 24, 21))
    person(g, 5, 19, "R", "reef:1,7")          # "How they die"
    person(g, 11, 16, "R", "reef:2,7")         # Dr. Eugenia Clarke
    person(g, 18, 20, "R", "reef:13,7")        # Roger Petersen
    person(g, 12, 3, "!", "reef:5,8")          # CORAL REEF SHALLOWS
    person(g, 16, 14, "R", "reef:6,8")         # "Where it is happening"
    person(g, 22, 12, "!", "reef:10,8")        # clownfish
    person(g, 24, 4, "R", "reef:11,8")         # "What the colony is doing"
    g.land = (13, 20)
    return finish(g, [
        (4, 3, "sea_rf_corner", "treats", 3),
        (24, 20, "sea_rf_flats", "coins", 320),
    ])


# ----------------------------------------------------------------- kelp ---
def kelp():
    """Kelp Cathedral. Cold green water and kelp standing in columns like the
    pillars the place is named for, otters rafted up in the channels."""
    g = seascape("kelp", 821,
                 pools=[(8, 8, 3, 3), (20, 6, 4, 2), (19, 16, 3, 2)],
                 grass=[(6, 17, 3, 2), (22, 21, 2, 1), (13, 3, 2, 1)],
                 stands=[(5, 4, 3), (14, 9, 3), (23, 11, 3), (9, 14, 3), (16, 20, 2)],
                 isle_rocks=[(4, 21, 2)])
    g.landmark(12, 12, "lm_kelp_forest")
    flowers(g, 5, (3, 2, 24, 21))
    person(g, 11, 17, "R", "kelp:2,7")         # Capitaine Jacques Rousseau
    person(g, 24, 15, "R", "kelp:14,7")        # "Why every boat does not do it already"
    person(g, 4, 11, "R", "kelp:2,8")          # "What stops it"
    person(g, 15, 14, "!", "kelp:5,8")         # KELP CATHEDRAL
    person(g, 18, 3, "!", "kelp:10,8")         # a sea otter's fur
    g.land = (13, 20)
    return finish(g, [
        (24, 3, "sea_kp_corner", "berries", 3),
        (4, 15, "sea_kp_west", "antidote", 1),
    ])


# ------------------------------------------------------------ openocean ---
def openocean():
    """The Open Blue. Swell in every direction and sandbars to stand on. A
    whale is feeding off the northern bar, and there is a place to dive to
    the Midnight Zone."""
    g = seascape("openocean", 831,
                 pools=[(7, 7, 5, 3), (20, 5, 5, 2), (21, 15, 4, 3), (6, 17, 3, 2)],
                 grass=[(13, 12, 2, 1), (4, 12, 1, 1)],
                 stands=[(13, 7, 2), (24, 10, 2), (9, 21, 1)],
                 isle_rocks=[(16, 19, 1)])
    g.landmark(14, 3, "lm_whale_pump")
    road(g, [(21, 11), (23, 11)])
    g.door(24, 11, "n", "abyss", 13, 22)
    flowers(g, 6, (3, 2, 24, 21))
    person(g, 10, 14, "R", "openocean:2,7")    # Dr. Katy Paine
    person(g, 18, 20, "R", "openocean:13,7")   # Ken Balcolm
    person(g, 17, 9, "R", "openocean:3,8")     # Dr. Marisol Vega
    person(g, 11, 19, "!", "openocean:5,8")    # THE OPEN BLUE
    person(g, 16, 4, "!", "openocean:10,8")    # whale fall
    signpost(g, 21, 12, "openocean:dive")
    g.land = (13, 20)
    return finish(g, [
        (4, 3, "sea_oo_corner", "coins", 340),
        (24, 21, "sea_oo_bar", "bigberries", 1),
    ])


# ------------------------------------------------------------- polarsea ---
def polarsea():
    """Ice Floe Passage. Floes and open leads, and a polar bear's hunting
    ground on the edge of the ice."""
    g = seascape("polarsea", 841,
                 pools=[(7, 9, 4, 2), (20, 7, 4, 3), (16, 16, 3, 2)],
                 grass=[(6, 18, 3, 1), (22, 20, 2, 1)],
                 stands=[(4, 4, 3), (13, 6, 3), (24, 13, 3), (9, 14, 2)],
                 isle_rocks=[(20, 21, 1)])
    g.landmark(12, 11, "lm_sea_ice")
    flowers(g, 6, (3, 2, 24, 21))
    person(g, 5, 16, "R", "polarsea:2,7")      # "Where they are coming for"
    person(g, 11, 3, "!", "polarsea:5,8")      # narwhal
    person(g, 18, 13, "R", "polarsea:8,8")     # "What happens when they are flown out"
    person(g, 22, 3, "!", "polarsea:10,8")     # emperor penguins
    person(g, 23, 17, "R", "polarsea:14,8")    # "Why they are here at all"
    g.land = (13, 20)
    return finish(g, [
        (4, 21, "sea_ps_floe", "revives", 1),
        (24, 9, "sea_ps_lead", "coins", 360),
    ])


# ---------------------------------------------------------------- abyss ---
def abyss():
    """The Midnight Zone. Below the reach of the sun: dark water, and a vent
    field where life runs on the heat of the Earth instead."""
    g = seascape("abyss", 851,
                 pools=[(7, 8, 4, 3), (21, 6, 4, 2), (20, 16, 3, 2)],
                 grass=[(6, 17, 2, 1), (13, 4, 2, 1)],
                 stands=[(4, 13, 2), (16, 10, 2), (24, 11, 2)],
                 isle_rocks=[(11, 14, 2), (9, 20, 1)])
    g.door(13, H - 1, "s", "openocean", 23, 11)          # back up to the dive point
    g.landmark(18, 12, "lm_hydrothermal_vent")
    flowers(g, 6, (3, 2, 24, 21))
    person(g, 9, 16, "R", "abyss:2,7")         # Dr. Sylvia Earlham
    person(g, 22, 20, "R", "abyss:13,7")       # "What the town is actually frightened of"
    person(g, 5, 4, "R", "abyss:1,8")          # "What the town already has"
    person(g, 12, 19, "!", "abyss:5,8")        # THE MIDNIGHT ZONE
    person(g, 23, 3, "!", "abyss:10,8")        # better maps of Mars
    g.land = (13, 20)
    return finish(g, [
        (4, 21, "sea_ab_floor", "bigberries", 1),
        (24, 7, "sea_ab_dark", "coins", 380),
    ])


def main():
    grids = [shore(), reef(), kelp(), openocean(), polarsea(), abyss()]
    inbound = [
        {"from": "ember", "tile": "7,11", "map": "shore", "x": 5, "y": 1},
        {"from": "aquarium", "tile": "7,9", "map": "shore", "x": 6, "y": H - 2},
    ]
    run("sea", "forge_sea.py", grids, inbound, GEN, "game.part123.jsx")


if __name__ == "__main__":
    main()
