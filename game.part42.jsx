// ---------- Part 42: THE FIELD EXAMS ----------
// A gym leader, a guardian's altar and an Elite Four seat each ask five
// questions before they will face you. Get one wrong and the exam ends; you can
// walk away, read up, and come back, and the questions reshuffle so memorising
// an answer order gets you nothing.
//
// The rule that makes this fair: every question is drawn ONLY from the stretch
// of ground between the previous gym and this one. The signs standing in it,
// the trainers walking it, and the animals common enough in its grass that a
// player will have met them. Nothing is asked about a creature from a region
// you have not reached, and nothing is asked that the Field Guide cannot
// answer. Reading your own guide entries is the intended way to pass.

// ---- 1. carve the world into the ground before each gym ----
const GYM_ORDER = ["town2", "apiary", "town3", "town4", "highstation", "town5",
                   "town6", "town7", "frostwatch", "town8", "eyrie", "town9"];

const REGION_MAPS = (() => {
  const nbrs = (k) => Object.values(MAPS[k].exits || {}).map((e) => e.map).filter((m) => MAPS[m]);
  const claimed = new Set();
  const out = {};
  let start = "town1";
  GYM_ORDER.forEach((gm, i) => {
    const later = new Set(GYM_ORDER.slice(i));   // never walk past this gym or a later one
    const seen = new Set([start]);
    const q = [start];
    while (q.length) {
      const cur = q.shift();
      nbrs(cur).forEach((n) => {
        if (seen.has(n) || claimed.has(n)) return;
        seen.add(n);
        if (!later.has(n)) q.push(n);
      });
    }
    const region = [...seen].filter((m) => !claimed.has(m));
    region.forEach((m) => claimed.add(m));
    out[i + 1] = region;
    start = gm;
  });
  return out;
})();

// Some gyms sit right next to the one before them - the apiary and Delta Town
// share the same approach, and so do a few later pairs - so their own stretch
// comes out empty. Those inherit the previous gym's ground, which is honest:
// it is the same walk, and the player has seen exactly the same signs.
const QUIZ_MAPS = (() => {
  const out = {};
  for (let n = 1; n <= 12; n++) {
    let ms = REGION_MAPS[n] || [];
    let back = n;
    while (ms.length < 3 && back > 1) { back--; ms = ms.concat(REGION_MAPS[back] || []); }
    out[n] = ms;
  }
  return out;
})();

// ---- 2. what lives, stands and walks in each stretch ----
// "Common" means the grass will actually offer it. Rare spawns are excluded, so
// nobody is asked about an animal they had a one-in-forty chance of meeting.
const regionSpecies = (n, minWeight) => {
  const best = {};
  (QUIZ_MAPS[n] || []).forEach((m) => {
    ["pool", "poolN", "poolW"].forEach((pk) => {
      (MAPS[m][pk] || []).forEach(([sp, w]) => { best[sp] = Math.max(best[sp] || 0, w); });
    });
  });
  return Object.keys(best).filter((sp) =>
    best[sp] >= minWeight && DEX[sp] && INFO[sp] && INFO[sp].f && INFO[sp].d && INFO[sp].h);
};

// ---- 3. deterministic shuffling, seeded per attempt ----
const qRand = (seed) => {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
};
const qShuffle = (arr, rnd) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

const STATUS_NAME = {
  LC: "Least Concern", NT: "Near Threatened", VU: "Vulnerable", EN: "Endangered",
  CR: "Critically Endangered", EW: "Extinct in the Wild", EX: "Extinct",
  DD: "Data Deficient", DOM: "Domesticated", MYTH: "Myth",
};

// Trim a field note down to its first sentence, so a fact question is readable
// on a phone without losing what makes the answer distinctive.
const firstSentence = (s) => {
  const m = String(s).match(/^.*?[.!?](?=\s|$)/);
  let t = (m ? m[0] : String(s)).trim();
  if (t.length > 116) t = t.slice(0, 113).replace(/\s+\S*$/, "") + "…";
  return t;
};

// ---- 4. build one exam ----
// Difficulty climbs three ways: the questions start with what an animal eats
// and where it lives, then add conservation status, then the field notes
// themselves; and the spawn weight required to be asked about drops, so later
// exams reach further down the list of things you had to look at.
const buildExam = (gymId, seed) => {
  const rnd = qRand(seed);
  const tier = gymId <= 4 ? 1 : gymId <= 8 ? 2 : 3;
  const minW = tier === 1 ? 10 : tier === 2 ? 8 : 6;
  let species = regionSpecies(gymId, minW);
  if (species.length < 8) species = regionSpecies(gymId, 4);
  if (species.length < 8) species = regionSpecies(gymId, 1);
  if (species.length < 4) return [];

  const kinds = tier === 1 ? ["diet", "home"]
              : tier === 2 ? ["diet", "home", "status", "fact"]
              : ["home", "status", "fact", "fact"];

  const picked = qShuffle(species, rnd).slice(0, 14);
  const used = new Set();
  const out = [];

  for (const sp of picked) {
    if (out.length >= 5) break;
    const kind = kinds[Math.floor(rnd() * kinds.length)];
    const info = INFO[sp];
    const name = DEX[sp].n;
    let q = null;

    // Distractors have to differ from the answer AND from each other. Plenty of
    // animals share a diet or a range, so picking three at random produced
    // repeated options - which either gives the answer away or makes the
    // question unanswerable.
    const distinct = (field, right, n) => {
      const out = [];
      for (const o of qShuffle(species.filter((x) => x !== sp), rnd)) {
        const v = INFO[o][field];
        if (!v || v === right || out.includes(v)) continue;
        out.push(v);
        if (out.length === n) break;
      }
      return out;
    };

    if (kind === "diet") {
      const right = info.d;
      const wrong = distinct("d", right, 3);
      if (wrong.length === 3) q = { q: `What does the ${name} eat?`, a: right, w: wrong };
    } else if (kind === "home") {
      const right = info.h;
      const wrong = distinct("h", right, 3);
      if (wrong.length === 3) q = { q: `Where does the ${name} live?`, a: right, w: wrong };
    } else if (kind === "status") {
      const right = STATUS_NAME[info.s];
      const pool = ["Least Concern", "Near Threatened", "Vulnerable", "Endangered", "Critically Endangered"];
      const wrong = qShuffle(pool.filter((x) => x !== right), rnd).slice(0, 3);
      if (right && wrong.length === 3)
        q = { q: `How is the ${name} listed on the IUCN Red List?`, a: right, w: wrong };
    } else {
      const right = firstSentence(info.f);
      const wrong = [];
      for (const o of qShuffle(species.filter((x) => x !== sp), rnd)) {
        const v = firstSentence(INFO[o].f);
        if (v === right || wrong.includes(v)) continue;
        wrong.push(v);
        if (wrong.length === 3) break;
      }
      if (wrong.length === 3)
        q = { q: `Which of these is true of the ${name}?`, a: right, w: wrong, long: true };
    }

    if (!q || used.has(q.q)) continue;
    if (new Set([q.a, ...q.w]).size !== 4) continue;   // belt and braces
    used.add(q.q);
    q.opts = qShuffle([q.a, ...q.w], rnd);
    q.sp = sp;
    out.push(q);
  }
  return out;
};

// Exams are keyed so a gym, an altar and an Elite seat each track separately.
// Passing is remembered in the save, so a leader never asks twice.
const EXAM_LABEL = {
  gym: "Field Exam", legend: "The Altar's Question", elite: "The Summit Examination",
};

console.log("[part42] field exams ready |",
  Object.keys(QUIZ_MAPS).map((n) => `g${n}:${regionSpecies(n, 6).length}sp`).join(" "));

// ---- 5. the trainers become the reading ----
// Every ordinary trainer now adds a line of natural history about an animal
// common in the ground they are standing on. That makes the exams fair without
// adding a single new sign: the questions are drawn from the same regional
// animals these people are talking about, so a player who stops and listens on
// the way to the gym has already met most of the answers.
//
// Gym leaders, the Elite Four, the rival and the professor are left alone -
// their lines are doing story work, and an appended fact would flatten them.
(() => {
  const mapOf = (k) => String(k).split(":")[0];
  const regionOf = {};
  Object.entries(QUIZ_MAPS).forEach(([n, ms]) => ms.forEach((m) => {
    if (regionOf[m] === undefined) regionOf[m] = Number(n);
  }));

  // a stable per-region list of animals worth talking about
  const talkable = {};
  for (let n = 1; n <= 12; n++) {
    talkable[n] = regionSpecies(n, 6).filter((sp) => INFO[sp] && INFO[sp].f);
    if (talkable[n].length < 4) talkable[n] = regionSpecies(n, 1).filter((sp) => INFO[sp] && INFO[sp].f);
  }

  const LEAD = [
    (n, f) => `Seen a ${n} out here? ${f}`,
    (n, f) => `Ask me about the ${n}. ${f}`,
    (n, f) => `People walk past the ${n} without looking twice. ${f}`,
    (n, f) => `My notes on the ${n}: ${f}`,
    (n, f) => `If you catch a ${n}, read its entry. ${f}`,
    (n, f) => `The ${n} is the one that surprised me. ${f}`,
    (n, f) => `Field note, ${n}: ${f}`,
    (n, f) => `You want to know the ${n}? ${f}`,
  ];

  let touched = 0, skipped = 0;
  const counter = {};
  Object.keys(TRAINERS).forEach((key) => {
    const t = TRAINERS[key];
    if (!t || !t.line) return;
    if (t.elite || t.champion || t.gym) { skipped++; return; }
    if (/^Prof\.|Zuri/.test(t.name || "")) { skipped++; return; }
    if (t.factAdded) return;

    const n = regionOf[mapOf(key)];
    const pool = talkable[n] || [];
    if (!pool.length) { skipped++; return; }

    // deterministic pick, so the same trainer always says the same thing
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    counter[n] = (counter[n] || 0) + 1;
    const sp = pool[(h + counter[n] * 7) % pool.length];
    const fact = firstSentence(INFO[sp].f);
    const lead = LEAD[h % LEAD.length];

    t.line = `${t.line} ${lead(DEX[sp].n, fact)}`;
    t.factAdded = true;
    t.factSp = sp;
    touched++;
  });
  console.log("[part42] trainers given a field fact:", touched, "| left alone:", skipped);
})();
