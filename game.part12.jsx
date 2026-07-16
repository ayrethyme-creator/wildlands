// ---------- CHAPTER IX — Part 12: THE THIRTEEN WARDENS ----------
// One invented, mammal-rooted guardian per battle type, scattered across the
// trail. The three original guardians (Qilin, Thunderbird, Phoenix) keep their
// own story; these are the Wardens — older, quieter, and everywhere.

// ---- warden sprites (built on the mammal generators from part 8) ----
const WA = (base, o = {}) => (er) => (
  <g>
    {o.aura && <circle cx="32" cy="34" r="26" fill="none" stroke={o.aura} strokeWidth="2.5" opacity=".5" strokeDasharray="6 5" />}
    {o.aura2 && <circle cx="32" cy="34" r="21" fill="none" stroke={o.aura2} strokeWidth="1.6" opacity=".45" strokeDasharray="3 6" />}
    {base(er)}
    {o.motes && <g fill={o.moteC || "#e8c547"} opacity=".9"><circle cx="12" cy="16" r="1.8" /><circle cx="52" cy="14" r="1.4" /><circle cx="56" cy="46" r="1.6" /><circle cx="8" cy="44" r="1.4" /><circle cx="32" cy="6" r="1.6" /></g>}
  </g>
);
Object.assign(ART, {
  sarkoth: WA(felArt({ fur: "#6b4c3c", inner: "#3c2a1e", muzzle: "#c9a878", iris: "#e8c547", ruff: true, ruffC: "#4c3428", tufts: true }), { aura: "#c0392b", motes: true, moteC: "#c0392b" }),
  nycterion: WA(ART.bat, { aura: "#5dade2", aura2: "#c9d4e8", motes: true, moteC: "#8fd9e8" }),
  cetarch: WA(cetA({ hide: "#2471a3", belly: "#a8ccd9", dorsal: true, tall: true, pleats: true, baleen: true, blow: true, blowC: "#8fd9e8", iris: "#e8c547" }), { aura: "#2471a3", motes: true, moteC: "#8fd9e8" }),
  bathynax: WA(rodA({ fur: "#8a6f42", inner: "#5c4630", muzzle: "#d9c49a", nose: "#c9857a", iris: "#e8c547", quills: false }), { aura: "#b7950b", motes: true, moteC: "#b7950b" }),
  solenn: WA(mustA({ fur: "#4c3c48", inner: "#2e2430", muzzle: "#c9a8b5", iris: "#8fd94a", earRound: true, blaze: "#8e44ad" }), { aura: "#8e44ad", motes: true, moteC: "#8fd94a" }),
  glyptor: WA(xenA({ fur: "#8a8578", shell: true, plateC: "#707b7c", stripe: false, iris: "#e8c547" }), { aura: "#707b7c", motes: true, moteC: "#c9d4dc" }),
  velissa: WA(felArt({ fur: "#e8c98a", inner: "#c9a05c", muzzle: "#f8f4ea", iris: "#3ad9d4", tear: "#26221c", spots: true, markC: "#5c4436" }), { aura: "#e67e22", aura2: "#e8d44a", motes: true, moteC: "#e67e22" }),
  bramwold: WA(ungA({ coat: "#5c4636", curved: true, hornC: "#e8dcc3", mane: true, maneC: "#3c2e22", muzzle: "#3c3226", iris: "#e8c547" }), { aura: "#27ae60", motes: true, moteC: "#8fd94a" }),
  pyrelynx: WA(felArt({ fur: "#c9502a", inner: "#8a3418", muzzle: "#e8c9a5", iris: "#e8d44a", tufts: true, ruff: true, ruffC: "#e8853a" }), { aura: "#e85d1f", aura2: "#e8c547", motes: true, moteC: "#e8853a" }),
  rimehorn: WA(elephA({ hide: "#c4d4e0", hair: true, hairC: "#e4eef4", tusks: true, longTusk: true, bigEar: false, iris: "#8fd9e8" }), { aura: "#8fd9e8", aura2: "#f2ede0", motes: true, moteC: "#c9e8f2" }),
  myrmedon: WA(xenA({ fur: "#c9b08a", snout: true, stripe: true, markC: "#8a6f42", iris: "#e8c547" }), { aura: "#8fb35c", motes: true, moteC: "#c9e88a" }),
  nyxfang: WA(primA({ fur: "#26232e", face: "#3c3644", bigEar: true, inner: "#5c5468", iris: "#e8d44a" }), { aura: "#3c3644", aura2: "#8a7a9c", motes: true, moteC: "#c9b8e8" }),
  verdanmane: WA(primA({ fur: "#5c7a4c", face: "#8fb35c", ruff: true, ruffC: "#3c5c34", iris: "#e8c547" }), { aura: "#3a8a4c", motes: true, moteC: "#8fd94a" }),
});

// ---- warden dex ----
const WD = (n, art, t, b, m) => ({ n, art, t, b, m, l: [], c: 0.05, legend: true, warden: true });
Object.assign(DEX, {
  sarkoth: WD("Sarkoth", "sarkoth", ["Predator", "Night"], B(82, 88, 66, 58), ["apexfang", "maul", "intimidate", "dreadhowl"]),
  nycterion: WD("Nycterion", "nycterion", ["Aerial", "Night"], B(72, 80, 60, 86), ["stormdive", "hurricane", "moonstrike", "duskfeint"]),
  cetarch: WD("Cetarch", "cetarch", ["Aquatic", "Wild"], B(94, 76, 74, 46), ["tidalcrash", "torrent", "lullaby", "harmonystomp"]),
  bathynax: WD("Bathynax", "bathynax", ["Burrow", "Armor"], B(86, 78, 80, 34), ["quake", "harmonystomp", "ironhide", "harden"]),
  solenn: WD("Solenn", "solenn", ["Venom", "Night"], B(70, 86, 60, 72), ["neurotoxin", "venomcloud", "nightambush", "duskfeint"]),
  glyptor: WD("Glyptor", "glyptor", ["Armor", "Burrow"], B(88, 66, 92, 26), ["siegehorn", "ironhide", "harden", "quake"]),
  velissa: WD("Velissa", "velissa", ["Swift", "Predator"], B(66, 82, 54, 98), ["lightstep", "firststrike", "blitz", "quickfocus"]),
  bramwold: WD("Bramwold", "bramwold", ["Wild", "Armor"], B(92, 80, 78, 38), ["gigaslam", "harmonystomp", "siegehorn", "intimidate"]),
  pyrelynx: WD("Pyrelynx", "pyrelynx", ["Ember", "Predator"], B(76, 88, 62, 74), ["magmaburst", "emberwing", "apexfang", "flareup"]),
  rimehorn: WD("Rimehorn", "rimehorn", ["Ice", "Armor"], B(90, 82, 80, 34), ["blizzard", "frostfang", "siegehorn", "snowveil"]),
  myrmedon: WD("Myrmedon", "myrmedon", ["Bug", "Wild"], B(80, 76, 70, 48), ["swarmsting", "hivecall", "buzzrush", "silksnare"]),
  nyxfang: WD("Nyxfang", "nyxfang", ["Night", "Venom"], B(72, 84, 60, 80), ["moonstrike", "nightambush", "dreadhowl", "neurotoxin"]),
  verdanmane: WD("Verdanmane", "verdanmane", ["Canopy", "Wild"], B(84, 74, 76, 42), ["canopycrash", "vineswing", "leafshroud", "lullaby"]),
});

// ---- lore, calm & befriend text ----
Object.assign(LORE, {
  sarkoth: "🗿 The stone is scored with old claw-marks. 'Sarkoth remembers the first hunt — before hunger was cruelty, when killing was only eating.' Something enormous is breathing behind the rocks, and it is not hiding.",
  nycterion: "🗿 The altar is cold and the wind has gone strange. 'Nycterion sails the hour between the last light and the first. It has never once been seen arriving.' The air above you fills with a sound like a thousand soft wings.",
  cetarch: "🗿 The water goes flat and mirror-still. 'Cetarch sings the map of the world. Every ocean is one ocean, and it has swum all of them.' A note too low to hear moves through your ribs instead of your ears.",
  bathynax: "🗿 The ground answers your palm with a hollow sound. 'Bathynax turns the earth so that the earth can breathe. Everything green is standing on its work.' Somewhere far below, something patient begins to rise.",
  solenn: "🗿 A single drop of something clear beads on the stone. 'Solenn carries the oldest venom of the warm-blooded. It has never used it first.' The hush here is not peace. It is restraint.",
  glyptor: "🗿 The altar is scaled like a seed-cone. 'Glyptor wears the whole armoury and has never struck a blow. It simply cannot be broken, and so it is never fought.' The rocks nearby are shaped like a curled back.",
  velissa: "🗿 The dust here has not settled and you cannot say why. 'Velissa is the blink. Nothing that runs has ever outrun the idea of running.' Something crosses the horizon twice before you finish the thought.",
  bramwold: "🗿 The stone thrums with a slow, huge rhythm. 'Bramwold is the herd remembering itself. It grieved every plain we ploughed and it kept walking.' The grass leans as if a thousand shoulders passed through.",
  pyrelynx: "🗿 The altar is warm and smells of green things after burning. 'Pyrelynx sets the fires that forests need. We called it destroyer for a century. The seeds knew better.' Ash lifts off the stone and does not fall.",
  rimehorn: "🗿 Frost blooms outward from your hand. 'Rimehorn walked out of the ice we thought had taken it. It carries winter the way a mother carries a sleeping child.' The cold here is not cruel. It is careful.",
  myrmedon: "🗿 The stone is riddled with tiny tunnels. 'Myrmedon eats the multitude and never empties a single nest. Restraint, at the scale of millions.' The ground under you is a city, and it is humming.",
  nyxfang: "🗿 Your lantern light bends away from the altar. 'Nyxfang is what the dark is doing when you are not looking. It has been beside you for some time.' You are certain, suddenly, that you are not alone — and that you never were.",
  verdanmane: "🗿 Moss covers the altar and it is warm. 'Verdanmane moves so slowly that the forest grew around it and called it home. It has not touched the ground in nine hundred years.' The canopy above you shifts, and it is not the wind.",
});
Object.assign(CALM, {
  sarkoth: "🐆 Sarkoth lowers its great head and the killing tension goes out of it like a held breath. It is not tame. It was never cruel. It walks back into the rocks, and the savanna's fear settles into ordinary caution. (Sarkoth: calmed)",
  nycterion: "🦇 Nycterion folds wings that darkened half the sky and simply — is elsewhere. The dusk unknots. Somewhere, a million insects are eaten and a million flowers are pollinated, and nobody notices. (Nycterion: calmed)",
  cetarch: "🐋 Cetarch answers with a note you feel in your sternum, and the sea remembers its own shape. It sounds once and is gone into blue. The song keeps going long after it leaves. (Cetarch: calmed)",
  bathynax: "🦫 Bathynax settles back into the earth without a sound, and the ground closes like water. Roots follow it down. Everything above will drink better tomorrow. (Bathynax: calmed)",
  solenn: "🦡 Solenn's jaw unclenches. The drop of venom dries. It regards you a moment longer — you were never in danger, and it wants you to know that — then slips into the leaf litter. (Solenn: calmed)",
  glyptor: "🦔 Glyptor uncurls, and the shield becomes a creature again. It has been waiting a very long time for someone who did not try to open it. It walks away unhurried. (Glyptor: calmed)",
  velissa: "🐈 Velissa is beside you. Then it is at the horizon. Then it is beside you again, and its breathing has slowed. The dust settles at last. (Velissa: calmed)",
  bramwold: "🦬 Bramwold turns, and behind it — for just a moment — you see the herd. All of it. Every plain, unploughed. Then just one great shape, walking. The grass stands back up. (Bramwold: calmed)",
  pyrelynx: "🔥 Pyrelynx shakes out its coat and the embers scatter into seeds. Where the fire passed, green is already arguing its way up. It was never destruction. It was the argument. (Pyrelynx: calmed)",
  rimehorn: "🦣 Rimehorn breathes out a winter and breathes it back in. The ice steadies — not advancing, not fleeing. It touches its tusk to the stone in something like an oath, and goes. (Rimehorn: calmed)",
  myrmedon: "🐜 Myrmedon's tongue flickers out, takes its measured share, and stops. Always stops. The mound repairs itself behind it. Both parties have been doing this for sixty million years. (Myrmedon: calmed)",
  nyxfang: "🌑 Nyxfang steps out of the dark, which turns out to have been Nyxfang the whole time. It taps one long finger against the wood, listening to what lives inside, and lets it live. (Nyxfang: calmed)",
  verdanmane: "🦥 Verdanmane turns its head toward you over the course of a long, unhurried minute. Moths live in its fur. Algae grows in it. It is not one animal; it is a small nation. It blinks, slowly, and forgives you. (Verdanmane: calmed)",
});
Object.assign(BEFRIEND_LEGEND, {
  sarkoth: "Sarkoth presses its brow to your shoulder — the old, hard weight of a predator choosing not to be one. The first hunt walks beside you now.",
  nycterion: "Nycterion settles on your pack, weightless, and folds the dusk around you both. You will never hear it coming. That is the point.",
  cetarch: "Cetarch surfaces once beside you and holds your eye. Then the song changes key — and the new note is yours.",
  bathynax: "Bathynax pushes up through the soil at your feet and rests its blunt head against your boot. The earth turns for you now.",
  solenn: "Solenn climbs your sleeve and settles at your collar, jaw closed. It has chosen you to be gentle with. That is the whole gift.",
  glyptor: "Glyptor uncurls at your feet and does not curl back up. It has decided you are not a thing to armour against.",
  velissa: "Velissa arrives. You did not see it decide. The blink has chosen its direction, and the direction is you.",
  bramwold: "Bramwold lowers its horns and waits. When you touch them, the whole vanished herd goes quiet in your chest. You are the plain it walks now.",
  pyrelynx: "Pyrelynx sets its paw in your hand, warm as a banked hearth. The renewal has picked a place to start.",
  rimehorn: "Rimehorn kneels — a mountain deciding to be a companion — and lays its tusk across your shoulders like an arm. Winter walks with you.",
  myrmedon: "Myrmedon curls its long tongue once around your wrist, takes nothing, and stays. Restraint has chosen a student.",
  nyxfang: "Nyxfang is already in your shadow. It has been for a while. It simply stops pretending otherwise, and the dark becomes friendly.",
  verdanmane: "Verdanmane extends one arm over the course of a minute and hooks it, gently, through yours. It will take a while to get anywhere. That's fine. That was always fine.",
});

// ---- placement: where each warden sleeps, and how many badges it will answer to ----
const WARDENS = [
  ["bramwold", "seg_m8", 1, 20], ["myrmedon", "seg_m5", 2, 22],
  ["cetarch", "seg_w5", 2, 24], ["solenn", "seg_j4", 3, 28],
  ["verdanmane", "seg_j5", 3, 30], ["bathynax", "seg_d5", 4, 34],
  ["glyptor", "seg_d7", 4, 36], ["sarkoth", "seg_s5", 5, 40],
  ["velissa", "seg_s6", 5, 42], ["nycterion", "seg_a4", 6, 46],
  ["rimehorn", "seg_a6", 6, 48], ["pyrelynx", "seg_v5", 7, 54],
  ["nyxfang", "seg_g6", 8, 58],
];
WARDENS.forEach(([key, mapKey, req, lvl]) => {
  LEGEND_LVL[key] = lvl;
  LEGEND_REQ[key] = req;
  const m = MAPS[mapKey];
  if (!m) { console.warn("warden host missing:", mapKey); return; }
  // drop the altar on a free tile away from the central corridor so the road stays walkable
  let placed = false;
  for (let y = 4; y <= 7 && !placed; y++) {
    for (const x of [4, 10, 3, 11, 5, 9]) {
      if (m.rows[y][x] === ".") {
        m.rows = withRow(m.rows, y, m.rows[y].slice(0, x) + "L" + m.rows[y].slice(x + 1));
        m.legend = key;
        placed = true;
        break;
      }
    }
  }
  if (!placed) console.warn("no altar tile for", key, "in", mapKey);
});

// ---------- THE FOSSIL RIFT: 3 areas -> 10 ----------
const DIG_MID = ["^^^^^^^n^^^^^^^^", "^..GGG....GGG..^", "^.GGGGG..GGGGG.^", "^......!.......^", "^GGGG......GGGG^", "^GGGG..R...GGGG^", "^..............^", "^..GGG....GGG..^", "^..GGG....GGG..^", "^^^^^^^s^^^^^^^^"];
const DIG_END = ["^^^^^^^^^^^^^^^^", "^..GGG....GGG..^", "^.GGGGG..GGGGG.^", "^......!.......^", "^GGGG......GGGG^", "^GGGG..R...GGGG^", "^..............^", "^..GGG....GGG..^", "^..GGG....GGG..^", "^^^^^^^s^^^^^^^^"];
const digChain = (headKey, defs) => {
  // open the head bed's north wall
  MAPS[headKey].rows = withRow(MAPS[headKey].rows, 0, "^^^^^^^n^^^^^^^^");
  MAPS[headKey].exits = { ...MAPS[headKey].exits, "7,0": { map: defs[0].k, x: 7, y: 8 } };
  defs.forEach((d, i) => {
    const prev = i === 0 ? { map: headKey, x: 7, y: 1 } : { map: defs[i - 1].k, x: 7, y: 1 };
    const last = i === defs.length - 1;
    MAPS[d.k] = {
      name: d.n, zone: "fossil", music: "cave",
      rows: last ? DIG_END : DIG_MID,
      exits: { "7,9": prev, ...(last ? {} : { "7,0": { map: defs[i + 1].k, x: 7, y: 8 } }) },
      pool: d.pool, lvl: d.lvl,
    };
  });
};
digChain("dig1", [
  { k: "dig1b", n: "The Bone Wash", lvl: [51, 54], pool: [["coelophysis", 11], ["eoraptor", 10], ["herrerasaurus", 9], ["postosuchus", 8], ["desmatosuchus", 8], ["plateosaurus", 8], ["placerias", 7], ["lystrosaurus", 7], ["cynognathus", 7], ["proganochelys", 6]] },
  { k: "dig1c", n: "The Inland Sea", lvl: [52, 55], pool: [["shonisaurus", 11], ["tanystropheus", 10], ["proganochelys", 8], ["plesiosaurus", 7], ["ophthalmosaurus", 7], ["mosasaurus", 3], ["liopleurodon", 4], ["placerias", 6], ["lystrosaurus", 6]] },
]);
digChain("dig2", [
  { k: "dig2b", n: "The Sky Quarry", lvl: [53, 56], pool: [["pterodactylus", 11], ["rhamphorhynchus", 10], ["archaeopteryx", 9], ["compsognathus", 9], ["pteranodon", 6], ["quetzalcoatlus", 3], ["dilophosaurus", 6], ["ceratosaurus", 5]] },
  { k: "dig2c", n: "Amber Seep", lvl: [53, 56], pool: [["compsognathus", 10], ["archaeopteryx", 9], ["kentrosaurus", 8], ["stegosaurus", 7], ["camarasaurus", 7], ["diplodocus", 6], ["mamenchisaurus", 6], ["brachiosaurus", 5], ["allosaurus", 5], ["cryolophosaurus", 4]] },
]);
digChain("dig3", [
  { k: "dig3b", n: "The Nesting Grounds", lvl: [55, 58], pool: [["protoceratops", 11], ["oviraptor", 10], ["gallimimus", 9], ["velociraptor", 8], ["deinonychus", 7], ["parasaurolophus", 7], ["iguanodon", 7], ["pachycephalosaurus", 6]] },
  { k: "dig3c", n: "Ashfall Beds", lvl: [56, 59], pool: [["styracosaurus", 9], ["triceratops", 8], ["ankylosaurus", 7], ["therizinosaurus", 6], ["carnotaurus", 6], ["spinosaurus", 5], ["giganotosaurus", 4], ["tyrannosaurus", 3], ["pteranodon", 6], ["quetzalcoatlus", 4]] },
  { k: "dig3d", n: "The Last Day", lvl: [58, 62], pool: [["tyrannosaurus", 6], ["giganotosaurus", 6], ["spinosaurus", 6], ["mosasaurus", 6], ["quetzalcoatlus", 6], ["ankylosaurus", 6], ["triceratops", 6], ["therizinosaurus", 5], ["carnotaurus", 5], ["deinonychus", 5], ["velociraptor", 5], ["parasaurolophus", 5]] },
]);
Object.assign(SIGNS, {
  "dig1b:7,3": "🪧 'THE BONE WASH — flash floods sorted these bones by size 200 million years ago. The river did the cataloguing. We just showed up late.'",
  "dig1c:7,3": "🪧 'THE INLAND SEA — ichthyosaurs are reptiles that went back to the water and became shaped like dolphins. Dolphins are mammals that did the same thing later. The sea only accepts one design.'",
  "dig2b:7,3": "🪧 'THE SKY QUARRY — pterosaur bones are hollow, walled thinner than a playing card, and braced inside like a bridge. Nothing has ever been so close to being nothing at all.'",
  "dig2c:7,3": "🪧 'AMBER SEEP — tree resin catches a moment and holds it for a hundred million years. Every insect in here died in the most beautiful accident imaginable.'",
  "dig3b:7,3": "🪧 'THE NESTING GROUNDS — Oviraptor means \"egg thief.\" The first fossil was found on a nest, and we assumed it was raiding. It was brooding. We named it a criminal for ninety years.'",
  "dig3c:7,3": "🪧 'ASHFALL BEDS — a volcano buried this valley in a day. Everything here died in one afternoon, and so everything here is perfect.'",
  "dig3d:7,3": "🪧 'THE LAST DAY — 66 million years ago an asteroid struck at Chicxulub and the sky burned. Three quarters of all species ended. Here, they are all still walking. Be gentle with them.'",
});

// ---------- THE MYTH RIFTS: 6 areas -> 10 ----------
const RIFT_MID = ["TTTTTTTnTTTTTTTT", "T..GGGG..GGGG..T", "T..GGGG..GGGG..T", "T......!.......T", "TGGGGG....GGGGGT", "TGGGGG....GGGGGT", "T..............T", "T..GGGG..GGGG..T", "T..GGGG..GGGG..T", "TTTTTTTsTTTTTTTT"];
const RIFT_END = ["TTTTTTTTTTTTTTTT", "T..GGGG..GGGG..T", "T..GGGG..GGGG..T", "T......!.......T", "TGGGGG....GGGGGT", "TGGGGG....GGGGGT", "T..............T", "T..GGGG..GGGG..T", "T..GGGG..GGGG..T", "TTTTTTTsTTTTTTTT"];
// the four deep rifts chain onward from Twilight (rift6) — cross-cultural themes
MAPS.rift6.rows = withRow(MAPS.rift6.rows, 0, "TTTTTTTnTTTTTTTT");
MAPS.rift6.exits = { ...MAPS.rift6.exits, "7,0": { map: "rift7", x: 7, y: 8 } };
const DEEP = [
  { k: "rift7", n: "The Weaving", lvl: [55, 58], prev: { map: "rift6", x: 7, y: 1 }, next: "rift8",
    pool: [["anansi", 11], ["kitsune", 9], ["tanuki", 9], ["nekomata", 8], ["puca", 8], ["caitsith", 8], ["teumessian", 5], ["ratatoskr", 9], ["sigbin", 7], ["tikbalang", 7], ["cadejo", 7], ["jackalope", 8], ["mushussu", 6], ["serpopard", 7], ["sha", 7]] },
  { k: "rift8", n: "The Deluge", lvl: [56, 59], prev: { map: "rift7", x: 7, y: 1 }, next: "rift9",
    pool: [["jormungandr", 5], ["leviathan", 4], ["kraken", 6], ["cetus", 7], ["bakunawa", 6], ["rainbowserpent", 5], ["taniwha", 7], ["moo", 8], ["phayanaga", 7], ["naga", 7], ["makara", 7], ["qinglong", 4], ["hippocampus", 8], ["kelpie", 8], ["adaro", 8], ["bunyip", 7], ["cipactli", 6], ["mishipeshu", 6], ["hornedserpent", 6], ["ahuizotl", 7], ["kappa", 8]] },
  { k: "rift9", n: "The Underworld Gate", lvl: [57, 60], prev: { map: "rift8", x: 7, y: 1 }, next: "rift10",
    pool: [["cerberus", 6], ["ammit", 7], ["anubis", 0], ["sha", 8], ["camazotz", 7], ["cadejo", 8], ["baku", 8], ["nidhogg", 6], ["apep", 5], ["orochi", 4], ["sphinx", 7], ["harpy", 8], ["alkonost", 7], ["impundulu", 7], ["mothman", 6], ["chupacabra", 7], ["cusith", 8], ["grootslang", 5], ["taotie", 6]] },
  { k: "rift10", n: "The First Story", lvl: [58, 62], prev: { map: "rift9", x: 7, y: 1 }, next: null,
    pool: [["quetzalcoatl", 4], ["rainbowserpent", 4], ["fenghuang", 4], ["bennu", 6], ["firebird", 6], ["simurgh", 6], ["ziz", 5], ["garuda", 4], ["roc", 5], ["behemoth", 5], ["leviathan", 4], ["airavata", 5], ["amaru", 6], ["unicorn", 6], ["pegasus", 7], ["sleipnir", 6], ["lamassu", 6], ["baihu", 5], ["xuanwu", 5], ["qinglong", 4], ["nemeanlion", 4], ["fenrir", 3], ["leshy", 6], ["barong", 6], ["haetae", 6], ["navagunjara", 6], ["alicanto", 7]] },
];
DEEP.forEach((d) => {
  MAPS[d.k] = {
    name: d.n, zone: "rift", music: "legend",
    rows: d.next ? RIFT_MID : RIFT_END,
    exits: { "7,9": d.prev, ...(d.next ? { "7,0": { map: d.next, x: 7, y: 8 } } : {}) },
    pool: d.pool.filter(([sp]) => DEX[sp]), lvl: d.lvl,
  };
});
Object.assign(SIGNS, {
  "rift7:7,3": "🪧 'THE WEAVING — every culture that ever told stories invented a trickster. Anansi, Coyote, Loki, Kitsune, Puck. The one who breaks the rule so the rule can be seen.'",
  "rift8:7,3": "🪧 'THE DELUGE — a great flood appears in Mesopotamian, Hebrew, Hindu, Greek, Maya, Chinese and Aboriginal traditions. People have always lived by rivers, and rivers have always risen.'",
  "rift9:7,3": "🪧 'THE UNDERWORLD GATE — nearly every people put a guardian at the door of the dead, and nearly every one of them is an animal. We have never trusted a human to do it.'",
  "rift10:7,3": "🪧 'THE FIRST STORY — every one of these began as somebody, somewhere, trying to explain the world to a child who asked. That is all a myth ever was. That is all this Field Guide is, too.'",
});
