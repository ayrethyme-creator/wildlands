// ---------- Part 60: THE LECTURE HALL ----------
// The field exams in part42 ask what you have seen: they are drawn from the
// ground you just walked and answerable from your own guide entries. That is
// the right test for a gym.
//
// This is a different test. It asks what you have worked out. The questions
// here are about how animals are put together and why - the difference between
// a marsupial and a placental, why a whale is not a fish, why convergence keeps
// producing the same shapes - and most of them cannot be answered by looking a
// species up. They can be reasoned out by someone who has been paying
// attention, which is the whole idea.
//
// It pays, because a naturalist who can explain things is worth paying, and
// because the alternative income in this game is winning fights.
//
// Data, not mechanism: this file is a question bank. It carries into whatever
// this game becomes.

const HALL_Q = [
  // ---- what kind of animal is this ----
  { q: "A koala, a wombat and a kangaroo all carry young in a pouch. What does that tell you about how their young are born?",
    a: "They are born very early and finish developing outside the body",
    w: ["They are born fully formed and the pouch is for warmth",
        "They hatch from eggs inside the pouch",
        "They develop entirely inside the mother and the pouch is for carrying"],
    why: "Marsupials give birth to embryos that crawl to the pouch and attach to a teat. A placental mammal does that developing inside the uterus instead." },

  { q: "Which of these is a placental mammal doing something a marsupial cannot?",
    a: "Carrying young to a late stage of development inside the body",
    w: ["Producing milk", "Growing hair", "Regulating its own body temperature"],
    why: "Milk, hair and warm blood are mammal traits generally. The placenta is what lets the young stay inside long enough to be born well developed." },

  { q: "The echidna and the platypus are mammals that lay eggs. What does that make them?",
    a: "Monotremes, the oldest surviving branch of mammals",
    w: ["Reptiles that evolved milk", "Marsupials with an unusual habit",
        "A separate group that is not really mammal"],
    why: "Monotremes split off before live birth evolved in mammals. They lay eggs and still produce milk, which is why they are mammals." },

  { q: "A dolphin and a shark are close to the same shape. Why?",
    a: "Both evolved that shape independently because it moves well through water",
    w: ["They share a recent common ancestor",
        "The dolphin descended from a shark",
        "Sharks and dolphins are both fish"],
    why: "Convergent evolution. Water imposes the same problem on anything fast, and the same answer keeps being found. A dolphin's nearest relatives are hoofed land animals." },

  { q: "Why is a whale a mammal and not a fish?",
    a: "It breathes air, produces milk, and its ancestors walked on land",
    w: ["It is too large to be a fish", "It has a backbone and fish do not",
        "It lives near the surface"],
    why: "Whales descend from land mammals that returned to water. Their tails beat up and down, the way a running animal's spine flexes, rather than side to side like a fish." },

  // ---- how bodies are built ----
  { q: "A bat's wing and a bird's wing do the same job. What is different underneath?",
    a: "The bat's wing is stretched across long fingers; the bird's is feathers on a shortened hand",
    w: ["The bat's wing has no bones in it",
        "They are built identically from the same bones",
        "The bird's wing is a modified leg"],
    why: "Both are the same forelimb inherited from a shared ancestor, solved two different ways. That is homology and convergence in the same pair of animals." },

  { q: "Insects have six legs. How many does a spider have, and what does that tell you?",
    a: "Eight, and it tells you a spider is not an insect",
    w: ["Six, and it tells you spiders are insects",
        "Eight, but they are still insects",
        "It varies by species"],
    why: "Spiders are arachnids: eight legs, two body sections, no antennae, never wings. Insects have six legs, three body sections and usually wings." },

  { q: "Millipedes and centipedes look alike. What is the reliable difference?",
    a: "Two pairs of legs per segment on a millipede, one pair on a centipede",
    w: ["Millipedes have exactly a thousand legs",
        "Centipedes are always larger",
        "Millipedes are venomous and centipedes are not"],
    why: "It is also a difference in living: centipedes are fast predators with venom, millipedes are slow detritivores that curl and secrete an irritant." },

  { q: "Why can a snake swallow prey wider than its own head?",
    a: "Its jaw bones are loosely connected and the two halves move independently",
    w: ["It dislocates its jaw and relocates it afterwards",
        "Its skull is made of cartilage",
        "It has no jaw joint at all"],
    why: "The old line about dislocating the jaw is wrong. The lower jaw is in two halves joined by an elastic ligament, and the whole skull is a set of loosely linked bones." },

  // ---- how populations work ----
  { q: "A species is found only on one island and nowhere else. What is the word for that, and why does it matter?",
    a: "Endemic — and it means one bad event can take the whole species",
    w: ["Invasive — and it means it will spread",
        "Migratory — and it means it will return",
        "Feral — and it means it escaped from captivity"],
    why: "Endemism concentrates all the risk in one place. It is why island species make up such a large share of recorded extinctions." },

  { q: "Removing a predator from an area often reduces the number of plant species. Why?",
    a: "Grazers increase and eat the vegetation down to whatever survives being eaten",
    w: ["Predators fertilise the soil directly",
        "Plants need predators to pollinate them",
        "It does not — removing predators increases plant diversity"],
    why: "A trophic cascade. It is the same shape as the sea star and the mussels, and as the urchins and the kelp." },

  { q: "Two hundred individuals survive and the population is called functionally extinct. What does that mean?",
    a: "Too few remain for the species to keep playing its part or to recover on its own",
    w: ["They are already dead", "They cannot breed at all",
        "They are extinct in the wild but alive in captivity"],
    why: "Numbers are not the only thing. A species can be present and no longer doing what it did — no longer dispersing seeds, no longer controlling prey — and too scattered to find mates." },

  { q: "Why is a small isolated population at risk even when nothing is hunting it?",
    a: "Inbreeding and chance events can finish it before anything else does",
    w: ["Small populations always breed faster",
        "Isolation protects a population completely",
        "It is not at risk if the habitat is intact"],
    why: "Genetic drift, inbreeding depression and plain bad luck. The Mauritius kestrel came back from four birds, which is remarkable precisely because it usually does not work." },

  // ---- reasoning about behaviour ----
  { q: "A bird species has males that are brightly coloured and females that are drab. What is the most likely explanation?",
    a: "Females choose mates, and colour advertises to them",
    w: ["Males need camouflage more than females",
        "Colour helps males find food",
        "The species is losing its colouring over time"],
    why: "Sexual selection. The cost of being conspicuous is paid because the alternative is not breeding — which is why the trait persists even when it is dangerous." },

  { q: "An animal is nocturnal. What does that most likely tell you about its senses?",
    a: "It probably relies more on hearing, smell or touch than on colour vision",
    w: ["It is probably blind",
        "It sees more colours than a daytime animal",
        "It hunts only by echolocation"],
    why: "Night eyes trade colour for sensitivity — more rods, fewer cones, often a reflective layer behind the retina. That is why eyes shine in a torch beam." },

  { q: "Why do so many venomous animals share bright red, yellow and black patterns?",
    a: "A warning that works is worth copying, so unrelated species converge on it",
    w: ["Those pigments are a by-product of venom",
        "Predators are attracted to those colours",
        "It is coincidence"],
    why: "Aposematism. And once a warning works, harmless species copy it — that is mimicry, and it only works while the honest signallers outnumber the cheats." },

  { q: "A herbivore has eyes on the sides of its head; a predator has eyes facing forward. Why?",
    a: "Wide vision to spot danger, versus overlapping vision to judge distance",
    w: ["Predators have better eyesight in general",
        "Herbivores cannot see forward at all",
        "It relates to skull size, not behaviour"],
    why: "Being prey rewards seeing everything. Being a hunter rewards knowing exactly how far away one thing is. You can read an animal's life off the front of its skull." },

  // ---- reasoning about conservation ----
  { q: "A conservation plan protects a rare animal by fencing a reserve around it. What is the main risk?",
    a: "The population becomes isolated and cannot exchange individuals with others",
    w: ["Fences always fail structurally",
        "The animals will not use the space provided",
        "There is no real risk if the fence is well built"],
    why: "A fence is a wall against gene flow as well as against threats. It is why corridors, crossings and canopy bridges matter as much as reserves." },

  { q: "Breeding an endangered animal in captivity to supply the pet trade often makes wild poaching worse. Why?",
    a: "A legal channel makes wild-caught animals easy to launder and grows demand",
    w: ["Captive animals escape and compete with wild ones",
        "It always works and this premise is false",
        "Captive breeding is more expensive than poaching"],
    why: "The legal supply cannot be told apart from the illegal one, and legitimising the product grows the market faster than any farm can fill it." },

  { q: "Why is protecting a top predator often described as protecting everything below it?",
    a: "A predator needs a large intact range and a full prey base to exist at all",
    w: ["Predators physically defend other species",
        "Predators are the only species that matter",
        "Smaller animals follow predators when they move"],
    why: "The umbrella species idea. Protect enough ground for a wolf and you have protected the ground for everything a wolf needs, which is most of the system." },

  { q: "A species is listed as Extinct in the Wild. What does that mean?",
    a: "None survive in the wild, and the only living individuals are in human care",
    w: ["It is completely extinct",
        "It survives in the wild but not in captivity",
        "Nobody has looked for it recently"],
    why: "It is the last category before Extinct, and it is not always the end — the Guam rail and the Kihansi spray toad both went EW and were put back." },

  { q: "Why does moving an animal away from where it is causing a problem so often fail?",
    a: "It returns, or another individual moves into the space it left",
    w: ["The animal cannot survive anywhere new",
        "It is illegal almost everywhere",
        "It usually works and this premise is false"],
    why: "The polar bear that came back in eleven days, and the two shot predators replaced by three from over the ridge. The place has the problem, not the individual." },

  { q: "A fossil bed is stripped by night and the skulls sold. What is lost beyond the bones?",
    a: "The position and surroundings that tell you how the animal lived and died",
    w: ["Nothing — the bone is the specimen",
        "Only the monetary value to the country",
        "The bones are usually damaged in transit"],
    why: "Context is the data. A skull with no record of where it lay, what was beside it and which way the current ran is an ornament rather than evidence." },

  { q: "What is the strongest argument for protecting a species nobody finds appealing?",
    a: "It is doing work in the system that something else will have to do without",
    w: ["Every species is equally endangered",
        "It might become appealing later",
        "There is no strong argument"],
    why: "The soil invertebrates are the case. Nothing is charismatic about an earthworm, and Darwin spent his last book explaining that they had ploughed England." },
];

/* Build a paid quiz. Same shape the field exams produce, so it runs through the
   existing exam screen rather than needing one of its own.

   Questions are drawn without replacement and their options shuffled, so a
   second attempt is a second attempt rather than a memory test. */
const buildHallQuiz = (seed, count) => {
  let s = (seed >>> 0) || 1;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const pool = HALL_Q.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).map((q) => {
    const opts = [q.a, ...q.w];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return { q: q.q, a: q.a, opts, why: q.why, long: true, hall: true };
  });
};

console.log(`[part60] lecture hall | ${HALL_Q.length} questions`);
