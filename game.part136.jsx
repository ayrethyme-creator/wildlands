// ---------- Part 136: EVERY STORY IN ITS ANIMAL'S OWN COUNTRY ----------
// 2026-09-26. Ayr: "The stories don't always match up with their biome right
// now. Analyze all of them and make suggestions" - and of the suggestions,
// "Do all of them, those are great."
//
// The stories themselves moved in part65 (where each is placed), part58 (no
// longer post-game) and part48 (Prof. Acacia's order), and the maps in the
// forges. This part is the animals: each story's animal should be one you can
// actually meet where its story is told. Loaded straight after part64, before
// anything reads the pools.
//
//   naked mole-rat  into the desert road, where the solar field story is -
//                   and out of Reedwater Fen, which is no place for a
//                   dry-country burrower (it stays in the Whispering Cave)
//   wolf            onto the alpine road, where the pasture story is
//   greater horseshoe bat  into Gloamwood at night, where the lights story is
//   beaver          into the Whispering Taiga, where the Millrace story is
//
// And Windward Eyrie, reopened (part107) and rebuilt (forge_sides.py): it was
// a gym room, "arena" and town music; it is a ridge off Storm Peak now, with
// the peak's animals and the golden eagle commoner than anywhere.
{
  const add = (key, field, list) => {
    const m = MAPS[key];
    if (!m) return;
    const have = new Set((m[field] || []).map(([sp]) => sp));
    m[field] = [...(m[field] || []), ...list.filter(([sp]) => DEX[sp] && !have.has(sp))];
  };
  const night = (key) => (MAPS[key] && Array.isArray(MAPS[key].poolN) && MAPS[key].poolN.length ? "poolN" : "pool");

  ["route4", "seg_d1", "seg_d2", "seg_d3", "seg_d4"].forEach((k) => add(k, "pool", [["nakedmolerat", 4]]));
  if (MAPS.route2) ["pool", "poolN"].forEach((f) => {
    if (MAPS.route2[f]) MAPS.route2[f] = MAPS.route2[f].filter(([sp]) => sp !== "nakedmolerat");
  });
  ["route6", "seg_a1", "seg_a2", "seg_a3"].forEach((k) => add(k, "pool", [["wolf", 4]]));
  ["route8", "seg_g1", "seg_g2", "seg_g3", "seg_g4"].forEach((k) => add(k, night(k), [["greaterhorseshoebat", 5]]));
  add("taiga", "pool", [["beaver", 5]]);

  const eyrie = MAPS.eyrie, peak = MAPS.peak;
  if (eyrie && peak) {
    eyrie.zone = "alpine";
    eyrie.music = "route";
    eyrie.lvl = [34, 38];
    eyrie.pool = (peak.pool || []).map(([sp, w]) => [sp, sp === "goldeneagle" ? 14 : w]);
    eyrie.poolN = (peak.poolN || []).slice();
  }
}
