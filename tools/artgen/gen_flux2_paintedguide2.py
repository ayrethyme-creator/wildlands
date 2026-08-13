import sys, os, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_flux2_batch as g

STYLE = ("digital painting, semi-realistic but stylized proportions, soft painterly "
    "brushwork, natural color palette, vintage nature field guide illustration style, "
    "not photorealistic")
COMPOSITION = g.COMPOSITION

ANIMALS = {
    "cheetah": ("A cheetah (Acinonyx jubatus), slender lean build, small rounded head, "
        "solid black tear-mark stripes running from the inner eyes down to the mouth, "
        "tawny coat covered in small solid round black spots, deep chest, long thin tail "
        "with a black tip, caught mid-stride running, all four legs clearly separated, "
        "body turned toward the viewer"),
    "honeybadger": ("A honey badger (Mellivora capensis), stocky low-slung body, thick loose "
        "skin, broad flat head, small eyes, a wide silver-grey mantle covering the top of the "
        "head down the back contrasting sharply against solid black fur on the face, legs, "
        "and underside, short strong legs with long front claws, walking, all four legs "
        "clearly separated, body turned toward the viewer"),
    "ocelot": ("An ocelot (Leopardus pardalis), small wild cat, tawny-gold coat marked with "
        "elongated black-edged rosettes and stripes running along the body, white underside, "
        "short banded tail, alert round ears, crouched and prowling low, all four legs "
        "clearly separated, body turned toward the viewer"),
    "thylacine": ("A thylacine (Thylacinus cynocephalus), Tasmanian tiger, dog-like marsupial "
        "with a stiff kangaroo-like tail thick at the base, sandy-brown short coat, a row of "
        "dark brown stripes across the lower back and rump only, large jaw capable of a wide "
        "gape, standing on all four legs clearly separated, body turned toward the viewer"),
    "axolotl": ("An axolotl (Ambystoma mexicanum), aquatic salamander with a wide flat smiling "
        "mouth, small dark eyes, three feathery external gill stalks branching out from each "
        "side of the head, pale pink mottled skin, a long finned tail running down its back, "
        "four small stubby legs each clearly separated from the body, swimming, body turned "
        "toward the viewer"),
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
        outpath = os.path.join(outdir, f"flux2_paintedguide2_{name}.png")
        result = g.wait_and_fetch(res["prompt_id"], outpath, timeout=180)
        print("  result:", result if result is True else str(result)[:200])
        log.append((name, result))
    print("\nSUMMARY:")
    for name, result in log:
        print(" ", name, "OK" if result is True else result)
