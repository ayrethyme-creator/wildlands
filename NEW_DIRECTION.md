# New Direction — working notes

This is the initiation document for the new game. It is a **container for
Ayr's ideas**, written down as they have them, in their words. Nothing here is
invented or proposed by Claude unless it is explicitly marked as such.

---

## Status

Brainstorming. Twenty opening ideas captured 2026-08-24. Almost nothing is
settled yet — the Ideas section is the record of intent, not a spec.

---

## Where this sits

| | |
|---|---|
| Branch | `wildlands-next` |
| Branched from | `main` at `17f3bad` |
| Date started | 2026-08-24 |
| Tag of the pre-branch state | `v1-safari-saga` |

**`main` is untouched and stays the live game.** GitHub Pages deploys from
`main` only, so <https://ayrethyme-creator.github.io/wildlands/> keeps serving
Safari Saga exactly as it is now, and it can still be updated any time by
switching back to `main` and pushing. Work on this branch is invisible to it.

Eric also pushes to `main`. That is another reason the new direction lives on
its own branch — his work and this work cannot collide until somebody
deliberately merges them.

### What this branch inherits

Everything Safari Saga currently is, at `17f3bad`: 1000 species with finished
art, 100 mythics, the map/battle/dex/save systems, seventeen conservation
investigations, clue gating and corridor placement.

Note that idea 13 removes gyms, battles and trainers, which is a large part of
what is inherited. The art, the species data, the dex and the investigations
survive that; the battle system largely does not. Nothing has to be deleted
early — the old game is safe on `main` regardless.

---

## Ideas

*Ayr's, 2026-08-24, in their words. Grouped by subject for reading, not
reordered by priority and not filtered.*

### The world

**1. Seed generated game.**

**5.** A seed generated world but **similar to the way Diablo does it: still
maintains themes for the different regions** ie: savanna, ocean, jungle etc.

**9.** Day and night cycles, and seasons.

**12. UNDECIDED —** "I don't know if I want to use the real world map or a
made up world yet."

### Who you are

**2. Three main character choices, each a different "career" with unique
abilities:** photographer, researcher, tour guide.

**3.** The three career options **still allow the ability to customize your
avatar**.

### Life stages

**6.** Life stages: **start as a kid, then a teen, young adult, adult with
skills, adult with power money and influence, elder who mentors others.**

**7.** The **kid stage is the basic tutorial**, and lays out some story and
personality. **The teen stage is where you choose your career path**, plus a
tutorial for the abilities of that specific choice. "and maybe you chose
friends that will help you throughout the game."

**8. The real game starts at young adult.**

### Animals and befriending

**9.** You still have the ability to **befriend all 1000 of the animals**, but
it will **depend heavily on what area you're in**.

**10.** "I need to design the **befriend encounter mechanic way different**
from the current game."

**19.** Some animals **can't** come to the facilities (like great white
sharks), but instead there are **areas in the biome where you can interact
with them in the wild almost guaranteed** — swimming with sharks and whales,
visiting beaver ponds, fields where moose graze.

### Conflict, story and progression

**11.** Keep the concept of **solving problems the locals are having, and
problems industries are causing.**

**13. No gyms, no battles, no trainers.** Maybe the "trainer battles" are
instead **personal encounters with people you have to convince**, using info
you gather from the field and research — **the player actually reading the
info.**

**16.** The "gym battles" — the way you advance the story — is by going to
**certain sections of each biome that have a fixed plot** with characters and
goals.

**17.** These goals and challenges are **the furthering of your career by
making an actual difference for the animals.**

### Facilities

**18.** Some goals are **building facilities. Each biome will have a facility
you build**, based on **real life zoos and wildlife recovery centers.** It is
like a **mini game**: you **hire people, choose the animals from that biome
you've befriended, and name them.**

- **Not all animals will do well in captivity. Some will be catch and
  release.**
- They all have **difficulty levels that can change** as you gather more info
  from the field and from passing tests in the guide.

### Learning

**14. Read aloud option** for the info in the guide.

**15. Tests you can take from the guide** to practice your knowledge.

### Influences

**4.** Pulling ideas from: **Pokémon** obviously, but also **Pokémon Snap,
Stardew Valley, Diablo, and Minecraft.**

### Bar for quality

**20.** "Music, art, and game play will be **professional level**. This game
may take years, and **I'm ok with that**. I do however want to keep it
**relevant and fun, and competitive to what's on the market**."

---

## Ideas — round two

*Ayr's, 2026-08-24. Breed and species names are spelled to their standard
forms so the doc can be used as a reference; everything else is their wording.*

### Pets, and the first rescue

**21. You choose a pet as a kid, and then another more exotic one as a teen.**

**22.** "Maybe your **first encounter in the wild** (your backyard or
neighborhood) can be **something you rescue and raise** — like a baby bird or
small mammal."

**23. Kid pet options.** Each animal has breed options.

| Type | Options |
|---|---|
| Cat | **Long hair, short hair, no hair — as breed, not cosmetic.** Separately: **indoor, outdoor/indoor, stray — this defines personality.** |
| Dog | **Small:** chihuahua, dachshund, pug. **Medium:** corgi, basset hound, pit bull. **Large:** husky, golden retriever, German shepherd. "2-3 breed choices for each that match temperaments." |
| Fish | goldfish, betta, tadpole |
| Reptile | snake, bearded dragon, tortoise |
| Small mammal | rabbit, rat, hamster |

**24. Teen animal options.**

| Type | Options |
|---|---|
| Birds | parakeet, rescue parrot |
| Other small mammals | chinchilla, ferret |
| Fish tank | saltwater or freshwater; crabs, axolotl, eels |
| Farm animals | goat, chicken, pig, cow, horse |

**25. The mentor.** "You meet your mentor when you **rescue your first animal
from the wild**. The mentor will **follow your career** and be the **help
button**."

**26. What the rescued animal should be.** "My goal is for the animal you
rescue to be **hand reared as a baby, but partially living in the wild**. A few
choices. But I want **animals that live a long time, or will easily pass along
its babies, like a deer would. But long lived animals mainly.**"

**SETTLED 2026-08-24 — four choices, locked:** box turtle, raven, beaver,
white-tailed deer. Chosen to be four genuinely different relationships rather
than four variations on one:

| | what it gives the player |
|---|---|
| **Eastern box turtle** | The one that outlives you. 30–50+ years, a home range of a few acres so it stays in your woods without being kept. |
| **Raven** | The one that knows your face. Corvids recognise individual people, remember for years, and teach that recognition to their offspring. |
| **Beaver** | The one whose work reshapes the place. 10–20 years, kits stay two years to help raise the next litter, and the pond visibly widens and matures across the life stages. |
| **White-tailed deer** | The one whose daughters are still here. Does are philopatric — daughters settle beside their mothers, so a matriline builds up in the same woods over decades. |

Ayr's original candidates were crow, a raptor, fox, raccoon and squirrel. Fox,
raccoon and squirrel were dropped on the numbers — see **Reference: lifespans**
below. Porcupine was offered as a no-caveats alternative to beaver and not
taken.


---

## Reference: lifespans for the rescued animal

> **Claude-contributed**, in answer to Ayr's question in idea 26. Facts, not
> design proposals — the choice is hers.

**The single most important thing here: wild and protected lifespans are not
close.** For most small backyard mammals the wild figure is dominated by
first-year deaths — predation, cars, starvation — not by old age. A hand-reared
animal that is fed, sheltered and treated when sick lands somewhere between the
two columns, which matters a lot given that idea 26 wants exactly that.

| Animal | Typical in the wild | Protected / recorded maximum |
|---|---|---|
| Eastern box turtle | **30–50** | 100+ recorded |
| Common raven | 10–15 | 40+ |
| Great horned owl | ~13 | 28 wild-banded, 30–40 captive |
| Red-tailed hawk | 10–15 | ~30 wild-banded |
| Canada goose | 10–24 | ~33 |
| American crow | 7–8 average, 15–17 reachable | ~30 |
| White-tailed deer | 6–14 | ~20 |
| Barred owl | ~10 | 24 |
| **Grey squirrel** | **~6** | up to 20 |
| **Red fox** | **3–5** | 12–14 |
| **Raccoon** | **2–3** | ~16, 20 captive |
| Barn owl | 2–4 | 15–20 |

### On the five Ayr named

- **Crow — yes.** Clears 15 and has a property nothing else on this list has:
  crows recognise individual human faces, remember them for years, and *teach
  that recognition to their offspring*. Young crows also often stay with the
  family group to help raise the next brood. That is idea 26's "or will easily
  pass along its babies" satisfied literally — the bird you raised could have
  descendants that still know you decades later.
- **Raptor — yes.** Red-tailed hawk or great horned owl both clear it
  comfortably. Falconry is already the model idea 26 is describing: hand-reared,
  flies free, comes back.
- **Fox — no**, not in the wild. 3–5 years typical. Long-lived only if
  effectively kept.
- **Raccoon — no**, not in the wild. 2–3 years typical, though they reach 16–20
  when protected.
- **Squirrel — no**, not in the wild. About 6 years, with most dying in year one.

### Worth considering, not on Ayr's list

- **Eastern box turtle** — the longest-lived option by a wide margin, 30–50+
  years and sometimes a century. Its home range is only a few acres, so it
  genuinely stays in your woods without being contained, and it is a common
  backyard find. A slow, permanent, quiet counterpart to a bird.
- **Canada goose** — imprinting on a hand-reared gosling is real and well
  documented, and it migrates and returns, which is a striking way to mark the
  passing of the life stages.
- **Common raven** — everything the crow offers, longer-lived and more dramatic,
  but less of a backyard animal than crows are.


### Mammals — answering "is there a mammal that would work?"

> **Claude-contributed**, 2026-08-24. Ayr has kept **box turtle** and **raven**
> from the list above and asked whether a mammal fits, particularly a deer for
> the passing-on-offspring idea.

| Mammal | Typical in the wild | Why it does or does not fit |
|---|---|---|
| **Beaver** | **10–20** | Long-lived *and* generational, and builds something that visibly persists |
| **Porcupine** | up to ~18 | Genuinely long-lived, docile, woodland, low drama |
| **White-tailed deer** | 6–14 (to ~20 protected) | Moderate lifespan, but the offspring behaviour is exactly right |
| River otter | 8–15 | Charismatic, semi-aquatic, a rehab staple |
| Opossum | 1–2 | No |
| Groundhog | 3–6 | No |
| Coyote | 6–8 | Short, plus the taming problem below |

**Deer, for the offspring idea — the real mechanism is better than a game
conceit.** Female white-tailed deer are *philopatric*: a doe stays in the home
range she was born in for life, and her daughters establish their own ranges
directly adjacent to hers. The result over years is a matriline — a group of
related does in the same patch of woods, all descended from one female. Sons
disperse and leave. So a fawn you hand-reared as a kid could, by the elder
stage, be the origin of a small related herd in the same woods, and that is
simply what deer do.

**The honest caveat on deer.** Hand-reared deer that lose their fear of people
are a serious and well-known problem in wildlife rehabilitation — bucks in
particular become genuinely dangerous at maturity during the rut, and
habituated deer often end up destroyed. In many places rearing one is also
illegal without a licence. This is not a reason to drop the idea. It may be the
strongest teaching beat available: the animal you loved cannot stay tame, and
raising it wrong is what makes it dangerous. That is a real lesson the game
could carry rather than a problem to design around.

**Beaver is the strongest single mammal**, because it satisfies both halves of
idea 26 at once. It lives 10–20 years in the wild. Kits stay with the family
for about two years and help raise the next litter, so the generational
element is there too. And it is the only candidate that *builds* — a pond that
appears, widens and matures across the life stages is a visible record of the
years passing, which nothing else on this list gives. Idea 19 already has
beaver ponds as a wild-encounter site.

**Porcupine** is the low-drama long-lived option: slow, arboreal, common in
woodland, easy to hand-rear, no aggression problem, and it clears the fifteen-
year bar without any caveats attached.


---

## The biome list

> **Derived from the data, 2026-08-24**, at Ayr's request: build the biomes
> from the animals we actually have, excluding late-game content, real-world
> based. Classifier lives in `design/biomes.js`.

### What was counted

Of the 1000 species, **651 are live present-day adults** and those are what the
biomes are built from:

| | count | why excluded |
|---|---|---|
| Live adult species | **651** | — |
| Juveniles | 81 | follow their adults, not separate placements |
| Fossil / mythic / legendary / warden | 166 | late-game content, per Ayr |
| Extinct, extinct-in-wild, memorial | 102 | late-game content, per Ayr |

### How they were assigned

Not by hand. Two signals, in order, then nine by hand:

1. **The habitat sentence** in each species' field-guide entry — 395 placed.
   Preferred because it describes a *place* ("Rainforest floor of Central and
   South America") rather than a continent.
2. **Where Safari Saga already put it** — 247 placed. About a third of habitat
   strings name only a region ("Africa, Asia and Oceania"), and the existing
   zone encodes a biome judgement somebody already made by hand.
3. **Nine overrides** for species neither signal caught.

**All 651 place. Nothing is unassigned.**

### The twelve

| Biome | Species | Notes |
|---|---|---|
| **Savanna & Grassland** | 90 | Largest. Plains, steppe, veld, pampas. |
| **Temperate Forest** | 87 | Includes taiga — only 4 boreal species, and they are forest animals. |
| **Tropical Rainforest** | 73 | Floor and canopy both. |
| **Mountains & Alpine** | 73 | Absorbs the old "volcanic" and "summit" zones. |
| **Coast & Kelp** | 65 | Shore, estuary, mangrove, and the kelp forest folded in. |
| **Wetlands & Rivers** | 53 | Freshwater generally — rivers, lakes, marsh, swamp. |
| **Farmland & Town** | 49 | The human-edge biome. Sparrows, foxes, the stray cat. |
| **Desert & Arid** | 46 | Includes the Australian outback. |
| **Coral Reef** | 44 | |
| **Open Ocean** | 32 | Pelagic plus the deep sea, which is reached through it. |
| **Polar** | 29 | Tundra and sea ice as one place rather than two thin ones. |
| **Caves** | 10 | **Too thin to be a full biome — see note.** |

### Four things folded in, and why

The raw classifier produced 16, of which four were too thin to carry a facility
and a story arc of their own: **taiga (4)** into temperate forest, **kelp (12)**
into coast, **deep sea (11)** into open ocean, and **sea ice (11)** with
**tundra (18)** combined into polar.

### The cave problem

Caves came out at 10 species — real, distinctive, and not enough to justify a
facility or a story arc. **Suggestion, not a decision:** make caves a *site
type* rather than a biome, in the sense of idea 19 — a place inside another
biome where a guaranteed encounter happens, alongside the beaver ponds and the
moose fields. That keeps bats and cave fish without pretending there is a cave
facility to build.

### Fit against the rest of the design

- **Facilities (idea 18):** eight land biomes support a zoo or recovery centre;
  reef, open ocean, coast and polar are aquarium-shaped. Twelve facilities is a
  lot of content — worth deciding whether every biome gets one.
- **Seeded regions (ideas 1, 5):** twelve themed region types is a good number
  for Diablo-style generation — enough variety that a seed feels different,
  few enough that each can be authored properly.
- **Real-world basis (idea 12 still open):** these twelve are all real biomes,
  so they work whether the map ends up being the real world or invented.


---

## Ideas — round three: what a quest is

*Ayr's, 2026-08-24.*

**27.** Twelve biomes and twelve arcs confirmed. "Within these biomes the
species are **so vast and diverse, they each need a story**."

**28.** "Each biome will have **multiple quests that are mini story lines that
end in saving or fully researching an animal that represents its species**."

**29.** Not every animal needs a quest. "Some animals will **just be a wild
encounter and it shows up at the facility**, like a porcupine or sugar glider
for example."

**30. The scale of a quest changes.** "I want the quests to **not be small like
they currently are. A badger bothering one farmer is too small** for what I
have in mind. I want quests more similar to the **guard dog program for
cheetahs**, the **lion lights**, whatever story ends in things like **legal
protections on sea otters** and stuff like that. **Actual history.**"

This supersedes the scale of Safari Saga's seventeen investigations, which
were deliberately local and personal — one beekeeper, one fen, one farmer.
The new target is documented conservation history with a national or
international outcome.

> **Correction, for accuracy since these are real programmes.** The cheetah
> guard dogs are **Anatolian shepherds** (and Kangals), not Bernese or Burmese
> mountain dogs — run by the Cheetah Conservation Fund in Namibia since 1994.
> The other two are exactly right: **Lion Lights** was invented by Richard
> Turere, a thirteen-year-old Maasai boy in Kitengela, Kenya, around 2011; and
> the **sea otter** story runs from the 1911 North Pacific Fur Seal Convention
> — the first international wildlife treaty — through the 1972 Marine Mammal
> Protection Act.

---

## Reference: real conservation history, by biome

> **Claude-contributed**, 2026-08-24. Candidate true stories at the scale idea
> 30 describes. Not a decision about which get used — a starting shortlist so
> the quest design has real history to draw on.

### Savanna & Grassland
- **Lion Lights** (Kenya, 2011). A thirteen-year-old invents flashing LEDs
  around cattle bomas that mimic a person walking with a torch. Lion killings
  by herders drop; the design spreads across Kenya and beyond.
- **Cheetah Conservation Fund guard dogs** (Namibia, 1994–). Anatolian
  shepherds placed with farmers cut livestock losses dramatically, so farmers
  stop shooting cheetahs. The animal is saved by giving somebody a dog.
- **Operation Rhino** (South Africa, 1960s). Ian Player moves southern white
  rhinos out of the last reserve holding them; from roughly fifty animals to
  thousands.

### Temperate Forest
- **Wolves to Yellowstone** (1995). The most studied reintroduction there is,
  and a genuine argument about how much of the trophic cascade is real.
- **European bison** — the entire species rebuilt from 54 captive animals, all
  living wisent descended from twelve.
- **Beavers back to Britain** (Knapdale 2009, Devon) — from illegal releases
  and legal fights to protected status.

### Tropical Rainforest
- **Golden lion tamarin** (Brazil). From a few hundred to several thousand via
  captive breeding, reintroduction and replanted forest corridors.
- **Mountain gorilla** — the only great ape whose numbers are rising, through
  community conservation and tourism revenue sharing.

### Mountains & Alpine
- **California condor** — every remaining wild bird taken into captivity in
  1987, twenty-two individuals, then bred back out.
- **Snow Leopard Enterprises** — herders earn more from handicrafts than they
  lose to predation, conditional on not killing snow leopards.
- **Bearded vulture** reintroduced to the Alps after extermination.

### Coast & Kelp
- **Sea otters** — the story Ayr named. Hunted to perhaps a thousand animals
  worldwide; the 1911 treaty; a relict Californian group of about fifty near
  Bixby Creek; and the kelp forests that come back with them.
- **Project Puffin** (Maine, 1973). Decoys and mirrors persuade puffins to
  recolonise an island they had been shot off a century earlier.

### Wetlands & Rivers
- **Whooping crane** — fifteen birds in 1941; captive breeding, costume-reared
  chicks, and migration taught by ultralight aircraft.
- **Otters return to Britain** after the organochlorine pesticide ban.

### Farmland & Town
- **Peregrine falcon and DDT** — Silent Spring, the 1972 ban, and city
  skyscraper nest boxes.
- **Corncrake recovery** — changing when and how fields are mown.

### Desert & Arid
- **Arabian oryx** — extinct in the wild in 1972, bred in zoos, released in
  1982; the first species ever downlisted from Extinct in the Wild.
- **Arid Recovery / predator-free fenced reserves** (Australia) for bilbies
  and bettongs.

### Coral Reef
- **Cabo Pulmo** (Mexico, 1995). A fishing village declares its own no-take
  zone; fish biomass rises many times over and the fishers end up better off.
- **Palau shark sanctuary** (2009), the first national one.

### Open Ocean
- **The whaling moratorium** (1982/86) and the humpback recovery that followed.
- **Turtle excluder devices** — already an arc in Safari Saga, at a much
  smaller scale; the real version is a fishery-wide regulatory fight.

### Polar
- **The 1973 polar bear agreement** — five Cold War rival nations signing a
  wildlife treaty across an iron curtain.
- **Ross Sea marine protected area** (2016), the largest in the world.

### Caves (site type)
- **White-nose syndrome** response, and gating mines and caves to protect
  roosts without sealing the bats in.


---

## Ideas — round four: how quests and ages fit together

*Ayr's, 2026-08-24.*

**31.** "I still want **all of the animals researchable**, whatever that means."

**32. Each age period should have quests in each biome.** "I know that's a
lot."

**33.** Completing a quest line is an **automatic befriend** for its animal.

**34.** "Maybe **the first time you enter a biome you're immediately there on a
quest already**, that you got from completing the last quest from the previous
biome." — biomes hand you off to each other rather than being chosen off a menu.

**35. Difficulty depends on AGE, not biome.** Savanna can carry quests built on
real conservation stories of single species — lion, cheetah, rhino, elephant,
giraffe, hippo. Animals without a big real-life story are **wild encounters as
you travel the terrain** — meerkat, serval, porcupine.

**36. What it has to be at once.** "I do want this to be **educational for me
and people who already know a lot**... but it also needs to be **fun, engaging,
and focused on exciting game play so people actually want to play it**." And:
"I want the world to feel **real and alive**."

**37. On scope.** "This is a BIG project. Eric said it could turn into my
life's magnum opus." And, clear-eyed: "I know it's not something I can work on
with just you forever, not at the scope I'm imagining. And that's ok."

### Note on 35 — the arithmetic

Six life stages across twelve biomes is **72 quest lines**. If the kid and teen
stages stay in the home biome as tutorials (ideas 7 and 8), it is **48** for the
four adult stages, plus two tutorial sets. Either number is very large at the
scale idea 30 asks for. Worth deciding deliberately rather than by default —
possible shapes include fewer stages spanning all biomes, or all stages but not
every biome carrying a quest at every stage.

### Note on 35 — why age-based difficulty is a good call

It makes the world **non-linear**. Any biome can be visited at any stage, which
suits the seeded-world and Diablo influences far better than gated regions
would, and it means idea 34's hand-off can send the player anywhere rather than
along a fixed track.


---

## Reference: the "small" animals have stories too

> **Claude-contributed**, 2026-08-24, answering Ayr's aside in idea 35 — "maybe
> those animals do have complex conservation stories."

**They do, and some of the biggest stories in conservation belong to the least
glamorous animals.** This matters for idea 36: a game that only tells lion and
elephant stories teaches the same thing every wildlife documentary already
does. The under-known ones are where a player who already knows a lot would
actually learn something.

### The three Ayr named as "just encounters"

- **Meerkat.** No conservation crisis — but the **Kalahari Meerkat Project**
  has followed habituated wild groups continuously since 1993, one of the
  longest-running mammal studies anywhere. Meerkats are why we understand
  cooperative breeding and sentinel behaviour, and they are one of the very few
  animals shown to *teach*: adults bring pups live scorpions with the stings
  removed, then progressively more dangerous ones. That is a research story
  rather than a rescue story — which is exactly the second half of idea 28,
  "saving **or fully researching**".
- **Serval.** Low conservation concern, but servals are the parent stock of the
  **Savannah cat**, and both the hybrid trade and the wild-caught exotic pet
  trade run through them. It connects directly to the rescue-and-surrender
  material already sketched for the Hearth arc.
- **Porcupine.** Persecuted as a crop pest across its range, hunted for meat
  and quills — and in Asia, **porcupine bezoars** (stony masses from the gut)
  sell for extraordinary sums in traditional medicine, driving targeted
  poaching of an animal nobody thinks of as poached.

### The under-known story that beats most famous ones

- **The Asian vulture crisis.** In the 1990s the veterinary painkiller
  **diclofenac**, given to cattle, proved lethal to *Gyps* vultures that fed on
  the carcasses. Three species crashed by **over 97%** in roughly a decade —
  among the fastest declines ever recorded in any bird. Then the second-order
  effect: with no vultures to clear carcasses, feral dog numbers rose sharply
  and India recorded a surge in rabies exposure. A painkiller for cows became a
  human public health emergency by way of a bird nobody was looking at. India
  banned veterinary diclofenac in 2006 and the populations are only now
  beginning to recover.

### Others worth knowing

- **Pangolin** — the most trafficked wild mammal on earth.
- **Horseshoe crab** — its blue blood is used to test that every injectable
  medicine is free of bacterial contamination, and the red knot's entire
  migration depends on its eggs.
- **Saiga antelope** — 200,000 died in a matter of weeks in 2015 when a normally
  harmless gut bacterium turned lethal in unusual heat and humidity.
- **Axolotl** — functionally extinct in the wild, down to the canals of Lake
  Xochimilco, while hundreds of thousands live in tanks worldwide.
- **Bumblebees** — Franklin's bumblebee has not been seen since 2006.

### The design consequence

Idea 35's split — big-story species get quests, the rest are encounters — is
sound as a *structure*. But which animals fall on which side should be decided
from the real record rather than from fame, or the game will quietly teach that
charismatic animals matter and small ones do not. A meerkat encounter that
mentions the thirty-year study, or a vulture quest about diclofenac, costs the
same to build as a lion quest and teaches more.


---

## Ideas — round five: what is left over, and what catching one gives you

*Ayr's, 2026-08-24.*

**38. The leftovers are the collection.** Once the conservation stories are
chosen across every timeline and every biome, **whatever animals are left over
become wild encounters** — "so there's still that **gotta catch em all** feel
that is so much fun."

**39.** Seasons and times of day, restated (see idea 9).

**40. Micro-regions inside biomes.** "Having micro regions within those biomes
is a good idea too, like with the cave." — generalises the cave suggestion into
a rule: biomes contain smaller distinct places.

**41. What a successful catch gives you.** Two possible outcomes, and it can be
either:

- **The info, plus a place to go and visit it** — like the moose pasture in
  idea 19.
- **An actual individual of that species becomes viewable at the zoo or
  sanctuary, with a story**, the way Safari Saga does it.

**42. The player names it.** With **suggested names drawn from the language of
the place the animal actually comes from** — "like how they often name animals
at zoos in real life."

### Already built, and worth reusing (Claude note)

Idea 41's second branch is not a blank page. Safari Saga already has an
`INDIVIDUALS` table in `game.part49.jsx`: **39 hand-written individual animals**,
each with a name, a sex, a story and a note about when they arrived — plus
`individualOf()`, a deterministic fallback that gives any unlisted species a
stable generated individual rather than nothing.

Some of those names already follow idea 42's convention without it having been
stated: the station goat is **Ntate**, which is Sesotho. So the instinct is
partly in the existing game and can be made into a rule rather than invented.

For the suggested-names feature, the origin data also already exists — every
species carries a habitat sentence naming its real region, which is what a name
list would be keyed off.

### Note on 38 (Claude note)

This resolves the arithmetic worry from idea 32 rather than adding to it.
Quests do not have to cover 651 species — they cover the ones with real
stories, and everything else is still collectable through encounters. The
"catch em all" goal stays intact while the authored content stays finite.


---

## Ideas — round six: what a quest *is*, and how careers relate

*Ayr's, 2026-08-24.*

**43. Naming and language, deferred.** Ayr agrees the origin-language naming
needs to be sourced properly rather than automated, "and that's something
easier to do later." Deferred, not dropped.

**44. The quests are NOT the arcs already written.** "I don't want the quests to
be the animal stories we have already written. I want the quests to be
**learning about the conservation story**, and once you've completed that quest,
**you get access to that animal instead of encountering it in the wild**."

**45. Scope, eyes open.** "I know that's a lot. I also know that most games,
RPGs and simulators and lots of others **take 40 hours to finish the main
story** and then have **lots of post game content** to keep the fun going."

**46. One world, three lenses.** "I want the quests to be **the same in each
career**, the **map and progression and people you meet be the same** — just
you come from a **different angle** because you have a different career and a
**different game mechanic**."

### Note on 46 — this is the single biggest scope decision so far (Claude note)

It means the content is authored **once**, not three times. The careers differ
in *mechanic* and *angle of approach*, not in what exists in the world. So the
quest arithmetic is ~48 quest lines total rather than ~144, and the three
careers multiply replay value instead of multiplying build cost.

It also gives each career a clear job to do inside the same scene: the
photographer has to *see* it, the researcher has to *measure* it, the tour
guide has to *explain* it to someone. Same lion, same herders, same night.

### Note on 44 — what carries over from Safari Saga, and what does not

The seventeen investigations do **not** become quests; they stay with Safari
Saga on `main`. But their *structure* is worth keeping even though their
content is not:

- evidence gathered in the field before you may propose anything
- several proposals, all plausible, only one of which works
- wrong answers that fail for **specific, real, stated reasons**
- no villains — everybody in the situation is behaving reasonably
- outcomes that can half-work

That shape is exactly what idea 44 describes as "learning about the
conservation story", applied to documented history instead of invented local
conflicts.

### Note on 45 — what 40 hours implies

If the main story is roughly forty hours across twelve biomes, that is around
three hours per biome, and the leftover species from idea 38 plus the
facilities from idea 18 are the post-game. Useful as a sizing constraint to
design against rather than discover late.


---

## Ideas — round seven: villains do exist

*Ayr's, 2026-08-24.*

**47.** "I agree for the most part everyone is being reasonable, **but sometimes
there are villains**. Poachers, corporations where their bottom line matters
more than morals. And yes, I know that with poachers, a lot of them are people
who **don't know there's an alternative** to making money, or one doesn't exist
and **one needs to be created**. But sometimes there are just people who **want
to kill animals for parts**. And the greedy corporations. I think those should
be **addressed and handled appropriately** too."

### What this changes (Claude note)

Safari Saga's rule was "no villains — everyone is behaving reasonably". That
becomes a **default rather than a law**: most conflicts have no villain, and
some do.

This is the stronger teaching position, not the softer one. Telling the two
apart is a real conservation skill: a herder killing lions to protect his
cattle and an organised horn-trafficking network are not the same problem and
do not have the same answer. A game where everyone turns out to be reasonable
teaches a player to look for the win-win even when there isn't one.

Ayr's own distinction is the useful one to build on — subsistence poaching where
no alternative livelihood exists is a problem to **solve**, and commercial
trafficking or a corporation knowingly externalising harm is something to be
**opposed**. Same act, different situation, different correct response.

---

## Reference: how long games actually are

> **Claude-contributed**, 2026-08-24, researched at Ayr's request. Figures are
> community-reported averages, so treat them as ranges rather than precise.

| Game | Main story | Completionist |
|---|---|---|
| New Pokémon Snap | ~10 h | 70–80 h |
| Breath of the Wild | 25–30 h | 100 h+ |
| Elden Ring | ~30 h | ~135 h |
| Pokémon Scarlet/Violet | ~32 h (25–35) | 70–80 h |
| Planet Zoo (career mode) | ~40 h (up to ~57) | 100 h+; average tracked playtime **212 h** |
| Red Dead Redemption 2 | 50–60 h | 170–190 h |
| Stardew Valley | ~52 h | 150–200 h |
| The Witcher 3 | ~52 h | ~180 h |
| Subnautica | ~60 h first run | varies widely |

### What this says about idea 45

**Ayr's forty-hour instinct was right.** Main stories cluster between 25 and 55
hours, and the three closest comparisons land almost exactly on it: Pokémon
Scarlet/Violet at 32, Planet Zoo's career mode at 40, Stardew at 52.

Two things worth taking from the table beyond that:

1. **The main story is not where the hours are.** Completionist figures run
   three to five times the main story in every case. The shape the market
   actually rewards is a focused main story with very deep optional content —
   which is exactly what ideas 38 and 18 already describe. The leftover species
   and the facilities *are* the post-game, and they are where a 40-hour game
   becomes a 200-hour one.

2. **Planet Zoo's average tracked playtime is 212 hours**, far beyond its ~40
   hour career mode. Management sims retain people almost indefinitely because
   the building never really ends. That is the strongest argument yet for the
   facility mini-game being a major system rather than a side feature.

**One caution.** New Pokémon Snap is the shortest game on the list at about ten
hours, and it is the closest existing thing to the photographer career played on
its own. Photography alone does not carry forty hours. It works here because it
is one lens on a much larger structure — which is precisely what idea 46 sets
up.


---

## Ideas — round eight: the Birth by Sleep model

*Ayr's, 2026-08-24.*

**48.** The three careers can follow a structure like **Kingdom Hearts: Birth by
Sleep** — its three protagonists (Terra, Ventus, Aqua) as a model for
mechanics, story timing and story pacing.

### How Birth by Sleep actually works (Claude note, researched)

- **Three separate campaigns** over the **same ten worlds**, each visited in a
  **different order** by each character.
- **Each world's story is split three ways**: one character sees the *setup*,
  another the *unfolding*, another the *climax*. No single campaign contains
  the whole of any world's story.
- The three narratives **run parallel and intersect** — characters sometimes
  pass each other, and one explains what another only glimpsed.
- **Genuinely different combat**: Terra slow and powerful, Ventus fast, Aqua a
  magic and barrier specialist.
- A recommended play order (Terra, Ventus, Aqua) and a **Final Episode** that
  unlocks only after all three are finished.
- **The known criticism**: replaying the same worlds three times gets
  repetitive, and the fighting styles are doing most of the work of keeping
  them distinct.

### Why this fits unusually well here

The split-story device is not just structurally convenient, it is
**thematically exact** for a conservation game. The whole premise of the
existing investigations is that nobody has the full picture on their own:

- the **photographer** sees the animal
- the **researcher** sees the data
- the **tour guide** sees the people

Three careers each holding one third of the truth is what conservation actually
looks like, so Birth by Sleep's structure would be carrying meaning rather than
just providing variety.

It also lines up with decisions already made: different world order per
character is idea 34's biome hand-off and idea 35's non-linear difficulty, and
the Final Episode maps onto the elder-mentor life stage from idea 6.

### The trap, and how to avoid it

Birth by Sleep's repetition complaint is the thing to design against. The
mitigation is its own best idea, applied harder: **do not send all three
careers through the same events in the same places.** If the photographer is
present when a problem starts, the researcher during the investigation, and the
guide at the resolution, then a second playthrough *adds* rather than *repeats*.

The three careers here also differ far more than Birth by Sleep's do —
photographing, measuring and explaining are different verbs, where Terra,
Ventus and Aqua are three flavours of the same combat.

### The open question this raises

**Is one career a complete experience, or do you need all three?**

- Birth by Sleep requires all three for the story to resolve. At a 40-hour
  campaign that is 120 hours to see the ending, which is a very large ask.
- The alternative is that one career is a whole, satisfying game, and the other
  two are optional depth that recontextualises what you already saw.

Not decided. It affects how long each campaign should be, and whether the
"full picture" is a reward or a requirement.


---

## Reference: other games with interlocking multi-perspective stories

> **Claude-contributed**, 2026-08-24. Birth by Sleep is not unusual — this is a
> recognised structure with a long lineage and several acclaimed executions.

| Game | Shape | What it proves |
|---|---|---|
| **13 Sentinels: Aegis Rim** | **13** protagonists, non-linear, heavily interlocking | The model scales far past three, and it is the most critically praised execution of it |
| **Fire Emblem: Three Houses** | 3 routes, same world, same cast, same timeline | Closest comparison. **35–80 h per route.** Each route is complete alone; the full truth needs all three |
| **NieR: Automata** | Sequential routes A/B/C, each recontextualising the last | A second run can be the *point* rather than a replay — famous for it |
| **Resident Evil 2** (1998) | Two scenarios, "Zapping System" | One character's actions **change** the other's playthrough |
| **The Last of Us Part II** | Two protagonists, the same days from opposing sides | The other side's version can reframe what you thought you saw |
| **Odin Sphere** | Five "books", same events, five protagonists | Same-events-different-eyes works in a compact package |
| **Grand Theft Auto V** | Three protagonists, one city, **switch at will** | Removes repetition entirely — you never replay, you swap |
| **Halo 2** | Alternating between two sides of the same war | Short guest sequences can carry a second perspective cheaply |

---

## The four options for idea 48

> **Claude-contributed**, 2026-08-24, in answer to Ayr asking for options with
> lengths and trade-offs. **Nothing here is decided.**

### Option A — Full Birth by Sleep: all three required

Three campaigns of about **13 hours each, ~40 h total**, each covering all
twelve biomes but seeing only a third of each story. A final episode unlocks
after all three.

- **Cost:** one set of content, three sets of mechanics. Cheapest of the "all
  three" options.
- **For it:** the theme is enforced rather than offered — you literally cannot
  know the whole story from one career.
- **Against it:** no single career is satisfying alone. And it **collides with
  the life stages**: six stages in thirteen hours is about two hours each,
  which is not enough for a life.

### Option B — Three complete campaigns: the Three Houses model

Three campaigns of about **40 hours each, ~120 h for everything**. Each career
plays the full arc through all six life stages.

- **Cost:** highest. Even sharing a world, each route needs enough distinct
  content to fill forty hours — call it two to three times the authored
  material.
- **For it:** one purchase is one complete game, and replay value is enormous.
  Fits the 40-hour target per campaign exactly.
- **Against it:** most players will only ever see one route, so the
  "nobody has the whole picture" theme lands for a minority. It is also the
  option most likely to not get finished.

### Option C — One campaign with guest chapters: the Halo 2 / Last of Us II model

You choose a career and play a full **~40-hour** campaign. At fixed story
moments you play **short sequences (30–90 minutes) as the other two careers**,
placed at moments only they could have witnessed.

- **Cost:** lowest. One set of content, one full mechanic set, two lighter ones.
- **For it:** **every player sees all three perspectives**, so the theme lands
  for 100% of players rather than for completionists. No repetition at all,
  because nothing is replayed.
- **Against it:** the other two careers are not fully realised as playstyles,
  and replay incentive is weaker.

### Option D — Three characters in one campaign: the GTA V model

One 40-hour campaign with three protagonists you switch between at will.

- **For it:** no repetition, all three mechanics in every playthrough, full
  picture guaranteed.
- **Against it:** **it contradicts decisions already made.** Idea 2 and idea 7
  have the player *choose a career* and grow into it through life stages. In
  this model you are not a photographer — you are three people. Probably rules
  itself out.

### A recommendation, offered not decided

**Option C now, built so that Option B stays possible later.**

The reasoning is scope. At a multi-year project with a professional quality
bar, C is the only one where the thematic payoff reaches every player at the
lowest content cost, and nothing about it forecloses expanding a guest chapter
into a full campaign in a sequel or an expansion. B is the better game if it
ever gets finished; C is far likelier to get finished.


---

## Ideas — round nine: three careers, three *games*

*Ayr's, 2026-08-24. This supersedes the recommendation above.*

**49. "Nobody sees the whole picture" is not the main message.** "I think it's a
great lesson, but I'd rather have it be **so fun people want to play 120 hours
of story**."

**50. Each career is almost a totally different game.** "That's partially why
the teen life stage is where you pick your career — because I want each career
to be **almost like a totally different gameplay**. Instead of playing different
*classes*, each career is more like a **different game**."

**51.** Example given: "the photographer gameplay is like **Pokémon Snap** — how
the animals appear in the wild and what you do with them to reach 'caught' will
look **completely different** from what the tour guide does."

**52.** "You can still catch all 1000 in each career if you want, though I don't
see anyone doing that lol — but **some careers will be easier to catch certain
animals from certain biomes**, because your method is different."

### This settles idea 48 — Option B (Claude note)

I recommended Option C on the assumption that the split-perspective theme was
the point and that a 120-hour ask was too much. Ayr's answer is that the theme
is a bonus, not the goal, and that 120 hours is fine **if it is three different
games rather than one story told three times.** That is a different proposition
and it changes the answer. **Option B.**

Critically, it also dissolves the Birth by Sleep repetition problem entirely.
That criticism applies when three characters walk the same ground doing the
same verb with different stats. It does not apply when the verb itself changes.

### What this does to the build cost

Not 3x everything. The split is:

| Shared across all three careers | Built three times |
|---|---|
| The world, terrain and seeded generation | The core encounter loop |
| All 651 species, their art and field-guide text | The "how do you reach caught" mechanic |
| The twelve biomes and their micro-regions | The interface for that loop |
| The conservation stories and their real history | Career-specific tools and progression |
| The NPCs, facilities and life stages | How quests are approached and resolved |

So the expensive part moves from **three times the story** to **three times the
systems**. That is a real cost, but a different and more tractable one, because
systems are reusable and generative where bespoke narrative is not.

### Idea 52 is an elegant systemic consequence

If the method differs, the difficulty naturally differs per animal, without
anybody hand-tuning it:

- A **cave bat** is straightforward for a **researcher** with a camera trap, and
  near-impossible for a **tour guide** who cannot take clients into a cave at
  three in the morning.
- A **whale** is bread and butter for a **tour guide** with a boat, and a
  permits-and-tagging ordeal for a **researcher**.
- A **shy nocturnal cat** may only ever be *photographed*, never handled.

That asymmetry falls out of the design rather than being authored, and it is a
genuine reason to play a second career.

### The honest caution

Each loop has to carry **forty hours on its own**. New Pokémon Snap — the
closest existing thing to the photographer loop — is about **ten hours**. The
loop therefore needs considerably more depth than Snap had: progression, tools,
seasons, twelve biomes, day and night. That is achievable because the world here
is far larger, but "make it like Pokémon Snap" is a starting point rather than a
finished design.

The three loops, sketched only as far as Ayr has described them:

- **Photographer** — observational. Animals behave naturally; you position,
  wait, and capture. Rewards patience, timing and knowing behaviour.
- **Researcher** — systematic. Traps, tags, transects, samples, camera traps.
  Rewards method, repeat visits and equipment.
- **Tour guide** — performative. Find the animal reliably, on schedule, with
  people watching. Rewards reading conditions and managing expectations.


---

## Ideas — round ten: reference the real world, not other games

*Ayr's, 2026-08-24.*

**53.** "I kinda want each reference to be **the real world, not just a game**."

So Pokémon Snap is a shorthand for how the photographer *feels*, not the model
to copy. Each career loop is designed from the real profession.

---

## Reference: the three careers as they actually work

> **Claude-contributed**, 2026-08-24, researched. Each real profession has its
> own verbs, its own ethics, and — usefully — its own real career ladder.

### The finding that matters most

**All three professions have a real progression structure, and it maps onto the
six life stages.** That means the life stages do not need inventing; they can be
taken from how these careers actually work.

| Stage | Photographer | Researcher | Tour guide |
|---|---|---|---|
| Kid / teen | First camera; learning to sit still | Collecting, noticing, first notebook | Knowing your own patch |
| Young adult | Amateur; building a portfolio | Field assistant on somebody's project | **Apprentice guide**, logging hours |
| Adult with skills | Selling stock; first commissions | Running your own study; publishing | **Qualified field guide** (FGASA NQF2 → NQF4) |
| Adult with influence | Assignments; competitions; a name | Principal investigator; grants; students | **Professional / trails guide**, on foot, leading others |
| Elder | Judging, mentoring, teaching fieldcraft | Emeritus; the long dataset | Trainer and assessor of new guides |

Southern African guiding is the most formalised of the three: **FGASA** runs
graded qualifications from Nature Site Guide up through Field Guide (NQF2 →
NQF4) to Professional and specialist **Trails Guide** certifications for leading
people on foot. That is a real, documented ladder that the game can borrow
outright.

### Photographer — the real verbs

Fieldcraft, not equipment. The governing principle in the actual codes of
practice is blunt: **"the welfare of the subject is more important than the
photograph."**

- **Hides and blinds**, camouflage, and — critically — **reading wind direction
  so your scent does not carry**.
- Light, timing and patience; being in position before the animal is.
- **Real ethical constraints that are natural game rules:** baiting teaches
  animals to associate people with food and gets them killed; photographing at
  nests and dens causes abandonment and predation.
- Professional standards require disclosing whether an image was **Wild,
  Captive, Controlled, Baited or Lured** — an existing real-world honesty
  system that could drive scoring directly.

### Researcher — the real verbs

Method and repetition, and it is mostly **not** about handling animals.

- **Camera traps** — run unattended for long periods, work almost anywhere, and
  disturb nothing.
- **Line transects** and grids; **mark-recapture**, including capture-recapture
  done purely from **scat, hair or environmental DNA** with no animal ever
  touched.
- **Radio and GPS collars** for movement data.
- **Permits and ethics review** before anything begins, and the standing
  constraint that even observation disturbs — trails cut to reach a site are
  themselves an impact.
- Scat degrades fast, so genetic work needs **large sample numbers** — a natural
  grind loop that is true to life.

### Tour guide — the real verbs

Finding the animal reliably, on a schedule, with people watching.

- Tracks, signs, alarm calls, and the **guide radio network** — real guides
  share sightings constantly.
- Reading season, weather and time of day to know where an animal will be.
- **Client management and safety**, which is the part no other career has.
- A formal qualification ladder, and on-foot work as the senior specialism.

### Why this is better than referencing games

The ethics rules are already game mechanics. "Do not bait", "do not photograph
at a nest", "get the permit first", "disclose whether it was captive" are all
real professional constraints that create genuine tension between the easy
shot and the right one — which is the same design the conservation quests use.
Nothing has to be invented to make the careers feel different; they already
are.


---

## Ideas — round eleven: what a game can give that the world cannot

*Ayr's, 2026-08-24. This may be the most important design idea so far.*

**54. Two things at once.** "I like the idea of the game being a **road map for
youth wanting to get into the animal industry** in general. But I also want it
to be a **game**, and have aspects that **you can't have in the real world**
that the game can satisfy."

**55. The unresolved desire.** "Lots of people think cubs are cute and would
love to hold them. Most people change their mind when they learn about the
harm, but **the desire is still there and left unresolved most of the time and
it sucks**. It would be so great if playing my game gave people **a feeling or
experience to make up for that loss**."

### Why this is the strongest idea in the document (Claude note)

Conservation education is usually subtractive. It takes something away — you
learn why you may not hold the cub, ride the elephant, swim with the captive
dolphin — and it offers nothing back. The desire underneath is not wrong.
Wanting to be physically close to an animal is one of the most ordinary human
feelings there is, and the education leaves it stranded.

A game can do what a leaflet cannot: **give the feeling back, in a frame where
it costs an animal nothing.**

### The trap, and the way through it

The naive version teaches the opposite lesson. If the game simply lets players
cuddle cubs on demand, it has built the fantasy the cub-petting industry sells.

The way through is that **there are real, legitimate contexts for physical
closeness with wild animals**, and they are exactly the ones the game already
contains:

- **Hand-rearing a genuine orphan.** Idea 26 already has this — an animal
  rescued as a baby and reared by hand. Rehabilitators really do bottle-feed
  orphaned animals, and it is legitimate *because* the animal has no mother.
- **Veterinary and rehabilitation work** — handling under care.
- **Research handling under permit** — collaring, measuring, ringing.

Grant the experience in those frames and the game teaches the distinction while
satisfying the desire, instead of choosing between them.

### The version that satisfies more than petting does

The full arc is better than the wish. Bottle-feed the orphan, raise it, **let
it go**, and then see it alive years later and be recognised. That is what
rehabilitators actually describe, it is more emotionally complete than holding
a cub, and idea 26's animals already deliver it — the raven that teaches its
offspring your face, the deer whose daughters are still in the same woods.

### Other things only this game can give

Several are already in the design without having been named as such:

- **Watching an animal across decades.** A human attention span does not
  permit it. The life stages do.
- **Knowing one individual animal for forty years** — the box turtle that
  outlives you.
- **Seeing a landscape change** — the beaver pond widening across life stages.
- **Meeting the extinct**, which the fossil and memorial species already allow.
- **Being present at a historical conservation moment** rather than reading
  about it.

### And the cub-petting industry is itself a quest (Claude note)

It is documented, recent, and squarely in idea 47's villain category:

- **350+ captive lion farms in South Africa holding 8,000–12,000 lions.**
- Cubs removed from mothers within days — "speed breeding" — so the female
  cycles again sooner. The cubs go to petting, then walking-with-lions, then
  canned hunting, then the bone trade.
- **"Voluntourism": paying volunteers are told they are hand-rearing orphans
  destined for release.** They are not.
- In **May 2021** the South African government formally adopted a panel
  recommendation to end captive lion breeding, cub petting, canned hunting and
  the trade in captive lion parts.

That last detail is the sharpest possible version of idea 55: the industry's
entire business model is selling people the exact feeling Ayr wants the game to
give away honestly.

### The sequencing falls out for free (Claude note)

Ayr's observation that the feeling is *guaranteed* through pets and rescued
animals has a structural consequence worth writing down.

The kid pet (idea 23), the teen animal (idea 24) and the hand-reared orphan
(idea 26) all come **before** the player ever meets a wild-animal restriction.
Every one of them is a context where closeness is unambiguously fine — your own
cat, your own goat, an orphan with no mother.

So by the time the game says *"you cannot hold that cub, and here is why"*, the
player has already been given the feeling, several times over, at no cost to any
animal. The desire is not stranded, because it has already been met.

That is the reverse of how it goes in life, where people meet the prohibition
first and the substitute never arrives. It requires no new system — only that
the life stages stay in the order they are already in.


---

## Ideas — round twelve: where the pets come from

*Ayr's, 2026-08-24.*

**56.** The kid pet list is deliberate: **only animals that genuinely thrive as
pets**. The teen list is similar but **requires more responsibility**.

**57. The parrot is the deliberate exception**, and it is a **rescue**, and it
**comes with a lesson**.

**58. Pets should be real-world adjacent, including where you get them.** "Maybe
you go to the **humane society** for the cats and dogs, but you go to a **pet
store** for the fish and small mammals." The point being to **show that not all
of the pet industry is bad.**

### Why 58 is the right call (Claude note)

A game that treats the whole pet trade as villainous would be both inaccurate
and preachy, and players would stop trusting it. The real picture is
genuinely mixed, and *sourcing* is the axis that separates good from bad — which
is exactly what idea 58 puts in front of the player as a choice.

### Ayr's teen list already encodes real lessons (Claude note)

Several choices already carry a true and specific distinction. They can be made
deliberate rather than accidental.

- **Saltwater vs freshwater tank** — the sharpest one in the whole list.
  Freshwater aquarium fish are overwhelmingly **captive-bred**. Marine fish are
  overwhelmingly **not**: roughly **98% of saltwater species cannot yet be bred
  commercially**, only about 17% have been bred in captivity at all, and only
  about 6% of those are actually available. Worse, a large share of the wild
  catch is taken with **cyanide**, which stuns the fish and kills the reef
  around it — mortality from reef to retail exceeds 90%, and each fish taken
  this way can kill up to a cubic yard of reef. **The same tank, stocked two
  ways, is a whole conservation lesson with no lecture attached.**
- **Axolotl** — functionally extinct in the wild, while hundreds of thousands
  live in tanks. The captive population dwarfs the wild one. A genuinely
  strange case that complicates any simple "captivity bad" reading.
- **Rescue parrot** — large parrots live 40–80 years, routinely outlive their
  owners, and are among the most surrendered pets there are. Ayr's instinct to
  make it a rescue *and* attach a lesson is exactly right.
- **Tortoise** (kid list) — the same lifespan problem in a quieter form. A
  tortoise is genuinely a multi-generational commitment.
- **Horse** (teen farm list) — a thirty-year commitment and the most expensive
  animal on either list by a wide margin.

### The sourcing axis, as a system

Idea 58 suggests a small mechanic that would carry a lot: **every animal the
player acquires has a provenance**, and provenance is visible.

- **Adopted** — humane society, rescue, rehoming
- **Captive-bred** — reputable breeder or store; fine, and most of the list
- **Wild-caught** — legal for some species, and the thing to notice

That is the same honesty system the photographer career already uses (Wild /
Captive / Controlled / Baited / Lured, from idea 53's research). One idea,
serving two careers and the pet system.


---

## The map decision: real world vs invented world

> **Claude-contributed**, 2026-08-24, at Ayr's request. Idea 12 has been open
> since the first round. Nothing here is decided.

### Option 1 — the real world

**For it**

- **The data already exists and is already real.** All 651 species carry true
  habitat sentences, and the biome classifier used them. A real map costs
  nothing extra because the placement work is done.
- **The conservation stories are located.** Lion Lights is Kenya. The cheetah
  guard dogs are Namibia. Sea otters are California. Cabo Pulmo is Mexico. On a
  real map they sit where they actually happened.
- **It is the version that teaches geography**, not just animals. "Where do
  cheetahs live" becomes a thing the player simply knows afterwards.
- **The road-map goal (idea 54) works properly.** If a young player wants to do
  this for real, FGASA is a real qualification in a real country. An invented
  world cannot point at anything.
- **Credibility.** A game about documented conservation history carries more
  weight when the places are the real ones.

**Against it, and these are real**

- **Cultural representation is a genuine responsibility, not a nuisance.**
  Setting quests in Kenya, Namibia or India means portraying real living
  communities. Maasai herders, Namibian farmers, Indian villagers. Getting that
  wrong is harmful, and the project's own Mythhub arc already contains the
  lesson: the version where outsiders hand down the answer is the version that
  fails. Doing it properly means consultation and sensitivity reading, which is
  real money and real time.
- **Conservation has a colonial history** that a real-world setting cannot
  politely skip. Fortress conservation, national parks created by evicting the
  people who lived there, foreign NGOs deciding local land use. A game set in
  the real places either engages with that or conspicuously avoids it.
- **It collides with seeded generation (ideas 1 and 5).** The Serengeti is
  where it is. A real map cannot be regenerated per seed, which is the whole
  point of the Diablo influence.
- **Scale.** The real world is mostly empty ocean and enormous distances. Twelve
  biomes across a globe is a lot of nothing in between.

### Option 2 — an invented world

**For it**

- **Seeded generation actually works.** A made-up world can be regenerated per
  playthrough, which is what ideas 1 and 5 ask for.
- **Biome adjacency can serve pacing** rather than plate tectonics. The real
  world does not put tundra a day's travel from a reef; an invented one can.
- **No risk of misrepresenting a living culture**, because there are none to
  misrepresent.
- **Compression.** A walkable twelve-biome continent instead of a planet.

**Against it, and these are real too**

- **It weakens the pillar Ayr liked most.** Idea 30 wants documented
  conservation history. On an invented map those stories become fictionalised,
  and the thing that made them powerful — *this actually happened* — is
  diluted.
- **The road map goes away.** You cannot point a fourteen-year-old at a career
  that exists in a country that does not.
- **Species mixing becomes arbitrary.** If the biomes are invented, nothing
  explains why a moose and a lion are two screens apart, and the educational
  value of range and distribution is lost.
- **Invented cultures are not automatically safe.** Fantasy peoples that are
  thin analogues of real ones are their own well-documented problem.

### Option 3 — real geography, seeded content

The reconciliation, and worth considering seriously: **the map is real and
fixed; what fills it is seeded.**

- Real continents, real biomes, real ranges. Cheetahs are in Africa.
- The **seed determines what generates inside them**: which micro-regions
  appear where, which animals are present this run, weather, seasons, events,
  and which of a biome's quests you meet first.
- Replay value comes from a different *population and sequence*, not different
  *terrain*.

This keeps the educational geography, keeps the located history, keeps the road
map — and keeps a real reason to start a second save. It gives up procedurally
generated terrain, which is the part of the Diablo influence that fights
everything else anyway.

It does **not** solve the cultural representation question. Nothing does except
doing the work.

### The question underneath the question

Which pillar wins when they conflict?

- If **"documented real history" and "road map into real careers"** are the
  heart of the game, the world should be real, and the cultural work is a cost
  to be budgeted rather than avoided.
- If **"seeded, endlessly replayable"** is the heart, the world should be
  invented, and the history becomes inspiration rather than depiction.

Everything decided so far — real species data, real conservation stories, real
professions, real qualification ladders, real ethics codes — leans hard toward
the first.


---

## Questions to come back to

*Raised by the ideas above, noted so they do not interrupt brainstorming.
None of these are objections — several are just "which way do you want it".*

1. **Real world map or invented world (idea 12).** Flagged as undecided by
   Ayr. It affects a lot downstream — species placement, the biome list, and
   whether region names are real places.
2. **What replaces the battle system (idea 13).** Removing gyms, battles and
   trainers takes out the main progression spine of the current game. Ideas
   16 and 17 name the replacement (fixed-plot biome sections, career
   advancement) — the question is what the moment-to-moment verbs are.
3. **What "befriend" actually is (idea 10).** Explicitly Ayr's to design.
   Everything about pacing and the 1000-species goal hangs off it.
4. **How seeded generation and fixed plots coexist (ideas 1, 5, 16).** The
   world is procedural but story sections are authored and fixed. Needs a
   rule for how authored content is placed into a generated world.
5. **How the six life stages are paced (ideas 6, 7, 8).** Kid and teen are
   tutorials, the game starts at young adult — so how long are the four adult
   stages, and what moves you between them?
6. **Do the three careers diverge or converge (idea 2)?** Different abilities
   could mean three different playthroughs, or one game seen from three
   angles.
7. **Is one career a complete game, or are all three required (idea 48)?**
   Birth by Sleep requires all three to resolve its story. At 40 hours a
   campaign that is 120 hours to reach an ending. Decides campaign length and
   whether the full picture is a reward or a requirement.
8. **Scope and platform against the quality bar (idea 20).** "Professional
   level" music and art, and competitive with the market, is a different
   proposition from a browser game built from concatenated JSX. Worth an
   honest conversation about target platform before much is built.

---

## Decisions

*Only things actually settled. Dated, so a later change of mind reads as a
change rather than a contradiction.*

- **2026-08-24** — The new game is a branch of the current one, not a rewrite
  in place or a separate repo. The current game stays playable and stays
  updatable.
- **2026-08-24** — No gyms, no battles, no trainers (idea 13).
- **2026-08-24** — Three careers: photographer, researcher, tour guide (idea
  2), with avatar customization retained regardless of career (idea 3).
- **2026-08-24** — Six life stages, real play beginning at young adult (ideas
  6, 8).
- **2026-08-24** — Seeded world generation with themed regions, Diablo-style
  (ideas 1, 5).
- **2026-08-24** — All 1000 species remain befriendable (idea 9).
- **2026-08-24** — Long timeline is acceptable; quality bar is professional
  and market-competitive (idea 20).
- **2026-08-24** — The rescued wild animal (idea 26) offers **four choices:
  Eastern box turtle, raven, beaver, white-tailed deer.** Fox, raccoon and
  squirrel rejected: their wild lifespans are 2–6 years, dominated by
  first-year mortality.
- **2026-08-24** — Accepted with the deer: hand-reared deer lose their fear of
  people and become dangerous at maturity, and this is to be **used as a
  teaching beat**, not designed around.
- **2026-08-24** — **Twelve real-world biomes**, derived from the 651 live
  present-day species. Fossils, mythics, legendaries and extinct species are
  late-game and excluded from biome placement. Classifier in
  `design/biomes.js`; all 651 place with none unassigned.
- **2026-08-24** — **Twelve biomes locked**, and twelve arcs accepted as the
  right amount of content.
- **2026-08-24** — **Quest scale changes.** Quests are mini storylines ending
  in saving or fully researching a representative animal, modelled on
  documented conservation history with national or international outcomes —
  not the local one-farmer scale of Safari Saga's investigations.
- **2026-08-24** — Each biome carries **multiple** quests. Not every species
  needs one; some are wild encounters that simply appear at the facility.
- **2026-08-24** — **Difficulty scales with life stage, not with biome.** The
  world is therefore non-linear: any biome can be entered at any stage.
- **2026-08-24** — Completing a quest line **automatically befriends** its
  animal.
- **2026-08-24** — Biomes **hand off to each other**: finishing a biome's last
  quest starts you already inside the next one.
- **2026-08-24** — Species without a real conservation story are **wild
  encounters**, so the collection goal survives without every animal needing
  authored content.
- **2026-08-24** — Biomes contain **micro-regions** — smaller distinct places
  inside them, of which the cave is one example.
- **2026-08-24** — A caught animal yields either **info plus a place to visit
  it in the wild**, or **a named individual at the facility with a story**.
- **2026-08-24** — Players **name** their animals, choosing from suggestions
  drawn from the language of the animal's real region of origin.
- **2026-08-24** — **Quests are authored once and shared by all three
  careers.** Same map, same progression, same people; the career changes the
  mechanic and the angle of approach, not the content.
- **2026-08-24** — Quests are **not** Safari Saga's seventeen investigations.
  They teach a real conservation story, and completing one **grants** that
  animal rather than leaving it to a wild encounter.
- **2026-08-24** — Target shape: roughly a **40-hour main story**, with the
  leftover species and the facilities as post-game content.
- **2026-08-24** — Origin-language naming is **deferred**, to be sourced
  properly later rather than automated.
- **2026-08-24** — **Villains exist.** "Nobody is a villain" is the default,
  not a law. Subsistence poaching with no alternative livelihood is a problem
  to solve; commercial trafficking and corporations knowingly externalising
  harm are to be opposed. The game should distinguish them.
- **2026-08-24** — The ~40-hour main story target is **confirmed against the
  market**: main stories cluster at 25–55 h, and completionist content runs
  3–5x that. Facilities and leftover species are the post-game.
- **2026-08-24** — The three careers follow a **Birth by Sleep structure**:
  same world, three campaigns, each holding part of the story, intersecting
  rather than repeating.
- **2026-08-24** — **Option B chosen.** Three complete ~40-hour campaigns, one
  per career, sharing a world. Each career is a *different game*, not a
  different class — different encounter loop, different way of reaching
  "caught". The split-perspective theme is a bonus, not the goal.
- **2026-08-24** — All 1000 species are catchable in **every** career, but
  **method changes difficulty**: some animals are far easier for one career
  than another, and that asymmetry is allowed to stand.
- **2026-08-24** — Career loops are designed from **the real professions**, not
  from other games. Game references are shorthand for feel only.
- **2026-08-24** — The game is **both** a realistic road map into animal
  careers **and** a game that grants experiences the real world cannot safely
  give. Where a real desire is harmful in life (holding cubs), the game
  satisfies it inside a legitimate frame — orphan rearing, rehabilitation,
  permitted handling — so the lesson and the feeling arrive together instead of
  competing.
- **2026-08-24** — Kid pets are **only species that genuinely thrive as pets**;
  teen animals are the same but need more responsibility. The rescue parrot is
  a **deliberate exception that carries a lesson**.
- **2026-08-24** — **Pets have a real-world provenance** and the player sees it:
  humane society for cats and dogs, pet store for fish and small mammals. The
  game must show that **not all of the pet industry is bad**.

---

## Practical notes

**Switching between the two games:**

```bash
git checkout main            # the live Safari Saga - still deployable
git checkout wildlands-next  # this, the new direction
```

**Playing this branch.** GitHub Pages only serves `main`, so this branch is
not live anywhere yet. To play it locally:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

If the new direction gets far enough to want its own shareable link, that is
a separate decision — a second deployment target or a separate repo — and it
is not needed to start.
