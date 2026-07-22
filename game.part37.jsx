// ---------- CHAPTER XXX — THE YOUNG ----------
// 112 juveniles. Until now they inherited the adult's entry, which was a waste:
// a young animal is often doing something completely different from the adult,
// in a different place, eating a different thing, and the biology of the early
// stage is frequently the most interesting part of the life cycle.
//
// Rule as always: nothing invented. Each note is about THIS stage, not a repeat
// of the grown animal. IUCN status is inherited from the adult, because a lion
// cub is exactly as threatened as a lion.

const j37 = (k, base, d, h, f) => {
  if (!DEX[k]) return;
  const s = (INFO[base] && INFO[base].s) || "LC";
  INFO[k] = { d, h, s, f };
};

// ===== mammal young =====
j37("fennec_j", "fennec", "Milk, then insects and small prey", "Desert burrows of the Sahara",
  "It is born white and nearly deaf, and the ears come later — a kit's ears are small at birth and grow into the adult's radiators over its first weeks. It stays underground for its first month because the surface would kill it, and the burrow is the whole point of the species: the sand two feet down is tens of degrees cooler than the air.");
j37("otter_j", "otter", "Milk, then fish taught by the mother", "River banks and holts",
  "It has to be taught to swim, and it does not want to. Otter fur traps so much air that a pup floats like a cork and cannot dive at all, so the mother drags it into the water and holds it under briefly, repeatedly, until it works out what to do. The buoyancy that saves it from drowning is the same thing stopping it from hunting.");
j37("kestrel_j", "kestrel", "Meat torn by the parents", "Cliff ledges, quarries, old crow nests",
  "It cannot see ultraviolet-marked vole trails until its eyes finish developing, so its first hunts are mostly failures — a young kestrel's success rate is a fraction of an adult's, and most of the ones that die in the first year simply starve while learning.");
j37("hedgehog_j", "hedgehog", "Milk, then insects", "Nests under hedges and log piles",
  "It is born with its spines already there, but under the skin — the newborn is swollen with fluid that keeps the points covered so the birth does not injure the mother. The fluid drains within hours and the first white spines push through. A hoglet that gets cold cannot roll up.");
j37("lovebird_j", "lovebird", "Regurgitated seed from both parents", "Tree and cliff cavities of Africa",
  "It hatches blind and naked into a nest the female built by carrying strips of bark tucked into her own rump feathers — she cuts the strips, files them into her plumage, and flies home with the building material wedged in her back. No other bird transports nest material that way.");
j37("rabbit_j", "rabbit", "Milk, then grass", "A form in open grass, not a burrow",
  "A leveret is properly a young hare, not a rabbit, and the difference is the whole story: hares are born furred, open-eyed and ready to run, alone in a shallow scrape in the open, while rabbit kits are born blind and naked underground. One species bets on hiding, the other on being able to leave immediately.");
j37("beaver_j", "beaver", "Milk, then bark and aquatic plants", "The lodge chamber above the waterline",
  "It can swim within days of birth but is too buoyant to dive, so it rides on a parent's back or tail. It stays two full years and spends the second one helping raise the next litter — beaver dams are built by families that include teenagers doing unpaid labour.");
j37("croc_j", "croc", "Insects, then small fish", "The nest mound and the nursery pool",
  "It calls from inside the egg before hatching, and the sound is what makes the mother dig the nest open — without the chirping she would leave them buried. She then carries the hatchlings to water in her mouth, in the same jaws that generate one of the strongest bites ever measured, holding them without a scratch.");
j37("jaguar_j", "jaguar", "Milk, then meat", "Dens in dense riverside forest",
  "Born blind, with the rosettes already fully formed and darker than they will be as an adult. It stays with its mother for up to two years learning to kill, and a jaguar's killing method — a bite straight through the skull rather than the throat — takes that long to learn accurately.");
j37("tiger_j", "tiger", "Milk, then meat brought to the den", "Dense cover near water",
  "Around half die before independence, mostly to starvation and to male tigers. It cannot hunt successfully until roughly 18 months and is not independent until two years, which is why a tigress can only raise a litter every two to three years — the arithmetic of tiger recovery is set by how slowly the cubs learn.");
j37("cobra_j", "cobra", "Small reptiles and rodents", "Leaf litter and burrows",
  "It is fully venomous from the moment it hatches, hood and all, and a hatchling is arguably more dangerous per encounter than an adult because it has less control over how much venom it injects. It gets no parental care at all after emerging.");
j37("boar_j", "boar", "Milk, then roots and anything", "Forest nests of gathered vegetation",
  "The stripes are the point: a piglet is marked with pale horizontal bands down its body that break up its outline in dappled forest light, and they fade at around four months. Every domestic pig carries the gene for them, and feral pigs that go back to the wild produce striped piglets again within a couple of generations.");
j37("badger_j", "badger", "Milk, then earthworms", "Deep in the sett",
  "Born underground in February and not seen above ground until spring, in a sett that may have been dug and extended by the same family for over a century. Some British setts are older than the houses near them.");
j37("hyena_j", "hyena", "Milk — the richest of any land carnivore", "Communal den chambers too small for adults",
  "Spotted hyena cubs are born with their eyes open and their teeth already erupted, and same-sex twins may begin fighting within minutes — in some litters one kills the other. The milk is extraordinarily rich because the mother may leave them for days while hunting, and the den chambers are dug too narrow for an adult to enter, which is what keeps them safe.");
j37("wilddog_j", "wilddog", "Milk, then meat regurgitated by the whole pack", "Abandoned aardvark burrows",
  "The entire pack feeds them, not just the parents, and at a kill the pups eat first — adults stand back and let them, which is close to unique among social carnivores. A pack that loses its pups often dissolves.");
j37("arcticfox_j", "arcticfox", "Milk, then lemmings and eggs", "Dens in eskers, used for centuries",
  "Litters can reach fourteen, the largest of any wild canid, and the size tracks the lemming cycle almost exactly — in a peak lemming year the dens are full, and in a crash year there are almost no kits at all. Some Arctic fox dens have been in continuous use for over 300 years, and the extra nitrogen makes the vegetation around them visibly greener.");
j37("lynx_j", "lynx", "Milk, then hares", "Dens under fallen trees and rock",
  "Its survival is tied to one prey animal so tightly you can graph it: in the snowshoe hare crash that comes roughly every ten years, almost no lynx kittens survive at all. The famous predator-prey cycle in every ecology textbook is drawn from fur-trade records of exactly this relationship.");
j37("snowleopard_j", "snowleopard", "Milk, then meat", "Rock crevice dens above the treeline",
  "Born in a rock den lined with the mother's own shed belly fur, at altitudes where the air holds around half the oxygen at sea level. It stays with her for nearly two years, and because snow leopards are so sparsely spread, that period is the only company most of them will ever have.");
j37("owl_j", "owl", "Whole prey swallowed, bones and all", "Tree hollows and old nests",
  "Owlets hatch days apart rather than together, so a brood is a staircase of sizes — in a poor year the smallest simply does not survive, which is brutal but means the strongest still fledges instead of all of them starving equally. It coughs up its first pellet within days of eating solid food.");
j37("redfox_j", "redfox", "Milk, then whatever the parents bring", "Earths, often stolen from badgers",
  "Born grey-brown and blue-eyed, not red — the colour and the yellow eyes come in over the first months. Play-fighting between kits establishes a rank order early, and the top kit gets first access to food, which in a lean year decides who lives.");
j37("manedwolf_j", "manedwolf", "Milk, then fruit and small prey", "Tall grassland of central South America",
  "Born almost black and short-legged, which makes it look nothing like the long-limbed adult — the legs are the last thing to arrive. Both parents feed it by regurgitation, and roughly half its adult diet will be a tomato-like fruit, which is unusual company for a canid.");
j37("wolf_j", "wolf", "Milk, then regurgitated meat", "Dens dug into banks and old burrows",
  "Every adult in the pack brings food back, and a pup begs by licking the corner of an adult's mouth — the same gesture a domestic dog still makes at a human face. It is born with blue eyes that turn gold at around two months.");
j37("leopard_j", "leopard", "Milk, then meat cached in trees", "Dens in caves, thickets and rock piles",
  "The mother moves it to a new den every few days, carrying it by the scruff, because a den that smells lived-in attracts lions and hyenas. She hauls kills into trees partly so there is something left to feed the cub with when she returns.");
j37("lion_j", "lion", "Milk from any lactating female in the pride", "Thick cover, then the pride creche",
  "It can nurse from any lactating lioness in the pride, not just its mother, because the females synchronise births and raise the litters as one creche. The danger is not hunger but males: when a new coalition takes over a pride they kill the cubs, which brings the females back into season. Around half of all cubs die before their second year.");
j37("cheetah_j", "cheetah", "Milk, then meat", "Grass and scrub, moved constantly",
  "It is born with a long silver-grey mantle of fur down its back and shoulders, and the leading explanation is that it makes the cub resemble a honey badger — an animal almost nothing is willing to attack. The mantle disappears at around three months. Cheetah cub mortality in some study areas exceeds 90%.");

// ===== amphibian and insect stages =====
j37("froglet", "froglet", "Insects — it stops eating plants", "The margin between water and land",
  "The tail is not dropped. It is reabsorbed: the body dismantles it and uses the material to build the legs and the rest of the frog, so a froglet with a stub is literally eating its own tail from the inside. Its whole gut is rebuilt at the same time, from a long plant-processing coil into a short carnivore's.");
j37("monarch_c", "monarch", "Milkweed, and nothing else", "Milkweed plants of North America",
  "It eats a plant that poisons almost everything else and stores the poison — the cardiac glycosides in milkweed stay in its body through metamorphosis and make the adult butterfly toxic too. It grows about 2,000 times its hatching weight in two weeks and sheds its skin five times to do it.");
j37("monarch_p", "monarch", "Nothing — it does not feed", "Hanging from a stem or leaf underside",
  "Inside, most of the caterpillar is broken down into a soup, but not all of it: small clusters of cells called imaginal discs survive and build the butterfly. Learning survives it too. Moths trained to avoid a smell as caterpillars still avoided it as adults, which means something crosses the reorganisation intact. The gold dots on the case are structural colour, not metal.");
j37("naiad", "dragonfly", "Anything it can catch — insects, tadpoles, small fish", "The bottom of ponds and streams",
  "It has a hinged jaw folded under its head that fires forward faster than the eye follows and drags prey back — a mechanism nothing else in the animal world quite matches. It also breathes through its rectum, and can expel that water in a jet to shoot itself forward. It spends up to several years like this for a few weeks of flight.");
j37("teneral", "dragonfly", "Nothing yet — the mouthparts must harden", "Clinging to reeds beside the water",
  "The most dangerous hours of its life. Newly emerged, it is pale, soft and barely able to fly while it pumps fluid into its wings to expand them, and a huge proportion are eaten in this window. The colours arrive over the following days — a teneral dragonfly looks like a washed-out ghost of the adult.");
j37("cicadanymph", "cicada", "Xylem sap drunk from tree roots", "Underground, for 13 or 17 years",
  "It spends over a decade in the dark drinking sap so dilute it must process enormous volumes to get anything at all, and it tracks the years by counting the seasonal pulses in the tree's fluid. Then an entire cohort climbs out within days of each other, which only works because they all counted the same.");

// ===== birds =====
j37("eaglet", "baldeagle", "Fish torn by the parents", "Nests that can weigh over a tonne",
  "The nest is often reused and added to annually for decades — the largest recorded bald eagle nest weighed nearly two tonnes and eventually brought the tree down. The first-hatched chick is larger and takes most of the food, and in a lean year the younger one usually does not fledge.");
j37("eaglejuv", "baldeagle", "Fish, carrion, and anything it can steal", "Rivers and coasts, wandering widely",
  "It has no white head at all — a juvenile bald eagle is mottled dark brown and is routinely misidentified as a golden eagle. The white head and tail take about five years to come in, and the bird cannot breed until they do, so the national symbol spends its entire adolescence not looking like itself.");
j37("cygnet", "swan", "Aquatic plants and small invertebrates", "Reedy lake and river margins",
  "Grey and unglamorous, which is the entire basis of a famous story. It rides on its parents' backs between the wings for the first weeks, and stays with them through the winter — swan families remain together far longer than most waterfowl, and the parents will attack anything that approaches.");
j37("swanjuv", "swan", "Aquatic plants", "Winter flocks on open water",
  "It keeps grey-brown feathers through its first winter and is driven off by its parents in spring, often violently, just before the next brood. The white comes in gradually over the first year, patchily, so a juvenile swan spends months looking half-finished.");
j37("flamingo_c", "flamingo", "Crop milk from both parents", "Mud-cone nests on saline flats",
  "It hatches grey, with a straight bill — the famous downward kink develops over the first months, and until it does the chick cannot filter-feed at all. Both parents produce a bright red crop milk full of protein and pigment, and the effort drains the colour out of the adults: feeding parents go pale.");
j37("flamingo_j", "flamingo", "Filtered algae and brine shrimp", "Saline lakes and lagoons",
  "Still grey-white, and it will not turn pink for two to three years — the colour is entirely dietary, from carotenoids in the algae and brine shrimp, so a juvenile is grey simply because it has not eaten enough of them yet. A flamingo fed the wrong diet in captivity stays white.");
j37("penguin_c", "penguin", "Regurgitated fish and krill", "Colonies on ice and rock",
  "Chicks gather in creches so a few adults can guard hundreds while the rest go to sea. A parent returning to a colony of thousands finds its own chick by voice alone, in a wall of noise, and the recognition is mutual and specific. In emperor penguins the chick balances on a parent's feet under a fold of skin, because the ice would kill it in minutes.");
j37("penguin_j", "penguin", "Fish, squid and krill, caught alone", "The open ocean",
  "It leaves in a coat of juvenile plumage that is not fully waterproof, and its first swim is unaccompanied — no adult teaches it to hunt. Mortality in the first year is severe, and the ones that survive may not return to land for months.");
j37("ostrich_c", "ostrich", "Seeds, insects and plants", "Open savanna",
  "Broods merge: a single pair may end up escorting a running mass of chicks from several nests, sometimes over a hundred, because more chicks means a lower chance that any particular one is taken. It can run at 50km/h within a month of hatching.");
j37("peregrine_e", "peregrine", "Meat torn from prey by the parents", "Cliff ledges and, increasingly, buildings",
  "An eyas is downy and white and grows to full size in about six weeks. Its first flights are clumsy and many die learning to hunt on the wing. Peregrine recovery after DDT was built on eyases raised in boxes and released from tower blocks and cathedral ledges, which is why so many cities now have peregrines.");
j37("harpyeagle_e", "harpyeagle", "Meat — mostly sloths and monkeys", "Nests high in emergent rainforest trees",
  "A single chick, raised for two to three years — one of the slowest reproductive rates of any bird — so a pair may only fledge one young every two or three years. That arithmetic is why harpy eagles vanish from logged forest and do not come back quickly.");
j37("goldeneagle_e", "goldeneagle", "Meat brought by both parents", "Cliff and tree eyries",
  "Two eggs are usually laid and usually only one eaglet survives: the first-hatched is larger and frequently kills the second. It is called cainism, it happens in the majority of golden eagle nests, and the parents do not intervene — the second egg is an insurance policy that is spent if the first one works.");

// ===== fish and marine larvae =====
j37("parr", "salmon", "Insects and larvae", "Gravel-bottomed natal streams",
  "It carries dark oval 'parr marks' down its flanks that camouflage it against a stream bed, and it holds a feeding territory it will defend for a year or more. At this stage it can only survive in fresh water — put it in the sea and it dies.");
j37("smolt", "salmon", "Insects, then marine invertebrates", "The river mouth and the transition to salt",
  "It rebuilds itself to survive the sea. Over a few weeks it turns silver, the parr marks vanish, and its gills and kidneys are physiologically rewired to pump salt outward instead of retaining it — a freshwater animal converting into a saltwater one while alive. If it reaches the sea before the change completes, it dies of salt.");
j37("leptocephalus", "eel", "Marine snow and dissolved organic matter", "The open Atlantic, drifting from the Sargasso",
  "It is a flat, transparent leaf with a tiny head, and it looks so unlike an eel that these larvae were classified as a completely separate genus of fish until 1896, when someone kept one in a tank and watched it turn into an eel. It drifts across an ocean on the Gulf Stream, a journey that takes months to years.");
j37("glasseel", "eel", "Almost nothing — it is running on reserves", "Estuaries and river mouths",
  "Completely transparent — you can see its spine and its heart. It arrives at the coast in vast numbers, shrinks slightly as it converts from a leaf-shaped larva into a cylindrical eel, and waits for the tide to carry it upriver. Glass eels are trafficked as one of the most valuable wildlife commodities in the world by weight.");
j37("elver", "eel", "Invertebrates and detritus", "Rivers, climbing upstream",
  "It has pigment now, and it climbs. Elvers ascend weirs, dam faces and wet vertical walls by wriggling up the film of water, and can cross damp ground overland at night. Almost the entire European population is one interbreeding group, so a barrier on any river is a loss to the whole species.");
j37("polyp", "jellyfish", "Plankton captured by tentacles", "Fixed to rock and shell on the sea floor",
  "The jellyfish stage is only half the animal's life. The polyp is a tiny anemone-like form fixed to the bottom, and it reproduces by cloning itself — then, triggered by temperature, it stacks up like a pile of saucers and buds each one off as a baby jellyfish. One polyp can produce dozens, which is why jellyfish blooms appear so suddenly.");
j37("ephyra", "jellyfish", "Plankton", "Drifting in coastal water",
  "A tiny eight-armed star, a few millimetres across, just released from the polyp stack. It looks nothing like the adult bell yet and swims with a jerky pulse. Whether a swarm appears in a given summer is largely decided months earlier, on the sea floor, by how many of these were budded off.");
j37("zoea", "crab", "Plankton", "The open water column",
  "A crab larva looks like nothing anyone would call a crab: a transparent speck with a long spine on its back and enormous eyes, drifting in the plankton. It is at this stage that almost all of them die — a crab may release millions of eggs, and the number that reach the sea floor as crabs is measured in single figures.");
j37("megalopa", "crab", "Plankton and small particles", "Settling from open water toward the bottom",
  "The awkward in-between: it has claws and a recognisable crab body but still drags a shrimp-like tail behind it, and it swims rather than walks. This is the stage that must find the right habitat and settle, and getting that decision wrong ends it.");

// ===== ungulates and their calves =====
j37("fawn", "elk", "Milk, then grass", "Hidden alone in long vegetation",
  "It is nearly scentless for its first weeks, and its instinct is not to run but to fold up and stay completely still even if stepped over. The mother grazes away from it deliberately, because her scent is what a predator would follow. A fawn found alone in grass has almost never been abandoned.");
j37("yearlingelk", "elk", "Grass and browse", "Herd range",
  "Its first antlers are unbranched spikes, and a spike bull is not a different animal — he is simply young. Antlers are grown and cast every year, and the full branched rack takes several years to build, so a herd's age structure can be read at a glance from the heads.");
j37("sealpup", "elephantseal", "Milk that is over 50% fat", "Breeding beaches",
  "It roughly quadruples its weight in under a month on milk that is more than half fat — among the richest produced by any mammal — and then the mother leaves abruptly and it must learn to dive alone. Some pups sneak extra milk from other females and become enormous 'superweaners', which is as risky as it sounds.");
j37("sealjuv", "elephantseal", "Fish and squid, caught alone", "Open ocean, diving deep",
  "Nobody teaches it to dive. Within weeks of being weaned it is holding its breath for many minutes and descending hundreds of metres on instinct, and the first year kills most of them. The ones that live may cross entire ocean basins before returning to the beach they were born on.");
j37("molepup", "molerat", "Milk, then tubers and the queen's droppings", "The colony's nest chamber",
  "It eats the adults' droppings to seed its gut with the microbes that break down tubers — without that inoculation it cannot digest its food. Every pup is born to the single breeding queen, and unless she dies it will remain sterile for life, working the tunnels for its mother.");
j37("clownjuv", "clownfish", "Plankton", "Drifting, then searching for an anemone",
  "It hatches into open water and must find an anemone before it is eaten, navigating partly by the sound of the reef. Then it has to survive the anemone: it acclimates over hours, brushing against the tentacles until its mucus coat stops triggering the stings. It joins the bottom of the queue and waits.");

// ===== whale and sirenian calves =====
j37("bluewhale_c", "bluewhale", "Milk — up to 200 litres a day", "Warm-water calving grounds, then the poles",
  "It gains around 90 kilograms a day on milk that is nearly 40% fat, which is the fastest growth of any animal on earth. It is born about 7 metres long and tail-first, and it is nudged to the surface for its first breath. Its mother is fasting the entire time she feeds it.");
j37("humpback_c", "humpback", "Milk", "Tropical breeding lagoons and the migration route",
  "Mother and calf 'whisper': they communicate in quiet grunts audible only at close range, which is thought to keep orcas from locating them. The calf swims close beside her flank in her slipstream, which reduces the effort of a migration that can run the length of an ocean.");
j37("orca_c", "orca", "Milk, then prey shared by the pod", "With the pod, everywhere",
  "For roughly the first month neither the calf nor its mother sleeps in any normal sense — they stay in continuous motion, which is unlike almost any other mammal. In resident populations the calf never disperses: males in particular stay with their mother for life, and their survival drops sharply if she dies.");
j37("spermwhale_c", "spermwhale", "Milk, then squid", "Open ocean, at the surface while adults dive",
  "It cannot follow its mother down — she hunts a kilometre deep for an hour at a time, and a calf cannot hold its breath anywhere near that long. So the group babysits: other females stagger their dives so an adult is always at the surface with the calves. Communal childcare is the reason sperm whales can hunt where they do.");
j37("graywhale_c", "graywhale", "Milk", "The shallow lagoons of Baja California",
  "Born in warm, extremely salty lagoons where the buoyancy helps a newborn stay up, then taken on one of the longest migrations of any mammal within months. Gray whale mothers defending calves fought whaling boats so fiercely that whalers called them devil fish; the same population now approaches boats to be touched.");
j37("finwhale_c", "finwhale", "Milk", "Temperate and polar oceans",
  "Born to the second-largest animal that has ever lived, and weaned in six or seven months — extraordinarily fast for the size. Fin whales are asymmetrically coloured, white on the right of the jaw and dark on the left, and the calf has it from birth.");
j37("minke_c", "minke", "Milk", "Coastal and open water worldwide",
  "The smallest of the rorquals and still the most hunted — minke calves grow up in the only baleen whale populations still commercially whaled at scale. It is weaned in under six months, faster than any other baleen whale.");
j37("seiwhale_c", "seiwhale", "Milk", "Open ocean, far from shore",
  "One of the least observed large whale calves in the world, because sei whales stay offshore and move fast. Most of what is known about their early life comes from whaling records rather than from watching them.");
j37("bowhead_c", "bowhead", "Milk", "Arctic waters and the ice edge",
  "Born under the ice into water near freezing, insulated by blubber up to half a metre thick — the thickest of any animal. Bowheads may live over 200 years, and harpoon points from the 1800s have been found in living animals, so a calf born now could plausibly still be alive in the 2200s.");
j37("rightwhale_c", "rightwhale", "Milk", "Calving grounds off the southeastern US coast",
  "North Atlantic right whale calves are counted individually each season because there are so few — the entire population is a few hundred animals, and a single year's births can be in single figures. Nearly every death has a human cause: ship strikes and fishing gear.");
j37("narwhal_c", "narwhal", "Milk", "Arctic fjords and pack ice",
  "Born slate grey and without a tusk — the tusk is a canine tooth that erupts through the lip later, and mostly in males. Narwhals are among the deepest-diving of all mammals, and the calf has to learn to navigate under solid ice, where surfacing in the wrong place is fatal.");
j37("beluga_c", "beluga", "Milk", "Arctic estuaries and river mouths",
  "It is born dark grey or brown, not white, and takes about five years to turn — a white beluga is an adult. Calves stay with the mother for years in some of the most vocal societies of any whale, which is why belugas were called sea canaries by whalers.");
j37("bottlenose_c", "bottlenose", "Milk, then fish", "Coastal waters worldwide",
  "It is born with pale vertical creases along its flanks — fetal folds, from being curled inside the womb — that fade over the first weeks. It swims from the moment of birth. In some populations mothers teach specific hunting techniques that pass down the female line, so a calf inherits a culture as well as a body.");
j37("spinner_c", "spinner", "Milk, then fish", "Tropical open ocean and resting bays",
  "It learns to spin. The leaping corkscrew that gives the species its name is not present at birth in full form; young dolphins practise it repeatedly and badly before getting it right, which is one of the clearer cases of a marine mammal rehearsing a physical skill.");
j37("manatee_c", "manatee", "Milk from nipples behind the flippers, then seagrass", "Warm rivers, springs and coastal shallows",
  "It nurses underwater from a nipple tucked in the mother's armpit, and it vocalises constantly — mother and calf keep in contact by sound in water too murky to see through. It stays with her up to two years, learning the routes between warm-water refuges, which is knowledge it cannot get any other way.");
j37("dugong_c", "dugong", "Milk, then seagrass", "Shallow seagrass beds of the Indo-Pacific",
  "It rides just above its mother's back as she grazes, staying in contact almost constantly for the first months. Dugongs are slow breeders — a calf every three to seven years — which is exactly why a population that is depleted takes decades to recover, if it ever does.");

// ===== elephants =====
j37("africanelephant_c", "africanelephant", "Milk, then plants; it eats adult dung to seed its gut", "With the herd, always",
  "The trunk is useless at first. A newborn cannot control it — it trips over it, waves it aimlessly, and drinks with its mouth for months, because 40,000 muscles take time to learn. It also eats the dung of adults to acquire the microbes needed to digest plants. The whole herd babysits, and a calf is rarely more than a few metres from someone.");
j37("asianelephant_c", "asianelephant", "Milk, then vegetation", "Forest and grassland of South and Southeast Asia",
  "Born after a 22-month pregnancy, the longest of any land animal, and it can stand within hours. Allomothering is intense: young females in the herd compete to look after it, which is how they learn to raise their own. Calves are the animals most often taken for the tourist and logging trade, and the separation is permanent.");
j37("mammoth_c", "mammoth", "Milk, then grasses", "Mammoth steppe of the last ice age",
  "We have several of them almost perfectly preserved. Lyuba, a month-old calf found in Siberian permafrost in 2007, still had her mother's milk in her stomach and fine details of her skin and trunk intact — she is the best-preserved mammoth ever found. The calves are why we know what mammoth milk teeth and gut contents looked like.");

// ===== marsupials and monotremes =====
j37("kangaroo_j2", "kangaroo", "Milk of two different formulas at once", "The pouch",
  "It is born after about a month, blind, pink and the size of a jellybean, and it climbs unaided through its mother's fur into the pouch and latches on. A female can carry a joey at foot, another in the pouch, and a paused embryo waiting in the uterus — and produce two different milks from two different teats simultaneously for two different-aged young.");
j37("wallaby_j", "wallaby", "Milk, then grass", "The pouch, then close beside it",
  "It dives back into the pouch head-first when frightened and rights itself inside, which is as ungainly as it sounds. A frightened wallaby mother will eject a large joey to lighten herself — it sounds heartless, and it is the calculation that keeps at least one of them alive.");
j37("koala_j", "koala", "Milk, then pap, then eucalyptus", "The pouch, then the mother's back",
  "It cannot eat eucalyptus without help, so it eats a special soft dropping the mother produces called pap, which is loaded with the gut microbes needed to break down leaves that would otherwise poison it. Only after that inoculation can it start on leaves. The pouch opens toward the rear.");
j37("wombat_j", "wombat", "Milk, then grass and roots", "A backward-facing pouch",
  "The pouch opens backwards, which is not a quirk — a wombat digs constantly, and a forward pouch would pack full of soil and suffocate the joey. It stays in there for six to seven months while its mother excavates burrow systems that can run for tens of metres.");
j37("quokka_j", "quokka", "Milk, then leaves and grass", "The pouch, on Rottnest Island and a few mainland pockets",
  "The species carries a paused embryo as backup: if a joey is lost, a dormant embryo can resume development and replace it within days. The famous quokka smile is just the shape of the face, and the tourist habit of feeding them causes a jaw disease — the friendliest-looking animal in Australia is harmed by the friendliness.");
j37("opossum_j", "opossum", "Milk, then almost anything", "The pouch, then the mother's back",
  "A newborn is the size of a honeybee, and a female may give birth to more young than she has teats — the ones that do not attach in time do not survive. The survivors later ride clinging to her back. Opossums are strongly resistant to snake venom and rarely carry rabies, both of which make them better neighbours than their reputation suggests.");
j37("echidna_p", "echidna", "Milk licked from patches of skin — there are no nipples", "A burrow, after a spell in the pouch",
  "It hatches from a leathery egg inside its mother's pouch, about the size of a grape, and laps milk that seeps from patches of skin because monotremes have no nipples. The milk is pink. It is evicted from the pouch when its spines begin to develop, for obvious reasons, and left in a burrow between feeds.");
j37("platypus_p", "platypus", "Milk lapped from the mother's abdomen", "A blocked nursery burrow in a riverbank",
  "The mother seals herself into a burrow with earth plugs and curls around the eggs. The puggle hatches blind and beanlike and laps milk from her skin. Platypus milk contains a powerful antibacterial protein — it has to, because milk pooled on fur in a damp burrow would otherwise breed infection.");

// ===== more ungulate calves =====
j37("giraffe_c", "giraffe", "Milk, then leaves", "Open woodland, in a calving pool with other young",
  "It is born from a standing mother and falls about two metres to the ground, which is the shock that starts it breathing. It is standing within an hour and running within a day, because a giraffe that cannot run is food. Calves are left in creches supervised by one adult while the others browse.");
j37("hippo_c", "hippo", "Milk, suckled underwater", "Rivers and pools",
  "It is often born underwater and suckles underwater, closing its nostrils and ears to do it. It can swim before it can walk properly. It rides on its mother's back in deep water, and she is among the most dangerous animals in Africa specifically because of what she will do to anything that comes near it.");
j37("whiterhino_c", "whiterhino", "Milk, then grass", "Open grassland",
  "A white rhino calf runs in front of its mother, and a black rhino calf runs behind — a genuinely reliable way to tell the two species apart at distance, and it follows from habitat: the open-country grazer keeps its young in view ahead, the browser in thick bush follows a path the mother clears.");
j37("blackrhino_c", "blackrhino", "Milk, then browse", "Dense thorn scrub",
  "It follows behind its mother through thick bush rather than leading, which is the opposite of a white rhino calf. It is born hornless — the horn is compressed keratin, not bone, and it grows in over the following months. That horn is the entire reason the species is critically endangered.");
j37("bison_c", "bison", "Milk, then grass", "The herd, on open plains",
  "Born bright orange-red — calves are called red dogs — and darkening to brown at a few months. They are born in a tight seasonal window so that predators are swamped with more calves than they can take. Nearly every bison alive descends from a few hundred animals that survived the slaughter of the 1800s.");
j37("moose_c", "moose", "Milk, then aquatic plants and browse", "Boreal forest and wetland",
  "It can swim within days and will follow its mother into deep water, which is a defence — wolves are far less effective in a lake. She drives it away abruptly just before her next calf is born, and a yearling moose that has just been evicted is one of the more unpredictable animals in the forest.");
j37("camel_c", "camel", "Milk", "Desert, with the herd",
  "It is born without a hump worth mentioning — the hump is stored fat, and it accumulates with feeding, so a young calf's back is nearly flat. It can walk within hours. Camel milk keeps far longer than cow's milk in heat and is a staple across the drylands where the animals are kept.");
j37("tapir_c", "tapir", "Milk, then fruit and leaves", "Rainforest near water",
  "Striped and spotted in cream on dark brown — a pattern often described as watermelon markings — which breaks it up completely in the dappled light of the forest floor. It fades by about six months. Tapirs are among the most important seed dispersers in the forests they inhabit.");
j37("llama_c", "llama", "Milk", "The Andes and worldwide",
  "A cria is normally born in the morning, which is not a coincidence — Andean nights are cold enough to kill a wet newborn, and daylight births give it hours to dry and stand. Females almost never lick their young clean or nudge them up; the cria has to get up on its own.");
j37("alpaca_c", "alpaca", "Milk", "High Andean pasture and worldwide",
  "Also born in the morning for the same reason, and also expected to stand alone. The fleece it grows will come in one of more than twenty natural shades, and the first shearing — the baby fleece — is the finest an alpaca will ever produce.");
j37("zebra_f", "zebra", "Milk, then grass", "Open savanna, within the herd",
  "For the first days its mother keeps every other zebra away from it, and the reason is the stripes: the foal has to learn her individual pattern, voice and smell before it can be allowed into the confusion of the herd. A foal that imprints on the wrong adult in a moving mass of stripes is a foal that starves.");

// ===== bears =====
j37("polarbear_c", "polarbear", "Milk that is about a third fat", "A snow den dug into a drift",
  "Born in a snow den in the depth of winter, blind and around 600 grams — roughly the weight of a guinea pig, from a mother who may weigh 400kg. She does not eat, drink or defecate through the entire denning period while nursing them. They emerge in spring, and whether they survive depends almost entirely on sea ice.");
j37("grizzly_c", "grizzly", "Milk, then everything the mother eats", "A winter den, then the mother's range",
  "Born tiny and hairless during hibernation, to a mother who is asleep — she gives birth without properly waking. It nurses through the rest of the winter on stored fat converted into milk. Delayed implantation means she can effectively decide, based on her autumn condition, whether the pregnancy proceeds at all.");
j37("blackbear_c", "blackbear", "Milk, then berries and forage", "Den, then forest",
  "Also born in the den mid-winter to a dozing mother, and it climbs almost immediately — black bear cubs go up trees at the first alarm, which is their primary defence and the main behavioural difference from grizzly cubs, who stand their ground because their mother does.");
j37("panda_c", "panda", "Milk, then bamboo", "A hollow tree or rock den, then bamboo forest",
  "It is born pink, blind, nearly hairless and about 1/900th of its mother's weight — the most extreme size difference between mother and newborn of any placental mammal. Twins are common in the wild and the mother usually raises only one. It does not start on bamboo for months, and it is not properly weaned until well past its first year.");
j37("sunbear_c", "sunbear", "Milk, then fruit, insects and honey", "Tree nests in Southeast Asian forest",
  "The smallest bear, and its cub is correspondingly tiny and helpless — carried in the mother's mouth and paws, and dependent for far longer than its size suggests. The chest patch is unique to each individual, present from cubhood, and works as a fingerprint for researchers.");
j37("slothbear_c", "slothbear", "Milk, then termites and fruit", "The mother's back, across India and Sri Lanka",
  "It is the only bear that habitually rides on its mother's back — up to two cubs cling to her fur for months, and she carries them while running from tigers. Adult sloth bears vacuum termites out of mounds with a noise audible 100 metres away, and the cubs learn the technique by watching from her shoulders.");
j37("spectacledbear_c", "spectacledbear", "Milk, then bromeliads and fruit", "Andean cloud forest",
  "South America's only bear, born in a den and raised by the mother alone in cloud forest that is being cleared around it. The pale facial markings that name the species are present from birth and are different on every individual.");

// ===== pinnipeds =====
j37("walrus_c", "walrus", "Milk for up to two years", "Ice floes and haul-outs",
  "One of the longest-nursed pinnipeds — a walrus calf may suckle for two years and stays with its mother for longer, riding on her back in the water. Females will defend a calf that is not theirs. It has no tusks; they erupt in the second year.");
j37("sealion_p", "sealion", "Milk, then fish", "Rookery beaches and rocks",
  "The mother goes to sea to feed and returns to a beach of hundreds of near-identical pups, and finds hers by call and smell — they learn each other's voices in the first hours and both remember. A pup that fails to answer is not fed.");
j37("seal_p", "seal", "Milk that is around 50% fat", "Breeding beaches and ice",
  "Fur seal pups are born black and moult to adult colour. The milk is roughly half fat and the mother alternates long feeding trips at sea with brief visits, so the pup fasts for days between meals and must make each one last. Nearly all fur seal species were hunted to the edge for those coats.");
j37("leopardseal_p", "leopardseal", "Milk, then krill, fish, and penguins", "Antarctic pack ice",
  "Born on drifting ice and left alone by the mother after about a month, after which it hunts by itself in the water where its own species is the main predator of young seals. Leopard seals are among the very few animals that will investigate a human in the water rather than leave.");
j37("weddellseal_p", "weddellseal", "Milk, then fish and squid", "Fast ice around Antarctica",
  "Born on ice in temperatures far below freezing, and in the water within a couple of weeks. Weddell seals live further south than any other mammal and survive by maintaining breathing holes with their teeth — which wears the teeth out, and a seal whose teeth fail cannot keep a hole open and drowns.");

// ===== primates =====
j37("gorilla_i", "gorilla", "Milk, then leaves and stems", "Clinging to the mother, in the group",
  "It clings to its mother's chest for months and rides on her back for years, and it is weaned at three to four. Silverbacks are notably tolerant of infants climbing on them. Gorilla groups have adopted orphaned infants, including by the silverback himself, which is not what the reputation would predict.");
j37("chimpanzee_i", "chimpanzee", "Milk, then fruit, and termites once it can fish for them", "Clinging to the mother, in the community",
  "It takes years to learn to fish for termites, and it learns by watching its mother specifically — daughters watch closely and get it early, sons mess about and get it late, which is one of the clearest demonstrations of cultural transmission in a wild animal. It is not weaned until four or five.");
j37("gibbon_i", "gibbon", "Milk, then fruit", "Carried through the canopy of Southeast Asian forest",
  "It is carried through the treetops while its mother brachiates at speed, clinging to her belly through swings that cross gaps of several metres. Gibbon pairs sing duets to hold a territory, and the young learn the family's specific duet — a shared song that has to be practised.");
j37("baboon_i", "baboon", "Milk, then anything", "Riding the mother, in the troop",
  "It is born with a black natal coat and a pink face, which is the opposite of the adult and which makes it instantly identifiable to the troop — adults are markedly more tolerant of a black infant. The coat changes at a few months, and so does everyone's patience. It rides underneath at first and jockey-style on the back later.");
