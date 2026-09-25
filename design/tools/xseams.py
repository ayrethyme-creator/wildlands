"""Seams BETWEEN regions - the one place two forge scripts have to agree.

Each region's forge owns its own maps, but where one region's last map meets
the next region's first, both forges stamp the same edge row, so the spec for
that row lives here and both import it. Same shape as a forge's own SEAM
entries: the road's column and how deep the forest is on each side.

`fallback` is the door the SOUTH map puts back if the north region is ever
refused on load (part105): without it, a refused region would leave the south
map with an open edge leading nowhere, and the main road would simply end.
"""

XSEAM = {
    # Marula Town's north gate onto the Reedwater Fen. Narrow on purpose: it is
    # a town gate with the gym guard standing in it, not open country - the
    # rule has always been that the road north goes through the arena.
    ("town2", "route2"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route2", "x": 7, "y": 14}),
    # Delta Town's north gate onto Canopy Deep. Same shape: a gate in the
    # reeds, the arena's guard standing in it.
    ("town3", "route3"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route3", "x": 7, "y": 14}),
    # Canopy Town's north gate onto the Singing Dunes.
    ("town4", "route4"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route4", "x": 7, "y": 14}),
    # Dune Town's north gate onto the Highveld Steps.
    ("town5", "route5"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route5", "x": 7, "y": 14}),
    # Crag Town's north gate onto Frostmere Pass.
    ("town6", "route6"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route6", "x": 7, "y": 14}),
    # Frost Town's north gate onto the Cinder Flats.
    ("town7", "route7"): dict(road=13, L=11, R=13,
                              fallback={"tile": "13,0", "ch": "n", "map": "route7", "x": 7, "y": 14}),
}


def xseam_row(s, w=28):
    row = ["T"] * s["L"] + ["g"] * (w - s["L"] - s["R"]) + ["T"] * s["R"]
    row[s["road"]] = row[s["road"] + 1] = "."
    return row
