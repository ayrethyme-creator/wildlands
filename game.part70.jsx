// ---------- Part 70: THE DARK ----------
// The forty-three deep-sea species. Ayr approved the batch on 2026-08-25 -
// "all of those should be included definitely" - and it has sat in
// design/PENDING_MOVES.txt as a promise ever since. Sprites for all forty-three
// were drawn during the deep-sea art batch; the art key here is the file that
// exists.
//
// A NOTE ON STATUS, because it is the honest half of this batch.
//
// Most of these animals have never been assessed by the IUCN at all. That is not
// a gap in this file - it is the actual state of the deep sea, and it is worth a
// player noticing. A vent barnacle, a glass sponge and a single-celled animal
// twenty centimetres across are not on anyone's Red List, while the sharks and
// the commercial fish beside them are. So this file adds NE, Not Evaluated, and
// uses it where that is the truth rather than reaching for Data Deficient, which
// is a real category meaning something different: assessed, and not enough known.
//
// The same pattern part29 uses for MYTH.
IUCN.NE = ["Not Evaluated", "#8a8578"];
STATUS_NAME.NE = "Not Evaluated";

const P70 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c) => { P70.push(k); return { [k]: { n, art: k, t, b, c } }; };
  return Object.assign({},
    // ---- fish ----
    add("gulpereel", "Gulper Eel", ["Aquatic", "Night"], { h: 40, a: 46, d: 28, s: 30 }, 0.34),
    add("commonfangtooth", "Common Fangtooth", ["Aquatic", "Predator"], { h: 34, a: 62, d: 34, s: 36 }, 0.36),
    add("viperfish", "Viperfish", ["Aquatic", "Predator"], { h: 36, a: 66, d: 30, s: 44 }, 0.34),
    add("macropinnabarreleye", "Macropinna Barreleye", ["Aquatic", "Night"], { h: 32, a: 30, d: 36, s: 34 }, 0.4),
    add("silverhatchetfish", "Silver Hatchetfish", ["Aquatic", "Night"], { h: 24, a: 26, d: 28, s: 46 }, 0.5),
    add("blackdragonfish", "Black Dragonfish", ["Aquatic", "Predator"], { h: 30, a: 58, d: 26, s: 42 }, 0.38),
    add("glacierlanternfish", "Glacier Lanternfish", ["Aquatic", "Swift"], { h: 22, a: 24, d: 22, s: 56 }, 0.55),
    add("marianasnailfish", "Mariana Snailfish", ["Aquatic", "Armor"], { h: 38, a: 34, d: 44, s: 26 }, 0.4),
    add("tripodfish", "Tripod Fish", ["Aquatic", "Night"], { h: 30, a: 28, d: 40, s: 14 }, 0.44),
    add("cookiecuttershark", "Cookiecutter Shark", ["Aquatic", "Predator"], { h: 34, a: 60, d: 30, s: 48 }, 0.36),
    add("blobfish", "Blobfish", ["Aquatic", "Armor"], { h: 46, a: 22, d: 40, s: 10 }, 0.5),
    add("australiancoffinfish", "Australian Coffinfish", ["Aquatic", "Predator"], { h: 38, a: 40, d: 36, s: 12 }, 0.46),
    add("stoplightloosejaw", "Stoplight Loosejaw", ["Aquatic", "Predator"], { h: 30, a: 56, d: 26, s: 40 }, 0.38),
    add("deepsealizardfish", "Deep-sea Lizardfish", ["Aquatic", "Predator"], { h: 40, a: 58, d: 36, s: 28 }, 0.36),
    add("bluntnosesixgillshark", "Bluntnose Sixgill Shark", ["Aquatic", "Predator"], { h: 70, a: 66, d: 56, s: 34 }, 0.2),
    add("orangeroughy", "Orange Roughy", ["Aquatic", "Armor"], { h: 48, a: 34, d: 50, s: 20 }, 0.36),

    // ---- cephalopods ----
    add("vampiresquid", "Vampire Squid", ["Aquatic", "Night"], { h: 40, a: 34, d: 46, s: 32 }, 0.36),
    add("googlyeyedglasssquid", "Googly-eyed Glass Squid", ["Aquatic", "Night"], { h: 28, a: 30, d: 34, s: 38 }, 0.44),
    add("bigfinsquid", "Bigfin Squid", ["Aquatic", "Night"], { h: 34, a: 32, d: 30, s: 26 }, 0.34),
    add("dumbooctopus", "Dumbo Octopus", ["Aquatic", "Night"], { h: 36, a: 34, d: 34, s: 24 }, 0.4),

    // ---- crustaceans and worms ----
    add("giantisopod", "Giant Isopod", ["Armor", "Aquatic"], { h: 46, a: 30, d: 62, s: 14 }, 0.44),
    add("hoffcrab", "Hoff Crab", ["Armor", "Aquatic"], { h: 34, a: 34, d: 52, s: 22 }, 0.5),
    add("giantamphipod", "Giant Amphipod", ["Armor", "Aquatic"], { h: 32, a: 30, d: 48, s: 26 }, 0.5),
    add("eyelessventshrimp", "Eyeless Vent Shrimp", ["Aquatic", "Armor"], { h: 24, a: 24, d: 38, s: 34 }, 0.55),
    add("gianttubeworm", "Giant Tube Worm", ["Aquatic", "Armor"], { h: 52, a: 16, d: 58, s: 4 }, 0.5),
    add("zombieworm", "Zombie Worm", ["Aquatic", "Bug"], { h: 18, a: 20, d: 26, s: 4 }, 0.6),
    add("munidopsissquatlobster", "Munidopsis Squat Lobster", ["Armor", "Aquatic"], { h: 30, a: 30, d: 46, s: 28 }, 0.55),
    add("neolepasventbarnacle", "Neolepas Vent Barnacle", ["Armor", "Aquatic"], { h: 28, a: 14, d: 56, s: 2 }, 0.6),
    add("ventmussel", "Vent Mussel", ["Armor", "Aquatic"], { h: 36, a: 14, d: 60, s: 2 }, 0.6),

    // ---- jellies and drifters ----
    add("giantsiphonophore", "Giant Siphonophore", ["Venom", "Aquatic"], { h: 44, a: 44, d: 22, s: 18 }, 0.4),
    add("alarmjellyfish", "Alarm Jellyfish", ["Venom", "Night"], { h: 28, a: 34, d: 24, s: 22 }, 0.5),
    add("bloodybellycombjelly", "Bloody-belly Comb Jelly", ["Aquatic", "Night"], { h: 22, a: 22, d: 22, s: 24 }, 0.55),
    add("deepstaria", "Deepstaria", ["Venom", "Night"], { h: 34, a: 28, d: 24, s: 12 }, 0.5),
    add("venussgirdle", "Venus's Girdle", ["Aquatic", "Night"], { h: 24, a: 20, d: 22, s: 30 }, 0.55),
    add("helmetjellyfish", "Helmet Jellyfish", ["Venom", "Night"], { h: 32, a: 32, d: 26, s: 20 }, 0.5),
    add("seapig", "Sea Pig", ["Aquatic", "Burrow"], { h: 34, a: 16, d: 40, s: 8 }, 0.55),

    // ---- fixed, and one that is a single cell ----
    add("venusflowerbasket", "Venus Flower Basket", ["Armor", "Aquatic"], { h: 30, a: 10, d: 66, s: 2 }, 0.55),
    add("japanesesealily", "Japanese Sea Lily", ["Aquatic", "Armor"], { h: 28, a: 16, d: 46, s: 6 }, 0.55),
    add("leiopathesblackcoral", "Leiopathes Black Coral", ["Armor", "Aquatic"], { h: 44, a: 12, d: 62, s: 2 }, 0.5),
    add("isidellabamboocoral", "Isidella Bamboo Coral", ["Armor", "Aquatic"], { h: 42, a: 12, d: 60, s: 2 }, 0.5),
    add("giantxenophyophore", "Giant Xenophyophore", ["Armor", "Aquatic"], { h: 26, a: 6, d: 54, s: 2 }, 0.6),
    add("predatorytunicate", "Predatory Tunicate", ["Aquatic", "Predator"], { h: 26, a: 34, d: 34, s: 6 }, 0.55),
    add("bathydevius", "Bathydevius", ["Aquatic", "Night"], { h: 26, a: 30, d: 26, s: 26 }, 0.5),
  );
})());

Object.assign(INFO, {
  // ---- fish ----
  gulpereel: { taxon: "Eurypharynx pelecanoides · the only living species in Eurypharynx", d: "Carnivore — small crustaceans, and whatever the mouth happens to enclose", h: "Deep open ocean worldwide, roughly 500–3,000 m", s: "LC",
    f: "The only living species in Eurypharynx is mostly mouth. Its jaw is hinged so far back that the head opens into a loose bag far bigger than the rest of the animal, and the tail tapers away to a whip tipped with a light organ. The obvious reading is that it swallows large prey — but stomachs are full of small crustaceans, so the enormous mouth is probably a net for sweeping up a lot of very little." },
  commonfangtooth: { taxon: "Anoplogaster cornuta · one of 2 living Anoplogaster species", d: "Carnivore — fish and squid, ambushed in the dark", h: "Deep ocean worldwide, adults usually 500–5,000 m", s: "LC",
    f: "One of two living Anoplogaster fangtooths, and it has the largest teeth of any fish relative to its head. They are too long to fit inside a closed mouth, so the skull carries a pair of sockets on either side of the brain for the lower fangs to slide into when the jaw shuts. It is also about sixteen centimetres long, which is the part the photographs never manage to convey." },
  viperfish: { taxon: "Chauliodus sloani · one of about 9 Chauliodus species", d: "Carnivore — fish and crustaceans, taken on the fangs", h: "Deep ocean worldwide; rises towards the surface at night", s: "LC",
    f: "One of about nine Chauliodus viperfish, its fangs are so long they pass outside the closed jaw and curve back towards the eyes. The first ray of the dorsal fin is drawn out into a long lure it holds over its own head, which is a strange thing to own when your teeth already announce you. It climbs towards the surface after dark and sinks again by morning." },
  macropinnabarreleye: { taxon: "Macropinna microstoma · the only living species in Macropinna", d: "Carnivore — small animals, including prey taken from siphonophores", h: "North Pacific midwater, around 600–800 m", s: "NE",
    f: "The only living species in Macropinna, and it looks up through the top of its own head. The skull is capped with a transparent fluid-filled dome, and the green tubular eyes sit inside it, watching for silhouettes above. The dome collapses in a net, so for sixty-five years after the fish was described nobody knew it was there — the animal was only seen whole once a submersible went and looked." },
  silverhatchetfish: { taxon: "Argyropelecus aculeatus · one of about 7 Argyropelecus species", d: "Planktivore — small crustaceans taken above it", h: "Deep open ocean worldwide, usually 100–600 m by day", s: "NE",
    f: "One of about seven Argyropelecus hatchetfish, it erases its own shadow. Rows of light organs along its underside are tuned to match the faint daylight coming down from above, so a predator looking up sees no silhouette where the fish is. Its body is flattened to a blade and its eyes point permanently upward, because everything it needs to see is between it and the surface." },
  blackdragonfish: { taxon: "Idiacanthus atlanticus · one of 3 living Idiacanthus species", d: "Carnivore — small fish and crustaceans; the male does not feed at all", h: "Southern ocean depths, roughly 500–2,000 m by day", s: "NE",
    f: "One of three living Idiacanthus dragonfish, and the two sexes barely look like one species. The female is a black eel-shaped predator around forty centimetres long, with fangs and a lit barbel hanging from her chin. The male reaches about five centimetres, is brown, and has no teeth, no barbel and no working gut. He cannot eat. He lives on what he stored as a larva, and his whole adult existence is finding her." },
  glacierlanternfish: { taxon: "Benthosema glaciale · one of about 5 Benthosema, and one of some 250 lanternfish", d: "Planktivore — copepods and krill, taken near the surface at night", h: "The cold North Atlantic, deep by day and shallow by night", s: "LC",
    f: "One of about five Benthosema lanternfish, out of some two hundred and fifty in the family, and together they run the largest migration on earth — twice every day. The whole layer rises hundreds of metres at dusk to feed and sinks again before dawn. Ships' sonar found it before biologists did and read it as a seafloor that moved, which is how the deep scattering layer got its name." },
  marianasnailfish: { taxon: "Pseudoliparis swirei · one of a handful of Pseudoliparis species", d: "Carnivore — amphipods, which carpet the trench floor", h: "The Mariana Trench, roughly 6,900–8,000 m", s: "NE",
    f: "The deepest fish ever collected, taken at about eight kilometres down in the Mariana Trench, and the top predator of a plain made almost entirely of scavenging amphipods. It has no scales, no swim bladder and only partly hardened bones — a small pink animal, translucent enough to see the meal inside it, living at a pressure of roughly eight hundred atmospheres." },
  tripodfish: { taxon: "Bathypterois grallator · one of about 18 Bathypterois species", d: "Carnivore — small crustaceans drifting past on the current", h: "Abyssal seafloor worldwide, roughly 900–4,700 m", s: "NE",
    f: "One of about eighteen Bathypterois species, it stands on three stiffened fin rays up to a metre long — two from the pelvic fins and one from the tail — and simply waits, facing into the current with its pectoral fins spread forward like a net. Its eyes are almost useless and it barely uses them. It is also a simultaneous hermaphrodite, which down here is practical: meeting anything at all is rare enough without needing it to be the right sex." },
  cookiecuttershark: { taxon: "Isistius brasiliensis · one of 2 living Isistius species", d: "Parasite and carnivore — plugs of flesh cut from much larger animals", h: "Warm oceans worldwide; deep by day, near the surface at night", s: "LC",
    f: "One of two living Isistius sharks, about fifty centimetres long, and it feeds on animals hundreds of times its size by taking a neat round plug out of them and leaving. Whales, tuna, seals and elephant seals carry the craters; so, famously, did the sonar domes of nuclear submarines, until they were resheathed. Its underside glows except for a dark collar, so from below it reads as a small fish — and whatever rises to eat it is what gets bitten." },
  blobfish: { taxon: "Psychrolutes marcidus · one of about 10 Psychrolutes species", d: "Carnivore — whatever drifts within reach of its mouth", h: "Deep water off southeastern Australia and Tasmania, roughly 600–1,200 m", s: "NE",
    f: "One of about ten Psychrolutes fathead sculpins, and the most famous photograph of it is a photograph of an injury. At a kilometre down it is an ordinary-looking fish: soft, lightly built bones and jelly-like flesh let it hold position without spending energy on a swim bladder. Hauled to the surface, the pressure that gave it shape is gone and its face slumps. It was voted the world's ugliest animal on the strength of a corpse." },
  australiancoffinfish: { taxon: "Chaunax endeavouri · one of about 20 Chaunax sea toads", d: "Ambush carnivore — small fish and invertebrates lured within reach", h: "The continental slope off eastern Australia, roughly 200–1,000 m", s: "NE",
    f: "One of about twenty Chaunax sea toads, it holds its breath. It gulps water into enormous gill chambers and keeps it there for up to four minutes at a time — the longest breath-hold measured in any fish — which lets it stop pumping and coast on almost nothing. The same gulp inflates it to nearly twice its size, so an animal that is saving energy also looks far too large to swallow." },
  stoplightloosejaw: { taxon: "Malacosteus niger · one of 2 living Malacosteus species", d: "Carnivore — copepods and small fish, hunted by its own red light", h: "Deep ocean worldwide, roughly 500–3,000 m", s: "NE",
    f: "One of two living Malacosteus loosejaws, and it hunts with a torch nothing else can see. Almost every deep-sea eye is blind to red, so its red headlamp lights prey that has no idea it is lit. To see red itself it uses a pigment derived from chlorophyll, taken second-hand from copepods that ate algae — an animal borrowing plant chemistry to build private vision. Its lower jaw has no floor at all: it is a bare frame of bone." },
  deepsealizardfish: { taxon: "Bathysaurus ferox · one of 2 living Bathysaurus species", d: "Ambush carnivore — fish and squid, held on hinged teeth", h: "Abyssal seafloor worldwide, roughly 1,500–3,500 m", s: "NE",
    f: "One of two living Bathysaurus species, and the deepest-living fish that hunts other fish on the seafloor rather than scavenging. The roof of its mouth is lined with teeth hinged to fold inward, so anything it takes can go in and not come out. Like the tripod fish beside it, it carries both sets of reproductive organs at once — the deep sea is empty enough that being choosy about a partner is not affordable." },
  bluntnosesixgillshark: { taxon: "Hexanchus griseus · one of 4 living Hexanchus species", d: "Carnivore and scavenger — fish, rays, seals, and whatever sinks", h: "Deep water worldwide, usually below 500 m by day", s: "NT",
    f: "One of four living Hexanchus sharks, and it kept a gill slit that almost every other shark gave up. Six instead of five is the older arrangement, the one shared with sharks from the Jurassic, which is why it gets called a living fossil rather more often than it deserves. It spends the day deep and climbs at night, and it grows to five metres — a large predator most people have never heard of." },
  orangeroughy: { taxon: "Hoplostethus atlanticus · one of about 45 Hoplostethus species", d: "Carnivore — fish, squid and crustaceans over deep seamounts", h: "Cold deep water worldwide, roughly 180–1,800 m, gathering over seamounts", s: "NE",
    f: "One of about forty-five Hoplostethus roughies, and it may be the longest-lived fish ever fished commercially: ages past two hundred years have been read from its ear bones. It does not breed until it is around thirty. Trawlers found the spawning aggregations over seamounts in the 1970s and took them, which meant landing animals older than the boats, older than the ports, and older than the countries doing the fishing — and stocks that had taken centuries to build were gone within a decade." },

  // ---- cephalopods ----
  vampiresquid: { taxon: "Vampyroteuthis infernalis · the only living species in its whole order", d: "Detritivore — marine snow, gathered on filaments and rolled into mucus balls", h: "The oxygen minimum zone of temperate and tropical oceans, roughly 600–1,200 m", s: "NE",
    f: "The only living species of an entire order, neither squid nor octopus but the last of a lineage that kept its own branch. Its name says vampire and it eats nothing of the kind: it trails two long retractile filaments through the water, collects the slow fall of dead matter from above, and rolls it into balls with mucus. Alarmed, it does not flee — it turns its webbed arms inside out over itself into a spined ball, and squirts a cloud of glowing mucus instead of ink." },
  googlyeyedglasssquid: { taxon: "Teuthowenia pellucida · one of 3 living Teuthowenia species", d: "Carnivore — small crustaceans and fish", h: "Southern hemisphere midwater, deeper as it ages", s: "NE",
    f: "One of three living Teuthowenia glass squid, and almost all of it is transparent — which leaves the eyes and the gut as the only two things that can cast a shadow. It holds both of them vertical, so the silhouette they throw downward is the smallest one available. Threatened, it pumps itself into a ball and pulls its head and arms inside, which turns a squid into something with no obvious end to bite." },
  bigfinsquid: { taxon: "Magnapinna sp. · a described genus whose filmed animals have never been named to species", d: "Carnivore — thought to trawl the seafloor with its arms; never observed feeding", h: "Deep ocean worldwide, filmed below 4,000 m", s: "NE",
    f: "Everything known about the adult comes from film. It holds its arms out sideways and then lets them fall at a sharp elbow, so the animal trails several metres of thread beneath a small body — the longest arms of any squid, in proportion, and a shape nobody predicted. No adult has ever been caught. The genus Magnapinna is real and named from larvae, but the animals in the footage cannot be matched to a species, so the most distinctive squid in the ocean has no name of its own." },
  dumbooctopus: { taxon: "Grimpoteuthis bathynectes · one of about 17 Grimpoteuthis species", d: "Carnivore — worms, crustaceans and molluscs, swallowed whole", h: "Abyssal seafloor worldwide, deeper than 3,000 m", s: "NE",
    f: "One of about seventeen Grimpoteuthis octopuses, the deepest-living octopuses there are, and it flies rather than crawls — a pair of fins above the eyes beat like ears while the webbed arms open and close beneath. It has no ink sac, because a smokescreen is pointless where there is no light to hide in, and it swallows prey whole rather than picking it apart." },

  // ---- crustaceans and worms ----
  giantisopod: { taxon: "Bathynomus giganteus · one of about 20 Bathynomus species", d: "Scavenger — whale falls, dead fish, whatever reaches the bottom", h: "Cold deep seafloor of the Atlantic and Gulf of Mexico, 170–2,100 m", s: "NE",
    f: "One of about twenty Bathynomus isopods, and a close relative of the woodlouse grown to half a metre. Food arrives on the abyssal floor rarely and all at once, so it is built to gorge and then wait: one kept at a Japanese aquarium refused every meal offered for over five years and appeared perfectly well the whole time. It died still refusing." },
  hoffcrab: { taxon: "Kiwa tyleri · one of about 5 living Kiwa species", d: "Farms and eats the bacteria growing on its own bristles", h: "Hydrothermal vents of the Southern Ocean, roughly 2,400 m", s: "NE",
    f: "One of about five Kiwa yeti crabs, and it is named for the hair on its chest. The bristles are a bacterial garden: it holds them in the vent plume where the chemicals the bacteria need are richest, then combs them off and eats them. It has to live in a band a few centimetres wide — nearer the vent is scalding, further out is near-freezing Antarctic water — so it packs in at up to seven hundred animals per square metre." },
  giantamphipod: { taxon: "Alicella gigantea · the only living species in Alicella", d: "Scavenger — carrion falling to the trench floor", h: "Deep trenches worldwide, roughly 4,000–8,000 m", s: "NE",
    f: "The only living species in Alicella, and the largest amphipod known. Its relatives in a rockpool are about a centimetre long; this one reaches thirty-four. Almost everything known about it comes from baited traps dropped into trenches, which is a reminder of how the deep sea gets studied: not by looking, but by leaving something dead on the bottom and coming back later." },
  eyelessventshrimp: { taxon: "Rimicaris exoculata · one of a few Rimicaris species", d: "Farms bacteria in its own gill chamber and grazes them", h: "Hydrothermal vents of the Mid-Atlantic Ridge, roughly 2,300–3,600 m", s: "NE",
    f: "Its species name means \"without eyes\", and it has none in the usual place. What it has instead is a large light-sensing organ on its BACK, under the shell — thought to read the very faint thermal glow the vent itself gives off, which would let the shrimp judge how close it can get to water hot enough to cook it. It swarms in the tens of thousands over a chimney and farms bacteria inside its own gill chamber." },
  gianttubeworm: { taxon: "Riftia pachyptila · the only living species in Riftia", d: "Nothing. Bacteria inside its body make its food from vent chemistry", h: "Hydrothermal vents of the East Pacific Rise, roughly 2,500 m", s: "NE",
    f: "The only living species in Riftia grows two metres tall and has no mouth, no gut and no anus. The red plume is a gill: it takes up oxygen and hydrogen sulphide and carries both to bacteria packed into an organ filling most of the body, and the bacteria build the worm's food out of chemistry rather than sunlight. The larva has a mouth and a gut. It uses them to swallow the bacteria once, and then loses both, permanently." },
  zombieworm: { taxon: "Osedax mucofloris · one of about 30 Osedax species", d: "Bone. Symbiotic bacteria digest the fats inside it", h: "Sunken whale skeletons on the seafloor, from shallow to abyssal", s: "NE",
    f: "One of about thirty Osedax worms, and it lives nowhere but on bones. It has no mouth and no gut. It sinks root-like tissue into a whale skeleton, dissolves the bone with acid, and lets bacteria break down the fats trapped inside. Its published common name is \"bone-eating snot flower\". Every animal you can see is female — the males are microscopic and live by the dozen inside her tube, never developing past the larval body they arrived in." },
  munidopsissquatlobster: { taxon: "Munidopsis subsquamosa · one of about 200 Munidopsis species", d: "Scavenger and grazer — bacterial mats and whatever dies at the vent", h: "Hydrothermal vents of the eastern Pacific, roughly 2,500 m", s: "NE",
    f: "One of about two hundred Munidopsis squat lobsters, and it was in the photographs that changed biology. When Alvin reached the Galápagos Rift in 1977 the crew expected bare rock and found a crowded community living two and a half kilometres below any sunlight. These were carpeted over the vent field. Everything down there was running on chemical energy, and nobody had thought that was possible at this scale." },
  neolepasventbarnacle: { taxon: "Neolepas marisindica · one of a few Neolepas species", d: "Filter feeder — bacteria and particles swept from the vent plume", h: "Hydrothermal vents of the Indian Ocean ridges, roughly 2,400–2,800 m", s: "NE",
    f: "A stalked barnacle that has settled where almost nothing can hold on: the flank of a hydrothermal chimney, in water that is hot, acidic and loaded with metals. A barnacle glues its head down as a larva and never moves again, so this one commits, permanently, to a spot on a structure that may seal itself shut or blow out within its lifetime. The Indian Ocean ridges where it lives are also the fields being surveyed for deep-sea mining." },
  ventmussel: { taxon: "Bathymodiolus thermophilus · one of about 12 Bathymodiolus species", d: "Filter feeder, and a farmer — bacteria in its gills make most of its food", h: "Hydrothermal vents of the East Pacific Rise, roughly 2,500 m", s: "NE",
    f: "One of about twelve Bathymodiolus vent mussels, and it keeps its food source inside its own gills. Sulphur-oxidising bacteria live in the gill tissue and build sugars from vent chemistry, so the mussel filters far less than a mussel on a shore does — it mostly needs to sit where the chemistry is. It was among the animals found at the Galápagos vents in 1977, in beds thick enough to hide the rock." },

  // ---- jellies and drifters ----
  giantsiphonophore: { taxon: "Praya dubia · one of a few Praya species", d: "Carnivore — small fish and crustaceans caught on trailing stinging tentacles", h: "Deep water worldwide, roughly 700–1,000 m", s: "NE",
    f: "Not one animal and not quite a colony of separate ones either. It grows from a single fertilised egg into a chain of specialised bodies — some swim, some sting, some digest, some reproduce — none of which can live alone. Praya dubia is measured in tens of metres, and the longest siphonophore yet filmed, a relative found off Western Australia in 2020, was estimated at more than forty-five metres: longer than a blue whale, and thinner than a broom handle." },
  alarmjellyfish: { taxon: "Atolla wyvillei · one of about 10 Atolla species", d: "Carnivore — small crustaceans and other jellies", h: "Deep ocean worldwide, roughly 1,000–4,000 m", s: "NE",
    f: "One of about ten Atolla jellyfish, and when something seizes it, it does not go dark — it fires a spinning wheel of blue light that can be seen a long way off. The point is not to frighten the attacker. It is to advertise the attacker, and draw something bigger down onto it. A lure copied from this display was what finally filmed a giant squid alive, twice, after every attempt using bright lights and loud machines had failed." },
  bloodybellycombjelly: { taxon: "Lampocteis cruentiventer · the only living species in Lampocteis", d: "Carnivore — small crustaceans and other gelatinous animals", h: "Pacific midwater, roughly 300–1,500 m", s: "NE",
    f: "The only living species in Lampocteis, and it solves a problem that only exists in the dark. A transparent animal that eats glowing animals becomes a lit window advertising itself. So its stomach is deep blood red, and red is effectively invisible at this depth — a meal can flash all it likes and none of the light gets out. The rainbow running along its combs is not colour at all; it is daylight from a submersible being split by the beating hairs." },
  deepstaria: { taxon: "Deepstaria enigmatica · one of 2 living Deepstaria species", d: "Carnivore — whatever drifts into the bell and cannot get out", h: "Deep ocean worldwide, usually below 600 m", s: "NE",
    f: "One of two living Deepstaria jellyfish, and it hunts by being a bag. The bell is a thin sheet up to a metre across with almost no tentacles; it billows open and then closes around whatever has drifted inside. Films of it usually show a passenger — a bright isopod, riding within the jellyfish, apparently unharmed and possibly eating it from the inside." },
  venussgirdle: { taxon: "Cestum veneris · one of 2 living Cestum species", d: "Carnivore — copepods and other small plankton", h: "Warm open ocean worldwide, surface to a few hundred metres", s: "NE",
    f: "One of two living Cestum comb jellies, and it has been stretched sideways into a transparent ribbon up to a metre and a half long. It swims by rippling, which sends a slow wave down its whole length, and the rows of beating hairs split the light into a band of colour that runs along it as it goes. It is one of the few deep-water animals people describe as beautiful without any qualification." },
  helmetjellyfish: { taxon: "Periphylla periphylla · the only living species in Periphylla", d: "Carnivore — crustaceans and small fish", h: "Deep water worldwide, and dense populations in some Norwegian fjords", s: "NE",
    f: "The only living species in Periphylla, and it avoids light so completely that it will not cross a lit layer of water. That normally keeps it deep. But some Norwegian fjords have grown darker over recent decades — more runoff, more colour in the water — and the jellyfish has simply moved up and taken them over, in densities that have displaced the fish. A change in how clear the water is turned out to be enough to hand a whole fjord to something else." },
  seapig: { taxon: "Scotoplanes globosa · one of a few Scotoplanes species", d: "Detritivore — the richest patches of marine snow on the seafloor", h: "Abyssal plains worldwide, typically deeper than 1,000 m", s: "NE",
    f: "A sea cucumber that walks. It gets about on five to seven pairs of enlarged tube feet inflated with water, crossing the abyssal plain in herds all facing the same way, and it can smell out the freshest fall of dead matter and go to it. Juvenile king crabs shelter underneath them, which is a reasonable decision: a sea pig is unappetising, and there is nothing else on the plain to hide behind." },

  // ---- fixed, and one that is a single cell ----
  venusflowerbasket: { taxon: "Euplectella aspergillum · one of about 20 Euplectella species", d: "Filter feeder — bacteria and particles strained from the current", h: "Deep seafloor of the western Pacific, roughly 500–5,000 m", s: "NE",
    f: "One of about twenty Euplectella glass sponges, and its skeleton is a lattice woven out of silica — actual glass, grown at freezing temperatures without a furnace. A pair of shrimp usually enter as larvae, grow too big to get back out, and spend their lives inside; dried skeletons with the pair still in them were given in Japan as wedding gifts. Its glass fibres carry light better than commercial optical fibre, and unlike optical fibre they can be tied in a knot." },
  japanesesealily: { taxon: "Metacrinus rotundus · one of a few Metacrinus species", d: "Filter feeder — plankton caught on the arms", h: "The continental slope off Japan, roughly 100–600 m", s: "NE",
    f: "It looks like a plant on a stem and it is an animal — a crinoid, from a group that carpeted the seafloor for a hundred million years before the dinosaurs and now mostly lives too deep for anyone to notice. The stalk is not a commitment either: it can let go, crawl away on its arms and re-anchor somewhere better, which was only confirmed by filming one doing it." },
  leiopathesblackcoral: { taxon: "Leiopathes glaberrima · one of about 10 Leiopathes species", d: "Carnivore — plankton and particles taken by the polyps", h: "Deep rocky slopes and seamounts of the Atlantic and Mediterranean, 200–1,500 m", s: "NE",
    f: "One of about ten Leiopathes black corals, and individual colonies have been radiocarbon-dated past four thousand years — among the oldest living animals known, older than the pyramids and still growing. It is called black coral for the skeleton, not the animal: the living tissue over it is orange. A single pass of a bottom trawl takes out a colony that started before writing did." },
  isidellabamboocoral: { taxon: "Isidella tentaculum · one of about 10 Isidella species", d: "Carnivore — plankton and particles caught by the polyps", h: "Deep seamounts and slopes of the eastern Pacific, roughly 600–1,500 m", s: "NE",
    f: "One of about ten Isidella bamboo corals, named for a skeleton built in alternating segments — hard calcite, then a joint of horny protein, then calcite again, like a stem of bamboo. Those bands are laid down over time and can be counted and dated, so a colony is a record of the ocean it grew in: temperature, chemistry, and what changed, written down by an animal on a seamount for centuries." },
  giantxenophyophore: { taxon: "Syringammina fragilissima · one of a few Syringammina species", d: "Detritivore — particles and bacteria trapped on its surface", h: "Abyssal seafloor, roughly 500–4,000 m, including the Rockall Trough", s: "NE",
    f: "It is one cell. Not a colony and not a simple animal — a single-celled organism, up to twenty centimetres across, with many nuclei inside one membrane, which glues sediment grains together into a branching structure and lives in it. Wherever they are common the seafloor around them is far richer in other animals, because the structure is shelter on a plain that offers none." },
  predatorytunicate: { taxon: "Megalodicopia hians · one of a few Megalodicopia species", d: "Ambush carnivore — small crustaceans caught in the hood", h: "Deep canyon walls and seafloor of the Pacific, roughly 200–1,000 m", s: "NE",
    f: "A sea squirt is a filter feeder: it sits still and strains water. This one gave that up. It sits on a stalk with an oral hood held wide open like a flytrap, and when something swims in the hood snaps shut on it. Its own larva swims with a brain and a notochord before settling — so this is an animal that gave up its nervous system to sit still, and then reinvented hunting anyway." },
  bathydevius: { taxon: "Bathydevius caudactylus · the only species in its genus and its family", d: "Carnivore — shrimp, caught in the hood", h: "Pacific midwater, roughly 1,000–4,000 m", s: "NE",
    f: "The only species in its genus and its whole family, and it was described in 2024 after being watched more than a hundred and fifty times over twenty years without anyone being able to say what it was. It is a sea slug that left the seafloor for open water: it traps shrimp in a hood, glows along its body, and can drop its tail — still lighting up — for a predator to chase while the animal itself leaves in the dark." },
});

// Photographic sprites for all forty-three. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P70.map((k) => [k, true])));

/* Learnsets and placement — the part68 pattern, unchanged. */
{
  let built = 0; const thin = [];
  P70.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live. "abyssz" is this game's deep water; the deep sea has no
     land, so every one of them goes into poolWater and none into pool. */
  const BY_ZONE = [{ zone: "abyssz", pool: "poolWater", list: P70.slice() }];

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

  const homeless = P70.filter((k) => !placed.has(k));
  const hiddenFromGuide = P70.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part70] the dark: ${P70.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P70.length}`
    + ` | guide locations: ${P70.length - hiddenFromGuide.length}/${P70.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
