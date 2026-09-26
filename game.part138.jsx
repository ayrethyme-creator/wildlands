// ---------- Part 138: THE VICTORY TRAIL, LONG ENOUGH TO WALK ----------
// 2026-09-26. Ayr: "Victory trail needs to be larger if there are animals only
// found there."
//
// Every other road is a route and three to five stretches of country; the
// Victory Trail was one screen - with forty-odd kinds of animal in it, and the
// tiger in no other wild place. Three stretches now climb between it and the
// Summit Citadel, spliced in the way part11 splices every road, and each
// carries the trail's whole roster, so the tiger can be met all the way up.
//
// Loaded straight after part14, so the stretches exist before anything walks
// the map graph. Their layouts are forged (forge_grove.py, data in part121);
// the template rows here are only the old-style placeholders part105 checks
// against, emptied of people so nobody is asked for who was never there.
{
  const r9 = MAPS.route9;
  const clear = (rows) => rows.map((r) => r.replace(/[RV!]/g, "."));
  const lv = r9.lvl || [46, 50];
  const defs = [
    ["seg_t1", "The Long Climb", 1],
    ["seg_t2", "Windbreak Ledge", 2],
    ["seg_t3", "Citadel Approach", 3],
  ].map(([k, n, i]) => ({
    k, n, z: r9.zone, m: "route",
    lvl: [lv[0] + i, lv[1] + i],
    pool: (r9.pool || []).slice(), poolN: (r9.poolN || []).slice(),
    ...(r9.poolWater ? { poolWater: r9.poolWater.slice() } : {}),
  }));
  chainSegs("route9", "summit", r9.zone, "route", defs);
  defs.forEach((d) => { if (MAPS[d.k]) MAPS[d.k].rows = clear(MAPS[d.k].rows); });
}
