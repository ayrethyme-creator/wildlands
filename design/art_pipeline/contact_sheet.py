"""Build a labelled contact sheet for one batch, so a whole set can be judged at once.

    python design/art_pipeline/contact_sheet.py design/art_prompts/batch_deepsea.json

Writes design/art_pipeline/sheets/<batch>.png.

WHY A SHEET AND NOT A FOLDER. Reviewing sprites one at a time hides the two faults
that matter most across a set: species that came out looking like each other when
they should not (four penguins), and colour drift, which only reads against
neighbours. Ayr's review rule is that every bad one gets listed with its fault
BEFORE anything is regenerated - a sheet is what makes that possible in one pass.

The background is mid-grey on purpose. Sprites are RGBA and a white sheet hides
pale animals while a black one hides dark ones; the deep sea has both.
"""
import io, json, os, sys
from PIL import Image, ImageDraw, ImageFont

REPO = "C:/Claude/wildlands"
ART = os.path.join(REPO, "art")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sheets")

CELL = 200          # sprite box
LABEL = 26          # text strip under each sprite
PAD = 8
BG = (108, 112, 118)
CELL_BG = (128, 132, 138)
MISSING_BG = (150, 70, 70)
TEXT = (255, 255, 255)


def font(size):
    for name in ("seguisb.ttf", "segoeui.ttf", "arial.ttf", "DejaVuSans.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            pass
    return ImageFont.load_default()


def build(batch_path):
    batch = json.load(io.open(batch_path, encoding="utf-8"))
    keys = sorted(batch)
    cols = min(7, max(1, int(len(keys) ** 0.5 + 0.999)))
    rows = (len(keys) + cols - 1) // cols

    cw, ch = CELL + PAD * 2, CELL + LABEL + PAD * 2
    title_h = 46
    sheet = Image.new("RGB", (cols * cw, rows * ch + title_h), BG)
    d = ImageDraw.Draw(sheet)

    name = os.path.basename(batch_path)[6:-5]
    missing = [k for k in keys if not os.path.exists(os.path.join(ART, k + ".png"))]
    d.text((PAD, 12), "%s  -  %d species, %d rendered, %d missing"
           % (name, len(keys), len(keys) - len(missing), len(missing)),
           fill=TEXT, font=font(22))

    fs = font(13)
    for i, k in enumerate(keys):
        cx, cy = (i % cols) * cw, title_h + (i // cols) * ch
        p = os.path.join(ART, k + ".png")
        box = (cx + PAD, cy + PAD, cx + PAD + CELL, cy + PAD + CELL)
        d.rectangle(box, fill=CELL_BG if os.path.exists(p) else MISSING_BG)
        if os.path.exists(p):
            im = Image.open(p).convert("RGBA")
            im.thumbnail((CELL - 8, CELL - 8), Image.LANCZOS)
            sheet.paste(im, (box[0] + (CELL - im.width) // 2,
                             box[1] + (CELL - im.height) // 2), im)
        label = k if len(k) <= 26 else k[:25] + "\u2026"
        d.text((cx + PAD + 2, cy + PAD + CELL + 4), label, fill=TEXT, font=fs)

    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, name + ".png")
    sheet.save(out)
    print("%s  %dx%d  %d rendered, %d missing"
          % (out, sheet.width, sheet.height, len(keys) - len(missing), len(missing)))
    if missing:
        print("  missing: " + ", ".join(missing))
    return out


if __name__ == "__main__":
    for p in sys.argv[1:]:
        build(p)
