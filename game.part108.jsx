// ---------- Part 108: THE WETLAND'S LANDMARKS, AND DELTA TOWN'S THINGS ----------
// The second region rebuilt (design/tools/forge_wetland.py, data in part109),
// 2026-09-25. Same rules as part106: every landmark answers "why does this
// matter", every claim is one that is well established, and the uncertain ones
// say so. Drawn in the same house style as part106's.

Object.assign(LANDMARKS, {
  lm_beaver_dam: {
    kind: "beaverdam", name: "A beaver dam",
    text: "🦫 A beaver dam, sticks and mud, holding back the whole pond behind it. Beavers build to keep the water round their lodge deep: the doors are underwater, so a deep pond means they never freeze shut in winter and a wolf cannot simply walk in.\n\nThe pond does more than that. It traps silt, holds water through dry spells, and turns a stream into a wetland - frogs, fish, dragonflies, ducks and moose all follow. The longest dam known, in Canada's Wood Buffalo National Park, is about 850 metres long. It was found in 2007 on satellite pictures.",
  },
  lm_reed_warbler: {
    kind: "reednest", name: "A reed warbler's nest",
    text: "🪺 A reed warbler's nest, woven round three or four reed stems so it rides up and down with them in the wind.\n\nIt is also one of the common cuckoo's favourite targets. A cuckoo lays one egg in the nest; the cuckoo chick hatches first and heaves every other egg out over the rim, and the warblers raise it alone until it is several times their own size. They do fight back - reed warblers mob a cuckoo they see near the nest, and they mob harder once they have watched their neighbours doing it.",
  },
  lm_peat_bank: {
    kind: "peat", name: "The old peat cuttings",
    text: "🟫 Old peat cuttings. Peat is moss and reed that died in water too wet and sour for it to rot, laid down about a millimetre a year - this bank is thousands of years deep.\n\nPeatlands cover about three percent of the world's land, yet hold roughly a third of the carbon in all its soil. Dry a bog out, or cut it for fuel, and that carbon goes back into the air. The same water keeps other things: Tollund Man was dug out of a Danish bog in 1950, about 2,400 years after he died, with his face still whole.",
  },
  lm_otter_holt: {
    kind: "holt", name: "An otter holt",
    text: "🦦 An otter's holt, dug in among the roots of the bank. On the flat stone outside it is spraint - otter droppings, left on purpose where the next otter will find them. Otter-watchers say it smells of jasmine tea.\n\nOtters are rarely seen, so scientists count spraint instead, and pick it apart to see what they have eaten. That is how we know what happened to them: in the 1950s pesticides washing off farmland poisoned the fish, and otters vanished from most of England. Once the worst chemicals were banned they came back, and by 2011 they were found in every county.",
  },
  lm_lotus: {
    kind: "lotus", name: "The lotus pool",
    text: "🪷 Lotus. Water falling on a leaf beads up and rolls off, taking the dirt with it, so the leaf is clean in the muddiest pond - engineers have copied the trick for paint and glass that clean themselves.\n\nThe flower keeps itself warm, holding about 30 to 35°C for days, even on a cold night. That may be how it keeps the beetles that pollinate it coming. And the seeds wait: one from a dried-up lake bed in China, carbon-dated at about 1,300 years old, was planted, and grew.",
  },
  lm_flood_post: {
    kind: "floodpost", name: "The flood post",
    text: "📏 The flood post, notched with the height of every big flood anyone remembers. A delta is built by its river: each flood spreads a new layer of silt over the fields, which is why deltas are some of the richest farmland on earth - and why people here build on stilts rather than leave.\n\nWhen the Aswan High Dam on the Nile was finished in 1970, the floods stopped, and the silt with them. It settles in the lake behind the dam instead. Farmers downstream now buy the fertiliser the river used to bring for free, and parts of the Nile Delta's coast are being worn away by the sea.",
  },
});

Object.assign(LM_SHAPES, {
  beaverdam: (bg) => {
    const stick = "#7a5a3a", water = "#3d7b95";
    return propWrap(bg,
      `<ellipse cx="16" cy="12" rx="14" ry="6" fill="${water}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M5,10.6 Q10,9.4 14,10.8 M18,12.6 Q23,11.4 27,12.4" stroke="#eaf8ff" stroke-width=".7" opacity=".7" fill="none"/>` +
      `<path d="M2.4,26 Q4,15.4 16,15 Q28,15.4 29.6,26 Z" fill="${stick}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<g stroke="${sh(stick, -0.3)}" stroke-width="1.1" stroke-linecap="round">` +
      `<path d="M4.6,22 L12,17.4"/><path d="M9,25 L20,16.6"/><path d="M15,25.6 L27,19.4"/><path d="M6,18.6 L14.6,24"/><path d="M18,17.2 L26.6,24"/></g>` +
      `<g stroke="${sh(stick, 0.3)}" stroke-width=".8" stroke-linecap="round"><path d="M11,21 L22,21.4"/><path d="M7,24 L13,23"/></g>` +
      `<path d="M2.6,22.6 Q16,20.6 29.4,22.6" stroke="${sh(stick, -0.45)}" stroke-width="1.2" fill="none" opacity=".6"/>`);
  },
  reednest: (bg) => {
    const reed = "#8a9a4a", head = "#8a6a45", straw = "#c9a86a";
    return propWrap(bg,
      `<g stroke="${reed}" stroke-width="1.4" stroke-linecap="round">` +
      `<path d="M9,29 L10,6"/><path d="M16,29 L16,3.6"/><path d="M23,29 L22,6.6"/></g>` +
      // common reed's feathery plume, drooping to one side
      `<g fill="${head}" stroke="${PROP_OUT}" stroke-width=".4" opacity=".95">` +
      [[10, 6], [16, 3.6], [22, 6.6]].map(([x, y]) =>
        `<path d="M${x},${y} Q${x + 4},${y - 1} ${x + 5.4},${y + 3.4} Q${x + 3},${y + 1.4} ${x},${y + 1.6} Z"/>`).join("") + `</g>` +
      `<path d="M8.6,15 Q16,13 23.4,15 Q23,22.6 16,23 Q9,22.6 8.6,15 Z" fill="${straw}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M9.6,17.6 Q16,19.6 22.4,17.6 M10.6,20.4 Q16,22 21.4,20.4" stroke="${sh(straw, -0.25)}" stroke-width=".7" fill="none"/>` +
      // a cuckoo chick far too big for it, beak open
      `<ellipse cx="16" cy="13.2" rx="5" ry="3.6" fill="#8a7a66" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M14.4,10.4 L16,7.6 L17.6,10.4 Z" fill="#e8a33a" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="14" cy="11.8" r=".6" fill="${PROP_DARK}"/>`);
  },
  peat: (bg) => {
    const peat = "#4e3a2a";
    const brick = (x, y) => `<rect x="${x}" y="${y}" width="7" height="4" rx=".8" fill="${peat}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M${x + 1},${y + 1.2} H${x + 6}" stroke="${sh(peat, 0.3)}" stroke-width=".5"/>`;
    return propWrap(bg,
      [[5, 24], [12.5, 24], [20, 24], [8.6, 19.6], [16, 19.6], [12.4, 15.2]].map(([x, y]) => brick(x, y)).join("") +
      `<path d="M24.6,24 L26.6,8" stroke="#8a6a45" stroke-width="1.4" stroke-linecap="round"/>` +
      `<path d="M23.4,7.6 L27.8,8.2" stroke="#8a6a45" stroke-width="1.4" stroke-linecap="round"/>` +
      `<path d="M23.6,24.2 L25,20 L28.2,20.4 L27.6,24.8 Z" fill="#9a9aa0" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M3,28 Q5,25.6 6,28 M26,28 Q28,25.4 29,28" stroke="#7f9a3c" stroke-width="1" fill="none"/>`);
  },
  holt: (bg) => {
    const earth = "#6e5236", root = "#8a6a45";
    return propWrap(bg,
      `<ellipse cx="16" cy="27" rx="14" ry="3" fill="#3d7b95" opacity=".85"/>` +
      `<path d="M2.6,27 Q3,12 16,10 Q29,12 29.4,27 Z" fill="${earth}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M8,12.6 Q10,6 14,4.6 M16,10 L16,4 M24,12.6 Q22,6 18,4.6" stroke="#5a7a3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>` +
      `<ellipse cx="16" cy="3.6" rx="7.4" ry="2.6" fill="#6f9a3a" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<g stroke="${root}" stroke-width="1.1" fill="none" stroke-linecap="round">` +
      `<path d="M5,20 Q9,17 11,22"/><path d="M27,20 Q23,16.6 21,22"/><path d="M12,13.4 Q13,17 11.6,19"/></g>` +
      `<ellipse cx="16" cy="22.4" rx="4.4" ry="3.6" fill="${PROP_DARK}"/>` +
      `<g fill="#6b4a2e"><circle cx="15" cy="21.4" r="1.6"/><circle cx="14.4" cy="20.8" r=".5" fill="${PROP_DARK}"/></g>` +
      `<rect x="21.6" y="24.2" width="5" height="2" rx="1" fill="#9a9288" stroke="${PROP_OUT}" stroke-width=".5"/>`);
  },
  lotus: (bg) => {
    const water = "#3d7b95", pad = "#5f8f3a", petal = "#f0a8c0";
    const padAt = (x, y, r) => `<path d="M${x},${y} L${x + r},${y - r * 0.2} A${r},${r * 0.55} 0 1 1 ${x + r * 0.9},${y + r * 0.3} Z" fill="${pad}" stroke="${PROP_OUT}" stroke-width=".6"/>`;
    return propWrap(bg,
      `<ellipse cx="16" cy="22" rx="14.4" ry="7" fill="${water}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      padAt(8, 23, 5) + padAt(22, 25, 4.4) + padAt(23, 18.6, 3.4) +
      `<path d="M16,22 L16,15" stroke="#4a6a2a" stroke-width="1.1"/>` +
      `<g fill="${petal}" stroke="${PROP_OUT}" stroke-width=".6">` +
      `<path d="M16,4 Q19.6,9.6 16,15 Q12.4,9.6 16,4 Z"/>` +
      `<path d="M9,8.4 Q14.4,10 16,15 Q10.4,14.4 9,8.4 Z"/><path d="M23,8.4 Q17.6,10 16,15 Q21.6,14.4 23,8.4 Z"/>` +
      `<path d="M6.6,13 Q12,12.6 16,15 Q10.4,16.6 6.6,13 Z"/><path d="M25.4,13 Q20,12.6 16,15 Q21.6,16.6 25.4,13 Z"/></g>` +
      `<ellipse cx="16" cy="12.4" rx="1.6" ry="1" fill="#e8c547"/>`);
  },
  floodpost: (bg) => {
    const wood = "#8a6a45", water = "#3d7b95";
    return propWrap(bg,
      `<ellipse cx="16" cy="27.4" rx="11" ry="2.8" fill="${water}" opacity=".9"/>` +
      `<rect x="12.6" y="2" width="6.8" height="26" rx="1" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M16,4 L16,26" stroke="${sh(wood, -0.25)}" stroke-width=".6"/>` +
      `<g stroke="#f2ede0" stroke-width="1.2">` +
      [7, 11.4, 14.6, 19, 22].map((y) => `<path d="M12.6,${y} L${y % 2 ? 19.4 : 17},${y}"/>`).join("") + `</g>` +
      `<g fill="#c0392b">` + [7, 14.6].map((y) => `<path d="M19.4,${y - 1.4} L22.6,${y} L19.4,${y + 1.4} Z"/>`).join("") + `</g>` +
      `<path d="M5.6,26.4 Q9,25 12.6,26.4 M19.4,26.4 Q23,25 26.4,26.4" stroke="#eaf8ff" stroke-width=".7" fill="none"/>`);
  },
});

// Delta Town's own things: a river town has boats pulled up on the bank and
// nets hung out to dry, where a savanna village has granaries.
Object.assign(DECOR_SHAPES, {
  canoe: (bg) => propWrap(bg,
    `<path d="M2,19 Q16,29 30,19 Q24,22.4 16,22.4 Q8,22.4 2,19 Z" fill="#6b4a2e" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<path d="M2,19 Q8,22.4 16,22.4 Q24,22.4 30,19 Q24,19.6 16,19.8 Q8,19.6 2,19 Z" fill="#3e2a1a"/>` +
    `<path d="M5,24.6 Q16,27 27,24.6" stroke="${sh("#6b4a2e", 0.3)}" stroke-width=".7" fill="none"/>` +
    `<path d="M9,12 L22,25" stroke="#a07a4a" stroke-width="1.3" stroke-linecap="round"/>` +
    `<path d="M20.4,23 L24.6,27.6 L26,26 L22,21.8 Z" fill="#b08a5a" stroke="${PROP_OUT}" stroke-width=".6"/>`),
  nets: (bg) => propWrap(bg,
    `<path d="M6,29 L6,6 M26,29 L26,6" stroke="#6b5442" stroke-width="1.8" stroke-linecap="round"/>` +
    `<path d="M6,8 Q16,11 26,8 L25,24 Q16,26 7,24 Z" fill="#c9b48a" fill-opacity=".35" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<g stroke="#8a7a5a" stroke-width=".6" fill="none">` +
    [10, 14, 18, 22].map((x) => `<path d="M${x},${9 + (x - 16) * (x - 16) * 0.02} L${x - 0.4},${24.6}"/>`).join("") +
    [12.4, 16.4, 20.4].map((y) => `<path d="M6.6,${y} Q16,${y + 2.4} 25.4,${y}"/>`).join("") + `</g>` +
    `<g fill="#e3c24a" stroke="${PROP_OUT}" stroke-width=".4"><circle cx="8.6" cy="24.4" r="1"/><circle cx="16" cy="25.6" r="1"/><circle cx="23.4" cy="24.4" r="1"/></g>`),
});
Object.assign(DECOR_SCALE, { canoe: [1.4, 1.1], nets: [1.2, 1.35] });

Object.assign(SIGNS, {
  "route2:gate": "🪧 '⟵ BRAMBLE THICKET. Thorn and tangle, off the fen road.'",
  "seg_w2:gate": "🪧 '⟵ THE STILL WATER. A shrine in the reeds. Something old sleeps there.'",
  "town3:gate": "🪧 'CANOPY DEEP ⟶ north, through the arena. The rainforest road.'",
});
