// ---------- Part 118: THE VOLCANIC COAST'S LANDMARKS, AND CINDER TOWN'S THINGS ----------
// The seventh region rebuilt (design/tools/forge_volcanic.py, data in
// part119), 2026-09-25. Same rules as the other landmark parts. The people here
// tell a story about rabbits and the grass they need; nothing here touches it.

Object.assign(LANDMARKS, {
  lm_first_plants: {
    kind: "firstplants", name: "The first plants",
    text: "🌱 Moss and lichen on bare lava, and a few tufts of grass in the cracks: the first life on new ground. Nobody planted it. Spores and seeds blow in, birds bring more, and each thing that grows makes a little soil for the next.\n\nScientists have watched this happen from the very start on Surtsey, an island that rose out of the sea off Iceland in 1963. It has been closed to everyone but researchers ever since. The first flowering plant turned up in 1965 - and it really took off once gulls began nesting there, and their droppings fed the ground.",
  },
  lm_gopher_mounds: {
    kind: "gophermounds", name: "Gopher mounds",
    text: "🐹 Little mounds of dark soil pushed up through the grey ash, with the first green growing on them. When Mount St Helens erupted in 1980 and buried the land in ash, pocket gophers living underground survived it.\n\nThey kept digging, and every mound they threw up mixed the old buried soil - full of seeds and fungi - back into the ash on top. Plants got going on the gopher mounds first. A few small animals nobody thought much of helped bring a mountainside back.",
  },
  lm_obsidian: {
    kind: "obsidian", name: "Obsidian",
    text: "🪨 Obsidian: volcanic glass, where lava cooled too fast to form crystals. Break it and the edge can be just a few molecules thick - sharper than a steel scalpel. Some surgeons still use obsidian blades.\n\nPeople have come to places like this for it for as long as there have been people. Every volcano's obsidian carries its own chemical fingerprint, so a blade found hundreds of kilometres away can be traced back to the flow it came from - which is how we know it was traded that far, thousands of years ago.",
  },
  lm_hot_vent: {
    kind: "hotvent", name: "The steam vent",
    text: "♨️ A steam vent, and hot pools ringed with rust, orange and green. The colours are living things: mats of microbes, each kind at home at its own temperature, so they lie in bands out from the hottest water.\n\nIn 1966 a microbe was found living in the hot springs of Yellowstone. It had an enzyme that still works at temperatures that ruin most others - and that enzyme made it possible to copy DNA quickly in a lab. It is in the tests that were used to find COVID. It came out of a pool like this one.",
  },
  lm_lava_tube: {
    kind: "lavatube", name: "The lava tube",
    text: "🕳️ A skylight into a lava tube. A river of lava crusted over on top, the molten rock inside kept flowing, and when it drained away it left a tunnel. Here the roof has fallen in.\n\nLava tubes become caves, with bats and animals found nowhere else - in Hawaii there is a blind spider that lives only in them. Scientists have spotted skylights like this on the Moon and on Mars, and think tubes there could one day shelter people from radiation.",
  },
  lm_maleo: {
    kind: "maleo", name: "The maleo's nesting ground",
    text: "🥚 Warm ground, dug over in pits. A maleo - a bird of Sulawesi - buries its huge eggs here, in soil heated by the volcano, and leaves. The parents never see their chicks.\n\nThe chick hatches underground, digs its own way up through the soil, and can fly the same day. It is alone from the start. Maleos are endangered now, mostly because people dig up the eggs, and some nesting grounds are guarded to give the chicks their chance.",
  },
  lm_volcanic_soil: {
    kind: "volcanicsoil", name: "The black soil",
    text: "🌿 Terraces of black soil, and everything in them growing hard. Volcanic ash breaks down into some of the richest soil there is: it holds water and is full of the minerals plants need.\n\nThat is why so many people farm on the slopes of volcanoes - on Java, around Vesuvius, in the highlands of Rwanda and Uganda - knowing what they are living on. \"We live on a volcano on purpose. The soil is worth it.\"",
  },
});

Object.assign(LM_SHAPES, {
  firstplants: (bg) => {
    const rock = "#4e3c36";
    return propWrap(bg,
      `<path d="M2,29 L4,17 Q10,12 16,14 Q23,11 29,17 L30,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<g stroke="${sh(rock, -0.3)}" stroke-width=".8" fill="none"><path d="M8,20 L12,24 L10,28"/><path d="M20,18 L18,23 L22,27"/></g>` +
      `<g fill="#b8c060" stroke="${PROP_OUT}" stroke-width=".3"><circle cx="7" cy="18" r="1.6"/><circle cx="24" cy="17" r="1.4"/><circle cx="15" cy="15" r="1.2"/></g>` +
      `<g fill="#6f9a3a"><ellipse cx="11" cy="23" rx="2.4" ry="1"/><ellipse cx="21" cy="21" rx="2" ry=".9"/></g>` +
      `<g stroke="#8ab04a" stroke-width="1" stroke-linecap="round"><path d="M12,24 L11,19"/><path d="M12,24 L13.6,19.4"/><path d="M19,23 L18.4,18.6"/><path d="M19,23 L20.4,19"/></g>` +
      `<circle cx="13.8" cy="18.6" r="1" fill="#e8c547"/>`);
  },
  gophermounds: (bg) => {
    const ashc = "#9a9290", soil = "#4a3424";
    const mound = (x, y, s) => `<ellipse cx="${x}" cy="${y}" rx="${5 * s}" ry="${2.6 * s}" fill="${soil}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<path d="M${x - 2 * s},${y - 1.6 * s} l${1 * s},${-2.4 * s} l${1 * s},${2.4 * s} M${x + 1 * s},${y - 1.6 * s} l${1.2 * s},${-2 * s}" stroke="#6f9a3a" stroke-width="${0.9 * s}" fill="none"/>`;
    return propWrap(bg,
      `<rect x="2" y="16" width="28" height="13" rx="3" fill="${ashc}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      mound(9, 22, 1) + mound(21, 20, 0.8) + mound(16, 26.4, 0.7) +
      `<g fill="#a08466" stroke="${PROP_OUT}" stroke-width=".4"><ellipse cx="25" cy="12" rx="3" ry="2.2"/><circle cx="27.4" cy="11.2" r="1.4"/></g>` +
      `<circle cx="28" cy="10.8" r=".4" fill="${PROP_DARK}"/>`);
  },
  obsidian: (bg) => {
    const glass = "#1e1a24";
    return propWrap(bg,
      `<path d="M4,28 L7,14 L13,9 L19,12 L25,8 L29,18 L27,28 Z" fill="${glass}" stroke="${PROP_OUT}" stroke-width="1" stroke-linejoin="round"/>` +
      `<g fill="#6a6a8a" opacity=".7"><path d="M8,15 L12,11 L13,15 Z"/><path d="M20,13 L24,10 L25,15 Z"/></g>` +
      `<g stroke="#b8b8d8" stroke-width=".7" fill="none" opacity=".8"><path d="M9,20 Q13,17 16,20"/><path d="M18,22 Q22,19 25,22"/></g>` +
      `<path d="M26,27 L30,24 L31,28 Z M2,27 L5,25 L5,29 Z" fill="${glass}" stroke="${PROP_OUT}" stroke-width=".5"/>`);
  },
  hotvent: (bg) => {
    return propWrap(bg,
      `<ellipse cx="16" cy="23" rx="14" ry="6" fill="#c0703f" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="23" rx="10.4" ry="4.4" fill="#e8a33a"/>` +
      `<ellipse cx="16" cy="23" rx="7" ry="3" fill="#6fae8a"/>` +
      `<ellipse cx="16" cy="23" rx="4" ry="1.8" fill="#3a8ab0"/>` +
      `<g stroke="#eef2f4" stroke-width="1.6" fill="none" opacity=".75" stroke-linecap="round">` +
      `<path d="M14,19 Q11,15 14,11 Q17,7 14,3"/><path d="M19,19 Q22,15 19,11 Q16,8 19,5"/></g>`);
  },
  lavatube: (bg) => {
    const rock = "#5c443c";
    return propWrap(bg,
      `<path d="M2,26 Q4,10 16,9 Q28,10 30,26 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="19" rx="9" ry="6" fill="${PROP_DARK}"/>` +
      `<path d="M9,17 Q16,13 23,17" stroke="${sh(rock, 0.25)}" stroke-width="1" fill="none"/>` +
      `<g fill="${sh(rock, -0.2)}" stroke="${PROP_OUT}" stroke-width=".5"><ellipse cx="6" cy="26" rx="3" ry="1.6"/><ellipse cx="26" cy="26.4" rx="3.2" ry="1.6"/><ellipse cx="11" cy="28" rx="2" ry="1"/></g>` +
      `<g fill="#1a1414"><path d="M14,21 l-2,-1.2 l1.2,-.2 l.8,-.8 l.8,.8 l1.2,.2 Z"/></g>`);
  },
  maleo: (bg) => {
    const sand = "#87756a";
    return propWrap(bg,
      `<ellipse cx="16" cy="24" rx="14" ry="5" fill="${sand}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="9" cy="24" rx="3.4" ry="1.6" fill="${sh(sand, -0.3)}"/><ellipse cx="22" cy="25" rx="3" ry="1.4" fill="${sh(sand, -0.3)}"/>` +
      `<ellipse cx="9" cy="23.4" rx="1.6" ry="1.1" fill="#f2e8d8" stroke="#c8b8a0" stroke-width=".4"/>` +
      `<g stroke="#e8e0e0" stroke-width=".9" fill="none" opacity=".6"><path d="M22,22 Q20,19 22,16"/><path d="M25,23 Q27,20 25,17"/></g>` +
      // the maleo, black with its pink breast and helmet
      `<ellipse cx="14" cy="14" rx="5.6" ry="3.8" fill="#1e1a18" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<ellipse cx="15.4" cy="15.6" rx="3.4" ry="1.8" fill="#f0b8a8"/>` +
      `<circle cx="19" cy="10.6" r="2.2" fill="#e8c8a8" stroke="${PROP_OUT}" stroke-width=".5"/>` +
      `<ellipse cx="18.8" cy="8.2" rx="1.6" ry="1.2" fill="#1e1a18"/>` +
      `<path d="M21,11 L22.6,11.6 L21,12 Z" fill="#c05a3a"/><circle cx="19.6" cy="10.4" r=".4" fill="${PROP_DARK}"/>` +
      `<path d="M13,17.6 L12.6,20.6 M15,17.6 L15.4,20.6" stroke="#4a4038" stroke-width=".7"/>`);
  },
  volcanicsoil: (bg) => {
    const soil = "#2e2420", plant = "#5a9a3a";
    return propWrap(bg,
      `<path d="M2,29 L2,22 L30,22 L30,29 Z" fill="${soil}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M5,22 L5,16 L27,16 L27,22" fill="${sh(soil, 0.1)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<path d="M9,16 L9,11 L23,11 L23,16" fill="${sh(soil, 0.18)}" stroke="${PROP_OUT}" stroke-width=".8"/>` +
      `<g fill="${plant}" stroke="#2e5a1a" stroke-width=".3">` +
      [[6, 21], [11, 21], [16, 21], [21, 21], [26, 21], [8, 15], [13, 15], [18, 15], [24, 15], [11, 10], [16, 10], [21, 10]]
        .map(([x, y]) => `<path d="M${x},${y} q-2,-2 0,-4 q2,2 0,4 Z"/>`).join("") + `</g>` +
      `<g fill="#c0392b">` + [[16, 9.4], [8, 14.4], [21, 20.4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".8"/>`).join("") + `</g>`);
  },
});

// Cinder Town's own thing: a smith's forge, fire in it.
Object.assign(DECOR_SHAPES, {
  forge: (bg) => propWrap(bg,
    `<rect x="4" y="12" width="14" height="15" rx="1.4" fill="#6a5a50" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<rect x="7" y="17" width="8" height="6" rx="1" fill="#2a1a14"/>` +
    `<path d="M8,23 Q9,19 11,21 Q12,17 14,22 Z" fill="#f0902a"/><path d="M9.6,23 Q11,20 12.4,23 Z" fill="#ffd060"/>` +
    `<rect x="9" y="5" width="4" height="7" fill="#5a4a40" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<path d="M20,22 L29,22 L27.6,24 L25,24 L25,27 L23,27 L23,24 L21.4,24 Z" fill="#3a3a40" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<path d="M11,4 Q9,2 11,0" stroke="#c8c0c0" stroke-width=".9" fill="none" opacity=".7"/>`),
});
Object.assign(DECOR_SCALE, { forge: [1.25, 1.35] });

Object.assign(SIGNS, {
  "seg_v3:gate": "🪧 '⟵ THE BANKED HEARTH. A shrine by the vents. Something old sleeps there.'",
  "town8:gate": "🪧 'GLOAMWOOD ⟶ north, through the arena. The old forest road.'",
  "town8:gate2": "🪧 'EMBERGLASS SHORE ⟶  Black sand and warm sea.'",
});
