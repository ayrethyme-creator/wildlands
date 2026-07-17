// ---------- CHAPTER XIII — Part 16: BECOMING ----------
// Evolutions that are not "baby, adult, senior". Every chain here is a real
// biological transformation: metamorphosis, delayed plumage, sex change, caste,
// bimaturism, diet-driven colour, migration. The Field Guide explains each one.
//
// grows: { to, at }                      -> straight line
// grows: { at, toM, toF }                -> branches on sex
// grows: { to, at, needs: "night" }      -> only after dark

// ---- new sprites for the new stages ----
Object.assign(ART, {
  froglet: frogA({ skin: "#3a8a4c", belly: "#c9d94a", iris: "#26221c", toes: true, toeC: "#3a8a4c", tail: true }),
  caterpillar: insA({ body: "#e8d44a", head: "#26221c", bands: true, markC: "#26221c", legC: "#3c3630", larva: true }),
  chrysalis: insA({ body: "#4c9a5c", head: "#3a7a4c", pupa: true, markC: "#e8c547", legC: "#3a7a4c" }),
  naiad: insA({ body: "#5c6b4c", head: "#4c5840", legC: "#3c4430", larva: true, aquatic: true }),
  teneral: flutA({ wingC: "#dce4ec", veins: true, veinC: "#a8b5c4", body: "#8a9a6b", eyeSpots: false }),
  cicadanymph: insA({ body: "#8a6f4c", head: "#6b5438", legC: "#5c4630", larva: true, dig: true }),
  eaglet: birdA({ body: "#c9bda3", wingC: "#a89878", head: "#d9cfc0", bill: "hook", beakC: "#3c3630", iris: "#3c3226", downy: true }),
  eaglejuv: rapA({ body: "#5c4c3c", wingC: "#3c3226", head: "#6b5c4c", mottle: true, markC: "#c9bda3", beakC: "#3c3630", iris: "#5c4436" }),
  cygnet: birdA({ body: "#8a8578", wingC: "#6b6858", head: "#a8a396", bill: "cone", beakC: "#3c3630", downy: true }),
  swanjuv: birdA({ body: "#c9c4b5", wingC: "#a8a396", head: "#d9d4c4", neck: true, neckC: "#c9c4b5", bill: "cone", beakC: "#5c5448" }),
  flamingochick: birdA({ body: "#c9c4b5", wingC: "#a8a396", head: "#d9d4c4", neck: true, neckC: "#c9c4b5", bill: "cone", beakC: "#5c5448", downy: true }),
  flamingojuv: birdA({ body: "#e8c9c0", wingC: "#d9b0a5", head: "#e8c9c0", neck: true, neckC: "#e8c9c0", bill: "hook", beakC: "#3c3630" }),
  penguinchick: birdA({ body: "#8a8578", wingC: "#6b6858", head: "#3c3630", bib: "#c9c4b5", beakC: "#3c3630", downy: true }),
  penguinjuv: birdA({ body: "#3c4450", wingC: "#26292e", head: "#3c4450", bib: "#f2ede0", beakC: "#3c3630" }),
  molepup: rodA({ fur: "#e8c9b5", inner: "#d9a58a", muzzle: "#e8c9b5", iris: "#2a2018" }),
  molequeen: rodA({ fur: "#d9a58a", inner: "#c98a70", muzzle: "#e8c9b5", iris: "#2a2018", big: true }),
  clownjuv: fishA({ body: "#e8a53a", finC: "#f2ede0", bands: true, markC: "#f8f4ea", bigEye: true }),
  clownfemale: fishA({ body: "#e8632a", finC: "#26221c", bands: true, markC: "#f8f4ea", bigEye: true, big: true }),
  manedlion: felArt({ fur: "#d9a85c", inner: "#b5844a", muzzle: "#e8dcc3", iris: "#c9a43a", ruff: true, ruffC: "#8a5c2a", big: true }),
  orangutanflanged: primA({ fur: "#c9622a", face: "#8a5c3c", ruff: true, ruffC: "#a34a1e", iris: "#5c3a22", flange: true }),
  parr: fishA({ body: "#8a9a7a", finC: "#6b7a5c", spots: true, markC: "#3c4430", bigEye: true }),
  smolt: fishA({ body: "#c9d4dc", finC: "#a8b5c4", bigEye: true }),
  salmonadult: fishA({ body: "#c94a3a", finC: "#8a3428", hook: true, bigEye: true }),
  leptocephalus: fishA({ body: "#dce4ec", finC: "#c9d4dc", clear: true, bigEye: true }),
  glasseel: fishA({ body: "#e8e4d8", finC: "#c9c4b5", clear: true, long: true }),
  elver: fishA({ body: "#5c6b4c", finC: "#4c5840", long: true }),
  polyp: jellyA({ bell: "#c9b8e8", tentC: "#a894d9", polyp: true }),
  ephyra: jellyA({ bell: "#dcd0f2", tentC: "#c9b8e8", small: true }),
  moonjelly: jellyA({ bell: "#e8dcf2", tentC: "#c9b8e8", glow: true }),
  zoea: crabA({ shell: "#c9b08a", claw: "#a8906b", larva: true, bigEye: true }),
  megalopa: crabA({ shell: "#a8906b", claw: "#8a7458", bigEye: true }),
  fawn: ungA({ coat: "#c9a878", spots: true, markC: "#f2ede0", muzzle: "#5c4436", iris: "#3a2e22" }),
  yearlingelk: ungA({ coat: "#a3855c", muzzle: "#4c3c30", iris: "#3a2e22", antler: true, hornC: "#8a7458", small: true }),
  sealpup: pinA({ fur: "#f2ede0", head: "#f8f4ea", muzzle: "#e8dcc3", iris: "#26221c" }),
  sealjuv: pinA({ fur: "#8a8578", head: "#9a9488", muzzle: "#a8a396", iris: "#26221c" }),
  beachmaster: pinA({ fur: "#5c5448", head: "#6b6358", muzzle: "#7a7468", iris: "#26221c", proboscis: true, big: true }),
  axolotlmeta: frogA({ skin: "#8a7a6b", belly: "#c9bda3", spots: true, markC: "#5c5044", iris: "#c9a43a", toes: true, toeC: "#8a7a6b" }),
});

const E = (n, art, t, b, m, c, grows, org) => ({ n, art, t, b, m, l: [], c, ...(grows ? { grows } : {}), ...(org ? { org } : {}), juv: !!grows });

Object.assign(DEX, {
  // === TRUE METAMORPHOSIS — the body is rebuilt, and the type changes with it ===
  // tadpole -> froglet -> dart frog. The froglet still has its tail.
  froglet: E("Froglet", "froglet", ["Aquatic", "Venom"], B(38, 42, 32, 44), ["splash", "tackle", "toxinspray"], 0.5, { to: "dartfrog", at: 18 }, "metamorphosis"),
  // caterpillar -> chrysalis -> monarch. The chrysalis cannot move: pure armour.
  monarch_c: E("Monarch Caterpillar", "caterpillar", ["Bug"], B(30, 34, 30, 18), ["silksnare", "tackle"], 0.6, { to: "monarch_p", at: 12 }, "larva"),
  monarch_p: E("Chrysalis", "chrysalis", ["Bug", "Armor"], B(40, 8, 66, 2), ["harden", "ironhide"], 0.5, { to: "monarch", at: 18 }, "pupa"),
  // dragonfly naiad is an aquatic predator for YEARS before it ever flies
  naiad: E("Dragonfly Naiad", "naiad", ["Aquatic", "Bug"], B(36, 44, 34, 30), ["tackle", "stingshot", "bubblejet"], 0.55, { to: "teneral", at: 16 }, "aquatic larva"),
  teneral: E("Teneral Dragonfly", "teneral", ["Bug", "Aerial"], B(38, 40, 28, 52), ["buzzrush", "gust"], 0.5, { to: "dragonfly", at: 22 }, "just emerged"),
  // seventeen years underground, five weeks in the sun
  cicadanymph: E("Cicada Nymph", "cicadanymph", ["Burrow", "Bug"], B(34, 32, 40, 16), ["dig", "tackle"], 0.6, { to: "cicada", at: 20 }, "17 years below"),
  // === DELAYED PLUMAGE — the adult look takes years to arrive ===
  eaglet: E("Eaglet", "eaglet", ["Aerial"], B(40, 38, 34, 30), ["peck", "scratch"], 0.5, { to: "eaglejuv", at: 16 }, "downy"),
  eaglejuv: E("Juvenile Bald Eagle", "eaglejuv", ["Aerial", "Predator"], B(54, 58, 44, 56), ["divebomb", "peck", "gust"], 0.35, { to: "baldeagle", at: 30 }, "no white head yet"),
  cygnet: E("Cygnet", "cygnet", ["Aquatic"], B(38, 30, 34, 30), ["splash", "peck"], 0.55, { to: "swanjuv", at: 14 }, "grey"),
  swanjuv: E("Juvenile Swan", "swanjuv", ["Aquatic", "Aerial"], B(48, 40, 42, 40), ["splash", "gust", "peck"], 0.4, { to: "swan", at: 26 }, "still dusty"),
  // === DIET-DRIVEN COLOUR — flamingos are not born pink; they eat their way there ===
  flamingo_c: E("Flamingo Chick", "flamingochick", ["Aquatic"], B(34, 28, 30, 32), ["splash", "peck"], 0.55, { to: "flamingo_j", at: 14 }, "grey, downy"),
  flamingo_j: E("Juvenile Flamingo", "flamingojuv", ["Aerial", "Aquatic"], B(44, 38, 36, 44), ["gust", "peck", "splash"], 0.42, { to: "flamingo", at: 26 }, "turning pink"),
  penguin_c: E("Penguin Chick", "penguinchick", ["Ice"], B(40, 26, 36, 20), ["snowveil", "peck"], 0.5, { to: "penguin_j", at: 16 }, "creche down"),
  penguin_j: E("Juvenile Penguin", "penguinjuv", ["Ice", "Aquatic"], B(52, 42, 44, 46), ["frostfang", "bubblejet", "peck"], 0.38, { to: "emperorpenguin", at: 32 }, "first swim"),
  // === MIGRATION — the same fish, rebuilt three times for three kinds of water ===
  parr: E("Salmon Parr", "parr", ["Aquatic"], B(34, 36, 30, 42), ["splash", "tackle"], 0.6, { to: "smolt", at: 16 }, "freshwater"),
  smolt: E("Smolt", "smolt", ["Aquatic", "Swift"], B(44, 44, 36, 58), ["bubblejet", "tackle", "quickdash"], 0.45, { to: "salmon", at: 28 }, "turning silver"),
  salmon: E("Sockeye Salmon", "salmonadult", ["Aquatic", "Wild"], B(58, 58, 44, 62), ["torrent", "tackle", "quickdash", "gigaslam"], 0.3, null, "spawning red"),
  // === THE LONGEST CHILDHOOD IN THE SEA — four bodies, one eel ===
  leptocephalus: E("Leptocephalus", "leptocephalus", ["Aquatic"], B(28, 24, 26, 38), ["splash", "tackle"], 0.6, { to: "glasseel", at: 12 }, "transparent leaf"),
  glasseel: E("Glass Eel", "glasseel", ["Aquatic", "Night"], B(34, 34, 28, 46), ["bubblejet", "tackle"], 0.5, { to: "elver", at: 20 }, "still see-through"),
  elver: E("Elver", "elver", ["Aquatic", "Burrow"], B(44, 46, 36, 48), ["torrent", "venombite", "dig"], 0.4, { to: "moray", at: 32 }, "finally opaque"),
  // === ALTERNATION OF GENERATIONS — the jellyfish is the plant's flower, not the plant ===
  polyp: E("Jellyfish Polyp", "polyp", ["Aquatic", "Armor"], B(36, 18, 52, 4), ["harden", "stingshot"], 0.6, { to: "ephyra", at: 14 }, "stalked, stuck"),
  ephyra: E("Ephyra", "ephyra", ["Aquatic", "Venom"], B(32, 34, 28, 40), ["stingshot", "venomcloud"], 0.5, { to: "moonjelly", at: 22 }, "budded free"),
  moonjelly: E("Moon Jelly", "moonjelly", ["Aquatic", "Venom"], B(46, 44, 34, 44), ["stingshot", "venomcloud", "neurotoxin", "lullaby"], 0.35, null, "no brain, no heart"),
  // === THE CRAB THAT WAS PLANKTON — it drifts before it ever touches the floor ===
  zoea: E("Crab Zoea", "zoea", ["Aquatic", "Bug"], B(24, 26, 28, 40), ["splash", "tackle"], 0.65, { to: "megalopa", at: 12 }, "plankton"),
  megalopa: E("Megalopa", "megalopa", ["Aquatic", "Armor"], B(34, 36, 40, 34), ["stingshot", "harden"], 0.5, { to: "hermitcrab", at: 22 }, "settling"),
  // === ANTLERS — grown and thrown away every single year ===
  fawn: E("Elk Calf", "fawn", ["Wild"], B(40, 32, 34, 46), ["tackle", "quickdash"], 0.55, { to: "yearlingelk", at: 18 }, "spotted"),
  yearlingelk: E("Yearling Elk", "yearlingelk", ["Wild", "Swift"], B(54, 48, 44, 56), ["bodyslam", "quickdash", "siegehorn"], 0.4, { to: "elk", at: 30 }, "first spikes"),
  // === THE NOSE — only the beachmaster grows one, and only if he wins ===
  sealpup: E("Elephant Seal Pup", "sealpup", ["Aquatic"], B(46, 28, 40, 22), ["splash", "tackle"], 0.5, { to: "sealjuv", at: 18 }, "weaner"),
  sealjuv: E("Juvenile Elephant Seal", "sealjuv", ["Aquatic", "Swift"], B(58, 46, 50, 40), ["bubblejet", "bodyslam"], 0.38, { to: "elephantseal", at: 32 }, "at sea"),
  // === NEOTENY — the axolotl refuses to grow up. Usually. ===
  axolotlmeta: E("Metamorphosed Axolotl", "axolotlmeta", ["Wild", "Venom"], B(52, 50, 46, 34), ["toxinspray", "venombite", "dig"], 0.2, null, "rare · lost its gills"),
  // === CASTE — one becomes queen, and her spine physically lengthens ===
  molepup: E("Mole-Rat Pup", "molepup", ["Burrow"], B(28, 24, 30, 30), ["dig", "tackle"], 0.6, { to: "nakedmolerat", at: 14 }, "pink, blind"),
  molequeen: E("Mole-Rat Queen", "molequeen", ["Burrow", "Armor"], B(64, 52, 62, 26), ["quake", "dig", "harden", "intimidate"], 0.15, null, "the only breeder"),
  // === SEX CHANGE — every clownfish is born male; the biggest becomes female ===
  clownjuv: E("Juvenile Clownfish", "clownjuv", ["Aquatic"], B(28, 30, 26, 44), ["splash", "tackle"], 0.6, { to: "clownfish", at: 14 }, "not yet anything"),
  clownfemale: E("Clownfish Matriarch", "clownfemale", ["Aquatic", "Wild"], B(54, 52, 44, 50), ["torrent", "venombite", "intimidate", "harden"], 0.25, null, "was male"),
  // === BIMATURISM — a male orangutan only grows flanges if he is dominant ===
  orangutanflanged: E("Flanged Male Orangutan", "orangutanflanged", ["Canopy", "Wild"], B(74, 70, 62, 30), ["canopycrash", "vineswing", "intimidate", "gigaslam"], 0.18, null, "dominant male"),
  // === THE MANE — and the lionesses who do the actual hunting ===
  manedlion: E("Maned Lion", "manedlion", ["Predator", "Wild"], B(72, 76, 58, 48), ["apexfang", "maul", "intimidate", "dreadhowl"], 0.2, null, "male"),
});

// ---- rewire the existing chains into longer, stranger ones ----
DEX.dartfrog_j.grows = { to: "froglet", at: 10 };          // tadpole -> froglet -> dart frog
DEX.dartfrog_j.org = "larva";
DEX.monarch.org = DEX.monarch.org || "imago";
// lion cub now branches: lioness or maned lion
DEX.lion_j.grows = { at: 30, toF: "lion", toM: "manedlion" };
DEX.lion.org = "female";
// clownfish: juvenile -> male -> (if it becomes the biggest) matriarch
DEX.clownfish.grows = { to: "clownfemale", at: 30 };
DEX.clownfish.org = "male";
// orangutan: unflanged -> flanged, but only the dominant male gets there
DEX.orangutan.grows = { at: 34, toM: "orangutanflanged" }; // females simply stay
DEX.orangutan.org = "unflanged";
// the naked mole-rat worker can be raised to queen
DEX.nakedmolerat.grows = { at: 30, toF: "molequeen" }; // only one becomes queen
DEX.nakedmolerat.org = "worker";
// the axolotl metamorphoses only rarely, and only in the dark
DEX.axolotl.grows = { to: "axolotlmeta", at: 36, needs: "night" };
DEX.axolotl.org = "neotenic";
// deer & seals & jellies & crabs get their real starts
DEX.elk.org = DEX.elk.org || "bull";
DEX.hermitcrab.org = DEX.hermitcrab.org || "settled";
DEX.moray.org = DEX.moray.org || "adult";

// ---- where the new stages live ----
const stock = (mapKey, pool, entries) => {
  const m = MAPS[mapKey];
  if (!m) return;
  m[pool] = [...(m[pool] || []), ...entries.filter(([sp]) => DEX[sp])];
};
// ponds & fresh water: tadpoles, froglets, naiads, cygnets, parr
["seg_m1", "seg_m2", "seg_m3", "seg_m4", "seg_m5"].forEach((k) => stock(k, "poolWater", [["dartfrog_j", 10], ["froglet", 7], ["naiad", 8], ["cygnet", 6], ["polyp", 5]]));
["seg_w1", "seg_w2", "seg_w3", "seg_w4", "thicket"].forEach((k) => stock(k, "poolWater", [["dartfrog_j", 9], ["froglet", 8], ["naiad", 9], ["teneral", 6], ["cygnet", 7], ["swanjuv", 5], ["parr", 8], ["flamingo_c", 5], ["flamingo_j", 4]]));
["seg_a1", "seg_a2", "seg_a3"].forEach((k) => stock(k, "poolWater", [["parr", 10], ["smolt", 8], ["salmon", 6], ["leptocephalus", 4]]));
["seg_g1", "seg_g2", "seg_g3", "seg_g4"].forEach((k) => stock(k, "poolWater", [["naiad", 8], ["teneral", 6], ["parr", 7], ["smolt", 6], ["cygnet", 6], ["swanjuv", 5]]));
["seg_j1", "seg_j2", "seg_j3"].forEach((k) => stock(k, "poolWater", [["dartfrog_j", 10], ["froglet", 9], ["naiad", 7], ["leptocephalus", 5], ["glasseel", 4]]));
// meadow & grove land: caterpillars, chrysalises, cicada nymphs, eaglets
["seg_m1", "seg_m2", "seg_m3", "seg_m4", "seg_m5", "route1"].forEach((k) => stock(k, "pool", [["monarch_c", 9], ["monarch_p", 5], ["cicadanymph", 6], ["molepup", 5]]));
["seg_g1", "seg_g2", "seg_g3", "seg_g4"].forEach((k) => stock(k, "pool", [["monarch_c", 7], ["monarch_p", 4], ["cicadanymph", 7], ["eaglet", 5], ["eaglejuv", 4]]));
["seg_s1", "seg_s2", "seg_s3", "seg_s4"].forEach((k) => stock(k, "pool", [["fawn", 7], ["yearlingelk", 5], ["cicadanymph", 6], ["molepup", 6], ["monarch_c", 6]]));
["seg_a1", "seg_a2", "seg_a3", "tundra"].forEach((k) => stock(k, "pool", [["fawn", 8], ["yearlingelk", 6], ["eaglet", 5], ["eaglejuv", 5], ["penguin_c", 4], ["penguin_j", 4]]));
["seg_d1", "seg_d2", "seg_d3", "seg_d4", "outback"].forEach((k) => stock(k, "pool", [["molepup", 8], ["cicadanymph", 6], ["monarch_c", 5]]));
// reef & sea: zoea, megalopa, clown juveniles, ephyra
["reef", "kelp", "shore"].forEach((k) => stock(k, "poolWater", [["zoea", 8], ["megalopa", 7], ["clownjuv", 8], ["polyp", 6], ["ephyra", 6], ["moonjelly", 5], ["leptocephalus", 5], ["glasseel", 4], ["elver", 4], ["sealpup", 4], ["sealjuv", 4]]));
["openocean", "polarsea"].forEach((k) => stock(k, "poolWater", [["ephyra", 6], ["moonjelly", 6], ["sealpup", 5], ["sealjuv", 5], ["smolt", 5], ["salmon", 5], ["penguin_c", 4], ["penguin_j", 4]]));
["seg_v1", "seg_v2", "seg_v3", "seg_v4", "seg_v5"].forEach((k) => stock(k, "poolWater", [["zoea", 7], ["megalopa", 6], ["clownjuv", 6], ["ephyra", 5], ["moonjelly", 4]]));
// the adults of the new chains need homes too
["savanna", "seg_s1", "seg_s3"].forEach((k) => stock(k, "pool", [["manedlion", 4]]));
["canopywalk", "seg_j2", "seg_j3"].forEach((k) => stock(k, "pool", [["orangutanflanged", 4]]));
["reef", "kelp"].forEach((k) => stock(k, "poolWater", [["clownfemale", 4]]));
["seg_d3", "outback"].forEach((k) => stock(k, "pool", [["molequeen", 3]]));
["seg_g3", "cave1"].forEach((k) => stock(k, "poolN", [["axolotlmeta", 3]]));
["seg_a2", "seg_a3", "tundra"].forEach((k) => stock(k, "pool", [["axolotlmeta", 0]]));

Object.assign(SIGNS, {
  "seg_m2:7,3": "🪧 'A tadpole does not grow into a frog. It dissolves. Its tail is reabsorbed for parts, its gills are replaced by lungs, and its gut is rebuilt from a long herbivore's coil into a short carnivore's. It is the same animal only in the sense that it never stopped.'",
  "seg_m4:7,3": "🪧 'Inside the chrysalis the caterpillar liquefies almost completely. Small discs of cells that were there all along rebuild it into a butterfly. And yet a moth taught to avoid a smell as a caterpillar still avoids it after emerging. Something remembers.'",
  "seg_g2:7,3": "🪧 'A bald eagle has no white head until it is four or five. Young eagles are mottled brown and are constantly reported as some other, rarer bird.'",
  "seg_w2:7,3": "🪧 'A dragonfly naiad hunts underwater for up to five years with a hinged jaw that fires out like a harpoon. The flying adult you see may only live a few weeks. The nymph is the animal. The dragonfly is its brief, final sentence.'",
  "seg_a2:7,3": "🪧 'A salmon is rebuilt three times: parr in the stream, silver smolt as it learns the sea, and red spawner as it comes home to the exact gravel it hatched in, navigating by smell and the earth\\'s magnetic field.'",
  "reef:7,3": "🪧 'Every clownfish is born male. The largest in an anemone becomes female, and if she dies, her mate changes sex and takes her place. The film would have been very different.'",
  "seg_d3:7,3": "🪧 'A naked mole-rat colony has one queen, and she is not born one. When a worker becomes queen the gaps between her vertebrae physically lengthen and her body grows longer to carry pups. Caste is not destiny here. It is plumbing.'",
  "canopywalk:7,3": "🪧 'Male orangutans come in two kinds. Flanged males grow the huge cheek pads and long-call for females. Unflanged males can stay that way for years — and if the dominant male dies, an unflanged male may begin to change within weeks. The flanges are a response, not a birthday.'",
});
