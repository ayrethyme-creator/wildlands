// ---------- CHAPTER VI — Part 10: A WIDER WILDLANDS ----------
// New regions branching off the existing trail + spawn placement for the menagerie.

Object.assign(PALS, {
  canopyz: { ground: "#3c5c34", grass: "#4c7a3c", grass2: "#568a44", tree: { bg: "#2a4426", em: "🌳" }, mount: { bg: "#3a5c34", em: "🪵" }, water: "#4a9ac9", flower: "🌺" },
  outbackz: { ground: "#c97a4a", grass: "#b56b3c", grass2: "#c47a48", tree: { bg: "#8a5230", em: "🪨" }, mount: { bg: "#a35c34", em: "⛰️" }, water: "#4a9ac9", flower: "🌵" },
  savannaz: { ground: "#d9c47a", grass: "#c9b05c", grass2: "#d4bb68", tree: { bg: "#8a7a4a", em: "🌾" }, mount: { bg: "#a89050", em: "🪨" }, water: "#4a9ac9", flower: "🌻" },
  tundraz: { ground: "#dce4ec", grass: "#c4d4e0", grass2: "#d0dce8", tree: { bg: "#8fa8bc", em: "🧊" }, mount: { bg: "#a8bcd0", em: "🏔️" }, water: "#5c9ad9", flower: "❄️" },
  taigaz: { ground: "#4c5c48", grass: "#3c6b3c", grass2: "#467a44", tree: { bg: "#2a442a", em: "🌲" }, mount: { bg: "#4c5c48", em: "🪨" }, water: "#4a9ac9", flower: "🍄" },
  reefz: { ground: "#f2e4c4", grass: "#e8c9a5", grass2: "#f0d4b0", tree: { bg: "#c95c7a", em: "🪸" }, mount: { bg: "#d9a05c", em: "🐚" }, water: "#3ad9d4", flower: "🐠" },
  oceanz: { ground: "#2a5c8a", grass: "#3a6b9a", grass2: "#4478a8", tree: { bg: "#1e4468", em: "🌊" }, mount: { bg: "#2a5478", em: "🪨" }, water: "#2a7ad9", flower: "🫧" },
  abyssz: { ground: "#1a1e34", grass: "#242a44", grass2: "#2c3450", tree: { bg: "#0e1020", em: "🕳️" }, mount: { bg: "#1a1e34", em: "🪨" }, water: "#16204c", flower: "💡" },
  kelpz: { ground: "#2a4c3c", grass: "#3a6b4c", grass2: "#447a58", tree: { bg: "#1e3a2a", em: "🌿" }, mount: { bg: "#2a4c3c", em: "🪨" }, water: "#3a8a9a", flower: "🦦" },
  polarz: { ground: "#e4eef4", grass: "#c9dce8", grass2: "#d8e6f0", tree: { bg: "#8fb3cc", em: "🧊" }, mount: { bg: "#a8c4d9", em: "🏔️" }, water: "#4a9ad9", flower: "🐧" },
});
Object.assign(ARENA, {
  canopyz: "linear-gradient(#4c7a3c,#2a4426)", outbackz: "linear-gradient(#c97a4a,#8a5230)",
  savannaz: "linear-gradient(#d9c47a,#a89050)", tundraz: "linear-gradient(#dce4ec,#8fa8bc)",
  taigaz: "linear-gradient(#3c6b3c,#2a442a)", reefz: "linear-gradient(#3ad9d4,#c95c7a)",
  oceanz: "linear-gradient(#3a6b9a,#1e4468)", abyssz: "linear-gradient(#242a44,#0e1020)",
  kelpz: "linear-gradient(#3a6b4c,#1e3a2a)", polarz: "linear-gradient(#e4eef4,#8fb3cc)",
});

// terrain-rich land layout: rocks (R), trees (T), climbable ledges (V), tall grass (G)
const ROWS_WILD = [
  "TTTTTTTTTTTTTTTT",
  "T..GGG..R..GGG.T",
  "T.GGGGG...GGGGGT",
  "T..GGG..!..GGG.T",
  "TR....VVVV....RT",
  "T..GGGG..GGGG..T",
  "T.GGGGG..GGGGG.T",
  "T...R........R.T",
  "T..GGG..!..GGG.T",
  "TTTTTTTsTTTTTTTT",
];
// marine layout: land landing strip at the south, open water north
const ROWS_SEA = [
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "TWWWWWWWWWWWWWWT",
  "T..WWWWWWWWWW..T",
  "T....!....!....T",
  "TTTTTTTsTTTTTTTT",
];

Object.assign(MAPS, {
  // ---- land regions ----
  thicket: {
    name: "Bramble Thicket", zone: "canopyz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route2", x: 1, y: 7 } },
    lvl: [11, 15],
    pool: [["hedgehog", 10], ["stoat", 10], ["weasel", 10], ["dormouse", 9], ["redsquirrel", 9], ["marten", 8], ["hare", 8], ["ladybug", 8], ["honeybee", 8], ["bumblebee", 8], ["monarch", 7], ["swallowtail", 7], ["hoverfly", 7], ["masonbee", 7], ["woodpecker", 6], ["mink", 6], ["opossum", 6], ["raccoon", 6], ["grayfox", 5], ["newt", 5], ["stickinsect", 5], ["jumpingspider", 5], ["mantis", 4], ["stagbeetle", 4], ["hellbender", 3]],
    poolN: [["dormouse", 12], ["opossum", 10], ["raccoon", 10], ["firefly", 10], ["lunamoth", 9], ["hawkmoth", 8], ["barnowl", 8], ["ringtail", 7], ["glasswing", 6], ["potoo", 5], ["tawnyfrogmouth", 5], ["olm", 4]],
  },
  canopywalk: {
    name: "Emerald Canopy Walk", zone: "canopyz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route3", x: 1, y: 7 } },
    lvl: [16, 20],
    pool: [["marmoset", 10], ["tamarin", 10], ["capuchin", 9], ["spidermonkey", 9], ["vervet", 9], ["colobus", 8], ["langur", 8], ["howler", 8], ["gibbon", 7], ["kinkajou", 7], ["coati", 7], ["tayra", 6], ["toucan", 7], ["lorikeet", 7], ["scarletmacaw", 6], ["bluegoldmacaw", 6], ["militarymacaw", 5], ["africangrey", 5], ["quetzal", 5], ["birdofparadise", 4], ["bluemorpho", 6], ["birdwing", 5], ["orchidbee", 6], ["leafcutterant", 6], ["leafinsect", 5], ["orchidmantis", 4], ["glassfrog", 6], ["redeyedtreefrog", 6], ["greeniguana", 5], ["boaconstrictor", 4], ["silkyanteater", 4], ["tamandua", 4], ["hoatzin", 4], ["margay", 4], ["marbledcat", 4], ["kodkod", 3], ["cloudedleopard", 3], ["rustyspottedcat", 4], ["gorilla", 2], ["orangutan", 3], ["siamang", 3], ["bonobo", 2], ["chimpanzee", 2], ["harpyeagle", 2], ["hyacinthmacaw", 2], ["uakari", 3], ["proboscis", 3], ["treekangaroo", 3], ["binturong", 3], ["cicada", 6], ["jewelbeetle", 5], ["herculesbeetle", 3], ["goliathbeetle", 3]],
    poolN: [["kinkajou", 12], ["ayeaye", 8], ["tarsier", 9], ["loris", 8], ["cuscus", 8], ["potoo", 8], ["atlasmoth", 8], ["glasswing", 7], ["civet", 8], ["linsang", 7], ["genet", 7], ["fossa", 5], ["boaconstrictor", 5], ["bushmaster", 4], ["kakapo", 3]],
  },
  outback: {
    name: "Red Sand Outback", zone: "outbackz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route4", x: 1, y: 7 } },
    lvl: [22, 26],
    pool: [["bandicoot", 10], ["quokka", 9], ["wallaby", 9], ["numbat", 8], ["bilby", 8], ["kangaroo", 7], ["wombat", 7], ["emu", 6], ["dingo", 6], ["thornydevil", 8], ["frilledlizard", 7], ["hornedlizard", 7], ["skink", 7], ["gilamonster", 5], ["jerboa", 8], ["chipmunk", 7], ["prairiedog", 7], ["roadrunner", 6], ["rattlesnake", 6], ["taipan", 4], ["blackfootedcat", 5], ["corsacfox", 6], ["swiftfox", 6], ["bateared", 6], ["aardwolf", 5], ["honeypotant", 8], ["fiddlercrab", 4], ["cockatiel", 6], ["budgie", 7], ["rosella", 6], ["quakerparrot", 6], ["ninebandarmadillo", 6], ["peccary", 5], ["babirusa", 3], ["kookaburra", 5], ["ostrich", 4], ["cassowary", 3], ["echidna", 4], ["platypus", 3]],
    poolN: [["bilby", 12], ["jerboa", 11], ["opossum", 9], ["tasdevil", 8], ["quoll", 8], ["sugarglider", 9], ["cuscus", 7], ["barnowl", 7], ["ringtail", 7], ["kiwi", 5], ["rattlesnake", 6], ["scorpion", 8]],
  },
  savanna: {
    name: "Long Grass Savanna", zone: "savannaz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route5", x: 1, y: 7 } },
    lvl: [27, 31],
    pool: [["gazelle", 9], ["springbok", 9], ["impala", 9], ["dikdik", 8], ["hartebeest", 7], ["topi", 7], ["wildebeest", 7], ["zebra", 7], ["kudu", 6], ["eland", 6], ["gerenuk", 6], ["oryx", 5], ["addax", 5], ["blackbuck", 6], ["nyala", 6], ["sitatunga", 5], ["bongo", 4], ["giraffe", 4], ["okapi", 3], ["whiterhino", 3], ["blackrhino", 3], ["africanelephant", 2], ["baboon", 7], ["vervet", 7], ["mandrill", 4], ["gelada", 4], ["mongoose", 8], ["meerkat", 8], ["civet", 6], ["genet", 6], ["stripedhyena", 5], ["brownhyena", 5], ["blackbackjackal", 6], ["ethiopianwolf", 3], ["secretarybird", 5], ["ostrich", 5], ["stork", 6], ["ibis", 6], ["crane", 5], ["peacock", 5], ["giantanteater", 4], ["pangolin", 5], ["kingcobra", 4], ["blackmamba", 3], ["gaboonviper", 4], ["monarch", 6], ["dragonfly", 6]],
    poolN: [["aardvark", 10], ["giantanteater", 8], ["stripedhyena", 9], ["brownhyena", 8], ["porcupine", 9], ["genet", 8], ["civet", 8], ["greathornedowl", 7], ["gaboonviper", 6], ["bushmaster", 5], ["firefly", 8], ["atlasmoth", 6]],
  },
  tundra: {
    name: "Hoarfrost Tundra", zone: "tundraz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route6", x: 1, y: 7 } },
    lvl: [32, 36],
    pool: [["arctichare", 10], ["pika", 9], ["marmot", 9], ["viscacha", 8], ["chinchilla", 8], ["reindeer", 8], ["muskox", 6], ["saiga", 7], ["yak", 5], ["takin", 5], ["markhor", 6], ["bighorn", 6], ["snubnosed", 5], ["gelada", 5], ["pallascat", 6], ["tibetanfox", 7], ["andeancat", 5], ["wolverine", 5], ["stoat", 8], ["ferret", 7], ["snowyowl", 6], ["kea", 5], ["condor", 4], ["stellerseagle", 4], ["goldeneagle", 5], ["harrier", 5], ["vicuna", 6], ["guanaco", 6], ["llama", 6], ["alpaca", 6], ["polarbear", 3], ["mammoth", 2], ["redpanda", 4]],
    poolN: [["arctichare", 12], ["pallascat", 10], ["snowyowl", 10], ["wolverine", 8], ["stoat", 9], ["viscacha", 8], ["tibetanfox", 8], ["greathornedowl", 6], ["polarbear", 4]],
  },
  taiga: {
    name: "Whispering Taiga", zone: "taigaz", music: "route", rows: ROWS_WILD,
    exits: { "7,9": { map: "route8", x: 1, y: 7 } },
    lvl: [42, 46],
    pool: [["redsquirrel", 9], ["flyingsquirrel", 8], ["chipmunk", 8], ["groundhog", 8], ["marten", 8], ["fisher", 7], ["mink", 7], ["wolverine", 6], ["skunk", 7], ["raccoon", 8], ["raccoondog", 6], ["porcupine", 7], ["moose", 6], ["elk", 6], ["whitetail", 7], ["reindeer", 6], ["bison", 5], ["grizzly", 4], ["blackbear", 5], ["moonbear", 4], ["baldeagle", 5], ["goldeneagle", 5], ["goshawk", 6], ["redtailhawk", 6], ["osprey", 5], ["woodpecker", 7], ["raven", 7], ["loon", 5], ["swan", 5], ["mandarinduck", 5], ["coyote", 6], ["grayfox", 6], ["bobcat", 6], ["lynx", 5], ["puma", 4], ["giantotter", 4], ["seaotter", 3], ["firesalamander", 6], ["newt", 6], ["hellbender", 4], ["lunamoth", 6], ["stagbeetle", 5], ["dragonfly", 6], ["damselfly", 6]],
    poolN: [["flyingsquirrel", 11], ["raccoon", 10], ["skunk", 9], ["porcupine", 9], ["fisher", 8], ["greathornedowl", 8], ["barnowl", 7], ["raven", 7], ["firefly", 8], ["lunamoth", 8], ["moonbear", 5], ["tuatara", 4]],
  },
  // ---- marine region ----
  tidewater: {
    name: "Tidewater Cove", zone: "reefz", music: "town",
    rows: [
      "^^^^^n^^^^n^^^^^",
      "^...!......!...^",
      "^..............^",
      "e..............e",
      "^..CC.....MM...^",
      "^..............^",
      "^......*.......^",
      "^...!......!...^",
      "^..............^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: {
      "7,9": { map: "shore", x: 2, y: 8 },
      "0,3": { map: "reef", x: 7, y: 8 }, "15,3": { map: "kelp", x: 7, y: 8 },
      "5,0": { map: "openocean", x: 7, y: 8 }, "10,0": { map: "polarsea", x: 7, y: 8 },
    },
  },
  reef: {
    name: "Coral Reef Shallows", zone: "reefz", music: "route", rows: ROWS_SEA,
    exits: { "7,9": { map: "tidewater", x: 1, y: 3 } },
    lvl: [38, 42], lvlWater: [38, 42],
    pool: [["hermitcrab", 12], ["fiddlercrab", 11], ["coconutcrab", 8], ["greenseaturtle", 7], ["hawksbill", 6], ["marineiguana", 6], ["bluefootedbooby", 7], ["puffin", 6], ["kingfisher", 7], ["heron", 7], ["spoonbill", 6], ["pelican", 6], ["ibis", 6]],
    poolWater: [["clownfish", 12], ["butterflyfish", 11], ["wrasse", 11], ["angelfish", 10], ["mandarinfish", 10], ["mandarin_dragonet", 9], ["parrotfish", 9], ["triggerfish", 8], ["boxfish", 8], ["pufferfish", 8], ["seahorse", 8], ["pipefish", 8], ["lionfish", 7], ["moray", 7], ["octopus", 6], ["cuttlefish", 6], ["mimicoctopus", 5], ["nautilus", 5], ["mantisshrimp", 6], ["lobster", 6], ["spidercrab", 5], ["stingray", 6], ["electricray", 5], ["eagleray", 5], ["reefshark", 6], ["epaulette", 6], ["zebrashark", 5], ["nurseshark", 5], ["wobbegong", 5], ["seasnake", 5], ["dugong", 4], ["manatee", 4], ["moonjelly", 6], ["leafyseadragon", 4], ["weedyseadragon", 4], ["greenseaturtle", 5], ["hawksbill", 4]],
  },
  kelp: {
    name: "Kelp Cathedral", zone: "kelpz", music: "route", rows: ROWS_SEA,
    exits: { "7,9": { map: "tidewater", x: 14, y: 3 } },
    lvl: [40, 44], lvlWater: [40, 44],
    pool: [["seaotter", 10], ["sealion", 9], ["fursealion", 8], ["harborporpoise", 7], ["monkseal", 6], ["shoebill", 5], ["albatross", 6], ["frigatebird", 6], ["osprey", 6]],
    poolWater: [["seaotter", 11], ["sealion", 9], ["fursealion", 8], ["grouper", 8], ["barracuda", 7], ["moray", 7], ["octopus", 7], ["cuttlefish", 7], ["lobster", 7], ["spidercrab", 6], ["mantisshrimp", 6], ["sunfishmola", 5], ["thresher", 5], ["makoshark", 5], ["hammerhead", 5], ["reefshark", 6], ["bullshark", 5], ["stingray", 6], ["sawfish", 4], ["mantaray", 4], ["bottlenose", 6], ["harborporpoise", 6], ["hectorsdolphin", 5], ["commersons", 5], ["moonjelly", 6], ["lionsmane", 4], ["boxjelly", 4], ["axolotl", 3], ["coelacanth", 2], ["greenanaconda", 3], ["gharial", 3], ["alligator", 3], ["caiman", 3], ["capybara", 5], ["giantotter", 5], ["proboscis", 4], ["sitatunga", 4], ["pygmyhippo", 4], ["tapir", 4], ["goliathfrog", 5], ["hellbender", 4], ["olm", 3], ["basilisk", 5], ["amazonriverdolphin", 4], ["gangesdolphin", 4], ["irrawaddy", 4], ["vaquita", 3], ["damselfly", 5], ["platypus", 5], ["duiker", 4], ["chevrotain", 4]],
  },
  openocean: {
    name: "The Open Blue", zone: "oceanz", music: "route", rows: withRow(ROWS_SEA, 8, "e....!....!....T"),
    exits: { "7,9": { map: "tidewater", x: 5, y: 1 }, "0,8": { map: "abyss", x: 7, y: 8 } },
    lvl: [44, 48], lvlWater: [44, 48],
    pool: [["albatross", 10], ["frigatebird", 9], ["bluefootedbooby", 8], ["pelican", 7], ["puffin", 6], ["flyingfish", 8]],
    poolWater: [["flyingfish", 10], ["swordfish", 8], ["marlin", 8], ["barracuda", 8], ["makoshark", 7], ["thresher", 7], ["hammerhead", 7], ["tigershark", 6], ["bullshark", 6], ["baskingshark", 5], ["whaleshark", 4], ["greatwhite", 3], ["mantaray", 6], ["eagleray", 6], ["sawfish", 5], ["sunfishmola", 6], ["leatherback", 5], ["greenseaturtle", 5], ["seasnake", 5], ["bottlenose", 8], ["spinnerdolphin", 8], ["duskydolphin", 7], ["commersons", 6], ["rissos", 6], ["melonhead", 6], ["pilotwhale", 5], ["falsekiller", 5], ["orca", 3], ["minke", 5], ["seiwhale", 5], ["brydeswhale", 5], ["finwhale", 4], ["humpback", 4], ["graywhale", 4], ["rightwhale", 3], ["spermwhale", 3], ["bluewhale", 2], ["cuvierbeaked", 4], ["elephantseal", 4], ["monkseal", 5], ["lionsmane", 5], ["boxjelly", 5], ["moonjelly", 6], ["giantsquid", 2]],
  },
  abyss: {
    name: "The Midnight Zone", zone: "abyssz", music: "cave", rows: ROWS_SEA,
    exits: { "7,9": { map: "openocean", x: 1, y: 8 } },
    lvl: [48, 52], lvlWater: [48, 52],
    pool: [["oarfish", 8], ["coelacanth", 6], ["frilledshark", 6], ["goblinshark", 6]],
    poolWater: [["anglerfish", 11], ["oarfish", 9], ["goblinshark", 8], ["frilledshark", 8], ["greenlandshark", 6], ["coelacanth", 6], ["giantsquid", 5], ["cuvierbeaked", 6], ["spermwhale", 5], ["nautilus", 7], ["mimicoctopus", 7], ["octopus", 7], ["cuttlefish", 6], ["spidercrab", 7], ["lionsmane", 6], ["boxjelly", 6], ["moonjelly", 7], ["olm", 5], ["hellbender", 5], ["electricray", 6], ["gangesdolphin", 4], ["amazonriverdolphin", 4]],
  },
  polarsea: {
    name: "Ice Floe Passage", zone: "polarz", music: "route", rows: ROWS_SEA,
    exits: { "7,9": { map: "tidewater", x: 10, y: 1 } },
    lvl: [46, 50], lvlWater: [46, 50],
    pool: [["emperorpenguin", 11], ["penguin", 10], ["harpseal", 9], ["ribbonseal", 8], ["crabeaterseal", 8], ["weddellseal", 8], ["walrus", 6], ["polarbear", 4], ["arctichare", 7], ["arcticfox", 8], ["snowyowl", 7], ["stellerseagle", 5], ["puffin", 7], ["muskox", 5], ["reindeer", 6], ["mammoth", 2]],
    poolWater: [["harpseal", 10], ["ribbonseal", 9], ["crabeaterseal", 9], ["weddellseal", 9], ["leopardseal", 6], ["fursealion", 8], ["walrus", 6], ["elephantseal", 6], ["emperorpenguin", 8], ["beluga", 6], ["narwhal", 5], ["bowhead", 4], ["orca", 4], ["minke", 5], ["greenlandshark", 5], ["lionsmane", 6], ["harborporpoise", 6], ["loon", 5], ["monkseal", 4]],
  },
});

// ---- wire the new regions into the existing trail (side exits) ----
["route2", "route3", "route4", "route5", "route6", "route8"].forEach((rk, i) => {
  const dest = ["thicket", "canopywalk", "outback", "savanna", "tundra", "taiga"][i];
  const m = MAPS[rk];
  m.rows = m.rows.map((r, y) => (y === 7 ? "e" + r.slice(1) : r));
  m.exits = { ...m.exits, "0,7": { map: dest, x: 7, y: 8 } };
});
// Emberglass Shore gains a west landing to Tidewater Cove
MAPS.shore.rows = withRow(MAPS.shore.rows, 8, "e.G.WWWWWWWWWWWT");
MAPS.shore.exits = { ...MAPS.shore.exits, "0,8": { map: "tidewater", x: 7, y: 8 } };

// ---- seed the older trail with new neighbours so nothing is stranded ----
const addPool = (mapKey, key, extra) => {
  const m = MAPS[mapKey];
  if (m && m[key]) m[key] = [...m[key], ...extra];
};
addPool("route2", "pool", [["capybara", 8], ["mara", 7], ["agouti", 7], ["degu", 7], ["nakedmolerat", 4], ["chevrotain", 5], ["duiker", 5], ["pudu", 5], ["muntjac", 5], ["ladybug", 8], ["honeybee", 8], ["hoverfly", 7], ["damselfly", 6], ["tomatofrog", 6], ["glassfrog", 6], ["axolotl", 4], ["kingfisher", 6], ["heron", 6], ["mandarinduck", 5], ["swan", 5], ["loon", 4], ["platypus", 4], ["mink", 6], ["bushdog", 5]]);
addPool("route3", "pool", [["macaque", 8], ["ringtaillemur", 7], ["sifaka", 6], ["indri", 5], ["gibbon", 5], ["fossa", 4], ["linsang", 5], ["binturong", 4], ["sunbear", 4], ["slothbear", 4], ["fishingcat", 5], ["jungle_cat", 5], ["asiangoldencat", 4], ["dhole", 5], ["tapir", 4], ["babirusa", 4], ["peccary", 5], ["gharial", 3], ["komododragon", 3], ["greeniguana", 6], ["tegu", 5], ["basilisk", 5], ["cicada", 7], ["leafcutterant", 7], ["jewelbeetle", 5], ["birdwing", 5], ["kookaburra", 5], ["hoatzin", 4], ["woodpecker", 6]]);
addPool("route4", "pool", [["jerboa", 9], ["chipmunk", 8], ["prairiedog", 8], ["groundhog", 7], ["ninebandarmadillo", 7], ["giantarmadillo", 4], ["oryx", 5], ["addax", 5], ["dikdik", 6], ["gazelle", 6], ["pronghorn", 6], ["llama", 5], ["vicuna", 5], ["guanaco", 5], ["alpaca", 5], ["gilamonster", 5], ["hornedlizard", 6], ["thornydevil", 6], ["rattlesnake", 6], ["roadrunner", 6], ["honeypotant", 7], ["condor", 3], ["caracara", 5], ["coyote", 6], ["culpeo", 5], ["swiftfox", 6], ["blackfootedcat", 5]]);
addPool("route5", "pool", [["zebra", 7], ["wildebeest", 7], ["impala", 7], ["springbok", 7], ["hartebeest", 6], ["topi", 6], ["kudu", 5], ["eland", 5], ["giraffe", 4], ["whiterhino", 3], ["africanelephant", 2], ["asianelephant", 2], ["baboon", 6], ["gelada", 5], ["mandrill", 4], ["mongoose", 7], ["blackbackjackal", 6], ["stripedhyena", 5], ["secretarybird", 4], ["ostrich", 4], ["stork", 5], ["crane", 5], ["peacock", 4], ["kingcobra", 4], ["blackmamba", 3], ["puma", 4], ["jaguarundi", 5], ["ocelot", 5], ["bobcat", 5], ["dingo", 5], ["ethiopianwolf", 3], ["monarch", 6], ["bumblebee", 7]]);
addPool("route6", "pool", [["pika", 9], ["marmot", 8], ["chinchilla", 8], ["viscacha", 7], ["arctichare", 7], ["bighorn", 6], ["klipspringer", 6], ["markhor", 6], ["takin", 5], ["yak", 5], ["saiga", 6], ["muskox", 5], ["reindeer", 6], ["elk", 5], ["moose", 4], ["snubnosed", 5], ["redpanda", 5], ["pallascat", 6], ["andeancat", 5], ["tibetanfox", 6], ["wolverine", 5], ["kea", 5], ["goldeneagle", 5], ["condor", 4], ["stellerseagle", 4], ["harrier", 5], ["goshawk", 5], ["moonbear", 4], ["panda", 3], ["spectacledbear", 4], ["grizzly", 3]]);
addPool("route7", "pool", [["gilamonster", 6], ["firesalamander", 6], ["thornydevil", 6], ["hornedlizard", 6], ["marineiguana", 5], ["komododragon", 4], ["tuatara", 5], ["herculesbeetle", 5], ["goliathbeetle", 4], ["stagbeetle", 5], ["jewelbeetle", 5], ["caracara", 5], ["condor", 4], ["raven", 6], ["peccary", 5], ["babirusa", 4], ["giantarmadillo", 4]]);
addPool("route8", "pool", [["redsquirrel", 8], ["flyingsquirrel", 7], ["marten", 7], ["fisher", 6], ["skunk", 7], ["porcupine", 6], ["raccoon", 7], ["blackbear", 5], ["moonbear", 4], ["spectacledbear", 4], ["sunbear", 4], ["whitetail", 6], ["chital", 6], ["muntjac", 6], ["pudu", 5], ["moose", 4], ["elk", 5], ["okapi", 3], ["bongo", 4], ["nyala", 4], ["gerenuk", 4], ["treekangaroo", 4], ["koala", 4], ["wombat", 5], ["quokka", 5], ["wallaby", 5], ["kangaroo", 4], ["cloudedleopard", 3], ["margay", 4], ["marbledcat", 4], ["fossa", 3], ["tayra", 5], ["kinkajou", 5], ["coati", 5], ["ringtail", 5], ["redpanda", 4], ["panda", 3], ["toucan", 5], ["quetzal", 4], ["lyrebird", 5], ["kakapo", 3], ["cockatoo", 5], ["blackcockatoo", 4], ["eclectus", 4], ["conure", 5], ["hummingbird", 6], ["lunamoth", 5], ["atlasmoth", 4], ["mantis", 5], ["orchidmantis", 4], ["stickinsect", 5], ["leafinsect", 5], ["peacockspider", 5], ["jumpingspider", 5]]);
addPool("route9", "pool", [["snubnosed", 5], ["gelada", 5], ["markhor", 5], ["bighorn", 5], ["takin", 5], ["yak", 4], ["muskox", 4], ["mammoth", 2], ["polarbear", 3], ["wolverine", 5], ["pallascat", 5], ["snowyowl", 5], ["goldeneagle", 5], ["stellerseagle", 4], ["condor", 4], ["harpyeagle", 3], ["philippineeagle", 3], ["peregrine", 5], ["baldeagle", 4], ["raven", 6], ["arctichare", 6], ["pika", 6], ["chinchilla", 5], ["viscacha", 5]]);
addPool("shore", "pool", [["bluefootedbooby", 8], ["pelican", 8], ["spoonbill", 7], ["ibis", 7], ["heron", 7], ["puffin", 6], ["albatross", 6], ["frigatebird", 6], ["osprey", 6], ["emperorpenguin", 5], ["kingfisher", 7], ["hermitcrab", 8], ["fiddlercrab", 8], ["coconutcrab", 5], ["marineiguana", 6], ["greenseaturtle", 6], ["hawksbill", 5], ["leatherback", 4], ["sealion", 6], ["fursealion", 6], ["walrus", 4], ["elephantseal", 4], ["monkseal", 5], ["harpseal", 5], ["seaotter", 6]]);
addPool("shore", "poolWater", [["reefshark", 6], ["nurseshark", 6], ["zebrashark", 5], ["epaulette", 6], ["stingray", 7], ["eagleray", 5], ["clownfish", 8], ["parrotfish", 7], ["wrasse", 7], ["angelfish", 6], ["butterflyfish", 7], ["triggerfish", 6], ["pufferfish", 6], ["boxfish", 6], ["lionfish", 5], ["moray", 6], ["seahorse", 6], ["pipefish", 6], ["octopus", 5], ["cuttlefish", 5], ["nautilus", 4], ["lobster", 6], ["mantisshrimp", 5], ["spidercrab", 4], ["moonjelly", 6], ["bottlenose", 6], ["harborporpoise", 5], ["hectorsdolphin", 4], ["manatee", 4], ["dugong", 4], ["greenseaturtle", 5], ["seasnake", 5], ["flyingfish", 6], ["barracuda", 5], ["grouper", 5], ["sunfishmola", 4], ["seaotter", 6], ["sealion", 6]]);
addPool("cave1", "pool", [["nakedmolerat", 8], ["honeypotant", 7], ["firefly", 8], ["olm", 5], ["hellbender", 5], ["skink", 6], ["tuatara", 4], ["ringtail", 6], ["dormouse", 6], ["degu", 6], ["agouti", 6], ["cicada", 5], ["stagbeetle", 5], ["goliathbeetle", 4], ["jumpingspider", 6], ["axolotl", 4]]);
addPool("peak", "pool", [["pika", 8], ["marmot", 7], ["bighorn", 6], ["markhor", 5], ["andeancat", 4], ["pallascat", 5], ["condor", 4], ["goldeneagle", 5], ["kea", 5], ["snowyowl", 4], ["chinchilla", 6], ["viscacha", 6], ["vicuna", 5], ["guanaco", 5], ["takin", 4]]);

Object.assign(SIGNS, {
  "thicket:8,3": "🪧 'BRAMBLE THICKET — mind the ledges; a ranger who can climb sees twice the country. Pollinators everywhere: step gently.'",
  "thicket:8,8": "🪧 'Ninety percent of flowering plants need an animal to move their pollen. Every bee you befriend here is a whole meadow saying thank you.'",
  "canopywalk:8,3": "🪧 'EMERALD CANOPY WALK — the rainforest has floors. Most life never touches the ground.'",
  "canopywalk:8,8": "🪧 'Macaws pair for life and can live sixty years. That is why the pet trade is a tragedy and not a gift shop.'",
  "outback:8,3": "🪧 'RED SAND OUTBACK — marsupials raise their young in a pouch. Different strategy, same devotion.'",
  "outback:8,8": "🪧 'The numbat eats 20,000 termites a day and has no venom, no speed, no armour. It survives by being very, very specific.'",
  "savanna:8,3": "🪧 'LONG GRASS SAVANNA — hooves shaped these plains. Grass and grazers built each other.'",
  "savanna:8,8": "🪧 'A giraffe and a human have the same number of neck vertebrae: seven. Evolution stretches; it rarely adds.'",
  "tundra:8,3": "🪧 'HOARFROST TUNDRA — nothing here is wasted. Every calorie is a decision.'",
  "tundra:8,8": "🪧 'Pallas's cats are not grumpy. That flat face is an ambush adaptation. They just look like they have opinions.'",
  "taiga:8,3": "🪧 'WHISPERING TAIGA — the largest forest on earth, and the quietest.'",
  "taiga:8,8": "🪧 'Wolverines can smell a carcass under five metres of snow. Rangers: bring treats they can actually find.'",
  "tidewater:4,1": "🪧 '⬆ THE OPEN BLUE — whales, sharks, and the long crossing. ⬆ ICE FLOE PASSAGE — narwhals and the ice folk.'",
  "tidewater:11,1": "🪧 '⬅ CORAL REEF ➡ KELP CATHEDRAL. Reefs cover under 1% of the ocean floor and shelter about a quarter of all marine species.'",
  "tidewater:4,7": "🪧 'DIVE SAFELY: step into the water to swim. Deeper zones lie beyond the cove.'",
  "tidewater:11,7": "🪧 'Cove rule: we do not take from the sea. We befriend it and we leave it fuller than we found it.'",
  "reef:5,8": "🪧 'CORAL REEF SHALLOWS — coral is an animal, an algae, and a rock, all at once. Bleaching is what happens when the partnership breaks.'",
  "reef:10,8": "🪧 'Clownfish are all born male. The largest becomes female. The reef has never cared much for your categories.'",
  "kelp:5,8": "🪧 'KELP CATHEDRAL — sea otters eat urchins; urchins eat kelp. Remove the otter and the forest becomes a desert. This actually happened.'",
  "kelp:10,8": "🪧 'A sea otter has up to a million hairs per square inch — no blubber, just the densest fur on earth. It nearly cost them everything.'",
  "openocean:5,8": "🪧 'THE OPEN BLUE — the blue whale is the largest animal that has ever lived. Larger than any dinosaur in the Rift.'",
  "openocean:10,8": "🪧 'Whale fall: when a great whale dies, its body feeds a deep-sea community for fifty years. Nothing is wasted down here either.'",
  "abyss:5,8": "🪧 'THE MIDNIGHT ZONE — below 1,000 metres, no sunlight has ever reached. Most animals here make their own.'",
  "abyss:10,8": "🪧 'We have better maps of Mars than of this. You are somewhere no ranger has catalogued.'",
  "polarsea:5,8": "🪧 'ICE FLOE PASSAGE — the narwhal tusk is a tooth. A spiral tooth, through the lip, packed with ten million nerve endings.'",
  "polarsea:10,8": "🪧 'Emperor penguins huddle and rotate so that no bird stays on the cold edge forever. Take from that what you like.'",
});
