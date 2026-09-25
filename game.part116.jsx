// ---------- Part 116: THE ALPINE LANDMARKS, AND FROST TOWN'S THINGS ----------
// The sixth region rebuilt (design/tools/forge_alpine.py, data in part117),
// 2026-09-25. Same rules as the other landmark parts. The people on these maps
// tell a story about the flocks and what comes for them; nothing here touches it.

Object.assign(LANDMARKS, {
  lm_krummholz: {
    kind: "krummholz", name: "The last trees",
    text: "🌲 The last trees before the bare mountain, and none of them stands straight. Up here the wind and the cold kill any shoot that sticks up, so the firs grow low and sideways - branches only on the sheltered side, or none above the depth of the winter snow, which keeps them alive under it. The Germans call it krummholz: crooked wood.\n\nWhere trees stop is set mostly by warmth: around the world, the treeline falls roughly where the growing season averages about six degrees. As summers warm, in many mountains the trees are creeping uphill.",
  },
  lm_pika: {
    kind: "pika", name: "A pika's hay pile",
    text: "🐭 A pika's hay pile, tucked under a rock in the scree. Pikas are small round cousins of rabbits, and they do not hibernate. All summer they cut grass and flowers and carry them back mouthful by mouthful, drying them into piles to eat under the snow all winter.\n\nThey are built for the cold and almost defenceless against heat: a few hours at a temperature we would call a warm day can kill one. So as the mountains warm, pikas are moving up them - and a mountain only goes so high.",
  },
  lm_glacier_posts: {
    kind: "glacierposts", name: "The glacier posts",
    text: "📍 Marker posts, one for each year, showing where the glacier's edge used to be. The lowest are a long walk down the valley from the ice now.\n\nSwitzerland's glaciers lost about half their ice between 1931 and 2016, and around a tenth more in just the two summers of 2022 and 2023. It matters well beyond the mountains: meltwater from glaciers keeps rivers running in late summer, when the snow is gone and the rain has stopped.",
  },
  lm_under_snow: {
    kind: "undersnow", name: "Under the snow",
    text: "❄️ Deep snow - and under it, a whole world. Snow is full of air, and a thick enough layer holds the ground at around freezing, however bitter the wind above. Beneath it, voles and lemmings live all winter in tunnels at the bottom of the snow, eating, nesting, even raising young.\n\nWeasels are thin enough to hunt them down there. Owls and foxes hunt them from above by ear - listening for the scratching under the snow, then diving in head first.",
  },
  lm_hot_spring: {
    kind: "hotspring", name: "The hot springs",
    text: "♨️ The hot springs. In the mountains of Nagano in Japan, snow monkeys - Japanese macaques - sit in hot springs through the winter. The habit is not that old: in 1963 one young female waded in after food, others followed, and the whole troop took it up.\n\nIt does them good. A study found that the females who bathed had lower levels of stress hormones in the coldest months. Japanese macaques live farther north than any other primate apart from us.",
  },
});

Object.assign(LM_SHAPES, {
  krummholz: (bg) => {
    const trunk = "#6b5238", fir = "#3f6a52";
    return propWrap(bg,
      `<path d="M8,29 Q9,22 7,17 L9,16 Q11,22 11,29 Z" fill="${trunk}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      // a flag tree: every branch blown to the right
      `<g fill="${fir}" stroke="${PROP_OUT}" stroke-width=".6" stroke-linejoin="round">` +
      `<path d="M8,17 L24,15 L20,18 L9,19 Z"/><path d="M8.6,13 L22,11.4 L18,14 L9,15 Z"/><path d="M8,9 L17,8 L14,10.6 L8.6,11 Z"/></g>` +
      `<path d="M2,29 Q6,24 12,24 Q20,24 30,29 Z" fill="#f4f7fa" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M4,26.4 Q14,21 26,24" fill="${sh(fir, -0.1)}" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<g stroke="#dfe8f0" stroke-width=".9" stroke-linecap="round" opacity=".8"><path d="M24,6 L30,6"/><path d="M22,9 L29,9"/></g>`);
  },
  pika: (bg) => {
    const rock = "#9aa0a6", fur = "#a08466", hay = "#c9b060";
    return propWrap(bg,
      `<ellipse cx="11" cy="23" rx="9" ry="6" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="23" cy="25" rx="7" ry="4.6" fill="${sh(rock, 0.1)}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M14,29 Q16,22 20,21 Q24,22 26,29 Z" fill="${hay}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g stroke="${sh(hay, -0.3)}" stroke-width=".5"><path d="M17,25 L21,23"/><path d="M19,27 L24,24"/><path d="M16,28 L20,26"/></g>` +
      `<g fill="#d86aa0"><circle cx="18" cy="22.6" r=".7"/><circle cx="23" cy="23.2" r=".7"/></g>` +
      // the pika, round, with a stalk in its mouth
      `<ellipse cx="11" cy="13" rx="5" ry="3.8" fill="${fur}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<circle cx="14.4" cy="11.4" r="2.6" fill="${fur}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<circle cx="13.2" cy="9" r="1.2" fill="${sh(fur, 0.2)}" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="15.2" cy="11" r=".5" fill="${PROP_DARK}"/>` +
      `<path d="M16.6,12.4 Q20,10 22,12" stroke="#6f9a3a" stroke-width=".8" fill="none"/><circle cx="22" cy="12" r=".9" fill="#e8c547"/>`);
  },
  glacierposts: (bg) => {
    const wood = "#8a6a45", ice = "#cfe4f2";
    return propWrap(bg,
      `<path d="M16,2 Q24,1 31,4 L31,11 Q24,9 16,9 Z" fill="${ice}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M18,6 Q24,5 30,7" stroke="#9ec4e0" stroke-width=".7" fill="none"/>` +
      `<ellipse cx="22" cy="14" rx="8" ry="2.6" fill="#82a9c4" opacity=".9"/>` +
      [[6, 26, 1], [11, 21, 0.9], [16, 17, 0.8]].map(([x, y, s]) =>
        `<rect x="${x - 0.8}" y="${y - 7 * s}" width="1.6" height="${7 * s}" fill="${wood}" stroke="${PROP_OUT}" stroke-width=".5"/>` +
        `<rect x="${x - 2.4}" y="${y - 7 * s}" width="4.8" height="${2.4 * s}" rx=".4" fill="#f2ede0" stroke="${PROP_OUT}" stroke-width=".4"/>` +
        `<path d="M${x - 1.6},${y - 6 * s} h3.2" stroke="${PROP_DARK}" stroke-width=".4"/>`).join("") +
      `<path d="M3,29 Q10,26 16,27 Q23,28 29,26" stroke="#dfe8f0" stroke-width="1.4" fill="none"/>`);
  },
  undersnow: (bg) => {
    const snow = "#f4f7fa", earth = "#6b5442";
    return propWrap(bg,
      `<rect x="2" y="8" width="28" height="18" rx="2" fill="${snow}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M2,12 Q9,9 16,11 Q23,13 30,10" stroke="#dfe8f0" stroke-width="1" fill="none"/>` +
      `<rect x="2" y="26" width="28" height="3" fill="${earth}"/>` +
      // the tunnel at the bottom of the snow, and a vole in it
      `<path d="M3,25 Q8,21 14,23 Q20,25 26,22 L29,23 L29,26 L3,26 Z" fill="#c8d4de"/>` +
      `<ellipse cx="17" cy="23.6" rx="3" ry="1.8" fill="#8a6a50" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<circle cx="19.4" cy="23" r=".45" fill="${PROP_DARK}"/>` +
      `<g fill="#6f9a3a"><path d="M8,26 l1,-2.4 l1,2.4 Z"/><path d="M24,26 l1,-2 l1,2 Z"/></g>` +
      `<g fill="#9ab0c0"><circle cx="10" cy="5" r=".8"/><circle cx="18" cy="3.6" r=".7"/><circle cx="25" cy="5.4" r=".8"/></g>`);
  },
  hotspring: (bg) => {
    const water = "#7ac0c8", rock = "#8a8278", fur = "#b8a080", face = "#e89a8a";
    return propWrap(bg,
      `<ellipse cx="16" cy="23" rx="14" ry="6" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="22.6" rx="11" ry="4.4" fill="${water}"/>` +
      `<path d="M8,22 Q16,20 24,22" stroke="#e8f8fa" stroke-width=".7" fill="none" opacity=".8"/>` +
      // a snow monkey, up to its chin
      `<circle cx="17" cy="19" r="4.2" fill="${fur}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="17" cy="19.6" rx="2.6" ry="2.2" fill="${face}"/>` +
      `<g fill="${PROP_DARK}"><circle cx="16" cy="19" r=".45"/><circle cx="18" cy="19" r=".45"/></g>` +
      `<path d="M13.4,17 Q17,13.6 20.6,17" fill="#f4f7fa" opacity=".9"/>` +
      `<g stroke="#e8eef4" stroke-width="1.2" fill="none" opacity=".7" stroke-linecap="round">` +
      `<path d="M7,15 Q5,12 7,9 Q9,6 7,3"/><path d="M25,15 Q27,12 25,9 Q23,6 25,3"/></g>`);
  },
});

// Frost Town's own things: woodpiles by every door, sleds left out.
Object.assign(DECOR_SHAPES, {
  woodpile: (bg) => propWrap(bg,
    `<g stroke="${PROP_OUT}" stroke-width=".6">` +
    [[6, 25], [12, 25], [18, 25], [24, 25], [9, 20], [15, 20], [21, 20], [12, 15], [18, 15]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="3" fill="#a07a4a"/><circle cx="${x}" cy="${y}" r="1.4" fill="#d8b888"/>`).join("") + `</g>` +
    `<path d="M3,12 Q16,8 29,12 L29,14 Q16,10 3,14 Z" fill="#f4f7fa" stroke="${PROP_OUT}" stroke-width=".5"/>`),
  sled: (bg) => propWrap(bg,
    `<path d="M4,24 L26,24 Q30,24 30,20" stroke="#6b5442" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
    `<path d="M7,24 L7,20 M14,24 L14,20 M21,24 L21,20" stroke="#6b5442" stroke-width="1.2"/>` +
    `<rect x="5" y="17" width="20" height="3.4" rx="1" fill="#c0392b" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<path d="M6,17 L24,17" stroke="#e8e0d0" stroke-width=".6"/>`),
});
Object.assign(DECOR_SCALE, { woodpile: [1.15, 1.15], sled: [1.2, 1.0] });

Object.assign(SIGNS, {
  "route6:gate": "🪧 '⟵ HOARFROST TUNDRA. Flat, white and very cold.'",
  "route6:gate2": "🪧 'STORM PEAK ⟶  The summit trail. Turn back if the wind gets up.'",
  "seg_a1:gate": "🪧 '⟵ THE FOLDED DUSK. A shrine under the crag. Something old sleeps there.'",
  "seg_a3:gate": "🪧 '⟵ THE KEPT WINTER. A shrine in the firs. Something old sleeps there.'",
  "town7:gate": "🪧 'CINDER FLATS ⟶ north, through the arena. The road to the fire country.'",
});
