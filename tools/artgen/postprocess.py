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

if __name__ == "__main__":
    inp, outp = sys.argv[1], sys.argv[2]
    remove_bg_and_crop(inp, outp)
    print("done:", outp)
