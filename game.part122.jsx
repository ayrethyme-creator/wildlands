// ---------- Part 122: THE SEA'S LANDMARKS, AND WHERE THE BOATS WENT ----------
// The seas rebuilt and moved (design/tools/forge_sea.py, data in part123),
// 2026-09-25. Ayr: "the ocean area is in the wrong challenge area, it needs to
// be further on in the game." The boats sail from Emberglass Shore now; the
// Cove's signs say so. Same rules for the landmarks as everywhere else.

Object.assign(LANDMARKS, {
  lm_tide_pool: {
    kind: "tidepool", name: "A tide pool",
    text: "⭐ A tide pool in the black rock, left behind by the sea: anemones, snails, mussels, and a starfish. Everything in here has to survive being baked in the sun and battered by waves twice a day.\n\nIn the 1960s a scientist named Robert Paine spent years prying the starfish off one stretch of rocky shore and throwing them back into the sea. Without them, mussels took over and crowded out most of the other life on the rocks. One hunter had been holding the whole shore together. He called it a keystone species - and the idea changed how we protect nature.",
  },
  lm_cleaning_station: {
    kind: "cleaning", name: "A cleaning station",
    text: "🐟 A cleaning station. Small striped cleaner wrasse set up on this coral head, and bigger fish come and queue - even predators that would eat a wrasse anywhere else. They hold still with their mouths and gills open while the cleaners pick off parasites and dead skin.\n\nTake the cleaners off a patch of reef and, in experiments, fewer fish come to it and fewer kinds. Cleaner wrasse are sharp, too: one study even reported them recognising themselves in a mirror, though scientists still argue about what that test shows in a fish.",
  },
  lm_kelp_forest: {
    kind: "kelpforest", name: "The kelp forest",
    text: "🌿 Giant kelp, rising from the rocks to the surface. It is not a plant but a seaweed - an alga - and it is one of the fastest-growing things on Earth: in good conditions, half a metre in a day. Gas-filled bulbs hold the fronds up toward the light.\n\nA kelp forest is a nursery and a shelter for fish, seals and otters. And it can vanish. After a marine heatwave in 2014 and a disease that wiped out the sea stars that eat sea urchins, the urchins boomed - and northern California lost more than nine tenths of its kelp forest.",
  },
  lm_whale_pump: {
    kind: "whalepump", name: "The whale's blow",
    text: "🐋 A whale surfacing to breathe, and the water round it stained green. Whales feed deep and come up to breathe - and to poo, and whale poo is full of the iron and nitrogen that tiny drifting plants need to grow.\n\nSo whales fertilise the sea. The plankton that bloom from it feed the fish and krill, and draw carbon out of the air as they grow. Scientists call it the whale pump - and it means the hunting that took most of the great whales made the oceans poorer as well as emptier.",
  },
  lm_sea_ice: {
    kind: "seaice", name: "The edge of the ice",
    text: "🐻‍❄️ The edge of the sea ice, and a polar bear's tracks along it. Polar bears hunt seals from the ice, waiting at breathing holes or stalking them where they rest. On land in summer there is little for them to eat, so they wait for the ice to come back.\n\nIn Canada's Hudson Bay the ice now breaks up earlier in spring and freezes later in autumn than it used to, so the bears spend longer fasting on shore. Under the ice there is life too: algae grow on its underside, and the whole polar food web begins there.",
  },
  lm_hydrothermal_vent: {
    kind: "vent", name: "The vent field",
    text: "🌋 Black smoke pouring from chimneys on the sea floor, hot enough to melt lead - and crowded with life. In 1977 scientists diving in a submarine found vents like these and were astonished: giant tube worms, clams, crabs, living where no sunlight has ever reached.\n\nNone of it runs on the sun. Bacteria feed on the chemicals in the vent water, and the tube worms, which have no mouth and no gut, keep those bacteria inside their bodies and live off them. Some scientists think life on Earth may have begun at vents like these.",
  },
});

Object.assign(LM_SHAPES, {
  tidepool: (bg) => {
    const rock = "#3a302c", water = "#4a9ab0";
    return propWrap(bg,
      `<path d="M2,27 Q2,14 10,12 Q16,10 23,12 Q30,14 30,27 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<ellipse cx="16" cy="20" rx="10" ry="5.4" fill="${water}" stroke="${sh(rock, 0.3)}" stroke-width=".8"/>` +
      `<path d="M16,16.4 L17,19 L19.6,19.2 L17.6,20.8 L18.4,23.4 L16,22 L13.6,23.4 L14.4,20.8 L12.4,19.2 L15,19 Z" fill="#e8763a" stroke="${PROP_OUT}" stroke-width=".4"/>` +
      `<g fill="#d86aa0"><circle cx="9.6" cy="20" r="1.4"/><circle cx="22.6" cy="21.4" r="1.2"/></g>` +
      `<g fill="#1e2a3a" stroke="${PROP_OUT}" stroke-width=".3"><ellipse cx="6" cy="15" rx="1.8" ry="1"/><ellipse cx="8.4" cy="14" rx="1.8" ry="1"/><ellipse cx="25" cy="15" rx="1.8" ry="1"/></g>`);
  },
  cleaning: (bg) => {
    const coral = "#c95c7a";
    const fish = (x, y, c, s, flip) => `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})">` +
      `<ellipse cx="0" cy="0" rx="3.4" ry="1.8" fill="${c}" stroke="${PROP_OUT}" stroke-width=".5"/><path d="M3,0 L5.4,-1.8 L5.4,1.8 Z" fill="${c}"/><circle cx="-2" cy="-.4" r=".4" fill="${PROP_DARK}"/></g>`;
    return propWrap(bg,
      `<path d="M6,29 Q4,20 9,16 Q8,11 13,11 Q15,6 20,9 Q26,8 25,15 Q29,19 26,29 Z" fill="${coral}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<g fill="${sh(coral, -0.25)}"><circle cx="12" cy="18" r="1.2"/><circle cx="19" cy="14" r="1.1"/><circle cx="21" cy="22" r="1.3"/></g>` +
      fish(16, 20, "#3a6ad9", 1.4, true) +
      `<g transform="translate(12.6,19)"><ellipse cx="0" cy="0" rx="1.8" ry=".7" fill="#2a4ad9"/><path d="M-1.6,0 L1.6,0" stroke="#f2ede0" stroke-width=".4"/></g>` +
      fish(6, 8, "#e8a33a", 0.9, false) + fish(26, 4, "#e8e0d0", 0.8, true));
  },
  kelpforest: (bg) => {
    const kelp = "#7a8a3a";
    const frond = (x, h, lean) => `<path d="M${x},29 Q${x + lean},${29 - h / 2} ${x + lean * 0.5},${29 - h}" stroke="${kelp}" stroke-width="1.6" fill="none"/>` +
      [0.3, 0.55, 0.8].map((t) => `<ellipse cx="${x + lean * t}" cy="${29 - h * t}" rx="2.4" ry=".9" fill="${sh(kelp, 0.15)}" transform="rotate(-25 ${x + lean * t} ${29 - h * t})"/>` +
        `<circle cx="${x + lean * t + 0.6}" cy="${29 - h * t + 0.8}" r=".7" fill="#c9b060"/>`).join("");
    return propWrap(bg,
      `<rect x="2" y="2" width="28" height="27" rx="3" fill="#2a6a7a" opacity=".35"/>` +
      frond(7, 25, 3) + frond(13, 27, -2) + frond(19, 24, 2) + frond(25, 26, -3) +
      `<path d="M2,5 Q16,2 30,5" stroke="#9ad8e8" stroke-width="1" fill="none" opacity=".7"/>`);
  },
  whalepump: (bg) => {
    const whale = "#4a5a6a";
    return propWrap(bg,
      `<ellipse cx="16" cy="22" rx="14.4" ry="6" fill="#2a7ad9" opacity=".8"/>` +
      `<ellipse cx="16" cy="22" rx="10" ry="3.6" fill="#4ab87a" opacity=".55"/>` +
      `<path d="M4,22 Q10,14 20,15 Q27,16 28,20 Q22,20 18,22 Z" fill="${whale}" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<path d="M4,22 L1,18.6 L3.4,21 L1.4,24 Z" fill="${whale}"/>` +
      `<circle cx="24" cy="18" r=".6" fill="${PROP_DARK}"/>` +
      `<g stroke="#e8f4ff" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".85">` +
      `<path d="M20,14 Q18,9 15,7"/><path d="M20,14 Q21,8 20,4"/><path d="M20,14 Q23,9 26,7"/></g>`);
  },
  seaice: (bg) => {
    const ice = "#eef4fa";
    return propWrap(bg,
      `<rect x="2" y="16" width="28" height="13" rx="2" fill="#4a9ad9"/>` +
      `<path d="M2,18 L2,10 L11,9 L14,13 L22,11 L30,13 L30,18 L20,17 L12,19 Z" fill="${ice}" stroke="${PROP_OUT}" stroke-width=".9"/>` +
      `<path d="M6,24 L12,22 L15,25 L9,27 Z" fill="${ice}" stroke="${PROP_OUT}" stroke-width=".6"/>` +
      `<g fill="#c8d4dc">` + [[6, 13], [9, 12.4], [13, 14], [16, 13.4], [20, 13]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx=".8" ry=".5"/>`).join("") + `</g>` +
      // the bear
      `<ellipse cx="23" cy="12" rx="4.6" ry="2.6" fill="#f6f2e0" stroke="#c8c0a8" stroke-width=".6"/>` +
      `<circle cx="27.4" cy="11" r="1.8" fill="#f6f2e0" stroke="#c8c0a8" stroke-width=".5"/>` +
      `<circle cx="28.6" cy="11" r=".4" fill="${PROP_DARK}"/><path d="M20,14 L20,15.6 M25,14 L25,15.6" stroke="#c8c0a8" stroke-width="1.2"/>`);
  },
  vent: (bg) => {
    const rock = "#2a2430";
    return propWrap(bg,
      `<path d="M11,29 L13,12 L18,12 L20,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width="1"/>` +
      `<path d="M22,29 L23.4,19 L26.6,19 L28,29 Z" fill="${rock}" stroke="${PROP_OUT}" stroke-width=".7"/>` +
      `<g fill="#3a3440" opacity=".85"><circle cx="15.4" cy="9" r="3"/><circle cx="17" cy="5.4" r="3.4"/><circle cx="14" cy="2.6" r="2.6"/><circle cx="25" cy="16" r="2"/></g>` +
      // tube worms, red plumes on white tubes
      [4, 6.4, 8.6].map((x, i) => `<path d="M${x},29 L${x},${21 + i}" stroke="#eee6d2" stroke-width="1.4"/>` +
        `<ellipse cx="${x}" cy="${20.4 + i}" rx="1.3" ry="1.1" fill="#d83a3a"/>`).join("") +
      `<ellipse cx="22" cy="28" rx="2" ry="1" fill="#e8e0d0" stroke="${PROP_OUT}" stroke-width=".3"/>`);
  },
});

Object.assign(SIGNS, {
  // Emberglass Shore, the harbour for the seas now.
  "shore:ice": "🪧 'JETTY ONE ➡ ICE FLOE PASSAGE. Narwhals, penguins, and the cold. Wrap up.'",
  "shore:blue": "🪧 'JETTY TWO ➡ THE OPEN BLUE. Whales, sharks, and the long crossing.'",
  "shore:kelp": "🪧 'JETTY THREE ➡ KELP CATHEDRAL. Otters, urchins, and the forest under the sea.'",
  "shore:reef": "🪧 'JETTY FOUR ➡ CORAL REEF SHALLOWS. Warm water, bright fish.'",
  "shore:west": "🪧 '⟵ CINDER TOWN.   ⟵ The coast path south, to Tidewater Cove.'",
  "shore:ember": "🪧 '⬆ EMBER HOLLOW. Up the old vent. Something old sleeps there.'",
  "openocean:dive": "🪧 'DIVE POINT ➡ THE MIDNIGHT ZONE. Straight down, a long way.'",
  // Tidewater Cove, where the boats used to leave from. The facts stay; the
  // directions now say where to go.
  "tidewater:boats": "🪧 'The boats to the open sea sail from EMBERGLASS SHORE now, past Cinder Town. The deep water is no place for a new ranger.'",
  "tidewater:11,1": "🪧 'CORAL REEF and KELP CATHEDRAL - by boat from Emberglass Shore, past Cinder Town. Reefs cover under 1% of the ocean floor and shelter about a quarter of all marine species.'",
  "tidewater:3,2": "🪧 'THE OPEN BLUE - whales, sharks, and the long crossing. ICE FLOE PASSAGE - narwhals and the ice folk. Both by boat from Emberglass Shore, past Cinder Town.'",
  "tidewater:4,7": "🪧 'DIVE SAFELY: step into the water to swim. The deep seas lie beyond Emberglass Shore.'",
});
