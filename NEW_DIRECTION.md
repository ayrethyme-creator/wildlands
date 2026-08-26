# New Direction — working notes

> ## Before trusting any species count in this document
>
> **Counts written into the prose below may be stale.** This file is a dated log, and
> several numbers in it were superseded — some of them more than once on the same day.
>
> **`design/GROUND_TRUTH.txt` is the only authoritative source**, and it is produced by
> running the game rather than by reading the source. The method is in
> `design/tools/README.md`.
>
> Current, verified 2026-08-26: **530 in the twelve biomes plus 51 in The Kept = 581**
> against the 700 target. **119 new species are needed.** Life stages are not species and
> count nowhere. Earlier figures of 128, 239, 181 and 170 were all wrong.


This is the initiation document for the new game. It is a **container for
Ayr's ideas**, written down as they have them, in their words. Nothing here is
invented or proposed by Claude unless it is explicitly marked as such.

---

## Status

Brainstorming, 2026-08-24. **58 ideas captured and 26 decisions logged.** The
shape is settled: an **invented world with its own map and names** (this line
originally said "real-world map" and was superseded the same day — see "The map
decision" and "Clarification: an invented world still has a map"), a sourced
codex, twelve biomes, three careers that are three different games, six life
stages, quests built on documented conservation history.

Still genuinely open: how the life stages are paced, what the researcher and
tour-guide loops do minute to minute, and the platform question.

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
> design proposals — the choice is Ayr's.

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

## On framing devices, and what they can and cannot excuse

> **Claude-contributed**, 2026-08-24. Ayr asked whether a dream or
> alternate-reality framing could give the game a legitimate in-fiction defence
> for the mistakes they will inevitably make. Straight answer: partly.

### What a framing device genuinely buys you

A stated fiction — an alternate Earth, a composite continent — legitimately
covers everything **structural**:

- **Compressed geography.** Biomes adjacent that are not adjacent on Earth.
- **Composite places.** One reserve standing in for several real ones.
- **Species co-occurrence** that does not happen in reality.
- **Time compression.** Conservation stories from the 1910s, the 1970s and 2011
  all reachable within one character's life.

These are real problems and a framing device solves them cleanly and honestly.
Nobody is harmed by a fictional continent, and it stops every compression being
read as an error.

### What it does not buy you, and this is the important part

**It does not excuse misrepresenting a living culture, and it may make it
worse.**

If a community in the game is a thin version of a real people, "it is an
alternate reality" is not a defence anyone will accept — and it can read as
taking the aesthetics of a culture while ducking accountability for the
portrayal. The device protects the map. It does not protect the people on it.

It also does not cover animal facts, because those are the educational core. A
dream framing that lets the game be wrong about lions defeats the purpose of
the game.

### What actually protects the project

The defence Ayr wants exists, but it is not fictional. It is procedural, and it
is stronger than any framing device:

1. **A visible sources-and-changes layer.** The game already has a field guide.
   Extend it: *this is based on the real Lion Lights, invented by Richard
   Turere in Kitengela in 2011; here is what we changed and why.* An error that
   is documented as a deliberate departure is a **choice**, not ignorance —
   and "we said so in the codex" is a far better answer than "it was a dream."
2. **Fictional characters, real credited history.** Do not put words in the
   mouths of real people. The player meets a *situation like* Turere's, in
   Kenya, and the codex credits the real person and links out. The history stays
   documented; nobody living is impersonated.
3. **Consultation, credited.** "We worked with people from there" converts an
   entire category of criticism into a strength. It costs money. It is the only
   thing that actually works for the cultural question.
4. **Fixing things when told.** A live game that publicly corrects errors earns
   more trust than one that was never wrong.

### The recommendation

**Real Earth, fictional characters, sourced codex — and a stated fiction only
for the geography.**

Say plainly, up front, that the map compresses and composites the real world so
that a life can be lived across it. That covers the structural mistakes
honestly. Then handle the cultural question with consultation and credit rather
than with a device, because that is the only thing that handles it.

A dream framing would read as evasive to exactly the people whose criticism Ayr
is worried about. A sourced codex reads as careful to the same people.

### And the plain reassurance

Every game about real places gets things wrong, including ones made by large
teams with consultants. Mistakes are survivable. What determines whether they
are forgiven is almost entirely **whether the work shows evidence of care** —
sources, credits, corrections — rather than whether it had a clever excuse
prepared in advance.


---

## Question 1 — scope and platform

> **Claude-contributed**, 2026-08-24, researched. Taken first because it gates
> questions 3 and 6, and because it is the decision most expensive to reverse.

### What the current game is, and why it will not carry this

Safari Saga is ~67 `.jsx` files concatenated in the browser, transformed by
Babel at load time, and run through `eval`. That has been genuinely fine for
what it is. It will not reach "professional, competitive with the market"
because:

- Everything is re-parsed on every page load; the file is already over 2 MB.
- No real audio engine, no shader pipeline, no controller support, no Steam.
- The hiring pool for "our own bespoke JSX engine" is **zero people**.

This is not a criticism of it. It is the wrong tool for the next thing.

### The options

| | Cost | 2D | Reversible? |
|---|---|---|---|
| **Stay on the web** | free | fine | n/a |
| **Godot 4** | **free forever, MIT** | **purpose-built 2D** | yes, open source |
| **Unity** | free under $200k revenue, then **$2,040/yr per seat** | 2D layered on a 3D engine | terms have changed before |
| **GameMaker** | subscription | strong 2D pedigree | smaller ecosystem |

### Recommendation: Godot 4

For this project specifically:

- **The whole art library is 2D sprites.** Godot's 2D is native rather than
  retrofitted onto a 3D renderer — reportedly 15–40% faster on sprite-heavy
  scenes, with real 2D lighting, tilemaps and physics.
- **Free forever, MIT licence, no revenue cap, no royalties.** For a project
  that may take years and might sell, this matters twice: it costs nothing, and
  **the terms cannot be changed underneath it.** Unity's 2023 runtime-fee
  episode is the cautionary tale — a proprietary engine's pricing can move after
  you have committed years.
- **Fast iteration.** ~164 MB install against Unity's ~21 GB; projects open in
  under a second against 15+. When the person reviewing the work is not a
  programmer and is judging by eye, iteration speed *is* the workflow.
- **It still exports to the web**, so the "send Ayr a link, they play it on
  their phone" loop that works today survives.
- **It is no longer a risk.** Slay the Spire 2, Dome Keeper (10M+ copies),
  Brotato, Backpack Battles ($5.2M) are all Godot, and Steam release counts are
  growing sharply.

### What transfers and what does not

| Transfers | Does not |
|---|---|
| **All 1000 sprites** — they are PNGs | The game logic |
| The species data: `DEX`, `INFO`, habitats, field-guide text | The map and battle systems |
| The biome classifier and its rules | The rendering and UI |
| The conservation writing and structure | |

The logic loss is smaller than it looks, because **the new game is a different
game**. Very little of Safari Saga's code would have been kept regardless.

**Do not port Safari Saga.** It stays as it is, on the web, on `main`, playable
and updatable. The new game starts clean.

### Separating the money question from the engine question

"Professional level music and art" is **not** an engine decision. Godot does not
make music. That is a people-and-money question, and it is worth stating
plainly:

- The **art already exists** — 1000 finished sprites, which is the part most
  projects never complete.
- **Music, UI design and audio** are the gaps, and those are commissioned or
  hired, at any scale from a single freelance composer upward.
- Cultural consultation (question 5) draws on the same budget.

So the honest sequence is: **engine now, because it is free and gates the
work; money later, when there is something worth funding.**


---

## Godot games, and the 2D / 3D decision

> **Claude-contributed**, 2026-08-24, researched. Ayr asked for examples and
> raised whether 2D is what they want. That second question is **larger than
> the engine question** and is answered here.

### Games shipped in Godot

**2D**

| Game | Note |
|---|---|
| **Cassette Beasts** | **A monster-collecting RPG. ~20 hours, $4.1M, 94.7% positive.** The closest existing proof of concept for this genre in this engine |
| Brotato | $10.7M |
| Buckshot Roulette | $6.9M |
| Backpack Battles | $5.2M |
| Dome Keeper | 10M+ copies |
| Slay the Spire 2 | 100k+ concurrent at early-access launch |
| The Case of the Golden Idol | |
| Halls of Torment | |

**3D**

| Game | Note |
|---|---|
| Cruelty Squad | First-person, deliberately abrasive art |
| Road to Vostok | Survival FPS, solo developer |

Godot does 3D, and the 3D games shipped in it tend to be **stylised rather than
photorealistic**. For high-end realistic 3D, Unreal is the tool — and that is a
different budget entirely.

### The constraint that actually decides this

**Wildlands has 1000 finished animal sprites. That is the single most valuable
asset in the project, and full 3D throws it away.**

The arithmetic, at market rates:

- A **2D sprite** runs roughly **$20–$30**; a fully animated 2D character
  $500–$5,000.
- A **3D model** starts around **$150** and runs into the thousands — *before*
  rigging and animation, and every animal needs several cycles (idle, walk,
  run, feed, alert, flee).
- A polished 2D RPG with original art and audio is put at **$50k–$150k** total.

So **1000 animals in 3D is studio-scale** — comfortably into six or seven
figures and years of pipeline. 1000 animals in 2D is **already done and paid
for.**

This is not a matter of taste. It is the difference between a game that can
exist and one that cannot.

### The middle path: HD-2D

There is a well-proven style that is neither flat 2D nor full 3D: **2D sprites
in a lit 3D environment.** Octopath Traveler, Triangle Strategy, Live A Live,
the Dragon Quest III remake. It reads as premium and modern rather than retro.

How it works: sprites are **billboarded** so they always face the camera, but
sit in real 3D space, cast real shadows, and receive **dynamic lighting**, depth
of field and particles.

Why it fits this project unusually well:

- **The 1000 sprites are reused, not replaced.**
- The expensive 3D is **environment**, which can be modular and repeated —
  rocks, trees, terrain — instead of 1000 unique creatures.
- **Dynamic lighting gives day/night and seasons directly** (ideas 9 and 39),
  which flat 2D has to fake.
- **Depth of field is a photography mechanic.** The photographer career wants a
  moving camera, focus and framing, and HD-2D provides exactly that. Flat
  top-down 2D does not.
- Square Enix built it specifically so a **small team could iterate quickly**.

The caveat: Square Enix's versions are Unreal, and the style needs someone
comfortable with 3D lighting and shaders. Godot supports billboarded sprites,
3D environments and dynamic 2D/3D lighting, but this is the option that most
wants a technical artist.

### The three real choices

| | Art cost | Look | Fit |
|---|---|---|---|
| **Flat 2D** (top-down / isometric) | **zero extra** | Cassette Beasts, Stardew | Safe, proven, sprites reused wholesale. Weakest for the photography career |
| **HD-2D** | environments only | Octopath Traveler | Premium look, sprites reused, gives lighting and camera for free. Needs a technical artist |
| **Full 3D** | **1000 models + rigs + animation** | Planet Zoo | Throws away the sprites. Not achievable at indie scale |

**Recommendation: HD-2D if a technical artist is reachable, flat 2D if not.
Full 3D is off the table** — not because of ambition, but because 1000 animals
is the one number that makes it impossible.


---

## HD-2D and 2.5D games to look at

> **Claude-contributed**, 2026-08-24. Ayr asked for examples to look at. Split
> into the strict Square Enix style and the broader technique, because the
> second group is closer to what this project actually needs.

### Square Enix HD-2D — the strict version

Look at these for **how premium the style can read**. All Unreal.

| Game | Year | Worth looking at for |
|---|---|---|
| **Octopath Traveler** | 2018 | The original. Depth of field and lighting doing the heavy lifting |
| **Octopath Traveler II** | 2023 | Day/night is a real mechanic here — the same town differs by time |
| **Triangle Strategy** | 2022 | Tactical camera; how the style handles being rotated |
| **Live A Live** (remake) | 2022 | Many small distinct settings, which is closer to twelve biomes |
| **Dragon Quest III HD-2D Remake** | 2024 | The most recent and most polished; big outdoor overworld |

### The broader technique — closer to this project

These are **2D sprites billboarded in a 3D world**, which is the part that
matters here, and several are far nearer to Wildlands in subject and structure.

| Game | Why it is relevant |
|---|---|
| **Don't Starve** | **The closest match in subject.** Outdoors, wildlife, gathering, **real seasons**, day/night, and hand-drawn 2D creatures in a 3D world. Proof the technique carries a nature game |
| **Cult of the Lamb** | All art drawn in 2D then placed in a 3D world; sprites rotate to face the camera and write to depth. **Also a management-sim hybrid**, like the facilities. Made in Unity by a small team whose first 3D engine it was |
| **Sea of Stars** | Not billboarded, but the best modern example of **dynamic lighting and a day/night cycle over pixel art** |
| **Paper Mario** (originals) | The oldest version of the trick, and still the clearest illustration of it |

### The reassuring part

Massive Monster chose the 2.5D look for *Cult of the Lamb* because they were
**moving to a 3D engine for the first time** and it felt wasteful to stay flat.
Their reasons were practical: being able to move sprites around in space, build
faux-3D structures, and choose camera angles in the editor.

That is close to this project's position — an existing 2D art library, a first
move into a 3D-capable engine, and a want for camera and lighting that flat 2D
cannot give.

### What to look at while judging

- **Octopath Traveler II** for how day and night change a place.
- **Don't Starve** for whether hand-drawn animals hold up outdoors across
  seasons.
- **Cult of the Lamb** for how it looks when the sprites are cleaner and more
  modern rather than pixel art — which is what the Wildlands sprites are.

That last point matters: the Wildlands sprites are **not pixel art**. They are
clean illustrated creatures, so *Cult of the Lamb* is a truer visual comparison
than Octopath, even though Octopath is the more famous style.


---

## DECIDED: HD-2D in Godot

> **2026-08-24.** Ayr, with Eric agreeing. Closes question 1 and the 2D/3D
> question together.

### What this settles

- **Engine: Godot 4.** Free forever under MIT, native 2D, exports to desktop
  and web, proven commercially.
- **Style: HD-2D** — the 1000 existing sprites billboarded in lit 3D
  environments, in the manner of *Cult of the Lamb* and *Don't Starve* rather
  than the pixel-art register of *Octopath Traveler*.
- **The sprites are kept**, which is the entire reason this is achievable.

### The practical finding: resolution

**Every sprite is currently 256x256.** That is fine for a flat 2D game and
**borderline for a lit 3D scene** at 1080p and above, where a creature filling a
quarter of the screen height already wants more than 256 pixels.

It is fixable, and cheaply:

- The generator renders at **1024x1024**; the post-process step is what reduces
  to 256. So the ceiling is a setting, not a limit.
- **288 of the 1024px originals still survive** in the pipeline's `raw`
  directory. Those can simply be re-processed at full size.
- **All 1009 prompts survive**, spread across 37 batch files. So the rest can be
  regenerated at full resolution — same prompts, same style, no new authoring.
- At roughly 52 seconds each, the whole roster is about **15 hours of GPU time**
  on Eric's machine. Free, just slow.

**So the art is not a constraint on this decision.** It only needs re-exporting
before the sprites go into a 3D scene, and that is a batch job rather than a
rework.

### What this decision unblocks

- **Question 3** (the researcher and tour-guide loops) can now be designed
  against a real camera in a real 3D space, rather than in the abstract.
- **Question 6** (the codex UI) has a real toolkit — Godot's UI system rather
  than hand-rolled HTML.
- Day/night and seasons (ideas 9 and 39) come from **lighting** now, rather
  than needing to be faked with palette swaps.
- The photographer career gets **focus, framing and depth of field for free**,
  because they are properties of a 3D camera.

### What it adds to the to-do list

- **A technical artist** is now on the hiring list, for lighting, shaders and
  the billboarding setup. This is the one role HD-2D genuinely needs.
- Sprites will want **consistent ground-line alignment** so they sit correctly
  on terrain when billboarded — worth checking during the re-export rather than
  after.


---

## Ideas — round thirteen: evolution becomes life cycle

*Ayr's, 2026-08-24.*

**59.** Safari Saga has **evolution** as a concept. That does not belong in a
realistic game. **But baby animals do** — and real growth can take its place.

### What is already there

**82 juvenile sprites exist**: 41 calves, 33 juveniles, 7 pups, 1 foal. They are
currently separate dex entries with their own keys.

### The benefits

- **It is real.** Animals genuinely transform. A fawn loses its spots, a lion
  cub grows a mane, a joey leaves the pouch.
- **Metamorphosis is the honest version of evolution** and needs no
  invention at all. Tadpole to frog, caterpillar to chrysalis to butterfly,
  nymph to dragonfly. These are dramatic, fast, and completely true.
- **It rhymes with the player's own life stages.** Your animals grow up while
  you do. That is thematically exact and costs nothing structurally.
- **It gives the rescued animal (idea 26) its arc.** Raising a baby *is* the
  mechanic.
- It teaches real developmental biology — precocial versus altricial young,
  metamorphosis, how long maturity actually takes.

### The problems, honestly

1. **Growth is not a power-up.** In Pokémon, evolving means winning harder.
   Here there is no combat, so an adult is not "better" than a juvenile — just
   different. **Growth needs a purpose that is not strength.**
2. **You do not own wild animals.** Befriending is not capturing. A fawn you
   photographed becomes a doe somewhere without your involvement, so wild growth
   is something you *witness*, not something you *do*.
3. **Time scales differ wildly.** A tadpole is weeks. A tortoise is decades.
   One fits a play session; the other only fits the life-stage structure.
4. **Not every species has a distinct juvenile.** Many young animals are just
   small adults, so the mechanic cannot be universal.
5. **Ageing implies death**, which is real, powerful, and needs a deliberate
   decision rather than an accident.
6. **Dex structure.** Juveniles are currently *separate entries*. Are they
   separate species, or life stages of one? That changes what "all 1000" means.

### Where it genuinely works — three places

**1. Metamorphosis in the wild.** Fast, dramatic, observable without owning
anything. Frogs, butterflies, dragonflies, newts. This is the closest honest
equivalent to watching something evolve, and it is free.

**2. The animals you personally raise.** The rescued orphan and the childhood
pet. You witness the whole change because you are there for it — which is
exactly the feeling idea 55 wants to give back.

**3. Breeding at your facilities.** Real zoos and recovery centres run breeding
programmes. Young appearing at your own facility is both realistic and earned,
and it gives the facility system (idea 18) a long-term payoff beyond collecting.

### What growth is *for* — the mechanical answer

Replace "evolve to complete the dex" with something truer:

> **A species is not fully researched until you have documented it across its
> life stages.**

That is real science — a life history is incomplete without the young. It gives
growth a purpose with no combat anywhere near it, it works differently for each
career (photograph the cub, measure the cub, show the cub to visitors), and it
turns juveniles from a separate collection into the *depth* of an existing one.

### Decisions this forces

- **Are juveniles separate dex entries or life stages of one entry?** Life
  stages is the more honest model and would reduce the headline species count
  while deepening each.
- **Do animals die of old age?** The box turtle outliving the player and the
  raven's descendants recognising them (idea 26) both imply yes. It is the
  strongest emotional material in the design and the heaviest.
- **Does time pass fast enough to see slow growth?** A tortoise maturing needs
  either the life-stage jumps to carry it, or an acceptance that some animals
  are only ever seen at one stage in one playthrough.


---

## The art cost of life stages — and the bigger one behind it

> **Claude-contributed**, 2026-08-24. Ayr decided juveniles are life stages of
> one entry and that animals die of old age, and named **artwork** as the main
> concern. Here is what it actually costs.

### Juvenile art is the cheap part

- **651 live species. 82 juvenile sprites already exist.**
- The generator, the prompts and the whole pipeline still work — this session
  alone produced around a hundred corrected sprites in batches.
- At roughly **52 seconds a sprite**, even giving *every* live species a
  juvenile is about **eight hours of GPU time**. Overnight, free, on Eric's
  machine.

And most species do not need one. Tier it:

| Tier | What it is | Art needed |
|---|---|---|
| **Distinct young** | Metamorphosis, spotted fawns, downy chicks, cubs, different juvenile plumage | **A real sprite.** Perhaps 150–250 species |
| **Smaller adult** | Most reptiles, fish, many birds and small mammals | **Scale the adult sprite**, sometimes recolour. Free |
| **Never seen young** | Deep sea, most invertebrates, anything whose young is planktonic or hidden | **Nothing** |

So the realistic juvenile job is **150–250 new sprites, three or four hours of
GPU**, not 651.

### The bigger cost, which is not juveniles

**Every sprite in the game is a single static image.** That is fine in Safari
Saga, where nothing moves. It is **not** fine in a living HD-2D world where
animals are supposed to graze, walk, startle and flee.

**Animation is the real art cost of this decision**, and it is the one thing the
generator cannot solve. Some numbers for scale: 651 species × even four short
cycles (idle, walk, feed, alert) is 2,600 animations.

### The proven cheap path

*Cult of the Lamb* is the exact precedent, and its solution is documented:
**skeletal animation that distorts the 2D mesh**. The sprite is cut into parts,
rigged, and deformed — no redrawing, no frame-by-frame, and it reads as more
three-dimensional than a flat image because the parts move in depth.

Practically:

1. **Rig once per body plan, not per species.** A quadruped rig fits deer, lion,
   fox, wolf, badger. A bird rig fits most birds. Perhaps **10–15 rigs** cover
   almost the whole roster.
2. **Auto-cut each sprite** to the rig for its body plan; hand-correct the
   awkward ones.
3. **Animate the rigs, not the animals.** One good quadruped walk cycle serves
   two hundred species with per-species timing tweaks.
4. Reserve bespoke animation for the few that genuinely need it — snakes,
   octopus, jellyfish, anything with no shared body plan.

This turns 2,600 animations into roughly **15 rigs and 60 cycles**, plus cutting
work per sprite. That is a real job, and it is a tractable one.

### What this means for the concern

The art worry is **real but pointed at the wrong thing**:

- **Juvenile sprites: nearly free.** The pipeline exists and it is a few hours of
  GPU.
- **The 1024px re-export: free.** Another fifteen hours of GPU, prompts all
  survive.
- **Animation: the genuine cost**, and the first thing a technical artist should
  be scoped against — rigs and cutting, not per-species drawing.


---

## Question 2 — pacing the six life stages

> **Claude-contributed proposal**, 2026-08-24. Not decided. Built against the
> 40-hour campaign target, the real career ladders, and the new decision that
> animals age and die.

### The time budget

| Stage | Hours | What it is |
|---|---|---|
| **Kid** | ~1.5 | Tutorial. Choose a pet, make the first wild rescue, meet the mentor |
| **Teen** | ~2.5 | Choose the career, learn its verbs, choose friends. Second animal |
| **Young adult** | ~8 | Apprentice. Working under someone else's permit and name |
| **Adult with skills** | ~9 | Qualified. Your own projects, your own name on them |
| **Adult with influence** | ~10 | Professional. Money, access, and the power to change policy |
| **Elder** | ~6 | Mentor. Teaching, handing over, the long view |
| | **~37** | plus slack toward 40 |

Kid and teen together are **four hours of a forty-hour game** — enough to matter
emotionally, short enough that a replaying player is not trapped in childhood.

### What advances you — two gates, both real

Every one of the three professions advances the same way in life: **accumulate
qualifying experience, then pass an assessment.** FGASA does this literally —
log the days, then be evaluated.

So each stage ends when **both** are satisfied:

1. **Logged fieldwork**, in your career's own currency — published photographs,
   completed studies, guided outings.
2. **An assessment you have to actually pass** — which is exactly idea 15's
   codex tests.

That second gate is the important one. It makes **the learning mechanically
required** rather than an optional extra, which is the entire point of the
game, and it is what the real professions genuinely do.

### This resolves the 48-quest arithmetic

Idea 32 wanted quests in every biome at every age — 4 adult stages x 12 biomes =
48 quest lines, which looked impossible.

A **threshold** rather than a checklist fixes it. The player must log enough
qualifying work to be assessed, but chooses **where**. So:

- All 48 can exist.
- A single playthrough might need **15–20** of them.
- The remainder are replay content, and content for the other two careers.

Nothing is cut, and no playthrough is forced through all twelve biomes four
times.

### How time passes — the hybrid

Now that animals age and die, the clock has to be decided.

- **Within a stage: days pass.** Seasons turn, day and night cycle, migrations
  arrive and leave. This is the Stardew register and it is what seasons need.
- **Between stages: years leap.** Moving up the ladder skips forward several
  years in a single transition.

This solves three things at once:

- **Slow growth becomes visible.** A tortoise or a raven matures across a stage
  boundary rather than in real time.
- **Seasons stay meaningful** without a decade of play.
- **Death lands where it should.** You leave a stage, years pass, and the dog
  you chose as a child is not there when you come back. That is the heaviest
  beat available and the structure delivers it without being asked to.

### The elder stage is different, deliberately

The first five stages are about *acquiring*. The elder stage should be about
*handing over*: teaching new guides, giving away permits and facilities,
seeing which of your animals' descendants are still on the ground.

It is also where the mentor from idea 25 pays off — **you become them**, and a
new young character arrives asking you the questions you once asked.

### The open sub-question

**Can the player fail to advance?** Real assessments can be failed. Allowing it
gives the tests weight, but a stuck player in a 40-hour game is a problem.
Middle path: you can retake, but a failure costs in-game time, which — now that
time matters and animals are ageing — is a real price rather than an
inconvenience.


---

## Ideas — round fourteen: the world must scroll

*Ayr's, 2026-08-24.*

**60.** "I don't like being limited to one screen... I want something that
**scrolls** like the real Pokémon games."

### The terms

| What | Term | Example |
|---|---|---|
| One screen, exit at the edge, next screen loads | **flip-screen** (also *screen-by-screen*, *room-based*) | The original Zelda. **Safari Saga now** |
| Camera follows the player continuously across a large map | **scrolling**, with a **camera-follow** | Pokémon, Stardew Valley |
| No loading seams between areas | **contiguous** or **seamless** world | |
| Loading map chunks in and out as the player moves | **streaming** | Needed once the world is large |

So the ask is: **a scrolling camera-follow over a contiguous world**, replacing
Safari Saga's flip-screen rooms.

### The good news — this gets *easier*, not harder

Flip-screen was never a property of 2D. It was a property of how Safari Saga was
built: maps are fixed grids of text rows, each its own screen, with hard-coded
exits. That is a **1980s constraint being voluntarily re-enacted**, not a limit
of the medium.

Moving to a 3D world in Godot makes scrolling close to free:

- A **camera that follows a character in 3D space is a solved, built-in
  problem.** It is the default, not a feature to be added.
- The world is a **terrain**, not a list of screens, so there are no seams to
  design around.
- Chunk **streaming** is standard practice, and is exactly how a seeded world
  should be generated anyway — build the chunk when the player approaches it.

### Camera choices for HD-2D specifically

Worth deciding early, because it drives how sprites are drawn and lit:

| Camera | Feel | Notes |
|---|---|---|
| **Fixed-angle follow** | Octopath Traveler, Cult of the Lamb | Simplest. Camera stays at one pitch and yaw, follows the player. Sprites only ever seen from one angle — which suits a single-view sprite perfectly |
| **Rotatable follow** | Don't Starve | Player can spin the camera. Reveals hidden things, but billboarded sprites must look right from every direction |
| **Free camera in photo mode** | Pokémon Snap, most photo modes | The default camera is fixed-angle; the **photographer career unlocks a free camera** while composing a shot |

**The third row is probably the answer**, and it makes idea 51 land properly:
the world plays on a comfortable fixed-angle follow camera, and when the
photographer raises the camera the view becomes free — move, aim, focus, frame.
The career difference is felt in the camera itself rather than in a menu.

### What it changes about the sprites

A fixed-angle follow camera means **each animal only ever needs to look right
from one direction**, which is precisely what the existing 1000 sprites are.
A freely rotating camera would demand several angles per species, which is
1000 more sprites at minimum.

**That is a strong argument for fixed-angle as the default**, with free camera
reserved for photo mode where the player is deliberately composing and a little
flatness is acceptable — or where a handful of hero species get extra angles.


---

## Ideas — round fifteen: quizzes yes, exams maybe not

*Ayr's, 2026-08-24.*

**61.** "I like taking quizzes. I like being able to take **sample quizzes in
the guide whenever I want**, based on the animals and information I have access
to and have seen in the game so far."

**62.** "So the **official ones... I don't know.**"

### The hesitation is correct (Claude note)

An official quiz that gates progression has real problems: it reads as
homework, it walls players who freeze at tests, and it turns the best part of
the game — curiosity — into an exam condition. Making the *only* proof of
learning a multiple-choice screen would also repeat Safari Saga's mistake in a
new form: a test can be gamed, and once it is, the learning is skippable again.

But dropping the gate entirely takes the teeth out of the whole design.

### The way out: the assessment is not a quiz, it is the job

Each real profession assesses **differently**, and none of them by
multiple-choice alone. Matching that solves the problem and makes the careers
diverge at the moment of progression, which they otherwise would not.

| Career | Real assessment | In game |
|---|---|---|
| **Photographer** | **Portfolio review** | Submit your best work. Judged on the picture, on **coverage** (species, behaviours, life stages), and on **ethics** — was it baited? was it a nest? was it captive and declared? No questions asked at all |
| **Researcher** | **Defence** — questioned by people who know more than you | An examiner presses your findings and you answer **from data you actually collected**. This is idea 13's "convince people using info you gathered", used as progression |
| **Tour guide** | **Practical assessment** — an assessor watches you guide | Take an assessor out. They watch you find animals, read the conditions, explain well, and keep people safe |

None of these is a quiz. All three are things the player was already doing;
the assessment is simply **the day it counts**.

### Where the quizzes Ayr actually likes live

**Practice quizzes stay, exactly as described in idea 61**: always available in
the guide, optional, drawn only from what the player has genuinely seen. Never
a gate, never timed, no failure state.

And they can *matter* without being mandatory:

- Practising unlocks **better options in the researcher's defence** — you can
  only argue a point you have properly learned.
- It raises what the **photographer's portfolio review** notices, so a
  knowledgeable player gets credit for the shot that shows a behaviour rather
  than just an animal.
- It gives the **tour guide better things to say** in front of clients, which
  is the whole job.

So the quizzes reward the player who enjoys them without punishing the one who
does not — and the person who skips every quiz simply finds the assessments
harder, rather than being locked out.

### What this changes

Question 2 said advancement needs "logged fieldwork **and** a passed
assessment". That still holds. The assessment is just **not a test** — it is
the profession's own way of judging you, which is more real, more fun, and
different in all three careers.


---

## Ideas — round sixteen: cutscenes

*Ayr's, 2026-08-24.*

**63.** "Cut scenes need to happen."

### Where they matter most, in order (Claude note)

The structure already decides this, and it is a small number of moments rather
than a general appetite for cinematics.

1. **The five life-stage transitions.** These are the load-bearing ones. Years
   pass between stages, and that is where the game's heaviest material lives:
   qualifying, the childhood pet not being there when you come back, becoming
   the person the mentor was. **Only five, and they carry the emotional spine.**
2. **Quest resolutions.** The moment the lights go up on the boma, the grids
   come out of the shed, the policy passes. Idea 30's real history deserves a
   real beat rather than a dialogue box.
3. **First contact with a biome**, since idea 34 has biomes hand you off to each
   other — arriving somewhere new already on a job.
4. **The elder handover**, which is the ending.

### The cheap kind is also the right kind

Cutscenes run from very expensive to nearly free, and HD-2D lands well:

| Kind | Cost | Notes |
|---|---|---|
| **In-engine scripted** — move the camera, walk the sprites, run dialogue | **Low.** The world and camera already exist | What Octopath and *Cult of the Lamb* use for almost everything |
| **Static illustrated panel + text** | Low | Devastating when written well; a still image and a line can outdo animation |
| **Animated cinematic** | **Very high** | Reserve for one or two moments, if ever |

Because the world is already a lit 3D scene with a moving camera, **in-engine
scenes are close to free** — this is a direct benefit of the HD-2D decision that
flat 2D would not have given.

### Two things worth deciding early

- **Voice acting.** Idea 14 wants a read-aloud option for the guide. That is
  text-to-speech or recorded narration, and it is a *different* commitment from
  voicing cutscene characters. Voicing the game is a large, recurring cost that
  also makes every text edit expensive. Worth deciding deliberately rather than
  drifting into it.
- **Cutscenes must be replayable from the codex.** In a game explicitly about
  memory, time passing and animals that die, a player will want to go back and
  see the scene where the dog was still alive. That is cheap to build if planned
  and awkward to retrofit.

### And one caution

The strongest beats here are quiet: an absence, a gap where something used to
be, a familiar animal recognising you years later. **Those are cheap to do well
and easy to ruin with too much production.** A held shot and one line will
outperform a fully animated sequence for almost everything on the list above.


---

## Ideas — round seventeen: no voice acting, and music matters

*Ayr's, 2026-08-24.*

**64. No voice acting.** Decided. The read-aloud option for the guide (idea 14)
is separate and stays.

**65. Music is important**, and Eric notes there are AI music tools that could
work the way the art pipeline does.

### The technical wrinkle that art does not have (Claude note)

**Game music is not song music.** A finished linear track is much less useful
than it looks, because a game score has to:

- **loop seamlessly**, sometimes for an hour
- **layer in stems** — drop the percussion at night, add strings when an animal
  appears
- **transition on state** — biome change, season change, a quest resolving
- and this design has an unusual number of states: **12 biomes x day/night x
  four seasons x six life stages**

AI tools generate **finished linear songs**. Getting clean loop points and
separable stems out of them is the hard part, and adaptive scoring is a
different discipline from writing a good three-minute piece. This is the
practical limit, and it applies regardless of which tool is used.

### The legal position, as of 2026

Genuinely mixed, and moving fast:

- **Suno** settled with Warner (Nov 2025), agreed to **deprecate every model
  trained on unlicensed music**, and is launching licensed models through 2026.
  A Munich court still ruled against it in July 2026, under appeal. Sony's US
  suit is live.
- **Udio** has the cleanest licensing story — UMG, Warner, Merlin and Kobalt all
  signed — but **downloads are currently paused** pending its co-licensed
  platform.
- **ElevenLabs Music** and **Stable Audio 3** (trained on licensed material) are
  the cleanest picks if legal certainty is the priority.

**The sharpest practical point:** the US Supreme Court has confirmed that
**fully AI-generated works without meaningful human input cannot be
copyrighted.** For a game whose music is meant to be a signature, that means the
soundtrack may not be protectable — anyone could lift it and use it freely.

### The option worth considering

**AI for temp, a composer for ship.** This is ordinary practice, not a
compromise: generate scratch music now so the game has feel and pacing during
development, and budget a human composer for the score that ships. It gets the
benefit immediately, avoids the copyright hole, and hands the composer something
concrete to work from — "this, but ours."

It also puts music in the same bucket as the technical artist and the cultural
consultation: **a real budget line, deferred until there is something worth
funding.**

### One practical thing to be ready for

A game that ships with a **sourced codex crediting real people and real
history** will get asked how its assets were made. That is not a reason to avoid
AI tools — it is a reason to have a clear, honest answer prepared rather than
being caught out by the question.


---

## Question 3 — the three loops, worked on the savanna

> **Claude-contributed**, 2026-08-24. Ayr asked whether the loop changes per
> biome, and for the savanna worked as an example.

### First, the structural answer

**The verb is constant per career. The toolkit and the constraints change per
biome.**

- The photographer always photographs. But in open savanna the problem is
  *distance*; in rainforest it is *darkness and cover*; underwater it is
  *breath and buoyancy*.
- The researcher always turns observation into data. But savanna allows
  **individual identification by markings**, rainforest forces reliance on
  **camera traps and calls**, and the deep sea allows almost nothing.
- The guide always finds it, shows it and keeps people safe. But a savanna
  drive, a rainforest night walk and a whale boat are different jobs.

That gives **3 careers x 12 biomes = 36 distinct-feeling situations** out of
three designed loops, rather than 36 designed loops. Ayr's instinct that it
changes per biome is right; it just changes at the level of tools and obstacles.

---

### SAVANNA — the shared conditions

Everything below sits on facts that are true of real savanna work:

- **Open country.** You can see enormous distances and reach almost nothing.
- **Vehicles are the hide.** Most savanna animals tolerate a vehicle and will
  not tolerate a person on foot. Getting out changes everything.
- **Dawn and dusk are the whole day.** Predators are active, light is low and
  golden, and the middle of the day is heat, shade and stillness — with **heat
  haze that ruins long-lens shots**.
- **Water concentrates everything** in the dry season. A waterhole is the one
  place the animals come to you.
- **Individuals are identifiable** — lions by whisker-spot patterns, zebras by
  stripes, giraffes by patch shapes. This is real, and it is the savanna's gift
  to the researcher.

---

### Photographer — savanna

**The problem: distance.** You can see it. You cannot get to it.

The loop: **scout** from the vehicle across open ground, **read the light and
the wind**, **position** and cut the engine, **wait**, and take the shot when
the animal does something worth a photograph.

Savanna-specific texture:

- Long lens from a vehicle; stepping out ruins the sighting and may be illegal.
- **Golden hour is both the best light and peak activity** — the same two hours
  are the whole day's opportunity, so time pressure is real without being
  artificial.
- **Midday heat haze** softens anything shot at distance, which pushes the
  player onto the dawn/dusk rhythm without a rule ever being stated.
- Waterhole hides trade patience for near-certainty.
- The ethics bite: baiting a predator is the easy way and it is the wrong one.

**"Caught" means:** a publishable frame — sharp, well lit, and ideally showing
**behaviour** rather than a portrait.

---

### Researcher — savanna

**The problem: one sighting means nothing.** The answer only appears across
many.

The loop: **design a survey**, **run transects** along tracks or **place camera
traps** at waterholes and trails, **identify individuals** from their markings,
and **return** — until a population picture accumulates.

Savanna-specific texture:

- **Individual ID is the savanna speciality.** Photograph a lion's whisker
  spots and you have not "caught a lion" — you have caught *that* lion, and
  seeing her again next season is the actual data.
- Camera traps run while the player is elsewhere, which suits days passing
  inside a life stage.
- Scat and spoor give diet and presence without ever seeing the animal.
- Collaring exists but needs **a permit and a vet**, and it is the slow,
  bureaucratic, high-value option.

**"Caught" means:** a completed record. Identified, re-sighted, and placed in a
population — not a single encounter.

---

### Tour guide — savanna

**The problem: other people.** They have expectations, a schedule and a limited
tolerance for sitting still.

The loop: **read the conditions**, **plan the drive**, **track** — spoor, alarm
calls, vultures circling, oxpeckers rising — **find it**, **position** so
everyone can see and photograph, **interpret** it so they understand what they
are looking at, and **keep them safe**.

Savanna-specific texture:

- **The guide radio network is real** and is the guide's superpower: other
  guides share sightings, so reputation and relationships are mechanical.
- Clients arrive wanting the Big Five. **The actual skill is making a dung
  beetle fascinating on a morning with no lion** — and that is a genuine
  measure of a guide.
- Safety is not decoration: never between an elephant and its calf, never on
  foot near buffalo.
- Dawn and dusk drives are the working day; midday is downtime.

**"Caught" means:** you found it, showed it, and the people with you understood
what they saw.

---

### The asymmetry, made concrete (idea 52)

The same four savanna animals, three careers:

| Animal | Photographer | Researcher | Tour guide |
|---|---|---|---|
| **Lion** | Medium — findable, but needs light and behaviour | Medium — easy to find, individual ID takes work | **Easy** — famous, findable, and the radio net finds them |
| **Meerkat** | **Easy** — diurnal, active, predictable at burrows | **Easy** — habituated study groups are real | Easy |
| **Leopard** | **Hard** — nocturnal, cryptic, solitary | Medium — camera traps do what eyes cannot | **Hard** — the guide's white whale |
| **Aardvark** | **Very hard** — nocturnal and rare | **Easy** — a camera trap does not sleep | **Very hard** — clients are in bed |

None of that was hand-tuned. It falls out of what each profession can actually
do, which is exactly what idea 52 asked for.


---

## Question 4 — how many quests, and which real stories

> **Claude-contributed**, 2026-08-24, with the savanna worked as the example.
> (The savanna section above answers question 3 — the encounter loops — and is
> a separate thing.)

### The count

The structure already decides it. Four adult life stages x twelve biomes:

- **Four quests per biome, one per adult life stage.** 48 in total — **48 is the campaign, not the game.** See "How many quests, actually": postgame adds 12 mythology and 13 fossil quests, for 73 defined.
- **Farmland & Town carries two extra** — the kid and teen tutorials — so 6.
- **~50 authored quest lines**, of which one playthrough needs 15–20 (question
  2's threshold rule). The rest are replay and other-career content.

At roughly three hours per biome that is **about 45 minutes a quest**, which is
the right size for evidence-gathering, a decision and a consequence.

### The organising principle: scale escalates with the player

The life stages give the escalation for free, and it maps onto how conservation
work actually widens as a career grows:

| Stage | Scale of the problem |
|---|---|
| **Young adult** — apprentice | One homestead, one farm, one valley. You are helping someone else |
| **Adult with skills** — qualified | A district. Your own project, your own name on it |
| **Adult with influence** — professional | National. Policy, industry, law |
| **Elder** — mentor | Legacy. What outlives you, and who you taught |

---

### SAVANNA — the four quests

**1. Young adult — the lights on the boma**
*Animal: lion. Scale: one homestead, then a valley. No villain.*

Herders are killing lions that take cattle at night. Everyone is behaving
reasonably: the lions are hungry, the cattle are somebody's entire wealth.
The answer turns out to belong to **a thirteen-year-old boy** — flashing lights
around the enclosure that mimic a person walking with a torch.

*Real: Richard Turere, Kitengela, Kenya, around 2011.*
**Teaches:** the answer does not have to come from an expert.

**2. Adult with skills — the dogs**
*Animal: cheetah. Scale: a farming district. No villain.*

Farmers are shooting cheetahs over livestock losses. The fix is not aimed at
the cheetah at all — it is **giving the farmer a dog**. Anatolian shepherds
raised with the herd cut losses so far that shooting stops being worth it.

*Real: Cheetah Conservation Fund, Namibia, since 1994.*
**Teaches:** you can save a predator by solving somebody else's problem.

**3. Adult with influence — the poisoned carcass**
*Animal: vultures. Scale: national. **Villain: yes.***

Vultures circling a carcass tell rangers where poaching happened — so poachers
have begun **poisoning carcasses deliberately to kill the vultures**. Hundreds
die at a single kill. Several African vulture species have fallen by over 90%.

This is idea 47's villain case done properly: not a farmer with no
alternative, but people destroying an animal on purpose to hide a crime.

**Teaches:** an animal nobody loves, doing a job nobody noticed, being wiped
out as a side effect of concealment.

**4. Elder — the farms**
*Animal: lion again. Scale: national policy. **Villain: yes.***

**350+ captive lion farms holding 8,000–12,000 animals.** Cubs pulled from
their mothers within days so the female breeds again sooner, sold as petting
experiences, then walking-with-lions, then canned hunting, then the bone trade.
Volunteers are told they are hand-rearing orphans for release.

*Real: ended in principle by South African government policy, May 2021.*

**Teaches:** idea 55, exactly. The industry's entire product is **the feeling
the player was given honestly as a child** — bottle-feeding a genuine orphan —
resold as a lie.

### Why these four, in this order

They **bookend on the lion**. You begin as an apprentice keeping lions alive
for herders who have no alternative, and you end as an elder dismantling an
industry that breeds lions to be petted and shot. Same animal, opposite moral
ends, across one life.

They also escalate through the villain question deliberately: two quests where
nobody is a villain, then two where somebody is — which teaches the player to
tell the difference rather than assuming either.

### The same quest, three careers (idea 46)

Quest 1, entered from each side:

- **Photographer** — documents the killed cattle and the lions, and the
  photograph of the lit boma at night is what carries the idea to the next
  valley.
- **Researcher** — records when and where attacks happen, and proves with data
  that the lights work rather than asserting it.
- **Tour guide** — already knows these herders, translates between them and the
  conservationists, and is the one who saw the idea working somewhere else.

One authored quest. Three genuinely different jobs inside it.

### Held in reserve for the savanna

Good stories that did not make the four, kept for post-game, other stages or
other careers: **Operation Rhino** (Ian Player, from ~50 white rhinos),
**the 1989 Kenyan ivory burn**, **the Botswana veterinary fences** that cut the
wildebeest migrations, and **painted dog snare removal**.


---

## Mandatory or optional? Revisiting the threshold

> **Claude-contributed**, 2026-08-24. Ayr asked why a playthrough would only
> need 15–20 of the 48 quests rather than all of them. Honest answer: **the
> threshold was solving a problem that no longer exists.**

### Where the threshold came from

It was proposed when idea 32 looked like it might mean *many* quests per biome
per stage — a number in the high dozens that no playthrough could absorb. Once
the count settled at **one quest per biome per adult stage — 12 per age, 48
total** — that pressure went away. Ayr's instinct is correct.

### It also duplicated something already decided

Replay value was the other argument for a threshold: play again, take a
different route. But **idea 50 already provides replay** — three careers that
are three different games. Different quest routes were solving a problem the
careers had already solved, at the cost of players never seeing content that
exists.

### The real constraint is time, and here it is honestly

| | Quest time | Plus world, travel, encounters, facilities | Campaign |
|---|---|---|---|
| **All 48 at ~45 min** | 36 h | ~20 h | **~55 h** |
| **All 48 at ~30 min** | 24 h | ~16 h | **~40 h** |
| **36 (three per biome) at ~45 min** | 27 h | ~18 h | **~45 h** |
| 15–20 of 48 | ~13 h | ~27 h | ~40 h |

So **mandatory does not break anything — it lengthens the campaign.** 55 hours
is entirely normal: Witcher 3 is ~52, Stardew ~52, Fire Emblem: Three Houses
runs 35–80 per route. And Ayr has already said 120 hours across three careers
is the goal rather than the fear.

### The argument that mandatory is actually *better* here

Three reasons, and the third is the strong one:

1. **The stories are the point of the game.** Letting a player skip them is
   letting them skip the reason it exists.
2. **Nothing authored goes unseen.** 48 hand-researched quests is a great deal
   of work to leave optional.
3. **Returning to a place across a life is the whole emotional structure.**
   Visiting the savanna four times is not repetition — it is the point. You
   arrive as an apprentice keeping lions off cattle, and come back decades later
   as an elder to shut down the lion farms. The seasons have turned, your
   standing has changed, the animals you knew have died, and their descendants
   are still there. **A threshold would let players opt out of exactly the thing
   the life-stage structure exists to deliver.**

### What it changes

- **Advancement simplifies.** A stage ends when its **twelve quests are done**
  and the assessment is passed. No threshold arithmetic.
- **The four quests per biome must be genuinely different from each other**,
  since everyone plays all of them. No filler — the savanna's four are lions,
  cheetahs, vultures, lions again, and they are four different kinds of problem.
- **The writing cost is now fixed and known: 48 quests, all shipped, all
  played.** That is the single largest content commitment in the project and it
  should be sized deliberately.

### Recommendation

**Make all 48 mandatory**, and let the campaign land at 50–55 hours rather than
40. The 40-hour figure was a market comparison, not a requirement, and the
market's own examples run right through it.


---

## Ideas — round eighteen: the impact ladder, and the facility comes first

*Ayr's, 2026-08-24. These correct the savanna example above.*

**66. No animal twice in the same biome.** Each of a biome's four quests takes a
different species.

**67. The impact ladder, in Ayr's words:**

| Stage | What the player does |
|---|---|
| **Young adult** | **Local change** |
| **Adult with skills** | **Figuring out the problem on a larger scale** |
| **Adult with power** | **Establishing a program** |
| **Elder** | **Enacting laws and policy changes** |

This is sharper than the version proposed above and replaces it. It also
describes how conservation careers genuinely widen — you fix a fence, then you
understand the pattern, then you build the institution, then you change the law.

**68. A facility must be established in every biome during the young adult
stage**, so that animals encountered there have somewhere to go.

### How the facility fits the young adult quest (Claude note)

Cleanest reading: **the local-change quest is what earns the facility.** Solving
the first problem is what gets you the standing, the land, the permission and
the goodwill to establish a base. So every biome opens the same way — arrive,
prove yourself locally, put down roots — and the facility exists from then on to
receive whatever you encounter afterwards.

That gives all twelve biomes a consistent, satisfying opening beat without
twelve separate designs.

---

### SAVANNA — corrected

Four quests, four different animals, following the ladder in idea 67.

**1. Young adult — local change · LION**
*The lights on the boma.* Herders killing lions that take cattle at night;
everyone reasonable; the answer belongs to a thirteen-year-old boy with flashing
lights. **Solving it earns the land and trust to establish the savanna
facility.** *Real: Richard Turere, Kitengela, ~2011.*

**2. Adult with skills — the larger pattern · CHEETAH**
*The dogs.* Not one farm but a whole district shooting cheetahs. The work is
understanding **why** livestock losses happen and what actually reduces them —
and the answer is not aimed at the cheetah at all, it is Anatolian shepherds
placed with the herds. *Real: Cheetah Conservation Fund, Namibia, since 1994.*

**3. Adult with power — establishing a program · VULTURE**
*The poisoned carcass.* Poachers poison carcasses deliberately, because
circling vultures show rangers where a kill happened. Hundreds die at once;
several African species are down over 90%. The work is **building the
institution** — a poison-response unit, carcass monitoring, trained teams.
**Villain: yes.**

**4. Elder — law and policy · ELEPHANT**
*The burn.* The ivory trade, and the fight to change it internationally —
culminating in the 1989 CITES ban and Kenya burning twelve tonnes of
confiscated ivory in public to prove the stockpile would never be sold.
The work is **policy**: treaties, bans, and the argument against selling
stockpiles. **Villain: yes.**

### What moved, and why

**The captive lion industry quest is relocated.** It repeated the lion and would
have broken idea 66. It belongs better in **Farmland & Town** — captive lion
farms are agricultural operations, not wild savanna — where it also works as
the dark mirror of the player's own facilities: the same buildings, the same
cubs, sold as a lie. Idea 55 lands harder there than it would have in the
savanna.

**Still in reserve for the savanna:** Operation Rhino, the Botswana veterinary
fences and the wildebeest migrations, painted dog snare removal.


---

## Working method: story menus, not story picks

> **2026-08-24.** Ayr: *"we can come up with possible stories based on different
> real life stories you research and I can choose if I like them or not."*
> From here Claude researches and offers options per slot; Ayr chooses.

Also noted: **the captive lion industry story does not move to Farmland &
Town.** That biome is the home and the tutorial ground and the tone is wrong.
It goes back to the reserve pile pending a better home.

---

## SAVANNA — the menu

Four slots, one per adult life stage. **No animal may repeat within the biome**,
so choices interact — the animal is listed against each option.

### Slot 1 · Young adult · local change · earns the facility

| | Story | Animal |
|---|---|---|
| **A** | **Lion Lights.** Herders killing lions that raid cattle at night. A thirteen-year-old works out that flashing lights mimic a person walking with a torch, and the killing stops. *Richard Turere, Kitengela, ~2011* | Lion |
| **B** | **Beehive fences.** Elephants raid crops and are killed for it. Elephants turn out to genuinely fear bees — they flee the sound and have an alarm call for it. Hives strung along a fence line deter **76% of elephants annually, up to 86% at peak crop season**, over a nine-year study. **The farmers also sell the honey.** *Lucy King / Save the Elephants, Kenya* | Elephant |
| **C** | **Chilli fences and deterrents.** Lower-tech crop protection — chilli-oil rags, buffer crops, watch towers. Cheaper, cruder, less effective | Elephant |

*B is the strongest win-win on the list: the farmer ends up with a second
income, which is why it spread.*

### Slot 2 · Adult with skills · understanding the problem at scale

| | Story | Animal |
|---|---|---|
| **A** | **The guard dogs.** A whole district shooting cheetahs over livestock. The answer is not aimed at the cheetah — Anatolian shepherds raised with the herds cut losses enough that shooting stops being worth it. *Cheetah Conservation Fund, Namibia, since 1994* | Cheetah |
| **B** | **Snares and sickness.** A painted dog population crashing for two reasons at once — wire snares set for bushmeat, and rabies and distemper crossing from village dogs. The work is separating the two causes | African wild dog |
| **C** | **Rinderpest.** A cattle disease crossing into wildlife and collapsing wildebeest and buffalo herds. Eradicated in 2011 — **only the second disease ever eradicated**, after smallpox | Wildebeest / buffalo |

### Slot 3 · Adult with power · establishing a program

| | Story | Animal |
|---|---|---|
| **A** | **The conservancies.** Communities given legal ownership of the wildlife on their land. Namibia now has **86 communal conservancies covering over 20% of the country**, returning **$10M+ a year** to the people living there. In Kenya, **two-thirds of large mammals live on communal and private land, not in state parks** | Multi-species |
| **B** | **The poison response.** Poachers poisoning carcasses deliberately, because circling vultures show rangers where a kill happened. Hundreds die at one carcass. The work is building the institution — response teams, carcass monitoring, safe zones. **Villain: yes** | Vulture |
| **C** | **Operation Rhino.** Moving southern white rhino out of the last reserve holding them, from roughly fifty animals. *Ian Player, South Africa, 1960s* | White rhino |

### Slot 4 · Elder · law and policy

| | Story | Animal |
|---|---|---|
| **A** | **The burn.** The international ivory fight, the **1989 CITES ban**, and Kenya burning twelve tonnes of confiscated ivory in public to prove the stockpile would never be sold. **Villain: yes** | Elephant |
| **B** | **The fences.** Botswana's veterinary cordon fences, built to protect cattle from disease, cut the wildebeest migration routes and caused mass die-offs. **A policy that caused the harm** — and the elder's work is unpicking it. An inversion of every other quest here | Wildebeest |
| **C** | **The horn question.** Rhino horn trade policy, including the genuinely contested argument about whether a legal trade would undercut poaching or legitimise it. **The one with no clean answer** | Black rhino |

### Notes on combinations

- **A + A + B + A** is the escalation I would pick: lions, cheetahs, vultures,
  elephants. Four species, two without villains then two with.
- **B in slot 1 blocks A in slot 4** — both are elephants.
- **Slot 4 option B** is the most unusual: the antagonist is a well-meaning
  policy, not a person. It would teach something none of the others do.
- **Slot 4 option C** has no correct answer, which may be the most honest quest
  in the game or the most frustrating.


---

## SAVANNA — CHOSEN

> **Ayr, 2026-08-24.** Slot 1 B, slot 2 A, slot 3 A, slot 4 C.

| Stage | Impact | Story | Animal |
|---|---|---|---|
| **Young adult** | Local change · **earns the facility** | **Beehive fences.** Elephants raid crops and are killed for it. Elephants genuinely fear bees — they flee the sound and have an alarm call for it — so hives strung along a fence line deter 76% of elephants annually and 86% at peak crop season. **The farmers also sell the honey.** *Lucy King / Save the Elephants* | **Elephant** |
| **Adult with skills** | The problem at scale | **The guard dogs.** A whole district shooting cheetahs over livestock. The fix is not aimed at the cheetah — Anatolian shepherds raised with the herds cut losses until shooting stops being worth it. *Cheetah Conservation Fund, Namibia, since 1994* | **Cheetah** |
| **Adult with power** | Establishing a program | **The conservancies.** Communities given legal ownership of the wildlife on their land. Namibia: **86 communal conservancies, 20%+ of the country, $10M+ a year** returning to residents. Kenya: **two-thirds of large mammals live outside state parks** | **Gemsbok** |
| **Elder** | Law and policy | **The horn question.** Rhino horn trade policy, including the genuinely unsettled argument over whether a legal trade would undercut poaching or legitimise it. **No clean answer** | **Black rhino** |

Animals used: elephant, cheetah, gemsbok, black rhino. **Lion, wildebeest, vulture, wild
dog and white rhino remain free** for the conservancy slot or for reserve.

### Follow-up 1 — the conservancy quest needs a representative animal

Idea 28 says a quest ends in saving or fully researching **an animal that
represents its species**, and "multi-species" cannot do that. Options, all
consistent with the Namibian story and none clashing with the other three:

- **Oryx / gemsbok** — the emblematic conservancy animal, and it opens the
  honest topic of conservancies part-funding themselves through regulated
  quotas. Contested, and true.
- **Desert-adapted lion** — Namibia's most famous conservancy tension: lions
  recovering *because* of conservancies, then killing conservancy livestock.
  Powerful, but it makes three consecutive livestock-conflict quests.
- **Hartmann's mountain zebra** — quieter, cleanly a recovery story, no conflict
  angle.
- **Springbok** — the commonest conservancy species; the least dramatic and the
  most representative.

**Recommendation: oryx.** It carries the money argument, which is what the
conservancy story is actually about, and it avoids a third predator-livestock
quest in the same biome.

### Follow-up 2 — slot 4 has no correct answer, and that breaks the format

Every quest so far follows Safari Saga's inherited shape: gather evidence,
choose among proposals, **one works**. The horn question deliberately has no
proposal that works, which is why it is interesting and why it needs a different
structure.

What the real argument looks like:

- **For a legal trade:** horn regrows and can be cut without killing the animal;
  a legal supply could undercut poaching and fund protection.
- **Against:** it may stimulate demand rather than satisfy it; legal horn
  launders illegal horn; no legal supply could meet the demand anyway.
- **Separately: dehorning** — cutting horns off living rhinos as a deterrent.
  Effective in places, and it changes the animal's life.

Three ways to build it:

1. **No funded outcome.** You present the strongest case you can and the
   decision goes elsewhere. Honest, and possibly unsatisfying as an ending.
2. **Several partial answers.** Every option helps something and costs something
   else, and the outcome text says exactly what you traded. This preserves the
   structure while abandoning the single right answer.
3. **The quest is the argument.** Success is measured on whether you argued from
   evidence rather than on which side you took — which is the researcher's
   defence assessment, used as a quest.

**Recommendation: 2, with 3's scoring.** It keeps the proposal format the whole
game runs on, and it lets the elder stage end on the honest note that some
conservation questions are still open — which is a stronger last lesson than a
win.


---

## THE QUEST TEMPLATE

> **Ayr, 2026-08-24.** The shape every one of the 48 quests follows.

**1. Learn the problem** → **2. Find the clues** → **3. Choose the right
solution** → **4. Build it** → **5. Cutscene: what really happened**

| Beat | What it is | Inherited from |
|---|---|---|
| **1. Learn the problem** | Meet the person whose problem it is. This is also what **opens the case** — findings stay inert until you have heard it | Safari Saga's giver, plus the clue gate |
| **2. Find the clues** | Field evidence, gathered in your career's own way — photographed, measured, or learned from the people who live there | The evidence system, now career-specific |
| **3. Choose the solution** | Several plausible proposals, argued properly. Wrong answers fail for **specific stated reasons**. Length and position are randomised | The proposal system, with both tells fixed |
| **4. Build it** | Actually put it in. The hives go on the fence, the dogs go to the farms, the conservancy is registered | Safari Saga's build stage |
| **5. The cutscene** | **What really happened.** The real event, the real place, the real people, credited by name | **New — and it is the sourced codex made into a story beat** |

### Why beat 5 matters more than it looks (Claude note)

This is the **sourced codex decision landing somewhere the player will actually
see it.** Not a menu nobody opens — the payoff at the end of every quest.

It means all 48 quests end with real people being named: **Richard Turere**,
**Lucy King**, **Laurie Marker**, **Ian Player**. The fictional characters carry
the playable story; the closing scene hands the credit back to whoever actually
did it. That is the "fictional characters, real credited history" decision made
concrete.

It also solves a tone problem for free. A quest that ends *"and then it worked"*
is a fairy tale. A quest that ends *"and this is the part that is true, and here
is who did it, and here is what is still unresolved"* is the game Ayr is
actually making.

**The codex entry is the companion, not the substitute** — the cutscene gives
the feeling, the codex gives the detail, the dates and the sources.

### Beat 3, in the one quest that has no right answer

The savanna elder quest (the horn question) keeps all five beats. Beat 3 offers
**several partial answers, each of which helps something and costs something
else**, and the outcome states plainly what was traded. Scoring is on **whether
the player argued from the evidence they gathered**, not on which side they
took.

Beat 5 then does something no other quest does: it says the argument **is still
going on**. The elder stage ends on an open question rather than a win, which is
a stronger last thing to teach.


---

## Roster gaps, and ~82 species to add

> **Claude-contributed**, 2026-08-24. Ayr confirmed **1000 counts species**, so
> folding 82 juveniles into their adults frees 82 slots. This is where they
> should go.

### The arithmetic

```
1000 entries now
 -82 juveniles folded into their adults as life stages
 =918 species
 +82 new species
=1000
```

### What the data says

Regions, counted from the habitat sentences of the 647 live species:

| Region | Species |
|---|---|
| Ocean / global | 104 |
| Africa | 101 |
| Asia | 85 |
| South America | 62 |
| North America | 60 |
| Australasia | 48 |
| Polar | 22 |
| **Europe** | **16** |

**Europe at 16 is the outlier by a distance** — a quarter of Australasia, a
sixth of Africa. And the thinnest biomes are **caves (6–10)**, **open ocean
(16–32)** and **polar (22–29)**.

### Accuracy note

Several apparent gaps are not gaps. `badger` is the **Honey Badger**, not the
European one. `lynx`, `ibex`, `beaver` and `dormouse` are generic entries that
arguably already cover their European species. `puffin`, `leatherback`,
`sailfish`, `manta ray`, `giant squid` and `pine marten` are all present.
Anything proposed below was checked against the actual keys.

### The proposal

**Europe — 26.** The largest gap and the easiest to fill well.

*European badger · European wildcat · European bison (wisent) · chamois ·
capercaillie · hoopoe · European adder · common buzzard · northern gannet ·
red-billed chough · corncrake · red deer · roe deer · Eurasian otter ·
white-tailed eagle · red kite · nightingale · European hare · hazel dormouse ·
natterjack toad · great crested grebe · kingfisher · stag beetle · glow-worm ·
European eel · Atlantic salmon*

**Quest-worthy:** wisent (rebuilt from 54 captive animals, all living ones
descended from twelve), corncrake (mowing practice), red kite (reintroduction
after near-extirpation), European eel (a critically endangered animal almost
nobody realises is in trouble), Atlantic salmon (dams and rivers).

**Polar — 14.** Currently thin and it is a whole biome.

*Arctic tern · ivory gull · snow petrel · south polar skua · Adélie penguin ·
gentoo penguin · king penguin · chinstrap penguin · Antarctic krill · collared
lemming · Arctic wolf · rock ptarmigan · Pacific walrus calf → (folded) ·
Antarctic toothfish · Weddell seal pup → (folded)*

**Quest-worthy:** Antarctic krill (the base of the entire Southern Ocean food
web, and now fished), Antarctic toothfish (the Ross Sea MPA fight), Arctic tern
(the longest migration of any animal).

**Caves — 14.** Currently six. This decides whether caves are a biome at all.

*Olm is already there. Add: blind cave fish (Mexican tetra) · Texas blind
salamander · cave cricket · New Zealand glow-worm · cave spider · cave crayfish
· harvestman · springtail · cave beetle · Kauaʻi cave wolf spider · bent-wing
bat · long-fingered bat · cave swiftlet · troglobitic isopod*

**Quest-worthy:** the swiftlet (nests harvested for bird's nest soup), and
white-nose syndrome across the bat species.

**Open ocean and deep sea — 16.**

*Bluefin tuna · yellowfin tuna · lanternfish · Portuguese man o' war · blue
shark · oceanic whitetip · salp · pyrosome · vampire squid · dumbo octopus ·
snailfish · gulper eel · viperfish · barreleye · Atlantic sailfish → present ·
sea butterfly (pteropod) · giant isopod*

**Quest-worthy:** bluefin tuna (the most valuable fish in the world and the
clearest quota story there is), oceanic whitetip (once among the most abundant
large animals on earth, now critically endangered), sea butterfly (dissolving
shells — ocean acidification made visible).

**Balance: 12 spare** for wherever the biome work turns up a hole.

### The one judgement call

**Caves.** Six species is not a biome. Fourteen additions would make it one —
but it competes with Europe, which is thinner relative to its real diversity
and much easier to make interesting. Worth deciding whether caves become a real
thirteenth biome or stay a **site type** inside others, as suggested earlier.


---

## CORRECTION: the biome classifier is wrong for 39% of species

> **2026-08-24.** Ayr disagreed with biome assignments seen in the gallery and
> asked for the full list. Checking it found a real error, and the earlier claim
> that "all 651 place, nothing is unassigned" was **true but misleading** —
> they were all placed, and about two in five were placed badly.

### The diagnosis

Of 647 live species:

| | |
|---|---|
| Placed by their **habitat sentence** | **394** — reliable |
| Fell through to the **zone fallback** | **252** — unreliable |
| No habitat text at all | 1 |

The habitat sentences of those 252 name **only a region, never a place**:

```
hedgehog  :: Europe, Asia and Africa
gecko     :: Warm regions worldwide
puma      :: The greatest range of any land mammal in the Americas
tasdevil  :: Tasmania
quokka    :: Rottnest Island and small pockets of Western Australia
```

Nothing in those strings says forest, desert or reef, so the classifier fell
back to **where the animal appears in Safari Saga's maps** — which is a
*gameplay* decision, not an ecological one. That is how barracuda, clownfish,
sea turtles, puffins, golden retrievers and highland cows all ended up filed
under **alpine**.

### What was actually wrong with the reasoning

The zone fallback was justified earlier as "a biome judgement somebody already
made by hand." That was wrong. Safari Saga's zones were laid out to make a game
work — which animals should appear on which screen for pacing and variety — and
they were never an ecological classification. Treating them as one imported
every gameplay compromise as a fact.

### The fix

The 252 need **real assignment**, and no rule can derive it because the source
data does not contain it. The options:

1. **Hand-assign the 252.** Tractable — these are well-known animals, and a
   hedgehog, a quokka and a barracuda are not hard to place. Ayr reviews and
   corrects.
2. **Improve the habitat text for those 252**, which fixes the classifier *and*
   improves the field guide. More work, more lasting.
3. Leave the 394 that are right and mark the rest **unassigned** rather than
   wrong, which is at least honest.

**Recommendation: 1 now, 2 later.** Hand-assign so the biome roster is usable,
and rewrite the thin habitat sentences when the field-guide text is revisited
for the new game anyway.

### Consequences for what was already decided

- **The twelve biomes stand.** The list came from the 394 reliable placements
  plus real-world biome structure, not from the bad 252.
- **The counts move.** Every per-biome number quoted earlier is provisional
  until the 252 are reassigned.
- **The gap analysis holds.** Europe at 16 was counted from *region* keywords,
  which the habitat sentences do contain reliably.
- **`design/biomes.js` needs its zone fallback removed** and replaced with an
  explicit assignment table.


---

## How the world is actually built

> **Claude-contributed**, 2026-08-24. Ayr asked the obvious question nobody had
> answered: twelve biomes, on a real Earth — so what *is* a biome, physically?

### The confusion is real

A biome is a **category**, not a place. Savanna exists in Kenya, Namibia,
Brazil and northern Australia. Temperate forest covers a third of the northern
hemisphere. "Go to the savanna" is not a destination the way "go to Nairobi" is.

### The answer, which is already implied by decisions made

Two earlier decisions settle it together:

- The map is **real Earth**.
- A **stated fiction covers geography only** — the map compresses and
  composites real places so a life can be lived across it.

So: **each biome is one composite region on the real map.** A named, bounded,
walkable place that draws on several real locations of that biome type, with
the codex saying which.

### The shape

**One home region + eleven field regions.**

- **Home is Farmland & Town.** Where the player grows up, where the kid and
  teen stages happen, and where they come back between field seasons. It is
  also the largest roster at 89 species, which is convenient rather than a
  coincidence — it is the biome humans live in.
- **Eleven field regions**, each a composite standing for one biome.
- **You travel** the way the professions actually do: field seasons, flights,
  boats, a posting that lasts months. Travel is a life event, not a menu.

### Candidate real anchors

Each region composites the places its quests actually come from:

| Biome | Composited from | Because the quests are there |
|---|---|---|
| **Savanna** | Kenya + Namibia | Lion Lights is Kitengela; the guard dogs and conservancies are Namibian |
| **Farmland & town** | Temperate Europe / N. America | Home. Pets, livestock, hedgerows, garden wildlife |
| **Temperate forest** | Central Europe + Pacific NW | Wisent, lynx, wolves, old growth |
| **Rainforest** | Amazon + Borneo | Two very different rainforests, both quest-rich |
| **Wetlands** | Everglades + the Danube delta + Pantanal | Cranes, otters, beavers, caimans |
| **Coast & kelp** | California + North Atlantic | Sea otters, puffins, Project Puffin, kelp |
| **Mountains** | Andes + Himalaya | Condors, snow leopards, ibex |
| **Desert** | Namib + Sonoran + Australian interior | Arabian oryx, bilby, Gila monster |
| **Coral reef** | Great Barrier + Coral Triangle + Cabo Pulmo | The reef stories are Pacific and Mexican |
| **Open ocean** | Pacific + Southern Ocean | Whales, albatross, longlines, tuna |
| **Polar** | Svalbard + Antarctic Peninsula | Polar bears at one end, penguins at the other |
| **Caves** | *see below* | |

### What is inside a region

Each of the eleven is a **contiguous scrolling area** — not a screen, not a
menu — containing:

- **Micro-regions** (idea 40): a waterhole, a burnt block, a village edge, a
  gorge.
- **The facility**, established during the young adult stage.
- **Four quests**, one per adult life stage.
- **Guaranteed-encounter sites** (idea 19): the beaver pond, the moose field.
- **Seeded content**: which micro-regions generate where, which animals are
  present this run, weather, season.

### Caves resolve themselves

Cave is down to **5 species**. It is not a region. It becomes a **micro-region
type** appearing inside forest, mountains and coast — which is where those five
actually live. That frees its slot, and the twelfth region can be either a
second forest type (**taiga**, currently folded in) or a second ocean type.

### The honest wrinkle

**Polar composites two poles.** Arctic and Antarctic share no species and are
opposite ends of the planet, and putting polar bears and penguins in one
"region" is the compression working hardest. Either accept it and say so in the
codex, or split polar into two and drop something else.


---

## Reopening the map decision — the data argues against a real Earth

> **2026-08-24.** Ayr, on reading how the world would be built: *"this is making
> me think we do need to make our own map."* Asked for the reasoning from the
> data. Here it is, and the data does point that way.

### 1. Every single region is already invented

Look at what the composites actually are:

| Region | Composited from | Distance |
|---|---|---|
| Rainforest | Amazon **+ Borneo** | Different hemispheres. **No shared species** |
| Wetlands | Everglades + Danube + Pantanal | Three continents |
| Desert | Namib + Sonoran + Australian interior | Three continents |
| Coast | California + North Atlantic | Opposite sides of a continent |
| Savanna | Kenya + Namibia | 3,000 km |
| **Polar** | **Arctic + Antarctic** | **Opposite ends of the planet** |

**Not one region is a real place.** Every one is a fiction already. At that
point "the real world" is a claim being maintained at cost rather than a truth
being preserved.

### 2. Compositing breaks the thing the real map was for

The strongest argument for a real Earth was **teaching where animals actually
live**. But a rainforest region containing both jaguars and orangutans teaches
the opposite — it teaches that they share a forest. The educational value of
real geography dies the moment two continents are merged, and we merged them in
every region.

### 3. It contradicts the scrolling contiguous world

Idea 60 wants a world that **scrolls**, and idea 34 wants biomes to **hand off
to each other** — finish one region's last quest and you begin the next already
in place. On a real Earth that is an intercontinental flight between every
quest chain. You cannot walk from the Serengeti to Borneo. On an invented
continent the regions can genuinely border one another.

### 4. Seeded generation was already sacrificed for it

The real map forced "fixed geography, seeded content" — giving up procedural
terrain, which was the whole Diablo influence in ideas 1 and 5. An invented
world gives it back.

### 5. The costs were being paid without the benefits

A real setting brings a **cultural representation responsibility** with a real
consultation budget, and an obligation to engage with conservation's colonial
history. Those costs are worth paying *for accuracy*. They are not worth paying
for a map that has already merged Borneo into the Amazon.

### What is actually lost — honestly, not much

- **Geographic education.** Already lost to compositing.
- **The career road map.** Barely affected — FGASA and the real qualifications
  live in the codex, not in the terrain.
- **Credibility.** This is the real one. A conservation game in an invented
  world could read as less serious.

### Why credibility survives — the codex was doing that work all along

The **sourced codex** and the **fifth quest beat** are what carry the truth, not
the map. A quest can play out in an invented savanna and still end with:

> *This is based on Lion Lights, invented by Richard Turere in Kitengela,
> Kenya, in 2011.*

The real people are credited, the real event is named, the real place is
stated. **None of that needed the terrain to be Kenya.** The map was never the
thing making it true — the sourcing was.

### The shape this suggests

**An invented world, with real biomes, real species placed by real biome, and
real stories credited to real places in the codex.**

- Regions are recognisably savanna, reef, taiga — real biome types.
- Species are placed by **where they actually live ecologically**, so a jaguar
  is still a rainforest animal.
- **Species do not have to co-occur wrongly**, because an invented world can
  have *two* rainforest regions if it wants — a New World one and an Old World
  one — which a single composited "rainforest" could not.
- Regions can **border each other**, so the world scrolls and hands off.
- **Terrain can be seeded**, restoring ideas 1 and 5.
- The codex still says, every time: this happened, here, to these people.

That last point resolves the polar problem too. An invented world can simply
have a **northern ice** region and a **southern ice** region.


---

## Clarification: an invented world still has a map

> **Ayr, 2026-08-24.** *"It doesn't have to be the biomes morph into each other.
> There can still be a map."*

Correct, and the previous section overstated the case. **Regions bordering one
another was never a requirement** — and forcing it would look ridiculous, since
tundra does not touch a coral reef in reality either.

### The structure

**An invented world, with a world map, holding twelve discrete regions.**

- The world is **invented** — a continent, a planet, an archipelago. Its own
  geography, its own names.
- It has a **world map**, and the regions are **separate places on it**, laid
  out sensibly relative to each other: ice at the poles, reefs and rainforest
  near the equator, temperate forest between.
- **Each region is internally contiguous and scrolls** — that was the actual
  ask in idea 60. The scrolling is *within* a region, not between them.
- **Travel between regions is a deliberate act**, matching how the professions
  work: a field season, a posting, a boat out. Not a menu click, and not a walk.

### What this fixes

- **The hand-off (idea 34) becomes narrative rather than physical.** Finishing a
  region's last quest sends you to the next one — you arrive already working.
  That was always the intent; it never required a shared border.
- **No absurd adjacencies.** Nobody has to explain a desert against an ice
  shelf.
- **Regions can be far apart and it costs nothing**, because the map is
  invented and travel is a story beat.

### And the seed gets more to work with

With an invented world, the seed can shape the **world map itself**, not just
what grows inside a region:

- where the regions sit relative to each other
- the shape and size of each
- which micro-regions generate inside them
- which species are present this run, and in what abundance
- weather, season, and the order the quests come to you

That is the Diablo influence (ideas 1 and 5) restored at the level it was
originally meant for — **a different world each time, built from the same
honest parts** — which the real-Earth version could never have offered.


---

## How much should actually be generated?

> **Ayr, 2026-08-24.** *"I don't know if I want a new world map generated every
> time."* The doubt is well founded — and it runs against idea 5, which is worth
> re-examining rather than defending.

### The argument against generating the map

**This game is about attachment to a place across a lifetime.** That is the
whole point of the six life stages, of returning to the savanna four times, of
the beaver pond widening over decades and the raven's descendants recognising
you. **Randomisation fights every one of those.**

Concretely:

1. **You cannot return somewhere that was never the same place.** "Come back to
   the savanna as an elder" only lands if it is *the* savanna — the same ridge,
   the same waterhole, the same crooked tree that was already old when you were
   an apprentice.
2. **Beloved game worlds are specific.** Hyrule, Pelican Town, Hallownest.
   People love *places*. Procedural worlds are admired for their systems and
   almost never loved as geography.
3. **48 authored quests need somewhere to be.** Placing fixed story into
   generated terrain is one of the hardest problems in the field, and it usually
   produces landmarks that sit slightly wrong.
4. **Handmade landmarks cannot exist** in a generated world without enormous
   effort — and landmarks are how a place becomes memorable.
5. **Replay value is already solved.** Idea 50 gives three careers that are three
   different games. Generation was solving a problem that no longer exists.

### The argument for it

Really only one: it was in idea 5, and the Diablo influence is genuine. But
Diablo is a game about *loot and combat variety*, where a fresh layout each run
is the point. This is a game about *knowing a place well enough to notice what
has changed in it*. The two want opposite things from terrain.

### The proposal

**A fixed, handmade world map. Seeded contents.**

| Fixed and authored | Seeded per save |
|---|---|
| The world map, and where the twelve regions sit | Which animals are present this run, and how abundant |
| Each region's terrain, coastline and landmarks | Where individuals are on a given day |
| Micro-region *locations* — the waterhole, the gorge | Weather, and how a season runs this year |
| Where the facility goes | Which quest reaches you first |
| The 48 quests and their places | The rarity tier each species is dealt |

So the ridge is always the ridge. What is standing on it is not.

That keeps every consequence of the invented-world decision — two rainforests,
two ice regions, sensible layout, no cultural claim to fund — while giving up
only the part that was fighting the rest of the design.

### Note

Safari Saga already does exactly this: `runSeed` deals each species an
abundance tier per save, on a fixed map, "so a save is consistent with itself
across sessions." **The pattern is already built and already working** — the
proposal is to keep it rather than replace it.


---

## Breeds come out of the species roster

> **Ayr, 2026-08-24.** *"Take out the breeds of cats and dogs. Leave house cat
> and farm dog and generics like that."*

### What goes — 41 entries

**15 cat breeds:** Bengal, British Shorthair, Devon Rex, Maine Coon, Norwegian
Forest Cat, Oriental Shorthair, Persian, Ragdoll, Russian Blue, Savannah Cat,
Scottish Fold, Siamese, Sphynx, Turkish Van, Abyssinian.

**26 dog breeds:** Akita, Alaskan Malamute, Australian Shepherd, Beagle,
Bernese Mountain Dog, Border Collie, Bulldog, Chihuahua, Corgi, Dachshund,
Dalmatian, Dogue de Bordeaux, German Shepherd, Golden Retriever, Great Dane,
Greyhound, Jack Russell, Labrador, Poodle, Pug, Rottweiler, Saint Bernard,
Samoyed, Shiba Inu, Siberian Husky, Wolfdog.

### What stays

**House Cat, Tabby Cat, Calico Cat, Black Cat, Farm Dog, Puppy** — generics and
coat patterns rather than breeds.

And every **wild** cat and dog stays, obviously: Andean Cat, Asian Golden Cat,
Black-footed Cat, Bobcat, Fishing Cat, Jungle Cat, Marbled Cat, Pallas's Cat,
Rusty-spotted Cat, Sand Cat, Bush Dog, Raccoon Dog, African Wild Dog.

### They are not deleted — they change what they are

Idea 23 already has breed options in the kid pet choice: *"small: chihuahua,
dachshund, pug; medium: corgi, basset hound, pit bull; large: husky, golden
retriever, German shepherd."* That still happens.

**A breed becomes a customisation option on one species, not a species of its
own.** The player still picks a pug. The dex has one entry for Dog, with breeds
as variants — which is what a breed actually is.

### Two worth a second thought before they go

- **Savannah Cat** — a serval crossed with a house cat, and one of the clearest
  exotic-pet-trade stories there is. It may be worth keeping as a *wild*-adjacent
  entry rather than a breed, because it carries a quest.
- **Wolfdog** — the same argument in a different animal. Both are hybrids that
  exist because people wanted a wild animal in a living room.

### What this does to the roster arithmetic

```
1000 entries now
 -82 juveniles folded into their adults as life stages
 -41 cat and dog breeds folded into Dog and House Cat
=877 species
+123 new species
=1000
```

**123 free slots**, up from 82. Which covers the whole gap list with room to
spare: Europe 26, polar 14, caves 14, open ocean 16 — that is 70, leaving **53
still spare** for whatever the biome review turns up.


---

## The real test: is each biome a functioning ecosystem?

> **Ayr, 2026-08-24.** *"Stop worrying about continents. What's more important
> is that each biome is a functional ecosystem. So what's more needed is closer
> numbers of animals in each biome."*

This replaces the region-based gap analysis. Europe being thin does not matter
if the world is invented. **A biome with five species does matter**, because it
is not an ecosystem — it is a corridor with some bats in it.

### The current imbalance

After the 41 breeds come out of Farmland:

| Biome | Now | | Biome | Now |
|---|---|---|---|---|
| Forest | **105** | | Reef | 42 |
| Coast | 72 | | Open ocean | 36 |
| Rainforest | 67 | | Desert | 30 |
| Wetlands | 63 | | Mountains | 26 |
| Savanna | 58 | | **Polar** | **16** |
| Farmland | 54 | | **Caves** | **5** |

**Twenty-one to one.** Forest could lose forty species and still be the largest;
caves cannot lose any.

### The arithmetic works out almost exactly

```
 899 species (the 1000 less 101 juveniles, which are now life stages)
 -41 breeds
=858
+142 new species
=1000
```

Bringing every biome up to a floor of **50**:

| Biome | Now | Needs |
|---|---|---|
| Caves | 5 | **+45** |
| Polar | 16 | **+34** |
| Mountains | 26 | **+24** |
| Desert | 30 | **+20** |
| Open ocean | 36 | **+14** |
| Reef | 42 | **+8** |
| | | **145 total** |

**145 needed, 142 available.** Close enough that the floor is right at 50 — and
the final spread becomes **50 to 105** instead of 5 to 105.

### But numbers are the crude version of the test

"Functional ecosystem" is a better standard than a headcount, and it is
checkable. Each biome should carry:

- **an apex predator**
- **mesopredators** — the middle of the food chain
- **large herbivores** and **small herbivores**
- **scavengers and decomposers**
- **invertebrates**, including pollinators where it makes sense
- **birds**, and **something aquatic** if the biome has water

Run against the thin ones, that is where the real holes are:

**Caves (5)** — Olm and four bats. **No herbivores at all, no producers, no
predator-prey structure.** Not an ecosystem in any sense. It needs cave fish,
crickets, spiders, harvestmen, isopods, crayfish, salamanders, glow-worms,
swiftlets — a whole functioning cave community, which is roughly the 45 the
number demands anyway.

**Polar (16)** — surprisingly sound at the top: polar bear as apex, seals and
hares as prey, muskox and reindeer as herbivores, arctic fox as mesopredator,
snowy owl. **What is missing is the bottom**: krill, copepods, fish, seabirds
in numbers, and the invertebrates the whole thing rests on. Thirty-four
additions should be mostly small and mostly cold water.

**Mountains (26)** — good on hoofed herbivores and raptors, **thin on
everything small**: rodents, insects, ground birds, alpine amphibians.

**Desert (30)** — reasonable spread, **thin on invertebrates**, which is
backwards, since arid ecosystems are overwhelmingly invertebrate by biomass.

### What this changes about the earlier gap list

The Europe/polar/cave/ocean list was built around **regional** representation.
That is now irrelevant. **Rebuild it around ecological function**, biome by
biome, filling the roles each one is missing rather than the continents.


---

## Caves are cut as a biome — eleven regions

> **Ayr, 2026-08-24.** *"Get rid of caves as a category."*

**Twelve biomes becomes eleven.** Caves survive as a **micro-region type**
(idea 40) appearing inside forest, mountains, coast and desert — which is where
cave animals actually live, since almost nothing spends its entire life
underground.

### The five reassign

| Species | Goes to | Why |
|---|---|---|
| **Olm** | Wetlands | An aquatic salamander in underground *water* |
| **Greater Horseshoe Bat** | Forest | Roosts in caves, hunts over woodland |
| **Little Brown Bat** | Forest | Same |
| **Egyptian Fruit Bat** | Forest | Roosts in caves, forages in orchards and trees |
| **Mexican Free-tailed Bat** | Desert | Cave roosts, hunts over open arid country |

A bat is not a cave animal. It is a forest or desert animal that **sleeps** in a
cave — which is exactly what makes caves a micro-region rather than a biome.

### The eleven, and what balancing now costs

142 slots to spend, and no cave sink to fill:

| Biome | Now | Target | Needs |
|---|---|---|---|
| Forest | 108 | — | — |
| Coast | 72 | — | — |
| Rainforest | 67 | — | — |
| Wetlands | 64 | — | — |
| Savanna | 58 | — | — |
| Farmland | 54 | 57 | **+3** |
| Reef | 42 | 57 | **+15** |
| Open ocean | 36 | 57 | **+21** |
| Desert | 31 | 57 | **+26** |
| Mountains | 26 | 57 | **+31** |
| **Polar** | **16** | 57 | **+41** |
| | | | **137 of 142** |

**A floor of 57 is reachable, with five spare.**

The spread goes from **5:1 through 21:1** down to **57 to 108 — under two to
one.** That is a set of biomes that all read as real places.

### What the additions should be

Not "European species" — that framing is gone. **Roles the ecosystem is
missing:**

- **Polar (+41)** — sound at the top, missing its whole base. Krill, copepods,
  amphipods, cold-water fish, seabirds in numbers, sea stars, urchins.
- **Mountains (+31)** — good on hoofed herbivores and raptors, thin on
  everything small. Rodents, pikas, ground birds, alpine insects, high-altitude
  amphibians.
- **Desert (+26)** — thin on invertebrates, which is backwards for an arid
  system. Beetles, ants, termites, solifuges, spiders, plus more small reptiles
  and seed-eating birds.
- **Open ocean (+21)** — needs its midwater layer. Lanternfish, squid, salps,
  pyrosomes, siphonophores, and the deep-sea oddities.
- **Reef (+15)** — good on fish, thin on invertebrates and grazers. Urchins,
  molluscs, crustaceans, corals as animals.
- **Farmland (+3)** — nearly there already.


---

## Polar additions — chosen for interest, not for numbers

> **Claude-contributed**, 2026-08-25. Ayr: pick what is *interesting*, not what
> balances a food web, and no plankton or krill.

### The extraordinary ones

- **Antarctic icefish** — **the only vertebrate on earth with no haemoglobin.**
  Its blood is colourless and its heart is enormous to compensate. It also makes
  antifreeze proteins. Nothing else with a backbone lives like this.
- **Colossal squid** — **the largest eyes of any animal that has ever lived**,
  around 27 cm across, built to catch the faintest movement in black water.
- **Collared lemming** — the only rodent that turns white in winter, and it
  **grows an extra pair of digging claws each autumn and sheds them in spring.**
- **Antarctic sea spider** — polar gigantism. Elsewhere they are fingernail
  sized; here they reach the width of a dinner plate.
- **Bearded seal** — the males sing. A long descending spiral that carries for
  miles under the ice, and it is one of the strangest sounds in nature.
- **Hooded seal** — the male inflates a **bright red balloon out of one
  nostril** to display.

### The record holders

- **Arctic tern** — **the longest migration of any animal.** Pole to pole and
  back every year, so it sees two summers annually and almost no darkness.
- **Snow petrel** — one of only three birds ever recorded at the South Pole,
  and it nests on bare rock up to 300 km inland.
- **South polar skua** — also seen at the Pole. A pirate that makes other birds
  drop their food.
- **Long-tailed duck** — dives deeper than any other duck, over 60 m.
- **Little auk** — nests in Greenland scree **in the millions**; the colonies
  are among the largest gatherings of any bird.

### The penguins worth having separately

- **Adélie** — steals stones from its neighbours' nests, constantly and
  shamelessly.
- **King** — the chick takes **fourteen months** to fledge and overwinters as a
  brown woolly thing so unlike its parents that early sailors described it as a
  different species.
- **Gentoo** — the fastest penguin underwater, about 36 km/h.
- **Chinstrap** — nests higher and steeper than the others, on volcanic slopes.

### Fish, since the small stuff is out

- **Antarctic toothfish** — sold as "Chilean sea bass," and the centre of the
  **Ross Sea marine protected area** fight. A ready-made quest.
- **Arctic cod** — lives *in* the sea ice, in brine channels, kept liquid by
  antifreeze proteins.
- **Capelin** — the fish that everything else eats. This is how the food web
  gets represented without collecting plankton.
- **Arctic char** — the northernmost freshwater fish in the world.
- **Greenland halibut** — an eye migrates across its head as it grows.

### The other mammals and birds

- **Ringed seal** — **the polar bear's actual prey**, and it builds snow caves
  over its breathing holes to hide its pups. The bear's whole hunting method is
  built around finding them.
- **Arctic wolf** — white, high Arctic, and among the least-studied wolves
  because almost nobody goes where they live.
- **Rock ptarmigan** — turns white in winter and grows feathers over its feet
  as snowshoes.
- **Ivory gull** — pure white, and it **follows polar bears around** to scavenge
  what they leave. Declining fast and nobody is quite sure why.
- **Ross's gull** — faintly pink, breeds in Siberian bogs, and was mysterious
  enough that finding its nesting grounds was a minor expedition goal for
  decades.

**Twenty-five additions, which would take polar from 28 to 53.** Not chosen for
that, but it lands close to the floor anyway.

### Quest material in here

- **Antarctic toothfish** — the Ross Sea MPA, the largest in the world.
- **Antarctic icefish** — cannot survive warming water, and its whole biology
  explains why. Climate made legible in a single animal.
- **Ivory gull** — a sharp decline nobody has fully explained.
- **Arctic tern** — one animal that experiences the entire planet's seasons.


---

## Four postgame areas — the current counts

> **Ayr, 2026-08-25.** The cat and dog breeds stay in the game after all, as
> **postgame content**. Four areas unlock after the main story: **mythology,
> fossil, vigil, and domestic breeds.** Still 1000 total.

**The Vigil already exists in Safari Saga** and is exactly this: a
champion-gated memorial to extinct species. Its keeper says *"The Vigil is not a
trophy hall, ranger. Come back when you've finished the trail — and come back
ready to be sad for a while."* Its areas are The Roll Call, The Striped Hollow
and The Ice Wake.

### The full 1000, accounted for

| Bucket | Count | |
|---|---|---|
| **Live species** | **588** | the eleven biomes |
| **Vigil** (extinct, extinct-in-wild, memorial) | **101** | postgame |
| **Mythology** | **100** | postgame |
| Juveniles / life stages | 104 | fold into their adults |
| **Fossil** | **50** | postgame |
| **Domestic breeds** | **41** | postgame |
| Wardens | 13 | legendary guardians |
| Qilin, Thunderbird, Phoenix | 3 | legendary, untagged as mythic |
| | **1000** | |

### What this changes

The 41 breeds are **no longer free slots** — they stay as postgame content. And
the 101 Vigil species were never free either. So the pool for new live species
is only the **104 juveniles** folding into their adults:

```
1000 total
-104 juveniles become life stages
= 896 entries
+104 new species
= 1000
```

**104 free slots, not 142.** Enough for the 25 polar additions with 79 left, but
not enough to bring every biome to 57 — that needed 111.

### The question this raises

**Do the four postgame areas count toward the 1000, or sit outside it?**

- **Inside** — as above. 104 free slots, and the eleven biomes share 588 + 104 =
  692 species.
- **Outside** — the 1000 is 1000 *living* species, and mythology, fossils, the
  Vigil and the breeds are extra on top. That would mean roughly **1000 live
  species across eleven biomes**, plus 292 postgame entries, for ~1292 total.

The second is a much bigger game. Worth deciding deliberately.


---

## The 700 / 300 split, and what it costs

> **Ayr, 2026-08-25.** Postgame is **300**: Vigil 100, Mythology 100, breeds +
> fossils 100. In-game living animals are **700**. Biome sizes stay unequal.
> Common freshwater aquarium fish mostly move to the domestic area, capped at 50.

### The aquarium fish move

Fourteen aquarium fish are currently placed as wild animals. Splitting them by
whether the *aquarium* form is really the animal:

**To the domestic area (9)** — fully domesticated forms with no meaningful wild
population as sold:

Goldfish · Fancy Goldfish · Koi · Guppy · Platy · Oscar · Dwarf Gourami ·
Zebra Danio · Bristlenose Pleco

**Staying wild (5)** — genuine wild species with real populations and, in three
cases, real conservation stories:

Betta *(wild Siamese fighting fish are a threatened species in Thailand)* ·
Neon Tetra · Black Skirt Tetra · Discus · and the two marine ones, Royal Gramma
and Banggai Cardinalfish, stay on the reef *(the Banggai is endangered
specifically because of the aquarium trade — that is a quest, not a pet)*.

**41 breeds + 9 fish = exactly 50.** The domestic area lands on its cap without
trimming.

### The arithmetic

```
Postgame 300 :  Vigil 100 · Mythology 100 · Fossil 50 · Domestic 50
In-game  700 :  the eleven biomes
```

| | |
|---|---|
| Live species now | 588 |
| less the 9 aquarium fish moving to domestic | **579** |
| target | **700** |
| **New species needed** | **121** |

### One thing that does not fit yet

There are **13 wardens** and **3 untagged legendaries** (Qilin, Thunderbird,
Phoenix) — 16 invented creatures that are neither living animals nor in any of
the four postgame areas.

- **If they join Mythology**, that area is 116 and **16 real myths have to be
  cut** to hold it at 100. New species needed stays **121**.
- **If they count inside the 700**, no myths are cut, and new species needed
  drops to **105**.

The first keeps the 700 purely real animals, which fits everything else about
this game. The second is cheaper. **Not decided.**

### Where the 121 would go

Polar's 25 is the first call on it, leaving ~96. Spending the rest on the thin
biomes while leaving rainforest and savanna alone:

| Biome | Now | Suggested |
|---|---|---|
| Rainforest | 91 | 91 |
| Savanna | 79 | 79 |
| Forest | 66 | 70 |
| Wetland | 59 | 65 |
| Farmland | 58 | 62 |
| Coast | 53 | 65 |
| **Polar** | 28 | **53** |
| Reef | 42 | 60 |
| Desert | 41 | 60 |
| Open ocean | 33 | 58 |
| Mountains | 34 | 57 |
| | 579 | **700** |

Unequal, as asked — rainforest and savanna stay the richest, and nothing drops
below the mid-fifties.


---

## FINAL ROSTER SHAPE — 700 / 200 / 100

> **Ayr, 2026-08-25.** Invented creatures are cut from the new game entirely and
> stay in Safari Saga. The 1000 becomes **700 living real animals, 200 postgame
> real animals, 100 postgame mythology.**

```
700  living real animals      the eleven biomes
200  postgame real animals    Vigil 100 · fossils 50 · domestic 50
100  postgame mythology       real folklore only
1000
```

### What gets cut

**The 13 wardens** — Sarkoth, Nycterion, Cetarch, Bathynax, Solenn, Glyptor,
Velissa, Bramwold, Pyrelynx and the rest. Invented for Safari Saga, belonging to
no real mythology, and **they stay in Safari Saga on `main`** where they were
built. Nothing is destroyed; they simply do not travel to the new game.

**Three myths, to hold Mythology at 100.** Qilin, Thunderbird and Phoenix are
genuine folklore and belong in that hundred, so three of the currently tagged
hundred come out to make room. (Or the three join and three others go — same
arithmetic, Ayr's pick which.)

**One Vigil entry**, taking it from 101 to a clean 100.

### The arithmetic, checked

| | |
|---|---|
| Live species now | 588 |
| less 9 aquarium fish → domestic | 579 |
| Vigil | 101 → **100** |
| Mythology (tagged) + Qilin/Thunderbird/Phoenix | 103 → **100** |
| Fossil | **50** |
| Domestic (41 breeds + 9 fish) | **50** |
| Wardens | 13 → **0** |
| Juveniles | 104 → life stages, not species |
| **Subtotal** | **879** |
| **New real animals needed** | **121** |
| **Total** | **1000** |

And that lands live at **579 + 121 = 700** exactly.

### Why this is the right cut

The invented creatures were the one thing in the roster that could not be
sourced. Every other entry in this game — living, extinct, fossil, domestic,
even mythological — can be **credited to something real**: a species, a
specimen, a breed registry, a folklore tradition with a place and a people
attached. The wardens could only ever be credited to the game itself.

For a project whose central mechanic is *"here is what really happened, and here
is who did it"*, cutting them makes the roster honest all the way through.


---

## Parked for later — interaction modes

> **Ayr, 2026-08-25.** Recorded so it is not lost. Not designed yet.

**69. Two separate interaction modes:**

- **A childhood interaction mode for most of the town animals** — the pets, the
  livestock, the garden wildlife. Available during the kid stage.
- **A separate one for animals caught in the wild.**

### Note (Claude)

This is idea 55's mechanism — the thing that gives back the feeling conservation
education takes away. The childhood one is where closeness is unambiguously
fine, and it comes **before** the player ever meets a wild-animal restriction,
which is the sequencing already recorded further up.

Keeping the two modes separate is the important part: what you may do with your
own goat is not what you may do with a wild fox, and having them be different
systems teaches that without a word of explanation.


---

## Ideas — round nineteen: biomes have internal terrain

*Ayr's, 2026-08-25.*

**70.** Each biome is **not one open field with rocks and trees**. Every region
contains **smaller areas of genuinely different terrain** — the rainforest has a
mountain area and rivers, and so on for the others. *"That actually makes it
more real and less like Pokémon."*

### This is bigger than idea 40, and I had assumed less (Claude note)

I had read micro-regions as **features** — a waterhole, a gorge, a cave mouth.
Ayr means **terrain**: a region has hills, rivers, clearings, ridges,
different-aged forest. That is a much stronger statement about the world, and it
is right — real biomes are mosaics, not backdrops.

### What it fixes

**Several arguments we had stop being arguments.** Earlier passes kept hitting
species that are "rainforest, but montane" or "forest, but by water":

- **Resplendent quetzal, mountain gorilla, clouded leopard, marbled cat,
  snub-nosed monkey** — all cloud-forest or montane-forest animals. They do not
  need moving to the mountains biome. **They live in the rainforest's high
  ground.**
- **Hoatzin, pygmy hippo, capybara, giant otter** — flooded-forest and
  riverside animals. They live along the **rainforest's rivers**, not in a
  separate wetland.
- **Grizzly bear** — salmon rivers *inside* forest, which is exactly what put it
  wrongly in coast twice.

So the classifier arguments about montane-versus-lowland were arguments about a
distinction the world can now simply contain.

### What it sharpens

**The Mountains biome becomes specifically ALPINE** — above the treeline. Rock,
scree, ice, high meadow. Ibex, marmot, condor, snow leopard, pika, ptarmigan.
Anything that lives on a forested mountainside belongs in a forest region's high
ground instead.

That makes mountains a smaller, cleaner, more distinctive biome rather than a
catch-all for "hilly".

### What it costs

- **Terrain art per region rises.** Each of the eleven needs several distinct
  looks rather than one.
- **Encounter placement gets a second layer** — species sit in a *sub-area*,
  not just a biome. Rainforest is no longer one pool; it is canopy, floor,
  river, and highland pools.
- **The seed has more to do**, which was already the plan: which sub-areas
  generate where inside a fixed region.

### What it does not change

The **eleven regions**, the **700/200/100 roster**, the biome counts, and the
quest structure all stand. This is about what a region *contains*, not how many
there are.


---

## DEEP SEA — the twelfth biome

> **Ayr, 2026-08-25.** Taiga would have been the northern end of Forest. Deep
> sea is somewhere you genuinely **travel to** — a submersible descent is a
> different expedition from a boat trip — so it earns being a region.

### The ten that move out of open ocean

Anglerfish · Coelacanth · Frilled Shark · Giant Squid · Goblin Shark ·
Japanese Spider Crab · Oarfish · Pacific Hagfish · Pompeii Worm ·
Scaly-foot Snail

Open ocean drops to **23**; deep sea starts at **10**. Both need filling, which
is fine — the deep is where the most interesting unused animals are.

### Suggested additions — the extraordinary ones

**Things that should not be possible**

- **Giant tube worm** — grows to two metres at hydrothermal vents and has **no
  mouth, no gut and no anus.** It farms bacteria inside itself that live on the
  chemicals in the vent water. An animal that eats nothing.
- **Yeti crab** — grows bacteria on the hair of its own arms and **waves them
  over the vent to feed them**, then eats them. Farming, by a crab.
- **Barreleye** — a **transparent head** with tubular eyes inside it, looking
  up through its own skull.
- **Bone-eating snot flower worm** *(Osedax)* — lives only on whale skeletons,
  bores in with acid, and the males are microscopic and live inside the female
  by the dozen.
- **Blobfish** — famous for being ugly, and it is only ugly because it is
  brought to the surface. At depth it looks like a perfectly ordinary fish.
  The picture everybody knows is a photograph of decompression injury.

**Record holders**

- **Siphonophore** *(Apolemia)* — a colony that behaves as one animal, and the
  longest one recorded was **45 metres**, longer than a blue whale.
- **Cuvier's beaked whale** — **the deepest dive of any mammal**, nearly 3 km
  down, for over three hours on one breath.
- **Snailfish** — the **deepest fish ever recorded**, over 8 km down in the
  Mariana Trench.
- **Bristlemouth** — almost certainly **the most numerous vertebrate on Earth**,
  and almost nobody has heard of it.
- **Fangtooth** — the largest teeth of any fish relative to its size; it cannot
  fully close its mouth.

**Light in the dark**

- **Atolla jellyfish** — when attacked it fires a **spinning burst of blue
  light**, a burglar alarm meant to attract something bigger to eat its
  attacker.
- **Stoplight loosejaw** — shines **red light**, which almost nothing down
  there can see. It hunts with an invisible torch.
- **Hatchetfish** — lights its own underside to erase its silhouette against
  the faint light above.
- **Lanternfish** — rises to the surface every night and sinks again by dawn,
  the largest animal migration on the planet, happening twice a day.
- **Vampire squid** — neither, and it eats **marine snow**: the drifting
  remains of everything that died higher up.

**The rest worth having**

Dumbo octopus · Gulper eel · Viperfish · Black swallower *(swallows prey ten
times its own mass)* · Cookiecutter shark *(takes round plugs out of living
whales)* · Megamouth shark · Sixgill shark · Ghost shark / chimaera · Sea pig ·
Giant isopod · Tripod fish · Glass squid · Bigfin squid *(arms trailing seven
metres behind it)* · Venus flower basket *(a glass sponge that traps a pair of
shrimp inside for life — they are given as a wedding gift in Japan)* · Deep-sea
dragonfish · Sea toad · Deep-sea cucumber

**Around 40 additions**, taking deep sea to roughly 50.

### Quest material

- **Deep-sea mining** — the vent communities and the manganese nodule fields are
  the live conservation fight of this decade, and almost nobody has heard of it.
- **Whale fall** — an entire ecosystem that exists only because something huge
  died, lasting decades. It is the deep sea's version of a forest.
- **Bottom trawling** — flattening seafloor communities that took centuries to
  grow.


---

## The Vigil is holding living animals

> **2026-08-25.** Ayr asked whether the addax belongs in the Vigil. It is
> **already there** — and checking why exposed an inconsistency worth deciding.

### What the data says

Of the species carrying the memorial flag:

| | |
|---|---|
| **EX +mem** — genuinely extinct | 56 |
| **EW +mem** — extinct in the wild | 13 |
| **CR +mem** — **critically endangered, but alive** | **30** |
| **EN +mem** | 1 |

**And 21 other critically endangered species are NOT flagged.** So the rule is
not being applied consistently:

- **In the Vigil:** Addax · Amur Leopard · Asiatic Cheetah · California Condor ·
  Northern White Rhino · Red Wolf · Saola · Sumatran Rhino · Sumatran Tiger ·
  Whooping Crane · Javan Rhino · Hainan Gibbon *(and 18 more)*
- **Not in the Vigil, same status:** **Vaquita** *(around ten individuals left —
  more precarious than anything on the list above)* · Kākāpō · Axolotl ·
  Pangolin · Black Rhinoceros · Gharial · Sawfish

The vaquita is the clearest case. It is closer to gone than the addax, and it is
in the live game while the addax is in the memorial.

### The question

**Is the Vigil for the extinct, or for the nearly-gone?**

**Extinct only (EX + EW = 69).** Clean, and philosophically stronger: the Vigil
is where you go to mourn, and **a living species does not belong in a
memorial.** More than that — the 30 CR species are exactly the animals whose
stories are most urgent, and putting them in a postgame memorial takes them out
of the game where a player could still act on them. The California Condor is a
*recovery* story. The whooping crane went from fifteen birds to hundreds. Those
are not eulogies.

**Extinct plus the functionally gone.** A few genuinely qualify — the northern
white rhino has two individuals left, both female, and cannot recover. But that
is a handful, not thirty.

### Recommendation

**Vigil = extinct and extinct-in-the-wild only.** The 30 CR species return to
the living game, where their quests can actually be about saving something.

That also solves an arithmetic problem: the Vigil is currently 101 and needs to
be 100. Moving 30 out makes it **69**, which leaves room for the ones that
belong there and are missing.

And it means **the addax does not need creating** — it exists, and it comes
back to the desert instead.


---

## THE THIRTEENTH REGION — "On the Brink"

> **Ayr, 2026-08-25.** A final region that unlocks only when all twelve are
> finished. **Required, not optional.** Completing it unlocks the postgame
> areas. Radically different and special — the final-boss position, because it
> is the most important. **50 species.**

### The arithmetic lands exactly

| | |
|---|---|
| Extinct in the wild *(currently in the Vigil)* | **13** |
| Critically endangered but living *(currently in the Vigil)* | **30** |
| Critically endangered, currently in the twelve biomes | **7** |
| | **50** |

And the totals:

```
750  main game   :  twelve biomes 700 + On the Brink 50
250  postgame    :  Mythology 100 · Vigil 50 · Fossils 50 · Domestic 50
1000
```

The Vigil, stripped of everything still alive, becomes what it always claimed to
be: **the genuinely extinct, and nothing else.**

### The seven from the living biomes

Chosen for distinct stories and full taxonomic spread — this region should not
be all mammals.

| Species | Class | Why |
|---|---|---|
| **Vaquita** *(required)* | Mammal | **Around ten individuals left.** The most urgent mammal on earth, drowning in nets set for a fish nobody outside China has heard of |
| **Axolotl** *(required)* | Amphibian | **Functionally extinct in the wild** while hundreds of thousands live in tanks. The most complete captive-versus-wild paradox in the game |
| **Kākāpō** | Bird | About 250 birds, and **every single one has a name** and an individual management plan. Conservation at the scale of individuals |
| **Sawfish** | Fish | A shark-sized ray with a chainsaw for a face, gone from most of its range, and **almost nobody knows it is in trouble** |
| **Sunflower sea star** | Invertebrate | Wiped out by wasting disease. It ate urchins — without it the urchins stripped the kelp forests bare. **A keystone removed, and the consequence visible from orbit** |
| **Pangolin** | Mammal | **The most trafficked wild mammal on earth** |
| **Gharial** | Reptile | Around 650 breeding adults, and the only crocodilian that cannot walk properly on land |

That is mammal, amphibian, bird, fish, invertebrate and reptile — the whole
tree, all at the edge.

### What "radically different" could mean (Claude note, not decided)

The final-boss framing suggests this region should break its own rules:

- **Encounters are rare and may not repeat.** You do not grind here. If you miss
  it, you may not get another.
- **Every skill the career taught is required at once** — the photographer's
  patience, the researcher's method, the guide's ability to persuade.
- **It may not be a place at all.** These animals do not share a habitat; they
  share a *condition*. It could be a series of last places — one corner of the
  Gulf of California, a few predator-free islands, one canal system in Mexico
  City.
- **The codex beat lands hardest here.** Every quest ends by naming what really
  happened, and in this region several of those stories have no ending yet.

### Names

Ayr suggested **"On the Brink"**. Also possible: *The Last Ground* · *The
Narrow Places* · *The Edge* · *What Is Left*. Ayr's call.


---

## Encounters must be driven, not waited out

> **Ayr, 2026-08-25.** *"Waiting 20 min for 1 animal that is not driven by story
> is not going to happen."*

This corrects an assumption running through the career-loop notes above. I had
described the photographer's loop as rewarding **patience** — position, wait,
capture — on the model of real fieldcraft. Real fieldcraft does involve sitting
still for hours. **A game cannot spend the player's actual time that way**
unless something else is happening.

### What this rules out

- Idle waiting as a mechanic.
- Rarity expressed as *time spent standing still*.
- Any encounter whose interest is "eventually the animal appears".

### What it points toward instead

Whatever the loops end up being, the tension has to come from **something
happening**, not from time passing:

- **Story reason to be there** — you are not photographing a fox, you are
  proving the lights work, and the fox is the evidence.
- **Reading and acting** — tracks, wind, alarm calls, light, the guide radio.
  Fieldcraft as a set of *decisions*, not a wait.
- **A closing window** — the light is going, the tide is turning, the clients
  leave at four. Pressure rather than duration.
- **Something to do while positioned** — the researcher checks traps, the guide
  keeps clients interested, the photographer works the light.

The real professions are patient in *elapsed* time and busy in *attention*. The
game should keep the second and compress the first.


---

## Ideas — round twenty: three pillars, not one

*Ayr's, 2026-08-25.*

**71.** *"I was going on the assumption that the main draw would be catching the
animals like it is in Pokémon. But I guess that's limiting. Minecraft has modes.
And simulators are very popular. **Story, gameplay, and building are all
important parts of games.**"*

### The game already has three pillars — they were just not named as equals

| Pillar | What it is | Who it holds |
|---|---|---|
| **Story** | 48 quests built on documented conservation history, ending in the real event and the real people | Players who came to learn something, and to feel something |
| **Gameplay** | Three careers that are three different games — photograph it, measure it, explain it | Players who came for the doing |
| **Building** | A facility in every biome. Hire, house, name, decide what can be kept and what must be released | Players who never stop |

**Collecting is the fourth thing, and it is the connective tissue rather than the
draw.** It is what you *do* across all three, not a pillar in itself.

### Why "catching is the main draw" was the weakest reading

- **There are no battles.** Pokémon's catching is compelling because the animal
  then *does* something — it fights, it levels, it evolves. Strip that out and
  pure collection is a checklist.
- **The stories are the thing nobody else has.** No other game is built on
  sourced conservation history with the real people credited. That is the
  defensible ground.
- **The building is the thing with proven retention.** Planet Zoo: a 40-hour
  career mode and a **212-hour average playtime**, because a zoo is never
  finished.

### What the Minecraft comparison actually offers

Modes. Minecraft holds two completely different audiences with survival and
creative, and neither is a lesser version of the other.

The obvious candidate here is a **sandbox facility mode** — build without the
story gates, with whatever animals you have unlocked. It fits idea 45's want for
deep post-game content, it costs far less than new story, and it is the mode
that would keep people playing for years.

Worth considering, not decided:

- **Career mode** — the 750-animal main game, the thirteen regions, the quests.
- **Sandbox** — facilities without gates, unlocked by finishing career mode.
- **Photo mode / free roam** — the world without objectives, which the
  photographer career half-builds anyway.

### The honest cost

**Three pillars is three times the design and three times the tuning.** A game
with one strong loop and two weak ones is worse than a game with one strong
loop. The risk is not ambition, it is *dilution*.

The mitigation is that the pillars share their parts: the same species, the same
world, the same codex, the same art. What differs is what the player is doing
with them. That is the same argument that made three careers affordable.


---

## THE FACILITY SYSTEM

> **Claude-contributed**, 2026-08-25, researched against real wildlife
> rehabilitation practice. Building this out from idea 18, which was one
> paragraph holding up a third of the game.

### What it is: a recovery centre, not a zoo

Ayr said "real life zoos and wildlife recovery centers" — and the recovery
centre is the stronger model, because **it has a loop and a zoo does not.** A
zoo acquires and displays. A recovery centre takes animals in, works on them,
and tries to give them back.

### The core loop, taken straight from real practice

```
intake → triage → quarantine → rehabilitation → pre-release conditioning → outcome
```

| Stage | What really happens | The decision it creates |
|---|---|---|
| **Intake** | An animal arrives — injured, orphaned, confiscated | Do you have room, staff, and the right enclosure? |
| **Triage** | Blood loss, dehydration, hypothermia first; full exam after | What do you treat first, with the vet time you have? |
| **Quarantine** | **Two to six weeks**, species-dependent, to stop disease crossing | Quarantine space is space not used for anything else |
| **Rehabilitation** | Treatment and recovery | How much intervention, and at what cost to wildness? |
| **Pre-release conditioning** | **Relearning to forage, to evade predators, to navigate.** Not just healing — remembering how to be wild | Have you actually prepared it, or only healed it? |
| **Outcome** | Release, or not | The whole game |

### The outcome fork — and this is the heart of it

**Release is the win. And the animal leaves.**

- **Soft release** — gradual, with supplemental food and shelter while it
  re-establishes. Expensive, slow, much higher survival.
- **Hard release** — straight out. Cheap, fast, worse odds.

**Non-releasable animals stay.** In real practice that means: blind, two or more
damaged legs, a bird that cannot use both wings, a disease risk to wild
populations — or **imprinted**.

Those become **ambassador animals**, doing education work.

### The inversion that makes this a different game

**Keeping an animal is a failure state wearing the costume of a reward.**

Every animal in the facility is one that could not be sent home. The collection
built here is a record of the ones that did not make it back — which is exactly
true of real sanctuaries, and the opposite of how every collection game works.

That single reversal does more thematic work than any amount of writing.

### The thing that connects it to idea 55

**Imprinted animals cannot be released.**

An animal hand-reared too closely stops recognising itself as wild, and there is
no undoing it. So the most emotionally satisfying act in the game — bottle-feeding
an orphan, the thing idea 55 exists to give back — **carries its own consequence,
and the consequence is real rather than invented.**

Raise it right and it goes home and you lose it. Raise it too close and it stays
with you forever, and that is why. The player gets to keep the animal, and learns
exactly what it cost.

Nothing needed inventing. That is how it actually works.

### Field knowledge is the husbandry manual — Ayr's idea, and the best one here

Idea 18: "they all will have difficulty levels that can change as you gather
more info from the field and from passing tests."

**In Planet Zoo you look an animal's needs up in a menu.** Here you have to have
learned them. What was seen in the field *is* the care sheet:

- Watched it feeding at dawn and dusk? You know when to feed it.
- Documented what it eats? You can build the diet.
- Seen the burrow, the nest, the roost? You can build the enclosure.
- Know the social structure? You know whether it can be housed alone.

**An animal barely studied is one that will be kept badly.** That welds the three
pillars into one system: field research is not a separate activity from building,
it is the prerequisite for building well.

### Not everything belongs in captivity

Ayr's line, and it is true. Real welfare outcomes:

- **Do badly:** elephants, cetaceans, great apes, polar bears, wide-ranging
  carnivores, most migratory birds
- **Do well:** small mammals, most reptiles and amphibians, many birds,
  invertebrates
- **Catch and release only:** the great white shark from idea 19 — nobody has
  ever kept one alive for long

The facility should **refuse** some animals, and refusing should be the correct
play rather than a lockout.

### The rest of the system

- **Staff** — keepers, a vet, educators. Real roles with real limits: one vet
  cannot triage four animals at once.
- **Money** — visitors, grants, donations. And the honest tension: visitors pay
  to see charismatic animals, and welfare does not care what is charismatic.
- **Space** — quarantine, hospital, conditioning enclosures, permanent housing.
  Every one competes with the others.
- **Time** — animals age and die here too.

### The dark mirror, already written

The captive lion industry quest — 350+ farms, cubs pulled from mothers within
days, sold as petting experiences — was parked with no home. **It belongs here.**
Same buildings, same cubs, same claim to be hand-rearing orphans, and by then the
player runs a place that actually does it. The contrast writes itself.

### What still needs deciding

- **Does the sandbox mode exist**, and is it postgame or always available?
- **Is euthanasia in the game?** It is real, it is routine in rehabilitation, and
  it is the heaviest thing on this list. It may be a decision the player never
  makes but does see made.
- **How much is per-biome?** Twelve facilities is a lot. Do they specialise?

---

## Questions to come back to

*Kept honest: several earlier entries have been answered by decisions above and
are removed rather than left to look unresolved.*

1. ~~**Scope and platform**~~ — **decided 2026-08-24: HD-2D in Godot 4.** What
   remains of it is money rather than technology: a technical artist, a
   composer, and cultural consultation all draw on the same budget, and that
   conversation belongs later, when there is something worth funding.
2. ~~**How the six life stages are paced**~~ — **decided 2026-08-24.** One
   sub-question left open: **can an assessment be failed?** Retakes that cost
   in-game time are the middle path, and time now has a price because animals
   are ageing. Note the assessment is **not a quiz** — see round fifteen.
3. **What the researcher and tour-guide loops do minute to minute.** The
   photographer has a clear real-world reference and a game one. The other two
   have real-world references but no worked design yet. This is the largest
   undesigned space.
4. **How many quests per biome, and which real stories.** Roughly three hours
   per biome at the 40-hour target. The candidate history shortlist exists; the
   selection does not.
5. **When cultural consultation happens.** Early enough to shape the writing
   rather than review it after the fact — but it costs money, so it interacts
   with question 1.
6. **What the codex actually is as a UI.** It carries the sourcing, the field
   guide, the read-aloud option (idea 14) and the tests (idea 15). That is a
   lot of jobs for one system.

### Answered since these were written

- ~~Real world or invented world~~ — real world, decided 2026-08-24.
- ~~What replaces the battle system~~ — the three career loops.
- ~~What "befriend" actually is~~ — three of them, one per career, drawn from
  the real professions.
- ~~How seeded generation and fixed plots coexist~~ — fixed geography, seeded
  content.
- ~~Do the careers diverge or converge~~ — three different games, one world.
- ~~Is one career a complete game~~ — yes; Option B.

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
- **2026-08-24** — **THE MAP IS THE REAL WORLD.** Idea 12 closed. Real
  continents, real ranges, real places, with the conservation stories sitting
  where they actually happened.
- **2026-08-24** — **A sourced codex is a core system**, not flavour. Every
  quest states what real event it is based on, credits the real people, and
  says what was changed and why. A documented departure is a choice; an
  undocumented one is an error.
- **2026-08-24** — **Fictional characters, real credited history.** No living
  person is impersonated or given invented dialogue; they are credited in the
  codex instead.
- **2026-08-24** — **A stated fiction covers geography only** — the map
  compresses and composites real places so a life can be lived across it. It is
  explicitly *not* a defence for cultural portrayal.
- **2026-08-24** — Following from the real map: **seeded content, fixed
  geography** (option 3). The seed varies population, micro-regions, weather,
  season and quest order — not the terrain.
- **2026-08-24** — **Cultural consultation is a budgeted cost**, not an
  optional extra. It is the only thing that addresses the representation
  question.
- **2026-08-24** — **Engine: Godot 4.** Free under MIT, native 2D, no revenue
  cap, terms cannot be revoked.
- **2026-08-24** — **Style: HD-2D** — the existing 1000 sprites billboarded in
  lit 3D environments. Closer to *Cult of the Lamb* and *Don't Starve* than to
  *Octopath Traveler*, because the Wildlands sprites are clean illustration
  rather than pixel art.
- **2026-08-24** — Sprites to be **re-exported at 1024x1024** before use in 3D.
  All 1009 prompts survive, so this is a batch job, not a rework.
- **2026-08-24** — **No evolution.** Life cycle replaces it. Juveniles are
  **life stages of one dex entry**, not separate species.
- **2026-08-24** — **Animals die of old age.** Accepted deliberately as the
  strongest emotional material in the design.
- **2026-08-24** — A species counts as fully researched only when
  **documented across its life stages**.
- **2026-08-24** — **The world scrolls.** A camera-follow over a contiguous
  world, not Safari Saga's flip-screen rooms.
- **2026-08-24** — **The quest template**, for all 48: learn the problem, find
  the clues, choose the solution, build it, then a **cutscene explaining the
  real-world event it was based on** and crediting the real people.
- **2026-08-24** — **Savanna quests chosen:** beehive fences (elephant), guard
  dogs (cheetah), the conservancies (**oryx**), the horn question (black rhino).
- **2026-08-24** — The horn quest uses **partial answers that each trade
  something**, scored on **whether the player argued from evidence** rather than
  which side they took.
- **2026-08-24** — **Cat and dog breeds come out of the species roster** (41
  entries). They become customisation options on Dog and House Cat, which is
  what a breed is. Generics stay: House Cat, Tabby, Calico, Black Cat, Farm
  Dog, Puppy. All wild cats and dogs stay.
- **2026-08-24** — **Balance biomes, not continents.** Geographic
  representation stops mattering once the world is invented. Every biome must
  read as a **functioning ecosystem** — apex predator, mesopredators, large and
  small herbivores, scavengers, invertebrates, birds — with a **floor of ~50
  species**.
- **2026-08-24** — **Caves cut as a biome. Eleven regions, not twelve.** Caves
  become a micro-region type inside forest, mountains, coast and desert. The
  five cave species reassign — a bat is a forest animal that sleeps in a cave.
  Balancing floor becomes **57**, giving a final spread of 57 to 108.
- **2026-08-25** — **Interest governs, not headcount.** The ~57 floor was a
  working guide and is explicitly **not a target**. A biome gets what is worth
  having in it.
- **2026-08-25** — **All 32 proposed deep-sea species confirmed.** Running list
  of new species lives in `design/new_species.md`.
- **2026-08-25** — **DEEP SEA is the twelfth biome.** Ten species move out of
  open ocean; both need filling, and the deep is where the most interesting
  unused animals are.
- **2026-08-25** — **Biomes contain varied internal terrain**, not one
  landscape: the rainforest has highlands and rivers, and so on. Species sit in
  a **sub-area** of a region. The Mountains biome therefore means specifically
  **alpine, above the treeline** — forested mountainsides belong to forest and
  rainforest regions.
- **2026-08-25** — **The facility is a recovery centre, not a zoo.** Loop is
  intake, triage, quarantine, rehabilitation, pre-release conditioning, outcome.
  **Release is the win and the animal leaves; the animals kept are the ones that
  could not be sent home.** Imprinted animals can never be released, which gives
  idea 55's hand-rearing its own real consequence. **Field knowledge is the
  husbandry manual** — you can only house well what you studied well.
- **2026-08-25** — **Three pillars, not one: story, gameplay, and building.**
  Collecting is connective tissue rather than the draw, since there are no
  battles to make a caught animal *do* anything. Facilities are a pillar, not a
  side feature.
- **2026-08-25** — **No idle waiting.** Encounters must be driven by story or
  by decisions, never by time passing. Rarity is never expressed as standing
  still.
- **2026-08-25** — **A thirteenth region, "On the Brink"** — 50 critically
  endangered and extinct-in-the-wild species. Unlocks only after all twelve
  biomes, is **required**, and completing it unlocks the postgame. The Vigil
  becomes the genuinely extinct only.
- **2026-08-25** — **ROSTER: 750 main game (12 biomes 700 + On the Brink 50) +
  250 postgame (Mythology 100, Vigil 50, Fossils 50, Domestic 50) = 1000.**
- ~~**2026-08-25** — **FINAL ROSTER SHAPE: 700 living real animals + 200 postgame
  real (Vigil 100, fossils 50, domestic 50) + 100 postgame mythology = 1000.**
- **2026-08-25** — **The 13 invented wardens are cut from the new game** and
  stay in Safari Saga. Every entry in the new roster can be credited to
  something real.
- **2026-08-25** — **121 new real animals to be created.**
- **2026-08-25** — Nine fully domesticated aquarium fish move to the domestic
  area; betta, neon tetra, black skirt tetra, discus and the two marine ones
  stay wild.
- **2026-08-25** — **Unequal biome sizes are correct, not a fault.** A bigger
  biome should hold more variety. Rainforest and savanna sitting on top matches
  the real world. The floor matters; the ceiling does not.
- **2026-08-25** — **No plankton, krill or copepods as catchable species.**
  What the animals eat is stated in the text rather than implemented as
  collectables. Polar and open ocean get **larger additions** instead — Arctic
  fish and the like.
- **2026-08-24** — **No animal appears twice in the same biome.** Four quests,
  four species.
- **2026-08-24** — **The impact ladder:** young adult makes local change; adult
  with skills understands the problem at scale; adult with power establishes a
  program; elder enacts law and policy.
- **2026-08-24** — **Every biome's facility is established during the young
  adult stage**, earned by that biome's local-change quest, so encountered
  animals have somewhere to go from then on.
- **2026-08-24** — **All 48 quests are mandatory.** Campaign lands at ~50-55
  hours rather than 40; the threshold idea is dropped.
- **2026-08-24** — **Cutscenes are in.** Primarily in-engine scripted scenes,
  concentrated on the five life-stage transitions, quest resolutions, biome
  arrivals and the elder handover. Replayable from the codex.
- **2026-08-24** — **No voice acting.** The read-aloud guide option (idea 14)
  is separate and stays.
- **2026-08-24** — **Music is a priority.** Approach undecided; AI-for-temp
  with a composer for the shipped score is the option on the table.
- **2026-08-24** — **Life-stage pacing accepted.** ~1.5h kid, ~2.5h teen, then
  8/9/10/6h across the four adult stages. Advancement needs **both** logged
  fieldwork **and** a passed codex assessment, which makes the learning
  mechanically required. A threshold rather than a checklist, so all 48 quests
  can exist while one playthrough needs 15–20.
- **2026-08-24** — **Time is hybrid**: days pass within a stage so seasons
  work; years leap between stages, so slow growth is visible and the childhood
  pet is gone when you return.
- **2026-08-24** — **Camera: fixed-angle follow by default, free camera in
  photo mode.** Keeps every animal to one drawn angle — which is what the 1000
  sprites already are — and makes the photographer's difference felt in the
  camera itself.

---

- **2026-08-25 — The signature ability is the payoff for collecting.** Every
  species gets one demonstrable trait, triggered by a button in the individual-animal
  space. Ayr's idea 72. It replaces what battles did in Pokemon without inventing
  anything. **Unlocked by documentation, not by possession**, so it does not fight
  the facility rule that keeping an animal is a failure state.

- **2026-08-25 — Ambassador animals demonstrate their signature ability to
  visitors.** Ayr, idea 73. The facility's saddest outcome becomes its education
  programme, which is what real ambassador animals are for. The game does not
  fight the word "zoo"; it just makes clear every animal there arrived because it
  could not go home.
- **2026-08-25 — The signature-ability cost estimate was wrong and is corrected.**
  Not 832 animations: about 20 shared systems, ~140 bespoke pieces, and ~160
  species with no showable verb who get a size reference and a cutaway instead.
  Four of the cheapest categories — scale, light/vision shader, cutaway, audio —
  are also among the most striking.

- **2026-08-25 — Timeline revised to about a year, not years.** Eric's call, and
  the repo supports it: 1,001 sprites landed across three production days, and the
  whole of Safari Saga was built in six weeks. Content is not the bottleneck.
  The unproven pipelines are **animation** and **3D environments** — build a
  one-biome vertical slice early to price them. Supersedes the "may take years"
  assumption in idea 20.

- **2026-08-25 — Gemsbok added as a species; the oryx collision fixed.** The
  roster held one entry, "Arabian Oryx", and two quests claimed it — savanna's
  conservancy programme and desert's elder law quest — while the biome chart put
  it in desert, so the savanna quest was using an animal that does not live there.
  **Gemsbok (*Oryx gazella*) takes one of the 121 free slots and goes to savanna;
  Arabian oryx (*Oryx leucoryx*) stays in desert.** Both quests keep the animal
  their story is actually about.
- **2026-08-25 — Arabian oryx does not belong in On the Brink.** It is the
  opposite story: extinct in the wild in 1972, reintroduced, and in 2011 the first
  species ever downlisted from Extinct in the Wild. It stays a desert animal, and
  the recovery makes its elder quest sharper — **the species was saved and its
  sanctuary was legally dismantled for oil.**
- **2026-08-25 — All twelve biome quest menus proposed.** Four per biome on the
  idea-67 ladder, no animal repeated within a biome, every quest ending in real
  named people. Savanna was already chosen; the other eleven await Ayr's review.
- **2026-08-25 — Scuba does not reach the deep sea, and that is the design.**
  Recreational limit ~40m, deep sea starts ~200m. Certification lands in the
  **teen** stage (real minimum age is 15). The deep sea is played through
  instruments — dropcam, ROV, and eventually a submersible — not by swimming.
- **2026-08-25 — Mythology and fossil quests are learning-first, not conservation.**
  Mythology: one per culture, twelve proposed, unified by "folklore is data" and
  gated on cultural consultation for living traditions. Fossils: one per **period**
  not era (three eras is too few), thirteen proposed, each a detective story about
  **how anyone knows**.

- **2026-08-25 — Roster arithmetic verified from the data.** The Vigil holds 99
  entries: **56 tagged extinct, 43 still alive.** On the Brink = those 43 + the 7
  from the biomes = **50 exactly**, as Ayr specified. The one number that does not
  fit is the Vigil, which is **56 not 50** — recommendation is to let it stand and
  make the biomes 694, since the extinct count is historical record and the biomes
  are the only group still being created. Awaiting Ayr.
- **2026-08-25 — The On the Brink test is status, not story.** Currently CR or EW
  is in; anything else is out. Corrects my Arabian oryx reasoning, which used a
  narrative criterion Ayr never set. The oryx is out because it is Vulnerable.

- **2026-08-25 — CONFIRMED TARGET: 700 biomes + 50 On the Brink + 100 mythology
  + 50 fossil + 50 vigil + 50 breeds = 1000.** Ayr, stated twice and precise.
- **2026-08-25 — Twelve Ice Age species move from the Vigil to the fossil group.**
  Smilodon, mastodon, dire wolf, glyptodon and the rest are 7,700–13,000 years old.
  The Vigil is for extinctions in recorded time that people can be held responsible
  for. That leaves 44 historical extinctions, so **six more real ones are added** —
  baiji, golden toad, Pyrenean ibex, po'ouli, Bramble Cay melomys and the
  Christmas Island pipistrelle.
- **2026-08-25 — The fossil group is Mesozoic-only and must be rebalanced.** All 50
  entries are Triassic, Jurassic or Cretaceous reptiles. **Nine of the thirteen
  periods in the fossil quest design have no animals at all.** Twelve surplus
  dinosaurs come out to make room for the Ice Age twelve, and the group needs
  spreading across the record rather than sitting on one era.

- **2026-08-25 — THE ROSTER IS CLOSED AT 700/50/100/50/50/50 = 1000.** Ayr asked
  for round numbers and the five moves that get there are decided: 43 living leave
  the Vigil for On the Brink, 7 more come from the biomes, 12 Ice Age species move
  Vigil→Fossils, 6 real historical extinctions join the Vigil, and 12 surplus
  dinosaurs are cut. **128 new living species remain to be invented.**
- **2026-08-25 — Open, and not an arithmetic question: which 50 fossils.** After
  the moves the group covers 5 of the 13 periods the fossil quests need. Eight
  periods have no animal — Ediacaran, Cambrian, Ordovician, Silurian, Devonian,
  Carboniferous, Paleogene, Neogene. Fixing it costs no slots, only swaps.

- **2026-08-25 — The fossil 50 is rebalanced across all thirteen periods.**
  Supersedes the twelve-dinosaur cut recorded earlier the same day. 21 existing
  entries kept, 8 Ice Age species moved in from the Vigil, **21 new species added**
  covering the eight empty periods. **29 dinosaurs cut**, which is the honest price
  of the group ceasing to be Mesozoic-only. Cretaceous stays the largest block at 8,
  Quaternary 8, Jurassic 7, Triassic 6. Protoceratops and Plesiosaurus protected for
  the griffin and Mary Anning quests; **Sinosauropteryx added** because the
  feathered-dinosaur quest needs it. A lighter option is recorded: trim the new
  periods to one species each and hand 13 slots back to the Mesozoic.

- **2026-08-25 — Quest total reconciled: 73 defined, not 48.** The campaign is 48
  (12 biomes x 4) and remains mandatory and unchanged. Postgame adds **12 mythology
  quests** (one per culture, over 100 species) and **13 fossil quests** (one per
  period, over 50 species). **There is no quest per animal** — 1000 species, 73
  quests, about one per fourteen. On the Brink and the Vigil are still open, which
  are exactly the two areas Ayr parked.

- **2026-08-25 — Every main-game animal is a named individual with an intake
  story.** Ayr, idea 74. 700 names and 700 short stories, separate from the species
  field guide. The player feeds it, gives it enrichment and views its signature
  ability. **Released animals go to a visitable place in the wild** — the beaver
  pond, the moose field, a stretch of coast — which resolves the facility system's
  one cruelty, that playing well meant losing the animal. Ten intake categories are
  recorded so 700 stories do not read like 700 injuries. Open for Ayr: whether
  releasable animals get field numbers instead of names, since real rehabilitators
  avoid naming what they intend to send home.

- **2026-08-25 — The naming rule, decided.** Ayr, idea 75. Releasable animals are
  **numbered on intake and named by the player at the moment of release.**
  Non-releasable animals are named when they become residents. The player still
  names every animal; they earn the right by letting it go. Ten intake categories
  confirmed. Open: whether obvious cases (a wing gone at the shoulder) are named at
  intake while uncertain ones stay numbered until the prognosis resolves — and the
  consequence that an animal dying before an outcome never gets named, which is the
  mortality question arriving by another door.

- **2026-08-25 — The sanctuary is a MODE, not a second campaign.** Ayr, after
  asking directly whether I was assuming a whole story game at the sanctuary. I
  was, and it broke the fiction, the clock and the time budget. The 48-quest
  campaign stays the bounded spine at ~50-55 hours; the sanctuary is unbounded,
  unlocked early, with no completion requirement. One save, one character — a way
  to play, not a separate file.
- **2026-08-25 — The facility runs while you are away, which fixes quarantine.**
  Real durations are preserved (2-6 weeks) and the campaign is what the player does
  while they pass. Satisfies the no-idle-waiting rule without compressing anything.
- **2026-08-25 — The 700 split by life stage.** Child watches at the fence, teen
  volunteers at someone else's centre, young adult earns the first facility, elder
  is the person others visit. **Interaction is universal, ownership is earned** —
  every named individual anywhere can be fed, enriched and have its ability viewed,
  but only the ones you took in carry the autobiography.

- **2026-08-25 — The twelve facilities specialise by biome.** Ayr, idea 76. Each
  needs different buildings, systems and expertise, which is true of real
  rehabilitation and is what makes twelve worth having rather than twelve copies.
  Consequence built in: **an animal found in the wrong place must be transported**,
  and transport is itself a welfare cost. Specialisation decides what a facility
  *can* hold; it does not overrule the rule that some animals should not be held at
  all, so refusing stays a correct play.
- **2026-08-25 — Catching a species is what unlocks it in your facility.** Ayr,
  idea 77. The mechanic is the justification and needs no narration. This removes
  the heaviest reading of idea 74: it is **not** 700 bespoke plot-woven narratives.
  The intake story is flavour from the ten categories; the autobiography still works
  because the record — what, where, when, at which life stage — is real.
- **2026-08-25 — CONFIRMED: the campaign is four waves of twelve.** Each life
  stage spans all twelve biomes, so all twelve facilities are earned during young
  adulthood and the later stages develop them. Quests within a wave can be taken in
  any order; gating is by capability (the water ladder), not difficulty. Fixes the
  deep-sea conflict by making the young adult **crew on someone else's boat** —
  owning one at adult/power then reads as a promotion.

- **2026-08-25 — Sandbox mode: drop the economy, keep the biology.** Money, space
  and time limits go; welfare, species suitability, expertise and consequences stay.
  Removing the money is a fantasy, removing the biology would be a lie. **Its real
  purpose is to let the player try what the campaign says to refuse** — build the
  elephant enclosure, spend what you like, and watch what happens to an animal that
  walks fifty kilometres a day. Nothing lectures; the outcome is the argument. That
  makes sandbox prove the thesis rather than break it. Unlocked early (it teaches),
  separate save (no autobiography), full codex granted, release still available.
  **Proposed and awaiting Ayr: let sandbox be the one place the extinct can be
  kept**, which gives the Vigil and fossil sets a use and puts the de-extinction
  question in the player's hands.

- **2026-08-25 — Facility build mode defined for the campaign.** The core mechanic
  is **two routes that must never cross**: the public route and the animal route.
  Every zoo builder is about sightlines *for* visitors; this one is about sightlines
  *away* from them, because a habituated animal cannot be released. Where the routes
  touch, an animal loses its chance to go home. Seven building types drawn from the
  rehab loop, each with a real constraint — quarantine shares nothing, conditioning
  cannot be faked small, one vet treats one animal. Four constraints: **money**
  (visitors, grants, and sponsorship of named individuals), **land** (granted by
  each quest wave), **field knowledge** (idea 18, now mechanical — nothing is locked,
  the penalty is the animal's chances), and **staff** (the vet is the bottleneck;
  volunteers are who the player was as a teenager). Adds the **return report** as
  the rhythm between the two modes.

- **2026-08-25 — SEQUENTIAL AUDIT: the foundation is missing.** Ayr called it —
  detail was being designed above an undefined base. Layers 2, 4 and 5 (one quest,
  one life stage, the whole game) are built. **Layers 0, 1 and 3 — moment to moment,
  one encounter, one session — are empty.** The critical one is **idea 10, flagged
  by Ayr on day one and never done: the befriend encounter mechanic.** The old game
  used battles; this one removed them and never replaced them, so "catching" appears
  in quotes throughout this document because nobody has said what it is. Work order
  from here: encounter, then moment-to-moment, then session, then back to the open
  questions. Euthanasia is deferred deliberately, not ignored.

- **2026-08-26 — The encounter CONTRACT is fixed; the mechanic stays open.** Ayr,
  ideas 78 and 79, correcting yesterday's audit. Layer 1 never needed the mechanic,
  it needed the contract — what an encounter hands upward. Every encounter, any
  career: **guide page shown immediately, number auto-assigned, facility told, entry
  added to a list that shows only caught species.** All three careers start and end
  identically and differ only in the middle.
- **2026-08-26 — Two species destinations.** Capturable species get an **enclosure**
  at the facility. Non-capturable ones (large ocean, deep sea) get **next-steps
  information**, then eventually **"visit the animal's location"** — a cut scene
  placing the player in that location without travelling there. Every career can do
  both. **WITHDRAWN 2026-08-26** — see idea 80. Ayr rejected treating *should not be
  kept* as *cannot be captured*; that was a zoo criterion applied to a recovery
  centre.
- **2026-08-26 — Number at documentation, name at outcome.** The auto-assigned
  encounter number resolves cleanly against idea 75. Field records are numbered when
  made; the name is the ending.

- **2026-08-26 — Idea 80: the test is TRANSPORT, not suitability.** Ayr's rule:
  **only species that would die in transport are left in the wild** — blue whale,
  great white, blobfish, most large whales and deep-sea species. **Everything else
  comes in, elephants, gorillas and polar bears included.** Rehabilitation is
  temporary and is the reason the animal survives; orphaned elephant calves are
  hand-reared and released, gorillas receive surgery for gunshot wounds, a starving
  polar bear is treated. My earlier proposal applied a zoo's permanent-housing list
  to a recovery centre and is withdrawn. **The welfare question moves to the outcome
  fork**, where it gets harder and better: a permanent hedgehog ambassador is fine, a
  permanent elephant should cost the player something. Offered and awaiting Ayr:
  a third destination, **treated in the field** — darted and operated on where it
  stands, because the journey would do more harm than the delay.

- **2026-08-26 — THE REHABILITATION PIPELINE IS UNCOMMITTED.** Ayr: *"I don't know
  yet how involved, or even if, I want this mini game of capture, rehabilitation,
  release."* Correct — idea 18 said "zoos **and** recovery centres", I chose recovery
  centre and built six stages, a routing puzzle, a naming ritual, a return report and
  a mortality question on a decision Ayr never made. **The committed baseline is a
  living collection**: catch it, it appears at the right facility, go and visit it,
  feed it, enrich it, see its ability. That requires no pipeline and is already a
  complete game. Three shapes recorded — **A** no pipeline, **B** full simulator,
  **C (recommended)** pipeline for story animals only, so ordinary species stay
  visitable and release stays meaningful because it is rare and authored. **A is a
  subset of both others, so everything can be designed while the choice stays open.**
- **2026-08-26 — Euthanasia is no longer urgent.** It was only a question because I
  had built a system in which animals die on the player's watch. Without a pipeline
  the question dissolves rather than needing an answer.

- **2026-08-26 — DECIDED: option C, idea 81.** Rehabilitation is **authored, not
  simulated.** Ordinary caught species live at the facility permanently and are
  always visitable; **quest animals and scripted rescues** go through a real sequence
  with a real outcome. Release stays meaningful because it is rare and happens to
  animals the player already cares about. Cost is one authored sequence per rescue
  quest rather than a simulation. Euthanasia becomes an authored story beat used once
  or twice at full weight, not a system running in the background. The pipeline
  design stays as the **specification** for those sequences.

- **2026-08-26 — Naming proposals on the table, nothing decided.** Register chosen
  by three existing constraints: read-aloud means every name must be sayable first
  try, the sourced ethos rules out fantasy naming, and Ayr's own *"On the Brink"*
  already set the target — plain English, concrete, slightly grave. Model is how
  real English regions are named: plain nouns with a definite article (The Fens, The
  Weald, The Downs). Twelve regions proposed with two alternates each, plus the four
  postgame areas and five world names. **Awaiting Ayr on all of it.** Also corrected
  the doc summary, which still claimed a real-world map after that was superseded on
  2026-08-24.

- **2026-08-26 — THE WORLD IS CALLED TERRANE.** Ayr. Ten region names locked: The
  Long Grass, The Weald, The Canopy, The Fens, The Strand, The Garden, The Blue, The
  Dark, The Dry, The Furrows — plus On the Brink, The Vigil and The Record. **Still
  open: polar, mountains, mythology**, with six candidates each. My picks are **The
  Floe** (the only one that is also fragile, and the region's quests are about ice
  going away), **The Divide** (carries an idea, and the region's quests are about
  things separating) and **The Telling**. Names implying myths were mistakes are
  ruled out, since the doc already commits to not treating living cultures' beliefs
  as solved puzzles.
- **2026-08-26 — Terrane turns out to be a mechanism, not just a name.** A terrane
  is a real crustal fragment with its own history, later joined to a larger landmass
  — literally what this world is. Four alternate-Earth variants recorded.
  **Recommended: C, with B's vocabulary** — the geology diverged, the history did
  not. Present day, real people, real conservation history intact; the map looks like
  this because continents collided. **Awaiting Ayr.**

- **2026-08-26 — ALL NAMING CLOSED.** Ayr: **The Floe** (polar), **The Divide**
  (mountains), **The Telling** (mythology), **The Kept** (breeds). With the ten
  locked earlier plus On the Brink, The Vigil and The Record, and the world named
  **Terrane**, every region and area in the game now has a name.
- **2026-08-26 — The alternate-reality question may already be answered.** Beat five
  of every quest is *"what really happened — the real event, the real place, the real
  people, credited by name."* **The game is Terrane; the codex is Earth.** They were
  never meant to be the same place. Terrane can simply be a fictional world with a
  factual appendix. Of the three framings Ayr asked about, **temporal fails** (it
  makes the conservation history ancient and kills the urgency), **transformation
  fails** (no honest mechanism — tectonics is too slow, anything faster is magic),
  and **hidden-on-Earth fails on scale** (twelve regions including abyssal ocean is
  not an undiscovered island). If Ayr wants an in-fiction answer, **a parallel Earth**
  is the only one that costs nothing. Recommended disclosure: **codex only.**

- **2026-08-26 — Idea 82: the author's note, and it closes the reality question.**
  Ayr's idea — the game ends by cutting to Ayr explaining why they made it. Every
  in-fiction framing failed because it explained Terrane **from inside**; this
  explains it from outside, which is allowed, because the game openly has an author.
  **The alternate-Earth question can now close as "do nothing."** The structural
  rhyme is the strongest part: every quest ends with *here is who really did this*,
  and the game itself then ends with *here is who really made this* — the same move,
  one level up, forty-nine times. Claude's suggestions, Ayr's call: place it
  **before** the credits so it is not missed, add it to the codex as a sixth job
  (*about this game*), keep it to 2–4 minutes, and explain the **reason** rather than
  the story. Real video vs avatar vs both is Ayr's decision alone — it is about how
  public they want to be, not about design. Precedent worth looking at: **Never
  Alone** (2014), whose documentary interludes with Iñupiat elders are consistently
  named the best part of it.

- **2026-08-26 — Idea 83: Ayr as a character.** Suggested shape is a **minor
  recurring background NPC** who then turns out to be the face in the author's note
  — the reveal being *the person who kept showing up made all of this*, which is
  quieter and better than making them the mentor. The mentor and parent roles fuse
  with characters the design already has; the never-seen funder gives the ending
  nothing to connect to. **Ayr's call — taste, not design.**
- **2026-08-26 — Sprite props will break HD-2D billboards, and the fix is free.**
  Ayr spotted that some sprites carry baked-in ground, sticks and leaves. Verified:
  all 1001 are 256x256 RGBA cut-outs on transparency, no painted backgrounds, but the
  generator added props by keyword match on **branch/perch/leaf/burrow**. Billboarding
  would **swivel the leaf to face the camera**, the animal could not walk without
  dragging it, and its baked lighting would not match the 3D scene. **But the prop is
  right for a codex plate and wrong only for a game billboard.** Recommendation:
  **treat the current 1001 as the finished codex plates**, and make game sprites a
  separate later pass — higher resolution, no props, built for animation. Costs
  nothing now and wastes none of the existing work.

- **2026-08-26 — ART WORKFLOW: fix errors, ignore terrain.** Ayr is finding errors
  now that the art can be viewed larger. **Errors are permanent value; terrain is
  cosmetics that gets thrown away twice.** Do not add it, do not strip it — the only
  free move is flipping props off on any sprite being regenerated anyway. That the
  errors only became visible at larger size argues the game-sprite pass needs higher
  resolution regardless.
- **2026-08-26 — The Ayr NPC is talkable but weightless.** Interactive, because
  otherwise the author's-note reveal has no memory to pay off. But **no quests, no
  items, no unlocks, no gates**, and they never speak about themselves — they give one
  short observation about the animal being looked at. That line pool *is* the author's
  voice, so the ending reveals the player has been hearing it in passing for thirty
  in-game years. Suggested and awaiting Ayr: **let them age** across the six life
  stages, which makes them a person rather than an easter egg.

- **2026-08-26 — Prop mechanism, corrected.** There is **no toggle**. `gen_runner.py`
  holds two prompt strings and `pick_composition(desc)` picks between them by matching
  the species description against 19 keywords. **263 of 1009 species (26%) take the
  prop path** — a known, listable set. Turning it off is a one-line change to that
  function, and it **cannot** be done in the prompt, because a description reading "no
  branch" still contains "branch".
- **2026-08-26 — Recommended: the Ayr NPC ages past Ayr's real age.** The game asks
  the player to live a whole life and end old; an author asking that and refusing to
  imagine it for themselves is asking for something they will not give. The image is
  hopeful — still there, still turning up, still watching animals. **Vanishing is the
  one to avoid** (ambiguous, sad without earning it). Nice detail: let the NPC be
  exactly Ayr-as-they-are at the **adult-with-power** stage, which is Ayr's real stage
  now, so the author's-note face connects to the version the player met when they were
  briefly the same age. **Caveat: this is personal, not design** — if Ayr does not want
  to be depicted old, that settles it and the NPC stays an adult.

- **2026-08-26 — DECIDED, idea 84: the Ayr NPC does not age, and becomes the video.**
  Ayr's call, and better than every alternative proposed. The NPC appears at the same
  age throughout; at the end the player walks up to them and the sprite becomes the
  author's video. **The non-ageing stops being an inconsistency and becomes the clue**
  — the author is not subject to the story's clock because the author is not in the
  story. It also removes the "presumptuous" problem (no invented life, no written
  role) and settles Terrane, since the author is now visibly outside the world.
  Requirements: **appear at least once per life stage** so the constancy is noticed,
  stay visually consistent, **never acknowledge it**, echo an earlier approach in the
  final shot, and keep the transition plain. Still light — no quests, no gates, one
  short observation about the animal in front of the player.
- **2026-08-26 — Life stage ages, first draft, needed for the above.** Kid 8–12, teen
  13–17, young adult 18–25, adult/skills 26–40, adult/power 40–55, elder 60+. **The
  game spans roughly age 10 to 65 — about 55 years**, which checks against Ayr's own
  animal picks (the box turtle was chosen as "the one that outlives you" at 30–50+).
  Line 18 still lists life-stage pacing as open; this is the first draft of it.

- **2026-08-26 — The child and teen years, sequenced.** Most of it was already
  decided in round two (ideas 21–26) and never put in order. **The child ends up with
  two opposite relationships at once — a pet that is theirs and stays, and a rescued
  wild animal that is nobody's and leaves.** That is the entire game's thesis taught
  before the player knows there is a game, and nothing has to explain it. First hour:
  look at one patch of world → choose the pet at home → **find something you cannot
  fix, because you are eight** → carry it to the mentor and watch, not allowed to help
  → it comes back partly, living in your woods. **The Ayr NPC first appears at the
  fence in that last beat.** Teen years: a deliberately harder second animal, unglamorous
  volunteering where you know animals by number, the open-water certification (real
  minimum age 15). **Proposed: the teen years hand the player all three careers in
  turn and the choice is made at the end, having done each.** Pacing ~1h child, ~2h
  teen. Open: whether the child names the rescued animal (suggest yes, and the teen
  years are where they learn why that was a problem), whether the pet dies later, and
  what happens if the first rescue fails.

- **2026-08-26 — Idea 85: the opening, in Ayr's order.** Supersedes my sequence.
  **Title + hook scene → choose and name the pet → design the child and choose your
  name → the first scene is the two of you meeting → the codex opens on your pet AND
  the ones you did not choose → then the house and the interface.** Pet-before-self is
  a statement about what the game is, made structurally in ninety seconds. **The codex
  showing unchosen pets is the strongest detail** — it establishes in five minutes that
  the codex is a reference that already knows things, not a log of your own experience.
  Naming the pet instantly also sets up idea 75 to land later: the game lets the player
  do the easy thing first and explains it afterwards.
- **2026-08-26 — Appearance changes at every life stage, gender included.** Ayr's
  requirement: new choices each stage, **gender change available at every one, present
  but not announced** — same list as hair and clothing, no ceremony, no confirmation,
  no NPC ever remarking on it. Player chooses their name. **Cost flagged:** six life
  stages x options x animation states multiplies fast, so the character must be built
  as a **layered/modular sprite** rather than baked variants — and that decision has to
  be made before the first character art is drawn.
- **2026-08-26 — Hook scene proposed: a release.** Hands opening a crate, an animal
  going, someone watching and not following, with no context at all. The last beat of
  the game shown as the first. Alternatives recorded: a signature ability ("wait, is
  that true?") and a child at a fence ("how do I get in there?"). Suggest the release
  first and the fence as the second scene, since they are the two ends of the game.

- **2026-08-26 — Idea 86: the hook is animal-led, scene deliberately unchosen.** No
  human focus. Of the three proposals, the release survives if shot from the animal's
  side and the signature ability survives entirely; **the fence does not** — it is a
  scene about a person being outside — but it stands as the second scene. **Consequence:
  an animal-led opening needs no character art at all, so the hook can be prototyped
  first**, before any appearance decision, and it is also where the music leads.
- **2026-08-26 — Idea 87: one body shape per life stage, details as layers.** Ayr
  confirmed. Six rigs, with hair, face, skin, clothing and accessories swappable.
  **This is what makes the gender requirement free** — with two body types a change
  means a new rig, a new silhouette and re-exporting every animation; with one body it
  is a layer swap, the same cost as a hairstyle, which is exactly the weight Ayr asked
  for. The six differ by **proportion, not shape**. Production note: **all six rigs must
  share bone layout and naming from the first one**, so animation is authored once and
  retargeted — invisible and expensive to retrofit.

- **2026-08-26 — The 128 new species, batch one: THE DARK, 42 proposed.** Also
  flags that the allocation table Ayr reviewed on 2026-08-25 was built for **eleven**
  biomes and does not include the deep sea, so it no longer closes. A twelve-biome
  allocation is proposed totalling 700, in which rainforest, savanna, forest, wetland
  and farmland shrink slightly — **nothing is cut**, those are counts after the seven
  leave for On the Brink and after deep-sea reassignment. **That part needs Ayr's nod,
  because it changes numbers already agreed.** Remaining need after this batch: coast
  +6, reef +12, desert +13, mountains +18, open ocean +17, polar +22.

- **2026-08-26 — Allocation reconciled; polar was already proposed.** The 25 polar
  additions from 2026-08-25 stand and take polar to **53**, which is a better number
  than the 50 I had. Final twelve-biome allocation totals 700. **67 of the ~128 are
  now on the table** (deep sea 42, polar 25); **62 remain** — reef +11, desert +12,
  mountains +19, open ocean +20. One figure to verify: deep sea's current count is
  approximate (~8) from a keyword scan, which is why the new-species total reads 128
  in one place and 129 in another.

- **2026-08-26 — AUDIT: 23 of the 48 quest animals are not in the roster.** The
  quests were picked against real conservation history, not against the species list.
  **This is good news** — 23 of the 128 new species are therefore not a choice. It
  shifts four biomes I had listed as needing nothing (forest +3, wetland +1, coast +1,
  farmland +2) and takes the deep sea batch from 42 to **44** (sixgill shark and orange
  roughy were in neither list).
- **2026-08-26 — Little blue penguin added to THE STRAND, not polar.** Ayr's request.
  It lives in New Zealand and southern Australia and nests in burrows on temperate
  coast; it quietly teaches that most penguins do not live on ice. Coast → 55.
- **2026-08-26 — Correction: the Pyrenean ibex is already in the Vigil.** It was wrongly
  proposed on 2026-08-25 as a new addition. **Replaced with the Yangtze paddlefish**,
  declared extinct 2020, up to seven metres, gone inside one human lifetime.
- **2026-08-26 — THE DIVIDE: 19 proposed**, of which 4 are quest animals (snow leopard,
  white-rumped vulture, Alpine ibex, mountain gorilla) and 15 are altitude specialists.
  Mountains reaches 53.

- **2026-08-26 - PROPER ROSTER AUDIT: the biome counts do not reconcile.** Tool saved
  at `design/tools/biome_audit.py`. Found and fixed a bug of mine: `biome_assign.js`
  holds **284** hand assignments, 237 inside the object literal, and I was reading only
  the 47 dot-assignments. With all 284: **496 living species, 377 classified, 98
  unplaced, 97 of which have no habitat sentence at all.** **The per-biome counts do
  not match the doc** - forest 84 vs 66, savanna 38 vs 79, farmland 22 vs 58 - and 97
  unplaced cannot explain a gap that size. **The allocation targets every species
  proposal has been built against are not trustworthy until this is resolved.** The
  species lists themselves are unaffected. Concrete work exposed: ~85 species need a
  habitat sentence or hand assignment; **twelve life stages are missing from
  `NOT_A_SPECIES`**; and **the mammoth is being counted as a living species.**
- **2026-08-26 - Mountain gorilla moves to rainforest; kea recommended to stay.** Ayr
  is right that the gorilla is montane forest - Bwindi is literally the Impenetrable
  Forest. **The elder quest moves with it**, so mountains needs a new one: proposed
  **Tibetan antelope** and the shahtoosh trade, a CITES Appendix I ban followed by
  recovery from ~75,000 to ~300,000. **Kea should stay** - its whole claim to fame is
  being the world's only alpine parrot, and moving it deletes the fact.

- **2026-08-26 - PLACEMENT PASS DONE; the real biome total is 461, not 579.** 98
  unplaced resolved: 84 hand-placed, 11 reclassified as life stages, 3 excluded as
  not-living (mammoth extinct, alpaca and llama domestic), 5 cave leftovers sent where
  the caves-cut decision already said, 1 missed turtle caught. **Unplaced is now 3 and
  all three are correct.** Actual counts: forest 93, rainforest 61, savanna 48, wetland
  40, coast 39, desert 33, reef 32, polar 29, open ocean 28, mountains 27, farmland 24,
  deep sea 7. **The 579 figure counted the 94 breeds and domestics as living animals** -
  they are The Kept, target 50. **So the gap is 239 new species, not 128.** Roughly 170
  remain to choose after the deep sea, polar and mountain lists. Nothing proposed is
  wasted; the allocation table just has to be rebuilt on real numbers.

- **2026-08-26 - FULL LISTING GENERATED; my counts were wrong because my tool read
  one of four assignment blocks.** `biome_assign.js` holds `BIOME_BY_HAND` (237),
  `BIOME_FIX` (36), **`BIOME_MOVE` (27, Ayr's redistribution 2026-08-24)** and **`FR`
  (35, Ayr's forest/rainforest review 2026-08-25)**. My tool read the first and
  stopped, discarding every correction Ayr had made. Fixed, with a warning in the tool
  not to narrow it again. **Real counts: rainforest 89, forest 59, savanna 57, wetland
  39, coast 38, desert 36, reef 32, open ocean 29, polar 27, mountains 24, farmland 24,
  deep sea 7 = 461**, and the arithmetic closes exactly (496 living = 461 + 32 life
  stages + 3 not-living + 0 unplaced). These now agree with the doc where it matters;
  the residual gap is ~118 against the 94 breeds in the `P` constructor, which belong
  to The Kept. **The real need is 239 new species, not 128.** Full listing checked in
  at `design/BIOME_LISTING.md`.

- **2026-08-26 - GROUND TRUTH: 519 in the twelve biomes, 1000 DEX keys exactly.**
  Read from the running game via `gallery.html` and `window.__DEX`, not parsed. My
  three earlier answers (461, 516, 465) were all wrong for the same reason: **DEX
  entries come in two shapes** - object literals like `fennec: { n: "Fennec Fox" ... }`
  and constructor calls like `aardvark: A(...)` - and my parser only matched the
  second, finding 861 of 1000. **That is also why I wrongly reported 23 quest animals
  as missing; they were always there.** Real counts: rainforest 92, savanna 76, forest
  64, wetland 46, desert 44, coast 43, mountains 32, reef 31, open ocean 29, farmland
  27, polar 24, deep sea 11 = **519**. Postgame: Vigil 100, Telling 100, Kept 94,
  Record 50. Life stages 120, unplaced 17. **The gap to 700 is 181 new species.**
  Counts and provenance in `design/GROUND_TRUTH.json`; re-check by serving the repo
  and reading `window.__DEX`, never by another parser.

- **2026-08-26 - The starting town is The Furrows plus The Kept.** Ayr. 27 + 94 =
  **121 animals available to a child**, so the first two life stages are not a thin
  prologue. Four consequences found in the data: **(1)** all four rescued-animal
  options live in **forest**, so the starting area spans The Furrows *and* the edge of
  The Weald - and **the box turtle is not in the roster at all** and needs creating;
  **(2)** idea 23's **reptile pet row is empty** - no snake, bearded dragon or pet
  tortoise in The Kept, so three species need adding; **(3) alpaca and llama sit in
  farmland as wild animals** despite being domestic, and a Farm Alpaca already exists
  in The Kept; **(4)** cutting The Kept 94 to 50 now touches the opening directly,
  because **The Kept is the pet menu** - so the trim is a decision about how much
  choice character creation offers, not a spreadsheet exercise.

- **2026-08-26 - Ideas 88-92: the pet store, the breeding centre, and flexible
  targets.** The **eleven saltwater aquarium fish move to The Garden** (they are wild
  reef fish, not breeds; data change pending on their `dom` flag). **A pet store exists
  in the child phase**; **no breeding centre until end game**; **everything in The
  Furrows and The Kept is reachable in childhood and teenagehood**; and **the per-biome
  targets are flexible at Ayr's discretion — only 1000 is firm.** Consequence: **The
  Kept is the childhood pet store inventory, not postgame content**, so its size is a
  question about how rich the opening is, traded against wild animals elsewhere. The
  breeding centre needs **no species of its own** — it reuses the animals the player met
  as a child, so its whole cost is writing.

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

---

## Ideas — round twenty-one: the signature ability

*Ayr's, 2026-08-25. Prompted by an Instagram video of a genet.*

**72.** *"Quick idea I just had bc I watched a video on Instagram of a genet and
learned it can climb down trees head first. I focused on having the animal guide
listing unique facts that most descriptions of animals leave out. It would be
cool to have a space where you interact with an individual animal (which I
already mentioned) but you have a **special feature button** that shows off one
of those special unique traits of that species (like bioluminescent,
non-retractable claws, climbing down trees head first etc) and that would
**encourage and reward catching all of the animals** so you can interact with its
special ability. Very gamified type of thing, but also something that actually
exists in real life — there are animals that can do something no other animal can
do and that's super cool."*

### This answers the problem left open in round twenty

Round twenty said, against collecting-as-the-main-draw:

> "Pokémon's catching is compelling because the animal then *does* something — it
> fights, it levels, it evolves. Strip that out and pure collection is a
> checklist."

That was left standing with no replacement. **This is the replacement.** The
signature ability is the thing a documented animal *does* — and unlike a battle
stat it is not invented, so it costs the game none of its honesty to include.

Collecting moves from connective tissue back to a genuine draw, without a single
battle.

### The content is already written — for about half the roster

Every field-guide entry in Safari Saga already opens with exactly this kind of
fact. This was Ayr's editorial instruction from the start and it has been
followed for **406 of roughly 832 species.**

> **margay** — *"Its ankles rotate 180 degrees, so it can run head-first down a
> trunk and hang from a branch by one hind foot. It hunts entirely in the canopy.
> It has been recorded imitating the call of a baby tamarin to lure the adults
> closer — the only wild cat ever documented mimicking prey."*

> **genet** — *"It is so lithe it can follow its own head through any gap — if the
> skull fits, the genet fits. Medieval Europeans kept them as house pets to
> control mice, centuries before cats were common there. It has semi-retractable
> claws and hunts in trees as easily as on the ground."*

The margay entry carries **two** candidate signatures. The research is done; what
is missing is the other ~426 entries and a decision about which sentence is the
demonstrable one.

### The selection rule: it has to be a thing it DOES

Not every remarkable fact can be a button. The filter is whether it is
**showable in a few seconds without narration.**

| Showable | Not showable |
|---|---|
| Margay running head-first down a trunk | "Fewer than 1,500 remain" |
| Pistol shrimp's cavitation bubble | "Its eyes are six times more light-sensitive than ours" |
| Woodpecker's tongue wrapping its skull | "Almost nothing is known about how it breeds" |
| Wood frog thawing out of solid ice | "It is sacred in Andean tradition" |

The second column is field-guide text and stays field-guide text. **The button
needs a verb.**

### The roster is full of these

Rough families, with examples already on the list: **impossible movement**
(margay, gecko adhesion, hummingbird flying backwards, sidewinder); **weapons**
(mantis shrimp, pistol shrimp, bombardier beetle, electric eel); **impossible
senses** (star-nosed mole's 22 tentacles, platypus electroreception, owl's
asymmetric ears, pit vipers); **surviving the unsurvivable** (wood frog freezing
solid, bar-headed goose over the Himalaya, icefish with no haemoglobin);
**deception** (orchid mantis, mimic octopus, the margay's tamarin call); and
**bodies that break the rules** (axolotl regrowing a limb, hoatzin chicks with
claws on their wings).

### The tension this creates with the facility — and it matters

The facility design commits to **"keeping an animal is a failure state wearing
the costume of a reward."** If the signature ability unlocks by *owning* the
animal, the game now rewards hoarding, and the two systems fight.

**Fix: the unlock is documentation, not possession.** You earn the ability by
having studied the animal in the field — the same knowledge that doubles as the
husbandry manual. The demo then lives in the codex, playable forever, whether the
animal went home or never came in at all.

That keeps release as the good ending and still rewards completing the roster.

### The honest cost

**832 bespoke animations is a lot of production time and a lot of review.**
Tiering is how that cost comes down — see the correction below, which revises
these numbers substantially downward:

- **Bespoke** — perhaps 60–100, the genuinely unique ones that sell the feature
- **Shared systems** — one climbing rig serves margay, genet, marbled cat, kodkod
  with different parameters; one bioluminescence shader serves the deep sea
- **Codex-illustrated** — a diagram plus the written fact, for the rest

Ship the bespoke ones first and let the tier be visible; a player who finds a
handful of spectacular ones will hunt for more.

### Open

- Is it in the field, in the codex, or both?
- Does each career see it differently — photograph it, measure it, explain it?
- Does an ambassador animal demonstrate its ability to visitors? That would give
  non-releasable animals a job that is not sad.

---

## Ambassadors, and the word "zoo"

*Ayr, 2026-08-25.*

**73.** *"Yes on that last question most definitely. And while there is no 'zoo' I
did want to have animals that are non-releasable bc that's real life, and yes they
become ambassadors. **A lot of ppl will think of that as a zoo anyway.**"*

**Decided: ambassador animals demonstrate their signature ability to visitors.**
It gives the non-releasable animals a job that is not sad, it turns the facility's
saddest outcome into its education programme — which is exactly what real
ambassador animals are for — and it makes the signature ability pay into all three
pillars instead of just the codex.

**And the game should not be precious about the word "zoo."** Ayr is right that
players will read it as one regardless. The distinction that matters is not the
label, it is that **every animal here arrived because it could not go home.** Say
that plainly and let people call the building whatever they call it.

---

## Correcting the cost estimate: it was never 832 animations

*Claude, 2026-08-25. Ayr asked why 832 bespoke animations is not achievable, and
the honest answer is that the question exposed a bad assumption in my own
estimate.*

**The estimate assumed every signature is an animation. Most are not.**

I classified 70 written field-guide entries by what the button would actually have
to render. The result:

| Mechanism | What it costs | Examples from the roster |
|---|---|---|
| **Scale reference** | One system. A transform, no animation | Weasel at 25g, kodkod at 2kg, tortoise from coin to 45kg, king cobra at 5m |
| **Vision / light mode** | One shader with parameters | Scorpion glowing under UV, reindeer *seeing* UV, fruit bat's low-light sight, chameleon's nanocrystals, the whole deep-sea biome |
| **Cutaway anatomy** | Illustration, not animation | Camel's hump is fat, turtle's shell is its ribs, howler's hyoid bone, langur's chambered stomach |
| **Audio** | No visual work at all | Proboscis nose as resonator, giant otter's nine calls, meerkat's hawk-call vs jackal-call, indri duets |
| **Shared locomotion rigs** | ~8–10 rigs total | Head-first descent (margay, genet, marbled cat, linsang), gliding (sugar glider, flying squirrel, colugo), brachiation (gibbon, siamang), prehensile tail (spider monkey, kinkajou, cuscus, binturong) |
| **Defensive posture** | One rig | Ball python, pangolin, armadillo, hedgehog, musk ox circle |
| **Group behaviour** | One crowd system | Coati bands, baboon troop politics, the meerkat sentry |
| **Genuinely bespoke** | The real work | Gecko setae zoom, capuchin stone tools, holding a crocodile's jaw shut, the genet through the gap, the loris licking its elbow gland, the beaver's dam |

**Roughly 19% of entries are not demonstrable at all** — "fewer than 1,500 remain",
"it was named a panda first", "Europeans did not know it existed until 1901". Good
field-guide writing, no verb.

**Of the demonstrable ~81%, about one in five is genuinely bespoke.**

### The corrected numbers

Extrapolated from the sample to ~832 species:

- **~20 systems** covering roughly 530 species
- **~140 bespoke pieces** — the ones that sell the feature
- **~160 with no showable trait**, which need a fallback

**140 is the honest figure. 832 was never the right one, because it counted
animations for signatures that are not animations.**

### Two things I got wrong

1. **I called the shared-rig tier a compromise.** It is not. Rigging a skeleton
   and reusing it with different parameters is simply how 2D animation is made —
   including in games with hundreds of characters. There is no lesser version
   here.
2. **The four cheapest categories are also among the most spectacular.** A
   scorpion fluorescing under UV and a weasel standing next to a human hand both
   cost close to nothing and both land hard.

### The fallback rule

**Nobody is empty-handed.** Every species can at minimum be placed next to a size
reference and shown in cutaway. The ~160 with no unique verb get that, and it is
still worth looking at.

---

## The timeline: Eric is right, and the repo proves it

*2026-08-25. Eric disagrees that this takes years — he says a year at most, because
the old estimates assume the old way of making games. Rather than argue it, here is
what this project has actually measured.*

### The evidence sitting in the repository

| Measurement | Value |
|---|---|
| First commit | **2026-07-14** |
| Today | **2026-08-25** |
| Total elapsed | **six weeks** |
| Commits | 383 |
| Sprites delivered | **1,001** |
| Days on which sprites actually landed | **2026-08-11 (293), 08-13 (448), 08-14 (260)** |

**A thousand finished, reviewed, in-game sprites in three production days.** In six
weeks the same project also produced a playable game with 1,000 species, 48 quests
built on sourced conservation history, and a written field guide.

That is not a projection. It already happened, and Ayr reviewed all of it.

### So the multi-year framing was wrong

Idea 20 said *"this game may take years, and I'm ok with that"* — a reasonable
assumption at the time, and I reinforced it yesterday by calling ~140 bespoke
pieces "a real number for a multi-year project."

**Against the observed rate that is nonsense.** 140 of anything is a fortnight in
this repo's actual terms. **The content was never the bottleneck, and I was pricing
content.**

### What genuinely is unproven

Everything delivered in those six weeks was **static images, text, and code.**
Those are exactly the three things this pipeline has demonstrated at speed. Two of
the new game's asset classes have **no evidence behind them at all:**

1. **Animation.** Not one frame of motion has been produced by this project.
   Diffusion models are genuinely weakest at temporal coherence — a sequence that
   drifts between frames is the known failure mode, and it is a different problem
   from the one the sprite pipeline solved. The signature ability is the first
   feature that needs motion.
2. **3D environments.** HD-2D means 2D sprites standing in **lit 3D scenes.** The
   billboard shader is written but untested, and no environment art exists. This is
   a new pipeline, not an extension of the sprite one.

**Neither is a reason to expect years.** Both are reasons to build a vertical slice
of one biome early — sprite, animation, 3D environment, one signature ability —
because that slice converts the two unknowns into measured rates, exactly as the
sprite batches did.

### The one thing that does not scale

**Ayr is the only reviewer.** Every sprite, every entry, every quest passes through
one pair of eyes, and the correction rounds this project has run were not optional
— they caught real failures the pipeline could not see itself.

Six weeks of evidence says that review keeps up. It is still the ceiling, and it is
the number to watch rather than the generation rate.

**Working assumption from here: a year, not years** — with the vertical slice built
early to price the two unproven pipelines.

---

# THE REMAINING QUEST MENUS

> **Ayr, 2026-08-25.** *"Let's pick the quests for all of the biomes. Including
> unique fun and learning based quests, not conservation focused ones, for
> mythology and fossils."*
>
> Proposals for review, following the rules already set: **four per biome, one per
> adult life stage**, the impact ladder from idea 67, **no animal twice in a
> biome**, and every quest ending with real named people. The Vigil and On the
> Brink are deliberately left out — Ayr will decide those later.

---

## FOREST

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The den boxes, and the predator you want back.** Pine martens were nearly gone from Britain. Putting up den boxes brings them back — and martens suppress grey squirrels, which lets red squirrels return. **You save a predator to save a prey species.** *Emma Sheehy's research, Ireland 2014; Vincent Wildlife Trust's Pine Marten Recovery Project, Wales, from 2015* | **Pine marten** |
| **Adult / skills** · the pattern | **Too many deer.** No predators, so deer eat every sapling and the forest quietly stops replacing itself. The trees look fine; there is simply nothing under them. Unglamorous, deeply unpopular, and the thing that decides whether the wood exists in a century. | **Red deer** |
| **Adult / power** · a programme | **The Iberian lynx.** Down to about 94 animals in 2002. Captive breeding, rebuilding the rabbit population it eats, and underpasses to stop road deaths — over 2,000 by 2023, and downlisted. *LIFE Iberlince; Miguel Ángel Simón* | **Iberian lynx** |
| **Elder** · law | **The spotted owl.** The 1994 Northwest Forest Plan reshaped US logging law around one bird. The owl kept declining anyway — outcompeted by barred owls moving in. The 2024 answer is a plan to shoot barred owls for decades. **The law worked and the bird still lost.** No clean answer. | **Northern spotted owl** |

## RAINFOREST

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **Old phones in the canopy.** Recycled smartphones, solar-powered, strapped in trees, listening for chainsaw sound and alerting rangers while the tree is still standing. The same recordings turn out to be a census of everything calling nearby. *Topher White, Rainforest Connection, from 2013* | **Siamang** |
| **Adult / skills** · the pattern | **Palm oil.** The boycott answer is wrong: oil palm yields far more per hectare than any alternative, so replacing it costs *more* forest. Certification is real and imperfect. The honest lesson is that the satisfying answer and the correct answer are different. | **Orangutan** |
| **Adult / power** · a programme | **Whose land it is.** Deforestation is dramatically lower inside recognised Indigenous territory — one of the best-evidenced findings in conservation. The programme is not a reserve; it is a land title. *The Kayapó, Brazil; Almir Suruí and the Paiter-Suruí* | **Jaguar** |
| **Elder** · law | **Yasuní.** Ecuador put it to a national vote in 2023 and the country chose to leave the oil in the ground under one of the most biodiverse places on earth. A binding referendum on extraction — and then the argument about actually carrying it out. | **Harpy eagle** |

## WETLANDS

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The toad patrol.** One night each spring, thousands of amphibians cross a road to the pond they were born in. Volunteers with buckets and torches carry them over. It is the least technological quest in the game and it saves whole populations. *Froglife's Toads on Roads, UK; Germany's Krötenzäune* | **Common toad** |
| **Adult / skills** · the pattern | **The engineer.** Beaver dams slow water, so the flood peak downstream drops measurably. The trial that proved it ran for years on one Devon stream. **The animal you raised as a child turns out to be the infrastructure.** *Devon Beaver Trial, Prof Richard Brazier, University of Exeter* | **Beaver** |
| **Adult / power** · a programme | **The marshes that were drained on purpose.** Saddam Hussein drained the Mesopotamian Marshes to punish the people living in them. An engineer who had left came back to reflood them, and much of it worked. *Azzam Alwash, Nature Iraq; Goldman Prize 2013* | **Otter** |
| **Elder** · law | **What counts as a wetland.** Legal protection depends entirely on a definition, and the definition keeps moving — the 2023 *Sackett v. EPA* ruling removed federal protection from a large share of US wetlands overnight. Nothing physical changed. The word did. | **Sandhill crane** |

## COAST

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **Lights out.** Hatchlings find the sea by heading for the brightest horizon. A beachfront hotel's lighting sends a whole nest inland to die. The fix is a municipal ordinance and some shielded bulbs. *Sea Turtle Conservancy; Florida's coastal lighting ordinances* | **Loggerhead turtle** |
| **Adult / skills** · the pattern | **Coastal squeeze.** Sea walls stop saltmarsh retreating inland as the sea rises, so the marsh drowns against the wall. The fix is to **deliberately breach your own sea defence** and let the water in. *Wallasea Island, RSPB, 2015 — built from Crossrail tunnel spoil* | **Avocet** |
| **Adult / power** · a programme | **The no-take zone.** Two divers spent seventeen years arguing for one bay to be closed to all fishing. It became Scotland's first, and the lobsters inside grew large enough to spill out and restock the water around it. *Howard Wood and Don MacNeish, COAST, Lamlash Bay, 2008; Goldman Prize 2015* | **Lobster** |
| **Elder** · law | **The blue blood.** Horseshoe crab blood detects bacterial contamination, so it is used to test injectable medicines — nearly every vaccine you have had. A synthetic replacement has existed for years and was resisted for years. Ancient animal, modern pharmacopoeia, slow-moving standards body. | **Horseshoe crab** |

## REEF

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **Coral gardening.** Broken staghorn fragments grow fast on rope nurseries and can be cemented back onto dead reef. A hobby diver worked this out and it became the standard method. *Ken Nedimyer, Coral Restoration Foundation, Florida Keys* | **Staghorn coral** |
| **Adult / skills** · the pattern | **The starfish outbreaks.** Crown-of-thorns eat coral, and their population explodes in pulses. The trail leads back inland to fertiliser runoff feeding the larvae. **The reef problem starts on a farm.** *COTSbot / RangerBot, Matthew Dunbabin, QUT* | **Crown-of-thorns starfish** |
| **Adult / power** · a programme | **Protect the herbivore.** When coral dies, algae takes the space and stops new coral settling. Parrotfish eat the algae. So the programme is not a coral programme — it is a **ban on catching a fish nobody thought was important.** *Bonaire, 2010; Belize, 2009* | **Parrotfish** |
| **Elder** · law | **The heat.** Water quality, fishing pressure and runoff can all be fixed locally, and the reef bleaches anyway when the ocean runs hot. Repeated mass bleaching from 2016 onward. **The one thing that decides the outcome is the one thing local law cannot reach.** *Terry Hughes and the mass-bleaching surveys* | **Humphead wrasse** |

## OPEN OCEAN

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The escape hatch.** A shrimp trawl drowns sea turtles. A working shrimper welded a grid into his net that lets big animals push out through a flap while the shrimp pass through — he built it to keep jellyfish out, and it turned into law. *Sinkey Boone, Georgia shrimper, 1970s — the Turtle Excluder Device* | **Kemp's ridley turtle** |
| **Adult / skills** · the pattern | **Dolphin-safe.** Tuna boats used to set nets on dolphin herds because tuna swim beneath them. The label fixed that — and pushed fleets to set on floating objects instead, which catches far more sharks and turtles. **Every fishing method kills something; the label chose which.** | **Spinner dolphin** |
| **Adult / power** · a programme | **Watching from orbit.** Almost every large vessel broadcasts its position, and a boat that switches its transponder off at a marine reserve boundary is telling you something. Made public and free, worldwide. *Global Fishing Watch — Oceana, SkyTruth and Google, 2016* | **Bluefin tuna** |
| **Elder** · law | **The two-thirds nobody owned.** International waters — most of the ocean — had no legal mechanism to protect biodiversity at all. The High Seas Treaty, agreed 2023 after nearly twenty years of negotiation, created one. | **Blue whale** |

## DEEP SEA

*See the access section below — this biome is reached differently from every other.*

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The dropcam.** You cannot go down, so you send something instead: a camera in a pressure housing, a weight, some bait and a float. Built cheaply, dropped over the side, and it comes back with an animal nobody has filmed there before. | **Bluntnose sixgill shark** |
| **Adult / skills** · the pattern | **Fished as if it were fast.** Orange roughy were managed like an ordinary fish and turned out to live over 150 years and not breed until their twenties. The stock was gone before anyone read the ear bones. **The mistake was about time, not quantity.** | **Orange roughy** |
| **Adult / power** · a programme | **Older than the fishery.** Bottom trawls flatten seamount corals that have been growing for thousands of years — one black coral colony dated to over 4,000 years old. Closing seamounts to bottom gear is the programme, and it is enforced by the satellite work from the ocean quest. | **Black coral** |
| **Elder** · law | **The nodules.** Potato-sized metal lumps on the abyssal plain, wanted for batteries for the energy transition. One octopus is known to lay its eggs only on sponge stalks that grow only on those nodules — **mine the nodule and the species has nowhere to breed.** Genuinely no clean answer. *The International Seabed Authority; the moratorium coalition* | **Ghost octopus** |

## DESERT

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **Head-starting.** Hatchling tortoises are soft for years and ravens eat them. Raven numbers exploded because of landfill and powerlines — so you are not fixing a raven problem, you are fixing a **rubbish** problem, while raising hatchlings in pens until their shells harden. *Mojave desert tortoise head-start programmes* | **Desert tortoise** |
| **Adult / skills** · the pattern | **The solar farm.** Desert sun is the best climate solution available and utility-scale solar sterilises the ground it covers. Two things you believe in, on the same hectare. | **Fennec fox** |
| **Adult / power** · a programme | **The trees that were already there.** The Great Green Wall planned to plant a forest across Africa and most of the planting died. What worked was noticing that living rootstock was already under the fields and simply protecting the shoots — millions of hectares regreened for almost nothing. *Tony Rinaudo, farmer-managed natural regeneration, Niger* | **Dorcas gazelle** |
| **Elder** · law | **Protection, removed.** Oman's Arabian Oryx Sanctuary was the first place ever struck off the World Heritage list — cut by 90% for oil prospecting in 2007. Every other quest is about winning protection. **This one is about losing it, legally and on purpose.** | **Arabian oryx** |

## MOUNTAINS

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The corral.** A snow leopard gets into an unroofed livestock pen and, in the panic, kills far more than it can eat — so the herder loses a year's income and kills the leopard. A wire roof ends it. Add insurance and the killing stops being rational. *Snow Leopard Trust; Shafqat Hussain, Project Snow Leopard, Baltistan* | **Snow leopard** |
| **Adult / skills** · the pattern | **The painkiller.** South Asia's vultures fell by around 99% in a decade and nobody knew why. The cause was a veterinary anti-inflammatory in cattle carcasses, fatal to vultures in trace amounts. Then the second-order effect: no vultures, more feral dogs, more rabies. **A drug for cows became a human health crisis.** *Lindsay Oaks and Rick Watson, 2004* | **White-rumped vulture** |
| **Adult / power** · a programme | **All from one valley.** Alpine ibex were hunted to about a hundred animals in a single royal reserve. Everything alive today descends from them — a full recovery in numbers that is still carrying the genetic narrowness of that bottleneck. **Population recovered, diversity did not.** *Gran Paradiso* | **Alpine ibex** |
| **Elder** · law | **The shahtoosh ban.** A wool fine enough to pass through a ring, and it can only be taken from a dead animal — three or four of them per shawl. Listed on CITES Appendix I, banned, enforced, and the population went from around 75,000 back to roughly 300,000. **A law that worked, and a trade that still exists underground.** | **Tibetan antelope** |

## POLAR

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **The bear patrol.** A town where polar bears walk through in autumn keeps a hotline, bear-proof bins and a holding facility, so bears are moved rather than shot. Mundane municipal work, and it is why the town and the bears both still exist. *Churchill, Manitoba's Polar Bear Alert Program* | **Polar bear** |
| **Adult / skills** · the pattern | **The haulout.** Walruses rest on sea ice between dives. Without ice they pile onto beaches in tens of thousands, and animals die in stampedes rather than from anything you can treat. **The injury is real and the cause is a thousand miles away.** | **Walrus** |
| **Adult / power** · a programme | **The Ross Sea.** The world's largest marine protected area, agreed in 2016 by consensus among nations including several that fish there, after years of annual refusals. It covers the least-altered stretch of ocean left. | **Adélie penguin** |
| **Elder** · law | **Whose count was right.** In the 1970s scientists estimated a few hundred bowheads and moved to stop Iñupiat whaling. The hunters said the estimate was wrong because whales pass *under* the ice where nobody was watching. New methods proved the hunters right — the population was many times larger. The quota system that followed is co-managed. *Alaska Eskimo Whaling Commission* | **Bowhead whale** |

## FARMLAND

| Stage | Story | Animal |
|---|---|---|
| **Young adult** · local | **A hole in the fence.** A hedgehog needs about a mile of range a night and a modern garden fence seals it in. A 13cm gap in every fence on the street reconnects the whole block. **The smallest possible intervention, done by everyone.** *Hedgehog Street, PTES and the British Hedgehog Preservation Society, from 2011* | **Hedgehog** |
| **Adult / skills** · the pattern | **The seed coating.** A pesticide applied to seed rather than sprayed ends up throughout the plant, including the pollen. The EU restricted the main neonicotinoids in 2018, and the argument over what replaced them has not stopped. | **Bumblebee** |
| **Adult / power** · a programme | **Let it go.** A failing arable estate stopped farming, put grazing animals on it and let scrub come. Within twenty years it had nightingales, turtle doves, purple emperors and the first storks to breed in Britain in centuries — on ordinary clay soil nobody thought was special. *Knepp Estate; Isabella Tree and Charlie Burrell, from 2001* | **White stork** |
| **Elder** · law | **The nitrogen ruling.** A court found the Netherlands was breaking its own nature law on nitrogen deposition, which meant cutting livestock, which brought tractors to the capital and eventually brought a government down. **Environmental law with a real political price, paid by real farmers.** | **Black-tailed godwit** |

---

## GETTING TO THE DEEP SEA — the access problem

> **Ayr, 2026-08-25.** *"The deep sea one should have more analysis on how to do it
> bc it's physically hard to get to. Like, the player has to learn scuba diving at
> some point. Maybe teen, maybe young adult."*

### The fact that decides the whole design

**Recreational scuba stops at about 40 metres. The deep sea starts at about 200.**

**Scuba does not get you there, and no amount of training will.** Below roughly
40m an ordinary air supply becomes actively dangerous — nitrogen narcosis, oxygen
toxicity, and decompression obligations measured in hours. The trained-diver
fantasy tops out an order of magnitude short of the biome.

This is the most useful constraint in the game, because it is real and it cannot
be argued with. **Every other biome is entered by walking into it. The deep sea has
to be entered through instruments.**

### The water ladder

| Stage | Capability | Opens |
|---|---|---|
| **Child** | Swim | Shallows, rockpools, the pond |
| **Teen** | Snorkel and freedive | Coast, tide line, kelp canopy |
| **Teen** | **Open water certification** | Reef and kelp to 18m — the first serious gate |
| **Young adult** | Advanced and deep training | 30–40m: wrecks, reef walls, the bottom of the kelp |
| **Adult / power** | **A boat** | You stop borrowing rides. A facility-scale purchase |
| **Adult / power** | **ROV and dropcam** | The deep sea, at a distance |
| **Elder** | **Crewed submersible** | The deep sea, in person, rarely, and it is an event |

**Recommendation on Ayr's open question: certify as a teen.** The real minimum age
for a full open-water certification is 15, and a junior qualification starts at 10
— so a teenager certifying is accurate rather than generous. It also gives the teen
stage a genuine accomplishment, which idea 69's parked kid and teen stages need,
and it means young adult begins with the water already open instead of spending its
first hours on paperwork.

### Certification is real teachable content

The course content is genuinely interesting and none of it needs inventing:

- **Why you never hold your breath on the way up** — the air in your lungs expands
  as pressure drops, and this is the one rule that kills people who break it
- **Buoyancy** — hovering without touching anything, which is also the entire
  ethic of not wrecking a reef with your fins
- **Nitrogen loading and why you cannot simply come straight up**
- **Narcosis** — that judgement quietly degrades with depth and you will not notice
- **The buddy system** — nobody dives alone, which makes it a two-character activity

**This is a tutorial that is also a quest that is also true.** It fits the codex's
read-aloud and practice-quiz jobs exactly.

### The deep sea plays differently, and should

You do not swim here. You **operate**: position the vessel, drop the camera, set
the bait, wait, recover, and see what came. The animal encounters arrive as
**footage** rather than as meetings — which is precisely how every deep-sea species
you have ever seen was actually seen.

It makes the deep sea the last biome, and it should feel like it.

### What each career does down here

- **Photographer** — the camera is on the vehicle, not in your hands. Framing
  becomes piloting, and the best shot is the one the ROV was in position for.
- **Researcher** — sampling, sensors, and the fact that most of what comes up is
  new. This is the career the biome most rewards.
- **Tour guide** — you cannot take anyone down. So you do the real thing instead:
  **narrate a live feed to an audience on the surface.** That is exactly how
  deep-sea outreach works on real research vessels, where a scientist talks the
  public through a dive as it happens. The guide's deep-sea job is the one that
  needed the least invention.

---

# THE NON-CONSERVATION QUESTS

> **Ayr, 2026-08-25.** *"Unique fun and learning based quests, not conservation
> focused ones, for mythology and fossils. Fossils should have one per era, and
> mythology one per culture."*

These do not use the impact ladder. They are not about saving anything — they are
about **finding out**, and they are the part of the game that is purely a pleasure.

---

## MYTHOLOGY — one per culture

### The through-line: myths are records

Not "people used to be silly." **Folklore is data collected without a laboratory.**
Three things keep turning out to be true underneath a monster:

1. **Somebody found a fossil** and explained it with the animals they knew
2. **Somebody saw a real animal** nobody had a specimen of yet
3. **Somebody needed to keep children away from something that kills them**

Each quest ends with the player able to say which of the three this one was — and
sometimes the honest answer is that it is none of them and the story is just a
story, which is also fine.

| Culture | Creature | What it turns out to be about |
|---|---|---|
| **Greek / Scythian** | **Griffin** | A four-legged beaked animal guarding gold, described along trade routes that ran through beds of *Protoceratops* skeletons — beaked, four-legged, and abundant. *Adrienne Mayor's fossil-folklore work* |
| **Chinese** | **Qilin** | In 1414 a giraffe reached the Ming court from East Africa by way of Bengal and was received as a qilin. **A court painting of it survives.** A real animal becoming an omen, documented as it happened |
| **Norse / Scandinavian** | **Kraken** | Giant squid. Not confirmed alive on camera until 2004. "Monster" and "species nobody has photographed yet" were the same category for most of history |
| **Irish** | **Púca** | A shapeshifter tied to Samhain and the end of harvest — after its night, what is left in the field is not fit to pick. Folklore doing the job of a date on a calendar |
| **Japanese** | **Tanuki** | An actual living animal with enormous folklore attached. The quest is the difference between a mythical animal and **a real animal treated mythically** — and the raccoon dog is right there in the roster |
| **Inuit** | **Qalupalik** | A creature that takes children who go to the water's edge alone. The ice edge genuinely kills children who go there alone. **Instruction, in the form that gets remembered** |
| **Māori** | **Taniwha** | Guardians associated with particular stretches of water — frequently the dangerous ones. Still cited in New Zealand planning and consultation today, which makes this the one that is **not** past tense |
| **Aztec / Nahua** | **Ahuizotl** | A water creature with a grasping hand on its tail, said to drown people at the lake edge. Already drawn for Safari Saga |
| **Akan / West African** | **Anansi** | The spider who owns all stories. The quest sits beside a real orb-weaver and asks why the **trickster** role lands on this animal in so many places |
| **Arabian / Persian** | **Roc** | A bird enormous enough to carry an elephant, reported from the Indian Ocean trade — and Madagascar had the elephant bird, whose eggs are the size of a rugby ball and were carried as curiosities |
| **Slavic** | **Rusalka** | A water spirit at the river in early summer. Same function as the qalupalik, invented independently, thousands of miles away — which is the point of putting them in the same game |
| **Aboriginal Australian** | **Bunyip** | A waterhole creature, sometimes linked by scholars to *Diprotodon* remains. **Flagged for consultation — see below** |

### The rule this set has to follow

**Do not adjudicate whether a being is real, and do not treat living cultures'
beliefs as solved puzzles.** The Greek griffin is safe to explain because nobody
alive holds it as belief. The taniwha and the bunyip are not in that category.

For those, the game presents the folklore **as the culture presents it**, notes
where outside scholars have proposed a connection, and says clearly that the
proposal is an outsider's. **This set needs consultation before it ships** — which
is the open question already parked in the doc, now with a concrete reason and a
concrete list attached.

---

## FOSSILS — one per period

### A terminology note first

**There are only three eras** — Palaeozoic, Mesozoic, Cenozoic. Three quests is too
few for 50 fossil species. **Periods** give twelve or thirteen, which fits. The
game can still say "era" in dialogue, where it is the ordinary English word.

### The through-line: not what lived, but how anyone knows

Every one of these is a **detective story about method.** That is what makes them
fun rather than a list, and it is the thing a museum placard never has room for.

| Period | The find | What it teaches |
|---|---|---|
| **Ediacaran** | **Charnia**, in English rock everyone knew was too old to hold fossils. A schoolgirl reported it and was told she was mistaken; a boy found it soon after and was believed | **Who gets believed.** Also: the floor of the fossil record kept dropping |
| **Cambrian** | **Anomalocaris**, described as three separate animals — the mouth, the arm and the body each got their own name — before anyone realised they were one | Reconstruction is **inference**, and inference can be confidently wrong |
| **Ordovician** | The first mass extinction, and orthocone nautiloids several metres long | Extinction is **normal, enormous, and older than backbones on land** |
| **Silurian** | Sea scorpions over two metres, and the first things to crawl out of water | The land was **empty**, and something had to be first |
| **Devonian** | **Tiktaalik.** Predicted from the age of the rock, searched for on purpose, found on Ellesmere Island in 2004 | **Evolution makes testable predictions.** The cleanest example that exists |
| **Carboniferous** | Dragonflies with 70cm wingspans, in forests with far more atmospheric oxygen | Deep time is physically present today — **that forest is the coal** |
| **Permian** | The Great Dying: the largest extinction in the record. And *Dimetrodon*, which is not a dinosaur and is **more closely related to you than to one** | The biggest extinction is the one nobody has heard of |
| **Triassic** | Crocodile-line archosaurs ruling, with dinosaurs as a minor group | **The winners were not obvious at the time** |
| **Jurassic** | **Mary Anning** at Lyme Regis — ichthyosaur, plesiosaur, the first British pterosaur, and coprolites. Sold fossils to eat, was refused membership of the Geological Society for being a woman, and watched others publish her finds | **Whose name goes on a discovery**, and what that has to do with the science |
| **Cretaceous** | Feathered dinosaurs from Liaoning, from 1996 — and then melanosome shape revealing **colour**, so *Sinosauropteryx* is known to have had a banded ginger-and-white tail | **We can know what colour an extinct animal was.** Almost nobody knows this |
| **Paleogene** | Whales going back to the sea: *Pakicetus*, *Ambulocetus*, *Basilosaurus*, and an ankle bone that ties them to hippos and deer | A **complete transitional sequence**, walkable end to end |
| **Neogene** | Megalodon, known almost entirely from teeth — and Steno realising in 1667 that "tongue stones" were shark teeth, which is where reading rock layers began | **Stratigraphy was invented by identifying a fossil correctly** |
| **Quaternary** | Mammoths in permafrost, complete enough to have hair and stomach contents — and the live de-extinction argument | The **ethical question that is still open**, presented as open |

### Why this set matters more than it looks

The fossil quests are where the game explains **deep time**, and deep time is the
single hardest idea in natural history to convey. A player who finishes these
understands that the Permian extinction, the whale's ankle and the ginger tail are
all things people **worked out**, from evidence, in living memory in some cases.

That is the "learning based, not conservation focused" brief, delivered.

---

## THE ROSTER ARITHMETIC, VERIFIED AGAINST THE DATA

> **Ayr, 2026-08-25.** *"What I was wanting was 50 in On the Brink, the ones still
> alive (both critically endangered AND extinct in the wild) plus those 7 to make
> it an even 50. 700 animals in the main game. 50 in On the Brink. Then 250 in post
> game (100 mythology, 50 fossil, and 50 vigil.)"*

### Counted, not assumed

Every `V()` entry carries an origin tag. Extinct species are tagged with a dagger
and a year — `"† 1936"` for the thylacine. That gives a clean split:

| | |
|---|---|
| **Vigil entries total** | **99** |
| **Tagged † — genuinely extinct** | **56** |
| **Not tagged — still alive** | **43** |

The 43 are the 13 extinct-in-the-wild plus the 30 critically endangered that the
earlier audit found sitting in a memorial while still breathing.

### On the Brink lands exactly

```
43   still alive, currently in the Vigil   (13 EW + 30 CR)
 7   critically endangered, in the biomes  (vaquita, axolotl, kakapo,
                                            sawfish, sunflower sea star,
                                            pangolin, gharial)
50   On the Brink
```

**Ayr's composition is exactly right and needs nothing invented.**

### The one number that does not fit: the Vigil is 56, not 50

Strip the 43 living species out and what remains is **56 genuinely extinct
animals**, not 50. Six over.

Totalling it Ayr's way gives 1,006:

| Group | Ayr's target | Actually available |
|---|---|---|
| Biomes | 700 | 572 + new |
| On the Brink | 50 | **50 exactly** |
| Vigil | 50 | **56** |
| Mythology | 100 | 100 |
| Fossil | 50 | 50 |
| Domestic | 50 | 50 |

### Recommendation: let the Vigil be 56 and the biomes be 694

```
694  biomes
 50  On the Brink
 56  Vigil
100  Mythology
 50  Fossil
 50  Domestic
1000
```

**Do not cut six extinct species to reach a round number.** They are real animals
that really went, every one is already written and drawn, and the Vigil is the one
group in the game where the count is a matter of historical record rather than
design. The biomes are the right place to absorb it because they are the only group
still being *created* — 694 simply means **122 new species to invent instead of
128**, which is less work, not more.

### One more thing: the postgame is four groups, not three

Ayr listed mythology 100, fossil 50 and vigil 50 — that is 200. The fourth is
**domestic 50** (41 breeds plus the 9 aquarium fish), which makes the 250.

### Correcting my reasoning on the Arabian oryx

The conclusion was right — it is not in On the Brink — but the reasoning was not.
I argued it does not belong because it is *narratively* a recovery story rather
than a decline story. **That is a criterion Ayr never set.**

**The actual rule is a status test:** currently critically endangered or extinct in
the wild means in, anything else means out. The Arabian oryx is **Vulnerable**, so
it is out on status. Nothing to do with the shape of its story.

The status test is the one to apply to all 50, because it is checkable and it does
not drift with whoever is telling the story.

---

## CONFIRMED: 1000, and what it costs

> **Ayr, 2026-08-25.** *"I want 1000 total. 700 in game animals. 50 on the brink.
> 100 myths. 50 fossils. 50 vigil. 50 breeds."*

**700 + 50 + 100 + 50 + 50 + 50 = 1000.** Confirmed. This is the target.

### The finding: twelve of the Vigil's "extinct" are not historical extinctions

Listing the 56 dagger-tagged Vigil species by date splits them in two:

| Group | Count | Dates |
|---|---|---|
| **Ice Age megafauna** | **12** | ~7,700 to ~13,000 years ago |
| **Historical extinctions** | **44** | ~1000 CE to the present |

The twelve: **Woolly Rhinoceros · Dire Wolf · Smilodon · Megatherium · Glyptodon ·
Mastodon · Columbian Mammoth · Cave Lion · Short-faced Bear · Giant Beaver · Steppe
Bison · Irish Elk.**

**These are fossils, not memorials.** The Vigil is for animals people drove out in
recorded time and can be held responsible for — the dodo in 1662, the great auk in
1844, the thylacine in 1936, filmed in a cage. A sabre-toothed cat from thirteen
thousand years ago is a different kind of object entirely, and it is known from
exactly the same evidence as everything in the fossil group.

### And the fossil group cannot support its own quests

The 50 fossil entries are **Mesozoic reptiles and nothing else** — Triassic,
Jurassic and Cretaceous. Coelophysis, Allosaurus, Archaeopteryx, Diplodocus.

That means the group has **no Cambrian, no Ordovician, no Silurian, no Devonian, no
Carboniferous, no Permian, no Paleogene, no Neogene and no Quaternary.** Nine of
the thirteen periods in the fossil quest design have no animals in them at all.

**The fossil group needs rebalancing regardless of this arithmetic.** It is
currently a dinosaur set wearing the name of the whole fossil record.

### What the 1000 costs, then

| Move | Effect |
|---|---|
| **The 12 Ice Age species go Vigil → Fossil** | Vigil 56 → **44** · Fossil 50 → **62** |
| **Add 6 historical extinctions to the Vigil** | Vigil 44 → **50** |
| **Cut 12 surplus dinosaurs from the fossil group** | Fossil 62 → **50** |
| **7 critically endangered leave the biomes for On the Brink** | Biomes 579 → 572 |
| **Invent 128 new living species** | Biomes 572 → **700** |

Nothing is cut that should not be. **The only cuts are duplicate dinosaurs**, and
the group is better for it because it stops being Jurassic-only.

### The six historical extinctions to add — all real, all missing

| Species | Gone | Why it belongs |
|---|---|---|
| **Baiji** | 2006 | The Yangtze river dolphin. The first cetacean humans wiped out, and a survey simply failed to find any |
| **Golden toad** | 1989 | Monteverde, Costa Rica. The emblem of the global amphibian collapse |
| **Pyrenean ibex** | 2000 | The last one was killed by a falling tree — and it is **the only animal ever cloned back and then made extinct a second time**, minutes after birth |
| **Po'ouli** | 2004 | Hawaiian honeycreeper. The last known bird died in captivity while a mate was still being searched for |
| **Bramble Cay melomys** | 2016 | **The first mammal declared extinct because of sea level rise** |
| **Christmas Island pipistrelle** | 2009 | Monitored to the very end; the last individual was recorded calling, alone, and then stopped |

Every one is more recent, better documented and more relevant to the game's
subject than a twelfth sauropod.

---

# THE 1000 — FINAL, ROUND, DECIDED

> **Ayr, 2026-08-25.** *"I know it's weird, but it's what I want. I want nice round
> numbers. 100's and 50's. Please make it so."*
>
> It is not weird. A roster that reads **700 / 50 / 100 / 50 / 50 / 50** is legible
> to a player, checkable at a glance, and makes every completion bar in the game a
> clean fraction. **This is the roster. It is no longer open.**

```
700   living animals        the twelve biomes
 50   On the Brink          critically endangered + extinct in the wild
100   Mythology             postgame
 50   Fossils               postgame
 50   The Vigil             postgame — the genuinely extinct
 50   Breeds and domestics   postgame
────
1000
```

## The five moves that get there

### 1. Forty-three living species leave the Vigil for On the Brink

13 extinct-in-the-wild + 30 critically endangered. They were sitting in a memorial
while still alive.

### 2. Seven critically endangered species leave the biomes for On the Brink

**Vaquita · Axolotl · Kākāpō · Sawfish · Sunflower sea star · Pangolin · Gharial.**

43 + 7 = **50.** On the Brink is complete and required nothing invented.

### 3. Twelve Ice Age species leave the Vigil for the Fossils

**Woolly Rhinoceros · Dire Wolf · Smilodon · Megatherium · Glyptodon · Mastodon ·
Columbian Mammoth · Cave Lion · Short-faced Bear · Giant Beaver · Steppe Bison ·
Irish Elk.**

7,700–13,000 years old, known from exactly the same evidence as the rest of the
fossil group. The Vigil is for extinctions in recorded time.

Vigil 56 → **44.** Fossils 50 → **62.**

### 4. Six real historical extinctions join the Vigil

| Species | Gone | Why |
|---|---|---|
| **Baiji** | 2006 | The first cetacean humans wiped out. A full survey simply found none |
| **Golden toad** | 1989 | Monteverde. The emblem of the global amphibian collapse |
| **Pyrenean ibex** | 2000 | **The only animal ever cloned back and made extinct a second time**, minutes after birth |
| **Po'ouli** | 2004 | The last known bird died in captivity while a mate was still being searched for |
| **Bramble Cay melomys** | 2016 | **The first mammal declared extinct because of sea level rise** |
| **Christmas Island pipistrelle** | 2009 | Monitored to the end. The last one was recorded calling, alone, and then stopped |

Vigil 44 → **50.** All six are real, documented, and were missing.

### 5. Twelve surplus dinosaurs leave the fossil group

Chosen by thinning the clades that were carrying three, four or six near-identical
entries — **not** by cutting anything the record depends on.

| Cut | Kept in its place | Why this one goes |
|---|---|---|
| **Brontosaurus** | Apatosaurus | The same animal. The name was sunk as a synonym in 1903 and revived in 2015 — **that argument belongs in Apatosaurus's entry, not in a second slot** |
| **Camarasaurus** | Brachiosaurus, Diplodocus | Six sauropods was three too many |
| **Mamenchisaurus** | Diplodocus | As above; the long-neck point is already made |
| **Ceratosaurus** | Allosaurus | Four Jurassic theropods, two survive |
| **Cryolophosaurus** | Dilophosaurus | The crested-theropod slot is filled, and Dilophosaurus carries the famous *Jurassic Park* misdepiction |
| **Giganotosaurus** | Tyrannosaurus, Spinosaurus | Third giant carnivore |
| **Carnotaurus** | Tyrannosaurus | Fourth |
| **Gallimimus** | Oviraptor | Oviraptor keeps its far better story — named "egg thief", then found to be **brooding its own eggs** |
| **Styracosaurus** | Triceratops, Protoceratops | **Protoceratops must stay** — the griffin quest needs it |
| **Kentrosaurus** | Stegosaurus | Two stegosaurs |
| **Rhamphorhynchus** | Pteranodon, Quetzalcoatlus, Pterodactylus | Four pterosaurs |
| **Ophthalmosaurus** | Shonisaurus, Plesiosaurus, Liopleurodon, Mosasaurus | Five marine reptiles. **Plesiosaurus must stay** — the Mary Anning quest needs it |

Fossils 62 → **50.**

### 6. The biomes

579 living now, less the 7 that go to On the Brink = 572.

**128 new living species to invent** to reach 700. Recorded in `new_species.md` as
work outstanding.

## The arithmetic, closed

| Group | Was | Moves | **Final** |
|---|---|---|---|
| Biomes | 579 | −7, +128 new | **700** |
| On the Brink | 0 | +43, +7 | **50** |
| Mythology | 103 | −3 | **100** |
| Fossils | 50 | +12, −12 | **50** |
| Vigil | 99 | −43, −12, +6 | **50** |
| Breeds | 41 + 9 fish | — | **50** |
| | | | **1000** |

## One thing still open, and it is not arithmetic

The fossil group after these moves covers **Permian, Triassic, Jurassic, Cretaceous
and Quaternary** — five of the thirteen periods the fossil quests are built on.

**Still empty: Ediacaran, Cambrian, Ordovician, Silurian, Devonian, Carboniferous,
Paleogene and Neogene.** No Anomalocaris, no Tiktaalik, no Meganeura, no
Basilosaurus, no Megalodon.

That does not change any total — it is a question of **which 50**, not how many. If
Ayr wants the fossil quests buildable, roughly eight more dinosaurs come out and
those eight periods get an animal each. **Flagged, not done.**

---

# THE FOSSIL 50 — REBALANCED ACROSS THE RECORD

> **Ayr, 2026-08-25.** *"Yeah let's make the fossil group more rounded, but still
> keep it to 50."*
>
> **This supersedes the twelve-dinosaur cut recorded earlier today.** That cut only
> made room for the Ice Age twelve. This is the full rebalance.

## The honest cost, first

The group is currently **100% Mesozoic reptiles**. Covering thirteen periods in
fifty slots means the dinosaurs stop being the whole group and become the largest
part of it.

**29 of the 50 existing entries are cut, and 4 of the 12 Ice Age arrivals are not
used.** That is the price of the other eight periods, and there is no version of
this where it is cheaper — the slots have to come from somewhere and the dinosaurs
are holding all of them.

**Dinosaurs still end up the biggest block in the game's fossil record**, which is
also true of every museum.

## The allocation

| Period | Slots | Why this many |
|---|---|---|
| **Ediacaran** | 2 | The first complex life. Almost nothing to choose from |
| **Cambrian** | 3 | The Burgess Shale is the single richest source of method stories |
| **Ordovician** | 2 | |
| **Silurian** | 2 | |
| **Devonian** | 3 | Fish become tetrapods — the biggest transition in the record |
| **Carboniferous** | 2 | |
| **Permian** | 3 | The largest extinction, and the mammal line begins |
| **Triassic** | 6 | Dinosaurs appear, and are not yet the ones in charge |
| **Jurassic** | 7 | |
| **Cretaceous** | 8 | The most famous animals in the world live here |
| **Paleogene** | 2 | Whales go back to the sea |
| **Neogene** | 2 | |
| **Quaternary** | 8 | Ice Age megafauna, already drawn and already loved |
| | **50** | |

## The fifty

### Kept from the existing group — 21

**Triassic (6)** · Coelophysis · Eoraptor · Herrerasaurus · Postosuchus ·
Shonisaurus · Proganochelys
*Keeps the first dinosaurs, the crocodile-line ruler the Triassic quest is about,
the giant marine reptile and the first turtle.*

**Jurassic (7)** · Allosaurus · Archaeopteryx · Stegosaurus · Brachiosaurus ·
Apatosaurus · **Plesiosaurus** · Pterodactylus
*Plesiosaurus is protected — the Mary Anning quest needs it. Apatosaurus is kept
over Diplodocus so it can carry the Brontosaurus story.*

**Cretaceous (7)** · Tyrannosaurus · Triceratops · Velociraptor · Spinosaurus ·
**Protoceratops** · Ankylosaurus · Parasaurolophus
*Protoceratops is protected — the griffin quest needs it.*

**Permian (1)** · Lystrosaurus
*The animal that inherited the world after the Great Dying.*

### Moved in from the Vigil — 8

**Quaternary** · Woolly Rhinoceros · Smilodon · Mastodon · Columbian Mammoth ·
Dire Wolf · Megatherium · Glyptodon · Irish Elk

*Not used: Cave Lion, Short-faced Bear, Giant Beaver, Steppe Bison — Smilodon,
Megatherium and the mammoth already cover those niches.*

### New — 21

| Period | Species | Why it earns a slot |
|---|---|---|
| **Ediacaran** | **Charnia** | The quest species. Found in rock everyone knew was too old for life |
| | **Dickinsonia** | Nobody could agree for decades whether it was an animal at all — settled by finding cholesterol in it |
| **Cambrian** | **Anomalocaris** | The quest species. Described as three separate animals |
| | **Opabinia** | Five eyes and a grasping hose. The paper describing it was **laughed at, and the laughter was the point** |
| | **Hallucigenia** | Reconstructed upside down *and* back to front, then corrected twice |
| **Ordovician** | **Trilobite** | The fossil more people own than any other, and absent from the game |
| | **Cameroceras** | A straight-shelled cephalopod several metres long |
| **Silurian** | **Jaekelopterus** | A sea scorpion larger than a person |
| | **Pneumodesmus** | A millipede, and **the oldest known animal to have breathed air.** The Silurian quest is about being first onto land |
| **Devonian** | **Tiktaalik** | The quest species. Predicted, then found on purpose |
| | **Dunkleosteus** | Armoured, enormous, and it sheared instead of biting |
| | **Ichthyostega** | Legs, at last |
| **Carboniferous** | **Meganeura** | The quest species. A dragonfly with a 70cm wingspan |
| | **Arthropleura** | A two-and-a-half-metre millipede |
| **Permian** | **Dimetrodon** | The quest species. **Not a dinosaur, and closer to you than to one** |
| | **Gorgonops** | Sabre teeth, ninety million years before Smilodon — the same solution, invented twice |
| **Cretaceous** | **Sinosauropteryx** | **The quest needs it.** The first dinosaur shown to have feathers, and the first whose colour was worked out — a banded ginger-and-white tail |
| **Paleogene** | **Basilosaurus** | The quest species. A whale with legs it no longer used |
| | **Ambulocetus** | The walking whale, midway through |
| **Neogene** | **Megalodon** | The quest species. Known almost entirely from teeth |
| | **Gigantopithecus** | A three-metre ape, known from jaws and teeth — and the animal every yeti story gets pointed at, which links this group to the mythology set |

### Cut — 29 from the existing group

**Triassic (5)** · Plateosaurus · Desmatosuchus · Tanystropheus · Cynognathus ·
Placerias

**Jurassic (4)** · Dilophosaurus · Compsognathus · Diplodocus · Liopleurodon

**Cretaceous (8)** · Deinonychus · Therizinosaurus · Oviraptor ·
Pachycephalosaurus · Iguanodon · Quetzalcoatlus · Pteranodon · Mosasaurus

**Previously listed (12)** · Brontosaurus · Camarasaurus · Mamenchisaurus ·
Ceratosaurus · Cryolophosaurus · Giganotosaurus · Carnotaurus · Gallimimus ·
Styracosaurus · Kentrosaurus · Rhamphorhynchus · Ophthalmosaurus

**The losses worth naming:** Deinonychus started the dinosaur renaissance and
Oviraptor carries the best misidentification story in palaeontology. Both are real
losses. **Their stories can be told inside other entries** — Velociraptor's can
carry the renaissance, and Protoceratops sits in the same quarry Oviraptor was
falsely accused over.

## The dial, if this cuts too deep

The allocation is adjustable without touching the total. **Trimming the eight new
periods to one species each frees 13 slots** and hands them back to the Mesozoic —
every fossil quest would still have its animal, and the group would still cover the
whole record, just thinly at the edges.

**Ayr's call. Nothing here is built yet.**

---

## HOW MANY QUESTS, ACTUALLY

> **Ayr, 2026-08-25.** *"You keep naming quests. How many quests are you planning
> total? Cus it seems like you're maybe under two assumptions at once: that there
> are 4 per biome in the main game, and that there is a quest for every animal."*

**Ayr is right that the doc drifted.** "48 in total" was written on 2026-08-24 and
appears in nine places. Then on 2026-08-25 I added twelve mythology quests and
thirteen fossil quests **without ever updating that number.** Both figures have been
sitting in the same document contradicting each other since.

### To be explicit: there is NOT a quest per animal

**1000 animals. 73 quests.** Roughly one quest for every fourteen species.

The confusion is fair, because in the fossil section I kept writing "the quest
species" beside individual animals — Charnia, Anomalocaris, Tiktaalik, Dimetrodon,
Basilosaurus. That reads like every fossil gets one. It is **one per period**: 13
quests standing on 50 species. Same for mythology — **one per culture**: 12 quests
standing on 100 species.

An animal without a quest is not neglected. It is **encountered, documented,
studied, drawn, given a field-guide entry and a signature ability**, and it counts
towards the biome's completion. Questing is what a *few* species do.

### The real total

| Group | Quests | Species behind them | Status |
|---|---|---|---|
| **The twelve biomes** | **48** | 700 | The campaign. Mandatory. 4 per biome, one per adult life stage |
| **Mythology** | **12** | 100 | Postgame. One per culture |
| **Fossils** | **13** | 50 | Postgame. One per period |
| **On the Brink** | **?** | 50 | **Ayr has parked this** |
| **The Vigil** | **?** | 50 | **Ayr has parked this** |
| **Breeds** | 0 | 50 | Collection and husbandry, not story |
| | **73 + TBD** | **1000** | |

### The nine "48" references are still correct — in their own scope

Every one of them is about **the campaign**: 48 mandatory quests, ~50–55 hours,
each ending with real named people, each following the five-beat shape. None of
that changes.

**What changed is that 48 stopped being the total.** The campaign is 48. The game
now has 73 defined and two regions still to decide.

### The two undecided ones are exactly the two Ayr parked

*"I don't know yet what I want to do with the special Vigil and On the Brink areas.
Let's do that later."*

So the number is not vague by accident — it is open in precisely the places Ayr
left open. For scale when that decision comes:

- **On the Brink** is required and sits in the finale position. If it followed the
  biome pattern it would take 4, making 77.
- **The Vigil** may want none at all. It is a memorial — you go, you read, you
  stand there. A quest chain might be the wrong shape for it entirely.

---

## EVERY ANIMAL IS AN INDIVIDUAL

> **Ayr, 2026-08-25.** *"Every main game animal gets a name and a short story why
> it's at a sanctuary. The idea is so the player can go to each sanctuary and
> interact with the individual animal. Feed it, give it enrichment, and view its
> special ability. If it's one that gets released, there'd be an area in the wild
> you can visit it (like the beaver pond, moose field, and parts of the ocean), so
> the player can still have those interactions."*

**74.** Locked in. This is the system that turns 700 species into 700 characters.

### Two texts per species, doing two different jobs

| | About | Answers |
|---|---|---|
| **Field guide entry** | The **species** | What is a beaver? |
| **Intake story** | **This** animal | Why is *this* beaver here, and what is its name? |

The field guide is already written for 406 species and is a reference document. The
intake story is a **character introduction**, and it is new work: **700 names and
700 short stories.**

### Release does not mean losing them — this is the important half

Ayr's instruction fixes something the facility design left hurting.

The facility system establishes that **release is the win and the animal leaves**,
and that keeping one is a failure state. That is emotionally correct and it is also
a punishment for playing well. **The wild visiting sites resolve it.**

A released animal goes to **a known place in the world** — the beaver pond, the
moose field, a stretch of coast — and you can go and find it there. You do not own
it, you cannot feed it, and it may not come close. **But it is alive and it is
where you put it.**

That is exactly what real rehabilitators do. Released animals are checked on.
Tagged and collared animals are followed for years. **The best possible outcome
still lets you visit.**

### What this connects to without being asked

- **The childhood pet.** The beaver is one of the three childhood animals, and the
  beaver pond is precisely where a released beaver would be. **The animal you raised
  as a child can be visited as an adult, in the wild, doing what beavers do.**
- **The signature ability.** It is viewable on the individual — at the sanctuary for
  residents, at the release site for the ones that went home. Consistent with the
  unlock rule, which is documentation rather than possession.
- **Ambassador animals** demonstrate theirs to visitors, which is idea 73.

### The sanctuary becomes an autobiography

If the intake story records **where you were and what happened**, then walking
through your own facility is walking back through your career. This one arrived
during the vulture quest. This one you carried out yourself. This one was the first
thing you ever treated and it never left.

**Nothing else in the game does that.** A collection screen lists what you have; a
row of named animals with dated arrival stories is a record of a life's work.

### 700 stories must not read like 700 injuries

The obvious failure is every animal arriving hit by a car. Real intake is far more
varied, and the variety is what keeps 700 stories readable:

| Reason | Example |
|---|---|
| **Injured** | Vehicle, window strike, cat, fishing gear, powerline, fence |
| **Orphaned** | Mother killed, nest felled, separated in a storm |
| **Confiscated** | Illegal trade, a market, a shipment intercepted |
| **Surrendered** | A pet that outgrew its owner. **This is where the exotic pet theme lands** |
| **Displaced** | Development, drainage, a felled roost tree |
| **Conflict translocation** | Moved rather than shot |
| **Imprinted** | Raised too closely by well-meaning finders and now unreleasable |
| **Contaminated** | Oiled, poisoned, entangled |
| **Born here** | To a resident. Not rescued at all |
| **Aged out** | Arrived decades ago; the centre is the only home it has known |

Ten categories, varied specifics, and the stories stop being repetitive.

### The naming question — real practice cuts against the instruction, interestingly

**Many rehabilitators deliberately do not name releasable animals.** They use
numbers. The reason is exactly the game's own theme: **naming creates attachment,
attachment leads to handling, handling leads to habituation, and a habituated animal
cannot go home.**

So there is a version of this where **naming an animal is a decision with a
consequence** — the named ones are the ones staying, and naming a releasable animal
is the mistake that keeps it.

**Ayr said every animal gets a name, and that is the instruction.** This is offered
as a possible refinement, not a correction: perhaps residents get names and
releasable animals get field numbers until the day they leave, when you may name
them at last, because it no longer matters. **Ayr's call.**

### The cost, plainly

**700 names and 700 short intake stories**, plus a release site for every species
that goes home rather than staying.

Text is the pipeline this project has already proven fastest — 406 field guide
entries exist. **The work is not the writing, it is the review**: 700 stories have
to be checked for repetition, and repetition is exactly what the reader notices.
The ten-category structure above exists to make that review tractable.

The release sites are the smaller job than they sound: they are **places, not
animals**, and many species share one. A pond, a field, a stretch of reef.

---

## THE NAMING RULE

> **Ayr, 2026-08-25.** *"When you record an animal that the game knows it's slated
> for release, that one just gets a number at first and then the player can name it
> when it's released."*

**75. Decided.** Releasable animals are numbered on intake. **The player names them
at the moment of release.**

### Why this is better than either half on its own

It takes the real practice — rehabilitators use numbers precisely because naming
leads to attachment, attachment leads to handling, and a handled animal cannot go
home — and it **keeps the reward instead of only the discipline.**

The player still gets to name every animal. They just have to **earn the right by
letting it go.**

### The name changes meaning depending on which way the animal goes

| Outcome | When it is named | What the name is |
|---|---|---|
| **Released** | As it leaves | **A goodbye gift.** The last thing you do for it, and the reason you are allowed to is that you are not keeping it |
| **Non-releasable** | When it becomes a resident | **An admission.** It gets a name because it is not going anywhere |

**Same act, opposite meanings.** Nothing else in the game does that with a single
verb.

### The number is not a placeholder

Field numbers are real and they carry information: species code, year, sequence —
**BEAV-03**, **RT-2419**. A low number means early in your career. An elder walking
past a two-digit number is looking at their first season.

**Keep the number visible after naming.** Real records do. "Willow (BEAV-03)" says
more than either half alone.

### A refinement worth Ayr's decision

Ayr's rule implies the game knows the outcome at intake — so a **name** at intake
means *staying* and a **number** means *going*. The player therefore learns every
animal's fate the moment it arrives.

That is clear and it is kind. It also removes all uncertainty from the middle of
the loop, which is where the rehabilitation actually happens.

**Proposed refinement — let the injury decide which it is:**

- **Obvious cases are named at intake.** A wing gone at the shoulder is never
  flying again, and a rehabilitator knows that in the first ten minutes. Name it
  now. The player knows where they stand and can grieve early.
- **Uncertain cases stay numbered until the prognosis resolves.** Most intakes are
  genuinely uncertain, and the middle of the loop is where the player's care
  actually changes the odds.

This keeps Ayr's rule exactly — **numbered means undecided, named means settled** —
and makes the naming moment land in both directions. **Ayr's call; the simple
version works too.**

### The consequence nobody has decided yet

An animal that **dies before an outcome never gets named.**

That falls straight out of this mechanic and it is the heaviest thing in the
facility design. It is also the honest one: real centres lose animals, and the ones
they lose are the ones still carrying a number.

**This is the euthanasia and mortality question, arriving by a different door.**
Still open, still Ayr's.

---

## THE SANCTUARY IS A MODE, NOT A SECOND CAMPAIGN

> **Ayr, 2026-08-25.** Asked directly whether I had been assuming an entire story
> game happens at the sanctuary. **I had been, and it did not reconcile.** Three
> things were broken and this section records the fix Ayr chose.

### What was broken

1. **The fiction.** All 700 species passing through one player's centre means
   personally rehabilitating one of every species on earth. Real centres take local
   animals.
2. **The clock.** Quarantine is 2–6 weeks, which collides head-on with the
   no-idle-waiting rule.
3. **The budget.** The campaign is costed at ~40–55 hours. 700 individuals at two
   minutes each is 23 hours **before any rehab loop**. Content was being added with
   no time budget attached to it.

### Ayr's decision: a separate mode

**The 48-quest campaign is the spine and stays exactly as costed.** The sanctuary
is a second way to play, unlocked early, running alongside, with **no completion
requirement and no upper bound.**

This is the Planet Zoo shape the research already found: **a ~40-hour campaign and
a 212-hour average tracked playtime.** The long tail is not in the story. It never
was.

| | Campaign | Sanctuary |
|---|---|---|
| **Bounded** | 48 quests, ~50–55 hours | **Unbounded** |
| **Required** | Yes, all 48 | No |
| **Gates progress** | Yes | No — except earning the first facility |
| **Ends** | Yes | Never |

**One save, one character, one world.** A mode in the sense of *a way to play*, not
a separate file — otherwise the autobiography effect dies, and that effect is the
whole point.

### And this fixes quarantine without compromising anything

**The facility runs while you are away.**

Quarantine takes 2–6 weeks of in-world time, and the campaign is what you do while
it passes. You do not wait for an animal — **you go and do a quest, and when you
come back the animal has moved a stage.**

That is not a workaround. It is the honest relationship between the two halves of a
rehabilitator's life, and it means **neither mode is padding for the other.** The
no-idle-waiting rule is satisfied because the player never stands still; the real
durations are preserved because the world keeps its own clock.

### The 700, split by life stage

Ayr's second decision. The ratio of *visited* to *yours* shifts across the career:

| Stage | Where the animals are | What you are |
|---|---|---|
| **Child** | Someone else's local wildlife centre | **At the fence.** You watch. Nothing is yours |
| **Teen** | Volunteering at that centre | You clean, you feed, you are trusted with small things. You know them by number |
| **Young adult** | **Your first facility, earned by a quest** | You start taking animals in |
| **Adult / skills** | Yours, and more of them | The intake is steady now |
| **Adult / power** | A network | Others work for you |
| **Elder** | Yours, and you are the one people visit | **You are on the other side of the fence** |

**The arc is the whole point: you begin at the fence and end up being the person on
the other side of it.**

### What that means for the 700 individuals

Every one still has a name, an intake story and a place. What changes is **whose**.

- **Animals at other people's sanctuaries** can be visited, fed, enriched, and their
  signature ability viewed. Everything Ayr specified. They are simply not yours.
- **Animals you took in** carry the autobiography — the date, the quest, what
  happened, whether you named it at release or at the moment it became a resident.

**Interaction is universal. Ownership is earned.** That keeps every interaction Ayr
asked for, keeps the fiction honest, and puts the emotional weight on the ones the
player actually chose.

### What this does not change

- The rehab loop, the outcome fork, ambassadors, the naming rule, the ten intake
  categories, the release sites — **all stand.**
- **Field knowledge is still the husbandry manual.** It just now also applies when
  you are a teenager cleaning someone else's enclosures and reading their notes.

### Still open

- **Sandbox** — Ayr's original question. A mode with no campaign attached at all is
  now a much smaller step, because the sanctuary is already a mode.
- **Euthanasia and mortality**, which arrived again through the naming rule.
- **Do the twelve facilities specialise**, and does the player run all twelve or
  build toward a few.

---

## THE TWELVE FACILITIES SPECIALISE

> **Ayr, 2026-08-25.** *"The 12 facilities do specialize in the animal of the biome
> they are in. Also, all of the animals in the sanctuary are technically ones you
> 'brought in.' That doesn't have to be part of the story, but you unlock a species
> in your facility by successfully 'catching' it."*

**76 and 77. Both decided.**

### Specialisation is what makes twelve facilities worth having

Without it, twelve facilities are twelve copies of one building. With it, each one
**looks different, needs different things, and cannot do the others' jobs.**

It is also simply true. Real rehabilitation is specialised — marine mammal centres,
raptor centres, bat rescues, reptile rescues. **Nobody treats a whale at a songbird
centre**, because the pools, the equipment, the diets and the expertise are all
different.

| Facility | What the building actually needs |
|---|---|
| **Polar** | Chilled water, haul-out ledges, shade from a sun the animals never evolved for |
| **Reef / Deep sea** | Saltwater systems, filtration, pressure-tolerant holding |
| **Desert** | Heat gradients, deep burrowing substrate, UV |
| **Rainforest** | Height. Canopy animals housed at ground level do badly |
| **Wetlands** | Water quality, mud, shallow margins |
| **Mountains** | Cold-tolerant, and vertical — cliff-dwellers need to climb |
| **Farmland** | The smallest and the busiest. Hedgehogs, owls, bees, and constant public traffic |

### The consequence worth building: transport

If a facility can only hold its own biome's animals, then **an animal found in the
wrong place has to be moved** — and transport is itself a welfare risk, which is
true of real rehabilitation, where an enormous amount of the work is driving.

A stranded marine animal a long way from the coastal facility is a genuine problem
with a real answer: stabilise first, move second, and accept that the journey costs
the animal something.

**This gives the twelve facilities a relationship instead of making them a list.**

### One thing specialisation cannot fix

The facility design already records that some animals **do badly in captivity at
all** — elephants, cetaceans, great apes, polar bears, wide-ranging carnivores.

So the polar facility is not "the polar bear house." Specialisation decides what a
facility *can* hold; it does not overrule what an animal *should* be asked to
tolerate. **Refusing an animal stays a correct play.**

### Catching is the unlock — and this removes a large burden

**A species appears in your facility because you caught it.** The mechanic is the
justification, and it does not have to be narrated.

That resolves something the last section left heavy. Idea 74 asked for a name and
an intake story for every main-game animal, which read as **700 bespoke narratives
woven into the plot.** It is not that.

- **The catch is the reason it is there.** No plot justification required.
- **The intake story is flavour**, drawn from the ten categories, giving the animal
  a specific and readable arrival without being load-bearing.
- **The autobiography still works**, because the record is real: what you caught,
  where, when, at which stage of your life.

**Same emotional result, a fraction of the writing.** The stories that carry real
narrative weight are the quest animals — a much smaller set that was always going to
be written properly.

### A structural reading that follows from this, and needs confirming

Four quests per biome, one per adult life stage, and the young-adult quest of each
biome **earns that biome's facility.**

That implies **each life stage spans all twelve biomes** — twelve young-adult
quests, then twelve adult-with-skills quests, and so on. Which means:

- **All twelve facilities are earned during young adulthood**, one per biome
- The three later stages are spent **developing** them rather than acquiring them
- Specialisation arrives with the facility, since each is earned in its own biome

That fits the impact ladder exactly — local change first, everywhere, then scale,
then programmes, then law. **Flagged for Ayr rather than assumed.**

---

## THE CAMPAIGN IS FOUR WAVES OF TWELVE

> **Ayr, 2026-08-25.** Confirmed.

**The 48 quests are four waves of twelve, not twelve sets of four.**

```
Young adult      12 quests, one per biome    local change    -> earns all 12 facilities
Adult / skills   12 quests, one per biome    the pattern at scale
Adult / power    12 quests, one per biome    establishing programmes
Elder            12 quests, one per biome    law and policy
```

### What follows

- **All twelve facilities are earned during young adulthood.** The three later
  stages develop them rather than acquire them, which is why specialisation arrives
  with the facility — each is earned in its own biome.
- **The world opens wide and early.** Twelve young-adult quests can be taken in any
  order, so the player chooses their own route instead of following a corridor.
  This is the Diablo-shaped world the design started from.
- **The impact ladder becomes literal.** You fix a fence in every biome on earth
  before you understand a single pattern at scale. That is a better arc than
  finishing one biome and moving on, and it is closer to how the careers really widen.
- **On the Brink unlocking after all twelve** stays consistent — it is the wave
  after the last wave.

### The gating is by capability, not by difficulty

Order is free, but not everything is reachable at once. The water ladder already
gates the wet biomes: reef and kelp need the teen open-water certification, and the
deep sea needs instruments.

### One conflict this exposes, and its fix

The deep sea's young-adult quest is **the dropcam** — which needs a boat. But the
water ladder puts owning a boat at **adult with power.**

**Fix, already implied by the ladder's own wording:** the adult-with-power entry
reads *"you stop borrowing rides."* So as a young adult **you borrow the ride.** You
are crew on someone else's vessel, which is exactly how early marine careers
actually work, and it makes owning your own boat later a real promotion rather than
a purchase.

---

# SANDBOX MODE

> **Ayr, 2026-08-25.** *"Let's do sandbox mode."* One of the three questions the
> facility design left open.

## The problem it creates, first

Sandbox normally means **unlimited money, everything unlocked, no failure.** In
Planet Zoo that is harmless. Here it walks straight into the game's central claim:

> **Keeping an animal is a failure state wearing the costume of a reward.**

A mode where you collect all 700 animals into enclosures with no consequence
**undoes the argument the whole game is making.** That is the actual design problem,
and it has a clean answer.

## The fix: drop the economy, keep the biology

| Removed | Kept |
|---|---|
| Money, budgets, grants, ticket income | **Welfare.** Animals still have real needs |
| Space limits, planning permission | **Species limits.** A whale still does badly in a tank |
| Staff hiring costs | **Expertise.** A reptile vet still cannot treat a cetacean |
| Time pressure, intake queues | **Non-releasable is still non-releasable** |
| **The knowledge gate** — the codex is fully open | **Consequences.** Bad husbandry still produces a bad outcome |

**Real sanctuaries are limited by money and by biology. Removing the money is a
fantasy. Removing the biology would be a lie**, and this game does not tell those.

## What sandbox is actually FOR here

This is the part that makes it worth building rather than a checkbox.

**Sandbox is where you get to try the thing the campaign tells you to refuse.**

The facility design says some animals do badly in captivity at all — elephants,
cetaceans, great apes, polar bears, wide-ranging carnivores — and that **refusing
them is the correct play.** In the campaign you refuse and move on, and you are
taking the game's word for it.

**In sandbox you can say yes.** Build the elephant enclosure. Make it enormous.
Spend the money you do not have. And then watch what actually happens to an animal
that walks fifty kilometres a day and lives in a family for sixty years.

**Nobody stops you and nothing lectures you.** The outcome is the argument.

That turns sandbox from the mode that breaks the thesis into **the mode that proves
it** — and it does it the only way that really convinces anyone, by letting them
find out.

## The specifics

| Question | Answer |
|---|---|
| **When is it unlocked?** | **Early, not postgame.** It teaches; teaching late is worthless. Available once the first facility is earned |
| **Separate save?** | **Yes.** The sanctuary mode shares the campaign save because it carries the autobiography. Sandbox carries none — it is hypothetical, so it lives in its own file |
| **All species?** | **Yes, all 700**, plus whatever Ayr decides about the sets below |
| **Field knowledge?** | **Fully granted.** The campaign is where knowledge is earned; sandbox is where it is used. Preserving the gate here would make a worse sandbox without making the campaign better |
| **Is there still release?** | **Yes.** You can still rehabilitate and send an animal home. It is still the good ending. You simply are not doing it on a budget |
| **Failure?** | **Welfare failure, yes. Financial failure, no.** |

## A proposal: let sandbox hold the extinct

The postgame sets — the Vigil's 50 extinct, the 50 fossils — currently have no use
beyond being looked at, and Ayr has not decided what the Vigil *does*.

**Sandbox could be the one place they can be kept.**

Build an enclosure for a thylacine. For a mammoth. For a great auk. **The game says
nothing about it** — no lecture, no unlock message, no moral. It simply lets you,
and the silence is the comment.

It also lands the Quaternary fossil quest's open question — de-extinction — in the
player's hands rather than in a paragraph. **You want to know whether we should
bring them back? Here is what having one would actually involve.**

**Ayr's call.** It is optional, it costs nothing structurally, and it gives two
postgame sets a reason to exist.

## What this leaves open

- **Does sandbox include the visitor and education layer**, or only the animals?
- **Does it include the twelve biome facilities**, or is it one unlimited site?
  Specialisation is a real constraint — the argument for keeping it is that
  building a polar facility in a desert should still fail.

---

# FACILITY BUILD MODE — THE CAMPAIGN VERSION

> **Ayr, 2026-08-25.** *"We haven't defined facility build mode in the main campaign
> setting yet."* Correct. The loop, the specialisation, the modes and the sandbox
> are all defined; **what you actually place, and what stops you, is not.**

## The core mechanic: two routes that must never cross

Every zoo builder ever made is about **sightlines for visitors** — put the glass
where the crowd can see the tiger.

**This game is the opposite. It is about sightlines away from visitors.**

An animal being rehabilitated **must not get used to people**, because a habituated
animal cannot be released. So the site carries two flows that have to reach the
same buildings without ever meeting:

```
PUBLIC ROUTE     car park -> education -> ambassador housing -> cafe -> exit
ANIMAL ROUTE     ambulance bay -> intake -> quarantine -> hospital
                   -> rehabilitation -> conditioning -> release transport
```

**Where they touch, an animal loses its chance to go home.**

That is the building puzzle, and no other game has it. It is not decoration and it
is not optimisation — it is a routing problem with an ethical result, and it comes
straight out of how real centres are laid out.

## What you place

The rehab loop is the blueprint. Each stage is a real building with a real
requirement:

| Building | The rule that constrains it |
|---|---|
| **Ambulance bay / intake** | On the road. An animal arriving in a box has already had the worst day of its life; the journey from vehicle to table should be short |
| **Triage / hospital** | Next to intake. Vet space, and **one vet cannot treat two animals at once** |
| **Quarantine** | **Separate everything** — airflow, entrance, equipment, staff footwear. It cannot share a wall or a walkway with anything downstream. The hardest thing to place and the most expensive to get wrong |
| **Rehabilitation enclosures** | **Species-appropriate, gated by what you learned in the field.** This is where the codex cashes in |
| **Conditioning** | The biggest structures. A bird needs a flight pen long enough to actually fly; an otter needs water long enough to actually swim. **You cannot fake this with a small version** |
| **Ambassador housing** | The only animal buildings the public may reach. Permanent, enriched, built for a lifetime rather than a stay |
| **Education / visitor** | Where the money comes from. Deliberately far from everything that matters |

## The four constraints

Sandbox removes the first two and keeps the last two. **The campaign has all four.**

### 1. Money

Three sources, each with a real tension:

- **Visitors** — pay to see ambassadors. **The animals that draw a crowd are
  charismatic; the animals that come through the door are whatever got hit by a
  car.** Income never matches workload.
- **Grants** — tied to programmes, which is exactly what the *adult with power*
  quest wave is about. Quest progress becomes facility funding, honestly.
- **Donations** — sponsorship of **named individuals**. A visitor reads an intake
  story and gives money. Idea 74 becomes an income mechanic without being cheapened.

Rehabilitation centres are chronically broke. **That should be true here.**

### 2. Land

Bounded, and expanded by quests. Each of the four waves grants the biome's facility
another parcel — so the site's shape across a career is: **earned, then widened
three times.**

### 3. Field knowledge — idea 18, finally mechanical

**You cannot build a good enclosure for a species you did not study.**

| What you documented in the field | What it unlocks in build mode |
|---|---|
| Watched it feed at dawn and dusk | The correct feeding schedule |
| Recorded what it ate | Real diet, instead of generic food |
| Found the burrow, nest or roost | The right shelter, instead of a box |
| Saw who it lived with | Housing it alone, in a pair, or in a group |
| Watched it move | Whether it needs height, depth, or distance |

A barely-studied animal can still be housed — **badly, in a generic enclosure, with
a worse outcome.** Nothing is locked. The penalty is the animal's chances, which is
the only penalty this game should ever use.

### 4. Staff

| Role | Limit |
|---|---|
| **Keepers** | Daily care. A fixed number of animals each, and quarantine animals cost more because of the protocol |
| **Vet** | One case at a time. **The bottleneck the whole site is built around** |
| **Educators** | Run the ambassador programme. They are the income |
| **Volunteers** | Cheap, limited, and need training — **and this is who the player was as a teenager.** The loop closes |

## What it looks like across the campaign

| Wave | The facility |
|---|---|
| **Young adult** | You are given a site and almost nothing on it. Intake, one enclosure, a shed. **You are the keeper, the driver and the cleaner** |
| **Adult / skills** | Quarantine done properly, a real hospital, the first staff. You stop doing everything yourself |
| **Adult / power** | Conditioning structures, the education wing, the visitor route. **The site becomes a place the public comes to** |
| **Elder** | It runs without you. You are the one people visit — and the ambassador animals have been there longer than most of the staff |

## The return report

The facility runs while you are away, so **coming back is an event.** A short
report, not a spreadsheet:

> *Eleven days. Four intakes. **BEAV-07** cleared quarantine and moved to
> conditioning. The barn owl with the wing did not make it. The badger you named
> last winter is still refusing the new enclosure.*

That is the shape of it: **progress, loss, and one small stubborn thing.** It gives
the two modes a rhythm — go away, do a quest, come back to a place that kept living.

## What is still open

- **Euthanasia and mortality.** The return report above already implies it. This
  question has now arrived by three separate doors and is still Ayr's.
- **Does the player lay out buildings freely, or choose from prepared plots?** Free
  layout makes the two-routes puzzle real. Prepared plots make it approachable.
- **Can a facility fail?** Money running out, welfare collapsing, licence revoked.

---

## WHERE THE DESIGN ACTUALLY STANDS — A SEQUENTIAL AUDIT

> **Ayr, 2026-08-25.** *"You're asking for roof tile options before we've established
> where the roof comes from or if there even is a roof. Break it down sequentially
> more first."*
>
> Correct. This audit exists so the order is visible.

### First, a word I have been using badly

**"Loop"** is game-design vocabulary, not programming. It means **the cycle of
actions a player repeats.** Designers name three sizes: the **core loop** (seconds
to minutes, the thing you do over and over), the **session loop** (one sitting), and
the **long loop** (the whole game).

**I have been calling the rehabilitation sequence a "loop" and it is not one.**
Intake, triage, quarantine, rehabilitation, conditioning, outcome is a **pipeline** —
an animal goes through it once and comes out. Calling it a loop hid the fact that
**the player's actual core loop has never been designed.**

### The stack, bottom to top

| Layer | The question it answers | Status |
|---|---|---|
| **0 — Moment to moment** | How you move, what buttons exist, what the screen shows | **MISSING** |
| **1 — One encounter** | An animal appears. What happens? What is "catching"? | **MISSING** — some camera notes for the photographer, nothing for researcher or guide |
| **2 — One quest** | Start to finish | **BUILT** — the five-beat shape, 2026-08-24 |
| **3 — One session** | What an hour at the keyboard contains | **MISSING** |
| **4 — One life stage** | Twelve quests, a facility, collecting | Roughly built |
| **5 — The whole game** | Six stages, three careers, two modes, 1000 species | **BUILT** |

**Layers 2, 4 and 5 are built. Layers 0, 1 and 3 are empty — and they are the
foundation.**

### This was flagged on day one and never done

**Idea 10, Ayr, in the first batch of twenty:** *"I need to design the befriend
encounter mechanic way different from the current game."*

It was recorded as a need and never returned to. Everything since — the careers, the
collecting, the facility unlock, the signature ability, the naming rule — **assumes
an encounter mechanic that does not exist.**

### Why this one is load-bearing

The old game answered it with battles. **This game removed battles and did not
replace them.** So:

- **Collecting** has no verb. "Catching" is in quotes everywhere in this document
  because nobody has said what it is.
- **The three careers** are supposed to be three different games. They are currently
  three different job titles.
- **The facility unlock** is "you catch it" — resting on the undefined thing.
- **The signature ability** is viewed on an animal you obtained by the undefined
  thing.

**Nothing above layer 1 is safe until layer 1 exists.**

### The order to work in from here

1. **Layer 1 — the encounter.** What happens when you meet an animal, and what the
   three careers each do about it. Everything else depends on it.
2. **Layer 0 — moment to moment.** Movement, camera, controls, what is on screen.
   Partly falls out of 1.
3. **Layer 3 — the session.** How an hour is shaped once 0 and 1 exist.
4. **Then** return to the open questions: euthanasia, facility failure, free layout
   versus prepared plots, what On the Brink and the Vigil do.

**Euthanasia is not being ignored — it is being deferred deliberately**, because it
is a layer-4 question and layers 0, 1 and 3 are missing underneath it.

---

# THE ENCOUNTER CONTRACT

> **Ayr, 2026-08-26.** *"How the encounter works is something I'm not ready to
> tackle yet. I also don't think it's necessary to know that yet. One can design
> (not make) an entire Pokémon game without knowing the mechanics when you encounter
> a wild Pokémon."*

**This corrects yesterday's audit, and Ayr is right.** What layer 1 needed was never
the mechanic — it was the **contract**: what an encounter *hands to* everything
built on top of it. A contract can be fixed while the thing behind it stays open,
and everything above can then be designed safely.

**Ayr has now specified the contract completely. The mechanic is deferred, properly
rather than by omission.**

## 78. What every encounter guarantees

Regardless of career, regardless of species:

```
1  All three careers START and END an encounter the same way
     -> they differ only in the middle

2  The animal is added to the guide
     -> and that page is shown IMMEDIATELY, so it is read right then

3  A number is assigned automatically
     -> the player is told the facility now knows about this animal

4  An entry appears in the facility's list
     -> and the list shows only species that have been caught
```

**Everything above layer 1 attaches to this output, not to the mechanic.** The
careers, the collecting, the facility unlock, the signature ability and the naming
rule are all safe now.

## 79. Two kinds of species, and two different destinations

| | **Can be brought to a facility** | **Cannot be captured** |
|---|---|---|
| Who | Most species | Mostly large ocean and deep-sea animals |
| Selecting it in the list | Takes you to **its enclosure** — see it, interact with it | Gives **information about next steps** |
| Later | — | Unlocks **"visit the animal's location"** |
| That visit | — | **Cut scene, then you are shown in that location** — present but not actually there — and you interact from within it |

**Every career can do all of this.** The divergence is in the encounter only.

## Why the guide page appearing immediately is the right call

The player has just met the animal. **That is the instant curiosity is highest**,
and it is exactly when a nature documentary puts up the caption. Making the player
go and look it up later means they never do.

**Two things it needs to survive being done 700 times:**
- **Dismissible immediately.** A player who wants to keep moving must be able to.
- **Shown once.** A second encounter with the same species must not reopen it.

## The number resolves cleanly against the naming rule

Idea 75 said releasable animals are numbered and named at release. **This says the
number is assigned automatically at the encounter**, which is better and more real:
field records are numbered when they are made.

So the sequence is: **number at documentation → name at outcome.** The number is
the record; the name is the ending.

## A distinction the roster now needs, and a question for Ayr

Ayr's non-capturable list is **cannot** — physically impossible or never survives
capture. Great white shark, whale shark, the deep sea.

But the facility design already carries a *different* list: animals that **can** be
held and **should not be** — elephants, cetaceans, great apes, polar bears,
wide-ranging carnivores. Those are not the same category.

**Proposal:** treat them the same way in the campaign. Both go to
**visit-in-the-wild**, so the game never asks the player to be the one holding an
elephant.

**And sandbox is where the difference lives.** Sandbox is already defined as the
place you can try what the campaign refuses — so in sandbox the *should not* list
becomes buildable, and the *cannot* list stays impossible. **One is a choice with a
consequence; the other is physics.**

## What "eventually" implies — the visit is gated, and the ladder already exists

Ayr wrote that the location visit becomes available *eventually*. That gate is
already designed: **the water ladder.** To visit a great white you need the boat and
the cage. To visit a deep-sea animal you need the submersible, which is an elder
capability.

**So the non-capturable species become long-term goals rather than dead entries.**
The list tells you what is coming, and the "next steps" text is the game telling you
what you still have to become.

## Two things this quietly buys

**The careers diverge only where they must.** Same start, same end, same guide, same
facility, same enclosure, same visits — different middle. That is a large saving,
and it is exactly Ayr's original instruction: *"the quests be the same in each
career, the map and progression and people you meet be the same, just you come from
a different angle."*

**The wild-visit is a vignette, not a place.** Being *shown in* a location rather
than travelling to it is far cheaper to build than a roaming area, it is completely
controllable, and it is how a wildlife documentary actually feels. It also gives the
cut scenes Ayr asked for a permanent, repeatable home.

---

## CORRECTION: THE TEST IS TRANSPORT, NOT SUITABILITY

> **Ayr, 2026-08-26.** *"Those species are capturable in real life, and often do need
> to be. A baby elephant by the body of its mother shot by a poacher, a gorilla with
> a gunshot wound that would survive with surgery, a dehydrated and emaciated polar
> bear that needs immediate care. Obviously there are species that are logistically
> more difficult to keep at a facility compared to a smaller one, but **only the
> species that would die in transport should be left in the wild.** Like a blue
> whale, great white shark, and a blobfish."*

**Ayr is right and the proposal is withdrawn.**

### What I got wrong, exactly

The "does badly in captivity" list — elephants, cetaceans, great apes, polar bears
— is a **zoo** list. It is about **permanent display housing**, and it is correct
about that.

**This is not a zoo.** It is a recovery centre, which is the distinction the whole
facility design was founded on, and I applied the wrong list to it anyway.

Rehabilitation is not permanent captivity. **It is temporary, and it is the reason
the animal survives.** Every one of Ayr's examples is real, documented practice:

- **Orphaned elephant calves** are hand-reared and returned to the wild. That is
  precisely what the Sheldrick Wildlife Trust in Kenya exists to do, and it works.
- **Gorillas with snare and gunshot injuries** receive surgery. Gorilla Doctors do
  this in Rwanda, Uganda and the DRC.
- **A starving polar bear** needs immediate care or it dies. Nobody leaves it
  because the species is hard to house.

**Refusing to help a large animal because a zoo shouldn't keep one is a category
error**, and it would have been the game teaching something false.

### 80. The rule, in Ayr's terms

> **Only species that would die in transport are left in the wild.**

Physical, checkable, and it does not need a welfare argument to apply it.

| Left in the wild | Why |
|---|---|
| **Blue whale** | Out of water its own weight crushes it. There is no vehicle and no tank |
| **Great white shark** | Nobody has kept one alive for long. The record is measured in days |
| **Blobfish** | **It only looks like that because of decompression.** At depth it is an ordinary-looking fish; bringing it up destroys the body. The perfect example, and its own signature ability |
| Most large whales, most deep-sea species | Same reasons — mass, or pressure |

**Everything else comes in.** Elephants, gorillas, polar bears, rhinos included.

### Where the welfare question actually lives — the outcome, not the intake

The concern was not wrong, it was **filed in the wrong place.**

| | Governed by |
|---|---|
| **Intake** | **Can it survive the journey?** Physics |
| **Outcome** | **Should this animal stay here for the rest of its life?** Welfare |

An elephant comes in, is treated, and **the pressure to release it is enormous** —
because a permanent elephant is a genuinely poor outcome and a rehabilitator knows
it. The same is true of a gorilla, an orca, a polar bear.

So the welfare question becomes **harder and more interesting**, not absent:
keeping a hedgehog as an ambassador is fine. **Keeping an elephant is a decision
that should cost the player something**, and be rare, and be argued about.

That is a better system than a locked door.

### A third category worth having: treated in the field

Real practice has an option between "bring it in" and "leave it alone."

**Some animals are treated where they stand.** Darted, immobilised, operated on in
the open, woken up and left to walk away. It is standard for rhinos, elephants and
gorillas, because **the journey would do more harm than the delay.**

That gives three destinations rather than two:

| | What happens |
|---|---|
| **Brought in** | Intake, the facility pipeline, an enclosure to visit |
| **Treated in the field** | A vet trip to the animal. High stakes, no second chances, and **nothing to bring home but the record** |
| **Left in the wild** | Cannot survive transport. Visit-the-location only |

The middle one is dramatic, it is real, and it gives large animals a distinct kind
of encounter instead of a smaller version of a hedgehog's. **Offered for Ayr's
decision, not assumed.**

### And it makes sandbox sharper, not weaker

Sandbox was going to be where you could try holding an elephant. **It still is** —
but the question changes from *can you get one* to *should you keep the one you
saved*, which is the more honest version of it.

---

# COMMITTED VERSUS ASSUMED — THE FACILITY

> **Ayr, 2026-08-26.** *"This is a game. And most species in this game can be found
> at a long term facility. I want the player to be able to interact with every animal
> once it's 'caught.' I also don't know yet how involved, or even if, I want this
> 'mini game' (that seems like HUGE game play) of capture, rehabilitation, release
> thing you keep assuming will be there."*

**Ayr is right. The rehabilitation pipeline is mine, not theirs.**

Idea 18 said **"real zoos and wildlife recovery centers."** I chose recovery centre,
declared it the stronger model, and then built six stages, a routing puzzle, a
naming ritual, a return report and a mortality question on top of a decision Ayr
never made.

**It is also, as Ayr says, huge.** It is a whole second game, and it was never
costed.

## What Ayr has actually committed to

This is the baseline, and **it is already a complete and coherent system:**

| | |
|---|---|
| **Twelve facilities**, specialising by biome | Idea 76 |
| **Catching a species puts it in the right facility** | Idea 77 |
| **A list at each facility showing only caught species** | Idea 78 |
| **Select one and go to its enclosure** | Idea 79 |
| **Interact: feed it, give it enrichment, see its signature ability** | Ideas 72, 74 |
| **Every animal has a name and a short story** | Idea 74 |
| **Every career can do all of this** | Idea 79 |
| **Species that would die in transport stay wild**, visited by cut scene | Idea 80 |
| **Build mode** — you construct the facilities | Idea 18 |

**Nothing above requires a rehabilitation pipeline.** It is a living collection you
visit, care for and learn from. That is a real game, it matches every word Ayr has
written, and it can be built without another decision.

## What I invented on top

| Assumed | Depends on the pipeline existing |
|---|---|
| Intake → triage → quarantine → rehabilitation → conditioning → outcome | **All of it** |
| Release as the win condition | Yes |
| Non-releasable animals becoming ambassadors | Yes |
| Numbered on intake, named at release | Partly — the number survives, the ritual does not |
| The two-routes building puzzle | **Yes** — it only matters if animals are going home |
| The return report | Yes |
| Euthanasia and mortality | Yes |
| Ten intake categories | No — works as flavour either way |

## The tension Ayr just exposed, stated plainly

> **Release is the win** *(my pipeline)* — the animal leaves, and you lose access.
>
> **Interact with every animal once caught** *(Ayr's requirement)* — the animal stays.

**These pull against each other.** I patched it with wild-visit sites, but the patch
exists only because I created the problem. **Without the pipeline there is no
problem:** you catch it, it is there, you can always go and see it.

## Three shapes, so the choice is visible

### A — No pipeline. A living collection.
Catch it, it lives at the facility, you visit and care for it. **Everything Ayr
asked for, nothing more.** Cheapest by a wide margin. The conservation message lives
in the 48 quests, which is where it was always strongest.
*Loses: release as an emotional beat.*

### B — Full pipeline. A rehabilitation simulator.
Everything I designed. Thematically the strongest and **by far the most work** — a
second game beside the first.
*Loses: guaranteed access to every animal, and a great deal of time.*

### C — Pipeline for story animals only. *(recommended)*
**Ordinary caught species simply live at the facility** and are always visitable.
**Quest animals** — the 48, plus the occasional scripted rescue — go through a
rehabilitation sequence with a real outcome.

Release stays meaningful because it happens rarely, to animals the player already
cares about, inside a story. **The collection stays intact because everything else
just stays.**

*Costs: one authored sequence per quest, not a simulation.*

## What this changes right now

**Nothing needs deleting.** The pipeline design is recorded and stays recorded — it
becomes the specification for option B or C rather than an assumption underneath
everything.

**And euthanasia stops being urgent.** It was only ever a question because I had
built a system that made animals die on the player's watch. If there is no pipeline,
there is no such system, and the question dissolves rather than needing an answer.

**Ayr does not have to decide now.** Option A is a strict subset of both others, so
**everything below it can be designed and built while the decision stays open.**

---

## DECIDED: OPTION C — THE PIPELINE IS FOR STORY ANIMALS ONLY

> **Ayr, 2026-08-26.** *"I really like C."*

**81. Decided.** The rehabilitation sequence exists, and it is **authored rather
than simulated.**

| | What happens |
|---|---|
| **Ordinary caught species** | Live at the facility. Always there, always visitable, fed, enriched, ability viewable. **They never leave.** |
| **Quest animals, and occasional scripted rescues** | Go through a real rehabilitation sequence with a real outcome — released, or kept because they cannot go |

### Why this is the right shape

**Release stays meaningful precisely because it is rare.** A player who releases
forty animals a session feels nothing. A player who releases *one*, at the end of a
quest, having watched it come in — that lands.

And it happens to **animals the player already cares about**, because the quest just
spent an hour making them care.

**The collection stays whole**, which was Ayr's actual requirement: every caught
animal remains interactable, forever.

### What this settles

- **Cost.** One authored sequence per rescue quest. **Not a simulation.** The
  difference is enormous and it is the difference between a feature and a second
  game.
- **Ambassadors** still exist — as quest animals that could not be released. Rarer,
  and each one is somebody.
- **The naming ritual** (idea 75) applies to quest animals. Number at documentation,
  name at outcome. Ordinary species keep their name and story from idea 74.
- **Euthanasia** becomes what it should always have been: **something the player
  sees inside a story, not something a system does to them on a Tuesday.** An
  authored beat, used once or twice, at full weight.
- **The two-routes building puzzle** survives but is optional. It only matters where
  animals are going home, which under C is the quest wing. Ayr can take it or leave
  it without anything else moving.

### What is still true from the pipeline design

Everything recorded stays as the **specification for those authored sequences** —
the six stages, quarantine's separateness, conditioning that cannot be faked small,
the outcome fork, the ten intake categories. It stops being a system the player
operates and becomes **the structure the story beats are built from.**

---

# NAMING THE WORLD AND THE REGIONS

> **Ayr, 2026-08-26.** Chosen as the next piece of work. **These are proposals for
> Ayr to pick from and overrule — nothing here is decided.**

## The constraint that rules out most fantasy naming

Three things this game has already committed to decide the register:

1. **Read-aloud is one of the codex's five jobs.** Every name has to be sayable by
   a child on the first try. That removes apostrophes, invented consonant clusters
   and anything needing a pronunciation guide.
2. **The whole ethos is sourced and honest.** A region called *Verdantia* or
   *Frosthelm* fights everything else in the document — it announces "fantasy" in a
   game whose selling point is that everything in it is real.
3. **Ayr's own instinct already picked the register.** *"On the Brink"* is plain
   English, concrete, and slightly grave. That is the target, and the rest should
   match it.

## The model: how English place names actually work

Real English regions are **plain nouns with a definite article** — The Fens, The
Weald, The Downs, The Broads, The Wash, The Marches, The Peak.

They are unglamorous, ancient-sounding, and instantly evocative because they
describe the ground rather than decorating it. **They also sound like somewhere
people live and work**, which matters for a game about people who work with animals.

## The slate — three options per region

Recommended pick in **bold**.

| Region | Recommended | Also | Also |
|---|---|---|---|
| **Savanna** | **The Long Grass** | The Open | The Sweep |
| **Forest** | **The Weald** *(a real old English word for wooded country)* | The Timber | The Understory |
| **Rainforest** | **The Canopy** | The Green | The Steam |
| **Wetlands** | **The Fens** | The Soak | The Slow Water |
| **Coast** | **The Strand** | The Margin | The Tideline |
| **Reef** | **The Garden** *(reefs really are called gardens by the people who work them)* | The Shallows | The Coral Shelf |
| **Open ocean** | **The Blue** | The Open Water | The Wide |
| **Deep sea** | **The Dark** | The Under | The Trench |
| **Desert** | **The Dry** | The Sands | The Long Thirst |
| **Mountains** | **The Heights** | The Spine | The Roof |
| **Polar** | **The White** | The Ice | The Cold Ground |
| **Farmland** | **The Holdings** | The Furrows | The Worked Land |

### Notes on three of them

- **The Weald** is a real word and a real place in England, meaning forest country.
  It is the one borrowed word on the list and it earns its place — it sounds ancient
  because it is.
- **The Garden** for the reef is not decoration. Reef workers and fishermen really do
  call them gardens, and it sets up the quest about coral gardening perfectly.
- **The Dark** and **The Blue** sitting next to each other gives the two ocean
  regions an obvious relationship: you go from the blue into the dark.

## The thirteenth region

**On the Brink** — Ayr's own, and it is better than anything on this list. **Keep it.**

It is also the only region name that describes a *condition* rather than a *place*,
which is exactly right, because that region is the only one whose animals share a
condition rather than a habitat.

## The postgame areas

| Area | Recommended | Note |
|---|---|---|
| The extinct 50 | **The Vigil** | Already named, already right. A vigil is held *for* someone |
| Mythology 100 | **The Told** | Things that are true because they are told. *Also:* The Stories · The Long Telling |
| Fossils 50 | **The Record** | As in the fossil record. Plain, and it points at the quests' theme of *how anyone knows* |
| Breeds 50 | **The Kept** | The 50 animals humans made and keep. Sits deliberately uneasily beside The Vigil |

## The world itself — five options, in different registers

| Name | Register | Why it might work |
|---|---|---|
| **Wildlands** | Plain, and it is the title | **The title stops being a label and becomes a place.** The old game's world was never named; naming this one after the series makes the second game the one that has ground under it |
| **The Reach** | Plain English | Somewhere that extends further than you can see. Works for a single continent |
| **Terrane** | Real geology | A *terrane* is a fragment of crust with its own history, later joined to a larger mass. **That is literally what this world is** — twelve regions assembled from pieces that never touched in reality. A real technical word doing honest work |
| **Halloway** | English toponym | Sounds like a real place on a map. Pretty, and says nothing |
| **The Compass** | Plain | A world defined by its twelve directions |

**My pick: Terrane.** It is real, it is pronounceable, it means precisely what this
world is, and it is the kind of word that rewards a player who looks it up — which
is the entire habit this game is trying to build.

**Second: Wildlands**, for the reason in the table. Ayr's call, and this is the one
decision on this page that everything else hangs off.

## One question this raises

Does the new game keep the **Wildlands** name with a new subtitle, the way *Safari
Saga* was the first? That has not been decided and it interacts with the world name
directly.

---

# THE NAMES — LOCKED, AND THE THREE STILL OPEN

> **Ayr, 2026-08-26.** First category for all but mountains, polar and farmland.
> Farmland takes **The Furrows**. **Terrane** confirmed for the world.

## Locked

| Region | Name |
|---|---|
| Savanna | **The Long Grass** |
| Forest | **The Weald** |
| Rainforest | **The Canopy** |
| Wetlands | **The Fens** |
| Coast | **The Strand** |
| Reef | **The Garden** |
| Open ocean | **The Blue** |
| Deep sea | **The Dark** |
| Desert | **The Dry** |
| Farmland | **The Furrows** |
| Thirteenth region | **On the Brink** |
| Extinct 50 | **The Vigil** |
| Fossils 50 | **The Record** |
| **THE WORLD** | **TERRANE** |

## Still open — polar

| Name | Why |
|---|---|
| **The Floe** | Sea ice that drifts. Short, real, and it is the ground the walrus quest is about losing |
| **The Rime** | Frost formed from freezing fog. Beautiful, plain, and almost nobody uses it |
| **The Glare** | The light off ice, which is genuinely blinding. Names the *experience* rather than the material |
| **The Pack** | Pack ice. Blunt and cold, and it doubles as what wolves and orcas travel in |
| **The Silence** | Polar regions are famously, unnervingly quiet |
| **The Hard Water** | Plain to the point of bluntness |

**My pick: The Floe.** It is the only one that is also *fragile* — a floe melts, and
the whole region's quests are about ice going away.

## Still open — mountains

| Name | Why |
|---|---|
| **The Divide** | A real geographic term — the line where water chooses which ocean to reach. Plain, and it means something |
| **The Uplands** | Real English geography, unglamorous, sounds inhabited |
| **The Tops** | What high ground is actually called in northern England. Very plain |
| **The Backbone** | A range as the spine of a landmass |
| **The Scree** | Loose rock on a slope. Harsh and specific |
| **The Tors** | A tor is a rock peak. Short and old |

**My pick: The Divide.** It is the only one carrying an idea rather than a
description, and it fits a region whose quests are about **things separating** —
populations cut off, a bottleneck at Gran Paradiso, borders between three countries
around the gorillas.

## Still open — mythology, on the theme of understanding through stories

| Name | Why |
|---|---|
| **The Telling** | Plain, active, and it names the *method* — these things are known because they were told |
| **The Handed Down** | Emphasises transmission. What survives is what somebody bothered to pass on |
| **The Long Telling** | Same, with time in it |
| **The Remembering** | Softer. Puts the emphasis on holding on rather than explaining |
| **The Old Answers** | Precise — a myth *is* an answer to a question. **But it implies the answers are superseded** |
| **The Understanding** | Ayr's brief, literally. Abstract, and it slightly oversells |

**My pick: The Telling.**

**And one caution that rules out a whole family of names.** The mythology section
already commits to not treating living cultures' beliefs as solved puzzles — the
taniwha and the bunyip are not in the same category as the griffin. So anything
meaning *first guesses*, *old mistakes* or *what they used to think* is out, however
neat it sounds. **The Telling** and **The Handed Down** describe how the knowledge
travels, not whether it is right, which keeps the game out of that argument
entirely.

## The Kept — still needs Ayr

Not mentioned in Ayr's reply. **The Kept** for the 50 breeds and domestics stands as
a proposal, deliberately uneasy next to The Vigil.

---

# TERRANE AS AN ALTERNATE EARTH

> **Ayr, 2026-08-26.** *"When it comes to designing the origin of the world... its
> own unique planet? Alternate reality of Earth? I want to explore that second
> idea."*

## First — the name already agreed to this

A **terrane** is a real plate-tectonics term: **a fragment of crust with its own
separate geological history, later joined onto a larger landmass.** Terranes are how
continents are actually built. Much of western North America is a stack of terranes
that arrived from elsewhere and stuck.

**That is exactly what this world is** — twelve regions with separate histories,
assembled into one landmass, holding species that never shared ground in reality.

The name was chosen for its meaning. **It turns out to also be a mechanism**, and it
points hard at one of the options below.

## Why an alternate Earth is the right instinct

Ayr's original reason, from the map debate: *"it would be nice if the mistakes had a
somewhat legitimate excuse."*

An alternate Earth buys three things at once:

1. **The compositing becomes true instead of tolerated.** A rainforest holding both
   jaguars and orangutans stops being an error and becomes a fact about this world.
2. **The sourced codex still works**, because the animals, the science and the
   conservation history are all still ours.
3. **Nothing has to be explained to the player.** It can sit entirely in the codex
   for whoever wants it.

## Four variants

### A — A parallel Earth
History diverged at some unstated point. Same physics, same species, different
geography. Never explained in play.

**Buys:** total freedom, zero cost, no lore burden.
**Costs:** it explains nothing. It is really just "invented world" with a label.

### B — Earth after the continents moved *(the ambitious one)*
Deep future. Plate tectonics has reassembled the landmasses into a supercontinent —
which is **a real scientific projection**, not a fantasy. Geologists model the next
one and argue about its shape.

**Buys:** the compositing is not merely excused, it is *caused*. Continents collided,
so forests that were an ocean apart now touch. **Terrane is literally the mechanism.**
It is also the single most educational framing available: a player learns that
continents move, are still moving, and have done this before.

**Costs:** it puts the real conservation history in the deep past. Richard Turere and
Mary Anning become ancient figures. That could be beautiful — **the codex becomes a
surviving record** — or it could make the quests feel like history rather than
something urgent. **This is the real risk and it needs deciding, not hand-waving.**

### C — Earth where the geology diverged, not the history *(recommended)*
The continents assembled differently, but **the present day is our present day.**
Same century, same science, same people, same conservation history — a world where
the landmasses happen to sit in different places.

**Buys:** everything B buys about the map, while **protecting the codex completely.**
Lucy King's beehive fences happened this decade. The vulture collapse is recent. The
High Seas Treaty was signed in 2023 and it still matters.

**It is the minimum viable divergence** — change one thing, geology, and leave
everything that carries the game's weight untouched.

**Costs:** less spectacular than B. A player who never opens the codex will not
notice it at all — which is arguably the point.

### D — A remembered Earth
The world is a reconstruction assembled from records; the player is inside the
archive.

**Buys:** it makes the codex literal.
**Costs:** it is a frame story, and a frame story tells the player none of this is
happening. **This game's power comes from the events being real. Do not put a pane
of glass in front of them.**

## Recommendation

**C, with B's vocabulary.**

Keep the present day and the real people. Let the *reason* the map looks like this be
plate tectonics — terranes, accreted margins, continents that arrived from elsewhere
and joined on. **The player who reads the codex learns real geology; the player who
does not simply plays in a world that works.**

And it means the twelve regions can each have a genuine geological story: **The Weald
and The Canopy sit together because they collided.** That is a better answer than
"because it is a game," and it is true of somewhere.

## The one question underneath all four

**Does the player ever find out?**

- **Never** — it is background, and the world is simply the world.
- **In the codex only** — available to anyone curious, invisible to everyone else.
  **Recommended**, and consistent with how the game treats every other piece of real
  information.
- **In the story** — a quest about it. Expensive, and it would compete with the
  conservation stories for attention.

---

# WHAT KIND OF ALTERNATE REALITY — AND A THING THE DOC ALREADY SOLVED

> **Ayr, 2026-08-26.** *"Alternative reality as in temporal? Or as in the Earth
> became Terrane? Or as in Terrane exists on current day Earth, just undiscovered and
> suddenly magically appeared?"*

**Names locked first: The Floe · The Divide · The Telling · The Kept.** All naming is
now closed.

## The thing the design already answered

Every one of the 48 quests ends the same way. **Beat five, decided 2026-08-24:**

> *"The cutscene: **what really happened.** The real event, the real place, the real
> people, credited by name."*

So the beehive fence quest happens in **The Long Grass**, and then the cutscene says
*this really happened, in Kenya, in 2009, and Lucy King worked it out.*

**The game is Terrane. The codex is Earth.** They were never supposed to be the same
place — the codex is the *appendix*, and it says so out loud, at the end of every
quest.

**Which means Terrane does not need to be an alternate anything.** It can simply be a
fictional world whose animals, science and problems are ours, with a factual appendix
that keeps pointing at the real planet and saying *this one is real.*

**That is the cheapest and strongest answer, and it is already built.** Everything
below is only needed if Ayr wants an in-fiction explanation on top of it.

## If Ayr does want one — the three options, tested

The test any of them has to pass: **does the sourced codex still work?** It credits
real people for real recent events, so it needs the present day and real human
history.

### 1. Temporal — Terrane is Earth at another time

**Future:** continents have reassembled. Real geology, genuinely teachable.
**Past:** Pangaea. No humans, so no conservation history at all — ruled out
immediately.

**Fails the test.** In a deep-future Terrane, Lucy King and Mary Anning are ancient
figures and the High Seas Treaty is archaeology. The quests stop being urgent and
become history. **The one thing this game cannot afford to lose is urgency.**

### 2. Earth became Terrane — a transformation

Needs an **event**. And every available event is one of two kinds:

- **Tectonic** — which takes tens of millions of years, so this collapses back into
  option 1 and fails the same way.
- **Sudden** — which is magic, and magic is the one thing this game has refused
  everywhere else. The invented creatures were cut for exactly this reason.

**Fails.** Not because it is a bad idea, but because it has no honest mechanism.

### 3. Terrane is on present-day Earth, hidden or newly appeared

**Fails on scale.** Terrane has twelve regions including polar ice, open ocean and
abyssal deep sea. That is not an undiscovered island — **it is a planet's worth of
world.** Nothing that size hides from satellites, and "it appeared" is magic again.

### 4. A parallel Earth — the one that survives *(recommended)*

**Terrane is Earth.** Not a future Earth, not a transformed Earth, not a hidden
corner of ours. **A separate one, where the plates ended up somewhere else.**

- Same century, same science, same species
- No event, no transformation, nothing hidden, nothing to explain away
- **The people who live there call it Terrane, the way we call ours Earth**
- The only difference is where the land is

**It passes the test because nothing about human history has to move.**

## What the player is ever told

**Codex only — recommended.**

The game never announces it. A player just plays in a world. Anyone curious enough to
open the geology entries finds real plate tectonics: terranes, accreted margins, and
the fact that our own continents are assembled from fragments that arrived from
elsewhere and stuck.

**A player who never looks loses nothing. A player who looks learns something true.**
That is how this game treats every other piece of real information, and there is no
reason to treat its own ground differently.

## Recommendation, stated plainly

**Do nothing.** Terrane is a fictional world; the codex is about the real one; beat
five already tells the player which is which, forty-eight times.

**If Ayr wants an in-fiction answer anyway, take 4** — a parallel Earth — because it
is the only one that costs the game nothing.

---

# THE AUTHOR'S NOTE

> **Ayr, 2026-08-26.** *"At the end of the credits it cuts to a video of me, or a
> video of me and an avatar or something, explaining why I made the game, what it is
> to me, and what it could mean for anyone playing."*

**82. Ayr's idea, and it closes the reality question completely.**

## Why it resolves Terrane

Every framing tested above failed because it tried to explain Terrane **from
inside**. This explains it from outside, and that is allowed, because **the game
openly has an author.**

Terrane is not a puzzle needing a mechanism. **It is a place a person built on
purpose**, and at the end that person says so. Nothing needs a lore justification
once somebody stands up and says *I made this, and here is why.*

## The structural rhyme, which is the strongest part

**Every one of the 48 quests ends the same way:** the story stops, and the game says
*here is who really did this,* and names them.

**The game itself then ends the same way.** The story stops, and the game says *here
is who really made this,* and names Ayr.

**Same move, one level up, forty-nine times.** That is not decoration — it is the
game's entire method applied to itself, and almost nothing else could earn it.

## It is also the one feature nobody can copy

Everything else in this design could in principle be built by someone else with
enough time. **The author's note could not.** It is the reason this game exists
rather than a feature it has.

It is also the delivery of Ayr's own stated purpose, in their words from 2026-08-24:

> *"Lots of people think cubs are cute and would love to hold them... it would be so
> great if playing my game gave people a feeling or experience to make up for that
> loss."*

**Somebody should say that out loud at the end, and it should be the person who
meant it.**

## The precedent worth looking at

**Never Alone** (*Kisima Ingitchuna*, 2014) is built by an Alaska Native community
and cuts to short documentary interludes of Iñupiat elders explaining the culture the
game is drawn from. It is the closest existing thing to what Ayr described, and it
works — the interludes are consistently named as the best part of that game.

Nature documentaries do the same thing: **the presenter turns to camera at the end.**

## Decisions this needs — Claude's suggestions, Ayr's call

### Before the credits, not after

*"At the end of the credits"* means most players never see it — credits get skipped.

**Suggest: place it before the credits roll**, so it is the last thing the game says
rather than a reward for patience. **And put it permanently in the codex**, which
already has five jobs and can easily take a sixth: *about this game.* Then it is
never missed and always re-watchable.

### Real video, avatar, or both

| | Strength | Cost |
|---|---|---|
| **Real video** | Most affecting. A person is unmistakably a person | Dates over time, harder to subtitle and localise, and it makes Ayr publicly the face of it |
| **Avatar** | Timeless, re-recordable, private | Less affecting — it is still the game talking |
| **Voice over stills or footage** | Ayr's real voice, real words, no face | The middle option, and the easiest to redo later |
| **Both, as Ayr suggested** | **The avatar is who you were in the game; the person is who made it.** The cut between them is the whole idea in one shot | Most work, and the most interesting |

**No recommendation on this one — it is genuinely Ayr's to make**, and it is about
how public they want to be, not about design.

### Keep it short, and explain the reason rather than the story

**Two to four minutes.** And it should not explain the plot, the mechanics or the
research — the game just did all of that for fifty hours.

**It should explain why.** The strongest version is confident and brief. It says
*here is what this is to me,* not *please understand.* Ayr's writing throughout this
document is plain and direct, which is already the correct register — **it should
sound like the doc, not like a trailer.**

## What this changes elsewhere

- **The alternate-Earth question can close as "do nothing."** No in-fiction
  explanation is needed once the game has a visible author.
- **The codex gains a sixth job:** *about this game* — the author's note, permanently
  available.
- **The ending has a shape now**, which it did not before.

---

## AYR AS A CHARACTER IN THE GAME

> **Ayr, 2026-08-26.** *"Maybe I become an avatar, a person who shows up in the game
> as an NPC. Like a constant easter egg. Or, I could be someone more important... the
> funder of the main character you only ever hear the name of or see very briefly,
> the mentor, the parent..."*

**83.** Recorded. This pairs with idea 82 rather than competing with it, **if the
role stays small.**

### The version that uses both ideas at once

**A minor recurring NPC — and then their face in the author's note at the end.**

Someone who turns up across the regions and the years. Not a quest giver, not
important, just there: at the fence when you are a child, at a different centre when
you are a teen, in the background of a conservancy meeting thirty years later.

**And then the game ends, and it is them speaking to camera.**

The reveal is not *"the mentor was the author"* — it is quieter and better than that:
**the person who kept showing up was the person who made all of this.** It rewards
attention, it costs almost nothing, and it makes the author's note land as a payoff
rather than an epilogue.

### The bigger roles, honestly assessed

| Role | The problem with it |
|---|---|
| **The mentor** | **The design already has a mentor**, from round two. Making that character the author fuses two jobs and makes the most emotionally loaded relationship in the game a self-portrait |
| **The parent** | Same, more so |
| **The funder, only ever named** | Interesting and understated — **but if the player never sees them, the reveal at the end has nothing to connect to.** The idea's power is recognition, and recognition needs a face |

**Suggested: the recurring background figure.** It is the only version where the two
ideas strengthen each other instead of one swallowing the other. **Ayr's call, and
this is a taste question, not a design one.**

---

# THE PROP PROBLEM IN THE SPRITES

> **Ayr, 2026-08-26.** *"Some of the art has environment and others do not. Ground,
> sticks, plants. Does that mess with animating for the actual game?"*

**Yes, and Ayr spotted it before it cost anything.**

## What the files actually are

Checked directly, not assumed. All **1001 sprites** are **256×256 RGBA**, cut out on
transparency, with nothing touching the bottom edge and subject coverage between 12%
and 46%.

So there is no painted background anywhere. **The environment is baked into the
subject** — the kestrel is a clean cut-out, the jewel beetle is standing on a leaf
that is part of the same image.

This was deliberate: the generator adds props by keyword, matching **branch, perch,
leaf, burrow** in the prompt. That is why birds got perches and insects got leaves.

## Why it breaks an HD-2D game sprite

HD-2D means the animal is a **2D sprite billboarded inside a lit 3D scene** — it
turns to face the camera as you move around it.

| Problem | What the player sees |
|---|---|
| **Billboarding turns the prop too** | Walk around the beetle and **the leaf swivels to follow you.** Animals turning to face the camera reads fine; ground turning to face the camera does not |
| **The animal cannot move** | A beetle welded to a leaf slides the leaf along with it in any walk cycle |
| **Lighting will not match** | The scene has a real sun and real shadows. The painted leaf has baked lighting pointing somewhere else, and receives no shadow |
| **It intersects the real ground** | You place the sprite on actual 3D terrain and a painted leaf floats through it |
| **Two scales of the same object** | The painted leaf is sized to the beetle. The scene's real foliage has its own size. Both are on screen at once |

## But it is only a problem for one of the two uses

**The prop is wrong for a game billboard and right for a field guide plate.**

A natural history illustration *should* show the animal in context — perched, on a
leaf, at a burrow mouth. That is what those plates are for, and the beetle on its
leaf is a better codex image than the beetle alone.

**So the answer is two assets, not one fixed asset:**

| Use | Prop |
|---|---|
| **Codex / field guide plate** | **Keep it.** It is better with it |
| **In-game billboard** | **Removed** |

## The affected set is knowable, not a mystery

The generator chose props by keyword match. **So the sprites carrying props are
exactly the ones whose prompts contained branch, perch, leaf or burrow** — findable
from the generation records rather than by inspecting a thousand images by eye.

Three ways to fix them, cheapest first:

1. **Regenerate the affected set with props off.** The pipeline already has the
   switch; this is a batch, and batches on this project run at hundreds per day.
2. **Mask the props out** of the existing files. Faster still where the prop is
   cleanly separated, fiddly where a foot rests on it.
3. **Leave them** and accept the artefact. Not recommended — swivelling ground is
   the kind of thing a player notices immediately and cannot un-see.

## The larger question underneath, and a recommendation

**256×256 is small for HD-2D**, and these sprites are **single static frames.** A
game sprite needs to be larger and to have motion.

There is also already a known plan to restyle the first ~293 painted-style species
once the current pass finishes.

**Suggest treating the current 1001 as the codex plates** — finished, valuable, and
exactly what a field guide needs — **and treating game sprites as a separate later
pass** at higher resolution, without props, built for animation.

That costs nothing today, it means none of the existing work is wasted or blocked,
and it stops the prop question from being a problem at all. **Ayr's call.**

---

## TWO ANSWERS: THE NPC, AND WHAT TO DO ABOUT TERRAIN

> **Ayr, 2026-08-26.** *"Am I an interactive NPC though? Or they can't talk to me?"*
> and *"Now that I can look at the art bigger, I'm finding lots of errors. Should I
> add terrain to all of the ones I edit? Or get rid of it now?"*

### Terrain: neither. Do not spend effort on it.

**Errors are permanent value. Terrain is temporary cosmetics.**

An anatomically wrong animal is wrong in every version, at every resolution, for
ever — that fix is never thrown away. **Terrain gets thrown away twice:** add it now
and it has to come off for the game sprite; strip it now and the codex plate loses
the context it wanted.

| Do | Do not |
|---|---|
| **Fix the errors** | Add terrain to anything |
| **If a sprite is being regenerated anyway, turn props off** — free, and it moves that one toward game-ready | Regenerate *in order to* change terrain |
| Let the current 1001 settle into being **codex plates** | Try to make 1001 plates consistent with each other |

**And the fact that the errors only became visible at larger size is itself a
finding.** 256×256 viewed small was hiding them — which argues the game-sprite pass
needs higher resolution regardless, and that makes the terrain question moot for
those sprites entirely.

### The NPC: interactive, but they never advance anything

**Talkable — otherwise the ending has nothing to pay off.** A player who never
interacted with them has no memory to be rewarded.

But the role holds only if the character stays weightless:

- **No quests, no items, no unlocks, no gates.** Talking to them is always optional
  and never advances the game by a single step.
- **They never talk about themselves.** No backstory, no name offered, no hints.
- **They comment on the animal you are looking at.** One short observation — not
  quest-relevant, not plot-relevant. The kind of thing a stranger says on a viewing
  platform.

**That last rule is the whole idea.** A pool of short observational lines *is* the
author's voice — and when the game ends and that face appears, the player realises
they have been hearing it the entire time, in passing, for thirty in-game years.

Cheap to build: a line pool, no branching, no state.

### One suggestion: let them age

The player moves through six life stages across decades. **If the NPC ages too, they
are a person. If they never change, they are an easter egg.**

Ageing is the more affecting version and it fits a game whose whole structure is a
life passing. **Ayr's call.**

---

## THE NPC'S AGE, AND THE PROP MECHANISM CORRECTED

> **Ayr, 2026-08-26.** *"I would be considered an adult with power, not an elderly
> mentor yet. Do I stay in the late game as an adult, do I vanish, or do I make myself
> aging to a point I haven't in real life?"* and *"What do you mean a terrain on and
> off toggle?"*

### Correction: there is no toggle

I said the pipeline had a switch. **It does not.** Checked in `gen_runner.py`:

- `COMPOSITION` — *"no ground, no shadow, no rocks, no props"*
- `PROP_COMPOSITION` — *"only the minimal prop needed for the pose"*
- `pick_composition(desc)` chooses between them by matching the species description
  against **19 keywords**: branch, perch, web, nest, burrow, log, vine, leaf, ledge,
  coil, coiled, wrapped, clinging, cling, gripping, grips, grip, hanging from, roost.

**263 of 1009 species — 26% — take the prop path.** The set is knowable and listable.

Turning props off means making `pick_composition` always return `COMPOSITION`. **One
line.** Wrong in letter, right in effort.

**And it cannot be fixed in the prompt.** A description reading *"no branch"* still
contains "branch" and still gets the prop. It has to be the code.

### The NPC's age — recommendation: age them past Ayr's real age

| Option | Assessment |
|---|---|
| **Stay an adult throughout** | The player ages thirty-plus years and the NPC does not. That is not a person, it is a **glitch the player learns to ignore.** It also throws away the best thing about the character |
| **Vanish in the late game** | **Avoid.** Ambiguous and sad without earning it — did they die, did they move, did something happen? The player has come to like this person and then they are simply gone. A cost with no payoff |
| **Age past Ayr's real age** | **Recommended** |

**The reason is the game itself.** This entire design asks the player to live a whole
life — child to elder, across decades, ending old. **An author asking that of a
player and refusing to imagine it for themselves is asking for something they will
not give.**

And the image is hopeful rather than morbid: **a future in which you are still there,
still turning up, still watching animals.** That is the same future the game offers
the player.

### One detail that makes it land better

The player's **adult-with-power** stage is Ayr's actual stage right now.

So let the NPC be **younger early, exactly Ayr-as-they-are at that middle stage, and
older after.** Then the face in the author's note connects to the version the player
met when the two of them were, briefly, the same age.

**Three or four drawn ages across six life stages** covers it. Not expensive.

### And the honest caveat

**This is a personal question, not a design one.** If Ayr simply does not want to see
themselves depicted old, that is a complete reason and nothing above outweighs it.
The fallback that costs least is then **staying an adult** — the small inconsistency
is worth less than Ayr's comfort with their own game.

---

## DECIDED: THE NPC DOES NOT AGE, AND TURNS INTO AYR

> **Ayr, 2026-08-26.** *"I like the idea of my NPC visiting in certain scenes as the
> same age the whole game. And at the end at the reveal, the PC approaches my NPC in
> a cut scene and then my NPC turns into the video of me. Not as symbolic and
> meaningful as all your suggestions. But reality. **I'm watching the game develop
> because I'm making it.**"*

**84. Decided — and it is better than every version proposed above.**

### Why it beats the alternatives

Each of my suggestions tried to make Ayr a **character inside the fiction** — an
observer, a late starter, someone who arrived sideways. All of them required
inventing a life to justify the presence.

**Ayr's version requires no invention.** The NPC does not age **because the author is
not subject to the story's clock.** They are outside it, watching, because that is
literally what is happening.

- **The non-ageing stops being an inconsistency and becomes the clue.** Everything
  flagged earlier as reading like a glitch now reads like a glitch *until the
  ending*, and then reads as the point.
- **It removes the "presumptuous" problem entirely.** No claimed life, no invented
  arc, no role written for oneself. Presence, because the presence is real.
- **It settles Terrane as well.** The author is visibly outside the world, which is
  exactly the from-outside explanation the world needed. Idea 82 and this are the
  same move, and now the player *sees* it.

### The ending

The player walks up to them, as they may have done a dozen times across fifty years.
**The sprite becomes the video.** One shot.

### What this needs to work

- **Appear often enough to be noticed.** Three appearances across fifty-five years
  and nobody clocks the non-ageing. It has to recur — **at least once per life
  stage**, ideally more, so the constancy is legible.
- **Stay visually consistent.** Same figure, same read, every time. The
  recognisability *is* the mechanism.
- **Never acknowledge it.** They do not comment on time, on not changing, on the
  player growing older. No winks.
- **Keep the voice constant across fifty-five years.** Easy to do, and it is itself
  part of the clue.
- **Echo an earlier approach in the final cutscene.** If the player has walked up to
  them before, the last time should look like those times — so the change is the
  only thing that changed.
- **Keep the transition plain.** A hold and a dissolve. The moment does not need an
  effect; it needs to be unmistakable.

### Unchanged from before

Still light: **no quests, no items, no unlocks, no gates.** Still talkable, still
one short observation about whatever animal is in front of the player. That line pool
is the author's voice, and the ending is the moment the player finds out.

---

# THE CHILD AND TEEN YEARS — THE FIRST HOURS

> **Ayr, 2026-08-26.** *"Let's work on the childhood and teen years. You're right, the
> first hour is SO important."*

**Most of this was already decided in round two and never sequenced.** Ideas 21–26
gave the pets, the first rescue, the mentor and the four rescued animals. What was
missing was the **order**, and order is what an opening is.

## What is already locked

| | |
|---|---|
| **21** | A pet as a kid, a more exotic one as a teen |
| **22** | The first wild encounter is in your own backyard, and it is **something you rescue** |
| **23** | Kid pets: cat, dog, fish, reptile, small mammal — with breed, and **indoor / outdoor / stray defining personality** |
| **24** | Teen animals: birds, chinchilla or ferret, a fish tank, farm animals |
| **25** | **You meet the mentor when you rescue your first wild animal.** They follow your career and are the help button |
| **26** | The rescued animal is **hand-reared as a baby but partly living wild** — box turtle, raven, beaver or white-tailed deer |

## The two animals, and why this is the whole thesis in the first hour

A child ends up with **two relationships at once**, and they are opposites:

| | The pet | The rescued wild animal |
|---|---|---|
| Whose is it | **Yours** | **Nobody's** |
| Where does it live | Your house | Your woods |
| What does care mean | Keeping it well | **Letting it go well** |
| How does it end | It stays | **It leaves, and it is still out there** |

**That is the entire game, taught before the player knows there is a game.** The
facility, the release, ambassadors, "keeping an animal is a failure state" — all of
it is a restatement of the difference between the cat on the sofa and the raven in
the trees.

**Nothing has to explain it.** A child just has both.

## The first hour, sequenced

### 1. You are outside, and the world is one patch *(5 min)*
No map, no menus, no goals. **Your yard and the woods behind it.** The only verb is
**look** — and looking at things gives you their name.

This teaches the core verb before any system exists, and it makes the field guide the
first thing the player ever uses.

### 2. The pet is already yours *(10 min)*
Not a menu at a title screen — **it is at home, and choosing it is the first real
choice.** Cat, dog, fish, reptile, small mammal, with breed and with indoor /
outdoor / stray.

**Idea 23's best detail is that outdoor-or-stray defines personality**, which quietly
teaches that an animal's history shapes its behaviour — the exact principle the whole
facility system runs on.

### 3. You find something in trouble *(15 min)*
Idea 22. A baby animal in the yard or the woods — one of the four.

**And you cannot fix it.** You are eight. You have no vehicle, no equipment, no
knowledge and no permission. **The first real emotional beat of the game is the limit
of being a child**, and it is the truest possible opening for this subject, because it
is how a very large number of real wildlife careers actually begin.

### 4. You carry it to someone *(15 min)*
Idea 25. **This is the mentor**, and it is a centre — the one you will volunteer at
as a teen and be at the fence of for years.

**You watch them work and you are not allowed to help.** That is the "at the fence"
framing landing as an actual scene rather than a description.

### 5. It comes back to you, partly *(10 min)*
Idea 26. Hand-reared, **but it is not yours.** It lives in your woods. It turns up.
It does not come when called.

**And this is where the Ayr NPC first appears** — at the fence beside you, watching
the same thing, saying one short thing about the animal.

## The teen years

### The second animal is harder on purpose
Idea 24 — parrot, ferret, chinchilla, a saltwater tank, a goat. **Every one of these
is a well-known "I did not realise what I was signing up for" animal**, which is the
honest lesson and needs no lecture: a parrot outlives you, a ferret needs hours, a
saltwater tank is chemistry.

**This is Ayr's "not all of the pet industry is bad" idea doing its real work** — the
good version is shown by making the responsibility real, not by saying so.

### You volunteer, and you are trusted with almost nothing
Cleaning, food prep, laundry, moving equipment. **Real volunteer work at a real
centre is unglamorous**, and doing it is how you get to stay.

The animals here belong to someone else, you know them by number, and **you are still
not allowed to do the interesting part.**

### You get certified
Open water certification — **real minimum age 15**, so it belongs here. It is the
teen years' one hard-won qualification, and it opens The Garden and The Blue in the
stages that follow.

### You try all three careers *(proposed)*
The doc already maps the three careers onto this age:

> *Photographer: first camera, learning to sit still · Researcher: collecting,
> noticing, first notebook · Guide: knowing your own patch*

**Suggest the teen years hand the player all three, one at a time**, on the same
animals in the same woods — and the career is chosen **at the end of the teen years,
having done each.**

Reasons: teenagers genuinely try things and drop them; it sells "three different
games" by demonstration rather than description; it makes the choice informed instead
of a menu at the start; and it gives replay an obvious hook. **Ayr's call.**

## Pacing

| Stage | Proposed length |
|---|---|
| **Child** | **~1 hour** |
| **Teen** | **~2 hours** |
| Young adult onward | The remaining ~48, one per quest |

Three hours before the first facility is a real investment, and it is where every
relationship in the game is established. **It should not be skippable, but it must
not idle** — the no-waiting rule applies hardest here, where the player has the least
to do.

## What is still open

- **Does the player name the rescued animal?** Idea 75 says numbers for the
  releasable and names at the outcome. A child would not know that rule. **Suggest
  the child names it freely, and the teen years are where they learn why that was a
  problem.** That is a better lesson than being told the rule up front.
- **Is the pet still alive later?** A cat lives 15–20 years, so it dies somewhere in
  the adult stages. That is real and it is heavy. **Ayr's decision.**
- **What happens if the rescued animal does not make it?** A first rescue that fails
  is also real, and it is the earliest place mortality could enter the game.

---

# THE OPENING — CORRECTED AND SEQUENCED

> **Ayr, 2026-08-26.** Corrections to the sequence proposed above. **This supersedes
> it.**

**85. The opening, in Ayr's order:**

```
1  TITLE + HOOK SCENE      enticing, strong music, leaves the player with questions
2  CHOOSE THE PET          customisable, detailed, and you name it
3  DESIGN THE CHILD        your own appearance, and your name
4  FIRST SCENE             the player character and the pet meeting, interacting
5  THE CODEX OPENS         your pet's entry, AND the pets you did not choose
6  THE HOUSE               your room, then walk out, learn the interface
```

## Why pet-before-self is the right order, and I had it backwards

I had the pet arriving after the world. **Choosing the animal before choosing
yourself is a statement about what this game is**, made in the first ninety seconds,
and made by the structure rather than by dialogue.

Almost every game opens by asking who *you* are. This one asks who you are **second**.

## The codex showing the pets you did not choose

**This is the strongest single detail in the sequence.**

It establishes in the first five minutes that **the codex is not a log of your own
experience — it is a reference that already knows things.** That is exactly what it
has to be for the remaining fifty hours, and teaching it here costs nothing.

It also plants the first curiosity of the game: **you can see what you did not
take.** A player learns immediately that this book is bigger than they are.

## Naming the pet, and why it pays off later

The player names the pet instantly, without thinking, because that is what you do
with a pet.

**Then idea 75 arrives much later:** releasable animals get numbers, and naming is a
decision with a consequence. **The game let the player do the easy thing first, and
explains it afterwards** — which is a far better lesson than a rule stated up front.

The rescued wild animal in the same childhood then sits in between, which is where
the question first becomes real.

## Appearance, across the whole life

Ayr's requirement, recorded exactly:

- **Every life stage presents new appearance choices.** People do change how they
  look across a life; making the player re-choose at each stage makes each one feel
  like a beginning rather than a stat increase.
- **Gender change is an option at every stage.** *Not stated loudly, but present.*
  Design consequence: it sits in the same list as hair and clothing, with **no
  ceremony, no confirmation dialogue, no achievement, and no NPC ever remarking on
  it.** It is simply one of the options, at every stage, the same as the others.
- **The player chooses their name.**

### The cost, honestly

The player character is a sprite that has to exist at **six life stages × the
appearance options × every animation state.** That multiplies faster than any other
art in the game.

**The standard answer is a layered/modular character** — one body rig per life stage,
with hair, clothing and features as swappable layers rather than baked-in variants.
It is more setup and far less total art, and it is the only approach that makes
"change your appearance at every stage" affordable. **Flagged now because it is a
decision that has to be made before the first character sprite is drawn**, not after.

## The hook scene — three options

Ayr's brief: *enticing, good music, makes the player have questions they want answers
to.*

The reliable mechanism is **showing something you cannot yet explain, that pays off
later.**

### A — A release *(recommended)*
Hands opening a crate. An animal going. Someone watching it leave, and not following.

**No context: who, where, why, what happened before.** It is the last beat of the
entire game shown as the first, and it is the game's whole thesis before the player
can possibly understand it. When they finally do it themselves, thirty hours in, they
recognise the shot.

### B — A signature ability
Something that looks impossible and is real — a margay running head-first down a
trunk, a scorpion lighting up under UV, an octopus becoming a rock.

**Question generated: "wait, is that true?"** Which is the exact habit the game
exists to build. Cheaper than A and it sells the collection immediately.

### C — The fence
A child's hands on a wire fence, an adult inside doing something with an animal, and
the child not allowed in.

**Question generated: "how do I get in there?"** — which is literally the whole
career arc. The most thematically precise and the least spectacular.

**Suggest A, with C as the second scene rather than an alternative.** They are the
two ends of the game and they would rhyme.

## Music

Already flagged by Ayr as important. **The hook scene is the one place where the
music does the work rather than supports it** — no dialogue, no UI, no explanation.
Worth treating as a piece to be written first rather than last.

## What this changes upstream

The earlier sequence had **look at the world** as beat one. It is now beat six, and
the tutorial for the interface rather than the emotional opening. **Everything after
the house is unchanged** — the pet, the rescue you cannot fix, the mentor, watching
from the fence, and the animal that comes back partly.

---

## THE HOOK IS ANIMAL-LED; THE CHARACTER IS ONE BODY PER AGE

> **Ayr, 2026-08-26.** *"The opening scene should be animal mainly. I don't know what
> yet. I don't want to pick yet."* and *"Yes, one body shape for every age change with
> options for details being the choices."*

### 86. The hook is animal-led — constraint set, scene not chosen

**No human focus.** Whatever the scene turns out to be, the animal carries it.

Applying that as a filter to the three proposals already recorded, without choosing
between them:

| Proposal | Survives? |
|---|---|
| **A release** | **Yes, if shot from the animal's side.** Hands and a watcher at the edge of frame at most, and the animal leaving is the shot |
| **A signature ability** | **Yes, completely.** Nothing but the animal doing the impossible-looking thing |
| **The fence** | **No.** It is a scene about a person being outside, so it cannot be animal-led |

**The fence survives as the second scene** — as a human beat immediately after an
animal one — but not as the hook.

### And this unblocks the hook from everything else

An animal-led opening **needs no character art**: no body rig, no layers, no
appearance system, no player sprite at all.

**So the hook can be built first**, before a single character decision is made. Given
it is also the piece where the music does the work rather than supporting it, the
opening is now the one part of this game that could be prototyped on its own.

### 87. The player character: one body per age, details are the choices

**Confirmed by Ayr.** Six body shapes — one per life stage — with everything else as
swappable layers: hair, face, skin, clothing, accessories.

**This is not just the cheap answer, it is the one that makes Ayr's gender
requirement free.**

With two body types, changing presentation means a different rig, a different
silhouette and a re-export of every animation. **With one body per age, it is a layer
swap** — the same cost as changing a hairstyle, which is exactly the weight Ayr asked
for: *present, not announced.* The structure delivers the intent without the game
ever needing to handle it as a special case.

### What the six bodies actually differ by

Proportion, not shape: a child's head is proportionally larger, limbs shorter; an
adult is at full height; an elder carries a slight change of posture. **Real, visible
at a glance, and cheap.**

### One production note that follows

If all six rigs share the same **bone layout and naming**, animation can be authored
once and retargeted across every age with proportion adjustments, rather than
animated six times.

**That has to be true from the first rig**, and it is invisible and expensive to
retrofit.

---

# THE 128 NEW SPECIES — ALLOCATION, AND BATCH ONE

> **Ayr, 2026-08-26.** Chosen as the next work. Proposals for review and correction,
> the same way the roster passes ran.

## First: the allocation table needs redoing

The table Ayr reviewed on 2026-08-25 was built for **eleven biomes** and totalled
579 → 700. **The deep sea became the twelfth biome the same day** and is not in it,
so the arithmetic no longer closes.

Current living is **579, less the 7 leaving for On the Brink = 572.** Target is
**700**, so **128 new.**

### Proposed twelve-biome allocation

Keeps Ayr's instruction — unequal, rainforest and savanna richest, nothing starved.

| Biome | Now | Target | New |
|---|---|---|---|
| Rainforest | 91 | **85** | — *(6 move to deep sea / On the Brink)* |
| Savanna | 79 | **70** | — |
| Forest | 66 | **64** | — |
| Coast | 53 | **59** | **+6** |
| Wetland | 59 | **58** | — |
| Farmland | 58 | **55** | — |
| Reef | 42 | **54** | **+12** |
| Desert | 41 | **54** | **+13** |
| Mountains | 34 | **52** | **+18** |
| Open ocean | 33 | **50** | **+17** |
| Polar | 28 | **50** | **+22** |
| **Deep sea** | **~8** | **50** | **+42** |
| | | **700** | **128** |

**Note:** rainforest, savanna, forest, wetland and farmland shrink slightly rather
than grow. Nothing is cut — those are counts after the seven leave for On the Brink
and after the deep-sea reassignments. **Flagged for Ayr, because it is the one part
of this that changes numbers already agreed.**

## Batch one — THE DARK (deep sea), 42 new

Already in the roster and staying: anglerfish · oarfish · goblin shark · frilled
shark · Greenland shark · scaly-foot snail · Pompeii worm · giant squid.

### Fish — 14

| Species | Why it earns a slot |
|---|---|
| **Gulper eel** | A jaw bigger than the rest of it, that balloons open around prey |
| **Fangtooth** | The largest teeth relative to body size of any fish — so long it has **sockets in its own brain case** to hold them when the mouth shuts |
| **Viperfish** | Teeth that do not fit inside the mouth |
| **Barreleye** | A **transparent head.** Its tubular eyes look up through its own skull |
| **Hatchetfish** | Counter-illumination — lights along the belly **erase its silhouette** from below |
| **Black dragonfish** | Produces **red** light, which almost nothing down there can see. It hunts with an invisible searchlight |
| **Lanternfish** | Probably **the most abundant vertebrate on earth**, and almost nobody has heard of it |
| **Mariana snailfish** | The deepest fish ever recorded, around **8,300 m** |
| **Tripod fish** | Stands on three stiffened fin rays and faces the current, waiting |
| **Cookiecutter shark** | Takes a **circular plug** out of animals many times its size and leaves |
| **Blobfish** | **Only looks like that because of decompression.** At depth it is an ordinary fish. Ayr's own example |
| **Coffinfish** | Holds water in its gill chambers and can **hold its breath for four minutes** |
| **Stoplight loosejaw** | No floor to its mouth at all — the jaw is an open frame |
| **Deep-sea lizardfish** | Every individual is **both sexes at once**, because meeting anyone at all is unlikely |

### Cephalopods — 4

| Species | Why |
|---|---|
| **Vampire squid** | Neither squid nor octopus. **Its own order, alone.** Turns itself inside out when threatened |
| **Glass squid** | Almost perfectly transparent except for the eyes, which cannot be |
| **Bigfin squid** | Arms trailing many times its body length, with **elbows** |
| **Dumbo octopus** | Ear-like fins, and the animal at the centre of the deep-sea mining quest |

### Crustaceans and worms — 8

| Species | Why |
|---|---|
| **Giant isopod** | Deep-sea gigantism — and one in captivity **went five years without eating** |
| **Yeti crab** | **Farms bacteria on its own hairy arms** and then eats them |
| **Alicella gigantea** | The giant amphipod. Hand-sized, where its relatives are grains of rice |
| **Vent shrimp** | Eyes **on its back**, to see the faint glow of the vent it lives on |
| **Giant tube worm** | **No mouth and no gut.** It runs entirely on bacteria living inside it |
| **Zombie worm** | Bores into whale bone. The **males live inside the females**, dozens at a time |
| **Squat lobster** | Vent fields are carpeted in them |
| **Deep-sea barnacle** | Sessile life at the bottom of the world |

### Jellies and gelatinous — 7

| Species | Why |
|---|---|
| **Siphonophore** | Not one animal but a **colony acting as one**, and the longest ever recorded at over 45 m |
| **Atolla jellyfish** | **The burglar alarm** — attacked, it flashes to call something bigger to eat its attacker |
| **Bloody-belly comb jelly** | A red stomach, so the glowing things it eats **cannot shine out through it** |
| **Deepstaria** | Drifts like an open bin liner, closing around whatever enters |
| **Comb jelly** | Rows of beating cilia that split light into a running rainbow |
| **Helmet jellyfish** | Avoids all light, including a submersible's |
| **Sea pig** | A sea cucumber that **walks on tube feet, in herds** |

### Sessile, and the very strange — 9

| Species | Why |
|---|---|
| **Venus flower basket** | A glass sponge. **A pair of shrimp enter as larvae, grow too big to leave, and spend their lives inside** — given in Japan as a wedding gift |
| **Sea lily** | A crinoid. Looks like a plant, is an animal, and has been doing this since before the dinosaurs |
| **Brittle star** | Arms that shed and regrow |
| **Black coral** | Colonies dated at **over 4,000 years old** — the deep-sea programme quest |
| **Xenophyophore** | **A single cell the size of your hand** |
| **Bathydevius** | The "mystery mollusc" — a swimming sea slug with a hood, described only recently |
| **Predatory tunicate** | A sea squirt that gave up filtering and became a trap |
| **Bamboo coral** | Grows in alternating segments and can be read like tree rings |
| **Vent mussel** | Builds reefs at hydrothermal vents on chemistry, not sunlight |

**That is 42.** Deep sea reaches 50.

### What this biome gives the game that no other does

**Almost every one of these has a signature ability that is genuinely impossible-
looking** — bioluminescence, transparency, invisible red searchlights, a single cell
the size of a hand. Idea 72 said the signature ability is the payoff for collecting.
**The Dark is where that feature is at full strength**, and it is also the biome the
player reaches last and through instruments.

---

## THE ALLOCATION, RECONCILED AGAINST THE POLAR 25

> **2026-08-26.** Ayr asked for polar next. **Polar was already done** — 25 additions
> proposed 2026-08-25 and never signed off. This reconciles the numbers rather than
> duplicating the work.

The polar proposal takes it to **53**, not the 50 in my table. 53 is the better
number — it matches Ayr's "nothing below the mid-fifties" and the 25 were chosen for
interest rather than to hit a target.

### Final twelve-biome allocation

| Biome | Now | Target | New | Status |
|---|---|---|---|---|
| Rainforest | 91 | **85** | — | — |
| Savanna | 79 | **70** | — | — |
| Forest | 66 | **64** | — | — |
| Wetland | 59 | **58** | — | — |
| Farmland | 58 | **55** | — | — |
| Coast | 53 | **53** | — | — |
| **Deep sea** | ~8 | **50** | **+42** | **Proposed 2026-08-26** |
| **Polar** | 28 | **53** | **+25** | **Proposed 2026-08-25** |
| **Reef** | 42 | **53** | **+11** | Outstanding |
| **Desert** | 41 | **53** | **+12** | Outstanding |
| **Mountains** | 34 | **53** | **+19** | Outstanding |
| **Open ocean** | 33 | **53** | **+20** | Outstanding |
| | | **700** | **~129** | |

**67 of the ~128 are now on the table** — deep sea and polar between them.
**62 remain**, across reef, desert, mountains and open ocean.

### One number to verify

Deep sea's current count is **approximate (~8)**, taken from a keyword scan rather
than a proper classification. **Everything else here is exact**; this one should be
confirmed before the totals are treated as final, and it is the reason the new-species
figure reads 128 in one place and 129 in another.

---

## AUDIT: 23 OF THE 48 QUEST ANIMALS DO NOT EXIST YET

> **2026-08-26.** Found while checking mountain candidates for duplicates.

The 48 campaign quests were picked on 2026-08-25 against real conservation stories,
not against the roster. **Checked now, and 23 of the 48 animals are not in it.**

| Biome | Missing quest animals |
|---|---|
| **Forest** | red deer · Iberian lynx · northern spotted owl |
| **Wetlands** | sandhill crane |
| **Coast** | loggerhead turtle |
| **Reef** | staghorn coral · humphead wrasse |
| **Open ocean** | bluefin tuna |
| **Deep sea** | bluntnose sixgill shark · orange roughy |
| **Desert** | desert tortoise · fennec fox · dorcas gazelle |
| **Mountains** | snow leopard · white-rumped vulture · Alpine ibex · mountain gorilla |
| **Farmland** | hedgehog · black-tailed godwit |
| **Savanna** | gemsbok *(already recorded)* |

**This is good news, not bad.** It means **23 of the 128 new species are not a
choice** — the campaign requires them, and they were going to be needed whatever
else got picked.

### The allocation shifts slightly again

Four biomes I had listed as needing nothing now need a few, because their quests do:

| Biome | Was | Now | Why |
|---|---|---|---|
| Forest | 64, +0 | **67, +3** | red deer, Iberian lynx, spotted owl |
| Wetland | 58, +0 | **59, +1** | sandhill crane |
| Coast | 53, +0 | **54, +1** | loggerhead |
| Farmland | 55, +0 | **57, +2** | hedgehog, black-tailed godwit |

And **the deep sea batch goes from 42 to 44** — sixgill shark and orange roughy were
named as quest animals and proposed in neither list.

**Plus the little blue penguin**, which Ayr asked for: it lives in New Zealand and
southern Australia, nests in burrows on temperate coast, and is **not a polar
animal** — so it goes to **The Strand**, taking coast to 55.

### And one correction to the Vigil additions

**The Pyrenean ibex is already in the roster**, in the Vigil. It was proposed on
2026-08-25 as one of six historical extinctions to add, and that was wrong.

**Replacement: the Yangtze paddlefish**, declared extinct in 2020. Up to seven metres
long, one of the largest freshwater fish that ever lived, and gone inside a single
human lifetime from dams and overfishing.

---

## THE DIVIDE (mountains) — 19 new

Already present and staying: bighorn sheep · chinchilla · condor · golden eagle ·
guanaco · kea · klipspringer · markhor · marmot · Pallas's cat · pika · takin ·
Tibetan fox · vicuña · mountain viscacha · yak.

### Required by the quests — 4

| Species | Quest |
|---|---|
| **Snow leopard** | The corral. Young adult, local change |
| **White-rumped vulture** | The painkiller. Adult with skills |
| **Alpine ibex** | All from one valley. Adult with power |
| **Mountain gorilla** | The one that is going up. Elder, law |

### The altitude specialists — 15

| Species | Why it earns a slot |
|---|---|
| **Bar-headed goose** | Crosses the Himalaya at over 7,000 m. **A haemoglobin variant that grips oxygen harder than any other bird's.** The definitive altitude animal |
| **Lammergeier** | **70–90% of its diet is bone.** It carries them up and drops them on rock to break them open |
| **Alpine chough** | Recorded at **8,200 m on Everest.** The highest-nesting bird in the world |
| **Wallcreeper** | Climbs sheer rock faces, flashing crimson wings like a butterfly |
| **Himalayan monal** | Iridescent to the point of looking metallic, and Nepal's national bird |
| **Argali** | The largest wild sheep on earth |
| **Chamois** | The alpine goat-antelope, and the origin of the word chamois |
| **Mountain goat** | **Not a goat.** Hooves with rubbery pads that grip like climbing shoes |
| **Kiang** | The largest wild ass |
| **Tibetan antelope** | The **shahtoosh** trade — a wool so fine it is woven from animals that have to be killed to get it |
| **Rock hyrax** | Looks like a guinea pig. **Its closest living relative is the elephant** |
| **Alpine salamander** | Gives birth to live young after a gestation that can last **three years** at altitude |
| **Apollo butterfly** | An alpine butterfly, protected across Europe and vanishing upward as it warms |
| **Woolly flying squirrel** | **Thought extinct for seventy years**, rediscovered in 1994 in Pakistani cliffs |
| **Himalayan jumping spider** | Lives at **6,700 m on Everest — the highest permanent resident animal on earth.** It eats insects blown up from below |

**Mountains reaches 53.**

---

## PROPER ROSTER AUDIT — AND THE COUNTS DO NOT RECONCILE

> **Ayr, 2026-08-26.** *"Please check the roster properly, not just for the
> conservation story animals."*
>
> Done. The tool is saved at `design/tools/biome_audit.py` so this is repeatable
> rather than a one-off.

### First, a bug of mine

`biome_assign.js` holds **284 hand assignments**, not the 47 I was reading. **237 of
them sit inside the `BIOME_BY_HAND = {...}` object literal** and my parser only
matched the dot-assignments after it. Fixed; the audit below uses all 284.

### What the data actually says

| | |
|---|---|
| Living species (`A`/`E` constructors) | **496** |
| Habitat sentences that exist at all | **402** |
| Classified | **377** |
| **Unplaced** | **98** |

**Of the 98 unplaced, 97 have no habitat sentence in the game data at all.** Only one
fails on the rules.

### And the counts do not match the doc

| Biome | This audit | Recorded in the doc |
|---|---|---|
| Forest | **84** | 66 |
| Rainforest | **41** | 91 |
| Savanna | **38** | 79 |
| Wetland | **32** | 59 |
| Coast | **32** | 53 |
| Polar | **26** | 28 |
| Desert | **24** | 41 |
| Open ocean | **24** | 33 |
| Mountains | **23** | 34 |
| Farmland | **22** | 58 |
| Reef | **19** | 42 |
| Deep sea | **7** | ~8 |

**These are not close.** The allocation table every species proposal has been built
against cannot be reproduced from the data as it stands, and **97 unplaced species is
not enough to explain a gap this size.** The recorded numbers came from an earlier
session using a different method, and one of the two is wrong.

**This does not invalidate the species proposals** — the deep sea, polar and mountain
lists are good animals for those biomes regardless of the totals. **It does mean the
targets are not yet trustworthy**, and they are what decides how many more are needed.

### The concrete work this exposes

**1. About 85 living species have no habitat sentence** and need one, or need hand
assignment. A listable, finishable set — including kea, yak, bighorn, harpy eagle,
Philippine eagle, condor, gharial, olm, hoatzin, shoebill, ostrich, cassowary,
snowy owl, arctic hare and swift fox.

**2. About twelve entries in that list are life stages, not species**, and
`NOT_A_SPECIES` misses them: **cygnet · eaglejuv · elver · ephyra · glasseel · naiad ·
parr · sealjuv · sealpup · smolt · axolotlmeta · mandarin_dragonet.**

**3. The mammoth is being counted as living.** It is extinct and belongs in The
Record.

### Recommendation

**Do not treat any biome total as settled until the 97 are placed.** Placing them is
mechanical rather than creative, it is one pass, and afterwards the audit can be
re-run from `design/tools/biome_audit.py` and the numbers will mean something.

---

## KEA AND MOUNTAIN GORILLA

> **Ayr, 2026-08-26.** *"Kea and mountain gorilla live in mountains in the rainforest
> and everything else in here lives on traditional rocky or snowy mountains right?
> Now that each biome has terrain, maybe we should move those 2 to rainforest."*

### Mountain gorilla — Ayr is right

It lives at **2,200-4,300 m in montane forest and bamboo**, and Bwindi is literally
called the Impenetrable *Forest*. It is forest that happens to be on a mountain, and
with terrain inside biomes there is no reason it cannot be rainforest.

**But the quest moves with it.** "The one that is going up" is the mountains **elder**
quest, so mountains needs a new one.

**Proposed replacement: the Tibetan antelope**, already on the mountains list. The
**shahtoosh** trade is a genuine law-and-policy story - a wool so fine it can only be
taken from dead animals, banned under CITES Appendix I, followed by a recovery from
roughly 75,000 to around 300,000. It is a real success with a hard question inside it,
which is exactly what the elder slot wants.

### Kea - recommend keeping it in the mountains

It lives in **alpine and subalpine country on New Zealand's South Island**, and above
the treeline in summer.

**Its entire claim to fame is that it is the world's only alpine parrot.** Moving it
to rainforest does not just relocate it - **it deletes the fact that makes it worth
having.**

**Ayr's call, but this one costs something to move.**

---

## THE PLACEMENT PASS IS DONE - AND THE REAL NUMBER IS 461

> **2026-08-26.** Ayr approved the pass. 98 unplaced species resolved; the audit now
> runs clean and `design/tools/biome_audit.py` reproduces it.

### What was done

| | |
|---|---|
| **Hand-placed** | **84** species with no habitat sentence at all |
| **Reclassified as life stages** | **11** - cygnet, eaglejuv, elver, ephyra, glasseel, naiad, parr, sealjuv, sealpup, smolt, axolotlmeta |
| **Excluded as not-living** | **3** - mammoth *(extinct, belongs in The Record)*, alpaca and llama *(domesticated, belong in The Kept)* |
| **Cave leftovers resolved** | **5** - the cave *rule* still fired even though caves were cut as a biome. The three bats to forest, the free-tailed bat to desert, the giant centipede to rainforest |
| **Missed and caught** | **1** - hawksbill turtle to reef |
| **Mountain gorilla** | moved to **rainforest**, per Ayr |

**Unplaced went from 98 to 3, and all three are correct exclusions.**

### The twelve biomes, counted honestly

| Biome | Actual |
|---|---|
| Forest | **93** |
| Rainforest | **61** |
| Savanna | **48** |
| Wetland | **40** |
| Coast | **39** |
| Desert | **33** |
| Reef | **32** |
| Polar | **29** |
| Open ocean | **28** |
| Mountains | **27** |
| Farmland | **24** |
| Deep sea | **7** |
| **Total** | **461** |

### Why the doc said 579, and why that was wrong

The constructor counts settle it:

```
A  460  +  E  36  =  496   the living roster
P   94                     breeds and domestics -> The Kept, target 50
V   98                     Vigil + On the Brink
MY 100                     The Telling
FD  50                     The Record
WA  14  EM  9              wardens and other, cut or reassigned
```

**The living roster is 496 entries, of which 461 place in a biome** (the rest are
life stages and the three exclusions).

**The 579 figure appears to have counted the 94 breeds and domestics as living
animals.** They are not - they are The Kept, and their target is 50.

### What this changes

**The gap is not 128. It is 239.**

```
461   in the twelve biomes now
700   target
239   new living species needed
```

**67 are already proposed** (deep sea 44, polar 25... minus overlaps), and the 23
quest animals are inside that. **Roughly 170 remain to be chosen.**

**This is a much bigger content job than the doc has been assuming**, and it is better
to know now. It also means the per-biome allocation has to be rebuilt from the real
numbers rather than the recorded ones - forest is already at 93 and needs nothing,
while the deep sea at 7 needs everything.

**Nothing proposed so far is wasted.** Every species on the deep sea, polar and
mountain lists still belongs where it was put. There is simply more to do after them.

---

## THE FULL LISTING - AND WHY MY NUMBERS WERE WRONG

> **Ayr, 2026-08-26.** *"Something doesn't seem right. Please list each animal,
> however many there are, and say which biome they are in. Then count everything.
> I want to see your work."*
>
> Ayr was right. **The full listing is at `design/BIOME_LISTING.md`**, generated by
> `design/tools/biome_listing.py` and re-runnable.

### The bug: I was reading one of four assignment blocks

`biome_assign.js` holds **four** species-to-biome blocks, applied in file order with
later winning:

| Block | Entries | What it is |
|---|---|---|
| `BIOME_BY_HAND` | 237 | Species with no habitat sentence at all |
| `BIOME_FIX` | 36 | Corrections where the habitat rules misfired |
| `BIOME_MOVE` | 27 | **Ayr's redistribution pass, 2026-08-24** |
| `FR` | 35 | **Ayr's forest and rainforest review, 2026-08-25** |

**My tool read the first one and stopped.** Every correction Ayr made on the 24th and
25th was being silently discarded, which is why forest came out at 93 with monkeys in
it and why the totals looked nothing like the doc.

The tool now reads all four plus the one-off dot-assignments, and carries a warning at
the top not to narrow it again.

### The counts, with the arithmetic closing exactly

```
living roster (A + E constructors)   496
  less life stages                   -32
  less not-living                     -3
  less unplaced                       -0
  placed in the twelve biomes        461
```

| Biome | Count |
|---|---|
| Rainforest | **89** |
| Forest | **59** |
| Savanna | **57** |
| Wetlands | **39** |
| Coast | **38** |
| Desert | **36** |
| Reef | **32** |
| Open ocean | **29** |
| Polar | **27** |
| Mountains | **24** |
| Farmland | **24** |
| Deep sea | **7** |
| **Total** | **461** |

### These now agree with the doc where it matters

Rainforest 89 against 91, polar 27 against 28, open ocean 29 against 33, desert 36
against 41, forest 59 against 66. **Close enough to be the same roster.**

The remaining gaps are farmland (24 against 58), savanna (57 against 79), wetland (39
against 59), coast (38 against 53) and mountains (24 against 34) - **and they total
about 118, against 94 breeds and domestics sitting in the `P` constructor.** Those are
The Kept, target 50, and counting them as living would inflate farmland most of all.

### So the real gap

**461 in the twelve biomes, 700 target, 239 new species needed.**

The earlier figure of 128 rested on the 579 count, which included animals that belong
to The Kept.

### The lesson, recorded

**Every number in this document that came from tooling should be reproducible by a
committed script.** The two that were not - the biome counts and the allocation
targets - are exactly the two that turned out to be wrong. `biome_listing.py` is now
committed, and the listing it generates is checked in beside it.

---

## GROUND TRUTH, FINALLY - READ FROM THE RUNNING GAME

> **Ayr, 2026-08-26.** *"The target is 700 across those 12 biomes. It tallies 461.
> That number is way too low, something is wrong."*
>
> **Right again.** 461 was wrong, 516 was wrong, 465 was wrong. All three came from
> me parsing JavaScript with regular expressions, and all three were different.

### What was actually wrong

**DEX entries come in two completely different shapes**, and I only ever read one:

```js
fennec:   { n: "Fennec Fox", art: "fennec", ... }    object literal (game.part3.jsx)
aardvark: A("Aardvark", ...)                          constructor call (added later)
```

The original roster - every starter, much of the savanna, the fennec, the hedgehog,
the cheetah, the beaver - is written as **object literals**. My parser matched only
constructor calls, so it found 861 of 1000 species and quietly dropped the rest.

**That is also why I reported 23 quest animals as missing. They were never missing.**
Fennec fox, hedgehog, cheetah, loggerhead and the rest are all in the roster; my
parser could not see them.

### How the number was finally settled

There is no JavaScript runtime in this environment, so the parser could not be
checked against anything. But **`gallery.html` already loads the game and exports
`window.__DEX`** - so the answer was available all along by running the game and
asking it.

Served the repo, opened the gallery, and read the live object.

### The real numbers

```
1000 DEX keys exactly
```

| | |
|---|---|
| **In the twelve biomes** | **519** |
| The Vigil & On the Brink | 100 |
| The Telling (mythology) | 100 |
| The Kept (breeds) | 94 |
| The Record (fossils) | 50 |
| Life stages (chicks, calves, pups) | 120 |
| Unplaced | 17 |
| **Total** | **1000** |

| Biome | Count |
|---|---|
| Rainforest | **92** |
| Savanna | **76** |
| Forest | **64** |
| Wetlands | **46** |
| Desert | **44** |
| Coast | **43** |
| Mountains | **32** |
| Reef | **31** |
| Open ocean | **29** |
| Farmland | **27** |
| Polar | **24** |
| Deep sea | **11** |
| | **519** |

**The 17 unplaced are the 13 wardens, plus qilin, thunderbird and phoenix** (which
need the Mythic tag to join The Telling) **and the woolly mammoth** (which belongs in
The Record).

### So the gap is 181

```
519  in the twelve biomes now
700  target
181  new living species needed
```

Not 128, not 239. **181.**

### The lesson, and it is the third time today

**Do not parse a language with regular expressions when the language has a runtime
available.** Three separate wrong answers came from that, each one confidently
reported.

`design/GROUND_TRUTH.json` now holds the counts and their provenance. **The method
for re-checking is: serve the repo, open `gallery.html`, read `window.__DEX`** - not
another parser.

---

## THE STARTING TOWN IS THE FURROWS PLUS THE KEPT

> **Ayr, 2026-08-26.** *"The animals in The Kept and The Furrows are in the starting
> town, where you have access as a child and teen. Just want to make sure you know
> that."*

**Recorded.** This reframes The Furrows: it is not simply one of twelve biomes, it is
**the first one**, and the entire opening happens inside it.

```
27  The Furrows   wild animals of the town and its gardens
94  The Kept      the domestic animals in it
121  available to a child
```

That is a lot of content for the first two life stages, and it means the child and
teen years are not a thin prologue - they have a real roster.

### Four things this exposes, checked against the data

#### 1. The starting area has to include a slice of The Weald

**All four rescued-animal options live in forest, not farmland:** Common Raven,
Beaver and White-tailed Deer are all in The Weald, and **Box Turtle is not in the
roster at all** (the nearest entry is Terrapin, in wetlands).

That matches the opening as already sequenced - *"your yard and the woods behind
it"* - so the child's world is **The Furrows plus the edge of The Weald.** Worth
stating explicitly, because the rescue that starts the whole game happens in the
woods rather than the town.

**And the box turtle needs creating**, since it is one of the four locked choices.

#### 2. The reptile pet options do not exist

Idea 23 offers five kinds of kid pet. Four are fully stocked - cats, dogs, fish and
small mammals all have several entries in The Kept.

**The reptile row is empty.** No snake, no bearded dragon, no pet tortoise. The
sulcata tortoise is in the desert and the ball python is in the savanna, both as wild
animals.

**Three species need adding to The Kept** for the pet menu to work as designed.

#### 3. Alpaca and llama are in the wrong group

Both are sitting in **farmland** as wild animals. They are domesticated, and there is
already a **Farm Alpaca** in The Kept - the duplicate Ayr flagged earlier.

**Both belong in The Kept**, which also removes them from a biome count.

#### 4. Cutting The Kept from 94 to 50 now touches the opening

The cut is no longer a tidy-up of a postgame list. **The Kept is the pet menu**, and
the pet is the second thing the player ever does.

So the cut has to be made **with the character-creation screen in mind**: enough cats
and dogs to feel like a real choice, the fish and small mammals kept, **the reptiles
added rather than trimmed**, and the farm animals retained because the teen years
(idea 24) offer a goat, a chicken, a pig and a horse.

**Trimming 44 dog and cat breeds is still right** - but it is now a design decision
about how much choice the opening offers, not a spreadsheet exercise.

---

## WHERE THE SPECIES WORK STANDS - REBUILT ON GROUND TRUTH

> **2026-08-26**, after the audit. All numbers below come from
> `design/GROUND_TRUTH.txt`, read from the running game.

### The proposals, de-duplicated against real data

| Batch | Proposed | Already existed | Genuinely new |
|---|---|---|---|
| The Dark (deep sea) | 44 | 1 - brittle star, already in reef | **43** |
| The Floe (polar) | 25 | 0 | **25** |
| The Divide (mountains) | 19 | 3 - **snow leopard**, **Alpine ibex**, mountain gorilla | **16** |
| | | | **84** |

**Snow leopard and Alpine ibex were in the roster all along**, which is further fallout
from the broken parser - the mountains quests were never missing their animals either.

### The allocation, rebuilt from 519

| Biome | Now | Target | New |
|---|---|---|---|
| Rainforest | 92 | 92 | - |
| Savanna | 76 | 76 | - |
| Forest | 53 | 58 | **+5** |
| Wetlands | 46 | 56 | **+10** |
| Desert | 44 | 56 | **+12** |
| Coast | 43 | 56 | **+13** |
| Farmland | 38 | 52 | **+14** |
| Mountains | 32 | 50 | **+18** |
| Reef | 31 | 52 | **+21** |
| Open ocean | 29 | 52 | **+23** |
| Polar | 24 | 50 | **+26** |
| Deep sea | 11 | 50 | **+39** |
| | **519** | **700** | **181** |

Rainforest and savanna stay the richest, as Ayr asked, and nothing lands below 50.

### What remains

**84 of the 181 are on the table.** The three existing batches roughly cover deep sea,
polar and mountains, give or take a couple each.

**97 still to choose**, and they fall in five places: open ocean (+23), reef (+21),
farmland (+14), coast (+13) and desert (+12), plus small tops-up for wetlands and
forest.

**Farmland is now the interesting one.** It is the starting town, it just gained the
eleven North American backyard species, and it still needs about fourteen more - which
are the animals a child meets first.

---

## THE PET STORE, THE BREEDING CENTRE, AND WHO CAN REACH WHAT

> **Ayr, 2026-08-26.** Four decisions.

**88.** **The eleven saltwater aquarium fish move to The Garden.** They are wild reef
fish that people keep in tanks, not domesticated breeds — a clownfish in a tank is the
same animal as a clownfish on a reef. Blue Tang · Percula Clownfish · Royal Gramma ·
Flame Angelfish · Firefish Goby · Six-Line Wrasse · Copperband Butterflyfish ·
Blue-Green Chromis · Banggai Cardinalfish · Picasso Triggerfish · Porcupine Pufferfish.

*Data change pending: these carry a `dom`/`breed` flag in the DEX and need it cleared
when the new game's data is built. `GROUND_TRUTH.txt` still shows them in The Kept
because it reflects the running game, not the target.*

**89.** **A pet store exists in the child phase.**

**90.** **No breeding centre until end game.**

**91.** **Everything in The Furrows and The Kept is accessible during childhood and
teenagehood.**

**92.** **The per-biome target numbers are flexible, at Ayr's discretion.** They are a
starting point for balance, not a constraint. The only firm number is **1000 total.**

### What follows from 89–91

**The Kept is not postgame content. It is the childhood pet store inventory.**

That changes the question about its size completely. It was never "how many breeds do
we want in a collection" — it is **"how rich should the pet store be in the first
hour"**, traded against wild animals elsewhere, because 1000 is firm.

### And the breeding centre needs no species of its own

It opens at end game and uses **the same animals the player met as a child.** You buy a
pet at eight; you come back forty years later and see where it came from.

**No new slots. The whole cost is the writing**, and the subject is already there:
responsible breeding against puppy mills, and the fact that the breeds people find
cutest — pugs, bulldogs, dachshunds, Persians — are frequently the ones that suffer
most for it.

### The Kept after the move

```
94  now
-11  saltwater fish -> The Garden
83  available in the childhood pet store
```

**Whether 83 stays or trims is Ayr's call**, and it is a straight trade: every breed
kept is a wild animal not added. The surplus is dog and cat breeds — 28 dogs and 19
cats, where the pet menu in idea 23 needs roughly nine and five.

---

## THE PET SYSTEM — DESIGNED

> **Ayr, 2026-08-26.** Ideas 93–99, replacing the sketch in ideas 23 and 24.

### 93. The cat is one species with cosmetic variants, and it starts as a kitten

**One entry: House Cat**, with **different skins** — and it arrives as a **kitten**.

**Tabby, calico and black stop being species entirely** and become appearance options
on that one animal. **Every named cat breed stays in the Breeding Centre roster**;
none of them is a childhood pet choice.

### 94. Dogs stay small / medium / large, three each

| Size | Options |
|---|---|
| **Small** | Chihuahua · Dachshund · Pug |
| **Medium** | Corgi · **Mutt** *(new)* · **Pit Bull** *(new)* |
| **Large** | Siberian Husky · Golden Retriever · German Shepherd |

**Basset hound is dropped. Mutt replaces Farm Dog** — a mutt is the honest generic
dog, "farm dog" is a job rather than a breed, and **most dogs in the world, and most
dogs in shelters, are mutts.**

### 95. Four reptiles get created

**Corn snake** (the standard beginner snake), **bearded dragon**, a **Russian
tortoise** — the pet tortoise that does not reach 45 kg, unlike the sulcata already
in the desert — and the **leopard gecko**, added by Ayr and the most commonly kept
pet reptile in the world.

**Reptiles are the largest single group in the child pet menu**, which is a fair
reflection of how many children actually keep one.

### 96. The budgie is a teen option, and it already exists

**The parakeet is the budgerigar**, already in The Dry as a wild Australian bird —
Ayr spotted this. It needs no new entry; it is **stocked in the teen pet store**,
exactly as the hermit crab is.

**The cockatiel and zebra finch are in The Dry on the same footing**, so the pet-bird
shelf fills without spending a single roster slot — and honestly, since those birds
really are wild animals that people keep.

**There is no bird in the child menu.** A first pet is a cat, a dog, a reptile, a
fish or a small mammal; a bird is a step up, and it waits for the teen years.

### 97. Farm animals are no longer a teen pet option

They stay in the game and in the town; a teenager simply does not choose one as their
animal.

### 98. Most teen animals come from the wild

| Teen option | Where it comes from |
|---|---|
| **Rescued macaw** | The wild macaws already in The Canopy |
| **Rescued cockatoo** | The wild cockatoos already in The Canopy and The Weald |
| **Chinchilla** | The wild one in The Divide |
| **Hermit crab** | The wild one in The Strand — **and also stocked in the teen pet store** |
| **Ferret** | **Pet Ferret already exists** in the roster |
| **Freshwater fish** | Teen pet store only |
| **Eels** | **Cut.** |

### 99. The axolotl is in the wild *and* in the breeding centre

Ayr's instruction, and it is exactly right — **the axolotl is functionally extinct in
the wild while hundreds of thousands live in tanks.** Putting it in both places makes
that paradox literal instead of explaining it. It also keeps its required place in On
the Brink.

## The Kept lands on 50 exactly

| | |
|---|---|
| House Cat | 1 |
| Dogs | 9 |
| Reptiles | 3 |
| Freshwater fish | 14 |
| Small pets | 8 |
| Parakeet | 1 |
| Canary | 1 |
| Farm animals | 13 |
| **Total** | **50** |

### What needs creating — five, plus a life stage

**Mutt · Pit Bull · Corn Snake · Bearded Dragon · Russian Tortoise**, and **Kitten**
as a life stage like the Puppy that already exists.

### And the Breeding Centre drops to 34

47, less the nine dogs a child can buy, less House Cat, less Farm Dog, less Puppy,
less tabby/calico/black which become coat options.

**34 is not round.** It tops to 50 with sixteen more real breeds — there is no shortage
of them — or it stays at 34. **Ayr's call.**

### Where the numbers stand today versus the target

The published list shows **The Kept 49** and **the Breeding Centre 34**, because the
six new species do not exist yet and the three coat colours are still separate
entries. The path to 50:

```
45  today, after the coat colours and Farm Dog come out
-1  Puppy -> reclassified as a life stage, like Kitten
+6  Mutt, Pit Bull, Corn Snake, Bearded Dragon, Russian Tortoise, Leopard Gecko
50
```

**Exactly 50.**

| | |
|---|---|
| House Cat | 1 |
| Dogs | 9 |
| Reptiles | 4 |
| Freshwater fish | 14 |
| Small pets | 8 |
| Canary | 1 |
| Farm animals | 13 |
| | **50** |

The Breeding Centre holds **34** — nineteen dog breeds and **fifteen cat breeds**.

---

## THE KEPT IS DOMESTICATED ANIMALS, NOT A SHOP

> **Ayr, 2026-08-26.** *"The Kept is not the childhood pet store. The Kept is
> domesticated animals. The pet store animals are taken from the Kept list."*

**100.** Corrected, and it is the cleaner model.

| | |
|---|---|
| **The Kept** | A **category** — every domesticated animal in the game |
| **The pet store** | A **shop in the town** that stocks a subset of it |

The store also stocks **wild** species — the budgie from The Dry, the hermit crab from
The Strand — which only works because the store is a place rather than a list.
**Stocking is a mechanic; The Kept is a taxonomy.**

**101. Gopher → The Furrows. Tarantula → The Dry.** Neither is in the roster; both need
creating.

**102. The llama and alpaca are domesticated and belong in The Kept.** Their wild
relatives are the **guanaco and vicuña, both already in The Divide** — which is exactly
why the domestic pair should not also be sitting in a biome.

**"Alpaca" in farmland and "Farm Alpaca" in The Kept are the same animal.** They merge
into one row; the duplicate goes.

### The arithmetic

| | |
|---|---|
| The Kept | 50 → **51** *(gains Llama)* |
| The Furrows | 38 → **37** *(loses Llama and Alpaca, gains Gopher)* |
| The Dry | 44 → **45** *(gains Tarantula)* |

**Net roster change from every pet decision:** −3 coat colours, −1 Farm Dog, −1 merged
alpaca, +6 pet species, +2 gopher and tarantula = **+3**.

Those three come out of the 170 still to be added, not out of the 1000. **The total
stays firm.**

---

## FILLING THE BREEDING CENTRE TO 50

> **Ayr, 2026-08-26.** *"Add axolotl. Add domestic fox. Make some suggestions for bred
> animals that aren't dogs, cats, or common farm animals. Then suggest more cat and dog
> breeds."*

**34 + domestic fox + bred axolotl = 36. Fourteen to find.**

### Ayr's two, and why they are strong picks

**Domestic fox** is the single most important domestication experiment ever run.
Beginning in 1959, Dmitri Belyaev selected silver foxes for one trait — tameness — and
within a few generations got **floppy ears, curly tails, piebald coats and shortened
muzzles nobody selected for.** That cluster is called domestication syndrome, and it is
the closest thing to watching a dog being made.

**Bred axolotl** is the other half of idea 99. The wild axolotl is in On the Brink; the
leucistic and albino strains in tanks worldwide are a bred animal. **The same species in
two places, and the difference between them is the whole point.**

### Bred animals that are not dogs, cats or farm animals — twelve suggested

| Species | Why it earns a slot |
|---|---|
| **Fancy pigeon** | **Darwin bred these himself**, and used them in *On the Origin of Species* as his opening proof of artificial selection. Pouters, fantails, tumblers — all one species. The most historically important bred animal there is |
| **Silkworm** | **Completely dependent on humans.** After 5,000 years of breeding it cannot fly and cannot survive without being fed. It no longer exists in the wild in any form |
| **English budgie** | The show form, **beside the wild budgie already in The Dry.** Twice the size, half the lifespan. The clearest before-and-after in the game |
| **Angora rabbit** | Bred purely for wool, and it **cannot shed** — an unsheared angora dies of its own coat |
| **Flemish Giant rabbit** | Bred to the size of a dog |
| **Skinny pig** | A hairless guinea pig. Bred for looks, and it needs supplementary heat to live |
| **Peruvian guinea pig** | Hair that grows past 50 cm and drags |
| **Ball python morph** | The modern reptile trade — **hundreds of colour morphs**, some carrying neurological defects that came with the colour |
| **Silkie chicken** | Black skin, black bones, fur-like feathers, and it cannot fly |
| **Roller canary** | **Bred for its song rather than its appearance** — judged with the bird out of sight |
| **Falabella** | The smallest horse in the world, bred down to under 80 cm |
| **Laboratory mouse** | The most-used animal in the history of science, and a genuinely bred strain |

### More cat and dog breeds — fourteen suggested

**Dogs**

| Breed | Why |
|---|---|
| **Anatolian Shepherd** | **The dog in the savanna cheetah quest.** It is already in the game's story and not in its roster |
| **French Bulldog** | The most popular dog in several countries and one of the least able to breathe |
| **Basset Hound** | Dropped from the pet menu, belongs here |
| **Shar Pei** | Skin folds bred to the point of eye and infection problems |
| **Basenji** | Ancient African, and **it cannot bark** |
| **Xoloitzcuintli** | Mexican hairless, pre-Columbian, older than most European breeds |
| **Afghan Hound** | Ancient sighthound |
| **Bull Terrier** | The skull shape was bred, not inherited |

**Cats**

| Breed | Why |
|---|---|
| **Manx** | Taillessness comes from a gene that can also shorten the spine — **Manx syndrome** |
| **Munchkin** | Short legs, and the most contested breed in the cat fancy |
| **Cornish Rex** | Curled coat from a single 1950 farm kitten |
| **Burmese** | |
| **Egyptian Mau** | The only naturally spotted domestic cat |
| **American Curl** | Ears that curl backwards, from one stray in 1981 |

### CHOSEN — Ayr, 2026-08-26. The Breeding Centre is 50.

**Fancy Pigeon · Silkworm · English Budgie · Angora Rabbit · Ball Python Morph ·
Anatolian Shepherd · Manx · Munchkin · Cornish Rex · Burmese · Egyptian Mau ·
American Curl · French Bulldog · Bull Terrier**

```
34  before
+2  domestic fox, bred axolotl
+14 chosen above
50
```

### What the chosen fifty add up to

The set divides into two halves that do different jobs, and the split was not planned:

**Six carry the science and the history.** The fancy pigeon is Darwin's own evidence.
The silkworm is total dependence. The English budgie is a controlled comparison against
a wild bird already in the game. The domestic fox is domestication observed in real
time. The angora rabbit and the ball python morph are the modern trade.

**Eight carry the welfare argument, and they do it without a word of commentary** —
the **Manx** and its spine, the **Munchkin** and its legs, the **French Bulldog** and
its airway, the **Bull Terrier** and its skull. Put those beside the Anatolian
Shepherd, a working dog bred for a job it still does, and the breeding centre makes its
case by arrangement rather than by lecture.

---

## THE ANSWER: 119 NEW SPECIES

> **Ayr, 2026-08-26.** *"All of the lists count towards the 700 except the myths, the
> fossils, On the Brink, the Vigil, and the breeding centre."* and *"I thought we had
> already agreed to get rid of the life stages? They are being added to the current
> animals."*
>
> Both correct, and the second was already decided — the doc has recorded since
> 2026-08-25 that **juveniles fold into their adults and are not separate placements.**

### Life stages are not species

**121 entries** in the data are chicks, calves, cubs and pups. **They count nowhere.**
Each becomes a baby form of the animal it belongs to, so a Lion Cub is the Lion at a
younger age rather than a second row.

### The 700 — biomes plus The Kept

| | |
|---|---|
| Rainforest 92 · Savanna 76 · Forest 53 · Wetlands 46 · Desert 45 · Coast 43 | |
| The Garden 42 · The Furrows 37 · The Divide 32 · The Blue 29 · The Floe 24 · The Dark 11 | **530** |
| **The Kept** | **51** |
| **Subtotal** | **581** |
| **Target** | **700** |
| **NEEDED** | **+119** |

### The 300 — the five excluded groups

| | Now | Target | |
|---|---|---|---|
| The Vigil | 50 | 50 | |
| On the Brink | 50 | 50 | |
| The Telling | 103 | 100 | **cut 3** |
| The Record | 51 | 50 | **cut 1** |
| The Breeding Centre | 50 | 50 | |
| | **304** | **300** | **cut 4** |

The Telling is over because qilin, thunderbird and phoenix join it from unplaced; The
Record is over because the mammoth does. **Both were already flagged in the roster
shape section — three myths come out to make room, and one fossil does.**

### Also leaving the roster — 18

Five from the pet decisions (three coat colours, Farm Dog, the merged alpaca) and
**the thirteen wardens**, which were cut from this game on 2026-08-25.

### So

```
119  new species needed for the 700
-84  already proposed  (deep sea 43, polar 25, mountains 16)
 35  still to choose
```

**Plus four to trim from the excluded groups.** Nothing else.

### And the earlier figures were wrong

I have quoted **128**, then **239**, then **181**, then **170**. All of them treated the
700 as the twelve biomes alone. **The 700 includes The Kept**, and the life stages count
nowhere, which is what makes 700 + 300 = 1000 close exactly.

**119 is the number.**

---

## THE TELLING IS 100

> **Ayr, 2026-08-26.** *"Get rid of Wendigo for sure. Fairy and Cyclops."*

**Out:** Wendigo · Fairy · Cyclops.
**In:** Qilin · Thunderbird · Phoenix, which were sitting unplaced.

| | |
|---|---|
| **Wendigo** | **Algonquian communities have asked explicitly that it not be used in entertainment.** This doc already commits to not treating living traditions as solved puzzles, and this is the entry most likely to cause real harm |
| **Fairy** | Not a creature but a **category** spanning a thousand traditions — the one entry on the list that could mean anything. Humanoid, in a game about animals |
| **Cyclops** | A giant man, from the most over-represented tradition on the list. Greek keeps Griffin, Chimera, Hydra, Pegasus, Sphinx, Harpy, Cerberus, Manticore and Hippocampus |

**The Telling is now exactly 100.** The woolly mammoth also leaves unplaced for The
Record, taking unplaced down to **the thirteen wardens** — which are cut from this game
and go nowhere.

### Two notes for whoever writes these entries

**Firebird and Phoenix are both in.** They are the same creature in different
traditions, and so are Bennu, Fenghuang and Simurgh. **Five firebirds is fine if each
entry says what its own tradition does with it** — and dull if they do not.

**Chinese is now the heaviest tradition** at roughly ten of the hundred: Qinglong,
Baihu, Xuanwu, Fenghuang, Bixi, Pixiu, Nian, Taotie, Sha and Qilin. Worth knowing when
the twelve mythology quests are assigned, since only one of them can be Chinese.

---

## EVERY OUTSTANDING DECISION IS NOW APPLIED

> **Ayr, 2026-08-26.** *"Why is it not applied? Apply it. Look for any other decisions
> I've made that haven't been committed."*
>
> **The reason nothing was applied: `PENDING_MOVES.txt` did not exist until today.**
> Decisions were written into this file as prose, with no mechanism to act on them and
> no way to tell *decided* from *done*. That gap is now closed — every decision lives in
> `PENDING_MOVES.txt` and the roster page renders from it.

### Applied in this pass

**1. The fossil rebalance.** 29 surplus dinosaurs cut, 7 Ice Age species moved in from
the Vigil, 5 more cut as redundant, 21 new species for the eight empty periods. **The
Record covers all thirteen periods and is 50.**

**2. The Vigil / On the Brink split.** Read from the running game: of the Vigil's 100,
**exactly 56 carry a dagger and a year** and 44 do not. The living ones move to On the
Brink, joined by the seven critically endangered species still sitting in biomes —
vaquita, sawfish, sunflower sea star, kākāpō, pangolin, gharial and the axolotl.

**Mauritius Kestrel held back.** It is listed EN and recovered from **four birds** to
several hundred. That is a success story, not a brink story, and it returns to a biome.

**Six real extinct species added** to bring the Vigil to 50: Bachman's Warbler
(declared extinct 2023) · Christmas Island Forest Skink (the last one, named Gump, died
in captivity in 2014) · Alaotra Grebe · **Tecopa Pupfish — the first animal ever
declared extinct under the US Endangered Species Act, after its hot spring was
developed into a bathhouse** · Round Island Burrowing Boa · Little Mariana Fruit Bat.

**3. Gemsbok created**, for the savanna conservancy quest.

**4. Little blue penguin created**, in The Strand.

**5. The mountains elder quest fixed.** It still named the mountain gorilla, which moved
to rainforest. **It is now the Tibetan antelope and the shahtoosh ban** — a wool fine
enough to pass through a ring, taken only from dead animals, three or four per shawl;
CITES Appendix I; a recovery from ~75,000 to ~300,000, and a trade that still runs
underground.

### And one proposal struck as void

The six historical extinctions I proposed adding to the Vigil on 2026-08-25 — baiji,
golden toad, Pyrenean ibex, po'ouli, Bramble Cay melomys and the Christmas Island
pipistrelle — **are every one of them already in the roster**, as is the Chinese
paddlefish I offered as a replacement. Another artefact of the broken parser.

### The five groups outside the 700 are now exact

```
The Vigil            50
On the Brink         50
The Telling         100
The Record           50
The Breeding Centre  50
                    300
```

---

## THE BLACK SKIRT TETRA IS THE GLOFISH

> **Ayr, 2026-08-26.** *"The black skirt tetra is cool bc that's how they make GloFish.
> I want that in there somewhere."*

**Recorded, and it is a better entry than it looks.**

**GloFish are the first genetically modified animal ever sold as a pet.** A fluorescence
gene — originally from a jellyfish, later from coral — is inserted into the fish, and the
colour is heritable. They are not dyed and not injected; they are born that way and pass
it on.

The **black skirt tetra** is one of the base species, sold as the GloFish tetra. And
**the zebra danio — also in The Kept — was the first one of all**, engineered in
Singapore in the late 1990s to detect pollutants in water by glowing in their presence.
**The pet came second.** The original purpose was environmental monitoring.

### Why it earns a place in the game

- **They are banned outright in several countries**, and were banned in California for
  years, on the grounds that a genetically modified ornamental fish should not be sold
  as a novelty.
- **The Kept already contains both of them.** The first GloFish and one of its
  successors are sitting in the childhood pet store, and nothing in the game currently
  says so.
- It is the honest far end of Ayr's own theme. The breeding centre asks what selective
  breeding does to an animal over centuries. **The GloFish asks what happens when you
  skip the centuries.**

**Where it goes:** the field-guide entries for **Black Skirt Tetra** and **Zebra Danio**,
and it is a natural fit for the breeding centre's writing once that is built.

---

## THE KEPT IS 50

**Potbelly Pig cut.** *Pig* already covers pigs, and the potbelly is a bred pet variety
rather than a farm animal — the odd entry in that list.

```
cat 1 · dogs 9 · reptiles 4 · freshwater fish 14
small pets 8 · canary 1 · farm 13
= 50
```

---

## A VALIDATOR, AND THREE THINGS IT CAUGHT

> **Ayr, 2026-08-26.** *"Please make sure we don't have to come back and fix any of
> this."*

Rather than assert it was fine, I wrote **`design/tools/validate.py`** and ran it. It
checks six things and **it found three real problems** that would otherwise have
surfaced weeks from now.

### What it checks

1. Every group hits its target
2. The whole thing sums to 1000
3. **No species appears in two groups, or twice in one**
4. **Nothing marked "new" already exists** — the mistake that produced the void Vigil
   proposal and the phantom missing quest animals
5. **Every quest animal exists or is scheduled to be created**
6. Nothing cut is still referenced as living

### What it caught

**1. Two DEX entries are both called "King Cobra."** The starter-era `cobra` in
`game.part3.jsx` and the later `kingcobra` in `game.part9.jsx` — one classified to
forest, one to rainforest. Exactly the Alpaca / Farm Alpaca pattern, and it would have
shipped as two identical snakes. **Merged; the forest one goes.**

**2. The Iberian lynx does not exist**, and it is the forest **adult-with-power** quest
animal — down to about 94 animals in 2002, recovered past 2,000 by 2023.

**3. The Tibetan antelope does not exist**, and it is the mountains **elder** quest
animal as of an hour ago, when the shahtoosh ban replaced the mountain gorilla.

**Both quests were written against animals that were not in the game.** Nothing would
have flagged that until someone tried to build them.

### Now passing

```
THE 700   biomes 528 + The Kept 50 = 578      122 still to create
THE 300   Vigil 50 · On the Brink 50 · The Telling 100
          The Record 50 · The Breeding Centre 50      exact

duplicates 0   ·   phantom new species 0   ·   missing quest animals 0
```

### It is called Uncle Albert

> **Ayr, 2026-08-26.** *"Let's call this check something easier for me to remember. Run
> it by Uncle Albert."*

```
uncle-albert.bat                      double-click it, or run it from a terminal
python design/tools/uncle_albert.py
```

**Run it after any change to `PENDING_MOVES.txt`, and before quoting any number.** It
exits non-zero on failure, so it can be trusted without reading the output — and it
says **"Uncle Albert says it all adds up"** when it is happy.

---

## SPECIES AUDIT — Ayr was right, and it is not one entry

> **Ayr, 2026-08-26.** *"The fire hawk in savanna is actually 3 different species. Check
> all of the animals we currently have for errors like that and similar."*

**Full audit at `design/SPECIES_AUDIT.md`, and as a browsable page at
`design/species_audit.html` —** <https://claude.ai/code/artifact/c99584d9-712a-4c17-a4bc-baae7e80a895> Roughly **100 of the 528 real animals need a
decision** — about a fifth of the roster.

### Four entries are not animals

**Firehawk** — Ayr's example. Three unrelated Australian raptors are documented
carrying burning sticks to spread fire: black kite, whistling kite, brown falcon.
**Lioness** and **Maned Lion** — a sex, twice, for one species. **Mole-Rat Queen** — a
caste.

### Eleven redundant pairs

The general and the specific of the same animal, both present. **A siamang is a gibbon.
A mandarinfish is a dragonet.** Jackal and black-backed jackal. Fur seal and Cape fur
seal. Lynx and Iberian lynx. Fruit bat, Egyptian fruit bat *and* spectacled flying fox.

### About 85 name a group rather than a species

Gecko covers 1,500 species. Scorpion 2,500. Jewel Beetle 15,000. Hummingbird 360. Vulture
23 — **and Old World and New World vultures are not even related.** Tardigrade is a whole
phylum.

**Almost none of these is hard**, because in nearly every case one species carries the
interesting fact: the 17-year periodical cicada, the bee hummingbird, the common basilisk
that runs on water, the Australian box jellyfish, the Bactrian camel that is the
endangered wild one.

### Seven are in the wrong biome

**Ring-tailed lemur and sifaka are in the desert** — both Madagascan forest animals.
**Komodo dragon is in rainforest** — it lives in dry savanna woodland. **Coelacanth is in
the open ocean** — it lives at 150–250 m in submarine caves, and **the deep sea badly
needs species anyway.**

### This should happen before the 122 new animals

Otherwise the new ones get written to the same standard as the old ones, and the pass has
to run twice.

---

## THE THREE APPROVED BATCHES ARE APPLIED

> **Ayr, 2026-08-26.** *"Why is deep sea at 11? I already approved a bunch of animals.
> For polar and mountain too."*

**Correct, and I had not applied any of them** — the same class of miss Ayr caught an
hour earlier with the fossil rebalance. Approved on the 25th and 26th, sitting in prose,
never written to `PENDING_MOVES.txt`.

| Batch | Added | Now |
|---|---|---|
| **The Dark** | **43** | 11 → **54** |
| **The Floe** | **25** | 24 → **49** |
| **The Divide** | **15** | 33 → **48** |

The Dark was the emptiest biome in the game at 11 and is now the fourth-fullest.

**The Divide got 15 rather than 19** because snow leopard and ibex already existed, the
mountain gorilla moved to rainforest, and the Tibetan antelope was added earlier today
when it became the elder quest animal.

### Where the 700 stands

```
biomes 611 + The Kept 50 = 661        39 still to create
```

**From 122 to 39.** Uncle Albert passes.

### One caveat carried forward

Several of the deep-sea additions are **generic names** — Siphonophore, Comb Jelly, Squat
Lobster, Sea Lily, Glass Squid, Vent Shrimp, Deep-sea Barnacle, Bamboo Coral, Vent
Mussel. They are on the `SPECIES_AUDIT.md` list and need naming to a real species, along
with the ~100 already there.

---

## SPECIES AUDIT SECTION 1 IS DONE

> **Ayr, 2026-08-26.** *"Commit all 4 of your suggestions for the section not an animal at
> all."*

| Was | Now |
|---|---|
| **Firehawk** | **Black Kite.** Three unrelated Australian raptors are documented carrying burning sticks to spread fire — black kite, whistling kite, brown falcon. The black kite is the best documented and the most widespread |
| **Lioness** + **Maned Lion** | **One entry: Lion.** They were a sex, listed twice. Male and female become an appearance state, the same way the House Cat coats do |
| **Mole-Rat Queen** | **Naked Mole-Rat**, with the queen as a life stage of it. The roster had it backwards — the species was filed as a life stage while the caste sat in savanna as though it were the animal. **She earns the life stage: a naked mole-rat queen grows extra vertebrae on becoming queen, which no other mammal does** |

**Savanna 76 → 75.** Uncle Albert passes.

### `PENDING_MOVES.txt` now supports renames

`RENAME=Old Name::New Name|Old::New`, applied before any move, so later lines refer to
the new name. Both tools handle it.

### Remaining on the audit list

```
 0  not an animal        DONE
11  redundant pairs
~85 a group, not a species
 7  wrong biome
```
