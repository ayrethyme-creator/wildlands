// ---------- Part 73: THE RECORD ----------
// The twenty-one fossil species that fill the empty periods. The Record used to
// be fifty Mesozoic reptiles and nothing else, so nine of the thirteen periods
// its quests are built on had no animals in them at all. Decided 2026-08-26 and
// carried as a promise in design/PENDING_MOVES.txt since.
//
// TWO PERIODS DISAGREE WITH THE DESIGN DOC, and the data follows the animal.
//   Elrathia was listed under the Ordovician as the generic "Trilobite". Naming
//     it moved it: E. kingii is Middle CAMBRIAN. The Ordovician therefore has
//     only Cameroceras in it, which is a real gap and is flagged for Ayr.
//   Jaekelopterus was listed under the Silurian. J. rhenaniae is Early DEVONIAN.
//     Pterygotid eurypterids do span both, but this species does not.
// Pneumodesmus keeps the Silurian and says in its own entry why that is argued
// about, because the argument is the interesting part.

const P73 = [];

Object.assign(DEX, (() => {
  const add = (k, n, t, b, c, org) => { P73.push(k); return { [k]: { n, art: k, t, b, c, org } }; };
  return Object.assign({},
    // ---- Ediacaran: before anything had a mouth ----
    add("charnia", "Charnia", ["Fossil", "Aquatic"], { h: 34, a: 8, d: 44, s: 2 }, 0.4, "Ediacaran"),
    add("dickinsonia", "Dickinsonia", ["Fossil", "Aquatic"], { h: 38, a: 10, d: 42, s: 4 }, 0.4, "Ediacaran"),

    // ---- Cambrian ----
    add("anomalocaris", "Anomalocaris", ["Fossil", "Predator"], { h: 48, a: 58, d: 36, s: 52 }, 0.34, "Cambrian"),
    add("opabinia", "Opabinia", ["Fossil", "Aquatic"], { h: 30, a: 34, d: 28, s: 40 }, 0.44, "Cambrian"),
    add("hallucigenia", "Hallucigenia", ["Fossil", "Armor"], { h: 26, a: 22, d: 42, s: 20 }, 0.5, "Cambrian"),
    add("elrathia", "Elrathia", ["Fossil", "Armor"], { h: 28, a: 20, d: 48, s: 24 }, 0.55, "Cambrian"),

    // ---- Ordovician ----
    add("cameroceras", "Cameroceras", ["Fossil", "Predator"], { h: 62, a: 60, d: 54, s: 30 }, 0.28, "Ordovician"),

    // ---- Silurian ----
    add("pneumodesmus", "Pneumodesmus", ["Fossil", "Bug"], { h: 20, a: 18, d: 32, s: 26 }, 0.6, "Silurian"),

    // ---- Devonian ----
    add("jaekelopterus", "Jaekelopterus", ["Fossil", "Predator"], { h: 58, a: 68, d: 52, s: 44 }, 0.26, "Devonian"),
    add("dunkleosteus", "Dunkleosteus", ["Fossil", "Armor"], { h: 74, a: 76, d: 70, s: 34 }, 0.18, "Devonian"),
    add("tiktaalik", "Tiktaalik", ["Fossil", "Aquatic"], { h: 44, a: 40, d: 42, s: 26 }, 0.36, "Devonian"),
    add("ichthyostega", "Ichthyostega", ["Fossil", "Aquatic"], { h: 42, a: 40, d: 40, s: 24 }, 0.38, "Devonian"),

    // ---- Carboniferous ----
    add("meganeura", "Meganeura", ["Fossil", "Aerial"], { h: 34, a: 46, d: 30, s: 72 }, 0.34, "Carboniferous"),
    add("arthropleura", "Arthropleura", ["Fossil", "Armor"], { h: 62, a: 34, d: 66, s: 28 }, 0.28, "Carboniferous"),

    // ---- Permian ----
    add("dimetrodon", "Dimetrodon", ["Fossil", "Predator"], { h: 60, a: 64, d: 52, s: 36 }, 0.28, "Permian"),
    add("gorgonops", "Gorgonops", ["Fossil", "Predator"], { h: 58, a: 66, d: 48, s: 48 }, 0.28, "Permian"),

    // ---- Cretaceous ----
    add("sinosauropteryx", "Sinosauropteryx", ["Fossil", "Swift"], { h: 34, a: 42, d: 30, s: 66 }, 0.4, "Cretaceous"),

    // ---- Paleogene ----
    add("ambulocetus", "Ambulocetus", ["Fossil", "Predator"], { h: 54, a: 58, d: 46, s: 34 }, 0.3, "Paleogene"),
    add("basilosaurus", "Basilosaurus", ["Fossil", "Aquatic"], { h: 76, a: 68, d: 56, s: 40 }, 0.18, "Paleogene"),

    // ---- Neogene ----
    add("megalodon", "Megalodon", ["Fossil", "Predator"], { h: 82, a: 84, d: 62, s: 50 }, 0.12, "Neogene"),
    add("gigantopithecus", "Gigantopithecus", ["Fossil", "Wild"], { h: 78, a: 70, d: 64, s: 28 }, 0.18, "Neogene"),
  );
})());

Object.assign(INFO, {
  // ---- Ediacaran ----
  charnia: { taxon: "Charnia masoni · the fossil that broke the Cambrian barrier", d: "Unknown. It has no mouth and no gut — probably absorbed nutrients from the water", h: "Deep Ediacaran seafloor, roughly 580 million years ago", s: "EX",
    f: "For a century it was doctrine that nothing complex lived before the Cambrian, so when a schoolgirl named Tina Negus found a frond in Charnwood Forest in 1957 she was told fossils did not occur in rocks that old. A schoolboy, Roger Mason, found it again a year later and was believed. It is the fossil that proved there was life before the Cambrian — and it grew in deep water, far below any light, so whatever it was, it was not a plant." },
  dickinsonia: { taxon: "Dickinsonia costata · one of about 8 named Dickinsonia species", d: "Fed by resting on microbial mats and absorbing them from below", h: "Shallow Ediacaran seafloor, roughly 560 million years ago", s: "EX",
    f: "A flat quilted oval, up to well over a metre across, and for decades nobody could say whether it was an animal, a fungus, a lichen or something with no living equivalent at all. It was settled in 2018, when cholesterol molecules were recovered from a specimen in Russia — cholesterol is a signature of animals. It also left feeding traces: a row of impressions where it sat on a bacterial mat, dissolved it from underneath, and moved on." },

  // ---- Cambrian ----
  anomalocaris: { taxon: "Anomalocaris canadensis · one of several Anomalocaris species", d: "Carnivore — soft-bodied animals, seized with two grasping appendages", h: "Cambrian seas, roughly 508 million years ago", s: "EX",
    f: "The largest animal of the Cambrian, at about a metre, and it was described three times as three different creatures. Its grasping arm was named as a shrimp's body; its circular mouth was catalogued as a jellyfish; the body itself was called a sea cucumber. Nobody realised they were one animal until the 1980s. The name means \"odd shrimp\", and it belongs to the arm — the piece that made no sense on its own." },
  opabinia: { taxon: "Opabinia regalis · the only species in Opabinia", d: "Carnivore — small soft-bodied prey, passed forward to the mouth", h: "Cambrian seas, roughly 505 million years ago", s: "EX",
    f: "The only species in its genus, and it has FIVE eyes on stalks and a single flexible nozzle at the front ending in a claw — an arrangement with no parallel then or since. When it was first reconstructed at a scientific meeting in 1972 the audience laughed out loud, because it did not look like anything that could have been real. It was real. The nozzle grabbed prey and folded back to hand it to a mouth pointing backwards under the head." },
  hallucigenia: { taxon: "Hallucigenia sparsa · one of 3 named Hallucigenia species", d: "Probably a scavenger and grazer on the seafloor", h: "Cambrian seafloor, roughly 508 million years ago", s: "EX",
    f: "It was reconstructed upside down and back to front, and the name records the confusion — its describer called the animal a hallucination. The spines were read as legs it walked on, the legs as tentacles waving on its back, and the head was put at the wrong end. Better fossils turned it over and around: it walks on the soft legs, the spines are armour, and what had been taken for the head was a stain of decay fluid squeezed out of the body." },
  elrathia: { taxon: "Elrathia kingii · the most abundant trilobite fossil on earth", d: "Probably fed on bacteria in low-oxygen seafloor mud", h: "Middle Cambrian seafloor of what is now Utah, roughly 505 million years ago", s: "EX",
    f: "The trilobite that most people have actually held. It occurs in such numbers in the Wheeler Shale of Utah that it has been quarried commercially for over a century, and it is the fossil in nearly every museum shop and school drawer. What makes it common is unglamorous: it seems to have lived in water with very little oxygen, where almost nothing else could, so it had a whole seafloor to itself and left it paved with its own shells." },

  // ---- Ordovician ----
  cameroceras: { taxon: "Cameroceras · an endocerid nautiloid, one of several named species", d: "Carnivore — the top predator of the Ordovician sea", h: "Ordovician shallow seas, roughly 470 million years ago", s: "EX",
    f: "A straight-shelled relative of the nautilus, and the biggest animal of its age — the largest shell fragments suggest something around six metres, in seas where most things were the size of a hand. It hunted from inside a cone it had to carry, adjusting gas in the shell's chambers to hover. For a while it was the largest animal that had ever lived, and it was essentially a squid in a tower." },

  // ---- Silurian ----
  pneumodesmus: { taxon: "Pneumodesmus newmani · the only species in Pneumodesmus", d: "Detritivore — decaying plant matter, the first land food there was", h: "A Scottish shoreline, roughly 425 million years ago", s: "EX",
    f: "A millipede a centimetre long, found in Aberdeenshire by a bus driver and amateur fossil hunter, Mike Newman, whose name it carries. It matters because of what is preserved on its flank: spiracles — the openings of an air-breathing system. That made it the oldest known animal to breathe air, and evidence that land was being colonised earlier than anyone thought. The claim rests on the age of the rock, and a 2017 redating argued it is younger, which would hand the record elsewhere. The argument is still live." },

  // ---- Devonian ----
  jaekelopterus: { taxon: "Jaekelopterus rhenaniae · the largest arthropod that ever lived", d: "Carnivore — fish and other arthropods, taken on toothed claws", h: "Devonian rivers and estuaries of what is now Germany, roughly 400 million years ago", s: "EX",
    f: "The largest arthropod known: a sea scorpion of about two and a half metres, estimated from a single fossil claw nearly half a metre long with teeth along its inner edge. Nothing with an external skeleton has ever grown bigger. It hunted in fresh and brackish water rather than the open sea, which means the biggest bug that ever lived was a river animal." },
  dunkleosteus: { taxon: "Dunkleosteus terrelli · one of about 10 named Dunkleosteus species", d: "Carnivore — sharks, other placoderms, and anything it could shear", h: "Late Devonian seas, roughly 360 million years ago", s: "EX",
    f: "It had no teeth. Its jaw bones themselves grew into self-sharpening shearing blades that ground against each other every time the mouth closed, so the edge stayed keen for life. The head and shoulders were encased in bony armour and almost nothing behind them fossilises, which is why its length has been argued down from nine metres to perhaps four in recent work — a top predator known almost entirely from its own face." },
  tiktaalik: { taxon: "Tiktaalik roseae · the only species in Tiktaalik", d: "Carnivore — fish, in shallow water", h: "Devonian shallow streams of what is now Arctic Canada, roughly 375 million years ago", s: "EX",
    f: "It was predicted before it was found. Rocks of the right age and the right kind were identified, an expedition went to Ellesmere Island specifically to look, and after four field seasons they found a fish with a neck. Fish cannot turn their heads; this one could. Its front fins have a shoulder, an elbow and a wrist inside them. Its name was chosen by Inuvialuit elders, and means a large freshwater fish." },
  ichthyostega: { taxon: "Ichthyostega · one of 3 named Ichthyostega species", d: "Carnivore — fish and invertebrates in shallow water", h: "Late Devonian swamps of what is now Greenland, roughly 365 million years ago", s: "EX",
    f: "One of the first four-limbed animals, and it was long drawn walking out of the water like a lizard — the standard picture of life reaching land. Its skeleton says otherwise. The hind limbs could not rotate to face forward and the ribcage was too rigid for a walking gait, so it probably hauled itself in a mudskipper-like shuffle. It also had seven toes, from before the number settled at five." },

  // ---- Carboniferous ----
  meganeura: { taxon: "Meganeura monyi · one of 2 named Meganeura species", d: "Carnivore — other insects and small amphibians, caught in flight", h: "Carboniferous coal swamps, roughly 300 million years ago", s: "EX",
    f: "A dragonfly relative with a wingspan of about seventy centimetres. Insects have no lungs — they take oxygen through tubes that carry it directly to the tissue, and that only works up to a size set by how much oxygen is in the air. The Carboniferous atmosphere was around thirty percent oxygen against today's twenty-one, and the giant insects appear in exactly that window and disappear when it closes." },
  arthropleura: { taxon: "Arthropleura · one of several named species", d: "Detritivore — rotting plant matter on the forest floor", h: "Carboniferous coal forests, roughly 315 million years ago", s: "EX",
    f: "A millipede two and a half metres long — the largest land invertebrate that has ever existed. It was known for over a century from body segments and from trackways: parallel rows of footprints in Carboniferous sandstone, the width of a car. No head was found until 2024, and when it turned up it was a surprise, because the head looks more like a centipede's than a millipede's despite the body being unmistakably the latter." },

  // ---- Permian ----
  dimetrodon: { taxon: "Dimetrodon · one of about 15 named species; not a dinosaur", d: "Carnivore — the apex predator of its landscape", h: "Early Permian floodplains, roughly 290 million years ago", s: "EX",
    f: "It is in every dinosaur toy set and it is not a dinosaur — it died out about forty million years before the first one, and it is a synapsid, on OUR branch of the family tree. You are more closely related to Dimetrodon than any dinosaur ever was. The sail is a row of enormously extended vertebrae; it has been read as a radiator, as a display structure, and lately as both, and the argument is not finished." },
  gorgonops: { taxon: "Gorgonops · the animal that names the gorgonopsians", d: "Carnivore — the dominant land predator before the Permian extinction", h: "Late Permian southern Africa, roughly 255 million years ago", s: "EX",
    f: "Another synapsid on our own branch, and it had sabre teeth some sixty million years before the first cat existed. Its legs were tucked under the body rather than sprawled at the sides, which is a mammalian posture arriving long before mammals. Every gorgonopsian died in the end-Permian extinction, the largest in the history of life, which removed around ninety percent of marine species and left the world to the survivors." },

  // ---- Cretaceous ----
  sinosauropteryx: { taxon: "Sinosauropteryx prima · one of 2 named Sinosauropteryx species", d: "Carnivore — lizards and small mammals", h: "Early Cretaceous forests of what is now Liaoning, China, roughly 125 million years ago", s: "EX",
    f: "The first dinosaur ever found with feathers, in 1996 — simple hollow filaments, not flight feathers, on an animal with no possible use for flying. It settled an argument about where birds came from. And in 2010 it became the first dinosaur whose COLOUR was worked out: fossilised melanosomes gave it a ginger-brown back, a pale belly and a ringed tail. It also has a bandit mask, which in living animals means glare reduction or camouflage." },

  // ---- Paleogene ----
  ambulocetus: { taxon: "Ambulocetus natans · the only species in Ambulocetus", d: "Ambush carnivore — like a crocodile, at the water's edge", h: "Eocene coastal shallows of what is now Pakistan, roughly 48 million years ago", s: "EX",
    f: "Its name means \"walking whale that swims\", and it is exactly that: a whale with four working legs and hooved toes, which hunted like a crocodile at the edge of the sea. The ear tells the story. It already had the whale arrangement for hearing through the jawbone, which is useless on land and essential underwater — so the hearing changed before the legs did." },
  basilosaurus: { taxon: "Basilosaurus · one of several named species; the name is a mistake", d: "Carnivore — fish and smaller whales, including the young of its own relatives", h: "Eocene seas, roughly 38 million years ago", s: "EX",
    f: "The name means \"king lizard\", which is wrong: it is a whale, and by the time anyone realised, the rules of naming meant it was stuck with it. Eighteen metres of eel-shaped animal, so abundant in Alabama that farmers built fences and fireplaces out of its vertebrae. It kept its hind legs — a complete pair, hip to toes, a few centimetres long on an eighteen-metre body, far too small to walk on and still there." },

  // ---- Neogene ----
  megalodon: { taxon: "Otodus megalodon · known almost entirely from its teeth", d: "Carnivore — whales, above all. Bite marks are found on their fossil bones", h: "Warm seas worldwide, from about 20 to 3.6 million years ago", s: "EX",
    f: "Sharks are cartilage, so almost nothing of it fossilises except teeth — and the teeth are up to eighteen centimetres, the size of a hand. Everything else is inference: probably fifteen to eighteen metres, probably warm-blooded, probably a whale hunter, since its bite marks are on fossil whale bone. Its nurseries have been found in shallow bays. It has been extinct for over three million years, which no amount of documentary footage changes." },
  gigantopithecus: { taxon: "Gigantopithecus blacki · the only species in Gigantopithecus", d: "Herbivore — fruit, and increasingly tough fallback foods as the forest thinned", h: "Southern Chinese forests, from about 2 million to 295,000 years ago", s: "EX",
    f: "The largest primate that ever lived — perhaps three metres standing and a quarter of a tonne — and it is known from four jawbones and about two thousand loose teeth, all of them bought or excavated in southern China. The first were spotted in a Hong Kong apothecary's shop in 1935, on sale as dragon teeth. A 2024 study dated its end to around 295,000 years ago and blamed the diet: the forest turned to grassland, its relatives adapted, and it went on eating fruit until there was not enough." },
});

// Photographic sprites for all twenty-one. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P73.map((k) => [k, true])));

/* Learnsets and placement — the part68 pattern. The Record is its own zone, so
   these do not go into a biome; "fossil" is where the dig site is. */
{
  let built = 0; const thin = [];
  P73.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

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

  const maps = Object.keys(MAPS).filter((m) => usable(m, "pool") && MAPS[m].zone === "fossil");
  P73.forEach((k) => maps.forEach((m) => drop(m, "pool", k)));

  const homeless = P73.filter((k) => !placed.has(k));
  const hiddenFromGuide = P73.filter((k) => !(WHERE[k] || []).length);

  console.log(`[part73] the record: ${P73.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P73.length}`
    + ` | guide locations: ${P73.length - hiddenFromGuide.length}/${P73.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (homeless.length ? ` | NOWHERE TO LIVE: ${homeless.join(", ")}` : "")
    + (hiddenFromGuide.length ? ` | HIDDEN FROM GUIDE: ${hiddenFromGuide.join(", ")}` : ""));
}
