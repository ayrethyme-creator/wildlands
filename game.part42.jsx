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
    best[sp] >= minWeight && DEX[sp] && INFO[sp] && INFO[sp].h && USABLE_FACT(sp));
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
// A fact has to be substantial enough to be a believable wrong answer. "It
// sprays." next to three full sentences gives the question away.
const USABLE_FACT = (sp) => {
  const f = INFO[sp] && INFO[sp].f;
  if (!f) return false;
  const one = String(f).match(/^.*?[.!?](?=\s|$)/);
  return ((one ? one[0] : f).trim().length) >= 44;
};

const firstSentence = (s) => {
  const m = String(s).match(/^.*?[.!?](?=\s|$)/);
  let t = (m ? m[0] : String(s)).trim();
  if (t.length > 116) t = t.slice(0, 113).replace(/\s+\S*$/, "") + "…";
  return t;
};

// ---- 4. build one exam ----
// The first version asked what an animal ate and where it lived. Both are
// lookups, both are dull, and both are harder than they look, because half the
// range strings in the guide differ by one country. "Africa, Europe and Asia"
// against "Africa and Asia" is not a test of whether you were paying attention.
//
// What is worth asking about is the thing you actually remember: that a vulture
// can eat anthrax and not die, that a skunk aims. So the exam is now built out
// of the field notes and the signs, and mostly in the direction that makes a
// quiz fun - here is a remarkable thing, whose is it?

// Pull a sign's text down to the claim inside it, dropping the pictogram and
// the quote marks the world writes them with.
const signClaim = (raw) => {
  let t = String(raw).replace(/^\s*🪧\s*/, "").trim();
  t = t.replace(/\\(['"])/g, "$1");   // the world writes \' inside quoted sign text
  t = t.replace(/^[A-Za-z ,']+:\s*/, "");
  t = t.replace(/^['"‘’“”]+/, "").replace(/['"‘’“”]+$/, "");
  const m = t.match(/^.*?[.!?](?=\s|$)/);
  let out = (m ? m[0] : t).trim();
  if (out.length > 116) out = out.slice(0, 113).replace(/\s+\S*$/, "") + "…";
  return out;
};

// The signs standing in a given stretch of country, and the ones standing
// somewhere else - which is where the wrong answers come from.
const regionSigns = (n) => {
  const set = new Set(QUIZ_MAPS[n] || []);
  return Object.keys(SIGNS || {})
    .filter((k) => set.has(String(k).split(":")[0]))
    .map((k) => signClaim(SIGNS[k]))
    .filter((t) => t.length > 34 && t.length < 118);
};
const otherSigns = (n) => {
  const set = new Set(QUIZ_MAPS[n] || []);
  return Object.keys(SIGNS || {})
    .filter((k) => !set.has(String(k).split(":")[0]))
    .map((k) => signClaim(SIGNS[k]))
    .filter((t) => t.length > 34 && t.length < 118);
};

const buildExam = (gymId, seed) => {
  const rnd = qRand(seed);
  const tier = gymId <= 4 ? 1 : gymId <= 8 ? 2 : 3;
  const minW = tier === 1 ? 8 : tier === 2 ? 6 : 5;
  let species = regionSpecies(gymId, minW);
  if (species.length < 10) species = regionSpecies(gymId, 3);
  if (species.length < 10) species = regionSpecies(gymId, 1);
  if (species.length < 5) return [];

  const mySigns = regionSigns(gymId);
  const elseSigns = otherSigns(gymId);

  // Weighted toward the interesting formats. "Whose fact is this?" is the
  // backbone - it reads like a quiz question instead of a form field, and it
  // is easier as well as better, because four animal names are far easier to
  // tell apart than four almost-identical range strings.
  const kinds = [];
  for (let i = 0; i < 4; i++) kinds.push("whoAmI");
  for (let i = 0; i < 2; i++) kinds.push("factTrue");
  if (mySigns.length >= 1 && elseSigns.length >= 3) kinds.push("sign");
  if (tier >= 2) kinds.push("status");
  if (tier === 1) kinds.push("home");          // one gentle lookup early on

  const picked = qShuffle(species, rnd);
  const used = new Set();
  const out = [];
  let guard = 0;

  while (out.length < 5 && guard++ < 60) {
    const kind = kinds[Math.floor(rnd() * kinds.length)];
    let q = null;

    if (kind === "sign") {
      const right = qShuffle(mySigns, rnd)[0];
      const wrong = [];
      for (const t2 of qShuffle(elseSigns, rnd)) {
        if (t2 === right || wrong.includes(t2)) continue;
        wrong.push(t2);
        if (wrong.length === 3) break;
      }
      if (wrong.length === 3)
        q = { q: "Which of these is written on a sign in this part of the country?",
              a: right, w: wrong, long: true };
    } else {
      const sp = picked[Math.floor(rnd() * picked.length)];
      if (!sp || !INFO[sp]) continue;
      const info = INFO[sp], name = DEX[sp].n;

      if (kind === "whoAmI") {
        // A remarkable thing, and four animals it could belong to. The wrong
        // three are drawn from animals that share a type with the right one
        // wherever possible - offering a poison frog against three dog breeds
        // is not a question, it is a giveaway.
        const right = name;
        const myTypes = new Set(DEX[sp].t || []);
        const kin = species.filter((o) =>
          o !== sp && DEX[o] && (DEX[o].t || []).some((ty) => myTypes.has(ty)));
        const wrong = [];
        for (const o of qShuffle(kin, rnd).concat(qShuffle(species, rnd))) {
          if (o === sp || !DEX[o] || wrong.includes(DEX[o].n) || DEX[o].n === right) continue;
          wrong.push(DEX[o].n);
          if (wrong.length === 3) break;
        }
        if (wrong.length === 3)
          q = { q: `Which animal is this true of?\n\n“${firstSentence(info.f)}”`,
                a: right, w: wrong, sp: null, subject: sp };
      } else if (kind === "factTrue") {
        const right = firstSentence(info.f);
        const wrong = [];
        for (const o of qShuffle(species, rnd)) {
          if (o === sp) continue;
          const v = firstSentence(INFO[o].f);
          if (v === right || wrong.includes(v)) continue;
          wrong.push(v);
          if (wrong.length === 3) break;
        }
        if (wrong.length === 3)
          q = { q: `Which of these is true of the ${name}?`, a: right, w: wrong, sp, long: true };
      } else if (kind === "status") {
        const right = STATUS_NAME[info.s];
        const pool = ["Least Concern", "Near Threatened", "Vulnerable", "Endangered", "Critically Endangered"];
        const wrong = qShuffle(pool.filter((x) => x !== right), rnd).slice(0, 3);
        if (right && wrong.length === 3)
          q = { q: `How is the ${name} listed on the IUCN Red List?`, a: right, w: wrong, sp };
      } else {
        const right = info.h;
        const wrong = [];
        for (const o of qShuffle(species, rnd)) {
          if (o === sp) continue;
          const v = INFO[o].h;
          if (!v || v === right || wrong.includes(v)) continue;
          wrong.push(v);
          if (wrong.length === 3) break;
        }
        if (wrong.length === 3)
          q = { q: `Where does the ${name} live?`, a: right, w: wrong, sp };
      }
    }

    if (!q || used.has(q.q)) continue;
    if (new Set([q.a, ...q.w]).size !== 4) continue;
    used.add(q.q);
    q.opts = qShuffle([q.a, ...q.w], rnd);
    out.push(q);
  }
  return out;
};

// ---- 5. the trainers become the reading ----
// Every ordinary trainer carries a piece of natural history about an animal
// common in the ground they are standing on. That is what makes the exams fair
// without adding a single new sign.
//
// The fact is stored separately rather than glued onto the end of what they
// already say. Appending it ran two unrelated sentences together in one breath
// and made every trainer sound like they were reciting; kept apart, the battle
// line stays theirs and the field note reads as a second beat.
//
// Left alone entirely: gym leaders, the Elite Four, the champion, the rival,
// the professor, and the specialists. The specialists already exist to teach -
// their lines are written natural history - so bolting another fact on was
// redundant at best and contradicted them at worst.
(() => {
  const mapOf = (k) => String(k).split(":")[0];
  const regionOf = {};
  Object.entries(QUIZ_MAPS).forEach(([n, ms]) => ms.forEach((m) => {
    if (regionOf[m] === undefined) regionOf[m] = Number(n);
  }));

  const talkable = {};
  for (let n = 1; n <= 12; n++) {
    talkable[n] = regionSpecies(n, 6).filter((sp) => INFO[sp] && INFO[sp].f);
    if (talkable[n].length < 4) talkable[n] = regionSpecies(n, 1).filter((sp) => INFO[sp] && INFO[sp].f);
  }

  // Short openers, so the note sounds like someone mentioning it rather than
  // quoting a book at you.
  const LEAD = [
    (n) => `Seen a ${n} out here?`,
    (n) => `Ask me about the ${n}.`,
    (n) => `Most people walk past the ${n}.`,
    (n) => `My notes on the ${n}:`,
    (n) => `Catch a ${n} and read its entry.`,
    (n) => `The ${n} surprised me.`,
    (n) => `Worth knowing about the ${n}:`,
    (n) => `You want to know the ${n}?`,
  ];

  let touched = 0, skipped = 0;
  const counter = {};
  Object.keys(TRAINERS).forEach((key) => {
    const t = TRAINERS[key];
    if (!t || !t.line) return;
    if (t.elite || t.champion || t.gym || t.specialist) { skipped++; return; }
    if (/^Prof\.|Zuri/.test(t.name || "")) { skipped++; return; }
    if (t.fact) return;

    const n = regionOf[mapOf(key)];
    const pool = talkable[n] || [];
    if (!pool.length) { skipped++; return; }

    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    counter[n] = (counter[n] || 0) + 1;
    const sp = pool[(h + counter[n] * 7) % pool.length];

    t.fact = `${LEAD[h % LEAD.length](DEX[sp].n)} ${firstSentence(INFO[sp].f)}`;
    t.factSp = sp;
    touched++;
  });
  console.log("[part42] trainers carrying a field note:", touched, "| left alone:", skipped);
})();
