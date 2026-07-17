// ---------- CHAPTER XXIII — Part 28: THE FOSSIL BEDS ----------
// All 50 fossil species had a name, a sprite and stats, and not one word about
// them. Same rules as the living animals: nothing invented. Where something is
// genuinely argued over, the note says it is argued over — which is more
// interesting than pretending, and is also just what palaeontology is like.

const fnote = (k, d, h, f) => { if (DEX[k]) INFO[k] = { d, h, s: "EX", f }; };

// ===== Triassic =====
fnote("eoraptor", "Omnivore — small animals and plants", "Late Triassic Argentina, ~231 mya",
  "One of the earliest dinosaurs known, and it was the size of a fox. Everything that followed — every sauropod, every tyrannosaur, every bird — came out of something like this. It still had teeth of two different kinds in one jaw, as though evolution had not yet decided what it was.");
fnote("herrerasaurus", "Carnivore — small reptiles and mammal relatives", "Late Triassic Argentina, ~231 mya",
  "One of the first predatory dinosaurs, and it lived when dinosaurs were a minor group — the land belonged to crocodile relatives, and no one would have picked the dinosaurs to win. It had a sliding jaw joint to grip struggling prey. It was three metres long in a world that did not yet care.");
fnote("coelophysis", "Carnivore — fish, lizards, small animals", "Late Triassic North America, ~215 mya",
  "Hundreds died together at Ghost Ranch in New Mexico and were fossilised in a heap, which is why we know it so well. For decades it was said to be a cannibal, on the strength of bones inside one specimen — re-examination showed those were a small crocodile relative, and the charge was dropped. It went to space aboard Endeavour in 1998.");
fnote("plateosaurus", "Herbivore — leaves and shoots", "Late Triassic Europe, ~214 mya",
  "One of the first really big dinosaurs, at up to ten metres, and the ancestor of the shape that became the sauropods. Its growth was oddly variable — individuals of the same age differ enormously in size, which is a reptile trait, not a mammal one. Whole herds are found together where they were caught in mud.");
fnote("postosuchus", "Carnivore — apex predator of its world", "Late Triassic North America, ~221 mya",
  "It is not a dinosaur. It is a crocodile relative that walked upright on pillar legs and ruled the continent while dinosaurs were still small and marginal. The end-Triassic extinction killed it, and only then did the dinosaurs get their chance. Nothing about their rise was inevitable.");
fnote("desmatosuchus", "Herbivore — roots and low plants", "Late Triassic North America, ~221 mya",
  "An armoured crocodile relative with metre-long shoulder spikes and a pig-like shovelling snout — a herbivore built like a tank, tens of millions of years before ankylosaurs did the same thing. It is not related to them at all. The same problem got the same answer twice.");
fnote("placerias", "Herbivore — roots and tough vegetation", "Late Triassic North America, ~215 mya",
  "A two-tonne beaked herbivore with tusks, and it is closer to us than to any dinosaur — it is a dicynodont, part of the lineage that produced mammals. Herds of them were the cattle of the Triassic. They vanished, and the dinosaurs took the job.");
fnote("lystrosaurus", "Herbivore — roots and low plants", "Early Triassic, worldwide, ~250 mya",
  "The Permian extinction killed roughly 90% of all species on earth — the worst thing that ever happened to life — and in its aftermath this one pig-sized animal made up an estimated 95% of all land vertebrates. Entire ecosystems were, briefly, just Lystrosaurus. It is the closest life has come to starting over.");
fnote("cynognathus", "Carnivore — anything it could catch", "Early Triassic, worldwide, ~245 mya",
  "It had a jaw with differentiated teeth, a secondary palate so it could eat and breathe at once, and probably whiskers and fur — it is one of our own ancestors' close relatives, not a dinosaur. Its fossils appear in South America and Africa, which was early evidence the continents had been joined. It looked like a dog and was not one.");
fnote("proganochelys", "Omnivore — plants and invertebrates", "Late Triassic Europe, ~210 mya",
  "One of the earliest turtles, and it could not pull its head in — instead it had spikes on its neck and a club on its tail, because the shell was not yet the whole answer. It had teeth on the roof of its mouth. Everything that makes a turtle a turtle was still being assembled.");
fnote("shonisaurus", "Carnivore — squid and fish", "Late Triassic seas, ~215 mya",
  "A 15-metre ichthyosaur, and a Nevada site has dozens of them dead in one place. One reading of it is a mass stranding; another, argued in 2022, is that it was a birthing ground used for millions of years — the same behaviour whales have now. Adults, embryos and newborns, and almost nothing else.");
fnote("tanystropheus", "Carnivore — fish and squid", "Middle Triassic coasts, ~242 mya",
  "Its neck was longer than its body and tail combined — three metres of it, held up by only 13 enormously elongated vertebrae, and too stiff to curve much. For a century nobody could agree whether it was even possible; the current answer is that it stood in shallow water and hunted by ambushing from a distance. Chemical analysis of the bone confirmed it was aquatic.");

// ===== Jurassic =====
fnote("dilophosaurus", "Carnivore — fish and small animals", "Early Jurassic North America, ~193 mya",
  "It had no frill and no venom. The film invented both, and shrank it — the real animal was seven metres long and would not have fit in a car. The twin crests were too thin to fight with and were almost certainly display.");
fnote("cryolophosaurus", "Carnivore — apex predator", "Early Jurassic Antarctica, ~190 mya",
  "The first meat-eating dinosaur found in Antarctica, dug out of rock at 4,000m. Its crest runs sideways across its head like a pompadour, which got it the nickname Elvisaurus, and the name stuck around long enough to reach print. Antarctica was forested then, and this was the top of that food chain.");
fnote("allosaurus", "Carnivore — sauropods and stegosaurs", "Late Jurassic North America, ~150 mya",
  "It attacked with its head like a hatchet — the skull was relatively weak in bite but the neck was enormously powerful, so it drove the upper teeth down and pulled. 'Big Al' is one of the most complete predatory dinosaurs ever found, and he is a catalogue of injuries: broken ribs, infected toe, damaged everything. He died young and in pain.");
fnote("ceratosaurus", "Carnivore — fish and dinosaurs", "Late Jurassic North America, ~150 mya",
  "It had a horn on its nose, a row of armour down its spine, and teeth so long they hung below the jaw. It shared its world with Allosaurus and seems to have taken different prey, more often near water. The horn was too fragile for combat.");
fnote("compsognathus", "Carnivore — lizards and insects", "Late Jurassic Europe, ~150 mya",
  "The size of a chicken, and for a long time the smallest dinosaur known. One specimen has a lizard in its stomach, swallowed whole and complete — you can see the animal's last meal. It was one of the first fossils to make anyone suspect birds came from dinosaurs.");
fnote("archaeopteryx", "Carnivore — insects and small animals", "Late Jurassic Europe, ~150 mya",
  "Feathers, wings and a wishbone — and teeth, claws on the hands, and a long bony tail. It surfaced in 1861, two years after Origin of Species, and it was exactly the transitional form Darwin's critics said could not exist. It is one of the most consequential fossils ever found, and it settled an argument by simply existing.");
fnote("pterodactylus", "Carnivore — fish and insects", "Late Jurassic Europe, ~150 mya",
  "The first pterosaur ever described, in 1784, and nobody knew what it was — Cuvier worked out it was a flying reptile, which was the first time anyone accepted that such a thing had existed. It is not a dinosaur. Most were the size of a crow.");
fnote("rhamphorhynchus", "Piscivore — fish", "Late Jurassic Europe, ~150 mya",
  "A long-tailed pterosaur with a diamond-shaped vane on the end of the tail like a rudder, and forward-jutting teeth that interlocked into a fish trap. Specimens from the Solnhofen limestone preserve the wing membrane in detail, down to the stiffening fibres. One was found with a fish in its throat and a bigger fish's tooth through its wing — killed mid-catch.");
fnote("stegosaurus", "Herbivore — low plants", "Late Jurassic North America, ~150 mya",
  "It is further in time from Tyrannosaurus than Tyrannosaurus is from us — 80 million years, which is the fact that breaks most people's sense of deep time. The spiked tail is called a thagomizer, a name coined in a Gary Larson cartoon that palaeontologists then adopted in earnest. Its brain was about the size of a lime.");
fnote("kentrosaurus", "Herbivore — low plants", "Late Jurassic Tanzania, ~152 mya",
  "The African cousin of Stegosaurus, with plates at the front and long spikes down the back and hips — and a spike jutting sideways from each shoulder. Modelling suggests the tail could swing through nearly 180 degrees at speed. It was half the size and considerably more heavily armed.");
fnote("brachiosaurus", "Herbivore — high foliage", "Late Jurassic North America, ~150 mya",
  "Its front legs were longer than its back legs, which almost nothing else has, so it stood with its shoulders high and its neck up like a crane. That bump on its head holds huge nostrils, and for decades people argued it must have snorkelled in lakes — the water pressure would have collapsed its lungs. It could not have.");
fnote("diplodocus", "Herbivore — ferns and low plants", "Late Jurassic North America, ~150 mya",
  "Its teeth were pencils at the front of the mouth for raking leaves off branches, and they wore out and were replaced every 35 days. Andrew Carnegie had casts of one shipped to kings and museums across Europe, which is why 'Dippy' stands in so many countries. Its tail may have cracked like a bullwhip, past the speed of sound.");
fnote("apatosaurus", "Herbivore — ferns and low plants", "Late Jurassic North America, ~150 mya",
  "Twenty-three tonnes, and its neck was held roughly level rather than up — it swept the ground like a vacuum. Its neck bones are hollowed out into an airy honeycomb, filled with air sacs like a bird's, which is the only way an animal that size works. It probably could not have lifted its head far without blacking out.");
fnote("brontosaurus", "Herbivore — ferns and low plants", "Late Jurassic North America, ~150 mya",
  "Brontosaurus was declared a mistake in 1903 — the same animal as Apatosaurus, with the wrong skull stuck on — and generations were told the name was a childhood lie. Then a 2015 study re-measured everything and concluded it was a distinct genus after all. It is currently, tentatively, back.");
fnote("camarasaurus", "Herbivore — coarse foliage", "Late Jurassic North America, ~150 mya",
  "The commonest sauropod in the Morrison Formation — if you find sauropod bones in Utah, this is the likely answer. Chemical isotopes in its teeth show it migrated hundreds of kilometres seasonally, which is direct evidence of behaviour from a tooth. Its skull is short and boxy with spoon-shaped teeth built for tough plants.");
fnote("mamenchisaurus", "Herbivore — high foliage", "Late Jurassic China, ~160 mya",
  "The longest neck of any animal that has ever lived — up to 15 metres, half the animal's whole length, with 19 vertebrae. It was less a neck than a boom, held out horizontally to sweep a huge area of forest without the animal moving its feet. Moving a body that size is expensive; moving a neck is cheap.");
fnote("plesiosaurus", "Carnivore — fish and squid", "Early Jurassic seas, ~190 mya",
  "Mary Anning found the first complete one at Lyme Regis, aged about 24, and it was so strange that Cuvier initially accused her of faking it. It swam by flying underwater with four wings, which nothing alive does. It gave birth to live young — one fossil holds a single enormous foetus, which suggests parental care.");
fnote("liopleurodon", "Carnivore — apex marine predator", "Middle Jurassic seas, ~160 mya",
  "A pliosaur with a skull over a metre long, and paired nostrils that let it smell directionally underwater the way a shark does. Walking with Dinosaurs put it at 25 metres, which is simply wrong — the real animal was about six or seven, still enough to eat almost anything in that sea. That documentary number has been impossible to kill.");
fnote("ophthalmosaurus", "Carnivore — squid, mostly", "Late Jurassic seas, ~160 mya",
  "It has the largest eyes relative to its size of any vertebrate, ever — nearly 25cm across, ringed with bone to hold their shape against pressure. It hunted deep and in the dark, and it went there on one breath. It gave birth tail-first, like a whale, so the newborn would not drown.");

// ===== Cretaceous =====
fnote("tyrannosaurus", "Carnivore — hadrosaurs, ceratopsians, each other", "Late Cretaceous North America, 68-66 mya",
  "The strongest bite of any land animal ever measured — around 35,000 newtons, enough to crush bone to powder, and we know it did because we find the bone in its droppings. Its eyes faced forward with better depth perception than a hawk's. The arms look absurd but could each curl about 200kg.");
fnote("giganotosaurus", "Carnivore — sauropods", "Late Cretaceous Argentina, ~98 mya",
  "Slightly longer than Tyrannosaurus and with a brain roughly half the size. Its skull was built for slashing rather than crushing, which suits an animal hunting sauropods far too big to swallow — you do not need to crush what you can bleed. Several found together hints it may have hunted in groups.");
fnote("spinosaurus", "Piscivore — fish, mostly", "Late Cretaceous North Africa, ~95 mya",
  "The first and best specimen was destroyed by an Allied bomb over Munich in 1944, and the science had to start again from drawings. What has emerged since is stranger than expected: dense bones, a paddle-shaped tail, and nostrils set far back — a dinosaur that swam. It is the longest predatory dinosaur known.");
fnote("carnotaurus", "Carnivore — pursuit predator", "Late Cretaceous Argentina, ~70 mya",
  "Its arms make Tyrannosaurus look generously equipped — they are shorter than a human's, with no elbow joint that worked, and four fingers that could not grasp. Its tail muscles were so huge it may have been the fastest large theropod that ever lived. It has bull's horns over its eyes and its skin is preserved: pebbly, scaled, and completely featherless.");
fnote("velociraptor", "Carnivore — small animals", "Late Cretaceous Mongolia, ~75 mya",
  "It was the size of a turkey and covered in feathers — quill knobs on the forearm bone prove it, the same anchor points a bird's wing feathers use. The film's animals are the size of Deinonychus and the name is essentially the only accurate thing about them. The famous 'Fighting Dinosaurs' fossil has one locked with a Protoceratops, both killed mid-fight by a collapsing dune.");
fnote("deinonychus", "Carnivore — pack hunter, possibly", "Early Cretaceous North America, ~115 mya",
  "This is the animal that changed everything. John Ostrom described it in 1969 as fast, agile and probably warm-blooded, and it demolished a century of thinking about dinosaurs as sluggish lizards — the Dinosaur Renaissance started here, and it led directly to the conclusion that birds are dinosaurs. The sickle claw was probably for pinning prey, not slashing.");
fnote("therizinosaurus", "Herbivore — leaves", "Late Cretaceous Mongolia, ~70 mya",
  "It has the longest claws of any animal that has ever existed — up to a metre — on a five-tonne feathered animal that ate plants. When only the claws were found in 1948, they were assumed to belong to a giant turtle. It probably used them to pull branches down, which is a strange fate for the largest claws in history.");
fnote("gallimimus", "Omnivore — plants, insects, small animals", "Late Cretaceous Mongolia, ~70 mya",
  "An ostrich-shaped dinosaur, six metres long and built entirely for running, with no teeth at all. Comb-like structures in its beak suggest it may have filter-fed, straining small food from water. It is the one in the film that runs in a flock and is genuinely well-portrayed.");
fnote("oviraptor", "Omnivore — probably plants and shellfish", "Late Cretaceous Mongolia, ~75 mya",
  "It was named 'egg thief' in 1924 because the first one was found lying on a nest of eggs, assumed to be raiding it. Seventy years later, an embryo inside one of those eggs proved they were its own — the animal was brooding, sitting on its clutch exactly like a bird, and had died protecting them. The name is a slander and the rules of naming mean it can never be changed.");
fnote("triceratops", "Herbivore — low tough plants", "Late Cretaceous North America, 68-66 mya",
  "Its frill is not shield enough to be armour — it is thin in places, and it is full of healed puncture wounds from other Triceratops horns, so they clearly fought each other with them. Its beak could shear through palm trunks. There is a serious ongoing argument that Torosaurus is just an old Triceratops.");
fnote("styracosaurus", "Herbivore — low plants", "Late Cretaceous North America, ~75 mya",
  "Six long spikes radiating off the frill and a 60cm horn on the nose, which together are almost certainly display rather than defence — every ceratopsian has a different arrangement, and the differences are how they recognised their own kind. Bonebeds hold hundreds of them, killed together. They were herd animals and something drowned them.");
fnote("protoceratops", "Herbivore — low plants", "Late Cretaceous Mongolia, ~75 mya",
  "Sheep-sized, beaked, four-legged, and abundant in the Gobi — and its skulls litter the same ground the Scythians mined for gold. Adrienne Mayor's argument is that this is where the griffin came from: a beaked quadruped with a shield behind its head, guarding gold. The idea is not proven but it is hard to unsee.");
fnote("pachycephalosaurus", "Herbivore — leaves and fruit", "Late Cretaceous North America, ~70 mya",
  "A 25cm dome of solid bone on its skull. Whether they rammed each other head-on has been argued for decades — the neck may not have taken it — but CT scans have since found healed lesions on the domes consistent with impact, so something was hitting something. Flank-butting is the current compromise.");
fnote("ankylosaurus", "Herbivore — low plants", "Late Cretaceous North America, 68-66 mya",
  "Armour-plated to its eyelids, and a tail club of fused bone swung by muscles anchored to a rigid handle — modelling says it could break the leg bone of a tyrannosaur. Even its skull roof is reinforced. Its nasal passages loop around inside its head like a maze, possibly to cool blood going to the brain or to make sound.");
fnote("parasaurolophus", "Herbivore — leaves and branches", "Late Cretaceous North America, ~75 mya",
  "The crest is a hollow tube — the nasal passage runs up it, loops, and comes back, nearly two metres of it. Researchers CT-scanned the skull, modelled the airway and played the animal's call: a low foghorn moan. We know what a dinosaur sounded like, because the instrument fossilised.");
fnote("iguanodon", "Herbivore — leaves and branches", "Early Cretaceous Europe, ~125 mya",
  "One of the first three dinosaurs ever recognised, and for fifty years its thumb spike was reconstructed as a horn on its nose. It was found by Gideon Mantell in 1822 — the story that his wife spotted the teeth first is probably apocryphal. Nobody knows what the spike was for: defence, fruit, or fighting each other.");
fnote("quetzalcoatlus", "Carnivore — small animals, taken on the ground", "Late Cretaceous North America, ~68 mya",
  "As tall as a giraffe when standing, with a 10-11 metre wingspan, and it flew. It launched by vaulting off all four limbs — the wings are also the front legs, so it pole-vaulted itself into the air. It probably stalked small animals on foot like a monstrous stork.");
fnote("pteranodon", "Piscivore — fish", "Late Cretaceous North America, ~85 mya",
  "Toothless, with a seven-metre wingspan and a long backswept crest, and it soared over open sea like an albatross — nearly every specimen is found in marine rock. Males had huge crests, females small ones, which is one of the clearest cases of sexual dimorphism in the fossil record. It is not a dinosaur and never was.");
fnote("mosasaurus", "Carnivore — apex predator of the late seas", "Late Cretaceous seas, ~70 mya",
  "It is a lizard — its closest living relatives are monitors and snakes, and it went to sea and became the last great marine reptile. It had a second set of teeth on the roof of its mouth to stop prey backing out. Its skull was found in a Dutch quarry in 1764, before anyone had the concept of extinction, and it forced the argument that species could die out at all.");
