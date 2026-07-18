// ---------- CHAPTER XXV — THE VIGIL ----------
// 87 animals. Every one either gone, gone from the wild, or close enough that
// the number of individuals is a number you can hold in your head.
//
// Each gets: what it was and something true and remarkable about it, when it
// went, the root cause, and what we could have done differently. That last
// field is the reason the region exists. It is not there to make anyone feel
// better — several of these say "nothing, we didn't know", and several say
// "we knew, and did it anyway", and the difference matters.
//
// Where we are actively trying to bring one back, the note says how and why,
// and is honest about what the attempt actually produces.
//
// Nothing here is invented. Where a date or a cause is disputed, it says so.

const vnote = (k, o) => { if (DEX[k]) INFO[k] = Object.assign(INFO[k] || {}, o); };

// ===== recently gone =====
vnote("thylacine", {
  d: "Carnivore — wallabies, birds, small mammals", h: "Tasmania, and mainland Australia before that", s: "EX",
  f: "It could open its jaws to almost 80 degrees, wider than nearly any other mammal — and its bite was surprisingly weak, so it took small prey, not sheep. Both sexes had a pouch: the female's for young, the male's to protect his scrotum in scrub. It was a marsupial that had converged on the shape of a dog so completely that its skull fools people who should know better, and it was the last of an entire family.",
  lost: "The last known one died in Hobart Zoo on the night of 7 September 1936, locked out of its shelter in the cold. Australia now marks that date as Threatened Species Day.",
  cause: "A government bounty. Tasmania paid £1 a head from 1888 to 1909 for an animal that was blamed for sheep losses mostly caused by feral dogs and poor husbandry. Around 2,200 bounties were paid. Habitat loss, disease and the fact that it was already rare finished it.",
  better: "Almost everything. It was given legal protection on 10 July 1936 — 59 days before the last one died. We knew what we were doing the entire time, we did it on purpose for a false reason, and we protected it only once it was too late to matter.",
  back: "Colossal Biosciences is attempting it, using the fat-tailed dunnart — a mouse-sized marsupial and the thylacine's closest living relative — as the genome to edit and the surrogate to carry it. The thylacine genome has been sequenced from museum specimens. What that would produce is a dunnart edited toward a thylacine, not a thylacine, and its Tasmania is largely still there — which is the honest argument for trying, and the reason critics say the money should go to the animals still alive.",
});
vnote("quagga", {
  d: "Grazer — grasses", h: "The Karoo and southern Free State, South Africa", s: "EX",
  f: "Striped at the front, plain brown at the back, as though the pattern ran out halfway. For a century it was assumed to be its own species. In 1984 it became the first extinct animal ever to have its DNA sequenced, and the answer was that it was a subspecies of the plains zebra — the genes are still out there, distributed among living animals.",
  lost: "The last one died in Amsterdam's Artis zoo on 12 August 1883. Nobody realised she was the last; there was no plan and no alarm.",
  cause: "Shot out for meat and hides, and to clear grass for sheep. It was abundant, and abundance was treated as permission.",
  better: "Noticed. There are only five photographs of a living quagga in existence, all of one mare in London Zoo. Zoos held them and let them die out without breeding them, because nobody was counting.",
  back: "The Quagga Project has been selectively breeding plains zebras since 1987 for reduced striping, and the animals now look strikingly like the old photographs. This is honest about itself: it is not a resurrection, it is a phenotype. The result is a plains zebra that looks like a quagga, which is the most the genetics allow.",
});
vnote("aurochs", {
  d: "Grazer — grasses, leaves", h: "Forests and marshes of Europe, Asia and North Africa", s: "EX",
  f: "The wild ox every domestic cow on earth descends from. A bull stood 1.8m at the shoulder with horns swept forward for fighting, and Caesar wrote that they were nearly the size of elephants and spared nothing they saw. They are painted on the walls at Lascaux, which means people had been looking at them for 17,000 years before the last one died.",
  lost: "The last recorded aurochs, a cow, died in the Jaktorów Forest in Poland in 1627 — of natural causes, alone. She was the last individual of a species with the best-documented ending of the pre-modern era.",
  cause: "Hunting and habitat loss, over centuries. By the 1500s they survived only in one Polish royal forest, protected by law and guarded by gamekeepers.",
  better: "Poland actually tried — it was one of the first wildlife protection laws anywhere, the royal court fed them in winter, and poaching carried a death sentence. It still failed, because a single population in a single forest cannot survive a disease or a bad decade. One reserve is not conservation.",
  back: "Two efforts. Heck cattle, bred in 1930s Germany from primitive breeds, are a crude approximation entangled with Nazi ideology about restoring an Aryan landscape. The Tauros Programme is the serious modern attempt: back-breeding from primitive cattle with the aurochs genome as a map, aiming for a functional grazer that can do the aurochs's ecological job in European rewilding. The goal is the job, not the animal.",
});
vnote("stellerseacow", {
  d: "Herbivore — kelp", h: "The Commander Islands, Bering Sea", s: "EX",
  f: "Nine metres, ten tonnes, a manatee relative grown vast for arctic water — it could not submerge, and floated at the surface eating kelp. Georg Steller, shipwrecked, wrote the only scientific description of the living animal, and recorded that when one was harpooned the others would surround it and try to pull the harpoon out. He noted that a male stayed with a dead female's body for two days.",
  lost: "27 years after Steller described it in 1741. The last was killed in 1768.",
  cause: "Sailors and fur hunters ate them. They were enormous, floated when dead, tasted good, and could not flee. The population was already a relict of a few thousand animals confined to two islands.",
  better: "Stopped. Steller's own account is a description of an animal being eaten to extinction in real time, by the people writing it down. Twenty-seven years is enough time to notice.",
});
vnote("baiji", {
  d: "Carnivore — fish", h: "The Yangtze River", s: "EX",
  f: "A river dolphin nearly blind from millions of years in silt, navigating a river entirely by sound. It had been in the Yangtze for 20 million years — it watched the Himalayas rise. Chinese tradition called it the Goddess of the Yangtze, and there is a story that it was a princess drowned by her family.",
  lost: "A six-week survey in 2006 covered the entire historic range and found not one. It was declared functionally extinct — the first cetacean driven extinct by people.",
  cause: "Not hunting. It was killed by everything at once: rolling hook longlines, electrofishing, propellers, dam construction, and a river so loud with shipping that an animal that lives by sound was effectively blinded twice.",
  better: "Acted in the 1980s, when there were still a few hundred. A reserve was proposed and repeatedly delayed; a capture-and-relocate plan came far too late. There was no single villain to fight, which turned out to be the problem — nobody could be made to stop.",
});
vnote("dodo", {
  d: "Frugivore — fallen fruit, seeds", h: "Mauritius", s: "EX",
  f: "It was not fat, and it was not stupid. The famous rotund paintings were made from overfed captives in Europe; the skeletons show an athletic bird well adapted to a forest with no predators at all. It had no reason to fear anything and no reason to fly, and both of those are the correct answer to Mauritius until 1598. It is a pigeon.",
  lost: "The last widely accepted sighting was in 1662, barely 64 years after Europeans first landed.",
  cause: "Not sailors eating them, mostly — accounts say they tasted bad. It was the pigs, macaques, rats and cats that came off the ships and ate the eggs of a ground-nesting bird that laid one at a time.",
  better: "It is genuinely hard to say 'we should have known' about 1598. Nobody had the concept: extinction as an idea was not accepted until Cuvier argued it around 1796, over a century later. What the dodo actually did was teach us that species can end — it became the word we use for gone forever. It paid for the concept.",
});
vnote("greatauk", {
  d: "Piscivore — fish", h: "The North Atlantic — Iceland, Newfoundland, Scotland", s: "EX",
  f: "The original 'penguin' — the name belonged to this bird first, and was only later borrowed for the southern birds that resembled it. Flightless, 80cm, and superb underwater. It bred on a handful of rock stacks and laid one egg a year, and it had done so for so long that its islands are still named after it.",
  lost: "On 3 June 1844, on Eldey island off Iceland, two men strangled the last breeding pair and a third crushed the egg underfoot. They were collecting for a dealer supplying museums and private collectors.",
  cause: "Down, meat, and oil for centuries — and then, at the end, collectors. As it became rare, specimens became valuable, which made hunting it more profitable, not less. Rarity accelerated the killing.",
  better: "Understood what rarity does to a market. This is the clearest case in the whole Vigil of scarcity creating demand — the last ones were killed *because* they were the last ones. That same dynamic is currently operating on rhino horn and on the totoaba.",
});
vnote("passengerpigeon", {
  d: "Frugivore — beech mast, acorns", h: "Eastern North America", s: "EX",
  f: "Between three and five billion birds — possibly a quarter of every bird in North America. Flocks took days to pass and darkened the sky; Audubon watched one for three days and gave up estimating. Branches broke under the weight of them. They may have needed enormous flocks to breed at all, which meant that below some threshold the species could not function no matter how many individuals remained.",
  lost: "Martha died at Cincinnati Zoo at about 1pm on 1 September 1914. She had been the last of her kind for four years, and had never laid a fertile egg. Her body was frozen into a block of ice and shipped to the Smithsonian.",
  cause: "Industrial hunting. Telegraphs reported where the flocks were, railways carried hunters in and carcasses out, and they were sold by the barrel as the cheapest meat in America. Nesting colonies were attacked directly, which is how you take a species apart.",
  better: "Believed it was possible. The defence at the time, stated openly in legislatures, was that a bird this numerous could not be exhausted. Abundance was the entire reason nobody protected it. It went from billions to zero in about fifty years, and it is the single best argument in existence against assuming anything is safe because there is a lot of it.",
  back: "Revive & Restore is working on it — the genome has been sequenced from museum skins, and the plan is to edit band-tailed pigeon cells toward passenger pigeon traits. The obstacle is not only genetic: the bird may have been a flock as much as an animal, and nobody knows how to build a flock of a billion from a handful, or what a few hundred of them would even do.",
});
vnote("carolinaparakeet", {
  d: "Frugivore — seeds, fruit, cockleburs", h: "The eastern United States", s: "EX",
  f: "The only parrot native to the eastern US — brilliant green and yellow, in flocks, as far north as New York. It ate cockleburs, which are toxic, and was itself apparently poisonous to eat; cats reportedly died after eating one. Its fatal trait was loyalty: when one was shot the rest of the flock would circle back to it, again and again, so a single hunter could take an entire flock.",
  lost: "Incas died at Cincinnati Zoo on 21 February 1918 — in the same cage where Martha the last passenger pigeon had died four years earlier. His mate Lady Jane had died the year before.",
  cause: "Shot as an orchard pest, killed for hat feathers, taken for the pet trade, and its old-growth forest cut. The flock-circling behaviour made it trivially easy.",
  better: "Recognised the behaviour as vulnerability rather than opportunity. And kept records — we do not know exactly when it went. There are unverified reports into the 1930s, and no one was watching closely enough to say.",
});
vnote("carolinaparakeet", { s: "EX" });
vnote("huia", {
  d: "Insectivore — grubs from rotting wood", h: "The North Island of New Zealand", s: "EX",
  f: "The most extreme beak difference between sexes of any bird known: the male had a short stout chisel to hack into wood, the female a long fine curve to probe the tunnels. They fed together, and it was long believed they cooperated. Māori regarded it as tapu and its tail feathers were worn only by people of rank.",
  lost: "The last confirmed sighting was 28 December 1907, though credible reports continued for two decades.",
  cause: "Two things at once. Feather collecting exploded after the Duke of York wore a huia feather in 1901 and the price went vertical. Meanwhile European collectors wanted matched male-female pairs precisely because the beaks were remarkable, so the rarer it got the more valuable a pair became. The forest was cleared underneath all of this.",
  better: "Not made the thing itself into a fashion. The huia is a lesson about what happens when a species' most interesting feature becomes its market value — and the collectors who took the last of them were, by their own account, preserving it for science.",
});
vnote("kauaioo", {
  d: "Nectarivore — lobelia flowers", h: "The Alakaʻi swamp, Kauaʻi, Hawaiʻi", s: "EX",
  f: "In 1987 a researcher recorded the last known male singing the duet part of his species' song and waiting for the female's response, which never came. That recording exists. You can listen to it, and what you are hearing is a bird calling to an animal that no longer exists, in a forest that no longer answers.",
  lost: "The song was recorded in 1987. He was never heard again. Declared extinct in 2000, confirmed 2023.",
  cause: "Avian malaria, carried by mosquitoes that arrived on ships in 1826, which Hawaiian birds had no resistance to. The birds retreated up the mountains to where it was too cold for mosquitoes, and then warming carried the mosquitoes up after them. Plus rats, pigs, and forest clearance.",
  better: "Controlled the mosquitoes far earlier. This is happening right now to the remaining honeycreepers — the ʻakikiki is down to single figures — and the current effort is releasing mosquitoes carrying Wolbachia bacteria to crash the mosquito population. It might work. It is about forty years late for this bird.",
});
vnote("poouli", {
  d: "Insectivore — tree snails", h: "Maui, Hawaiʻi", s: "EX",
  f: "Only discovered in 1973, by students on a field trip. By the time we knew it existed, there were almost none — the species was found and lost inside a single human lifetime, and most people never learned its name.",
  lost: "The last known individual, a male, was captured in an attempt to breed him and died in captivity on 26 November 2004. The other two known birds were never seen again.",
  cause: "Avian malaria, rats, pigs destroying the understory, and the collapse of the native snails it ate.",
  better: "Moved faster. There was a plan to bring the last three together — a male and two females in separate territories — and biologists physically carried one female into the male's territory in 2002. She walked home. By the time capture was authorised, there was one bird left. Everyone involved knew what was needed; the permissions took years.",
});
vnote("bramblecaymelomys", {
  d: "Herbivore — succulent plants", h: "Bramble Cay, a sand island in the Torres Strait", s: "EX",
  f: "A small brown rat on a sand cay five hectares across and three metres high, at the very top of the Great Barrier Reef. It was Australia's most isolated mammal and lived nowhere else on earth. It was probably there for thousands of years, on an island you can walk across in ten minutes.",
  lost: "Last seen in 2009. Searches in 2014 found nothing. Declared extinct in 2016 — the first mammal known to be driven extinct by anthropogenic climate change.",
  cause: "Sea level rise and storm surges repeatedly washing over an island three metres high, drowning the animals and destroying 97% of the vegetation they ate. There is nowhere higher to go on a sand cay.",
  better: "Taken some into captivity. It was recommended in 2008. It was not funded. A recovery plan existed, the animal's situation was completely understood, and the response to the first mammal about to be lost to climate change was a document.",
});
vnote("pyreneanibex", {
  d: "Herbivore — alpine grasses", h: "The Pyrenees", s: "EX",
  f: "A mountain goat of the high Pyrenees, and one of four ibex subspecies in Iberia — two of which are already gone. It has the strangest distinction of any animal here: it is the only one that has gone extinct twice.",
  lost: "The last, a female named Celia, was found crushed by a fallen tree on 6 January 2000.",
  cause: "Hunting through the 19th century reduced it to a handful, and the last population never recovered — too few animals, too little genetic diversity, and competition with livestock.",
  better: "Bred her. Celia was captured, radio-collared and released, and skin cells were taken and frozen. Nobody attempted captive breeding while there was still more than one animal.",
  back: "It already happened. In 2003 a cloned Pyrenean ibex kid was born from Celia's frozen cells — the first de-extinction in history. It lived seven minutes and died of a lung defect. That is the whole story: we can do this, and doing it is not the same as having the animal back.",
});
vnote("goldentoad", {
  d: "Insectivore — insects", h: "The cloud forest above Monteverde, Costa Rica", s: "EX",
  f: "The males were a solid, luminous orange so bright it looked artificial — like something enamelled. They spent almost the whole year underground and emerged for a few days to breed in puddles, in their hundreds, all at once. It lived in about ten square kilometres of cloud forest and nowhere else on earth.",
  lost: "In 1987, 1,500 gathered to breed. In 1988, ten. In 1989, one male. That was the last one anybody ever saw.",
  cause: "Chytrid fungus, almost certainly, spread globally by the trade in amphibians — combined with a dry El Niño that shrank the pools. It went out inside two years in a protected reserve nobody was logging.",
  better: "The uncomfortable answer is that nothing anyone could have done at Monteverde would have saved it, because the cause arrived from outside a perfectly protected forest. It is the animal that taught conservation that a reserve is not a shield. Chytrid has since driven around 90 amphibian species extinct and is the worst disease ever recorded in vertebrates.",
});
vnote("xercesblue", {
  d: "Herbivore — lupine and lotus, as a caterpillar", h: "The sand dunes of the San Francisco peninsula", s: "EX",
  f: "A small blue butterfly that lived in the dunes where San Francisco now stands, and nowhere else. Its caterpillars were tended by ants, which milked them for sugar and defended them in exchange — so the butterfly needed the ant, the ant needed the plant, and the plant needed the dune.",
  lost: "Last seen in 1943 at the Presidio.",
  cause: "The city. Its entire habitat became housing. It is the first American butterfly known to have been driven extinct by urban development.",
  better: "Left a piece of the dune. The Xerces Society, now the world's main invertebrate conservation organisation, is named after it — the butterfly's death created the field that protects the others. A 2021 genetic study confirmed it was a full species, settling a long argument about whether we had lost something distinct.",
});
vnote("rockymountainlocust", {
  d: "Herbivore — anything green", h: "The Rocky Mountain west and the Great Plains", s: "EX",
  f: "In 1875 a single swarm was estimated at 3.5 trillion insects, covering an area larger than California — possibly the largest gathering of animals in recorded history. It ate crops, fence posts, wool off living sheep and clothing off people's backs. Within 30 years it was gone entirely, and nobody planned it.",
  lost: "The last living specimens were collected in 1902.",
  cause: "Not pesticide — nothing existed that could dent a swarm that size. Its permanent breeding grounds were a few river valleys in the Rockies, and settlers ploughed, irrigated and grazed exactly those valleys. Destroy the nursery and the swarm has nowhere to come from.",
  better: "This one is genuinely strange: it may be the only pest species ever eradicated by accident, and we did not know we had done it until decades later. The lesson runs the other way from the rest of the Vigil — even the most numerous animal imaginable can have a single fatal bottleneck, and you can destroy something without ever seeing it.",
});
vnote("chinesepaddlefish", {
  d: "Carnivore — fish and crustaceans", h: "The Yangtze River", s: "EX",
  f: "Seven metres long, with a paddle-shaped snout covered in electroreceptors for finding prey in a silt-black river. It had been in the Yangtze for 200 million years, and Chinese fishermen called it the panda of the Yangtze. Only one other paddlefish species remains on earth.",
  lost: "Last seen in 2003. Declared extinct in a 2019 study — likely functionally extinct by 1993, meaning it stopped being able to breed a decade before anyone last saw one.",
  cause: "The Gezhouba Dam, completed in 1981, cut the river in half and separated the fish from its only spawning grounds. Overfishing did the rest.",
  better: "Built a fish passage. The dam was built without one. Every paddlefish downstream of it after 1981 was already a ghost — they lived for years, but they could not reproduce, and nobody counted that as extinction until they were gone.",
});
vnote("splendidpoisonfrog", {
  d: "Insectivore — ants and mites", h: "The Tabasará highlands, Panama", s: "EX",
  f: "A small brilliant red frog from one small range in western Panama. Like all poison frogs it took its toxins from the ants it ate, so it was harmless in captivity — but almost none were ever taken into captivity.",
  lost: "Last seen in 1992. Declared extinct in 2020.",
  cause: "Chytrid fungus, which swept through Central American highlands and took entire amphibian communities in a few years.",
  better: "Captive assurance colonies, before the wave arrived. The fungus's spread across Panama was tracked and predicted — biologists knew roughly when it would reach each valley. Some species were rescued ahead of it. This one was not.",
});
vnote("xmasislandpipistrelle", {
  d: "Insectivore — insects", h: "Christmas Island, Indian Ocean", s: "EX",
  f: "A tiny bat found nowhere else. In the 1980s it was everywhere on the island. The decline was watched, measured and published the whole way down, which is what makes it unbearable.",
  lost: "The last known individual was recorded echolocating on 26 August 2009. It called for a few nights and then stopped.",
  cause: "Not certain, which is part of the point — probably introduced yellow crazy ants, wolf snakes, cats, and habitat change interacting. No single cause was ever isolated.",
  better: "Captured them. Permission to start a captive population was requested repeatedly from 2006. It was granted in 2009, when a team went out and found one animal, and could not catch it. The species died in an administrative queue, and the scientists who watched it happen said so publicly and in detail.",
});

// ===== ice age =====
vnote("woollyrhino", { d: "Grazer — grasses and herbs of the mammoth steppe", h: "Ice-age Eurasia", s: "EX",
  f: "Its front horn was over a metre and flattened side to side — wear patterns show it swept snow off vegetation with it. Frozen carcasses have been recovered from Siberian permafrost with hair, skin and stomach contents intact, so we know what its last meal was. Its skull, found in 1335, became the model for a dragon statue that still stands in Klagenfurt.",
  lost: "Around 10,000 years ago, at the end of the last glacial period.",
  cause: "Argued, and the argument has recently shifted. Ancient DNA published in 2020 suggests the population was stable and genetically healthy until very near the end, which points at rapid warming during the Bølling–Allerød rather than hunting. The mammoth steppe it ate turned to wet tundra and shrub.",
  better: "Nothing — this one predates us being able to do anything about anything. It is here because its ending is the best evidence we have that climate alone can finish a large mammal without anyone hunting it." });
vnote("smilodon", { d: "Carnivore — bison, camels, ground sloths", h: "The Americas", s: "EX",
  f: "The canines were 18cm and surprisingly fragile — it could not bite hard, and killed with a precise throat bite using enormous neck and forelimb muscle to hold prey still first. La Brea has yielded thousands of them, many with healed catastrophic injuries: broken hips, shattered shoulders, animals that could not have hunted for months and survived anyway. That is usually read as evidence they were fed, which would mean a social cat.",
  lost: "About 10,000 years ago.", cause: "The megafauna it ate disappeared, in the same window that people arrived and the climate flipped. A specialist predator cannot outlive its prey.",
  better: "Nothing available to anyone at the time. It is here as the answer to a question people ask: predators do not survive the loss of their prey base, and that is not a historical curiosity — it is the mechanism currently threatening the Amur leopard and the Iberian lynx." });
vnote("megatherium", { d: "Herbivore — leaves, possibly carrion", h: "South America", s: "EX",
  f: "A ground sloth the size of an elephant, six tonnes, that reared on its hind legs and used its tail as a tripod to pull down trees. Darwin collected its bones in Patagonia on the Beagle, and puzzling over why such animals were gone from a continent that still looked able to support them fed directly into what he wrote twenty years later.",
  lost: "Around 10,000 years ago.", cause: "Debated, with the balance of evidence favouring human hunting plus climate. Butchered bones have been found.",
  better: "Nothing then. What it did do was help produce the theory of evolution, which is not nothing." });
vnote("glyptodon", { d: "Herbivore — grasses", h: "South America", s: "EX",
  f: "An armadillo relative the size of a car, in a domed shell of over a thousand fused bony plates, with a tail like a club — some relatives had spikes on it, and the tail vertebrae are fused into a handle. There is credible evidence that people used the empty shells as shelters.",
  lost: "Around 10,000 years ago.", cause: "Hunting and climate. A slow armoured herbivore is defenceless against a spear from any direction it cannot turn.",
  better: "Nothing then — but it is a clean illustration that armour evolved against predators that bite is worthless against a predator that plans." });
vnote("mastodon", { d: "Browser — spruce and conifer twigs", h: "North and Central America", s: "EX",
  f: "Not a mammoth and not closely related — a separate lineage, browsing forest twigs where mammoths grazed steppe grass. Their teeth are cusped like mountains rather than the flat grinding plates of a mammoth. Their fossils in New York and Ohio were the bones that convinced Cuvier and Jefferson that species could disappear, and Jefferson expected Lewis and Clark to find them alive out west.",
  lost: "Around 10,000-11,000 years ago.", cause: "Hunting plus the loss of their spruce forest as the climate warmed. Kill sites with spear points among the bones exist.",
  better: "Nothing then. But the mastodon is where the concept of extinction entered public consciousness in America — Jefferson would not accept it, and was wrong, and that argument mattered." });
vnote("columbianmammoth", { d: "Grazer — grasses", h: "North America, south of the ice", s: "EX",
  f: "Larger than the woolly mammoth — four metres at the shoulder — and far less hairy, because it lived in temperate grassland rather than on the steppe. It interbred with woolly mammoths where their ranges met, which we know from genomes, and the Columbian mammoth itself turns out to be a hybrid lineage.",
  lost: "About 11,000 years ago.", cause: "Clovis hunting and rapid warming, in combination. The argument over the proportions has run for decades and is not settled.",
  better: "Nothing available then." });
vnote("cavelion", { d: "Carnivore — reindeer, cave bear cubs, horses", h: "Europe and northern Asia", s: "EX",
  f: "Around 10% bigger than a modern lion, and the cave paintings at Chauvet show it in detail — no mane, faint stripes, drawn by people who clearly watched them hunt. Those paintings are 32,000 years old and are among the finest animal art anyone has ever made. Frozen cubs have been recovered from Siberian permafrost with whiskers intact.",
  lost: "About 13,000 years ago.", cause: "The loss of its prey and competition with people for the same animals and the same caves.",
  better: "Nothing then. It is the only animal in the Vigil we have portraits of, made by people who lived alongside it." });
vnote("shortfacedbear", { d: "Omnivore, and heavily argued", h: "North America", s: "EX",
  f: "Standing, it reached 3.4 metres — one of the largest land carnivores ever. Its long legs suggested a running hunter for years; more recent isotope work suggests it was a bulk scavenger that used its size to drive other predators off kills, which is a very effective way to make a living and requires no speed at all.",
  lost: "Around 11,000 years ago.", cause: "The megafauna carcasses it lived off disappeared.",
  better: "Nothing then." });
vnote("direwolf", { d: "Carnivore — horses, bison, ground sloths", h: "The Americas", s: "EX",
  f: "Not a wolf. A 2021 genome study found it belonged to a lineage that split from wolves and coyotes around 5.7 million years ago and could not interbreed with them at all — it just looked similar, because the same job produces the same shape. It is more distant from a grey wolf than a grey wolf is from a jackal. Over 4,000 have come out of the La Brea tar pits.",
  lost: "Around 10,000 years ago.", cause: "Its large prey went, and its total genetic isolation meant it could not interbreed its way out of trouble the way grey wolves and coyotes do.",
  better: "Nothing then. Its lesson is live: a species with nowhere to get new genes from has no buffer, which is exactly the northern white rhino's problem now." });
vnote("giantbeaver", { d: "Herbivore — aquatic plants", h: "North America", s: "EX",
  f: "Two and a half metres and 100kg, the size of a black bear. Its incisors were 15cm — but they were blunt and rounded, not chisel-edged, so it could not fell trees and almost certainly built no dams. It was a giant swamp rodent eating soft water plants, not a bigger version of the animal we know.",
  lost: "Around 10,000 years ago.", cause: "The wetlands it needed dried as the climate shifted, and unlike the modern beaver it could not build its own.",
  better: "Nothing then. It is a good corrective, though: the modern beaver survived and the giant did not, because the small one could engineer its own habitat and the big one could only find it." });
vnote("steppebison", { d: "Grazer — steppe grasses", h: "The mammoth steppe, Europe to North America", s: "EX",
  f: "The bison in the Lascaux and Altamira paintings. A mummified individual called Blue Babe was recovered from Alaskan permafrost in 1979 with the claw marks of an American lion still on its hide — and the team that excavated it cooked and ate part of its neck at dinner, which is either appalling or the most direct connection to the Pleistocene anyone has managed.",
  lost: "Around 9,000 years ago, though it grades into the modern bison rather than simply stopping.", cause: "The steppe became tundra and forest. Genetics show its populations crashed and reshuffled repeatedly with the climate long before people were a factor.",
  better: "Nothing then." });
vnote("irishelk", { d: "Herbivore — grasses and shrubs", h: "Eurasia, from Ireland to Siberia", s: "EX",
  f: "Neither Irish nor an elk — a giant deer, found across Eurasia. Its antlers spanned 3.6 metres and weighed 40kg, and it grew and shed that every single year, which required more calcium than its skeleton could hold, so it stripped its own bones each spring and rebuilt them. It was the standard example of 'evolution producing something so absurd it kills you' for a century, and that reading is now considered wrong.",
  lost: "The last known population died in Siberia around 7,700 years ago, thousands of years later than the textbooks used to say.",
  cause: "The plants it needed for that calcium vanished as forests closed in after the ice, and hunting pressure finished the last relict herds.",
  better: "Nothing then. But it is worth knowing that the famous story about it — that its antlers doomed it — was invented to argue against Darwin, and the animal was fine until its food changed." });

// ===== gone in living memory =====
vnote("caribbeanmonkseal", { d: "Carnivore — fish, octopus", h: "The Caribbean and Gulf of Mexico", s: "EX",
  f: "The only seal ever native to the Caribbean. Columbus's crew killed eight on his second voyage in 1494 and called them sea wolves — it is the first animal in the Americas recorded as being killed by Europeans, and the last one anybody saw was in 1952.",
  lost: "Last confirmed sighting at Serranilla Bank in 1952. Declared extinct in 2008.",
  cause: "Killed for oil to grease the machinery of sugar plantations, then for fishing bait, then simply because they were in the way. They had no fear of people at all.",
  better: "Anything. Nobody surveyed it, nobody protected it, and the 2008 declaration was the first official act ever taken concerning the species. It is the only seal species we have driven extinct." });
vnote("japanesewolf", { d: "Carnivore — deer, boar", h: "Honshu, Shikoku and Kyushu", s: "EX",
  f: "The smallest wolf that ever lived, about the size of a border collie. It was not feared in Japan — it was ōkami, a mountain deity, and shrines were built to it because it killed the deer and boar that ate the crops. Farmers left offerings for it. A 2021 genome study found it may be the closest known wild relative of domestic dogs.",
  lost: "The last known animal was killed at Washikaguchi in January 1905 and sold to a British collector.",
  cause: "Rabies arrived in the 1730s, then canine distemper. A god that suddenly bites people stops being a god — the shift from veneration to extermination is documented, and the government paid bounties.",
  better: "Vaccinated the dogs, which is the actual source. The Japanese wolf was killed by a disease we imported and then by the reputation the disease gave it." });
vnote("falklandwolf", { d: "Carnivore — penguins, seabirds, seal pups", h: "The Falkland Islands", s: "EX",
  f: "The only land mammal on the Falklands, and it had no fear of people whatsoever — it would walk up to a person. Darwin met them in 1833, noted they were so tame that gauchos killed them by holding out meat in one hand and a knife in the other, and predicted in writing that they would be gone within a few years. He was right.",
  lost: "1876 — the first known canid to go extinct in historic times.", cause: "Sheep farmers poisoned and shot them, and the tameness made it effortless. Its total population was small and confined to two islands.",
  better: "Listened to Darwin, who published the warning four decades before it happened. Its origin was a mystery for 150 years until 2013 genetics showed it crossed on an ice bridge from South America and had been isolated for about 16,000 years." });
vnote("balitiger", { d: "Carnivore — deer, boar, monkeys", h: "Bali", s: "EX",
  f: "The smallest tiger that has ever existed — a male weighed about 90kg, less than half a Siberian. Bali is a small island and it produced a small tiger, which is what islands do. It was central to Balinese Hindu belief as a barrier against evil, and there is not one photograph of a living one.",
  lost: "The last confirmed was a female shot at Sumbar Kima on 27 September 1937. Probably gone entirely by the 1940s.",
  cause: "Dutch colonial trophy hunting, deliberately organised, plus the conversion of an island that small to farmland. There was nowhere to retreat to.",
  better: "Not organised hunting parties for a tiger population that could only ever have been a few dozen animals on an island 150km across. The maths was never survivable and nobody did the maths." });
vnote("javantiger", { d: "Carnivore — rusa deer, boar", h: "Java", s: "EX",
  f: "Java held tigers until the 1970s — an island now home to 150 million people. In 1800 the whole island was tiger habitat. By 1940 they were confined to remote mountains, and by 1976 the last few were in one reserve.",
  lost: "The last credible sighting was in 1976 at Meru Betiri. In 2024 a hair found in 2019 was reported as a genetic match, which has reopened the question — treat that as unresolved rather than as good news.",
  cause: "Java's forest was converted for rice, coffee and rubber, and the deer were hunted out from under the tigers. People and tigers both wanted the lowlands.",
  better: "Protected Meru Betiri before the population fell under about 25. The reserve was created in 1972, which was after the point of no return, and everyone involved knew it at the time." });
vnote("caspiantiger", { d: "Carnivore — boar, deer", h: "From Turkey through Central Asia to western China", s: "EX",
  f: "It followed the river corridors — tugay forest along the Amu Darya, the Tigris, the Caspian shore — through what is otherwise desert. Roman arenas were supplied with them. It is genetically nearly identical to the Amur tiger, which is the fact that matters most: the same animal, still alive, at the other end of the range.",
  lost: "Last records in the 1970s. Probably gone by 1970 in most of the range.",
  cause: "The Soviet Union deliberately exterminated them as part of clearing land for cotton — the Red Army was directly ordered to do it in the 1920s. The tugay forests were cleared and the rivers drained for irrigation, which is also what destroyed the Aral Sea.",
  better: "Not made it state policy. Kazakhstan is now attempting reintroduction using Amur tigers, which is possible only because the genetics turned out to be nearly the same — the first tigers were released into the Ili-Balkhash reserve in 2024. That is the rarest thing in this region: an entry that might get to move." });
vnote("seamink", { d: "Carnivore — fish, shellfish, seabirds", h: "The rocky coast of the Gulf of Maine", s: "EX",
  f: "The largest mink that ever lived, roughly twice the size of the American mink, and it lived on the shore and swam in the sea. We have never had a complete specimen — everything we know comes from bones in Native American shell middens and from fragments the fur traders left. It went extinct before science ever described it properly.",
  lost: "Around 1894, though the date is uncertain because nobody was recording it.",
  cause: "The fur trade. It was bigger than a mink and its pelt was worth more, so it was hunted preferentially and taken first.",
  better: "Described it. This is the only animal here whose extinction is more complete than the others: we do not even fully know what we lost, because it was gone before anyone looked. There are species going out that way right now." });
vnote("bluebuck", { d: "Grazer — grasses", h: "A small area of the southwestern Cape, South Africa", s: "EX",
  f: "A blue-grey antelope — the colour came from black and yellow hairs mixed, not pigment, and it faded after death, so no museum specimen shows what it looked like alive. It was the first large African mammal to be driven extinct in historic times, and only four mounted specimens exist anywhere.",
  lost: "1800. It was described by science in 1766 and gone 34 years later.",
  cause: "Its range was tiny — perhaps 4,300 square kilometres — and European settlers converted it to farmland and shot the animals. Genetics show it was already in low numbers before Europeans arrived.",
  better: "Almost nothing at that date. The bluebuck is here for a specific reason: it demonstrates that a naturally rare species with a small range can be finished in one human generation, and most of the CR animals in this region are naturally rare with small ranges." });
vnote("schomburgksdeer", { d: "Herbivore — grasses and aquatic plants", h: "The swampy central plains of Thailand", s: "EX",
  f: "Its antlers were basket-shaped, branching into as many as 33 points — among the most elaborate of any deer. It lived in seasonally flooded grassland and gathered on high ground as the water rose, which is exactly when hunters could reach it.",
  lost: "The last known wild animal was killed in 1932; a captive one was clubbed to death by a drunk man in 1938.",
  cause: "Rice. Thailand converted its central floodplains to commercial paddy from the late 1800s, and the antlers were sold for traditional medicine. The flooding that concentrated the herds made them trivial to kill.",
  better: "This one has a live coda: a set of antlers turned up in a Laotian medicine shop in 1991, decades after extinction, suggesting a population survived far longer than recorded. Nobody looked, because it was already written off. Declaring a species extinct stops the searching." });
vnote("toolachewallaby", { d: "Herbivore — grasses", h: "Southeastern South Australia", s: "EX",
  f: "Widely called the most beautiful and graceful of all wallabies, with faint stripes and an unusual gait — it alternated a long bound with two short ones. It was also fast enough that hunting it with dogs became a sport.",
  lost: "The last wild one was seen in 1924; the last captive died in 1939.",
  cause: "Hunted for its pelt and for sport, its swamp habitat drained, and foxes finished the remnant.",
  better: "Not botched the rescue. When people finally tried to save it in 1923, they chased the last known group with dogs to capture them — four of the fourteen died of stress and exhaustion during the attempt, and the rest died shortly after. The rescue killed them. It is the clearest case here of good intentions arriving with no idea what they were doing." });
vnote("desertratkangaroo", { d: "Omnivore — leaves, seeds, insects", h: "The stony deserts of central Australia", s: "EX",
  f: "A rabbit-sized marsupial that never drank water. Hedley Finlayson chased one on horseback in 1931 and recorded that it ran at speed for over 12 miles and exhausted three horses before it stopped — an animal weighing about a kilogram.",
  lost: "Last confirmed in 1935.", cause: "Foxes and cats, and the end of Aboriginal fire management, which had maintained the mosaic of vegetation it needed.",
  better: "Understood that the landscape was managed. Australia's mammal extinctions accelerated sharply when Aboriginal people were removed from country and the burning stopped — the desert was not wilderness, it was tended, and that was invisible to the people who cleared it." });
vnote("pigfootedbandicoot", { d: "Herbivore — roots, leaves, seeds", h: "Arid and semi-arid Australia", s: "EX",
  f: "Its forefeet had two functional toes with hooves like a tiny deer, and the hind feet had one — no other marsupial ever did this. Aboriginal accounts describe it in detail and are the main reason we know anything about how it lived, including that it built a grass nest and was nearly vegetarian.",
  lost: "1950s. It was already rare when Europeans first described it in 1838.",
  cause: "Cattle and sheep grazing removed the ground cover, foxes and cats took the animals, and the fire regimes changed.",
  better: "Listened. The best information on this species comes from Aboriginal testimony collected in the 1980s, decades after it was gone, from people who had eaten it and knew its habits. That knowledge existed the whole time and nobody asked until it was history." });
vnote("lesserbilby", { d: "Omnivore — seeds, insects, small rodents", h: "The Gibson and Great Sandy deserts", s: "EX",
  f: "A smaller cousin of the bilby, and the only bandicoot known to have regularly killed and eaten mammals — it took mice in its burrow. It never drank. Its whole known scientific record is a few specimens and a handful of skulls found in eagle nests.",
  lost: "Last specimen collected 1931. Skulls from owl pellets suggest it survived into the 1960s.",
  cause: "Cats and foxes, and the collapse of fire management.",
  better: "The bilby's larger cousin survives in fenced reserves and is doing well. That is what this one needed, and the fences came thirty years late." });

// ===== the birds we lost =====
vnote("moa", { d: "Herbivore — twigs, leaves, fruit", h: "New Zealand", s: "EX",
  f: "Nine species, the largest 3.6 metres tall and 230kg, and they had no wings at all — not tiny wings, none, the only birds ever to lose the bone entirely. New Zealand had no land mammals, so for 60 million years the moa was the deer, the cow and the goat. Their gizzard stones and even feathers survive in caves.",
  lost: "Within about 100-150 years of Polynesian arrival — gone by roughly 1445. It is one of the fastest megafaunal extinctions ever documented.",
  cause: "Hunted, and their eggs eaten. A bird that lays one enormous egg and takes a decade to mature cannot absorb any predation at all. Modelling suggests a population of a few thousand people could have done it in a century without ever intending to.",
  better: "This is a hard and honest entry: Māori arrived in a land with no experience of humans and no way to know that a bird that big could run out. The lesson is not blame — it is that naive fauna plus any predator, of any species, equals extinction, and it is exactly what is happening now to the island birds that survived." });
vnote("haastseagle", { d: "Carnivore — moa", h: "The South Island of New Zealand", s: "EX",
  f: "The largest eagle that ever lived — a three-metre wingspan and talons the size of a tiger's claws, and it hunted moa ten times its weight by striking the pelvis at speed. Māori oral tradition describes a giant bird, te hokioi, that killed people, and for a long time that was dismissed as legend. Then the bones were measured, and there is no reason at all it could not have taken a person.",
  lost: "About 1445, with the moa.", cause: "It ate one thing, and we ate that thing.",
  better: "Nothing available then. It is the cleanest demonstration in the whole Vigil of what happens above a species you remove: the eagle did not need to be hunted. It only needed to be hungry." });
vnote("elephantbird", { d: "Herbivore — fruit", h: "Madagascar", s: "EX",
  f: "Three metres, half a tonne, the heaviest bird that ever lived. Its egg held the volume of about 150 chicken eggs and is the largest single cell known from any animal — the shells are still found in the dunes, and traders carried them, which is almost certainly where Marco Polo's roc came from. Its closest living relative is the kiwi, a chicken-sized bird on another island entirely.",
  lost: "Around 1,000 years ago, though bones with cut marks now push human contact on Madagascar back much further.",
  cause: "Egg predation, mostly. People ate the eggs — the shells turn up in ancient cooking fires. You do not need to hunt an adult if you eat the next generation.",
  better: "Nothing available then. But Madagascar's forest is still going, and the lemurs are following the same curve." });
vnote("labradorduck", { d: "Carnivore — shellfish", h: "The northeastern coast of North America", s: "EX",
  f: "It had a strange soft flexible bill with rows of lamellae, clearly specialised for something — probably sifting small shellfish from sand. It is the first North American bird known to have gone extinct after 1500, and it is the one we understand least. Fewer than 55 specimens exist and none were ever studied alive.",
  lost: "The last confirmed was shot in 1878.",
  cause: "Genuinely unknown. It was never abundant, it was hunted and its eggs taken, and the mussel beds it may have depended on were being wiped out along the eastern seaboard — but nobody was watching, so nobody knows.",
  better: "Looked. This is an animal that vanished from a well-settled coast, in the age of railways and newspapers, and we cannot say why. Absence of information is its own cause of death." });
vnote("heathhen", { d: "Herbivore — seeds, berries, acorns", h: "The coastal scrub of the northeastern US", s: "EX",
  f: "A prairie chicken of the east coast, so common in colonial times that servants had it written into contracts that they would not be fed it more than a few times a week. It is quite likely the bird actually eaten at the first Thanksgiving, rather than the turkey.",
  lost: "The last, a male called Booming Ben, was seen on Martha's Vineyard on 11 March 1932. He had been displaying alone to an empty field for four years.",
  cause: "Hunted out of the mainland by 1870. The last population on Martha's Vineyard was protected in a reserve and grew back to nearly 2,000 — and then a fire in 1916 during the breeding season, a hard winter, an influx of goshawks, and a poultry disease from imported turkeys hit in sequence.",
  better: "Kept more than one population. The heath hen is the textbook case, and it is taught as one: it was saved, the reserve worked, and it still died — because everything was in one place and one bad run of luck reached all of it at once. Genetic diversity had also collapsed. It is why nobody puts a species in a single reserve now." });
vnote("imperialwoodpecker", { d: "Insectivore — beetle larvae in dead pine", h: "The Sierra Madre, Mexico", s: "EX",
  f: "The largest woodpecker that ever lived — 60cm, with a scarlet crest. A single pair needed about 26 square kilometres of old-growth pine. There is one piece of film of a living one, 85 seconds shot by a dentist in 1956, and that is the entire moving record of the species.",
  lost: "Last confirmed 1956. Occasional unconfirmed reports into the 1990s.",
  cause: "Logging of Sierra Madre old growth, and shooting. There is a documented account of a local forester telling a researcher that a logging company had encouraged people to poison and shoot them because the birds were said to damage timber.",
  better: "Protected old growth instead of the bird. It needed dead standing pine over enormous areas, and no amount of not shooting it would have helped once the forest was gone. The same story is currently running on the ivory-billed woodpecker, whose official extinction has been debated and delayed for two decades." });
vnote("laysanhoneycreeper", { d: "Nectarivore — flowers", h: "Laysan Island, Hawaiʻi", s: "EX",
  f: "A small scarlet bird found on one island. Its extinction was witnessed and filmed: in 1923 a scientific expedition found three left, filmed one, and during a sandstorm that same day the last of them was lost. The film exists. It is the only species whose final individual is on record on camera.",
  lost: "1923, during the Tanager Expedition, in front of scientists.",
  cause: "Rabbits. Guano miners released them on Laysan around 1902, and the rabbits ate the entire island — every plant, until Laysan was bare sand. The birds starved.",
  better: "Removed the rabbits. It was proposed years earlier. The rabbits were eventually exterminated in 1923, in the same year the honeycreeper died, and Laysan's vegetation recovered afterwards — the island came back and the bird did not. Two other Laysan species went the same way at the same time." });
vnote("socorrodove", { d: "Granivore — seeds and fruit", h: "Socorro Island, Mexico", s: "EW",
  f: "It fed on the ground on an island with no predators, and was so unafraid that it would land on people. That is why fewer than 200 were taken into captivity before it vanished from the wild — and why every one alive today descends from about 17 birds.",
  lost: "Last seen in the wild in 1972.", cause: "Cats brought by a naval garrison, and sheep that stripped the island's understory.",
  better: "Removed the sheep and cats decades sooner. The good news is real: the sheep are gone, cat eradication is underway, and captive-bred birds from European and American zoos have been returned to the island for release. This is one that may actually get to go home.",
  back: "It survives only because a handful of private aviculturists in Europe kept breeding it for fifty years with no funding and no plan, out of stubbornness. The captive population is entirely their work. Reintroduction to Socorro began once the sheep were removed, and the first releases are underway." });

// ===== extinct in the wild, and coming back =====
vnote("przewalskishorse", { d: "Grazer — steppe grasses", h: "The Mongolian steppe", s: "EW",
  f: "The last truly wild horse on earth — never domesticated, and it has 66 chromosomes where every domestic horse has 64. It is not the ancestor of domestic horses; genetics showed it is a separate lineage, and there is an argument it may itself descend from very early domesticated horses that went feral 5,500 years ago. Nobody expected that result.",
  lost: "Declared extinct in the wild in 1969, when the last wild one was seen in Mongolia.",
  cause: "Hunting, harsh winters, competition with livestock for water, and the capture of foals for zoos — which involved killing the mares.",
  better: "Not taken the foals by killing the adults. But the zoos are also the reason it exists: every Przewalski's horse alive descends from just 12 animals taken into captivity before the wild ones died.",
  back: "It is already back. Reintroduction to Mongolia began in 1992, and there are now hundreds running wild at Hustai and in the Gobi — the species was downgraded from Extinct in the Wild to Endangered, which is a sentence almost no animal gets. Because those 12 founders left the population dangerously inbred, cells frozen in 1980 have since been cloned: a foal named Kurt was born in 2020 carrying genes that had been out of the gene pool for forty years. That is what cloning is actually good for — not resurrection, but putting lost diversity back into a living population.",
});
vnote("peredavidsdeer", { d: "Herbivore — grasses and aquatic plants", h: "The marshes of the Yangtze, China", s: "EW",
  f: "The Chinese call it sibuxiang — 'the four unlikes' — because it has a horse's face, a cow's hooves, a deer's antlers and a donkey's tail, and is none of them. It is a marsh deer with splayed feet for mud, and it had been extinct in the wild in China for perhaps a thousand years before Europeans ever saw one.",
  lost: "The last herd, in the Imperial Hunting Park at Nanhaizi, was destroyed in 1900 — the park wall was breached by flood, the deer were eaten by starving people, and the rest were shot during the Boxer Rebellion.",
  cause: "Its marshes became rice paddy, and the entire species was reduced to one royal hunting park.",
  better: "It is the only animal here saved by an aristocrat's hobby. Before the park was destroyed, a few had been shipped to Europe, and the 11th Duke of Bedford bought every one he could find and put 18 of them at Woburn Abbey. Every Père David's deer alive descends from those 18.",
  back: "Woburn sent them home. Reintroduction to China began in 1985, and there are now several thousand, including free-ranging herds at Dafeng and Shishou that breed on their own in the wild. The species that existed only as a garden ornament in Bedfordshire is back in the marshes it came from, and China now protects the wetland because the deer needed it.",
});
vnote("scimitaroryx", { d: "Grazer — grasses, succulents", h: "The Sahel, at the edge of the Sahara", s: "EW",
  f: "Its horns curve back over a metre in a scimitar arc — and it can survive at body temperatures over 46°C rather than sweat away water it cannot replace, then dump the heat at night. It went months without drinking. It is on Egyptian tomb walls, being led on a rope, 5,000 years ago.",
  lost: "Declared Extinct in the Wild in 2000.",
  cause: "Hunted from vehicles with automatic weapons, mostly during and after the Sahel conflicts, and its grazing land lost to livestock and drought.",
  better: "Not sold rifles and 4x4s into a famine. The oryx was food, and the people shooting it were desperate.",
  back: "This one worked, and it is the best news in the region. A captive population — much of it in private collections in Texas and in Abu Dhabi — was used to restock Chad's Ouadi Rimé reserve starting in 2016. The herd now breeds in the wild, has passed 500 animals, and in 2023 the IUCN moved it from Extinct in the Wild to Endangered. It is the first large mammal ever returned from EW to a self-sustaining wild population.",
});
vnote("spixsmacaw", { d: "Frugivore — seeds of the caraiba tree", h: "The caatinga of Bahia, Brazil", s: "EW",
  f: "A small blue macaw tied to one tree — the caraiba, along seasonal creeks in dry Brazilian scrub. It was always rare. By 1990 there was exactly one male left in the wild, and he paired with a female Blue-winged Macaw for years, because there was nothing else.",
  lost: "The last wild male disappeared in October 2000.",
  cause: "Trapping for the pet trade, and the felling of the caraiba gallery forest for grazing. Every Spix's macaw alive today is descended from birds taken illegally.",
  better: "Bought the trees. A handful of creek-side caraiba was all it ever needed, and it was cheaper to protect them than everything that followed.",
  back: "In June 2022, 20 captive-bred Spix's macaws were released into the caatinga in Bahia, and they have since bred in the wild — the first chicks in over twenty years. The bird that existed only in aviaries is flying in Brazil again. It is the direct result of a legally messy, decades-long captive-breeding effort involving smugglers, collectors, a Qatari sheikh and a German breeding centre, and it is the reason there is anything left to release.",
});
vnote("alala", { d: "Omnivore — fruit, carrion, insects", h: "The forests of Hawaiʻi Island", s: "EW",
  f: "The Hawaiian crow, and one of very few birds in the world known to use tools — it shapes sticks to winkle grubs out of holes, and it does it naturally, not as a trained trick. It was a major seed disperser for Hawaiian forest trees, several of which now have almost nothing left to move their seeds.",
  lost: "The last two wild ʻalalā vanished in 2002.",
  cause: "Avian malaria, ʻio hawks, introduced predators, and the loss of the fruiting forest it dispersed. Shot as a crop pest by ranchers as well.",
  better: "Kept the forest whole. But the captive programme is genuinely good work — the population is over 100 birds.",
  back: "Releases on Hawaiʻi Island in 2016-2020 failed: the birds were killed by ʻio, the native hawk, because captive-raised crows had no idea what a hawk was. The programme regrouped and in late 2024 released ʻalalā on Maui instead, which has no ʻio and had no crows either. That is not restoration in the strict sense — it is a new island — and the team is open about that being a compromise made to keep the species alive at all.",
});
vnote("guamkingfisher", { d: "Carnivore — lizards, insects, crabs", h: "Guam", s: "EW",
  f: "A cinnamon-headed kingfisher that lived nowhere but Guam, and it did not fish — it hunted lizards and insects in forest. In the 1980s biologists caught the last 29 birds by hand and took them into captivity, which is the only reason there is a species to discuss.",
  lost: "Extinct in the wild by 1988.",
  cause: "The brown tree snake, which arrived in Guam in military cargo around 1949 and ate nearly every forest bird on the island. Guam lost ten of its twelve native forest birds. Its forests are now audibly silent, and the loss of the birds has caused a measurable collapse in tree regeneration and a spider population explosion.",
  better: "Cargo inspection. One snake, in one shipment, in the 1940s. Guam is now the most cautionary tale in existence about biosecurity, and it is why Australia and New Zealand check your boots.",
  back: "In September 2024, nine sihek were released on Palmyra Atoll — a snake-free island 6,000km from Guam — and they are hunting and surviving. It is a deliberate compromise: Guam cannot be made safe yet, so the species is being kept alive somewhere else until it can. The Guam birds are now called sihek, their CHamoru name, at the request of the people they belong to.",
});
vnote("wyomingtoad", { d: "Insectivore — insects", h: "The Laramie Basin, Wyoming", s: "EW",
  f: "It lives in one basin in Wyoming and nowhere else on earth. It was common enough in the 1950s that nobody bothered recording it, and it collapsed so fast in the 1970s that the crash was over before anyone could study the cause.",
  lost: "Declared extinct in the wild in 1991. The last wild population died out after a single remnant was found in 1987 at Mortenson Lake.",
  cause: "Chytrid fungus, aerial pesticide spraying for mosquitoes, and habitat change from irrigation.",
  better: "Kept a captive colony from the start. Everything alive descends from a handful of animals rescued from Mortenson Lake.",
  back: "Thousands of captive-bred tadpoles and toadlets are released into the Laramie Basin every year, and some now survive to breed — but the population is not self-sustaining without continual restocking, because the chytrid is still in the water. It is being kept alive by hand, indefinitely. That is what a species on life support actually looks like, and it is worth seeing.",
});
vnote("partulasnail", { d: "Detritivore — decaying leaves and fungus", h: "The valleys of French Polynesia", s: "EW",
  f: "Tiny tree snails, each species confined to a single valley on a single island — Darwin's finches, but slower and in miniature. They were used for decades as a textbook model of how species split, because the valleys made the experiment for us. Then most of them were gone within fifteen years.",
  lost: "Dozens of species extinct in the wild through the 1980s and 90s; several persist only in zoos.",
  cause: "A conservation programme. The giant African land snail was introduced as food, became a pest, and the rosy wolfsnail was then introduced in 1974 to eat it — but the wolfsnail ignored the big snail and ate the Partula instead, valley by valley. It is possibly the worst biological control decision ever made, and it drove around 50 species extinct.",
  better: "Not done it. There was contemporary scientific objection to the wolfsnail release and it was overridden. This is the clearest entry in the Vigil where the extinction was caused by people trying to fix a problem.",
  back: "London Zoo, Edinburgh and a consortium of others have kept Partula alive in cupboards for forty years, and since 2015 have released over 20,000 back into Tahiti and Moorea, into valleys fenced against the wolfsnail. Some are breeding. The snails are marked with a dot of UV paint so surveyors can find them at night.",
});

// ===== the last few =====
vnote("northernwhiterhino", { d: "Grazer — grasses", h: "Formerly Central Africa — Sudan, Chad, Uganda, DRC", s: "CR",
  f: "There are two left: Najin and her daughter Fatu, both female, both at Ol Pejeta in Kenya, both under 24-hour armed guard. The last male, Sudan, died on 19 March 2018 with his keeper's hand on his head. Neither female can carry a pregnancy — Najin has a weak Achilles and is too old, and Fatu has a uterine condition. The species is functionally over, and both animals are alive.",
  lost: "Functionally extinct on 19 March 2018. The wild population was gone by 2008.",
  cause: "Horn. Poaching through the Sudanese and Congolese wars, for a substance made of keratin — the same protein as fingernails — that has no medicinal effect whatsoever and is worth more by weight than gold. There were 2,000 in 1960.",
  better: "Everything, and we knew it at the time. In 2009 four of the last eight were flown from a Czech zoo to Kenya to try to breed them naturally, and it was already too late. The species was watched, counted and guarded all the way down.",
  back: "BioRescue is the attempt, and it is the most serious de-extinction effort anywhere. Eggs are harvested from Fatu under anaesthesia and fertilised with frozen sperm from four dead males — over 30 pure northern white embryos now exist in liquid nitrogen. The plan is to implant them in southern white rhino surrogates, and in 2023 the team proved the technique works by achieving the first-ever rhino IVF pregnancy with a southern white embryo. Separately, stem cells are being made from frozen skin cells of 12 individuals, which could eventually produce eggs and sperm and give the species enough genetic diversity to actually survive. Why bother: because the grassland needs a megaherbivore, because the technique will transfer to the Sumatran and Javan rhinos while they are still alive, and because Najin and Fatu can watch. The honest part: no calf has been born, both females may die before one is, and the whole thing may end as a very expensive proof that we should have simply stopped the poaching.",
});
vnote("javanrhino", { d: "Browser — saplings and shoots", h: "Ujung Kulon, Java — one peninsula", s: "CR",
  f: "Around 76 animals, all in one national park on one peninsula on one island, and not a single one in any zoo anywhere. It is the rarest large mammal on earth. Only the males have a horn, and it is small — barely 25cm. Every individual is known by camera trap.",
  lost: "Not yet.",
  cause: "Poaching took it out of everywhere else. The Vietnamese population was confirmed extinct in 2010 when the last animal was found shot with its horn taken.",
  better: "Split them up. Everything the species has is in Ujung Kulon, which is beside the Krakatoa volcanic complex and inside a tsunami zone — one eruption ends the species. A second population has been discussed for thirty years and has never happened.",
});
vnote("sumatranrhino", { d: "Browser — saplings, fruit, bark", h: "Fragments of Sumatra and Borneo", s: "CR",
  f: "The smallest rhino, covered in reddish hair, and the closest living relative of the woolly rhinoceros — it is the last of that lineage. It sings: a repertoire of whistles and whale-like calls to find each other in dense forest. Fewer than 50 remain, in scattered pockets that cannot find each other.",
  lost: "Not yet. Malaysia's population is gone — the last Malaysian animal, Iman, died in 2019.",
  cause: "Poaching reduced it, but the thing killing it now is loneliness. The animals are so scattered that females go years without meeting a male, and a rhino that does not breed develops fibroids and cysts that make her permanently infertile. The species is sterilising itself through isolation.",
  better: "Consolidated them in the 1990s, when there were still hundreds. Indonesia is now doing exactly that with a sanctuary at Way Kambas where they are bred under human care, and calves have been born — the technique works, it is just decades late and there are almost no animals left to bring in.",
});
vnote("saola", { d: "Herbivore — leaves along forest streams", h: "The Annamite Mountains, Vietnam and Laos", s: "CR",
  f: "It was discovered in 1992 — a large, entirely new mammal, found in the modern era, which almost never happens. It has two long straight parallel horns and is so distinct it needed a new genus. No biologist has ever seen a living saola in the wild. Every photograph in existence is from a camera trap, and there have been five.",
  lost: "Not yet, but the last confirmed photograph was in 2013.",
  cause: "Snares. Not hunted for itself — the Annamites are carpeted with wire snares set indiscriminately for anything with legs, to supply the wild meat trade, and the saola walks into them. Millions of snares have been removed and there are always more.",
  better: "Snare removal at scale, immediately, from 1992. We found it and then watched it disappear inside thirty years, and the effort to find any survivors to start a breeding population has so far found none. It may already be gone.",
});
vnote("amurleopard", { d: "Carnivore — roe deer, sika deer, hares", h: "The Russian Far East and northeast China", s: "CR",
  f: "The northernmost leopard, living in snow, with a coat that grows to 7cm in winter and legs long enough to walk through it. In 2007 there were about 30 left. It is now around 130 — one of the most genuinely successful big cat recoveries anywhere, achieved mostly by creating Land of the Leopard National Park and stopping the poaching.",
  lost: "Not yet, and going the right way.",
  cause: "Poaching for skins, prey depletion, and forest fires set to clear land for farming.",
  better: "The recovery is real but the gene pool is not — every Amur leopard alive is descended from a very small number of animals, and inbreeding is showing. Numbers are not the same as safety.",
});
vnote("hainangibbon", { d: "Frugivore — fruit", h: "One forest patch on Hainan Island, China", s: "CR",
  f: "The rarest primate on earth, and probably the rarest mammal: about 40 animals, in a handful of family groups, in one patch of forest. They sing at dawn — mated pairs duet — and the entire species can be heard from one hillside. In the 1950s there were over 2,000.",
  lost: "Not yet.",
  cause: "Its forest became rubber and pulp plantation, and it was hunted for traditional medicine. It is down to a single population in Bawangling.",
  better: "Not cut the forest. The current work is careful and slow: replanting corridors, and hanging rope bridges across a landslide gap so the groups can reach each other. The gibbons use the ropes. The population is now creeping up, one infant at a time, and every birth is individually reported.",
});
vnote("vancouvermarmot", { d: "Herbivore — alpine grasses and flowers", h: "The mountains of Vancouver Island", s: "CR",
  f: "One of the rarest mammals in North America, and found nowhere else. It has a chocolate-brown coat and a whistle, and it lives in alpine meadows. In 2003 there were about 30 animals left in the wild.",
  lost: "Not yet.",
  cause: "Clearcut logging created open areas that looked like meadows, so the marmots colonised them — and then the trees grew back, trapping them, while the logging roads gave wolves and cougars easy access to colonies that had never had predators reach them.",
  better: "Not created an ecological trap. But this is a rare good ending in progress: captive breeding at Calgary and Toronto zoos plus intensive releases have brought the wild population back over 200. It is not safe, but it is climbing.",
});
vnote("californiacondor", { d: "Scavenger — carrion", h: "California, Arizona, Utah and Baja", s: "CR",
  f: "A three-metre wingspan — the largest land bird in North America. In 1987 there were 22 condors left on earth, and the decision was made to capture every single one, which was bitterly opposed at the time as giving up on the wild. In 2021 researchers discovered that two chicks had been produced by parthenogenesis: two females had reproduced with no male involved at all, which nobody knew condors could do.",
  lost: "Extinct in the wild in 1987, by choice.", cause: "Lead. Condors eat carcasses shot with lead ammunition, and lead fragments dissolve in their stomach acid and paralyse the gut. They starve with full stomachs. Also DDT and shooting.",
  better: "Banned lead ammunition earlier. That is still the whole problem — over 500 condors now exist, half of them flying wild, and lead poisoning remains the leading cause of death. Every wild condor is trapped roughly twice a year and chelated to strip the lead out of its blood. The species is alive because we hold it up.",
  back: "The Yurok Tribe led the return of condors to northern California in 2022, after a century's absence — prey-go-neesh is central to Yurok ceremony, and the tribe drove the reintroduction. It is one of the few programmes in this region run by the people whose bird it is.",
});
vnote("whoopingcrane", { d: "Omnivore — crabs, clams, insects, grain", h: "Wood Buffalo, Canada, to Aransas, Texas", s: "CR",
  f: "In 1941 there were 15 birds left in the entire world. There are now over 800. Every whooping crane alive descends from those 15, and their migration is 4,000km, learned rather than instinctive — which meant that captive-bred birds had no idea where to go.",
  lost: "Not yet.", cause: "Wetland drainage and shooting.",
  better: "The recovery is famous and the methods are extraordinary: chicks are raised by handlers wearing full crane costumes so they never imprint on people, and a reintroduced eastern flock was taught its migration route by following an ultralight aircraft flown by a man in a crane suit, all the way to Florida. That programme ran from 2001 to 2016.",
  back: "The costume-rearing and ultralight migration are the most-copied techniques in bird conservation, and they exist because someone worked out that the knowledge — not just the bird — had gone extinct, and had to be put back by hand.",
});
vnote("redwolf", { d: "Carnivore — deer, raccoons, rodents", h: "Eastern North Carolina", s: "CR",
  f: "Around 20 animals in the wild, in one county in North Carolina. In 1980 it was declared extinct in the wild and 14 animals became the founders of everything alive today. Its taxonomy has been argued over for decades — whether it is a species or a wolf-coyote hybrid — and that argument has been used repeatedly as a reason not to protect it.",
  lost: "Extinct in the wild 1980; reintroduced 1987.", cause: "Predator eradication programmes and habitat loss, then hybridisation with coyotes that moved into the space it left.",
  better: "Not let the argument stall the work. A 2019 study found red wolf genes surviving in coyotes on Galveston Island — the species is partly hiding inside another one. Most red wolf deaths now are gunshots.",
  back: "The red wolf recovery programme pioneered nearly everything used since: captive breeding for release, sterile coyote placeholders to hold territory, and fostering captive-born pups into wild dens where the wild parents raise them as their own. Those techniques went on to save other species. The red wolf itself is still at about 20 animals.",
});
vnote("tapanuliorangutan", { d: "Frugivore — fruit, caterpillars", h: "The Batang Toru forest, Sumatra", s: "CR",
  f: "Described as a new species in 2017 — the first new great ape named in nearly a century, and the rarest great ape on earth at about 800 individuals. It has frizzier hair and a different call than other orangutans, and its lineage is actually the oldest of the three, which means it is the closest thing to the ancestral orangutan.",
  lost: "Not yet.",
  cause: "A hydroelectric dam in the middle of its only forest, plus roads and gold mining. It exists in one 1,000km² block and the dam splits it.",
  better: "This is happening right now. It was named a species and immediately put on the brink by a project already under construction, and the argument over that dam is live. There is still time to be the generation that did something, which is not true of most of this region.",
});
vnote("yangtzesofttshell", { d: "Carnivore — fish, crabs, snails", h: "The Yangtze basin and Red River, China and Vietnam", s: "CR",
  f: "The largest freshwater turtle on earth — a metre across, over 100kg, with a pig-like snout — and there are two or three left, possibly two. The known female died in 2019 in China during an artificial insemination attempt, leaving one confirmed male in Suzhou and one or two unconfirmed animals in Vietnamese lakes.",
  lost: "Effectively over.",
  cause: "Eaten, its habitat dammed and polluted, and its wetlands drained. In Vietnam it is Cụ Rùa, a sacred figure in the founding legend of Hanoi, and reverence did not save it.",
  better: "Searched the lakes sooner. The last female was found in a Chinese zoo, unrecognised, decades after she could have been breeding. Individuals sat unidentified in collections while the species died.",
});
vnote("finlessporpoise", { d: "Carnivore — fish and shrimp", h: "The Yangtze River", s: "CR",
  f: "About 1,200 animals, and the only porpoise that lives in fresh water. It has no dorsal fin at all — just a ridge of tubercles — and it has a face that reads to people as a permanent smile, which has made it the emblem of the river. It is the last cetacean in the Yangtze.",
  lost: "Not yet, and the numbers have just stopped falling.",
  cause: "Everything that killed the baiji, still running: shipping noise, sand dredging, entanglement, and the collapse of the river's fish.",
  better: "Learned from the baiji faster. It is being done: China imposed a ten-year total fishing ban on the Yangtze in 2020, and a 2022 survey found the porpoise population had increased for the first time in decades. This is the animal the baiji's death bought — and if it makes it, it will be because a country stopped fishing an entire river.",
});
vnote("kempsridley", { d: "Carnivore — crabs", h: "The Gulf of Mexico", s: "CR",
  f: "The rarest sea turtle, and the only one that nests in daylight in one enormous synchronised mass called an arribada — thousands of females coming ashore together. In 1947 a home movie recorded around 42,000 nesting on one Mexican beach in a single day. By 1985 the entire species produced about 700 nests.",
  lost: "Not yet.",
  cause: "The eggs were taken by the ton, and the adults drowned in shrimp trawls. The arribada, its defence against predators, made it trivial to harvest.",
  better: "The turtle excluder device — a grid in a trawl net that lets a turtle out — was invented in the 1970s and resisted by the shrimp industry for over a decade. It works. Nest numbers climbed back over 20,000 before the Deepwater Horizon spill and a stall since. It is the clearest case in the Vigil of a solved problem taking twenty years to deploy because it was inconvenient.",
});
vnote("regenthoneyeater", { d: "Nectarivore — ironbark and box eucalypt nectar", h: "Southeastern Australia", s: "CR",
  f: "Around 300 birds. In 2021 researchers found the males are forgetting their own song — there are now so few adults that young males cannot find one to learn from, and they are copying friarbirds and wattlebirds instead. Females will not mate with a male singing the wrong song. The species is losing its culture faster than its population.",
  lost: "Not yet.", cause: "The box-ironbark woodland it feeds in was cleared for farming — 75% of it is gone, and what remains is fragmented.",
  better: "Kept the trees. What is being done now is remarkable: captive-bred males are taught the correct song by playing them recordings of wild regent honeyeaters before release. We are teaching a bird its own language back from a tape.",
});
vnote("orangebelliedparrot", { d: "Granivore — seeds of saltmarsh plants", h: "Breeds in southwest Tasmania, winters on the mainland", s: "CR",
  f: "One of only three parrots on earth that migrate — and it crosses Bass Strait, 240km of open ocean, twice a year, in a bird weighing 45 grams. In 2016 only three wild females returned from migration.",
  lost: "Not yet.", cause: "Its saltmarsh wintering habitat was drained and built on, and a tiny population then hit disease and inbreeding.",
  better: "Protected the mainland saltmarsh. The wild population survives only because captive-bred birds are released into the breeding site at Melaleuca every year — the wild flock is now around 70 birds and cannot persist without that top-up. Like the Wyoming toad, it is a species being carried.",
});
vnote("rustypatchedbumblebee", { d: "Nectarivore — a wide range of flowers", h: "The upper midwest and northeast US", s: "CR",
  f: "It was one of the commonest bumblebees in the eastern US in the 1990s — an ordinary bee that anyone might see in a garden. It has declined about 87% and vanished from most of its range in roughly twenty years. In 2017 it became the first bee ever listed under the US Endangered Species Act.",
  lost: "Not yet.", cause: "Most likely a fungal pathogen spread from commercial bumblebee colonies used to pollinate greenhouse tomatoes, plus neonicotinoid pesticides and the loss of flowering meadow.",
  better: "Regulated the commercial bee trade. The disease-spillover hypothesis is not fully proven, but the timing of the crash matches the industry's growth almost exactly, and several related bumblebees crashed at the same moment.",
});
vnote("franklinsbumblebee", { d: "Nectarivore — lupine, poppy, horsemint", h: "A 500km² area of southern Oregon and northern California", s: "CR",
  f: "It had one of the smallest ranges of any bumblebee on earth — a patch of country between two mountain ranges, and nowhere else. Robbin Thorp surveyed it every year for decades. He counted 94 in 1998, then 20, then 9, then 3, then 1, and then none. He kept going out to look every summer until he died in 2019.",
  lost: "Last seen in 2006. Not formally declared extinct — it was listed as Endangered in 2021, for an animal nobody has found in fifteen years.",
  cause: "Probably the same pathogen from commercial colonies. Nothing else explains a crash that fast in intact habitat.",
  better: "Believed him. Thorp reported the collapse in real time and the listing came fifteen years after the last sighting. It is the cleanest example here of an extinction happening in full view of an expert who was saying so, out loud, the entire time.",
});
vnote("angelshark", { d: "Carnivore — ambush predator on flatfish", h: "The northeast Atlantic and Mediterranean", s: "CR",
  f: "A shark shaped like a ray, which buries itself in sand and strikes upward in a tenth of a second. It was once so common in the Mediterranean and around Britain that it was an ordinary commercial catch. It is now effectively gone from the whole Mediterranean, and its last stronghold on earth is the waters around the Canary Islands.",
  lost: "Not yet, but functionally gone from most of its range.",
  cause: "Bottom trawling. It lies on the seabed, which is exactly what a trawl scrapes. It was never targeted — it was simply in the way, every time, everywhere, for a century.",
  better: "Trawl regulation. This is the animal that shows bycatch alone, with no market and no malice, is enough to remove a species from an entire sea.",
});
vnote("hirola", { d: "Grazer — short grasses", h: "The Kenya-Somalia border", s: "CR",
  f: "Between 300 and 500 animals, and it is the most endangered antelope on earth. It is the last member of its entire genus — if it goes, it takes a lineage that split off millions of years ago, and there is no close relative left to hold any of it. There is not a single hirola in any zoo anywhere in the world.",
  lost: "Not yet.", cause: "Rinderpest in the 1980s, drought, poaching, and the loss of its grassland to shrub — which happened because elephants were poached out and stopped knocking the shrubs down.",
  better: "Kept the elephants. The hirola is dying partly because a different animal was removed decades earlier, and the grass it needs is being lost to bush that nothing is left to control.",
});
vnote("damagazelle", { d: "Browser — acacia leaves and grass", h: "The Sahara and Sahel", s: "CR",
  f: "The largest gazelle, and the fastest — and there are fewer than 200 in the wild, scattered across the entire Sahara in tiny groups that will never meet. It is depicted on Egyptian tomb walls. It survives in captivity in reasonable numbers.",
  lost: "Not yet.", cause: "Hunting from vehicles and competition with livestock at the few remaining water points.",
  better: "The same as the scimitar oryx, in the same countries, with the same solution available — and the oryx got the reintroduction programme and this one has not. It is a straightforward case of a species that could be saved with a technique that already exists and has already been proven, next door.",
});
vnote("crossrivergorilla", { d: "Folivore — leaves, stems, fruit", h: "The Nigeria-Cameroon border", s: "CR",
  f: "About 250 animals — the rarest gorilla, and so wary of people that most of what we know comes from nests and camera traps rather than observation. They live in about 11 fragmented groups across a mountainous border region, and some of the groups may not have met in generations.",
  lost: "Not yet.", cause: "Hunting and forest clearance in a region with two national governments, difficult terrain and no strong enforcement.",
  better: "Corridors. The animals exist; the problem is that they are in pieces. This is the gorilla nobody has heard of, and it is the one closest to going.",
});
vnote("sumatranorangutan", { d: "Frugivore — fruit, especially figs", h: "Northern Sumatra", s: "CR",
  f: "It is more social and more arboreal than the Bornean species — it will come down to the ground almost never, because Sumatra still has tigers. Some populations have been observed using sticks to extract seeds from neesia fruit, a tool tradition passed down locally, which means orangutan culture varies by valley.",
  lost: "Not yet.", cause: "Palm oil, pulpwood, roads and fire. Its lowland forest is the most valuable land in Sumatra for everyone except the orangutan.",
  better: "Not everything is lost here — the Leuser Ecosystem is still intact enough to hold a real population, and it is the last place on earth where orangutans, tigers, rhinos and elephants all still live in the same forest. That is the argument for defending one specific place rather than one species.",
});
vnote("sumatrantiger", { d: "Carnivore — deer, boar, tapir", h: "Sumatra", s: "CR",
  f: "The last tiger in Indonesia — Bali's and Java's are already gone, and this is the third and final one. About 400 remain. It is the smallest surviving tiger, with the darkest coat and the heaviest ruff, and it is genetically distinct enough that it has been argued to be a separate species.",
  lost: "Not yet.", cause: "Forest cleared for palm oil, snares set for it and for its prey, and its parts sold openly.",
  better: "Sumatra has now lost two of the three Indonesian tigers within living memory, and the pattern that killed them — clearance, then snares, then a last reserve created too late — is running again, in the same country, with the same species, and the timeline is documented. There is no ambiguity about what happens next if nothing changes.",
});
vnote("southchinatiger", { d: "Carnivore — deer and boar", h: "Southern China", s: "EW",
  f: "It may be the ancestral tiger — the stem population that all other tigers descend from. There are around 200 in Chinese zoos, all descended from six animals, and not one has been seen in the wild since the 1970s.",
  lost: "Functionally extinct in the wild since the 1990s; no confirmed sighting since 1970.",
  cause: "It was declared a pest. Mao's government organised anti-pest campaigns in the 1950s and 60s that killed tigers as vermin, with organised hunting teams and bounties. There were over 4,000 at the start.",
  better: "Not declared a national extermination. This is one of the very few extinctions in this region that was carried out as deliberate government policy against a specific animal.",
  back: "There is an attempt, and it is strange: South China tigers were shipped to a private reserve in South Africa from 2003 to learn to hunt, on the theory that captive-bred tigers cannot be released without knowing how. They bred, and their cubs learned to kill. The problem is that China has no prepared habitat with enough prey to receive them, so the tigers are rewilded and there is nowhere to send them. It is a solution waiting on the part nobody funded.",
});
vnote("chinesegiantsalamander", { d: "Carnivore — fish, crabs, insects", h: "Mountain streams of central China", s: "CR",
  f: "The largest amphibian on earth — 1.8 metres — and it has barely changed in 170 million years. It has no gills and no lungs worth the name; it absorbs oxygen through the folds of skin along its sides. It barks, and the cry is said to sound like a human infant, which is where its Chinese name — wa wa yu, baby fish — comes from. A 2019 study found it is not one species but at least five, several of which may already be gone.",
  lost: "Not yet, but wild individuals are now almost impossible to find.",
  cause: "Eaten as a luxury dish. Farming was supposed to relieve pressure on the wild ones and did the opposite — farms are stocked with wild-caught animals, and escapees and releases have mixed the distinct lineages together into a genetic blur.",
  better: "Recognised the species boundaries before the farms mixed them. Millions of salamanders exist on farms right now, and almost none of them are anything you could release, because nobody knows what they are any more. The species may be conserved to death.",
});

// woolly mammoth: it already has a note; add the de-extinction section Ayr asked for
vnote("mammoth", {
  back: "Colossal Biosciences is editing Asian elephant cells — the mammoth's closest relative, sharing about 99.6% of its genome — toward mammoth traits: hair, fat, cold-tolerant haemoglobin, small ears. The stated aim is not a curiosity but a job: to put a large grazer back on the Siberian tundra, on the argument that mammoth grazing maintained the grassland, and that grassland reflects more sunlight and keeps permafrost frozen better than the mossy shrub tundra that replaced it. Melting permafrost releases carbon. The honest objections: it would be an edited elephant, not a mammoth; elephants have 22-month pregnancies and are themselves endangered; an artificial womb for one does not exist; the ecological argument is contested; and the same money would protect a lot of living elephants. The counter-argument the team makes is that the tools built along the way — the genetic rescue techniques — go straight into saving the animals still here, and that is not nothing.",
});
