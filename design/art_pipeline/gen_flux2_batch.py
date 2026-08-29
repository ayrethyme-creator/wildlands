import json, time, uuid, urllib.request, random, os

HOST = "http://100.97.80.115:8188"
CLIP_NAME = "qwen_3_8b_fp8mixed.safetensors"

def build_workflow(pos_text, seed, w=1024, h=1024, steps=20, guidance=3.5):
    return {
        "1": {"class_type": "UnetLoaderGGUF", "inputs": {"unet_name": "flux-2-klein-9b-Q4_K_M.gguf"}},
        "2": {"class_type": "CLIPLoader", "inputs": {"clip_name": CLIP_NAME, "type": "flux2"}},
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
        "13": {"class_type": "SaveImage", "inputs": {"images": ["12", 0], "filename_prefix": "flux2_batch"}},
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
                return "ERROR:" + json.dumps(status)[:500]
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

STYLE = ("anime-influenced creature-collector game concept art, clean sharp linework, flat "
    "cel-shaded colour with only thin rim-light highlights on the edges, confident heroic "
    "energy, no chubby rounding, lean and powerful silhouette, not photorealistic, illustration")
COMPOSITION = "plain light gray seamless background, centered composition, full body visible, no text, no watermark, no logo"

ANIMALS = {
    "lion": "A male African lion (Panthera leo) with a full golden mane, walking, one paw raised, muscular build, caught mid-stride turning toward camera: head and chest angled toward the viewer while the body trails off to the side",
    "owl": "A snowy owl (Bubo scandiacus), body turned toward the viewer, wings partially spread mid-flap, white and black-barred plumage",
    "fox": "A red fox (Vulpes vulpes) caught mid-stride turning a corner, body diagonal to camera, head and chest facing toward viewer while hips and bushy tail trail off to the side, one front paw lifted",
    "clownfish": "A clownfish (Amphiprion ocellaris), orange with white bars edged in black, swimming, side profile",
    "littlebrownbat": "A little brown bat (Myotis lucifugus), small brown fuzzy body, wings spread wide in flight, mouth slightly open",
}

ORCA_SUBJECT = ("An orca (Orcinus orca), killer whale, glossy black body with sharp white eye "
    "patches, white chin and belly, pale grey saddle patch behind the dorsal fin, tall black "
    "dorsal fin, caught mid-motion turning toward camera: head angled toward the viewer while "
    "the body and tail flukes trail off to the side")
ORCA_STYLES = {
    "1_flatvector": "flat vector illustration, bold clean black outlines, flat cel-shaded color fills, minimal gradient shading, vibrant saturated colors, modern mobile game creature design, not photorealistic",
    "2_paintedguide": "digital painting, semi-realistic but stylized proportions, soft painterly brushwork, natural color palette, vintage nature field guide illustration style",
    "3_boldposter": "bold graphic illustration, limited flat color palette, strong clean silhouette, screen-print poster art style, thick outlines, high contrast, retro nature poster aesthetic, not photorealistic",
    "4_animegame": STYLE,
    "5_cutechibi": "cute stylized creature design, rounded simplified shapes, slightly oversized expressive eye, soft shading, friendly appealing character design, mobile game mascot style, not photorealistic",
}

if __name__ == "__main__":
    outdir = os.path.dirname(os.path.abspath(__file__))
    log = []
    for name, subj in ANIMALS.items():
        prompt = subj + ", " + STYLE + ", " + COMPOSITION
        seed = random.randint(1, 2**31 - 1)
        print("submitting animal:", name, "seed", seed)
        res = submit(prompt, seed)
        if "prompt_id" not in res:
            print("  SUBMIT FAILED:", json.dumps(res)[:300]); log.append((name, "SUBMIT_FAIL")); continue
        outpath = os.path.join(outdir, f"flux2_{name}.png")
        result = wait_and_fetch(res["prompt_id"], outpath, timeout=180)
        print("  result:", result if result is True else str(result)[:200])
        log.append((name, result))
    for name, style in ORCA_STYLES.items():
        prompt = ORCA_SUBJECT + ", " + style + ", " + COMPOSITION
        seed = random.randint(1, 2**31 - 1)
        print("submitting orca style:", name, "seed", seed)
        res = submit(prompt, seed)
        if "prompt_id" not in res:
            print("  SUBMIT FAILED:", json.dumps(res)[:300]); log.append((name, "SUBMIT_FAIL")); continue
        outpath = os.path.join(outdir, f"flux2_orca_{name}.png")
        result = wait_and_fetch(res["prompt_id"], outpath, timeout=180)
        print("  result:", result if result is True else str(result)[:200])
        log.append((name, result))
    print("\nSUMMARY:")
    for name, result in log:
        print(" ", name, "OK" if result is True else result)
