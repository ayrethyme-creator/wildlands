// ---------- Part 139: THE VICTORY TRAIL'S LANDMARKS ----------
// The three stretches part138 added to the Victory Trail, forged in
// forge_grove.py (data in part121), 2026-09-26. Same rules as the other
// landmark parts: fact-checked, and each says why it matters.

// Some of the trail's animals are added after part138 runs (the eagle and
// falcon variants, the extinct ones), so the stretches take the trail's
// roster again here, whole, before the game starts.
["seg_t1", "seg_t2", "seg_t3"].forEach((k) => {
  const m = MAPS[k], r9 = MAPS.route9;
  if (!m || !r9) return;
  m.pool = (r9.pool || []).slice();
  m.poolN = (r9.poolN || []).slice();
  if (r9.poolWater) m.poolWater = r9.poolWater.slice();
});

Object.assign(LANDMARKS, {
  lm_high_tigers: {
    kind: "snowprint", name: "Tigers in the snow",
    text: "🐅 Most people picture tigers in hot jungle. In Bhutan, in 2010, a hidden camera filmed tigers at about 4,000 metres up - in the mountains, above where the forest thins out, in country shared with snow leopards.\n\nThat matters because tigers need room. Bhutan keeps corridors of forest joining its parks, so that tigers can move between the lowlands and the mountains, and from one population to another. A tiger that cannot travel cannot find a mate.",
  },
  lm_ibex_return: {
    kind: "ibexrock", name: "The last hundred",
    text: "🐐 By the early 1800s the Alpine ibex had been hunted out of almost the whole of the Alps. Fewer than a hundred were left, on the Gran Paradiso massif in Italy, where a king kept them for his own hunting - which, by accident, is what saved them. The land became Italy's first national park in 1922.\n\nIbex from Gran Paradiso were taken to Switzerland and released, and from there back across the mountains. Tens of thousands live in the Alps again, and every one of them descends from that last small group.",
  },
  lm_peregrine: {
    kind: "falconrock", name: "The fastest thing alive",
    text: "🦅 A peregrine falcon folds its wings and drops on its prey at more than 300 kilometres an hour. Nothing alive moves faster.\n\nIn the 1950s and 60s they almost vanished. The pesticide DDT, sprayed on farms, built up in the birds they ate and made their eggshells so thin that they broke under the parents sitting on them. DDT was banned in the United States in 1972, falcons were bred and released, and in 1999 the peregrine came off America's endangered list. The eggs got thick enough to hatch again.",
  },
});

Object.assign(LM_SHAPES, {
  // Tiger pugmarks crossing snow.
  snowprint: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="20" rx="14" ry="9" fill="#eef3f8" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    [[10, 16], [21, 22]].map(([x, y]) =>
      `<g fill="#8a9aae"><ellipse cx="${x}" cy="${y + 2.4}" rx="2.6" ry="2.1"/>` +
      `<circle cx="${x - 2.6}" cy="${y - 0.6}" r="1"/><circle cx="${x - 0.9}" cy="${y - 1.8}" r="1"/>` +
      `<circle cx="${x + 0.9}" cy="${y - 1.8}" r="1"/><circle cx="${x + 2.6}" cy="${y - 0.6}" r="1"/></g>`).join("")),
  // An ibex standing on a rock, the long ridged horns swept back.
  ibexrock: (bg) => propWrap(bg,
    `<path d="M4,29 L9,20 L23,19 L28,29 Z" fill="#8a8f96" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M10,19 L10,14 Q12,11 18,11 L21,9 L23,10 L22,13 L20,14 L20,19 M12,19 L12,15 M18,19 L18,15" fill="#9a7a58" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M21,9 Q17,3 11,5" stroke="#6a5038" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
    `<circle cx="21.4" cy="10.6" r=".5" fill="${PROP_DARK}"/>`),
  // A peregrine on a cliff edge: slate back, the dark "moustache".
  falconrock: (bg) => propWrap(bg,
    `<path d="M3,29 L3,21 L14,20 L16,29 Z" fill="#7d8088" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M8,20 Q7,13 10,9 Q13,6 16,8 Q18,11 16,16 Q15,19 13,20 Z" fill="#5d6a7c" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M10,12 Q11,17 13,19" stroke="#e8e4da" stroke-width="2" fill="none"/>` +
    `<path d="M13.4,9.4 Q12.6,11.6 13.8,12.6" stroke="#2a2f38" stroke-width="1.1" fill="none"/>` +
    `<path d="M16,8.6 L18.4,9.6 L16.2,10.4 Z" fill="#e8c547"/>` +
    `<circle cx="14.6" cy="9" r=".6" fill="${PROP_DARK}"/>`),
});

SIGNS["route9:climb"] = "🪧 '⬆ THE CLIMB TO THE SUMMIT CITADEL - the Long Climb, Windbreak Ledge, and the Citadel Approach. Watch for tigers.'";
