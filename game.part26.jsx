// ---------- CHAPTER XXI — Part 26: FIELD NOTES ----------
// 100 more animals get their entry. Rules unchanged: nothing invented, nothing
// embellished. Where I wasn't confident of an IUCN status I left the animal out
// of this batch rather than guess at it.

const note = (k, d, h, s, f) => { if (DEX[k]) INFO[k] = { d, h, s, f }; };

// ===== the small cats =====
note("blackfootedcat", "Carnivore — mice, larks, anything smaller than itself", "Dry grassland and scrub of southern Africa", "VU",
  "Africa's smallest cat, about 2kg, and the deadliest cat on earth: it makes a kill roughly every 50 minutes and succeeds around 60% of the time, where a lion manages maybe 25%. It hunts all night and walks up to 30km doing it. It cannot be tamed and has never been kept successfully as a pet.");
note("rustyspottedcat", "Carnivore — rodents, birds, lizards", "Forest and scrub of India and Sri Lanka", "NT",
  "The smallest cat in the world — an adult weighs about 1.5kg and would fit in cupped hands. Its eyes are six times more light-sensitive than ours. Almost everything else about it is unknown, because it is nocturnal, tiny, and lives in dense scrub.");
note("margay", "Carnivore — monkeys, birds, lizards, fruit occasionally", "Rainforest canopy, Central and South America", "NT",
  "Its ankles rotate 180 degrees, so it can run head-first down a trunk and hang from a branch by one hind foot. It hunts entirely in the canopy. It has been recorded imitating the call of a baby tamarin to lure the adults closer — the only wild cat ever documented mimicking prey.");
note("kodkod", "Carnivore — rodents, birds, insects", "Temperate rainforest of Chile and Argentina", "VU",
  "The smallest cat in the Americas, roughly 2kg, and it lives almost nowhere else — the Valdivian forests of Chile are nearly its whole world. It is a superb climber and shelters in ravines and bamboo thickets. Farmers shoot it for taking chickens; the forest is going for plantations.");
note("andeancat", "Carnivore — mostly mountain viscacha", "Rocky high Andes above 3,000m", "EN",
  "One of the rarest and least-known cats alive — fewer than 1,500 are thought to remain, and it was not photographed in the wild until 1998. It is sacred in Andean tradition and appears in ceremonies as a bringer of rain and fertility. Its life depends almost entirely on one prey animal, the viscacha.");
note("marbledcat", "Carnivore — birds, squirrels, rodents", "Southeast Asian rainforest", "NT",
  "It looks like a clouded leopard shrunk to house-cat size and it lives in the canopy, with a tail as long as its body for balance. It has the longest canine teeth relative to skull size of any small cat. Almost nothing is known about how it breeds in the wild.");
note("jungle_cat", "Carnivore — rodents, frogs, birds", "Wetland, reedbed and farmland from Egypt to Vietnam", "LC",
  "Despite the name it prefers wetlands and reedbeds, not jungle. The Egyptians mummified them alongside the domestic cats — some of the mummies in museum collections are this species. It is one of the few cats that regularly hunts in daylight.");
note("bobcat", "Carnivore — rabbits, rodents, deer when it can", "Almost everywhere in North America", "LC",
  "It survives in every US state but Hawaii, including the suburbs — most people who live near one will never see it. It can take a deer many times its weight, though rabbits are most of its diet. That short 'bobbed' tail is the whole of its name.");
note("asiangoldencat", "Carnivore — rodents, birds, small deer", "Forests of Southeast Asia", "NT",
  "It comes in so many colours — golden, grey, cinnamon, black, spotted — that people once assumed they were several species. In parts of its range it is called the 'fire cat'. It is one of the least-studied cats in Asia.");

// ===== the wild dogs =====
note("ethiopianwolf", "Carnivore — almost entirely grass rats and mole rats", "Afroalpine moorland of Ethiopia, above 3,000m", "EN",
  "Africa's rarest carnivore and the world's rarest wolf: around 500 remain, in a handful of isolated mountain pockets. It lives in packs but hunts alone, digging rodents out of the moorland. Rabies from domestic dogs has repeatedly torn through entire packs.");
note("bushdog", "Carnivore — pacas, agoutis, hunted in packs", "Rainforest and wet savanna, Central and South America", "NT",
  "It looks like something between a dog and an otter, and it hunts in packs that can bring down a paca many times a single dog's size. It has webbed feet and swims well. It was described from fossils first — the discoverer assumed it was extinct, and only later found it was still out there.");
note("bateared", "Insectivore — up to 80% harvester termites", "Short-grass savanna of Africa", "LC",
  "Those enormous ears are listening for termites chewing underground. It has more teeth than almost any other placental mammal — up to 50 — and a special jaw muscle that lets it chew insects at astonishing speed. A pair can eat over a million termites in a year.");
note("raccoondog", "Omnivore — rodents, frogs, fruit, carrion", "Forest and wetland of East Asia; introduced across Europe", "LC",
  "It looks like a raccoon and is not one — it is a genuine canid, more closely related to foxes. It is the only dog in the world that hibernates. In Japan it is the tanuki of folklore, a shapeshifter and trickster.");
note("culpeo", "Carnivore — rodents, rabbits, lizards", "Andes and Patagonian steppe", "LC",
  "South America's second-largest canid, and like all South American 'foxes' it is not a true fox at all — it is closer to wolves and jackals. Darwin collected one on the voyage of the Beagle. It readily takes introduced European hares, which is most of its diet in some regions.");
note("coyote", "Omnivore — rodents, deer, fruit, garbage", "Every habitat in North America, including cities", "LC",
  "We spent a century trying to exterminate it and it responded by expanding into every state and most major cities. Persecution actually increases their numbers: break up a pack and the females all breed instead of just the alpha. There are coyotes living in Chicago and New York right now.");
note("stripedhyena", "Scavenger — carrion, bones, fruit, insects", "Dry scrub from North Africa to India", "NT",
  "The hyena of the Bible and of Middle Eastern folklore, and far less social than the spotted kind — it usually forages alone. Its jaws crush bone that nothing else can process, which makes it a genuine cleaner of the landscape. It is killed almost everywhere on sight, largely for superstition.");
note("brownhyena", "Scavenger — carrion, seal pups, wild melons for water", "Southern African desert, especially the Namib coast", "NT",
  "The rarest hyena, and the one that patrols the Skeleton Coast scavenging seal carcasses. It gets almost all its water from tsamma melons. It can smell a carcass from many kilometres and will walk all night to reach it.");

// ===== the mustelids and their relatives =====
note("wolverine", "Carnivore and scavenger — carrion, rodents, sometimes caribou", "Boreal forest and tundra of the far north", "LC",
  "A 15kg animal with a documented history of driving bears off kills. Its jaws and teeth are built to shear frozen meat and crack frozen bone — it can eat what nothing else can, which is the whole point of being a wolverine in winter. It needs deep spring snow to den in, which is a problem that is getting worse.");
note("giantotter", "Carnivore — fish, mostly; caiman occasionally", "Rivers of the Amazon and Pantanal", "EN",
  "Nearly two metres long and intensely social — families of up to eight fish together, and they are loud, with a vocabulary of at least nine distinct calls. Locals call it lobo del río, river wolf. They were hunted to near-extinction for their pelts by the 1970s and have never fully returned.");
note("ferret", "Carnivore — prairie dogs, almost exclusively", "Prairie of North America", "EN",
  "It was declared extinct twice. In 1981 a ranch dog in Wyoming brought a dead one home, and the last 18 animals on earth were taken into captivity — every black-footed ferret alive today descends from seven of them. Its whole life is prairie dogs: it eats them, and it lives in their burrows.");
note("fisher", "Carnivore — snowshoe hares, squirrels, porcupines", "Dense forest of North America", "LC",
  "One of very few animals that routinely kills porcupines: it attacks the face, over and over, until the porcupine can no longer defend itself. It does not fish. It was trapped out of much of its range and has been quietly returning.");
note("marten", "Omnivore — voles, birds, eggs, berries", "Old-growth conifer forest of Europe and Asia", "LC",
  "It hunts squirrels through the canopy and can turn its hind feet almost backwards to come down a trunk head-first. It needs old forest with cavities to den in, which is exactly the forest we cut. In summer, a surprising amount of its diet is fruit.");
note("stoat", "Carnivore — rodents, rabbits far larger than itself", "Northern Europe, Asia and North America", "LC",
  "It turns white in winter and is then called ermine — the fur that trimmed royal robes for centuries. It kills rabbits several times its weight with a bite to the base of the skull. Introduced to New Zealand to control rabbits, it has been catastrophic for the birds instead.");
note("weasel", "Carnivore — voles, almost entirely", "Grassland and farmland across the northern hemisphere", "LC",
  "The smallest carnivore on earth — some males weigh 25 grams. That tiny body loses heat so fast it must eat around a third of its own weight every day, and it cannot afford to stop hunting. It can follow a vole down its own tunnel.");
note("tayra", "Omnivore — fruit, rodents, birds", "Forests from Mexico to Argentina", "LC",
  "A large tree-climbing weasel, and one of the very few animals known to plan ahead with food: it has been seen picking unripe plantains, hiding them, and coming back days later once they have ripened. That is future planning, which we used to think only primates did.");
note("skunk", "Omnivore — insects, grubs, eggs, fruit", "North America, common in suburbs", "LC",
  "The spray is sulphur compounds fired from two nozzles it can aim, accurately, to about three metres. It gives every warning it can first — stamping, hissing, a full handstand — because refilling takes over a week and leaves it defenceless. It also eats a lot of wasps and yellowjacket nests.");
note("honeybadger", "Omnivore — snakes, honey, larvae, tortoises, anything", "Africa, the Middle East and India", "LC",
  "Its skin is loose enough that when something grabs it, it can turn round inside its own hide and bite back. It has some resistance to snake venom and will eat a puff adder, sleep off the bite, and wake up to finish it. It has been recorded using tools and unpicking latches.");

// ===== primates =====
note("gelada", "Grazer — grass, over 90% of the diet", "High grassland of the Ethiopian plateau", "LC",
  "The only truly grass-eating primate alive: it sits and picks grass blades all day with the finest thumb-to-finger precision of any monkey. It lives in some of the largest gatherings of any primate — bands of hundreds. The bare red patch on the chest is what the males display instead of a face.");
note("proboscis", "Folivore — leaves and unripe fruit", "Mangrove and riverine forest of Borneo", "EN",
  "That nose is a resonator: the bigger it is, the deeper the call, and the females choose accordingly. It has a chambered stomach with bacteria to ferment leaves, like a cow, and ripe fruit can actually kill it — the sugars ferment too fast. It is a strong swimmer with partly webbed feet.");
note("uakari", "Frugivore — hard unripe seeds, mostly", "Flooded forest of the western Amazon", "VU",
  "The scarlet face has no pigment — it is bare skin over dense capillaries, and it goes pale when the animal is ill. Malaria drains the colour, so the troop can see who is sick, and a bright face is a sign of health to a mate. They live in forest that floods so deeply the trees stand in metres of water.");
note("indri", "Folivore — leaves, mostly of a few tree species", "Rainforest of eastern Madagascar", "CR",
  "The largest lemur alive, and it sings — families hold long, wailing duets that carry for kilometres, and researchers have found rhythm in them of a kind otherwise known only from human music. It has never once bred successfully in captivity. If its forest goes, it goes.");
note("sifaka", "Folivore — leaves, flowers, fruit", "Forests of Madagascar", "CR",
  "Its legs are so specialised for clinging upright to trunks that it cannot walk normally on the ground — so it crosses open ground sideways, in bounding two-footed leaps, arms up. It can jump ten metres between trunks. The name is the sound of its alarm call: 'shif-auk'.");
note("loris", "Omnivore — insects, tree gum, nectar", "Forests of South and Southeast Asia", "VU",
  "The only venomous primate: it raises its arms, licks a gland in its elbow, and mixes the secretion with saliva into a toxin that can cause anaphylaxis in a human. It moves so slowly and quietly that it can take insects that never notice it coming. The pet trade pulls their teeth out with pliers.");
note("snubnosed", "Folivore — lichen, leaves, bark", "High cold forest of China and Vietnam", "EN",
  "It lives higher and colder than any monkey but us — through snow, in forest at 4,000m, eating lichen off the trees when nothing else is available. The odd flat nose may be an adaptation to freezing air. Bands can number several hundred.");
note("siamang", "Frugivore and folivore — fruit and leaves", "Rainforest of Sumatra and Malaysia", "EN",
  "The largest gibbon, and it has a throat sac the size of its own head that it inflates to boom — a pair's duet carries several kilometres through forest. Mated pairs sing together in a coordinated sequence they build over years, and you can hear how long they have been together.");
note("gibbon", "Frugivore — ripe fruit, mostly", "Rainforest canopy of Southeast Asia", "EN",
  "It brachiates — swinging hand over hand — at up to 55km/h, crossing gaps of ten metres, and it has a ball-and-socket wrist no other ape has. Gibbons are the only apes besides us that consistently pair-bond and sing duets. Almost every species is endangered.");
note("tamarin", "Omnivore — fruit, insects, nectar", "Atlantic coastal forest of Brazil", "EN",
  "By the 1970s there were perhaps 200 left in a scrap of forest outside Rio. Zoos bred them, released them, and there are now over 2,000 — one of the great conservation successes, and still entirely dependent on planted forest corridors. Fathers carry the twins; the mother only takes them to nurse.");
note("howler", "Folivore — leaves, mostly", "Forests from Mexico to Argentina", "LC",
  "The loudest land animal in the Americas — a hollow, enlarged hyoid bone in the throat turns the call into a roar you can hear five kilometres away. It is a bluff: howling is how troops avoid fighting over territory. It spends most of the day motionless, because leaves are terrible fuel.");
note("spidermonkey", "Frugivore — ripe fruit", "Rainforest canopy of Central and South America", "EN",
  "Its tail is a fifth limb with a bare gripping pad and its own fingerprint-like ridges — it can pick a grape with it. It has no thumbs, which makes swinging through branches faster. It is one of the most important seed dispersers in the neotropics, so losing it changes the forest itself.");
note("colobus", "Folivore — leaves", "Forests of central and eastern Africa", "LC",
  "It has a chambered stomach that ferments leaves, and no thumb at all — the hand is a hook for swinging. Newborns are pure white and are passed around the whole troop. Its striking black-and-white coat is exactly why it was hunted so heavily for the fur trade.");
note("marmoset", "Gummivore — tree sap, gouged out with its teeth", "Forest and scrub of Brazil", "LC",
  "It has chisel-shaped lower incisors it uses to gouge holes in bark and then comes back to drink the sap that runs — a whole niche almost no other primate exploits. It usually bears twins, and the whole family carries them. An adult can weigh under 400 grams.");

// ===== the marsupials =====
note("numbat", "Insectivore — up to 20,000 termites a day, nothing else", "Eucalypt woodland of Western Australia", "EN",
  "It eats termites and only termites — around 20,000 a day, licked up with a tongue over half the length of its own body. It has no functional jaw muscles for chewing and its teeth are vestigial. Fewer than 1,000 are left in a couple of protected pockets; foxes and cats did the rest.");
note("bilby", "Omnivore — insects, seeds, bulbs, fungi", "Arid Australia", "VU",
  "It digs constantly, and those burrows become shelter for a long list of other desert animals — reptiles, birds, other mammals — which makes it an engineer of its whole ecosystem. Its ears dump heat. Australia now sells chocolate Easter Bilbies instead of rabbits, to raise money for it.");
note("quoll", "Carnivore — birds, reptiles, mammals, carrion", "Forest of eastern Australia and Tasmania", "NT",
  "A spotted marsupial predator that hunts through the canopy as readily as the ground. The cane toad has been devastating for it: a quoll bites one, and the toad's poison kills it. Some populations are being taught toad-aversion with baits that make them sick but not dead.");
note("cuscus", "Folivore — leaves and fruit", "Rainforest of New Guinea and nearby islands", "LC",
  "A slow, thick-furred possum with a prehensile tail and a stare like a startled cat — it is so slow and quiet it is often mistaken for a sloth, which it is not remotely related to. It is a marsupial that filled a sloth's job on the other side of the world. Convergent evolution, twice.");
note("treekangaroo", "Folivore — leaves and fruit", "Rainforest of New Guinea and far north Queensland", "EN",
  "A kangaroo whose ancestors went back up into the trees: the hind legs shortened, the arms thickened, and it climbs. It can leap 9m down to another branch, or 18m to the ground, and land unhurt. It is one of the strangest reversals in mammal evolution.");
note("quokka", "Folivore — grasses and leaves", "Rottnest Island and small pockets of Western Australia", "VU",
  "Its face happens to be shaped in a way that reads to us as a smile, which is entirely an accident and has made it internet-famous. It can survive months without fresh water. On the mainland foxes and cats nearly finished it; it hangs on mostly on islands that never had them.");
note("tasdevil", "Scavenger — carrion, bone and all", "Tasmania", "EN",
  "It has the strongest bite for its size of any living mammal and eats the entire carcass — fur, bone, everything. Since the 1990s a contagious facial cancer, one of only a handful of transmissible cancers known in nature, has killed most of the population. The scream is where the name came from.");
note("sugarglider", "Omnivore — sap, nectar, insects", "Forests of Australia and New Guinea", "LC",
  "It glides up to 50m on a membrane from wrist to ankle, steering with its tail. It is intensely social and lives in family groups of up to seven, and it does not do well alone — which is most of what is wrong with keeping one as a pet. It goes into torpor when food is short.");

// ===== hoofed animals =====
note("okapi", "Folivore — leaves, buds, clay for minerals", "Ituri rainforest of the Congo", "EN",
  "The giraffe's only living relative, and Europeans did not know it existed until 1901 — the Congolese always had. Its tongue is long enough to wash its own eyes and ears. The stripes break its outline in dappled forest light, and a calf can go weeks without defecating, which hides it from predators.");
note("reindeer", "Herbivore — lichen in winter, almost entirely", "Tundra and boreal forest of the far north", "VU",
  "The only deer where both sexes grow antlers, and the only mammal known to see ultraviolet — which turns lichen and wolf fur dark against snow that blazes white. Some herds migrate over 5,000km a year, further than any other land mammal. Their eyes physically change colour between summer and winter.");
note("muskox", "Herbivore — grasses, willow, lichen", "Arctic tundra", "LC",
  "It survived the ice age that took the mammoth. Its underwool, qiviut, is eight times warmer than sheep's wool and finer than cashmere. When wolves come, the herd forms a ring facing outward with the calves inside — which worked perfectly until people arrived with rifles.");
note("moose", "Herbivore — willow, aquatic plants", "Boreal forest of the north", "LC",
  "The largest deer alive: a big bull stands over two metres at the shoulder. It dives for water plants and can hold its breath a full minute, feeding on the bottom of a lake. It is nearly blind, extremely fast, and injures more people in Alaska than bears do.");
note("elk", "Herbivore — grasses and browse", "Mountains and forest of North America and East Asia", "LC",
  "A bull's bugle — a scream that climbs into a whistle — is one of the strangest sounds any deer makes and carries kilometres in autumn. His antlers can weigh 18kg and are grown, used, and dropped every single year. Reintroducing wolves to Yellowstone changed where elk stood, and the willows came back.");
note("bison", "Grazer — grasses", "Plains and forest of North America", "NT",
  "There were tens of millions; by 1889 there were a few hundred. Nearly every bison alive descends from a handful of animals kept by a few ranchers and the Bronx Zoo. They can jump nearly two metres and run at 55km/h, which visitors forget every single year.");
note("zebra", "Grazer — coarse grass others cannot digest", "Savanna and grassland of eastern and southern Africa", "NT",
  "Every stripe pattern is unique, like a fingerprint. The current best evidence is that the stripes deter biting flies — which lose track of the surface as they close in — rather than confusing predators. Foals learn their mother's pattern before they learn anything else.");
note("camel", "Herbivore — thorny scrub, dry grass, salt bush", "Deserts of North Africa, the Middle East and Central Asia", "LC",
  "The hump is fat, not water. It can lose a quarter of its body weight to dehydration and walk it off, then drink 100 litres in ten minutes without harm — its red blood cells are oval and stretch instead of bursting. Its nostrils reclaim water from its own breath.");
note("ibex", "Herbivore — alpine grass and shrubs", "Alps and other high mountain ranges", "LC",
  "It climbs near-vertical dam walls in Italy to lick salt off the stone, on hooves with a hard rim and a soft rubbery centre that grips like a climbing shoe. Kids can follow their mothers up rock faces within days of birth. The Alpine ibex was hunted to about 100 animals and came back from that.");
note("boar", "Omnivore — roots, fungi, carrion, anything", "Forest across Eurasia; introduced worldwide", "LC",
  "Piglets are born striped and lose it. It is one of the most destructive invasive animals on earth where it has been introduced, and one of the most intelligent — it can work latches and remembers where it has been trapped. Nearly every domestic pig on the planet is descended from it.");

// ===== birds =====
note("flamingo", "Filter feeder — algae, brine shrimp, diatoms", "Salt lakes and lagoons", "LC",
  "It is born grey and turns pink from carotenoids in its food — a flamingo fed the wrong diet fades to white. It feeds with its head upside down, pumping water through a bill that filters like a whale's baleen. Some colonies breed on caustic soda lakes hot enough to kill almost anything else.");
note("hornbill", "Omnivore — fruit, insects, small animals", "Forest and savanna of Africa and Asia", "LC",
  "In many species the female seals herself inside a tree cavity with mud, leaving a slit, and moults her flight feathers while the male feeds her through the gap for months. If he dies, she and the chicks die. The casque on the bill is mostly hollow and amplifies the call.");
note("vulture", "Scavenger — carrion", "Africa, Europe and Asia", "CR",
  "Stomach acid strong enough to destroy anthrax, botulism and rabies, which is why a vulture can eat what would kill anything else and stops those diseases spreading. India lost over 95% of its vultures in a decade to a veterinary drug in cattle carcasses — and rabies in people rose as feral dogs replaced them. This is what an ecosystem service looks like when you remove it.");
note("owl", "Carnivore — mammals up to hare size", "Rocky country, Africa and Eurasia", "LC",
  "Its flight feathers have a comb-like leading edge that breaks up the air, so it flies in near silence — the prey never hears it. Its ears are set at different heights on the skull, which lets it map sound in three dimensions and strike in total darkness. Those 'ear tufts' are not ears.");
note("penguin", "Carnivore — sardines and anchovies", "Coasts of South Africa and Namibia", "CR",
  "The only penguin breeding in Africa, and it is in freefall — over 97% gone since 1900, and it was uplisted to Critically Endangered in 2024. It brays like a donkey, which got it the old name jackass penguin. Its collapse tracks the sardine fishery almost exactly.");
note("kestrel", "Carnivore — voles, insects", "Farmland and grassland across Europe, Asia and Africa", "LC",
  "It sees ultraviolet, and vole urine glows in it — so a kestrel hovering over a field is reading the trails as a map of where the voles are. It can hold its head perfectly still in a gale while its body moves around it. That hover is the most expensive way any bird hunts.");
note("lovebird", "Granivore — seeds and fruit", "Africa and Madagascar", "LC",
  "Pairs bond for life and sit pressed together for hours, which is the whole of the name. Some species carry nest material tucked into their rump feathers — a genuinely bizarre trick, and it is inherited, not learned. A lone lovebird kept without company can pluck itself bare.");

// ===== reptiles and amphibians =====
note("cobra", "Carnivore — other snakes, mostly", "Forests of India and Southeast Asia", "VU",
  "The longest venomous snake on earth at over five metres, and it eats other snakes, including other cobras. It is the only snake in the world that builds a nest for its eggs and guards them. One bite carries enough neurotoxin to kill an elephant, and it would far rather leave.");
note("python", "Carnivore — rodents", "Grassland and forest of West and Central Africa", "NT",
  "It curls into a ball with its head in the middle when frightened, which is the name and the whole defence. It is among the most-traded reptiles on earth: hundreds of thousands are bred for colour mutations, some of which — like the spider morph — come with a permanent neurological wobble the animal cannot be bred out of.");
note("chameleon", "Insectivore — insects", "Mountains of Yemen and Saudi Arabia", "LC",
  "Its colour is not camouflage in the way people think: it shifts to signal mood, temperature and status, by rearranging nanocrystals in its skin rather than by moving pigment. Each eye moves independently through 180 degrees. The tongue is fired at over 20km/h and is longer than the animal's body.");
note("gecko", "Insectivore — insects", "Warm regions worldwide", "LC",
  "It climbs glass on millions of hairs called setae, each splitting into hundreds of finer tips, gripping by molecular attraction — no glue, no suction. The foot works in a vacuum and underwater. Most geckos have no eyelids and clean their eyes by licking them.");
note("monitor", "Carnivore — anything it can catch", "Rocky savanna of southern Africa", "LC",
  "Monitors are unusually intelligent for lizards — they can count, they recognise their keepers, and some have been recorded solving problems to open boxes. Unlike most reptiles they have a divided heart and huge lung capacity, so they can run and breathe at the same time. That is closer to how we work than how a lizard is supposed to.");
note("croc", "Carnivore — fish, mammals, anything at the water's edge", "Rivers and lakes of Africa", "LC",
  "It has the strongest measured bite of any living animal — and the muscles that open the jaw are so weak a person can hold them shut. The mother carries her hatchlings to water in that mouth, one at a time, with absolute care. It has been doing this essentially unchanged since before the dinosaurs died.");
note("tortoise", "Herbivore — grasses and succulents", "Sahel, at the southern edge of the Sahara", "EN",
  "The third-largest tortoise on earth: hatchlings are the size of a coin and adults reach 45kg, which pet shops rarely mention. It digs burrows several metres long to escape the heat, and those burrows shelter everything else in the desert. It can live 70 years, so it usually outlives whoever bought it.");
note("dartfrog", "Insectivore — ants and mites, which is where the poison comes from", "Rainforest floor of Central and South America", "LC",
  "It is not born poisonous — the toxin comes from the ants and mites it eats, so captive-bred ones are completely harmless. The colour is a warning, not camouflage, and it is honest. Fathers carry tadpoles on their backs to water, one at a time, sometimes to a single pool in a bromeliad high in a tree.");
note("turtle", "Omnivore — plants, insects, carrion", "Ponds, rivers and marshes", "LC",
  "It cannot leave its shell — the shell is its ribs and spine, fused and flattened, growing with it. It basks because it cannot make its own heat, and a turtle denied a warm rock cannot digest properly. Many species can breathe, slowly, through the lining of the cloaca while overwintering under ice.");

// ===== everything else =====
note("beaver", "Herbivore — bark, cambium, aquatic plants", "Rivers and wetlands of North America and Eurasia", "LC",
  "It is the only animal besides us that reshapes a landscape at scale: its dams create wetlands that store water, filter pollutants, and slow floods. Its teeth are orange because they are laced with iron, and they never stop growing. Beaver ponds are now deliberately built by people trying to undo what removing beavers did.");
note("aardvark", "Insectivore — ants and termites", "Africa south of the Sahara", "LC",
  "Its name is Afrikaans for 'earth pig' and it is related to neither pigs nor anteaters — its closest living relatives are elephants and manatees. It can dig itself out of sight in about five minutes, faster than most people can dig with a shovel. Its abandoned burrows house a long list of other animals.");
note("hedgehog", "Insectivore — beetles, worms, slugs", "Europe, Asia and Africa", "LC",
  "About 5,000 spines, which are modified hairs, and a muscle that draws the whole skin into a bag around the animal. It does something called self-anointing: when it meets a strong new smell it chews it into a foam and spreads it over its own spines, and nobody is certain why. It is lactose intolerant, so the traditional saucer of milk kills it.");
note("meerkat", "Insectivore — scorpions, insects, lizards", "Kalahari and other dry parts of southern Africa", "LC",
  "The sentry standing upright is doing a real job, with different calls for a hawk and for a jackal, and the group reacts differently to each. Adults teach pups to handle scorpions in stages — first dead ones, then disabled, then live — which is genuine teaching, and rare outside us. They are immune to the venom.");
note("galago", "Omnivore — insects and tree gum", "Forest and savanna of Africa", "LC",
  "It can leap over two metres straight up from standing, on tendons that store energy like a catapult. Its ears fold independently to shut out noise while it sleeps. The scream that gives it the name 'bushbaby' carries a long way in the dark.");
note("bat", "Frugivore — fruit and nectar", "Africa, Asia and Oceania", "LC",
  "Fruit bats mostly do not echolocate — they navigate by eyesight, and they see better in low light than we do. They are among the most important pollinators and seed dispersers in the tropics: durian, agave, baobab and hundreds of other plants depend on them. Some baobabs are pollinated by nothing else.");
note("sloth", "Folivore — leaves", "Rainforest canopy of Central and South America", "LC",
  "It is slow because leaves contain almost no energy: digesting one meal can take a month, and it has roughly half the muscle mass you would expect for its size. It grows algae in grooved hairs — its own camouflage garden — and a whole ecosystem of moths lives in the fur. It climbs down to the ground to defecate about once a week, which is when most of them get killed.");
note("binturong", "Frugivore — figs, mostly", "Rainforest canopy of Southeast Asia", "VU",
  "It smells strongly of hot buttered popcorn — the compound is genuinely the same one, 2-acetyl-1-pyrroline, produced in its urine. It is one of very few carnivores with a truly prehensile tail. Strangler figs depend on it: its gut is one of the only things that reliably breaks down the seed coat.");
note("kinkajou", "Frugivore — fruit and nectar", "Rainforest canopy from Mexico to Brazil", "LC",
  "A carnivore that eats almost entirely fruit, with a 12cm tongue for reaching into flowers — which makes it an important pollinator. Its tail is prehensile and its hind feet turn backwards for coming down trunks. It is related to raccoons, not primates, which nearly everyone gets wrong.");
note("coati", "Omnivore — insects, fruit, small vertebrates", "Forests from the southern US to Argentina", "LC",
  "Females and young live in noisy bands of up to 30; the adult males are solitary, so early naturalists described them as two different species and named one 'coatimundi', the lone coati. It has a flexible snout that rotates 60 degrees for rooting in crevices. Its ankles reverse to descend head-first.");
note("redpanda", "Herbivore — bamboo, mostly", "Temperate mountain forest of the Himalayas and China", "EN",
  "It was named a panda first — nearly 50 years before the giant panda — and it is not a bear, not a raccoon, but the only surviving member of its own family. It has a false thumb, an extended wrist bone for gripping bamboo, which it evolved separately from the giant panda for the same job. Fewer than 10,000 remain.");
note("raccoon", "Omnivore — anything at all", "North America; introduced across Europe and Japan", "LC",
  "Its forepaws have four to five times the touch receptors of most mammals, and a huge share of its brain is devoted to feeling — it 'sees' with its hands, especially in water. It can remember the solution to a lock for three years. Nearly everything about it got better when cities appeared.");
note("ringtail", "Omnivore — insects, fruit, rodents", "Rocky arid country of the western US and Mexico", "LC",
  "Miners kept them as mousers and called them 'miner's cats' — it is not a cat, it is a relative of raccoons. Its ankles rotate 180 degrees and it can ricochet between two walls of a crevice to climb it. It is Arizona's state mammal and most Arizonans have never seen one.");
note("civet", "Omnivore — fruit, insects, small animals", "Forests of Africa and Asia", "LC",
  "Kopi luwak coffee is made from beans that pass through one, which drove an industry of caging wild-caught civets in rows and force-feeding them cherries. The wild animal picks only ripe fruit, which was the entire reason the coffee was ever good. Civets were also the intermediate host in the SARS outbreak.");
note("genet", "Carnivore — rodents, birds, insects", "Africa, and parts of Europe", "LC",
  "It is so lithe it can follow its own head through any gap — if the skull fits, the genet fits. Medieval Europeans kept them as house pets to control mice, centuries before cats were common there. It has semi-retractable claws and hunts in trees as easily as on the ground.");
note("mongoose", "Carnivore — snakes, rodents, insects", "Africa and Asia", "LC",
  "Its resistance to cobra venom is not magic: its acetylcholine receptors are shaped slightly differently, so the neurotoxin cannot lock on. It still relies mostly on being faster than the snake. Introduced to islands to control rats, it has driven a long list of native species extinct instead.");
note("fossa", "Carnivore — lemurs, mostly", "Forests of Madagascar", "VU",
  "Madagascar's largest predator, and it hunts lemurs through the canopy — it can come down a trunk head-first and cross between trees. It looks like a cat and is closer to a mongoose; it arrived on one raft of vegetation millions of years ago and became everything a big cat is elsewhere. Fewer than 2,500 adults remain.");
note("linsang", "Carnivore — rodents, birds, insects", "Rainforest of Southeast Asia", "LC",
  "One of the most arboreal carnivores in Asia and one of the least seen — slender enough to be described as a snake with legs. It is almost entirely nocturnal and hunts in the canopy. Very little of its life has ever been observed.");
note("moonbear", "Omnivore — fruit, nuts, insects", "Forests of Asia", "VU",
  "The white crescent on the chest is the name. Thousands are kept in cages on bile farms, with permanent catheters or open fistulas in the gallbladder, for a substance now synthesised cheaply and identically in a lab. Rescued bears often have to relearn how to walk on soil.");
note("blackbear", "Omnivore — berries, nuts, insects, carrion", "Forests of North America", "LC",
  "It climbs before it can run and a cub goes up a tree when its mother tells it to. It does not truly hibernate: its temperature drops only a few degrees, so it can wake fast, and it can go months without eating, drinking, urinating or defecating. Its sense of smell is around seven times a bloodhound's.");
note("baboon", "Omnivore — anything", "Savanna and rocky country of Africa and Arabia", "LC",
  "Troops run to a hundred or more with a politics of alliances, grudges and reconciliation that has been studied for decades because it looks uncomfortably familiar. Robert Sapolsky followed one troop for 30 years and watched a stress-related die-off of the most aggressive males leave a lastingly gentler culture behind. That culture persisted through generations of new arrivals.");
note("macaque", "Omnivore — fruit, seeds, insects", "Asia and North Africa", "LC",
  "The most widespread primate genus after us, and the one that lives in temples, cities and hot springs. Japanese macaques were watched inventing potato-washing in the 1950s and passing it down — one of the first proofs of culture in a non-human animal. A troop in Thailand uses stone tools to open shellfish.");
note("capuchin", "Omnivore — fruit, insects, small vertebrates", "Forests of Central and South America", "LC",
  "It uses stone tools — some Brazilian groups have been cracking nuts with anvils for at least 3,000 years, and archaeologists can excavate the layers. It rubs itself with crushed millipedes as an insect repellent. It is the monkey that was strapped to organ grinders, and it lives 45 years.");
note("vervet", "Omnivore — fruit, leaves, insects", "Savanna and woodland of Africa", "LC",
  "It has distinct alarm calls for leopard, eagle and snake, and the troop responds correctly to each — up a tree, look up, look down. Infants make mistakes and are corrected, which means it is learned. This was the study that made everyone take animal communication seriously.");
note("langur", "Folivore — leaves", "Forests and cities of South Asia", "LC",
  "It has a chambered stomach to ferment leaves and can eat foliage that would poison most animals. In India it is Hanuman, and it is fed rather than hunted, which is why it is one of the few primates thriving near people. Troops raid rooftops with total confidence.");
note("wallaby", "Herbivore — grass and leaves", "Australia and New Guinea", "LC",
  "It can pause a pregnancy — hold the embryo dormant for months and restart it when conditions improve, and it can carry a dormant embryo, a pouch joey and a young at foot all at once, feeding two different milks from different teats simultaneously. The hopping is nearly free: the tendons work as springs. Above a certain speed it costs no more energy to go faster.");
note("kangaroo", "Grazer — grasses", "Arid and semi-arid Australia", "LC",
  "The largest marsupial alive: a big male stands over 1.6m, can cover 9m in a bound, and fights by balancing on his tail to kick with both feet. Females can hold an embryo in suspension for months waiting for rain. In drought they simply stop breeding until it breaks.");
note("koala", "Folivore — eucalyptus leaves, almost only", "Eucalypt forest of eastern Australia", "EN",
  "Eucalyptus is toxic, indigestible and nearly worthless as fuel, so it sleeps up to 20 hours a day and runs a brain that is small and unusually smooth. A joey eats its mother's droppings to seed its gut with the bacteria that make the leaves survivable. It was listed as Endangered in eastern Australia in 2022.");
note("wombat", "Herbivore — grasses and roots", "Forest and scrub of southern Australia", "LC",
  "It produces cubic droppings — the only animal that does — formed by differing stiffness around its intestine, and it stacks them on rocks as territorial markers. Its pouch faces backwards so digging does not fill it. Its rump is a plate of cartilage it uses to block the burrow, and it can crush a skull against the roof.");
note("opossum", "Omnivore — insects, carrion, fruit, ticks", "North and Central America", "LC",
  "North America's only marsupial. 'Playing possum' is not an act — it is an involuntary shock response it cannot control or come out of at will, sometimes for hours. It has a body temperature too low for rabies to establish, and partial immunity to snake venom.");
note("bandicoot", "Omnivore — insects, tubers, fungi", "Australia and New Guinea", "LC",
  "It has the shortest pregnancy of any mammal on earth — about 12 days — and the only placenta of any marsupial worth the name. It digs constant small conical pits foraging, and a single bandicoot turns over several tonnes of soil a year, which is why the plants do better where they are.");
note("hyena", "Carnivore — hunts most of what it eats", "Savanna and scrub of Africa", "LC",
  "It is not primarily a scavenger — spotted hyenas kill the large majority of their food, and lions steal from them more often than the reverse. Clans of up to 80 are matriarchal, and the lowest-ranking female outranks the highest male. Their social intelligence tests out on par with some primates.");
note("badger", "Omnivore — snakes, honey, larvae, roots", "Africa, the Middle East and India", "LC",
  "Loose, thick skin it can rotate inside when bitten; partial venom resistance; and a documented habit of using tools and picking locks. A famous escape artist named Stoffel in South Africa repeatedly built his own ladders out of anything in his enclosure. It is the reason 'honey badger doesn't care' became a thing, and it is roughly accurate.");
note("jackal", "Omnivore — rodents, carrion, fruit", "Africa, southeastern Europe and Asia", "LC",
  "It pairs for life, and both parents feed the pups — pairs with a helper from a previous litter raise noticeably more young. It is one of the few carnivores of its size that thrives right next to farmland. Egyptian Anubis is a jackal.");
note("scorpion", "Carnivore — insects and spiders", "Deserts and dry country worldwide", "LC",
  "It glows blue-green under ultraviolet and nobody is certain why — the compound is in the cuticle, and even fossils glow. It can slow its metabolism to almost nothing and survive a year without eating. It has been essentially this shape for 400 million years.");
note("rabbit", "Herbivore — grasses and shrubs", "Deserts and grassland of western North America", "LC",
  "It is a hare, not a rabbit: born furred and open-eyed, ready to run, in a scrape rather than a burrow. Those enormous ears are a radiator — blood flows through them to dump heat into the desert air. It can hit 55km/h and jump three metres.");
note("otter", "Carnivore — fish, crayfish, frogs", "Rivers and coasts of Eurasia and North Africa", "NT",
  "It has to eat around 15% of its body weight a day, and it hunts by feel with its whiskers as much as by sight — it can track the wake a fish left seconds ago. Its fur traps air rather than relying on fat, so any oil that ruins the coat kills it. It nearly vanished from Britain to pesticides and has come back.");
