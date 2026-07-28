// ---------- Part 53: THE COVE ON THE ROAD ----------
// The ocean was a cul-de-sac. You reached Tidewater Cove from Emberglass Shore,
// which is a side branch off a late-game town, so a player could finish the
// whole game having never seen a reef. Six maps and a large part of the
// bestiary sat behind a door most people never opened.
//
// It now sits on the main road between Canopy Town and Dune Town, and it has
// its own assessment.
//
// Two things this touches that are easy to get wrong, so both are checked
// rather than assumed:
//
//   1. Rewiring exits can strand a map. Every map in the game is flood-tested
//      from the start point afterwards.
//   2. Inserting a fifth gym pushes every later badge up by one, and three
//      mechanical unlocks hang off badge numbers. Boulder-moving was badge 7;
//      that gym is now badge 8, and if the constant is not moved with it the
//      player loses the ability for a whole region.

(() => {
  // ---- 1. splice the cove into the road ----
  // Before:  route4 --north--> seg_d1 --> ... --> town5
  // After:   route4 --north--> tidewater --north--> seg_d1 --> ... --> town5
  const setExit = (map, at, target, x, y) => {
    if (!MAPS[map]) { console.warn("[part53] missing map", map); return; }
    MAPS[map].exits = MAPS[map].exits || {};
    MAPS[map].exits[at] = { map: target, x, y };
  };

  setExit("route4", "7,0", "tidewater", 7, 8);      // north out of the dunes into the cove
  setExit("tidewater", "7,9", "route4", 7, 1);      // back south to the dunes

  // The cove needs a second way out, northward, to carry the road onward. Both
  // of its existing north exits are spoken for by the open ocean and the ice
  // floes, and displacing either of those means landing a player in open water
  // - the Kelp Cathedral has exactly one walkable row and it is nowhere near
  // its northern edge. So the cove gets a NEW doorway rather than losing one.
  MAPS.tidewater.rows[0] = "^^n^^n^^^^n^^^^^";
  setExit("tidewater", "2,0", "seg_d1", 7, 10);     // onward, to the wash
  setExit("seg_d1", "7,11", "tidewater", 2, 1);     // back south into the cove

  // Emberglass Shore keeps its way into the cove, so the old approach still
  // works as a shortcut and nothing that used to be reachable stops being so.

  // ---- 2. the arena ----
  const M = MAPS.tidewater;
  const gy = 4, gx = 7;
  if (M.rows[gy] && M.rows[gy][gx] !== "Y") {
    M.rows[gy] = M.rows[gy].slice(0, gx) + "Y" + M.rows[gy].slice(gx + 1);
  }

  // ---- 3. rebuild the ladder with thirteen ----
  // The ids are written into each entry rather than derived from position, so
  // inserting one means renumbering every entry after it. Done by rebuilding
  // the list in order rather than by editing ids in place, because editing ids
  // in place is exactly how you end up with two badge 6s.
  const OLD = Object.entries(GYMS)
    .map(([map, g]) => ({ map, ...g }))
    .sort((a, b) => a.id - b.id);

  const OCEAN = {
    map: "tidewater",
    leader: "Tide-Warden Sipho",
    type: "Aquatic",
    quote: "The sea does not care how many badges you have. It is the only assessor here that can kill you.\n\n"
         + "You held your line in a current. That is the whole of it.",
    em: "🌊",
    // Picked by hand rather than generated. The generator excludes animals
    // already used by another gym and filters on home levels, and with Rivermouth
    // Town already holding the Aquatic slot it came back with nothing at all.
    // An ocean assessor should also field ocean animals — Rivermouth's team is a
    // loon, a terrapin and a shoebill, which is a wetland, not a sea.
    team: () => [
      mk("seaotter", 28),
      mk("greenseaturtle", 29),
      mk("sealion", 30),
      mk("harborporpoise", 32),
    ],
  };

  const rebuilt = [];
  OLD.forEach((g) => {
    if (g.id === 5) rebuilt.push(OCEAN);   // the cove takes the fifth slot
    rebuilt.push(g);
  });
  if (!rebuilt.includes(OCEAN)) rebuilt.push(OCEAN);

  Object.keys(GYMS).forEach((k) => delete GYMS[k]);
  rebuilt.forEach((g, i) => {
    const id = i + 1;
    GYMS[g.map] = {
      id,
      leader: g.leader,
      type: g.type,
      team: g.team || (() => gymTeam(g.type, g.lvls || [18 + id * 2, 20 + id * 2], g.leader + g.type)),
      quote: g.quote,
      perk: g.perk || "",
      em: g.em,
      cert: g.cert,
      grants: g.grants,
      note: g.note,
    };
  });

  // ---- 4. move the unlocks that hang off badge numbers ----
  // Boulder work was badge 7. That assessor is badge 8 now.
  // Boulder work belongs to the Armor assessor, whoever that now is.
  const armor = Object.values(GYMS).find((g) => g.type === "Armor");
  if (armor) PUSH_AT = armor.id;
  try { GYM_COUNT = rebuilt.length; } catch (e) { globalThis.GYM_COUNT = rebuilt.length; }
  if (typeof LEGEND_REQ === "object") {
    Object.keys(LEGEND_REQ).forEach((k) => { LEGEND_REQ[k] = rebuilt.length; });
  }

  // ---- 5. the fifth certification, and renumber the rest ----
  if (typeof CERTS !== "undefined") {
    const oldCerts = { ...CERTS };
    Object.keys(CERTS).forEach((k) => delete CERTS[k]);
    for (let i = 1; i <= 4; i++) if (oldCerts[i]) CERTS[i] = oldCerts[i];
    CERTS[5] = {
      title: "Open Water Operations",
      grants: "Blue-water survey. The reef, the kelp forest and the open ocean are yours to work.",
      note: "Sipho's is the only assessment that has ever been cancelled for weather, twice, and he "
          + "will tell you both times. He fails more people than the other eleven combined and none "
          + "of them argue.",
    };
    for (let i = 5; i <= 12; i++) if (oldCerts[i]) CERTS[i + 1] = oldCerts[i];
    // the boulder certificate has moved with its gym
    if (CERTS[8]) CERTS[8].grants = "Obstacle clearance. Strong teammates can move boulders.";
    Object.values(GYMS).forEach((g) => {
      const c = CERTS[g.id];
      if (!c) return;
      g.cert = c.title; g.grants = c.grants; g.note = c.note;
      if (!/Certified:/.test(g.quote)) g.quote = `${g.quote}\n\n📋 Certified: ${c.title}.\n${c.grants}`;
    });
  }

  // ---- 6. the exams need to know the road changed ----
  if (typeof GYM_ORDER !== "undefined" && Array.isArray(GYM_ORDER)) {
    const i = GYM_ORDER.indexOf("highstation");
    if (i >= 0 && !GYM_ORDER.includes("tidewater")) GYM_ORDER.splice(i, 0, "tidewater");
    // Recut the exam regions around the new road. Without this the thirteenth
    // assessor has no country to set questions about, because the region table
    // was computed from a twelve-gym ladder before this file ran.
    if (typeof rebuildRegions === "function") rebuildRegions();
  }
  try { GYM_COUNT = rebuilt.length; } catch (e) {}

  console.log("[part53] cove on the main road | gyms:", Object.keys(GYMS).length,
    "| push@" + (typeof PUSH_AT !== "undefined" ? PUSH_AT : "?"));
})();
