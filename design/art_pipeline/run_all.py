"""Render every outstanding batch, in order, unattended.

Ayr, 2026-08-29: "cue then all. I want it all rendering so I can forget about it
for a while."

WHAT IT DOES

  1. waits for any batch already running to finish, so two runners never compete
     for the same card
  2. runs each remaining batch in turn through gen_runner
  3. commits and pushes the sprites after every batch, so progress is visible on
     GitHub without anyone having to ask
  4. makes a SECOND PASS over every batch at the end

Step 4 is the important one. When the GPU manager drops out, the runner retries
twice, logs the species as failed and moves on - correct behaviour, because the
alternative is a stalled queue. But the memory note on the outage signature says
plainly: rows already submitted DO render when the card comes back, and the runner
will have timed out and won't fetch them. So a single pass through 140 species
across several hours will almost certainly leave holes. The second pass costs
nothing when there are none, because gen_runner skips anything already logged true.

ORDER: the twelve biomes first, then the postgame sets. If this dies overnight the
main-game art is the part that exists.

    python design/art_pipeline/run_all.py
"""
import io, json, os, subprocess, sys, time

REPO = "C:/Claude/wildlands"
HERE = os.path.dirname(os.path.abspath(__file__))
PROMPTS = os.path.join(REPO, "design", "art_prompts")
RUNNER = os.path.join(HERE, "gen_runner.py")

ORDER = [
    "batch_deepsea",       # already running; listed so the second pass covers it
    "batch_polar",
    "batch_opensea",
    "batch_alpine",
    "batch_smallbiomes",
    "batch_farmland",
    "batch_kept_vigil",
    "batch_fossil",
    "batch_breeding",
]


def paths(name):
    return (os.path.join(PROMPTS, name + ".json"),
            os.path.join(PROMPTS, name + "_log.json"))


def outstanding(name):
    """How many species in this batch are not yet logged as done."""
    batch_p, log_p = paths(name)
    if not os.path.exists(batch_p):
        return 0
    batch = json.load(io.open(batch_p, encoding="utf-8"))
    log = {}
    if os.path.exists(log_p):
        try:
            log = json.load(io.open(log_p, encoding="utf-8"))
        except Exception:
            log = {}
    return sum(1 for k in batch if log.get(k) is not True)


def say(msg):
    print("[run_all] " + msg, flush=True)


def git(*args, quiet=True):
    env = dict(os.environ, GIT_TERMINAL_PROMPT="0")
    try:
        r = subprocess.run(["git"] + list(args), cwd=REPO, env=env,
                           capture_output=True, text=True, timeout=180)
        if not quiet and r.stdout.strip():
            say(r.stdout.strip()[:300])
        return r.returncode
    except Exception as e:
        say("git %s failed: %s" % (args[0], str(e)[:120]))
        return 1


def publish(name, n):
    """Ayr's standing permission: commit and push sprites live as they finish."""
    git("add", "art", "design/art_prompts", "design/art_pipeline/sheets")
    if git("diff", "--cached", "--quiet") == 0:
        return                                   # nothing new
    msg = ("Sprites: %s, %d rendered\n\n"
           "Written by design/art_pipeline/run_all.py as the batch finished.\n\n"
           "Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>" % (name[6:], n))
    git("commit", "-m", msg)
    if git("push", "origin", "Terrane_try1") == 0:
        say("pushed %s" % name)
    else:
        say("push failed for %s - the commit is local, next batch will retry" % name)


def wait_for_running_batch():
    """Do not compete with a runner that is already holding the card."""
    batch_p, log_p = paths("batch_deepsea")
    if not os.path.exists(log_p):
        return
    last, stable = -1, 0
    while outstanding("batch_deepsea") > 0:
        n = len(json.load(io.open(log_p, encoding="utf-8")))
        if n == last:
            stable += 1
            if stable >= 20:                     # ~20 min with no movement at all
                say("deep sea has not moved in 20 minutes; carrying on anyway")
                return
        else:
            say("waiting for deep sea: %d done" % n)
            last, stable = n, 0
        time.sleep(60)


def sheet(name):
    """A CONTACT SHEET FOR EVERY BATCH, ALWAYS.

    Ayr, 2026-08-29: "please create a sheet like that from now on for every batch
    you render. it makes chasing fixes much better."

    This is not a convenience. Reviewing sprites one at a time hides the two faults
    that matter most across a set - species that came out looking like each other
    when they must not, and colour drift, which only reads against neighbours. The
    deep sea review was too soft precisely because it was done without one in hand
    for long enough.
    """
    batch_p, _ = paths(name)
    try:
        subprocess.run([sys.executable,
                        os.path.join(HERE, "contact_sheet.py"), batch_p],
                       cwd=HERE, timeout=300)
        say("sheet built for %s" % name)
    except Exception as e:
        say("sheet failed for %s: %s" % (name, str(e)[:120]))


def run(name):
    batch_p, log_p = paths(name)
    todo = outstanding(name)
    if todo == 0:
        return 0
    say("%s: %d to render" % (name, todo))
    subprocess.run([sys.executable, RUNNER, batch_p, log_p], cwd=HERE)
    left = outstanding(name)
    done = todo - left
    say("%s: %d rendered, %d still outstanding" % (name, done, left))
    sheet(name)
    publish(name, done)
    return left


if __name__ == "__main__":
    t0 = time.time()
    wait_for_running_batch()

    say("PASS 1")
    for name in ORDER:
        run(name)

    # The card drops out. Rows submitted during an outage still render; the runner
    # has already given up on them. This is what recovers them.
    say("PASS 2 - picking up anything the first pass lost")
    for name in ORDER:
        run(name)

    say("=" * 60)
    total_left = 0
    for name in ORDER:
        left = outstanding(name)
        total_left += left
        batch_p, _ = paths(name)
        n = len(json.load(io.open(batch_p, encoding="utf-8"))) if os.path.exists(batch_p) else 0
        say("%-20s %3d/%-3d done%s" % (name[6:], n - left, n,
                                       "   <- %d STILL MISSING" % left if left else ""))
    say("finished in %.1f hours, %d species still missing" %
        ((time.time() - t0) / 3600.0, total_left))
