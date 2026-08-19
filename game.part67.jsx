// ---------- Part 67: WEATHER, AND THINGS IN THE AIR ----------
// Ayr, after the lanterns: "any ideas for more cool effects and fun objects?"
//
// The map moves a little already - grass sways, water shimmers, a lamp
// flickers - but nothing moves through it. Everything that stirs is nailed to
// a tile. Air is what is missing: fireflies over a meadow after dark, leaves
// coming down in the grove, snow drifting across the pass.
//
// All of it is CSS on a handful of spans laid over the map. No tiles are
// touched, no state is kept, and nothing runs per frame in JavaScript - the
// browser animates them and the game does not know they exist. Turning the
// whole layer off is one line, and prefers-reduced-motion already stops every
// animation in the game, this one included.

// What is in the air where, and when. `when` is checked against the day phase,
// so a firefly is a night animal and a falling leaf is not.
//
// Kept deliberately thin: two or three specks per screen reads as air moving.
// Twenty reads as a screensaver, and on a phone it reads as a fault.
const AMBIENT = {
  meadow:   [{ kind: "fly",   when: "night", n: 9,  c: "#ffe9a3" }],
  savanna:  [{ kind: "fly",   when: "night", n: 7,  c: "#ffe1a0" },
             { kind: "dust",  when: "day",   n: 6,  c: "#e8d9b8" }],
  wetland:  [{ kind: "fly",   when: "night", n: 10, c: "#d8f0a8" }],
  jungle:   [{ kind: "fly",   when: "night", n: 8,  c: "#bff0c0" },
             { kind: "leaf",  when: "day",   n: 5,  c: "#5e8a58" }],
  grove:    [{ kind: "fly",   when: "night", n: 12, c: "#c8f0a0" },
             { kind: "leaf",  when: "day",   n: 8,  c: "#b8794a" }],
  alpine:   [{ kind: "snow",  when: "any",   n: 14, c: "#ffffff" }],
  summit:   [{ kind: "snow",  when: "any",   n: 10, c: "#eef4fa" }],
  desert:   [{ kind: "dust",  when: "day",   n: 8,  c: "#e8d0a3" }],
  volcanic: [{ kind: "ember", when: "any",   n: 9,  c: "#ffb055" }],
  highveld: [{ kind: "dust",  when: "day",   n: 5,  c: "#d9cbb0" }],
};

// Deterministic scatter. A firefly that jumps to a new place on every redraw is
// worse than no firefly, and Math.random() in a render does exactly that.
const ambSeed = (i, salt) => {
  let h = Math.imul(i + 1, 374761393) ^ Math.imul(salt, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};

// One spec becomes a list of specks, each with its own position, size, delay
// and duration. Everything here is a style object; part5 only has to render it.
const ambientSpecks = (spec, salt) => {
  const out = [];
  for (let i = 0; i < spec.n; i++) {
    const x = ambSeed(i, salt) * 100;
    const y = ambSeed(i, salt + 17) * 100;
    const dur = 5 + ambSeed(i, salt + 33) * 9;
    const delay = -ambSeed(i, salt + 51) * dur;      // negative: already in motion
    const size = spec.kind === "snow" ? 2 + ambSeed(i, salt + 7) * 2.4
      : spec.kind === "leaf" ? 3 + ambSeed(i, salt + 7) * 2
      : 1.8 + ambSeed(i, salt + 7) * 1.8;
    out.push({
      key: spec.kind + i,
      cls: "amb amb-" + spec.kind,
      style: {
        left: x.toFixed(2) + "%",
        top: y.toFixed(2) + "%",
        width: size.toFixed(1) + "px",
        height: size.toFixed(1) + "px",
        background: spec.c,
        animationDuration: dur.toFixed(2) + "s",
        animationDelay: delay.toFixed(2) + "s",
        // Fireflies and embers glow; leaves, snow and dust are lit by the sky.
        boxShadow: (spec.kind === "fly" || spec.kind === "ember")
          ? `0 0 ${(size * 2.4).toFixed(1)}px ${spec.c}` : undefined,
        borderRadius: spec.kind === "leaf" ? "60% 10% 60% 10%" : "50%",
      },
    });
  }
  return out;
};

// Everything currently in the air on this map. `phase` is the day phase the
// world clock is already keeping, so this follows the same dawn/dusk/night the
// lighting does rather than inventing its own.
const ambientFor = (zone, phase) => {
  const specs = AMBIENT[zone];
  if (!specs) return [];
  const night = phase === "night";
  const out = [];
  specs.forEach((spec, si) => {
    if (spec.when === "night" && !night) return;
    if (spec.when === "day" && night) return;
    out.push(...ambientSpecks(spec, si * 101 + zone.length * 7));
  });
  return out;
};

console.log("[part67] air:", Object.keys(AMBIENT).length, "zones with weather |",
  Object.values(AMBIENT).reduce((n, a) => n + a.length, 0), "kinds in total");
