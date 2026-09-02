// ---------- Part 68: THE FORTY-FOUR ----------
// The species chosen to finish the twelve biomes of Terrane at 650, and with
// The Kept to bring the main game to 700. Seventeen open ocean, nine farmland,
// five coast, five reef, three desert, two forest, two wetland, one savanna.
//
// Loaded after part67. The forty-four matching sprites are present in art/;
// their filenames use the stable DEX keys declared below.
//
// Learnsets are not written by hand. buildLearnset is the same builder part17,
// part31 and part54 use, so these forty-four progress exactly like everything
// else in the dex rather than to one author's taste. Placement follows part54
// as well: added to the pools that already lean the right way, at low weight,
// so forty-four new animals do not thin out everything already living there.

const P68 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P68.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- The Blue: open ocean ----
    add("bluefintuna", "Atlantic Bluefin Tuna", ["Aquatic", "Swift"], { h: 62, a: 72, d: 48, s: 78 }, 0.18),
    add("chubmackerel", "Chub Mackerel", ["Aquatic", "Swift"], { h: 30, a: 34, d: 28, s: 66 }, 0.5),
    add("atlanticherring", "Atlantic Herring", ["Aquatic", "Swift"], { h: 28, a: 30, d: 26, s: 62 }, 0.55),
    add("mahimahi", "Mahi-mahi", ["Aquatic", "Swift"], { h: 48, a: 60, d: 38, s: 80 }, 0.3),
    add("opah", "Opah", ["Aquatic", "Ember"], { h: 66, a: 54, d: 56, s: 46 }, 0.22),
    add("oceanicwhitetip", "Oceanic Whitetip Shark", ["Aquatic", "Predator"], { h: 68, a: 74, d: 54, s: 54 }, 0.18),
    add("blueshark", "Blue Shark", ["Aquatic", "Swift"], { h: 56, a: 64, d: 44, s: 72 }, 0.24),
    add("remora", "Remora", ["Aquatic", "Swift"], { h: 34, a: 30, d: 40, s: 48 }, 0.55),
    add("sargassumfrogfish", "Sargassum Frogfish", ["Aquatic", "Predator"], { h: 36, a: 52, d: 40, s: 26 }, 0.4),
    add("humboldtsquid", "Humboldt Squid", ["Aquatic", "Predator"], { h: 54, a: 68, d: 38, s: 64 }, 0.26),
    add("manowar", "Portuguese Man o' War", ["Venom", "Aquatic"], { h: 40, a: 52, d: 26, s: 20 }, 0.4),
    add("northerngannet", "Northern Gannet", ["Aerial", "Aquatic"], { h: 48, a: 58, d: 40, s: 70 }, 0.3),
    add("sootyshearwater", "Sooty Shearwater", ["Aerial", "Swift"], { h: 44, a: 44, d: 38, s: 76 }, 0.34),
    add("stormpetrel", "Wilson's Storm Petrel", ["Aerial", "Swift"], { h: 26, a: 30, d: 24, s: 70 }, 0.5),
    add("tropicbird", "Red-billed Tropicbird", ["Aerial", "Aquatic"], { h: 40, a: 44, d: 34, s: 68 }, 0.36),
    add("loggerhead", "Loggerhead Turtle", ["Armor", "Aquatic"], { h: 64, a: 54, d: 70, s: 34 }, 0.26),
    add("oliveridley", "Olive Ridley Turtle", ["Armor", "Aquatic"], { h: 52, a: 44, d: 62, s: 36 }, 0.34),

    // ---- The Furrows: farmland ----
    add("housemouse", "House Mouse", ["Burrow", "Swift"], { h: 24, a: 28, d: 24, s: 64 }, 0.6),
    add("brownrat", "Brown Rat", ["Burrow", "Wild"], { h: 36, a: 42, d: 32, s: 56 }, 0.5),
    add("fieldvole", "Field Vole", ["Burrow", "Swift"], { h: 26, a: 28, d: 26, s: 58 }, 0.6),
    add("commontoad", "Common Toad", ["Venom", "Burrow"], { h: 42, a: 38, d: 48, s: 24 }, 0.5),
    add("grasssnake", "Grass Snake", ["Wild", "Swift"], { h: 36, a: 44, d: 34, s: 54 }, 0.44),
    add("magpie", "Eurasian Magpie", ["Aerial", "Night"], { h: 42, a: 48, d: 38, s: 64 }, 0.36),
    add("skylark", "Eurasian Skylark", ["Aerial", "Swift"], { h: 28, a: 30, d: 26, s: 68 }, 0.5),
    add("europeanmole", "European Mole", ["Burrow"], { h: 38, a: 44, d: 40, s: 30 }, 0.44),
    add("europeanbadger", "European Badger", ["Burrow", "Armor"], { h: 62, a: 54, d: 60, s: 34 }, 0.28),

    // ---- The Strand: coast ----
    add("herringgull", "Herring Gull", ["Aerial", "Wild"], { h: 46, a: 48, d: 40, s: 58 }, 0.42),
    add("bluemussel", "Blue Mussel", ["Armor", "Aquatic"], { h: 44, a: 20, d: 68, s: 6 }, 0.6),
    add("acornbarnacle", "Acorn Barnacle", ["Armor", "Aquatic"], { h: 34, a: 18, d: 66, s: 4 }, 0.62),
    add("greenanemone", "Giant Green Anemone", ["Venom", "Aquatic"], { h: 46, a: 46, d: 40, s: 8 }, 0.44),
    add("aldabratortoise", "Aldabra Giant Tortoise", ["Armor", "Wild"], { h: 78, a: 48, d: 80, s: 12 }, 0.2),

    // ---- The Garden: reef ----
    add("staghorncoral", "Staghorn Coral", ["Armor", "Aquatic"], { h: 40, a: 16, d: 62, s: 4 }, 0.6),
    add("braincoral", "Brain Coral", ["Armor", "Aquatic"], { h: 56, a: 18, d: 74, s: 2 }, 0.55),
    add("giantclam", "Giant Clam", ["Armor", "Aquatic"], { h: 70, a: 24, d: 82, s: 4 }, 0.4),
    add("pistolshrimp", "Pistol Shrimp", ["Aquatic", "Swift"], { h: 26, a: 58, d: 30, s: 70 }, 0.44),
    add("humpheadwrasse", "Humphead Wrasse", ["Aquatic", "Wild"], { h: 68, a: 60, d: 54, s: 44 }, 0.22),

    // ---- The Dry: desert ----
    add("kangaroorat", "Kangaroo Rat", ["Burrow", "Swift"], { h: 26, a: 30, d: 24, s: 72 }, 0.55),
    add("namibbeetle", "Namib Desert Beetle", ["Bug", "Armor"], { h: 22, a: 26, d: 44, s: 34 }, 0.6),
    add("egyptianvulture", "Egyptian Vulture", ["Aerial", "Wild"], { h: 44, a: 48, d: 40, s: 58 }, 0.36),

    // ---- The Weald: forest ----
    add("bumblebeebat", "Bumblebee Bat", ["Aerial", "Night"], { h: 20, a: 26, d: 20, s: 72 }, 0.5),
    add("giantsquirrel", "Indian Giant Squirrel", ["Canopy", "Swift"], { h: 40, a: 44, d: 34, s: 70 }, 0.38),

    // ---- The Fens: wetland ----
    add("northernpike", "Northern Pike", ["Aquatic", "Predator"], { h: 54, a: 70, d: 42, s: 58 }, 0.28),
    add("electriceel", "Electric Eel", ["Aquatic", "Venom"], { h: 56, a: 66, d: 40, s: 38 }, 0.26),

    // ---- The Long Grass: savanna ----
    add("honeyguide", "Greater Honeyguide", ["Aerial", "Wild"], { h: 30, a: 34, d: 28, s: 62 }, 0.44),
  );
})());

Object.assign(INFO, {
  // ---- The Blue ----
  bluefintuna: { taxon: "Thunnus thynnus · one of 8 living Thunnus species", d: "Carnivore — herring, mackerel, squid, run down at speed", h: "Open Atlantic and Mediterranean; crosses the ocean and returns to spawn", s: "LC",
    f: "One of eight living Thunnus tuna, it keeps its swimming muscles warmer than the water with counter-current heat exchangers and can hunt at speed in the cold North Atlantic. Its 2021 assessment moved from Endangered to Least Concern after enforced catch limits — unusually clear evidence that an unpopular quota can give a heavily fished ocean animal room to recover." },
  chubmackerel: { taxon: "Scomber japonicus · Pacific Chub Mackerel, one of 4 living Scomber species", d: "Planktivore and small fish, taken while swimming through the shoal", h: "Southeast Atlantic and Indo-Pacific shelf seas, usually 50–200 m deep", s: "LC",
    f: "One of four living Scomber mackerels, this is the moving middle of an ocean food web — it eats plankton and small animals, then feeds tuna, sharks, seabirds and people. A school has no leader. Each fish responds mostly to the few beside it, yet thousands turn together so quickly that the shoal behaves like one silver animal." },
  atlanticherring: { taxon: "Clupea harengus · one of 3 living Clupea species", d: "Planktivore — copepods and larvae, strained from the water", h: "Cold North Atlantic, in shoals from the surface to 200 m", s: "LC",
    f: "One of three living Clupea herrings, it forms shoals so large that they have been measured in cubic kilometres. The North Atlantic's larger hunters are built on that moving biomass — herring also release rapid trains of bubbles from the swim bladder after dark, producing the Fast Repetitive Tick that researchers recorded as a possible way for a school to keep in contact." },
  mahimahi: { taxon: "Coryphaena hippurus · one of 2 living Coryphaena species", d: "Carnivore — flying fish, squid, anything under floating weed", h: "Warm surface waters worldwide, often under drifting objects", s: "LC",
    f: "One of two living Coryphaena species, it can reach about a metre in its first year and rarely lives beyond five. The electric green, blue and gold are made by pigment cells changing shape while the fish is alive. After death those signals stop and the colour drains to grey within minutes — the famous animal is one that a market stall cannot quite show." },
  opah: { taxon: "Lampris incognitus · Smalleye Pacific Opah, one of 6 recognised opah species", d: "Carnivore — squid and krill, hunted in cold deep water", h: "Temperate and subtropical North Pacific open ocean, below the surface",
    f: "One of six recognised Lampris opahs, this Pacific species broke a rule — researchers reported whole-body endothermy in 2015. Constantly beating pectoral fins make heat, and blood-vessel lattices inside the gills keep much of it from escaping. Warm blood reaches the heart as well as the swimming muscles, letting the fish forage in cold deep water without repeatedly returning to the surface." },
  oceanicwhitetip: { taxon: "Carcharhinus longimanus · one of 36 living Carcharhinus species", d: "Carnivore — tuna, squid, seabirds, carrion", h: "Warm open ocean worldwide, usually the top 150 m", s: "CR",
    f: "One of thirty-six living Carcharhinus sharks, it once ranged through warm open ocean in extraordinary numbers. Longlines set for tuna catch the same wide-ranging predator, and some monitored populations fell by more than 90 percent — the species is now Critically Endangered. Its old reputation came from meeting shipwreck survivors. That story outlived the abundance of the shark itself." },
  blueshark: { taxon: "Prionace glauca · the only living species in Prionace", d: "Carnivore — squid above all, and schooling fish", h: "Every ocean but the poles; the widest-ranging shark there is", s: "NT",
    f: "The only living species in Prionace, the blue shark crosses entire ocean basins; tagged animals have travelled more than 9,000 kilometres. Females bear deep mating scars, and their skin is roughly twice as thick as a male's. That is not armour against another predator but an adaptation to courtship within their own species — a private danger carried across the open sea." },
  remora: { taxon: "Remora remora · one of 5 living Remora species", d: "Scavenger — scraps, parasites, and skin off its host", h: "Warm oceans, attached to sharks, rays, turtles and boat hulls", s: "LC",
    f: "One of five living Remora species, it rides sharks, rays and turtles on a suction disc made from a transformed dorsal fin — rows of movable plates increase their grip as the host pulls forward, yet the fish can release them to feed. Some fishing cultures tied a line to a live remora and let its remarkable fin catch a turtle for them." },
  sargassumfrogfish: { taxon: "Histrio histrio · the only living species in Histrio", d: "Ambush carnivore — anything up to its own size, including other frogfish", h: "Floating sargassum weed rafts in the open Atlantic", s: "LC",
    f: "The only living species in Histrio spends its life inside floating Sargassum — its colour and ragged skin match the weed. Jointed, grasping pectoral fins let it climb through the raft instead of swimming around it. There it ambushes animals up to its own size, including other frogfish, in a habitat that is both island and camouflage." },
  humboldtsquid: { taxon: "Dosidicus gigas · the only living species in Dosidicus", d: "Carnivore — lanternfish, crustaceans, and each other", h: "Eastern Pacific, rising from deep water to hunt at night", s: "DD",
    f: "The only living species in Dosidicus grows to more than a metre in a life of roughly one to two years. Groups rise from deep eastern Pacific water to hunt at night while their skin flashes between pale and dark red. The changing patterns appear to carry signals between squid — researchers can describe the display more confidently than they can translate it." },
  manowar: { taxon: "Physalia physalis · one of 5 currently recognised Physalia species", d: "Carnivore — small fish and crustaceans, paralysed by the tentacles", h: "Warm surface waters worldwide, drifting where the wind takes it", s: "DD",
    f: "One of five Physalia species currently recognised, it is not one animal but a colony — its specialised members become float, tentacles, digestion and reproduction. None can live alone. The colony cannot swim: its gas-filled crest works as a sail, and left- and right-sailing forms are pushed in different directions by the same wind." },
  northerngannet: { taxon: "Morus bassanus · one of 3 living Morus species", d: "Piscivore — mackerel and herring, taken in a plunge dive", h: "North Atlantic cliffs and stacks; at sea outside the breeding season", s: "LC",
    f: "One of three living Morus gannets, it folds into an arrow and enters the sea at around 100 kilometres an hour. Air sacs beneath the skin cushion the impact, its nostrils open inside the bill rather than on the surface, and the skull is reinforced. The plunge is only the beginning — underwater, it uses wings and feet to chase the fish it saw from above." },
  sootyshearwater: { taxon: "Ardenna grisea · one of 7 living Ardenna species", d: "Piscivore and squid, seized at the surface or in shallow dives", h: "Breeds in burrows on southern islands; the whole Pacific and Atlantic outside that", s: "NT",
    f: "One of seven living Ardenna shearwaters, it traces a vast figure of eight through the Pacific each year. Tracking has recorded journeys of roughly 65,000 kilometres between breeding islands near New Zealand and feeding waters off Japan, Alaska and California. It follows productive seasons so far that a bird can cross the equator twice before coming home." },
  stormpetrel: { taxon: "Oceanites oceanicus · one of 3 IOC-recognised Oceanites species; a revision proposes 7", d: "Planktivore — crustaceans and oil droplets picked off the surface", h: "Breeds on Antarctic and subantarctic rock; at sea across the world's oceans", s: "LC",
    f: "One of three Oceanites species in the IOC world list, it is among the most numerous seabirds and scarcely larger than a swallow. It seems to walk on the sea — holding itself against the wind and pattering its feet over the surface while it feeds. That performance is traditionally linked to the name petrel, after Saint Peter walking on water." },
  tropicbird: { taxon: "Phaethon aethereus · one of 3 living Phaethon species", d: "Piscivore — flying fish and squid, taken in a dive", h: "Tropical Atlantic, Pacific and Indian oceans; nests on sea cliffs", s: "LC",
    f: "One of three living Phaethon tropicbirds, it carries two tail streamers longer than the rest of its body. Its legs are set so far back that it cannot stand and walk normally, only shuffle on its belly near the nest. The apparent handicap hardly matters to a bird that spends months over tropical ocean and comes ashore only to breed." },
  loggerhead: { taxon: "Caretta caretta · the only living Caretta, one of 7 sea-turtle species", d: "Carnivore — crabs, whelks and conch, crushed with the jaws", h: "Warm seas worldwide; nests on beaches in the Atlantic, Pacific and Indian oceans", s: "VU",
    f: "The only living species in Caretta, and one of seven sea turtles, it is named for a head and jaws powerful enough to crush hard-shelled prey. Young turtles vanish into ocean currents for years before returning to coastal water — those “lost years” once left an entire life stage almost invisible; tiny satellite tags are now beginning to map it." },
  oliveridley: { taxon: "Lepidochelys olivacea · one of 2 ridleys and 7 living sea-turtle species", d: "Omnivore — jellyfish, crabs, algae", h: "Tropical Pacific, Atlantic and Indian oceans; nests on a handful of beaches", s: "VU",
    f: "One of two Lepidochelys ridleys, and one of seven living sea turtles, it nests in an arribada: thousands of females landing on the same beach over a few nights. Later arrivals may uncover nests laid earlier. It is the most abundant sea turtle, but much of that abundance funnels through a small number of beaches — a crowd can still depend on very little ground." },

  // ---- The Furrows ----
  housemouse: { taxon: "Mus musculus · one of 39 living Mus species", d: "Omnivore — grain, scraps, almost anything stored", h: "Wherever people build, on every continent including Antarctic bases", s: "LC",
    f: "One of thirty-nine living Mus mice, it has followed stored food into homes, farms and laboratories across the world — much of its social life happens above human hearing: males produce patterned ultrasonic songs during courtship, with syllables repeated in recognisable sequences. The animal beside the skirting board is using a voice that the people in the room cannot hear." },
  brownrat: { taxon: "Rattus norvegicus · one of 63 living Rattus species", d: "Omnivore — genuinely anything", h: "Cities, farms, sewers and ports worldwide; almost never far from people", s: "LC",
    f: "One of sixty-three living Rattus rats, it spread with people through ports, farms and cities — it is strongly wary of changes in a familiar place, which is why a new trap may be avoided for days. A meal followed by illness can produce a lasting taste aversion after one experience — a small animal solving human control measures by remembering." },
  fieldvole: { taxon: "Microtus agrestis · one of 62 living Microtus species", d: "Herbivore — grass, almost exclusively", h: "Rough grassland, verges and young forestry across Europe and Asia", s: "LC",
    f: "One of sixty-two living Microtus voles, it turns grass into the food that kestrels, owls, foxes and weasels depend on. In places where its population rises and crashes on a multi-year cycle, predator breeding success follows it — A “vole year” is therefore not just a change in one small mammal but a pulse moving through the whole field." },
  commontoad: { taxon: "Bufo bufo · one of 26 living Bufo species", d: "Carnivore — slugs, worms, beetles, taken with the tongue", h: "Gardens, woodland and farmland across Europe; breeds in ponds", s: "LC",
    f: "One of twenty-six living Bufo toads, it returns towards its breeding pond each spring even when a road has appeared across the route — volunteers carry them over in buckets because the homing instinct does not account for traffic. Large glands behind the eyes release defensive toxins, so an animal that looks slow and exposed is a dangerous mouthful." },
  grasssnake: { taxon: "Natrix natrix · one of 5 living Natrix species", d: "Carnivore — frogs and toads above all, hunted in and around water", h: "Damp grassland, ponds and ditches across Europe", s: "LC",
    f: "One of five living Natrix water snakes, it is harmless to people and hunts frogs around ponds and damp grassland. When caught it first releases a foul-smelling secretion. If that fails, it may go completely limp, open its mouth and let its tongue hang out — maintaining the performance until the threat puts the apparently dead snake down." },
  magpie: { taxon: "Pica pica · one of 7 living Pica species", d: "Omnivore — invertebrates, carrion, eggs, scraps", h: "Farmland, hedgerows and towns across Europe and Asia", s: "LC",
    f: "One of seven living Pica magpies, it became famous after a mirror study in which marked birds scratched at their own throats rather than the glass. Later tests have made the interpretation less certain, which is what a good experiment is allowed to do — the old claim that magpies compulsively steal shiny things fares worse: trials found curiosity and caution, not a preference for treasure." },
  skylark: { taxon: "Alauda arvensis · one of 4 living Alauda species", d: "Omnivore — seeds and insects, taken on the ground", h: "Open farmland and grassland across Europe and Asia", s: "LC",
    f: "One of four living Alauda larks, it can sing for minutes while climbing and hanging high above a field. The nest is less conspicuous: a shallow cup on the ground between crop stems. When sowing moved from spring to autumn, many fields were already too tall and dense by breeding time — a quiet change in farming that removed places for a famously audible bird." },
  europeanmole: { taxon: "Talpa europaea · one of 16 living Talpa species", d: "Carnivore — earthworms, stored alive in a larder", h: "Any soil deep enough to tunnel, across Europe", s: "LC",
    f: "One of sixteen living Talpa moles, it digs with hands turned permanently outward and widened by an extra “false thumb” bone. It stores live earthworms, sometimes disabling them with bites near the head. The often-repeated claim that its saliva contains a paralysing venom remains untested — a memorable story is not the same thing as an established mechanism." },
  europeanbadger: { taxon: "Meles meles · one of 4 living Meles species", d: "Omnivore — earthworms mostly, plus fruit, insects and carrion", h: "Woodland edge, pasture and hedgerow across Europe", s: "LC",
    f: "One of four living Meles badgers, it may inherit a sett dug and enlarged by generations before it was born. The tunnels have sleeping chambers — bedding that is carried out and replaced, and latrines away from the entrances. Mating and pregnancy can also be separated: delayed implantation lets embryos wait until the season is right to develop." },

  // ---- The Strand ----
  herringgull: { taxon: "Larus argentatus · European Herring Gull, one of 24 living Larus species", d: "Omnivore — fish, crabs, eggs, refuse, whatever is going", h: "Coasts and increasingly the roofs of coastal towns, North Atlantic", s: "LC",
    f: "One of twenty-four living Larus gulls, it carries a red spot on the bill that chicks peck to prompt a parent to bring up food — Tinbergen's model-bill experiments helped make that signal a classic of animal behaviour. The bird reads people well enough to raid a meal, yet its familiar presence hides a long-term decline across parts of its natural range." },
  bluemussel: { taxon: "Mytilus edulis · one of 8 living Mytilus species", d: "Filter feeder — plankton strained from the tide", h: "Cold and temperate rocky shores, North Atlantic and Pacific", s: "LC",
    f: "One of eight living Mytilus mussels, it anchors itself with byssus threads spun by its foot and fixed by proteins that cure underwater — engineers still study that wet adhesive. A mussel bed is more than a crowd of filter-feeders: the gaps between shells slow water, trap material and create shelter for hundreds of other coastal animals." },
  acornbarnacle: { taxon: "Semibalanus balanoides · Northern Acorn Barnacle, one of 4 Semibalanus species", d: "Filter feeder — plankton, kicked into the mouth by the legs", h: "Cold North Atlantic and northeastern Pacific rocky shores, in the intertidal zone", s: "LC",
    f: "One of four living Semibalanus barnacles, it glues its head to rock as a young animal and then spends adult life kicking feathery legs through the shell to catch food. It cannot walk to a mate, so fertilisation happens across the gap between fixed neighbours. An organ that can extend several body lengths is the practical answer to never being able to move." },
  greenanemone: { taxon: "Anthopleura xanthogrammica · one of about 50 living Anthopleura species", d: "Carnivore — mussels, crabs and small fish, stung and swallowed", h: "Cold Pacific rocky shores and tide pools, Alaska to California", s: "LC",
    f: "One of about fifty living Anthopleura anemones, it gets much of its green from green fluorescent proteins made by the anemone itself. Photosynthetic algae inside its tissues can add pigment and pass sugars to their host, but a 2024 study found they are not the main source of the colour — the partnership is real, while the neat old explanation was too simple." },
  aldabratortoise: { taxon: "Aldabrachelys gigantea · the only living species in Aldabrachelys", d: "Herbivore — grasses, leaves and fallen fruit", h: "The Aldabra atoll, Seychelles — one wild population, and nowhere else", s: "VU",
    f: "The only living species in Aldabrachelys is also one of just two surviving giant-tortoise lineages. On its home atoll, grazing maintains a low community of plants called tortoise turf — the animal does not merely occupy the habitat but helps make it. Individuals can live for well over a century, so one grazer may reshape the same patch of island across several human generations." },

  // ---- The Garden ----
  staghorncoral: { taxon: "Acropora cervicornis · one of about 156 living Acropora species", d: "Symbiotic — sugars from algae in its tissue, plus plankton at night", h: "Shallow Caribbean reefs, in clear water with strong light", s: "CR",
    f: "One of about 156 living Acropora corals, this Caribbean species builds thickets with fast-growing antler branches that turn flat reef into shelter for fish and invertebrates — the same rapid metabolism and branching form make it especially sensitive to heat, disease and storm breakage. A reef-builder able to add more than ten centimetres a year is now Critically Endangered." },
  braincoral: { taxon: "Diploria labyrinthiformis · Grooved Brain Coral, the only living Diploria", d: "Symbiotic — sugars from algae, plus plankton caught at night", h: "Reefs and lagoons in the Caribbean and Atlantic", s: "LC",
    f: "The only living species in Diploria is one of several unrelated corals given the plain name “brain coral” for their winding ridges. Its grooves are shared walls between rows of small polyps, not decoration — a colony grows slowly for centuries, laying down annual density bands that preserve past sea conditions as a tree's rings preserve seasons on land." },
  giantclam: { taxon: "Tridacna gigas · one of 10 living Tridacna species", d: "Symbiotic — sugars from algae farmed in its own mantle, plus filtered plankton", h: "Shallow Indo-Pacific reef flats, embedded in the reef itself", s: "VU",
    f: "One of ten living Tridacna clams, it can exceed a metre across and two hundred kilograms. Much of its energy comes from algae farmed inside the exposed mantle; iridescent cells scatter sunlight down to them without letting the surface layer take it all. The old tale of a “killer clam” trapping divers survives better than any verified case of it happening." },
  pistolshrimp: { taxon: "Alpheus randalli · one of about 322 living Alpheus species", d: "Carnivore — small fish and worms, stunned by the snap", h: "Warm Indo-Pacific reef sand and rubble, in a burrow it shares with a goby", s: "LC",
    f: "One of about 322 living Alpheus snapping shrimps, Randall's pistol shrimp shares a burrow with a goby. The nearly blind shrimp excavates while keeping an antenna on the fish; the goby watches for danger and signals when both should retreat. Its enlarged claw fires a water jet whose collapsing bubble makes the snap — remarkable, but the partnership is what keeps it alive." },
  humpheadwrasse: { taxon: "Cheilinus undulatus · one of 8 living Cheilinus species", d: "Carnivore — molluscs, crustaceans, and crown-of-thorns starfish", h: "Indo-Pacific coral reefs, on steep outer slopes", s: "EN",
    f: "One of eight living Cheilinus wrasses, it can grow beyond two metres and live for decades on an Indo-Pacific reef. Some change sex from female to male as they mature, so removing the largest fish can remove breeding males faster than a headcount suggests — a single live animal may command an enormous restaurant price; slow growth turns that demand into an endangered species." },

  // ---- The Dry ----
  kangaroorat: { taxon: "Dipodomys merriami · one of 20 living Dipodomys species", d: "Granivore — dry seed, carried in cheek pouches", h: "Deserts and arid scrub of western North America", s: "LC",
    f: "One of twenty living Dipodomys kangaroo rats, Merriam's kangaroo rat can live without drinking liquid water. Moisture already in seeds, plus water released while metabolising them, covers the need; efficient kidneys and nasal passages limit what escapes. It seals the burrow by day, keeping heat out and humidity in — a desert water budget balanced with food, physiology and architecture." },
  namibbeetle: { taxon: "Onymacris unguicularis · one of 14 living Onymacris species", d: "Detritivore — windblown plant fragments and grass seed", h: "The Namib desert dune fields, one of the driest places on earth", s: "LC",
    f: "One of fourteen living Onymacris beetles, it climbs a Namib dune when fog arrives, faces the wind and stands head-down. Droplets collect on its smooth, grooved back and run towards the mouth. The crucial adaptation is the behaviour, not the often-repeated story of special water-attracting bumps — experiments found that bumpy beetles did not perform this fog-basking routine." },
  egyptianvulture: { taxon: "Neophron percnopterus · the only living species in Neophron", d: "Scavenger — carrion, and eggs broken open with a stone", h: "Dry open country from southern Europe to India and across Africa", s: "EN",
    f: "The only living species in Neophron is one of the few birds repeatedly seen using a tool in the wild. It carries stones to ostrich eggs and throws them until the shell breaks. Naive birds can perform the action without being taught, so the basic behaviour appears innate rather than culturally copied — its yellow face, meanwhile, is coloured partly by carotenoids acquired through diet." },

  // ---- The Weald ----
  bumblebeebat: { taxon: "Craseonycteris thonglongyai · the only living species in its genus and family", d: "Insectivore — tiny insects taken in flight at dusk", h: "Limestone caves in a small area of Thailand and Myanmar", s: "NT",
    f: "The only living species in both Craseonycteris and Craseonycteridae weighs about two grams. It competes with the Etruscan shrew for “smallest mammal”, one being lighter and the other shorter — science did not describe it until 1974, and its entire ancient branch survives in limestone caves across a small part of Thailand and Myanmar." },
  giantsquirrel: { taxon: "Ratufa indica · one of 4 living Ratufa species", d: "Frugivore — fruit, nuts, bark and the occasional egg", h: "Moist deciduous and evergreen forest of peninsular India", s: "LC",
    f: "One of four living Ratufa giant squirrels, it can approach a metre from nose to tail-tip and wears patches of cream, maroon and dark brown. Those colours break up its outline in dappled canopy — it rarely needs the ground, crossing gaps of several metres and building more than one large spherical nest within its home range." },

  // ---- The Fens ----
  northernpike: { taxon: "Esox lucius · one of 7 living Esox species", d: "Ambush carnivore — fish, ducklings, frogs, other pike", h: "Weedy lakes and slow rivers across the northern hemisphere", s: "LC",
    f: "One of seven living Esox pikes, it is built for a single explosive start: a long body with the dorsal and anal fins crowded near the tail. Backward-pointing teeth line the jaws and roof of the mouth, so prey seized in the rush is guided in rather than out — the still fish in the weeds is an acceleration waiting to happen." },
  electriceel: { taxon: "Electrophorus voltai · Volta's electric eel, one of 3 living electric-eel species", d: "Carnivore — fish, stunned before they are taken", h: "Clear, low-conductivity rivers of the Brazilian and southern Guyana shields", s: "LC",
    f: "One of three living Electrophorus species, Volta's electric eel is the one measured at 860 volts — the strongest known discharge from an animal. Most of its long body is electric organs built from stacked cells. Low pulses reveal nearby movement; a high-voltage volley activates prey muscles before the fish closes in. It is a knifefish, not a true eel." },

  // ---- The Long Grass ----
  honeyguide: { taxon: "Indicator indicator · one of 11 living Indicator species", d: "Beeswax, bee larvae, and insects — one of very few birds that digests wax", h: "Woodland and savanna across sub-Saharan Africa", s: "LC",
    f: "One of eleven living Indicator honeyguides, some populations answer specialised calls used by African honey-hunting cultures and lead people towards a bees' nest. People open what the bird cannot, then leave wax it can digest — a learned partnership between two wild species. The same bird is a brood parasite whose newly hatched chick kills nest-mates with a hooked bill." },
});

// Photographic sprites for all forty-four. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P68.map((k) => [k, true])));

/* Learnsets and placement — the part54 pattern, unchanged.

   part17 and part31 sweep the dex long before this file loads, so these
   forty-four would otherwise know no moves. Same builder, same rules. */
{
  let built = 0; const thin = [];
  P68.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live.
     Placed by this game's own zones, not by Terrane's biomes — Terrane has a
     Furrows and a Strand and this world does not, so mapping one onto the
     other by name puts a mole in the Outback. It did, on the first attempt,
     along with magpies in a myth rift and an Aldabra tortoise in the polar
     sea, because "town" and "farmland" carry no spawn pool and everything
     fell through to a type-affinity fallback that will always find somewhere.

     The savanna routes are this game's hedgerow country: route1 and the
     seg_m maps already hold groundhog, red squirrel, hedgehog, rabbit and
     mandarin duck, which is where the farmland animals belong. */
  // Each destination names its encounter layer as well as its zone. Fish and
  // marine invertebrates belong in poolWater; seabirds and land animals use
  // pool. Keeping that distinction here prevents a shark appearing on a dry
  // tile merely because the map itself is an ocean map.
  const BY_ZONE = [
    { zone: "oceanz", pool: "poolWater", list: [
      "bluefintuna", "chubmackerel", "atlanticherring", "mahimahi", "opah",
      "oceanicwhitetip", "blueshark", "remora", "sargassumfrogfish", "humboldtsquid",
      "manowar", "loggerhead", "oliveridley",
    ] },
    { zone: "oceanz", pool: "pool", list: [
      "northerngannet", "sootyshearwater", "stormpetrel", "tropicbird",
    ] },
    { zone: "kelpz", pool: "poolWater", list: [
      "bluemussel", "acornbarnacle", "greenanemone",
    ] },
    { zone: "reefz", pool: "poolWater", list: [
      "staghorncoral", "braincoral", "giantclam", "pistolshrimp", "humpheadwrasse",
    ] },
    { zone: "savanna", pool: "pool", list: [
      "housemouse", "brownrat", "fieldvole", "magpie", "skylark",
      "europeanmole", "europeanbadger", "honeyguide",
    ] },
    { zone: "savannaz", pool: "pool", list: ["honeyguide"] },
    { zone: "wetland", pool: "pool", list: ["commontoad", "grasssnake"] },
    { zone: "wetland", pool: "poolWater", list: ["northernpike", "electriceel"] },
    { zone: "desert", pool: "pool", list: [
      "kangaroorat", "namibbeetle", "egyptianvulture",
    ] },
    { zone: "jungle", pool: "pool", list: ["giantsquirrel"] },
    { zone: "cavezone", pool: "pool", list: ["bumblebeebat"] },
  ];
  // Two that want one specific map rather than a whole zone. The shore is the
  // beach — flamingo, pelican, penguin, booby — and volcanic covers the slopes
  // above it as well, which is no place for a gull or a giant tortoise.
  const BY_MAP = [
    { map: "shore", pool: "pool", list: ["herringgull", "aldabratortoise"] },
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

  // No silent fallback. A species with nowhere to go is a mistake in the lists
  // above, and burying it in whichever map happens to score well on type is
  // how the mole ended up in the desert. Say so instead.
  const homeless = P68.filter((k) => !placed.has(k));
  const hiddenFromGuide = P68.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part68] the forty-four: ${P68.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P68.length}`
    + ` | guide locations: ${P68.length - hiddenFromGuide.length}/${P68.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
