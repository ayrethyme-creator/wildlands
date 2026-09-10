// ---------- Part 86: THE WATCH LIST ----------
// Ayr, 2026-09-05: "a list in the guide of the CR endangered animals with how
// many there are left (and how many is a healthy population for context) once
// they are caught."
//
// Every animal the game marks Critically Endangered, in one scannable ledger:
// how many are left, and a number to feel it against. It fills in as you
// befriend them, the same way the Vigil does for the ones already gone - the
// Watch List is the Vigil's living half.
//
// TWO RULES FOR THE NUMBERS.
//
// 1. Where the field guide entry already states a figure, this ECHOES IT. "About
//    forty" here means the entry says "about forty animals" - if one moves, the
//    mismatch is meant to be caught, not smoothed over. Where the entry gives no
//    number (the sharks, the corals, a couple of the birds), `now` describes the
//    situation in words rather than inventing a precision nobody has.
//
// 2. `was` is a real anchor, not a slogan. A documented historical high where one
//    exists ("~65,000 in 1970"), the count at the last low point where the story
//    is a recovery ("22 in 1987"), or - for the animals down in the low tens,
//    where any target is academic - the plain fact that there is no safe number
//    that small.
//
// EVERY LINE HERE IS A CLAIM. design/WATCH_LIST.md carries the same text for The
// Librarian's register; on Terrane it is one of the fact-check sources. Nothing
// in this file is verified until a person has checked it against a named source
// and said so in design/CLAIMS.txt.

const WATCH = {
  // ---- down in the low tens: functionally over, or nearly ----
  vaquita: {
    now: "Around ten, in one corner of the Gulf of California.",
    was: "There is no safe number this small. A porpoise needs to be in the hundreds just to absorb ordinary bad luck, and every death now is a gillnet." },
  northernwhiterhino: {
    now: "Two, Najin and Fatu, both female, both under armed guard. Neither can carry a pregnancy.",
    was: "Functionally extinct. There were around 2,000 in the 1960s; the last male died in 2018." },
  yangtzesofttshell: {
    now: "Two or three, possibly two. One confirmed male in Suzhou; one or two unconfirmed in Vietnam.",
    was: "The known female died in 2019. A turtle this size once filled the lower Yangtze and the Red River." },
  saola: {
    now: "Unknown, and possibly already zero. Five camera-trap photographs exist, and no biologist has ever seen one alive.",
    was: "Discovered in 1992; it may not outlast its own discovery by forty years." },
  ivorybilledwoodpecker: {
    now: "None confirmed since the 1940s. The US proposed declaring it extinct in 2021; the search has not entirely stopped.",
    was: "Never common - it needed freshly dead big timber - but it had the whole southeastern bottomland swamp before that was logged." },
  franklinsbumblebee: {
    now: "None seen since 2006. Robbin Thorp counted 94 in 1998, then 20, 9, 3, 1, and kept looking every summer until he died in 2019.",
    was: "One of the smallest ranges of any bee on earth, and within it, ordinary." },

  // ---- the low tens to low hundreds ----
  redwolf: {
    now: "Around twenty in the wild, in one county in North Carolina.",
    was: "Declared extinct in the wild in 1980; 14 animals founded everything alive today. A wolf population needs hundreds in connected country." },
  vancouvermarmot: {
    now: "A few hundred, recovered from a low of about 30 in 2003, almost all of it captive-bred releases.",
    was: "It lives only in the alpine meadows of one island; a secure population would fill them." },
  hainangibbon: {
    now: "About forty, in a handful of family groups on one hillside.",
    was: "Over 2,000 on Hainan in the 1950s." },
  amurleopard: {
    now: "Around 130, up from about 30 in 2007 - one of the real big-cat recoveries.",
    was: "A few thousand once ranged the Russian Far East, Korea and northeast China." },
  javanrhino: {
    now: "Around 76, every one known by camera trap, all in Ujung Kulon on Java. None in any zoo.",
    was: "Once across Southeast Asia from India to Vietnam. A rhino population needs hundreds to be safe from one bad year." },
  sumatranrhino: {
    now: "Fewer than 50, in scattered pockets too far apart to find each other.",
    was: "The last of the woolly rhino's lineage. Tens of thousands across Southeast Asia within living memory." },
  asiaticcheetah: {
    now: "Around a dozen, on the central plateau of Iran and nowhere else.",
    was: "Ranged from Arabia to India; India's last three were shot in 1948. Genetically distinct from every African cheetah." },
  damagazelle: {
    now: "Fewer than 200 in the wild, in tiny Saharan groups that will never meet.",
    was: "Herds crossed the whole Sahel; it is on Egyptian tomb walls. It survives in captivity in reasonable numbers." },
  addax: {
    now: "Perhaps a few dozen wild, in one part of the Tin Toumma desert in Niger. Possibly the rarest hoofed mammal on earth.",
    was: "Tens of thousands ranged the Sahara; oil roads and hunting from vehicles emptied it in a generation." },
  greatindianbustard: {
    now: "Around 150, chiefly in Rajasthan. Power lines are now the leading killer.",
    was: "Widespread across the dry grasslands of the subcontinent - it was nearly chosen as India's national bird." },
  orangebelliedparrot: {
    now: "A few tens of wild birds. In 2016 only three wild females came back from migration.",
    was: "A 45-gram parrot that crosses 240km of open sea twice a year; the migration wants hundreds behind it." },
  regenthoneyeater: {
    now: "Around 300, so scattered that young males cannot find an adult to learn the song from - they now sing other birds' songs.",
    was: "Flocks of hundreds moved through southeastern Australia's box-ironbark woodland, most of which is gone." },
  crossrivergorilla: {
    now: "About 250, in roughly 11 fragmented groups on the Nigeria-Cameroon border.",
    was: "The rarest gorilla. The mountain gorilla, protected hard, has gone from 250 to over 1,000 - the same climb is possible here." },
  saharancheetah: {
    now: "No firm count - it lives at about one animal per 4,000 km², the lowest density recorded for any big cat.",
    was: "Thin by nature, but it held the whole Sahara and Sahel; it is now gone from most of it." },

  // ---- the low hundreds to low thousands ----
  hirola: {
    now: "Between 300 and 500, on the Kenya-Somalia border. Not one in any zoo anywhere.",
    was: "The last member of its entire genus - the most endangered antelope on earth. Around 14,000 in the 1970s." },
  kakapo: {
    now: "Around 250, every bird named and health-tracked, on a few predator-free islands.",
    was: "Once through all of New Zealand; the world's only flightless parrot, and the heaviest." },
  sumatrantiger: {
    now: "About 400 - the last tiger in Indonesia now that Bali's and Java's are gone.",
    was: "The smallest surviving tiger. Sumatra's forest could hold several times this if it stopped shrinking." },
  philippineeagle: {
    now: "About 400 pairs. A pair needs 40 km² of old-growth forest, and the Philippines has cut most of it.",
    was: "One of the largest eagles alive; it raises one chick every two years, so recovery is slow by nature." },
  rightwhale: {
    now: "Fewer than 400 North Atlantic right whales, and almost every death now is a ship strike or a rope.",
    was: "Whaling took it to the edge by 1900; the southern right whale, left alone, has recovered into the tens of thousands." },
  vulture: {
    now: "India's white-backed and long-billed vultures fell by over 95% in a decade to a cattle drug, and rabies in people rose as feral dogs replaced them.",
    was: "Tens of millions across South Asia - possibly the most numerous large birds of prey on earth in the 1980s." },
  whiterumpedvulture: {
    now: "Down more than 99% in about ten years to diclofenac in cattle carcasses. India banned the veterinary drug in 2006; recovery is slow.",
    was: "In the 1980s it may have been the single most numerous large bird of prey on earth." },
  axolotl: {
    now: "Possibly fewer than a thousand in the canals of Lake Xochimilco. Millions live in aquariums.",
    was: "The lake system it evolved in has been drained to a fraction and the rest is polluted; a wild population wants the whole of it." },
  chinesegiantsalamander: {
    now: "Wild numbers are close to functionally gone; the streams are emptied and the farms hold millions.",
    was: "The largest amphibian on earth, barely changed in 170 million years, once through the mountain streams of central China." },

  // ---- larger, still falling ----
  blackrhino: {
    now: "Around 6,400, recovered from a low near 2,400 in the 1990s - but the western black rhino was declared extinct in 2011.",
    was: "About 65,000 in 1970, and hundreds of thousands before the 20th century." },
  gharial: {
    now: "Fewer than 1,000 breeding adults in the rivers of northern India and Nepal.",
    was: "Tens of thousands across the northern subcontinent's rivers within the last century." },
  penguin: {
    now: "Around 10,000 breeding pairs, down over 97% since 1900. Uplisted to Critically Endangered in 2024.",
    was: "Over a million pairs around 1900; the collapse tracks the sardine fishery almost exactly." },
  finlessporpoise: {
    now: "About 1,200 - the last cetacean in the Yangtze, and the only porpoise that lives in fresh water.",
    was: "The river also held the baiji dolphin until around 2006. A river this long should carry far more." },
  tapanuliorangutan: {
    now: "About 800, in the Batang Toru forest of Sumatra - the rarest great ape on earth.",
    was: "Described as a new species only in 2017; its lineage is the oldest of the three orangutans." },
  sumatranorangutan: {
    now: "Around 14,000, in the forests of northern Sumatra.",
    was: "Estimates put it several times higher within the last century, before the lowland forest was cleared." },
  orangutan: {
    now: "The Bornean orangutan is around 100,000 and Critically Endangered - the rate of loss, not the raw number, earns the listing.",
    was: "About 230,000 in the 1970s; roughly half has gone since." },
  gorilla: {
    now: "The mountain gorilla has climbed from 250 to over 1,000 - the one great ape whose numbers are rising, entirely by choice.",
    was: "The eastern gorilla as a whole is Critically Endangered and still falling; the mountain population is the exception." },
  indri: {
    now: "Declining fast toward the low thousands; it has never once bred in captivity, so its forest is the only ark it has.",
    was: "The largest lemur alive, and a singer - eastern Madagascar's rainforest is a fraction of what it was." },
  sifaka: {
    now: "Falling across Madagascar as the forest is cut and burned; several sifaka species are already down in the hundreds.",
    was: "A leaper that cannot walk on the ground - it needs continuous canopy, and Madagascar has lost most of hers." },

  pangolin: {
    now: "Nobody has a global count - it is nocturnal, burrowing and secretive. What is counted is the trade: something on the order of a million taken in a decade, which makes it the most trafficked mammal on earth.",
    was: "Eight species across Africa and Asia, all of them declining together. The scales are keratin, the same as a fingernail, and do nothing." },

  // ---- brought back from almost nothing, and still held up ----
  // These two are on the list for the opposite reason to the rest: their numbers
  // are RISING, and both are still Critically Endangered. That is the honest
  // shape of a recovery - it takes decades, and it does not end.
  whoopingcrane: {
    now: "Over 800, up from 15 birds in 1941. Every whooping crane alive descends from those 15.",
    was: "Perhaps 10,000 before the wetlands were drained. Eight hundred is a triumph and still a species that one bad year could take." },
  californiacondor: {
    now: "Over 500, about half of them flying wild. Every wild condor is caught roughly twice a year and cleaned of lead.",
    was: "Twenty-two in 1987, when the decision was made to catch every single one. The species is alive because people hold it up, and lead is still the leading cause of death." },

  // ---- the insects: measured as a share of what there was ----
  rustypatchedbumblebee: {
    now: "Down about 87% and gone from most of its range in roughly twenty years. Bumblebees are counted as occupied sites, not individuals - it has vanished from most of the places it used to be.",
    was: "One of the commonest bumblebees in the eastern US in the 1990s, an ordinary bee in an ordinary garden. In 2017 it became the first bee listed under the US Endangered Species Act." },

  // ---- the ocean: percentages, not counts ----
  hammerhead: {
    now: "Great, scalloped and smooth hammerheads are all Critically Endangered - some monitored populations down 80% or more, mostly to the shark-fin trade.",
    was: "They still school in the hundreds where they are protected; that is what a healthy hammerhead coast looks like." },
  oceanicwhitetip: {
    now: "Some monitored populations have fallen more than 90%, caught on the same longlines set for tuna.",
    was: "Once one of the most abundant large animals on earth - the open ocean was full of them." },
  angelshark: {
    now: "Effectively gone from the whole Mediterranean; its last stronghold on earth is the water around the Canary Islands.",
    was: "Once an ordinary commercial catch from Britain to North Africa." },
  hawksbill: {
    now: "Roughly 8,000 nesting females worldwide, and still hunted for its shell despite a global ban.",
    was: "Likely in the millions before the tortoiseshell trade; it keeps reefs from being overgrown, so its loss is the reef's too." },
  kempsridley: {
    now: "About 7,000 to 9,000 nesting females - recovered from near-collapse, but stalled since the mid-2000s.",
    was: "A 1947 home movie caught around 42,000 nesting on one Mexican beach in a single day; by 1985 the whole species made about 700 nests." },
  sawfish: {
    now: "Every sawfish species is Endangered or Critically Endangered; ranges have collapsed by 20 to 80% and it is gone from over 40 countries.",
    was: "A saw is the perfect shape to snag in a net - once common in every warm shallow coast and river mouth." },
  coelacanth: {
    now: "A few hundred to perhaps a couple of thousand, on deep rocky slopes off East Africa and Indonesia.",
    was: "Known from 400-million-year-old fossils and thought extinct for 65 million years, until one turned up in 1938." },

  // ---- the reef and the seafloor ----
  staghorncoral: {
    now: "Over 80% of the Caribbean's staghorn has died since the 1980s - white-band disease, heat and storms.",
    was: "It builds thickets fast, more than 10cm a year, turning flat rock into shelter for a whole reef community." },
  sunflowerstar: {
    now: "Roughly 90% gone since about 2013 to sea star wasting disease; functionally extinct along the southern half of its range.",
    was: "Billions, from Alaska to Baja. Where it vanished, urchins ate the kelp forests down to bare rock." },
};

// Which befriended species belong on the Watch List, and in what order: the ones
// closest to gone first, then broadly by how many are left.
const WATCH_ORDER = [
  "vaquita", "northernwhiterhino", "yangtzesofttshell", "saola", "ivorybilledwoodpecker",
  "franklinsbumblebee", "redwolf", "hainangibbon", "javanrhino", "sumatranrhino",
  "asiaticcheetah", "amurleopard", "vancouvermarmot", "damagazelle", "addax",
  "greatindianbustard", "orangebelliedparrot", "regenthoneyeater", "crossrivergorilla",
  "saharancheetah", "hirola", "kakapo", "sumatrantiger", "philippineeagle",
  "rightwhale", "whiterumpedvulture", "vulture", "axolotl", "chinesegiantsalamander",
  "blackrhino", "gharial", "penguin", "finlessporpoise", "tapanuliorangutan",
  "sumatranorangutan", "orangutan", "gorilla", "indri", "sifaka", "pangolin",
  "californiacondor", "whoopingcrane",
  "hammerhead", "oceanicwhitetip", "angelshark", "hawksbill", "kempsridley",
  "sawfish", "coelacanth", "staghorncoral", "sunflowerstar",
  "rustypatchedbumblebee",
];

// A CR animal with no Watch List line is a hole in exactly the feature Ayr asked
// for, so any that this file missed are logged. Juvenile and variant forms fold
// onto the adult; that mapping is here so nothing is double-counted.
{
  const FOLD = {
    blackrhino_c: "blackrhino", gorilla_i: "gorilla", penguin_j: "penguin",
    penguin_c: "penguin", axolotlmeta: "axolotl", rightwhale_c: "rightwhale",
    orangutanflanged: "orangutan",
  };
  const roster = (typeof DEX !== "undefined" && typeof INFO !== "undefined")
    ? [...new Set(Object.keys(DEX)
        .filter((k) => INFO[k] && INFO[k].s === "CR")
        .map((k) => FOLD[k] || k))]
    : [];
  const holes = roster.filter((k) => !WATCH[k]);
  console.log("[part86] the watch list: " + Object.keys(WATCH).length + " entries"
    + " | CR species in the roster: " + roster.length
    + (holes.length ? " | NO WATCH LINE FOR: " + holes.join(", ") : " | every CR species covered"));
}
