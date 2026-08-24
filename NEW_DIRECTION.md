# New Direction — working notes

This is the initiation document for the new game. It is a **container for
Ayr's ideas**, written down as they have them, in their words. Nothing here is
invented or proposed by Claude unless it is explicitly marked as such.

---

## Status

Brainstorming, 2026-08-24. **58 ideas captured and 26 decisions logged.** The
shape is settled: real-world map with a sourced codex, twelve biomes, three
careers that are three different games, six life stages, quests built on
documented conservation history.

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

- **Four quests per biome, one per adult life stage.** 48 in total.
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
| **Adult with power** | Establishing a program | **The conservancies.** Communities given legal ownership of the wildlife on their land. Namibia: **86 communal conservancies, 20%+ of the country, $10M+ a year** returning to residents. Kenya: **two-thirds of large mammals live outside state parks** | **Oryx** |
| **Elder** | Law and policy | **The horn question.** Rhino horn trade policy, including the genuinely unsettled argument over whether a legal trade would undercut poaching or legitimise it. **No clean answer** | **Black rhino** |

Animals used: elephant, cheetah, black rhino. **Lion, wildebeest, vulture, wild
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
| **Desert** | Namib + Sonoran + Australian interior | Oryx, bilby, Gila monster |
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
