# New Direction — working notes

This is the initiation document for the new game. It is a **container for
Ayr's ideas**, written down as she has them, in her words. Nothing here is
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

*Ayr's, 2026-08-24, in her words. Grouped by subject for reading, not
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
forms so the doc can be used as a reference; everything else is her wording.*

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
7. **Scope and platform against the quality bar (idea 20).** "Professional
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
