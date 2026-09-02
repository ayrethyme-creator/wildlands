// ---------- Part 69: THE SIX STILL OWED ----------
// Six species that entered design/PENDING_MOVES.txt before "The Last Forty-Four"
// and so did not travel with that batch. They were the last biome promises left
// outstanding after part68, and Ayr asked for them on 2026-09-02.
//
//   Little Blue Penguin    coast      Plains Pocket Gopher   farmland
//   Gemsbok                savanna    Mexican Redknee        desert
//   Iberian Lynx           forest     Wood Frog              forest
//
// Sprites for all six were already in art/ under their full names, drawn during
// the biome batches, so the art key here is the file that exists rather than a
// shortened one.
//
// This file also fills the ONE hole in the field guide: the Tawny Frogmouth has
// had a DEX row since the early roster and has never had an INFO entry, so it
// was the only species in the game that could be caught and not read about.
//
// Learnsets and placement follow part54 and part68 unchanged.

const P69 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P69.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- The Strand: coast ----
    add("littlebluepenguin", "Little Blue Penguin", ["Aquatic", "Swift"], { h: 34, a: 34, d: 32, s: 58 }, 0.5),

    // ---- The Furrows: farmland ----
    add("plainspocketgopher", "Plains Pocket Gopher", ["Burrow"], { h: 30, a: 34, d: 34, s: 34 }, 0.55),

    // ---- The Long Grass: savanna ----
    add("gemsbok", "Gemsbok", ["Armor", "Swift"], { h: 64, a: 62, d: 60, s: 62 }, 0.26),

    // ---- The Dry: desert ----
    add("mexicanredknee", "Mexican Redknee", ["Bug", "Venom"], { h: 26, a: 34, d: 30, s: 30 }, 0.5),

    // ---- The Weald: forest ----
    add("iberianlynx", "Iberian Lynx", ["Predator", "Swift"], { h: 52, a: 62, d: 46, s: 66 }, 0.22),
    add("woodfrog", "Wood Frog", ["Ice", "Wild"], { h: 30, a: 26, d: 34, s: 40 }, 0.55),
  );
})());

Object.assign(INFO, {
  littlebluepenguin: { taxon: "Eudyptula minor · the smallest of about 18 penguin species", d: "Piscivore — small schooling fish and squid, caught in shallow dives", h: "Temperate coasts of southern Australia and New Zealand; nests in burrows above the tide", s: "LC",
    f: "The smallest penguin there is, at roughly a kilogram and a foot tall, and one of about eighteen penguin species — it is also one of the few that is not a polar animal at all. It will not cross the beach in daylight. Birds gather offshore in rafts and wait for the light to go before coming in together, which turns an ordinary commute into the thing people buy tickets to watch." },
  plainspocketgopher: { taxon: "Geomys bursarius · one of about 10 Geomys, and one of some 41 pocket gophers", d: "Herbivore — roots, tubers and stems, cut from below without surfacing", h: "Deep, loose soil in the grasslands and farmland of the central United States", s: "LC",
    f: "One of about ten Geomys gophers, and one of some forty-one pocket gophers, it carries the pouches the family is named for on the OUTSIDE of its face — fur-lined, opening beside the mouth rather than into it, and turned inside out to empty. Its lips close BEHIND its incisors, so it can cut through a root with its teeth in the open air of a tunnel without taking a mouthful of soil with it." },
  gemsbok: { taxon: "Oryx gazella · one of 4 living Oryx species", d: "Grazer — grass, and tsama melons and roots dug for their water", h: "The Kalahari and the arid country of southern Africa, out on the open pan", s: "LC",
    f: "One of four living Oryx antelopes, it stands out on open ground in heat that drives everything else into shade, and does it by letting its own body temperature climb rather than spending water on sweat. A dense net of fine arteries at the base of the skull cools blood on its way to the brain — the mechanism is real and well described, though how much a free-ranging gemsbok actually relies on it is still argued about. Namibia's communal conservancies are built around this animal." },
  mexicanredknee: { taxon: "Brachypelma hamorii · one of about 20 Brachypelma species", d: "Ambush carnivore — insects, and the occasional small lizard", h: "Dry scrub and deciduous forest on the Pacific slope of Mexico, in a burrow", s: "NT",
    f: "One of about twenty Brachypelma tarantulas, it does not bite what frightens it. It turns its back, rakes its own abdomen with its hind legs and throws off a cloud of barbed hairs, which lodge in eyes and airways and itch for weeks — a defence that costs the spider a bald patch and costs the attacker rather more. Hollywood and the pet trade took so many that Brachypelma became the first spiders ever listed by CITES. Its Near Threatened listing was made before this species was separated from the redknee it was long lumped with, so the assessment is older than the name." },
  iberianlynx: { taxon: "Lynx pardinus · one of 4 living lynx species", d: "Carnivore — European rabbit, to the tune of most of its diet", h: "Mediterranean scrub and open woodland in southern Spain and Portugal", s: "VU",
    f: "One of four living lynxes, and in 2002 it was down to about ninety-four animals — the most endangered cat on earth. Its recovery is unusual because saving the cat meant first saving its food: it eats little but European rabbit, and the rabbit had been emptied out of the landscape by two introduced diseases. Warrens were rebuilt, underpasses were dug beneath the roads that were killing lynxes faster than anything else, and in 2024 the IUCN moved it from Endangered to Vulnerable." },
  woodfrog: { taxon: "Lithobates sylvaticus · one of roughly 50 Lithobates species", d: "Carnivore — insects, spiders, worms and slugs", h: "Damp woodland and vernal pools across northern North America, over the Arctic Circle", s: "LC",
    f: "One of roughly fifty Lithobates frogs, and the only North American frog that lives north of the Arctic Circle — because it spends the winter frozen. Up to about two-thirds of the water in its body turns to ice, the heart stops, and it does not breathe. Its liver floods the tissue with glucose beforehand, which keeps the cells themselves from freezing while the water around them does, and in spring the animal thaws and goes to the pond to call." },

  // The one species in the game that could be caught and not read about. Its DEX
  // row is from the early roster; it has never had an entry.
  tawnyfrogmouth: { taxon: "Podargus strigoides · one of 3 Podargus, and one of about 16 frogmouths", d: "Carnivore — insects, and small vertebrates taken off the ground", h: "Almost any wooded country in Australia and Tasmania, including suburbs", s: "LC",
    f: "One of three Podargus frogmouths, and constantly mistaken for an owl, which it is not — it is closer to the nightjars, and the differences are the interesting part. Its feet are weak and cannot seize anything, so it takes prey in that enormous bill instead, and it drops onto the ground from a perch rather than hunting on the wing. Alarmed, it does not fly. It stretches upright with its bill raised and its eyes almost shut, and becomes a broken branch that people walk past." },
});

// Photographic sprites for all six. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P69.map((k) => [k, true])));

/* Learnsets and placement — the part54 and part68 pattern, unchanged. */
{
  let built = 0; const thin = [];
  P69.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live. Placed by THIS game's zones, for the reason part68 records:
     mapping Terrane's biome names onto this world puts a mole in the Outback.
     The savanna routes are this game's hedgerow country, so the gopher goes
     there with the field vole and the house mouse; the gemsbok goes there too,
     but as what it actually is, an antelope among the springbok and the oryx.
     "grove" is Gloamwood, the temperate wood, which is the closest this world
     has to Mediterranean scrub and to a vernal pool in a northern forest. */
  const BY_ZONE = [
    { zone: "savanna", pool: "pool", list: ["plainspocketgopher", "gemsbok"] },
    { zone: "savannaz", pool: "pool", list: ["gemsbok"] },
    { zone: "desert", pool: "pool", list: ["mexicanredknee"] },
    { zone: "grove", pool: "pool", list: ["iberianlynx", "woodfrog"] },
  ];
  // The shore is the beach - flamingo, pelican, penguin, booby - which is where
  // a penguin that comes ashore after dark belongs, and nowhere else.
  const BY_MAP = [
    { map: "shore", pool: "pool", list: ["littlebluepenguin"] },
  ];

  const usable = (m, pool) => MAPS[m] && Array.isArray(MAPS[m][pool]) && MAPS[m][pool].length
    && !m.startsWith("vig") && !m.startsWith("arc") && !m.startsWith("town")
    && m !== "aquarium" && !m.startsWith("aqua_");
  const placed = new Set();
  let added = 0;
  const drop = (m, pool, k) => {
    MAPS[m][pool] = [...MAPS[m][pool], [k, 2]];
    const places = WHERE[k] || (WHERE[k] = []);
    if (!places.some((place) => place.k === m)) {
      places.push({ k: m, n: MAPS[m].name, z: MAPS[m].zone,
        lvl: pool === "poolWater" ? (MAPS[m].lvlWater || MAPS[m].lvl) : MAPS[m].lvl });
    }
    added++;
    placed.add(k);
  };

  BY_ZONE.forEach(({ zone, pool, list }) => {
    const maps = Object.keys(MAPS).filter((m) => usable(m, pool) && MAPS[m].zone === zone);
    list.forEach((k) => maps.forEach((m) => drop(m, pool, k)));
  });
  BY_MAP.forEach(({ map, pool, list }) => {
    if (usable(map, pool)) list.forEach((k) => drop(map, pool, k));
  });

  // No silent fallback, for the reason part68 gives: a species with nowhere to
  // live is a mistake in the lists above, not something to bury by type score.
  const homeless = P69.filter((k) => !placed.has(k));
  const hiddenFromGuide = P69.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part69] the six still owed: ${P69.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P69.length}`
    + ` | guide locations: ${P69.length - hiddenFromGuide.length}/${P69.length}`
    + ` | tawny frogmouth entry: ${INFO.tawnyfrogmouth ? "written" : "MISSING"}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
