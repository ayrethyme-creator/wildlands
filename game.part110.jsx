// ---------- Part 110: THE JUNGLE'S LANDMARKS, AND CANOPY TOWN'S THINGS ----------
// The third region rebuilt (design/tools/forge_jungle.py, data in part111),
// 2026-09-25. Same rules as part106 and part108: every landmark answers "why
// does this matter", every claim is well established, and where science has
// not settled a question (why macaws eat clay) the text says so.

Object.assign(LANDMARKS, {
  lm_strangler_fig: {
    kind: "stranglerfig", name: "The strangler fig",
    text: "🌳 A strangler fig. It began as a seed dropped by a bird high in another tree's branches, and sent roots down the trunk to the ground. The roots thickened and joined into a lattice round the host, and the host died inside it. The hollow in the middle is where that tree used to be.\n\nFigs matter more than almost any other tree here. Each fig tree fruits on its own schedule, so somewhere in the forest there is nearly always ripe fruit - monkeys, bats and birds get through the lean months on figs. And every fig flower is pollinated by a tiny wasp, usually one species of wasp to one species of fig. Neither can breed without the other.",
  },
  lm_leafcutter: {
    kind: "leafcutter", name: "A leafcutter trail",
    text: "🐜 A leafcutter ant trail, worn bare by millions of feet, each ant carrying a piece of leaf bigger than itself.\n\nThey do not eat the leaves. Underground they chew them into a mulch and grow a fungus on it, and the fungus is what they eat - the ants are farmers, and were farming tens of millions of years before people were. They even weed: bacteria living on the ants' bodies make an antibiotic that keeps other moulds out of the garden. One nest can hold several million ants.",
  },
  lm_bromeliad: {
    kind: "bromeliad", name: "A bromeliad",
    text: "🪴 A bromeliad, growing on a branch with no soil at all. Its leaves grow in a tight rosette that catches rain, so the middle of the plant is a small pond - and a whole community lives in it: insect larvae, crabs in some places, and frogs.\n\nA strawberry poison frog mother carries each of her tadpoles up a tree on her back to a bromeliad pool of its own. Then she comes back every few days and lays an unfertilised egg in the water for it to eat. There is nothing else in that pool for a tadpole to live on.",
  },
  lm_clay_lick: {
    kind: "claylick", name: "The clay lick",
    text: "🦜 A clay lick. Macaws and parrots come down here in noisy flocks to bite mouthfuls out of the bank.\n\nWhy is not fully settled. The old answer was that clay soaks up the poisons in the unripe seeds parrots eat. But the big licks are mostly in the western Amazon, far from the sea, where there is very little salt in anything - and the birds pick the patches of clay with the most sodium. Salt is now thought to be the main reason, and the poison-binding may help too.",
  },
  lm_kapok: {
    kind: "kapok", name: "The kapok tree",
    text: "🌳 A kapok, standing clear above the rest of the forest - they can top sixty metres. The great fins at its base are buttress roots, holding up a tree that grows in thin rainforest soil.\n\nIts flowers open at night and are pollinated by bats. Its seed pods are full of a light fluff that sheds water, once used to stuff life jackets. To the Maya it was the world tree, its roots in the underworld and its crown in the sky - and harpy eagles, the most powerful eagles alive, often nest in the crowns of trees like this one.",
  },
});

Object.assign(LM_SHAPES, {
  stranglerfig: (bg) => {
    const root = "#9a8466", host = "#5e5a52", leaf = "#3f7a3a";
    return propWrap(bg,
      `<ellipse cx="16" cy="9" rx="14.4" ry="7.4" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="11.6" cy="6.6" rx="6" ry="3" fill="${sh(leaf, 0.2)}" opacity=".6"/>` +
      `<rect x="12" y="13" width="8" height="16" fill="${host}"/>` +
      `<g stroke="${root}" stroke-width="1.6" fill="none" stroke-linecap="round">` +
      `<path d="M12,14 Q15,18 12,22 Q15,26 12.6,29"/><path d="M20,14 Q17,18 20,22 Q17,26 19.4,29"/>` +
      `<path d="M16,13 Q13,17 16,21 Q19,25 16,29"/><path d="M12,18 L20,20"/><path d="M12,25 L20,24"/></g>` +
      `<path d="M10,29 Q11,25 12.6,24 M22,29 Q21,25 19.4,24" stroke="${root}" stroke-width="2" fill="none"/>` +
      `<g fill="#b04a6a">` + [[8, 10], [13, 7], [20, 9], [24, 7], [17, 12]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1"/>`).join("") + `</g>`);
  },
  leafcutter: (bg) => {
    const earth = "#8a6a45", leaf = "#6fae3a";
    const ant = (x, y, r) => `<g transform="translate(${x},${y}) rotate(${r})">` +
      `<path d="M-1.6,-4.4 L1.8,-3.2 L0.4,-0.6 Z" fill="${leaf}" stroke="#2e5a1a" stroke-width=".3"/>` +
      `<ellipse cx="0" cy="0" rx="1.1" ry=".7" fill="#5a2a14"/><ellipse cx="1.5" cy="0" rx=".7" ry=".6" fill="#5a2a14"/></g>`;
    return propWrap(bg,
      `<ellipse cx="22" cy="23" rx="8.4" ry="5.2" fill="${earth}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="22" cy="21.6" rx="2.4" ry="1.4" fill="${PROP_DARK}"/>` +
      `<path d="M2,27 Q9,24 14,24 Q18,24 20,22" stroke="${sh(earth, 0.18)}" stroke-width="3.4" fill="none" stroke-linecap="round"/>` +
      ant(5, 25.4, -12) + ant(9.6, 24, -6) + ant(14, 23.6, 0) + ant(18, 22.6, -18) +
      `<path d="M8,12 Q10,7 16,8 Q12,9 11,13 Z" fill="${leaf}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M16,8 L19,13" stroke="#2e5a1a" stroke-width=".6"/>`);
  },
  bromeliad: (bg) => {
    const leaf = "#4f8a3a", red = "#c0392b";
    const spike = (a, len, col) => {
      const r = a * Math.PI / 180, x = 16 + Math.sin(r) * len, y = 22 - Math.cos(r) * len;
      return `<path d="M${16 + Math.cos(r) * 2.2},${22 + Math.sin(r) * 1.2} L${x.toFixed(1)},${y.toFixed(1)} L${16 - Math.cos(r) * 2.2},${22 - Math.sin(r) * 1.2} Z" fill="${col}" stroke="${PROP_OUT}" stroke-width=".6" stroke-linejoin="round"/>`;
    };
    return propWrap(bg,
      [-70, -45, 45, 70].map((a) => spike(a, 13, leaf)).join("") +
      [-25, 25].map((a) => spike(a, 14, sh(leaf, 0.15))).join("") +
      [-58, 58, 0].map((a) => spike(a, 9, red)).join("") +
      `<ellipse cx="16" cy="19.6" rx="4.4" ry="1.8" fill="#3d7b95" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      // the frog on the rim
      `<ellipse cx="19.6" cy="18.4" rx="1.8" ry="1.2" fill="#e8422e" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="20.6" cy="17.8" r=".4" fill="${PROP_DARK}"/>` +
      `<path d="M10,28 L22,28" stroke="#6b5442" stroke-width="3" stroke-linecap="round"/>`);
  },
  claylick: (bg) => {
    const clay = "#c07a4a";
    const bird = (x, y, body, wing) => `<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.6" fill="${body}" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<path d="M${x - 1},${y} L${x - 4.6},${y + 2.6} L${x - 1.6},${y + 1.2} Z" fill="${wing}"/>` +
      `<circle cx="${x + 2.2}" cy="${y - .8}" r="1.1" fill="${body}"/><path d="M${x + 3.2},${y - .8} l1,.6 l-1,.3 Z" fill="#e8e0c8"/>`;
    return propWrap(bg,
      `<path d="M2,29 L3,12 Q10,9 16,11 Q23,8 30,12 L30,29 Z" fill="${clay}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<g stroke="${sh(clay, -0.22)}" stroke-width=".8" fill="none"><path d="M4,17 Q16,15 29,17"/><path d="M4,22 Q16,20 29,22"/></g>` +
      `<g fill="${sh(clay, -0.35)}"><ellipse cx="9" cy="19" rx="1.2" ry=".8"/><ellipse cx="19" cy="24" rx="1.2" ry=".8"/><ellipse cx="25" cy="18" rx="1.2" ry=".8"/></g>` +
      `<path d="M3,12 Q10,8 16,10.4 Q23,7 30,11" stroke="#4f8a3a" stroke-width="2.4" fill="none"/>` +
      bird(10, 15.6, "#d0312d", "#2a6ab0") + bird(21, 20.6, "#2a7ab8", "#e8c030") + bird(24, 14, "#d0312d", "#3a8a3a"));
  },
  // First drawn pale grey with one flat crown, and at map size it read as a
  // street lamp. A kapok is a giant: a tall trunk and a broad, layered crown,
  // spread wider than anything around it.
  kapok: (bg) => {
    const bark = "#8a7a62", leaf = "#3f7a34";
    return propWrap(bg,
      `<ellipse cx="7" cy="8.4" rx="7" ry="4" fill="${sh(leaf, -0.1)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<ellipse cx="25" cy="8.4" rx="7" ry="4" fill="${sh(leaf, -0.1)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<ellipse cx="16" cy="6" rx="10" ry="5" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="12.4" cy="4.4" rx="5" ry="2" fill="${sh(leaf, 0.22)}" opacity=".6"/>` +
      `<ellipse cx="23.6" cy="7.4" rx="3.6" ry="1.4" fill="${sh(leaf, 0.2)}" opacity=".5"/>` +
      `<path d="M14.4,10 L14,24 L17.6,24 L17.2,10 Z" fill="${bark}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      // the buttress roots, fanning out like fins
      `<path d="M14,19 Q9,26 5,29 L12,29 Q13,25 14.6,23 Z" fill="${sh(bark, -0.08)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M17.6,19 Q23,26 27,29 L20,29 Q19,25 17,23 Z" fill="${sh(bark, -0.08)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M15.2,22 L14.4,29 L17.4,29 L16.6,22 Z" fill="${bark}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M13,10 Q8,8 4,8.6 M19,10 Q24,8 28,8.6" stroke="${sh(bark, -0.2)}" stroke-width="1.4" fill="none"/>` +
      `<g fill="#f2ede0" stroke="#b0a88a" stroke-width=".3"><ellipse cx="7" cy="9" rx="1.4" ry=".9"/><ellipse cx="24" cy="9.4" rx="1.4" ry=".9"/></g>`);
  },
});

// Canopy Town's own thing: a hammock slung between two posts under the palms.
Object.assign(DECOR_SHAPES, {
  hammock: (bg) => propWrap(bg,
    `<path d="M4,29 L5,9 M28,29 L27,9" stroke="#6b5442" stroke-width="2" stroke-linecap="round"/>` +
    `<path d="M5,12 Q16,26 27,12 Q16,21 5,12 Z" fill="#d05a3a" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<g stroke="#f2c14a" stroke-width="1.2" fill="none"><path d="M8,15.4 Q16,23 24,15.4"/></g>` +
    `<path d="M5,12 L8,15 M27,12 L24,15" stroke="#c9b48a" stroke-width=".7"/>`),
});
Object.assign(DECOR_SCALE, { hammock: [1.35, 1.2] });

Object.assign(SIGNS, {
  "route3:gate": "🪧 '⟵ EMERALD CANOPY WALK. Up into the trees.'",
  "route3:gate2": "🪧 'WHISPERING CAVE ⟶  Mind your head, and your step.'",
  "seg_j1:gate": "🪧 '⟵ THE QUIET LEAF. A shrine in the palms. Something old sleeps there.'",
  "seg_j3:gate": "🪧 '⟵ THE SLOW BOUGH. A shrine in the palms. Something old sleeps there.'",
  "town4:gate": "🪧 'SINGING DUNES ⟶ north, through the arena. The desert road.'",
});
