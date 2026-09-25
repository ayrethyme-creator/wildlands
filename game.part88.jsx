// ---------- Part 88: WEATHER THAT MEANS SOMETHING ----------
// Ayr, 2026-09-09, on making the world feel alive: yes to weather with
// consequences.
//
// The surprise on opening part67 was that THE GAME HAS NO WEATHER. It has
// ambience - flies at night in the wetland, dust in the savanna by day - and
// that table is fixed per zone and day phase, so a place looks exactly the same
// every time you stand in it. Nothing in the world changes except the hour.
//
// So this is not "make the rain matter". It is the rain.
//
// WHAT A WEATHER SYSTEM HAS TO GET RIGHT HERE
// -------------------------------------------
// It has to change while you are playing, or it is just another fixed table. It
// has to be the same for you now as it is in a minute if you walk out and back,
// or the world feels like it is flickering rather than turning. And it must
// never lock an animal away, which is part66's standing rule and the reason
// nothing below sets a weight to zero.
//
// Dealt from the save's own seed and the clock, in twenty-minute spans. No new
// save state at all: the same save asked at the same moment always answers the
// same, so it survives a reload, and it moves on by itself while you play. Each
// zone carries an offset so the whole world does not change over at once - rain
// arriving in the delta while the savanna stays clear is a front moving, and
// every zone flipping together is a light switch.
//
// The seed matters: it is why two saves have different weather at the same
// moment, and it is only reliable because the save now actually keeps its seed.
// That was broken until today - see the commit before this one.

const WX_SPAN = 20 * 60 * 1000;        // one spell of weather

/* WHAT EACH KIND DOES. Four dials, all of them gentle, because weather should
   change what today is like and never decide the game for you.

     rate    how much more or less you meet on a step
     types   which kinds of animal are about, by species type
     power   what a move of that type does while this weather holds
     tracks  whether the ground can still be read

   The numbers are deliberately small. The largest single effect here is rain
   putting amphibians about at 1.6, and the largest battle effect is 15%. This
   is a thumb on the scale, not a second type chart. */
const WX = {
  clear: {
    n: "Clear", em: "☀️", rate: 1, types: {}, power: {}, tracks: true,
    line: "Clear. Ordinary weather, and ordinary animals about in it.",
  },
  rain: {
    n: "Rain", em: "🌧️", rate: 1.15,
    types: { Aquatic: 1.45, Venom: 1.25, Bug: 0.7, Aerial: 0.75 },
    power: { Aquatic: 1.15, Ember: 0.8 }, tracks: false,
    line: "Rain. Frogs and toads breed in it and come out in numbers, and everything that eats them follows. Prints wash out as fast as they are made.",
  },
  storm: {
    n: "Storm", em: "⛈️", rate: 0.8,
    types: { Aerial: 0.45, Aquatic: 1.3, Predator: 1.15 },
    power: { Aquatic: 1.15, Ember: 0.7, Aerial: 0.85 }, tracks: false,
    line: "A storm. Birds are grounded and sheltering; the hunters that do not mind wet are the ones still working.",
  },
  mist: {
    n: "Mist", em: "🌫️", rate: 1.05,
    types: { Night: 1.35, Predator: 1.2, Aerial: 0.8 },
    power: { Night: 1.15 }, tracks: true,
    line: "Mist. You will hear things before you see them, and so will they.",
  },
  haze: {
    n: "Heat haze", em: "🥵", rate: 0.7,
    types: { Burrow: 1.4, Armor: 1.2, Swift: 0.75 },
    power: { Ember: 1.15, Ice: 0.8 }, tracks: true,
    line: "Heat. Most things are lying up in whatever shade they can find and will not move until evening.",
  },
  dust: {
    n: "Dust", em: "🌪️", rate: 0.85,
    types: { Burrow: 1.35, Armor: 1.25, Aerial: 0.6 },
    power: { Aerial: 0.85 }, tracks: false,
    line: "Blown dust. It fills a print in minutes and it keeps the birds down.",
  },
  snow: {
    n: "Snow", em: "🌨️", rate: 1.05,
    types: { Ice: 1.5, Aerial: 0.8, Bug: 0.5 },
    power: { Ice: 1.15, Ember: 0.85 }, tracks: true,
    line: "Snow. Fresh snow is the best ground in the world for reading who has passed.",
  },
  blizzard: {
    n: "Blizzard", em: "❄️", rate: 0.65,
    types: { Ice: 1.6, Aerial: 0.35, Bug: 0.4 },
    power: { Ice: 1.2, Ember: 0.75 }, tracks: false,
    line: "A blizzard. Almost everything that can be somewhere else is somewhere else.",
  },
  ash: {
    n: "Ashfall", em: "🌋", rate: 0.85,
    types: { Ember: 1.4, Aerial: 0.6 },
    power: { Ember: 1.15 }, tracks: false,
    line: "Ash on the wind. It settles on everything and hides whatever walked here.",
  },
};

/* WHICH ZONES GET WHICH WEATHER, and how often.

   `none` is not an oversight in any of the six places it appears. A cave and
   the abyss have no sky. The arena is a floor with people standing on it. The
   Hearth is indoors. And the Vigil is a memorial to animals that are gone -
   part67 exempts it from ambience by name and says it must stay that way, so it
   is exempt from weather too. */
const WX_CLIMATE = {
  savannaz: "dry", savanna: "dry", desert: "dry", outbackz: "dry",
  highveld: "dry", fossil: "dry",
  wetland: "wet", jungle: "wet", grove: "wet", canopyz: "wet", hopez: "wet",
  alpine: "cold", summit: "cold", polarz: "cold", tundraz: "cold", taigaz: "cold",
  kelpz: "sea", reefz: "sea", oceanz: "sea",
  volcanic: "fire",
  cavezone: "none", abyssz: "none", rift: "none", vigilz: "none",
  hearth: "none", arena: "none",
};

// Weighted, and clear is the commonest everywhere. A world where it is always
// doing something is as flat as one where it never does.
const WX_CLIMATES = {
  dry:  [["clear", 0.55], ["haze", 0.20], ["dust", 0.15], ["rain", 0.10]],
  wet:  [["clear", 0.42], ["rain", 0.30], ["mist", 0.16], ["storm", 0.12]],
  cold: [["clear", 0.45], ["snow", 0.30], ["mist", 0.17], ["blizzard", 0.08]],
  sea:  [["clear", 0.50], ["rain", 0.22], ["storm", 0.14], ["mist", 0.14]],
  fire: [["clear", 0.50], ["haze", 0.30], ["ash", 0.20]],
};

const wxHash = (a, b) => {
  let h = Math.imul((a | 0) ^ 0x27d4eb2f, 0x9e3779b1);
  for (let i = 0; i < b.length; i++) h = Math.imul(h ^ b.charCodeAt(i), 0x85ebca6b);
  h ^= h >>> 15;
  return (h >>> 0) / 4294967295;
};

// Each zone runs on its own offset, so weather arrives somewhere before it
// arrives everywhere.
const wxOffset = (zone) => Math.floor(wxHash(7919, zone) * WX_SPAN);

/* The weather in one zone, right now. Pure: seed and clock in, a key out.

   `at` is injectable so this can be asked what next Tuesday looks like without
   waiting for it - which is the only way a table like the one at the bottom of
   this file can be checked at all. */
const weatherKey = (zone, seed, at) => {
  const climate = WX_CLIMATE[zone];
  if (!climate || climate === "none") return null;
  const table = WX_CLIMATES[climate] || WX_CLIMATES.dry;
  const span = Math.floor(((at || Date.now()) + wxOffset(zone)) / WX_SPAN);
  const r = wxHash(seed || 1, zone + "|" + span);
  let acc = 0;
  for (const [k, w] of table) { acc += w; if (r < acc) return k; }
  return "clear";
};

const weatherNow = (zone, seed, at) => {
  const k = weatherKey(zone, seed, at);
  return k ? { key: k, ...WX[k] } : null;
};

/* The four things the rest of the game asks it.

   Every one takes the state rather than reading a global, and every one answers
   harmlessly when there is no weather - a cave, an old save, a zone nobody has
   classified yet - because a world that has never had weather in it should not
   start throwing when it gets some. */
const weatherHere = (st) => {
  if (!st || !st.map || typeof MAPS === "undefined") return null;
  const m = MAPS[st.map];
  if (!m) return null;
  return weatherNow(m.zone, st.runSeed);
};

// How much more or less you meet, per step.
const weatherRate = (st) => {
  const w = weatherHere(st);
  return w ? w.rate : 1;
};

// Which animals are about. Applied to a pool AFTER part66's ecology, and
// floored the same way part66 floors everything, so no weather can ever take a
// species off the map - it can only make it a worse or better afternoon for it.
const weatherPool = (pool, st) => {
  if (!pool || !pool.length) return pool;
  const w = weatherHere(st);
  if (!w || !Object.keys(w.types).length) return pool;
  return pool.map(([sp, n]) => {
    const types = (DEX[sp] && DEX[sp].t) || [];
    let mult = 1;
    types.forEach((t) => { if (w.types[t]) mult *= w.types[t]; });
    return [sp, Math.max(0.3, n * mult)];
  });
};

// What a move does in this weather. One multiplier, read by dmgCalc.
const weatherPower = (mv, st) => {
  const w = weatherHere(st);
  if (!w || !mv || !w.power) return 1;
  return w.power[mv.t] || 1;
};

// Can the ground still be read? Rain, dust, ash and a blizzard all take a print
// away, which is the honest answer and also gives readTracks a reason to say
// something different from time to time.
const weatherTracks = (st) => {
  const w = weatherHere(st);
  return w ? w.tracks !== false : true;
};

/* WHAT IS IN THE AIR, on top of what part67 already puts there.

   Rain and snow are drawn as specks like everything else, using part67's own
   builder so they inherit its sizing, timing and stagger rather than being a
   second system that has to be kept in step with the first. */
const WX_SPECKS = {
  rain:     [{ kind: "rain", when: "any", n: 26, c: "rgba(190,222,255,.75)" }],
  storm:    [{ kind: "rain", when: "any", n: 40, c: "rgba(170,205,245,.85)" }],
  snow:     [{ kind: "snow", when: "any", n: 20, c: "#f2f7ff" }],
  blizzard: [{ kind: "snow", when: "any", n: 38, c: "#ffffff" }],
  dust:     [{ kind: "dust", when: "any", n: 22, c: "#d9c49a" }],
  ash:      [{ kind: "dust", when: "any", n: 20, c: "#b9b0a6" }],
  mist:     [],
  haze:     [],
  clear:    [],
};

const weatherSpecks = (zone, seed) => {
  const k = weatherKey(zone, seed);
  // Rain and snow are no longer specks on the map: see weatherFall below.
  const specs = k && WX_SPECKS[k] && WX_SPECKS[k].filter((s) => s.kind !== "rain" && s.kind !== "snow");
  if (!specs || !specs.length || typeof ambientSpecks !== "function") return [];
  const out = [];
  specs.forEach((spec, si) => out.push(...ambientSpecks(spec, 6101 + si * 313 + zone.length * 11)));
  return out;
};

/* RAIN AND SNOW THAT FALL. Ayr, 2026-09-25: "The rain and snow needs to be
   worked on. They just look like floating blue or white lines."

   They were floating. Each drop was a speck on the map told to fall "120% of
   its own height" - and a raindrop is nine pixels tall, so it sank about
   eleven pixels over five to fourteen seconds. A short blue line, hanging.

   Now they belong to the SCREEN, the way weather does in Fire Red: a layer on
   the camera that the drops fall straight through, top to bottom, fast for
   rain and slow and swaying for snow. Each drop has a depth - near ones are
   longer, brighter and quicker, far ones fainter and slower - which is most of
   what makes a sheet of rain read as rain rather than a pattern. Rain also
   lands: small rings open and vanish on the ground. And the sky dims a little
   under rain, more under a storm.

   Everything moves by transform only, so the graphics chip carries it and a
   downpour costs the walk nothing (see the grass sway, part5, for what
   happens otherwise). --fall is the height of the camera plus a margin, set
   on the layer in part5. */
const WX_FALL = {
  rain:     { kind: "rain", n: 46, slant: 0.16, dur: [0.52, 0.8],  splash: 14, dim: 0.12 },
  storm:    { kind: "rain", n: 78, slant: 0.32, dur: [0.36, 0.52], splash: 24, dim: 0.22 },
  snow:     { kind: "snow", n: 34, slant: 0.1,  dur: [5.5, 10] },
  blizzard: { kind: "snow", n: 72, slant: 0.75, dur: [1.8, 3.2], dim: 0.06 },
};

const fallSpecks = (f, salt) => {
  const R = (i, s) => ambSeed(i, salt + s);
  const deg = Math.atan(f.slant) * 180 / Math.PI;
  const drops = [];
  for (let i = 0; i < f.n; i++) {
    const depth = R(i, 1);                       // 0 far .. 1 near
    const dur = f.dur[0] + (f.dur[1] - f.dur[0]) * (1 - depth) * (0.8 + 0.4 * R(i, 5));
    // Start far enough right that the slant still carries them across the
    // whole view, and above the top so none pops into being mid-screen.
    const left = -4 + R(i, 2) * (104 + f.slant * 100);
    const base = {
      left: left.toFixed(2) + "%",
      animationDuration: dur.toFixed(2) + "s",
      animationDelay: (-R(i, 3) * dur).toFixed(2) + "s",
      "--dx": `calc(var(--fall) * ${(-f.slant).toFixed(3)})`,
    };
    if (f.kind === "rain") {
      const len = 0.38 + 0.4 * depth;           // in tiles
      const a = (0.4 + 0.5 * depth).toFixed(2);
      drops.push({ key: "r" + i, cls: "wx-rain", style: { ...base,
        top: `calc(var(--tile) * -${(len + 0.4).toFixed(2)})`,
        width: depth > 0.6 ? "1.6px" : "1.1px", height: `calc(var(--tile) * ${len.toFixed(2)})`,
        background: `linear-gradient(180deg, rgba(214,232,255,0), rgba(222,238,255,${a}))`,
        borderRadius: "1px", "--rot": deg.toFixed(1) + "deg" } });
    } else {
      const size = 2.2 + 4.2 * depth;           // px
      const a = (0.55 + 0.4 * depth).toFixed(2);
      drops.push({ key: "s" + i, cls: "wx-snow", style: { ...base,
        top: `-${(size + 4).toFixed(1)}px`, width: size.toFixed(1) + "px", height: size.toFixed(1) + "px",
        // A faint blue-grey rim, or a white flake over a white snowfield -
        // the alpine maps - is not there at all.
        background: `radial-gradient(circle, rgba(255,255,255,${a}) 36%, rgba(236,244,255,${a}) 50%, rgba(110,132,165,.45) 62%, rgba(110,132,165,0) 76%)`,
        borderRadius: "50%", "--sw": (4 + 10 * R(i, 4)).toFixed(1) + "px" } });
    }
  }
  const splashes = [];
  for (let i = 0; i < (f.splash || 0); i++) {
    const dur = 0.8 + 0.9 * R(i, 11);
    splashes.push({ key: "p" + i, cls: "wx-splash", style: {
      left: (3 + R(i, 12) * 92).toFixed(2) + "%", top: (12 + R(i, 13) * 84).toFixed(2) + "%",
      width: "calc(var(--tile) * .34)", height: "calc(var(--tile) * .13)",
      animationDuration: dur.toFixed(2) + "s", animationDelay: (-R(i, 14) * dur).toFixed(2) + "s" } });
  }
  return { drops, splashes, dim: f.dim || 0 };
};

// What is falling on this screen, if anything: the weather first, and failing
// that the snow some zones always have (part67's alpine, tundra and the rest,
// whose snow used to hang in the air exactly like the rain did).
// Built once per zone and kind: part5 asks on every step, and the answer only
// changes when the weather or the zone does.
const WX_FALL_CACHE = {};
const weatherFall = (zone, seed) => {
  const k = weatherKey(zone, seed);
  const ck = zone + "|" + (k || "");
  if (ck in WX_FALL_CACHE) return WX_FALL_CACHE[ck];
  let out = null;
  if (k && WX_FALL[k]) out = { key: k, ...fallSpecks(WX_FALL[k], 7301 + zone.length * 13) };
  else {
    const snow = ((typeof AMBIENT !== "undefined" && AMBIENT[zone]) || []).find((s) => s.kind === "snow");
    if (snow) out = { key: "ambsnow", ...fallSpecks({ ...WX_FALL.snow, n: Math.round(snow.n * 1.4) }, 7411 + zone.length * 13) };
  }
  WX_FALL_CACHE[ck] = out;
  return out;
};

/* A CHECK THAT RUNS EVERY TIME THE GAME STARTS.

   Two things can be wrong here in a way nobody would notice for months: a zone
   the world uses that this file has never heard of, which would silently have
   no weather for ever, and a kind named in a climate table that has no entry in
   WX, which would throw the moment that hour came round. Both are cheap to ask
   about and impossible to spot by reading.

   The distribution is sampled rather than reasoned about, for the same reason
   part85 simulated battles instead of arguing about damage: a weighted table is
   easy to get wrong in a way that only shows up over a day of play. */
{
  const zones = (typeof MAPS !== "undefined")
    ? [...new Set(Object.values(MAPS).map((m) => m.zone).filter(Boolean))] : [];
  const unknown = zones.filter((z) => !(z in WX_CLIMATE));
  const badKind = [];
  Object.entries(WX_CLIMATES).forEach(([c, table]) => {
    table.forEach(([k]) => { if (!WX[k]) badKind.push(c + ":" + k); });
    const total = table.reduce((s, [, w]) => s + w, 0);
    if (Math.abs(total - 1) > 0.001) badKind.push(c + ":weights=" + total.toFixed(3));
  });

  // A day of weather in every zone, sampled at the span it actually turns over.
  const seen = {};
  let spells = 0;
  const t0 = Date.now();
  zones.forEach((z) => {
    if (!WX_CLIMATE[z] || WX_CLIMATE[z] === "none") return;
    for (let i = 0; i < 72; i++) {
      const k = weatherKey(z, 12345, t0 + i * WX_SPAN);
      seen[k] = (seen[k] || 0) + 1;
      spells++;
    }
  });
  const share = Object.entries(seen).sort((a, b) => b[1] - a[1])
    .map(([k, n]) => k + " " + Math.round((n / spells) * 100) + "%").join(", ");

  console.log("[part88] weather: " + zones.length + " zones, "
    + zones.filter((z) => WX_CLIMATE[z] && WX_CLIMATE[z] !== "none").length + " of them under a sky"
    + " | a spell lasts " + (WX_SPAN / 60000) + " min"
    + " | over a day: " + share
    + (unknown.length ? " | ZONE WITH NO CLIMATE: " + unknown.join(", ") : "")
    + (badKind.length ? " | BROKEN CLIMATE TABLE: " + badKind.join(", ") : ""));
}
