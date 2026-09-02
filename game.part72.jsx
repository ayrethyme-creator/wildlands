// ---------- Part 72: THE DIVIDE ----------
// The sixteen mountain species. Approved in the 2026-08-25/26 batch and carried
// in design/PENDING_MOVES.txt since. What the biome was missing was not more
// hoofed animals - it had plenty - but everything that makes ALTITUDE itself the
// subject: the animals living where there is barely any air.

const P72 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P72.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- the altitude records ----
    add("himalayanjumpingspider", "Himalayan Jumping Spider", ["Bug", "Swift"], { h: 18, a: 26, d: 20, s: 58 }, 0.6),
    add("barheadedgoose", "Bar-headed Goose", ["Aerial", "Swift"], { h: 46, a: 40, d: 40, s: 70 }, 0.36),
    add("alpinechough", "Alpine Chough", ["Aerial", "Swift"], { h: 34, a: 36, d: 32, s: 66 }, 0.44),

    // ---- the specialists ----
    add("lammergeier", "Lammergeier", ["Aerial", "Armor"], { h: 58, a: 56, d: 50, s: 62 }, 0.24),
    add("wallcreeper", "Wallcreeper", ["Aerial", "Swift"], { h: 24, a: 28, d: 24, s: 60 }, 0.5),
    add("himalayanmonal", "Himalayan Monal", ["Aerial", "Wild"], { h: 40, a: 36, d: 38, s: 44 }, 0.44),
    add("alpinesalamander", "Alpine Salamander", ["Venom", "Wild"], { h: 32, a: 26, d: 40, s: 18 }, 0.5),
    add("apollobutterfly", "Apollo Butterfly", ["Bug", "Aerial"], { h: 18, a: 20, d: 22, s: 52 }, 0.6),
    add("whiterumpedvulture", "White-rumped Vulture", ["Aerial", "Wild"], { h: 50, a: 46, d: 42, s: 58 }, 0.3),
    add("woollyflyingsquirrel", "Woolly Flying Squirrel", ["Canopy", "Night"], { h: 38, a: 32, d: 34, s: 56 }, 0.34),
    add("rockhyrax", "Rock Hyrax", ["Wild", "Burrow"], { h: 34, a: 32, d: 36, s: 44 }, 0.5),

    // ---- the grazers ----
    add("argali", "Argali", ["Armor", "Wild"], { h: 70, a: 62, d: 62, s: 46 }, 0.24),
    add("alpinechamois", "Alpine Chamois", ["Swift", "Wild"], { h: 48, a: 44, d: 44, s: 74 }, 0.34),
    add("mountaingoat", "Mountain Goat", ["Armor", "Wild"], { h: 58, a: 50, d: 60, s: 46 }, 0.3),
    add("kiang", "Kiang", ["Swift", "Wild"], { h: 60, a: 50, d: 48, s: 68 }, 0.28),
    add("tibetanantelope", "Tibetan Antelope", ["Swift", "Wild"], { h: 50, a: 44, d: 44, s: 76 }, 0.3),
  );
})());

Object.assign(INFO, {
  // ---- the altitude records ----
  himalayanjumpingspider: { taxon: "Euophrys omnisuperstes · one of about 90 Euophrys species", d: "Carnivore — springtails and small flies, blown up from below", h: "Bare rock and scree on Everest, recorded to about 6,700 m", s: "NE",
    f: "One of about ninety Euophrys jumping spiders, and its species name means \"standing above everything\", which for once is not an exaggeration — it is the highest permanent animal resident known, living in scree at around six and a half kilometres on Everest. Nothing grows up there, so there is nothing for a herbivore to eat and no food chain to sit on top of. It lives entirely on small insects the wind carries up from the valleys and drops." },
  barheadedgoose: { taxon: "Anser indicus · one of about 11 Anser geese", d: "Herbivore — grass, and grain on the wintering grounds", h: "High Central Asian lakes in summer, the Indian subcontinent in winter", s: "LC",
    f: "One of about eleven Anser geese, and it crosses the Himalaya. Tracked birds have flown above seven thousand metres in air holding a third of the oxygen at sea level, and they do the climb in a single push rather than acclimatising over weeks the way a person must. Its haemoglobin grips oxygen harder than other geese, its flight muscle is threaded with more capillaries, and it flies at night when the air is cold and dense." },
  alpinechough: { taxon: "Pyrrhocorax graculus · one of 2 living Pyrrhocorax species", d: "Omnivore — insects and berries in summer, scraps and refuse in winter", h: "High mountains from Spain to the Himalaya, above the treeline", s: "LC",
    f: "One of two living Pyrrhocorax choughs, and it nests higher than any other bird — breeding recorded at around six and a half kilometres in the Himalaya, and birds seen at 8,200 m on Everest, which is inside the death zone. They got there by following people: an expedition is a reliable source of food, so the crow of the high mountains has learned to work the mountaineers." },

  // ---- the specialists ----
  lammergeier: { taxon: "Gypaetus barbatus · the only living species in Gypaetus", d: "Bone. Roughly three-quarters of what it eats is skeleton", h: "Mountain ranges from Spain and the Atlas through the Himalaya", s: "NT",
    f: "The only living species in Gypaetus, and almost everything it eats is bone — the part of a carcass every other scavenger leaves. It carries the ones too big to swallow up to a height and drops them onto rock until they shatter, then eats the marrow and the fragments; its stomach acid is strong enough to dissolve them. It is not naturally orange, either. The rust colour is cosmetic: the bird deliberately bathes in iron-rich mud and stains its own feathers." },
  wallcreeper: { taxon: "Tichodroma muraria · the only living species in Tichodroma", d: "Insectivore — insects and spiders picked out of rock crevices", h: "Cliff faces and gorges of Europe and Asia, high in summer and lower in winter", s: "LC",
    f: "The only living species in Tichodroma, and it works sheer rock the way a treecreeper works bark, except that it does not creep. It moves in flicking hops with its wings half open, and each flick shows the crimson patches usually hidden under grey — so a bird almost invisible against limestone keeps signalling and then vanishing again. In winter it comes down the valleys and will work the walls of buildings, including cathedrals." },
  himalayanmonal: { taxon: "Lophophorus impejanus · one of 3 living Lophophorus species", d: "Omnivore — roots, tubers and insects, dug out of the soil", h: "Himalayan forest and alpine meadow, roughly 2,400–4,500 m", s: "LC",
    f: "One of three living Lophophorus monals, the national bird of Nepal, and the male looks metallic rather than merely colourful — nine shades that shift as he turns, all of them structural, produced by the shape of the feather rather than by any pigment. What he actually spends the day doing is digging. A monal ploughs up hillside soil with its bill for roots and grubs, and turns over a startling amount of mountain." },
  alpinesalamander: { taxon: "Salamandra atra · one of about 6 Salamandra species", d: "Carnivore — insects, worms and spiders", h: "Alpine meadow and scree in the Alps and Dinarides, to about 2,800 m", s: "LC",
    f: "One of about six Salamandra salamanders, and it does not lay eggs, because up here there is no pond that can be relied on. The young develop inside the mother and are born fully formed — after a pregnancy of two to three years at altitude, the longest of any amphibian. Only one or two survive to be born: they eat the unfertilised eggs around them first, and then a nutritious lining the mother produces." },
  apollobutterfly: { taxon: "Parnassius apollo · one of about 50 Parnassius species", d: "Nectar as an adult; the caterpillar eats stonecrop", h: "Sunny alpine and subalpine meadow across Europe, on rocky slopes", s: "NT",
    f: "One of about fifty Parnassius apollos, a big pale butterfly with red eyespots that flies high and slowly on mountain meadows. It was among the very first insects anywhere to be given legal protection — Europe was worrying about it in the early twentieth century, when the idea that a butterfly might need a law was novel. Its populations are scattered on isolated mountains, so each one has drifted apart, and collectors have described hundreds of local forms." },
  whiterumpedvulture: { taxon: "Gyps bengalensis · one of about 8 Gyps vultures", d: "Scavenger — carrion, mostly domestic cattle", h: "Open country and towns of South Asia, nesting in tall trees", s: "CR",
    f: "One of about eight Gyps vultures, and in the 1980s it may have been the most numerous large bird of prey on earth. Then it fell by more than ninety-nine percent in about a decade, and for years nobody knew why. The cause turned out to be diclofenac, an ordinary anti-inflammatory given to working cattle, which causes fatal kidney failure in any vulture that feeds on a treated carcass. India banned the veterinary drug in 2006. Recovery is slow: these birds raise one chick at a time." },
  woollyflyingsquirrel: { taxon: "Eupetaurus cinereus · the only long-recognised species in Eupetaurus", d: "Herbivore — pine needles, moss and lichen", h: "Cliffs and caves above the treeline in northern Pakistan and the Karakoram", s: "EN",
    f: "The largest gliding mammal there is, and for most of the twentieth century it was known only from a handful of skins — presumed extinct until it was found alive in northern Pakistan in 1994. It lives on bare cliffs above the treeline, sleeps in caves, and eats pine needles, which is a diet with almost nothing in it. Local collectors had been selling its urine deposits from cave floors as a traditional medicine called salajit for far longer than science had a live animal." },
  rockhyrax: { taxon: "Procavia capensis · the only living species in Procavia", d: "Herbivore — grass, leaves and fruit, grazed in short bursts", h: "Rocky outcrops and cliffs across Africa and the Middle East", s: "LC",
    f: "The only living species in Procavia, it looks like a fat guinea pig and its closest living relatives are elephants and manatees — it has tiny tusks, growing from incisors, to prove it. It regulates its own temperature poorly, so a colony spends much of the morning piled on a rock in the sun before doing anything. The males sing: long structured songs with rules about what can follow what, and the arrangement differs from one region to the next." },

  // ---- the grazers ----
  argali: { taxon: "Ovis ammon · one of about 10 living Ovis species", d: "Grazer — grass and herbs on high open ground", h: "The mountains and steppe of Central Asia, roughly 3,000–5,500 m", s: "NT",
    f: "One of about ten wild sheep, and the largest of them: a big ram stands over a metre at the shoulder and carries horns that can weigh twenty-five kilograms — more than a tenth of his own body weight, coiled, and carried up and down mountains for years. They are also exactly what trophy hunters want, and what a ram is worth has become a real part of how the species is managed and argued over." },
  alpinechamois: { taxon: "Rupicapra rupicapra · one of 2 living Rupicapra species", d: "Herbivore — grass and herbs in summer, lichen and shoots in winter", h: "Steep ground in the Alps, Carpathians and Balkans, up to about 3,600 m", s: "LC",
    f: "One of two living Rupicapra chamois, and its foot is the reason it can stand where it does. Each hoof has a hard, sharp outer rim for cutting into ice and thin ledges, and a softer rubbery pad inside it for grip on bare rock — an edge and a sole in the same foot. It can put on a burst of about fifty kilometres an hour across ground where a person needs both hands." },
  mountaingoat: { taxon: "Oreamnos americanus · the only living species in Oreamnos", d: "Herbivore — grass, moss, lichen and shrubs on high ground", h: "Steep rock and alpine meadow of the Rocky Mountains and the Pacific Northwest", s: "LC",
    f: "The only living species in Oreamnos, and it is not a goat — its nearest relatives are the chamois and the gorals. It climbs near-vertical rock on the same hard-rimmed, soft-centred hooves, and its shoulders carry heavy muscle for pulling itself up rather than for fighting. It also wants salt badly enough to walk a long way for it, and will climb the face of a concrete dam to lick the mineral seeping out of it." },
  kiang: { taxon: "Equus kiang · one of 7 living Equus species", d: "Grazer — the tough grasses of the high plateau", h: "The Tibetan Plateau, mostly above 4,000 m", s: "LC",
    f: "One of seven living wild horses, asses and zebras, and the largest of the wild asses. It lives on a plateau where the air holds around half the oxygen of sea level, on grass with very little in it, and it does not stay put — herds move constantly, and they swim, crossing rivers in flood rather than going around. Its numbers are healthy, which on this list makes it unusual enough to be worth saying." },
  tibetanantelope: { taxon: "Pantholops hodgsonii · the only living species in Pantholops", d: "Grazer — grass, forbs and sedge on the high plateau", h: "The Tibetan Plateau, 3,700–5,500 m, migrating hundreds of kilometres to calve", s: "NT",
    f: "The only living species in Pantholops, and it grows the finest wool of any animal — an underfleece so fine it cannot be sheared or combed out, so the animal is killed for it. Three to five are needed for one shahtoosh shawl. Perhaps a million became around seventy-five thousand. Then the trade was banned, the plateau was patrolled and CITES listed it, and the population came back past three hundred thousand: the IUCN moved it from Endangered to Near Threatened in 2016." },
});

// Photographic sprites for all sixteen. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P72.map((k) => [k, true])));

/* Learnsets and placement — the part68 pattern, unchanged. */
{
  let built = 0; const thin = [];
  P72.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live. "alpine" is the high ground and "highveld" the shoulder
     below it; the rock hyrax belongs on the lower slopes with a warm rock to lie
     on, and everything else is happier the higher it gets. */
  const LOW = ["rockhyrax", "apollobutterfly", "wallcreeper"];
  const BY_ZONE = [
    { zone: "alpine", pool: "pool", list: P72.slice() },
    { zone: "highveld", pool: "pool", list: LOW },
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

  const homeless = P72.filter((k) => !placed.has(k));
  const hiddenFromGuide = P72.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part72] the divide: ${P72.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P72.length}`
    + ` | guide locations: ${P72.length - hiddenFromGuide.length}/${P72.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
