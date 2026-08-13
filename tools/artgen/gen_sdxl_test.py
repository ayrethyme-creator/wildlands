import json, time, uuid, urllib.request, random, os

HOST = "http://100.97.80.115:8188"

SUBJECT = ("An African bush elephant, large fan-shaped ears, a long grey trunk hanging down "
    "with the tip curled inward, two separate curved white tusks emerging from the sides of "
    "the mouth clearly below and apart from the trunk, trunk and tusks not touching or "
    "overlapping, caught mid-stride turning toward camera: head and chest angled toward the "
    "viewer while the body and hindquarters trail off to the side, exactly four legs clearly "
    "separated with visible gaps between each leg")

STYLE = ("anime-influenced creature-collector game concept art, clean sharp linework, flat "
    "cel-shaded colour with only thin rim-light highlights on the edges, confident heroic "
    "energy, no chubby rounding, lean and powerful silhouette")

COMPOSITION = "plain light gray seamless background, centered composition, full body visible"

NEGATIVE = ("extra limbs, missing limbs, fused legs, extra legs, merged legs, malformed "
    "anatomy, bad anatomy, deformed, disfigured, mutated, extra tusks, merged tusks, trunk "
    "merging with tusk, blurry, low quality, photorealistic, photo, 3d render, realistic")

def build_workflow(pos, neg, seed, w=1024, h=1024, steps=30, cfg=7.0):
    return {
        "4": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": "sd_xl_base_1.0.safetensors"}},
        "5": {"class_type": "EmptyLatentImage", "inputs": {"width": w, "height": h, "batch_size": 1}},
        "6": {"class_type": "CLIPTextEncode", "inputs": {"text": pos, "clip": ["4", 1]}},
        "7": {"class_type": "CLIPTextEncode", "inputs": {"text": neg, "clip": ["4", 1]}},
        "3": {"class_type": "KSampler", "inputs": {
            "seed": seed, "steps": steps, "cfg": cfg, "sampler_name": "euler",
            "scheduler": "karras", "denoise": 1.0,
            "model": ["4", 0], "positive": ["6", 0], "negative": ["7", 0], "latent_image": ["5", 0]}},
        "8": {"class_type": "VAEDecode", "inputs": {"samples": ["3", 0], "vae": ["4", 2]}},
        "9": {"class_type": "SaveImage", "inputs": {"images": ["8", 0], "filename_prefix": "sdxl_test"}},
    }

def submit(pos, neg, seed):
    wf = build_workflow(pos, neg, seed)
    payload = json.dumps({"prompt": wf, "client_id": str(uuid.uuid4())}).encode("utf-8")
    req = urllib.request.Request(HOST + "/prompt", data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

def wait_and_fetch(prompt_id, out_path, timeout=180):
    start = time.time()
    while time.time() - start < timeout:
        with urllib.request.urlopen(HOST + "/history/" + prompt_id, timeout=15) as r:
            hist = json.loads(r.read())
        if prompt_id in hist:
            outputs = hist[prompt_id].get("outputs", {})
            for node_id, out in outputs.items():
                for img in out.get("images", []):
                    fn, sub, typ = img["filename"], img.get("subfolder", ""), img.get("type", "output")
                    url = HOST + "/view?filename=" + urllib.request.quote(fn) + "&subfolder=" + urllib.request.quote(sub) + "&type=" + typ
                    with urllib.request.urlopen(url, timeout=30) as ir:
                        data = ir.read()
                    with open(out_path, "wb") as f:
                        f.write(data)
                    return True
        time.sleep(1)
    return False

if __name__ == "__main__":
    outdir = os.path.dirname(os.path.abspath(__file__))
    pos = SUBJECT + ", " + STYLE + ", " + COMPOSITION
    for i in range(2):
        seed = random.randint(1, 2**31 - 1)
        print("submitting sdxl elephant", i, "seed", seed)
        res = submit(pos, NEGATIVE, seed)
        pid = res["prompt_id"]
        outpath = os.path.join(outdir, f"sdxl_elephant_{i}.png")
        ok = wait_and_fetch(pid, outpath)
        print("done:" if ok else "TIMEOUT:", outpath)
