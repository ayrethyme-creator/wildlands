// ---------- Part 124: THE SIDE AREAS' LANDMARKS ----------
// The side areas rebuilt full size (design/tools/forge_sides.py, data in
// part125), 2026-09-25. Ayr: "The side areas need to be bigger actually."
// Same rules as the other landmark parts.

Object.assign(LANDMARKS, {
  lm_bramble: {
    kind: "bramble", name: "The bramble and the oak",
    text: "🌿 A young oak coming up through a tangle of bramble. That is not an accident. Deer, cattle and rabbits eat almost every tree seedling they can reach - but not through a mouthful of thorns. The bramble keeps them off until the tree is tall enough to look after itself.\n\nThere is an old saying in England: \"the thorn is the mother of the oak.\" Many of the oldest trees in open country started life exactly like this - and often from an acorn a jay buried and forgot.",
  },
  lm_canopy_fogging: {
    kind: "fogging", name: "The fogging tree",
    text: "🐞 A giant tree with a sheet spread out beneath it. In 1982 a scientist named Terry Erwin fogged the crowns of rainforest trees in Panama with insecticide and caught what fell out: from just nineteen trees of one kind, about 1,200 species of beetle, most of them never described.\n\nWorking out from that, he guessed there might be thirty million kinds of insect on Earth. Most estimates today are lower - several million - but his fogged trees showed how much life lives up in the canopy, where almost nobody had looked.",
  },
  lm_malleefowl: {
    kind: "malleefowl", name: "The malleefowl mound",
    text: "🥚 A great mound of sand and leaf litter, taller than your knee and wider than a car. A malleefowl built it. The leaves rotting inside give off heat, and that heat hatches the eggs buried in the middle.\n\nThe male keeps it at about 33 degrees for months. He pushes his beak into the mound to test it, and piles on sand to keep the heat in or scrapes it off to let heat out. When a chick hatches, it digs its own way out and walks away - it never meets its parents.",
  },
  lm_elephant_trees: {
    kind: "elephanttrees", name: "The broken trees",
    text: "🐘 Trees pushed over and stripped of bark. Elephants did this - to get at leaves, bark and roots, and sometimes just because.\n\nIt looks like damage, but it is part of why the savanna is a savanna. Knocking over trees keeps the grassland open for the grazers; where elephants have been wiped out, thorn scrub and woodland creep in. Where too many elephants are fenced into too small a space, though, they can strip the trees faster than they grow. It is a balance, and it needs room.",
  },
  lm_permafrost: {
    kind: "permafrost", name: "The frozen ground",
    text: "🧊 Dig down here and within a metre you hit ground that has not thawed for thousands of years: permafrost. It lies under about a quarter of the land in the northern half of the world.\n\nIt holds the remains of plants that died long ago and never rotted - roughly twice as much carbon as there is in the whole atmosphere. As the Arctic warms, the frost is thawing, and the rotting begins again, releasing carbon dioxide and methane. Buildings sink, trees tilt, and whole hillsides slump.",
  },
  lm_lynx_hare: {
    kind: "lynxhare", name: "Lynx and hare tracks",
    text: "🐾 Two sets of tracks in the snow: a snowshoe hare's, and a lynx's following them. The Canada lynx eats hares more than anything else, and their numbers are tied together.\n\nEvery ten years or so the hares boom and then crash, and the lynx boom and crash a year or two behind them. We know because the Hudson's Bay Company kept records of the furs trappers brought in, for more than a century - one of the most famous graphs in ecology came out of an old fur-trading ledger.",
  },
  lm_cave_bats: {
    kind: "cavebats", name: "The bat roost",
    text: "🦇 Bats hanging from the cave roof, thousands of them, and a heap of their droppings below. That guano feeds a whole community in the dark - beetles, mites, fungi - that lives nowhere but caves.\n\nIn 2006 a fungus that attacks bats while they hibernate was found in a cave in New York. White-nose syndrome has since killed millions of bats across North America. Cavers now clean their gear between caves, so as not to carry it from one to the next.",
  },
});

Object.assign(LM_SHAPES, {
  bramble: (bg) => {
    const thorn = "#6a3a4a", leaf = "#4a7a3a";
    return propWrap(bg,
      `<path d="M16,29 L16,9" stroke="#6b5238" stroke-width="1.6"/>` +
      `<ellipse cx="16" cy="7" rx="5" ry="4" fill="${sh(leaf, 0.15)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<g stroke="${thorn}" stroke-width="1.3" fill="none" stroke-linecap="round">` +
      `<path d="M3,28 Q6,16 12,19 Q15,21 14,26"/><path d="M29,28 Q26,15 20,18 Q17,20 18,26"/><path d="M5,20 Q10,12 16,16"/><path d="M27,21 Q22,13 16,16"/></g>` +
      `<g fill="${leaf}" stroke="${PROP_OUT}" stroke-width=".4">` + [[7, 18], [11, 23], [25, 18], [21, 23], [9, 14], [23, 14]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.8" ry="1.1"/>`).join("") + `</g>` +
      `<g fill="#2a1a2e">` + [[6, 22], [26, 22], [13, 18], [19, 18]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join("") + `</g>`);
  },
  fogging: (bg) => {
    const trunk = "#6b5238", leaf = "#3f7a3a";
    return propWrap(bg,
      `<ellipse cx="16" cy="7" rx="13" ry="5.4" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M14.6,12 L14,25 L18,25 L17.4,12 Z" fill="${trunk}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#e8eef4" opacity=".7"><ellipse cx="10" cy="7" rx="4" ry="2"/><ellipse cx="21" cy="6" rx="3.4" ry="1.8"/></g>` +
      `<path d="M3,23 L29,23 L27,28 L5,28 Z" fill="#f2ede0" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#1e1a18">` + [[8, 25], [12, 26], [20, 25], [24, 26], [16, 27]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx=".8" ry=".5"/>`).join("") + `</g>` +
      `<g fill="#c0392b"><ellipse cx="10" cy="26" rx=".7" ry=".5"/><ellipse cx="22" cy="27" rx=".7" ry=".5"/></g>`);
  },
  malleefowl: (bg) => {
    const sand = "#c9a26a", bird = "#8a7a60";
    return propWrap(bg,
      `<ellipse cx="16" cy="23" rx="14" ry="6.4" fill="${sand}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="20.6" rx="9" ry="3.4" fill="${sh(sand, 0.12)}"/>` +
      `<g fill="#6b5238">` + [[9, 22], [13, 20], [20, 21], [23, 24], [12, 25]].map(([x, y]) => `<path d="M${x},${y} l1.6,-.6 l-.4,1.2 Z"/>`).join("") + `</g>` +
      // the male, testing the mound with his beak
      `<ellipse cx="22" cy="14" rx="4.4" ry="2.8" fill="${bird}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#f2ede0" opacity=".7"><circle cx="20.4" cy="13" r=".6"/><circle cx="22.4" cy="14.6" r=".6"/><circle cx="24" cy="13.4" r=".6"/></g>` +
      `<path d="M18.6,13 Q16.6,14 16.4,17" stroke="${bird}" stroke-width="1.6" fill="none"/>` +
      `<circle cx="16.4" cy="17.4" r="1.4" fill="${bird}" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<path d="M16,18.6 L15.6,20" stroke="#3a3430" stroke-width=".8"/>`);
  },
  elephanttrees: (bg) => {
    const bark = "#8a7a5a";
    return propWrap(bg,
      `<path d="M5,27 L27,20" stroke="${bark}" stroke-width="3" stroke-linecap="round"/>` +
      `<path d="M22,22 L27,16 M18,23 L20,17 M24,21 L29,21" stroke="${bark}" stroke-width="1.4" stroke-linecap="round"/>` +
      `<path d="M5,27 Q3,25 2,27 M5,27 Q4,29.4 2,29 M5,27 Q7,29.6 8,28.6" stroke="#6b5238" stroke-width="1" fill="none"/>` +
      `<path d="M11,29 L12,13 L14,13 L15,29 Z" fill="#b8a888" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M12,13 L10,8 M14,13 L16,7" stroke="#b8a888" stroke-width="1.2"/>` +
      `<g stroke="#7a6a4a" stroke-width=".6"><path d="M12.4,17 L14.4,18"/><path d="M12.2,22 L14.6,23.4"/></g>` +
      `<g fill="#7f9a3c"><ellipse cx="25" cy="15" rx="2.6" ry="1.4"/><ellipse cx="28" cy="19" rx="2" ry="1.2"/></g>`);
  },
  permafrost: (bg) => {
    return propWrap(bg,
      `<rect x="3" y="6" width="26" height="23" rx="2" fill="#6b5442" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<rect x="3" y="6" width="26" height="5" rx="2" fill="#dce4ec"/>` +
      `<rect x="3" y="11" width="26" height="5" fill="#8a6a50"/>` +
      `<rect x="3" y="16" width="26" height="13" fill="#5a6a7a"/>` +
      `<g stroke="#c8dcec" stroke-width=".8" fill="none" opacity=".9"><path d="M6,19 L10,23 L8,27"/><path d="M16,18 L14,23 L18,27"/><path d="M24,19 L26,24"/></g>` +
      `<g fill="#3a2a1e"><path d="M11,20 l3,-1 l1,2 l-3,1 Z"/><path d="M20,24 l2,-2 l2,1 l-2,2 Z"/></g>` +
      `<path d="M8,6 L8,2 M22,6 L22,1" stroke="#6b5238" stroke-width="1.2"/>`);
  },
  lynxhare: (bg) => {
    const snow = "#eef2f6";
    const hare = (x, y) => `<g fill="#8fa0b0"><ellipse cx="${x}" cy="${y}" rx=".7" ry="1.1"/><ellipse cx="${x + 1.6}" cy="${y}" rx=".7" ry="1.1"/><circle cx="${x + 0.8}" cy="${y + 2.2}" r=".5"/></g>`;
    const lynx = (x, y) => `<g fill="#6a7a8a"><circle cx="${x}" cy="${y}" r="1.3"/><circle cx="${x - 1}" cy="${y - 1.6}" r=".45"/><circle cx="${x}" cy="${y - 2}" r=".45"/><circle cx="${x + 1}" cy="${y - 1.6}" r=".45"/></g>`;
    return propWrap(bg,
      `<ellipse cx="16" cy="18" rx="15" ry="11" fill="${snow}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      hare(5, 24) + hare(10, 19) + hare(15, 14) + hare(21, 11) + hare(26, 8) +
      lynx(6, 16) + lynx(11, 12.4) + lynx(16, 9.4));
  },
  cavebats: (bg) => {
    const rock = "#4a4438";
    const bat = (x, y) => `<g transform="translate(${x},${y})"><path d="M0,0 L-3,1.6 L-2,3 L-1,2 L0,3.6 L1,2 L2,3 L3,1.6 Z" fill="#1e1a18"/><path d="M0,0 L0,-1" stroke="#1e1a18" stroke-width=".5"/></g>`;
    return propWrap(bg,
      `<path d="M2,4 Q16,1 30,4 L30,9 Q16,6 2,9 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      bat(7, 9) + bat(12, 8.4) + bat(17, 8.2) + bat(22, 8.6) + bat(26, 9.4) + bat(10, 13) + bat(20, 12.6) +
      `<ellipse cx="16" cy="26" rx="10" ry="3.4" fill="#5a4a3a" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#c8b890"><circle cx="12" cy="25" r=".5"/><circle cx="18" cy="26" r=".5"/><circle cx="21" cy="25" r=".4"/></g>`);
  },
});

Object.assign(SIGNS, {
  "cave1:gate": "🪧 '⬆ THE QILIN'S SHRINE. Through the dark. Something old sleeps there.'",
});
