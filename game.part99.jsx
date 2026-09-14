// ---------- Part 99: A STRAIGHT WAY THROUGH ----------
// Ayr: "Can you clear all of the paths so I can go from entrance to exit in a
// straight line." Confirmed to mean every map in the game, not one room.
//
// GROUND TRUTH CAME FROM THE LIVE GAME, NOT FROM READING THE SOURCE. This file
// mutates and shares row arrays constantly - six rift rooms once shared one
// literal array (part96 already had to fork it with withRow for exactly that
// reason), and part11's road segments are all drawn from eight reusable
// templates in SEG_T, forked into their own array only once something else
// (a trainer, a lamp) touches them. Reading the source could not have told me
// which maps actually finished independent by the time the game is up; a
// window.MAPS dump, taken after every other part has run, could and did.
//
// WHAT COUNTS AS AN OBSTACLE, AND WHAT DOES NOT. TILE_STYLE (part3) gives
// every character's meaning. Always walkable already: . g G p * and the five
// MAP_MARKS glyphs. n/s/e/c are exit tiles - stepping there transitions the
// map immediately, so they are the endpoints of a path, never an obstacle in
// one. Left alone on purpose: R and V (route and rival trainers - the game's
// whole point is that you fight them to pass, and a beaten one turns walkable
// on its own), X (the badge gate), D (a puzzle door), W (water - gated behind
// a gym perk, "Aquatic teammates can now Swim"), and H P C Y M ! (huts,
// tents, clinics, arenas, markets, signs - real content, not scenery). A path
// that runs through a trainer is the level working as designed, not a bug.
//
// Cleared: T ^ L t and the lamp-post and fallen-log glyphs - mountain, tree,
// statue, lantern, lamp, log. Nothing reads these and nothing is lost by
// opening a gap through one; every case here is a single decorative piece
// sitting in an otherwise-open corridor, a doorway, or a chokepoint between a
// map's entrance and its nearest exit.
//
// THE FIRST VERSION OF THIS ANALYSIS WAS WRONG IN A WAY WORTH RECORDING. It
// paired every entrance with every exit and took the shorter of two L-shaped
// routes between them. In an open room like the myth crossroads that forced
// routes between far-apart doors to bend along the border ring connecting
// them - and "clearing" that meant deleting the room's outer wall, 41 tiles
// of it. Restricting to the nearest exit only hid the bug rather than fixing
// it: it also zeroed out route6, a genuine four-way junction, because it
// stopped checking the other three directions entirely.
//
// The actual bug was the scoring order. A path that walks through one trainer
// (0 scenery, 1 "blocker") was losing to a path that hugs a wall (8 scenery,
// 0 blockers), because blocker-count was compared first. Scenery has to be
// minimised first - that is the only cost this file is willing to pay - and a
// trainer in the way is not a cost at all, it is normal play. With that fixed,
// full entrance x exit pairing does the right thing everywhere: 0 tiles for
// the myth crossroads and route6 alike, 27 real single-tile clearings spread
// across 19 maps elsewhere.
//
// ROWS ARE REPLACED, NEVER EDITED IN PLACE - same rule as part96, same reason.
// withRow returns a new array, so this is safe regardless of whether a given
// map's rows were still the shared template or already forked by something
// upstream; either way, only the named map is touched.
if (typeof withRow === "undefined" || typeof MAPS === "undefined") {
  console.warn("[part99] withRow or MAPS missing - path clearing skipped");
} else {

if (MAPS.cave1) {
  MAPS.cave1.rows = withRow(MAPS.cave1.rows, 5, "e...!...........");
  MAPS.cave1.rows = withRow(MAPS.cave1.rows, 6, "^..^..^^^^^^^...");
  MAPS.cave1.rows = withRow(MAPS.cave1.rows, 7, "^..^..^.....^...");
  MAPS.cave1.rows = withRow(MAPS.cave1.rows, 8, "^..^..^..^..^...");
  MAPS.cave1.rows = withRow(MAPS.cave1.rows, 9, "^.....^..^......");
}
if (MAPS.digsite) {
  MAPS.digsite.rows = withRow(MAPS.digsite.rows, 6, "e............*.e");
}
if (MAPS.hearthgate) {
  MAPS.hearthgate.rows = withRow(MAPS.hearthgate.rows, 8, "^..............^");
}
if (MAPS.rift2) {
  MAPS.rift2.rows = withRow(MAPS.rift2.rows, 6, "e..............e");
}
if (MAPS.rift4) {
  MAPS.rift4.rows = withRow(MAPS.rift4.rows, 6, "e..............T");
}
if (MAPS.seg_a1) {
  MAPS.seg_a1.rows = withRow(MAPS.seg_a1.rows, 5, "^..^.......^...^");
  MAPS.seg_a1.rows = withRow(MAPS.seg_a1.rows, 7, "^...WW..R......^");
}
if (MAPS.seg_a2) {
  MAPS.seg_a2.rows = withRow(MAPS.seg_a2.rows, 3, "^..............^");
}
if (MAPS.seg_g2) {
  MAPS.seg_g2.rows = withRow(MAPS.seg_g2.rows, 8, "^GGGG.T...GGGG.^");
}
if (MAPS.seg_g3) {
  MAPS.seg_g3.rows = withRow(MAPS.seg_g3.rows, 6, "e..GGG.WW.GGG*.^");
}
if (MAPS.seg_j1) {
  MAPS.seg_j1.rows = withRow(MAPS.seg_j1.rows, 5, "^⁅.^.......^...^");
  MAPS.seg_j1.rows = withRow(MAPS.seg_j1.rows, 7, "^...WW.........^");
}
if (MAPS.seg_j3) {
  MAPS.seg_j3.rows = withRow(MAPS.seg_j3.rows, 8, "^GGGG.T...GGGG.^");
}
if (MAPS.seg_m2) {
  MAPS.seg_m2.rows = withRow(MAPS.seg_m2.rows, 6, "e..GGG.WW.GGG*.^");
}
if (MAPS.seg_m4) {
  MAPS.seg_m4.rows = withRow(MAPS.seg_m4.rows, 6, "e..WW..GGGGG.*T^");
  MAPS.seg_m4.rows = withRow(MAPS.seg_m4.rows, 7, "^T..GG...GG....^");
}
if (MAPS.seg_w2) {
  MAPS.seg_w2.rows = withRow(MAPS.seg_w2.rows, 8, "^GGGG.T...GGGG.^");
}
if (MAPS.seg_w4) {
  MAPS.seg_w4.rows = withRow(MAPS.seg_w4.rows, 7, "^..............^");
}
if (MAPS.shore) {
  MAPS.shore.rows = withRow(MAPS.shore.rows, 6, "e...WWWWWWWWWWWT");
  MAPS.shore.rows = withRow(MAPS.shore.rows, 8, "e.G.WWWWWWWWWWWT");
}
if (MAPS.tidewater) {
  MAPS.tidewater.rows = withRow(MAPS.tidewater.rows, 5, "^............*.^");
}
if (MAPS.town4) {
  MAPS.town4.rows = withRow(MAPS.town4.rows, 4, "T....*.........*...T");
}
if (MAPS.tundra) {
  MAPS.tundra.rows = withRow(MAPS.tundra.rows, 5, "T.¡GGGG..GGGG*.T");
}

console.log("[part99] straightened 19 maps, 27 rows, 27 scenery tiles cleared - "
  + "trainers, gates, water and buildings left exactly where they were");

}
