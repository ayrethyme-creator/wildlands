// ---------- Part 57: BUILDINGS AND PROPS ----------
// The last of the emoji. After the terrain in part55 and the people in part56
// what was left were the things you walk up to and use: huts, the clinic, the
// shop, the arena, signposts, lamps, fallen logs, the torii gate.
//
// These matter more per tile than the terrain did. A signpost is something you
// press A on, a clinic is where you go when your team is hurt, and both were
// rendered in a glyph that changes shape on every device. A player who learns
// that the red-cross building is the clinic should see the same building on
// their friend's phone.
//
// Same mechanism throughout: an SVG string cached as a data URI, returned as
// one background image, null when there is no drawn form.
//
// Buildings keep fixed colours rather than taking the zone palette. A clinic
// should be the same clinic in the desert and in the snow - it is a landmark,
// and a landmark that changes colour by region stops being one. Props do take
// the zone's ground colour, because a log lying on sand should sit on sand.

const PROP_OUT = "#f6f2e8";
const PROP_DARK = "#2a2620";

const propWrap = (bg, inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 32 32">` +
  `<rect width="32" height="32" fill="${bg}"/>` +
  `<ellipse cx="16" cy="28.6" rx="11" ry="3" fill="#000" opacity=".22"/>` + inner + `</svg>`;

const PROP_SHAPES = {
  // ---- buildings ----
  hut: (bg) => {
    const wall = "#c9a878", thatch = "#a3773c", door = "#5c4028";
    return propWrap(bg,
      `<rect x="7" y="15" width="18" height="14" fill="${wall}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M4,16 L16,4 L28,16 Z" fill="${thatch}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M8,15 L16,7 L24,15" stroke="${sh(thatch, -0.3)}" stroke-width="1" fill="none"/>` +
      `<rect x="13" y="20" width="6" height="9" rx="3" fill="${door}" stroke="${PROP_OUT}" stroke-width=".8"/>`);
  },
  clinic: (bg) => {
    const wall = "#f2ede0", roof = "#c0392b";
    return propWrap(bg,
      `<rect x="6" y="13" width="20" height="16" fill="${wall}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M4,14 L16,5 L28,14 Z" fill="${roof}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      // the cross is the whole point of the building
      `<rect x="14.6" y="7.4" width="2.8" height="7" fill="${wall}"/>` +
      `<rect x="12.4" y="9.6" width="7.2" height="2.6" fill="${wall}"/>` +
      `<rect x="13" y="21" width="6" height="8" rx="1" fill="#8aa8c0" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<rect x="7.6" y="16" width="4.4" height="3.4" fill="#8aa8c0"/>` +
      `<rect x="20" y="16" width="4.4" height="3.4" fill="#8aa8c0"/>`);
  },
  shop: (bg) => {
    const wall = "#e8dcc3", roof = "#2d7d5a";
    return propWrap(bg,
      `<rect x="6" y="13" width="20" height="16" fill="${wall}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M4,14 L16,5 L28,14 Z" fill="${roof}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      // an awning, which is what makes a shop look like a shop
      `<path d="M5.6,16.4 L26.4,16.4 L26.4,20 L5.6,20 Z" fill="${roof}"/>` +
      `<g fill="${wall}" opacity=".85">` +
      [7.6, 12.4, 17.2, 22].map((x) => `<rect x="${x}" y="16.4" width="2.4" height="3.6"/>`).join("") + `</g>` +
      `<rect x="13" y="22" width="6" height="7" rx="1" fill="#6b4a2e" stroke="${PROP_OUT}" stroke-width=".8"/>`);
  },
  arena: (bg) => {
    const stone = "#b0a89a", roof = "#7a6a52";
    return propWrap(bg,
      `<path d="M4,29 L4,14 L28,14 L28,29 Z" fill="${stone}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M2,14 L16,4 L30,14 Z" fill="${roof}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      // columns, so it reads as somewhere formal
      `<g fill="${sh(stone, -0.26)}">` +
      [6.6, 11.4, 19, 23.8].map((x) => `<rect x="${x}" y="16" width="2.6" height="13"/>`).join("") + `</g>` +
      `<path d="M14,29 L14,20 a2,2 0 0 1 4,0 L18,29 Z" fill="${PROP_DARK}"/>`);
  },
  tent: (bg) => {
    const cloth = "#b5563f", pole = "#6b5442";
    return propWrap(bg,
      `<path d="M4,29 L16,7 L28,29 Z" fill="${cloth}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M16,7 L16,29" stroke="${sh(cloth, -0.3)}" stroke-width="1"/>` +
      `<path d="M12,29 Q16,17 20,29 Z" fill="${PROP_DARK}"/>` +
      `<path d="M16,7 L16,4" stroke="${pole}" stroke-width="1.4"/>`);
  },

  // ---- props ----
  sign: (bg) => {
    const wood = "#a3773c", face = "#d9b866";
    return propWrap(bg,
      `<rect x="14.6" y="16" width="2.8" height="13" fill="${sh(wood, -0.3)}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<rect x="5.5" y="7" width="21" height="11" rx="1.5" fill="${face}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<g stroke="${sh(wood, -0.34)}" stroke-width="1.3" stroke-linecap="round">` +
      `<path d="M8.5,11 H21"/><path d="M8.5,14 H17"/></g>`);
  },
  log: (bg) => {
    const bark = "#7a5c3a", ring = "#c9a878";
    return propWrap(bg,
      `<rect x="2" y="16" width="28" height="11" rx="5.5" fill="${bark}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<rect x="2" y="16" width="28" height="3.6" rx="1.8" fill="${sh(bark, 0.24)}" opacity=".6"/>` +
      `<ellipse cx="26.5" cy="21.5" rx="3.4" ry="5.2" fill="${ring}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<ellipse cx="26.5" cy="21.5" rx="1.4" ry="2.4" fill="${sh(ring, -0.34)}"/>`);
  },
  lamp: (bg) => {
    const post = "#4a4a52", glass = "#f2e0a0";
    return propWrap(bg,
      `<rect x="14.8" y="12" width="2.4" height="17" fill="${post}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="16" cy="9" rx="7" ry="5.6" fill="${glass}" opacity=".28"/>` +
      `<path d="M11.6,12 L13,5.6 L19,5.6 L20.4,12 Z" fill="${glass}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<rect x="11.2" y="3.6" width="9.6" height="2.4" rx="1" fill="${post}" stroke="${PROP_OUT}" stroke-width=".7"/>`);
  },
  lantern: (bg) => {
    const body = "#c98a3a", flame = "#f2c14a";
    return propWrap(bg,
      `<path d="M11,26 L11,14 Q16,9 21,14 L21,26 Z" fill="${body}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<ellipse cx="16" cy="18" rx="3.4" ry="4.4" fill="${flame}"/>` +
      `<rect x="9.4" y="26" width="13.2" height="3" rx="1.2" fill="${sh(body, -0.34)}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M16,9 L16,5.6" stroke="${sh(body, -0.34)}" stroke-width="1.4"/>`);
  },
  gate: (bg) => {
    const wood = "#b5563f";
    return propWrap(bg,
      `<rect x="7.6" y="10" width="3.2" height="19" fill="${wood}" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<rect x="21.2" y="10" width="3.2" height="19" fill="${wood}" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<path d="M3.4,9 Q16,5.4 28.6,9 L28.6,11.6 Q16,8.4 3.4,11.6 Z" fill="${wood}" stroke="${PROP_OUT}" stroke-width=".9" stroke-linejoin="round"/>` +
      `<rect x="6" y="14" width="20" height="2.6" fill="${wood}" stroke="${PROP_OUT}" stroke-width=".8"/>`);
  },
  marker: (bg) => {
    const stone = "#d0cabc";
    return propWrap(bg,
      `<path d="M10,27 L11.4,20 L20.6,20 L22,27 Z" fill="${stone}" stroke="${PROP_OUT}" stroke-width=".9" stroke-linejoin="round"/>` +
      `<rect x="12.6" y="15" width="6.8" height="5.6" rx="1" fill="${sh(stone, 0.1)}" stroke="${PROP_OUT}" stroke-width=".8"/>`);
  },
  idol: (bg) => {
    const stone = "#9a9184", dark = sh("#9a9184", -0.34);
    return propWrap(bg,
      `<path d="M9,29 L10,12 q6,-9 12,0 L23,29 Z" fill="${stone}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M9,29 L10,12 q3,-4.5 6,-5.2 L15,29 Z" fill="${sh(stone, 0.16)}" opacity=".6"/>` +
      `<ellipse cx="13.4" cy="16" rx="1.7" ry="2.3" fill="${dark}"/>` +
      `<ellipse cx="19.4" cy="16" rx="1.7" ry="2.3" fill="${dark}"/>` +
      `<path d="M13.4,23 q2.6,2 5.2,0" stroke="${dark}" stroke-width="1.3" fill="none" stroke-linecap="round"/>`);
  },

  // ---- ground decoration ----
  bloom: (bg, tint) => {
    const petal = tint || "#e8d447", core = sh(tint || "#e8d447", -0.34), stem = "#4a7a3c";
    return propWrap(bg,
      [[10, 22], [22, 20], [16, 26]].map(([x, y], i) =>
        `<path d="M${x},29 q${i - 1},-4 0,-6" stroke="${stem}" stroke-width="1.3" fill="none"/>` +
        [0, 72, 144, 216, 288].map((a) =>
          `<ellipse cx="${x}" cy="${y}" rx="1.5" ry="3" fill="${petal}" transform="rotate(${a} ${x} ${y}) translate(0 -2.6)"/>`).join("") +
        `<circle cx="${x}" cy="${y}" r="1.5" fill="${core}"/>`).join(""));
  },
  flame: (bg) => propWrap(bg,
    `<path d="M16,29 q-7,-4 -5,-11 q1,3 3,3 q-2,-6 4,-10 q-1,5 3,8 q2,-2 2,-4 q3,7 -2,12 q-2,2 -5,2 Z" fill="#e8703a"/>` +
    `<path d="M16,28 q-4,-3 -3,-7 q1,2 2,2 q-1,-4 3,-6 q0,4 2,6 q1,4 -4,5 Z" fill="#f2c14a"/>`),
  sparkle: (bg) => propWrap(bg,
    [[16, 14, 8], [9, 22, 4.5], [23, 21, 4]].map(([x, y, r]) =>
      `<path d="M${x},${y - r} Q${x + r * 0.22},${y - r * 0.22} ${x + r},${y} Q${x + r * 0.22},${y + r * 0.22} ${x},${y + r} Q${x - r * 0.22},${y + r * 0.22} ${x - r},${y} Q${x - r * 0.22},${y - r * 0.22} ${x},${y - r} Z" fill="#f2e8b0" opacity=".9"/>`).join("")),
  mushroom: (bg) => propWrap(bg,
    `<rect x="14.4" y="18" width="3.2" height="10" rx="1.4" fill="#e8dcc3" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<path d="M6,19 q0,-10 10,-10 q10,0 10,10 Z" fill="#b5563f" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<circle cx="11.6" cy="14" r="1.8" fill="#f2ede0"/><circle cx="19.6" cy="12.6" r="2.1" fill="#f2ede0"/>`),
  candle: (bg) => propWrap(bg,
    `<rect x="13.4" y="13" width="5.2" height="15" rx="1.4" fill="#e8dcc3" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<rect x="10.6" y="27" width="10.8" height="2.4" rx="1" fill="#a89a7d" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<path d="M16,12.6 q-2.6,-2 -0.6,-4.6 q0.4,1.4 1.4,1.6 q-0.8,-2.6 1.4,-4 q-0.4,2.4 1,3.4 q1.4,2.6 -3.2,3.6 Z" fill="#f2c14a"/>` +
    `<ellipse cx="16" cy="9.6" rx="5" ry="5.6" fill="#f2c14a" opacity=".2"/>`),
  bone: (bg) => propWrap(bg,
    `<g fill="#eae4d4" stroke="${PROP_OUT}" stroke-width=".8">` +
    `<rect x="9" y="17" width="14" height="4.4" rx="2.2"/>` +
    `<circle cx="9" cy="16.4" r="2.9"/><circle cx="9" cy="22" r="2.9"/>` +
    `<circle cx="23" cy="16.4" r="2.9"/><circle cx="23" cy="22" r="2.9"/></g>`),
  bee: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="19" rx="7" ry="5.4" fill="#e8c547" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<g fill="${PROP_DARK}"><rect x="13.4" y="14.4" width="2.6" height="9.2"/><rect x="17.8" y="15" width="2.4" height="8"/></g>` +
    `<circle cx="9.6" cy="18" r="3" fill="${PROP_DARK}"/>` +
    `<ellipse cx="15" cy="12.6" rx="4.4" ry="2.6" fill="#f2f8ff" opacity=".75" transform="rotate(-18 15 12.6)"/>` +
    `<ellipse cx="20" cy="12.6" rx="4" ry="2.4" fill="#f2f8ff" opacity=".6" transform="rotate(16 20 12.6)"/>`),
  honey: (bg) => propWrap(bg,
    `<path d="M9.6,28 L10.6,15 q5.4,-3 10.8,0 L22.4,28 Z" fill="#d99a2b" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<rect x="8.6" y="12.6" width="14.8" height="3.4" rx="1.6" fill="#a3773c" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<path d="M11.6,21 q4.4,2.6 8.8,0 L20.4,26 q-4.4,2 -8.8,0 Z" fill="#f2c14a" opacity=".7"/>`),
  bell: (bg) => propWrap(bg,
    `<path d="M9,25 q0,-13 7,-13 q7,0 7,13 Z" fill="#c9a43a" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<rect x="7.6" y="24.6" width="16.8" height="2.6" rx="1.2" fill="${sh("#c9a43a", -0.3)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<circle cx="16" cy="28.4" r="1.8" fill="${sh("#c9a43a", -0.4)}"/>` +
    `<path d="M12,22 q0,-8 4,-9" stroke="${sh("#c9a43a", 0.34)}" stroke-width="1.4" fill="none" opacity=".8"/>`),
  clipboard: (bg) => propWrap(bg,
    `<rect x="8" y="7" width="16" height="21" rx="1.6" fill="#a3773c" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<rect x="9.8" y="10" width="12.4" height="16" fill="#f2ede0"/>` +
    `<rect x="12.6" y="5.4" width="6.8" height="3.4" rx="1.4" fill="#8a8a92" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<g stroke="#8a7f68" stroke-width="1.2" stroke-linecap="round">` +
    `<path d="M12,14 H20"/><path d="M12,17.6 H18.4"/><path d="M12,21.2 H19.4"/></g>`),
  sunrise: (bg) => propWrap(bg,
    `<circle cx="16" cy="19" r="7.4" fill="#f2c14a"/>` +
    `<g stroke="#f2c14a" stroke-width="1.6" stroke-linecap="round">` +
    [200, 225, 250, 290, 315, 340].map((a) => {
      const r0 = 9.6, r1 = 13.4, rad = (a * Math.PI) / 180;
      return `<line x1="${(16 + Math.cos(rad) * r0).toFixed(1)}" y1="${(19 + Math.sin(rad) * r0).toFixed(1)}" x2="${(16 + Math.cos(rad) * r1).toFixed(1)}" y2="${(19 + Math.sin(rad) * r1).toFixed(1)}"/>`;
    }).join("") + `</g>` +
    `<rect x="0" y="19" width="32" height="13" fill="${sh(bg, -0.24)}"/>` +
    `<path d="M0,19 H32" stroke="${sh(bg, 0.24)}" stroke-width="1.2"/>`),
  sapling: (bg) => propWrap(bg,
    `<rect x="14.8" y="17" width="2.4" height="12" fill="#6b5442" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<ellipse cx="16" cy="13" rx="9" ry="7.6" fill="#3f7a46" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<ellipse cx="13" cy="10.6" rx="4" ry="3.2" fill="#5a9a5c" opacity=".8"/>`),
  // Four prints walking away from you, getting fainter. Pressed INTO the ground
  // rather than sitting on it, so they take a dark fill and no outline - the
  // opposite of every other prop here, which is what makes them read as a mark
  // rather than an object.
  tracks: (bg) => propWrap(bg,
    [[10, 25, 1, .5], [14, 20, -1, .4], [19, 15, 1, .3], [23, 10, -1, .2]].map(([x, y, d, o]) =>
      `<g opacity="${o + .28}">` +
      `<ellipse cx="${x}" cy="${y}" rx="2.1" ry="2.6" fill="#3a2c1e" transform="rotate(${d * 12} ${x} ${y})"/>` +
      [[-2.4, -2.2], [-0.7, -3.1], [1.1, -3.0], [2.5, -1.9]].map(([tx, ty]) =>
        `<circle cx="${x + tx}" cy="${y + ty}" r=".85" fill="#3a2c1e"/>`).join("") +
      `</g>`).join("")),
  // A hive on a stand. The bees are three specks; any more and at tile size it
  // turns into a smudge rather than reading as movement.
  hive: (bg) => propWrap(bg,
    `<rect x="14.6" y="21" width="2.8" height="8" fill="#6b5442" stroke="${PROP_OUT}" stroke-width=".7"/>` +
    `<ellipse cx="16" cy="18" rx="8.5" ry="4" fill="#c9a24a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<ellipse cx="16" cy="14" rx="7.4" ry="3.6" fill="#d9b45c" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<ellipse cx="16" cy="10.4" rx="5.8" ry="3.2" fill="#e8c76e" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<circle cx="16" cy="17" r="1.5" fill="#4a3a26"/>` +
    [[6, 8], [25, 12], [8, 20]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="1.1" fill="#3a2c1e"/>`).join("")),

  // Strung between two things, so it hangs from the top corners rather than
  // sitting on the ground - the one prop here with no shadow under it.
  web: (bg) => propWrap(bg,
    `<g stroke="${PROP_OUT}" stroke-width=".7" fill="none" opacity=".85">` +
    [5, 10, 15].map((r) =>
      `<path d="M2 2 Q${2 + r} ${2 + r * .5} ${2 + r * 1.5} ${2 + r * 1.5}` +
      ` Q${2 + r * .5} ${2 + r} 2 ${2 + r * 1.5} Z"/>`).join("") +
    `<path d="M2 2 L26 26 M2 2 L2 26 M2 2 L26 2"/>` +
    `</g>` +
    `<circle cx="13" cy="13" r="1.8" fill="#2e2620" stroke="${PROP_OUT}" stroke-width=".5"/>`),

  // A cup of twigs with eggs in it, tucked low.
  nest: (bg) => propWrap(bg,
    `<path d="M7 26 q1 -8 9 -8 q8 0 9 8 Z" fill="#7a5c3a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M9 24 q2 -5 7 -5 q5 0 7 5 Z" fill="#8f6f47"/>` +
    [[13.5, 21], [18.5, 21], [16, 19.4]].map(([x, y]) =>
      `<ellipse cx="${x}" cy="${y}" rx="2.1" ry="1.7" fill="#e8e2d0" stroke="${PROP_OUT}" stroke-width=".4"/>`).join("")),

  snow: (bg) => propWrap(bg,
    [[16, 15, 7], [9, 23, 4], [23, 22, 4.5]].map(([x, y, r]) =>
      `<g stroke="#f2f8ff" stroke-width="1.2" stroke-linecap="round">` +
      [0, 60, 120].map((a) =>
        `<line x1="${x - r}" y1="${y}" x2="${x + r}" y2="${y}" transform="rotate(${a} ${x} ${y})"/>`).join("") +
      `</g>`).join("")),
};

// Which tile character, and which emoji, maps to which drawn thing.
const PROP_BY_CHAR = {
  H: "hut", C: "clinic", M: "shop", Y: "arena", P: "tent",
  "!": "sign", "¡": "log", "¦": "lamp", t: "lantern",
  // Set dressing placed by part67. Given characters rather than emoji because
  // the honey pot is already spoken for by a trainer marker, and a later key
  // silently wins in an object literal.
  "⁃": "hive", "⁄": "web", "⁅": "nest",
  D: "gate", p: "marker", L: "idol",
};

// The flower tile takes its emoji from the zone, so the decoration follows the
// place rather than being one flower everywhere.
const PROP_BY_EM = {
  "🌼": ["bloom", "#e8d447"], "🌺": ["bloom", "#e0568a"], "🪷": ["bloom", "#e8a8c0"],
  "🌾": ["bloom", "#d9c48a"], "🍄": ["mushroom", null], "❄️": ["snow", null],
  "🔥": ["flame", null], "✨": ["sparkle", null], "🌵": ["bloom", "#6fae5a"],
  "🐠": ["bloom", "#e8935c"], "⛏️": ["marker", null],
  "🕯️": ["candle", null], "🦴": ["bone", null],
  // The lamp post and the fallen log both become a lit lantern after dark, so
  // the drawn form has to follow what the tile is showing, not the character
  // it was written as.
  "🏮": ["lantern", null], "🔦": ["lamp", null],
  // Six trainers are marked by an object rather than a face - a beekeeper by
  // her bees, a surveyor by his clipboard. Those are drawn as the objects they
  // are rather than turned into people.
  "🐾": ["tracks", null],
  "🐝": ["bee", null], "🍯": ["honey", null], "🔔": ["bell", null],
  "📋": ["clipboard", null], "🌅": ["sunrise", null], "🌳": ["sapling", null],
};

const PROP_CACHE = {};
const PROP_TILE = (ch, em, bg) => {
  const key = `${ch}|${em}|${bg}`;
  if (key in PROP_CACHE) return PROP_CACHE[key];
  // The emoji is consulted first because it is the live state of the tile - a
  // lamp lights up at night and a log becomes the lantern beside it - whereas
  // the character is only what the map was written with.
  let kind = null, tint = null;
  if (PROP_BY_EM[em]) { kind = PROP_BY_EM[em][0]; tint = PROP_BY_EM[em][1]; }
  if (!kind) kind = PROP_BY_CHAR[ch];
  const build = kind && PROP_SHAPES[kind];
  PROP_CACHE[key] = build
    ? `url("data:image/svg+xml,${encodeURIComponent(build(bg, tint))}")`
    : null;
  return PROP_CACHE[key];
};

console.log(`[part57] buildings and props | ${Object.keys(PROP_SHAPES).length} shapes`);

// Tiles whose drawn form contains a flame, so the render knows which ones
// should flicker without having to look inside the picture.
const FLICKER_TILES = new Set(["\u00a6", "t"]);
