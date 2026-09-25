// ---------- Part 112: THE DESERT'S LANDMARKS, AND DUNE TOWN'S THINGS ----------
// The fourth region rebuilt (design/tools/forge_desert.py, data in part113),
// 2026-09-25. Same rules as part106/108/110: every landmark answers "why does
// this matter", every claim is well established, and open questions (how a
// dune sings) are said to be open.

Object.assign(LANDMARKS, {
  lm_singing_dune: {
    kind: "singingdune", name: "The singing dune",
    text: "🏜️ The singing dune. When sand slides down its steep face it gives out a deep, steady hum - loud enough to feel, and heard a long way off. Marco Polo wrote of desert spirits that filled the air with music; this is probably what he heard.\n\nOnly a few dozen dunes in the world do it, and only when they are bone dry: the grains have to be round, polished by the wind, all much the same size. Exactly how millions of grains end up humming one note is still argued over.",
  },
  lm_turtle_nest: {
    kind: "turtlenest", name: "A turtle nest",
    text: "🐢 A sea turtle nest, the eggs buried deep in the warm sand. The sand's warmth decides what they hatch as: cooler nests make more males, warmer ones more females. On hot beaches in the northern Great Barrier Reef, nearly all the young green turtles are now female.\n\nHatchlings find the sea by heading for the brightest horizon, which is why lights along a beach can lead them the wrong way. And the adults drown in fishing nets - which is what the turtle excluder is for: a grid in a trawl net with a door in it, that lets almost every turtle out.",
  },
  lm_fog_beetle: {
    kind: "fogbeetle", name: "A fog-basking beetle",
    text: "🪲 On the dune crest, a beetle standing on its head. It does not rain here for years at a time, but fog rolls in off the cold sea some mornings - so this beetle climbs to the top of a dune, faces into the wind, and tips its body up.\n\nFog condenses on its back and runs down to its mouth. On a good morning it can drink as much as a third of its own weight. In the Namib a great many animals, and some plants, live on fog rather than rain.",
  },
  lm_sandstone_arch: {
    kind: "arch", name: "The sandstone arch",
    text: "🪨 A sandstone arch. The name of this place says the wind carved it, and that is mostly wrong. Water did most of the work: rain and melting frost seep into cracks and dissolve the natural cement between the grains, and blocks loosen and fall away under their own weight. The wind mostly polishes.\n\nArches National Park in the United States has more than two thousand. They do not last - one of its famous arches, Wall Arch, fell down one night in 2008.",
  },
  lm_welwitschia: {
    kind: "welwitschia", name: "A welwitschia",
    text: "🌿 A welwitschia. It looks like a heap of torn ribbons, but it has only ever had two leaves. They grow from the base for the plant's whole life and never stop, splitting and fraying at the ends in the wind.\n\nSome are thought to be well over a thousand years old. It grows only in the Namib desert, where it gets by on a deep root and the sea fog, and it is on Namibia's coat of arms.",
  },
  lm_sandgrouse: {
    kind: "sandgrouse", name: "The sandgrouse waterhole",
    text: "🐦 The waterhole where the sandgrouse come in. Their chicks live far out in the desert, too young to fly to water - so the fathers bring it.\n\nA male wades in and soaks his belly feathers, which are made to hold water like a sponge, and flies back with a few tablespoons of it, sometimes over tens of kilometres. The chicks drink straight from his feathers.",
  },
  lm_qanat: {
    kind: "qanat", name: "The qanat",
    text: "💧 The line of mounds running across the sand is a qanat: a tunnel, sloping gently down from where there is water under the hills to where the town needs it. The mounds are the tops of the shafts it was dug and cleaned from.\n\nBecause the water runs underground, almost none of it evaporates, and gravity does all the work - no pump, no power. Qanats were first dug in ancient Persia, well over two thousand years ago, and some of the old ones in Iran still flow.",
  },
});

Object.assign(LM_SHAPES, {
  singingdune: (bg) => {
    const sand = "#e0b97a";
    return propWrap(bg,
      `<path d="M1,28 Q8,10 18,8 Q24,8 31,28 Z" fill="${sand}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M18,8 Q24,8 31,28 L21,28 Q22,18 18,8 Z" fill="${sh(sand, -0.16)}"/>` +
      `<g stroke="${sh(sand, -0.3)}" stroke-width=".6" fill="none"><path d="M5,24 Q9,21 13,22"/><path d="M8,19 Q12,16 15,17"/><path d="M11,14 Q14,12 16,12.6"/></g>` +
      `<g stroke="#8a6a45" stroke-width=".9" fill="none" opacity=".8" stroke-linecap="round">` +
      `<path d="M25,6 Q27,8 25,10"/><path d="M27.4,4.4 Q30.4,8 27.4,11.6"/><path d="M21,4 Q19.6,5.6 21,7.2"/></g>`);
  },
  turtlenest: (bg) => {
    const sand = "#e8cf9e", shell = "#5a7a3a";
    const hatch = (x, y, r) => `<g transform="translate(${x},${y}) rotate(${r})"><ellipse cx="0" cy="0" rx="1.9" ry="1.4" fill="${shell}" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="0" cy="-1.8" r=".7" fill="${shell}"/><path d="M-1.8,-.4 L-3,-1.4 M1.8,-.4 L3,-1.4 M-1.4,1 L-2.4,2 M1.4,1 L2.4,2" stroke="${shell}" stroke-width=".7"/></g>`;
    return propWrap(bg,
      `<ellipse cx="13" cy="22" rx="11" ry="5.4" fill="${sand}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="13" cy="21.4" rx="5" ry="2.4" fill="${sh(sand, -0.22)}"/>` +
      `<g fill="#f6f0e0" stroke="#c8b890" stroke-width=".4"><circle cx="11.6" cy="21" r="1.3"/><circle cx="14" cy="21.6" r="1.3"/><circle cx="12.8" cy="19.8" r="1.2"/></g>` +
      `<path d="M22,10 Q27,8 31,9 L31,4 Q26,3 22,6 Z" fill="#3ad9d4" opacity=".8"/>` +
      hatch(20, 15, 40) + hatch(24.4, 11.6, 50) + hatch(17, 11, 30));
  },
  fogbeetle: (bg) => {
    const sand = "#dcb77c";
    return propWrap(bg,
      `<path d="M1,29 Q10,14 16,13 Q22,14 31,29 Z" fill="${sand}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M16,13 Q22,14 31,29 L22,29 Q20,19 16,13 Z" fill="${sh(sand, -0.14)}"/>` +
      // the beetle, head down, body tipped up into the fog
      `<g transform="translate(16,11) rotate(-38)"><ellipse cx="0" cy="0" rx="4.4" ry="2.6" fill="#1e1a18" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<circle cx="4.8" cy="0" r="1.4" fill="#1e1a18"/><path d="M-2,2.4 L-3,5 M0,2.6 L0,5.4 M2,2.4 L3.4,5" stroke="#1e1a18" stroke-width=".7"/></g>` +
      `<g fill="#cfe8ff" stroke="#8fb0d0" stroke-width=".3"><circle cx="13" cy="7.4" r=".9"/><circle cx="15.6" cy="6" r=".7"/><circle cx="17.6" cy="9.4" r=".8"/></g>` +
      `<path d="M2,6 Q10,3 18,4.4 Q26,5 31,3" stroke="#e8eef4" stroke-width="2.4" fill="none" opacity=".55" stroke-linecap="round"/>`);
  },
  arch: (bg) => {
    const rock = "#c0703f";
    return propWrap(bg,
      `<path d="M2,29 L3,12 Q4,4 16,3.4 Q28,4 29,12 L30,29 L23,29 L22,16 Q20,9.6 16,9.6 Q12,9.6 10,16 L9,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M3,12 Q4,4 16,3.4 Q28,4 29,12 Q27,7 16,6.6 Q5,7 3,12 Z" fill="${sh(rock, 0.2)}"/>` +
      `<g stroke="${sh(rock, -0.28)}" stroke-width=".7" fill="none"><path d="M4,18 L9,18"/><path d="M23,20 L29,20"/><path d="M5,24 L9,24"/><path d="M23,25 L29.4,25"/></g>` +
      `<path d="M22,16 Q20,9.6 16,9.6 Q12,9.6 10,16" stroke="${sh(rock, -0.35)}" stroke-width="1.1" fill="none"/>`);
  },
  welwitschia: (bg) => {
    const leaf = "#6f8a3a";
    return propWrap(bg,
      `<path d="M16,22 Q8,17 1,24 Q4,21 3,27 Q9,21 16,24 Z" fill="${leaf}" stroke="${PROP_OUT}" stroke-width=".8" stroke-linejoin="round"/>` +
      `<path d="M16,22 Q24,16 31,23 Q28,21 29,27 Q23,21 16,24 Z" fill="${sh(leaf, -0.1)}" stroke="${PROP_OUT}" stroke-width=".8" stroke-linejoin="round"/>` +
      `<g stroke="${sh(leaf, -0.35)}" stroke-width=".5" fill="none"><path d="M16,23 Q9,19 3,25"/><path d="M16,23 Q23,18 29.6,25"/></g>` +
      `<path d="M4,24 L2,28 M6,23.6 L5,28 M27,24 L29.4,28 M25,23.4 L26,28" stroke="#8a6a45" stroke-width=".7"/>` +
      `<ellipse cx="16" cy="22.4" rx="4.4" ry="2.4" fill="#6b5442" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#c0492a" stroke="${PROP_OUT}" stroke-width=".3"><ellipse cx="14.4" cy="19.4" rx="1" ry="1.6"/><ellipse cx="17.6" cy="19" rx="1" ry="1.6"/><ellipse cx="16" cy="18.2" rx="1" ry="1.6"/></g>`);
  },
  sandgrouse: (bg) => {
    const body = "#b8955e";
    return propWrap(bg,
      `<ellipse cx="16" cy="25" rx="13" ry="4" fill="#5590ae" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M6,24.4 Q16,22 26,24.4" stroke="#eaf8ff" stroke-width=".7" fill="none" opacity=".7"/>` +
      `<ellipse cx="15" cy="17" rx="7" ry="4.4" fill="${body}" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<path d="M8.6,16.4 L3.6,15 L8.4,18 Z" fill="${sh(body, -0.2)}"/>` +
      `<circle cx="21.4" cy="13" r="3" fill="${body}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M24.2,13 L26,13.6 L24.2,14.2 Z" fill="#6b5442"/><circle cx="22.2" cy="12.4" r=".6" fill="${PROP_DARK}"/>` +
      `<g stroke="${sh(body, -0.3)}" stroke-width=".6" fill="none"><path d="M11,16 Q14,14.6 17,16"/><path d="M10.6,18.4 Q14,17 18,18.6"/></g>` +
      `<g fill="#9fd4ff"><circle cx="13" cy="22" r=".7"/><circle cx="16.4" cy="22.6" r=".6"/><circle cx="18.4" cy="21.8" r=".5"/></g>`);
  },
  qanat: (bg) => {
    const earth = "#c9a26a";
    const mound = (x, y, s) => `<ellipse cx="${x}" cy="${y}" rx="${3.4 * s}" ry="${1.8 * s}" fill="${earth}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="${x}" cy="${y - 0.4 * s}" rx="${1.2 * s}" ry="${0.6 * s}" fill="${PROP_DARK}"/>`;
    return propWrap(bg,
      mound(26, 6, 0.7) + mound(21, 10, 0.8) + mound(15.4, 14.6, 0.9) + mound(9.6, 19.4, 1) +
      `<path d="M2,29 L3,23.6 Q5,22 7,23.6 L8,29 Z" fill="#8a6a45" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M4,29 L4.4,25 Q5,24.4 5.6,25 L6,29 Z" fill="${PROP_DARK}"/>` +
      `<path d="M5,29 Q8,28 14,28.6" stroke="#5590ae" stroke-width="1.6" fill="none" stroke-linecap="round"/>`);
  },
});

// Dune Town's own things: water jars in the shade and a nomad's tent.
Object.assign(DECOR_SHAPES, {
  jars: (bg) => propWrap(bg,
    `<path d="M5,28 Q3,22 6,18 L6,15 L10,15 L10,18 Q13,22 11,28 Z" fill="#b8683a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M15,28 Q12,21 16,15 L16,12 L20,12 L20,15 Q24,21 21,28 Z" fill="#c9784a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M22,28 Q21,24 23,21 L23,19 L26,19 L26,21 Q28,24 27,28 Z" fill="#a85e32" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<g stroke="#f2e0c0" stroke-width=".7" fill="none" opacity=".7"><path d="M5,22 L11,22"/><path d="M15,20 L21,20"/></g>`),
  tent: (bg) => propWrap(bg,
    `<path d="M2,27 L8,11 L24,9 L30,27 Z" fill="#8a5a3a" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<g stroke="#c9a878" stroke-width="1.4"><path d="M4,22 L28,22"/><path d="M6,16 L26,15"/></g>` +
    `<path d="M13,27 L16,17 L19,27 Z" fill="#3e2a1a"/>` +
    `<path d="M8,11 L8,6 M24,9 L24,5" stroke="#6b5442" stroke-width="1.2"/>`),
});
Object.assign(DECOR_SCALE, { jars: [1.1, 1.15], tent: [1.5, 1.35] });

Object.assign(SIGNS, {
  "route4:gate": "🪧 '⟵ RED SAND OUTBACK. Hot, red and a long way from anywhere.'",
  "route4:gate2": "🪧 'FOSSIL RIFT CAMP ⟶  Champions only.'",
  "tidewater:blue": "🪧 'PIER ONE ⬆ THE OPEN BLUE. The boat leaves when you are on it.'",
  "tidewater:ice": "🪧 'PIER TWO ⬆ ICE FLOE PASSAGE. Wrap up.'",
  "tidewater:reef": "🪧 '⟵ CORAL REEF SHALLOWS. Boat at the end of the jetty.'",
  "tidewater:kelp": "🪧 'KELP CATHEDRAL ⟶  Boat at the end of the jetty.'",
  "seg_d2:gate": "🪧 '⟵ THE TURNED EARTH. A shrine in the rocks. Something old sleeps there.'",
  "seg_d4:gate": "🪧 '⟵ THE SHIELD WALL. A shrine in the dunes. Something old sleeps there.'",
  "town5:gate": "🪧 'HIGHVELD STEPS ⟶ north, through the arena. The road to the high grass.'",
});
