import json, sys, time, uuid, urllib.request, random, os

HOST = "http://100.97.80.115:8188"
STYLE = ("professional wildlife photography style illustration, full body visible from nose "
         "to tail, caught mid-motion turning toward camera: head and chest angled toward the "
         "viewer while the hindquarters and tail trail off to the side, natural anatomy, "
         "realistic fur/feather/scale detail, soft natural studio lighting, plain light "
         "gray seamless background, sharp focus, high detail, centered composition")

def build_workflow(prompt_text, seed, w=1024, h=1024, steps=4):
    return {
        "4": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": "flux1-schnell-fp8.safetensors"}},
        "5": {"class_type": "EmptySD3LatentImage", "inputs": {"width": w, "height": h, "batch_size": 1}},
        "6": {"class_type": "CLIPTextEncode", "inputs": {"text": prompt_text, "clip": ["4", 1]}},
        "7": {"class_type": "CLIPTextEncode", "inputs": {"text": "", "clip": ["4", 1]}},
        "3": {"class_type": "KSampler", "inputs": {
            "seed": seed, "steps": steps, "cfg": 1.0, "sampler_name": "euler",
            "scheduler": "simple", "denoise": 1.0,
            "model": ["4", 0], "positive": ["6", 0], "negative": ["7", 0], "latent_image": ["5", 0]}},
        "8": {"class_type": "VAEDecode", "inputs": {"samples": ["3", 0], "vae": ["4", 2]}},
        "9": {"class_type": "SaveImage", "inputs": {"images": ["8", 0], "filename_prefix": "wildlands_sample"}},
    }

def submit(prompt_text, seed):
    wf = build_workflow(prompt_text, seed)
    payload = json.dumps({"prompt": wf, "client_id": str(uuid.uuid4())}).encode("utf-8")
    req = urllib.request.Request(HOST + "/prompt", data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

def wait_and_fetch(prompt_id, out_path, timeout=120):
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
    name, subject = sys.argv[1], sys.argv[2]
    seed = random.randint(1, 2**31 - 1)
    full_prompt = subject + ", " + STYLE
    print("submitting:", name, "seed", seed)
    res = submit(full_prompt, seed)
    pid = res["prompt_id"]
    outdir = os.path.dirname(os.path.abspath(__file__))
    outpath = os.path.join(outdir, "sample_" + name + ".png")
    ok = wait_and_fetch(pid, outpath)
    print("done:" if ok else "TIMEOUT:", outpath)
