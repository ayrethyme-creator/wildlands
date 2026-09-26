// ---------- Part 128: THE VIGIL'S LANDMARKS ----------
// The Vigil rebuilt full size (design/tools/forge_vigil.py, data in part129),
// 2026-09-26. A memorial: "It does not sparkle" (part67). So each room gets one
// memorial stone, all alike, each adding something its two signs do not say -
// and the last room, as the keeper promised, is not sad.

// The zone's tree was a candle, drawn as an emoji on every edge tile: a wall of
// candles round every room. Drawn as a yew instead - the dark, long-lived tree
// of old memorial grounds - and the candles are left for the ground.
Object.assign(TILE_KIND, { "🕯️": "conifer", "🕯": "conifer" });

Object.assign(LANDMARKS, {
  lm_vigil_candles: {
    kind: "memorial", name: "The candles",
    text: "🕯️ A stone, and a candle for every kind of animal known to have gone since the year 1500. The official list counts more than nine hundred - and more again marked only \"possibly extinct\", because nobody has looked hard enough, for long enough, to be sure.\n\nMost of them were not hunted to the last one. They lost the place they lived, or met something we brought with us.",
  },
  lm_thylacine_film: {
    kind: "memorial", name: "The last film",
    text: "🎞️ Of the thylacine, the Tasmanian tiger, there is about a minute of moving film: an animal pacing a zoo enclosure in Hobart in 1933, yawning its enormous yawn at the camera.\n\nThat is almost all we have of how it moved. Nobody thought, while there was still time, that they needed to record more.",
  },
  lm_tiger_census: {
    kind: "memorial", name: "The count",
    text: "🐅 Not every number here goes down. India counted its wild tigers in 2006 and again in 2022, and the count had more than doubled, to over three thousand.\n\nIt happened where forests were protected, prey was allowed to recover, and people living next to tigers were paid for their losses. It can be done. It has to be chosen.",
  },
  lm_mammoth_steppe: {
    kind: "memorial", name: "The mammoth steppe",
    text: "🦣 In the last ice age a cold, dry grassland ran from Spain across Asia into Canada, perhaps the largest landscape on Earth, kept open by the grazing of mammoths, horses, bison and more. When the great grazers went, much of it turned to moss and scrub.\n\nIn Siberia there is an experiment called Pleistocene Park, where horses, bison and reindeer have been brought back to see whether grazing can turn the grassland back on.",
  },
  lm_dodo: {
    kind: "memorial", name: "What is left of the dodo",
    text: "🦤 Most dodo skeletons in museums are put together from the bones of many birds. The only soft tissue left anywhere is a head and a foot kept at Oxford.\n\nScientists took DNA from them, and found the dodo's closest living relative: the Nicobar pigeon, a shimmering green bird of islands in the Indian Ocean. The dodo was a giant pigeon that forgot how to be afraid.",
  },
  lm_martha: {
    kind: "memorial", name: "Martha",
    text: "🕊️ The last passenger pigeon was a female named Martha. She died at Cincinnati Zoo on 1 September 1914, alone in her cage. Her body was frozen in a block of ice and sent to the Smithsonian, where she still is.\n\nWe know the date. For most of the animals that have gone, nobody noticed the last one.",
  },
  lm_mosquito: {
    kind: "memorial", name: "The mosquito",
    text: "🦟 Hawaii had no mosquitoes until 1826, when a ship brought them in its water barrels. They carried bird malaria, and the islands' forest birds had never met it. Many kinds are gone; most of the rest now live only high on the mountains, where it is too cold for mosquitoes.\n\nAs the climate warms, the mosquitoes climb. Since 2023, millions of male mosquitoes carrying a bacterium that stops their eggs hatching have been released on Maui and Kauaʻi, to try to hold the line.",
  },
  lm_river_dolphin: {
    kind: "memorial", name: "The river dolphins",
    text: "🐬 There are only a few kinds of river dolphin left in the world, and all of them are in trouble. The South Asian river dolphins are nearly blind - in water that muddy, eyes are little use - and find their way by sound.\n\nIn Pakistan's Indus river, where the dolphins were protected and rescued from irrigation canals, their numbers rose from around twelve hundred in 2001 to about two thousand by 2017.",
  },
  lm_frozen_zoo: {
    kind: "memorial", name: "The frozen zoo",
    text: "🧊 In San Diego there is a Frozen Zoo: living cells from more than a thousand kinds of animal, kept in liquid nitrogen since 1975. Cells frozen from a Przewalski's horse in 1980 were used to make a foal born in 2020, bringing back family lines that had been lost.\n\nThe last two northern white rhinos are both female, but eggs taken from them have been made into embryos that a southern white rhino may one day carry. It is not a rescue yet. It is a door kept open.",
  },
  lm_chinampas: {
    kind: "memorial", name: "The floating gardens",
    text: "🌿 The canals of Xochimilco run between chinampas - garden plots built up out of the lake bed and farmed for many centuries. This is the axolotl's only wild home, and the water has grown dirty and crowded with fish that eat its young.\n\nSome farmers now line their canals with filters of reeds and water plants to keep them clean, making small refuges where axolotls can still breed. The old way of farming the lake may be what saves them.",
  },
  lm_arabian_oryx: {
    kind: "hope", name: "The oryx",
    text: "🌱 The Arabian oryx was hunted until, by 1972, none were left in the wild. A handful caught just before, and a few from private collections, became a herd in Arizona - and in 1982 their descendants were set free in the desert of Oman.\n\nIn 2011 it became the first animal ever to be moved from \"extinct in the wild\" back to merely \"vulnerable\". The keeper said the last room would not be sad. This is why.",
  },
});

Object.assign(LM_SHAPES, {
  memorial: (bg) => propWrap(bg,
    `<path d="M9,29 L9,10 Q9,4 16,4 Q23,4 23,10 L23,29 Z" fill="#5c6270" stroke="${PROP_OUT}" stroke-width="1"/>` +
    `<path d="M11,11 Q11,7 16,7 Q21,7 21,11" stroke="#7a8090" stroke-width=".8" fill="none"/>` +
    `<g stroke="#8a90a0" stroke-width=".7"><path d="M12,14 L20,14"/><path d="M12,17 L20,17"/><path d="M12,20 L18,20"/></g>` +
    `<path d="M9,27 Q12,25 15,27 Q18,25.4 23,27 L23,29 L9,29 Z" fill="#4a6a4a"/>` +
    `<rect x="25" y="23" width="2.4" height="5" fill="#eee6d2"/><path d="M26.2,23 Q25.2,21.4 26.2,20 Q27.2,21.4 26.2,23 Z" fill="#e8c547"/>`),
  hope: (bg) => propWrap(bg,
    `<ellipse cx="16" cy="27" rx="10" ry="2.6" fill="#6b5442"/>` +
    `<path d="M16,27 L16,12" stroke="#6b8a3a" stroke-width="1.6"/>` +
    `<path d="M16,17 Q10,14 8,9 Q14,10 16,15 Z" fill="#7fb04a" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<path d="M16,14 Q22,10 25,5 Q18,6 16,12 Z" fill="#8fc05a" stroke="${PROP_OUT}" stroke-width=".6"/>` +
    `<path d="M16,21 Q21,19 24,16 Q18,16 16,19 Z" fill="#6fa040" stroke="${PROP_OUT}" stroke-width=".5"/>`),
});

Object.assign(SIGNS, {
  "vigil:west": "🪧 '⟵ THE ROLL CALL. The Striped Hollow. The Ice Wake.'",
  "vigil:east": "🪧 'THE ISLAND GRAVE ⟶  The Sky That Darkened.'",
  "vigil:nw": "🪧 '⬆ THE LAST SONG. The Drowned Song.'",
  "vigil:ne": "🪧 '⬆ THE THIN EDGE. The Glass Ark. And what we kept.'",
});
