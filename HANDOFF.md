# HANDOFF — read this first

You are on **`Terrane_try1`**, the new game. `main` is the finished *Safari Saga* and is
**not** what is being worked on. Check the branch before anything else.

> Renamed from `wildlands-next` on 2026-08-28. `origin/wildlands-next` still exists and is
> not being updated — if a session is working there, it is on the old name.

This is **design work, not game code.** Nothing here compiles. No game code has been
written for the new game yet.

---

## Read `GDD.md` before anything else

**`GDD.md` is the design.** ~2,700 lines, **organised by system rather than by date**, and
it holds only what is currently true. Every section is marked **DECIDED**, **OPEN** or
**PROPOSED**, and all the open questions are collected again at the end.

**It is the answer to "what is this game?"** — read it, and you do not need to navigate the
record.

> **`NEW_DIRECTION.md` is the *record*, not the design.** 11,000 lines, append-only, in the
> order decisions were actually made, including the reversals. It holds every *why* — and it
> is too long to read. Search it for a topic when the GDD says something you want the
> history of.

**Where the two disagree, the GDD is current** — it has been reconciled against the full
record eighteen times, and each pass is listed in its own version note.

---

## The files that are authoritative

| File | What it is |
|---|---|
| **`design/GROUND_TRUTH.txt`** | The species that exist, by group. **Read from the running game, never parsed from `.jsx`** |
| **`design/PENDING_MOVES.txt`** | Decisions made but not yet in game data. Every fix lives here until applied |
| **`design/BADGES.txt`** | Badge membership, the only source. The page is generated from it |
| **`design/tools/uncle_albert.py`** | The validator, and the last word on every number. Ayr calls it *"run it by Uncle Albert"*. It checks **the roster and the badges** |
| **`GDD.md`** | **The design.** By system, current-only, everything marked decided / open / proposed. **Start here** |
| **`NEW_DIRECTION.md`** | The design *record*, ~11,000 lines, append-only with dated headers. Every *why*, including the reversals |
| **`design/tools/cousin_bob.py`** | **The document check.** *"Run it by Cousin Bob."* Verifies the docs still agree with the data |
| **`design/tools/README.md`** | **Read this before quoting any number.** Documents both traps and the correct method |
| **`design/new_species.md`** | The running list of species still to create |
| **`design/cut_species.md`** | What was cut, and why. Check before proposing a removal |

**Numbers come from Uncle Albert, never from either document.** `NEW_DIRECTION.md`'s prose
counts go stale — the banner at the top says so — and the GDD's numbers are only current
because **Cousin Bob asserts them against live data on every run.**

---

## Two rules that exist because they were broken

**1. Never quote a number you have not had Uncle Albert produce.**

```
uncle-albert.bat                       (double-click, or from the repo root)
python design/tools/uncle_albert.py    (exits non-zero if anything is wrong)
python design/tools/make_badge_page.py  (rebuilds badges.html from BADGES.txt)
python design/tools/make_roster_page.py (rebuilds the roster page)
cousin-bob.bat                          (checks the DOCS still match the data)
python design/tools/cousin_bob.py
```

Three wrong species counts were published to Ayr in one session — 461, 516, 465 — all
from regex-parsing JavaScript. **The DEX exists in two shapes** (object literals *and*
constructor calls) and a regex that matches one silently drops the other. Ayr caught it
three times. That is what the tool is for.

**Never hand-edit the badge data inside `design/badges.html`.** It is generated from
`design/BADGES.txt` by `make_badge_page.py` and will be overwritten. Edit the txt, rebuild,
then run it by Uncle Albert.

**Run both before quoting anything.** Albert checks the data adds up. **Bob checks that
what is written about the data is still true** — the numbers in this file **and in
`GDD.md`**, the file paths
in every current-truth doc, whether a document has been cut off mid-sentence, and any
sentence claiming a species is in a badge. Bob exists because on 2026-08-27 four
statements in these documents had quietly stopped being true and no amount of re-reading
was going to reliably find the next one.

**2. Never regex-parse `game.part*.jsx`.** Serve the repo and read `window.__DEX` from
`gallery.html`. `design/tools/read_ground_truth.js` is the sanctioned snippet.

---

## Two documents at the root that will mislead you

**`README.md` describes the wrong game.** It is *Safari Saga* — eight biomes, eight gyms,
an Elite Four. That is `main`, the finished game. **It is not what is being built.**

**`ROADMAP.md` is from 2026-08-05 and has not been touched since.** It predates the
1000-species restructure, the badges, the three careers, the facility system and the life
stages. Some of its direction still holds — observation instead of battling, life stages
instead of gyms — but **treat it as history, not as a plan.** `NEW_DIRECTION.md` supersedes
it everywhere the two disagree.

---

## How Ayr wants to be worked with

These are in memory too, but they matter enough to repeat:

- **Ayr is nonbinary and uses they/them** — in chat, in commits, in docs, in notes.
- **Never say something is infeasible.** Say what it costs in time and review. That part
  is true; the verdict is not yours to give.
- **Flag ideas as ideas.** Say *"I have an idea"* and wait. Do not weave unprompted
  invention in as though it were settled. **In the design phase this is welcome now and
  then. Once game code starts, stop entirely** — it is expensive there.
- **Ayr is not a programmer.** No jargon without explaining it. They playtest themselves
  and catch real bugs; take their reports seriously and check them.
- **Never cut a species Ayr may already have caught** in the old game.
- **Round numbers are firm.** 1000 total: 700 in-game, and 50/50/100/50/50 after.

### Two rules that bite as soon as work resumes

**Every field-guide entry states how many relatives the animal has** — the genus count,
plus the wider group where that is more useful. Ayr asked for this on 2026-08-27 because
it answers a question readers always have: *is this a one-off, or one of a crowd?*

> Panther Chameleon — one of about 23 *Furcifer* chameleons, and one of roughly 200
> chameleons.

**Interest governs which species get made, not headcount.** The per-biome floor was a
working guide and is **explicitly not a target** — a biome gets what is worth having in
it. Ayr decides.

---

## Where things stand, 2026-08-27

Run Uncle Albert for the live version. **Cousin Bob checks these exact numbers**, so if they drift he fails rather than letting them rot:

```
THE 700     biomes 606 + The Kept 50 = 656        44 still to create
THE 300     Vigil 50 · On the Brink 50 · The Telling 100
            The Record 50 · The Breeding Centre 50
BADGES      52        easy 10 · medium 26 · hard 16 · 4 tiered
            329 species referenced, 319 exist, 10 to create
```

**Thinnest biomes:** open ocean, farmland, coast, reef.

### The next work, and the order for it

**Three layers of the design are empty, and they are the foundation.** The GDD's *Where the
design actually stands* section has the full audit; the short version:

```
Layer 0  moment to moment    MISSING
Layer 1  one encounter       MISSING  <- start here
Layer 3  one session         MISSING
Layers 2, 4, 5               built
```

**Layer 1 first** — what happens when you meet an animal, and what each of the three careers
does about it. **Everything else depends on it**, and it was flagged on day one as idea 10
and never done. Then layer 0, then layer 3, then the open questions.

**The encounter *contract* is fixed even though the mechanic is not**, which is why the rest
of the design is safe to keep building. Do not confuse the two.

### In flight

- **The 44 remaining species.** Some are already claimed by badges — the wood frog by
  *Sub-Zero*, the bumblebee bat by *The Smallest*. A New World vulture is wanted.
- **52 badges breaks Ayr's round-number rule.** They said record them anyway and settle
  the count later. Not resolved.
- **Fluorescence has no badge, and that was not decided — it happened.** The Deathstalker
  was in *Lights On*, which is wrong (a scorpion glows because a UV lamp is pointed at it;
  that is fluorescence, not light the animal makes). It was **dropped when the badge sets
  were expanded, without Ayr being told** — so it now sits in no badge at all, and
  *Blacklight* was never restored. **Ayr's ruling is still owed:** restore *Blacklight*
  with the puffin bill, chameleon bones and platypus fur, or let fluorescence go
  unmentioned.
- **`Only In Captivity`** depends on an `EW` tag that does not exist in the data.
- **Items in the world** — committed as a principle. **No item ideas until Ayr asks.**

### Parked — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style species.

**Euthanasia is no longer the open question it was.** Choosing an authored rehabilitation
pipeline rather than a simulated one dissolved it: it becomes a story beat used once or
twice at full weight, not a system running in the background. Do not reopen it as a systems
question.

---

## One environment gotcha that keeps costing time

**Large quoted heredocs fail in this Git Bash setup.** They break apart and the shell
starts executing the payload. It has happened repeatedly.

**Use the Write tool to a scratchpad file, then `cat file >> target`.** For multi-line
commit messages, `git commit -F <file>` is safer than `-F -` with a heredoc.

Push needs the timeout guard:

```
GIT_TERMINAL_PROMPT=0 timeout 90 git push origin wildlands-next
```

---

## The published pages

Kept in `design/LINKS.md`. **The GDD is published as a readable page** — that link is the
one to send anybody who asks what the game is. The badge book and the roster are the other
two worth opening.
