// ---------- CHAPTER XXII — Part 27: MORE FIELD NOTES ----------
// Same rules. Nothing invented. Statuses I wasn't sure of are left for later.

const note2 = (k, d, h, s, f) => { if (DEX[k]) INFO[k] = { d, h, s, f }; };

// ===== sharks =====
note2("greenlandshark", "Carnivore — fish, seals, carrion", "Deep cold water of the North Atlantic and Arctic", "VU",
  "The longest-lived vertebrate known: one was aged at roughly 400 years, meaning it was swimming before Newton was born. It doesn't reach sexual maturity until about 150. Nearly every one is blind, because a parasite eats its corneas — and it doesn't seem to matter, because it hunts in darkness anyway.");
note2("goblinshark", "Carnivore — fish, squid", "Deep sea, worldwide", "LC",
  "Its jaws are on a pair of ligament slings and fire forwards out of its face to catch prey — the fastest bite of any shark, and it retracts afterwards. It is pink because its skin is translucent and the blood shows through. It has barely changed in 125 million years.");
note2("thresher", "Carnivore — schooling fish", "Open ocean, worldwide", "VU",
  "The tail is as long as the rest of the animal and it uses it as a whip: it swims into a bait ball and cracks the tail overhead fast enough to stun fish dead in the water, then eats them at leisure. The strike breaks the sound barrier underwater and leaves a trail of cavitation bubbles. It is one of the very few animals that hunts with a weapon that is part of its body.");
note2("makoshark", "Carnivore — tuna, swordfish", "Open ocean, worldwide", "EN",
  "The fastest shark alive — clocked over 70km/h in bursts, and it leaps clear of the water. It is partly warm-blooded, keeping its muscles above sea temperature, which is what makes that speed possible. It routinely eats swordfish, which is not a fair fight either way.");
note2("baskingshark", "Filter feeder — zooplankton", "Cool coastal water, worldwide", "EN",
  "The second-largest fish on earth, and it eats animals the size of a grain of rice — it filters up to 2,000 tonnes of water an hour with its mouth held open. It has almost no teeth. Rotting carcasses of them washed ashore are the source of a long list of 'sea serpent' reports.");
note2("bullshark", "Carnivore — fish, turtles, other sharks", "Coasts, and far up rivers", "VU",
  "The only shark that lives comfortably in fresh water — it regulates its own salt balance and has been found 4,000km up the Amazon and in the Mississippi at Illinois. There are bull sharks in a golf course lake in Australia. That river tolerance is why it accounts for a disproportionate share of attacks on people.");
note2("wobbegong", "Carnivore — ambush predator on fish and octopus", "Reefs of Australia and Indonesia", "LC",
  "A carpet shark: it lies flat on the bottom, fringed with skin flaps that look exactly like weed, and waits — the camouflage is so complete that fish swim into its mouth. It can swallow prey nearly its own size. People step on them, which is the only way anyone gets bitten.");
note2("epaulette", "Carnivore — worms, crabs", "Shallow reef flats of Australia and New Guinea", "LC",
  "It walks. When the tide drops it uses its fins as legs to cross the exposed reef from pool to pool, out of water. It can survive an hour without oxygen by shutting down parts of its own brain — it is being studied for what that might teach us about strokes.");
note2("hammerhead", "Carnivore — rays, mostly", "Warm coastal water, worldwide", "CR",
  "The head is a sensor array: it spreads the electroreceptors wide enough to detect a ray's heartbeat buried under sand, and gives it almost 360-degree vision. Great hammerheads pin stingrays with it. They school in the hundreds by day for reasons nobody has fully explained.");
note2("tigershark", "Carnivore — anything at all", "Warm coasts, worldwide", "NT",
  "It has been found with licence plates, tyres and armour in its stomach, and it genuinely does eat almost anything, including other sharks and albatross chicks that land badly. Its teeth are serrated on a curve that saws through turtle shell. Young ones are striped, and the stripes fade.");
note2("frilledshark", "Carnivore — squid", "Deep sea, worldwide", "LC",
  "It looks like an eel with 300 teeth in 25 rows, all pointing backwards, so nothing that enters ever leaves. It may strike by lunging like a snake. Its pregnancy is thought to run three and a half years, the longest of any vertebrate.");

// ===== rays =====
note2("sawfish", "Carnivore — schooling fish", "Shallow coastal and river mouths of the tropics", "CR",
  "That saw is covered in electroreceptors — it detects fish in murky water and then slashes sideways through the school to cut them in half. It is a ray, not a shark. Every species is critically endangered, mostly because a saw is the perfect shape for getting caught in a net.");
note2("mantisshrimp", "Carnivore — crabs, snails, fish", "Tropical reefs", "LC",
  "Its club accelerates like a bullet and hits so fast the water around it boils into a cavitation bubble — the collapse produces a second shockwave, a flash of light, and briefly reaches temperatures near the sun's surface. It breaks aquarium glass. It also has up to 16 colour receptors to our three, and sees polarised light we have no word for.");

// ===== fish =====
note2("clownfish", "Omnivore — algae, plankton", "Anemones of the Indo-Pacific", "LC",
  "It lives inside a stinging anemone that would kill any other fish of its size, protected by a mucus coat. Every clownfish is born male; the largest becomes the female, and when she dies her mate changes sex and takes her place. The film got that exactly backwards.");
note2("parrotfish", "Herbivore — algae scraped off coral", "Tropical reefs", "LC",
  "The white sand on a tropical beach is largely parrotfish droppings — it bites off coral to get the algae, grinds the rock in its throat, and passes the rest. One fish can produce hundreds of kilos of sand a year. At night it spins itself a sleeping bag of mucus that hides its scent from predators.");
note2("wrasse", "Carnivore — parasites off other fish", "Tropical reefs", "LC",
  "It runs a cleaning station: big predators queue up and hold still while it swims into their mouths and gills to eat their parasites. Nothing eats it. It has passed the mirror self-recognition test — one of very few non-mammals ever to do so, which caused an argument that is still going.");
note2("pufferfish", "Omnivore — invertebrates, algae", "Warm coasts, worldwide", "LC",
  "It inflates by swallowing water into a stomach that has lost the ability to digest anything and become a balloon. Its tetrodotoxin has no antidote and is over a thousand times deadlier than cyanide; it doesn't make the poison itself, it gets it from bacteria in its food. One species of male spends a week building a two-metre geometric pattern in the sand to attract a female.");
note2("lionfish", "Carnivore — fish, shrimp", "Native to the Indo-Pacific; invasive in the Atlantic", "LC",
  "In its own ocean it is unremarkable. Released into the Caribbean, it has become one of the worst marine invasions ever recorded — no predators, breeding year-round, and it eats juvenile reef fish faster than they can replace themselves. The only meaningful control is people spearing them and putting them on menus.");
note2("moray", "Carnivore — fish, octopus", "Reefs and rocky coasts, worldwide", "LC",
  "It has a second set of jaws in its throat that shoot forward, grab, and drag prey down — the only animal known to do this, and the direct inspiration for the creature in Alien. The gaping mouth is not a threat, it is how it breathes. It hunts cooperatively with groupers, which is rare across species.");
note2("anglerfish", "Carnivore — anything it can fit", "Deep sea, worldwide", "LC",
  "The lure is a living lamp: bacteria it farms, glowing in the dark. In some species the male is a fraction of her size, finds her, bites on, and fuses — his body dissolves into hers until nothing is left but testes attached to her flank, drawing blood from her circulation. She can carry several.");
note2("coelacanth", "Carnivore — fish, squid", "Deep rocky slopes off East Africa and Indonesia", "CR",
  "Known only from 400-million-year-old fossils, and declared extinct for 65 million years — until a museum curator found one on a fishing boat in South Africa in 1938. Its fins are on fleshy lobes that move like limbs. It is more closely related to us than to a tuna.");
note2("oarfish", "Filter feeder — zooplankton", "Deep open ocean, worldwide", "LC",
  "The longest bony fish alive — up to 11 metres of ribbon with a red crest. It swims vertically, head up, which is not what anything else does. It is almost certainly the origin of the sea serpent, and in Japanese folklore its appearance at the surface is said to warn of earthquakes.");
note2("sunfishmola", "Carnivore — jellyfish, mostly", "Open ocean, worldwide", "VU",
  "It can weigh over two tonnes and it lives on jellyfish, which is like trying to run a car on rice paper — so it has to eat constantly. It starts life as a larva the size of a pinhead and grows sixty million times, more than any other vertebrate. It basks flat on the surface to let seabirds pick parasites off it.");
note2("seahorse", "Carnivore — tiny crustaceans", "Seagrass and reef, worldwide", "VU",
  "The male carries the pregnancy: she deposits eggs into his pouch, he fertilises them, nourishes them and gives birth. It has no stomach, so food passes straight through and it must eat almost constantly. It is one of the slowest fish in the sea and hunts by ambush, striking with the fastest head-flick anyone has measured.");
note2("leafyseadragon", "Carnivore — mysid shrimp", "Kelp and seagrass off southern Australia", "LC",
  "Those leaves are not fins — they do nothing but look exactly like drifting weed, and it is one of the finest camouflages in the ocean. The two tiny real fins are almost invisible, so it appears to drift rather than swim. The male carries the eggs on the underside of his tail.");
note2("mimicoctopus", "Carnivore — small fish, crabs", "Muddy shallows of Southeast Asia", "DD",
  "It doesn't just camouflage — it impersonates. It has been filmed doing a flatfish, a lionfish, and a sea snake, and it appears to choose which one based on which predator is nearby. It was only discovered in 1998, which suggests how good it is.");
note2("cuttlefish", "Carnivore — crabs, fish", "Coastal waters, worldwide", "LC",
  "It is colourblind and yet it is the best colour-matcher in the ocean — the current theory is that it reads colour through the shape of its own W-shaped pupil, splitting light like a prism. Its skin runs millions of pigment sacs it controls directly. Small males impersonate females to walk straight past guarding rivals.");
note2("giantsquid", "Carnivore — fish, other squid", "Deep ocean, worldwide", "LC",
  "It has the largest eye of any animal, the size of a dinner plate — big enough to see the faint glow of a sperm whale disturbing plankton as it descends. Nobody photographed a living one until 2004. Sperm whales are covered in scars from their suckers.");
note2("nautilus", "Scavenger — carrion, moults", "Deep reef slopes of the Indo-Pacific", "EN",
  "Essentially unchanged for 500 million years — the last shelled relative of squid and octopus. It has around 90 tentacles with no suckers, and pinhole eyes with no lens, like a camera obscura. It is being fished out for its shell, and it breeds so slowly that populations do not come back.");
note2("boxjelly", "Carnivore — fish, shrimp", "Coastal Indo-Pacific", "LC",
  "It has 24 eyes in four clusters, some with lenses, corneas and retinas — real eyes — and no brain to speak of, just a nerve ring. And it swims deliberately, navigating around obstacles. Its venom is among the fastest-acting in nature: it attacks the heart directly and can kill a person in minutes.");
note2("lionsmane", "Carnivore — fish, plankton", "Cold northern seas", "LC",
  "Tentacles recorded at over 36 metres, longer than a blue whale, trailing from a bell the size of an umbrella. It is one of the longest animals on earth by any measure. Sherlock Holmes solved a murder that turned out to be one of these.");
note2("coconutcrab", "Omnivore — fruit, nuts, carrion", "Islands of the Indian and Pacific Oceans", "VU",
  "The largest land arthropod alive — a metre across the legs, and it climbs trees and cracks coconuts with the strongest pinch of any crustacean, comparable to a lion's bite. It cannot swim and will drown. There is decent circumstantial evidence they scavenged Amelia Earhart's remains.");
note2("spidercrab", "Scavenger — carrion, molluscs", "Deep water off Japan", "DD",
  "The largest arthropod on earth: nearly four metres claw to claw, and thought to live a century. It decorates its own shell with sponges and anemones as camouflage. Despite the span, the body is only about 40cm.");

// ===== marine mammals =====
note2("walrus", "Carnivore — clams, sucked out of the shell", "Arctic coasts", "VU",
  "It finds clams in the dark with 400-700 whiskers that are as sensitive as our fingertips, then sucks the meat out with a piston-like vacuum — it doesn't crack them. The tusks are teeth, used to haul itself onto ice and to fight. As the sea ice goes, herds haul out on land in tens of thousands and calves are crushed.");
note2("sealion", "Carnivore — fish and squid", "Coasts of the Pacific and southern oceans", "LC",
  "Sea lions have external ear flaps and can rotate their hind flippers under them to walk on land; true seals can do neither, and that's how you tell them apart. It is one of the few animals proven to keep a beat — a sea lion named Ronan can bob in time to music she has never heard, better than most people. It swims by rowing with its front flippers, where seals push with the back.");
note2("elephantseal", "Carnivore — deep-water fish and squid", "Coasts of the Pacific and the sub-Antarctic", "LC",
  "It dives to 1,500 metres and holds its breath for two hours — it collapses its own lungs on the way down and runs on oxygen stored in its blood and muscle. Bulls weigh over two tonnes and fight for hours. Northern elephant seals were hunted to perhaps 20 animals and came back to 200,000, all of them alarmingly inbred.");
note2("leopardseal", "Carnivore — penguins, krill, other seals", "Antarctic pack ice", "LC",
  "One of the few predators that eats other seals. It sings underwater for hours in the breeding season — long, eerie, stereotyped songs, upside down, that carry for kilometres. A famous encounter had one repeatedly bringing live penguins to a photographer, apparently trying to teach him to feed himself.");
note2("weddellseal", "Carnivore — fish and squid", "Fast ice of Antarctica", "LC",
  "It lives further south than any other mammal, under the ice, and keeps its own breathing holes open by rasping them with its teeth — which wears the teeth out, and that is what eventually kills it. It dives for over an hour under a solid ceiling and finds its way back to a hole in the dark.");
note2("crabeaterseal", "Filter feeder — krill, not crabs", "Antarctic pack ice", "LC",
  "Possibly the most abundant large mammal on earth after us — millions of them — and it eats no crabs at all. Its teeth interlock into a sieve for straining krill. Most adults carry long parallel scars from leopard seals that tried for them as pups.");
note2("harpseal", "Carnivore — fish and crustaceans", "North Atlantic and Arctic pack ice", "LC",
  "The white-coated pup is nursed for just 12 days on milk that is nearly half fat, triples its weight, and is then abandoned on the ice to work it out alone. That white coat is why it became the face of the anti-sealing movement. It moults to grey within weeks.");
note2("monkseal", "Carnivore — fish, octopus, lobster", "Hawaii and the Mediterranean", "EN",
  "One of the rarest seals on earth. The Caribbean monk seal is already gone — declared extinct in 2008, the only seal species we have driven out entirely. The Hawaiian one is down to around 1,500, and the Mediterranean one to a few hundred.");
note2("manatee", "Herbivore — seagrass, up to 50kg a day", "Warm shallow coasts and rivers of the Atlantic", "VU",
  "Its teeth are on a conveyor: worn ones fall out at the front and new ones march forward from the back, forever, because seagrass is full of grit. It has no natural predators and almost all its deaths are boats. Columbus recorded seeing three mermaids and noted they were not as beautiful as painted.");
note2("dugong", "Herbivore — seagrass", "Shallow coasts of the Indo-Pacific", "VU",
  "It ploughs furrows through seagrass meadows that are visible from the air, eating roots and all — it farms as much as it grazes, because the disturbance encourages regrowth. Unlike a manatee its tail is a fluke, like a whale's. It can live 70 years and breeds so slowly that a population can never recover fast.");
note2("bowhead", "Filter feeder — krill and copepods", "Arctic, under and around the ice", "LC",
  "It may be the longest-lived mammal on earth: harpoon points from the 1800s have been cut out of living whales, and one was estimated at over 200 years. It has the thickest blubber of any animal, half a metre, and breaks breathing holes through ice 20cm thick with its head. Its baleen is the longest of any whale.");
note2("rightwhale", "Filter feeder — copepods", "North Atlantic coasts", "CR",
  "It was called the 'right' whale to hunt because it is slow, comes close to shore, and floats when dead. Fewer than 400 North Atlantic right whales remain, and almost every death now is a ship strike or a rope. The callosities on its head are patches of roughened skin, unique to each animal, and covered in pale whale lice.");
note2("graywhale", "Filter feeder — bottom-dwelling amphipods", "Coasts of the North Pacific", "LC",
  "It rolls onto its side and sucks mud off the sea floor, straining out the animals — the only whale that feeds that way, and it leaves visible pits behind. Its migration runs 16,000-20,000km a year. Whalers called it the devil fish for how ferociously it defended calves; the Atlantic population is long gone.");
note2("finwhale", "Filter feeder — krill and small fish", "Every ocean", "VU",
  "The second-largest animal that has ever lived, and asymmetrically coloured — the right side of its jaw is white and the left is dark, which is thought to help it herd fish as it rolls. It is one of the fastest big whales, once called the greyhound of the sea. Nearly three-quarters of a million were killed in the 20th century.");
note2("minke", "Filter feeder — krill and small fish", "Every ocean", "LC",
  "The smallest of the big baleen whales, and the one that is still commercially hunted. It is curious and will approach boats. Its call includes a sound so strange — the 'bio-duck', a mechanical quacking heard across the Southern Ocean for decades — that nobody knew what was making it until 2014.");
note2("pilotwhale", "Carnivore — squid", "Deep water, worldwide", "LC",
  "It is a dolphin, not a whale, and it is one of the very few mammals besides us where females live long past the end of breeding — grandmothers lead. Bonds are so tight that whole pods strand together following one sick animal. That loyalty is exactly what the drive hunts exploit.");
note2("falsekiller", "Carnivore — fish, squid, sometimes dolphins", "Warm deep water, worldwide", "NT",
  "Named because its skull resembles an orca's, not its behaviour. It shares food deliberately — passing a fish around the group before anyone eats, which almost nothing else does. It hunts cooperatively with bottlenose dolphins, and the two species travel together for years.");
note2("rissos", "Carnivore — squid", "Deep water, worldwide", "LC",
  "It gets whiter with age, because it is covered in scars — from squid it has fought and from other Risso's — and the scars never fade, so an old one is nearly white. It has no teeth in its upper jaw at all. That blunt head has no beak, which is how you know it at a distance.");
note2("irrawaddy", "Carnivore — fish", "Rivers and coasts of Southeast Asia", "EN",
  "It spits water — an actual jet, up to 1.5m — apparently to herd fish. In parts of Myanmar it has cooperated with human fishers for generations: the dolphins drive fish into the nets and take what escapes, and the families know individual dolphins. That partnership is now dying out with the dolphins.");
note2("amazonriverdolphin", "Carnivore — fish, crabs, small turtles", "The Amazon and Orinoco basins", "EN",
  "It is pink, and the males get pinker with age — largely scar tissue from fighting. Its neck vertebrae are unfused, so it can turn its head 90 degrees to work through flooded forest, and it hunts among the trunks. In local legend the boto comes ashore at night as a man in a white hat.");
note2("gangesdolphin", "Carnivore — fish, invertebrates", "The Ganges and Brahmaputra", "EN",
  "It is functionally blind — its eyes have no lens, and it navigates and hunts entirely by sonar in water too silty for sight to be worth anything. It swims on its side, trailing a flipper along the bottom. India's national aquatic animal, in one of the most polluted rivers on earth.");
note2("harborporpoise", "Carnivore — small fish", "Cool coastal water of the northern hemisphere", "LC",
  "A porpoise, not a dolphin — no beak, spade-shaped teeth instead of cones, and a blunt little face. It runs so hot and small that it must eat about 10% of its body weight daily and cannot fast for even a day. Bottlenose dolphins kill them, apparently without eating them, and nobody is sure why.");
note2("cuvierbeaked", "Carnivore — deep-water squid", "Deep ocean, worldwide", "LC",
  "It holds the mammalian dive record: 2,992 metres down and three hours and 42 minutes on one breath. It spends almost its whole life in the deep, which is why it was barely studied. It is the species most often found stranded after naval sonar exercises.");
note2("spinnerdolphin", "Carnivore — small fish and squid at night", "Tropical oceans", "LC",
  "It leaps and spins on its long axis — up to seven full rotations in one jump — and the leading explanation is that it's throwing off remoras. It rests by day in shallow bays with half its brain at a time, and hunts at night in the deep scattering layer.");
note2("hectorsdolphin", "Carnivore — small fish", "Coastal New Zealand", "EN",
  "The smallest marine dolphin, about 1.4m, with a rounded dorsal like a Mickey Mouse ear. The Māui subspecies is down to roughly 50 adults, making it one of the rarest marine mammals alive. Almost every death is a gillnet.");
note2("commersons", "Carnivore — fish, squid", "Coastal Patagonia and the Kerguelen Islands", "LC",
  "Small, boldly black-and-white, and it swims upside down a great deal, apparently to see the bottom while hunting. It rides bow waves and surfs breaking surf for no reason anyone can identify beyond the obvious one. There are two populations, separated by 8,000km of open ocean.");

// ===== ungulates =====
note2("gerenuk", "Browser — leaves, from higher than anything its size can reach", "Dry scrub of East Africa", "NT",
  "It stands straight up on its hind legs to browse, propping a foreleg on the branch, and can hold it — the neck and spine are built for it. It is one of the very few mammals that appears never to drink at all, taking every drop from leaves. The name is Somali for 'giraffe-necked'.");
note2("saiga", "Grazer — grasses and herbs", "Steppe of Kazakhstan and Mongolia", "NT",
  "That bulbous nose filters dust in summer and warms freezing air in winter. In 2015 a bacterium that normally lives harmlessly in their tonsils turned lethal in a heatwave and killed over 200,000 in three weeks — more than half the global population, in the space of days. They have since rebounded sharply, one of the fastest recoveries ever recorded.");
note2("pronghorn", "Browser — sagebrush and forbs", "Grassland and sagebrush of North America", "LC",
  "The fastest land animal in the Americas, and it can hold 70km/h for kilometres — far faster than anything that hunts it needs to be. It is running from the American cheetah, which went extinct 12,000 years ago. It is not an antelope; its closest living relative is the giraffe.");
note2("dikdik", "Browser — leaves, shoots, fruit", "Dry scrub of East Africa", "LC",
  "About 4kg, monogamous for life, and it marks territory with a black tear-gland secretion pressed onto stems. It never needs to drink. The name is the sound the female makes when alarmed, which flushes everything else in the thicket too.");
note2("klipspringer", "Browser — leaves and fruit", "Rocky outcrops of eastern and southern Africa", "LC",
  "It walks on the tips of its hooves — the very tips, which are blunt and rubbery — and can stand with all four feet on a rock the size of a coin. Pairs bond for life and one always keeps watch while the other feeds. Its hollow, brittle hair insulates it and cushions falls.");
note2("sitatunga", "Browser — reeds and papyrus", "Swamps of central Africa", "LC",
  "Its hooves are splayed and elongated into something like snowshoes for walking on floating vegetation, which no other antelope has. When threatened it submerges entirely with only its nostrils out, and can stay like that for hours. On dry ground it is clumsy and easily caught.");
note2("oryx", "Grazer — grasses, melons for water", "Deserts of the Arabian Peninsula", "VU",
  "It was hunted to extinction in the wild — the last one shot in 1972 — and brought back entirely from zoo animals, becoming the first species ever downgraded from Extinct in the Wild to Vulnerable. It can let its body temperature rise past 46°C rather than waste water on sweating. In profile the two horns line up as one, which is a plausible origin of the unicorn.");
note2("addax", "Grazer — desert grasses", "Sahara", "CR",
  "Perhaps the most endangered large mammal in Africa — surveys have found single figures in the wild. It never drinks, its hooves splay wide for sand, and its coat turns white in summer to throw off heat. Oil development and hunting from vehicles finished what was left.");
note2("takin", "Browser — leaves, bamboo, salt licks", "Mountain forest of the eastern Himalayas", "VU",
  "A goat-antelope built like a small musk ox, and it secretes an oil over its whole coat that works as a raincoat in the cloud forest. It is the national animal of Bhutan. Its head is said to be where the golden fleece story came from.");
note2("markhor", "Browser — leaves and grasses", "Mountains of Central and South Asia", "NT",
  "Those corkscrew horns can run a metre and a half. Pakistan's national animal, and one of the clearest conservation turnarounds anywhere: strictly limited, expensive trophy permits, with the money going to the villages, gave locals a reason to stop poaching, and the population climbed off the endangered list. It is a genuinely uncomfortable success story.");
note2("vicuna", "Grazer — high-altitude grasses", "High Andes above 3,200m", "LC",
  "Its wool is the finest of any animal — 12 microns — and it can only be shorn every three years, which is why a coat can cost five figures. The Inca rounded them up, sheared them, and released them, and killing one was punishable by death. Down to 6,000 by the 1960s, now several hundred thousand.");
note2("guanaco", "Grazer — grasses and shrubs", "Patagonia and the Andes", "LC",
  "The wild ancestor of the llama. Its blood carries roughly four times the red cells of ours, which is how it runs at 4,000m where we would be gasping. It spits, accurately, and it can outrun a puma.");
note2("babirusa", "Omnivore — fruit, leaves, invertebrates", "Sulawesi and nearby islands", "VU",
  "The male's upper canines grow up through the roof of his own snout and curve back over his face — and they never stop growing, so an old male can be killed by his own tooth curving into his skull. Nobody is certain what they are for. It is the only pig that ruminates, more or less.");
note2("pygmyhippo", "Herbivore — ferns, fruit, leaves", "Forests of West Africa", "EN",
  "A quarter the size of a common hippo and nothing like it in habit: solitary, forest-dwelling, and nocturnal. Fewer than 2,500 remain, mostly in Liberia, in forest going for iron ore and rubber. It sweats the same pink 'blood sweat', which is a natural sunblock and antiseptic.");
note2("chevrotain", "Frugivore — fallen fruit", "Forests of Africa and Asia", "LC",
  "The smallest hoofed animal on earth — some weigh 2kg — and it has fangs. It is not a deer; it is a survivor from a lineage that predates them, essentially unchanged for 30 million years. When frightened it runs into water and walks along the bottom.");
note2("blackrhino", "Browser — twigs and shrubs, taken with a hooked lip", "Savanna and scrub of eastern and southern Africa", "CR",
  "The horn is keratin — the same protein as your fingernails, with no medicinal property of any kind, and it is worth more by weight than gold. Poaching took the population from 65,000 to under 2,500 in twenty-five years. The western black rhino was declared extinct in 2011.");
note2("mammoth", "Grazer — grasses of the mammoth steppe", "Ice-age Eurasia and North America — extinct", "EX",
  "The last of them died on Wrangel Island about 4,000 years ago, which is to say they were still alive while the pyramids stood. Their DNA survives well enough that we have sequenced it. That is a fact about us, not about them.");
note2("asianelephant", "Herbivore — grasses, bark, fruit", "Forests and grassland of South and Southeast Asia", "EN",
  "Only some males have tusks at all, and in some populations almost none do — a direct fingerprint of ivory hunting, because the tuskless ones lived to breed. It has one 'finger' on its trunk tip where the African elephant has two. It can distinguish human languages by ear, and reacts differently to those spoken by people who have historically hunted it.");
note2("tapir", "Frugivore — fruit, leaves", "Forests of Central and South America and Southeast Asia", "EN",
  "It has barely changed in 20 million years and its closest relatives are horses and rhinos. That little trunk is a prehensile nose it uses to grab leaves and snorkel. It swallows seeds whole and walks kilometres before passing them, which makes it one of the most important gardeners in the rainforest.");

// ===== rodents and others =====
note2("nakedmolerat", "Herbivore — tubers, dug out underground", "Dry East Africa, entirely underground", "LC",
  "It is a mammal that lives like a termite: one breeding queen, sterile workers, soldiers, and colonies of up to 300. It is effectively immune to cancer, feels no pain from acid or capsaicin, and can survive 18 minutes with no oxygen at all by running its metabolism on fructose, like a plant. Its risk of death does not rise with age, which should be impossible.");
note2("capybara", "Grazer — grasses and aquatic plants", "Wetlands of South America", "LC",
  "The largest rodent alive, at up to 65kg, and so unbothered that birds, monkeys and even caimans rest on it. It eats its own droppings each morning to get twice the value from grass. It can sleep in water with only its nose out.");
note2("chinchilla", "Herbivore — grasses and seeds", "High Andes", "EN",
  "The densest fur of any land mammal — over 50 hairs from every follicle, where you have one — which is why it cannot get wet: the coat holds water, and the animal rots. It bathes in volcanic dust instead. That fur was also why it was trapped to near-extinction; there are millions in captivity and almost none left wild.");
note2("porcupine", "Herbivore — bark, roots, fruit", "Africa, Asia, Europe and the Americas", "LC",
  "The quills are modified hairs with backward-facing barbs, and they detach on contact — it cannot shoot them, but it will reverse into you at speed. New World porcupines climb; Old World ones don't. Their quills are coated in a natural antibiotic, which is thought to protect the porcupine from its own accidents.");
note2("pika", "Herbivore — grasses, dried into haystacks", "High mountains of Asia and North America", "LC",
  "It doesn't hibernate — it spends the whole summer cutting vegetation and curing it in the sun into haystacks under rocks, then lives off the hay all winter. It is a lagomorph, related to rabbits, not a rodent. It is so intolerant of heat that it can die after a few hours above 25°C, which is why it is climbing mountains it cannot climb any further.");
note2("marmot", "Herbivore — grasses and flowers", "Mountains of the northern hemisphere", "LC",
  "It hibernates for up to eight months, dropping its heart to about five beats a minute, and the colony piles into one burrow to share heat. It has distinct alarm whistles for aerial and ground predators. Groundhog Day is a marmot.");
note2("flyingsquirrel", "Omnivore — nuts, fungi, lichen", "Forests of North America and Eurasia", "LC",
  "It glides on a membrane from wrist to ankle, steering with its tail and flattening it into an airfoil — a recorded glide has covered 90 metres. In 2019 it was discovered that North American flying squirrels fluoresce bright pink under ultraviolet, and nobody yet knows why. Every one is nocturnal, which is why almost nobody has seen one.");
note2("prairiedog", "Herbivore — grasses", "Grasslands of North America", "LC",
  "Its alarm calls encode the predator's species, size, colour and speed — researchers walked past the same colony in different coloured shirts and the calls changed accordingly. It is closer to language than almost anything else in the animal world. Their towns once held hundreds of millions; we poisoned about 98% of them.");
note2("viscacha", "Herbivore — grasses, moss, lichen", "Rocky high Andes", "LC",
  "It looks exactly like a rabbit that has given up, sitting on rocks in the sun for hours, and it is a chinchilla relative. It is nearly the sole food of the Andean cat. Its long curled tail is the giveaway that it is no rabbit at all.");
note2("giantanteater", "Insectivore — up to 30,000 ants and termites a day", "Grassland and forest of Central and South America", "VU",
  "It has no teeth at all and a 60cm tongue that flicks 150 times a minute, coated in sticky saliva. It takes only a few hundred insects from each nest and moves on, so the colony survives and it can come back — it farms its own food supply. It walks on its knuckles to keep its digging claws sharp, and a cornered one can kill a jaguar.");
note2("silkyanteater", "Insectivore — ants", "Rainforest canopy from Mexico to Brazil", "LC",
  "The smallest anteater, the size of a grapefruit, and it lives its whole life in the canopy — its fur is the exact colour of the silk-cotton tree's seed pods, which is thought to be why it is nearly impossible to spot. It hangs by a prehensile tail. It defends itself by rearing up and striking with its claws.");
note2("giantarmadillo", "Insectivore — termites, mostly", "Forests and grassland of South America", "VU",
  "It has the largest claw of any living animal relative to its body — a sickle nearly 20cm long — and it uses it to tear open termite mounds like a tin can. It weighs up to 50kg. Its burrows are used by dozens of other species; where the armadillo goes, they follow.");
note2("ninebandarmadillo", "Insectivore — insects and grubs", "The Americas, spreading north", "LC",
  "It always gives birth to identical quadruplets from a single egg — every litter, always four, always the same sex. That makes it invaluable to medical research, and it is also one of the very few animals besides us that can carry leprosy, which is how the disease is studied. It can inflate its gut and float, or walk across a stream bed holding its breath.");
note2("echidna", "Insectivore — ants and termites", "Australia and New Guinea", "LC",
  "One of only two egg-laying mammals alive. It has no nipples: the milk seeps through patches of skin and the puggle laps it out of the fur. The male has a four-headed penis and uses two heads at a time, alternating. It also has electroreceptors in its snout, which is nearly unheard of on land.");

// ===== parrots =====
note2("africangrey", "Frugivore — seeds, nuts, fruit", "Rainforest of Central and West Africa", "EN",
  "Alex, a grey studied for 30 years, learned over 100 words, understood the concept of zero, and asked what colour he was — the first non-human ever recorded asking a question about itself. They live 60 years and grieve. The pet trade has emptied so much of their forest that Ghana has lost nearly all of them.");
note2("hyacinthmacaw", "Frugivore — palm nuts, almost only", "Pantanal and Cerrado of South America", "VU",
  "The largest flying parrot, a metre long, with a bite that cracks palm nuts a person needs a hammer for. It nests almost exclusively in manduvi tree hollows, and toucans — which eat its eggs — plant most of those trees. It cannot escape needing the animal that robs it.");
note2("scarletmacaw", "Frugivore — fruit, nuts, clay", "Rainforest from Mexico to Brazil", "LC",
  "Pairs mate for life and fly wing to wing, and they will sit together preening for hours. They gather at clay licks by the hundred to eat mineral clay, which is thought to neutralise the toxins in the unripe seeds they eat. They live 50 years, and the pet trade means most outlive whoever bought them.");
note2("militarymacaw", "Frugivore — seeds and fruit", "Forests of Mexico and South America", "VU",
  "Named for the uniform-green plumage, and it flies enormous daily distances between roost and feeding trees — up to 20km each way. It nests in cliff cavities. It is one of the parrots most heavily trafficked out of Mexico.");
