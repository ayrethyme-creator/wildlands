// ---------- Part 31: THE ANIMALS STUCK ON THREE MOVES ----------
// Ayr spotted this. Two separate bugs, and the harness never caught either
// because a species with three moves is perfectly valid — it just isn't fair.
//
// BUG 1 — an ordering problem I made myself.
// part17 runs buildLearnset across the whole dex at load time. part18 then
// creates the 58 juveniles. Every one of those was born after the builder had
// already walked past, so nothing ever gave them a learnset. They got whatever
// starting moves they were declared with and never learned another thing for
// the rest of their lives. Eighteen of them ended up under four moves.
//
// BUG 2 — four types simply do not have enough moves to fill a moveset.
// Ember, Ice, Night and Canopy have three moves each in the entire game. Any
// animal leaning on one of those pools hits a hard ceiling at three, no matter
// how it levels. Right now that's masked because most of those animals are
// dual-typed and borrow from the other half — but it's a real gap, and I made
// it worse in part19 by adding nine Ember species to a pool that thin.

// --- Bug 2: give the thin types a fourth move each ---
// Slotted at powers that leave a genuine progression rather than a spike.
Object.assign(MOVES, {
  cinderdrift: { n: "Cinder Drift", t: "Ember", p: 70, acc: 95, fx: "burn", fxc: 0.1 },
  rimeglaze:   { n: "Rime Glaze",   t: "Ice",   p: 65, acc: 95 },
  gloomstalk:  { n: "Gloom Stalk",  t: "Night", p: 65, acc: 100 },
  branchsnap:  { n: "Branch Snap",  t: "Canopy", p: 60, acc: 95 },
});
["cinderdrift", "rimeglaze", "gloomstalk", "branchsnap"].forEach((k) => {
  const t = MOVES[k].t;
  BY_TYPE[t] = BY_TYPE[t] || [];
  if (!BY_TYPE[t].includes(k)) BY_TYPE[t].push(k);
  BY_TYPE[t].sort((a, b) => MOVES[a].p - MOVES[b].p);
});

// --- Bug 1: re-run the builder for anything that never got one ---
// Same rules as part17: keep whatever moves the animal already had, because
// those were chosen for flavour, and only add what's missing. Hand-written
// learnsets and the guardians' signature moves are left alone.
let refilled = 0, widened = 0;
const totalMoves = (k) => new Set([...(DEX[k].m || []), ...((DEX[k].l || []).map((e) => e[1]))]).size;

Object.keys(DEX).forEach((key) => {
  const d = DEX[key];
  if (d.legend) return;                    // guardians keep their signature four
  if (totalMoves(key) >= 4) return;        // already fine
  const built = buildLearnset(key);
  if (!built || !built.start.length) return;
  const had = d.m || [];
  const merged = [...new Set([...had, ...built.start])].slice(0, 3);
  d.m = merged.length ? merged : built.start;
  // everything the builder offers that it doesn't already know
  const fresh = built.learn.filter(([, mv]) => !d.m.includes(mv));
  // a juvenile evolves early, so front-load its levels — no point offering a
  // move at 45 to an animal that becomes something else at 18
  const evoAt = d.grows && d.grows.at ? d.grows.at : null;
  if (evoAt && evoAt < 24) {
    const early = [4, 7, 10, 13, 16, 19, 22, 26, 30, 34];
    d.l = fresh.map(([, mv], i) => [early[i] !== undefined ? early[i] : 34 + i * 4, mv]);
  } else {
    d.l = fresh;
  }
  if (totalMoves(key) >= 4) refilled++;
});

// Anything still short after that is short because its type pools are genuinely
// exhausted — give it a utility move so it has a fourth option rather than
// three attacks and nothing else.
Object.keys(DEX).forEach((key) => {
  const d = DEX[key];
  if (d.legend || totalMoves(key) >= 4) return;
  const known = new Set([...(d.m || []), ...((d.l || []).map((e) => e[1]))]);
  const u = (UTIL_BY_TYPE[d.t[0]] || [])[0] || (UTIL_BY_TYPE[d.t[1]] || [])[0] || "harden";
  if (known.has(u)) return;
  d.l = [...(d.l || []), [Math.max(6, ...(d.l || []).map((e) => e[0] + 4), 6), u]]
    .sort((a, b) => a[0] - b[0]);
  widened++;
});

const stillShort = Object.keys(DEX).filter((k) => !DEX[k].legend && totalMoves(k) < 4);
console.log("[part31] learnsets rebuilt:", refilled, "| utility fallbacks:", widened,
  "| still under 4:", stillShort.length ? stillShort.join(", ") : "none");
console.log("[part31] thin type pools widened: Ember, Ice, Night, Canopy → 4 moves each");

// --- while I'm in here: dead learnset entries ---
// Checking the fix turned up 122 moves offered to juveniles at levels above the
// one they evolve at. They can never fire — a Jaguar Cub evolves at 24 and was
// being promised a move at 45. It's harmless in battle, but the Field Guide
// prints the learnset, so it's a promise the animal can't keep. Trim them,
// but never at the cost of dropping something back under four moves.
let trimmed = 0;
Object.keys(DEX).forEach((key) => {
  const d = DEX[key];
  if (!d.grows || !d.grows.at || !(d.l || []).length) return;
  const keep = d.l.filter(([lv]) => lv <= d.grows.at);
  const wouldKnow = new Set([...(d.m || []), ...keep.map((e) => e[1])]).size;
  if (wouldKnow < 4) return;              // leave it rather than starve it
  trimmed += d.l.length - keep.length;
  d.l = keep;
});
const stillLate = [];
Object.keys(DEX).forEach((k) => { const d = DEX[k]; if (!d.grows || !d.grows.at) return;
  (d.l || []).forEach(([lv, mv]) => { if (lv > d.grows.at) stillLate.push(DEX[k].n + ":" + mv); }); });
console.log("[part31] unreachable learnset entries trimmed:", trimmed,
  "| left in place to keep 4 moves:", stillLate.length);
