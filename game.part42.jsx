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
let GYM_ORDER = ["town2", "apiary", "town3", "town4", "highstation", "town5",
                   "town6", "town7", "frostwatch", "town8", "eyrie", "town9"];

let REGION_MAPS = (() => {
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
let QUIZ_MAPS = (() => {
  const out = {};
  for (let n = 1; n <= 12; n++) {
    let ms = REGION_MAPS[n] || [];
    let back = n;
    while (ms.length < 3 && back > 1) { back--; ms = ms.concat(REGION_MAPS[back] || []); }
    out[n] = ms;
  }
  return out;
})();

// Rebuilt on demand, because the gym ladder can change after this file loads -
// part53 splices a thirteenth gym into the middle of it, and the exam regions
// have to be recut around the new road or the last gym has no country to ask
// about.
const rebuildRegions = () => {
  const nbrs = (k) => Object.values(MAPS[k].exits || {}).map((e) => e.map).filter((m) => MAPS[m]);
  const claimed = new Set();
  const out = {};
  let start = "town1";
  GYM_ORDER.forEach((gm, i) => {
    const later = new Set(GYM_ORDER.slice(i));
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
  REGION_MAPS = out;
  const qm = {};
  for (let n = 1; n <= GYM_ORDER.length; n++) {
    let ms = REGION_MAPS[n] || [];
    let back = n;
    while (ms.length < 3 && back > 1) { back--; ms = ms.concat(REGION_MAPS[back] || []); }
    qm[n] = ms;
  }
  QUIZ_MAPS = qm;
  return qm;
};

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

// Take whole sentences up to a limit rather than cutting one in half.
const sentenceFor = (raw, limit) => {
  const parts = String(raw).match(/[^.!?]+[.!?]+/g) || [String(raw)];
  let out = "";
  for (const p of parts) {
    if (out && (out + p).trim().length > limit) break;
    out += p;
    if (out.trim().length >= limit * 0.55) break;   // one good sentence is plenty
  }
  out = out.trim() || parts[0].trim();
  if (out.length > limit) out = out.slice(0, limit - 1).replace(/\s+\S*$/, "") + "…";
  return out;
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
  /* THE BADGES AND THE NATURALISTS, added 2026-09-04 on Ayr's ask for the badge
     concepts, more variety, and questions about what the specialists say.

     Both are gated the same way everything else here is - by the ground you have
     walked. A badge only comes up if THREE of its members live in this region,
     and a naturalist only comes up if they are standing in it. So the badge
     question is not "have you unlocked the Badge Book entry", which you may not
     have; it is "you have met these three animals and read their entries - what
     do they have in common?" That is answerable from the Field Guide, which is
     the rule this file was built on, and it is the badge's own payload: the
     concept arrives as the explanation of why those animals belong together. */
  const speciesHere = new Set(species);
  const badgesHere = (typeof BADGES_BOOK !== "undefined" ? BADGES_BOOK : [])
    .map((bg) => ({ bg, mine: (bg.keys || []).filter(([k]) => speciesHere.has(k)) }))
    .filter((x) => x.mine.length >= 3 && x.bg.concept);
  const localMaps = new Set(QUIZ_MAPS[gymId] || []);
  const specHere = (typeof SPECIALISTS !== "undefined" ? SPECIALISTS : [])
    .filter((s) => localMaps.has(s.at) && s.line && s.name);
  const allSpec = (typeof SPECIALISTS !== "undefined" ? SPECIALISTS : []);

  // whoAmI was weighted 4 when it and factTrue were most of the file. With four
  // more kinds in the bag it was still taking two questions in five, which is
  // the opposite of the variety Ayr asked for, so it comes down to 3.
  const kinds = [];
  for (let i = 0; i < 3; i++) kinds.push("whoAmI");
  for (let i = 0; i < 2; i++) kinds.push("factTrue");
  if (mySigns.length >= 1 && elseSigns.length >= 3) kinds.push("sign");
  if (tier >= 2) kinds.push("status");
  if (tier === 1) kinds.push("home");          // one gentle lookup early on
  kinds.push("diet");
  if (badgesHere.length >= 4) { kinds.push("badgeConcept"); kinds.push("badgeConcept"); kinds.push("badgeMember"); }
  if (specHere.length && allSpec.length >= 4) { kinds.push("saidIt"); kinds.push("saidIt"); }

  const picked = qShuffle(species, rnd);
  const used = new Set();
  const out = [];
  let guard = 0;

  while (out.length < 5 && guard++ < 60) {
    const kind = kinds[Math.floor(rnd() * kinds.length)];
    let q = null;

    if (kind === "badgeConcept") {
      // Name three animals you have met and ask what a naturalist would file
      // them under. The badge's own concept line is the answer; the wrong three
      // are other badges' concepts, so every option is a real idea.
      const pickB = badgesHere[Math.floor(rnd() * badgesHere.length)];
      const names = qShuffle(pickB.mine, rnd).slice(0, 3).map(([, n2]) => n2);
      const right = pickB.bg.concept;
      const wrong = [];
      for (const o of qShuffle(badgesHere, rnd)) {
        if (o.bg.n === pickB.bg.n || wrong.includes(o.bg.concept)) continue;
        wrong.push(o.bg.concept);
        if (wrong.length === 3) break;
      }
      if (wrong.length === 3)
        q = { q: `You have met all three of these. What puts them together?\n\n${names.join(" · ")}`,
              a: right, w: wrong, long: true };
    } else if (kind === "badgeMember") {
      // The other way round: given the idea, which animal belongs to it.
      const pickB = badgesHere[Math.floor(rnd() * badgesHere.length)];
      const mine = new Set(pickB.mine.map(([k]) => k));
      const right = pickB.mine[Math.floor(rnd() * pickB.mine.length)][1];
      const wrong = [];
      for (const o of qShuffle(species, rnd)) {
        if (mine.has(o) || !DEX[o] || wrong.includes(DEX[o].n) || DEX[o].n === right) continue;
        wrong.push(DEX[o].n);
        if (wrong.length === 3) break;
      }
      if (wrong.length === 3)
        q = { q: `${pickB.bg.n} — ${pickB.bg.concept}.\n\nWhich of these belongs to it?`,
              a: right, w: wrong, long: true };
    } else if (kind === "saidIt") {
      // The naturalists on this stretch of road say something true and specific.
      // Ayr: "add questions about what the animal specialists say."
      const who = specHere[Math.floor(rnd() * specHere.length)];
      const right = who.name;
      const wrong = [];
      for (const o of qShuffle(allSpec, rnd)) {
        if (o.name === right || wrong.includes(o.name)) continue;
        wrong.push(o.name);
        if (wrong.length === 3) break;
      }
      if (wrong.length === 3)
        q = { q: `Who says this?\n\n“${firstSentence(who.line)}”`, a: right, w: wrong, long: true };
    } else if (kind === "sign") {
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
      } else if (kind === "diet") {
        // What it eats. Reads off the same guide entry as the range question and
        // is usually more distinctive - "sponges and bryozoans" is nobody else's.
        const right = info.d;
        const wrong = [];
        for (const o of qShuffle(species, rnd)) {
          if (o === sp) continue;
          const v = INFO[o].d;
          if (!v || v === right || wrong.includes(v)) continue;
          wrong.push(v);
          if (wrong.length === 3) break;
        }
        if (right && wrong.length === 3)
          q = { q: `What does the ${name} eat?`, a: right, w: wrong, sp, long: true };
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

  // The trainer says ONE thing, and it is the interesting one. Their old line
  // was generic filler - "The tall grass taught me everything!" - and keeping
  // it meant every trainer recited a platitude and then a fact, which read as
  // two people talking.
  //
  // Twenty-four shapes, and they are structurally different rather than
  // differently worded. Some ask, some assert, some put the fact first and
  // attribute it afterwards, some are a person remembering something. A
  // template that always opens "[Something] about the [animal]:" is still one
  // template however many ways you phrase it.
  // Every line names the animal in its first few words.
  //
  // The previous set led with the fact and revealed the animal at the end,
  // which was a mistake even though the templates were well distributed: you
  // read a striking fact with no idea what it is about, and only find out
  // afterwards. Thirty-five percent of lines did not name the animal until
  // their last two-fifths, and several of them closed on the same move — "…
  // That's the Ringtail for you." Different words, same trick, and it read as
  // one trainer repeated a hundred times.
  //
  // So: subject first, always. The variety lives in what surrounds it — who is
  // speaking, why they are telling you, what they think of it — not in
  // withholding what they are talking about.
  const SAY = [
    (n, f) => `Seen a ${n} out here? ${f}`,
    (n, f) => `${n}s. ${f}`,
    (n, f) => `Ask me about the ${n}. ${f}`,
    (n, f) => `Everyone walks straight past the ${n}. ${f}`,
    (n, f) => `The ${n} — and I mean this — ${f.charAt(0).toLowerCase() + f.slice(1)}`,
    (n, f) => `I keep notes on the ${n}. ${f}`,
    (n, f) => `You know what got me about the ${n}? ${f}`,
    (n, f) => `Look up the ${n} sometime. ${f}`,
    (n, f) => `Catch a ${n} and read the entry. ${f}`,
    (n, f) => `The ${n} surprised me. ${f}`,
    (n, f) => `Right — the ${n}. ${f}`,
    (n, f) => `I had to read the ${n} entry twice. ${f}`,
    (n, f) => `My grandmother told me about ${n}s before any book did. ${f}`,
    (n, f) => `Here's one about the ${n}. ${f}`,
    (n, f) => `Nobody teaches you about the ${n}. ${f}`,
    (n, f) => `The ${n} is the one I'd tell you about. ${f}`,
    (n, f) => `I've watched ${n}s for years. ${f}`,
    (n, f) => `Bet you didn't know this about the ${n}. ${f}`,
    (n, f) => `There's a ${n} out here doing this right now. ${f}`,
    (n, f) => `The thing about a ${n} is this. ${f}`,
    (n, f) => `Somebody asked me last week what a ${n} does. ${f}`,
    (n, f) => `I still think about the ${n}. ${f}`,
    (n, f) => `Field note, ${n}. ${f}`,
    (n, f) => `You'll meet a ${n} soon enough. ${f}`,
  ];


  let touched = 0, skipped = 0;
  const used = {};
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

    // Hashing into the pool let two trainers in the same region land on the
    // same animal - four of them ended up on the farm dog, and a player walking
    // one route heard the same fact twice. Walk the pool in order instead,
    // offset by the region, so a region exhausts its animals before repeating
    // any. The offset keeps the assignment stable rather than dependent on
    // which trainer happens to be processed first.
    used[n] = used[n] || new Set();
    const start = (h + n * 13) % pool.length;
    let sp = null;
    for (let step = 0; step < pool.length; step++) {
      const cand = pool[(start + step) % pool.length];
      if (!used[n].has(cand)) { sp = cand; break; }
    }
    if (!sp) sp = pool[start];        // pool smaller than the region's trainers
    used[n].add(sp);

    // The fact becomes what they say. Their old line is kept on the object in
    // case it is ever wanted, but it is no longer spoken - a trainer says one
    // interesting thing instead of one dull thing followed by an interesting one.
    t.oldLine = t.line;
    // A quiz option has to fit one of four buttons; a line of dialogue has a
    // whole box. Using the quiz's 116-character cap here was cutting facts off
    // mid-thought with an ellipsis, which reads as a fault rather than a person
    // trailing off.
    t.line = SAY[h % SAY.length](DEX[sp].n, sentenceFor(INFO[sp].f, 210));
    t.fact = t.line;
    t.factSp = sp;
    touched++;
  });
  console.log("[part42] trainers carrying a field note:", touched, "| left alone:", skipped);
})();
