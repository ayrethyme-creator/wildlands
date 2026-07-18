// ---------- CHAPTER XXVI — Part 32: MORE FIELD NOTES ----------
// Same rules. Nothing invented. Statuses I wasn't sure of are left for later.

const n32 = (k, d, h, s, f) => { if (DEX[k]) INFO[k] = { d, h, s, f }; };

// ===== raptors =====
n32("peregrine", "Carnivore — birds, taken in mid-air", "Every continent except Antarctica", "LC",
  "The fastest animal alive: a stoop has been measured at over 380km/h. At that speed the air pressure would burst its lungs, so it has bony baffles in its nostrils that slow the air entering — the same problem jet engine designers solved decades later, and they looked at the falcon while doing it. It hits its prey with a clenched foot hard enough to kill on impact. DDT nearly finished it; it now nests on skyscrapers and hunts pigeons.");
n32("harpyeagle", "Carnivore — sloths and monkeys, taken from the canopy", "Rainforest from Mexico to Argentina", "VU",
  "Its talons are longer than a grizzly's claws — up to 13cm — and it can carry off a howler monkey. It hunts inside the forest, not above it, flying through the canopy with a two-metre wingspan and a short broad tail for steering between trunks. A pair raises one chick every two to three years, which is why the loss of any adult matters enormously.");
n32("philippineeagle", "Carnivore — flying lemurs, monkeys, hornbills", "Old-growth forest of the Philippines", "CR",
  "One of the largest and rarest eagles on earth, with about 400 pairs left. A pair needs 40 square kilometres of old-growth forest, and the Philippines has cut most of it. Killing one carries a twelve-year prison sentence. It raises one chick every two years, and both parents feed it for twenty months.");
n32("stellerseagle", "Carnivore — salmon, mostly", "The Russian Far East, wintering in Japan", "VU",
  "The heaviest eagle in the world — up to 9kg, with a bill so massive it looks exaggerated. Almost the entire species breeds on the Kamchatka peninsula and around the Sea of Okhotsk, so it is one of the most geographically concentrated large birds alive. One individual famously wandered to North America in 2020 and has been touring the continent ever since, thousands of kilometres from anywhere it should be.");
n32("goldeneagle", "Carnivore — hares, marmots, deer calves", "The northern hemisphere", "LC",
  "It can see a hare from three kilometres away, and it dives at over 240km/h. In Mongolia and Kazakhstan people hunt with them — a tradition thousands of years old, in which a berkutchi takes an eaglet, works with her for years, and then releases her back to the wild to breed. The relationship is temporary by design.");
n32("baldeagle", "Piscivore — fish, and whatever it can steal", "North America", "LC",
  "Benjamin Franklin's complaint about it was accurate: it steals fish from ospreys rather than catching its own whenever it can. In 1963 there were 417 nesting pairs left in the lower 48 states, poisoned by DDT thinning their eggshells until they broke under the parents' weight. There are now over 70,000 pairs. It is the most successful species recovery in American history.");
n32("osprey", "Piscivore — fish, exclusively", "Every continent except Antarctica", "LC",
  "It is the only raptor whose outer toe reverses, so it can carry a fish with two toes in front and two behind — and it always carries it head-first, because a fish held sideways costs more to fly with. Its nostrils close when it hits the water. It eats almost nothing but live fish, worldwide, everywhere, which is nearly unique among birds of prey.");
n32("secretarybird", "Carnivore — snakes, lizards, insects", "African grassland", "EN",
  "It kills snakes by kicking them, and the kick lands in 15 milliseconds with a force five times its own body weight — faster than the snake's nervous system can respond. It walks up to 30km a day hunting on foot. It is an eagle that decided to be a stork, and it is now endangered because grassland is being ploughed.");
n32("snowyowl", "Carnivore — lemmings, above all", "The Arctic tundra", "VU",
  "One owl can eat 1,600 lemmings in a year, and in years when lemmings crash it simply does not breed at all. It hunts in daylight, because the Arctic summer has nothing else on offer. It irrupts south in enormous numbers some winters, which is how anyone in New England ever sees one.");
n32("barnowl", "Carnivore — voles and mice", "Every continent except Antarctica", "LC",
  "It can catch a mouse in total darkness using hearing alone — its ears are set at different heights, so a sound arriving fractionally sooner and louder in one ear tells it the vertical angle. The facial disc is a parabolic dish that funnels sound. It is the most widely distributed land bird on earth.");
n32("greathornedowl", "Carnivore — rabbits, skunks, other raptors", "The Americas", "LC",
  "It is one of the very few animals that routinely eats skunks — it has almost no sense of smell, so it simply does not care. Its grip requires 13kg of force to open. It is the most widespread owl in the Americas and will take almost anything, including other owls.");
n32("condor", "Scavenger — carrion", "The Andes", "VU",
  "A 3.3-metre wingspan — the largest of any land bird — and it barely flaps, riding mountain thermals for hundreds of kilometres. One tracked bird flew five hours and 170km without a single wingbeat. It can live over 70 years, and it is central to Andean cosmology as the bird of the upper world.");
n32("redtailhawk", "Carnivore — rodents, snakes, rabbits", "North America", "LC",
  "That scream you have heard in every film whenever a bald eagle appears on screen is this bird — the eagle's real call is a thin chittering whistle that sounds unimpressive, so Hollywood dubs the hawk over it permanently. It is the commonest hawk in North America and you have almost certainly seen one on a lamppost.");
n32("harrier", "Carnivore — voles and small birds", "North America and Eurasia", "LC",
  "It hunts by flying low and slow with its wings in a V, listening — it has a facial disc like an owl, which is nearly unheard of in a hawk, and it hunts by ear as much as by eye. Males are pale grey and females brown, so different that early naturalists described them as separate species.");
n32("caracara", "Omnivore — carrion, insects, whatever it can find", "The Americas, from Texas to Patagonia", "LC",
  "A falcon that gave up flying for walking — it strides around on long legs, turning over dung and scavenging roadkill, and will steal from vultures. It is the national bird of Mexico and is probably the eagle on the Mexican flag, despite the golden eagle usually getting the credit.");
n32("goshawk", "Carnivore — birds and mammals inside forest", "Forests of the northern hemisphere", "LC",
  "Built for pursuing prey through dense trees at speed — short broad wings, a long rudder of a tail, and a willingness to crash through cover after a squirrel. Falconers have used it for centuries and call it the cook's bird, because it reliably brings home dinner. It is famously, notoriously difficult to work with.");

// ===== parrots =====
n32("kea", "Omnivore — roots, insects, carrion, and anything it can dismantle", "The mountains of New Zealand's South Island", "EN",
  "The only alpine parrot on earth, and one of the most intelligent birds ever tested — it solves multi-step puzzles, works cooperatively, and has a documented play call that makes other keas start playing, which is functionally contagious laughter. It also strips the rubber from car windscreens for fun. Around 3,000 remain, and lead flashing on old buildings poisons them because they chew everything.");
n32("cockatoo", "Granivore — seeds, nuts, roots", "Australia and New Guinea", "LC",
  "It lives to 70 and sometimes past 100, which is longer than most of the people who buy one. It is loud enough to be heard kilometres away and forms flocks of hundreds. In Sydney they have been filmed teaching each other to open wheelie bins, and the technique spreads suburb by suburb — researchers can map the innovation moving across the city.");
n32("blackcockatoo", "Granivore — banksia and hakea seeds", "Australia", "EN",
  "It takes months to open some seed pods, and it is one of very few birds that can get into a banksia cone at all. Several species are endangered because the woodland they need takes decades to produce a hollow big enough to nest in — you cannot plant your way out of a shortage of old trees in under a century.");
n32("budgie", "Granivore — grass seed", "Arid inland Australia", "LC",
  "Wild budgerigars are green and yellow, and they gather in flocks of tens of thousands that move across the desert following rain. Every colour variety in a pet shop came out of that one wild bird. They can learn to speak — a budgie named Puck holds the record with an alleged 1,728 words.");
n32("cockatiel", "Granivore — seeds", "Inland Australia", "LC",
  "The smallest cockatoo, and the crest is a mood ring: straight up means startled, flat back means angry, and gently angled means content. Males whistle to court and can learn tunes; females rarely do. It is the second most popular pet bird on earth and it is a wild Australian animal that has been in captivity for less than two centuries.");
n32("lorikeet", "Nectarivore — nectar and pollen", "Australia and the Pacific", "LC",
  "Its tongue ends in a brush of fine papillae for mopping nectar out of flowers — it does not eat seeds at all, and feeding one seed mixture will slowly kill it. It is one of the most important pollinators in eastern Australia. Flocks are loud, chaotic and unmistakable.");
n32("eclectus", "Frugivore — fruit, especially figs", "New Guinea and northern Australia", "LC",
  "The male is brilliant green and the female is scarlet and blue, and they are so different that for a century ornithologists classified them as two separate species and could not work out why nobody ever saw a pair. The female holds the nest hollow — a scarce resource — and may mate with several males who all bring her food.");
n32("conure", "Frugivore — fruit and seeds", "The Guiana Shield of South America", "EN",
  "Brilliant orange and yellow, and endangered in the wild almost entirely because of the pet trade — trappers took them out of Guyana in enormous numbers. It is now more numerous in cages than in its own forest, which is true of a distressing number of parrots.");
n32("rosella", "Granivore — seeds, fruit, blossom", "Southeastern Australia", "LC",
  "The name may come from Rose Hill, an early settlement near Sydney, where colonists called them Rose Hillers. It is one of the few parrots that adapted well to European-style farmland and gardens, which is the entire reason it is still common.");
n32("quakerparrot", "Granivore — seeds and fruit", "South America; feral in cities worldwide", "LC",
  "The only parrot that builds a nest — a huge communal stick structure with separate apartments for each pair, used year-round and added to for generations. That skill is why it thrives as a feral bird in Brooklyn, Madrid and Chicago: it does not need a tree hollow, it builds its own.");
n32("bluegoldmacaw", "Frugivore — nuts, seeds, palm fruit", "Forest and savanna of South America", "LC",
  "Its bite can crack a Brazil nut, which needs a hammer, and it uses its tongue — which has a bone in it — to work the kernel out. Pairs fly wing to wing for life and are noisy enough to be heard for kilometres. It eats clay from riverbanks to neutralise the toxins in unripe seeds.");

// ===== the big birds =====
n32("ostrich", "Omnivore — plants, seeds, insects", "African savanna and desert", "LC",
  "The largest bird alive and the fastest thing on two legs — 70km/h, sustained. Its eye is 5cm across, bigger than its brain. A kick can kill a lion, and it has only two toes, one of them huge and hooved. Several hens lay in a single nest and the dominant female can identify her own eggs among forty and shuffles them to the middle.");
n32("emu", "Omnivore — plants, insects", "Australia", "LC",
  "The male incubates alone for eight weeks — he does not eat, drink or defecate for the entire period, losing a third of his body weight, and then raises the chicks for eighteen months while the female leaves. In 1932 Australia deployed soldiers with machine guns against them and lost: the Emu War is a real historical event and the emus won.");
n32("cassowary", "Frugivore — fallen fruit", "Rainforest of New Guinea and far north Queensland", "LC",
  "The most dangerous bird on earth: a 12cm dagger claw on the inner toe and the ability to kick out and downwards. It also has the deepest call of any bird, so low that part of it is below human hearing — you feel it in your chest before you hear it. It swallows fruit whole and passes seeds intact, and over 100 rainforest tree species depend on it to reproduce.");
n32("kiwi", "Insectivore — worms and grubs", "New Zealand", "VU",
  "It has nostrils at the tip of its bill — no other bird does — and hunts by smell, tapping through leaf litter in the dark. Its egg is up to 20% of the female's body weight, proportionally the largest of any bird; by the end she physically cannot eat because the egg leaves no room for her stomach. Its bones are heavy and marrow-filled, like a mammal's.");
n32("shoebill", "Carnivore — lungfish, mostly", "The papyrus swamps of central Africa", "VU",
  "It stands still for hours and then collapses forward onto a lungfish in a strike called a collapse — it throws its whole body at the water. It clatters its bill like a machine gun as a greeting. It looks like it was assembled from a dinosaur and a shoe, and it is genuinely closer to pelicans than to storks.");
n32("crane", "Omnivore — plants, fish, insects", "Japan, China and Russia", "VU",
  "It dances — bowing, leaping, throwing sticks — and pairs dance together for life. In Japan it is tsuru, a symbol of a thousand years, and it is the bird behind the thousand paper cranes. Around 3,000 remain. The Korean DMZ, a strip of land nobody may enter, has become one of its most important wintering grounds.");
n32("stork", "Carnivore — frogs, insects, fish", "Europe, Asia and Africa", "LC",
  "It nests on chimneys and church roofs and returns to the same nest for decades, which is where the baby-delivery folklore comes from — storks arrived in spring, nine months after midsummer weddings. In 1822 a stork was shot in Germany with a central African spear through its neck, and that single bird proved that European birds migrate to Africa rather than hibernating in mud, which is what people had believed.");
n32("albatross", "Carnivore — squid and fish", "The Southern Ocean", "VU",
  "The largest wingspan of any bird — 3.5 metres — and it locks its wings with a tendon sheet so soaring costs it almost no muscle at all. It can circle the entire Southern Ocean and go years without touching land. Pairs bond for decades; a Laysan albatross named Wisdom is over 70 and still laying eggs. Longline fisheries drown them by the hundred thousand.");
n32("pelican", "Piscivore — fish", "Warm coasts and lakes worldwide", "LC",
  "The pouch holds up to 13 litres — three times what its stomach can — and is a net, not a lunchbox: it scoops, drains the water out, then swallows. Brown pelicans dive from 20 metres and hit the water hard enough to stun fish, with air sacs under the skin to absorb the impact. Some species fish cooperatively, herding fish into the shallows in a line.");
n32("puffin", "Piscivore — sand eels", "The North Atlantic", "VU",
  "It can hold a dozen fish crosswise in its bill at once, held by backward-facing spines on its tongue and palate, while still opening it to catch more. That colourful bill is seasonal — it sheds the bright plates after breeding and spends winter grey and unrecognisable, alone at sea. It flaps 400 times a minute and lands like a thrown brick.");
n32("frigatebird", "Carnivore — flying fish, and whatever it can steal", "Tropical oceans", "LC",
  "It cannot land on water — its feathers are not waterproof, so a frigatebird that lands at sea drowns. It solves this by never landing: one was tracked flying for two months without stopping, sleeping on the wing in ten-second bursts while riding thermals to 4,000 metres. The male inflates a scarlet throat pouch the size of his own body for weeks to attract a female.");
n32("bluefootedbooby", "Piscivore — sardines and anchovies", "The eastern Pacific, especially the Galápagos", "LC",
  "The blue is a health certificate: the pigment comes from carotenoids in fresh fish, and a bird that has not eaten well fades within 48 hours. Females choose the bluest feet available, and they can tell. It dives from 25 metres. The name comes from bobo, Spanish for fool, because it had no fear of sailors.");
n32("loon", "Piscivore — fish", "Lakes of the northern forests", "LC",
  "Its bones are solid rather than hollow, which makes it heavy enough to dive to 60 metres — and so badly designed for land that it cannot walk, only shuffle on its belly. Its legs are set so far back it needs a quarter-mile of water to take off. The call is the sound people mean when they say wilderness.");
n32("swan", "Herbivore — aquatic plants", "Europe and Asia; introduced widely", "LC",
  "It has over 25,000 feathers and a neck with 24 vertebrae, more than a giraffe. In Britain every unmarked mute swan on open water legally belongs to the Crown, and there is still an annual ceremony — Swan Upping — in which they are counted on the Thames. Pairs usually mate for life, and a bereaved swan may not re-pair for years.");

// ===== birds worth stopping for =====
n32("hoatzin", "Folivore — leaves", "Flooded forest of the Amazon", "LC",
  "It ferments leaves in a huge crop like a cow's rumen, which makes it smell so strongly of manure that it is called the stinkbird and nobody eats it. Its chicks are born with two functional claws on each wing — they climb out of the nest, into the branches, and drop into the water to escape predators, then climb back up. The claws fall off as they mature. Its lineage split from all other birds about 64 million years ago and it has no close relatives at all.");
n32("lyrebird", "Insectivore — invertebrates from the forest floor", "The forests of southeastern Australia", "LC",
  "The finest vocal mimic on earth. A male's song is largely other birds' songs, learned and passed down — and captive birds have been recorded imitating chainsaws, car alarms and camera shutters. A famous individual named Chook imitated a flute so well that a supposed folk tune spread through a wild population for decades after a captive bird learned it from a farmer.");
n32("quetzal", "Frugivore — wild avocado, swallowed whole", "Cloud forest from Mexico to Panama", "NT",
  "The male grows tail streamers up to a metre long, and it has to back out of its nest hole rather than turn around or they break. It was sacred to the Maya and Aztec, its feathers worth more than gold, and killing one was a capital offence — but the birds were caught, plucked and released, because the feathers grow back. Guatemala's currency is the quetzal.");
n32("birdofparadise", "Frugivore — fruit and insects", "New Guinea", "LC",
  "The males' displays are among the strangest things any animal does — one species' plumage is so black it absorbs 99.95% of light, structurally, so the coloured patches beside it appear to glow with no reference point. That is nearly as black as the darkest material humans have engineered. The females' choosiness built all of it.");
n32("peacock", "Omnivore — seeds, insects, small snakes", "South Asia", "LC",
  "The train is not the tail — it is the upper tail coverts, and it is grown and shed every year. The eyespots are structural colour: the feather is brown, and the blue and green come from the physical spacing of the barbules, not pigment. Darwin wrote that the sight of a peacock's feather made him feel sick, because he could not see how it could possibly be useful, and working it out is what led to sexual selection.");
n32("hummingbird", "Nectarivore — nectar, and insects for protein", "The Americas", "LC",
  "Its heart beats over 1,200 times a minute and its wings figure-eight up to 80 times a second, which is why it can hover and fly backwards — no other bird can. It has to enter torpor every night, dropping its temperature by 30°C and shutting down almost to death, or it would starve before morning. The ruby-throated crosses 800km of open Gulf of Mexico non-stop, on a body weighing three grams.");
n32("kookaburra", "Carnivore — snakes, lizards, insects", "Eastern Australia", "LC",
  "The laugh is a territorial call, and families do it together at dawn and dusk to say the ground is taken. It kills snakes by grabbing them behind the head and beating them against a branch. It is a kingfisher that lives nowhere near water and eats no fish.");
n32("potoo", "Insectivore — moths, taken on the wing", "Central and South America", "LC",
  "It spends the day sitting on a broken branch stump, bill up and eyes closed, and is essentially invisible — it is a bird pretending to be wood, and it is extremely good at it. Its eyelids have small notches so it can see while apparently asleep. Its night call is a slow descending moan that sounds like grief.");
n32("toucan", "Frugivore — fruit", "Rainforest from Mexico to Argentina", "LC",
  "The bill is a third of its length and almost weightless — a keratin shell over a bony foam — and it turns out to be a radiator: the bird dumps heat through it, and can shut the flow down at night, which makes it one of the largest thermal windows of any animal. It also uses it to reach fruit at branch tips too thin to stand on. It sleeps folded in a hollow with its bill over its back.");
n32("kingfisher", "Piscivore — small fish", "Eurasia and North Africa", "LC",
  "It corrects for refraction — it sees the fish bent by the water's surface and strikes where the fish actually is, not where it appears. Its dive is so streamlined that the Japanese Shinkansen's nose was redesigned in its shape to stop the sonic boom the train made leaving tunnels, and the redesign made the train quieter, faster and more efficient.");
n32("woodpecker", "Insectivore — carpenter ants and beetle larvae", "North American forest", "LC",
  "It hits wood at 25km/h, up to 20 times a second, taking 1,000g of deceleration without concussion — the skull is spongy in the right places and the tongue actually wraps around the back of the brain, anchoring behind the eye socket, acting as a seatbelt. Its excavations become nest holes for a long list of other species that cannot make their own.");
n32("raven", "Omnivore — anything at all", "The northern hemisphere", "LC",
  "It makes tools, plans for the future, recognises individual human faces for years, and holds grudges. It has been shown to hide food when it suspects it is being watched — and to check, first, whether there is a peephole. Ravens play: they slide down snowbanks repeatedly, and there is no food in it. In captivity they live 40 years.");
n32("mandarinduck", "Omnivore — seeds, insects, snails", "East Asia; feral in Britain", "LC",
  "In China it is a symbol of marital devotion and is given at weddings — which is unfortunate, because mandarin ducks do not pair for life at all and re-pair every year. It nests up to 10 metres up a tree, and the ducklings jump out on their first day and bounce.");
n32("heron", "Carnivore — fish, frogs, small mammals", "Europe, Asia and Africa", "LC",
  "It stands still for as long as it takes, and the strike is one of the fastest movements in the bird world — the neck has a kinked sixth vertebra that works as a spring-loaded hinge. It has patches of specialised feathers that crumble into powder, which it uses to clean fish slime off itself.");
n32("spoonbill", "Carnivore — shrimp and small fish", "The Americas", "LC",
  "The pink comes from the shrimp it eats, exactly like a flamingo's. It feeds by sweeping that spatula bill side to side through muddy water with the tip open, snapping shut on contact — it never sees what it catches. It was hunted nearly to extinction in Florida because its wings made good fans.");
n32("ibis", "Carnivore — insects, crustaceans", "Northern South America", "LC",
  "Scarlet, in flocks of thousands, and the colour is entirely dietary — red crustaceans. In captivity, fed the wrong food, they turn pink and then white. It is the national bird of Trinidad and Tobago and appears on its coat of arms.");
n32("roadrunner", "Carnivore — lizards, snakes, insects", "The deserts of the southwestern US and Mexico", "LC",
  "It runs at 32km/h and can kill a rattlesnake — usually in pairs, one distracting while the other strikes the head. It cannot say meep meep; the real call is a descending coo and a clattering of the bill. It gets nearly all its water from prey and reabsorbs it from its own nasal glands.");

// ===== insects =====
n32("bumblebee", "Nectarivore — nectar and pollen", "The northern hemisphere and South America", "LC",
  "It buzz-pollinates: it grabs a flower and vibrates its flight muscles at around 400Hz to shake pollen loose, which honeybees cannot do — tomatoes, blueberries and aubergines depend on it. It can fly in cold that grounds every other bee because it shivers to warm itself up first. It can also detect a flower's electric field and tell whether another bee has just been there.");
n32("orchidbee", "Nectarivore — nectar; the males collect scent", "Rainforest of Central and South America", "LC",
  "The males do not gather food — they gather smells. They scrape fragrance compounds from orchids, rotting wood and fungus, store them in hollow pockets in their hind legs, and blend a personal perfume over weeks that they then use to attract a female. Several orchid species can be pollinated by exactly one bee species and would go extinct without it.");
n32("masonbee", "Nectarivore — pollen and nectar", "The northern hemisphere", "LC",
  "It is solitary — no hive, no queen, no honey — and it is a far better pollinator than a honeybee, because it carries pollen dry on its belly and drops it everywhere instead of packing it neatly into baskets. One mason bee does the pollination work of about a hundred honeybees. It seals its eggs into a tube with mud, each in its own cell with a packed lunch.");
n32("hoverfly", "Nectarivore as an adult; its larvae eat aphids", "Worldwide", "LC",
  "It is a fly wearing a wasp's colours, and it cannot sting at all — the whole defence is the resemblance. It hovers with a precision no bee can manage. Its larvae are voracious aphid predators, so it is both a major pollinator and a pest controller, and almost everyone who sees one tries to swat it.");
n32("bluemorpho", "Frugivore — rotting fruit as an adult", "Rainforest of Central and South America", "LC",
  "The blue is not a pigment — the scales are structured in microscopic ridges that cancel every wavelength except blue, which is why it flashes as it flies and why a dead one never fades. The underside is drab brown with eyespots, so a flying morpho seems to blink in and out of existence. Adults have no mouth for solid food and drink fermenting fruit, which makes them noticeably drunk.");
n32("glasswing", "Nectarivore — flowers", "Central and South America", "LC",
  "Its wings are transparent — the tissue between the veins has nanoscale pillars, irregularly spaced, that stop light reflecting at any angle, so it does not glint even when it moves. Engineers copied it for anti-glare screens and for lenses. As a caterpillar it eats toxic nightshade and stays poisonous for life.");
n32("birdwing", "Nectarivore — flowers", "New Guinea and northern Australia", "EN",
  "The largest butterfly in the world — Queen Alexandra's Birdwing has a 25cm wingspan, and the first specimen ever collected, in 1906, was brought down with a shotgun. It lives in one small area of Papua New Guinea and is one of the few insects with the highest level of international trade protection.");
n32("swallowtail", "Nectarivore — flowers", "Worldwide", "LC",
  "The caterpillar spends its early life looking exactly like a bird dropping, then grows into a green thing with fake eyespots, and if that fails it everts a bright orange forked gland behind its head that smells foul. Three different defences in one lifetime. Some species' caterpillars eat only one plant and starve on anything else.");
n32("lunamoth", "It does not eat at all", "The forests of eastern North America", "LC",
  "The adult has no mouth and no digestive system. It emerges, lives about a week on the fat it stored as a caterpillar, mates, and dies — the whole adult life is reproduction and nothing else. Those long tails are not decoration: they spin as it flies and scramble bat sonar, so the bat strikes the tail and the moth escapes.");
n32("atlasmoth", "It does not eat at all", "The forests of Asia", "LC",
  "One of the largest insects on earth — a 27cm wingspan, the size of a dinner plate. The adult has no functional mouth and lives about two weeks. The wingtips are shaped and patterned like a snake's head, and a disturbed atlas moth drops to the ground and writhes to complete the impression.");
n32("hawkmoth", "Nectarivore — nectar, taken hovering", "Worldwide", "LC",
  "It hovers like a hummingbird and is regularly mistaken for one. Darwin saw a Madagascan orchid with a 30cm nectar spur and predicted a moth with a 30cm tongue must exist to pollinate it; he was ridiculed, and the moth was found 21 years after he died. It is named praedicta.");

// ===== the rest of the mammals =====
n32("wildebeest", "Grazer — short grasses", "East and southern Africa", "LC",
  "1.5 million of them make the largest land migration on earth, a 1,000km loop through the Serengeti and Mara, and they follow the rain by listening — there is evidence they can hear thunder 50km away. About 400,000 calves are born inside a three-week window, so many at once that the predators cannot possibly eat them all. A calf can run with the herd within minutes of birth.");
n32("gazelle", "Grazer — grasses", "East African savanna", "LC",
  "It stots — bounces stiff-legged on all four feet in front of a predator instead of running. It is a signal, and it is honest: the message is I have seen you and I am fit enough to waste energy proving it. Cheetahs preferentially chase gazelles that do not stot, which is the evidence that it works.");
n32("springbok", "Grazer — grasses and shrubs", "Southern Africa", "LC",
  "It pronks — leaps two metres straight up with its back arched and a flap of white fur flared open along its spine. Historic accounts describe migrations of millions, called trekbokke, that took days to pass and were never seen again after the 1890s. Nobody fully knows why they stopped.");
n32("impala", "Mixed feeder — grass and leaves", "Eastern and southern Africa", "LC",
  "It jumps 10 metres horizontally and 3 metres high, straight over a bush it could walk around, apparently to confuse pursuit. Herds groom each other in strict turn-taking — you scratch my neck, I scratch yours, exactly the same number of times — which is one of the clearest cases of reciprocity in any animal.");
n32("kudu", "Browser — leaves", "Eastern and southern Africa", "LC",
  "The bull's spiral horns can reach 1.8 metres along the curve. When acacias are browsed they release ethylene gas, and neighbouring trees detect it and pump tannin into their leaves within minutes — kudu counter this by feeding upwind and moving on quickly. Kudu in fenced enclosures have died of tannin poisoning because they could not leave.");
n32("eland", "Browser — leaves and fruit", "Eastern and southern Africa", "LC",
  "The largest antelope on earth, up to a tonne, and it can still clear a two-metre fence from standing. Its knees click audibly as it walks and the sound carries — larger bulls click deeper, so the herd knows who is coming before it arrives. It is painted on rock walls across southern Africa more than any other animal, and is central to San spiritual life.");
n32("bongo", "Browser — leaves, bark, rotten wood", "Rainforest of central Africa", "NT",
  "The largest forest antelope, chestnut with white stripes, and it is nocturnal and almost never seen. It eats burnt wood after lightning strikes, apparently for minerals and to neutralise plant toxins. The mountain bongo of Kenya is down to about 100 animals.");
n32("nyala", "Mixed feeder — leaves and grass", "Southeastern Africa", "LC",
  "Males and females look like different species — he is charcoal grey and shaggy with horns, she is bright chestnut and hornless and half his weight. It follows baboons and monkeys to eat the fruit they drop, and it will listen to their alarm calls as its own early warning.");
n32("topi", "Grazer — grasses", "African savanna", "LC",
  "Males lie about danger. A male on a breeding territory will give a predator alarm snort when there is no predator, purely to stop a female leaving his patch — and it works. It is one of the few documented cases of deliberate deception for sex in a hoofed animal. Females, notably, know this and mostly ignore it.");
n32("hartebeest", "Grazer — grasses", "African savanna", "LC",
  "Its face is absurdly long and its horns sit on a bony pedestal on top of the skull, which makes it look badly designed — but it is one of the most efficient endurance runners in Africa and can trot indefinitely. Two subspecies are already gone.");
n32("blackbuck", "Grazer — grasses", "India and Nepal", "LC",
  "The male's horns spiral in tight rings up to 70cm, and males darken to near-black when breeding and pale in the off season. It is one of the fastest animals in Asia. It is sacred to the Bishnoi, who have protected it for 500 years and will physically intervene to stop poaching — one of the oldest conservation traditions on earth.");
n32("bighorn", "Grazer — grasses and shrubs", "Mountains of western North America", "LC",
  "Rams hit each other head-on at 32km/h, repeatedly, for hours — the horns can weigh 14kg, more than all the rest of their bones together, and the skull is double-layered with a strut of bone between. They still concuss each other. Ewes lead the herd and pass down migration routes over generations; herds that lose the elders lose the routes and do not rediscover them for decades.");
n32("yak", "Grazer — grass, moss, lichen", "The Tibetan plateau above 4,000m", "VU",
  "It has three times the red blood cells of a cow and lungs and heart enlarged for air with 40% less oxygen — and it overheats and dies below about 3,000 metres. It cannot live where we are comfortable. Wild yaks are twice the size of the domestic ones and there are fewer than 10,000.");
n32("llama", "Herbivore — grasses", "The Andes", "LC",
  "The Inca Empire ran on them — no wheels, no horses, no cattle, just llamas carrying 30kg up mountains at 4,000 metres. It will simply lie down if overloaded and cannot be argued with. Its antibodies are unusually small and simple, and are being used in human medicine because they can reach targets ours cannot.");
n32("alpaca", "Herbivore — grasses", "The Andes", "LC",
  "Bred from the vicuña purely for fibre over 6,000 years, and it is not a small llama — different wild ancestor. Its fleece has no lanolin, so it does not trigger wool allergies, and its hollow fibres make it warmer than sheep's wool at a fraction of the weight. It hums when it is anxious.");
n32("whitetail", "Browser — leaves, twigs, acorns", "The Americas", "LC",
  "There were about 300,000 left in the US around 1900 and there are now over 30 million — more than when Europeans arrived, because we removed the wolves and cougars and then created perfect edge habitat. It is one of the very few animals in this guide whose problem is that there are too many, and the resulting overbrowsing is reshaping eastern forests.");
n32("chital", "Grazer — grasses", "India and Sri Lanka", "LC",
  "It follows langur monkeys and eats what they drop, and listens to their alarm calls — the monkeys see the tiger from above, the deer smell it from below, and both benefit. It is the primary prey of the Bengal tiger, and it is the reason tiger reserves work: protect the deer and the tigers follow.");
n32("muntjac", "Omnivore — leaves, fruit, eggs, carrion", "South and Southeast Asia; feral in Britain", "LC",
  "One of the oldest deer lineages, with tusks as well as antlers — small males fight with the tusks more than the horns. Its bark carries for a kilometre and it does it for an hour at a time. The Indian muntjac has the lowest chromosome count of any mammal: six in the female, seven in the male.");
n32("pudu", "Browser — leaves, bark, fruit", "The temperate forests of Chile and Argentina", "NT",
  "The smallest deer in the world — 35cm at the shoulder, about the size of a spaniel, with antlers under 10cm. It climbs fallen logs and stands on its hind legs to reach leaves. It barks when frightened and its heart can fail from fright, which is not an exaggeration.");
n32("peccary", "Omnivore — roots, fruit, cactus", "The Americas", "LC",
  "It is not a pig — a separate family that split from pigs 30 million years ago, and it has a scent gland on its back that the whole herd rubs on each other so the group smells identical. White-lipped peccaries move in herds of hundreds and will collectively stand and face a jaguar rather than run, which sometimes works.");
n32("duiker", "Omnivore — fruit, leaves, and occasionally birds", "Africa", "LC",
  "A small forest antelope that eats meat — it will catch and eat birds and rodents, which almost no antelope does. The name is Afrikaans for diver, from the way it plunges into thick cover when startled. It is the most heavily hunted animal in Africa for bushmeat, by sheer number.");
n32("grayfox", "Omnivore — rodents, fruit, insects", "The Americas", "LC",
  "It climbs trees — properly, gripping with hooked claws, and it will sleep in one and go up to escape dogs. It is the only canid in the Americas that can, and its lineage is the oldest surviving branch of the dog family, split off six or seven million years ago.");
n32("corsacfox", "Carnivore — rodents and insects", "The steppes of Central Asia", "LC",
  "It rarely drinks and does not dig its own burrow — it takes over those of marmots and ground squirrels, which is efficient and also means it is dependent on rodents nobody protects. It is a surprisingly poor runner for a fox and can be caught by a rider on a horse.");
n32("swiftfox", "Omnivore — rodents, insects, fruit", "The short-grass prairie of North America", "LC",
  "It weighs 2kg — about the size of a house cat — and it was gone from Canada entirely by 1938, poisoned and trapped alongside the wolves. Reintroduction from captive animals began in 1983, and there is now a wild Canadian population again. It is one of the quieter success stories on this continent.");
n32("blackbackjackal", "Omnivore — carrion, rodents, fruit", "Eastern and southern Africa", "LC",
  "It pairs for life and both parents feed the pups, and pairs with an adult helper from a previous litter raise significantly more young. It is one of the oldest members of the dog family still alive, and it is genetically distinct enough that it may not really be a jackal at all.");
n32("mink", "Carnivore — fish, rodents, birds", "North America; feral across Europe", "LC",
  "It kills more than it eats and caches the surplus, which is why it is loathed. Farmed for fur, and escapees plus deliberate releases have established it across Europe, where it has been catastrophic for water voles — and it is displacing the European mink, which is now one of the most endangered mammals on the continent.");
n32("seal", "Carnivore — fish and squid", "The coast of southern Africa and Namibia", "LC",
  "A fur seal, not a true seal — it has ear flaps and can run on land. Two million of them live along one desert coast, and they are the reason the great white sharks are there. Cape fur seals have also been filmed killing and eating seabirds and even young sharks, which nobody expected.");
n32("fursealion", "Carnivore — krill, fish, squid", "The Southern Ocean", "LC",
  "It was hunted to near-extinction for its underfur — South Georgia's population fell to perhaps a hundred animals — and has since recovered to several million, one of the largest recoveries of any mammal. It has denser fur than almost any animal except the sea otter, at up to 300,000 hairs per square centimetre.");
n32("ribbonseal", "Carnivore — fish and squid", "The Arctic Pacific pack ice", "LC",
  "Strikingly banded in black and white, like no other seal, and it has an inflatable air sac connected to its windpipe that nothing else has and nobody has explained. It is thought to be for underwater sound. It spends most of the year alone on open ocean and is one of the least-observed seals.");
n32("seiwhale", "Filter feeder — copepods", "Every ocean", "EN",
  "The third-largest whale and the fastest — over 50km/h. Unlike other rorquals it skims rather than lunges, cruising along with its mouth open. When the blue and fin whales had been hunted out, the whalers turned to this one: over 300,000 were killed in a few decades, mostly in the 1960s and 70s.");
n32("brydeswhale", "Filter feeder — fish and krill", "Warm oceans worldwide", "LC",
  "The only baleen whale that lives in warm water year-round and does not migrate. It has three ridges on top of its head instead of one, which is how you tell it from a sei. A population in the Gulf of Mexico numbers about 50 animals and is one of the most endangered whales on earth.");
n32("melonhead", "Carnivore — squid and fish", "Deep tropical waters", "LC",
  "It is a dolphin, and it moves in tight pods of several hundred to over a thousand — one of the most social cetaceans. Mass strandings are common and poorly understood. It is one of very few whales that regularly associates with Fraser's dolphins, and the two species travel together.");
n32("duskydolphin", "Carnivore — anchovies and squid", "Cool coastal waters of the southern hemisphere", "LC",
  "It is the most acrobatic dolphin — it leaps and somersaults repeatedly, and pods hunt cooperatively by herding fish into a ball at the surface and taking turns to feed while others hold the formation. The leaping appears to be signalling: it recruits other dolphins to the hunt.");

// ===== rodents and small mammals =====
n32("groundhog", "Herbivore — grasses and crops", "North America", "LC",
  "It hibernates so deeply its heart drops to five beats a minute and its temperature to near freezing, and it loses half its weight. It digs burrow systems with separate chambers and a latrine, and the earth it turns over is significant enough that it counts as an ecosystem engineer. Punxsutawney Phil is not predicting anything.");
n32("redsquirrel", "Omnivore — seeds, fungi, birds' eggs", "Europe and Asia", "LC",
  "It caches thousands of nuts a year and finds them again by memory and smell, and the ones it forgets become trees — a significant share of European woodland was planted by squirrels that lost track. In Britain it has been almost entirely replaced by the introduced grey squirrel, which carries a pox it is immune to and the red is not.");
n32("chipmunk", "Omnivore — seeds, nuts, fungi", "North America", "LC",
  "Its cheek pouches stretch to three times the size of its head and it can carry a significant fraction of its body weight in them. It does not truly hibernate — it wakes every few days all winter to eat from the larder in its burrow, which is why it hoards rather than fattening up. It is a major disperser of the underground fungi that forest trees depend on.");
n32("dormouse", "Omnivore — fruit, nuts, insects", "Europe", "LC",
  "It hibernates for up to seven months — the name comes from dormir, to sleep — and it can spend three quarters of its life asleep. Romans farmed and ate them, fattened in special jars. A dormouse that is disturbed and wakes too often in winter will burn through its fat and starve.");
n32("jerboa", "Omnivore — seeds and insects", "Deserts of Asia and North Africa", "LC",
  "It hops on two enormous hind legs like a tiny kangaroo, three metres at a bound, and it never drinks water in its life — it makes water metabolically from dry seeds. Its ears and its long tufted tail are its rudder and its balance. Some species have ears a third the length of their body.");
n32("agouti", "Frugivore — seeds and fruit", "Central and South America", "LC",
  "It is the only animal that can open a Brazil nut pod, and it buries the surplus — which means the Brazil nut tree depends on the agouti absolutely, and Brazil nut harvests fail where agoutis are hunted out. Nobody has ever managed to farm Brazil nuts commercially, because the whole system needs the forest, the agouti and a specific orchid bee.");
n32("mara", "Herbivore — grasses", "The Argentine scrub", "NT",
  "A rodent shaped like a small deer, which stands on long legs and runs at 45km/h. It is monogamous for life, which is very rare in rodents, and the pairs deposit their pups in a communal creche of up to 30 young in a single burrow — parents come to feed only their own, recognising them by call.");
n32("degu", "Herbivore — grasses, seeds, bark", "Central Chile", "LC",
  "It is intensely social and lives in burrow colonies, and it is one of the very few rodents that is active by day. It is also one of the few animals other than us that naturally develops diabetes and Alzheimer's-like plaques, which is why it is in laboratories. It communicates with at least 15 distinct calls, and pups raised in silence develop abnormally.");
n32("hare", "Herbivore — grasses and bark", "Europe and Asia", "LC",
  "Born furred and open-eyed in a scrape in the open, ready to run within an hour — no burrow, no safety. The spring boxing is not males fighting: it is a female beating off a male she has not decided about. It runs at 70km/h and can turn without slowing.");
n32("arctichare", "Herbivore — willow, moss, lichen", "The Canadian and Greenlandic Arctic", "LC",
  "It digs through snow to reach willow with its claws and can smell food under a metre of it. It sometimes gathers in groups of hundreds, which almost no hare does, and it runs upright on its hind legs like a kangaroo when it wants to see. It stays white all year in the far north where the snow never fully leaves.");
n32("tamandua", "Insectivore — ants and termites", "Central and South America", "LC",
  "A tree anteater with a prehensile tail and a 40cm tongue, and it avoids the ant species with the worst chemical defences — it can taste the difference and leaves the soldiers alone. Cornered, it rears up against a trunk, spreads its arms and slashes with claws it otherwise walks on its knuckles to protect. It smells strongly enough to be called stinker of the forest.");
n32("dartfrog_j", "Insectivore — mostly algae as a tadpole", "Rainforest pools and bromeliads", "LC",
  "A poison frog tadpole is carried to water one at a time on its father's back, sometimes to a pool held in a single bromeliad leaf high in a tree. In some species the mother returns to each tadpole and lays an unfertilised egg for it to eat, because a bromeliad pool contains nothing else — she feeds each of her young individually, for weeks, in separate trees.");

// ===== reef and sea =====
n32("nurseshark", "Carnivore — crustaceans and fish, sucked out of crevices", "Warm coasts of the Atlantic and eastern Pacific", "VU",
  "It sucks. Its throat generates one of the strongest suction forces of any aquatic vertebrate — it can pull a conch clean out of its shell. It sleeps in heaps on the bottom by day, piled on top of other nurse sharks, and it is one of the few sharks that can pump water over its gills while stationary.");
n32("reefshark", "Carnivore — reef fish", "Indo-Pacific reefs", "EN",
  "It patrols a home range of a few square kilometres for its whole life, which makes it easy to remove from a reef and slow to replace. Reefs with sharks have measurably more fish, not fewer — the sharks keep the mid-sized predators in check. It is one of the most heavily finned sharks on earth.");
n32("zebrashark", "Carnivore — molluscs and crustaceans", "Indo-Pacific reefs", "EN",
  "It is striped as a pup and spotted as an adult, which is why it is also called the leopard shark and why nobody can agree on its name. In 2020 a captive female that had been isolated for years produced fertile eggs by parthenogenesis. It is the subject of an ambitious project to release captive-bred pups back onto Indonesian reefs where it has been fished out.");
n32("stingray", "Carnivore — molluscs and crustaceans", "Coasts and rivers worldwide", "LC",
  "The barb is a defensive tool it uses only when stepped on, and it is serrated and venomous and grows back. It finds buried prey with electroreceptors, the same organs sharks have. Shuffling your feet in the shallows works: they feel the vibration and leave.");
n32("eagleray", "Carnivore — clams and oysters", "Warm coasts worldwide", "EN",
  "It flies — genuinely, flapping rather than undulating — and leaps clear of the water, sometimes repeatedly. It has plates instead of teeth to crush shellfish, and it digs them out by blowing water through its gills to excavate the sand. Its spots are individual.");
n32("electricray", "Carnivore — fish", "Coasts worldwide", "LC",
  "It generates up to 220 volts from modified muscle blocks in its head and uses it to stun prey and to defend itself. The Greeks and Romans used them medically — an electric ray applied to the head for migraine, or to the feet for gout, which is the earliest recorded use of electricity in medicine. Its electric organ was the model that led to the first battery.");
n32("mandarinfish", "Carnivore — tiny crustaceans", "Pacific reefs", "LC",
  "One of only two animals known whose blue is a true cellular pigment rather than structural — nearly every other blue animal on earth is producing it with physics, not chemistry. It has no scales at all and instead secretes a foul, toxic mucus. Pairs rise together off the reef at dusk to spawn for a few seconds and drop back.");
n32("boxfish", "Omnivore — algae and invertebrates", "Tropical reefs", "LC",
  "It is a rigid box of fused bony plates and it cannot bend, so it swims by fluttering its fins — inefficient, but astonishingly stable and manoeuvrable. Mercedes-Benz built a concept car based on it. Under stress it releases a toxin that will kill everything in an aquarium, including itself.");
n32("triggerfish", "Carnivore — urchins and crustaceans", "Tropical reefs", "LC",
  "It has a dorsal spine that locks upright with a second spine as the trigger, so it can wedge itself into a crevice and cannot be pulled out. Titan triggerfish defend a cone-shaped territory that widens upward, so swimming up to escape takes you further into it — the correct escape is sideways, and divers who do not know this get chased.");
n32("angelfish", "Omnivore — sponges, mostly", "Indo-Pacific reefs", "LC",
  "The juvenile is a black fish with white concentric rings and looks nothing like the adult — so different that they were described as separate species. It eats sponges, which are chemically defended and nutritionally poor, so almost nothing competes with it. Pairs are territorial for life.");
n32("butterflyfish", "Carnivore — coral polyps", "Tropical reefs", "LC",
  "Most have a fake eyespot near the tail and a black band through the real eye, so a predator strikes at the wrong end and the fish escapes forwards. Many pair for life and swim together constantly. Because most eat coral polyps and nothing else, their numbers are used as a direct index of reef health.");
n32("swordfish", "Carnivore — squid and fish", "Oceans worldwide", "LC",
  "It heats its own eyes and brain — a special muscle beside the eye warms them up to 15°C above the surrounding water, which speeds its vision by an order of magnitude and lets it hunt in cold deep water where its prey is effectively blind. It slashes sideways with the bill rather than spearing. It is one of the fastest fish alive.");
n32("marlin", "Carnivore — tuna, mackerel, squid", "Tropical and temperate oceans", "VU",
  "The largest of the billfish and possibly the fastest fish in the sea. It lights up — it can change colour in seconds, flashing bright cobalt stripes when hunting or excited, produced by pigment cells under nervous control. Females are up to four times the size of males.");
n32("barracuda", "Carnivore — fish", "Tropical oceans", "LC",
  "It hunts by sight and strikes at 43km/h in short bursts, and it is attracted to flashes — which is why divers are told not to wear shiny jewellery, since the entire hunting trigger is a glint that looks like a fish scale. It hangs motionless in open water for hours, then vanishes.");
n32("grouper", "Carnivore — fish, crustaceans, small sharks", "The reefs of the western Atlantic", "VU",
  "It can reach 400kg and it hunts cooperatively with moray eels — the grouper signals with a headstand and a shudder, the eel goes into the crevice, and whatever comes out belongs to the grouper. It is one of very few documented cases of two species deliberately coordinating a hunt. It booms audibly when threatened.");
n32("flyingfish", "Carnivore — plankton", "Warm oceans worldwide", "LC",
  "It does not flap — it beats its tail up to 70 times a second at the surface to launch, then glides on rigid pectoral fins, and it can dip the tail back in to relaunch without stopping, chaining glides for 400 metres. It glides to escape dolphins and tuna, and lands in boats regularly.");
n32("mandarin_dragonet", "Carnivore — tiny crustaceans", "Pacific reefs", "LC",
  "It is a bottom-dweller that hops rather than swims, and it eats almost exclusively live copepods — which is why so many die in aquariums, because they will not touch prepared food and slowly starve in a tank that looks perfectly healthy. It is one of the clearest cases of an animal that should not be sold to beginners.");
n32("weedyseadragon", "Carnivore — mysid shrimp", "The kelp of southern Australia", "LC",
  "The male carries the eggs stuck directly to the underside of his tail — no pouch at all, unlike a seahorse — for about eight weeks. Its leaf-like appendages are pure camouflage and do not propel it; it moves on two nearly invisible fins and appears to drift. Every individual's spot pattern is unique, and researchers identify them from photographs.");
n32("pipefish", "Carnivore — tiny crustaceans", "Coasts and seagrass worldwide", "LC",
  "A seahorse stretched straight. The male carries the eggs, and in several species the females compete for males and are the brighter, more ornamented sex — a genuine reversal of the usual arrangement, and it happens for the obvious reason: the males are the limiting resource because they do the pregnancies.");
n32("moonjelly", "Carnivore — plankton", "Coasts worldwide", "LC",
  "It has no brain, no heart and no blood, and it is 95% water — a jellyfish left on a beach essentially evaporates. It has a nerve net rather than a brain, and it still hunts and navigates. Its lifecycle includes a polyp stage that clones itself, so one animal can become thousands.");
n32("fiddlercrab", "Detritivore — algae and detritus sifted from mud", "Mangroves and mudflats worldwide", "LC",
  "The male has one enormous claw, up to half his body weight, and he waves it at females on a schedule tied to the tide — the whole flat waves together. The big claw is useless for feeding, so he eats twice as slowly as a female with two small ones. If he loses it, the small one grows large and the lost one grows back small.");
n32("hermitcrab", "Omnivore — detritus and algae", "Coasts worldwide", "LC",
  "It queues. When a new shell washes up, hermit crabs gather and line up by size, and when the largest moves in, every crab in the chain swaps up in sequence — a vacancy chain, and it is the same mechanism economists describe in housing markets. Shell shortages caused by shell collecting are a genuine population problem.");
n32("lobster", "Omnivore — fish, molluscs, carrion", "The North Atlantic seabed", "LC",
  "It does not appear to age in the usual way — an old lobster is as fertile and as strong as a young one, because it keeps producing telomerase. It does not die of old age; it dies because moulting a bigger shell eventually costs more energy than it can afford. It tastes with its feet and its urine is a social signal it fires from its face.");
