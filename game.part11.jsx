// ---------- CHAPTER VII — Part 11: THE LONG ROAD ----------
// Ten areas between every pair of towns, chained INTO the main path so the
// journey is actually walked, not skipped. Purely additive: no map is removed,
// so existing saves stay valid.

// --- terrain templates (12 rows x 16 cols; north exit 7,0 / south exit 7,11) ---
const SEG_T = [
  // 0: open with rock spine
  ["^^^^^^^n^^^^^^^^", "^..GG.....GG...^", "^.GGGG...GGGG..^", "^..GG..R..GG...^", "^R....VVV.....R^", "^...GGG.GGG....^", "^..GGGGGGGGG...^", "^...GG.R.GG....^", "^.R.........R..^", "^..GGG...GGG...^", "^..............^", "^^^^^^^s^^^^^^^^"],
  // 1: switchback ledges
  ["^^^^^^^n^^^^^^^^", "^....GGGGG.....^", "^TT..GGGGG...TT^", "^..VVVV........^", "^.....GGGG.....^", "^GG..GGGGG...GG^", "^........VVVV..^", "^..GGGG...GGGG.^", "^TT..R.....R.TT^", "^...GGG..GGG...^", "^..............^", "^^^^^^^s^^^^^^^^"],
  // 2: wooded corridor
  ["^^^^^^^n^^^^^^^^", "^TT.GGG..GGG.TT^", "^T..GGG..GGG..T^", "^....R.....R...^", "^TT.GGGGGGGG.TT^", "^T..GGGGGGGG..T^", "^..............^", "^TT.GGG..GGG.TT^", "^T...R...R....T^", "^TT.GGG..GGG.TT^", "^..............^", "^^^^^^^s^^^^^^^^"],
  // 3: boulder field
  ["^^^^^^^n^^^^^^^^", "^..R.......R...^", "^.GGG.GGG.GGG..^", "^..R.......R...^", "^VVV.GGGGG.VVV.^", "^..R...R...R...^", "^.GGG.GGG.GGG..^", "^......R.......^", "^R..GGGGGGG..R.^", "^..R.......R...^", "^..............^", "^^^^^^^s^^^^^^^^"],
  // 4: water crossing
  ["^^^^^^^n^^^^^^^^", "^..GGG...GGG...^", "^.GGGGG.GGGGG..^", "^..............^", "^WWWWW..WWWWWWW^", "^WWWWW..WWWWWWW^", "^..............^", "^.GGGGG.GGGGG..^", "^..GGG.R.GGG...^", "^..............^", "^..R.......R...^", "^^^^^^^s^^^^^^^^"],
  // 5: high shelf
  ["^^^^^^^n^^^^^^^^", "^GGGG.....GGGG.^", "^GGGG..R..GGGG.^", "^....VVVVV.....^", "^..GG.....GG...^", "^R..GG...GG..R.^", "^....VVVVV.....^", "^GGGG.....GGGG.^", "^GGGG..R..GGGG.^", "^..............^", "^..............^", "^^^^^^^s^^^^^^^^"],
  // 6: narrow pass
  ["^^^^^^^n^^^^^^^^", "^TTTT.....TTTT.^", "^TT..GGGGG..TT.^", "^T...GGGGG...T.^", "^....R...R.....^", "^..GGG...GGG...^", "^..GGG...GGG...^", "^....R...R.....^", "^T...GGGGG...T.^", "^TT..GGGGG..TT.^", "^TTTT.....TTTT.^", "^^^^^^^s^^^^^^^^"],
  // 7: broad basin
  ["^^^^^^^n^^^^^^^^", "^..............^", "^.GGGGGGGGGGG..^", "^.GGGGGGGGGGG..^", "^..R.........R.^", "^.GGGGGGGGGGG..^", "^.GGGGGGGGGGG..^", "^..VVVVVVVVV...^", "^.GGGGGGGGGGG..^", "^.GGGGGGGGGGG..^", "^..............^", "^^^^^^^s^^^^^^^^"],
];

// pick n entries from a candidate list, rotated by seed, with jittered weights
const segPool = (cands, seed, n) => {
  const out = [];
  for (let i = 0; i < n && i < cands.length; i++) {
    const [sp, w] = cands[(seed * 5 + i * 3) % cands.length];
    if (!out.some((o) => o[0] === sp)) out.push([sp, Math.max(2, w + ((seed + i) % 3) - 1)]);
  }
  return out.length ? out : cands.slice(0, n);
};

// build a chain of segments spliced between a route and the town it led to
const chainSegs = (routeKey, townKey, zone, music, defs) => {
  const route = MAPS[routeKey];
  const found = Object.entries(route.exits || {}).find(([, e]) => e.map === townKey);
  if (!found) { console.warn("chainSegs: no exit", routeKey, "->", townKey); return; }
  const [routeXY, townExit] = found;
  const backY = Number(routeXY.split(",")[1]) === 0 ? 1 : Number(routeXY.split(",")[1]) - 1;
  const backX = Number(routeXY.split(",")[0]);

  defs.forEach((d, i) => {
    const key = d.k;
    const prev = i === 0 ? { map: routeKey, x: backX, y: backY } : { map: defs[i - 1].k, x: 7, y: 1 };
    const next = i === defs.length - 1 ? { ...townExit } : { map: defs[i + 1].k, x: 7, y: 10 };
    MAPS[key] = {
      name: d.n, zone: d.z || zone, music: d.m || music,
      rows: SEG_T[(i + defs.length) % SEG_T.length],
      exits: { "7,0": next, "7,11": prev },
      lvl: d.lvl,
      pool: d.pool,
      ...(d.poolN ? { poolN: d.poolN } : {}),
      ...(d.poolWater ? { poolWater: d.poolWater } : {}),
    };
  });
  // splice: the route now leads into the first segment
  route.exits = { ...route.exits, [routeXY]: { map: defs[0].k, x: 7, y: 10 } };
  // and the town's return exit lands in the LAST segment, so the road works both ways
  const town = MAPS[townKey];
  const back = Object.entries(town.exits || {}).find(([, e]) => e.map === routeKey);
  if (back) town.exits = { ...town.exits, [back[0]]: { map: defs[defs.length - 1].k, x: 7, y: 1 } };
};

// --- candidate rosters per biome (drawn from species already in the Dex) ---
const C = {
  meadow: [["rabbit", 12], ["hare", 10], ["hedgehog", 11], ["redsquirrel", 10], ["chipmunk", 10], ["dormouse", 9], ["groundhog", 9], ["mole", 8], ["stoat", 8], ["weasel", 8], ["grayfox", 7], ["redfox", 8], ["badger", 7], ["opossum", 8], ["raccoon", 8], ["skunk", 7], ["ladybug", 10], ["honeybee", 10], ["bumblebee", 9], ["hoverfly", 9], ["monarch", 9], ["swallowtail", 8], ["masonbee", 8], ["jumpingspider", 7], ["peacockspider", 6], ["woodpecker", 7], ["kestrel", 7], ["raven", 6], ["swan", 5], ["mandarinduck", 5], ["pika", 5], ["mara", 5], ["degu", 6], ["agouti", 6]],
  wetland: [["otter", 10], ["mink", 9], ["capybara", 8], ["platypus", 6], ["heron", 9], ["kingfisher", 9], ["spoonbill", 7], ["ibis", 7], ["stork", 7], ["crane", 6], ["pelican", 6], ["loon", 6], ["swan", 7], ["mandarinduck", 7], ["shoebill", 4], ["newt", 9], ["axolotl", 6], ["hellbender", 5], ["tomatofrog", 8], ["goliathfrog", 6], ["glassfrog", 7], ["redeyedtreefrog", 7], ["dragonfly", 10], ["damselfly", 10], ["firefly", 8], ["cicada", 7], ["sitatunga", 5], ["pygmyhippo", 4], ["tapir", 5], ["bushdog", 6], ["giantotter", 5], ["caiman", 4], ["alligator", 4], ["gharial", 3], ["basilisk", 6], ["turtle", 8]],
  jungle: [["marmoset", 9], ["tamarin", 9], ["capuchin", 8], ["vervet", 8], ["spidermonkey", 8], ["howler", 7], ["colobus", 7], ["langur", 7], ["macaque", 8], ["gibbon", 6], ["siamang", 5], ["orangutan", 4], ["chimpanzee", 3], ["gorilla", 2], ["sloth", 8], ["kinkajou", 7], ["coati", 7], ["tayra", 6], ["binturong", 5], ["toucan", 8], ["lorikeet", 8], ["scarletmacaw", 6], ["bluegoldmacaw", 6], ["militarymacaw", 5], ["africangrey", 5], ["quetzal", 5], ["hoatzin", 5], ["hummingbird", 8], ["bluemorpho", 8], ["birdwing", 6], ["orchidbee", 8], ["leafcutterant", 8], ["cicada", 8], ["jewelbeetle", 6], ["herculesbeetle", 4], ["stickinsect", 7], ["leafinsect", 7], ["orchidmantis", 5], ["mantis", 7], ["greeniguana", 7], ["boaconstrictor", 5], ["redeyedtreefrog", 8], ["glassfrog", 8], ["margay", 5], ["ocelot", 5], ["jaguarundi", 5], ["cloudedleopard", 3], ["fishingcat", 4], ["dhole", 4], ["tapir", 4], ["silkyanteater", 5], ["tamandua", 5]],
  desert: [["jerboa", 11], ["fennec", 10], ["meerkat", 9], ["prairiedog", 9], ["chipmunk", 8], ["ninebandarmadillo", 8], ["hornedlizard", 9], ["thornydevil", 9], ["skink", 8], ["gilamonster", 6], ["frilledlizard", 7], ["rattlesnake", 7], ["taipan", 4], ["roadrunner", 7], ["scorpion", 9], ["honeypotant", 9], ["sandcat", 7], ["blackfootedcat", 6], ["corsacfox", 7], ["swiftfox", 7], ["bateared", 7], ["aardwolf", 6], ["coyote", 6], ["culpeo", 6], ["dingo", 6], ["camel", 7], ["oryx", 5], ["addax", 5], ["dikdik", 6], ["gazelle", 6], ["pronghorn", 6], ["llama", 5], ["vicuna", 5], ["guanaco", 5], ["budgie", 7], ["cockatiel", 7], ["rosella", 6], ["quakerparrot", 6], ["caracara", 5], ["emu", 5], ["ostrich", 4], ["bandicoot", 6], ["bilby", 6], ["numbat", 6], ["echidna", 5]],
  savanna: [["gazelle", 9], ["springbok", 9], ["impala", 9], ["dikdik", 8], ["hartebeest", 7], ["topi", 7], ["wildebeest", 7], ["zebra", 8], ["kudu", 6], ["eland", 6], ["gerenuk", 6], ["blackbuck", 6], ["nyala", 6], ["bongo", 4], ["giraffe", 4], ["okapi", 3], ["whiterhino", 3], ["blackrhino", 3], ["africanelephant", 2], ["asianelephant", 2], ["baboon", 7], ["gelada", 5], ["mandrill", 4], ["mongoose", 8], ["meerkat", 8], ["civet", 6], ["genet", 6], ["stripedhyena", 5], ["brownhyena", 5], ["hyena", 7], ["blackbackjackal", 6], ["jackal", 7], ["wilddog", 6], ["ethiopianwolf", 3], ["honeybadger", 5], ["aardvark", 6], ["pangolin", 5], ["giantanteater", 4], ["secretarybird", 5], ["ostrich", 5], ["vulture", 7], ["stork", 6], ["crane", 5], ["peacock", 5], ["kingcobra", 4], ["blackmamba", 3], ["gaboonviper", 4], ["puma", 4], ["serval", 7], ["cheetah", 5], ["lion", 4], ["leopard", 4], ["warthog", 0], ["peccary", 6], ["monarch", 7], ["dragonfly", 7], ["termite", 0]],
  alpine: [["pika", 10], ["marmot", 9], ["chinchilla", 9], ["viscacha", 8], ["arctichare", 8], ["ibex", 8], ["bighorn", 7], ["markhor", 7], ["klipspringer", 7], ["takin", 5], ["yak", 5], ["saiga", 6], ["muskox", 5], ["reindeer", 6], ["elk", 5], ["moose", 4], ["snubnosed", 5], ["redpanda", 5], ["gelada", 5], ["pallascat", 6], ["andeancat", 5], ["snowleopard", 4], ["lynx", 5], ["tibetanfox", 6], ["arcticfox", 7], ["wolverine", 5], ["stoat", 7], ["kea", 5], ["goldeneagle", 5], ["condor", 4], ["stellerseagle", 4], ["harrier", 5], ["goshawk", 5], ["snowyowl", 5], ["moonbear", 4], ["panda", 3], ["spectacledbear", 4], ["grizzly", 3], ["polarbear", 3], ["mammoth", 2], ["llama", 5], ["alpaca", 5], ["vicuna", 5]],
  volcanic: [["gilamonster", 7], ["firesalamander", 8], ["thornydevil", 7], ["hornedlizard", 7], ["marineiguana", 6], ["komododragon", 5], ["tuatara", 5], ["monitor", 7], ["gecko", 8], ["chameleon", 7], ["herculesbeetle", 6], ["goliathbeetle", 5], ["stagbeetle", 6], ["jewelbeetle", 6], ["caracara", 6], ["condor", 4], ["raven", 7], ["vulture", 7], ["flamingo", 6], ["peccary", 6], ["babirusa", 4], ["giantarmadillo", 4], ["ninebandarmadillo", 6], ["honeybadger", 5], ["ratel", 0], ["scorpion", 8], ["seal", 6], ["penguin", 6], ["turtle", 6], ["puffin", 5]],
  grove: [["redsquirrel", 9], ["flyingsquirrel", 8], ["chipmunk", 8], ["groundhog", 7], ["marten", 8], ["fisher", 7], ["mink", 7], ["wolverine", 5], ["skunk", 7], ["raccoon", 8], ["raccoondog", 6], ["porcupine", 7], ["moose", 5], ["elk", 5], ["whitetail", 7], ["chital", 6], ["muntjac", 6], ["pudu", 5], ["reindeer", 5], ["bison", 5], ["grizzly", 4], ["blackbear", 5], ["moonbear", 4], ["sunbear", 4], ["slothbear", 4], ["baldeagle", 5], ["goldeneagle", 4], ["goshawk", 6], ["redtailhawk", 6], ["osprey", 5], ["woodpecker", 7], ["raven", 7], ["barnowl", 7], ["greathornedowl", 6], ["owl", 8], ["loon", 5], ["swan", 5], ["coyote", 6], ["grayfox", 6], ["wolf", 5], ["bobcat", 6], ["lynx", 5], ["puma", 4], ["giantotter", 4], ["firesalamander", 6], ["newt", 6], ["lunamoth", 7], ["atlasmoth", 5], ["hawkmoth", 6], ["stagbeetle", 6], ["dragonfly", 6], ["koala", 4], ["wombat", 5], ["quokka", 5], ["wallaby", 5], ["kangaroo", 4], ["treekangaroo", 4], ["lyrebird", 5], ["kakapo", 3], ["cockatoo", 5], ["blackcockatoo", 4]],
};
const N = {
  meadow: [["hedgehog", 12], ["dormouse", 11], ["opossum", 10], ["raccoon", 10], ["badger", 9], ["firefly", 10], ["lunamoth", 8], ["hawkmoth", 8], ["barnowl", 8], ["owl", 9], ["bat", 10], ["ringtail", 7], ["glasswing", 6], ["potoo", 5]],
  wetland: [["bat", 11], ["firefly", 11], ["olm", 5], ["hellbender", 6], ["axolotl", 6], ["barnowl", 8], ["potoo", 6], ["anglerfish", 0], ["glasswing", 6], ["lunamoth", 8], ["caiman", 5], ["alligator", 5], ["bushmaster", 4], ["opossum", 8]],
  jungle: [["kinkajou", 11], ["ayeaye", 7], ["tarsier", 9], ["loris", 8], ["cuscus", 8], ["potoo", 8], ["atlasmoth", 8], ["glasswing", 7], ["civet", 8], ["linsang", 7], ["genet", 7], ["fossa", 5], ["boaconstrictor", 5], ["bushmaster", 4], ["kakapo", 3], ["bat", 10], ["galago", 9], ["margay", 6], ["ocelot", 6], ["nekomata", 0]],
  desert: [["bilby", 11], ["jerboa", 11], ["opossum", 8], ["tasdevil", 7], ["quoll", 7], ["sugarglider", 8], ["barnowl", 8], ["ringtail", 7], ["kiwi", 4], ["rattlesnake", 7], ["scorpion", 10], ["sandcat", 8], ["fennec", 9], ["bat", 9], ["gecko", 8]],
  savanna: [["aardvark", 10], ["giantanteater", 8], ["stripedhyena", 9], ["brownhyena", 8], ["hyena", 10], ["porcupine", 9], ["genet", 8], ["civet", 8], ["greathornedowl", 7], ["gaboonviper", 6], ["bushmaster", 5], ["firefly", 8], ["atlasmoth", 6], ["serval", 8], ["leopard", 5], ["lion", 4], ["bat", 9]],
  alpine: [["arctichare", 11], ["pallascat", 10], ["snowyowl", 10], ["wolverine", 8], ["stoat", 9], ["viscacha", 8], ["tibetanfox", 8], ["greathornedowl", 6], ["polarbear", 4], ["snowleopard", 5], ["lynx", 6], ["bat", 7]],
  volcanic: [["bat", 11], ["firefly", 9], ["gecko", 9], ["tuatara", 5], ["barnowl", 7], ["greathornedowl", 6], ["scorpion", 9], ["firesalamander", 8], ["komododragon", 4]],
  grove: [["flyingsquirrel", 11], ["raccoon", 10], ["skunk", 9], ["porcupine", 9], ["fisher", 8], ["greathornedowl", 8], ["barnowl", 7], ["owl", 9], ["raven", 7], ["firefly", 8], ["lunamoth", 8], ["moonbear", 5], ["tuatara", 4], ["bat", 10], ["wolf", 6], ["lynx", 6], ["sugarglider", 7], ["cuscus", 6], ["quoll", 6], ["tasdevil", 5]],
};
Object.keys(C).forEach((k) => { C[k] = C[k].filter(([sp]) => DEX[sp]); N[k] = N[k].filter(([sp]) => DEX[sp]); });

// --- the eight long roads ---
const mkSeg = (k, n, lvl, biome, seed) => ({ k, n, lvl, pool: segPool(C[biome], seed, 14), poolN: segPool(N[biome], seed, 8) });
const ROADS = [
  ["route1", "town2", "meadow", [
    ["m1", "Fernhollow Path", [4, 6]], ["m2", "Sunmote Meadow", [5, 7]], ["m3", "The Old Fence Line", [5, 8]],
    ["m4", "Chittering Hedge", [6, 8]], ["m5", "Beeloud Clearing", [6, 9]], ["m6", "Stonewall Rise", [7, 9]],
    ["m7", "Mossy Steps", [7, 10]], ["m8", "Hare's Common", [8, 10]], ["m9", "Marula Approach", [8, 11]],
  ]],
  ["route2", "town3", "wetland", [
    ["w1", "Reedwater Crossing", [12, 14]], ["w2", "The Sunken Boardwalk", [12, 15]], ["w3", "Heron Flats", [13, 15]],
    ["w4", "Cattail Maze", [13, 16]], ["w5", "Otter Bend", [14, 16]], ["w6", "Frogsong Shallows", [14, 17]],
    ["w7", "Duckweed Pools", [15, 17]], ["w8", "Delta Approach", [15, 18]],
  ]],
  ["route3", "town4", "jungle", [
    ["j1", "The Vine Curtain", [19, 21]], ["j2", "Buttress Roots", [19, 22]], ["j3", "Cicada Hollow", [20, 22]],
    ["j4", "Liana Bridge", [20, 23]], ["j5", "Orchid Terrace", [21, 23]], ["j6", "Howler Ridge", [21, 24]],
    ["j7", "Canopy Approach", [22, 25]],
  ]],
  ["route4", "town5", "desert", [
    ["d1", "Scorpion Wash", [26, 28]], ["d2", "Saltpan Glare", [26, 29]], ["d3", "Wind-Carved Arches", [27, 29]],
    ["d4", "The Cactus Maze", [27, 30]], ["d5", "Dry Riverbed", [28, 30]], ["d6", "Mirage Flats", [28, 31]],
    ["d7", "Sandstone Steps", [29, 31]], ["d8", "Dune Approach", [29, 32]],
  ]],
  ["route5", "town6", "savanna", [
    ["s1", "The Acacia Line", [33, 35]], ["s2", "Termite Cathedral", [33, 36]], ["s3", "The Watering Hole", [34, 36]],
    ["s4", "Thornscrub", [34, 37]], ["s5", "Kopje Rocks", [35, 37]], ["s6", "The Grass Sea", [35, 38]],
    ["s7", "Baobab Stand", [36, 38]], ["s8", "Crag Approach", [36, 39]],
  ]],
  ["route6", "town7", "alpine", [
    ["a1", "Scree Slope", [40, 42]], ["a2", "The Chimney Climb", [40, 43]], ["a3", "Glacier Tongue", [41, 43]],
    ["a4", "Cornice Path", [41, 44]], ["a5", "Windscoured Bench", [42, 44]], ["a6", "Whiteout Basin", [42, 45]],
    ["a7", "Frost Approach", [43, 46]],
  ]],
  ["route7", "town8", "volcanic", [
    ["v1", "Ash Fall", [47, 49]], ["v2", "The Obsidian Field", [47, 50]], ["v3", "Steam Vents", [48, 50]],
    ["v4", "Basalt Columns", [48, 51]], ["v5", "Cinder Cone", [49, 51]], ["v6", "The Lava Tube", [49, 52]],
    ["v7", "Sulfur Pools", [50, 52]], ["v8", "Blackglass Ridge", [50, 53]], ["v9", "Cinder Approach", [51, 53]],
  ]],
  ["route8", "town9", "grove", [
    ["g1", "Lantern Grove", [54, 56]], ["g2", "Fogbound Track", [54, 57]], ["g3", "The Old Growth", [55, 57]],
    ["g4", "Fallen Giants", [55, 58]], ["g5", "Fungal Hollow", [56, 58]], ["g6", "Moonlit Glade", [56, 59]],
    ["g7", "Whisper Marsh", [57, 59]], ["g8", "Gloam Approach", [57, 60]],
  ]],
];

ROADS.forEach(([routeKey, townKey, biome, segs]) => {
  const zone = MAPS[routeKey].zone;
  const defs = segs.map(([k, n, lvl], i) => ({ ...mkSeg("seg_" + k, n, lvl, biome, i + 1), z: zone }));
  chainSegs(routeKey, townKey, zone, "route", defs);
});

// a sign in each new stretch, so the long road teaches as you walk it
const ROAD_SIGNS = {
  seg_m2: "🪧 'A meadow is not empty land. It is the loudest place you will ever mistake for quiet.'",
  seg_m5: "🪧 'Count the bees. Then count what they feed. Then count what eats that. This is the whole trick of ecology.'",
  seg_m8: "🪧 'Hares are born furred, eyes open, running. Rabbits are born naked and blind underground. Same order — opposite bets.'",
  seg_w2: "🪧 'The boardwalk sank because the wetland kept working. Wetlands filter, absorb floods, and store carbon. We paved a lot of them anyway.'",
  seg_w5: "🪧 'An otter keeps a favourite rock in a pocket of loose skin under its arm. It is a tool user and a hoarder and it is not sorry.'",
  seg_w7: "🪧 'Amphibian skin drinks the world. That is why they are the first to vanish when the world goes wrong.'",
  seg_j2: "🪧 'These roots flare like walls because rainforest soil is thin and poor. Everything alive here is standing on borrowed ground.'",
  seg_j5: "🪧 'Some orchids mimic a female wasp so exactly that males try to mate with them. That is not romance; that is a delivery contract.'",
  seg_j6: "🪧 'A howler chorus carries three miles. They are not fighting. They are saying: this grove is spoken for, no one needs to bleed.'",
  seg_d1: "🪧 'Scorpions glow under ultraviolet light. Nobody is certain why. Some questions just wait.'",
  seg_d4: "🪧 'A saguaro grows its first arm at around 75 years old. You are walking through someone else's slow century.'",
  seg_d6: "🪧 'Fennec ears are radiators. Jerboa legs are pogo sticks. The desert does not reward strength; it rewards cleverness with heat.'",
  seg_s2: "🪧 'Termite mounds are air-conditioned to within a degree. Architects study them. The termites have not published.'",
  seg_s3: "🪧 'At the waterhole, the truce is real but temporary. Everyone drinks. Then the rules come back.'",
  seg_s6: "🪧 'Grasslands and grazers invented each other. Grass grows from its base so it can be eaten and live. It planned for you.'",
  seg_a1: "🪧 'Scree moves under you because the mountain is still coming apart. Everything here is temporary, including the mountain.'",
  seg_a3: "🪧 'A glacier is a river that forgot to hurry. Most of these are leaving now.'",
  seg_a6: "🪧 'In a whiteout, ptarmigan sit still and vanish. Sometimes the correct move is to not move.'",
  seg_v2: "🪧 'Obsidian is glass made by a mountain in a hurry. It can hold an edge three nanometres wide — sharper than surgical steel.'",
  seg_v3: "🪧 'Life started somewhere like this: hot, chemical, lightless. Everything you have befriended is a cousin of a vent.'",
  seg_v7: "🪧 'Sulfur pools look dead and are not. Extremophiles thrive here. \"Uninhabitable\" usually just means \"not by us.\"'",
  seg_g1: "🪧 'The lanterns are fungi. A third of this forest is fungus, and the trees are talking through it.'",
  seg_g3: "🪧 'Old growth is not just old trees. It is a structure that takes centuries and cannot be replanted, only waited for.'",
  seg_g5: "🪧 'A fallen giant feeds this forest for three hundred years. Death here is a very long, very generous meal.'",
  seg_g6: "🪧 'You are nearly at Gloam. Look back down the road. You walked every step of that.'",
};
Object.entries(ROAD_SIGNS).forEach(([k, txt]) => { SIGNS[k + ":7,4"] = txt; SIGNS[k] = txt; });
