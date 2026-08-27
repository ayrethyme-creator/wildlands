# HANDOFF — read this first

You are on **`wildlands-next`**, the new game. `main` is the finished *Safari Saga* and is
**not** what is being worked on. Check the branch before anything else.

This is **design work, not game code.** Nothing here compiles. No game code has been
written for the new game yet.

---

## The five files that are authoritative

| File | What it is |
|---|---|
| **`design/GROUND_TRUTH.txt`** | The species that exist, by group. **Read from the running game, never parsed from `.jsx`** |
| **`design/PENDING_MOVES.txt`** | Decisions made but not yet in game data. Every fix lives here until applied |
| **`design/BADGES.txt`** | Badge membership, the only source. The page is generated from it |
| **`design/tools/uncle_albert.py`** | The validator. Ayr calls it *"run it by Uncle Albert"* |
| **`NEW_DIRECTION.md`** | The design record, ~10,000 lines, append-only with dated headers |

**`NEW_DIRECTION.md` is too long to read.** Read the last few hundred lines for current
state, and search it for a topic when you need one. **Its prose counts go stale** — the
banner at the top says so. Numbers come from Uncle Albert, never from the doc.

---

## Two rules that exist because they were broken

**1. Never quote a number you have not had Uncle Albert produce.**

```
uncle-albert.bat                       (double-click, or from the repo root)
python design/tools/uncle_albert.py    (exits non-zero if anything is wrong)
```

Three wrong species counts were published to Ayr in one session — 461, 516, 465 — all
from regex-parsing JavaScript. **The DEX exists in two shapes** (object literals *and*
constructor calls) and a regex that matches one silently drops the other. Ayr caught it
three times. That is what the tool is for.

**2. Never regex-parse `game.part*.jsx`.** Serve the repo and read `window.__DEX` from
`gallery.html`. `design/tools/read_ground_truth.js` is the sanctioned snippet.

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

---

## Where things stand, 2026-08-27

Run Uncle Albert for the live version. As of this writing:

```
THE 700     biomes 606 + The Kept 50 = 656        44 still to create
THE 300     Vigil 50 · On the Brink 50 · The Telling 100
            The Record 50 · The Breeding Centre 50
BADGES      52        easy 10 · medium 26 · hard 16 · 4 tiered
            300 species referenced, 218 exist, 82 to create
```

**Thinnest biomes:** open ocean, farmland, coast, reef.

### In flight

- **The 44 remaining species.** Some are already claimed by badges — the wood frog by
  *Sub-Zero*, the bumblebee bat by *The Smallest*. A New World vulture is wanted.
- **52 badges breaks Ayr's round-number rule.** They said record them anyway and settle
  the count later. Not resolved.
- **The Deathstalker is in *Lights On* and should not be** — a scorpion glows under UV,
  which is fluorescence, not light it makes. Recommended restoring *Blacklight* as its
  own badge. **Ayr has not ruled yet.**
- **`Only In Captivity`** depends on an `EW` tag that does not exist in the data.
- **Items in the world** — committed as a principle. **No item ideas until Ayr asks.**

### Parked — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style
species. Euthanasia.

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

Kept in `design/LINKS.md`. The badge book and the roster are the two worth opening.
