// Biome classification for the new game.
//
// Two signals, in order. The habitat sentence in INFO is preferred because it
// describes the place rather than the continent - but roughly a third of the
// entries name only a region ("Africa, Asia and Oceania"), so where that fails
// we fall back to where Safari Saga already put the animal, which encodes a
// biome judgement somebody already made by hand.
var BIOME_RULES = [
  ["reef",        /coral|reef/i],
  ["deepsea",     /deep sea|abyss|midnight zone|hydrothermal|deep water|bathyal/i],
  ["polarsea",    /sea ice|pack ice|antarctic water|arctic water|southern ocean|arctic ocean|ice floe/i],
  ["kelp",        /kelp/i],
  ["opensea",     /open ocean|pelagic|open sea|oceans worldwide|all oceans|worldwide ocean/i],
  ["coast",       /mangrove|estuar|tidal|shoreline|coastal|coast|beach|shore|rocky islet|seabird colon/i],
  ["cave",        /cave|cavern|karst|subterranean/i],
  ["wetland",     /river|lake|marsh|swamp|wetland|pond|fen|bog|floodplain|delta|freshwater|billabong|stream/i],
  ["tundra",      /tundra|arctic|antarctic|polar/i],
  ["taiga",       /taiga|boreal|conifer|spruce|pine forest/i],
  ["alpine",      /mountain|alpine|highland|montane|andes|himalaya|plateau|cliff|crag|rocky slope|rocky country/i],
  ["desert",      /desert|sahara|kalahari|arid|sand dune|gobi|atacama|semi-arid/i],
  ["rainforest",  /rainforest|rain forest|jungle|tropical forest|cloud forest|canopy/i],
  ["savanna",     /savanna|grassland|plains|steppe|prairie|pampas|veld|grassy|open woodland/i],
  ["farmland",    /farmland|cities|urban|garden|villages|towns|human settlement|hedgerow|suburb|park/i],
  ["forest",      /forest|woodland|deciduous|bamboo|scrub|bush|thicket|heath|moor/i],
];

// The zone fallback that used to live here has been REMOVED. It classified 252
// species by which Safari Saga map they appear in, which is a gameplay layout
// and not an ecological one - it put barracuda, clownfish, puffins and golden
// retrievers in "alpine". Those 252 are now hand-assigned in biome_assign.js.

// Nine that neither signal caught, placed by hand.
var BIOME_OVERRIDE = {
  tasdevil: "forest", kiwi: "forest", tawnyfrogmouth: "forest",
  potoo: "rainforest", glasswing: "rainforest",
  housesparrow: "farmland", barnswallow: "farmland", commonstarling: "farmland",
  nicobarpigeon: "coast",
};

// Consolidation. The classifier's raw output has four biomes too thin to carry
// a facility and a story arc of their own, so they fold into their nearest
// neighbour. Taiga (4) folds into temperate forest - boreal animals are forest
// animals. Kelp (12) folds into coast, being temperate near-shore sea. Deep sea
// (11) folds into open ocean, which is how you reach it anyway. Sea ice (11)
// and tundra (18) combine into one polar biome rather than splitting 29 animals
// across two thin ones.
var BIOME_MERGE = {
  taiga: "forest", kelp: "coast", deepsea: "opensea", polarsea: "polar", tundra: "polar",
};
