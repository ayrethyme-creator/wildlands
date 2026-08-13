import json, sys, time, uuid, urllib.request, random, os

HOST = "http://100.97.80.115:8188"

SUBJECT = ("An orca (Orcinus orca), killer whale, glossy black body with sharp white eye "
           "patches, white chin and belly, pale grey saddle patch behind the dorsal fin, "
           "tall black dorsal fin, caught mid-motion turning toward camera: head angled "
           "toward the viewer while the body and tail flukes trail off to the side")

COMPOSITION = "plain light gray seamless background, centered composition, full body visible"

STYLES = {
    "1_flatvector": ("flat vector illustration, bold clean black outlines, flat cel-shaded "
        "color fills, minimal gradient shading, simplified geometric shapes, vibrant "
        "saturated colors, modern mobile game creature design"),
    "2_paintedguide": ("digital painting, semi-realistic but stylized proportions, soft "
        "painterly brushwork, natural color palette, vintage nature field guide "
        "illustration style"),
    "3_boldposter": ("bold graphic illustration, limited flat color palette, strong clean "
        "silhouette, screen-print poster art style, thick outlines, high contrast, retro "
        "nature poster aesthetic"),
    "4_animegame": ("anime-influenced creature-collector game concept art, clean sharp "
        "linework, vibrant cel-shaded colors, glossy highlights, polished monster-design "
        "style"),
    "5_cutechibi": ("cute stylized creature design, rounded simplified shapes, slightly "
        "oversized expressive eye, soft shading, friendly appealing character design, "
        "mobile game mascot style"),
}

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
        "9": {"class_type": "SaveImage", "inputs": {"images": ["8", 0], "filename_prefix": "orca_style"}},
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
    outdir = os.path.dirname(os.path.abspath(__file__))
    for name, style in STYLES.items():
        full_prompt = SUBJECT + ", " + style + ", " + COMPOSITION
        seed = random.randint(1, 2**31 - 1)
        print("submitting:", name, "seed", seed)
        res = submit(full_prompt, seed)
        pid = res["prompt_id"]
        outpath = os.path.join(outdir, "orca_" + name + ".png")
        ok = wait_and_fetch(pid, outpath)
        print("done:" if ok else "TIMEOUT:", outpath)
