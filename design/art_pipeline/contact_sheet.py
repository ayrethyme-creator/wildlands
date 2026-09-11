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

# Ayr, 2026-09-11, of the bigger sheets: "I still can't see detail."
#
# They were right and the sheet was not the problem. A SHIPPED SPRITE IS
# 256x256 - postprocess crops and resizes every render down to that - so a 340px
# cell was upscaling, and no sheet built from art/ can ever show more detail
# than a 256px source has. Making the cells larger only made the blur larger.
#
# The raw renders are 1024x1024 and they are kept. For REVIEW, read those: it is
# sixteen times the pixels, and a fault visible at 1024 is a fault that was
# rendered rather than one introduced by the resize.
#
#     SHEET_SRC=design/art_pipeline/raw SHEET_CELL=460 SHEET_COLS=5 \n#         python contact_sheet.py <batch.json>
#
# raw/ names files <key>_0.png, so the lookup below tries the plain name first
# and then that suffix. Default is still art/, because a sheet of what actually
# ships is the right thing to look at when the question is how the game looks.
SRC = os.environ.get("SHEET_SRC") or ART
if not os.path.isabs(SRC):
    SRC = os.path.join(REPO, SRC)


def sprite_path(k):
    """The file for this key, tolerating raw/'s <key>_0.png naming."""
    for name in (k + ".png", k + "_0.png"):
        p = os.path.join(SRC, name)
        if os.path.exists(p):
            return p
    return None


OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sheets")

# Ayr, 2026-09-11, of the first 100-sprite sheet: "the resolution is hard to
# see. make 2 sheets."
#
# Splitting the batch alone does not fix that, and it is worth writing down why:
# the column count below is derived from how many sprites there are, but it is
# CAPPED AT SEVEN. A hundred sprites and fifty sprites both come out at seven
# across, so half the batch on its own sheet is the same 200px cell, just less
# scrolling. The size of a sprite on the sheet is set by CELL and by nothing
# else.
#
# So both are overridable now. SHEET_CELL makes the box bigger; SHEET_COLS makes
# the grid narrower, which is what actually helps on a phone - fewer, larger
# columns beat more, smaller ones every time for spotting a wrong limb.
#
#     SHEET_CELL=340 SHEET_COLS=5 python contact_sheet.py <batch.json>
#
# Defaults unchanged, so every sheet built before today still rebuilds
# identically.
CELL = int(os.environ.get("SHEET_CELL", 200))          # sprite box
LABEL = 26          # text strip under each sprite; grown with the font below
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
    cols = int(os.environ.get("SHEET_COLS", 0)) or min(7, max(1, int(len(keys) ** 0.5 + 0.999)))
    rows = (len(keys) + cols - 1) // cols

    lab = max(LABEL, CELL // 16 + 14)
    cw, ch = CELL + PAD * 2, CELL + lab + PAD * 2
    title_h = 46
    sheet = Image.new("RGB", (cols * cw, rows * ch + title_h), BG)
    d = ImageDraw.Draw(sheet)

    name = os.path.basename(batch_path)[6:-5]
    missing = [k for k in keys if not sprite_path(k)]
    d.text((PAD, 12), "%s  -  %d species, %d rendered, %d missing"
           % (name, len(keys), len(keys) - len(missing), len(missing)),
           fill=TEXT, font=font(22))

    # Ayr, 2026-09-11: "I can't read their titles."
    #
    # This was hardcoded at 13px, which was legible at the 200px default and
    # became a rounding error the moment the cell grew - the label shrank
    # relative to everything around it exactly as the sprites got bigger. It
    # scales with the cell now, with 13 as the floor so the old sheets are
    # unchanged.
    fs = font(max(13, CELL // 16))
    for i, k in enumerate(keys):
        cx, cy = (i % cols) * cw, title_h + (i // cols) * ch
        p = sprite_path(k)
        box = (cx + PAD, cy + PAD, cx + PAD + CELL, cy + PAD + CELL)
        d.rectangle(box, fill=CELL_BG if p else MISSING_BG)
        if p:
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
