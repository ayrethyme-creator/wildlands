// ---------- Part 126: THE FOSSIL RIFT'S LANDMARKS ----------
// The Fossil Rift rebuilt full size (design/tools/forge_fossil.py, data in
// part127), 2026-09-26. Same rules as the other landmark parts. The people in
// the digs tell a story about fossils being taken and sold; nothing here
// touches it.

Object.assign(LANDMARKS, {
  lm_field_jacket: {
    kind: "fieldjacket", name: "A field jacket",
    text: "🦴 A fossil wrapped for the journey: soaked paper against the bone, then strips of sacking dipped in plaster, left to set hard. It is the same idea as a cast on a broken arm - the plaster holds everything in place so nothing cracks on the way to the lab.\n\nSome jackets weigh several tonnes. Many museums have jackets on their shelves that were dug up decades ago and still have not been opened - there are more fossils coming out of the ground than people to prepare them.",
  },
  lm_chirotherium: {
    kind: "trackway", name: "The hand-beast tracks",
    text: "🐾 Footprints in rock that was once mud, and they look like hands - four fingers and what seems to be a thumb. When prints like these were found in Germany in the 1830s they were named Chirotherium, \"hand beast\", and for about a century nobody knew what had made them.\n\nThe answer turned out to be an early relative of crocodiles, walking upright on its back legs. The \"thumb\" was its outer toe. You can know an animal by its footprints long before you ever find its bones.",
  },
  lm_coelophysis: {
    kind: "skeleton", name: "The Coelophysis bed",
    text: "🦖 Bones on bones: dozens of small, slender early dinosaurs, jumbled together in one layer. At Ghost Ranch in New Mexico a single quarry held hundreds of skeletons of Coelophysis, probably killed together in a drought or a flood and washed into one place.\n\nIt is one of the best-known early dinosaurs because of it. In 1998 a Coelophysis skull was even carried into space on the Space Shuttle, to the Mir space station and back.",
  },
  lm_ichthyosaur: {
    kind: "ichthyosaur", name: "The ichthyosaur",
    text: "🐬 The outline of an ichthyosaur in the old sea floor - a reptile shaped like a dolphin. Some ichthyosaur fossils have been found with babies inside them, and one with a baby partway out, tail first, the way whales and dolphins are born, so it would not drown.\n\nThey never came ashore to lay eggs; they gave birth at sea. One of the first complete ichthyosaur skeletons was found on the English coast in the early 1800s by Mary Anning and her brother, when she was about twelve.",
  },
  lm_sauropod_tracks: {
    kind: "trackway", name: "The giants' trackway",
    text: "🐾 Huge round footprints in a line, and more lines beside it, all heading the same way. Sauropods - the long-necked giants - walked here together.\n\nTrackways like this, in Colorado and Texas and elsewhere, were among the first real evidence that some dinosaurs lived in herds. Bones tell you what an animal was. Footprints tell you what it was doing, and who it was with.",
  },
  lm_archaeopteryx: {
    kind: "archaeopteryx", name: "The feathered one",
    text: "🪶 In the fine limestone, the print of a small animal with feathered wings - and teeth, clawed fingers and a long bony tail. Archaeopteryx was found in Bavaria in 1861, just two years after Darwin's book on evolution, and it looked exactly like the half-bird, half-reptile his idea said should have existed.\n\nWe now know of many feathered dinosaurs. Birds did not just come from dinosaurs: birds are dinosaurs - the only ones still alive.",
  },
  lm_amber: {
    kind: "amber", name: "Amber",
    text: "🟠 Amber: resin that wept from an ancient tree, trapped whatever it touched, and turned to stone. Insects, spiders, flowers, feathers - even, in one piece found in 2016, the tail of a small feathered dinosaur.\n\nWhat it cannot keep is DNA. A study of old bones worked out that DNA falls apart steadily over time, half of it gone every few centuries. After millions of years there is nothing left to read. The mosquito in the amber is real; the dinosaur it bit cannot be brought back.",
  },
  lm_ammonite: {
    kind: "ammonite", name: "The ammonites",
    text: "🐚 Coiled shells everywhere in this layer: ammonites, relatives of squid and octopus that swam the seas for over three hundred million years and died out with the dinosaurs.\n\nThey are how geologists tell the time. Ammonites changed quickly - each kind lived only a short while before the next replaced it - so if you know which ammonite is in a rock, you know roughly how old the rock is, anywhere in the world.",
  },
  lm_maiasaura: {
    kind: "nest", name: "The good mothers' nests",
    text: "🥚 Nests in a colony, bowls scooped in the ground a few metres apart - and in them, the bones of babies. In Montana in 1978 scientists found nests like this and named the dinosaur Maiasaura: \"good mother lizard\".\n\nThe babies' leg bones were not yet strong enough to walk far, but their teeth were worn from eating - which suggested their parents brought food to the nest. It changed the picture of dinosaurs from cold monsters to animals that cared for their young.",
  },
  lm_ashfall: {
    kind: "skeleton", name: "The ashfall skeletons",
    text: "🦏 Whole skeletons lying where the animals fell, still in one piece. At Ashfall in Nebraska, about twelve million years ago, a volcano hundreds of kilometres away dropped a thick blanket of ash over a waterhole.\n\nThe animals that came to drink - rhinos, horses, camels - breathed the ash in and died over the following weeks. Some rhinos have their last meal of grass in their throats, and some mothers have unborn calves inside them. A disaster for them; a perfect moment kept for us.",
  },
  lm_kpg_boundary: {
    kind: "boundary", name: "The line in the rock",
    text: "🪨 A thin grey stripe running through the cliff, no thicker than a finger. Below it, dinosaurs. Above it, none.\n\nIn 1980 a father and son, Luis and Walter Alvarez, found that this layer is full of iridium - a metal that is rare on Earth but common in asteroids - and it is there all around the world. They said an asteroid had hit. Ten years later the crater was found, buried under Mexico. Everything that happened on the last day is written in this one line.",
  },
});

// A few drawings shared between the landmarks above.
Object.assign(LM_SHAPES, {
  fieldjacket: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="21" rx="12" ry="7" fill="#eee8da" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<g stroke="#c8b890" stroke-width="1.4" fill="none"><path d="M6,17 Q16,24 26,17"/><path d="M5,22 Q16,29 27,22"/><path d="M10,15 L12,27"/><path d="M20,15 L19,27"/></g>` +
    `<text x="16" y="21.6" font-size="4" text-anchor="middle" fill="#8a6a45" font-family="sans-serif">F-127</text>` +
    `<path d="M22,6 L26,12 L24,13 L20,7 Z" fill="#8a8a90" stroke="${PROP_OUT}" stroke-width=".5"/><path d="M20,7 L14,11" stroke="#6b5238" stroke-width="1.4"/>`),
  trackway: (bg) => {
    const print = (x, y, r) => `<g transform="translate(${x},${y}) rotate(${r})"><ellipse cx="0" cy="0" rx="2" ry="2.4" fill="#8a7a5a"/>` +
      [-1.8, -0.6, 0.6, 1.8].map((dx) => `<ellipse cx="${dx}" cy="-2.8" rx=".55" ry="1" fill="#8a7a5a"/>`).join("") + `</g>`;
    return propWrap(bg,
      `<rect x="2" y="4" width="28" height="25" rx="3" fill="#c9b690" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      print(9, 25, -10) + print(14, 20, 5) + print(10, 14, -8) + print(15, 9, 6) +
      print(22, 25, -4) + print(25, 17, 8) + print(21, 11, -6));
  },
  skeleton: (bg) => {
    const bone = "#eee6d2";
    return propWrap(bg,
      `<ellipse cx="16" cy="22" rx="14" ry="6.4" fill="#b8a07a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<g stroke="${bone}" stroke-width="1.3" fill="none" stroke-linecap="round">` +
      `<path d="M5,20 Q10,16 16,18 Q22,20 27,17"/>` +
      [8, 11, 14, 17, 20].map((x) => `<path d="M${x},${17.4 + (x - 14) * (x - 14) * 0.02} l-.6,3.4"/>`).join("") +
      `<path d="M12,19 L10,24 M18,19.6 L19,24.6"/></g>` +
      `<path d="M27,17 L30,15.4 L30.6,17.6 L28,18.4 Z" fill="${bone}" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<circle cx="29" cy="16.4" r=".4" fill="${PROP_DARK}"/>`);
  },
  ichthyosaur: (bg) => propWrap(bg,
    `<rect x="2" y="6" width="28" height="22" rx="3" fill="#c0b49a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<path d="M4,17 Q10,11 19,13 Q24,14 27,17 Q24,19 19,20 Q10,22 4,17 Z" fill="none" stroke="#6b5a44" stroke-width="1.2"/>` +
    `<path d="M4,17 L2,13.6 M4,17 L2,20.6" stroke="#6b5a44" stroke-width="1.2"/>` +
    `<path d="M27,17 L30,16.6" stroke="#6b5a44" stroke-width="1.2"/><circle cx="24.4" cy="16" r="1.2" fill="none" stroke="#6b5a44" stroke-width=".8"/>` +
    `<path d="M13,19 L11,23 M17,19.6 L16,23" stroke="#6b5a44" stroke-width="1"/>` +
    `<path d="M8,17 Q10,15.6 12,17 Q10,18.2 8,17 Z" fill="none" stroke="#6b5a44" stroke-width=".8"/>`),
  archaeopteryx: (bg) => propWrap(bg,
    `<rect x="3" y="3" width="26" height="26" rx="2" fill="#e0d4b8" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<g stroke="#6b5a44" stroke-width=".9" fill="none" stroke-linecap="round">` +
    `<path d="M16,9 Q15,14 16,19 Q17,24 22,27"/><path d="M16,13 Q10,9 5,12"/><path d="M16,13 Q22,9 27,11"/>` +
    [6, 8, 10, 12].map((x) => `<path d="M${x},${12 - (x - 6) * 0.3} l-.4,4"/>`).join("") +
    [20, 22, 24, 26].map((x) => `<path d="M${x},${11 - (26 - x) * 0.1} l.4,4"/>`).join("") +
    `<path d="M16,19 L13,23 M16,19 L18,23"/><circle cx="15.6" cy="7.6" r="1.6"/></g>`),
  amber: (bg) => propWrap(bg,
    `<path d="M8,26 Q4,18 9,10 Q15,4 22,8 Q29,13 26,22 Q22,29 14,28 Z" fill="#e8a33a" stroke="${PROP_OUT}" stroke-width="1" opacity=".92"/>` +
    `<ellipse cx="12" cy="12" rx="3.4" ry="1.8" fill="#fff0c0" opacity=".6"/>` +
    `<g transform="translate(17,18) rotate(-20)"><ellipse cx="0" cy="0" rx="2.6" ry="1" fill="#3a2a1e"/>` +
    `<path d="M-1,-.6 L-3,-3 M1,-.6 L2,-3.4 M-1,.6 L-3,3 M1,.6 L2.4,3" stroke="#3a2a1e" stroke-width=".4"/>` +
    `<ellipse cx="-.4" cy="-1.6" rx="1.8" ry=".7" fill="#c8d4dc" opacity=".6"/></g>`),
  ammonite: (bg) => propWrap(bg,
    `<rect x="2" y="6" width="28" height="22" rx="3" fill="#b8a888" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<circle cx="15" cy="17" r="9" fill="#d8c8a0" stroke="#6b5a44" stroke-width="1"/>` +
    `<path d="M15,17 m0,-6 a6,6 0 1,1 -.1,0 m.1,2 a4,4 0 1,0 .1,0 m-.1,2 a2,2 0 1,1 -.1,0" fill="none" stroke="#6b5a44" stroke-width=".8"/>` +
    [0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => { const r = a * Math.PI / 180; return `<path d="M${15 + Math.cos(r) * 6.2},${17 + Math.sin(r) * 6.2} L${15 + Math.cos(r) * 8.6},${17 + Math.sin(r) * 8.6}" stroke="#8a7a5a" stroke-width=".6"/>`; }).join("") +
    `<circle cx="25" cy="11" r="2.4" fill="#d8c8a0" stroke="#6b5a44" stroke-width=".6"/>`),
  nest: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="22" rx="13" ry="6" fill="#a08a68" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<ellipse cx="16" cy="21" rx="8.6" ry="3.6" fill="#6b5a44"/>` +
    `<g fill="#eee6d2" stroke="#b8a888" stroke-width=".4">` + [[12, 20], [15, 19.4], [18, 20], [13.6, 22], [17, 22.2], [20, 21.4]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.5" ry="1.1"/>`).join("") + `</g>` +
    `<g transform="translate(16,11)"><ellipse cx="0" cy="0" rx="3.6" ry="2.2" fill="#8a9a6a" stroke="${PROP_OUT}" stroke-width=".5"/>` +
    `<path d="M3,-.6 Q5.6,-3 6.6,-1.4 Q5.4,-.2 3.4,.6 Z" fill="#8a9a6a"/><circle cx="5.6" cy="-1.6" r=".4" fill="${PROP_DARK}"/></g>`),
  boundary: (bg) => propWrap(bg,
    `<rect x="2" y="3" width="28" height="26" rx="2" fill="#c0a47a" stroke="${PROP_OUT}" stroke-width=".9"/>` +
    `<rect x="2" y="3" width="28" height="10" fill="#d0b88a"/><rect x="2" y="16" width="28" height="13" fill="#a88a60"/>` +
    `<rect x="2" y="13" width="28" height="3" fill="#6a6a6a"/>` +
    `<path d="M5,23 Q8,21 11,23 M18,25 Q21,23 24,25" stroke="#eee6d2" stroke-width=".9" fill="none"/>` +
    `<path d="M22,6 L22,11 M20,8.6 L24,8.6" stroke="#f2ede0" stroke-width=".6"/>` +
    `<path d="M26,14.4 L30,14.4" stroke="#e8c547" stroke-width="1.2"/>`),
});

Object.assign(SIGNS, {
  "digsite:north": "🪧 '⬆ THE CRETACEOUS. The last of the dinosaurs, and the last day.'",
  "digsite:east": "🪧 'THE JURASSIC ⟶  Giants, ferns, and the first feathers.'",
  "digsite:south": "🪧 '⬇ THE TRIASSIC. After the Great Dying, the first dinosaurs.'",
});
