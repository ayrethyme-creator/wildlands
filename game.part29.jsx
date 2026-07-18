// ---------- CHAPTER XXIV — Part 29: WHY PEOPLE BELIEVED ----------
// 100 mythic creatures. The rule for these is different and better: don't just
// describe the story, describe WHAT PEOPLE WERE LOOKING AT.
//
// Almost none of this was invented from nothing. Fossil beds, misidentified
// animals, trade goods arriving without their source, real diseases, real
// astronomy, and the ordinary human habit of reconstructing a whole animal from
// a part of one. Griffins came out of Protoceratops skulls. Cyclopes came out
// of elephant skulls, whose nasal opening sits dead centre and looks exactly
// like one enormous eye socket. Where the origin is genuinely unknown or
// disputed, these notes say so rather than picking the tidy answer.

IUCN.MYTH = ["Mythological", "#b07acc"];

const mnote = (k, d, h, f) => { if (DEX[k]) INFO[k] = { d, h, s: "MYTH", f }; };

// ===== Greek =====
mnote("griffin", "Carnivore — in the stories, horses and gold thieves", "Greece and Scythia, from ~675 BC",
  "The best material explanation of any myth on this list. Greek accounts place griffins in the Gobi, guarding gold, and the Gobi is full of weathered Protoceratops skeletons — a beaked, four-legged animal with a bony shield behind its head, lying in gold-bearing ground. Scythian miners found them. Adrienne Mayor made the case in the 1990s, and while it isn't proven, once you have seen the skull you cannot unsee the griffin.");
mnote("cyclops", "Carnivore — sheep, and unlucky sailors", "Greece and Sicily",
  "Dwarf elephant skulls litter Mediterranean caves, and an elephant skull has a single vast opening in the middle of the face — the nasal cavity, where the trunk anchors. The tusks fall out. What is left looks exactly like the skull of a one-eyed giant, twice human size, in a cave. Othenio Abel proposed this in 1914, and it has never been bettered.");
mnote("cetus", "Carnivore — coastal livestock and sacrificial princesses", "Greek and Levantine coasts",
  "The sea monster Perseus killed, and the origin of 'cetacean'. Its bones were exhibited in Rome in 58 BC — 12 metres of them, hauled from Jaffa and displayed as the actual monster. They were almost certainly a whale's. Ancient people found whale skeletons on beaches and reasoned, correctly, that something enormous had died there.");
mnote("pegasus", "Herbivore — grass, and it drinks from springs it makes itself", "Greece",
  "The winged horse is one of the few here with no obvious fossil behind it. It probably grew from the Near Eastern motif of winged animals guarding thresholds, which Greek art borrowed. Every spring Pegasus struck open — including Hippocrene, the fountain of poets — is a real spring somebody could visit, which is how a myth gets anchored to a landscape.");
mnote("hydra", "Carnivore — anything near the swamp", "Lerna, Greece",
  "A many-headed swamp serpent that grows two heads for every one cut off, which is a fair description of the problem of draining a marsh: block one channel and the water finds two. Lerna was a real swamp Herakles is credited with draining. There is a genuine animal called Hydra that regrows its parts, named after this one.");
mnote("chimera", "Carnivore — lion, goat and snake in one body", "Lycia, Anatolia",
  "The Chimaera of Lycia is a real place: a mountainside in Turkey where natural methane seeps from the rock and has burned continuously for at least 2,500 years. A fire-breathing monster living in that mountain is not a wild leap — sailors used the flames to navigate. The word now means any organism with two sets of DNA.");
mnote("minotaur", "Carnivore — Athenian tribute", "Crete",
  "Knossos is a palace of over a thousand interlocking rooms, and Minoan art is full of bull-leaping — young people vaulting live bulls. A confusing building and a bull cult, remembered by outsiders centuries later, is a plausible labyrinth with a bull-man in it. Whether the Minoans would have recognised the story is another matter.");
mnote("nemeanlion", "Carnivore — the people of Nemea", "Greece",
  "A lion with a hide no weapon could pierce, so Herakles had to strangle it. Lions genuinely lived in Greece into classical times — Aristotle and Herodotus both describe them, and there are bones. This is a myth about a real animal that people had actually met, which is rarer than you'd think.");
mnote("goldenhind", "Herbivore — grass", "Keryneia, Greece",
  "A deer with golden antlers that Herakles had to catch without harming. The detail that gives it away is that it's a female with antlers — and the one deer where females grow antlers is the reindeer, which lives far to the north. If the story travelled south along the amber routes, someone was describing a real animal they'd only heard about.");
mnote("stymphbird", "Carnivore — people", "Arcadia, Greece",
  "Man-eating birds with metal feathers that they shot like arrows, driven off with a bronze rattle. Scholars have long suspected a memory of a genuine plague of birds over a marsh — and the marsh at Stymphalia is real and periodically floods. Herakles's solution was noise, which is exactly how farmers actually deal with birds.");
mnote("ladon", "Carnivore — guards, doesn't eat", "Greece",
  "The hundred-headed serpent coiled round the tree of golden apples, never sleeping. Serpent-guarding-treasure is one of the oldest and most widespread stories on earth, and the practical origin is mundane: snakes really do live in stores of grain and fruit, because that is where the rodents are. Guard the granary, meet the snake.");
mnote("harpy", "Carnivore — snatches food", "Greece",
  "Wind spirits with women's faces who stole food and fouled what they left. Sailors named them for sudden squalls that took things off the deck. Real birds of the same habit — skuas, frigatebirds — harass other animals for their food, which is called kleptoparasitism, and the harpy eagle carries the name.");
mnote("hippocampus", "Carnivore — small fish", "Greek and Etruscan coasts",
  "A horse in front, fish behind, drawing Poseidon's chariot. Its name is now the seahorse's genus and the part of your brain that makes memories, which is shaped like one. The myth is probably just what surf looks like: whitecaps have been called white horses in a dozen languages independently.");
mnote("colchisdrake", "Carnivore — guards the Golden Fleece", "Colchis, on the Black Sea",
  "The sleepless dragon guarding the fleece. The fleece itself may be entirely real: in the Caucasus, people panned gold by pegging sheepskins in the riverbed to trap the flakes, then hanging them to dry — a fleece heavy with gold. Strabo says so. The monster is the story people told about a valuable process.");
mnote("teumessian", "Carnivore — the children of Thebes", "Thebes, Greece",
  "A fox destined never to be caught, hunted by a hound destined always to catch. Zeus resolved the paradox by turning both to stone. It is one of the earliest recorded logical paradoxes dressed as an animal story, which is what a lot of myth is.");
mnote("sphinx", "Carnivore — those who answer wrong", "Egypt and Greece",
  "Egypt's sphinx is a guardian and male; Greece's is a monster and female, and she asks a riddle. The shape — lion's body, human head — starts in Egypt around 2500 BC and travelled. The Greeks got the image without the context, and built a different animal around it. That's how most of these happen.");

// ===== Norse =====
mnote("fenrir", "Carnivore — gods", "Norse myth",
  "The wolf bound with a ribbon made of impossible things — the sound of a cat's footfall, a woman's beard, a mountain's roots — which the myth says is why none of those exist now. It bites off the hand of the one god willing to earn its trust. It is a story about what it costs to contain something, and Norse audiences knew wolves as a genuine winter threat.");
mnote("jormungandr", "Carnivore — the world", "Norse myth",
  "The serpent that circles the world and bites its own tail, and when it lets go the world ends. Sea serpent accounts across the North Atlantic are a real and persistent thing, and the best candidate is the oarfish — 11 metres of ribbon, which surfaces when dying. Thor fishing for Jörmungandr and hauling it to the gunwale is a story you'd tell after seeing one.");
mnote("sleipnir", "Herbivore — grass", "Norse myth",
  "Odin's eight-legged horse, born of Loki. Eight-legged horses appear on Gotland picture stones from the 8th century, so the image is old. One reading is that it's a funeral bier carried by four men — eight legs beneath a body — which would make Odin's horse a picture of being carried to your grave.");
mnote("nidhogg", "Scavenger — the roots of the world tree, and the dead", "Norse myth",
  "The serpent gnawing at Yggdrasil's root, which will never finish. It's an image of decay as a constant background process rather than an event — something is always eating the foundation. Norse cosmology is unusually honest about entropy.");
mnote("ratatoskr", "Omnivore — nuts, and gossip", "Norse myth",
  "The squirrel that runs up and down the world tree carrying insults between the eagle at the top and the serpent at the root, and it makes both angrier on purpose. It is a myth about a malicious messenger, written a thousand years before comment sections. It is also just a squirrel.");
mnote("kraken", "Carnivore — whales and ships", "Norway and Iceland",
  "The one that turned out to be real. Norwegian accounts of an island-sized creature that pulled ships down were dismissed for centuries — and then giant squid carcasses came ashore, and in 2004 one was photographed alive. Architeuthis reaches 13 metres with eyes the size of dinner plates. The sailors were describing something.");
mnote("lindworm", "Carnivore — livestock", "Northern and Central Europe",
  "A wingless two-legged serpent-dragon, and the ancestor of half the heraldry in Europe. In 1335 a skull was dug up in Klagenfurt and used as the model for a lindworm statue that still stands — it was a woolly rhinoceros skull. The statue is the oldest reconstruction of an extinct animal in the world, and it was wrong in the most interesting possible way.");

// ===== Celtic and British =====
mnote("kelpie", "Carnivore — children who touch it", "Scotland",
  "A water horse whose hide is adhesive: touch it and you cannot let go as it drowns you. It is a drowning warning with a story attached, told about specific real lochs and pools, and it worked — children stayed away. Much folklore is a hazard sign that had to be memorable because nobody could read.");
mnote("cusith", "Carnivore — takes the dying", "Scottish Highlands",
  "A dark green dog the size of a bullock that barks three times, and if you're not indoors by the third you're taken. The three barks are the useful part. Britain has black dog legends everywhere — Black Shuck, the Barghest — and they cluster on old roads and boundaries, which are exactly where a traveller is most at risk.");
mnote("caitsith", "Carnivore — the usual", "Scotland and Ireland",
  "A black cat with a white spot, said to steal the soul of the dead before burial — so families kept a wake with games and distractions to keep the cat away. That's a folk explanation for a real practice. The likeliest source is the Kellas cat, an actual wild-domestic hybrid in Scotland that is large, black, and was only formally described in 1984.");
mnote("puca", "Omnivore — depends on its mood", "Ireland",
  "A shapeshifter that could be a horse, a goat, a hare, or a man, and could bring good luck or ruin. The last of the blackberries, after 1 November, are said to be spoiled by the Púca — which is real advice: after the first frosts, blackberries genuinely do rot and grow mould that can make you sick.");
mnote("questingbeast", "Carnivore — pursued, never caught", "Arthurian Britain",
  "A creature with a serpent's head, a leopard's body, and the noise of thirty hounds in its belly, chased forever by knights who never catch it. It has no folk origin — it is literary, invented for the romances. It is the sound of a hunt you are always behind.");
mnote("wyvern", "Carnivore — livestock", "Medieval European heraldry",
  "Two legs, two wings, a barbed tail — and heraldically distinct from a dragon, which has four legs. The distinction mattered enormously to heralds and to nobody else. It is the shape most modern dragons actually are.");

// ===== Slavic =====
mnote("firebird", "Frugivore — golden apples", "Russia and Slavic Europe",
  "A bird whose feathers glow so brightly one lights a room, and finding one is always both a blessing and the start of terrible trouble. It is likely the golden pheasant, which reached Russia along trade routes from China and genuinely looks like it is on fire. A single feather arriving without the bird is exactly how these stories start.");
mnote("zmey", "Carnivore — livestock and maidens", "Russia and the Balkans",
  "A three-headed dragon that breathes fire, and each head grows back. Slavic dragon-slaying stories map onto real geography — specific fords, specific hills — and the heads are often read as a tribe or an army: cut one, another rises. It is politics with scales.");
mnote("alkonost", "Frugivore — fruit", "Russia",
  "A bird with a woman's head whose song makes anyone who hears it forget everything they have ever wanted. It comes from the Greek Alcyone, transmitted through Byzantium and mutated, which is why so much Russian folklore has a Greek fossil buried in it. The related Sirin does the same job.");
mnote("leshy", "Omnivore — the forest's", "Russia",
  "The forest itself as a person: he can be tree-tall or grass-small, he leads travellers in circles, and he is not evil so much as uninterested in you. Getting lost in old forest is the actual experience being described — people walk in circles when they cannot see the sun, which has been demonstrated in modern experiments.");

// ===== Egyptian and Near Eastern =====
mnote("bennu", "Herbivore — nothing; it is a soul", "Egypt",
  "The heron-god that self-creates and stands on the first mound of land, and the direct ancestor of the Greek phoenix. It is probably a real bird: an enormous extinct heron lived in Arabia into human times, and Bennu is drawn as a grey heron with two head plumes. Herons standing alone on mudflats at dawn is where this comes from.");
mnote("ammit", "Carnivore — hearts that fail", "Egypt",
  "Crocodile head, lion forequarters, hippo hindquarters — the three animals most likely to actually kill an Egyptian, assembled into one. If your heart weighed more than the feather of truth, she ate it, and you simply stopped existing. It isn't a punishment. It's an erasure, which the Egyptians considered far worse.");
mnote("serpopard", "Carnivore — unclear", "Predynastic Egypt and Mesopotamia",
  "A leopard with an enormously long snake neck, carved on the Narmer Palette around 3100 BC — one of the oldest fictional animals we have. Nobody knows what it meant. It appears in both Egypt and Mesopotamia at the same moment, which suggests contact, and then it vanishes entirely.");
mnote("apep", "Carnivore — the sun", "Egypt",
  "The serpent that attacks the sun boat every night and must be fought off before dawn. Egyptian priests performed rituals to defeat it, and eclipses were understood as Apep briefly succeeding. It is a myth doing what myth is for: it makes a terrifying, arbitrary event into a story with a role for you in it.");
mnote("sha", "Carnivore — unclear", "Egypt",
  "The Set animal: a stiff forked tail, square-tipped ears, a curved snout, and nobody has ever identified it. Aardvark, jackal, okapi, donkey, giraffe and an entirely invented composite have all been argued. It is drawn consistently for 3,000 years by people who clearly knew what they meant, and we have lost it.");
mnote("lamassu", "Herbivore — guards, doesn't eat", "Assyria",
  "A winged bull with a king's head, carved five metres high at Assyrian gates. Many were carved with five legs, so that from the front they stand still and from the side they walk — one animal doing two things depending on where you are. Several were destroyed by ISIS at Nineveh in 2015.");
mnote("mushussu", "Carnivore — guards", "Babylon",
  "The dragon of the Ishtar Gate: snake head, lion forelegs, eagle hind legs, scorpion tail. It is glazed onto the gate alongside real lions and real aurochs, presented in exactly the same way and at the same scale. Whoever built it did not sort animals into real and unreal the way we do.");
mnote("manticore", "Carnivore — people, whole", "Persia, via Greece",
  "A lion with a human face, three rows of teeth and a tail that fires spines, and it eats people entirely, leaving nothing — which is why nobody could ever produce evidence. The name is Persian for 'man-eater'. Ctesias reported it from the Persian court around 400 BC, and it is very likely an exaggerated tiger, described secondhand to someone who had never seen one.");
mnote("ziz", "Carnivore — enormous", "Hebrew tradition",
  "A bird so vast its wings blot out the sun, and it stands in water only up to its ankles where the sea is deepest. It is the sky's counterpart to Behemoth on land and Leviathan in the sea — one myth for each domain, which is a very tidy way to think about a world.");
mnote("behemoth", "Herbivore — the grass of a thousand mountains", "Hebrew tradition",
  "Described in Job with a tail like a cedar and bones like bronze tubes, and it is almost certainly the hippopotamus — the description of the sinews, the bulk, the river reeds all fit. The exaggeration is the point: Job is being shown things he cannot control. Hippos kill more people in Africa than any other large animal.");
mnote("leviathan", "Carnivore — everything in the sea", "Hebrew and Canaanite tradition",
  "A sea serpent so armoured no harpoon touches it. The Job description — smoke from its nostrils, teeth ringed with terror, scales like shields — reads like a crocodile written by someone who wanted it bigger. Its Canaanite ancestor Lotan appears in Ugaritic tablets centuries earlier, so it was already old.");
mnote("simurgh", "Omnivore — it raises orphans", "Persia",
  "A vast benevolent bird that has seen the world destroyed three times and knows everything. In the Shahnameh it finds an abandoned albino baby and raises him, and he becomes Iran's greatest hero. In Attar's poem, thirty birds journey to find the Simurgh and discover that si murgh means 'thirty birds' — they are what they were looking for. That is one of the great endings in any literature.");
mnote("roc", "Carnivore — elephants", "Arabia and the Indian Ocean",
  "A bird enormous enough to carry off an elephant, reported by Marco Polo and by Sindbad. Madagascar had the elephant bird, three metres tall with a 10kg egg — and traders brought those eggs back to Arabia. An egg that size, without the bird, and you would invent the roc too. Polo was told they came from Madagascar and he was very nearly right.");

// ===== African =====
mnote("grootslang", "Carnivore — elephants", "South Africa",
  "An elephant-headed serpent in a bottomless cave in the Richtersveld, guarding diamonds. The cave — the Wonder Hole — is real and its depth is genuinely not fully known. The story says the gods made it too powerful by mistake and split it into elephants and snakes, and one original escaped. That is a creation myth for two real animals.");
mnote("impundulu", "Carnivore — blood", "Southern Africa, Xhosa and Zulu",
  "The lightning bird: it summons storms with its wings, and where lightning strikes, it has landed. Southern Africa has among the highest lightning-strike densities in the world, and a bird-shaped explanation for a bolt from the sky is not a bad first theory. The hamerkop — an odd, secretive bird associated with rain — is often named as the physical bird behind it.");
mnote("anansi", "Omnivore — whatever he can trick out of you", "Ghana, and the Caribbean",
  "A spider who owns all the stories because he outsmarted the sky god for them. He is not a monster; he is small and weak and wins by being cleverer, which is exactly why enslaved West Africans carried him across the Atlantic and kept telling him. He becomes Aunt Nancy in the American South. The story survived the crossing because the story was about surviving.");

// ===== Chinese =====
mnote("qinglong", "Carnivore — it brings rain", "China",
  "The Azure Dragon of the East, one of four cardinal beasts, and a constellation — its body is a real arc of stars whose rising marks spring. Chinese dragons are water, not fire: they live in rivers and are asked for rain. Every Chinese dragon on this list is closer to weather than to a monster.");
mnote("fenghuang", "Omnivore — bamboo seeds, in some tellings", "China",
  "Called the Chinese phoenix, which is a bad translation — it doesn't burn and it doesn't rise from ash. It appears when the realm is at peace and leaves when it isn't, which makes it a political weather vane. Its image is assembled from real birds: pheasant, peacock, crane, swallow.");
mnote("baihu", "Carnivore — the West", "China",
  "The White Tiger of the West, guardian of autumn and metal. White tigers are real — a recessive gene, and one was recorded in the wild as recently as 1958 — so an emperor could in principle be shown one. A genuinely white tiger appearing was read as a sign that the ruler was virtuous.");
mnote("xuanwu", "Omnivore — a turtle and a snake, entwined", "China",
  "The Black Tortoise of the North, always shown as a turtle wrapped by a snake. One old idea was that turtles were all female and had to mate with snakes, which is entirely wrong but produced a beautiful image. It is the guardian of winter and water.");
mnote("pixiu", "Carnivore — gold and silver only", "China",
  "It eats treasure and has no anus, so wealth goes in and never comes out — which is why its statues sit in banks and shops across Asia to this day. The joke is deliberate and ancient. It is one of the few mythical animals whose defining feature is a plumbing decision.");
mnote("nian", "Carnivore — villagers, once a year", "China",
  "A beast that came out of the mountains every new year to eat people, until they discovered it feared red, fire and loud noise — which is the entire origin of Chinese New Year decorations and firecrackers. The story explains an existing practice rather than the other way round, but it explains it well enough that a billion people still do it.");
mnote("bixi", "Herbivore — carries stone", "China",
  "A dragon-headed tortoise that carries stone tablets on its back, and thousands of real ones hold up real monuments across China. It is one of the nine sons of the dragon, and its job is load-bearing. A myth given a specific, useful, structural task.");
mnote("taotie", "Carnivore — everything, including itself", "Shang dynasty China",
  "A face with no lower jaw, cast onto bronze vessels 3,000 years ago, so greedy it ate its own body. Nobody knows what the Shang called it or meant by it — the name comes from much later writers trying to explain a motif they had inherited. It is a mask on a wine vessel warning against excess, possibly.");

// ===== Japanese and Korean =====
mnote("kitsune", "Omnivore — fried tofu, traditionally", "Japan",
  "A fox that grows a tail every century and a ninth at 1,000 years, when it turns golden and sees everything. Foxes really do live around rice granaries and Inari shrines, hunting the rodents — so the fox was already the god's animal before it was a shapeshifter. Fox fire, kitsunebi, is likely bioluminescent fungus or marsh gas.");
mnote("tanuki", "Omnivore — anything", "Japan",
  "The raccoon dog is a real animal and a real trickster in folklore — it shapeshifts, it has a leaf on its head, and its statues outside restaurants have famously enormous testicles, which comes from goldsmiths using tanuki hide to hammer gold leaf. The hide stretched a small piece of gold enormously. The joke is a metalworking fact.");
mnote("kappa", "Carnivore — cucumbers, and children", "Japan",
  "A river imp with a dish of water on its head — spill it and it loses its power, so you bow to it and it bows back and defeats itself. It drags children into rivers. It is, transparently, a drowning warning, and the bowing rule is a way of teaching politeness and river caution in one story. The Japanese giant salamander is often named as the animal behind it.");
mnote("tengu", "Carnivore — arrogant monks", "Japan",
  "Originally a bird-demon, later a long-nosed mountain spirit and a master swordsman who teaches those it respects. It began as the Chinese tiangou, a dog, and changed species crossing the sea. The long nose is a late development, possibly influenced by the faces of the first Europeans in Japan.");
mnote("baku", "Carnivore — nightmares", "Japan and China",
  "A creature with an elephant's trunk, a tiger's feet and an ox's tail, which you call three times after a bad dream and it eats it. It is very likely the tapir — the Japanese word for tapir is baku — but which came first is genuinely argued. Children still call for it.");
mnote("komainu", "Carnivore — guards", "Japan",
  "The lion-dogs at shrine gates, always in pairs, one mouth open and one closed — the first and last sounds, beginning and end. Japan has no lions, so these are lions drawn by people working from Chinese art copied from Korean art copied from Indian art copied from Persian art. Every step made them less like a lion and more like a dog.");
mnote("orochi", "Carnivore — one daughter a year", "Japan",
  "An eight-headed serpent, one head per valley, killed by getting all eight heads drunk. In its tail they found the sword that became part of the Imperial regalia. It is widely read as a river system that flooded annually — eight branches, devouring one family's land each year — and the hero is the engineer who tamed it.");
mnote("nekomata", "Carnivore — its own household", "Japan",
  "A cat that lives long enough for its tail to split in two and then turns on the family that raised it. It is why the bobtail cat became fashionable in Japan: a cat with no tail cannot fork one. That is a real breeding preference driven by a ghost story.");
mnote("haetae", "Carnivore — the guilty", "Korea",
  "A lion-like beast that can tell right from wrong and gores the dishonest, which is why it stands outside courts and government buildings. It is also said to eat fire, so Seoul put them at the palace against fire — and it is now the city's official symbol. A myth hired as a fire precaution.");

// ===== Indian and Southeast Asian =====
mnote("garuda", "Carnivore — serpents", "India and Southeast Asia",
  "The eagle Vishnu rides, eternal enemy of the nagas, and the national emblem of Indonesia and Thailand — and the name of Indonesia's airline. It is very likely the brahminy kite or a serpent eagle: birds that genuinely hunt snakes, in a place where snakes were the greater danger. The myth picked its side.");
mnote("naga", "Carnivore — guards water and treasure", "India and Southeast Asia",
  "Serpent beings who control rain and rivers and guard wells. Actual king cobras live in exactly those places and are treated with genuine religious respect in parts of India — killing one is still taboo in some regions. Naga worship is one of the oldest continuous religious practices on earth and it is about an animal that is really there.");
mnote("makara", "Carnivore — fish, mostly", "India and Southeast Asia",
  "A composite sea beast — crocodile jaw, elephant trunk, fish tail — and the vehicle of the river goddess Ganga. It is the origin of Capricorn, which arrived in Western astrology from India via Greece, and it is why a goat has a fish tail in your star sign. The gharial is the usual candidate for the front half.");
mnote("airavata", "Herbivore — clouds", "India",
  "Indra's white elephant with multiple heads and tusks, who churns water from the underworld into clouds — so he is where rain comes from. White elephants are real, and finding one in Thailand or Burma was so significant it belonged to the king by law. The phrase 'white elephant' comes from the ruinous cost of keeping one you were given and could not refuse.");
mnote("yali", "Carnivore — guards temples", "South India",
  "A lion with an elephant's trunk and tusks, carved in their thousands onto temple pillars — often with a stone ball inside its mouth, carved in place, that rolls but cannot come out. That ball is a sculptor's flex and it is 500 years old. The animal itself is a composite of everything that could kill you in a forest.");
mnote("navagunjara", "Omnivore — nine animals' worth", "Odisha, India",
  "A creature made of nine animals — rooster head, peacock neck, elephant leg, human hand holding a lotus — and Krishna appears as it to test Arjuna. Arjuna passes by recognising the divine in something that makes no sense. It is one of the few myths explicitly about accepting what you cannot categorise.");
mnote("phayanaga", "Carnivore — river spirit", "The Mekong, Thailand and Laos",
  "Every October, glowing balls rise from the Mekong and thousands gather to watch — the Naga fireballs, said to be the serpent's breath. They are real and they still happen. The leading natural explanation is methane from the riverbed igniting, though it has never been demonstrated conclusively, and a lot of people prefer the naga.");
mnote("bakunawa", "Carnivore — the moon", "The Philippines",
  "A sea serpent that swallows the moon, which is what an eclipse is — and the response was to make noise, bang pots and shout until it spat it back out. It always worked. That is a myth with a perfect success rate.");
mnote("tikbalang", "Herbivore — grass", "The Philippines",
  "A tall horse-headed creature that makes travellers walk in circles until they turn their shirt inside out. Getting lost is the actual phenomenon; the fix is a ritual that makes you stop and pay attention, which is genuinely how you break a lost person's loop. Folklore is often practical advice wearing a costume.");
mnote("sigbin", "Carnivore — blood, and shadows", "The Philippines",
  "A creature that walks backwards with its head between its hind legs and can be kept in a jar. It is one of the strangest descriptions in world folklore, and it may be a real animal: the Visayan warty pig and the recently described Palawan stink badger have both been suggested. In 2004 a photo of a strange creature in Zamboanga reopened the argument.");
mnote("sarimanok", "Omnivore — fish", "Mindanao, the Philippines",
  "A legendary rooster with a fish in its beak, carved by the Maranao people, and the most recognisable symbol in Muslim Mindanao. It has no monstrous behaviour at all — it is simply a bird that means good fortune. Not every myth is about fear.");
mnote("barong", "Carnivore — evil", "Bali",
  "A lion-like spirit who fights the demon queen Rangda in a dance that has no winner and never ends, because neither side is supposed to win. It is a myth about balance rather than victory, and it is performed constantly in Bali. The costume takes two men.");

// ===== Oceanian =====
mnote("taniwha", "Carnivore — depends entirely on the taniwha", "Aotearoa New Zealand",
  "Guardians of specific rivers, harbours and caves — some protective, some dangerous, all local and named. They are not folklore in a museum sense: taniwha have been recognised in New Zealand planning law, and a road was rerouted in 2002 after Ngāti Naho raised one. A myth with legal standing is a rare thing.");
mnote("moo", "Carnivore — guards fresh water", "Hawaiʻi",
  "Shapeshifting lizard guardians of ponds and fishponds, often female, and the water they guard is real water that people still use. Hawaiʻi has no native land reptiles of any size, which makes the moʻo interesting — the animal came with the story, not the other way round, carried across the Pacific from a place that had them.");
mnote("bunyip", "Carnivore — anything at the billabong", "Australia",
  "The most argued-over creature in Australian folklore, and it is Aboriginal in origin — a water danger, told about specific waterholes. Settlers latched onto it and produced skulls that turned out to be deformed horses and calves. One serious proposal is a genuine memory of Diprotodon, the giant marsupial, which coexisted with people for thousands of years.");
mnote("rainbowserpent", "Carnivore — the maker of rivers", "Aboriginal Australia",
  "One of the oldest continuously told stories on earth — the rock art is at least 6,000 years old and possibly far more. It carves the rivers as it moves and it lives in the deep permanent waterholes, which in arid Australia are the difference between life and death. It is a map of where the water is, told as a serpent.");
mnote("adaro", "Carnivore — spears the unwary", "Solomon Islands",
  "A malevolent sea spirit that travels along rainbows and shoots people with flying fish, causing sickness. Flying fish genuinely do launch from the water and can hit a person in a canoe hard enough to injure them, and they arrive without warning. That is the whole story, explained.");

// ===== Mesoamerican and South American =====
mnote("quetzalcoatl", "Herbivore — it gave people maize", "Mesoamerica",
  "The feathered serpent: a snake with a quetzal's plumage, and one of the most important gods of the Americas. It is two real animals whose feathers and skin were the two most valuable trade goods in the region, fused. The pterosaur Quetzalcoatlus is named after it, which is one of the better naming decisions in palaeontology.");
mnote("ahuizotl", "Carnivore — eyes, teeth and fingernails", "Aztec Mexico",
  "A dog-like water creature with a hand on the end of its tail, which it uses to pull people under — and it eats only their eyes, teeth and nails, leaving the rest to float back up. That specificity is what makes it. It is likely built around the otter, which has hands, plays in water, and is far more unsettling than people expect.");
mnote("camazotz", "Carnivore — heads", "Maya Mesoamerica",
  "The death bat of the Popol Vuh, which decapitates one of the Hero Twins. Central America has the vampire bat — a real animal that really drinks blood — and had Desmodus draculae, a vampire bat twice the size, which survived into human times. The Maya were not imagining bats.");
mnote("cipactli", "Carnivore — everything", "Aztec Mexico",
  "A primordial crocodile-fish with mouths at every joint, and the gods tore it apart to make the earth — so the world is the corpse. It is a creation myth where creation is dismemberment, and the earth still demands blood because it remembers. Aztec cosmology does not pretend the world is kind.");
mnote("amaru", "Carnivore — a two-headed serpent", "The Andes",
  "A serpent that connects the underworld to the sky and can cross between them. Andean thought organises the world into three levels and the amaru is the thing that moves between them — the rainbow is one of its forms. Túpac Amaru took the name, and it carried enough weight to still be a political symbol 250 years later.");
mnote("alicanto", "Carnivore — gold and silver ore", "Atacama, Chile",
  "A bird that eats metal ore and glows accordingly — gold makes it shine gold, silver silver — and it is too heavy to fly. Miners followed one to find a seam; if it noticed you, it led you off a cliff. This is a story told by real miners in the real Atacama, where the ore is genuinely there and so are the cliffs.");
mnote("cadejo", "Carnivore — travellers at night", "Central America",
  "Two dogs: a white one that protects drunks walking home, and a black one that kills them. Which one you meet is the story. It is a night-road hazard rendered as a coin flip with fur, told in countries where walking home drunk in the dark was, and is, genuinely dangerous.");

// ===== North American =====
mnote("mishipeshu", "Carnivore — those who cross its lake", "Great Lakes, Anishinaabe",
  "The underwater panther: horned, scaled, copper-tailed, and it lives in Lake Superior and makes the storms. Lake Superior is genuinely lethal — it can produce ten-metre waves and it does not give up its dead, because it's too cold for bacteria to bloat them. Native copper from Superior was traded across the continent, and the panther guarded it.");
mnote("hornedserpent", "Carnivore — guards water and the underworld", "Across Native North America",
  "A horned water serpent that appears from the Southeast to the Great Lakes to the Southwest under many names, always associated with water, lightning and the underworld. Its widespread distribution and great age suggest it is one of the oldest stories on the continent. The horn is sometimes crystal, and sometimes a real fossil.");
mnote("piasa", "Carnivore — people", "Illinois, Mississippi River",
  "A winged creature painted on a bluff above the Mississippi, described by Marquette in 1673 as a monster with horns, scales and a long tail wrapped around its body. The original painting is gone — quarried away — and the one there now is a modern recreation. What Marquette saw was real paint on real rock, and nobody knows what it depicted.");
mnote("jackalope", "Herbivore — grass, and whiskey", "Wyoming, USA",
  "A rabbit with antlers, invented as a taxidermy joke in Douglas, Wyoming in the 1930s — and built on something real. The Shope papillomavirus gives rabbits keratinous horn-like growths on the head, and the study of it led directly to the discovery that viruses can cause cancer, and from there to the HPV vaccine. A joke animal, with a real disease behind it, that saved lives.");
mnote("chupacabra", "Carnivore — goat blood", "Puerto Rico, 1995 onward",
  "One of the very few myths whose birth we can date exactly: Puerto Rico, 1995, and the first witness later said her description was based on the creature from the film Species, which she had just seen. Every chupacabra corpse ever tested has been a coyote or dog with sarcoptic mange — which makes an animal hairless, grey, and desperate enough to attack livestock. The myth is a sick animal plus a movie.");
mnote("sasquatch", "Omnivore — presumably", "Pacific Northwest",
  "The name is anglicised from Halkomelem sásq'ets, so there is a genuine Indigenous tradition underneath a great deal of modern noise. The 1967 Patterson-Gimlin film remains unexplained to most people's satisfaction and explained to others'. What is certain is that no body, no bone and no fossil has ever been produced, and North America is well-searched.");
mnote("mothman", "Carnivore — unclear", "Point Pleasant, West Virginia, 1966",
  "Sightings clustered in 1966-67 and ended when the Silver Bridge collapsed and killed 46 people, which retroactively made it an omen. The most likely candidate is the sandhill crane — nearly two metres tall, red around the eyes, and well outside its range. A crane in the dark is a very large winged thing with red eyes.");
mnote("unicorn", "Herbivore — grass", "Europe and the Near East",
  "The medieval unicorn is largely a bookkeeping error: Greek accounts of the Indian rhinoceros, plus a mistranslation of the Hebrew re'em — probably the aurochs — into Greek as monokeros. Then narwhal tusks arrived in Europe with no narwhal attached, and were sold as unicorn horn for more than their weight in gold. Elizabeth I owned one. The animal was assembled backwards from its horn.");
mnote("cockatrice", "Carnivore — kills by looking", "Medieval Europe",
  "Hatched from a rooster's egg incubated by a toad, which is impossible, and it kills with a glance. It has a real origin: hens do occasionally undergo spontaneous sex reversal and begin to crow, which terrified people enough that roosters were put on trial and executed — one in Basel in 1474. The weasel is immune to it, which is the sort of detail that gets into an encyclopaedia and never leaves.");

mnote("cerberus", "Carnivore — the dead, if they try to leave", "Greece",
  "He guards the door of the underworld, and the detail everyone forgets is which way he faces: he is friendly to those coming in and lets nobody out. The likeliest root is grim and ordinary — dogs genuinely scavenged unburied bodies in the ancient world, which is precisely why burial mattered so much and why the animal at the threshold of the dead is a dog. His name may come from a word meaning 'spotted', which would make the guardian of hell a dog called Spot.");
