# The Watch List

Ayr, 2026-09-05: *"a list in the guide of the CR endangered animals with how many
there are left (and how many is a healthy population for context) once they are
caught."*

Every Critically Endangered animal in the game, with how many are left and
something to feel that number against. It lives in the Field Guide, behind a
button, and it fills in one animal at a time as you befriend them — the same rule
the rest of the guide runs on, and the reason it lands. "Around ten" means
nothing until you have met one.

The data is `game.part86.jsx`. This document is the same table in prose; the file
is the one the game reads.

**52 species.** 59 Critically Endangered entries in the roster, folding seven
juvenile and variant forms (`blackrhino_c`, `gorilla_i`, `penguin_j`,
`penguin_c`, `axolotlmeta`, `rightwhale_c`, `orangutanflanged`) onto their
adults. part86 checks its own coverage at load and logs any species it missed;
as of 2026-09-09 it logs `every CR species covered`.

## The two rules this table was written under

**1. Where the field-guide entry already states a figure, the Watch List echoes
it.** Not paraphrases it — echoes it, so that if the two ever disagree the drift
shows up instead of being smoothed over. Checked mechanically on 2026-09-09:
every one of the 52 "Left" lines carries at least one number that also appears in
that species' own field-guide note. There is no population figure in this feature
that was not already in the game.

**2. Where no number exists, the line is qualitative rather than invented.** The
saola has never been counted and the Saharan cheetah cannot be; those lines say
so and give the shape of it instead. A made-up integer would read as more
authoritative than a real uncertainty, which is exactly backwards.

## Why "For scale" and not "a healthy population"

Ayr asked for how many is a healthy population for context. There is no such
single number — it depends on the animal's lifespan, litter size, range and how
connected the ground is — and inventing one per species would have broken rule 2
fifty-two times over.

So the second line is whatever honestly gives the first line a size. Usually that
is **a documented historical high** (black rhino: 65,000 in 1970). Sometimes it
is **a recovery low point**, because the useful comparison runs the other way
(condor: 22 birds in 1987). Sometimes there is no safe number and the honest
answer is to say why (vaquita: a porpoise needs to be in the hundreds just to
absorb ordinary bad luck).

---

## Down in the low tens: functionally over, or nearly

**Vaquita** — *Left:* around ten, in one corner of the Gulf of California.
*For scale:* there is no safe number this small. A porpoise needs to be in the
hundreds just to absorb ordinary bad luck, and every death now is a gillnet.

**Northern White Rhino** — *Left:* two, Najin and Fatu, both female, both under
armed guard. Neither can carry a pregnancy. *For scale:* functionally extinct.
Around 2,000 in the 1960s; the last male died in 2018.

**Yangtze Softshell** — *Left:* two or three, possibly two. One confirmed male in
Suzhou; one or two unconfirmed in Vietnam. *For scale:* the known female died in
2019. A turtle this size once filled the lower Yangtze and the Red River.

**Saola** — *Left:* unknown, and possibly already zero. Five camera-trap
photographs exist, and no biologist has ever seen one alive. *For scale:*
discovered in 1992; it may not outlast its own discovery by forty years.

**Ivory-billed Woodpecker** — *Left:* none confirmed since the 1940s. The US
proposed declaring it extinct in 2021; the search has not entirely stopped.
*For scale:* never common — it needed freshly dead big timber — but it had the
whole southeastern bottomland swamp before that was logged.

**Franklin's Bumblebee** — *Left:* none seen since 2006. Robbin Thorp counted 94
in 1998, then 20, 9, 3, 1, and kept looking every summer until he died in 2019.
*For scale:* one of the smallest ranges of any bee on earth, and within it,
ordinary.

## The low tens to low hundreds

**Red Wolf** — *Left:* around twenty in the wild, in one county in North
Carolina. *For scale:* declared extinct in the wild in 1980; 14 animals founded
everything alive today. A wolf population needs hundreds in connected country.

**Hainan Gibbon** — *Left:* about forty, in a handful of family groups on one
hillside. *For scale:* over 2,000 on Hainan in the 1950s.

**Javan Rhino** — *Left:* around 76, every one known by camera trap, all in Ujung
Kulon on Java. None in any zoo. *For scale:* once across Southeast Asia from
India to Vietnam. A rhino population needs hundreds to be safe from one bad year.

**Sumatran Rhino** — *Left:* fewer than 50, in scattered pockets too far apart to
find each other. *For scale:* the last of the woolly rhino's lineage. Tens of
thousands across Southeast Asia within living memory.

**Asiatic Cheetah** — *Left:* around a dozen, on the central plateau of Iran and
nowhere else. *For scale:* ranged from Arabia to India; India's last three were
shot in 1948. Genetically distinct from every African cheetah.

**Amur Leopard** — *Left:* around 130, up from about 30 in 2007 — one of the real
big-cat recoveries. *For scale:* a few thousand once ranged the Russian Far East,
Korea and northeast China.

**Vancouver I. Marmot** — *Left:* a few hundred, recovered from a low of
about 30 in 2003, almost all of it captive-bred releases. *For scale:* it lives
only in the alpine meadows of one island; a secure population would fill them.

**Dama Gazelle** — *Left:* fewer than 200 in the wild, in tiny Saharan groups
that will never meet. *For scale:* herds crossed the whole Sahel; it is on
Egyptian tomb walls. It survives in captivity in reasonable numbers.

**Addax** — *Left:* perhaps a few dozen wild, in one part of the Tin Toumma
desert in Niger. Possibly the rarest hoofed mammal on earth. *For scale:* tens of
thousands ranged the Sahara; oil roads and hunting from vehicles emptied it in a
generation.

**Great Indian Bustard** — *Left:* around 150, chiefly in Rajasthan. Power lines
are now the leading killer. *For scale:* widespread across the dry grasslands of
the subcontinent — it was nearly chosen as India's national bird.

**Orange-bellied Parrot** — *Left:* a few tens of wild birds. In 2016 only three
wild females came back from migration. *For scale:* a 45-gram parrot that crosses
240km of open sea twice a year; the migration wants hundreds behind it.

**Regent Honeyeater** — *Left:* around 300, so scattered that young males cannot
find an adult to learn the song from — they now sing other birds' songs.
*For scale:* flocks of hundreds moved through southeastern Australia's
box-ironbark woodland, most of which is gone.

**Cross River Gorilla** — *Left:* about 250, in roughly 11 fragmented groups on
the Nigeria-Cameroon border. *For scale:* the rarest gorilla. The mountain
gorilla, protected hard, has gone from 250 to over 1,000 — the same climb is
possible here.

**Saharan Cheetah** — *Left:* no firm count — it lives at about one animal per
4,000 km², the lowest density recorded for any big cat. *For scale:* thin by
nature, but it held the whole Sahara and Sahel; it is now gone from most of it.

**Hirola** — *Left:* between 300 and 500, on the Kenya-Somalia border. Not one in
any zoo anywhere. *For scale:* the last member of its entire genus — the most
endangered antelope on earth. Around 14,000 in the 1970s.

## The low hundreds to low thousands

**Kākāpō** — *Left:* around 250, every bird named and health-tracked, on a few
predator-free islands. *For scale:* once through all of New Zealand; the world's
only flightless parrot, and the heaviest.

**Sumatran Tiger** — *Left:* about 400 — the last tiger in Indonesia now that
Bali's and Java's are gone. *For scale:* the smallest surviving tiger. Sumatra's
forest could hold several times this if it stopped shrinking.

**Philippine Eagle** — *Left:* about 400 pairs. A pair needs 40 km² of old-growth
forest, and the Philippines has cut most of it. *For scale:* one of the largest
eagles alive; it raises one chick every two years, so recovery is slow by nature.

**Right Whale** — *Left:* fewer than 400 North Atlantic right whales, and almost
every death now is a ship strike or a rope. *For scale:* whaling took it to the
edge by 1900; the southern right whale, left alone, has recovered into the tens
of thousands.

**White-rumped Vulture** — *Left:* down more than 99% in about ten years to
diclofenac in cattle carcasses. India banned the veterinary drug in 2006;
recovery is slow. *For scale:* in the 1980s it may have been the single most
numerous large bird of prey on earth.

**Vulture** — *Left:* India's white-backed and long-billed vultures fell by over
95% in a decade to a cattle drug, and rabies in people rose as feral dogs
replaced them. *For scale:* tens of millions across South Asia — possibly the
most numerous large birds of prey on earth in the 1980s.

**Axolotl** — *Left:* possibly fewer than a thousand in the canals of Lake
Xochimilco. Millions live in aquariums. *For scale:* the lake system it evolved
in has been drained to a fraction and the rest is polluted; a wild population
wants the whole of it.

**Chinese Giant Salamander** — *Left:* wild numbers are close to functionally
gone; the streams are emptied and the farms hold millions. *For scale:* the
largest amphibian on earth, barely changed in 170 million years, once through the
mountain streams of central China.

## Larger, still falling

**Black Rhinoceros** — *Left:* around 6,400, recovered from a low near 2,400 in
the 1990s — but the western black rhino was declared extinct in 2011. *For
scale:* about 65,000 in 1970, and hundreds of thousands before the 20th century.

**Gharial** — *Left:* fewer than 1,000 breeding adults in the rivers of northern
India and Nepal. *For scale:* tens of thousands across the northern
subcontinent's rivers within the last century.

**African Penguin** — *Left:* around 10,000 breeding pairs, down over 97% since
1900. Uplisted to Critically Endangered in 2024. *For scale:* over a million
pairs around 1900; the collapse tracks the sardine fishery almost exactly.

**Yangtze Finless Porpoise** — *Left:* about 1,200 — the last cetacean in the
Yangtze, and the only porpoise that lives in fresh water. *For scale:* the river
also held the baiji dolphin until around 2006. A river this long should carry far
more.

**Tapanuli Orangutan** — *Left:* about 800, in the Batang Toru forest of Sumatra
— the rarest great ape on earth. *For scale:* described as a new species only in
2017; its lineage is the oldest of the three orangutans.

**Sumatran Orangutan** — *Left:* around 14,000, in the forests of northern
Sumatra. *For scale:* estimates put it several times higher within the last
century, before the lowland forest was cleared.

**Orangutan** — *Left:* the Bornean orangutan is around 100,000 and Critically
Endangered — the rate of loss, not the raw number, earns the listing. *For
scale:* about 230,000 in the 1970s; roughly half has gone since.

**Gorilla** — *Left:* the mountain gorilla has climbed from 250 to over 1,000 —
the one great ape whose numbers are rising, entirely by choice. *For scale:* the
eastern gorilla as a whole is Critically Endangered and still falling; the
mountain population is the exception.

**Indri** — *Left:* declining fast toward the low thousands; it has never once
bred in captivity, so its forest is the only ark it has. *For scale:* the largest
lemur alive, and a singer — eastern Madagascar's rainforest is a fraction of what
it was.

**Sifaka** — *Left:* falling across Madagascar as the forest is cut and burned;
several sifaka species are already down in the hundreds. *For scale:* a leaper
that cannot walk on the ground — it needs continuous canopy, and Madagascar has
lost most of hers.

**Pangolin** — *Left:* nobody has a global count — it is nocturnal, burrowing and
secretive. What is counted is the trade: something on the order of a million
taken in a decade, which makes it the most trafficked mammal on earth. *For
scale:* eight species across Africa and Asia, all of them declining together. The
scales are keratin, the same as a fingernail, and do nothing.

## Brought back from almost nothing, and still held up

These two are on the list for the opposite reason to the rest: their numbers are
**rising**, and both are still Critically Endangered. That is the honest shape of
a recovery — it takes decades, and it does not end.

**California Condor** — *Left:* over 500, about half of them flying wild. Every
wild condor is caught roughly twice a year and cleaned of lead. *For scale:*
twenty-two in 1987, when the decision was made to catch every single one. The
species is alive because people hold it up, and lead is still the leading cause
of death.

**Whooping Crane** — *Left:* over 800, up from 15 birds in 1941. Every whooping
crane alive descends from those 15. *For scale:* perhaps 10,000 before the
wetlands were drained. Eight hundred is a triumph and still a species that one
bad year could take.

## The ocean: percentages, not counts

Nobody counts sharks the way they count rhinos. What exists is the change: how
much of a monitored population is gone, and how fast. Those are the honest
figures, so those are the ones on the list.

**Hammerhead Shark** — *Left:* great, scalloped and smooth hammerheads are all
Critically Endangered — some monitored populations down 80% or more, mostly to
the shark-fin trade. *For scale:* they still school in the hundreds where they
are protected; that is what a healthy hammerhead coast looks like.

**Oceanic Whitetip Shark** — *Left:* some monitored populations have fallen more
than 90%, caught on the same longlines set for tuna. *For scale:* once one of the
most abundant large animals on earth — the open ocean was full of them.

**Angelshark** — *Left:* effectively gone from the whole Mediterranean; its last
stronghold on earth is the water around the Canary Islands. *For scale:* once an
ordinary commercial catch from Britain to North Africa.

**Hawksbill Turtle** — *Left:* roughly 8,000 nesting females worldwide, and still
hunted for its shell despite a global ban. *For scale:* likely in the millions
before the tortoiseshell trade; it keeps reefs from being overgrown, so its loss
is the reef's too.

**Kemp's Ridley Turtle** — *Left:* about 7,000 to 9,000 nesting females —
recovered from near-collapse, but stalled since the mid-2000s. *For scale:* a
1947 home movie caught around 42,000 nesting on one Mexican beach in a single
day; by 1985 the whole species made about 700 nests.

**Sawfish** — *Left:* every sawfish species is Endangered or Critically
Endangered; ranges have collapsed by 20 to 80% and it is gone from over 40
countries. *For scale:* a saw is the perfect shape to snag in a net — once common
in every warm shallow coast and river mouth.

**Coelacanth** — *Left:* a few hundred to perhaps a couple of thousand, on deep
rocky slopes off East Africa and Indonesia. *For scale:* known from
400-million-year-old fossils and thought extinct for 65 million years, until one
turned up in 1938.

## The reef and the seafloor

**Staghorn Coral** — *Left:* over 80% of the Caribbean's staghorn has died since
the 1980s — white-band disease, heat and storms. *For scale:* it builds thickets
fast, more than 10cm a year, turning flat rock into shelter for a whole reef
community.

**Sunflower Sea Star** — *Left:* roughly 90% gone since about 2013 to sea star
wasting disease; functionally extinct along the southern half of its range. *For
scale:* billions, from Alaska to Baja. Where it vanished, urchins ate the kelp
forests down to bare rock.

## The insects: measured as a share of what there was

**Rusty-patched Bumblebee** — *Left:* down about 87% and gone from most of its
range in roughly twenty years. Bumblebees are counted as occupied sites, not
individuals — it has vanished from most of the places it used to be. *For scale:*
one of the commonest bumblebees in the eastern US in the 1990s, an ordinary bee
in an ordinary garden. In 2017 it became the first bee listed under the US
Endangered Species Act.

---

## What still needs a real fact check

Rule 1 means the "Left" column carries no figure the game did not already state,
so a check of those lines is a check of the field guide — work that is already on
the Librarian's queue.

The "For scale" column is where this feature says something new, and ten lines
carry a number that appears nowhere else in the game. These are the ones to
verify first, in this order:

| Species | The claim to check |
| --- | --- |
| Hirola | around 14,000 in the 1970s |
| Orangutan | about 230,000 in the 1970s |
| Whooping Crane | perhaps 10,000 before the wetlands were drained |
| Cross River Gorilla | mountain gorilla from 250 to over 1,000 |
| Asiatic Cheetah | India's last three shot in 1948 |
| Black Rhinoceros | about 65,000 in 1970 |
| Right Whale | whaling took it to the edge by 1900 |
| Vulture | most numerous large birds of prey in the 1980s |
| Yangtze Finless Porpoise | the baiji gone by around 2006 |
| Staghorn Coral | grows more than 10cm a year |

Twenty-eight further "For scale" lines carry no figure at all — they are shape
rather than measurement, and they are the ones to read for tone rather than for
arithmetic.

Every sentence in `game.part86.jsx` is a claim about a real animal, so the whole
file belongs in the Librarian's register rather than in anyone's memory.
