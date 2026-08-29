from PIL import Image
from collections import deque
import sys

def remove_bg_and_crop(in_path, out_path, size=256, tol=20, pocket_tol=10, min_pocket_px=150):
    img = Image.open(in_path).convert("RGBA")
    w, h = img.size
    px = img.load()

    bg = px[0, 0][:3]

    def close(c1, c2, t):
        return all(abs(a - b) <= t for a, b in zip(c1, c2))

    visited = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            q.append((x, y))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        idx = y * w + x
        if visited[idx]:
            continue
        visited[idx] = 1
        r, g, b, a = px[x, y]
        if close((r, g, b), bg, tol):
            px[x, y] = (r, g, b, 0)
            q.append((x + 1, y)); q.append((x - 1, y))
            q.append((x, y + 1)); q.append((x, y - 1))

    # Second pass: catch background-colored pockets that got fully enclosed
    # by the subject (e.g. the gap between an animal's legs, or between a
    # scorpion's claws) and so were never reached by the edge-flood above
    # because they aren't 4-connected to the border through a near-bg path.
    #
    # We can't just clear every remaining near-bg-colored pixel regardless
    # of connectivity with a loose tolerance (tried that first) -- light fur
    # (e.g. a colobus's white mantle) and eye catchlights are frequently
    # close-ish to a light-gray background color too, and indiscriminately
    # clearing those punches visible holes in the subject. Two things tame
    # that: (1) pocket_tol is much tighter than the pass-1 tol -- genuine
    # unpainted background pixels match the sampled bg color almost exactly
    # (within ~5), while painted fur/highlights that are merely "close" to
    # bg in a loose sense usually deviate by more than that on inspection;
    # (2) a minimum component size still filters out single-pixel
    # coincidental matches. Verified against sample raw generations: real
    # enclosed pockets (leg gaps, claw gaps, chin/branch gaps) survive this
    # filter at 150-8800px, while a colobus's white fur mantle -- the worst
    # false-positive case found -- drops to isolated <20px specks and is
    # correctly left alone.
    visited2 = bytearray(w * h)
    for y0 in range(h):
        for x0 in range(w):
            idx0 = y0 * w + x0
            if visited2[idx0]:
                continue
            r, g, b, a = px[x0, y0]
            if a == 0 or not close((r, g, b), bg, pocket_tol):
                visited2[idx0] = 1
                continue
            comp = []
            touches_edge = False
            cq = deque([(x0, y0)])
            visited2[idx0] = 1
            while cq:
                x, y = cq.popleft()
                comp.append((x, y))
                if x == 0 or y == 0 or x == w - 1 or y == h - 1:
                    touches_edge = True
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        nidx = ny * w + nx
                        if not visited2[nidx]:
                            rr, gg, bb, aa = px[nx, ny]
                            if aa != 0 and close((rr, gg, bb), bg, pocket_tol):
                                visited2[nidx] = 1
                                cq.append((nx, ny))
            # touches_edge shouldn't happen post-pass-1, but guard anyway;
            # only clear sizable enclosed pockets.
            if not touches_edge and len(comp) >= min_pocket_px:
                for (x, y) in comp:
                    r, g, b, a = px[x, y]
                    px[x, y] = (r, g, b, 0)

    img = strip_shadow(img)

    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    iw, ih = img.size
    scale = (size - 16) / max(iw, ih)
    nw, nh = max(1, int(iw * scale)), max(1, int(ih * scale))
    img = img.resize((nw, nh), Image.LANCZOS)

    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(img, ((size - nw) // 2, (size - nh) // 2), img)
    canvas.save(out_path, optimize=True)
    return out_path

def strip_shadow(img, lum=118, neutral=26, max_loss=0.35):
    """Erase the soft grey shadow the model puts under almost every animal.

    "no shadow" is in every prompt and is ignored constantly. The shadow is a
    pale neutral grey and, unlike the animal, it has no outline around it - the
    style draws clean sharp linework on the creature and nothing on the shadow.
    So flooding inward from the transparent border and eating any pale, nearly
    colourless pixel consumes the whole shadow and then stops dead at the
    animal's own outline.

    That outline is what makes this safe on a white animal. A polar bear cub or
    a snowy owl is as pale as its shadow, and both survive untouched because the
    flood cannot cross their linework.

    But it is only safe while the outline is closed. A pale animal whose line
    has a gap in it lets the flood inside and loses its whole body: the poodle
    went to 14% of itself, the arctic fox to 20%, before this guard existed. So
    the result is measured, and if more than `max_loss` of the animal has gone
    the strip is abandoned and the original returned unchanged. Keeping a shadow
    is much cheaper than erasing an animal.
    """
    src = img.convert("RGBA")
    img = src.copy()
    before = sum(1 for p in img.getdata() if p[3] > 40)
    w, h = img.size
    px = img.load()
    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if px[x, y][3] <= 40 and not seen[y * w + x]:
                seen[y * w + x] = 1
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if px[x, y][3] <= 40 and not seen[y * w + x]:
                seen[y * w + x] = 1
                q.append((x, y))
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if not (0 <= nx < w and 0 <= ny < h):
                continue
            j = ny * w + nx
            if seen[j]:
                continue
            r, g, b, a = px[nx, ny]
            if a <= 40:
                seen[j] = 1
                q.append((nx, ny))
                continue
            if max(r, g, b) - min(r, g, b) <= neutral and \
               (r * 299 + g * 587 + b * 114) // 1000 >= lum:
                px[nx, ny] = (r, g, b, 0)
                seen[j] = 1
                q.append((nx, ny))
    after = sum(1 for p in img.getdata() if p[3] > 40)
    if before and (before - after) / before > max_loss:
        return src          # the flood got inside the animal - keep the shadow
    return img


if __name__ == "__main__":
    inp, outp = sys.argv[1], sys.argv[2]
    remove_bg_and_crop(inp, outp)
    print("done:", outp)
