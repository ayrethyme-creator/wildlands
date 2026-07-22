// ---------- Part 40: MORE MOVES ----------
// The roster was 65 moves, ~5 per type, so two animals of the same type played
// almost identically. This roughly doubles it, taking each type to 9-11 moves
// with a real spread of roles: cheap spam, reliable mid, heavy risk, and status
// or stat tools. Every effect here is one the battle engine actually runs
// (heal, raise/lower Atk/Def/Spd, chill, sleep, fear, poison, burn), and every
// secondary uses fxc, the same secondary-chance field the engine already reads.
//
// Nothing existing is changed; these are added alongside. Species learnsets are
// extended separately so old teams are untouched.

Object.assign(MOVES, {
  // ---- Predator ----
  rake: { n: "Rake", t: "Predator", p: 38, acc: 100 },
  throatbite: { n: "Throat Bite", t: "Predator", p: 62, acc: 95, fx: "lowerDef", fxc: 0.3 },
  ambushlunge: { n: "Ambush Lunge", t: "Predator", p: 55, acc: 100, pri: 1 },
  bloodscent: { n: "Blood Scent", t: "Predator", p: 0, acc: 100, fx: "raiseAtk" },
  ripandtear: { n: "Rip and Tear", t: "Predator", p: 78, acc: 88, fx: "lowerDef", fxc: 0.2 },

  // ---- Aerial ----
  talonswipe: { n: "Talon Swipe", t: "Aerial", p: 42, acc: 100 },
  updraft: { n: "Updraft", t: "Aerial", p: 0, acc: 100, fx: "raiseSpd" },
  divetalon: { n: "Dive Talon", t: "Aerial", p: 60, acc: 95, fx: "fear", fxc: 0.2 },
  featherstorm: { n: "Feather Storm", t: "Aerial", p: 58, acc: 90, fx: "lowerSpd", fxc: 0.3 },
  skyscream: { n: "Sky Scream", t: "Aerial", p: 0, acc: 100, fx: "lowerAtk" },

  // ---- Aquatic ----
  undertow: { n: "Undertow", t: "Aquatic", p: 55, acc: 95, fx: "lowerSpd", fxc: 0.3 },
  brineslap: { n: "Brine Slap", t: "Aquatic", p: 42, acc: 100 },
  whirlpool: { n: "Whirlpool", t: "Aquatic", p: 60, acc: 90, fx: "chill", fxc: 0.2 },
  deepcurrent: { n: "Deep Current", t: "Aquatic", p: 0, acc: 100, fx: "raiseDef" },
  crestbreak: { n: "Crest Break", t: "Aquatic", p: 78, acc: 88 },

  // ---- Burrow ----
  gravelspit: { n: "Gravel Spit", t: "Burrow", p: 40, acc: 100, fx: "lowerSpd", fxc: 0.2 },
  sinkhole: { n: "Sinkhole", t: "Burrow", p: 62, acc: 90, fx: "fear", fxc: 0.2 },
  rootsnare: { n: "Root Snare", t: "Burrow", p: 0, acc: 95, fx: "lowerSpd" },
  boulderroll: { n: "Boulder Roll", t: "Burrow", p: 72, acc: 90 },
  hunker: { n: "Hunker", t: "Burrow", p: 0, acc: 100, fx: "raiseDef" },
  earthshatter: { n: "Earthshatter", t: "Burrow", p: 82, acc: 85, fx: "lowerDef", fxc: 0.2 },

  // ---- Venom ----
  fangdrip: { n: "Fang Drip", t: "Venom", p: 45, acc: 100, fx: "poison", fxc: 0.3 },
  neurotoxin: { n: "Neurotoxin", t: "Venom", p: 0, acc: 90, fx: "sleep" },
  acidspray: { n: "Acid Spray", t: "Venom", p: 50, acc: 100, fx: "lowerDef", fxc: 0.4 },
  envenom: { n: "Envenom", t: "Venom", p: 0, acc: 100, fx: "poison" },
  paralytic: { n: "Paralytic Bite", t: "Venom", p: 58, acc: 90, fx: "lowerSpd", fxc: 0.4 },

  // ---- Armor ----
  shellslam: { n: "Shell Slam", t: "Armor", p: 60, acc: 95 },
  ironcurl: { n: "Iron Curl", t: "Armor", p: 0, acc: 100, fx: "raiseDef" },
  spikeguard: { n: "Spike Guard", t: "Armor", p: 48, acc: 100, fx: "lowerAtk", fxc: 0.3 },
  platecrush: { n: "Plate Crush", t: "Armor", p: 76, acc: 88 },
  bulwark: { n: "Bulwark", t: "Armor", p: 0, acc: 100, fx: "raiseDef" },

  // ---- Swift ----
  quickjab: { n: "Quick Jab", t: "Swift", p: 40, acc: 100, pri: 1 },
  blur: { n: "Blur", t: "Swift", p: 0, acc: 100, fx: "raiseSpd" },
  doublekick: { n: "Double Kick", t: "Swift", p: 55, acc: 95 },
  slipstrike: { n: "Slip Strike", t: "Swift", p: 60, acc: 95, fx: "lowerDef", fxc: 0.3 },
  afterimage: { n: "Afterimage", t: "Swift", p: 68, acc: 90, fx: "fear", fxc: 0.2 },

  // ---- Wild ----
  gnash: { n: "Gnash", t: "Wild", p: 45, acc: 100 },
  featralcry: { n: "Feral Cry", t: "Wild", p: 0, acc: 100, fx: "lowerAtk" },
  thrash: { n: "Thrash", t: "Wild", p: 72, acc: 90 },
  hunker2: { n: "Bristle", t: "Wild", p: 0, acc: 100, fx: "raiseDef" },
  rampage: { n: "Rampage", t: "Wild", p: 80, acc: 85, fx: "lowerDef", fxc: 0.2 },
  wildcharge: { n: "Wild Charge", t: "Wild", p: 66, acc: 95 },

  // ---- Ember ----
  ember2: { n: "Cinderspit", t: "Ember", p: 45, acc: 100, fx: "burn", fxc: 0.2 },
  scorch: { n: "Scorch", t: "Ember", p: 58, acc: 95, fx: "burn", fxc: 0.3 },
  heatwave: { n: "Heat Wave", t: "Ember", p: 68, acc: 90, fx: "burn", fxc: 0.2 },
  magmastep: { n: "Magma Step", t: "Ember", p: 0, acc: 100, fx: "raiseAtk" },
  infernorush: { n: "Inferno Rush", t: "Ember", p: 82, acc: 85, fx: "burn", fxc: 0.3 },

  // ---- Ice ----
  frostbite: { n: "Frostbite", t: "Ice", p: 48, acc: 100, fx: "chill", fxc: 0.3 },
  hail: { n: "Hail", t: "Ice", p: 55, acc: 95, fx: "chill", fxc: 0.2 },
  glaciergrip: { n: "Glacier Grip", t: "Ice", p: 0, acc: 90, fx: "chill" },
  permafrost: { n: "Permafrost", t: "Ice", p: 72, acc: 88, fx: "lowerSpd", fxc: 0.3 },

  // ---- Night ----
  shadowslip: { n: "Shadow Slip", t: "Night", p: 42, acc: 100, pri: 1 },
  nightterror: { n: "Night Terror", t: "Night", p: 0, acc: 90, fx: "fear" },
  gloombite: { n: "Gloom Bite", t: "Night", p: 60, acc: 95, fx: "lowerAtk", fxc: 0.3 },
  voidpounce: { n: "Void Pounce", t: "Night", p: 76, acc: 88 },

  // ---- Canopy ----
  branchwhip: { n: "Branch Whip", t: "Canopy", p: 44, acc: 100 },
  spore: { n: "Spore Cloud", t: "Canopy", p: 0, acc: 90, fx: "sleep" },
  thornlash: { n: "Thorn Lash", t: "Canopy", p: 58, acc: 95, fx: "poison", fxc: 0.2 },
  overgrow: { n: "Overgrow", t: "Canopy", p: 0, acc: 100, fx: "raiseDef" },
  timberfall: { n: "Timber Fall", t: "Canopy", p: 78, acc: 88, fx: "lowerSpd", fxc: 0.2 },

  // ---- Bug ----
  bite2: { n: "Mandible", t: "Bug", p: 44, acc: 100 },
  venomsting: { n: "Venom Sting", t: "Bug", p: 50, acc: 100, fx: "poison", fxc: 0.3 },
  websnare: { n: "Web Snare", t: "Bug", p: 0, acc: 95, fx: "lowerSpd" },
  swarmrush: { n: "Swarm Rush", t: "Bug", p: 62, acc: 90 },
  pheromone: { n: "Pheromone", t: "Bug", p: 0, acc: 100, fx: "lowerAtk" },
});

console.log("[part40] moves now:", Object.keys(MOVES).length);

// ---- make the new moves learnable ----
// buildLearnset ran in part17, before these moves existed, so the type pools it
// used never included them. Rather than rebuild every learnset (which is tuned),
// append two or three of a species' own-type new moves to its level-up list at
// high levels. This adds options without disturbing anything an animal already
// learns, and every wild adult ends the game with a deeper, more varied kit.

(() => {
  // fresh type buckets that include the new moves, weakest first
  const pool = {};
  Object.entries(MOVES).forEach(([k, m]) => {
    if (m.p > 0 || m.fx) (pool[m.t] = pool[m.t] || []).push(k);
  });
  Object.keys(pool).forEach((t) => pool[t].sort((a, b) => (MOVES[a].p || 0) - (MOVES[b].p || 0)));

  const NEW = new Set(Object.keys(MOVES).slice(65));   // the part40 additions
  let extended = 0;

  Object.keys(DEX).forEach((key) => {
    const d = DEX[key];
    if (d.legend || d.dom) return;                     // legends keep signatures; domestics stay simple
    const known = new Set([...(d.m || []), ...((d.l || []).map(([, mv]) => mv))]);
    const adds = [];
    (d.t || []).forEach((t) => {
      (pool[t] || []).forEach((mv) => {
        if (NEW.has(mv) && !known.has(mv) && !adds.includes(mv)) adds.push(mv);
      });
    });
    if (!adds.length) return;
    // take up to 3, spread across the mid-to-late game, after the animal's
    // existing top level so they slot in as genuine upgrades
    const chosen = adds.slice(0, 3);
    const topLevel = Math.max(20, ...((d.l || []).map(([L]) => L)), 0);
    const startAt = Math.min(46, topLevel + 3);
    const newEntries = chosen.map((mv, i) => [Math.min(56, startAt + i * 5), mv]);
    d.l = [...(d.l || []), ...newEntries].sort((a, b) => a[0] - b[0]);
    extended++;
  });
  console.log("[part40] learnsets deepened on", extended, "species with new-type moves");
})();
