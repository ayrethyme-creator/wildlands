// ---------- CHAPTER XVI — Part 19: TWELVE ARENAS ----------
// The eight gyms were still fielding the same handful of animals from the very
// first build. Every team is rebuilt from the menagerie, and four new arenas
// cover the types that had none: Bug, Canopy, Ice and Aerial.
//
// Badges: 8 -> 12. badges is "highest gym id beaten", so the new arenas slot
// INTO the ladder by level rather than being tacked on the end.

// ---- The Ember problem ----
// The game had exactly ONE Ember species that wasn't already old gym stock, so
// the Ember gym could only field a single Fire Salamander. Fire-associated
// animals are real and mostly astonishing, so here are nine of them.
Object.assign(ART, {
  firehawk: rapA({ body: "#3c3226", wingC: "#26221c", head: "#5c4436", beakC: "#e8c547", iris: "#e8853a", tufts: false }),
  volcanorabbit: rodA({ fur: "#5c4c3c", inner: "#8a7458", muzzle: "#8a7458", iris: "#3a2e22", earRound: true }),
  pompeiiworm: cephA({ hide: "#c94a3a", tentC: "#e8853a", worm: true, iris: "#26221c" }),
  scalyfootsnail: cephA({ hide: "#3c3630", shell: true, shellC: "#5c5448", bandC: "#8a8578", iris: "#26221c" }),
  lavalizard: lizA({ skin: "#8a4c2a", belly: "#e8853a", spots: true, markC: "#3c2a1e", iris: "#e8c547", frill: false }),
  gilamonster: lizA({ skin: "#26221c", belly: "#e8853a", beads: true, markC: "#e8a53a", iris: "#26221c" }),
  fireskink: lizA({ skin: "#c9502a", belly: "#e8c547", stripes: true, markC: "#26221c", iris: "#e8c547" }),
  vermilionflycatcher: birdA({ body: "#c94a3a", wingC: "#5c3630", head: "#e8302a", mask: "#3c2a1e", beakC: "#26221c" }),
  firebellytoad: frogA({ skin: "#4c6b3c", belly: "#e8302a", spots: true, markC: "#26221c", iris: "#26221c", toes: true, toeC: "#4c6b3c" }),
});
const EM = (n, art, t, b, c, org) => ({ n, art, t, b, m: [], l: [], c, org });
Object.assign(DEX, {
  firehawk: EM("Firehawk", "firehawk", ["Ember", "Aerial"], B(52, 60, 42, 64), 0.3, "spreads fire on purpose"),
  volcanorabbit: EM("Volcano Rabbit", "volcanorabbit", ["Ember", "Burrow"], B(38, 36, 34, 58), 0.4, "EN · lives only on volcanoes"),
  pompeiiworm: EM("Pompeii Worm", "pompeiiworm", ["Ember", "Aquatic"], B(44, 40, 48, 20), 0.45, "survives 80°C"),
  scalyfootsnail: EM("Scaly-foot Snail", "scalyfootsnail", ["Ember", "Armor"], B(46, 30, 68, 8), 0.4, "EN · a shell made of iron"),
  lavalizard: EM("Lava Lizard", "lavalizard", ["Ember", "Swift"], B(36, 44, 34, 60), 0.45, "Galápagos"),
  gilamonster: EM("Gila Monster", "gilamonster", ["Ember", "Venom"], B(52, 56, 54, 24), 0.35, "venomous · bites and holds on"),
  fireskink: EM("Fire Skink", "fireskink", ["Ember", "Burrow"], B(40, 44, 40, 46), 0.45, "West Africa"),
  vermilionflycatcher: EM("Vermilion Flycatcher", "vermilionflycatcher", ["Ember", "Aerial"], B(30, 38, 26, 66), 0.45, "the male is unmistakable"),
  firebellytoad: EM("Fire-bellied Toad", "firebellytoad", ["Ember", "Venom"], B(34, 38, 36, 34), 0.5, "flashes its belly as a warning"),
});
// give them movesets with the Chapter XIV generator, then homes
Object.keys(DEX).filter((k) => ["firehawk","volcanorabbit","pompeiiworm","scalyfootsnail","lavalizard","gilamonster","fireskink","vermilionflycatcher","firebellytoad"].includes(k)).forEach((k) => {
  const { start, learn } = buildLearnset(k);
  DEX[k].m = start.length ? start : ["tackle"];
  DEX[k].l = learn;
});
const emberHome = (mapKey, pool, entries) => { const m = MAPS[mapKey]; if (m) m[pool] = [...(m[pool] || []), ...entries.filter(([sp]) => DEX[sp])]; };
["seg_v1","seg_v2","seg_v3","seg_v4","seg_v5","route7"].forEach((k) =>
  emberHome(k, "pool", [["firehawk", 8], ["volcanorabbit", 7], ["lavalizard", 9], ["gilamonster", 7], ["fireskink", 8], ["vermilionflycatcher", 8], ["firebellytoad", 7]]));
["seg_v1","seg_v3","seg_v5"].forEach((k) => emberHome(k, "poolWater", [["pompeiiworm", 6], ["scalyfootsnail", 5], ["firebellytoad", 7]]));
["seg_d1","seg_d2","seg_d3","seg_d4","outback"].forEach((k) => emberHome(k, "pool", [["gilamonster", 6], ["lavalizard", 7], ["firehawk", 6], ["vermilionflycatcher", 6]]));
["abyss","openocean"].forEach((k) => emberHome(k, "poolWater", [["pompeiiworm", 5], ["scalyfootsnail", 4]]));
Object.assign(SIGNS, {
  "seg_v2:7,3": "🪧 'FIREHAWKS — black kites, whistling kites and brown falcons in northern Australia pick up burning sticks from a fire front and drop them in unburnt grass, to flush out prey. Aboriginal peoples have described this for generations; science finally caught up in 2017. They are not fleeing the fire. They are farming it.'",
  "seg_v4:7,3": "🪧 'The Pompeii worm lives on hydrothermal vents with its tail in water near 80°C and its head in water near 20°C. It wears a fleece of bacteria for insulation. It is the most heat-tolerant complex animal we know of.'",
});

// everything the old gyms used, so the rebuild can't repeat itself
const OLD_GYM_STOCK = new Set([
  "wolf", "croc", "lion", "otter", "penguin", "hippo", "scorpion", "dartfrog", "cobra",
  "rabbit", "aardvark", "tortoise", "boar", "pangolin", "ibex", "arcticfox", "lynx",
  "cheetah", "vulture", "sandcat", "monitor", "galago", "manedwolf", "jaguar",
]);

// Pick a themed team: real animals of the right type that ACTUALLY LIVE at
// roughly this point in the trail. Without the level filter the first gym
// happily fielded a sperm whale.
const homeLevels = {};
Object.values(MAPS).forEach((m) => {
  ["pool", "poolN", "poolWater"].forEach((p) => (m[p] || []).forEach(([sp, w]) => {
    if (!w) return;
    const lv = (p === "poolWater" ? m.lvlWater : m.lvl) || m.lvl;
    if (!lv) return;
    const cur = homeLevels[sp];
    homeLevels[sp] = cur ? [Math.min(cur[0], lv[0]), Math.max(cur[1], lv[1])] : [lv[0], lv[1]];
  }));
});

const gymTeam = (type, lvls, seed) => {
  const lo = lvls[0], hi = lvls[lvls.length - 1];
  const eligible = (k) => {
    const d = DEX[k];
    return d.t.includes(type) && !d.legend && !d.warden && !d.mem && !d.juv && !d.breed
      && !d.t.includes("Mythic") && !d.t.includes("Fossil") && !OLD_GYM_STOCK.has(k);
  };
  const nearby = (k) => {
    const h = homeLevels[k];
    return h && h[0] <= hi + 12 && h[1] >= lo - 12;
  };
  let pool = Object.keys(DEX).filter((k) => eligible(k) && nearby(k));
  // widen the band before giving up on the level rule entirely
  if (pool.length < lvls.length) {
    pool = Object.keys(DEX).filter((k) => {
      const h = homeLevels[k];
      return eligible(k) && h && h[0] <= hi + 25 && h[1] >= lo - 25;
    });
  }
  if (pool.length < lvls.length) pool = Object.keys(DEX).filter(eligible);
  if (!pool.length) return () => [mk("rabbit", lo)];
  let h = 0; for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const chosen = [];
  for (let i = 0; i < lvls.length && chosen.length < pool.length; i++) {
    let idx = (h + i * 977) % pool.length, step = 0, pick = pool[idx];
    while (chosen.includes(pick) && step < pool.length) pick = pool[(idx + ++step) % pool.length];
    if (!chosen.includes(pick)) chosen.push(pick);
  }
  return () => chosen.map((sp, i) => mk(sp, lvls[Math.min(i, lvls.length - 1)]));
};

// ---- the twelve, in ladder order ----
const LADDER = [
  ["town2", 1, "Ranger Naledi", "Predator", [7, 8, 9, 10], "Magnificent! The savanna respects you.", "Aquatic teammates can now Swim with you across deep water.", "🧑🏿‍🌾"],
  ["apiary", 2, "Keeper Wren", "Bug", [12, 13, 14, 15], "You listened to the hive. Most people only hear noise.", "", "🧑‍🌾"],
  ["town3", 3, "Keeper Mara", "Aquatic", [16, 17, 18, 19], "You flow like the delta itself.", "", "👩🏽‍🔬"],
  ["town4", 4, "Dr. Sefu", "Venom", [21, 22, 23, 24], "You read every matchup like a field guide.", "Aerial teammates can now Soar you between towns.", "🧑🏾‍⚕️"],
  ["highstation", 5, "Arborist Kaia", "Canopy", [25, 26, 27, 28], "Up here, patience is the only tool that works.", "", "🧗🏽‍♀️"],
  ["town5", 6, "Warden Zahra", "Burrow", [28, 29, 30, 31], "The dunes remember your footprints.", "", "🧕🏽"],
  ["town6", 7, "Mason Bram", "Armor", [32, 33, 34, 35], "Stone yields to patience — and to you.", "Strong Armor or Predator teammates can now push boulders.", "🧔🏻"],
  ["town7", 8, "Glacier Yuki", "Swift", [36, 37, 38, 39], "Swift as meltwater! Well run.", "", "🏃🏻‍♀️"],
  ["frostwatch", 9, "Kepler Inuk", "Ice", [40, 41, 42, 43], "The cold is not cruel. It is only honest.", "", "🧑🏻‍🚀"],
  ["town8", 10, "Kiln Moyo", "Ember", [42, 43, 44, 45], "Forged, not found. That's what you are.", "", "👨🏿‍🏭"],
  ["eyrie", 11, "Falconer Sable", "Aerial", [45, 46, 47, 48], "You gave it the sky and it came back anyway. That's the whole trick.", "", "🧑🏼‍✈️"],
  ["town9", 12, "Nyx", "Night", [48, 49, 50, 51], "Even the dark bows tonight.", "The Summit Citadel awaits. The Elite Four are watching.", "🧛🏻"],
];

Object.keys(GYMS).forEach((k) => delete GYMS[k]);
LADDER.forEach(([map, id, leader, type, lvls, quote, perk, em]) => {
  GYMS[map] = { id, leader, type, team: gymTeam(type, lvls, leader + type), quote, perk, em };
});

// ---- the four new arenas ----
Object.assign(PALS, {
  arena: { ground: "#c9b08a", grass: "#9aa86b", grass2: "#a8b578", tree: { bg: "#6b7a4c", em: "🌲" }, mount: { bg: "#8a7a5c", em: "🪨" }, water: "#4a9ac9", flower: "🏵️" },
});
Object.assign(ARENA, { arena: "linear-gradient(#c9b08a,#8a7a5c)" });

const ARENA_ROWS = [
  "^^^^^^^s^^^^^^^^",
  "^..............^",
  "^..GG......GG..^",
  "^..GG..!...GG..^",
  "^..............^",
  "^.....XXXX.....^",
  "^..............^",
  "^..GG......GG..^",
  "^..GG......GG..^",
  "^^^^^^^^^^^^^^^^",
];
// host, key, name, zone-flavour, the tile the player lands on coming back
const OUTPOSTS = [
  ["thicket", "apiary", "Thornwood Apiary", "🐝 'THORNWOOD APIARY — Keeper Wren has kept bees here for forty years and has never once been stung badly. \"You cannot rush them and you cannot lie to them. That is the entire job.\"'"],
  ["canopywalk", "highstation", "Highcanopy Station", "🌿 'HIGHCANOPY STATION — half the species in a rainforest never touch the ground. This platform is the only way to meet them.'"],
  ["tundra", "frostwatch", "Frostwatch Station", "🧊 'FROSTWATCH STATION — everything here is built to lose heat slowly. So is everything living in it. That is the whole of arctic biology in one sentence.'"],
  ["peak", "eyrie", "Windward Eyrie", "🪶 'WINDWARD EYRIE — falconry is the oldest partnership between a human and a wild predator that never became tame. Every bird here could leave. They come back.'"],
];
OUTPOSTS.forEach(([host, key, name, sign]) => {
  const m = MAPS[host];
  if (!m) { console.warn("[part19] no host for", key, host); return; }
  // a side door on a row whose inner tile is walkable
  // the door goes in the border at x=15; what matters is that the tile INSIDE
  // it (x=14) is walkable, or the player can never reach the door
  let doorY = null;
  const W = m.rows[0].length;
  for (const y of [3, 5, 7, 4, 6, 2, 8]) {
    if (m.rows[y] && ".gGp*".includes(m.rows[y][W - 2])) { doorY = y; break; }
  }
  if (doorY === null) { console.warn("[part19] no door row for", key, "in", host); return; }
  m.rows = withRow(m.rows, doorY, m.rows[doorY].slice(0, W - 1) + "e");
  m.exits = { ...m.exits, [(W - 1) + "," + doorY]: { map: key, x: 7, y: 1 } };
  MAPS[key] = {
    name, zone: "arena", music: "town",
    rows: ARENA_ROWS,
    exits: { "7,0": { map: host, x: W - 2, y: doorY } },
  };
  SIGNS[key + ":7,3"] = sign;
});

// ---- engine: eight badges become twelve, and the perks move with the ladder ----
// The perk gyms shifted: Venom (Soar) 3 -> 4, Armor (Push) 5 -> 7.
const GYM_COUNT = LADDER.length;
const SOAR_AT = LADDER.find((g) => g[3] === "Venom")[1];
const PUSH_AT = LADDER.find((g) => g[3] === "Armor")[1];
const SWIM_AT = LADDER.find((g) => g[3] === "Predator")[1];

// every guardian now waits for the full ladder
Object.keys(LEGEND_REQ).forEach((k) => { LEGEND_REQ[k] = GYM_COUNT; });

console.log("[part19] gyms:", Object.keys(GYMS).length, "| swim@" + SWIM_AT, "soar@" + SOAR_AT, "push@" + PUSH_AT, "| legends need", GYM_COUNT);
