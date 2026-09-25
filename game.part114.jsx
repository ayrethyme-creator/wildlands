// ---------- Part 114: THE HIGHVELD'S LANDMARKS, AND CRAG TOWN'S THINGS ----------
// The fifth region rebuilt (design/tools/forge_highveld.py, data in part115),
// 2026-09-25. Same rules as the other landmark parts. The people on these maps
// tell a story about a fence between them; nothing here touches it.

Object.assign(LANDMARKS, {
  lm_grass_roots: {
    kind: "grassroots", name: "Old grassland",
    text: "🌾 Old grassland. It looks like the plain has only just grown, but most of it is underground: the grasses and flowers here keep their roots, bulbs and growing buds below the surface, and they can be very old. When a fire runs through, or the herds graze it down, they simply grow back from beneath.\n\nThat is also why it cannot be put back once it is gone. Plough it and it takes many human lifetimes to return. So much of the highveld has been ploughed, planted with trees or mined that it is now one of South Africa's most threatened places.",
  },
  lm_whistling_thorn: {
    kind: "whistlethorn", name: "A whistling thorn",
    text: "🌳 A whistling thorn. Some of its thorns swell at the base into hollow bulbs, and ants live inside them. The tree feeds them nectar; in return they swarm out and bite anything that starts eating it. When the ants chew their way out of an empty bulb, it leaves a hole, and the wind blowing across the holes makes the whistle.\n\nThe ants are fierce enough to put off elephants - which will happily tear up almost any other tree. Where the ants are taken away, the trees get eaten.",
  },
  lm_aardvark_burrow: {
    kind: "aardvark", name: "An aardvark burrow",
    text: "🕳️ An aardvark has dug into this termite mound. It feeds at night, ripping mounds open with its front claws and licking up termites and ants by the tens of thousands.\n\nIt digs homes too - big burrows it uses for a while and then leaves. Dozens of other animals move into them: warthogs, porcupines, hyenas, jackals, mongooses, snakes, even birds and bats. On a hot plain a burrow is the coolest place there is. Lose the aardvarks and you lose the burrows.",
  },
  lm_dung_beetle: {
    kind: "dungbeetle", name: "The dung beetles",
    text: "🪲 Dung beetles, rolling balls of dung away from the waterhole in dead straight lines - straight, so they get away from the other beetles as fast as possible.\n\nAt night they steer by the Milky Way. Scientists found this in South Africa by testing them in a planetarium: with the Milky Way on the ceiling they rolled straight, and with it switched off they wandered. They were the first animals known to navigate by the galaxy. And by burying the dung, they feed the soil and clear away the flies' breeding grounds.",
  },
  lm_bone_anvil: {
    kind: "boneanvil", name: "A bone anvil",
    text: "🦴 A split bone on a flat rock. A bearded vulture did this. Bone makes up most of what it eats, and when a bone is too big to swallow, it carries it up high and drops it onto rocks to smash it - using the same few rocks for years.\n\nIts stomach acid is strong enough to dissolve the pieces. Its feathers are naturally white; the rusty orange of an adult comes from bathing in iron-rich mud, and nobody is quite sure why it does it.",
  },
  lm_rock_art: {
    kind: "rockart", name: "The rock paintings",
    text: "🎨 Paintings on the wall of the rock shelter, in red and white and black: people, and eland, again and again. They were made by San hunter-gatherers, some of them thousands of years ago.\n\nThe eland is painted more than any other animal in the Drakensberg, and not because it was the easiest to hunt - to the San it was a spiritual animal, tied to rain, healing and the trance dance, and many of these paintings are about that world rather than a day's hunting. Painted stones in Namibia go back around thirty thousand years.",
  },
});

Object.assign(LM_SHAPES, {
  grassroots: (bg) => {
    const soil = "#7a5c3a", grass = "#8d9a4a", root = "#e8d8b0";
    return propWrap(bg,
      `<rect x="3" y="13" width="26" height="16" rx="2" fill="${soil}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<g stroke="${root}" stroke-width=".8" fill="none" stroke-linecap="round">` +
      `<path d="M16,14 Q14,19 11,22 Q9,25 8,28"/><path d="M16,14 Q16,20 17,24 Q18,27 16,28.4"/><path d="M16,14 Q19,18 22,21 Q24,24 25,28"/>` +
      `<path d="M13,18 L10,19"/><path d="M19,18 L22,17"/><path d="M17,23 L20,25"/><path d="M11,22 L13,25"/></g>` +
      `<ellipse cx="9" cy="17" rx="1.8" ry="1.2" fill="#c9a26a" stroke="${root}" stroke-width=".4"/>` +
      `<g stroke="${grass}" stroke-width="1.6" fill="none" stroke-linecap="round">` +
      `<path d="M16,13.6 Q12,8 9,3"/><path d="M16,13.6 Q15,7 16,2"/><path d="M16,13.6 Q19,7 23,3.4"/><path d="M16,13.6 Q13,10 10,8"/><path d="M16,13.6 Q20,10 24,9"/></g>` +
      `<path d="M3,13 L29,13" stroke="${sh(soil, 0.3)}" stroke-width=".8"/>`);
  },
  whistlethorn: (bg) => {
    const bark = "#5a4a3a", leaf = "#7f9a3c";
    return propWrap(bg,
      `<path d="M15,29 L15.6,15 L16.6,15 L17,29 Z" fill="${bark}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<path d="M16,16 L9,11 M16,16 L23,10 M16,15 L16,8" stroke="${bark}" stroke-width="1.4"/>` +
      `<ellipse cx="16" cy="8.4" rx="13" ry="3.6" fill="${leaf}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      // the swollen thorn bulbs, one with its whistle hole
      `<g fill="#3e2e22" stroke="${PROP_OUT}" stroke-width=".5">` +
      [[10, 13], [22, 12], [13, 18.6], [19.6, 17]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.7"/>`).join("") + `</g>` +
      `<g stroke="#f2ede0" stroke-width=".6">` + [[10, 13], [22, 12], [13, 18.6], [19.6, 17]].map(([x, y]) =>
        `<path d="M${x - 1.2},${y - 1.8} L${x - 2.6},${y - 3.2} M${x + 1.2},${y - 1.8} L${x + 2.6},${y - 3.2}"/>`).join("") + `</g>` +
      `<circle cx="22.6" cy="11.6" r=".45" fill="#f2ede0"/>` +
      `<g fill="#1e1a18"><circle cx="11.6" cy="14.4" r=".5"/><circle cx="12.4" cy="15" r=".4"/><circle cx="20.6" cy="18.4" r=".5"/></g>`);
  },
  aardvark: (bg) => {
    const earth = "#b0703f", pelt = "#9a7a62";
    return propWrap(bg,
      `<path d="M4,29 Q6,14 16,11 Q26,14 28,29 Z" fill="${earth}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M16,11 Q18,5 20,6 Q21,10 20,13" fill="${sh(earth, -0.1)}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="13" cy="24" rx="5" ry="4" fill="${PROP_DARK}"/>` +
      // an aardvark's snout and ears, poking out
      `<ellipse cx="13.4" cy="23.6" rx="3" ry="2.2" fill="${pelt}"/>` +
      `<path d="M15.4,24 L20.6,25.4 L20.6,26.4 L15,25.4 Z" fill="${pelt}" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<path d="M11.6,22 L10.6,17.6 L12.6,21.4 Z M13.6,21.6 L13.6,17.2 L14.8,21.4 Z" fill="${sh(pelt, 0.2)}" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="14.2" cy="23" r=".45" fill="${PROP_DARK}"/>` +
      `<g fill="${sh(earth, 0.25)}"><circle cx="22" cy="27" r="1"/><circle cx="24.4" cy="26" r=".8"/><circle cx="8" cy="28" r=".8"/></g>`);
  },
  dungbeetle: (bg) => {
    const dung = "#6b4a2e";
    return propWrap(bg,
      `<g fill="#fff8d0">` + [[4, 4], [9, 2.4], [15, 5], [22, 3], [28, 5.4], [26, 1.6], [12, 7.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".7"/>`).join("") + `</g>` +
      `<path d="M2,7 Q12,1 30,8" stroke="#e8e0ff" stroke-width="2.4" fill="none" opacity=".35" stroke-linecap="round"/>` +
      `<circle cx="11" cy="21" r="6.4" fill="${dung}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<g fill="${sh(dung, -0.25)}"><circle cx="9" cy="19" r="1"/><circle cx="13" cy="23" r="1.1"/><circle cx="12" cy="18" r=".7"/></g>` +
      // the beetle, head down, pushing with its back legs
      `<g transform="translate(21.6,23) rotate(20)"><ellipse cx="0" cy="0" rx="3.6" ry="2.6" fill="#1e1a18" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M3.4,0 L5,-.6 L5,.8 Z" fill="#1e1a18"/>` +
      `<path d="M-3,-1.6 L-6,-4 M-3,1.4 L-6.4,.6 M0,2.4 L1,5 M2,2.2 L4,4.6" stroke="#1e1a18" stroke-width=".8"/></g>` +
      `<path d="M3,28.6 L29,28.6" stroke="#c9a26a" stroke-width="1.2"/>`);
  },
  boneanvil: (bg) => {
    const rock = "#8a8278", bone = "#eee6d2";
    return propWrap(bg,
      `<path d="M3,29 L5,21 Q16,18 27,21 L29,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M5,21 Q16,18 27,21 L26,23 Q16,20.6 6,23 Z" fill="${sh(rock, 0.2)}"/>` +
      `<path d="M9,20.4 L14.6,19.6 M17.6,19.4 L23,20" stroke="${bone}" stroke-width="2.4" stroke-linecap="round"/>` +
      `<g fill="${bone}"><circle cx="8.4" cy="19.8" r="1.4"/><circle cx="23.6" cy="19.6" r="1.4"/></g>` +
      `<g fill="${bone}"><path d="M15,19 l1,-1.4 l.8,1.6 Z"/><path d="M16.4,21 l1.2,.4 l-.8,1 Z"/></g>` +
      // the vulture overhead, wings out
      `<path d="M4,8 Q10,4 15,8 Q16,6.6 17,8 Q22,4 28,8 Q22,7.6 17,10 L15,10 Q10,7.6 4,8 Z" fill="#3e3a36" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<circle cx="16" cy="7.6" r="1.3" fill="#e8a060"/>` +
      `<path d="M15,11 L16,14 L17,11 Z" fill="#3e3a36"/>`);
  },
  rockart: (bg) => {
    const rock = "#b8a48a", ochre = "#a8402a";
    return propWrap(bg,
      `<path d="M2,29 L2,8 Q8,3 16,4 Q25,3 30,9 L30,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M2,8 Q8,3 16,4 Q25,3 30,9 L30,12 Q24,7 16,7.6 Q8,7 2,12 Z" fill="${sh(rock, -0.2)}"/>` +
      // an eland, in ochre
      `<path d="M8,17 Q10,14.6 16,15 Q19,15 20,13.6 L21.6,12.4 L22.2,14 L21,15.6 Q20.6,17.4 18,18 L10,18.4 Q8.4,18.4 8,17 Z" fill="${ochre}"/>` +
      `<path d="M21.2,12.6 L20.6,10 M21.8,12.6 L22.6,10.2" stroke="${ochre}" stroke-width=".7"/>` +
      `<path d="M10,18 L9.6,21.6 M12,18.2 L12.2,21.8 M16.4,18.2 L16.6,21.6 M18,17.8 L18.6,21.4" stroke="${ochre}" stroke-width=".9"/>` +
      `<path d="M11,16 L17,16" stroke="#f2ede0" stroke-width=".7" opacity=".7"/>` +
      // two people
      `<g stroke="${ochre}" stroke-width=".9" fill="none"><path d="M24,24 L24,20 M24,21 L22.6,22.6 M24,21 L25.6,22 M24,24 L23,26.4 M24,24 L25,26.4"/>` +
      `<path d="M7,25 L7,21.6 M7,22.4 L5.6,23.4 M7,22.4 L8.4,23.8 M7,25 L6,27 M7,25 L8,27"/></g>` +
      `<g fill="${ochre}"><circle cx="24" cy="19.4" r=".8"/><circle cx="7" cy="21" r=".8"/></g>`);
  },
});

// Crag Town's own things: goats in stone pens, and cairns.
Object.assign(DECOR_SHAPES, {
  goats: (bg) => {
    const goat = (x, y, c) => `<ellipse cx="${x}" cy="${y}" rx="3.2" ry="2" fill="${c}" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<circle cx="${x + 3}" cy="${y - 1.6}" r="1.3" fill="${c}"/><path d="M${x + 2.6},${y - 2.8} q-.4,-1.6 -1.4,-1.8 M${x + 3.4},${y - 2.8} q.2,-1.6 1,-2" stroke="#6b5442" stroke-width=".5" fill="none"/>` +
      `<path d="M${x - 2},${y + 1.6} L${x - 2},${y + 3.6} M${x + 1.6},${y + 1.6} L${x + 1.6},${y + 3.6}" stroke="${sh(c, -0.4)}" stroke-width=".7"/>`;
    return propWrap(bg,
      `<path d="M2,27 L2,20 L30,20 L30,27" stroke="#8a8278" stroke-width="2.6" fill="none" stroke-linejoin="round"/>` +
      `<g fill="#8a8278" stroke="${PROP_OUT}" stroke-width=".4">` + [4, 10, 16, 22, 28].map((x) => `<rect x="${x - 2}" y="18.6" width="4" height="2.6" rx=".8"/>`).join("") + `</g>` +
      goat(9, 13, "#e8e0d0") + goat(20, 11, "#6b5442") + goat(15, 16, "#b8a48a"));
  },
  cairn: (bg) => propWrap(bg,
    `<g stroke="${PROP_OUT}" stroke-width=".7">` +
    `<ellipse cx="16" cy="26" rx="8" ry="3" fill="#8a8278"/><ellipse cx="15.4" cy="21.6" rx="6.4" ry="2.6" fill="#9a9288"/>` +
    `<ellipse cx="16.4" cy="17.4" rx="5" ry="2.2" fill="#7a746a"/><ellipse cx="15.8" cy="13.6" rx="3.8" ry="1.9" fill="#a39a8e"/>` +
    `<ellipse cx="16.2" cy="10.2" rx="2.6" ry="1.5" fill="#8a8278"/></g>`),
});
Object.assign(DECOR_SCALE, { goats: [1.4, 1.2], cairn: [1.0, 1.35] });

Object.assign(SIGNS, {
  "route5:gate": "🪧 '⟵ LONG GRASS SAVANNA. Tall grass, big cats. Keep to the path.'",
  "seg_s2:gate": "🪧 '⟵ THE OLD KILL. A shrine in the rocks. Something old sleeps there.'",
  "seg_s4:gate": "🪧 '⟵ THE UNSETTLED DUST. A shrine in the crags. Something old sleeps there.'",
  "town6:gate": "🪧 'FROSTMERE PASS ⟶ north, through the arena. The road into the snow.'",
});
