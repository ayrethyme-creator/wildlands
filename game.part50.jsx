// ---------- Part 50: EVERYONE ELSE ----------
// Forty more written by hand, and a fallback that stops being generic.
//
// The first pass gave every unwritten species one of five interchangeable
// lines. That is fine for a placeholder and wrong as a permanent answer,
// because a domestic goose and a glass frog do not end up at a rescue station
// for remotely the same reasons. The fallback now reads the species — is it
// domestic, a bird, a reptile, an insect — and gives a reason that could
// actually be true of that animal.

Object.assign(INDIVIDUALS, {
  // ---- the domestics, which is most of what a real station actually holds ----
  chicken: { name: "Ma'am", sex: "F",
    story: "One of nine hundred pulled out of a barn when the operation folded. She had never stood on "
         + "anything but wire and could not walk properly for a fortnight.\n\nShe is four years old, which "
         + "for a hen of her breeding is remarkable, and she has opinions about where everyone should be standing.",
    since: "Two years since the barn" },
  goat: { name: "Ntate", sex: "M",
    story: "Bought as a novelty by somebody who had seen a video of a goat on a trampoline. Kept alone in "
         + "a suburban garden for three years, which for a herd animal is its own kind of cruelty, and "
         + "surrendered when he ate the fence.\n\nHe has other goats now. He still eats the fence.",
    since: "Surrendered at three" },
  sheep: { name: "Bez", sex: "F",
    story: "Bottle-fed by a family who found her orphaned and meant well. By the time she came here she "
         + "did not know she was a sheep and would follow a person over another sheep every time.\n\n"
         + "She has learned. Mostly. She still comes when a kettle boils.",
    since: "Eighteen months" },
  pig: { name: "Duchess", sex: "F",
    story: "Sold as a teacup pig, which is not a thing that exists. She was underfed on purpose to keep "
         + "her small and came in at eleven months weighing what she should have at four.\n\n"
         + "She weighs ninety kilos now and is exactly the right size for a pig. Her person cried when "
         + "they surrendered her, which is worth saying, because they were not cruel — they were lied to.",
    since: "Since she stopped being small" },
  duck: { name: "Sergeant", sex: "M",
    story: "Bought at Easter for a child, along with two others. The other two did not last the month.\n\n"
         + "He is not friendly and has never been friendly. He patrols. If you are carrying food you are "
         + "his business and he will tell you so at length.",
    since: "Three years" },
  goose: { name: "Mkhulu", sex: "M",
    story: "Turned up on the dam one winter and simply stayed. Nobody knows where he came from and he is "
         + "far too tame to have been wild.\n\nHe is the reason the station has never needed a dog at the "
         + "gate, and he is not fooled by anybody.",
    since: "Arrived on his own, four winters ago" },
  donkey: { name: "Gogo", sex: "F",
    story: "Worked a brick kiln until her feet failed. When she came in she could not stand for more than "
         + "an hour and her hooves had grown into shapes hooves should not make.\n\n"
         + "Two years of farriery later she can walk all day if she wants to. She mostly does not want to.",
    since: "Four years, retired" },
  turkey: { name: "Bishop", sex: "M",
    story: "Bred for a table he did not reach, which means he was bred to grow faster than his own legs "
         + "could carry. Most birds like him do not see two years.\n\nHe is five. He is on a diet he "
         + "resents, and he displays at the compost heap every morning without fail.",
    since: "Five years, against the odds" },
  tabbycat: { name: "Fifty-One", sex: "M",
    story: "Trapped as part of a colony behind the co-operative — the fifty-first cat out of that yard, "
         + "which is how he got the name and it stuck.\n\nToo feral to rehome, too used to people to "
         + "release. He lives in the feed store, keeps it clear of rats, and permits precisely one person "
         + "to touch him.",
    since: "Since the trapping" },
  blackcat: { name: "Ash", sex: "F",
    story: "Handed in as a kitten in October by somebody who had heard the superstition and did not want "
         + "the trouble. Rehomed twice and returned twice for the same reason.\n\n"
         + "The station stopped trying. She is the most affectionate animal here and she sleeps on the "
         + "record books, on the open page, on purpose.",
    since: "Three years, three homes" },
  calicocat: { name: "Bua", sex: "F",
    story: "Came out of a hoarding case with thirty-one others. Untreated eye infection took the left one "
         + "before anybody got to her.\n\nShe judges distance badly and misses her jumps about one time in "
         + "five, and is deeply offended each time it happens.",
    since: "Since the case, two years" },
  puppy: { name: "Coming Soon", sex: "M",
    story: "One of a litter dumped at the gate in a rice sack. Six of them, all alive, which is luckier "
         + "than it sounds.\n\nHe is the only one still here — the others were rehomed within the month, "
         + "and he was the one with the heart murmur. It has since resolved. Nobody has had the heart to "
         + "advertise him.",
    since: "Since the sack" },
  petrabbit: { name: "Bramble", sex: "M",
    story: "Bought for a child at a fair. Kept in a hutch a metre long for four years, which for an "
         + "animal that runs is a cage, whatever it is called.\n\n"
         + "He has three hundred square metres now. He used the first fortnight of it to sit very still "
         + "in a corner. He runs now.",
    since: "Two years out of the hutch" },
  lopbunny: { name: "Sixpence", sex: "F",
    story: "Surrendered because she bit. She bit because her back teeth had overgrown into her cheek and "
         + "nobody had looked in her mouth in two years.\n\nThe teeth are managed now, filed every eight "
         + "weeks for the rest of her life. She has not bitten anyone since the first month.",
    since: "Since her teeth were seen to" },
  guineapig: { name: "Boitumelo", sex: "F",
    story: "One of a pair. The other died of something preventable, and guinea pigs do not do well alone — "
         + "they call for a companion that is not coming.\n\nShe called for eleven days. She has four "
         + "companions now and has not been alone since.",
    since: "Since she stopped calling" },
  hamster: { name: "Crumb", sex: "M",
    story: "Found in a school corridor in a plastic ball with the lid jammed. Nobody claimed him and the "
         + "school could not say whose he was.\n\nHe is nocturnal, which the class that owned him was never "
         + "told, and had been woken every day for a year. He sleeps through now, and nobody wakes him.",
    since: "One year" },
  fancymouse: { name: "Comma", sex: "F",
    story: "Bred to be fed to something else and not used. There were forty in the tub.\n\n"
         + "She is eighteen months, which is old for a mouse, and she has spent all but three weeks of it "
         + "here. She is not remarkable and she did not need to be.",
    since: "Eighteen months" },
  fancyrat: { name: "Wren", sex: "F",
    story: "Surrendered with her sister when the family moved. Rats live two or three years and everyone "
         + "who gets one knows this and is somehow surprised anyway.\n\nHer sister died in April. She has "
         + "been introduced to two young ones since, because a rat alone is a rat in trouble, and she has "
         + "decided to tolerate them.",
    since: "Two years" },
  ferretpet: { name: "Sock", sex: "M",
    story: "Escaped from somewhere and was caught in a chicken run, which was very nearly the end of him "
         + "for reasons that had nothing to do with the chickens.\n\nNobody came for him. He steals. "
         + "Everything, constantly, and hides it under the same cupboard. The staff check it weekly and "
         + "get their pens back.",
    since: "Since the chicken run" },

  // ---- wild ones that end up in captivity for real reasons ----
  raccoon: { name: "Bandit's Cousin", sex: "F",
    story: "Raised in a flat by somebody who thought it would be like a cat. It was not like a cat. "
         + "It was like a raccoon in a flat.\n\nSurrendered at nine months having systematically "
         + "dismantled a kitchen. She is very intelligent and has never once used it for good.",
    since: "Since the kitchen" },
  bat: { name: "Umbrella", sex: "F",
    story: "Came down in a garden with her wing membrane torn on wire. It healed with scarring that "
         + "stiffens in the cold, so her flight is fine in summer and unreliable in winter — which for a "
         + "fruit bat is the difference between finding food and not.\n\nShe hangs upside down watching "
         + "the enclosure door and screams when the fruit arrives.",
    since: "Two years" },
  chipmunk: { name: "Pocket", sex: "M",
    story: "Came in a shipment of imported pot plants, three thousand kilometres from anywhere he should "
         + "be. Releasing a species where it does not belong is how you cause the next problem.\n\n"
         + "So he stays. He has filled every crevice of his enclosure with sunflower seeds and remembers "
         + "where all of them are.",
    since: "Since the pot plants" },
  redsquirrel: { name: "Nutmeg", sex: "F",
    story: "Blown out of a drey as a kit during a storm and hand-reared, which for a squirrel means she "
         + "has no fear of people or of dogs or of roads.\n\nShe was released once. She came back in four "
         + "days, to the kitchen window, and sat there until somebody let her in.",
    since: "Released once, returned" },
  groundhog: { name: "Tuesday", sex: "M",
    story: "Dug out of a golf course by people who wanted him gone and did not much mind how. Somebody "
         + "with a van intervened.\n\nHe has a burrow here that he has extended every year, and a "
         + "particular fondness for standing upright to look at things that do not require it.",
    since: "Since the golf course" },
  dormouse: { name: "Thimble", sex: "F",
    story: "Found hibernating in a bag of building sand that had been sitting in a yard since autumn. "
         + "Woken three months early, which for a hibernator burns through fat reserves she needed.\n\n"
         + "She was too thin to put back that year. She was too used to people by the next one.",
    since: "Since the sand" },
  grayfox: { name: "Ladder", sex: "M",
    story: "Hit by a car and left with a shattered pelvis that healed misaligned. He can walk, trot and "
         + "climb — grey foxes climb, which most people do not know — but he cannot run down anything.\n\n"
         + "He climbs the enclosure trees every evening and sits in them until dark, which is what he "
         + "would be doing anyway.",
    since: "Since the road" },
  skunk: { name: "Mopani", sex: "F",
    story: "Sold as a pet, descented, which is an operation done to make an animal convenient and takes "
         + "away the only defence it has. Surrendered when the novelty went.\n\n"
         + "She cannot be released. An animal that cannot spray is a slow animal with no argument.",
    since: "Descented, then surrendered" },
  ringtail: { name: "Kettle", sex: "M",
    story: "Came into a cabin through a gap in the roof and would not leave, over a whole winter, and "
         + "became so used to the people there that by spring he would take food from a hand.\n\n"
         + "That is a death sentence for a wild animal in a place with dogs and rifles. So he came here.",
    since: "Since that winter" },
  weasel: { name: "Needle", sex: "M",
    story: "Caught in a glue trap set for rats. Freed, but glue traps take skin and fur with them and he "
         + "lost most of one flank.\n\nIt has grown back patchy and thin, and a weasel that cannot hold "
         + "its own heat does not survive a cold season. He has a heat lamp. He sleeps under it "
         + "flat on his back.",
    since: "Since the glue trap" },
  hare: { name: "Long March", sex: "F",
    story: "A leveret picked up by a walker who assumed she was abandoned. She was not — hares leave "
         + "their young alone all day and come back at dusk. She was fine until she was rescued.\n\n"
         + "By the time anybody explained this it was four days too late to put her back. She is the "
         + "reason the station now has a sign about it.",
    since: "A well-meant mistake" },
  pika: { name: "Bell", sex: "F",
    story: "Came down with a rockslide, along with the whole slope she lived on. Dug out with a broken "
         + "shoulder that healed.\n\nHer haypile is enormous and she adds to it constantly and eats "
         + "almost none of it, which is precisely what a pika is for.",
    since: "Since the slide" },
  beaver: { name: "Engineer", sex: "M",
    story: "Live-trapped from a drainage channel he had comprehensively blocked, which had flooded a road "
         + "twice. He was going to be shot. Somebody made a phone call instead.\n\n"
         + "He has a pond here and a great deal of willow, and he has dammed the outflow four times. "
         + "Nobody has the heart to stop him.",
    since: "Since the road flooded" },
  capybara: { name: "Councillor", sex: "M",
    story: "Bought as an exotic pet by somebody who had seen photographs of capybaras being calm. "
         + "They are calm. They are also a hundred and forty pounds and semi-aquatic, and a garden pond "
         + "is not a river.\n\nHe has a proper pool now, and a standing arrangement with every other "
         + "animal here that nothing is a problem.",
    since: "Since the garden pond" },
  raven: { name: "Solomon", sex: "M",
    story: "Taken as a nestling by somebody who wanted a talking bird and got one, which is worse. "
         + "He says four words, all of them in a voice that is clearly somebody's, and it is unsettling "
         + "every single time.\n\nHe cannot be released. He would follow the first person he saw.",
    since: "Four words, one voice" },
  swan: { name: "Kgosi", sex: "M",
    story: "Lead poisoning from swallowed fishing weights, which is what happens to swans on water where "
         + "people fish. Chelation saved him. It did not give him back his balance.\n\n"
         + "He lists slightly to the left when he swims, permanently, and is no less magnificent about it.",
    since: "Since the lead" },
  flamingo: { name: "Ochre", sex: "F",
    story: "Hatched at a facility that closed, one of a group of nine with nowhere to be sent. Flamingos "
         + "need a crowd to breed and behave normally, and nine is not a crowd.\n\n"
         + "They are all here. Nine is what there is. They stand in a line and do the display anyway.",
    since: "Since the facility closed" },
  turtle: { name: "Lid", sex: "F",
    story: "Bought at four centimetres across, kept in a tank the size of a shoebox, and grown to twenty "
         + "in it — which shortens a shell and bends a spine. Released into a pond by an owner who thought "
         + "they were being kind, and recaptured because she was not native to it.\n\n"
         + "She will live another forty years. Nobody knows quite where yet.",
    since: "Since the pond" },
  axolotl: { name: "Marbles", sex: "F",
    story: "Kept too warm for two years, which for an axolotl is a slow illness, and surrendered when "
         + "she stopped eating.\n\nShe is critically endangered in the wild — down to a few hundred in the "
         + "canals of Xochimilco — and enormously common in tanks, which is one of the strangest facts in "
         + "conservation. Both of those are true at once.",
    since: "Since she stopped eating" },
  dartfrog: { name: "Small Blue", sex: "M",
    story: "Captive-bred, which for a dart frog means he has no poison at all — the toxin comes from what "
         + "they eat in the wild, and he has only ever eaten fruit flies from a tub.\n\n"
         + "He is entirely harmless and looks exactly like something that is not. He came out of a seizure "
         + "of eleven hundred animals at an airport.",
    since: "Since the seizure" },
});

// ---------- a fallback that reads the species ----------
// Nothing here is invented about the animal. Each line is a real route into a
// rescue station for that kind of animal, so an unwritten species still gets a
// reason that could be true rather than one of five interchangeable ones.
const REASONS_BY_KIND = {
  domestic: [
    "Bought on an impulse and surrendered when the novelty wore off.",
    "Left behind when a family moved and could not take them.",
    "One of a great many seized from an operation that had stopped coping.",
    "Kept alone for years, which for a herd animal is its own kind of harm.",
    "Grown far larger than the person who bought them had been told they would.",
  ],
  bird: [
    "Came down in a collision and healed with a wing that will not carry them far enough to hunt.",
    "Taken from the nest as a chick and hand-reared, which means never learning to feed themselves.",
    "Found grounded after a storm, too young to have fledged, and too used to people by the time they could.",
    "Confiscated from the cage trade with flight feathers cut back to nothing.",
  ],
  reptile: [
    "Outgrew a tank bought for a hatchling, and kept growing.",
    "Surrendered after twenty years by an owner who had not expected to outlive their interest.",
    "Seized at a border in a consignment labelled as something else.",
    "Released by an owner meaning kindness, into a place they could not survive, and recaptured.",
  ],
  amphibian: [
    "Captive-bred and never wild, out of a seizure at an airport.",
    "Kept at the wrong temperature for years, which is a slow illness.",
    "Surrendered from a tank where the water had not been changed in months.",
  ],
  insect: [
    "Bred in captivity for a display that closed.",
    "Came in with an imported plant shipment, thousands of kilometres from anywhere they belong.",
    "Emerged in a heated building out of season, with nothing outside to emerge into.",
  ],
  aquatic: [
    "Came out of a tank far too small, and cannot be returned to water they were never taken from.",
    "Bred in captivity, three generations deep, with no wild population left to go back to.",
    "Recovered from a net injury that healed without the speed to feed themselves.",
  ],
  mythic: [
    "Nobody agrees on where they came from, and everyone who has seen one describes it differently.",
    "The old accounts place them here, and the old accounts have been wrong before.",
    "Whatever this is, it did not arrive in a crate.",
  ],
  wild: [
    "Hand-reared after their mother was killed, and imprinted on people.",
    "Confiscated from the pet trade too young to have learned to be wild.",
    "Injured on a road, healed, and left without the speed to catch anything.",
    "Caught in a snare, and lost too much of a foot to hunt again.",
    "Born in a facility three generations deep, with nowhere wild to be returned to.",
  ],
};

// Word boundaries matter more than they look. Matching bare substrings put the
// manticore in the insect bucket because its name contains "ant", the behemoth
// and the mothman there because they contain "moth", and every juvenile big cat
// in the domestic bucket because "Lynx Kitten" contains "kitten". Every pattern
// here is anchored.
const W = (words) => new RegExp("(^|[^a-z])(" + words + ")([^a-z]|$)", "i");

const DOMESTIC_HINT = W("pet|farm|domestic|fancy|dairy|tabby|calico|puppy|guinea pig|hamster|ferret|donkey|pony|alpaca|house");
const BUG_HINT      = W("beetle|bee|wasp|ant|ants|moth|butterfly|mantis|dragonfly|damselfly|spider|cicada|fly|locust|weevil|firefly|bumblebee");
const FROG_HINT     = W("frog|toad|newt|salamander|axolotl|caecilian|olm|hellbender");
const SCALE_HINT    = W("snake|lizard|gecko|python|cobra|monitor|turtle|tortoise|terrapin|crocodile|croc|iguana|chameleon|skink|adder|viper|boa|mamba");
const FLYER_NOT_BIRD = W("bat|moth|butterfly|bee|fly|dragonfly|damselfly");

const kindOf = (sp) => {
  const d = DEX[sp];
  if (!d) return "wild";
  const t = d.t || [];
  const n = (d.n || "") + " " + sp.replace(/_/g, " ");
  // A myth has no rescue story, because it was never anywhere to be rescued from.
  if (t.includes("Mythic") || (INFO[sp] && INFO[sp].s === "MYTH")) return "mythic";
  if ((INFO[sp] && INFO[sp].s === "DOM") || DOMESTIC_HINT.test(n)) return "domestic";
  if (FROG_HINT.test(n)) return "amphibian";
  if (BUG_HINT.test(n)) return "insect";
  if (SCALE_HINT.test(n)) return "reptile";
  if (t.includes("Aerial") && !FLYER_NOT_BIRD.test(n)) return "bird";
  if (t.includes("Aquatic")) return "aquatic";
  return "wild";
};

// Replace the flat fallback from part49 with one that reads the animal.
individualOf = (sp) => {
  if (INDIVIDUALS[sp]) return INDIVIDUALS[sp];
  let h = 0;
  for (let i = 0; i < sp.length; i++) h = (h * 31 + sp.charCodeAt(i)) >>> 0;
  const kind = kindOf(sp);
  const pool = REASONS_BY_KIND[kind] || REASONS_BY_KIND.wild;
  return {
    name: FALLBACK_NAMES[h % FALLBACK_NAMES.length],
    sex: h % 2 ? "F" : "M",
    story: pool[h % pool.length],
    since: "At the station",
    kind,
    generic: true,
  };
};

console.log("[part50] individuals written:", Object.keys(INDIVIDUALS).length,
  "| fallback kinds:", Object.keys(REASONS_BY_KIND).length);
