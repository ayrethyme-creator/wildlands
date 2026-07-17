// ---------- CHAPTER XV — Part 18: THE NAMES WE GIVE THE YOUNG ----------
// Two kinds of growth, both real:
//   SIZE   — animals that change so drastically they're barely the same shape.
//            A blue whale calf is born at 2,700kg and gains 90kg a DAY.
//   NAME   — animals whose young have their own word. Joey. Fawn. Puggle.
//            Cria. Eyas. Squab. Half of these are words nobody teaches you.
//
// Every "org" tag below is a true fact about that animal's infancy.

// Young sprites: the adult's own art, drawn small. For the size-change animals
// that IS the point — the calf is the same creature at a fraction of the mass.
const YOUNG = (artKey, scale = 0.68, tweak) => (er) => (
  <g>
    <g transform={`translate(32,40) scale(${scale}) translate(-32,-36)`}>{ART[artKey](er)}</g>
    {tweak === "spots" && <g fill="#f8f4ea" opacity=".75"><circle cx="24" cy="34" r="1.7" /><circle cx="33" cy="30" r="1.5" /><circle cx="40" cy="36" r="1.6" /><circle cx="28" cy="42" r="1.4" /><circle cx="37" cy="44" r="1.5" /></g>}
    {tweak === "grey" && <rect x="0" y="0" width="64" height="64" fill="#8a8578" opacity=".38" style={{ mixBlendMode: "saturation" }} />}
    {tweak === "fluff" && <g fill="#e8dcc3" opacity=".5"><circle cx="20" cy="28" r="4" /><circle cx="44" cy="28" r="4" /><circle cx="32" cy="22" r="4.5" /></g>}
  </g>
);

// key, display name, adult it becomes, level, sprite scale, note, tweak
const YOUNGLINGS = [
  // ===== SIZE: the great whales. Born enormous, grow absurd. =====
  ["bluewhale_c", "Blue Whale Calf", "bluewhale", 34, 0.52, "born 2,700kg · +90kg a day"],
  ["humpback_c", "Humpback Calf", "humpback", 30, 0.55, "drinks 200 litres of milk a day"],
  ["orca_c", "Orca Calf", "orca", 32, 0.58, "born knowing its pod's dialect"],
  ["spermwhale_c", "Sperm Whale Calf", "spermwhale", 34, 0.55, "the pod babysits while mothers dive"],
  ["graywhale_c", "Gray Whale Calf", "graywhale", 30, 0.55, "swims 8,000km beside its mother"],
  ["finwhale_c", "Fin Whale Calf", "finwhale", 30, 0.55, "second-largest animal ever"],
  ["minke_c", "Minke Calf", "minke", 26, 0.6, "weaned in six months"],
  ["seiwhale_c", "Sei Whale Calf", "seiwhale", 28, 0.58, "one of the fastest whales"],
  ["bowhead_c", "Bowhead Calf", "bowhead", 32, 0.55, "may outlive you by a century"],
  ["rightwhale_c", "Right Whale Calf", "rightwhale", 30, 0.55, "fewer than 400 of its kind left"],
  ["narwhal_c", "Narwhal Calf", "narwhal", 28, 0.6, "no tusk yet", "grey"],
  ["beluga_c", "Beluga Calf", "beluga", 28, 0.6, "born grey — white takes years", "grey"],
  ["bottlenose_c", "Dolphin Calf", "bottlenose", 24, 0.62, "learns its name in weeks"],
  ["spinner_c", "Spinner Calf", "spinnerdolphin", 24, 0.62, "learns to leap by copying"],
  ["manatee_c", "Manatee Calf", "manatee", 26, 0.6, "surfaces for its first breath in seconds"],
  ["dugong_c", "Dugong Calf", "dugong", 26, 0.6, "rides on its mother's back"],
  // ===== SIZE: elephants. 120kg at birth, six tonnes later. =====
  ["africanelephant_c", "Elephant Calf", "africanelephant", 32, 0.55, "born 120kg · 22-month pregnancy"],
  ["asianelephant_c", "Asian Elephant Calf", "asianelephant", 32, 0.55, "sucks its trunk like a thumb"],
  ["mammoth_c", "Mammoth Calf", "mammoth", 34, 0.55, "woolly from birth"],
  // ===== NAME: joey. Marsupials are born the size of a jellybean. =====
  ["kangaroo_j2", "Joey", "kangaroo", 24, 0.55, "born at 2cm · climbs to the pouch alone"],
  ["wallaby_j", "Wallaby Joey", "wallaby", 20, 0.6, "pouch life for 8 months"],
  ["koala_j", "Koala Joey", "koala", 22, 0.6, "eats its mother's pap to gain gut microbes"],
  ["wombat_j", "Wombat Joey", "wombat", 22, 0.6, "the pouch faces backwards, so digging can't fill it"],
  ["quokka_j", "Quokka Joey", "quokka", 18, 0.62, "born after 27 days"],
  ["opossum_j", "Opossum Joey", "opossum", 18, 0.62, "a whole litter fits in a teaspoon"],
  // ===== NAME: puggle. Monotremes hatch from eggs. =====
  ["echidna_p", "Puggle", "echidna", 22, 0.6, "hatches from an egg · no spines yet"],
  ["platypus_p", "Platypus Puggle", "platypus", 22, 0.6, "milk seeps through skin — there are no nipples"],
  // ===== NAME: calf. The word covers whales, elephants, giraffes and rhinos. =====
  ["giraffe_c", "Giraffe Calf", "giraffe", 26, 0.6, "falls two metres at birth · stands within an hour"],
  ["hippo_c", "Hippo Calf", "hippo", 26, 0.6, "born underwater · suckles underwater"],
  ["whiterhino_c", "White Rhino Calf", "whiterhino", 30, 0.58, "no horn yet — that grows in"],
  ["blackrhino_c", "Black Rhino Calf", "blackrhino", 30, 0.58, "runs in front; white rhino calves run behind"],
  ["bison_c", "Bison Calf", "bison", 26, 0.6, "born orange — 'red dog'"],
  ["moose_c", "Moose Calf", "moose", 26, 0.6, "outruns a person within days"],
  ["camel_c", "Camel Calf", "camel", 24, 0.6, "born humpless"],
  ["tapir_c", "Tapir Calf", "tapir", 22, 0.6, "striped and spotted like a watermelon", "spots"],
  // ===== NAME: cria, foal, fawn, kid — the words for hoofed young =====
  ["llama_c", "Cria", "llama", 20, 0.62, "born in the morning · dry before the cold night"],
  ["alpaca_c", "Alpaca Cria", "alpaca", 20, 0.62, "the whole herd hums at it"],
  ["zebra_f", "Zebra Foal", "zebra", 22, 0.62, "brown-striped · learns its mother's pattern first"],
  ["ostrich_c", "Ostrich Chick", "ostrich", 22, 0.6, "the biggest egg of any living bird", "fluff"],
  // ===== NAME: cub. Bears. =====
  ["polarbear_c", "Polar Bear Cub", "polarbear", 28, 0.58, "born blind in a snow den, 600g"],
  ["grizzly_c", "Grizzly Cub", "grizzly", 26, 0.58, "born during hibernation — mother sleeps through it"],
  ["blackbear_c", "Black Bear Cub", "blackbear", 24, 0.6, "climbs before it can run"],
  ["panda_c", "Panda Cub", "panda", 26, 0.55, "born pink, blind, 1/900th of its mother's weight"],
  ["sunbear_c", "Sun Bear Cub", "sunbear", 22, 0.6, "the smallest bear stays smallest"],
  ["slothbear_c", "Sloth Bear Cub", "slothbear", 24, 0.6, "rides on its mother's back"],
  ["spectacledbear_c", "Spectacled Bear Cub", "spectacledbear", 24, 0.6, "South America's only bear"],
  // ===== NAME: pup. Pinnipeds. =====
  ["walrus_c", "Walrus Calf", "walrus", 28, 0.58, "no tusks for two years"],
  ["sealion_p", "Sea Lion Pup", "sealion", 22, 0.62, "knows its mother's bark among thousands"],
  ["seal_p", "Fur Seal Pup", "seal", 20, 0.62, "born in a colony of tens of thousands"],
  ["leopardseal_p", "Leopard Seal Pup", "leopardseal", 28, 0.58, "alone on the ice within weeks"],
  ["weddellseal_p", "Weddell Seal Pup", "weddellseal", 26, 0.6, "swims at two weeks old"],
  // ===== NAME: infant. Great apes. =====
  ["gorilla_i", "Gorilla Infant", "gorilla", 28, 0.55, "clings to fur for four months"],
  ["chimpanzee_i", "Chimp Infant", "chimpanzee", 26, 0.58, "nurses for five years"],
  ["gibbon_i", "Gibbon Infant", "gibbon", 22, 0.6, "born pale · darkens with age"],
  ["baboon_i", "Baboon Infant", "baboon", 22, 0.6, "born black · the troop crowds to see it"],
  // ===== NAME: eyas, squab. The falconers' and pigeon-keepers' words. =====
  ["peregrine_e", "Eyas", "peregrine", 24, 0.6, "an eyas is a nestling falcon", "fluff"],
  ["harpyeagle_e", "Harpy Eyas", "harpyeagle", 30, 0.58, "one chick every 2-3 years", "fluff"],
  ["goldeneagle_e", "Golden Eyas", "goldeneagle", 28, 0.58, "the older chick often kills the younger", "fluff"],
];

const newSpecies = {};
YOUNGLINGS.forEach(([key, name, adult, at, scale, note, tweak]) => {
  const a = DEX[adult];
  if (!a) { console.warn("no adult for", key, adult); return; }
  ART[key] = YOUNG(a.art, scale, tweak);
  // a juvenile is the same animal: same types, softer stats, easier to befriend
  const soft = (v, f) => Math.max(12, Math.round(v * f));
  newSpecies[key] = {
    n: name, art: key, t: [...a.t],
    b: { h: soft(a.b.h, 0.62), a: soft(a.b.a, 0.55), d: soft(a.b.d, 0.6), s: soft(a.b.s, 0.85) },
    m: [], l: [], juv: true, org: note,
    c: Math.min(0.75, (a.c || 0.3) * 1.9 + 0.1),
    grows: { to: adult, at },
    ...(a.mem ? { mem: true } : {}),
  };
});
Object.assign(DEX, newSpecies);

// Give the new juveniles proper movesets using the same generator as everyone
// else, then let them keep growing into their adults' learnsets.
Object.keys(newSpecies).forEach((k) => {
  const { start, learn } = buildLearnset(k);
  DEX[k].m = start.length ? start : ["tackle"];
  DEX[k].l = learn.filter(([L, mv]) => L < DEX[k].grows.at && !DEX[k].m.includes(mv));
});

// ---- put the young where their parents are ----
// A juvenile lives exactly where its adult lives, at a slightly lower level.
const parentSpots = {};
Object.entries(MAPS).forEach(([mk2, m]) => {
  ["pool", "poolN", "poolWater"].forEach((p) => (m[p] || []).forEach(([sp, w]) => {
    if (w > 0) (parentSpots[sp] = parentSpots[sp] || []).push([mk2, p, w]);
  }));
});
let placed = 0;
Object.keys(newSpecies).forEach((k) => {
  const adult = newSpecies[k].grows.to;
  const spots = parentSpots[adult] || [];
  spots.forEach(([mk2, p, w]) => {
    // the young are commoner than the adults where they occur
    MAPS[mk2][p] = [...MAPS[mk2][p], [k, Math.max(3, Math.round(w * 1.15))]];
    placed++;
  });
});
console.log("[part18] juveniles:", Object.keys(newSpecies).length, "| spawn entries added:", placed);

Object.assign(SIGNS, {
  "shore:7,3": "🪧 'A blue whale calf is born weighing about 2,700kg and puts on roughly 90kg every day on nothing but milk. It is the fastest growth of any animal on earth, and it is fuelled entirely by its mother, who does not eat while nursing.'",
  "openocean:7,3": "🪧 'Belugas are born grey. They do not turn white for years. Narwhal calves have no tusk. Almost nothing in the sea is born looking like what it becomes.'",
  "savanna:7,7": "🪧 'A giraffe is born by falling two metres to the ground, and is standing within an hour. It has to be. Nothing out here waits.'",
  "outback:7,3": "🪧 'A kangaroo is born after 33 days, blind and 2cm long, and crawls up through its mother\\'s fur to the pouch entirely alone. It is one of the most extraordinary journeys any animal makes, and it is made by something the size of a jellybean.'",
  "canopywalk:7,7": "🪧 'A baby echidna is called a puggle. It hatches from an egg into the pouch, and drinks milk that seeps through the skin, because monotremes have no nipples. The word for a baby platypus is also puggle.'",
  "tundra:7,3": "🪧 'A polar bear cub is born at about 600 grams — smaller than a guinea pig — blind, in a snow den, while its mother is fasting. She will not eat for up to eight months.'",
  "bamboo:7,3": "🪧 'A panda cub is born pink, blind, and about 1/900th of its mother\\'s weight. Proportionally that is like a human giving birth to something the size of a stick of butter.'",
});
