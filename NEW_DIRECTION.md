# New Direction — working notes

This is the initiation document for the new game. It is a **container for
Ayr's ideas**, written down as she has them. Nothing in the Ideas section is
invented or suggested by Claude unless it is explicitly marked as such.

---

## Status

**Nothing has been decided yet.** This document was created at the start of
brainstorming. The Ideas section below is intentionally empty and gets filled
in as Ayr talks.

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

Everything Safari Saga currently is, at `17f3bad`:

- 1000 species, all with finished art; 100 mythics
- The map, battle, dex and save systems
- Seventeen conservation investigations, rewritten so each stands alone
- Clue gating, corridor placement, shuffled proposal order

Any of it can be kept, gutted, or replaced. Being a branch means nothing has
to be decided up front — the old game is safe on `main` regardless.

---

## Ideas

*Ayr's ideas go here as she has them, in her words. Nothing is filtered or
tidied into a plan at this stage.*

<!-- Nothing captured yet. -->

---

## Questions to come back to

*Things raised in passing that need an answer before they can be built, but
should not interrupt the brainstorming.*

<!-- Nothing yet. -->

---

## Decisions

*Only things Ayr has actually settled. Dated, so a later change of mind is
visible as a change rather than a contradiction.*

- **2026-08-24** — The new game is a branch of the current one, not a rewrite
  in place or a separate repo. The current game stays playable and stays
  updatable.

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
a separate decision — it would mean either a second deployment target or a
separate repo, and it is not needed to start.
