"""How many times has each species been rendered, and which ones are out of goes?

    python design/art_pipeline/attempts.py            # summary
    python design/art_pipeline/attempts.py --list     # the species at 3+, ready for one-by-one

Ayr, 2026-08-29: "I'm waiting until you've gone over all of them 3 times (besides
the deep sea and fossils) and then I'll have you make a list and we'll do those
one by one too."

So the bulk process has a defined end: three attempts, then the survivors get
individual attention. This counts the attempts, because after three fix batches
nobody can hold in their head which species have had one go and which have had
three - and guessing would either waste renders on something already exhausted or
retire something that has only been tried once.

An attempt is one appearance in a batch log. The original batch counts as attempt
one, so a species fixed twice has been through three renders in total.

DEEP SEA AND FOSSIL ARE EXCLUDED. Ayr has set both aside for individual work
regardless of how many attempts they have had, so they are reported separately
and never appear in the out-of-goes list.
"""
import io, json, os, sys, collections

REPO = "C:/Claude/wildlands"
PROMPTS = os.path.join(REPO, "design", "art_prompts")
SET_ASIDE = {"batch_deepsea", "batch_fossil"}
LIMIT = 3


def load():
    """species -> [batch names it was rendered in, in order]"""
    tries = collections.defaultdict(list)
    origin = {}
    for fn in sorted(os.listdir(PROMPTS)):
        if not fn.endswith("_log.json"):
            continue
        batch = fn[:-len("_log.json")]
        try:
            log = json.load(io.open(os.path.join(PROMPTS, fn), encoding="utf-8"))
        except Exception:
            continue
        for k, v in log.items():
            if v is True:
                tries[k].append(batch)
                if not batch.startswith("batch_fixes"):
                    origin[k] = batch
    return tries, origin


if __name__ == "__main__":
    tries, origin = load()
    set_aside = {k for k, v in tries.items()
                 if origin.get(k) in SET_ASIDE}
    active = {k: v for k, v in tries.items() if k not in set_aside}

    done = {k: v for k, v in active.items() if len(v) >= LIMIT}
    counts = collections.Counter(len(v) for v in active.values())

    if "--list" in sys.argv:
        for k in sorted(done):
            print("%-26s %d attempts   %s" % (k, len(done[k]), " -> ".join(done[k])))
        sys.exit(0)

    print("=" * 60)
    print("RENDER ATTEMPTS  (deep sea and fossil set aside, counted separately)")
    print("=" * 60)
    for n in sorted(counts):
        label = "%d attempt%s" % (n, "" if n == 1 else "s")
        print("   %-14s %4d species%s" % (label, counts[n],
                                          "   <- out of bulk goes" if n >= LIMIT else ""))
    print()
    print("   %-24s %4d" % ("active species", len(active)))
    print("   %-24s %4d" % ("at the %d-attempt limit" % LIMIT, len(done)))
    print("   %-24s %4d" % ("set aside (deepsea/fossil)", len(set_aside)))
    print()
    if done:
        print("   run with --list for the names")
