import json, time, uuid, urllib.request, random, os

HOST = "http://100.97.80.115:8188"

def build_workflow(pos_text, seed, w=1024, h=1024, steps=20, guidance=3.5):
    return {
        "1": {"class_type": "UnetLoaderGGUF", "inputs": {"unet_name": "flux-2-klein-9b-Q4_K_M.gguf"}},
        "2": {"class_type": "CLIPLoader", "inputs": {"clip_name": "qwen_3_4b.safetensors", "type": "flux2"}},
        "3": {"class_type": "VAELoader", "inputs": {"vae_name": "flux2-vae.safetensors"}},
        "4": {"class_type": "CLIPTextEncode", "inputs": {"text": pos_text, "clip": ["2", 0]}},
        "5": {"class_type": "FluxGuidance", "inputs": {"conditioning": ["4", 0], "guidance": guidance}},
        "6": {"class_type": "EmptyFlux2LatentImage", "inputs": {"width": w, "height": h, "batch_size": 1}},
        "7": {"class_type": "Flux2Scheduler", "inputs": {"steps": steps, "width": w, "height": h}},
        "8": {"class_type": "KSamplerSelect", "inputs": {"sampler_name": "euler"}},
        "9": {"class_type": "BasicGuider", "inputs": {"model": ["1", 0], "conditioning": ["5", 0]}},
        "10": {"class_type": "RandomNoise", "inputs": {"noise_seed": seed}},
        "11": {"class_type": "SamplerCustomAdvanced", "inputs": {
            "noise": ["10", 0], "guider": ["9", 0], "sampler": ["8", 0],
            "sigmas": ["7", 0], "latent_image": ["6", 0]}},
        "12": {"class_type": "VAEDecode", "inputs": {"samples": ["11", 0], "vae": ["3", 0]}},
        "13": {"class_type": "SaveImage", "inputs": {"images": ["12", 0], "filename_prefix": "flux2_test"}},
    }

def submit(pos_text, seed, **kw):
    wf = build_workflow(pos_text, seed, **kw)
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
            entry = hist[prompt_id]
            status = entry.get("status", {})
            if status.get("status_str") == "error":
                return "ERROR:" + json.dumps(status)[:800]
            outputs = entry.get("outputs", {})
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
    return "TIMEOUT"

if __name__ == "__main__":
    outdir = os.path.dirname(os.path.abspath(__file__))
    prompt = ("A red fox (Vulpes vulpes), anime-influenced creature-collector game concept art, "
        "clean sharp linework, flat cel-shaded colour with only thin rim-light highlights, "
        "caught mid-stride turning toward camera: head and chest angled toward the viewer while "
        "the body and tail trail off to the side, plain light gray seamless background, "
        "centered composition, full body visible")
    seed = random.randint(1, 2**31 - 1)
    print("submitting validation test, seed", seed)
    res = submit(prompt, seed)
    print("submit response:", json.dumps(res)[:500])
    if "prompt_id" not in res:
        print("SUBMIT FAILED - see response above")
    else:
        outpath = os.path.join(outdir, "flux2_validation_fox.png")
        result = wait_and_fetch(res["prompt_id"], outpath, timeout=180)
        print("result:", result)
