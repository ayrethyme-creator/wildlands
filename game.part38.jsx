// ---------- CHAPTER XXXI — THE BREEDS ----------
// The last 39. These are cat and dog breeds — animals whose shape we chose.
//
// A guide that tells the truth about wild animals has to tell the truth about
// these too, and the truth is mixed: some breeds are ancient working animals
// doing a job they were shaped for, and some carry conditions we selected into
// them on purpose because we liked the look. Both are recorded here. Nothing is
// invented and nothing is softened, but nothing is sneered at either — the
// animals did not choose any of it.
//
// They carry the DOM status the other domestics use.

const b38 = (k, d, h, f) => { if (DEX[k]) INFO[k] = { d, h, s: "DOM", f }; };

// ===== cats =====
b38("bengalcat", "Carnivore — obligate", "Domestic; descended from a wild hybrid",
  "It is part wild animal: the breed was made by crossing domestic cats with the Asian leopard cat, originally in 1960s-70s research into feline leukaemia resistance. Early-generation hybrids (F1-F3) are legally restricted or banned in many places because they are not reliably domestic in temperament, and only later generations are sold as pets. The glitter in the coat is a real structural feature inherited from the wild parent.");
b38("mainecoon", "Carnivore — obligate", "Domestic; the working barn cat of New England",
  "One of the largest domestic cats, with tufted ears and paws and a heavy water-resistant coat — a genuine cold-climate working animal that kept barns and ships clear of rodents. The Viking origin story is folklore. The real burden is medical: the breed carries a well-documented mutation for hypertrophic cardiomyopathy, and responsible breeders now screen for it by DNA test.");
b38("siamesecat", "Carnivore — obligate", "Domestic; from Siam, now Thailand",
  "The dark points are a temperature switch. Siamese carry a form of partial albinism in which the pigment enzyme only works below a certain temperature, so colour appears on the coldest parts — ears, face, paws, tail. A Siamese raised somewhere warm is paler, and one that wears a bandage grows a dark patch under it. Kittens are born white because the womb is uniformly warm.");
b38("persiancat", "Carnivore — obligate", "Domestic; from Persia via Victorian Britain",
  "The flat face is recent. Photographs from a century ago show Persians with ordinary muzzles; the extreme flattening was bred in through the 20th century, and it brings breathing difficulty, dental crowding and tear ducts so distorted the eyes run constantly. The breed also carries polycystic kidney disease at high frequency, though testing has reduced it. Some breeders now deliberately keep a longer 'doll face'.");
b38("sphynxcat", "Carnivore — obligate; it eats more to stay warm", "Domestic; from a 1966 Toronto mutation",
  "It is not truly hairless — it has a fine down, and it feels like warm suede. Because there is no coat to absorb them, skin oils build up and the cat needs regular bathing, which cats famously do not want. It seeks out heat and human contact constantly, and that is thermoregulation as much as affection. It carries an elevated risk of hypertrophic cardiomyopathy.");
b38("ragdollcat", "Carnivore — obligate", "Domestic; California, 1960s",
  "It goes limp when picked up, which is where the name comes from — an unusually low muscle-tone response to being held. The trait is real, though the original breeder's claims about its origin were not. That floppiness plus near-total trust makes it a poor candidate for outdoor life: a ragdoll does not run from things it should.");
b38("scottishfold", "Carnivore — obligate", "Domestic; from one barn cat in Scotland, 1961",
  "Every Scottish Fold has a cartilage disease. The folded ear is caused by a dominant mutation that does not stay in the ear — it affects cartilage throughout the body and produces osteochondrodysplasia, a painful degenerative joint condition, in every cat that carries it. There is no fold without it. Several veterinary bodies and some countries have called for the breed to stop being bred, and the entire line descends from a single white barn cat named Susie.");
b38("russianblue", "Carnivore — obligate", "Domestic; reputedly from Arkhangelsk, northern Russia",
  "A dense double coat that stands out from the body rather than lying flat, and silver-tipped guard hairs that give the blue its shimmer. It is one of the few breeds with no strong association to a serious inherited disease, which is worth saying plainly in a list where that is not the norm. It is famously reserved with strangers.");
b38("norwegianforest", "Carnivore — obligate", "Domestic; the Norwegian skogkatt",
  "A genuine northern farm cat with a waterproof double coat, a woolly undercoat and heavily furred paws, and it climbs down trees head-first — its claw structure allows a descent most cats cannot manage. It appears in Norse folklore centuries before it was ever a registered breed, and it nearly disappeared in the 20th century through crossbreeding before a deliberate rescue effort.");
b38("abyssiniancat", "Carnivore — obligate", "Domestic; not, despite the name, from Abyssinia",
  "The coat is ticked: each hair carries several bands of colour, so the cat has no stripes or spots but a shifting agouti shimmer — the same mechanism that colours a wild rabbit. Genetic work points to the Indian Ocean coast rather than Ethiopia. The breed carries inherited retinal degeneration in some lines, for which a DNA test now exists.");
b38("britishshorthair", "Carnivore — obligate", "Domestic; Britain, from Roman-era farm cats",
  "One of the oldest recognisable English breeds, bred back from near-extinction after the Second World War by outcrossing to Persians — which is where the round face came from. It is the cat usually credited as the model for the Cheshire Cat. It is heavy-boned and famously dislikes being carried.");
b38("orientalcat", "Carnivore — obligate", "Domestic; a Siamese in other colours",
  "Genetically a Siamese without the pointed pattern, developed so the body type could be shown in over 300 colour and pattern combinations. Enormous ears, a wedge head, and the same loud voice — Orientals are among the most vocal cats kept, and they were bred that way by people who liked being talked to.");
b38("turkishvan", "Carnivore — obligate", "Domestic; the Lake Van region of eastern Turkey",
  "It swims, which almost no cat does willingly. The coat has a cashmere-like texture with no woolly undercoat, so it sheds water and dries fast, and Van cats in their home region are documented entering the lake. Many have odd eyes — one blue, one amber — and blue-eyed white cats of any breed carry a high risk of deafness on the blue side.");
b38("devonrex", "Carnivore — obligate", "Domestic; a 1960 stray in Devon",
  "The curly coat comes from a spontaneous mutation in a feral tomcat found near a disused tin mine. It has short, soft, wavy fur with fragile guard hairs, huge ears and a face people compare to a pixie or a bat. The coat is easily damaged by over-grooming, and the cat runs warm and seeks laps for the same reason the Sphynx does.");

// ===== dogs =====
b38("malamute", "Omnivore", "Domestic; the Mahlemiut people of Alaska",
  "Built for hauling weight, not speed — a malamute is a freight dog, where a husky is a racing dog, and confusing the two is the most common mistake made about them. Genetic studies place it among the oldest dog lineages, close to the earliest arrivals in the Americas. It is a poor guard dog: it is friendly to nearly everyone.");
b38("germanshepherd", "Omnivore", "Domestic; Germany, 1899",
  "Created deliberately by one man, Max von Stephanitz, from herding stock, and turned into the standard police and military dog worldwide. Show breeding then introduced a dramatically sloped back and angled hind legs that working lines do not have, and hip and elbow dysplasia became widespread — enough that a 2016 BBC investigation prompted argument inside the breed itself. Working-line shepherds are built noticeably straighter.");
b38("goldenretriever", "Omnivore", "Domestic; the Scottish Highlands, 1860s",
  "Bred by Lord Tweedmouth to retrieve waterfowl from cold water and rough ground, with a soft mouth that carries a bird without marking it. The temperament is genuine and consistent, which is why the breed dominates guide and therapy work. It is also one of the most cancer-prone dogs in the world — around 60% of golden retrievers die of cancer, and a long-running study is following thousands of them to find out why.");
b38("labrador", "Omnivore", "Domestic; from the St John's water dog of Newfoundland",
  "The most popular dog in much of the world, and a genuine working water retriever with a webbed foot and an otter tail it uses as a rudder. Its famous appetite is partly genetic: a deletion in the POMC gene, found in about a quarter of labradors and far more in assistance-dog lines, disrupts the signal that says full. It is not greed. The dog does not receive the message.");
b38("bordercollie", "Omnivore", "Domestic; the Anglo-Scottish border",
  "It works by stare. The crouched, unblinking 'eye' that moves sheep is a modified predatory sequence — the stalk, kept and intensified, with the kill bred out. One border collie, Chaser, learned the names of over 1,000 objects and could infer a new name by elimination. A border collie without a job will invent one, and the invented job is usually a problem.");
b38("corgi", "Omnivore", "Domestic; Pembrokeshire, Wales",
  "A cattle drover: it nips at heels and is low enough that the kick passes over it. The short legs come from a chondrodysplasia mutation — the same functional dwarfism as the dachshund and the basset — and it brings a raised risk of spinal disc disease. Corgis are also strongly predisposed to degenerative myelopathy, a progressive paralysis with a known genetic marker.");
b38("dachshund", "Omnivore", "Domestic; Germany, bred to go down badger setts",
  "The name means badger dog, and it was bred to go underground and face an animal that fights back — which is why something that size is that bold. The long back is a dwarfism mutation, and it carries a heavy cost: roughly one in four dachshunds will suffer intervertebral disc disease in its life, the highest rate of any breed, and it can paralyse them. Keeping them lean and off stairs measurably reduces it.");
b38("pug", "Omnivore", "Domestic; ancient China, bred as a companion for nobility",
  "One of the oldest companion breeds, and one of the most compromised. The flat face is a shortened skull with the same soft tissue packed into it, producing brachycephalic obstructive airway syndrome — the snoring and snorting are the sound of an animal that cannot breathe freely. Pugs also overheat easily and their protruding eyes are prone to injury. Some studies conclude they can no longer be considered a typical healthy dog, and there are now deliberate outcross programmes.");
b38("beagle", "Omnivore", "Domestic; England, a scent hound for hare",
  "It follows a scent so single-mindedly it will walk past its own name, and its nose is used at airports and borders worldwide. Its docility and size also make it the most-used dog in laboratory research, which is the reason 'beagle freedom' rescue groups exist and why laboratory-release laws in several US states are named after them.");
b38("poodle", "Omnivore", "Domestic; Germany and France, a water retriever",
  "It is a working gundog, not an ornament, and the absurd clip is functional in origin: the pom-poms were left over joints and vital organs for insulation in cold water while the rest was shaved for speed. The coat grows continuously and sheds very little, which is why poodles became the base for a hundred crossbreeds. It is consistently ranked among the most trainable of all dogs.");
b38("greatdane", "Omnivore", "Domestic; Germany, from boar-hunting dogs",
  "Enormous and gentle, and it does not get long — a great dane's median lifespan is around 7 to 10 years, and giant breeds age faster for reasons still being worked out. It is highly prone to gastric dilatation-volvulus, in which the stomach twists, which is a surgical emergency measured in hours. The breed is German, not Danish.");
b38("chihuahua", "Omnivore", "Domestic; Mexico, from the earlier techichi",
  "The smallest breed, descended from dogs kept in pre-Columbian Mexico. Many are born with a molera — an open soft spot in the skull, like a human infant's, that in chihuahuas often never fully closes. It is not a defect on its own but it needs care. The oversized personality is well documented and is thought to be partly how a two-kilogram animal survives among larger ones.");
b38("shibainu", "Omnivore", "Domestic; Japan, a small hunting dog",
  "One of the oldest and most genetically distinct dog breeds, sitting close to the base of the domestic dog family tree. It nearly died out entirely after the Second World War and every shiba alive descends from three surviving bloodlines. It screams — a specific, piercing vocalisation used when displeased — and it is famously indifferent to instruction.");
b38("greyhound", "Omnivore", "Domestic; ancient, in some form for millennia",
  "The fastest dog on earth, reaching around 70km/h with a double-suspension gallop where all four feet leave the ground twice per stride. It has the highest red blood cell count of any breed, which makes retired racers valuable canine blood donors. Despite the speed it sleeps most of the day. Racing has been banned or wound down in a growing number of places on welfare grounds.");
b38("saintbernard", "Omnivore", "Domestic; the Great St Bernard Pass in the Alps",
  "The rescue work was real: dogs from the hospice located travellers buried in snow and are credited with many lives, one dog, Barry, with around forty. The brandy barrel was not — it was invented by a 17-year-old painter, Edwin Landseer, in 1820 and became inseparable from the breed. Alcohol on a hypothermic person is actively dangerous.");
b38("dalmatian", "Omnivore", "Domestic; a carriage and coach dog",
  "It ran alongside horse-drawn carriages, and later fire engines, which is how it became the firehouse dog. Roughly a quarter to a third are born with some degree of deafness, linked to the same piebald gene that makes the spots — puppies are born white and the spots develop. The breed also has a unique defect in uric acid metabolism that causes urinary stones, and a legal outcross to a pointer was made to reintroduce the normal gene.");
b38("rottweiler", "Omnivore", "Domestic; Rottweil, Germany, from Roman drover dogs",
  "It drove cattle for Roman legions and later for German butchers, who tied the money purse around the dog's neck on the way home because nobody would take it. When rail transport ended droving the breed nearly vanished, and it was rebuilt as a police and working dog. It is powerful enough that its reputation is decided almost entirely by who raises it.");
b38("bulldog", "Omnivore", "Domestic; England, originally for bull-baiting",
  "Bred for a blood sport that was banned in 1835, then reshaped into a companion — and the reshaping went further than the fighting ever did. The modern bulldog's head is so broad and its hips so narrow that the large majority of litters are delivered by caesarean; it cannot reliably reproduce without surgery. It also has severe brachycephalic airway problems and struggles in heat. Some countries have restricted breeding it in its current form.");
b38("bordeauxmastiff", "Omnivore", "Domestic; southwest France",
  "A massive guarding and draught dog with the largest head in proportion to body of any breed. Its lifespan is among the shortest of all dogs — commonly cited around 5 to 8 years — and it is prone to heart disease and joint problems. It became widely known from a 1989 film, and the demand that followed was not good for it.");
b38("akita", "Omnivore", "Domestic; Akita Prefecture, northern Japan",
  "A bear-hunting dog and a Japanese national monument. Hachikō was an Akita who continued going to Shibuya Station at the usual time every day for nine years after his owner died there in 1925, and the statue that marks it is still a meeting point. The breed was nearly lost in the war, when dogs were culled for pelts and only the ones hidden in remote villages survived.");
b38("samoyed", "Omnivore", "Domestic; the Nenets people of Siberia",
  "It herded reindeer, hauled sledges and slept among the people it worked for, which is why the breed is so socially dependent — it was never kennelled. The upturned mouth corners are not sentiment: the 'Sammy smile' stops the dog drooling in extreme cold, where dribble would freeze into icicles on its face. Its shed undercoat can be spun into yarn.");
b38("bernesemountain", "Omnivore", "Domestic; the canton of Bern, Switzerland",
  "A farm dog that pulled milk carts, and one of the most cancer-prone breeds in existence — histiocytic sarcoma is dramatically over-represented, and a median lifespan around 7 to 8 years makes it one of the shortest-lived breeds of its size. It is famously gentle and is a difficult dog to own for exactly that reason: they do not stay long.");
b38("australianshepherd", "Omnivore", "Domestic; the American West, not Australia",
  "It is American. The name came from Basque shepherds who arrived in the western United States by way of Australia, and the dogs were developed there. Many carry the MDR1 mutation, which makes them dangerously sensitive to several common veterinary drugs — a fact worth knowing before any anaesthetic, and testable.");
b38("jackrussell", "Omnivore", "Domestic; England, bred by a clergyman for fox work",
  "Developed by Parson John Russell in the 1800s to bolt foxes, and deliberately kept small enough to follow one underground while having the stamina to run with the horses first. It is a working terrier in a companion's body, with a working terrier's drive, and it can live to 16 or more — one of the longest-lived breeds.");
b38("wolfdog", "Carnivore-leaning omnivore", "Domestic-wild hybrid; legally restricted in many places",
  "A wolf-dog hybrid is neither, and that is the problem. Behaviour is genuinely unpredictable between individuals and across the animal's life — many become unmanageable at sexual maturity, after the owner has bonded with them. Standard rabies vaccines are not formally approved for hybrids in the US, so a wolfdog that bites may be seized and euthanised regardless of its vaccination history. Sanctuaries are full of them, and most were bought by people who wanted something wild and got an animal that fits nowhere.");
