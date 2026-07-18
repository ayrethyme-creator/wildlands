// ---------- CHAPTER XXVIII — Part 34: THE DOMESTICS ----------
// The animals we made. Every one of these is a wild species we reshaped, and the
// story of how is usually stranger than the animal looks. Same rules: nothing
// invented. They carry the "DOM" status the housecat and dog already use, since
// a Labrador has no IUCN Red List entry.

const dnote = (k, d, h, f) => { if (DEX[k]) INFO[k] = { d, h, s: "DOM", f }; };

// ===== cats =====
dnote("tabbycat", "Carnivore — obligate; it cannot make taurine and dies without meat", "Domestic worldwide, from the African wildcat",
  "The tabby M on the forehead is the wild pattern — every domestic cat descends from the African wildcat, which is striped exactly like this, and the tabby is what a cat looks like before we selected the colour out. Cats domesticated themselves: they moved into the first grain stores around 10,000 years ago to hunt the mice, and we let them. A cat's purr sits at 25-150Hz, a frequency that has been shown to promote bone healing.");
dnote("calicocat", "Carnivore — obligate", "Domestic worldwide",
  "Almost every calico is female, and it is a genetic near-certainty: the orange and black genes both sit on the X chromosome, so you need two X's to show both, and in each cell one X is switched off at random early in development — which is why the patches are scattered and every calico's pattern is unique. A male calico needs a rare XXY error and is almost always sterile. The pattern is a live map of which X won in each patch of skin.");
dnote("blackcat", "Carnivore — obligate", "Domestic worldwide",
  "The black coat comes from the same gene family that gives us some resistance to disease, and there is real evidence black cats are more resistant to certain infections — the mutation may be protective. In much of the world a black cat is good luck; the European association with witches got a great many of them killed, and there is a long-standing but disputed claim that reducing the cat population worsened the rats that carried the plague.");

// ===== dogs =====
dnote("puppy", "Omnivore — dogs digest starch, unlike wolves", "Domestic worldwide, from the grey wolf",
  "A puppy is born deaf and blind and does almost nothing for two weeks, then goes through a socialisation window between about 3 and 12 weeks where it learns what is safe for the rest of its life — miss it and the fear never fully lifts. Dogs are the only animal that reads human pointing and eye direction from birth, which not even wolves raised by people do reliably. That is the thing we actually bred: an animal that watches our face.");

// ===== small pets =====
dnote("hamster", "Omnivore — seeds, grains, insects", "Domestic worldwide, from the Syrian wild hamster",
  "Almost every pet hamster on earth descends from a single wild female and her litter, dug out of a burrow in Syria in 1930 — the entire domestic population is one family. Its cheek pouches stretch back to its shoulders and it can carry half its body weight in them. In the wild it is solitary and territorial, which is why two in one cage usually ends badly.");
dnote("guineapig", "Herbivore — grasses and vegetables; it cannot make its own vitamin C", "Domestic worldwide, from the wild cavy of the Andes",
  "It has no wild form left — it was fully domesticated in the Andes over 3,000 years ago, for food, and it is still farmed and eaten across Peru and Ecuador. Like us and almost no other animal, it cannot make vitamin C and must eat it or sicken, which is exactly why it became a laboratory standard. It is neither a pig nor from Guinea.");
dnote("gerbil", "Omnivore — seeds and roots", "Domestic worldwide, from the Mongolian wild gerbil",
  "A desert animal that barely drinks — it extracts nearly all the water it needs from dry seeds and produces almost no urine, which is why its cage stays clean. It stamps its hind feet to signal alarm and excitement, and a whole tank of them will drum together. It was essentially unknown as a pet until the 1960s.");
dnote("fancyrat", "Omnivore — anything", "Domestic worldwide, from the brown rat",
  "It is the same species as the wild brown rat, tamed in the 1800s — partly from rats caught for the blood sport of rat-baiting, where the unusually coloured ones were kept back as curiosities. It laughs: tickled, a rat makes ultrasonic chirps that are functionally laughter, and it will seek out the hand that tickles it. It will also free a trapped companion before taking food for itself.");
dnote("fancymouse", "Omnivore — seeds and grains", "Domestic worldwide, from the house mouse",
  "Bred for colour in China and Japan for centuries before Europe took it up — the 'waltzing mice' prized for a circling gait were later found to have an inner-ear defect, which is a sad thing to have selected for. It is the single most important mammal in medical research, and its genome was sequenced early precisely because we had already shaped it into thousands of known strains.");
dnote("petrabbit", "Herbivore — grass and hay; it eats some of its own droppings to extract more", "Domestic worldwide, from the European rabbit",
  "Every domestic rabbit descends from the European rabbit, and the domestication is unusually well-dated: it is often credited to French monks around 600 AD, who classed newborn rabbits as fish so they could be eaten during Lent. Its teeth never stop growing and it must wear them down constantly. A frightened rabbit can literally die of the fright.");
dnote("lopbunny", "Herbivore — grass and hay", "Domestic worldwide",
  "The lopped ears are a breed trait with a cost: the same cartilage change that folds the ear also narrows the ear canal, so lops are prone to ear problems wild rabbits never get. Ears are a rabbit's main radiator, and a lop sheds heat less well. It is a clear small example of the general truth about domestication — nearly every 'cute' trait we selected is a wild function bent slightly out of true.");
dnote("ferretpet", "Carnivore — obligate", "Domestic worldwide, from the European polecat",
  "Domesticated at least 2,000 years ago to hunt rabbits down their burrows — you send the ferret in and net what bolts, which is still legal and done in parts of Britain. It sleeps up to 18 hours a day and does a manic sideways bouncing when excited, called the weasel war dance. Its name comes from the Latin for 'little thief', which anyone who has kept one will confirm.");
dnote("canary", "Granivore — seeds", "Domestic worldwide, from the wild Atlantic canary",
  "Bred for song for 500 years from a drab green finch of the Canary Islands, and the males were prized so highly that breeders kept the method secret. Miners took them underground into the 1980s because a canary collapses from carbon monoxide long before a person does — a living gas alarm, and the phrase survives the practice. The bright yellow is a domestic colour; the wild bird is mostly green.");

// ===== fish =====
dnote("goldfish", "Omnivore — plants and small invertebrates", "Domestic worldwide, from the Prussian carp",
  "It was bred in China over a thousand years ago from a drab grey-green carp — the gold is a mutation that would be a death sentence in the wild, so it survives only because we liked it. The three-second-memory story is a myth: goldfish learn routines, recognise the person who feeds them, and can be trained to push levers. Kept in a pond it can reach 30cm and live 20 years; the bowl is what stunts it.");
dnote("koi", "Omnivore — plants, insects, algae", "Domestic worldwide, from the common carp",
  "Bred from ordinary food carp by rice farmers in 19th-century Japan, who noticed colour mutations in the fish they kept in their flooded paddies and started selecting them. A prize koi can sell for over a million dollars. They recognise their keepers, can be hand-fed, and routinely outlive the people who buy them — one named Hanako was documented at over 200 years old from her scale rings.");

// ===== farm mammals =====
dnote("pig", "Omnivore — anything", "Domestic worldwide, from the wild boar",
  "It is one of the most intelligent mammals alive — it outperforms dogs on some cognitive tests, plays video games with a joystick in studies, and recognises its own name and mirror. It does not sweat and wallows in mud to cool down and block sun, which is thermoregulation, not filth: a pig given clean options keeps its toilet well away from where it sleeps. Nearly every domestic pig descends from wild boar tamed independently in several places.");
dnote("potbellypig", "Omnivore — anything", "Domestic worldwide, from Southeast Asian pigs",
  "Sold as a 'teacup' pet that stays tiny, which is essentially always a lie — a potbelly reaches 45-70kg, and the small ones in the photos are usually underfed piglets. Enormous numbers are surrendered when they grow, which is the whole cautionary tale. The pig itself is affectionate, clean and clever; the problem was never the animal.");
dnote("cow", "Herbivore — grass, via four stomach chambers and a cud", "Domestic worldwide, from the aurochs",
  "Every cow on earth descends from the aurochs, and genetics narrow the origin remarkably: roughly 80 wild animals, tamed in the Near East about 10,500 years ago. It has close friends and becomes measurably stressed when separated from them, and its heart rate drops when a friend is near. It sees nearly all the way around without turning its head, which is why sudden movement from behind spooks it.");
dnote("highlandcow", "Herbivore — grass, and rougher forage than most cattle", "The Scottish Highlands and worldwide",
  "The long coat is a genuine double coat — an oily outer layer that sheds rain and a woolly inner one — so it carries far less body fat than other beef breeds, keeping warm with hair instead of blubber. It can graze rough hill ground and browse plants other cattle refuse. The horns are used to sweep snow off grass. A group of them is called a fold, not a herd.");
dnote("sheep", "Herbivore — grass", "Domestic worldwide, from the wild mouflon",
  "It has a nearly panoramic field of vision — rectangular pupils give it around 300 degrees — and it can recognise and remember about 50 individual faces, human and sheep, for two years, using the same brain regions we do. Wild sheep moult; domestic ones have been bred not to, which is why they must be shorn or the fleece grows until it harms them. A famously overgrown one carried 40kg of wool.");
dnote("goat", "Browser — leaves, shrubs, almost anything", "Domestic worldwide, from the wild bezoar goat",
  "One of the first animals we domesticated, around 10,000 years ago, and its rectangular pupil rotates to stay level with the horizon even when the head tips down to graze, keeping a wide strip of ground in focus. It is an escape artist that tests every fence, and it faints-goat fainting is a real muscle condition in one specific breed, not a normal goat trait. It will climb a near-vertical dam wall for salt.");
dnote("horse", "Herbivore — grass, grazing up to 16 hours a day", "Domestic worldwide, from wild horses of the steppe",
  "Domesticated on the Eurasian steppe about 6,000 years ago, and it changed human history more than any animal — carrying trade, war and language across continents. Its eyes are the largest of any land mammal, positioned for nearly 360-degree vision, which is why a horse startles at what is behind it. It sleeps standing via a stay apparatus that locks the legs, and only lies down for deep sleep when it feels safe.");
dnote("donkey", "Herbivore — coarse dry forage", "Domestic worldwide, from the African wild ass",
  "Domesticated in Egypt and the Horn of Africa about 7,000 years ago from a wild ass now nearly extinct. It is not stubborn — it has a strong self-preservation instinct and simply will not do what it judges unsafe, which reads as stubbornness to anyone in a hurry. It bonds intensely, sometimes for life, and a donkey that loses a long-term companion can decline and die of what looks like grief.");
dnote("alpacafarm", "Herbivore — grass", "The Andes and worldwide",
  "Bred from the wild vicuña over 6,000 years ago purely for fibre, and it comes in more natural colours than any other fibre animal — 22 recognised shades from white to true black, with no dye. It hums constantly, a sound of mild anxiety or contentment, and communicates status by spitting. It shares a communal dung pile, which makes the whole herd easy to keep clean.");

// ===== poultry =====
dnote("chicken", "Omnivore — seeds, insects, almost anything", "Domestic worldwide, from the red junglefowl of Southeast Asia",
  "There are more chickens alive right now than any other bird in history — over 25 billion at any moment — and it descends from the red junglefowl, tamed in Southeast Asia perhaps 8,000 years ago, possibly first for cockfighting rather than food. It has more than 30 distinct calls, including different alarm calls for aerial and ground predators, and it can recognise around 100 individual faces. It is the closest living relative of Tyrannosaurus with a genome we have read.");
dnote("duck", "Omnivore — plants, insects, small fish", "Domestic worldwide, from the mallard",
  "Almost every domestic duck descends from the mallard, bred larger and mostly flightless. Ducklings imprint on the first moving thing they see in the first day and follow it for life — the discovery that founded the study of imprinting. Its feathers are so waterproof that a duckling dropped in water stays dry, oiled from a gland it spreads with its bill, and the down beneath is the warmest natural insulation known.");
dnote("goose", "Herbivore — grass and grain", "Domestic worldwide, from the greylag goose",
  "One of the first birds ever domesticated, over 3,000 years ago, and kept as much for guarding as for food — a flock of geese is loud, territorial and fearless, and geese reportedly saved Rome by raising the alarm at a night attack. They pair for life and grieve lost mates. A goose remembers a person who wronged it and will single them out of a crowd to hiss at, sometimes for years.");
dnote("turkey", "Omnivore — seeds, nuts, insects", "Domestic worldwide, from the wild turkey of North America",
  "Domesticated by Indigenous peoples of Mexico around 2,000 years ago — the wild bird flies at 90km/h and roosts in trees, while the broad-breasted domestic bird has been bred so heavy it cannot fly or even breed without assistance. The bare head changes colour with mood, flushing red, white and blue with excitement. Benjamin Franklin's admiration for it over the eagle is real, though the story that he proposed it as national bird is exaggerated.");
