const { useState, useEffect, useRef } = React;

/* ---------- SAVE STORAGE ----------
   Real browser localStorage. Persists across sessions on this domain. */
const storage = {
  async get(key) {
    const v = localStorage.getItem(key);
    if (v === null) throw new Error("key not found: " + key);
    return { key, value: v };
  },
  async set(key, value) {
    localStorage.setItem(key, value);
    return { key, value };
  },
  async delete(key) {
    localStorage.removeItem(key);
    return { key, deleted: true };
  },
  async list(prefix = "") {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) keys.push(k);
    }
    return { keys, prefix };
  },
};


/* ============ WILDLANDS: Safari Saga v4 — The Long Trail ============
   Full region: 8 gyms across 8 biomes, Elite Four + Champion,
   badge-gated mythic guardians, ~110 species, day/night, puzzles. */

// ---------- TYPES ----------
const TYPE_COLORS = {
  Predator: "#c0392b", Aerial: "#5dade2", Aquatic: "#2471a3", Burrow: "#b7950b",
  Venom: "#8e44ad", Armor: "#707b7c", Swift: "#e67e22", Wild: "#27ae60", Ember: "#e85d1f",
};
const CHART = {
  Predator: { Swift: 2, Burrow: 2, Armor: 0.5, Venom: 0.5 },
  Aerial: { Venom: 2, Aquatic: 2, Armor: 0.5, Swift: 0.5 },
  Aquatic: { Burrow: 2, Predator: 2, Ember: 2, Aerial: 0.5 },
  Burrow: { Armor: 2, Venom: 2, Ember: 2, Aquatic: 0.5, Aerial: 0.5 },
  Venom: { Predator: 2, Burrow: 2, Armor: 0.5 },
  Armor: { Predator: 2, Aerial: 2, Aquatic: 0.5 },
  Swift: { Venom: 2, Aerial: 2, Predator: 0.5, Burrow: 0.5 },
  Wild: {},
  Ember: { Armor: 2, Venom: 2, Aquatic: 0.5, Burrow: 0.5 },
};
const eff = (atkType, defTypes) =>
  defTypes.reduce((m, t) => m * (CHART[atkType]?.[t] ?? 1), 1);

// ---------- MOVES ----------
// fx: poison | lowerAtk | raiseDef | heal · fxc: effect chance · pri: priority
const MOVES = {
  pounce: { n: "Pounce", t: "Predator", p: 45, acc: 100 },
  takedown: { n: "Takedown", t: "Predator", p: 60, acc: 95 },
  crunch: { n: "Crunch", t: "Predator", p: 65, acc: 95 },
  maul: { n: "Maul", t: "Predator", p: 72, acc: 90 },
  apexfang: { n: "Apex Fang", t: "Predator", p: 85, acc: 90 },
  peck: { n: "Peck", t: "Aerial", p: 40, acc: 100 },
  gust: { n: "Wing Gust", t: "Aerial", p: 50, acc: 95 },
  divebomb: { n: "Dive Bomb", t: "Aerial", p: 68, acc: 88 },
  stormdive: { n: "Storm Dive", t: "Aerial", p: 80, acc: 85 },
  hurricane: { n: "Hurricane", t: "Aerial", p: 85, acc: 85 },
  preen: { n: "Preen", t: "Aerial", p: 0, acc: 100, fx: "heal" },
  splash: { n: "Splash", t: "Aquatic", p: 45, acc: 100 },
  ripple: { n: "Rippling Rush", t: "Aquatic", p: 50, acc: 100 },
  bubblejet: { n: "Bubble Jet", t: "Aquatic", p: 55, acc: 95 },
  torrent: { n: "Torrent", t: "Aquatic", p: 68, acc: 90 },
  tidalcrash: { n: "Tidal Crash", t: "Aquatic", p: 85, acc: 90 },
  tunnel: { n: "Tunnel Rush", t: "Burrow", p: 45, acc: 100 },
  dig: { n: "Dig Strike", t: "Burrow", p: 58, acc: 95 },
  harmonystomp: { n: "Harmony Stomp", t: "Burrow", p: 75, acc: 95 },
  quake: { n: "Quake", t: "Burrow", p: 85, acc: 90 },
  toxinspray: { n: "Toxin Spray", t: "Venom", p: 45, acc: 100, fx: "poison", fxc: 0.3 },
  venombite: { n: "Venom Bite", t: "Venom", p: 58, acc: 95 },
  stingshot: { n: "Sting Shot", t: "Venom", p: 62, acc: 90, fx: "poison", fxc: 0.2 },
  neurotoxin: { n: "Neurotoxin", t: "Venom", p: 85, acc: 80, fx: "poison", fxc: 0.3 },
  venomcloud: { n: "Venom Cloud", t: "Venom", p: 0, acc: 90, fx: "poison", fxc: 1 },
  quillguard: { n: "Quill Jab", t: "Armor", p: 45, acc: 100 },
  shellbash: { n: "Shell Bash", t: "Armor", p: 55, acc: 95 },
  ironhide: { n: "Hide Slam", t: "Armor", p: 62, acc: 90 },
  siegehorn: { n: "Siege Horn", t: "Armor", p: 85, acc: 90 },
  harden: { n: "Harden", t: "Armor", p: 0, acc: 100, fx: "raiseDef" },
  quickdash: { n: "Quick Dash", t: "Swift", p: 45, acc: 100 },
  blitz: { n: "Blitz", t: "Swift", p: 60, acc: 95 },
  lightstep: { n: "Lightstep", t: "Swift", p: 78, acc: 95 },
  firststrike: { n: "First Strike", t: "Swift", p: 35, acc: 100, pri: 1 },
  scratch: { n: "Scratch", t: "Wild", p: 35, acc: 100 },
  tackle: { n: "Tackle", t: "Wild", p: 40, acc: 100 },
  bodyslam: { n: "Body Slam", t: "Wild", p: 65, acc: 92 },
  gigaslam: { n: "Giga Slam", t: "Wild", p: 88, acc: 85 },
  intimidate: { n: "Intimidate", t: "Wild", p: 0, acc: 100, fx: "lowerAtk" },
  flareup: { n: "Flare Up", t: "Ember", p: 55, acc: 95 },
  emberwing: { n: "Ember Wing", t: "Ember", p: 78, acc: 90 },
  magmaburst: { n: "Magma Burst", t: "Ember", p: 88, acc: 85 },
};
const maxPP = (mv) => (mv.p <= 45 ? 25 : mv.p <= 68 ? 15 : 10);

// ---------- AUDIO (chiptune synth, no external files) ----------
let AC = null;
let SOUND_ON = true;
const ac = () => {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
  if (AC && AC.state === "suspended") AC.resume();
  return AC;
};
const tone = (f, at, dur, o = {}) => {
  if (!SOUND_ON) return;
  const c = ac(); if (!c) return;
  const t = c.currentTime + at;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = o.type || "square";
  osc.frequency.setValueAtTime(f, t);
  if (o.slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, o.slide), t + dur);
  const v = o.vol ?? 0.1;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(v, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g); g.connect(c.destination);
  osc.start(t); osc.stop(t + dur + 0.03);
};
const HZ = (m) => 440 * Math.pow(2, (m - 69) / 12);
const SFX = {
  hit: () => tone(240, 0, 0.09, { slide: 120, vol: 0.11 }),
  super: () => { tone(500, 0, 0.07, { vol: 0.12 }); tone(750, 0.07, 0.1, { vol: 0.12 }); },
  weak: () => tone(140, 0, 0.12, { type: "triangle", vol: 0.1 }),
  miss: () => tone(600, 0, 0.18, { slide: 150, type: "sine", vol: 0.07 }),
  faint: () => tone(320, 0, 0.45, { slide: 60, type: "sawtooth", vol: 0.09 }),
  levelup: () => [523, 659, 784].forEach((f, i) => tone(f, i * 0.09, 0.09, { vol: 0.09 })),
  grow: () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.1, 0.12, { type: "triangle", vol: 0.09 })),
  learn: () => { tone(659, 0, 0.08, { vol: 0.09 }); tone(880, 0.09, 0.14, { vol: 0.09 }); },
  befriend: () => [659, 784, 988, 1319].forEach((f, i) => tone(f, i * 0.09, 0.1, { type: "triangle", vol: 0.09 })),
  treat: () => tone(880, 0, 0.06, { type: "sine", vol: 0.07 }),
  run: () => tone(300, 0, 0.15, { slide: 900, type: "sine", vol: 0.07 }),
  heal: () => { tone(587, 0, 0.12, { type: "sine", vol: 0.08 }); tone(880, 0.12, 0.2, { type: "sine", vol: 0.08 }); },
  victory: () => [[523, 0, 0.1], [523, 0.12, 0.1], [523, 0.24, 0.1], [659, 0.36, 0.12], [784, 0.5, 0.14], [1047, 0.66, 0.3]].forEach(([f, at, d]) => tone(f, at, d, { vol: 0.1 })),
  encounter: () => { tone(392, 0, 0.12, { vol: 0.1 }); tone(311, 0.13, 0.2, { vol: 0.1 }); },
  legend: () => [[220, 0, 0.3], [277, 0.25, 0.3], [330, 0.5, 0.35], [440, 0.85, 0.5]].forEach(([f, at, d]) => tone(f, at, d, { type: "triangle", vol: 0.11 })),
  buy: () => { tone(988, 0, 0.06, { vol: 0.08 }); tone(1319, 0.07, 0.1, { vol: 0.08 }); },
  puzzle: () => [392, 523, 659, 784].forEach((f, i) => tone(f, i * 0.11, 0.14, { type: "triangle", vol: 0.1 })),
  push: () => tone(90, 0, 0.2, { type: "triangle", vol: 0.12, slide: 60 }),
  poison: () => tone(180, 0, 0.16, { type: "sawtooth", vol: 0.06, slide: 140 }),
  badge: () => [[523, 0, 0.12], [659, 0.12, 0.12], [784, 0.24, 0.12], [1047, 0.38, 0.2], [784, 0.6, 0.1], [1047, 0.72, 0.4]].forEach(([f, at, d]) => tone(f, at, d, { type: "triangle", vol: 0.11 })),
};
const logSnd = (l) => (l.includes("✨") ? "grow" : l.includes("grew to Lv") ? "levelup" : l.includes("learn") ? "learn" : null);
const TRACKS = {
  town: {
    step: 0.3, type: "triangle", vol: 0.04,
    seq: [
      60, 64, 67, 64, 57, 60, 64, 60, 53, 57, 60, 57, 55, 59, 62, 59,
      60, 64, 67, 72, 69, 67, 64, 60, 53, 57, 60, 64, 62, 59, 55, 59,
      65, 69, 72, 69, 64, 67, 71, 67, 62, 65, 69, 65, 55, 59, 62, 67,
      60, 64, 67, 64, 69, 67, 64, 62, 60, 57, 53, 57, 60, 0, 55, 0,
    ],
    bass: [48, 45, 41, 43, 48, 45, 41, 43, 41, 48, 50, 43, 48, 45, 43, 48],
  },
  route: {
    step: 0.24, type: "square", vol: 0.032,
    seq: [
      60, 0, 67, 0, 65, 64, 62, 60, 62, 0, 69, 0, 67, 65, 64, 62,
      64, 0, 71, 0, 69, 67, 65, 64, 65, 0, 72, 0, 71, 69, 67, 65,
      60, 0, 67, 0, 65, 64, 62, 60, 62, 0, 69, 0, 67, 65, 64, 62,
      72, 71, 69, 67, 65, 64, 62, 60, 62, 64, 65, 67, 69, 67, 65, 62,
    ],
    bass: [48, 43, 45, 41, 52, 47, 50, 45, 48, 43, 45, 41, 48, 47, 45, 43],
  },
  battle: {
    step: 0.16, type: "square", vol: 0.03,
    seq: [
      57, 57, 60, 57, 62, 60, 57, 55, 57, 57, 60, 62, 64, 62, 60, 57,
      57, 57, 60, 57, 63, 62, 60, 58, 57, 57, 60, 62, 65, 64, 62, 60,
      69, 0, 69, 67, 65, 64, 62, 60, 62, 0, 62, 64, 65, 64, 62, 59,
      57, 60, 64, 60, 65, 64, 62, 60, 55, 58, 62, 58, 64, 62, 60, 57,
    ],
    bass: [45, 45, 41, 43, 45, 45, 41, 40, 41, 43, 45, 47, 45, 43, 41, 45],
  },
  cave: {
    step: 0.42, type: "sine", vol: 0.05,
    seq: [
      57, 0, 60, 0, 55, 0, 58, 0, 57, 0, 53, 0, 55, 0, 0, 0,
      57, 0, 62, 0, 60, 0, 58, 0, 55, 0, 53, 0, 50, 0, 0, 0,
    ],
    bass: [45, 43, 45, 41, 45, 43, 41, 50],
  },
  legend: {
    step: 0.19, type: "square", vol: 0.035,
    seq: [
      57, 60, 64, 69, 68, 0, 64, 0, 57, 60, 64, 69, 71, 0, 69, 0,
      72, 0, 71, 69, 68, 69, 71, 68, 64, 0, 60, 0, 57, 0, 0, 0,
    ],
    bass: [45, 45, 44, 44, 41, 43, 45, 45],
  },
  elite: {
    step: 0.14, type: "square", vol: 0.032,
    seq: [
      57, 60, 57, 62, 57, 64, 62, 60, 57, 60, 57, 62, 65, 64, 62, 60,
      58, 62, 58, 63, 58, 65, 63, 62, 58, 62, 58, 63, 67, 65, 63, 62,
      60, 64, 60, 65, 60, 67, 65, 64, 60, 64, 60, 65, 69, 67, 65, 64,
      69, 67, 65, 64, 62, 60, 58, 57, 55, 57, 58, 60, 62, 64, 65, 67,
    ],
    bass: [45, 45, 46, 46, 48, 48, 45, 43, 45, 45, 46, 46, 48, 48, 50, 43],
  },
};
const BGM = { timer: null, name: null, i: 0 };
const stopBGM = () => { if (BGM.timer) clearInterval(BGM.timer); BGM.timer = null; BGM.name = null; };
const playBGM = (name) => {
  if (BGM.name === name && BGM.timer) return;
  stopBGM();
  const tr = TRACKS[name]; if (!tr) return;
  BGM.name = name; BGM.i = 0;
  BGM.timer = setInterval(() => {
    if (!SOUND_ON) return;
    const idx = BGM.i % tr.seq.length;
    if (tr.bass && idx % 4 === 0) {
      const bm = tr.bass[(idx / 4) % tr.bass.length];
      if (bm) tone(HZ(bm), 0, tr.step * 3.4, { type: "triangle", vol: tr.vol * 0.9 });
    }
    const m = tr.seq[idx];
    if (m) tone(HZ(m), 0, tr.step * 0.9, { type: tr.type, vol: tr.vol });
    BGM.i++;
  }, tr.step * 1000);
};

