// ---------- Part 76: THE ONES THAT ARE OUT AFTER DARK ----------
// Ayr, 2026-09-02: "the compass isn't working."
//
// It was working. It had nothing to point at.
//
// rollEncounter picks the pool like this (game.part4.jsx):
//
//     const pool = water ? m.poolWater : (isNight() && m.poolN ? m.poolN : m.pool);
//
// A map with a night pool uses ONLY that pool after dark - isNight() is the
// real clock, 19:00 to 06:00. Parts 68 through 75 added 183 species and put
// every one of them in `pool`, and not one in any `poolN`. So on 39 maps -
// route1 through route8, peak, shore, cave1, savanna, tundra and every seg_
// segment behind them - the entire new roster simply did not exist at night.
//
// The Champion's Compass filters the pool down to species not yet in the Field
// Guide and falls back to normal when that comes up empty. After dark it always
// came up empty, because the night pools are the original ones and a player who
// has beaten the Champion has met all of it. So the compass quietly switched
// itself off every evening, and looked broken.
//
// WHAT IS AND IS NOT HERE. This adds the animals that are genuinely abroad at
// night, and no others. A skylark sings in daylight and an Apollo butterfly
// needs sun on it; putting them in a night pool to pad the numbers would fix
// the symptom by making the game wrong. Where nothing new in a zone is
// nocturnal - the jungle route, the highveld - nothing is added, and the
// compass will still find nothing there after dark. That is the honest answer
// rather than a bug.
//
// Two of these were plainly wrong before and are the reason to trust the rest:
// a BAT that was only findable by day in a CAVE, and a penguin whose own entry
// says it will not cross the beach until the light has gone.

(() => {
  // [zone, species, weight]. Weights sit at the low end of the existing night
  // pools (4-18) so a night walk still turns up the animals it always did.
  const NIGHT_BY_ZONE = [
    // --- The hedgerow country. The barn owl's actual prey base, which is the
    // --- whole reason these animals were added, and it hunts after dark.
    ["savanna", "housemouse", 8], ["savanna", "brownrat", 7],
    ["savanna", "fieldvole", 8], ["savanna", "europeanmole", 5],
    ["savanna", "europeanbadger", 6], ["savanna", "plainspocketgopher", 5],
    // Gemsbok graze at night in heat - it is how they get water out of tsama
    // melons and roots, which is what their own entry is about.
    ["savanna", "gemsbok", 4], ["savannaz", "gemsbok", 4],

    // --- The fens. The toad walks to its pond after dark; the grass snake
    // --- needs sun on it to move at all and stays a day animal.
    ["wetland", "commontoad", 7],

    // --- The dry. The kangaroo rat is strictly nocturnal, the redknee comes
    // --- out of its burrow at night, and the Namib beetle's fog stand happens
    // --- before sunrise - which is inside this game's night.
    ["desert", "kangaroorat", 8], ["desert", "mexicanredknee", 6],
    ["desert", "namibbeetle", 5],

    // --- The wood. Both.
    ["grove", "iberianlynx", 5], ["grove", "woodfrog", 6],

    // --- The high country. Three of sixteen, and only three: choughs,
    // --- lammergeiers, monals, chamois and the rest are daylight animals.
    // --- The bar-headed goose flies its Himalayan crossings at night, when
    // --- the air is cold and dense, which its own entry says.
    ["alpine", "woollyflyingsquirrel", 6], ["alpine", "alpinesalamander", 5],
    ["alpine", "barheadedgoose", 4],

    // --- The tundra. Above the Arctic Circle the clock stops meaning much;
    // --- both of these are abroad at any hour. The ptarmigan is not.
    ["tundraz", "arcticwolf", 5], ["tundraz", "collaredlemming", 7],
  ];

  // Two that want one map rather than a whole zone.
  const NIGHT_BY_MAP = [
    // A bat. In a cave. That could only be met in daylight.
    ["cave1", "bumblebeebat", 10],
    // "It will not cross the beach in daylight" - its own field-guide entry.
    ["shore", "littlebluepenguin", 8],
  ];

  // part64's addTo, unchanged: build a NEW array rather than pushing into the
  // existing one. The seg_ maps are created in part11 by copying the template's
  // poolN REFERENCE, so several maps can share one array - pushing into it
  // would silently stock four other routes as well.
  const addTo = (mapKey, extra) => {
    const m = MAPS[mapKey];
    if (!m || !Array.isArray(m.poolN) || !m.poolN.length) return false;
    const have = new Set(m.poolN.map(([sp]) => sp));
    const add = extra.filter(([sp]) => DEX[sp] && !have.has(sp));
    if (!add.length) return false;
    m.poolN = [...m.poolN, ...add];
    add.forEach(([sp]) => {
      const places = WHERE[sp] || (WHERE[sp] = []);
      if (!places.some((p) => p.k === mapKey)) {
        places.push({ k: mapKey, n: m.name, z: m.zone, lvl: m.lvl });
      }
    });
    return true;
  };

  const byZone = {};
  NIGHT_BY_ZONE.forEach(([z, sp, w]) => (byZone[z] = byZone[z] || []).push([sp, w]));

  let mapsTouched = 0, entries = 0;
  Object.keys(byZone).forEach((zone) => {
    Object.keys(MAPS).forEach((k) => {
      if (MAPS[k].zone !== zone) return;
      if (addTo(k, byZone[zone])) { mapsTouched++; entries += byZone[zone].length; }
    });
  });
  NIGHT_BY_MAP.forEach(([k, sp, w]) => {
    if (addTo(k, [[sp, w]])) { mapsTouched++; entries += 1; }
  });

  // A species listed above that reached no night pool at all is a mistake in
  // the lists, not something to leave quiet — the same rule part68 set.
  const wanted = new Set(NIGHT_BY_ZONE.map((r) => r[1]).concat(NIGHT_BY_MAP.map((r) => r[1])));
  const landed = new Set();
  Object.keys(MAPS).forEach((k) => {
    (MAPS[k].poolN || []).forEach(([sp]) => { if (wanted.has(sp)) landed.add(sp); });
  });
  const stranded = [...wanted].filter((sp) => !landed.has(sp));

  console.log(`[part76] out after dark: ${wanted.size} species into night pools`
    + ` | maps touched: ${mapsTouched} | pool entries added: ${entries}`
    + (stranded.length ? ` | REACHED NO NIGHT POOL: ${stranded.join(", ")}` : ""));
})();
