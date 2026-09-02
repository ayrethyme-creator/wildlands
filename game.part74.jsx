// ---------- Part 74: THE BREEDING CENTRE AND THE LAST OF THE KEPT ----------
// Twenty-two species: the sixteen that finish Terrane's Breeding Centre at 50,
// and the six that finish The Kept. Both sets have been promises in
// design/PENDING_MOVES.txt since 2026-08-26.
//
// TWO KINDS OF ANIMAL LIVE IN THIS FILE and they are not the same thing.
//
// The BREEDING CENTRE holds animals people made - breeds, morphs and lines that
// do not exist without us. Their status is DOM, because a Munchkin has no wild
// population to assess.
//
// THE KEPT also holds four animals that are WILD SPECIES people keep: a bearded
// dragon, a corn snake, a leopard gecko and a Russian tortoise are captive-bred
// but not domesticated, and each still has a real population and a real Red List
// listing. So they carry the status of the animal in the wild - and the Russian
// tortoise's is Vulnerable, which is worth a reader noticing on a pet-shop shelf.
// The dom flag files them in The Kept; the status tells the truth about them.
//
// Neither set is placed in a wild encounter pool. They are not out there.

const P74 = [];
const P74KEPT = [];

Object.assign(DEX, (() => {
  const bred = (k, n, t, b, c, org) => { P74.push(k); return { [k]: { n, art: k, t, b, c, org, breed: true } }; };
  const kept = (k, n, t, b, c, org) => { P74KEPT.push(k); return { [k]: { n, art: k, t, b, c, org, dom: true } }; };
  return Object.assign({},
    // ---- The Breeding Centre: cats ----
    bred("americancurl", "American Curl", ["Predator", "Night"], { h: 42, a: 42, d: 36, s: 54 }, 0.4, "breed, 1981"),
    bred("manx", "Manx", ["Predator", "Swift"], { h: 46, a: 44, d: 40, s: 52 }, 0.4, "breed, Isle of Man"),
    bred("munchkin", "Munchkin", ["Predator", "Swift"], { h: 40, a: 40, d: 36, s: 46 }, 0.42, "breed, 1983"),
    bred("cornishrex", "Cornish Rex", ["Predator", "Swift"], { h: 38, a: 42, d: 34, s: 62 }, 0.42, "breed, 1950"),
    bred("burmese", "Burmese", ["Predator", "Night"], { h: 44, a: 46, d: 40, s: 56 }, 0.4, "breed, 1930"),
    bred("egyptianmau", "Egyptian Mau", ["Predator", "Swift"], { h: 42, a: 48, d: 38, s: 72 }, 0.38, "breed, 1950s"),

    // ---- The Breeding Centre: dogs ----
    bred("anatolianshepherd", "Anatolian Shepherd", ["Predator", "Armor"], { h: 68, a: 60, d: 62, s: 44 }, 0.28, "landrace, Anatolia"),
    bred("bullterrier", "Bull Terrier", ["Predator", "Armor"], { h: 54, a: 56, d: 48, s: 48 }, 0.34, "breed, 1800s"),
    bred("frenchbulldog", "French Bulldog", ["Predator", "Wild"], { h: 44, a: 40, d: 44, s: 26 }, 0.4, "breed, 1800s"),

    // ---- The Breeding Centre: everything else ----
    bred("domesticfox", "Domestic Fox", ["Predator", "Swift"], { h: 46, a: 46, d: 40, s: 62 }, 0.34, "experiment, 1959"),
    bred("fancypigeon", "Fancy Pigeon", ["Aerial", "Wild"], { h: 34, a: 30, d: 32, s: 54 }, 0.5, "breeds, centuries"),
    bred("englishbudgie", "English Budgie", ["Aerial", "Wild"], { h: 26, a: 26, d: 26, s: 48 }, 0.5, "show line"),
    bred("angorarabbit", "Angora Rabbit", ["Wild", "Burrow"], { h: 38, a: 24, d: 34, s: 40 }, 0.5, "breed, centuries"),
    bred("ballpythonmorph", "Ball Python Morph", ["Predator", "Wild"], { h: 44, a: 44, d: 42, s: 30 }, 0.42, "morphs, 1990s"),
    bred("bredaxolotl", "Bred Axolotl", ["Aquatic", "Wild"], { h: 40, a: 34, d: 36, s: 26 }, 0.46, "line, 1860s"),
    bred("silkworm", "Silkworm", ["Bug", "Wild"], { h: 18, a: 12, d: 24, s: 8 }, 0.6, "domestic, ~5,000 years"),

    // ---- The Kept: two dogs that are not breeds ----
    kept("mutt", "Mutt", ["Predator", "Swift"], { h: 48, a: 46, d: 44, s: 54 }, 0.42, "no breed at all"),
    kept("pitbull", "Pit Bull", ["Predator", "Armor"], { h: 56, a: 56, d: 50, s: 50 }, 0.36, "a shape, not a breed"),

    // ---- The Kept: four wild species people keep ----
    kept("beardeddragon", "Bearded Dragon", ["Wild", "Armor"], { h: 38, a: 36, d: 42, s: 32 }, 0.5, "wild species, kept"),
    kept("cornsnake", "Corn Snake", ["Wild", "Swift"], { h: 34, a: 38, d: 32, s: 46 }, 0.5, "wild species, kept"),
    kept("leopardgecko", "Leopard Gecko", ["Wild", "Night"], { h: 30, a: 32, d: 32, s: 40 }, 0.52, "wild species, kept"),
    kept("russiantortoise", "Russian Tortoise", ["Armor", "Burrow"], { h: 46, a: 22, d: 60, s: 12 }, 0.46, "wild species, kept"),
  );
})());

Object.assign(INFO, {
  // ---- The Breeding Centre: cats ----
  americancurl: { taxon: "Felis catus · a breed, from a single spontaneous mutation", d: "Obligate carnivore", h: "A domestic breed; no wild population", s: "DOM",
    f: "Every American Curl alive descends from one stray. A black kitten with strangely folded ears turned up at a house in Lakewood, California in 1981; she was taken in and named Shulamith, and half her litter had the same ears. The mutation is dominant, so it only takes one parent to pass it on. The ears are straight at birth and curl over the first few days, and a breeder cannot tell what a kitten will be for about a week." },
  manx: { taxon: "Felis catus · a breed defined by a mutation that is lethal in double dose", d: "Obligate carnivore", h: "A domestic breed, from the Isle of Man", s: "DOM",
    f: "The taillessness is a dominant mutation, and a kitten that inherits it from both parents dies before birth — so a Manx can never be bred true and is always crossed with a tailed cat. Even one copy affects the whole spine, and some cats have problems with the hind legs, bladder and bowel serious enough to have their own name, Manx syndrome. It is the clearest case in the breed list of a look that carries a cost." },
  munchkin: { taxon: "Felis catus · a breed defined by short legs, from a dominant mutation", d: "Obligate carnivore", h: "A domestic breed, recognised from 1983", s: "DOM",
    f: "Its legs are short for the same class of reason a dachshund's are — a dominant mutation affecting how the long bones grow — and, like the Manx, two copies of it are lethal before birth. The breed was controversial from the moment it was registered, and one judge resigned over it. In practice the cats climb and run perfectly well; the argument was never about whether they cope, but about deliberately breeding for a skeletal change." },
  cornishrex: { taxon: "Felis catus · a breed, from one barn kitten in 1950", d: "Obligate carnivore", h: "A domestic breed, from Cornwall", s: "DOM",
    f: "A cat has three kinds of hair. This one only has the softest, shortest layer — no guard hairs at all — and even that is curled, including the whiskers, which bend and sometimes break. It came from a single curly kitten in a Cornish barn litter in 1950, named Kallibunker, and every Cornish Rex descends from him. Owners describe the coat as warm to the touch, which it is: there is very little of it between hand and skin." },
  burmese: { taxon: "Felis catus · a breed, from one cat carried out of Burma in 1930", d: "Obligate carnivore", h: "A domestic breed", s: "DOM",
    f: "Effectively every Western Burmese descends from one brown female called Wong Mau, brought to San Francisco in 1930 and bred to a Siamese because there was nothing else close. Her offspring were studied for years to work out what she actually was, and the answer turned out to be a hybrid carrying a version of the Siamese gene that darkens the coat evenly rather than only at the points." },
  egyptianmau: { taxon: "Felis catus · a naturally spotted breed", d: "Obligate carnivore", h: "A domestic breed, from Egyptian street cats", s: "DOM",
    f: "One of very few cat breeds whose spots are natural rather than bred in from a wildcat cross — and the spots are on the SKIN as well as the fur, so a shaved Mau is still spotted. It is often credited as the fastest domestic cat, at around forty-eight kilometres an hour, helped by a flap of skin at the flank that lets the hind leg reach further back. Cats painted on Egyptian tomb walls are spotted in the same way, which is suggestive and is not proof." },

  // ---- The Breeding Centre: dogs ----
  anatolianshepherd: { taxon: "Canis familiaris · an ancient Anatolian livestock-guarding landrace", d: "Omnivore, on a working dog's diet", h: "A working landrace; farms and rangeland", s: "DOM",
    f: "It is not a herding dog. It is raised among the animals from puppyhood and simply lives with them, treating the flock as its own and standing between it and whatever arrives — a job it has done in Anatolia for thousands of years. Since 1994 the Cheetah Conservation Fund has placed these dogs on Namibian farms, and it works on the predator's behalf: farmers who stop losing goats stop shooting cheetahs. Livestock losses fall by eighty to a hundred percent." },
  bullterrier: { taxon: "Canis familiaris · a breed whose defining feature is recent", d: "Omnivore, on a working dog's diet", h: "A domestic breed, from 19th-century England", s: "DOM",
    f: "The egg-shaped head everyone knows is not old. Photographs and paintings from the breed's first decades show an ordinary terrier skull with a clear stop between muzzle and forehead, and the downward curve was bred in over the twentieth century until the profile was an unbroken arc. It is one of the plainest before-and-after records of a breed standard reshaping an animal, because the earlier dogs were photographed." },
  frenchbulldog: { taxon: "Canis familiaris · a brachycephalic breed", d: "Omnivore, on a small dog's diet", h: "A domestic breed; among the most popular dogs in the world", s: "DOM",
    f: "It became the most registered dog in Britain and the United States while carrying the consequences of the face it is bred for. A flattened skull leaves the same amount of soft tissue in a much shorter airway, so a large share of these dogs cannot breathe easily, and their hips and heads mean most litters are delivered by caesarean. Several countries have moved to restrict breeding the extreme form. It is the clearest live example of a popular animal and a welfare problem being the same animal." },

  // ---- The Breeding Centre: everything else ----
  domesticfox: { taxon: "Vulpes vulpes · the Novosibirsk tame line, bred from 1959", d: "Omnivore, on a fox's diet", h: "An experimental line at an institute in Siberia; not a wild population", s: "DOM",
    f: "Dmitry Belyayev's team selected silver foxes for one thing only: whether a cub would approach a hand. Nothing about appearance was chosen. Within a few dozen generations the tame line had floppy ears, curled tails, piebald white patches, shorter muzzles and a longer breeding season — the same cluster that separates dogs from wolves and cattle from aurochs. Selecting for temperament alone appeared to drag the rest along with it, and biologists are still arguing about why." },
  fancypigeon: { taxon: "Columba livia · hundreds of breeds of one species", d: "Granivore — seed and grain", h: "Domestic; the wild form is the rock dove, on cliffs and in cities", s: "DOM",
    f: "Fantails, pouters, tumblers, jacobins — hundreds of breeds so different that a naturalist shown only the birds would place them in separate genera, and every one is the same species as the pigeon on the pavement. Darwin kept them, bred them, and put them in the FIRST chapter of On the Origin of Species, before he made any argument at all, because pigeon fanciers were living proof that selection can reshape an animal." },
  englishbudgie: { taxon: "Melopsittacus undulatus · the show line of the budgerigar", d: "Granivore — grass seed", h: "A show line; the wild budgerigar lives in arid inland Australia", s: "DOM",
    f: "The same species as the wild budgerigar of the Australian interior, bred for the show bench into something nearly twice the weight, with a domed head and long feathering over the face that can cover the eyes. It is calmer and slower than a pet-type budgie, which owners often like. It also lives noticeably less long — usually well under ten years, where a wild-type budgie can pass fifteen." },
  angorarabbit: { taxon: "Oryctolagus cuniculus · one of the oldest domestic rabbit breeds", d: "Herbivore — hay above all", h: "Domestic; the wild European rabbit is Endangered in its native range", s: "DOM",
    f: "Its coat never stops growing. A wild rabbit moults; this one has been bred out of the ability to shed properly, so it has to be harvested every few months or the wool mats to the skin. Rabbits groom by licking, and an Angora swallows the wool it cannot shed — it has no way to bring up a hairball, so a blocked gut is a genuine and common danger. The animal cannot survive without a person holding a comb." },
  ballpythonmorph: { taxon: "Python regius · thousands of selectively bred colour and pattern genes", d: "Carnivore — rodents", h: "Captive lines; the wild ball python lives in West and Central African grassland", s: "DOM",
    f: "Not a breed but a catalogue. Keepers have identified and combined thousands of named mutations affecting colour and pattern, and combinations are traded like currency. It is also an honest lesson in what selective breeding costs: the spider morph, one of the most popular, is inseparable from a neurological wobble that affects the snake's balance, and it cannot be bred out because the gene that makes the pattern is the gene that causes it." },
  bredaxolotl: { taxon: "Ambystoma mexicanum · the pale laboratory and pet line", d: "Carnivore — worms and small invertebrates", h: "Tanks worldwide. The wild animal survives only in the canals of Xochimilco", s: "DOM",
    f: "There are hundreds of thousands in tanks and laboratories and almost none left in the wild — the species is Critically Endangered in the canals of Xochimilco while being one of the most common amphibians in captivity. Most captive animals trace back to a shipment sent to Paris in the 1860s. It stays a larva for life, keeping its gills and never going to land, and it regrows amputated limbs, jaws and parts of its brain, which is why the laboratories wanted it." },
  silkworm: { taxon: "Bombyx mori · a species that does not exist in the wild at all", d: "Herbivore — mulberry leaves, and essentially nothing else", h: "Nowhere wild. It exists only where people rear it", s: "DOM",
    f: "The most completely domesticated animal there is. Five thousand years of breeding have left a moth that cannot fly, cannot see well enough to find a mate, has lost its fear of predators and cannot survive a day outside a tray — and there is no wild population anywhere, only its ancestor Bombyx mandarina, which is a different species now. One cocoon is a single thread up to nine hundred metres long, and unwinding it kills the moth inside." },

  // ---- The Kept: two dogs that are not breeds ----
  mutt: { taxon: "Canis familiaris · no breed at all, which is the point", d: "Omnivore, on a dog's diet", h: "Wherever people are. The most common kind of dog on earth", s: "DOM",
    f: "Most dogs in the world are this, and it is not a lesser version of anything. A closed studbook concentrates whatever recessive faults the founders happened to carry, which is why particular breeds have particular diseases; a mixed-breed dog is far less likely to inherit two copies of any of them. The trade-off is honest: you cannot predict its size, coat or temperament, because nobody chose them." },
  pitbull: { taxon: "Canis familiaris · not one breed, but several plus anything resembling them", d: "Omnivore, on a dog's diet", h: "Domestic", s: "DOM",
    f: "There is no such breed. The word covers at least three registered breeds and, in practice, any short-coated dog with a broad head — and that last part is where it falls apart. Shelter staff asked to identify pit bulls by sight disagree with each other and with DNA tests a great deal of the time, labelling dogs with no relevant ancestry and missing dogs that have it. Laws written about the word therefore apply to whatever a person thinks a dog looks like." },

  // ---- The Kept: four wild species people keep ----
  beardeddragon: { taxon: "Pogona vitticeps · one of 8 living Pogona species", d: "Omnivore — insects when young, more plants as an adult", h: "Arid woodland and scrub of inland eastern Australia", s: "LC",
    f: "One of eight living Pogona dragons, and it talks with its arms. A smaller or subordinate animal lifts a front leg and rotates it in a slow circle — a signal that says it has seen the other lizard and is not challenging it — while a dominant one bobs its head. Australia stopped exporting its native reptiles decades ago, so essentially every bearded dragon in the world descends from animals that left before the doors closed." },
  cornsnake: { taxon: "Pantherophis guttatus · one of about 10 Pantherophis species", d: "Carnivore — rodents, killed by constriction", h: "Fields, pine woods and abandoned buildings of the southeastern United States", s: "LC",
    f: "One of about ten Pantherophis ratsnakes, and the name is probably a compliment paid by farmers: it was found in and around corn cribs, where it was hunting the rats and mice eating the grain. The belly is checked in black and white like flint corn, which is the other explanation. It is harmless, it does the same job in a barn that a cat does, and it has become the snake most often recommended to someone who has never kept one." },
  leopardgecko: { taxon: "Eublepharis macularius · one of 6 living Eublepharis species", d: "Insectivore — crickets, worms and beetles", h: "Rocky dry grassland and desert of Afghanistan, Pakistan and northwest India", s: "LC",
    f: "One of six living Eublepharis geckos, and it has eyelids — which almost no gecko does. Most geckos have a fixed clear scale over the eye and lick it clean with the tongue; this one blinks instead. It also has no adhesive toe pads, so it does not climb glass. It stores fat in its tail, and if something grabs the tail it drops it and grows a replacement that is shorter, fatter and never quite the same shape." },
  russiantortoise: { taxon: "Testudo horsfieldii · one of 5 living Testudo species", d: "Herbivore — broadleaf weeds and flowers, in a short spring window", h: "Dry steppe and rocky slopes from Iran and Afghanistan through Central Asia", s: "VU",
    f: "One of five living Testudo tortoises, and it is the one on every pet-shop shelf while being listed as Vulnerable in the wild. Its year is extraordinary: the steppe is only green for a few months, so it feeds hard, then digs in and spends the rest — often nine months or more — underground, waiting. It is also the only tortoise with four claws on each front foot instead of five, which is the quickest way to know one." },
});

// Photographic sprites for all twenty-two. Each matching PNG is present in art/.
Object.assign(PHOTO_ART, Object.fromEntries(P74.concat(P74KEPT).map((k) => [k, true])));

/* Learnsets only. These are NOT placed in a wild encounter pool, on purpose:
   a Munchkin, a silkworm and a show budgie are not out in the world to be met,
   and the four wild species here are pet-shop stock rather than a population.
   part68 warns loudly about a species with nowhere to live; this is the case
   where nowhere is the correct answer, so it is stated rather than warned. */
{
  const ALL = P74.concat(P74KEPT);
  let built = 0; const thin = [];
  ALL.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  console.log(`[part74] the breeding centre and the kept: ${ALL.length} species`
    + ` | bred: ${P74.length} | kept: ${P74KEPT.length} | learnsets: ${built}`
    + ` | wild placement: none, deliberately`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : ""));
}
