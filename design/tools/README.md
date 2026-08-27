# design/tools

## Read this before quoting any species number

**Never parse `game.part*.jsx` with regular expressions.** On 2026-08-26 three separate
attempts to count the species that way returned **461**, **516** and **465**. All three
were wrong. The real number is **519**, and it came from running the game.

Regex fails here because DEX entries come in two completely different shapes:

```js
fennec:   { n: "Fennec Fox", art: "fennec", ... }   // object literal
aardvark: A("Aardvark", ...)                         // constructor call
```

The original roster — every starter, much of the savanna, the fennec, the hedgehog,
the cheetah, the beaver — is written as object literals. A parser that matches only
constructor calls finds 861 of 1000 and **reports nothing about what it dropped.**
That is how "23 quest animals are missing from the roster" got written into the design
doc. They were never missing.

There is a second trap. `biome_assign.js` holds **four** assignment blocks, applied in
file order with later winning:

```
var BIOME_BY_HAND = {...}   237  species with no habitat sentence
var BIOME_FIX     = {...}    36  where the habitat rules misfired
var BIOME_MOVE    = {...}    27  Ayr's redistribution, 2026-08-24
var FR            = {...}    35  Ayr's forest/rainforest review, 2026-08-25
BIOME_BY_HAND.x = "y";           later one-offs
```

Reading only the first block silently discards every correction Ayr has made.

## The correct method

```bash
cd C:/Claude/wildlands
python -m http.server 8009 &
# open http://localhost:8009/gallery.html
# paste read_ground_truth.js into the console (or run it with the browser tool)
# save the output to design/GROUND_TRUTH.txt
pkill -f "http.server 8009"
```

`gallery.html` evaluates every game part and re-exports `DEX`, `INFO`, `BIOME_RULES`,
`BIOME_BY_HAND`, `BIOME_MERGE`, `NOT_A_SPECIES`, `BIOME_FIX`, `BIOME_MOVE` and `FR`
onto `window`. Asking the running game is the only reliable source.

## Files

| File | What it does |
|---|---|
| `read_ground_truth.js` | **The snippet to paste in the browser.** The only sanctioned way to produce species counts |
| `make_roster_page.py` | Builds the browsable roster page **from `GROUND_TRUTH.txt`**. Reads no `.jsx` |
| **`uncle_albert.py`** | **The roster check &mdash; "run it by Uncle Albert."** Verifies group targets, the 1000 total, duplicate species, species marked new that already exist, and quest animals that do not exist. Exits non-zero on failure. Run after any change to `PENDING_MOVES.txt` |
| `sprite_audit.py` | Measures sprite bounding boxes and bottom gaps |
| `hd2d_billboard.gdshader` | Y-locked billboard shader for Godot. **Untested** — there is no Godot in this environment |

## Two rules that would have prevented every error of 2026-08-26

1. **Ask where a number came from.** "I read the files" is suspect. "I ran the game and
   asked it" is solid.
2. **Smell-test the output.** A 1000-animal wildlife game reporting no fennec fox, no
   hedgehog and no cheetah is not a surprising finding — it is a broken tool.

## Field-guide writing rule (Ayr, 2026-08-27)

**Every entry states how many relatives the animal has** — the genus count, plus the
wider group where that is the more useful number.

> Panther Chameleon — one of about 23 *Furcifer* chameleons, and one of roughly 200
> chameleons.

It answers a question readers always have and field guides rarely do: is this a one-off
or one of a crowd? It also surfaces the animals that are **the last of a whole branch** —
the aardvark is the only living species in its *order*, and the tuatara is the only
survivor of Rhynchocephalia.

## The badges

 is the only source for badge membership.  builds
 from it; Uncle Albert checks it. Never edit the data inside
badges.html - it gets overwritten.

Duplicates across badges are deliberate. An animal that shows four concepts earns four
badges. Do not tidy them away.

A trailing  on a member means the species does not exist yet. Albert fails if a
starred species already exists, which is how the star gets removed once the animal is
made.
