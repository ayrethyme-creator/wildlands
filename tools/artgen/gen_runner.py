import sys, os, json, random, re, socket, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Both of these can legitimately be missing — gen_steward needs the Scrying
# Glass client, which lives outside this repo, and postprocess needs Pillow.
# Importing them at the top meant a machine without either died with a
# traceback before it could say which one it was short of. Guarded, so
# preflight() below can report the real problem in English.
try:
    import gen_steward as g
    STEWARD_ERR = None
except Exception as e:                      # noqa: BLE001 - any import failure
    g, STEWARD_ERR = None, e
try:
    import postprocess as pp
    PILLOW_ERR = None
except Exception as e:                      # noqa: BLE001
    pp, PILLOW_ERR = None, e

STYLE = ("anime-influenced creature-collector game concept art, clean sharp linework, flat "
    "cel-shaded colour with only thin rim-light highlights on the edges, confident heroic "
    "energy, no chubby rounding, lean and powerful silhouette, not photorealistic, illustration")
COMPOSITION = ("plain light gray seamless background, no ground, no shadow, no rocks, no props, "
    "centered composition, full body visible, no text, no watermark, no logo")

# Some poses genuinely need a prop to read correctly (an animal "gripping a
# branch" with no branch just looks broken). For those, drop the "no rocks,
# no props" clause but keep the "no shadow" / no-extra-ground-clutter intent.
# Detected by keyword against the per-species description text so we don't
# have to hand-curate every one of ~900 entries.
PROP_COMPOSITION = ("plain light gray seamless background, no ground plane, no shadow, "
    "only the minimal prop needed for the pose, centered composition, full body visible, "
    "no text, no watermark, no logo")
PROP_KEYWORDS = (
    "branch", "perch", "web", "nest", "burrow", "log", "vine", "leaf",
    "ledge", "coil", "coiled", "wrapped", "clinging", "cling", "gripping",
    "grips", "grip ", "hanging from", "roost",
)

# Match on whole words, not substrings.
#
# A plain `in` test reads "webbed feet" as the keyword "web" and hands the
# animal the prop composition, which drops the "no rocks, no props" clause it
# should have kept. That caught every animal with webbed feet - otter, duck,
# platypus, blue-footed booby, turtle, fishing cat, goliath frog - plus
# "rooster" on "roost", "loggerhead" on "log", and "branching" on "branch":
# ten sprites already generated with the looser composition by accident.
#
# Common inflections still count, because those are genuine prop poses:
# perched, gripping, nesting, roosting, clinging all want the thing they are
# on to be in frame.
_PROP_RE = re.compile(
    r"\b(?:" + "|".join(re.escape(k.strip()) for k in PROP_KEYWORDS if k.strip())
    + r")(?:s|es|ed|ing)?\b")


def pick_composition(desc):
    if _PROP_RE.search(desc.lower()):
        return PROP_COMPOSITION
    return COMPOSITION

SCRATCH = os.path.dirname(os.path.abspath(__file__))
RAWDIR = os.path.join(SCRATCH, "raw")
# Where finished sprites land. The hard-coded Windows path is kept as the
# default so nothing changes for the machine that has drawn every sprite so
# far, but it can now be pointed at any checkout — WILDLANDS_ART=../../art
# writes straight into the repo this file is committed in.
ARTDIR = os.environ.get("WILDLANDS_ART") or "C:/Claude/wildlands/art"
os.makedirs(RAWDIR, exist_ok=True)


# ---------------------------------------------------------------- preflight
# A batch used to fail by hanging. The GPU lives behind Tailscale, so a machine
# without a route to it does not get a refusal — the connection is blackholed
# and the run sits there until the 1800s fetch timeout, once per species. That
# is half a day of nothing before anybody learns the host was unreachable.
#
# This checks the four things a run actually needs and says which are missing,
# in a second, before any GPU time is asked for.
def preflight(verbose=True):
    problems = []
    host, port = "100.97.80.115", 8188
    if hasattr(g, "_base"):
        try:
            base = g._base() or ""
            if "://" in base:
                hp = base.split("://", 1)[1].split("/", 1)[0]
                host = hp.split(":")[0]
                port = int(hp.split(":")[1]) if ":" in hp else 80
        except Exception:                    # noqa: BLE001 - fall back to the default
            pass

    if STEWARD_ERR is not None:
        problems.append(
            "Scrying Glass client not importable: %s\n"
            "      gen_steward imports halo_scrying_client from %s.\n"
            "      That file is not in this repo and only exists on the machine\n"
            "      it was set up on. Without it there is no permitted way to submit;\n"
            "      COMFYUI.md forbids posting to port %d directly."
            % (STEWARD_ERR, r"C:\Users\ayr\.claude", port))

    try:
        with socket.create_connection((host, port), timeout=4):
            pass
    except Exception as e:                   # noqa: BLE001
        problems.append(
            "No route to the GPU host %s:%d (%s).\n"
            "      That address is on the household Tailscale network. A machine\n"
            "      that is not on that tailnet gets no answer at all rather than a\n"
            "      refusal, which is why an unprepared run hangs instead of failing."
            % (host, port, type(e).__name__))

    if PILLOW_ERR is not None:
        problems.append("Pillow missing, so background removal cannot run: %s\n"
                        "      pip install pillow" % PILLOW_ERR)

    try:
        os.makedirs(ARTDIR, exist_ok=True)
    except Exception as e:                   # noqa: BLE001
        problems.append("Cannot write sprites to ARTDIR %s (%s).\n"
                        "      Set WILDLANDS_ART to a directory that exists."
                        % (ARTDIR, type(e).__name__))

    if verbose:
        if problems:
            print("PREFLIGHT FAILED — this machine cannot run a batch:\n")
            for i, p in enumerate(problems, 1):
                print("  %d. %s\n" % (i, p))
            print("  Sprites would be written to: %s" % ARTDIR)
        else:
            print("preflight ok — steward reachable, Pillow present, writing to %s" % ARTDIR)
    return problems

# No host_up / wait_for_slot / wait_for_host here any more. Those polled
# ComfyUI's port directly and queued around it, which COMFYUI.md forbids:
# Scrying Glass already saves the request, waits for the steward to admit
# it, and retries. A second watchdog just competes with the first.

def gen_one(dexKey, desc, attempt=0):
    if g is None:
        return "NO_STEWARD:" + str(STEWARD_ERR)[:150]
    if pp is None:
        return "NO_PILLOW:" + str(PILLOW_ERR)[:150]
    prompt = desc + ", " + STYLE + ", " + pick_composition(desc)
    seed = random.randint(1, 2**31 - 1)
    # Every network call here can raise rather than return - a socket timeout
    # inside submit() is what killed the mythic run outright. Nothing below is
    # allowed to escape: a failed species is logged and retried, never fatal.
    try:
        res = g.submit(prompt, seed, w=1024, h=1024, steps=20)
    except Exception as e:
        return "SUBMIT_ERR:" + str(e)[:150]
    if "prompt_id" not in res:
        return "SUBMIT_FAIL:" + json.dumps(res)[:200]
    raw_path = os.path.join(RAWDIR, f"{dexKey}_{attempt}.png")
    # Generous, because the steward may hold the request while somebody else has
    # the card. Giving up early does not cancel anything - the job still runs -
    # so a short timeout only loses track of work that is going to happen anyway.
    try:
        result = g.wait_and_fetch(res["prompt_id"], raw_path, timeout=1800)
    except Exception as e:
        return "FETCH_ERR:" + str(e)[:150]
    if result is not True:
        return str(result)[:200]
    try:
        pp.remove_bg_and_crop(raw_path, os.path.join(ARTDIR, f"{dexKey}.png"))
    except Exception as e:
        return "POSTPROCESS_FAIL:" + str(e)[:200]
    return True

def run_batch(batch_path, log_path):
    # Never start a run that cannot possibly finish. Every species would fail
    # identically and the log would fill with the same error 44 times.
    if preflight():
        print("\nRefusing to start. Nothing has been submitted and no GPU time used.")
        return {}
    batch = json.load(open(batch_path, encoding="utf-8"))
    log = {}
    if os.path.exists(log_path):
        log = json.load(open(log_path, encoding="utf-8"))
    for dexKey, desc in batch.items():
        if log.get(dexKey) is True:
            continue
        t0 = time.time()
        result = gen_one(dexKey, desc, attempt=0)
        tries = 1
        while result is not True and tries <= 2:
            print(f"  {dexKey}: attempt{tries} failed ({str(result)[:100]}), retrying...")
            result = gen_one(dexKey, desc, attempt=tries)
            tries += 1
        elapsed = time.time() - t0
        log[dexKey] = result if result is True else str(result)
        status = "OK" if result is True else "FAIL:" + str(result)[:100]
        print(f"{dexKey}: {status} ({elapsed:.1f}s)")
        with open(log_path, "w", encoding="utf-8") as f:
            json.dump(log, f, indent=1)
    n_ok = sum(1 for v in log.values() if v is True)
    n_fail = len(log) - n_ok
    print(f"\nBATCH DONE: {n_ok} ok, {n_fail} failed/skipped out of {len(log)}")
    return log

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] in ("--check", "-c"):
        sys.exit(1 if preflight() else 0)
    batch_path = sys.argv[1]
    log_path = sys.argv[2] if len(sys.argv) > 2 else batch_path.replace(".json", "_log.json")
    run_batch(batch_path, log_path)
