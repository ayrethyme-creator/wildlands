// ---------- Part 95: THE SECOND HUNDRED ----------
// Ayr, 2026-09-10: "keep going until the cultures are fairly weighted, but
// focus on novel ideas. lots of mythology has dragons, fire birds, and thunder
// birds. but there's only one jackalope and one ankluth" — and then: "make it
// an even 200, and make sure there are enough Polynesian creatures."
//
// So: a hundred more, chosen on one rule.
//
// THE RULE: NO SECOND DRAGON.
// ---------------------------
// Nearly every tradition on earth has a big serpent, a bird made of fire, and
// something that makes the thunder, and the first hundred already carries nine
// of each. Adding the tenth teaches nobody anything - it is the same creature
// in a different accent. What earns a place here is a creature that does
// something NOTHING ELSE DOES.
//
// So the manananggal is in, because she detaches at the waist and you beat her
// by salting the half she left behind. The hidebehind is in, because its whole
// anatomy is a joke about peripheral vision. The squonk is in, because it
// dissolves into tears. Herensuge, imugi, zmey gorynych, konrul and beithir are
// all out, and they are out for the same reason: the game already has that
// animal.
//
// The same filter removed a whole genus I had expected to use - the beautiful
// woman who lures men into the water appears in about thirty traditions and the
// first hundred already has her twice.
//
// WHAT IS DELIBERATELY NOT HERE
// -----------------------------
// Aboriginal Australian material and Navajo skinwalker stories. Ayr: "yeah
// leave both alone." Much Aboriginal knowledge is sacred and restricted, and
// skinwalker stories are explicitly not for outsiders to tell. The game already
// carries the bunyip and the Rainbow Serpent, which were added before anybody
// asked this question, and they stay - but nothing new is taken from either
// tradition, and this paragraph is here so that the absence reads as a decision
// rather than as an oversight.
//
// The same care, less absolutely, around anything still practised. The house
// style is "here is what people were actually looking at", which is a gift to a
// tradition nobody observes any more and can read as debunking one that is
// alive. Where a belief is current, the note says what people hold rather than
// what they were mistaken about.
//
// HOW THIS FILE IS BUILT
// ----------------------
// One table, and the species and its field note come from the same row.
// part7 and part29 keep theirs apart, which means mnote() silently does nothing
// if the key is spelled differently in the two places - a whole class of bug
// where a creature exists with no note and nothing complains. Here it cannot
// happen: one row, both halves, and a check at the bottom.
//
// ART. Every one of these needs a sprite, and until it has one the `art` field
// points at the nearest existing generator so the game cannot crash on a
// missing drawing. The batch is design/art_prompts/batch_myths2.json; as each
// PNG lands, the species goes into PHOTO_ART and the fallback stops being used.
// The fallbacks are chosen for SHAPE - a flying head takes the harpy, a small
// forest person takes the leshy - so a half-rendered batch looks unfinished
// rather than wrong.

const M2 = [
  // key, Name, fallback art, 2nd type, [hp, atk, def, spd], moves, catch, culture,
  //   diet, where, and the note
  // ---------------------------------------------------------------- Polynesia
  ["menehune", "Menehune", "leshy", "Burrow", [54, 52, 62, 48], MV.bur, 0.3, "Hawaiian",
    "Omnivore — bananas, and fish caught by the basketful",
    "Hawai'i, in the forested uplands",
    "Small people who build in a single night and abandon the work at dawn if it is not finished, which is why an unfinished wall is theirs. The Alekoko fishpond on Kaua'i is credited to them. An 1820 census of Kaua'i really does record a village of people called Menehune, so there may be an ordinary group of people at the bottom of this, remembered as something else."],
  ["nanaue", "Nanaue", "wendigo", "Aquatic", [68, 74, 58, 56], MV.aqua, 0.15, "Hawaiian",
    "Carnivore — and this is the problem with him",
    "Waipi'o, Hawai'i island",
    "Born to a woman and a shark king, with a shark's mouth between his shoulders that he kept covered with a cloak. He would ask travellers where they were going and then meet them in the water. What makes this story unusual is that it is not about a monster arriving: it is about everyone slowly working out that it is him."],
  ["kamapuaa", "Kamapua'a", "taotie", "Wild", [78, 72, 64, 46], MV.wild, 0.15, "Hawaiian",
    "Omnivore — everything, enthusiastically",
    "Hawai'i, wherever the ground is torn up",
    "A demigod who is sometimes a man, sometimes a hog with eight eyes and eight feet, and sometimes a fish or a plant. His rooting turns hillsides over, which is how rain gets into hard ground - and his long feud with Pele is the story of forest and lava meeting, told as a romance that neither party enjoyed."],
  ["akualele", "Akualele", "firebird", "Ember", [48, 66, 44, 82], MV.emb, 0.2, "Hawaiian",
    "Carnivore — sent after one named person",
    "Hawai'i, seen crossing the sky at night",
    "A flying ball of fire sent by a sorcerer against a particular person. Ball lightning is one candidate and burning debris another, but the interesting part is the social one: an akualele is always aimed, so seeing one meant someone had paid to have it sent, and the question was who."],
  ["huakaipo", "Night Marchers", "ammit", "Night", [72, 78, 66, 52], MV.night, 0.1, "Hawaiian",
    "Carnivore — none; they are only passing",
    "Hawai'i, on the old trails between sacred places",
    "A procession of dead warriors walking the ancient paths with torches and drums. You survive it by lying face down and not looking, and by having an ancestor among them who will speak for you. The rule is strikingly practical for a ghost story: do not watch, do not stand, do not be in the way."],
  ["patupaiarehe", "Patupaiarehe", "fairy", "Canopy", [56, 58, 52, 72], MV.can, 0.2, "Māori",
    "Herbivore — raw food only, never cooked",
    "Aotearoa, in mist on the forested ridges",
    "Pale, red-haired people of the high forest who come out in fog and at dusk, play the kōauau flute, and cannot bear cooked food or firelight. The fear of cooked food is the useful detail - it is the exact inversion of being human, and it is why a hot fire is the defence against them."],
  ["ponaturi", "Ponaturi", "adaro", "Aquatic", [64, 70, 58, 60], MV.aqua, 0.15, "Māori",
    "Carnivore — fish, and the unwary",
    "Aotearoa, in the sea by day and ashore at night",
    "Sea people who spend the day underwater and come ashore to sleep, because daylight kills them. Tāwhaki destroyed a house of them by blocking the cracks so they slept through the dawn and then letting the light in. A monster with a fatal schedule is a rarer thing than a monster with a weak spot."],
  ["marakihau", "Marakihau", "leviathan", "Aquatic", [82, 68, 70, 44], MV.aqua, 0.12, "Māori",
    "Carnivore — whole canoes, through a tube",
    "Aotearoa, in deep water off the coast",
    "A sea creature from carved meeting-house panels: a long body, a human head, and a tongue like a hollow tube it uses to suck in fish and sometimes canoes. It is known mostly from carvings rather than from told stories, which makes it one of the few creatures here whose primary source is a piece of art."],
  ["pouakai", "Pouākai", "roc", "Aerial", [76, 84, 58, 68], MV.aer, 0.1, "Māori",
    "Carnivore — moa, and people",
    "Aotearoa, in the South Island ranges",
    "A giant bird that carried off people, and the one creature on this list that has been positively identified. Haast's eagle was real, weighed up to fifteen kilograms, had a three-metre span and hunted moa; it went extinct around 1400 when the moa did. It was easily capable of killing a person. This is a memory, not a myth."],
  ["dakuwaqa", "Dakuwaqa", "kraken", "Aquatic", [80, 80, 64, 58], MV.aqua, 0.12, "Fijian",
    "Carnivore — sharks, and rivals",
    "Fiji, at the passes in the reef",
    "A shark god who went about picking fights until an octopus caught him at Kadavu, held him in four arms and beat him with the other four. He surrendered and swore to protect the fishermen of those islands instead, which he is held to do. A god whose character arc is losing one fight."],
  ["veli", "Veli", "leshy", "Canopy", [50, 54, 50, 64], MV.can, 0.3, "Fijian",
    "Omnivore — forest fruit",
    "Fiji, in the deep interior forest",
    "Small forest people who tend particular trees and particular stones, and who take offence at anyone cutting without asking. Belief in them has done real conservation work: patches of forest have gone uncut for generations because they are known to be veli ground."],
  ["tipua", "Tipua", "leshy", "Armor", [74, 56, 84, 20], MV.arm, 0.2, "Māori",
    "Herbivore — none; it is a rock, or a tree",
    "Aotearoa, at particular fords and bends in the road",
    "Not a creature so much as a thing that is awake: a specific boulder, a specific tree, a bend in a river that has to be acknowledged. Travellers leave a green branch as they pass. It is the clearest example on this list of a belief that is about place rather than about monsters."],

  // ------------------------------------------------------------------- Africa
  ["adze", "Adze", "impundulu", "Bug", [44, 62, 40, 80], MV.bug, 0.25, "Ewe",
    "Carnivore — blood, taken while you sleep",
    "Ghana and Togo, anywhere there is standing water",
    "A firefly that drinks blood and leaves sickness behind it, and which cannot be killed in that form - you have to catch it as a person. It is a mosquito, and the illness it brings is malaria. This is one of the oldest correct epidemiological observations anywhere in folklore: the small flying light comes, and afterwards the fever."],
  ["tokoloshe", "Tokoloshe", "leshy", "Night", [48, 60, 50, 66], MV.night, 0.25, "Zulu",
    "Omnivore — milk, and mischief",
    "Southern Africa, under the bed",
    "A small hairy figure that sits on a sleeper's chest. Beds in parts of South Africa are still raised on bricks to put the sleeper out of its reach, which is a live practice and not a quaint one. What it describes is sleep paralysis - the weight, the presence, the inability to move - which is reported in nearly identical terms on every continent."],
  ["asanbosam", "Asanbosam", "wendigo", "Canopy", [70, 76, 58, 50], MV.can, 0.15, "Ashanti",
    "Carnivore — anyone walking beneath",
    "Ghana, in the canopy of the deep forest",
    "It sits in a tree with iron hooks where its feet should be and takes people from above. The iron is the detail worth keeping: this is a forest creature whose defining feature is metal, in a culture with a long and famous smithing tradition, so the horror is partly technological."],
  ["eloko", "Eloko", "leshy", "Canopy", [56, 64, 54, 58], MV.can, 0.2, "Mongo",
    "Carnivore — hunters who stay out too long",
    "The Congo basin, in hollow trees",
    "A small being with grass for hair that lives in a hollow trunk and carries a bell whose sound takes your will away. It guards the fruit and the game of its own patch of forest. The bell is the part that makes it: the danger is not that it is strong, but that you walk toward it agreeing."],
  ["obayifo", "Obayifo", "alicanto", "Night", [52, 66, 46, 70], MV.night, 0.2, "Ashanti",
    "Carnivore — children, and crops",
    "Ghana, seen as a light moving over fields at night",
    "A witch that leaves its body at night and flies as a ball of light, draining children and blighting cassava. The light is likely bioluminescent fungi or fireflies over a field; the crop failure needed explaining and the light was there. Two true observations tied together by a wrong cause, which is most of this section."],
  ["abiku", "Abiku", "fairy", "Night", [50, 48, 46, 74], MV.night, 0.18, "Yoruba",
    "Herbivore — none; it does not stay long enough",
    "Nigeria, born into the same family again and again",
    "A spirit child who is born, dies young, and returns to the same mother to do it again. Marks were sometimes made on a dead child's body to see whether the next one carried them. It is an explanation for repeated infant loss in one family, and in a great many cases that will have been sickle-cell disease, which does exactly that and is common in the same region."],
  ["bultungin", "Bultungin", "cadejo", "Predator", [66, 72, 56, 62], MV.pred, 0.18, "Kanuri",
    "Carnivore — carrion, and the isolated",
    "The Sahel, around the edges of a village",
    "The name means roughly \"I change myself into a hyena\", and the people accused were very often blacksmiths. Smiths across the Sahel lived slightly apart, married among themselves and worked a dangerous transformation nobody else understood, so the community that needed them also kept them at arm's length and told this about them."],
  ["jengu", "Jengu", "mamiwata", "Aquatic", [58, 54, 56, 62], MV.aqua, 0.25, "Sawa",
    "Omnivore — offerings floated out",
    "Cameroon, in rivers and the surf",
    "Water spirits with long hair and a gap between the front teeth, who carry messages between the living and the dead and are asked for cures. The gap-toothed smile is considered beautiful in the same communities, so the spirit is built out of the local ideal rather than out of fear."],
  ["nyaminyami", "Nyaminyami", "hornedserpent", "Aquatic", [84, 74, 70, 40], MV.aqua, 0.12, "Tonga",
    "Carnivore — whatever the river takes",
    "The Zambezi, at Kariba",
    "The river god of the Zambezi, said to have been separated from his wife by the Kariba dam. The Tonga predicted the dam would not stand; in 1957 and again in 1958 floods far beyond the hundred-year estimates destroyed the works and killed men. The engineers called it coincidence. The Tonga did not."],
  ["ilomba", "Ilomba", "lindworm", "Venom", [60, 68, 52, 64], MV.ven, 0.18, "Bemba",
    "Carnivore — the life of whoever it was made from",
    "Zambia, in the water near the village",
    "A water snake with a human face, made by a sorcerer from a person's own hair and nails so that it wears that person's face. Killing the snake kills the person. The idea underneath is that harm done at a distance still travels back along a thread to the one who sent it."],
  ["yumboe", "Yumboe", "fairy", "Swift", [46, 50, 44, 76], MV.swi, 0.3, "Wolof",
    "Omnivore — fish, and a great deal of palm wine",
    "Senegal, the Gorée hills",
    "Silver-haired, pearl-skinned little people who hold feasts on the hills at night, set proper tables, and invite humans they like. They are known for taking fish and corn from people and for being scrupulous about giving something back. One of very few creatures in any tradition whose defining trait is hospitality."],

  // ------------------------------------------------------------------- Slavic
  ["babayagahut", "Baba Yaga's Hut", "bixi", "Armor", [86, 60, 88, 30], MV.arm, 0.12, "Slavic",
    "Omnivore — whatever is brought to it",
    "The Russian forest, facing away from you",
    "A hut that stands on chicken legs and turns to face you only when addressed properly. The image is not invented: Siberian hunters built storage huts on tall cut stumps with the roots left on, to keep bears and damp out. At dusk, in trees, a windowless box standing on splayed roots is exactly this."],
  ["domovoi", "Domovoi", "leshy", "Wild", [58, 52, 66, 44], MV.wild, 0.3, "Slavic",
    "Omnivore — bread and milk left by the stove",
    "Russia, behind or under the stove",
    "The house spirit. He keeps the household in order, and when a family moved they carried embers from the old stove to the new one so he would come too. If he pulls your hair at night it is a warning about something. A household god whose relocation procedure was a specific practical ritual."],
  ["bannik", "Bannik", "leshy", "Ember", [56, 60, 54, 50], MV.emb, 0.25, "Slavic",
    "Omnivore — the fourth bath, left for him",
    "Russia, in the bathhouse after everyone has gone",
    "You bathe in three shifts and leave the fourth for him. Ask and he will tell your fortune by touching your back in the dark: an open palm means it will go well, a scratch with claws means it will not. Bathhouses were where people were born and laid out, so the most dangerous spirit in the yard lives in the most important building."],
  ["rusalka", "Rusalka", "mamiwata", "Aquatic", [56, 58, 50, 68], MV.aqua, 0.22, "Slavic",
    "Carnivore — a swimmer, occasionally",
    "Rivers and birch groves, in early summer",
    "Girls who drowned or died unbaptised, who come out of the water for one week in early summer and sit in the birches. During Rusalka Week nobody swam and nobody worked in the fields. Whatever else it is, it is a seasonal ban on swimming in exactly the weeks when meltwater makes rivers coldest and fastest."],
  ["vodyanoy", "Vodyanoy", "kappa", "Aquatic", [70, 64, 62, 44], MV.aqua, 0.2, "Slavic",
    "Carnivore — swimmers, and millers' luck",
    "Russia, in mill ponds and deep pools",
    "An old man of the water, covered in weed, who rides a catfish and drowns people who swim at noon or midnight. Millers were expected to keep on terms with him, which in practice meant knowing the pool better than anyone - the man who could tell you where it was safe had a professional interest in your believing him."],
  ["likho", "Likho", "cyclops", "Night", [64, 70, 54, 50], MV.night, 0.15, "Slavic",
    "Carnivore — whoever it has attached itself to",
    "Eastern Europe, once it has found you",
    "One-eyed, gaunt, and it is simply bad luck. The stories are not about defeating it - a man traps it and is worse off, another gets rid of it and it comes back. Its lesson is the opposite of most monsters': some misfortune does not have a solution, and going looking for one makes it worse."],
  ["zduhac", "Zduhać", "alkonost", "Aerial", [62, 66, 56, 72], MV.aer, 0.15, "Serbian",
    "Omnivore — none; the body stays behind",
    "The Balkans, asleep in bed while the storm breaks",
    "A man whose soul leaves his sleeping body to fight the storm-demons carrying hail toward his village. You could not wake such a man or he would die. Whole villages knew which neighbours were doing this, and a man exhausted after a bad storm was understood to have been up all night working."],

  // ------------------------------------------------ Arabic, Persian, Anatolian
  ["ghul", "Ghūl", "sha", "Night", [64, 70, 54, 58], MV.night, 0.18, "Arabian",
    "Carnivore — the dead, and lone travellers",
    "Desert graveyards and the roads between towns",
    "A shapeshifter of burial grounds that lures travellers off the road, and the direct ancestor of the English word ghoul. In the older Arabian telling it is a kind of jinn and can be killed with a single blow - a second blow revives it, which is a rule strange enough that it is clearly remembered rather than invented."],
  ["ifrit", "Ifrit", "firebird", "Ember", [76, 82, 62, 60], MV.emb, 0.12, "Arabian",
    "Omnivore — smoke, and argument",
    "Ruins, and the deep desert",
    "A powerful class of jinn, made of smokeless fire, cunning and enormous. The jinn are not spirits of the dead and not fallen angels: they are a third kind of person with their own societies, laws and religions, who were here first. Almost everything English did to this idea by translating it as \"genie\" was a loss."],
  ["nasnas", "Nasnas", "sasquatch", "Swift", [52, 62, 44, 76], MV.swi, 0.2, "Arabian",
    "Carnivore — travellers, one at a time",
    "Yemen and the Hadhramaut, in scrub country",
    "Half a person, divided down the middle: one arm, one leg, half a head, hopping. Some accounts have it as the offspring of a jinn and a human. It is one of very few creatures anywhere built by subtraction rather than by combination, which is why it is far stranger than the animals made of two halves."],
  ["shahmaran", "Shahmaran", "naga", "Venom", [66, 62, 64, 56], MV.ven, 0.18, "Anatolian",
    "Omnivore — herbs, and what the snakes bring her",
    "Anatolia and Kurdistan, in a cave of snakes",
    "Queen of the snakes: a woman above, a serpent below, who holds the knowledge of every healing plant and is betrayed by the one human she trusts. She is still painted on tin and glass and hung in houses across the region, which makes her one of the few creatures here you can buy a picture of in a market this week."],
  ["huma", "Huma", "roc", "Aerial", [64, 66, 54, 80], MV.aer, 0.12, "Persian",
    "Omnivore — nothing; it never comes down",
    "The upper sky, over Persia",
    "A bird that never lands and never rests, living its whole life in the air, and whose shadow falling on a person makes them a king. It is said to be born already flying. Swifts genuinely do stay airborne for up to ten months without landing, which nobody could have known then and which makes the invention a better guess than it had any right to be."],

  // ----------------------------------------------------------------- Japanese
  ["gashadokuro", "Gashadokuro", "behemoth", "Night", [90, 84, 66, 36], MV.night, 0.08, "Japanese",
    "Carnivore — the heads of lone travellers",
    "Japan, on roads after midnight",
    "A skeleton fifteen times human height, assembled from the bones of people who starved or fell in battle and were never buried. Your ears ring before it arrives. The name is modern - twentieth century - but the image comes from Kuniyoshi's 1844 print, where he drew as one colossal skeleton what his source had described as a swarm of ordinary ones."],
  ["namazu", "Namazu", "leviathan", "Aquatic", [86, 70, 74, 34], MV.aqua, 0.1, "Japanese",
    "Omnivore — mud, at the bottom of everything",
    "Beneath the islands of Japan",
    "A giant catfish under the country, pinned by a god with a stone; when the guard slips, it thrashes, and that is an earthquake. After the 1855 Edo quake hundreds of catfish prints were sold within weeks. The belief was taken seriously enough that catfish behaviour before earthquakes has since had genuine scientific study, with mixed results."],
  ["nurikabe", "Nurikabe", "bixi", "Armor", [80, 40, 94, 12], MV.arm, 0.2, "Japanese",
    "Herbivore — none; it does not eat",
    "Japan, on a dark road, directly in front of you",
    "An invisible wall. You walk into it, and going round fails because it widens - but strike the bottom edge with a stick and it lets you pass. No face, no motive, no malice. It is what being lost in the dark feels like, given a shape and a procedure for getting past it."],
  ["betobetosan", "Betobeto-san", "fairy", "Night", [46, 44, 48, 70], MV.night, 0.35, "Japanese",
    "Omnivore — nothing; it is only walking",
    "Japan, on the road behind you at night",
    "Footsteps following you that stop when you stop. There is nothing there. You step aside and say \"Betobeto-san, please, go on ahead\", and the sound passes and does not come back. It is the only monster in this guide that is defeated by good manners, and it is one of the kindest things in Japanese folklore."],
  ["ashiaraiyashiki", "Ashiarai Yashiki", "behemoth", "Wild", [82, 66, 72, 30], MV.wild, 0.15, "Japanese",
    "Omnivore — nothing; it wants washing",
    "Edo, through the ceiling of a good house",
    "An enormous filthy foot crashes through the ceiling and a voice demands it be washed. You wash it. It goes. If you refuse, it stamps through the house. Of all the creatures in this guide it is the one whose demands are most easily met and least explicable."],
  ["yukionna", "Yuki-onna", "baihu", "Ice", [58, 68, 52, 66], MV.ice, 0.15, "Japanese",
    "Carnivore — the warmth of a sleeping traveller",
    "The snow country of northern Japan",
    "A woman in white in a blizzard, who spares a young man on condition he never speaks of her. He marries, is happy for years, and tells his wife about a strange night long ago. Most versions end with her leaving rather than killing him, which is worse. Hypothermia's late stages include calm, warmth, and visions."],
  ["jorogumo", "Jorōgumo", "anansi", "Bug", [62, 70, 54, 68], MV.bug, 0.18, "Japanese",
    "Carnivore — young men, over several days",
    "Japan, at waterfalls and in old houses",
    "A spider of four hundred years that takes a woman's form. The name is a pun - the same sounds mean both \"entangling bride\" and \"whore spider\" - and it belongs to a real and beautiful animal, Nephila clavata, the golden orb weaver, whose silk is strong enough to be collected and woven."],
  ["kasaobake", "Kasa-obake", "fairy", "Aerial", [44, 46, 44, 72], MV.aer, 0.35, "Japanese",
    "Omnivore — nothing at all",
    "Japan, in the storeroom, after a hundred years",
    "An old paper umbrella that has reached a hundred years and woken up: one eye, one leg, a long tongue, hopping. It belongs to the tsukumogami, tools that come alive with age, and the whole category is a moral about not throwing away what has served you. It exists mainly to startle, and appears to enjoy it."],

  // ----------------------------------------------------------------- Filipino
  ["manananggal", "Manananggal", "harpy", "Night", [60, 72, 48, 74], MV.night, 0.12, "Filipino",
    "Carnivore — the unborn, through a hollow tongue",
    "The Visayas, in the air after dark",
    "She severs at the waist, leaves the lower half standing, and flies with wings and trailing entrails. You do not fight the half that is hunting you - you find the legs and pack them with salt or ash so the two cannot rejoin before dawn. A monster with a spare part, and a weakness you have to go and look for."],
  ["kapre", "Kapre", "sasquatch", "Canopy", [76, 68, 64, 44], MV.can, 0.2, "Filipino",
    "Omnivore — whatever the tree has",
    "The Philippines, in a big old balete or mango",
    "A dark giant who sits in the branches of an old tree smoking an enormous cigar, and is more often a nuisance than a danger - he turns you around so you cannot find your way home. A tree known to have a kapre does not get cut down, which has quietly preserved a fair number of very old trees."],
  ["berberoka", "Berberoka", "kappa", "Aquatic", [78, 70, 66, 40], MV.aqua, 0.15, "Filipino",
    "Carnivore — fishermen, by drowning",
    "Northern Luzon, at pools in the river",
    "It drinks the pool dry so the fish are left flapping in the mud, waits for fishermen to wade out after them, and then lets the water go. It is the only creature in this guide whose method is a trap built out of greed, and the only one that has to swallow a river to set it."],
  ["bungisngis", "Bungisngis", "cyclops", "Wild", [82, 74, 62, 40], MV.wild, 0.15, "Filipino",
    "Omnivore — anything, while laughing",
    "Luzon, in the forest",
    "A one-eyed giant with an upper lip so large it can be folded over its own face, who laughs constantly and cannot stop - which is how you know it is there, and how it is beaten, because it laughs at the wrong moment. Its name is simply the word for giggling."],
  ["tiyanak", "Tiyanak", "fairy", "Night", [50, 66, 44, 70], MV.night, 0.15, "Filipino",
    "Carnivore — whoever picks it up",
    "The Philippines, crying in the undergrowth",
    "It cries like an abandoned baby, and takes its true shape once you have picked it up. In the older accounts it is the spirit of a child who died before baptism. The trap is aimed precisely at the impulse to help, which is what makes it one of the nastier ideas on this list."],

  // -------------------------------------------------------------------- Inuit
  ["qalupalik", "Qalupalik", "adaro", "Ice", [66, 68, 58, 56], MV.ice, 0.15, "Inuit",
    "Carnivore — children who go to the ice edge",
    "The Arctic coast, under the sea ice",
    "Green-skinned, long-haired, with an amauti pouch on her back for carrying away children who wander to the edge of the ice. You hear her humming under the floe. It is a safety story aimed at exactly the place where a child is most likely to die, and it has certainly kept children alive."],
  ["amarok", "Amarok", "cadejo", "Ice", [78, 84, 62, 60], MV.ice, 0.12, "Inuit",
    "Carnivore — anyone hunting alone at night",
    "The Arctic interior",
    "A giant wolf that hunts alone rather than in a pack, and takes those who hunt alone. In one story it kills the weak caribou and the herd grows healthier for it, which is a clear statement of what predators do to a population, arrived at by observation a very long time before anyone wrote it down as ecology."],
  ["ijiraq", "Ijiraq", "wendigo", "Ice", [64, 66, 58, 68], MV.ice, 0.15, "Inuit",
    "Carnivore — children, hidden rather than eaten",
    "The Arctic, at the edge of what you can see",
    "A shapeshifter that takes children and hides them, and which you can never look at directly - it lives in the corner of the eye. Stone inuksuit were built partly to find the way back from it. It is what the Arctic does to vision: in flat white light with no horizon, things move at the edge of sight constantly."],
  ["amikuk", "Amikuk", "kraken", "Burrow", [70, 72, 64, 52], MV.bur, 0.15, "Inuit",
    "Carnivore — kayakers",
    "The Bering Sea coast, in water and in earth",
    "A four-armed skinless creature that swims through the ground as easily as through the sea, so getting ashore does not save you. Of all the ways to make a sea monster worse, taking away the safety of land is the most efficient."],
  ["tupilaq", "Tupilaq", "leshy", "Night", [56, 64, 50, 62], MV.night, 0.18, "Greenlandic",
    "Carnivore — the person it was sent for",
    "Greenland, made from bones and sent to sea",
    "A creature built from animal parts, a child's bones and other things, animated by a maker and sent to kill a named enemy - and if the target is the stronger, it comes home and kills its maker. Real tupilaq were destroyed after use, so the carvings sold today were made for outsiders who wanted to see one."],

  // ------------------------------------------------------------ Celtic, British
  ["blackshuck", "Black Shuck", "cusith", "Night", [70, 74, 58, 62], MV.night, 0.15, "English",
    "Carnivore — none recorded; the sighting is the harm",
    "East Anglia, on lonely roads and in churchyards",
    "A black dog with eyes like coals, and one of the few creatures here with a dated primary source: on 4 August 1577 a storm broke over Bungay church, two of the congregation died, and the account published afterwards blamed a great black dog that ran through the nave. The scorch marks on the north door are still shown."],
  ["cwnannwn", "Cŵn Annwn", "cusith", "Aerial", [64, 70, 54, 74], MV.aer, 0.15, "Welsh",
    "Carnivore — none; they are only passing over",
    "Wales, heard overhead on autumn nights",
    "The hounds of the otherworld, heard hunting across the sky at night - and the strange detail is that they sound loudest when furthest away. That is exactly what migrating geese do: a skein calling high overhead at night sounds like a pack running just above the trees, and it passes and fades in the same way."],
  ["knocker", "Knocker", "leshy", "Burrow", [58, 56, 66, 44], MV.bur, 0.25, "Cornish",
    "Omnivore — the last corner of your pasty",
    "Cornwall and Devon, deep in the tin workings",
    "Small miners heard tapping ahead of you in the rock. Leave them part of your pasty and they show you the good ground; offend them and the roof comes in. Timber and rock genuinely do creak and tick before a collapse, so a man who listened for the knockers and got out was not being superstitious about the outcome."],
  ["dullahan", "Dullahan", "kelpie", "Night", [72, 78, 58, 70], MV.night, 0.12, "Irish",
    "Carnivore — none; it comes to name you",
    "Ireland, on the road at the moment you are due",
    "A headless rider carrying his own head, which has a grin from ear to ear and eyes that dart about, and he stops only where somebody is about to die, and says their name. Gold is the one thing that turns him. The head is carried aloft to see further, which is a practical detail nobody needed to add."],
  ["redcap", "Redcap", "leshy", "Armor", [66, 74, 60, 48], MV.arm, 0.15, "Scottish",
    "Carnivore — travellers in ruined towers",
    "The Anglo-Scottish border, in abandoned keeps",
    "An old man with iron boots and a pike who lives in ruined border castles and dyes his cap in the blood of travellers - he must keep it wet or he dies. He inhabits precisely the ruins left by three centuries of border raiding, which makes him a piece of local history wearing a monster's clothes."],
  ["boggart", "Boggart", "puca", "Night", [60, 62, 56, 58], MV.night, 0.25, "English",
    "Omnivore — milk, and the patience of a household",
    "Northern England, in the house or the marsh",
    "A house spirit gone sour - it sours milk, pulls the covers off and will follow a family that tries to move away. The rule everyone agrees on is that you must never give it a name, because naming it makes it worse and makes it permanent. Most spirits are controlled by knowing their name; this one is the exception."],

  // ------------------------------------------------------- American folklore
  ["hidebehind", "Hidebehind", "wendigo", "Canopy", [64, 72, 56, 76], MV.can, 0.15, "American folklore",
    "Carnivore — lumbermen, taken from behind",
    "The pine woods of the north, directly behind you",
    "It is always behind you, and it is faster at hiding than you are at turning, so nobody has ever seen one. It is said to be repelled by alcohol, which tells you a good deal about who was telling the story. A creature whose entire anatomy is a joke about peripheral vision."],
  ["squonk", "Squonk", "chupacabra", "Wild", [54, 40, 58, 46], MV.wild, 0.4, "American folklore",
    "Herbivore — hemlock bark",
    "The hemlock forests of Pennsylvania",
    "Covered in warts and ill-fitting skin, so ashamed of its appearance that it weeps constantly and can be tracked by the tear trail. Cornered, it dissolves into its own tears and there is nothing left to catch. A hunter is said to have bagged one and arrived home with a sack of liquid."],
  ["agropelter", "Agropelter", "sasquatch", "Canopy", [58, 70, 50, 74], MV.can, 0.2, "American folklore",
    "Carnivore — it does not eat them, only kills them",
    "Hollow trees in the conifer forests",
    "It lives in a hollow trunk and throws dead branches at anyone passing beneath with great accuracy. Falling limbs are the commonest cause of death in old-growth logging, and are still called widowmakers, so this is an occupational hazard with a face on it."],
  ["teakettler", "Teakettler", "chupacabra", "Ember", [48, 46, 48, 62], MV.emb, 0.35, "American folklore",
    "Omnivore — camp scraps",
    "Minnesota and Wisconsin logging camps",
    "A small stubby dog-like animal that makes a sound exactly like a boiling kettle, with steam coming from its mouth, and walks backwards. Seeing one is bad luck, which is convenient because it is walking away from you already."],
  ["snallygaster", "Snallygaster", "wyvern", "Aerial", [70, 74, 56, 72], MV.aer, 0.13, "American folklore",
    "Carnivore — livestock, and the occasional boast",
    "The Maryland hills",
    "A half-bird half-reptile with a metal beak and one eye, brought over by German settlers - the name is from schnell Geist, quick spirit. Newspapers ran sightings for decades, some of them admitted hoaxes to sell copies, which makes it a rare documented case of a monster being deliberately farmed."],
  ["jerseydevil", "Jersey Devil", "wyvern", "Night", [68, 72, 54, 70], MV.night, 0.13, "American folklore",
    "Carnivore — poultry, in the accounts",
    "The New Jersey Pine Barrens",
    "The thirteenth child of Mother Leeds, born deformed in 1735 and out through the chimney. The Leeds family were real, and the feud behind the story was political and religious rather than supernatural - an opponent's printed attacks on Daniel Leeds are a likelier parent of this creature than anything in the pines."],

  // -------------------------------------------------------------- South America
  ["curupira", "Curupira", "leshy", "Canopy", [62, 68, 58, 70], MV.can, 0.18, "Tupi",
    "Herbivore — forest fruit",
    "The Brazilian forest, on a trail that doubles back",
    "A small figure with flaming red hair and feet pointing backwards, so his tracks lead out of the forest when he is going in. He guards game animals and punishes hunters who take more than they need or kill a mother with young. A conservation ethic with legs on backwards, several centuries before the word existed."],
  ["mapinguari", "Mapinguari", "sasquatch", "Wild", [86, 78, 70, 34], MV.wild, 0.12, "Amazonian",
    "Herbivore — leaves, hauled down by the armful",
    "The western Amazon",
    "A huge red-haired creature with a terrible smell, hide like armour and a mouth in its belly. The description - enormous, slow, clawed, a plated hide - matches the giant ground sloths that lived here until around ten thousand years ago and overlapped with people. Some accounts even give it the sloth's distinctive walk on the sides of its feet."],
  ["boitata", "Boitatá", "firebird", "Ember", [64, 70, 52, 66], MV.emb, 0.15, "Tupi",
    "Carnivore — the eyes of animals that died in the fire",
    "The Brazilian grasslands, after burning",
    "A fiery serpent that survived a great flood by eating the eyes of drowned animals and now burns with their collected light, and which turns on anyone who sets fire to the forest. Marsh gas igniting over wet ground is the likely sight; the anger at arsonists is the part people added."],
  ["chullachaqui", "Chullachaqui", "leshy", "Canopy", [58, 62, 54, 66], MV.can, 0.18, "Amazonian",
    "Omnivore — forest fruit",
    "The Peruvian Amazon",
    "It takes the shape of somebody you trust and leads you into the forest until you are lost. You can tell it because one foot is deformed - a hoof, or backwards - so the advice is to look at the feet of anyone you meet out there. It also protects the forest, which makes it a guardian that works by deception."],
  ["pincoya", "Pincoya", "mamiwata", "Aquatic", [56, 54, 52, 68], MV.aqua, 0.25, "Chilote",
    "Omnivore — the sea's own",
    "Chiloé, on the beach at first light",
    "She dances on the shore, and the direction she faces decides the season: toward the open sea and the fishing will be good, toward the land and it will be poor. She is a fisheries forecast in the form of a dance, from islands where the catch has always been the difference between a good year and a bad one."],
  ["camahueto", "Camahueto", "unicorn", "Burrow", [78, 74, 68, 42], MV.bur, 0.15, "Chilote",
    "Herbivore — pasture, at great cost to it",
    "Chiloé, from the hills to the sea",
    "A one-horned calf that grows in the ground and tears a channel through the land on its way to the water. The gullies it leaves are real features of the landscape; a creature that makes them is a way of saying that the land here is actively coming apart, which on wet volcanic hillsides it is."],

  // ---------------------------------------------------------------- Norse folk
  ["draugr", "Draugr", "fenrir", "Armor", [84, 80, 72, 36], MV.arm, 0.1, "Norse",
    "Carnivore — anyone who opens the mound",
    "Iceland and Norway, inside the grave",
    "The dead who stay in their barrow with their goods, swollen and blue-black and enormously strong, growing heavier the longer they lie. The sagas treat them as a legal and practical problem: bodies were carried out through a hole in the wall that was then blocked, so the dead could not find their way back in."],
  ["huldra", "Huldra", "selkie", "Canopy", [58, 60, 52, 68], MV.can, 0.2, "Norwegian",
    "Omnivore — forest food",
    "Norwegian forest, at the charcoal burners' camps",
    "Beautiful from the front, with a cow's tail, and hollow from behind like a rotted trunk. She looks after charcoal burners and herders who are kind to her and ruins those who are not. The hollow back is the whole idea - the front is entirely convincing, and there is nothing at all behind it."],
  ["fossegrim", "Fossegrim", "leshy", "Aquatic", [54, 52, 50, 70], MV.aqua, 0.25, "Norwegian",
    "Omnivore — a stolen white goat",
    "Norway, at the waterfall",
    "He plays the fiddle under the falls and will teach you if you bring him a white goat stolen on a Thursday and throw it in with your head turned away. If the goat is too thin he only teaches you to tune the instrument. A supernatural apprenticeship with a clearly stated fee and a scale of results."],
  ["nisse", "Nisse", "leshy", "Wild", [56, 62, 60, 50], MV.wild, 0.3, "Norwegian",
    "Omnivore — porridge, with butter on it",
    "Scandinavian farms, in the barn",
    "He guards the farm and the animals, and he requires porridge on Christmas Eve with the butter ON TOP. A farmhand who ate the butter first was killed for it in more than one telling. Of all the small gods in this guide, the one with the strictest position on dairy."],
  ["nightmara", "Mara", "fairy", "Night", [50, 62, 46, 72], MV.night, 0.2, "Norse",
    "Carnivore — breath, and rest",
    "Northern Europe, on the sleeper's chest",
    "She sits on you in the night so you cannot move or breathe, and rides horses to exhaustion. This is sleep paralysis again - the third time it appears in this guide under three unconnected names - and it is where the word nightmare comes from. Not a bad dream: a specific creature, sitting on you."],

  // ------------------------------------------------------------------- Chinese
  ["jiangshi", "Jiangshi", "wendigo", "Night", [76, 72, 68, 30], MV.night, 0.13, "Chinese",
    "Carnivore — breath, taken from the living",
    "China, hopping stiffly along the road",
    "A stiff corpse that moves by hopping with its arms out, held still by a paper talisman on its forehead and blind but able to smell breath. Behind it is a real trade: bodies were walked home for burial over long distances by men who moved at night, which is exactly what a procession of upright corpses looks like."],
  ["baize", "Bai Ze", "qilin", "Wild", [70, 60, 66, 58], MV.wild, 0.15, "Chinese",
    "Herbivore — grass",
    "China, met once on a mountain",
    "A beast met by the Yellow Emperor that spoke, and dictated a complete catalogue of every strange creature in the world - eleven thousand five hundred and twenty of them - and how to deal with each. The book is lost. This is a monster whose entire significance is that it wrote the field guide."],
  ["xiezhi", "Xiezhi", "haetae", "Armor", [74, 70, 72, 44], MV.arm, 0.15, "Chinese",
    "Herbivore — grass",
    "China, in the courts",
    "A one-horned beast that could tell a guilty man from an innocent one and would gore the liar. Judges wore a cap named after it into the twentieth century. The Korean haetae in this guide is its descendant, which makes the pair of them a myth you can watch travelling between countries."],
  ["penghou", "Penghou", "leshy", "Canopy", [58, 54, 62, 40], MV.can, 0.22, "Chinese",
    "Herbivore — none; it lives inside the tree",
    "China, found when a camphor tree is felled",
    "A black dog with no tail found inside the trunk of an old tree when it is cut. The classical accounts, having introduced it, go straight on to say that it is edible and tastes like dog. Very few creatures in world folklore come with a serving suggestion."],

  // ------------------------------------------------------------------- Korean
  ["gumiho", "Gumiho", "kitsune", "Night", [64, 70, 52, 74], MV.night, 0.14, "Korean",
    "Carnivore — the liver, specifically",
    "Korea, in the hills and at wedding feasts",
    "A nine-tailed fox that becomes a woman. The Korean version differs from the Japanese in a way worth noticing: the kitsune can be a benevolent messenger, while the gumiho is almost always trying to become human and failing by one rule - a hundred days without being seen, a thousand days without eating a liver."],
  ["dokkaebi", "Dokkaebi", "leshy", "Ember", [62, 66, 58, 60], MV.emb, 0.25, "Korean",
    "Omnivore — buckwheat jelly, and a wrestle",
    "Korea, wherever something was thrown away",
    "Born from discarded household objects - a worn broom, a bloodied poker - they love games, challenge travellers to wrestling and can be beaten by hooking their right leg. They carry a club that produces whatever is asked for. The same idea as the Japanese tsukumogami, arrived at independently next door."],
  ["bulgasari", "Bulgasari", "xuanwu", "Armor", [82, 68, 86, 26], MV.arm, 0.12, "Korean",
    "Carnivore — iron, and nightmares",
    "Korea, at the forge and at the bedside",
    "A creature that eats metal and grows with every mouthful, so it cannot be killed with a weapon - fire is the only answer, and its name puns on \"cannot be killed\". It also eats bad dreams. An animal that becomes stronger the harder you hit it is a genuinely difficult problem to write."],

  // ------------------------------------------------------------------- Basque
  ["basajaun", "Basajaun", "sasquatch", "Canopy", [80, 70, 72, 46], MV.can, 0.18, "Basque",
    "Omnivore — the flocks' own pasture",
    "The Basque mountains, in the beech woods",
    "Lord of the woods, and a good one. He shouts to warn shepherds of coming storms and keeps wolves off the flock while they sleep, and in the older stories he taught people agriculture and iron-working, which were stolen from him by cunning. A giant whose defining act is teaching."],
  ["lamiak", "Lamiak", "mamiwata", "Aquatic", [56, 52, 54, 66], MV.aqua, 0.25, "Basque",
    "Omnivore — food left at the river",
    "Basque rivers, combing their hair with gold",
    "River women with the webbed feet of a duck, who will build a bridge or a house in a single night in exchange for food, and abandon it half-finished if the cock crows first. Several real stone bridges and chapels in the Basque country are locally credited to them, which is a pleasing way to explain very good masonry."],
  ["tartalo", "Tartalo", "cyclops", "Armor", [86, 82, 70, 36], MV.arm, 0.12, "Basque",
    "Carnivore — shepherds, in his cave",
    "The Basque mountains, in a cave with a flock",
    "A one-eyed giant who traps shepherds in his cave and eats them one a day, and is escaped by blinding him and hiding under a sheepskin among the flock. It is the Polyphemus story almost exactly, in a language unrelated to any other in Europe, and nobody is sure whether it travelled or arrived twice."],

  // ---------------------------------------------------------------- Caribbean
  ["soucouyant", "Soucouyant", "firebird", "Ember", [58, 70, 46, 74], MV.emb, 0.13, "Trinidadian",
    "Carnivore — blood, taken while you sleep",
    "Trinidad, crossing the sky as a flame",
    "By day an old woman, by night she sheds her skin, hides it in a mortar and flies as a ball of fire. Find the skin and pack it with salt and she cannot get back into it before dawn. She is also obliged to count any rice thrown on the floor, which is a compulsion she shares with vampires across half the world."],
  ["douen", "Douen", "fairy", "Canopy", [50, 56, 46, 72], MV.can, 0.18, "Trinidadian",
    "Omnivore — fruit, and other children's games",
    "Trinidad, at the forest edge, calling your child's name",
    "The spirits of children who died before baptism, faceless under wide straw hats, with their feet turned backwards. They call children by name to lead them into the bush - which is why in some families a child's name was not used outdoors. Backwards feet turn up independently here and in the Amazon."],
  ["lusca", "Lusca", "kraken", "Aquatic", [84, 78, 66, 44], MV.aqua, 0.12, "Bahamian",
    "Carnivore — divers, and whole boats",
    "The blue holes of the Bahamas",
    "A giant octopus living in the blue holes - flooded vertical caves, some over two hundred metres deep, with tides that genuinely pull water in and out hard enough to drown a swimmer. The hole does what the creature is accused of, which is the shortest possible distance between a real hazard and a monster."],

  // ------------------------------------------------------------- Finnish, Sámi
  ["para", "Para", "leshy", "Wild", [52, 50, 56, 56], MV.wild, 0.3, "Finnish",
    "Omnivore — milk and grain, stolen for its owner",
    "Finland, made at home out of household objects",
    "A creature assembled from a spindle, some yarn and household odds and ends, animated with a drop of the maker's blood, which then steals milk and grain from the neighbours and brings it home. It is a magical shoplifter you build yourself, and accusations of keeping one were a real way of explaining a neighbour's good luck."],
  ["stallo", "Stállo", "cyclops", "Ice", [84, 76, 70, 38], MV.ice, 0.13, "Sámi",
    "Carnivore — Sámi children, in the stories",
    "Sápmi, out on the winter fells",
    "A big, rich, slow-witted giant with a silver belt and a hound, who is always outwitted. The interesting reading is historical: stállo stories often feature an outsider with wealth and iron who wants Sámi land, and the hero wins by knowing the country better."],

  // -------------------------------------------------------------- Ainu, Central Asia
  ["korpokkur", "Korpokkur", "leshy", "Canopy", [52, 50, 54, 64], MV.can, 0.3, "Ainu",
    "Omnivore — deer, fish, and butterbur",
    "Hokkaido, under the butterbur leaves",
    "Small people who lived under the giant butterbur and traded with the Ainu by leaving goods at night without being seen - until someone grabbed one to look, and they left for ever and were never seen again. Hokkaido butterbur really does grow over two metres tall with leaves you could shelter under."],
  ["kamuyhuci", "Kamuy Fuchi", "firebird", "Ember", [68, 58, 70, 42], MV.emb, 0.18, "Ainu",
    "Omnivore — the first of every meal",
    "Hokkaido, in the hearth and never leaving it",
    "The grandmother of the hearth, the one deity who never leaves the house, and the one every prayer goes through to reach the others. The fire was never allowed to go out. She is included here because she is the opposite of everything else in this section: entirely domestic, entirely benevolent, and never once frightening."],
  ["olgoikhorkhoi", "Olgoi-Khorkhoi", "lindworm", "Venom", [66, 76, 52, 54], MV.ven, 0.15, "Mongolian",
    "Carnivore — livestock, at a distance",
    "The southern Gobi",
    "The death worm: a thick red-brown tube half a metre long that kills at a distance, by venom sprayed or by something like electricity. Herders describe it consistently and will not dig where it is said to be. A legless lizard or a sand boa accounts for the shape; nothing accounts for the rest."],

  // -------------------------------------------------------- Greek, Jewish, Egyptian
  ["centaur", "Centaur", "unicorn", "Swift", [72, 70, 58, 78], MV.swi, 0.15, "Greek",
    "Omnivore — and famously poor with wine",
    "Thessaly, in the hills",
    "Horse below, man above. The likeliest root is first contact: a people who did not ride, meeting people who did, at a distance, on a plain. Greek sources put the centaurs in Thessaly, which was the great horse-breeding region, and Chiron - the wise one who taught medicine - is the exception that shows the rest were meant as the opposite of civilised."],
  ["gorgon", "Gorgon", "naga", "Armor", [70, 74, 66, 50], MV.arm, 0.13, "Greek",
    "Carnivore — nothing; the harm is in the looking",
    "Greece, at the edge of the map",
    "Snakes for hair and a stare that turns you to stone. The face came first: the gorgoneion, a grotesque staring mask, was put on shields, roofs and ovens for centuries as protection, and the story of a monster who owned it was fitted around the object afterwards. It is a myth grown backwards out of a piece of design."],
  ["golem", "Golem", "bixi", "Armor", [88, 72, 90, 22], MV.arm, 0.1, "Jewish",
    "Herbivore — none; it is clay",
    "Prague, in the attic of the Old New Synagogue",
    "A figure of river clay animated by a written word, which works tirelessly and understands instructions too literally. In the Prague telling it is deactivated by erasing one letter from the word on its forehead, turning emet - truth - into met, death. A machine with an off switch, four hundred years before there were machines."],
  ["lilith", "Lilith", "harpy", "Night", [64, 70, 52, 72], MV.night, 0.13, "Jewish",
    "Carnivore — she is blamed for infants",
    "Mesopotamia, and every doorway with an amulet on it",
    "She leaves Eden rather than accept second place, and afterwards is blamed for the deaths of newborns - amulets naming her were hung over cradles for two thousand years. Every part of this is older than the Genesis story it attaches to, and the same figure appears in Babylonian incantation bowls."],
  ["medjed", "Medjed", "ziz", "Aquatic", [60, 66, 58, 62], MV.aqua, 0.2, "Egyptian",
    "Carnivore — unclear; almost everything is unclear",
    "The Book of the Dead, and nowhere else",
    "Known from a single illustration in one papyrus: a shape draped in a sheet with two eyes and a pair of feet sticking out, described as shooting rays from its eyes and eating the hearts of the unjust. Nobody knows what it was. In 2012 it became an internet mascot in Japan, which is the strangest afterlife any god on this list has had."],
  ["serpopard", "Serpopard", "sha", "Predator", [68, 72, 56, 66], MV.pred, 0.15, "Egyptian",
    "Carnivore — as a leopard would",
    "Predynastic Egypt, on ceremonial palettes",
    "Leopards with necks two metres long, carved on ceremonial palettes around 3100 BC - including the Narmer Palette, one of the earliest historical documents in existence, where two of them have their necks entwined. No text explains them. This creature is pure image, with five thousand years of silence after it."],
];

/* Build both halves from the one table. part7 and part29 keep the species and
   its note in separate files, and mnote() quietly does nothing when a key is
   spelled differently in the two places - a whole class of creature that exists
   with no field note and never complains. One row cannot disagree with
   itself. */
/* WHAT WAS IN THE ROSTER BEFORE THIS FILE TOUCHED IT.

   Captured here rather than checked afterwards, because Object.assign is
   silent: a key that already exists is overwritten with no error and no
   warning, and the species that was there is simply gone.

   THIS IS NOT HYPOTHETICAL. The first version of this file gave the Norse
   nightmare-spirit the key `mara`, and `mara` is the Patagonian Mara - a real
   rodent with its own artwork, its own field note and a place in two encounter
   pools. It was overwritten, and the art pipeline then overwrote its sprite
   too. Nothing complained. It was found only because the sprite key turned up
   in PHOTO_ART already.

   Ayr's standing rule is that a species they may already have caught must never
   be cut. Silently replacing one is worse than cutting it, so this now fails
   loudly. */
const M2_BEFORE = new Set(Object.keys(DEX));

Object.assign(DEX, M2.reduce((out, r) => {
  const [k, n, art, t2, b, m, c, org] = r;
  out[k] = { n, art, t: ["Mythic", t2], b: { h: b[0], a: b[1], d: b[2], s: b[3] }, m, l: [], c, org };
  return out;
}, {}));

M2.forEach(([k, , , , , , , , diet, where, note]) => {
  INFO[k] = { d: diet, h: where, s: "MYTH", f: note };
});

/* The check. Four things could be wrong here and none of them would say so.

   A key already used elsewhere in the roster would silently overwrite a real
   animal. A fallback art key that does not exist would crash the first time
   anything drew it. A move that does not exist would produce an attack that
   cannot be used. And a row missing its note would give a creature a blank
   guide entry - which is the failure this file's one-table shape exists to
   prevent, so it is worth proving rather than assuming. */
{
  const keys = M2.map((r) => r[0]);
  const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
  // The one that actually bit: a key the roster was already using.
  const stole = keys.filter((k) => M2_BEFORE.has(k));
  const noArt = [...new Set(M2.map((r) => r[2]).filter((a) => !ART[a]))];
  const noMove = [...new Set(M2.flatMap((r) => r[5]).filter((mv) => !MOVES[mv]))];
  const noNote = keys.filter((k) => !INFO[k] || !INFO[k].f);
  const orgs = {};
  M2.forEach((r) => { orgs[r[7]] = (orgs[r[7]] || 0) + 1; });
  const mythTotal = Object.keys(DEX).filter((k) => INFO[k] && INFO[k].s === "MYTH"
    && !(DEX[k] && DEX[k].warden) && !["qilin", "thunderbird", "phoenix"].includes(k)).length;

  console.log("[part95] the second hundred: " + M2.length + " added across "
    + Object.keys(orgs).length + " cultures | myths in the guide now: " + mythTotal
    + " | sprites still to render: " + M2.filter((r) => !(typeof PHOTO_ART !== "undefined" && PHOTO_ART[r[0]])).length
    + (stole.length ? " | OVERWROTE AN EXISTING SPECIES: " + stole.join(", ") : "")
    + (dupes.length ? " | DUPLICATE KEY: " + dupes.join(", ") : "")
    + (noArt.length ? " | NO SUCH ART: " + noArt.join(", ") : "")
    + (noMove.length ? " | NO SUCH MOVE: " + noMove.join(", ") : "")
    + (noNote.length ? " | NO NOTE: " + noNote.join(", ") : ""));
}
