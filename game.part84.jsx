// ---------- Part 84: HARDER GYMS, AND TRAINERS WHO WILL GO AGAIN ----------
// Ayr, 2026-09-04: "can you make the gyms harder? oh, and make the trainers that
// you battle repeatable. shuffle the animals for each battle, but keep the level
// balance the same."
//
// ================= 1. THE GYMS =================
//
// Three changes, and the first one is a bug rather than a difficulty knob: every
// gym leader's own dialogue says "Practical now - <type> work, FOUR ANIMALS",
// and every gym team in part3 has THREE. The game has been promising a fourth
// animal since the line was written. Now it fields one.
//
//   levels    +2 for gyms 1-2, +3 for 3-5, +4 for 6-8. Enough to matter without
//             turning a gym into a wall for a party that got there honestly.
//   a fourth  from gym 4 onward, of the leader's own type, picked from the live
//             DEX rather than hand-listed so it cannot name a species that is
//             not in this game.
//   sharper   a leader always uses their best move against what is in front of
//             them. An ordinary trainer still fumbles it a quarter of the time.
//
// WHY THE FOURTH IS PICKED AND NOT WRITTEN DOWN. A hand-written list of eight
// species is eight more names to rot the next time the roster moves, and this
// game has renamed species twice. The picker takes everything of the leader's
// type that a player could actually meet - no myths, no fossils, no juveniles,
// no pets, no memorials, and nothing without a place in the world - sorts by
// total base stats and takes the one three-quarters of the way up. Strong, but
// not "the gym leader has a blue whale".

const GYM_EXTRA = {};
/* How many animals each leader actually fields, so their own dialogue can say
   the true number. part4's line has always read "four animals" as a hard-coded
   string; the base teams happen to be four, so it was right by luck, and adding
   a fifth would have made a leader announce a lie on the way into the fight. */
const GYM_SIZE = {};
const GYM_COUNT_WORD = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const gymTeamWord = (mapKey) => {
  const n = GYM_SIZE[mapKey];
  return (n && GYM_COUNT_WORD[n]) || "several";
};

{
  const bumpFor = (id) => (id <= 2 ? 2 : id <= 5 ? 3 : 4);

  // Everything of a type that a player could actually meet in the world.
  const candidatesFor = (type) => Object.keys(DEX).filter((k) => {
    const d = DEX[k];
    if (!d || !d.t || d.t.indexOf(type) < 0) return false;
    if (d.t.indexOf("Mythic") >= 0 || d.t.indexOf("Fossil") >= 0) return false;
    if (d.juv || d.dom || d.breed || d.mem) return false;
    // The guardians and the wardens are not gym material. The first run of this
    // handed the Ember leader the PHOENIX, which is a level-48 legend you are
    // supposed to earn behind a seal - the Mythic type does not cover it,
    // because the three guardians are typed as ordinary animals and marked with
    // a flag instead.
    if (d.legend || d.warden) return false;
    if (typeof WHERE !== "undefined" && !(WHERE[k] || []).length) return false;
    return true;
  }).sort((a, b) => {
    const s = (k) => { const x = DEX[k].b; return x.h + x.a + x.d + x.s; };
    return s(a) - s(b) || (a < b ? -1 : 1);          // name breaks ties, so it is stable
  });

  let hardened = 0, fourths = 0;
  Object.keys(GYMS).forEach((mapKey) => {
    const g = GYMS[mapKey];
    if (!g || typeof g.team !== "function" || g.__harder) return;
    const orig = g.team;
    const bump = bumpFor(g.id);

    // Chosen once, at load, so the same leader always fields the same animal.
    // Anything already on the team is out: the first run gave Warden Zahra a
    // second Corsac Fox, which is not a bigger team, it is the same animal
    // twice.
    let extra = null;
    if (g.id >= 4) {
      const already = new Set(orig().map((a) => a.sp));
      const cands = candidatesFor(g.type).filter((k) => !already.has(k));
      if (cands.length) {
        extra = cands[Math.min(cands.length - 1, Math.floor(cands.length * 0.75))];
        GYM_EXTRA[mapKey] = extra;
        fourths++;
      }
    }

    g.team = () => {
      const base = orig();
      // Re-made at the new level rather than edited, so HP, stats and the moves
      // known at that level all follow. Editing lvl in place would leave a
      // level-33 animal with a level-30 movepool and level-30 hit points.
      const team = base.map((a) => mk(a.sp, a.lvl + bump));
      if (extra) {
        const top = base.reduce((n, a) => Math.max(n, a.lvl), 0);
        team.push(mk(extra, top + bump));
      }
      return team;
    };
    g.__harder = true;
    GYM_SIZE[mapKey] = orig().length + (extra ? 1 : 0);
    hardened++;
  });

  console.log(`[part84] gyms: ${hardened} hardened | fourth animal for ${fourths} of them`
    + " | " + Object.keys(GYM_EXTRA).map((k) => `${GYMS[k].leader}+${DEX[GYM_EXTRA[k]].n}`).join(", "));
}

// ================= 2. TRAINERS WHO WILL GO AGAIN =================
//
// Beating a trainer currently makes them VANISH: part4 and part5 both turn their
// tile into bare floor, so there is nobody left to ask for a second match.
//
// They can simply stay standing - but not all of them. Measured across the 57
// maps that hold a battler: on two of them a trainer is the only way through a
// corridor, and a trainer who never steps aside would seal the route behind
// them for good. So this works it out per trainer instead of trusting a rule:
// make that one tile solid, flood the map, and if an exit or any floor stops
// being reachable then THAT trainer keeps stepping aside when beaten. Everybody
// else stands their ground and can be challenged again.
//
// The same check is why the rival is untouched. A V tile is Zuri, and Zuri
// blocking the north road out of route1 until you beat her is the point of her
// being there.

const REMATCH_HOLD = {};

{
  const MARKS = (typeof MAP_MARKS !== "undefined") ? MAP_MARKS : "";
  const WALK = ".gGp*" + MARKS + "nsec";
  const isBattler = (idKey) => { const t = TRAINERS[idKey]; return !!(t && t.team && !t.chat); };

  const flood = (m, id, sx, sy, solidKey) => {
    const rows = m.rows, H = rows.length, seen = new Set();
    const ok = (x, y) => {
      const c = (rows[y] || "")[x];
      if (c === undefined) return false;
      if (WALK.indexOf(c) >= 0) return true;
      if (c === "V") return true;                       // the rival steps aside as always
      if (c === "R") {
        if (!isBattler(id + ":" + x + "," + y)) return true;
        return (id + ":" + x + "," + y) !== solidKey;   // only the one under test stands
      }
      return false;
    };
    if (!ok(sx, sy)) return seen;
    const q = [[sx, sy]]; seen.add(sx + "," + sy);
    for (let i = 0; i < q.length; i++) {
      const [x, y] = q[i];
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
        const nx = x + dx, ny = y + dy;
        if (ny < 0 || ny >= H || nx < 0) return;
        if (seen.has(nx + "," + ny) || !ok(nx, ny)) return;
        seen.add(nx + "," + ny); q.push([nx, ny]);
      });
    }
    return seen;
  };

  let holds = 0, steps = 0;
  const stepAside = [];
  Object.keys(MAPS).forEach((id) => {
    const m = MAPS[id];
    if (!m || !m.rows || !m.exits) return;
    const exits = Object.keys(m.exits).map((k) => k.split(",").map(Number));
    if (!exits.length) return;
    m.rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] !== "R") continue;
        const key = id + ":" + x + "," + y;
        if (!isBattler(key)) continue;
        const open = flood(m, id, exits[0][0], exits[0][1], null);
        const held = flood(m, id, exits[0][0], exits[0][1], key);
        let lost = 0;
        open.forEach((k) => { if (k !== x + "," + y && !held.has(k)) lost++; });
        const exitsOk = exits.every(([ex, ey]) => held.has(ex + "," + ey));
        if (lost === 0 && exitsOk) { REMATCH_HOLD[key] = true; holds++; }
        else { steps++; stepAside.push(key); }
      }
    });
  });

  console.log(`[part84] rematches: ${holds} trainers stay standing when beaten`
    + ` | ${steps} still step aside because they are the only way through`
    + (stepAside.length ? ` (${stepAside.join(" ")})` : ""));
}

/* Read by part4's walkability rule and part5's renderer. A beaten trainer who
   holds their ground stays solid and stays drawn - which is what makes them
   there to be challenged again. */
const trainerHoldsGround = (idKey) => !!REMATCH_HOLD[idKey];

/* A different team at the same weight.
   Ayr: "shuffle the animals for each battle, but keep the level balance the
   same." So the LEVELS are taken straight off the original team and never
   touched - same count, same numbers, same order - and only the species change.
   They are drawn from the encounter pool of the map the trainer is standing on,
   so a fen trainer fields fen animals and the shuffle stays in its own country
   rather than handing a desert scout a penguin. If a map has too few to draw
   from, the original species stay. */
const rematchTeam = (idKey, tr) => {
  const levels = tr.team().map((a) => a.lvl);
  const mapKey = idKey.split(":")[0];
  const m = MAPS[mapKey];
  const pool = []
    .concat(m && m.pool ? m.pool : [], m && m.poolN ? m.poolN : [], m && m.poolWater ? m.poolWater : [])
    .map(([sp]) => sp)
    .filter((sp) => DEX[sp] && !DEX[sp].juv);
  const uniq = [...new Set(pool)];
  if (uniq.length < levels.length) return tr.team();
  const picks = [];
  while (picks.length < levels.length && uniq.length) {
    picks.push(uniq.splice(Math.floor(Math.random() * uniq.length), 1)[0]);
  }
  return levels.map((lvl, i) => mk(picks[i], lvl));
};
