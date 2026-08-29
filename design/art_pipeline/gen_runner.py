import sys, os, json, random, time, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_steward as g
import postprocess as pp

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
    "branch", "branches", "perch", "perched", "perching", "web", "nest",
    "burrow", "log", "vine", "leaf", "leaves", "ledge", "coil", "coiled",
    "wrapped", "clinging", "cling", "clings", "gripping", "grips", "grip",
    "hanging from", "roost", "roosting",
)

# MATCH ON WHOLE WORDS, NOT SUBSTRINGS.
#
# This used to be `kw in desc.lower()`, which is why the memory records it as a
# trap. Checking the 140 new descriptions found six false positives and no true
# ones: "honest" contains nest, "loggerhead" contains log, "unbranched" contains
# branch, "burrowing" contains burrow, and "circling" contains cling. Every one
# would have quietly swapped in the looser composition and invited a prop into a
# sprite that wanted an empty frame.
#
# A word-boundary match is strictly narrower, so it cannot newly trigger on
# anything the old test passed. The gerunds that genuinely do imply a prop -
# perched, roosting, clinging - are listed explicitly above rather than caught
# by accident.
_PROP_RX = re.compile(r"(?<![a-z])(" + "|".join(
    kw.replace(" ", r"\s+") for kw in PROP_KEYWORDS) + r")(?![a-z])")

def pick_composition(desc):
    if _PROP_RX.search(desc.lower()):
        return PROP_COMPOSITION
    return COMPOSITION

SCRATCH = os.path.dirname(os.path.abspath(__file__))
RAWDIR = os.path.join(SCRATCH, "raw")
ARTDIR = "C:/Claude/wildlands/art"
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

if __name__ == "__main__":
    batch_path = sys.argv[1]
    log_path = sys.argv[2] if len(sys.argv) > 2 else batch_path.replace(".json", "_log.json")
    run_batch(batch_path, log_path)
