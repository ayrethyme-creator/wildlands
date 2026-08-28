import sys, os, json, random, time, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_steward as g

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
# Inflect only the keywords that still name a thing the animal is on when
# inflected. "perched on a rocky outcrop", "roosting in a hollow" and "nesting
# on a ledge" all want that thing in frame, and a bare \bperch\b misses every
# one of them - 28 species across the roster.
#
# The rest must stay exact. "branching antlers" on six deer, "a long coiling
# body" on seven serpents and "a great burrowing rodent" describe the animal
# itself, not a prop; and ratatoskr's description ends "no tree, no trunk, no
# branches", where matching "branches" hands it the one composition that
# permits the thing it is asking not to have.
INFLECTED = {"perch", "roost", "nest"}
PROP_PATTERNS = tuple(
    re.compile(r"\b" + re.escape(keyword.strip())
               + (r"(?:s|es|ed|ing)?\b" if keyword.strip() in INFLECTED else r"\b"))
    for keyword in PROP_KEYWORDS
)

def pick_composition(desc):
    d = desc.lower()
    if any(pattern.search(d) for pattern in PROP_PATTERNS):
        return PROP_COMPOSITION
    return COMPOSITION

SCRATCH = os.path.dirname(os.path.abspath(__file__))
RAWDIR = os.path.join(SCRATCH, "raw")
REPO_ROOT = os.path.dirname(os.path.dirname(SCRATCH))
ARTDIR = os.environ.get("WILDLANDS_ART", os.path.join(REPO_ROOT, "art"))
os.makedirs(RAWDIR, exist_ok=True)
os.makedirs(ARTDIR, exist_ok=True)

# No host_up / wait_for_slot / wait_for_host here any more. Those polled
# ComfyUI's port directly and queued around it, which COMFYUI.md forbids:
# Scrying Glass already saves the request, waits for the steward to admit
# it, and retries. A second watchdog just competes with the first.

def gen_one(dexKey, desc, attempt=0):
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
        import postprocess as pp
        pp.remove_bg_and_crop(raw_path, os.path.join(ARTDIR, f"{dexKey}.png"))
    except Exception as e:
        return "POSTPROCESS_FAIL:" + str(e)[:200]
    return True

# The log only gains an entry when a species finishes, and a species can wait
# half an hour for the steward to admit it. Watching the log therefore shows
# nothing at all through the exact stretch you most want to know the run is
# alive. This writes what it is doing right now, before it starts waiting.
def _status(path, **fields):
    if not path:
        return
    try:
        fields["at"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        with open(path, "w", encoding="utf-8") as f:
            json.dump(fields, f, indent=1)
    except Exception:                        # noqa: BLE001 - never kill a run over this
        pass


def run_batch(batch_path, log_path):
    status_path = (log_path[: -len("_log.json")] + "_status.json"
                   if log_path.endswith("_log.json") else log_path + ".status")
    batch = json.load(open(batch_path, encoding="utf-8"))
    log = {}
    if os.path.exists(log_path):
        log = json.load(open(log_path, encoding="utf-8"))
    keys = list(batch)
    for i, dexKey in enumerate(keys, 1):
        desc = batch[dexKey]
        if log.get(dexKey) is True:
            continue
        t0 = time.time()
        _status(status_path, species=dexKey, index=i, of=len(keys),
                attempt=1, state="waiting for the card",
                done=sum(1 for v in log.values() if v is True))
        print(f"{dexKey}: submitted ({i}/{len(keys)})", flush=True)
        result = gen_one(dexKey, desc, attempt=0)
        tries = 1
        # A TIMEOUT is not a bad request - it means the steward has not admitted
        # the job yet. Resubmitting only puts a second copy behind the first, so
        # three attempts turn one busy card into ninety minutes on one species.
        while result is not True and tries <= 2 and not str(result).startswith("TIMEOUT"):
            print(f"  {dexKey}: attempt{tries} failed ({str(result)[:100]}), retrying...", flush=True)
            _status(status_path, species=dexKey, index=i, of=len(keys),
                    attempt=tries + 1, state="retrying after " + str(result)[:60],
                    done=sum(1 for v in log.values() if v is True))
            result = gen_one(dexKey, desc, attempt=tries)
            tries += 1
        elapsed = time.time() - t0
        log[dexKey] = result if result is True else str(result)
        status = "OK" if result is True else "FAIL:" + str(result)[:100]
        print(f"{dexKey}: {status} ({elapsed:.1f}s)", flush=True)
        with open(log_path, "w", encoding="utf-8") as f:
            json.dump(log, f, indent=1)
    _status(status_path, state="finished", of=len(keys),
            done=sum(1 for v in log.values() if v is True))
    n_ok = sum(1 for v in log.values() if v is True)
    n_fail = len(log) - n_ok
    print(f"\nBATCH DONE: {n_ok} ok, {n_fail} failed/skipped out of {len(log)}")
    return log

def check_ready():
    checks = {}
    try:
        import PIL  # noqa: F401
        checks["pillow"] = True
    except Exception as e:
        checks["pillow"] = False
        checks["pillow_error"] = str(e)
    try:
        health = g.sg._request(g._base(), "GET", "/healthz", timeout=20.0)
        checks["scrying_glass"] = bool(isinstance(health, dict) and health.get("ok"))
        if not checks["scrying_glass"]:
            checks["scrying_glass_response"] = health
    except Exception as e:
        checks["scrying_glass"] = False
        checks["scrying_glass_error"] = str(e)
    try:
        os.makedirs(ARTDIR, exist_ok=True)
        checks["output_directory"] = os.path.isdir(ARTDIR) and os.access(ARTDIR, os.W_OK)
        checks["output_path"] = ARTDIR
    except Exception as e:
        checks["output_directory"] = False
        checks["output_error"] = str(e)
    ok = bool(checks.get("pillow") and checks.get("scrying_glass") and checks.get("output_directory"))
    checks["ok"] = ok
    print(json.dumps(checks, indent=2, sort_keys=True))
    return ok


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "--check":
        raise SystemExit(0 if check_ready() else 1)
    if len(sys.argv) < 2:
        raise SystemExit("usage: python gen_runner.py --check | BATCH.json [LOG.json]")
    batch_path = sys.argv[1]
    log_path = sys.argv[2] if len(sys.argv) > 2 else batch_path.replace(".json", "_log.json")
    run_batch(batch_path, log_path)
