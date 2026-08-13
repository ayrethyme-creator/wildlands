import sys, os, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_flux2_batch as g

STYLE = ("digital painting, semi-realistic but stylized proportions, soft painterly "
    "brushwork, natural color palette, vintage nature field guide illustration style, "
    "not photorealistic")
COMPOSITION = g.COMPOSITION

ANIMALS = {
    "elephant": ("An African bush elephant (Loxodonta africana), large fan-shaped ears, a "
        "long grey trunk hanging down with the tip curled inward, two separate curved white "
        "tusks emerging from the sides of the mouth clearly below and apart from the trunk, "
        "trunk and tusks not touching, all four legs clearly separated, caught mid-stride "
        "turning toward camera: head and chest angled toward the viewer while the body and "
        "hindquarters trail off to the side"),
    "chameleon": ("A veiled chameleon (Chamaeleo calyptratus), tall casque on its head, vivid "
        "green and yellow banded pattern, curled prehensile tail, gripping a branch with "
        "independently swiveling eyes, body angled toward the viewer"),
    "flamingo": ("A greater flamingo (Phoenicopterus roseus), vivid pink plumage, long curved "
        "neck, black-tipped downturned bill, standing on one thin leg, wings partially "
        "raised, head turned toward the viewer"),
    "giraffe": ("A reticulated giraffe (Giraffa reticulata), tall long neck, distinctive "
        "brown polygon-patterned coat, short horn-like ossicones, walking with legs clearly "
        "separated, head turned toward the viewer"),
    "hammerhead": ("A great hammerhead shark (Sphyrna mokarran), distinctive wide flattened "
        "hammer-shaped head with eyes at each end, grey countershaded body, tall dorsal fin, "
        "swimming, body turned toward the viewer"),
}

if __name__ == "__main__":
    outdir = os.path.dirname(os.path.abspath(__file__))
    log = []
    for name, subj in ANIMALS.items():
        prompt = subj + ", " + STYLE + ", " + COMPOSITION
        seed = random.randint(1, 2**31 - 1)
        print("submitting:", name, "seed", seed)
        res = g.submit(prompt, seed)
        if "prompt_id" not in res:
            print("  SUBMIT FAILED:", res); log.append((name, "SUBMIT_FAIL")); continue
        outpath = os.path.join(outdir, f"flux2_paintedguide_{name}.png")
        result = g.wait_and_fetch(res["prompt_id"], outpath, timeout=180)
        print("  result:", result if result is True else str(result)[:200])
        log.append((name, result))
    print("\nSUMMARY:")
    for name, result in log:
        print(" ", name, "OK" if result is True else result)
