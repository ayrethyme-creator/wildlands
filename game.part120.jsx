// ---------- Part 120: THE GROVE'S LANDMARKS, GLOAM TOWN, AND VICTORY TRAIL ----------
// The eighth region rebuilt (design/tools/forge_grove.py, data in part121),
// 2026-09-25 - the end of the main road. Same rules as the other landmark
// parts. The people in the grove tell a story about insects and lights;
// nothing here touches it, and nothing here is about artificial light.

Object.assign(LANDMARKS, {
  lm_nurse_log: {
    kind: "nurselog", name: "The nurse log",
    text: "🪵 A giant that fell long ago, and a row of young trees growing out of it. A fallen trunk like this can take centuries to rot away, and all that time it is soft, damp and full of food - a better seedbed than the forest floor. The young trees root into it, and when it is finally gone they are left standing in a line, on stilts, where it lay.\n\nDead wood is one of the richest places in a forest. Beetles, fungi, mosses, woodlice, salamanders - a large share of forest life depends on it, and a tidy forest with the dead trees taken out loses them.",
  },
  lm_foxfire: {
    kind: "foxfire", name: "Foxfire",
    text: "✨ A faint green glow in the rotting stumps: foxfire. It is a fungus - the threads of honey fungus running through the dead wood give off their own light. Nobody is completely sure why; one idea, shown for some glowing mushrooms, is that the light draws in insects that carry the spores away.\n\nHoney fungus can get very big. One in Oregon spreads underground through nearly ten square kilometres of forest, and is thought to be thousands of years old - one of the largest living things on Earth.",
  },
  lm_fungal_web: {
    kind: "fungalweb", name: "The fungal web",
    text: "🍄 Mushrooms in a ring round the roots of the old trees - the fruit of a fungus that lives mostly underground. Its threads wrap the tree roots and trade with them: the tree gives it sugar, and the fungus brings back water and nutrients from soil the roots could never reach. Most plants on land live in partnerships like this.\n\nBecause many trees share the same fungi, the forest is linked underground. How much trees actually pass food or warnings to each other that way is argued over. Scientists who went back over the evidence in 2023 found it weaker than the popular story - the partnership is real, the talking trees less sure.",
  },
  lm_owl_pellet: {
    kind: "owlpellet", name: "Owl pellets",
    text: "🦉 Under the roost, grey lumps of fur: owl pellets. An owl swallows a mouse or vole whole and cannot digest the fur and bones, so it coughs them back up in a neat bundle.\n\nPull one apart and the skulls are often perfect - enough to tell exactly which shrews, voles and mice the owl caught. Scientists use them to find out which small mammals live in a place, without ever setting a trap.",
  },
  lm_woodpecker_tree: {
    kind: "woodpecker", name: "The woodpecker tree",
    text: "🐦 A dead tree still standing, and full of holes. Woodpeckers dig a fresh nest hole most years, and they are among the few birds that can.\n\nThe old holes do not go to waste. Owls, bats, nuthatches, flying squirrels, even ducks that nest in trees move into them - all animals that need a hole and cannot make their own. A standing dead tree can be home to more animals than a living one.",
  },
  lm_ancient_oak: {
    kind: "ancientoak", name: "The old oak",
    text: "🌳 The oldest thing in Gloam Town, by a very long way. Oaks like this can live for many centuries - there is an old saying that an oak spends three hundred years growing, three hundred living and three hundred dying.\n\nAll of that time it is feeding and housing other things. In Britain, scientists counted more than two thousand species that use native oaks - insects, birds, bats, lichens, fungi - and hundreds of them live on nothing else.",
  },
  lm_lichen: {
    kind: "lichen", name: "Lichen on the rocks",
    text: "🪨 Lichen on every stone: yellow, grey, orange. A lichen is two living things as one - a fungus and an alga, the fungus giving shelter and the alga making food from sunlight - which is how it lives on bare rock where nothing else can.\n\nSome grow less than a millimetre a year, so the size of the patches can be used to tell how long a rock has lain bare. They are tough beyond belief: two kinds of lichen were sent into space in 2005, left outside the spacecraft for over two weeks, and came back alive.",
  },
});

Object.assign(LM_SHAPES, {
  nurselog: (bg) => {
    const wood = "#6b5238", moss = "#5a8a4a";
    return propWrap(bg,
      `<path d="M2,24 Q2,19 7,19 L27,19 Q31,19 31,23.4 Q31,28 27,28 L7,28 Q2,28 2,24 Z" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="28" cy="23.4" rx="2.6" ry="4.2" fill="${sh(wood, 0.25)}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M4,19.6 Q16,17 29,19.6 L29,21 Q16,18.6 4,21 Z" fill="${moss}"/>` +
      [[8, 1], [15, 1.3], [22, 0.9]].map(([x, s]) =>
        `<path d="M${x},19 L${x},${19 - 7 * s}" stroke="${sh(wood, -0.1)}" stroke-width="${1.1 * s}"/>` +
        `<path d="M${x},${19 - 11 * s} L${x - 3.4 * s},${19 - 3 * s} L${x + 3.4 * s},${19 - 3 * s} Z" fill="#3f6a4a" stroke="${PROP_OUT}" stroke-width=".5"/>`).join("") +
      `<g fill="#d8a060"><circle cx="11" cy="22" r=".9"/><circle cx="19" cy="24" r=".8"/></g>`);
  },
  foxfire: (bg) => {
    const wood = "#4a3a2e", glow = "#9fffa0";
    return propWrap(bg,
      `<ellipse cx="16" cy="18" rx="12" ry="10" fill="${glow}" opacity=".18"/>` +
      `<path d="M8,29 L9,14 Q16,10 23,14 L24,29 Z" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="14" rx="7" ry="2.4" fill="${sh(wood, 0.2)}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<g stroke="${glow}" stroke-width=".9" fill="none" opacity=".9" stroke-linecap="round">` +
      `<path d="M11,18 Q13,21 11,24 Q10,26 12,28"/><path d="M16,17 Q18,21 16,25"/><path d="M21,18 Q19,22 21,26"/></g>` +
      `<g fill="${glow}"><circle cx="12" cy="16" r=".8"/><circle cx="20" cy="15.4" r=".7"/><circle cx="17" cy="27" r=".7"/></g>`);
  },
  fungalweb: (bg) => {
    const soil = "#3e3357", cap = "#c9784a";
    const shroom = (x, y, s) => `<path d="M${x - 0.8 * s},${y} L${x - 0.6 * s},${y - 3 * s} L${x + 0.6 * s},${y - 3 * s} L${x + 0.8 * s},${y} Z" fill="#f2ede0"/>` +
      `<path d="M${x - 3 * s},${y - 3 * s} Q${x},${y - 7 * s} ${x + 3 * s},${y - 3 * s} Z" fill="${cap}" stroke="${PROP_OUT}" stroke-width=".5"/>`;
    return propWrap(bg,
      `<rect x="2" y="18" width="28" height="11" rx="2" fill="${soil}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<g stroke="#f2ede0" stroke-width=".5" fill="none" opacity=".75">` +
      `<path d="M4,22 Q10,26 16,22 Q22,18 28,23"/><path d="M6,27 Q12,21 18,26 Q24,29 29,25"/><path d="M10,19 L12,28"/><path d="M21,19 L19,28"/></g>` +
      `<g stroke="#8a6a50" stroke-width="1.3" fill="none"><path d="M7,18 L5,24 M7,18 L9,25"/><path d="M25,18 L23,24 M25,18 L27,25"/></g>` +
      shroom(12, 18, 1) + shroom(17, 18, 1.2) + shroom(22, 18, 0.9));
  },
  owlpellet: (bg) => {
    const fur = "#8a8078";
    return propWrap(bg,
      `<path d="M20,10 Q24,4 28,6 L28,14 L20,14 Z" fill="#5a4a3a" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="24" cy="9.6" rx="3" ry="3.6" fill="#c8a878" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<g fill="${PROP_DARK}"><circle cx="23" cy="9" r=".6"/><circle cx="25" cy="9" r=".6"/></g>` +
      `<path d="M23.6,10.4 L24,11.4 L24.4,10.4 Z" fill="#e8a33a"/>` +
      [[8, 24, 0], [15, 26, 20], [11, 20, -15]].map(([x, y, r]) => `<g transform="translate(${x},${y}) rotate(${r})">` +
        `<ellipse cx="0" cy="0" rx="4" ry="2.2" fill="${fur}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
        `<path d="M-2,-.4 L1.4,.6 M-1,1 L1.8,-.6" stroke="#eee6d2" stroke-width=".6"/></g>`).join("") +
      `<g transform="translate(22,24)"><ellipse cx="0" cy="0" rx="2.4" ry="1.6" fill="#eee6d2" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="-.8" cy="-.2" r=".45" fill="${PROP_DARK}"/><path d="M1.6,.4 L3.4,1" stroke="#eee6d2" stroke-width=".7"/></g>`);
  },
  woodpecker: (bg) => {
    const wood = "#8a7a6a";
    return propWrap(bg,
      `<path d="M11,29 L12,4 L14,2 L20,3 L21,29 Z" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M12,9 L7,6 M20,14 L26,11" stroke="${wood}" stroke-width="1.6"/>` +
      `<g fill="${PROP_DARK}"><ellipse cx="16" cy="8" rx="1.4" ry="1.8"/><ellipse cx="17.4" cy="15" rx="1.6" ry="2"/><ellipse cx="15" cy="22" rx="1.5" ry="1.9"/></g>` +
      // a woodpecker on the trunk, and an owl looking out of a hole
      `<g transform="translate(22,19)"><ellipse cx="0" cy="0" rx="1.6" ry="3" fill="#1e1a18"/><circle cx="0" cy="-3" r="1.3" fill="#1e1a18"/>` +
      `<path d="M-.4,-4 L.8,-4.4 L.4,-3.2 Z" fill="#c0392b"/><path d="M-1.2,-3 L-3,-2.8" stroke="#8a8a8a" stroke-width=".6"/>` +
      `<path d="M-.6,-1 L.8,1.4" stroke="#f2ede0" stroke-width=".5"/></g>` +
      `<g><circle cx="17.4" cy="15" r="1.2" fill="#b8a080"/><circle cx="17" cy="14.8" r=".35" fill="#e8c547"/><circle cx="17.8" cy="14.8" r=".35" fill="#e8c547"/></g>`);
  },
  ancientoak: (bg) => {
    const bark = "#5a4a3a", leaf = "#4a6a3a";
    return propWrap(bg,
      `<ellipse cx="16" cy="9" rx="14.4" ry="7.4" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<g fill="${sh(leaf, 0.2)}" opacity=".6"><ellipse cx="9" cy="7" rx="4" ry="2.2"/><ellipse cx="22" cy="6" rx="4" ry="2"/></g>` +
      `<path d="M10,29 Q11,20 12,15 L20,15 Q21,20 22,29 Z" fill="${bark}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M12,16 Q8,13 5,12 M20,16 Q24,13 27,12 M15,15 Q14,11 13,9" stroke="${bark}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
      `<g stroke="${sh(bark, -0.3)}" stroke-width=".7" fill="none"><path d="M13,19 Q14,23 13,27"/><path d="M18,18 Q19,22 18.6,27"/></g>` +
      `<ellipse cx="16.4" cy="21" rx="1.4" ry="2" fill="${PROP_DARK}"/>` +
      `<g fill="#b08a3a"><circle cx="7" cy="11" r=".8"/><circle cx="24" cy="10" r=".8"/><circle cx="14" cy="5" r=".7"/></g>`);
  },
  lichen: (bg) => {
    const rock = "#8a919e";
    return propWrap(bg,
      `<path d="M3,28 Q2,18 9,14 Q16,10 23,13 Q30,17 29,28 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M7,17 Q14,12 22,15" stroke="${sh(rock, 0.25)}" stroke-width="1.2" fill="none"/>` +
      `<g stroke="${PROP_OUT}" stroke-width=".4">` +
      `<ellipse cx="11" cy="20" rx="3.4" ry="2.4" fill="#d8c040"/><ellipse cx="20" cy="18" rx="2.6" ry="1.8" fill="#e08a3a"/>` +
      `<ellipse cx="17" cy="24" rx="3" ry="2" fill="#b8c8a8"/><ellipse cx="24" cy="23" rx="2" ry="1.6" fill="#d8c040"/></g>` +
      `<g stroke="#6a6a2a" stroke-width=".4" fill="none"><path d="M9,20 Q11,18 13,20"/><path d="M15,24 Q17,22 19,24"/></g>`);
  },
});

Object.assign(SIGNS, {
  "route8:gate": "🪧 '⟵ WHISPERING TAIGA. Spruce and bog, a long way north.'",
  "seg_g3:gate": "🪧 '⟵ THE LONG SHADOW. A shrine in the trees. Something old sleeps there.'",
  "town9:gate": "🪧 'VICTORY TRAIL ⟶ north, through the arena. The Citadel is at the top.'",
  "town9:gate2": "🪧 '⟵ THE VIGIL GATE. For Champions.'",
  "route9:gate": "🪧 'THE SUMMIT CITADEL ⬆ Eight badges, and the courage to use them.'",
});
