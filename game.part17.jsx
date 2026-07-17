// ---------- CHAPTER XIV — Part 17: WHAT THEY LEARN ----------
// Most of the menagerie shipped with three moves of a single type and no
// learnset at all: a Husky that was Ice/Swift knew only Ice, forever. This
// gives every animal a real progression that interleaves BOTH of its types,
// plus utility, so movesets stay varied as they level.
//
// Hand-written learnsets (the originals, and anything set deliberately) are
// left completely alone.

// moves of each type, weakest first; status moves kept aside as utility
const BY_TYPE = {};
const UTILITY = [];
Object.entries(MOVES).forEach(([k, m]) => {
  if (m.p === 0) UTILITY.push(k);
  else (BY_TYPE[m.t] = BY_TYPE[m.t] || []).push(k);
});
Object.keys(BY_TYPE).forEach((t) => BY_TYPE[t].sort((a, b) => MOVES[a].p - MOVES[b].p));

// utility grouped by what it does, so an animal gets useful, thematic support
const UTIL_BY_TYPE = {};
UTILITY.forEach((k) => { (UTIL_BY_TYPE[MOVES[k].t] = UTIL_BY_TYPE[MOVES[k].t] || []).push(k); });

// levels at which a growing animal picks something up
const LEARN_AT = [7, 11, 15, 19, 24, 29, 34, 39, 45, 51];

// Mythic and Fossil are flavour types with no moves of their own. Anything
// built on them draws from a thematic spread instead, which is why a Kitsune
// fights nothing like a Cerberus.
const FALLBACK = {
  Mythic: ["Wild", "Predator", "Aerial", "Ember", "Night", "Venom"],
  Fossil: ["Wild", "Predator", "Armor", "Burrow"],
};
const poolFor = (t, key) => {
  if (BY_TYPE[t] && BY_TYPE[t].length) return BY_TYPE[t].slice();
  const fb = FALLBACK[t];
  if (!fb) return [];
  // deterministic per species, so each myth gets its own consistent flavour
  let h = 0; for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const picked = [fb[h % fb.length], fb[(h >> 3) % fb.length], fb[(h >> 6) % fb.length]];
  const out = [];
  [...new Set(picked)].forEach((tt) => (BY_TYPE[tt] || []).forEach((m) => out.push(m)));
  return [...new Set(out)].sort((a2, b2) => MOVES[a2].p - MOVES[b2].p);
};

const buildLearnset = (key) => {
  const d = DEX[key];
  const [t1, t2] = d.t;
  const a = poolFor(t1, key);
  const b = t2 && t2 !== t1 ? poolFor(t2, key) : [];
  // interleave the two types so the strongest four are never all one flavour
  const woven = [];
  const maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    if (a[i] && !woven.includes(a[i])) woven.push(a[i]);
    if (b[i] && !woven.includes(b[i])) woven.push(b[i]);
  }
  // sort the woven list by power so it reads as a real progression,
  // but keep the alternation as the tiebreak
  woven.sort((x, y) => MOVES[x].p - MOVES[y].p);
  // support: one from each of its types if available, else a generic
  const util = [];
  [t1, t2].forEach((t) => { const u = UTIL_BY_TYPE[t]; if (u && u.length) util.push(u[0]); });
  if (!util.length) util.push("harden");
  // starting moves: the two weakest, so there's room to grow
  const start = woven.slice(0, 2);
  // everything after, plus utility slotted in at sensible points
  const rest = woven.slice(2);
  const seq = [];
  rest.forEach((mv, i) => {
    seq.push(mv);
    if (i === 1 && util[0]) seq.push(util[0]);
    if (i === 4 && util[1]) seq.push(util[1]);
  });
  const learn = [...new Set(seq)].slice(0, LEARN_AT.length).map((mv, i) => [LEARN_AT[i], mv]);
  return { start, learn };
};

// Remember the guardians' hand-picked signature moves BEFORE we touch anything
const SIGNATURE = {};
Object.keys(DEX).forEach((k) => { if (DEX[k].legend) SIGNATURE[k] = [...(DEX[k].m || [])]; });

// Apply only where a learnset is genuinely absent. Signature moves on the
// legendaries and hand-built stages are preserved by merging, never replacing.
let filled = 0, kept = 0;
Object.keys(DEX).forEach((key) => {
  const d = DEX[key];
  if ((d.l || []).length) { kept++; return; }   // hand-written: leave it be
  const { start, learn } = buildLearnset(key);
  if (!start.length) return;
  // keep whatever the animal already had — those were chosen for flavour —
  // and only add what's missing
  const had = d.m || [];
  const merged = [...new Set([...start, ...had])].slice(0, 3);
  d.m = merged.length ? merged : start;
  d.l = learn.filter(([, mv]) => !d.m.includes(mv));
  filled++;
});

// The guardians keep their signature four as their *final* moves, so they
// still hit like legends at the level you actually meet them.
Object.keys(DEX).forEach((key) => {
  const d = DEX[key];
  if (!d.legend) return;
  const sig = SIGNATURE[key];
  if (!sig) return;
  const early = (d.l || []).filter(([L]) => L < 38);
  const alreadyKnown = new Set([...d.m, ...early.map(([, m]) => m)]);
  const late = sig.filter((mv) => mv && MOVES[mv] && !alreadyKnown.has(mv))
    .map((mv, i) => [38 + i * 6, mv]);
  d.l = [...early, ...late];
});


// Four hand-written juvenile learnsets predate the second-type rule and never
// learn anything of their secondary type. Top them up rather than overwrite.
[["tiger_j", "Canopy"], ["boar_j", "Armor"], ["snowleopard_j", "Ice"], ["owl_j", "Night"]].forEach(([k, t]) => {
  const d = DEX[k];
  if (!d) return;
  const known = [...d.m, ...(d.l || []).map(([, m]) => m)];
  const add = (BY_TYPE[t] || []).filter((m) => !known.includes(m)).slice(0, 2);
  if (!add.length) return;
  const top = Math.max(0, ...(d.l || []).map(([L]) => L));
  d.l = [...(d.l || []), ...add.map((m, i) => [top + 5 + i * 5, m])];
});

// Final pass: nobody may learn a move they already know, or learn the same
// move twice. This also cleans up a few duplicates that were sitting in the
// original hand-written legendary learnsets long before any of this.
Object.keys(DEX).forEach((k) => {
  const d = DEX[k];
  d.m = [...new Set(d.m)];
  if (!(d.l || []).length) return;
  const known = new Set(d.m);
  const out = [];
  d.l.forEach(([L, mv]) => {
    if (known.has(mv)) return;
    known.add(mv);
    out.push([L, mv]);
  });
  d.l = out.sort((a, b) => a[0] - b[0]);
});
