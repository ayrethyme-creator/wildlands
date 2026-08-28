// ---------- Part 68: THE FORTY-FOUR ----------
// The species chosen to finish the twelve biomes of Terrane at 650, and with
// The Kept to bring the main game to 700. Seventeen open ocean, nine farmland,
// five coast, five reef, three desert, two forest, two wetland, one savanna.
//
// THIS FILE IS NOT LOADED YET. It is deliberately absent from GAME_PARTS in
// index.html, because it declares PHOTO_ART for all forty-four and none of the
// PNGs exist. A species flagged for photographic art with no file on disk
// renders broken, so the flag and the art go in together — add the line to
// GAME_PARTS once tools/artgen/batch_terrane_01.json has been run and the
// sprites are in art/.
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
    add("europeanmole", "European Mole", ["Burrow", "Venom"], { h: 38, a: 44, d: 40, s: 30 }, 0.44),
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
  bluefintuna: { d: "Carnivore — herring, mackerel, squid, run down at speed", h: "Open Atlantic and Mediterranean; crosses the ocean and returns to spawn", s: "LC",
    f: "Warm-blooded in a way almost no other fish manages: a heat-exchanger in the blood keeps its muscles well above the water around it, which is what lets it hunt in cold water at speed. It was assessed as Endangered in 2011 and back to Least Concern in 2021 — one of the clearest cases anywhere that a quota, enforced and unpopular, works." },
  chubmackerel: { d: "Planktivore and small fish, taken while swimming through the shoal", h: "Warm and temperate shelf seas worldwide", s: "LC",
    f: "The thing almost everything larger in this ocean is eating. A mackerel shoal turns as one because each fish is watching the movement of the fish beside it and nothing more — no leader, no decision, and a wall of silver that behaves like a single animal." },
  atlanticherring: { d: "Planktivore — copepods and larvae, strained from the water", h: "Cold North Atlantic, in shoals from the surface to 200 m", s: "LC",
    f: "The biomass the North Atlantic is built on. Shoals have been measured at four cubic kilometres and several billion fish. They also communicate at night by releasing bursts of gas from the gut, a sound named — by the scientists who described it — Fast Repetitive Tick." },
  mahimahi: { d: "Carnivore — flying fish, squid, anything under floating weed", h: "Warm surface waters worldwide, often under drifting objects", s: "LC",
    f: "It grows faster than almost any fish in the sea, reaching a metre inside a year and rarely living past four. The colour is the famous part and it does not survive the animal: the electric green and gold drain to dull grey within minutes of death, which is why almost nobody has seen one properly." },
  opah: { d: "Carnivore — squid and krill, hunted in cold deep water", h: "Open ocean worldwide, usually 50–400 m down", s: "DD",
    f: "The only fish known to be fully warm-blooded throughout its body. It generates the heat by constantly flapping its pectoral fins and keeps it in with a lattice of blood vessels in the gills, so it can hunt cold deep water at full speed while everything around it has gone sluggish. Nobody worked this out until 2015." },
  oceanicwhitetip: { d: "Carnivore — tuna, squid, seabirds, carrion", h: "Warm open ocean worldwide, usually the top 150 m", s: "CR",
    f: "Once described as the most abundant large animal on earth over about 45 kg, and now down by more than 98% in parts of its range — taken almost entirely as bycatch on longlines set for tuna. It is the shark sailors met after a sinking, and the reputation that came from that did nothing to slow the collapse." },
  blueshark: { d: "Carnivore — squid above all, and schooling fish", h: "Every ocean but the poles; the widest-ranging shark there is", s: "NT",
    f: "One tagged blue shark crossed the Atlantic and was recovered 9,200 km away. They travel in loose groups sorted by size and sex, and females carry mating scars so deep that their skin is three times thicker than a male's — an adaptation to their own courtship." },
  remora: { d: "Scavenger — scraps, parasites, and skin off its host", h: "Warm oceans, attached to sharks, rays, turtles and boat hulls", s: "LC",
    f: "The disc on its head is a dorsal fin that stopped being a fin: rows of movable slats that grip harder the more the host pulls forward. It is not a parasite — it eats the host's parasites and leftovers, and lets go to feed. Fishermen in several cultures tied lines to remoras and used them to catch turtles." },
  sargassumfrogfish: { d: "Ambush carnivore — anything up to its own size, including other frogfish", h: "Floating sargassum weed rafts in the open Atlantic", s: "LC",
    f: "It lives its whole life in drifting weed and is shaped like the weed down to the ragged flaps of skin. Its pectoral fins have jointed elbows and grasping tips, so it climbs the sargassum rather than swimming, and its strike is one of the fastest movements measured in any vertebrate — the mouth opens in six milliseconds." },
  humboldtsquid: { d: "Carnivore — lanternfish, crustaceans, and each other", h: "Eastern Pacific, rising from deep water to hunt at night", s: "DD",
    f: "It hunts in coordinated groups of hundreds and signals by flashing its skin red and white, which appears to be communication rather than camouflage — nobody has yet read it. They grow to two metres in about a year and a half and then die, and when food runs short the group turns on itself." },
  manowar: { d: "Carnivore — small fish and crustaceans, paralysed by the tentacles", h: "Warm surface waters worldwide, drifting where the wind takes it", s: "DD",
    f: "Not one animal. It is a colony of four kinds of specialised individual — one becomes the float, others the tentacles, the digestion, the reproduction — and none of them can live alone. It cannot swim at all: the crest on the float is a sail, and it is left- or right-handed, so a population blows into two groups going different ways." },
  northerngannet: { d: "Piscivore — mackerel and herring, taken in a plunge dive", h: "North Atlantic cliffs and stacks; at sea outside the breeding season", s: "LC",
    f: "It dives from forty metres and enters the water at around 100 km/h. To survive that it has no external nostrils, air sacs under the skin of the face and chest to absorb the impact, and a reinforced skull. It hits, then swims down after the fish it was aiming at." },
  sootyshearwater: { d: "Piscivore and squid, seized at the surface or in shallow dives", h: "Breeds in burrows on southern islands; the whole Pacific and Atlantic outside that", s: "NT",
    f: "It flies a figure-of-eight around an entire ocean every year — about 65,000 km, one of the longest migrations ever recorded by tracking. It follows the endless summer, and a bird born on a New Zealand island will feed off Alaska and Japan before it comes home." },
  stormpetrel: { d: "Planktivore — crustaceans and oil droplets picked off the surface", h: "Breeds on Antarctic and subantarctic rock; at sea across the world's oceans", s: "LC",
    f: "One of the most numerous birds on earth and one of the smallest seabirds, no bigger than a swallow. It appears to walk on the water: it holds itself up on the wind with its wings and patters the surface with its feet, which is where the name petrel comes from — a diminutive of Peter, who did the same thing." },
  tropicbird: { d: "Piscivore — flying fish and squid, taken in a dive", h: "Tropical Atlantic, Pacific and Indian oceans; nests on sea cliffs", s: "LC",
    f: "Two tail streamers longer than the rest of the bird put together, and it has no real use for legs — they are set so far back that it cannot stand or walk, only shuffle to a cliff ledge. It spends months at a time entirely at sea and comes to land for nothing but the nest." },
  loggerhead: { d: "Carnivore — crabs, whelks and conch, crushed with the jaws", h: "Warm seas worldwide; nests on beaches in the Atlantic, Pacific and Indian oceans", s: "VU",
    f: "The head is the reason for the name and for the diet: jaws heavy enough to crush a queen conch. Hatchlings ride ocean gyres for the first decade of life, drifting the whole North Atlantic before anyone sees them again — biologists call it the lost years, and satellite tags only started filling it in this century." },
  oliveridley: { d: "Omnivore — jellyfish, crabs, algae", h: "Tropical Pacific, Atlantic and Indian oceans; nests on a handful of beaches", s: "VU",
    f: "The arribada: tens of thousands of females come ashore on one beach in a single night, so many that later arrivals dig up the eggs of the earlier ones. It is the most abundant sea turtle there is, and that abundance rests on a very small number of beaches — which is a different kind of fragile." },

  // ---- The Furrows ----
  housemouse: { d: "Omnivore — grain, scraps, almost anything stored", h: "Wherever people build, on every continent including Antarctic bases", s: "LC",
    f: "It followed grain out of northern India and into every building on earth, and it is now the most studied mammal after ourselves. It sings: males produce ultrasonic songs with structure and repeated phrases, pitched an octave and more above anything we can hear without equipment." },
  brownrat: { d: "Omnivore — genuinely anything", h: "Cities, farms, sewers and ports worldwide; almost never far from people", s: "LC",
    f: "It reached Europe from northern China in the 1700s and the world by ship. It is neophobic — deeply suspicious of anything new in a familiar place — which is why poisoning campaigns fail, and it will refuse a food that made it ill once and never touch it again. The tame version of this animal is in every laboratory and a good many living rooms." },
  fieldvole: { d: "Herbivore — grass, almost exclusively", h: "Rough grassland, verges and young forestry across Europe and Asia", s: "LC",
    f: "The animal the barn owl, the kestrel and the weasel are all living on. Its numbers rise and crash on a roughly four-year cycle, and everything that eats it rises and crashes behind — a vole year is a good year for owls and a lean one is not. Its urine reflects ultraviolet, so a kestrel can read a vole run from the air." },
  commontoad: { d: "Carnivore — slugs, worms, beetles, taken with the tongue", h: "Gardens, woodland and farmland across Europe; breeds in ponds", s: "LC",
    f: "It walks back to the pond it was born in every spring, in numbers, across whatever is in the way — which is why volunteers stand on roads at dusk in March with buckets. The warty skin behind the eyes carries a toxin strong enough to make a dog very ill, which is why almost nothing eats an adult toad." },
  grasssnake: { d: "Carnivore — frogs and toads above all, hunted in and around water", h: "Damp grassland, ponds and ditches across Europe", s: "LC",
    f: "Harmless, and it has two answers to being caught. First it produces a smell described by everyone who has met it as unforgettable. If that fails it plays dead — completely limp, mouth open, tongue hanging out — and it will keep doing it until you put it down." },
  magpie: { d: "Omnivore — invertebrates, carrion, eggs, scraps", h: "Farmland, hedgerows and towns across Europe and Asia", s: "LC",
    f: "One of very few animals to pass the mirror test: shown a mark on its own throat in a mirror, a magpie scratches at its throat and not at the glass. The reputation for stealing shiny things has been tested and mostly fails — in trials magpies avoided shiny objects more often than they took them." },
  skylark: { d: "Omnivore — seeds and insects, taken on the ground", h: "Open farmland and grassland across Europe and Asia", s: "LC",
    f: "It sings only in flight, hanging in the air for minutes at a time, and a single song can run unbroken past half an hour. It nests on bare ground between crops, which is why the switch from spring to autumn sowing emptied so much of the countryside of it — by the time the birds arrive, the crop is already too tall to nest in." },
  europeanmole: { d: "Carnivore — earthworms, stored alive in a larder", h: "Any soil deep enough to tunnel, across Europe", s: "LC",
    f: "The front paws are hands turned into shovels, permanently facing outward, with an extra thumb bone that is not a thumb. Its saliva carries a toxin that paralyses earthworms without killing them, so it can stockpile hundreds of live worms in a chamber and eat through them — which makes it, quietly, one of the very few venomous mammals." },
  europeanbadger: { d: "Omnivore — earthworms mostly, plus fruit, insects and carrion", h: "Woodland edge, pasture and hedgerow across Europe", s: "LC",
    f: "It lives in a sett that may be centuries old and dug by animals long dead, with chambers, bedding it changes, and latrines dug well away from the entrances. A single night's feeding can be two hundred earthworms. It also has embryonic diapause: it can mate in spring and not begin the pregnancy until winter." },

  // ---- The Strand ----
  herringgull: { d: "Omnivore — fish, crabs, eggs, refuse, whatever is going", h: "Coasts and increasingly the roofs of coastal towns, North Atlantic", s: "LC",
    f: "The red spot on the bill is a target: a chick pecks it and the parent brings up food, and Tinbergen won a Nobel Prize partly for working that out with cardboard models. It reads human behaviour well enough to time a raid, and it is declining across its range despite being the bird most people would name as too common." },
  bluemussel: { d: "Filter feeder — plankton strained from the tide", h: "Cold and temperate rocky shores, North Atlantic and Pacific", s: "LC",
    f: "It anchors itself with byssus threads it spins from a gland in the foot, each one stronger than tendon and glued down with an adhesive that sets underwater — a problem the adhesives industry has been trying to copy for forty years. A mussel bed is habitat: hundreds of other species live in the spaces between." },
  acornbarnacle: { d: "Filter feeder — plankton, kicked into the mouth by the legs", h: "Rocky intertidal shores worldwide, in the splash zone", s: "LC",
    f: "It glues its head to a rock as a larva and stays there for life, feeding by kicking its legs out through the top of its own shell. Darwin spent eight years on barnacles before he published on anything else. It also has, proportionally, the longest reproductive organ of any animal — which is what you do when you cannot move and neither can your neighbours." },
  greenanemone: { d: "Carnivore — mussels, crabs and small fish, stung and swallowed", h: "Cold Pacific rocky shores and tide pools, Alaska to California", s: "LC",
    f: "The green is not its own. Algae live inside its tissue and pay rent in sugar, which is why an anemone in a shaded pool is pale and one in the sun is brilliant. It can live for decades, possibly much longer — nobody has found the upper limit, because they do not appear to age in the ordinary way." },
  aldabratortoise: { d: "Herbivore — grasses, leaves and fallen fruit", h: "The Aldabra atoll, Seychelles — one wild population, and nowhere else", s: "VU",
    f: "Island gigantism, and one of only two giant tortoises left on earth. It grazes the atoll so hard it has created its own habitat — a turf of dwarf plants that flower at ankle height, called tortoise turf, which exists because they eat everything taller. Individuals live past 150 years, and the oldest credibly recorded reached 255." },

  // ---- The Garden ----
  staghorncoral: { d: "Symbiotic — sugars from algae in its tissue, plus plankton at night", h: "Shallow Indo-Pacific reefs, in clear water with strong light", s: "NT",
    f: "It is a colony of thousands of tiny animals, each in a stone cup it built itself, and it grows faster than any other reef coral — up to twenty centimetres a year, which is what lets a damaged reef come back at all. It is also the first thing to bleach: warm the water a degree and a half and it expels the algae feeding it." },
  braincoral: { d: "Symbiotic — sugars from algae, plus plankton caught at night", h: "Reefs and lagoons in the Caribbean and Atlantic", s: "LC",
    f: "The maze on the surface is not decoration: each valley is a row of polyps sharing one continuous mouth. It grows about a centimetre a year and a boulder-sized colony has been alive for several centuries, which means the coral was here before the town on the shore, and its growth bands can be read like tree rings for the climate of each year." },
  giantclam: { d: "Symbiotic — sugars from algae farmed in its own mantle, plus filtered plankton", h: "Shallow Indo-Pacific reef flats, embedded in the reef itself", s: "VU",
    f: "The largest bivalve there has ever been, over a metre across and a quarter of a tonne. The colours in the mantle are algae it farms in its own flesh, arranged in a layer with iridescent cells above them that spread the light so the deeper algae are not scorched. It cannot close fast enough to trap a diver, and never has." },
  pistolshrimp: { d: "Carnivore — small fish and worms, stunned by the snap", h: "Warm shallow seas worldwide, in a burrow it shares with a goby", s: "LC",
    f: "It does not close the claw on anything. It snaps it shut fast enough to throw a jet of water that leaves a collapsing bubble behind it, and the collapse produces a bang, a flash of light, and a moment hotter than the surface of the sun. Colonies of them make enough noise to hide a submarine. Most share their burrow with a goby that watches for danger while the near-blind shrimp digs." },
  humpheadwrasse: { d: "Carnivore — molluscs, crustaceans, and crown-of-thorns starfish", h: "Indo-Pacific coral reefs, on steep outer slopes", s: "EN",
    f: "Two metres long, sixty years old, and one of the very few things that eats crown-of-thorns starfish, which is why a reef with them on it holds together better. Every one starts female and some become male later. A single live fish can sell for more than the boat that took it, which is the whole of its conservation problem." },

  // ---- The Dry ----
  kangaroorat: { d: "Granivore — dry seed, carried in cheek pouches", h: "Deserts and arid scrub of western North America", s: "LC",
    f: "It never drinks. It makes all the water it needs by metabolising dry seed, and then refuses to waste any: kidneys that concentrate urine to a paste, no sweat glands, and a nasal passage that condenses the moisture back out of its own breath before it leaves. It plugs its burrow by day to keep the humidity it exhaled." },
  namibbeetle: { d: "Detritivore — windblown plant fragments and grass seed", h: "The Namib desert dune fields, one of the driest places on earth", s: "LC",
    f: "It solves water by standing still. On fog mornings it climbs a dune, faces into the wind and tips its rear end up, and fog condenses on the bumps of its back and runs down channels straight to its mouth. The pattern of water-attracting bumps and waxy water-repelling troughs has been copied into fog-harvesting nets for human use." },
  egyptianvulture: { d: "Scavenger — carrion, and eggs broken open with a stone", h: "Dry open country from southern Europe to India and across Africa", s: "EN",
    f: "One of very few birds that uses a tool: it picks up a stone and throws it at an ostrich egg until the shell gives, and young birds learn it by watching. The bare face is bright yellow because of carotenoids from its diet, so the colour advertises how well a bird is feeding — including, as it happens, how much dung it has eaten." },

  // ---- The Weald ----
  bumblebeebat: { d: "Insectivore — tiny insects taken in flight at dusk", h: "Limestone caves in a small area of Thailand and Myanmar", s: "NT",
    f: "Two grams, and a contender for the smallest mammal alive — it and the Etruscan shrew have argued the title for decades, one lighter and the other shorter. It was not described until 1974, it lives in a handful of caves in one river valley, and it hunts in the twenty minutes of dusk and then stops." },
  giantsquirrel: { d: "Frugivore — fruit, nuts, bark and the occasional egg", h: "Moist deciduous and evergreen forest of peninsular India", s: "LC",
    f: "Nearly a metre from nose to tail-tip and coloured maroon, purple and cream, which is startling for a squirrel and works as camouflage in dappled canopy. It rarely comes to the ground at all, jumping gaps of six metres, and builds several globe-shaped nests across its range — some for sleeping, some as decoys." },

  // ---- The Fens ----
  northernpike: { d: "Ambush carnivore — fish, ducklings, frogs, other pike", h: "Weedy lakes and slow rivers across the northern hemisphere", s: "LC",
    f: "Built as one long muscle with the fins bunched at the back, so it accelerates from a standstill without a wind-up. The teeth angle backwards and the roof of the mouth is covered in them, so nothing taken comes out again. Everything else in the pond is arranged around it, including the smaller pike." },
  electriceel: { d: "Carnivore — fish, stunned before they are taken", h: "Slow, murky waters of the Amazon and Orinoco basins", s: "LC",
    f: "Not an eel at all — a knifefish, more closely related to catfish. Four-fifths of its body is battery: stacked cells that discharge up to 860 volts, the strongest of any animal. It hunts by firing a low pulse to make hidden fish twitch and give themselves away, then a high one to lock their muscles solid. It has to surface to breathe air." },

  // ---- The Long Grass ----
  honeyguide: { d: "Beeswax, bee larvae, and insects — one of very few birds that digests wax", h: "Woodland and savanna across sub-Saharan Africa", s: "LC",
    f: "It leads people to bees' nests. Honey-hunters in Mozambique and Tanzania call with a particular trill, the bird answers and flies ahead, waiting to be followed, and takes the wax once the nest is opened. It is one of the only mutualisms between a wild animal and humans, it is generations old on both sides, and the birds distinguish the hunters' call from other human sounds. It is also a brood parasite whose chicks kill their nestmates with a hooked bill, which is the same bird." },
});

// Photographic sprites for all forty-four. See the note at the head of this
// file: this is why part68 stays out of GAME_PARTS until art/ has the PNGs.
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
  const BY_ZONE = {
    oceanz: ["bluefintuna", "chubmackerel", "atlanticherring", "mahimahi", "opah",
             "oceanicwhitetip", "blueshark", "remora", "sargassumfrogfish", "humboldtsquid",
             "manowar", "northerngannet", "sootyshearwater", "stormpetrel", "tropicbird",
             "loggerhead", "oliveridley"],
    kelpz:    ["bluemussel", "acornbarnacle", "greenanemone"],
    reefz:    ["staghorncoral", "braincoral", "giantclam", "pistolshrimp", "humpheadwrasse"],
    savanna:  ["housemouse", "brownrat", "fieldvole", "magpie", "skylark",
               "europeanmole", "europeanbadger", "honeyguide"],
    savannaz: ["honeyguide"],
    wetland:  ["commontoad", "grasssnake", "northernpike", "electriceel"],
    desert:   ["kangaroorat", "namibbeetle", "egyptianvulture"],
    jungle:   ["giantsquirrel"],
    cavezone: ["bumblebeebat"],
  };
  // Two that want one specific map rather than a whole zone. The shore is the
  // beach — flamingo, pelican, penguin, booby — and volcanic covers the slopes
  // above it as well, which is no place for a gull or a giant tortoise.
  const BY_MAP = { shore: ["herringgull", "aldabratortoise"] };

  const usable = (m) => MAPS[m] && MAPS[m].pool && MAPS[m].pool.length
    && !m.startsWith("vig") && !m.startsWith("arc");
  const placed = new Set();
  let added = 0;
  const drop = (m, k) => { MAPS[m].pool = [...MAPS[m].pool, [k, 2]]; added++; placed.add(k); };

  Object.entries(BY_ZONE).forEach(([zone, list]) => {
    const maps = Object.keys(MAPS).filter((m) => usable(m) && MAPS[m].zone === zone);
    list.forEach((k) => maps.forEach((m) => drop(m, k)));
  });
  Object.entries(BY_MAP).forEach(([m, list]) => {
    if (usable(m)) list.forEach((k) => drop(m, k));
  });

  // No silent fallback. A species with nowhere to go is a mistake in the lists
  // above, and burying it in whichever map happens to score well on type is
  // how the mole ended up in the desert. Say so instead.
  const homeless = P68.filter((k) => !placed.has(k));

  console.log(`[part68] the forty-four: ${P68.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P68.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : ""));
}
