// ---------- PART 61: THE AQUARIUM ----------
// A small building off Emberglass Shore holding the fish people actually keep
// as pets rather than the reef life already living wild nearby: two rooms,
// one freshwater and one saltwater, using the same P()-domestic pattern as
// the goldfish and koi in part14 rather than the wild A() used for anything
// caught off a reef.
//
// Originally thirty-three species, chosen to round the Field Guide to an
// even 1000. Trimmed by ten (the more redundant half of each look-alike
// pair - a second tetra, a second danio, a second livebearer or two, a
// second clownfish, a second tang, and so on) to make room for part64's ten
// named bat species without moving off that number: the guide was never
// this close to 1000 before, no reason to leave it for good reason.

// ---- freshwater tank sprites ----
Object.assign(ART, {
  neontetra: fishA({ body: "#2a7ad9", finC: "#e8384a", bands: true, markC: "#e8384a" }),
  blackskirttetra: fishA({ body: "#4a4a50", finC: "#26221c", bands: true, markC: "#26221c" }),
  zebradanio: fishA({ body: "#c9d4de", finC: "#2a4a7a", bands: true, markC: "#2a4a7a" }),
  corydoras: fishA({ body: "#a87850", finC: "#8a6338", spots: true, markC: "#5c4030" }),
  bristlenosepleco: fishA({ body: "#5c4a3a", finC: "#3c2e22", spots: true, markC: "#8a7050", bigEye: true }),
  betta: fishA({ body: "#c9294a", finC: "#8a1a3a", sail: true }),
  guppy: fishA({ body: "#e8a53a", finC: "#c9384a", spots: true, markC: "#c9384a" }),
  platyfish: fishA({ body: "#e8683a", finC: "#c9502a" }),
  discusfish: fishA({ body: "#3ad9c9", finC: "#26857a", bands: true, markC: "#26221c" }),
  oscarcichlid: fishA({ body: "#c9702a", finC: "#8a4c1e", spots: true, markC: "#26221c" }),
  fancygoldfish: fishA({ body: "#f2a83a", finC: "#f8d4a8", sail: true }),
  dwarfgourami: fishA({ body: "#3a7ad9", finC: "#2a5aa8", bands: true, markC: "#c9384a" }),
  // ---- saltwater tank sprites ----
  perculaclownfish: fishA({ body: "#f2802a", finC: "#26221c", stripes: true, markC: "#f8f4ea" }),
  bluetang: fishA({ body: "#2a6ad9", finC: "#26221c", sail: true }),
  royalgramma: fishA({ body: "#8e44ad", finC: "#f2c94a" }),
  flameangelfish: fishA({ body: "#e8422a", finC: "#8a2a1a", bands: true, markC: "#26221c" }),
  copperbandbutterfly: fishA({ body: "#f2ede0", finC: "#e8dcc3", bands: true, markC: "#c9702a" }),
  bluegreenchromis: fishA({ body: "#3ad9c9", finC: "#26a89a" }),
  firefishgoby: fishA({ body: "#e8422a", finC: "#f8f4ea", bigEye: true }),
  sixlinewrasse: fishA({ body: "#e8853a", finC: "#c9702a", bands: true, markC: "#2a7ad9" }),
  picassotriggerfish: fishA({ body: "#e8dcc3", finC: "#c9b894", bands: true, spots: true, markC: "#26221c" }),
  porcupinepufferfish: fishA({ body: "#c9a878", finC: "#8a7050", puff: true, spots: true, markC: "#5c4436", bigEye: true }),
  banggaicardinalfish: fishA({ body: "#3c3c40", finC: "#26221c", spots: true, markC: "#f8f4ea", sail: true }),
});

Object.assign(DEX, {
  // ---- freshwater ----
  neontetra: P("Neon Tetra", "neontetra", ["Aquatic", "Swift"], B(16, 20, 16, 60), MV.aqua, 0.64, "pet"),
  blackskirttetra: P("Black Skirt Tetra", "blackskirttetra", ["Aquatic", "Swift"], B(18, 22, 18, 58), MV.aqua, 0.6, "pet"),
  zebradanio: P("Zebra Danio", "zebradanio", ["Aquatic", "Swift"], B(16, 20, 16, 64), MV.aqua, 0.64, "pet"),
  corydoras: P("Bronze Corydoras", "corydoras", ["Aquatic", "Armor"], B(22, 22, 28, 34), MV.aqua, 0.6, "pet"),
  bristlenosepleco: P("Bristlenose Pleco", "bristlenosepleco", ["Aquatic", "Armor"], B(26, 24, 34, 24), MV.aqua, 0.58, "pet"),
  betta: P("Betta", "betta", ["Aquatic", "Predator"], B(22, 34, 18, 48), MV.aqua, 0.5, "pet"),
  guppy: P("Guppy", "guppy", ["Aquatic", "Swift"], B(14, 18, 14, 62), MV.aqua, 0.66, "pet"),
  platyfish: P("Platy", "platyfish", ["Aquatic", "Swift"], B(16, 20, 16, 58), MV.aqua, 0.64, "pet"),
  discusfish: P("Discus", "discusfish", ["Aquatic", "Swift"], B(28, 26, 26, 44), MV.aqua, 0.44, "pet"),
  oscarcichlid: P("Oscar", "oscarcichlid", ["Aquatic", "Predator"], B(40, 42, 32, 40), MV.aqua, 0.4, "pet"),
  fancygoldfish: P("Fancy Goldfish", "fancygoldfish", ["Aquatic", "Swift"], B(24, 24, 26, 40), MV.aqua, 0.56, "pet"),
  dwarfgourami: P("Dwarf Gourami", "dwarfgourami", ["Aquatic", "Swift"], B(20, 24, 18, 46), MV.aqua, 0.58, "pet"),
  // ---- saltwater ----
  perculaclownfish: P("Percula Clownfish", "perculaclownfish", ["Aquatic", "Swift"], B(24, 26, 24, 48), MV.aqua, 0.5, "pet"),
  bluetang: P("Blue Tang", "bluetang", ["Aquatic", "Swift"], B(28, 30, 26, 52), MV.aqua, 0.36, "pet"),
  royalgramma: P("Royal Gramma", "royalgramma", ["Aquatic", "Swift"], B(20, 24, 20, 54), MV.aqua, 0.48, "pet"),
  flameangelfish: P("Flame Angelfish", "flameangelfish", ["Aquatic", "Swift"], B(26, 30, 26, 50), MV.aqua, 0.4, "pet"),
  copperbandbutterfly: P("Copperband Butterflyfish", "copperbandbutterfly", ["Aquatic", "Swift"], B(24, 26, 24, 52), MV.aqua, 0.42, "pet"),
  bluegreenchromis: P("Blue-Green Chromis", "bluegreenchromis", ["Aquatic", "Swift"], B(14, 18, 14, 60), MV.aqua, 0.6, "pet"),
  firefishgoby: P("Firefish Goby", "firefishgoby", ["Aquatic", "Swift"], B(16, 18, 16, 56), MV.aqua, 0.5, "pet"),
  sixlinewrasse: P("Six-Line Wrasse", "sixlinewrasse", ["Aquatic", "Swift"], B(20, 24, 18, 58), MV.aqua, 0.48, "pet"),
  picassotriggerfish: P("Picasso Triggerfish", "picassotriggerfish", ["Aquatic", "Armor"], B(32, 34, 34, 42), MV.aqua, 0.38, "pet"),
  porcupinepufferfish: P("Porcupine Pufferfish", "porcupinepufferfish", ["Aquatic", "Armor"], B(34, 30, 40, 26), MV.aqua, 0.4, "pet"),
  banggaicardinalfish: P("Banggai Cardinalfish", "banggaicardinalfish", ["Aquatic", "Swift"], B(18, 20, 18, 50), MV.aqua, 0.44, "pet"),
});

const AQUA_FRESH = ["neontetra", "blackskirttetra", "zebradanio", "corydoras",
  "bristlenosepleco", "betta", "guppy", "platyfish",
  "discusfish", "oscarcichlid", "fancygoldfish", "dwarfgourami"];
const AQUA_SALT = ["perculaclownfish", "bluetang", "royalgramma",
  "flameangelfish", "copperbandbutterfly", "bluegreenchromis", "firefishgoby",
  "sixlinewrasse", "picassotriggerfish", "porcupinepufferfish",
  "banggaicardinalfish"];

Object.assign(INFO, {
  neontetra: { d: "Omnivore — small invertebrates, algae, flake food", h: "Domestic worldwide, from the western Amazon basin", s: "DOM",
    f: "The stripe is structural colour, not pigment — light bouncing off layered cells in its skin — and it dims and nearly vanishes while the fish sleeps, because the cells relax. It schools by instinct even alone in a bare tank, which is why keepers are told never to buy just one." },
  blackskirttetra: { d: "Omnivore — insects, plant matter, flake food", h: "Domestic worldwide, from Paraguay and Brazil", s: "DOM",
    f: "Born a deep black that fades toward silver-grey with age, so an old skirt tetra barely resembles the fish sold in the shop. It nips the long fins of slower tankmates, which is less malice than boredom — a big enough school mostly nips each other instead." },
  zebradanio: { d: "Omnivore — insects, algae, flake food", h: "Domestic worldwide, from streams of eastern India", s: "DOM",
    f: "One of the most important animals in a genetics lab, not just a pet store staple: it can regrow fin, heart muscle, and even damaged spinal cord tissue, and its embryos develop transparent, so researchers can watch organs form in real time. The stripes are camouflage first and lab fame a very distant second." },
  corydoras: { d: "Omnivore — sinks to the substrate for anything edible", h: "Domestic worldwide, from South American rivers", s: "DOM",
    f: "An armoured catfish that can breathe air: cornered on the surface, it will gulp a bubble and absorb oxygen through its gut lining, which lets it survive water too poor in oxygen for almost anything else in the tank. Its barbels taste the substrate for food it cannot see." },
  bristlenosepleco: { d: "Herbivore — algae, biofilm, sinking wafers", h: "Domestic worldwide, from South American rivers", s: "DOM",
    f: "Only the males grow the fleshy bristles on the snout that give it its name, and the bigger they are the more mates and territory they usually hold. It is sold specifically to eat the algae other fish leave behind, and it is one of the very few aquarium animals bought for its appetite rather than its colour." },
  betta: { d: "Carnivore — insects and larvae, flake or pellet food", h: "Domestic worldwide, from rice paddies of Thailand", s: "DOM",
    f: "Bred for centuries in Thailand specifically to fight — two males will attack each other on sight, which is the entire reason for the flowing show fins and the reputation for living alone. A labyrinth organ lets it gulp air at the surface, an adaptation for the shallow, oxygen-poor paddy water it comes from." },
  guppy: { d: "Omnivore — algae, insect larvae, flake food", h: "Domestic worldwide, from Trinidad and northern South America", s: "DOM",
    f: "A livebearer: it gives birth to free-swimming young instead of laying eggs, and a single female stores sperm and can keep producing broods for months without a male present. It has been deliberately introduced worldwide to eat mosquito larvae, with mixed results for the native fish already living there." },
  platyfish: { d: "Omnivore — algae, insect larvae, flake food", h: "Domestic worldwide, from Mexico and Central America", s: "DOM",
    f: "A small, famously easy livebearer that has been bred into more colour and pattern variants than almost any other aquarium fish, which is most of why it is a standard first fish. It will crossbreed readily with the swordtail, its closest aquarium relative." },
  discusfish: { d: "Omnivore — worms, larvae, prepared discus food", h: "Domestic worldwide, from the Amazon basin", s: "DOM",
    f: "Called the king of the aquarium for how demanding it is about water quality, and for good reason: discus parents feed newly hatched fry a nutrient-rich mucus secreted from their own skin, which the fry graze directly off their sides for the first days of life." },
  oscarcichlid: { d: "Carnivore — fish, insects, pellet food", h: "Domestic worldwide, from the Amazon basin", s: "DOM",
    f: "One of the most recognisably intelligent aquarium fish — it learns to recognise its owner, can be trained to take food from the hand, and reportedly rearranges tank décor it does not like. It is also a genuine predator and will eat any tankmate small enough to fit in its mouth." },
  fancygoldfish: { d: "Omnivore — plants and small invertebrates", h: "Domestic worldwide, bred from the common goldfish", s: "DOM",
    f: "Centuries of selective breeding in China and Japan pushed the plain goldfish toward double tails, telescope eyes, and the fluid-filled head sacs of the oranda and lionhead — traits that can leave some varieties poor swimmers or half-blind. The extravagance is entirely a human choice; the fish never asked for it." },
  dwarfgourami: { d: "Omnivore — insect larvae, algae, flake food", h: "Domestic worldwide, from streams of the Ganges basin", s: "DOM",
    f: "Another labyrinth-organ air-breather, and the males build floating bubble nests at the surface to hold their eggs, guarding the nest and chasing off intruders until the fry hatch. The vivid blue-and-red males are almost entirely a selectively bred colour form of a much plainer wild fish." },
  perculaclownfish: { d: "Omnivore — algae, zooplankton", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "The anemonefish that made the whole idea famous: a mucus coating lets it live inside a sea anemone's stinging tentacles unharmed, sheltered from anything that cannot follow it in. Every one is born male, and the largest fish in a group becomes the female — sequential hermaphroditism, in exactly that order, no exceptions." },
  bluetang: { d: "Herbivore — algae", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "The fish everyone recognises as Dory, and for decades almost the entire aquarium supply was wild-caught because nobody could get it to breed in captivity — researchers only worked out a reliable method around 2016. Its scalpel-sharp spine at the base of the tail, not its mouth, is the part actually worth avoiding." },
  royalgramma: { d: "Carnivore — zooplankton", h: "Domestic worldwide, from the Caribbean", s: "DOM",
    f: "Purple in front, yellow in back, with a hard line between the two, and it spends most of its life swimming upside down under ledges and overhangs — it orients to the nearest reef surface rather than to gravity, which is standard for a fish that lives its whole life pressed against a ceiling." },
  flameangelfish: { d: "Omnivore — algae, zooplankton", h: "Domestic worldwide, from Pacific reefs", s: "DOM",
    f: "Vivid enough to be one of the most sought and expensive small marine angelfish in the trade, with black bars over red-orange that look painted on. Territorial with its own kind, which is why keepers are warned against putting two in the same tank." },
  copperbandbutterfly: { d: "Carnivore — small invertebrates, picked from crevices", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "The long, narrow snout evolved to reach prey wedged into reef crevices nothing else can get at, which is also what earned it a reputation — not always reliable — for eating aiptasia, a pest anemone that plagues reef tanks. A picky eater outside the wild, and one of the harder butterflyfish to keep well." },
  bluegreenchromis: { d: "Omnivore — zooplankton", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "About as close to a starter marine fish as the ocean offers: peaceful, cheap, and iridescent blue-green that shifts with the angle of the light rather than coming from pigment. Wild, it schools by the hundreds over a reef; in a tank, six or eight still move as one nervous unit." },
  firefishgoby: { d: "Carnivore — zooplankton", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "Lives head-out of a burrow in the sand and drops tail-first back into it at the first sign of trouble, which is nearly instantaneous — it is one of the twitchiest common reef fish, and a tank without a soft, diggable substrate leaves it with nowhere to hide." },
  sixlinewrasse: { d: "Carnivore — small invertebrates", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "Buries itself in the sand to sleep every night and can vanish from view in under a second when startled, diving straight into the substrate rather than swimming for cover. Feisty for its size, and known to pick fights with tankmates several times its length." },
  picassotriggerfish: { d: "Omnivore — invertebrates, algae", h: "Domestic worldwide, from Indo-Pacific reefs", s: "DOM",
    f: "Named for Hawaii's state fish, humuhumunukunukuapua'a, which is this species — the name roughly translates to 'triggerfish with a snout like a pig.' Each eye moves independently of the other, letting it watch two directions in a crowded reef tank at once." },
  porcupinepufferfish: { d: "Carnivore — hard-shelled invertebrates, crushed with beak-like teeth", h: "Domestic worldwide, from tropical reefs worldwide", s: "DOM",
    f: "Its spines lie flat until the fish gulps water to balloon itself into a spiked ball, the same trick as its smaller pufferfish relatives, and its skin carries the same tetrodotoxin defence. A single fused beak-like plate of teeth, not individual teeth, is what lets it crack shellfish whole." },
  banggaicardinalfish: { d: "Carnivore — zooplankton, small invertebrates", h: "Domestic worldwide, from the Banggai Islands, Indonesia", s: "DOM",
    f: "The male is a mouthbrooder: he carries the fertilised eggs, and then the hatched fry, inside his own mouth for weeks of protection before releasing them fully formed. Found wild only around one small Indonesian island group, and collection for the aquarium trade has left it endangered there even though it now breeds easily in captivity." },
});

// ---- the building: a door off Emberglass Shore's walkable strip ----
(() => {
  const host = MAPS.shore;
  if (!host) { console.warn("[part61] no shore to attach the Aquarium to"); return; }
  // Row 13 is the shore's unbroken south wall; column 1 sits on the thin strip
  // of beach the player already walks to reach the trainers here, so the new
  // door needs no swim badge to reach.
  host.rows = withRow(host.rows, 13, "TeTTTTTTTTTTTTTT");
  host.exits = { ...host.exits, "1,13": { map: "aquarium", x: 7, y: 8 } };

  const AQUA_HUB_ROWS = [
    "^^^^^^^^^^^^^^^^",
    "^..............^",
    "^....!....!....^",
    "e..............e",
    "^..............^",
    "^......R.......^",
    "^..............^",
    "^..............^",
    "^..............^",
    "^^^^^^^s^^^^^^^^",
  ];
  MAPS.aquarium = {
    name: "The Aquarium", zone: "reefz", music: "town",
    rows: AQUA_HUB_ROWS,
    exits: {
      "7,9": { map: "shore", x: 1, y: 12 },
      "0,3": { map: "aqua_fresh", x: 7, y: 8 },
      "15,3": { map: "aqua_salt", x: 7, y: 8 },
    },
    lvl: [37, 41],
  };

  // Tank rooms are water, not grass - Hearthside's cattery/kennel rooms reuse
  // the grass-tile trigger for an indoor room because there's nothing else
  // to stand in for "close enough to the animals to meet one," but a fish
  // tank has an obvious, better fit already built into the engine.
  const AQUA_LEAF_ROWS = [
    "^^^^^^^^^^^^^^^^",
    "^..WWW....WWW..^",
    "^.WWWWW..WWWWW.^",
    "^......!.......^",
    "^WWWW......WWWW^",
    "^WWWW......WWWW^",
    "^..............^",
    "^..WWW....WWW..^",
    "^..WWW....WWW..^",
    "^^^^^^^s^^^^^^^^",
  ];
  MAPS.aqua_fresh = {
    name: "The Aquarium: Freshwater Hall", zone: "reefz", music: "route",
    rows: AQUA_LEAF_ROWS,
    exits: { "7,9": { map: "aquarium", x: 1, y: 3 } },
    poolWater: AQUA_FRESH.map((sp, i) => [sp, Math.max(4, 12 - i)]).filter(([sp]) => DEX[sp]),
    lvlWater: [37, 41],
  };
  MAPS.aqua_salt = {
    name: "The Aquarium: Saltwater Hall", zone: "reefz", music: "route",
    rows: AQUA_LEAF_ROWS,
    exits: { "7,9": { map: "aquarium", x: 14, y: 3 } },
    poolWater: AQUA_SALT.map((sp, i) => [sp, Math.max(4, 12 - i)]).filter(([sp]) => DEX[sp]),
    lvlWater: [37, 41],
  };

  Object.assign(SIGNS, {
    "aquarium:5,2": "🪧 'THE AQUARIUM — everything in here is a species someone, somewhere, keeps in a tank at home. ⬅ Freshwater · Saltwater ➡'",
    "aquarium:10,2": "🪧 'None of these were caught off Emberglass Shore. They came from rivers and reefs on the far side of the world, one fish tank at a time.'",
    "aqua_fresh:7,3": "🪧 'FRESHWATER HALL — tetras, danios, livebearers, catfish. The whole hobby usually starts with something from this room.'",
    "aqua_salt:7,3": "🪧 'SALTWATER HALL — reef fish that never touched a reef. Harder water to keep right, and it shows in how carefully this room is kept.'",
  });

  TRAINERS["aquarium:7,5"] = {
    name: "Aquarist Priya", em: "🧑🏽‍🔬",
    line: "\"People ask why I keep tanked fish when I live a walk from a real reef. It's the same reason anyone keeps anything close: so you actually look at it every day, instead of just knowing it's out there.\"",
  };

  console.log(`[part61] The Aquarium attached to shore | ${AQUA_FRESH.length} freshwater + ${AQUA_SALT.length} saltwater species | DEX now ${Object.keys(DEX).length}`);
})();
