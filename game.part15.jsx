// ---------- CHAPTER XII — Part 15: FIELD NOTES ----------
// Real information, written by hand. Where a note does not exist yet the guide
// says so rather than inventing one — a Field Guide that lies is worse than a
// Field Guide with gaps.
//
// d = diet   h = habitat   s = IUCN status   f = one true thing
// IUCN: LC least concern · NT near threatened · VU vulnerable
//       EN endangered · CR critically endangered · EW extinct in the wild · EX extinct

const IUCN = {
  LC: ["Least Concern", "#4c9a3c"], NT: ["Near Threatened", "#8fb35c"], VU: ["Vulnerable", "#e8c547"],
  EN: ["Endangered", "#e8853a"], CR: ["Critically Endangered", "#d94a3a"], EW: ["Extinct in the Wild", "#8e44ad"],
  EX: ["Extinct", "#5c5448"], DD: ["Data Deficient", "#8a8578"], DOM: ["Domesticated", "#5dade2"],
};

const INFO = {
  // ---- cats ----
  lion: { d: "Carnivore — mostly large grazers, hunted cooperatively by the lionesses", h: "African savanna and grassland; one tiny population of Asiatic lions survives in India's Gir Forest", s: "VU", f: "The only truly social cat. A pride is a group of related females — the males come and go." },
  tiger: { d: "Carnivore — deer, wild pig, anything it can ambush", h: "Forest and grassland across Asia, from Siberian snow to Sumatran rainforest", s: "EN", f: "Stripes are unique like fingerprints, and they go all the way down: shave a tiger and the pattern is still there, in its skin." },
  leopard: { d: "Carnivore — extremely broad, from beetles to antelope", h: "The widest range of any big cat: Africa through Asia, deserts to rainforest to city edges", s: "VU", f: "It hauls kills heavier than itself up trees, to keep them from lions and hyenas." },
  cheetah: { d: "Carnivore — gazelle and small antelope, run down in the open", h: "African grassland and open scrub; a handful remain in Iran", s: "VU", f: "It cannot roar and it cannot retract its claws properly — they work like sprinter's spikes. Top speed is around 100 km/h, but only for about 20 seconds." },
  snowleopard: { d: "Carnivore — blue sheep and ibex on near-vertical ground", h: "High mountains of Central and South Asia, 3,000–4,500 m", s: "VU", f: "Its tail is nearly as long as its body — a counterweight for cliff work, and a scarf when it sleeps." },
  jaguar: { d: "Carnivore — capybara, caiman, turtles, fish", h: "Rainforest, wetland and scrub from Mexico to Argentina", s: "NT", f: "It kills by biting straight through the skull. It is the only big cat that routinely does this, and it has the strongest bite for its size of any of them." },
  puma: { d: "Carnivore — deer mainly, but almost anything", h: "The greatest range of any land mammal in the Americas: Yukon to Patagonia", s: "LC", f: "It has more names than any other animal — puma, cougar, mountain lion, panther, catamount — because settlers kept meeting it and thinking it was new." },
  pallascat: { d: "Carnivore — pikas and small rodents", h: "Cold rocky steppe and grassland of Central Asia", s: "LC", f: "Its pupils are round, not slit like other small cats, and its flat face is an ambush adaptation. It is not grumpy. It simply looks that way." },
  ocelot: { d: "Carnivore — rodents, lizards, birds", h: "Rainforest, thornscrub and mangrove from Texas to Argentina", s: "LC", f: "In the 1960s and 70s, a hundred thousand ocelot skins a year moved through the fur trade. It took a treaty to stop it." },
  cloudedleopard: { d: "Carnivore — gibbons, deer, birds, taken in the trees", h: "Forests of Southeast Asia and the Himalayan foothills", s: "VU", f: "It has the longest canine teeth relative to skull size of any living cat — proportionally the same as a sabretooth. It can climb down a trunk head-first." },
  fishingcat: { d: "Piscivore — fish, frogs, crustaceans", h: "Wetlands, mangrove and reedbed in South and Southeast Asia", s: "VU", f: "It has partly webbed feet and dives. Most cats hate water; this one taps the surface to mimic an insect and draw fish up." },
  jaguarundi: { d: "Carnivore — birds, rodents, reptiles", h: "Lowland scrub and forest edge, Mexico to Argentina", s: "LC", f: "It looks more like a weasel or an otter than a cat, and it is active by day, which is unusual for a small cat." },
  serval: { d: "Carnivore — rodents, taken with a vertical pounce", h: "African wetland margins and tall grass", s: "LC", f: "It has the longest legs and largest ears relative to body size of any cat. It hunts by sound, leaps three metres up, and lands on prey it never saw." },
  lynx: { d: "Carnivore — hares, above all", h: "Boreal forest across Eurasia and North America", s: "LC", f: "Canada lynx numbers rise and crash on a ten-year cycle that follows the snowshoe hare exactly. Trappers' records let us watch the loop for two centuries." },
  caracal: { d: "Carnivore — birds, taken out of the air", h: "Dry savanna, scrub and semi-desert, Africa to India", s: "LC", f: "It can leap three metres straight up and swat birds out of flight. The ear tufts are named in its own name: 'karakulak', Turkish for black ear." },
  sandcat: { d: "Carnivore — rodents, reptiles, insects", h: "True desert: Sahara, Arabia, Central Asia", s: "LC", f: "It can live without drinking, taking all its water from prey, and the fur on its paw pads insulates it from sand hot enough to blister skin." },
  // ---- canids ----
  wolf: { d: "Carnivore — elk, deer, moose, hunted as a pack", h: "Forest, tundra and mountain across the northern hemisphere", s: "LC", f: "Reintroducing wolves to Yellowstone in 1995 changed where elk grazed, which let willows return, which brought back beavers and songbirds. The rivers physically changed course." },
  redfox: { d: "Omnivore — rodents, birds, fruit, bins", h: "The most widespread wild carnivore on earth; every continent but Antarctica", s: "LC", f: "It hunts by pouncing on prey under snow, and it aims north-east. Something in its magnetic sense appears to help it judge the distance." },
  arcticfox: { d: "Omnivore — lemmings, birds, carrion, and whatever polar bears leave", h: "Arctic tundra and sea ice", s: "LC", f: "It has the warmest fur of any mammal and does not begin to shiver until about −70°C." },
  fennec: { d: "Omnivore — insects, rodents, roots", h: "Sahara and North African sand desert", s: "LC", f: "The smallest canid alive, with the largest ears relative to body size — they are radiators, dumping heat straight into the air." },
  dhole: { d: "Carnivore — deer, hunted in large clans", h: "Forests of South and Southeast Asia", s: "EN", f: "It whistles. Packs coordinate with a clear rising note, which is why it is sometimes called the whistling dog." },
  dingo: { d: "Carnivore — kangaroo, wallaby, rabbits", h: "Most of mainland Australia", s: "VU", f: "It arrived in Australia around 3,500 years ago and is now the continent's largest land predator. Whether it counts as native is one of the fiercest arguments in Australian ecology." },
  tibetanfox: { d: "Carnivore — pikas, almost exclusively", h: "The Tibetan Plateau, above 3,000 m", s: "LC", f: "Its square-jawed, narrow-eyed face makes it look permanently unimpressed. It often follows brown bears, catching pikas the bears flush out." },
  manedwolf: { d: "Omnivore — roughly half fruit, especially the wolf apple", h: "Grassland and scrub of central South America", s: "NT", f: "Not a wolf and not a fox. It stands on absurd stilt legs to see over tall grass, and its urine smells strongly of cannabis." },
  wilddog: { d: "Carnivore — antelope, run down over long distances", h: "African savanna and open woodland", s: "EN", f: "They vote. Before a hunt the pack sneezes, and if enough sneeze, they go. Fewer than 7,000 remain." },
  aardwolf: { d: "Insectivore — termites, about 250,000 in a night", h: "Dry African savanna and scrub", s: "LC", f: "A hyena that gave up hunting entirely. It has a sticky tongue, weak teeth, and licks termites off the ground rather than digging." },
  // ---- bears ----
  polarbear: { d: "Carnivore — seals, hunted at breathing holes in the sea ice", h: "Arctic sea ice and coast", s: "VU", f: "Its fur is not white — each hair is a hollow, colourless tube. Its skin underneath is black. It is classified as a marine mammal." },
  grizzly: { d: "Omnivore — salmon, roots, berries, moths, carrion", h: "Forest, tundra and coast of North America", s: "LC", f: "In autumn a grizzly can eat 20,000 army cutworm moths in a day, hauling rocks on mountain slopes to get at them." },
  panda: { d: "Herbivore — bamboo, about 99% of the diet, 12kg a day", h: "Mountain bamboo forest in central China", s: "VU", f: "It has a carnivore's gut and eats bamboo anyway, digesting only about 17% of it. It was moved off the endangered list in 2016 — a conservation success paid for over decades." },
  sunbear: { d: "Omnivore — honey, termites, fruit", h: "Southeast Asian tropical forest", s: "VU", f: "The smallest bear, with a 25cm tongue for raiding hives — which is why it is called the honey bear. The chest patch is unique to each animal." },
  slothbear: { d: "Insectivore — termites and ants, vacuumed out of mounds", h: "Forest and grassland of the Indian subcontinent", s: "VU", f: "It has no upper front teeth, leaving a gap it uses to suck insects out. You can hear it feeding from a hundred metres away." },
  spectacledbear: { d: "Omnivore — mostly bromeliads and fruit", h: "Andean cloud forest and páramo", s: "VU", f: "South America's only bear, and the last surviving short-faced bear. Paddington was one." },
  // ---- primates ----
  gorilla: { d: "Herbivore — leaves, stems, pith; some insects", h: "Rainforest and montane forest of central Africa", s: "CR", f: "A silverback can weigh 200kg on a diet of leaves. Mountain gorillas are the one great ape whose numbers are rising — from 250 to over 1,000, entirely because people chose to protect them." },
  chimpanzee: { d: "Omnivore — fruit, leaves, insects, and hunted monkeys", h: "Forest and savanna woodland of equatorial Africa", s: "EN", f: "They make and carry tools, wage territorial war, and share about 98.8% of our DNA. Jane Goodall's observation of a chimp stripping a twig to fish termites forced science to redefine 'human'." },
  bonobo: { d: "Frugivore — fruit, with leaves and the occasional small animal", h: "Rainforest south of the Congo River, and nowhere else", s: "EN", f: "Female-led, and famous for defusing conflict with sex rather than violence. Separated from chimpanzees by a river they cannot swim." },
  orangutan: { d: "Frugivore — fruit, especially figs; bark in lean seasons", h: "Rainforest of Borneo and Sumatra", s: "CR", f: "The name means 'person of the forest'. Mothers carry infants for up to eight years — the longest childhood of any wild mammal but us." },
  ringtaillemur: { d: "Omnivore — fruit, leaves, flowers", h: "Dry forest and scrub of southern Madagascar, and nowhere else", s: "EN", f: "Males have stink fights: they rub scent from wrist glands onto their tails and waft them at each other. The loser walks away." },
  ayeaye: { d: "Insectivore — grubs, dug out with one long finger", h: "Rainforest of Madagascar", s: "EN", f: "It taps a branch, listens for the hollow, gnaws a hole and hooks the grub out with a skeletal middle finger. It is the only primate that echolocates for food — and locals have long killed it on sight as an omen." },
  mandrill: { d: "Omnivore — fruit, seeds, insects, small vertebrates", h: "Rainforest of Gabon, Cameroon, Congo and Equatorial Guinea", s: "VU", f: "The most colourful mammal alive. The brighter the face, the higher the rank — and the colour fades if he loses status." },
  tarsier: { d: "Carnivore — insects, lizards, birds. Entirely animal.", h: "Forests of island Southeast Asia", s: "VU", f: "Each eyeball is as big as its brain and cannot move in the socket — so it turns its head 180° instead. The only entirely carnivorous primate." },
  // ---- ocean ----
  bluewhale: { d: "Filter feeder — up to 3,600kg of krill a day", h: "Every ocean; long migrations between polar feeding and tropical breeding", s: "EN", f: "The largest animal that has ever lived — larger than any dinosaur. Its heart is the size of a small car and its call carries for hundreds of kilometres." },
  humpback: { d: "Filter feeder — krill and small fish, herded with bubble nets", h: "All oceans; one of the longest migrations of any mammal", s: "LC", f: "Males sing, and every male in an ocean sings the same song, which changes together through the season. Hunted to about 5,000; now over 80,000. We did that on purpose." },
  orca: { d: "Carnivore — depends entirely on the culture: fish, seals, or whales", h: "Every ocean, pole to pole", s: "DD", f: "Not one species so much as many nations. Pods have distinct dialects, diets and hunting methods taught across generations, and they do not interbreed. Females live decades past menopause to lead — a thing almost only humans otherwise do." },
  spermwhale: { d: "Carnivore — deep-water squid, including giant squid", h: "Deep ocean worldwide", s: "VU", f: "The loudest animal on earth and the largest brain that has ever existed. It dives past 2,000m and holds its breath for 90 minutes." },
  narwhal: { d: "Carnivore — halibut, cod, squid, under the ice", h: "Arctic waters of Canada, Greenland, Norway and Russia", s: "LC", f: "The tusk is a tooth — the left canine, grown through the lip in a left-hand spiral, packed with ten million nerve endings. It is a sense organ." },
  beluga: { d: "Carnivore — fish, squid, crustaceans", h: "Arctic and sub-Arctic seas and estuaries", s: "LC", f: "Nicknamed the sea canary for its chirping, and it is one of very few whales that can turn its head — its neck vertebrae are unfused." },
  vaquita: { d: "Carnivore — small fish and squid", h: "A single corner of the northern Gulf of California. Nowhere else on earth.", s: "CR", f: "The most endangered marine mammal. Around ten remain. They drown in gillnets set illegally for totoaba, whose swim bladder sells for more than its weight in gold." },
  bottlenose: { d: "Carnivore — fish and squid, found by echolocation", h: "Warm and temperate seas worldwide", s: "LC", f: "They have signature whistles — names, effectively — and answer to them. Some use sponges as tools, a trick passed from mother to daughter." },
  greatwhite: { d: "Carnivore — seals, sea lions, fish", h: "Cool coastal waters worldwide", s: "VU", f: "It can sense the electric field of a heartbeat. It is not a man-eater: nearly all bites are one exploratory taste, and it leaves. We kill about 100 million sharks a year; they kill about 5 of us." },
  whaleshark: { d: "Filter feeder — plankton and small fish", h: "Warm oceans worldwide", s: "EN", f: "The largest fish alive, up to 18m, with about 3,000 tiny useless teeth. Its skin pattern is unique like a fingerprint, and researchers identify individuals with software written to map stars." },
  mantaray: { d: "Filter feeder — zooplankton", h: "Tropical and temperate ocean", s: "VU", f: "It has the largest brain of any fish and appears to recognise itself in a mirror — a test most animals fail." },
  seaotter: { d: "Carnivore — urchins, crabs, clams, smashed open with a rock", h: "Kelp forests of the North Pacific", s: "EN", f: "It has up to a million hairs per square inch — the densest fur on earth, because it has no blubber. Remove otters and urchins eat the kelp forest to a desert. This actually happened, and it reversed when they came back." },
  octopus: { d: "Carnivore — crabs, clams, fish", h: "Coastal North Pacific, dens in rock", s: "LC", f: "Three hearts, blue blood, and two thirds of its neurons in its arms — each arm partly thinks for itself. It can taste with its skin and solve a puzzle box." },
  // ---- other famous ----
  africanelephant: { d: "Herbivore — grass, bark, roots; up to 150kg a day", h: "Savanna, forest and desert margins across sub-Saharan Africa", s: "EN", f: "They mourn. Elephants return to the bones of their dead and touch them. They also talk in infrasound below human hearing, across kilometres, through the ground." },
  giraffe: { d: "Browser — acacia leaves, thorns and all", h: "African savanna and open woodland", s: "VU", f: "Seven neck vertebrae — the same number as you. Its heart weighs 11kg to push blood up, and its blood vessels are valved so it doesn't black out when it lifts its head." },
  hippo: { d: "Herbivore — grass, grazed on land at night", h: "Rivers and lakes of sub-Saharan Africa", s: "VU", f: "It sweats a red fluid that works as sunscreen and antibiotic. It cannot swim — it walks along the riverbed." },
  whiterhino: { d: "Grazer — short grass, cropped with a wide square lip", h: "African grassland", s: "NT", f: "'White' is a mistranslation of the Afrikaans 'wyd', meaning wide — for the lip. The southern subspecies came back from about 50 animals. The northern one is down to two." },
  pangolin: { d: "Insectivore — ants and termites", h: "Forest and savanna in Africa and Asia", s: "CR", f: "The only mammal covered in scales — made of keratin, like your fingernails. It is the most trafficked mammal on earth, for those scales, which do nothing." },
  platypus: { d: "Carnivore — insect larvae, shrimp, worms from the riverbed", h: "Freshwater rivers of eastern Australia and Tasmania", s: "NT", f: "It lays eggs, sweats milk, has no stomach, hunts with electroreception with its eyes shut, and the males have venomous ankle spurs. The first specimen sent to London was assumed to be a hoax." },
  axolotl: { d: "Carnivore — worms, insects, small fish", h: "The canals of Lake Xochimilco, Mexico City. Nowhere else in the wild.", s: "CR", f: "It never grows up — it keeps its gills and stays aquatic for life. It can regrow limbs, spinal cord, heart and parts of its brain. There are millions in aquariums and possibly fewer than a thousand in the wild." },
  kakapo: { d: "Herbivore — leaves, seeds, fruit, rimu berries", h: "A few predator-free islands off New Zealand", s: "CR", f: "The world's only flightless parrot, and the heaviest. Males boom from a bowl in the earth all night to attract females. Every living bird has a name and a health record; there are around 250." },
  monarch: { d: "Nectarivore as an adult; milkweed only as a caterpillar", h: "North America, with the eastern population overwintering in Mexican fir forest", s: "VU", f: "No single butterfly completes the round trip. It takes several generations, and the great-grandchildren return to the same trees their great-grandparents left." },
  honeybee: { d: "Nectar and pollen", h: "Worldwide, wild and managed", s: "DD", f: "A returning forager dances to tell the hive where flowers are — the angle of the waggle encodes the direction relative to the sun, and the duration encodes the distance. It is a symbolic language." },
  emperorpenguin: { d: "Piscivore — fish, krill, squid", h: "Antarctic sea ice", s: "NT", f: "The only animal that breeds in the Antarctic winter. Males balance the egg on their feet for 65 days in −60°C without eating, and huddle in a rotating scrum so nobody stays on the cold edge forever." },
  // ---- domestics ----
  housecat: { d: "Obligate carnivore — it must eat meat; it cannot make taurine itself", h: "Everywhere humans are", s: "DOM", f: "Cats domesticated themselves. Grain stores drew rodents, rodents drew African wildcats, and the boldest ate best. Every house cat descends from Felis lybica, which still lives wild today." },
  dog: { d: "Omnivore — the one true carnivore that evolved to digest our starch", h: "Everywhere humans are", s: "DOM", f: "The first animal we ever domesticated, at least 15,000 years ago — before farming, before writing. Dogs read human pointing and eye contact better than chimpanzees do." },
  husky: { d: "Omnivore", h: "Bred by the Chukchi of northeastern Siberia; now worldwide", s: "DOM", f: "Built to pull light loads enormous distances on very little food. It can switch its metabolism during exercise in a way no other mammal manages. It will run away from you — it was never bred to stay." },
  savannahcat: { d: "Obligate carnivore", h: "A domestic hybrid; no wild population", s: "DOM", f: "A serval crossed with a house cat. An F1 can clear two metres from standing and needs to. Many are surrendered at around two years old, when they stop being kittens and start being wildcats in a flat." },
};

// Which zones and areas does a species actually live in? Computed from the world
// itself, so it is always true even after the map changes.
const WHERE = (() => {
  const out = {};
  Object.entries(MAPS).forEach(([mk, m]) => {
    const seen = new Set();
    ["pool", "poolN", "poolWater"].forEach((p) => (m[p] || []).forEach(([sp, w]) => { if (w > 0) seen.add(sp); }));
    if (m.legend) seen.add(m.legend);
    seen.forEach((sp) => { (out[sp] = out[sp] || []).push({ k: mk, n: m.name, z: m.zone, lvl: m.lvl }); });
  });
  return out;
})();

// Human-readable landscape names for the zones the game actually uses
const ZONE_NAME = {
  savanna: "Savanna", wetland: "Wetland", jungle: "Rainforest", desert: "Desert", highveld: "Highveld",
  alpine: "Alpine", volcanic: "Volcanic coast", grove: "Old-growth forest", cavezone: "Caves", town: "Towns",
  canopyz: "Rainforest canopy", outbackz: "Outback", savannaz: "Savanna", tundraz: "Tundra", taigaz: "Taiga",
  reefz: "Coral reef", oceanz: "Open ocean", abyssz: "Deep sea", kelpz: "Kelp forest", polarz: "Polar sea",
  fossil: "The Fossil Rift", rift: "The Myth Rifts", vigilz: "The Vigil", hopez: "The Vigil — What We Kept",
  hearth: "Hearthside", summit: "The Citadel",
};
