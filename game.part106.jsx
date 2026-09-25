// ---------- Part 106: LANDMARKS, THINGS TO FIND, AND THE GROUND UNDER THINGS ----------
// Ayr, 2026-09-24, on the rebuilt savanna: "Each area is very empty now. It
// needs more variety and more content." Asked which kinds of content, Ayr
// chose three: landmarks to examine, things to find, and animals you can see.
// This file is the first two. The animals are part87.
//
// A LANDMARK is a single feature you walk up to and read - the great baobab
// Baobab Base is named after, a weaver colony, a termite mound. Each says one
// real thing about why it matters to the animals around it, in the same voice
// as the field guide. Written on the map as the glyph "Ω", which nothing else
// in the game uses, so it is solid, bumpable, and drawn by nothing but this.
//
// A FIND is something lying on the ground to pick up: a ranger's pouch with a
// few treats or berries or coins in it, the way Fire Red leaves an item ball
// at the end of a side path. Once each, remembered in the save by an id that
// is not its position (see part103 on why that matters).
//
// Both come from the region data (mapforge's g.landmark / g.find) and are put
// in place by part105 only when their region is applied.

// "map:x,y" -> the landmark standing there, with its id
const LANDMARK_AT = {};
// "map:x,y" -> { id, item, n }
const FIND_AT = {};

/* THE GROUND UNDER A THING. Anything standing on a tile - a tree, a person, a
   lamp, a flower - stands in whatever surrounds it. It used to always stand on
   bare earth, which was invisible while the whole world was earth and drew a
   tan box under every tree once the savanna became grassland. Two or more
   grassy neighbours means grass; the taller grass wins a tie, because a thing
   in the middle of a field of long grass is in the long grass. */
const groundUnder = (rows, x, y, pal) => {
  let short = 0, tall = 0;
  [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
    const c = (rows[y + dy] || "")[x + dx];
    if (c === "g") short++;
    // an animal standing in the long grass (part87) is still long grass
    else if (c === "G" || c === "⁘") tall++;
  });
  if (short + tall < 2) return pal.ground;
  return tall >= short ? pal.grass : pal.grass2;
};

/* ---------------------------------------------------------------- the words
   Each one answers "why does this matter", not "what is this" - see Ayr's rule
   that a fact without its reason teaches nobody. Every claim here is one that
   is well established in the literature, and the uncertain ones say so. */
const LANDMARKS = {
  lm_great_baobab: {
    kind: "baobab", name: "The great baobab",
    text: "🌳 The great baobab. Its trunk is mostly water - the wood is soft and spongy, and the tree swells after rain and shrinks through the dry months. In a hard drought, elephants gouge the bark to get at it.\n\nSome baobabs have been radiocarbon-dated at over two thousand years old. Since about 2005, most of Africa's very oldest have died or lost their oldest trunks, and nobody is yet certain why. Heat and drought are the leading suspects.",
  },
  lm_weaver_acacia: {
    kind: "weaver", name: "A weaver colony",
    text: "🪺 A sociable weaver colony: one nest, built by hundreds of birds together, with a separate chamber for each pair. The thatch keeps the inside cooler than the air by day and warmer by night, which in the Kalahari is the difference between a good night and a dead bird.\n\nA nest can be used for a century. Pygmy falcons move into the spare chambers - and now and then eat their landlords.",
  },
  lm_termite_mound: {
    kind: "termite", name: "A termite mound",
    text: "🐜 A termite mound, taller than you. Almost nobody lives in the tower - the colony is underground. The tower is a lung: air moves through it as the day warms and cools, carrying the stale air of the nest below away from the colony and the fungus garden it farms for food.\n\nMounds make richer soil than the plain around them, so they become islands of trees. When a colony dies, mongooses, warthogs and snakes move into the tunnels.",
  },
  lm_mud_wallow: {
    kind: "wallow", name: "A mud wallow",
    text: "🐗 A mud wallow. Warthogs have almost no working sweat glands and elephants very few, so mud does the job: it cools as it dries, and the crust keeps off the sun and the biting flies.\n\nEvery animal that leaves carries some of the wallow away on its skin, so it gets a little deeper every year - until it holds rainwater long after the grass has dried, and the frogs arrive.",
  },
  lm_fence_break: {
    kind: "fence", name: "The old fence",
    text: "🪵 A post from the old fence, the wire slack now. Fences like it were run across the Kalahari to keep wild buffalo - and the foot-and-mouth disease they carry - away from cattle, and at that they worked.\n\nThey also cut across the routes wildebeest walk to water. In the drought of 1983, tens of thousands of wildebeest died along veterinary fences in Botswana, walking the wire toward water they could not reach. A fence that stops a disease also stops a migration.",
  },
  lm_honeyguide: {
    kind: "honeyguide", name: "The honeyguide's stump",
    text: "🐦 A greater honeyguide is watching you from the stump. It eats beeswax, but it cannot break into a hive - so it leads people to one, chattering and flying ahead, and eats what is left once they have taken the honey.\n\nIn Mozambique the Yao honey-hunters call to it with a trilled \"brrr-hm\", and a 2016 study found the call roughly doubles the chance that a honeyguide will lead them at all. The famous story that it guides honey badgers the same way has never been reliably seen.",
  },
  lm_marula: {
    kind: "marula", name: "The old marula",
    text: "🍈 An old marula, dropping fruit. Elephants will walk a long way for these, and the seeds they pass come up somewhere new - a stand of marulas is partly planted by elephants.\n\nThe story that elephants get drunk on fermented marulas is told everywhere. Scientists who did the arithmetic found an elephant would have to eat an impossible amount of rotting fruit to feel it, and elephants mostly eat them fresh.",
  },
  lm_kopje: {
    kind: "kopje", name: "The kopje",
    text: "🪨 A kopje - an island of old granite in a sea of grass. Rain runs off the rock into the cracks and pools, so trees root here that the plain around it cannot grow, and grass fires pass it by.\n\nRock hyraxes live in the gaps and klipspringers balance on the ledges. Lions like the top: it is shady, it is high, and from up there the whole plain is a menu.",
  },
};

/* ---------------------------------------------------------------- the art
   Drawn the way part57 draws every prop - a 32x32 SVG with the same pale
   outline and the same soft shadow - so a landmark looks like it belongs to the
   same world as a hut or a lamp. Unlike a prop it has no background square: it
   is laid over the ground at twice a tile's size (landmarkImg, below). Each is the one
   thing its landmark is recognisable by: the baobab's bottle of a trunk, the
   weaver nest's haystack hanging under a flat acacia, the termite spire. */
const LM_SHAPES = {
  // A baobab is recognised by two things at once - the swollen bottle of a
  // trunk, and a crown of thick stubby branches spread far wider than the tree
  // is tall, bare-looking even in leaf. The first drawing had the trunk and a
  // few leaf dots on top, and at map size it read as a vase with flowers in it.
  baobab: (bg) => {
    const bark = "#a08466", leaf = "#6f8f3a";
    return propWrap(bg,
      `<g stroke="${sh(bark, -0.12)}" stroke-width="2.4" stroke-linecap="round" fill="none">` +
      `<path d="M12.6,14 Q9,11.6 5.4,10.4"/><path d="M13.6,13.4 Q11.6,9 9.6,5.6"/><path d="M16,13 L16,4.4"/>` +
      `<path d="M18.4,13.4 Q20.4,9 22.4,5.6"/><path d="M19.4,14 Q23,11.6 26.6,10.4"/></g>` +
      `<g stroke="${sh(bark, -0.12)}" stroke-width="1.2" stroke-linecap="round" fill="none">` +
      `<path d="M7.4,10.8 L4.4,7.6"/><path d="M24.6,10.8 L27.6,7.6"/><path d="M16,6.4 L13.4,3.6"/><path d="M16,6.4 L18.6,3.6"/></g>` +
      `<g fill="${leaf}" stroke="${PROP_OUT}" stroke-width=".5">` +
      [[4.6, 9.8], [4, 6.8], [9.2, 5], [13, 3], [19, 3], [22.8, 5], [28, 6.8], [27.4, 9.8], [16, 3.8]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.9"/>`).join("") + `</g>` +
      `<path d="M10.4,29 C8.6,23.4 9.4,17.6 12.2,13.4 L19.8,13.4 C22.6,17.6 23.4,23.4 21.6,29 Z" fill="${bark}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M13.6,16 C12.8,20 13,24.4 13.8,28" stroke="${sh(bark, -0.28)}" stroke-width="1" fill="none"/>` +
      `<path d="M18.4,16 C19.2,20 19,24.4 18.2,28" stroke="${sh(bark, 0.2)}" stroke-width="1" fill="none"/>` +
      `<path d="M15.2,18 Q16,19.6 16.8,18" stroke="${sh(bark, -0.3)}" stroke-width=".8" fill="none"/>`);
  },
  weaver: (bg) => {
    const trunk = "#6b5442", leaf = "#7f9a3c", straw = "#c9a55a";
    return propWrap(bg,
      `<path d="M15,29 L15.4,17 L16.6,17 L17,29 Z" fill="${trunk}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="16" cy="8.4" rx="13.2" ry="3.4" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<rect x="6.4" y="10.4" width="19.2" height="8" rx="3.6" fill="${straw}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M7.4,13.2 H24.6" stroke="${sh(straw, -0.24)}" stroke-width=".8"/>` +
      `<g fill="${PROP_DARK}">` + [9.4, 13.4, 17.8, 22].map((x) => `<ellipse cx="${x}" cy="17.2" rx="1" ry="1.3"/>`).join("") + `</g>`);
  },
  termite: (bg) => {
    const earth = "#b0703f";
    return propWrap(bg,
      `<path d="M9,29 Q10.4,19 13.6,11 Q15,4.2 16.8,5.6 Q19,11 21.4,18.6 Q23,24 23.2,29 Z" fill="${earth}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M19.6,15 Q23.6,13 24.6,17.4 Q24,21 21.8,21.6" fill="${sh(earth, -0.1)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M13.4,15 Q12.4,21 12.8,27" stroke="${sh(earth, 0.22)}" stroke-width="1" fill="none"/>` +
      `<g fill="${sh(earth, -0.42)}"><ellipse cx="16" cy="12" rx=".9" ry="1.2"/><ellipse cx="17.6" cy="19" rx="1" ry="1.3"/><ellipse cx="14.4" cy="23.4" rx="1" ry="1.3"/></g>`);
  },
  wallow: (bg) => {
    const mud = "#6e5236";
    return propWrap(bg,
      `<ellipse cx="16" cy="20" rx="13" ry="7.6" fill="${sh(mud, -0.18)}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="20.6" rx="10" ry="5.2" fill="${mud}"/>` +
      `<ellipse cx="12.4" cy="18.6" rx="4" ry="1.3" fill="${sh(mud, 0.34)}" opacity=".7"/>` +
      `<g fill="${sh(mud, -0.4)}"><path d="M22,16 a1.2,1.6 0 1 0 .1,0 Z"/><path d="M24.4,17.6 a1.2,1.6 0 1 0 .1,0 Z"/><path d="M8.6,23 a1.2,1.6 0 1 0 .1,0 Z"/></g>`);
  },
  fence: (bg) => {
    const wood = "#8a6a45", wire = "#8f8f96";
    return propWrap(bg,
      `<path d="M2,14 Q9,17.4 16,15 Q23,12.6 30,16" stroke="${wire}" stroke-width=".9" fill="none"/>` +
      `<path d="M2,20 Q9,23.6 16,21 Q23,18.4 30,22.6" stroke="${wire}" stroke-width=".9" fill="none"/>` +
      `<path d="M13.6,29 L14.4,7.6 L18,6.4 L17.6,29 Z" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<path d="M15.6,10 L15.4,27" stroke="${sh(wood, -0.3)}" stroke-width=".8"/>` +
      `<path d="M6,29 Q7,25.4 8.4,29 M22.6,29 Q24.2,24.6 26,29" stroke="#7f9a3c" stroke-width="1.1" fill="none"/>`);
  },
  honeyguide: (bg) => {
    const wood = "#7a5c3a", bird = "#8a7a60";
    return propWrap(bg,
      `<rect x="9" y="17" width="14" height="12" rx="1.6" fill="${wood}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="17.4" rx="7" ry="2" fill="${sh(wood, 0.3)}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M10.4,13.4 L6.2,15.6 L10.8,15.2 Z" fill="${sh(bird, -0.2)}"/>` +
      `<ellipse cx="14.4" cy="12.6" rx="4.8" ry="3.4" fill="${bird}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<circle cx="18.6" cy="9.8" r="2.6" fill="${bird}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M21,9.6 L23.2,10.2 L21,10.8 Z" fill="#e2a6a0"/>` +
      `<circle cx="19.2" cy="9.2" r=".6" fill="${PROP_DARK}"/>` +
      `<path d="M15.6,16 L15,17.4 M17,16 L17.4,17.4" stroke="${PROP_DARK}" stroke-width=".6"/>`);
  },
  marula: (bg) => {
    const trunk = "#6b5442", leaf = "#5f8a36", fruit = "#e3c24a";
    return propWrap(bg,
      `<path d="M14.6,29 L15,17 L17,17 L17.4,29 Z" fill="${trunk}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<ellipse cx="16" cy="11" rx="12" ry="8" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="13" cy="8.4" rx="6" ry="3" fill="${sh(leaf, 0.2)}" opacity=".6"/>` +
      `<g fill="${fruit}" stroke="${sh(fruit, -0.3)}" stroke-width=".4">` +
      [[9.6, 12], [14, 14.6], [19.6, 12.6], [22.4, 9], [11.6, 7.6], [17.4, 8.4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2"/>`).join("") + `</g>` +
      `<g fill="${fruit}"><circle cx="8.4" cy="28" r="1"/><circle cx="23" cy="27.4" r="1"/></g>`);
  },
  kopje: (bg) => {
    const rock = "#9a9288";
    return propWrap(bg,
      `<ellipse cx="11" cy="23.4" rx="8.6" ry="5.8" fill="${sh(rock, -0.08)}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="21.4" cy="24" rx="7.8" ry="5.2" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="13.4" rx="7.4" ry="6" fill="${sh(rock, 0.08)}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="14" cy="11.4" rx="3.4" ry="1.8" fill="${sh(rock, 0.34)}" opacity=".6"/>` +
      `<path d="M22.6,9 Q24.6,4.6 27,6.6 Q25.4,8.6 23.4,9.6" fill="#7f9a3c" stroke="${PROP_OUT}" stroke-width=".6"/>`);
  },
};
/* THINGS A TOWN IS MADE OF. Ayr, 2026-09-24: "The towns do need more things."
   A town was a clinic, a shop, a hut or two and a lot of bare ground. These are
   what a savanna village actually has lying about - a well, market stalls, a
   granary raised off the ground against termites and rats, vegetable plots
   fenced against goats, crates, somewhere to sit. They are scenery: solid, drawn
   a little over a tile like everything that stands up, and they say nothing
   when bumped, the same as a tree. Placed with mapforge's g.decor(). */
const DECOR_SHAPES = {
  well: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="22" rx="10" ry="4.6" fill="#8a8278" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M6,22 L6,17 Q16,13.4 26,17 L26,22 Q16,26.6 6,22 Z" fill="#a39a8e" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<ellipse cx="16" cy="17" rx="10" ry="3.6" fill="#2e3a44" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<path d="M8,17 L8,5.4 M24,17 L24,5.4" stroke="#6b5442" stroke-width="1.8"/>` +
    `<path d="M6.4,6 L25.6,6" stroke="#6b5442" stroke-width="2.2" stroke-linecap="round"/>` +
    `<path d="M16,6 L16,11.6" stroke="#9a9aa0" stroke-width=".7"/>` +
    `<rect x="14" y="11.4" width="4" height="3.4" rx=".6" fill="#8a5a2e" stroke="${PROP_OUT}" stroke-width=".6"/>`),
  stall: (bg) => propWrap(bg,
    `<rect x="6" y="15" width="20" height="10" fill="#b08a5a" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M6,15 L6,29 M26,15 L26,29" stroke="#6b5442" stroke-width="1.6"/>` +
    `<path d="M3.6,11 L28.4,11 L26,15 L6,15 Z" fill="#c0392b" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<g fill="#f2ede0">` + [8.4, 14.6, 20.8].map((x) => `<path d="M${x},11 L${x + 3.1},11 L${x + 2.8},15 L${x + .6},15 Z"/>`).join("") + `</g>` +
    `<g fill="#e3a23a" stroke="#8a5a2e" stroke-width=".4"><circle cx="10" cy="14" r="1.6"/><circle cx="13" cy="14" r="1.6"/></g>` +
    `<g fill="#7f9a3c" stroke="#4a5e22" stroke-width=".4"><circle cx="19.4" cy="14" r="1.6"/><circle cx="22.4" cy="14" r="1.6"/></g>`),
  granary: (bg) => propWrap(bg,
    `<path d="M9,29 L10.4,21 M23,29 L21.6,21 M16,29 L16,21" stroke="#6b5442" stroke-width="1.6"/>` +
    `<rect x="7.4" y="11" width="17.2" height="11" rx="3" fill="#c9a878" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M5,12.4 L16,3.6 L27,12.4 Z" fill="#a3773c" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
    `<path d="M9,10.4 L16,5 L23,10.4" stroke="${sh("#a3773c", -0.3)}" stroke-width=".9" fill="none"/>` +
    `<rect x="14" y="14.4" width="4" height="4.4" rx=".8" fill="#6b4a2e"/>`),
  garden: (bg) => propWrap(bg,
    `<rect x="3.6" y="12" width="24.8" height="15" fill="#7a5c3a" stroke="${PROP_OUT}" stroke-width=".8"/>` +
    `<g fill="#6f9a3a" stroke="#3f5e1e" stroke-width=".4">` +
    [[8, 16], [14, 16], [20, 16], [25, 16], [8, 22], [14, 22], [20, 22], [25, 22]]
      .map(([x, y]) => `<path d="M${x},${y + 2} Q${x - 2},${y} ${x},${y - 2.4} Q${x + 2},${y} ${x},${y + 2} Z"/>`).join("") + `</g>` +
    `<g stroke="#a08466" stroke-width="1.1"><path d="M3,11.4 L29,11.4"/><path d="M3,27.6 L29,27.6"/></g>` +
    `<g fill="#8a6a45">` + [3, 9.4, 16, 22.6, 29].map((x) => `<rect x="${x - .8}" y="9.4" width="1.6" height="19.6"/>`).join("") + `</g>`),
  crates: (bg) => propWrap(bg,
    `<rect x="4" y="15" width="12" height="12" fill="#b08a5a" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<rect x="16" y="17.4" width="11" height="9.6" fill="#a07a4a" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<rect x="8.6" y="5" width="11" height="10" fill="#c09a66" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<g stroke="#6b5442" stroke-width=".9"><path d="M4,15 L16,27 M16,15 L4,27"/><path d="M8.6,5 L19.6,15"/><path d="M16,17.4 L27,27"/></g>`),
  bench: (bg) => propWrap(bg,
    `<rect x="4" y="15.4" width="24" height="3.6" rx="1" fill="#a07a4a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<rect x="4" y="10" width="24" height="3.2" rx="1" fill="#b08a5a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<g fill="#6b5442"><rect x="6" y="19" width="2" height="8"/><rect x="24" y="19" width="2" height="8"/>` +
    `<rect x="6.4" y="13.2" width="1.6" height="2.2"/><rect x="24" y="13.2" width="1.6" height="2.2"/></g>`),
};
// How much larger than a tile each stands, and how tall. A well and a granary
// stand up; a garden bed lies flat on its own square.
const DECOR_SCALE = {
  well: [1.25, 1.4], stall: [1.3, 1.35], granary: [1.2, 1.5], garden: [1.1, 1.05],
  crates: [1.1, 1.2], bench: [1.1, 1.05],
};

/* THE GATEWAY. Ayr: the entrances to the separate areas - the shrines where
   the legendaries are - were "not obvious enough that it's a path way". The
   road ran to the edge of the map and the camera drew forest past it, so it
   read as a dead end. Now every doorway on a rebuilt map gets this arch over
   it, and part103 draws the road carrying on through the trees beyond it. */
const GATE_IMG = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 32 32">` +
  `<g fill="#9a9288" stroke="#f6f2e8" stroke-width="1">` +
  `<rect x="3" y="6" width="5" height="24" rx="1"/><rect x="24" y="6" width="5" height="24" rx="1"/></g>` +
  `<path d="M1.4,7.4 Q16,1.4 30.6,7.4 L30.6,10.6 Q16,5 1.4,10.6 Z" fill="#b0a89a" stroke="#f6f2e8" stroke-width="1"/>` +
  `<g fill="#7a746a"><rect x="4.4" y="13" width="2.2" height="1.4"/><rect x="25.4" y="18" width="2.2" height="1.4"/></g>` +
  `<path d="M26.6,6 Q28.6,2.6 30.4,4" stroke="#7f9a3c" stroke-width="1.2" fill="none"/>` +
  `</svg>`)}")`;

/* LANDMARKS ARE DRAWN LARGE. A landmark's trunk - the part you bump into -
   is one solid tile, but the drawing stands about twice the size of a tile,
   rising over the ground behind it, the way Fire Red's big trees stand two
   tiles tall. At one tile the great baobab read as a vase: a landmark has to
   be the thing you notice from across the map, or it is just another prop.
   So the tile underneath draws as plain ground and this image is laid over it,
   with no background of its own. */
const LM_SCALE_W = 2.1, LM_SCALE_H = 2.3;
const LM_IMG_CACHE = {};
// One lookup for anything drawn over a solid tile - a landmark or a piece of a
// town - since both are the same thing to the map: a tile you cannot walk onto,
// with a drawing standing on it.
const landmarkImg = (kind) => {
  if (!(kind in LM_IMG_CACHE)) {
    const fn = LM_SHAPES[kind] || DECOR_SHAPES[kind];
    LM_IMG_CACHE[kind] = fn ? `url("data:image/svg+xml,${encodeURIComponent(fn("none"))}")` : null;
  }
  return LM_IMG_CACHE[kind];
};
// [width, height] in tiles.
const markScale = (kind) => DECOR_SCALE[kind] || [LM_SCALE_W, LM_SCALE_H];

// The signposts at the gateways, naming where the road goes.
Object.assign(SIGNS, {
  "seg_m2:gate": "🪧 '⟵ THE TRAMPLED ROUND. A shrine in the trees. Something old sleeps there.'",
  "seg_m4:gate": "🪧 '⟵ THE HOLLOW MOUND. A shrine in the trees. Something old sleeps there.'",
  "town1:gate": "🪧 'THE NATURALIST'S ARCHIVE ⟶  Assessments, and a quiet place to read.'",
  "town2:gate": "🪧 '⟵ HEARTHSIDE. The breeders' road. Champions only, for now.'",
});

/* A ranger's pouch - the one shape every find is drawn as, so that once you
   have picked up one you know the rest on sight, the way everyone who played
   Fire Red knows an item ball. It has no background of its own: it lies on top
   of whatever the tile is, which is how a pouch in long grass stays in it. */
const FIND_IMG = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 32 32">` +
  `<ellipse cx="16" cy="27.6" rx="6.4" ry="1.8" fill="#000" opacity=".24"/>` +
  `<path d="M11,27 Q8.8,20.4 13,17.4 L19,17.4 Q23.2,20.4 21,27 Z" fill="#8a5a2e" stroke="#f6f2e8" stroke-width="1"/>` +
  `<path d="M12.4,17.4 L13.6,13.6 L18.4,13.6 L19.6,17.4 Z" fill="#9c6a38" stroke="#f6f2e8" stroke-width=".8"/>` +
  `<rect x="12.6" y="16.4" width="6.8" height="1.8" rx=".9" fill="#5c3a1c"/>` +
  `<path d="M13.2,21 Q16,23 18.8,21" stroke="#5c3a1c" stroke-width=".8" fill="none"/>` +
  `<path d="M24,9 L24.8,11.4 L27.2,12.2 L24.8,13 L24,15.4 L23.2,13 L20.8,12.2 L23.2,11.4 Z" fill="#fff3b8"/>` +
  `</svg>`)}")`;

// What a find's item is called, from the shop's own list, so the name in the
// message is the name in the bag.
const findName = (item) => {
  if (item === "coins") return "₡";
  const it = SHOP_STOCK.find((s) => s.key === item);
  return it ? it.n : item;
};
