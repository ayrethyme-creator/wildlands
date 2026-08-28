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
PROP_PATTERNS = tuple(
    re.compile(r"\b" + re.escape(keyword.strip()) + r"\b")
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

def run_batch(batch_path, log_path):
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
