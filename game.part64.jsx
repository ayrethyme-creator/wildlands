// ---------- PART 64: TEN BATS ----------
// The only bat with any real identity in the whole guide was one extinct
// pipistrelle (part13). Everywhere else, "a bat" has been a single generic
// night encounter (key "bat", part3/part6/part11) standing in for the
// entire order - which is a strange gap for a group with well over a
// thousand living species, more than a quarter of all mammal species on
// Earth. This adds ten real, named ones, spanning most of what makes bats
// interesting: echolocation by tongue-click versus larynx versus nose-leaf,
// blood-feeding, fishing, ground-hunting, pollination, and the sheer range
// of size from the tiny to the fox-sized.
//
// Ten species in, ten trimmed from the Aquarium (part61) to hold the guide
// at exactly 1000 - the generic "bat" placeholder is untouched and keeps
// every one of its existing encounter slots, these are additions alongside
// it, not a replacement for it.

Object.assign(ART, {
  egyptianfruitbat: batA({ fur: "#8a6f52", wingC: "#5c4a38", muzzle: "#c9b083", iris: "#3a2a1e", fox: true }),
  littlebrownbat: batA({ fur: "#6b5642", wingC: "#4a3a2c", muzzle: "#8a7458", iris: "#26221c", bigEar: true, hanging: true }),
  vampirebat: batA({ fur: "#3c3226", wingC: "#26201a", muzzle: "#5c4c3c", iris: "#8a1a1a", bigEar: true }),
  greaterhorseshoebat: batA({ fur: "#a8917a", wingC: "#8a7458", muzzle: "#e8dcc3", iris: "#3a2a1e", bigEar: true, hanging: true }),
  spectacledflyingfox: batA({ fur: "#3c3226", wingC: "#26201a", muzzle: "#5c4030", iris: "#c9a43a", fox: true }),
  freetailbat: batA({ fur: "#8a7a68", wingC: "#5c5044", muzzle: "#c9b89a", iris: "#26221c", bigEar: true }),
  longnosedbat: batA({ fur: "#a3855c", wingC: "#7a6242", muzzle: "#e8c9a5", iris: "#3a2a1e", fox: true }),
  fishingbat: batA({ fur: "#6b5c42", wingC: "#4a3e2c", muzzle: "#c9b89a", iris: "#3a2a1e" }),
  pallidbat: batA({ fur: "#d9cfb8", wingC: "#b8ab8f", muzzle: "#f2ede0", iris: "#3a2a1e", bigEar: true }),
  whitetentbat: batA({ fur: "#f8f4ea", wingC: "#e8dcc3", muzzle: "#f2c94a", iris: "#26221c", bigEar: true }),
});

Object.assign(DEX, {
  egyptianfruitbat: A("Egyptian Fruit Bat", "egyptianfruitbat", ["Aerial", "Wild"], B(38, 40, 32, 58), MV.aer, 0.42),
  littlebrownbat: A("Little Brown Bat", "littlebrownbat", ["Aerial", "Night"], B(28, 34, 24, 70), MV.night, 0.5),
  vampirebat: A("Common Vampire Bat", "vampirebat", ["Aerial", "Night"], B(30, 38, 26, 66), MV.night, 0.4),
  greaterhorseshoebat: A("Greater Horseshoe Bat", "greaterhorseshoebat", ["Aerial", "Night"], B(32, 34, 28, 64), MV.night, 0.4),
  spectacledflyingfox: A("Spectacled Flying Fox", "spectacledflyingfox", ["Aerial", "Wild"], B(54, 46, 42, 48), MV.aer, 0.26),
  freetailbat: A("Mexican Free-tailed Bat", "freetailbat", ["Aerial", "Swift"], B(28, 30, 22, 82), MV.aer, 0.34),
  longnosedbat: A("Lesser Long-nosed Bat", "longnosedbat", ["Aerial", "Swift"], B(24, 26, 20, 62), MV.aer, 0.44),
  fishingbat: A("Greater Bulldog Bat", "fishingbat", ["Aerial", "Aquatic"], B(36, 44, 30, 54), MV.aqua, 0.3),
  pallidbat: A("Pallid Bat", "pallidbat", ["Aerial", "Predator"], B(34, 44, 28, 52), MV.pred, 0.34),
  whitetentbat: A("Honduran White Bat", "whitetentbat", ["Aerial", "Canopy"], B(20, 22, 18, 58), MV.can, 0.46),
});

Object.assign(INFO, {
  egyptianfruitbat: { d: "Frugivore — fruit, nectar", h: "Caves and ruins, Africa, the Middle East", s: "LC",
    f: "Unlike most fruit bats, it actually echolocates — not with the larynx-based calls microbats use, but with rapid tongue clicks, an independently evolved solution to navigating the same total darkness of a packed cave roost." },
  littlebrownbat: { d: "Insectivore — moths, mosquitoes, midges", h: "Caves, mines and buildings, North America", s: "EN",
    f: "A single colony can eat millions of insects in a night. White-nose syndrome, a cold-loving fungus introduced from Europe around 2006, has since killed millions of them and pushed several regional populations toward local extinction." },
  vampirebat: { d: "Sanguivore — blood, mostly from livestock", h: "Forest and scrubland, Central and South America", s: "LC",
    f: "Heat-sensing pits on its nose find a vein close to the skin, and an anticoagulant in its saliva keeps the wound bleeding. A bat that goes two nights without a meal risks starving, so roost-mates regularly regurgitate blood to feed a hungry neighbour — reliably enough, and often enough to non-relatives that have helped them before, that it is a textbook case of reciprocal altruism in a wild animal." },
  greaterhorseshoebat: { d: "Insectivore — moths and beetles", h: "Caves and old buildings, Europe, Asia, North Africa", s: "NT",
    f: "The elaborate folded flap of skin on its nose — the 'horseshoe' — shapes and focuses its echolocation calls, which it emits through the nostrils rather than the mouth, unlike almost every other bat. A built-in loudspeaker for an animal that hunts entirely by sound." },
  spectacledflyingfox: { d: "Frugivore — fruit, nectar, pollen", h: "Rainforest canopy, northeastern Australia", s: "EN",
    f: "Named for the pale rings of fur around its eyes. Extreme heatwaves have killed tens of thousands in a single afternoon — colonies of that size roost together in the open canopy with nowhere to shelter from heat that keeps climbing as the climate warms." },
  freetailbat: { d: "Insectivore — moths, beetles, flying ants", h: "Caves across the Americas", s: "LC",
    f: "Bracken Cave in Texas holds the largest bat colony on Earth, upward of twenty million animals emerging at dusk in a column that shows up on weather radar. In level flight with a tailwind it has been clocked over 160 km/h, likely the fastest self-powered flight of any animal." },
  longnosedbat: { d: "Nectarivore — nectar, pollen, some fruit", h: "Desert and scrub, Mexico and the southwestern US", s: "LC",
    f: "The primary pollinator of the agave plants tequila is distilled from, and its tongue can extend nearly the length of its own body to reach nectar deep inside a flower. Agave farms that harvest before the plant flowers, to speed up the crop, quietly starve the bats that pollinate the wild stands nearby." },
  fishingbat: { d: "Piscivore — fish, some insects", h: "Coasts, rivers and lakes, Central and South America", s: "LC",
    f: "Detects the ripple a fish makes breaking the water's surface by echolocation alone, then rakes the water with oversized hind claws to gaff it out — all without ever landing. One of only a handful of bat species that hunts fish instead of insects or fruit." },
  pallidbat: { d: "Insectivore — scorpions, centipedes, large insects", h: "Deserts and dry grassland, western North America", s: "LC",
    f: "Hunts mostly on the ground, walking prey down by listening for footsteps and rustling rather than echolocating for it, and can take repeated stings from a scorpion with no apparent ill effect — it appears to be substantially resistant to the venom." },
  whitetentbat: { d: "Frugivore — mainly one species of wild fig", h: "Rainforest understorey, Central America", s: "LC",
    f: "Snow-white with a yellow nose and ears, it bites along the ribs of a large leaf until the sides droop into a tent, then roosts in small groups underneath. Sunlight filtering through the leaf tints its white fur faintly green — camouflage against anything looking up from the forest floor below." },
});

// ---- scattered into the same night pools the generic bat already lives in,
// alongside it rather than in place of it, so nothing already scattered
// there loses ground ----
(() => {
  const addTo = (mapKey, key, extra) => {
    const m = MAPS[mapKey];
    if (!m) { console.warn(`[part64] no map ${mapKey} to scatter bats into`); return; }
    m[key] = [...(m[key] || []), ...extra.filter(([sp]) => DEX[sp])];
  };
  addTo("route1", "poolN", [["egyptianfruitbat", 5]]);
  addTo("route4", "poolN", [["egyptianfruitbat", 5], ["longnosedbat", 5], ["freetailbat", 4], ["pallidbat", 4]]);
  addTo("route2", "poolN", [["littlebrownbat", 5], ["vampirebat", 4], ["fishingbat", 4]]);
  addTo("route8", "poolN", [["littlebrownbat", 5], ["spectacledflyingfox", 4], ["whitetentbat", 4]]);
  addTo("route6", "poolN", [["littlebrownbat", 5], ["greaterhorseshoebat", 4]]);
  addTo("route3", "poolN", [["vampirebat", 4], ["spectacledflyingfox", 4], ["whitetentbat", 4]]);
  addTo("peak", "poolN", [["greaterhorseshoebat", 4]]);
  addTo("shore", "poolN", [["fishingbat", 4]]);
  addTo("route7", "poolN", [["pallidbat", 4], ["freetailbat", 4]]);

  console.log(`[part64] ten named bats scattered into night pools | DEX now ${Object.keys(DEX).length}`);
})();
