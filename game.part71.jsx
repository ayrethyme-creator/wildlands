// ---------- Part 71: THE FLOE ----------
// The twenty-five polar species. Ayr approved the batch on 2026-08-25 - "those
// are all great. we will most likely do that." - and it has been a promise in
// design/PENDING_MOVES.txt ever since. Sprites were drawn in the polar art batch.
//
// Ross's Gull is the one art key that is not the plain name: the file is
// rossgull.png, not rosssgull.png.

const P71 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P71.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- penguins ----
    add("adeliepenguin", "Adélie Penguin", ["Ice", "Aquatic"], { h: 44, a: 42, d: 40, s: 56 }, 0.4),
    add("kingpenguin", "King Penguin", ["Ice", "Aquatic"], { h: 60, a: 48, d: 50, s: 46 }, 0.3),
    add("gentoopenguin", "Gentoo Penguin", ["Ice", "Swift"], { h: 48, a: 44, d: 42, s: 72 }, 0.36),
    add("chinstrappenguin", "Chinstrap Penguin", ["Ice", "Aquatic"], { h: 44, a: 44, d: 40, s: 58 }, 0.4),

    // ---- seals ----
    add("beardedseal", "Bearded Seal", ["Ice", "Aquatic"], { h: 70, a: 46, d: 58, s: 34 }, 0.28),
    add("hoodedseal", "Hooded Seal", ["Ice", "Aquatic"], { h: 66, a: 56, d: 52, s: 40 }, 0.28),
    add("ringedseal", "Ringed Seal", ["Ice", "Burrow"], { h: 52, a: 40, d: 48, s: 44 }, 0.36),

    // ---- birds of the ice ----
    add("arctictern", "Arctic Tern", ["Aerial", "Swift"], { h: 26, a: 30, d: 24, s: 78 }, 0.44),
    add("snowpetrel", "Snow Petrel", ["Aerial", "Ice"], { h: 30, a: 34, d: 28, s: 62 }, 0.44),
    add("southpolarskua", "South Polar Skua", ["Aerial", "Predator"], { h: 44, a: 54, d: 38, s: 64 }, 0.36),
    add("littleauk", "Little Auk", ["Aerial", "Aquatic"], { h: 24, a: 26, d: 26, s: 60 }, 0.55),
    add("longtailedduck", "Long-tailed Duck", ["Aquatic", "Aerial"], { h: 34, a: 30, d: 32, s: 58 }, 0.44),
    add("ivorygull", "Ivory Gull", ["Aerial", "Ice"], { h: 34, a: 38, d: 30, s: 58 }, 0.44),
    add("rossgull", "Ross's Gull", ["Aerial", "Ice"], { h: 28, a: 30, d: 26, s: 62 }, 0.46),
    add("rockptarmigan", "Rock Ptarmigan", ["Ice", "Wild"], { h: 36, a: 30, d: 38, s: 46 }, 0.5),

    // ---- on the land ----
    add("arcticwolf", "Arctic Wolf", ["Ice", "Predator"], { h: 62, a: 66, d: 50, s: 58 }, 0.24),
    add("collaredlemming", "Collared Lemming", ["Ice", "Burrow"], { h: 24, a: 26, d: 26, s: 50 }, 0.6),

    // ---- under the ice ----
    add("colossalsquid", "Colossal Squid", ["Aquatic", "Predator"], { h: 74, a: 72, d: 46, s: 40 }, 0.16),
    add("antarcticicefish", "Antarctic Icefish", ["Ice", "Aquatic"], { h: 44, a: 34, d: 40, s: 26 }, 0.4),
    add("antarctictoothfish", "Antarctic Toothfish", ["Ice", "Predator"], { h: 58, a: 54, d: 46, s: 30 }, 0.3),
    add("antarcticseaspider", "Antarctic Sea Spider", ["Ice", "Bug"], { h: 30, a: 24, d: 40, s: 12 }, 0.5),
    add("arcticcod", "Arctic Cod", ["Ice", "Aquatic"], { h: 28, a: 26, d: 26, s: 48 }, 0.55),
    add("capelin", "Capelin", ["Aquatic", "Swift"], { h: 24, a: 24, d: 24, s: 58 }, 0.6),
    add("arcticchar", "Arctic Char", ["Ice", "Aquatic"], { h: 38, a: 40, d: 34, s: 52 }, 0.44),
    add("greenlandhalibut", "Greenland Halibut", ["Ice", "Predator"], { h: 48, a: 48, d: 44, s: 36 }, 0.36),
  );
})());

Object.assign(INFO, {
  // ---- penguins ----
  adeliepenguin: { taxon: "Pygoscelis adeliae · one of 3 living Pygoscelis penguins", d: "Carnivore — Antarctic krill above all, plus fish and squid", h: "The Antarctic coast and its islands, on ice-free rock in summer", s: "LC",
    f: "One of three living Pygoscelis penguins, and it builds its nest out of pebbles on ground with nothing else on it. Stones are scarce enough to be worth stealing, and the birds steal them from each other constantly and openly. Their colonies are counted from orbit — not by seeing the birds, which are too small, but by the stain they leave, which is pink, because they eat krill." },
  kingpenguin: { taxon: "Aptenodytes patagonicus · one of 2 living Aptenodytes penguins", d: "Piscivore — lanternfish and squid, on dives past 200 m", h: "Subantarctic islands, on beaches and tussock flats", s: "LC",
    f: "One of two living Aptenodytes penguins, and its chick takes fourteen to sixteen months to fledge — long enough that it has to get through an Antarctic winter half-grown. The parents leave for weeks at a time, the chicks huddle in crèches, and a chick can lose half its body weight waiting. It is why a pair cannot manage more than two chicks in three years." },
  gentoopenguin: { taxon: "Pygoscelis papua · one of 3 living Pygoscelis penguins", d: "Carnivore — krill, fish and squid", h: "Subantarctic islands and the Antarctic Peninsula", s: "LC",
    f: "One of three living Pygoscelis penguins, and the fastest bird underwater — clocked at around thirty-six kilometres an hour, which is faster than any bird manages while swimming and quicker than most people can run. It is also the one moving south: as the Peninsula has warmed, gentoos have colonised ground that used to be Adélie country." },
  chinstrappenguin: { taxon: "Pygoscelis antarcticus · one of 3 living Pygoscelis penguins", d: "Carnivore — almost entirely Antarctic krill", h: "Antarctic and subantarctic islands, often on steep volcanic slopes", s: "LC",
    f: "One of three living Pygoscelis penguins, and it sleeps in a way nothing else is known to. Birds guarding a nest cannot afford to be unconscious with skuas overhead, so instead of sleeping they take microsleeps — measured in 2023 at around ten thousand a day, averaging four seconds each. It adds up to more than eleven hours of sleep, taken four seconds at a time." },

  // ---- seals ----
  beardedseal: { taxon: "Erignathus barbatus · the only living species in Erignathus", d: "Benthic feeder — clams, crabs and bottom fish, found with the whiskers", h: "Shallow Arctic seas over soft bottom, near drifting pack ice", s: "LC",
    f: "The only living species in Erignathus, and the males sing. The song is a long trill that spirals down through the frequencies for a minute at a time and carries more than twenty kilometres under the ice — sung through the dark months, from beneath a ceiling, by an animal nobody can see. Hydrophone recordings can tell individuals apart, and some sing the same phrase year after year." },
  hoodedseal: { taxon: "Cystophora cristata · the only living species in Cystophora", d: "Piscivore — deep-water fish and squid", h: "Drifting pack ice of the North Atlantic and Arctic", s: "VU",
    f: "The only living species in Cystophora, and the male has two inflatable displays rather than one: a black hood on top of the head, and a bright red balloon he pushes out of one nostril and bounces. Its pups are weaned in about four days — the shortest nursing period of any mammal — because the ice they are born on will not last, so a pup has to double its weight and be gone." },
  ringedseal: { taxon: "Pusa hispida · one of 3 living Pusa seals", d: "Carnivore — Arctic cod and crustaceans, under the ice", h: "Landfast and pack ice across the Arctic", s: "LC",
    f: "One of three living Pusa seals, and the only one that can hold open its own breathing holes through a metre of ice, scraping them with the claws on its foreflippers all winter. Above a hole it hollows out a cave in the drifted snow, and the pup is born inside where nothing can see it. That lair is what a polar bear is listening for when it stands still on empty snow." },

  // ---- birds of the ice ----
  arctictern: { taxon: "Sterna paradisaea · one of about 13 Sterna terns", d: "Piscivore — small fish and crustaceans taken in a plunge", h: "Breeds in the Arctic; winters in Antarctic waters. Everything between is commute", s: "LC",
    f: "One of about thirteen Sterna terns, and it holds the longest migration of any animal — tracking has recorded round trips of seventy to ninety thousand kilometres in a year, because it does not fly in a straight line but follows the wind. It breeds in the Arctic summer and winters in the Antarctic one, which means it sees more daylight in its life than anything else alive." },
  snowpetrel: { taxon: "Pagodroma nivea · the only living species in Pagodroma", d: "Carnivore — krill and fish taken at the ice edge", h: "Antarctic coasts and nunataks, nesting on bare rock", s: "LC",
    f: "The only living species in Pagodroma, entirely white apart from a black bill and eye, and it nests on bare rock up to three hundred kilometres inland with no food anywhere near. Its defence is to spit stomach oil, which mats an attacker's feathers. Generations of birds using the same crevice leave a hard deposit of that oil and their droppings, and it can be dated — some nest sites turn out to have been in use for tens of thousands of years." },
  southpolarskua: { taxon: "Stercorarius maccormicki · one of about 7 Stercorarius skuas", d: "Predator and pirate — penguin eggs and chicks, fish taken off other birds", h: "Antarctic coasts in summer; the open ocean the rest of the year", s: "LC",
    f: "One of about seven Stercorarius skuas, and it has been recorded at the South Pole itself, over a thousand kilometres from the sea and from anything to eat. Much of its living is made by chasing other seabirds until they drop or bring up their catch, which is legal in nature and is genuinely called kleptoparasitism." },
  littleauk: { taxon: "Alle alle · the only living species in Alle", d: "Planktivore — copepods, strained by the million", h: "High Arctic cliffs and scree in summer, the North Atlantic in winter", s: "LC",
    f: "The only living species in Alle, a seabird the size of a starling that breeds in tens of millions — and it fertilises the Arctic. Birds feed at sea and return to scree slopes inland, and the nitrogen they carry up in their droppings turns the ground below the colonies green. The plants that grow there feed geese and reindeer, so a bird that eats plankton is holding up the grazing animals of a whole coastline." },
  longtailedduck: { taxon: "Clangula hyemalis · the only living species in Clangula", d: "Benthic feeder — molluscs and crustaceans, on deep dives", h: "Arctic tundra pools in summer, cold coastal seas in winter", s: "VU",
    f: "The only living species in Clangula, and it dives deeper than any other duck — regularly past sixty metres, which puts it below where most seabirds go at all. It also has three distinct plumages a year instead of the usual two, so a bird watched across twelve months looks like three different ducks. Despite all that it is Vulnerable, with steep declines in the Baltic that are not fully explained." },
  ivorygull: { taxon: "Pagophila eburnea · the only living species in Pagophila", d: "Scavenger — seal carcasses, and what polar bears leave", h: "High Arctic pack ice, all year; it rarely leaves the ice at all", s: "NT",
    f: "The only living species in Pagophila, entirely white, and it makes its living behind polar bears — following them across the pack ice and eating what is left of a kill. That diet is also the problem: scavenging at the top of a marine food chain concentrates what is in it, and this bird carries some of the highest mercury levels measured in any Arctic species. The Canadian population has fallen by around eighty percent." },
  rossgull: { taxon: "Rhodostethia rosea · the only living species in Rhodostethia", d: "Omnivore — insects on the breeding bogs, small fish and plankton at sea", h: "Siberian bogs in summer; the edge of the Arctic pack ice in winter", s: "LC",
    f: "The only living species in Rhodostethia, and in breeding plumage it is pink — a flush across the whole underside that fades in the hand and in museum skins, so for a long time the descriptions did not agree. It also migrates the wrong way. Almost everything that breeds in the Arctic leaves for the winter; this one goes further NORTH, out towards the ice, and spends the dark months there." },
  rockptarmigan: { taxon: "Lagopus muta · one of 3 living Lagopus species", d: "Herbivore — buds, catkins, berries and shoots", h: "Arctic tundra and bare mountain above the treeline, across the north", s: "LC",
    f: "One of three living Lagopus grouse, and it changes clothes three times a year rather than twice — white in winter, mottled brown in summer, and a barred autumn plumage in between, so it matches ground that is patchy with snow. Its feet are feathered right over the toes and work as snowshoes, which is where the genus name comes from: it means hare-foot." },

  // ---- on the land ----
  arcticwolf: { taxon: "Canis lupus arctos · one of some 30 named grey wolf subspecies", d: "Carnivore — muskox and Arctic hare, hunted as a pack over enormous ground", h: "The Canadian High Arctic and northern Greenland, where the ground never fully thaws", s: "LC",
    f: "One of about thirty named subspecies of grey wolf, and it lives where the ground stays frozen and dens have to be dug in whatever thin soil or rock cave there is. What makes it unusual is not the white coat but the behaviour: it is among the few large predators that has never been hunted enough to learn fear of people, so where researchers have worked with them the wolves simply walked up. Every other wolf population on earth learned otherwise." },
  collaredlemming: { taxon: "Dicrostonyx groenlandicus · one of about 6 Dicrostonyx species", d: "Herbivore — willow, sedge and moss, cut under the snow all winter", h: "High Arctic tundra of North America and Greenland", s: "LC",
    f: "One of about six Dicrostonyx lemmings, and the only rodent in the world that turns white for the winter. It also grows tools for the season: each autumn the claws on two fingers of each forefoot enlarge into forked digging blades for cutting through hard snow, and each spring it sheds them again. Almost everything that hunts on the tundra rises and falls with its numbers." },

  // ---- under the ice ----
  colossalsquid: { taxon: "Mesonychoteuthis hamiltoni · the only living species in Mesonychoteuthis", d: "Carnivore — toothfish and other squid, ambushed in deep Southern Ocean water", h: "The Southern Ocean around Antarctica, deep water", s: "NE",
    f: "The only living species in Mesonychoteuthis, and it has the largest eyes of any animal that has ever lived — around twenty-seven centimetres across, the size of a dinner plate, which is thought to be about seeing a sperm whale coming before it arrives. It is shorter than the giant squid and far heavier, and its arms carry swivelling hooks rather than only suckers. Almost everything known about it comes from animals brought up by fishing boats or found inside whales." },
  antarcticicefish: { taxon: "Chaenocephalus aceratus · one of 16 species in the icefish family", d: "Carnivore — krill and small fish taken off the bottom", h: "The continental shelf around Antarctica and South Georgia", s: "NE",
    f: "One of sixteen icefishes, and the only vertebrates on earth with no haemoglobin — their blood is colourless and carries oxygen dissolved straight in the plasma. That only works because Antarctic water is near freezing and holds a great deal of oxygen, and the fish compensates with an oversized heart, more blood than a fish its size should have, and no scales, so it can also absorb some through the skin. It is a solution nothing else has ever needed." },
  antarctictoothfish: { taxon: "Dissostichus mawsoni · one of 2 living Dissostichus species", d: "Carnivore — fish and squid; the largest fish of the Ross Sea", h: "The Southern Ocean around Antarctica, from the shelf to 2,000 m", s: "NE",
    f: "One of two living Dissostichus toothfish, and it lives in water below the freezing point of its own blood. Antifreeze glycoproteins in its tissue bind to any ice crystal that starts to form and stop it growing — the crystal is still there, it simply cannot get bigger. It is also the top fish predator of the Ross Sea, which is why the argument over fishing it produced the largest marine protected area on earth in 2016." },
  antarcticseaspider: { taxon: "Colossendeis megalonyx · one of about 60 Colossendeis species", d: "Carnivore — soft-bodied animals, drained through a proboscis", h: "The Antarctic seafloor, from the shallows to deep water", s: "NE",
    f: "One of about sixty Colossendeis sea spiders, and this one grows to the span of a dinner plate — polar gigantism, which shows up again and again in cold, oxygen-rich water. It barely has a body: the gut and the reproductive organs run out into the legs because there is no trunk to hold them. It has no lungs and no gills either, and takes oxygen straight through its cuticle. The male carries the eggs." },
  arcticcod: { taxon: "Boreogadus saida · the only living species in Boreogadus", d: "Planktivore — copepods and amphipods, many of them from the ice itself", h: "Arctic seas, much of the time inside the sea ice", s: "LC",
    f: "The only living species in Boreogadus, and it lives IN the ice — in the brine channels that thread through a floe, where the water stays liquid because it is too salty to freeze. Antifreeze proteins keep it going at temperatures that would kill most fish, and almost everything larger in the Arctic eats it: seals, belugas, narwhals, seabirds. It is the single link between Arctic plankton and Arctic animals." },
  capelin: { taxon: "Mallotus villosus · the only living species in Mallotus", d: "Planktivore — copepods and krill", h: "Cold North Atlantic and Arctic seas, spawning on beaches and shallow gravel", s: "LC",
    f: "The only living species in Mallotus, and it is what the North Atlantic runs on — cod, seals, whales and seabirds all track it. Its spawning is the visible part: the fish roll ashore on gravel beaches in numbers that turn the surf silver, spawn in the wash, and most of the males die there. Newfoundland calls it the capelin roll and times the year by it." },
  arcticchar: { taxon: "Salvelinus alpinus · one of about 50 Salvelinus species", d: "Carnivore — insects, crustaceans and smaller fish", h: "The northernmost freshwater fish there is: Arctic lakes and rivers, some seagoing", s: "LC",
    f: "One of about fifty Salvelinus charr, and it lives further north than any other freshwater fish. Some populations run to sea and back; others have been locked in a single lake since the glaciers left, and those lakes are where it gets strange. One lake can hold two, three or four forms — different sizes, different mouths, eating different things, mostly not interbreeding — which looks a great deal like watching new species start." },
  greenlandhalibut: { taxon: "Reinhardtius hippoglossoides · the only living species in Reinhardtius", d: "Carnivore — fish and squid, hunted in open water rather than off the bottom", h: "Cold deep water of the North Atlantic and Arctic, to 2,000 m", s: "NE",
    f: "The only living species in Reinhardtius, and it is a flatfish that refused to lie down. Every flatfish starts upright and then topples onto one side as one eye migrates over the skull. In this one the eye only travels part of the way, stopping near the top edge — so it swims upright, sees both above and below, and chases prey through open water instead of ambushing from the bottom like the rest of its family." },
});

// Photographic sprites for all twenty-five. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P71.map((k) => [k, true])));

/* Learnsets and placement — the part68 pattern, unchanged. */
{
  let built = 0; const thin = [];
  P71.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live. polarz is the ice; tundraz is the ground behind it. The
     split between pool and poolWater is the same distinction part68 drew - a
     seal hauls out and a toothfish does not, and putting a squid on a dry tile
     because the map happens to be polar is exactly the error to avoid. */
  const WATER = ["colossalsquid", "antarcticicefish", "antarctictoothfish",
    "antarcticseaspider", "arcticcod", "capelin", "arcticchar", "greenlandhalibut"];
  const LAND = P71.filter((k) => !WATER.includes(k) && k !== "arcticwolf"
    && k !== "collaredlemming" && k !== "rockptarmigan");
  const TUNDRA = ["arcticwolf", "collaredlemming", "rockptarmigan"];

  const BY_ZONE = [
    { zone: "polarz", pool: "poolWater", list: WATER },
    { zone: "polarz", pool: "pool", list: LAND },
    { zone: "tundraz", pool: "pool", list: TUNDRA },
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

  const homeless = P71.filter((k) => !placed.has(k));
  const hiddenFromGuide = P71.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part71] the floe: ${P71.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P71.length}`
    + ` | guide locations: ${P71.length - hiddenFromGuide.length}/${P71.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
