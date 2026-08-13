from PIL import Image, ImageChops, ImageDraw
import os

SCRATCH = os.path.dirname(os.path.abspath(__file__))
SIZES = [96, 48, 32, 20]  # matches real in-game Sprite usage: battle view, default, menu row, tiny box grid

def autocrop(im, pad=24):
    """Trim the near-uniform light-gray background, leaving a small pad."""
    bg = Image.new(im.mode, im.size, im.getpixel((2, 2)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -20)  # threshold out AA/noise
    bbox = diff.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    l = max(0, l - pad); t = max(0, t - pad)
    r = min(im.width, r + pad); b = min(im.height, b + pad)
    return im.crop((l, t, r, b))

def fit_square(im, size):
    """Resize to fit within size x size, keep aspect, centered on a checkerboard (stand-in for transparency)."""
    im = im.copy()
    im.thumbnail((size, size), Image.LANCZOS)
    board = Image.new("RGB", (size, size), (255, 255, 255))
    cell = max(2, size // 8)
    for y in range(0, size, cell):
        for x in range(0, size, cell):
            if (x // cell + y // cell) % 2 == 0:
                ImageDraw.Draw(board).rectangle([x, y, x + cell, y + cell], fill=(222, 222, 222))
    board.paste(im, ((size - im.width) // 2, (size - im.height) // 2))
    return board

def build_row(src_path, label):
    im = Image.open(src_path).convert("RGB")
    cropped = autocrop(im)
    thumbs = [fit_square(cropped, s) for s in SIZES]
    row_h = max(SIZES) + 40
    row = Image.new("RGB", (140 + sum(s + 16 for s in SIZES), row_h), (30, 28, 24))
    d = ImageDraw.Draw(row)
    d.text((10, row_h // 2 - 6), label, fill=(240, 230, 210))
    x = 140
    for s, t in zip(SIZES, thumbs):
        y = (row_h - s) // 2
        row.paste(t, (x, y))
        d.text((x, y + s + 2), f"{s}px", fill=(200, 190, 170))
        x += s + 16
    return row

if __name__ == "__main__":
    rows = [
        build_row(os.path.join(SCRATCH, "style8_spectacledflyingfox.png"), "Flying Fox"),
        build_row(os.path.join(SCRATCH, "style8_chameleon.png"), "Chameleon"),
    ]
    w = max(r.width for r in rows)
    h = sum(r.height for r in rows) + 10
    sheet = Image.new("RGB", (w, h), (20, 18, 15))
    y = 0
    for r in rows:
        sheet.paste(r, (0, y))
        y += r.height + 10
    out = os.path.join(SCRATCH, "sprite_scale_preview.png")
    sheet.save(out)
    print("saved:", out)
