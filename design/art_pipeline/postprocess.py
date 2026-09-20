from PIL import Image
from collections import deque
import statistics
import sys

DARK = 120      # luminance below this is the style's drawn linework, not fill


def _lum(p):
    return (p[0] * 299 + p[1] * 587 + p[2] * 114) // 1000


def _bbox(comp):
    xs = [c[0] for c in comp]
    ys = [c[1] for c in comp]
    return (min(xs), min(ys), max(xs), max(ys))


def remove_bg_and_crop(in_path, out_path, size=256, tol=20, step=6,
                       leak_frac=0.70, keep_frac=0.90,
                       pocket_tol=34, min_pocket_px=150, max_pocket_frac=0.10,
                       fence=90, probe=3, line_max=6, on_pocket=None,
                       clear_enclosed_min=None):
    # `clear_enclosed_min` CLEARS EVERY ENCLOSED NEAR-BACKGROUND REGION AT OR
    # ABOVE THAT PIXEL COUNT AND SKIPS THE FENCE TEST ENTIRELY. It is not a
    # better classifier and must never become the default. It is the manual
    # override for the case where Ayr has looked at one sprite and said the
    # trapped grey in it is background - at which point the question the fence
    # test exists to answer has already been answered by someone who can
    # actually see, and the only thing left to decide is a size floor that
    # separates the marked region from the sprite's own shading.
    #
    # It is needed because the fence test does not merely miss these by a
    # little. Measured on the seven Ayr marked: the caecilian's inner disc
    # fences at 59.8, the woodpecker's at 64.1, the cyclops' club gap at 43.9,
    # and JORMUNGANDR'S AT 0.0 - its coil is dark scales far thicker than
    # `line_max`, so every rim pixel reads as a mass rather than a stroke and
    # the region scores as if nothing enclosed it at all. Relaxing the gates far
    # enough to catch those would reopen exactly the faults they were added for.
    #
    # THE SIZE FLOOR IS NOT A SAFE SUBSTITUTE FOR THE FENCE TEST AND THE ROBIN
    # PROVES IT. At a 3000px floor this cleared five of those seven perfectly
    # and then bit a hole straight through the European robin's white breast:
    # the bird's own belly is one enclosed near-background region of 5652px,
    # indistinguishable by size or colour from the wedge of real backdrop
    # beside it. Same failure as the amarok, reached by a different route. So a
    # floor has to be read off the measurements of the sprite in front of you,
    # every result has to be looked at, and a sprite this cannot fix is one for
    # the renderer, not for a wider floor.
    # `on_pocket`, if given, is called for every enclosed region pass 2
    # considers, as on_pocket(px_count, fenced_pct, bbox, cleared). It changes
    # nothing. It exists because pass 2 is tuned timid on purpose and therefore
    # leaves real pockets behind, and when Ayr marks one of those by eye the
    # only useful question is HOW NEAR the miss was - a region that fenced at 88
    # against a threshold of 90 is a different thing from one that fenced at 40,
    # and without this you cannot tell them apart from the outside.
    img = Image.open(in_path).convert("RGBA")
    w, h = img.size
    px = img.load()

    # THE BACKGROUND SAMPLE MUST NOT BE A SINGLE PIXEL. It used to be px[0,0]
    # alone, and the asanbosam render put a small dark smudge - a stray render
    # artifact, maybe 70 pixels out of a 4096-pixel border ring - exactly on
    # that corner: (16,16,3) against a backdrop that is (213,213,213)
    # everywhere else. Every later test in this function compared against that
    # one poisoned sample, so nothing on the entire canvas ever counted as
    # "close to background" and the cut-out failed almost completely - the
    # shipped sprite came out on a solid grey square instead of transparent.
    # The median of the whole border ring shrugs off a corner-sized outlier;
    # it would take background pixels on more than half the border being wrong
    # to move it, and a stray smudge is nowhere near that large.
    border = ([px[x, 0][:3] for x in range(w)] + [px[x, h - 1][:3] for x in range(w)]
              + [px[0, y][:3] for y in range(h)] + [px[w - 1, y][:3] for y in range(h)])
    bg = tuple(int(statistics.median(c[i] for c in border)) for i in range(3))

    def close(c1, c2, t):
        return all(abs(a - b) <= t for a, b in zip(c1, c2))

    # PASS 1: flood in from the border, FOLLOWING A GRADIENT.
    #
    # This used to compare every pixel against the one colour sampled at (0,0),
    # which assumes the backdrop is flat. It isn't. The model vignettes it -
    # darker in the corners, lighter in the middle - so the flood would clear
    # the dark corner ring, reach the point where the grey brightens past `tol`,
    # and stop dead, leaving the middle of the backdrop opaque behind the
    # animal. The anomalocaris came out 87.7% opaque, the worst leak of all 1377
    # sprites, and Ayr caught it by eye: "anomalocaris-- background error".
    #
    # So a pixel is background if it is near the sampled corner colour (loose,
    # `tol`) OR near the pixel the flood arrived from (tight, `step`). The
    # second test walks up the vignette one small increment at a time.
    #
    # I FIRST WROTE THAT IT CANNOT WALK INTO THE ANIMAL, because the style draws
    # a hard outline and an outline is a jump far bigger than `step`. That is
    # true of most of this roster and false where it matters. The ijiraq is a
    # pale grey figure with soft luminous edges and no closed dark outline; the
    # gradient flood walked straight in and took 56% of it. The obayifo lost the
    # glow around its hands the same way.
    #
    # NOTHING IN THE HOLE AUDIT CAN SEE THAT. An eroded edge stays connected to
    # the background, so it is not an enclosed hole; it is simply a smaller
    # animal. It was caught by comparing opaque pixel counts before and after,
    # which is the only test that sees this failure.
    #
    # So run the flood BOTH ways and choose, the way strip_shadow already
    # abandons its own work when it has eaten too much. The gradient is a rescue
    # for a specific fault - a leaked backdrop - so it is only allowed to win
    # when there is something to rescue, or when it barely changes anything:
    #
    #   the plain flood left a slab      -> take the gradient, that is the fix
    #   the two agree within `keep_frac` -> take the gradient, it is trimming
    #   the gradient lost much more      -> take the plain flood, it is eating
    #
    # anomalocaris takes the first branch (87.7% opaque is not an animal shape)
    # and lands at 21.8%. ijiraq takes the third and is left alone.
    #
    # `leak_frac` IS DELIBERATELY FAR ABOVE ANY REAL ANIMAL. It started at 0.45,
    # which was wrong: measured across 320 originals the largest legitimate
    # subjects run 43-62% of the uncropped canvas - the nurikabe is a WALL and
    # covers 61.8% correctly - so 0.45 fired on big animals and handed them to
    # the gradient with no guard, quietly shaving the xiezhi and the kapre. A
    # genuine leak is not marginal: the anomalocaris was 99.7%. Nothing in the
    # current set reaches 0.70, which is the point - this branch is a safety net
    # for a rare fault, not a routine path.
    #
    # Branch counts over 320 originals at these settings: 283 agree, 25 saved
    # from the gradient (pitbull, mastiff, Cornish rex, French bulldog, manx,
    # civet - short-haired animals with soft edges, the vulnerable class).
    def flood(gradient):
        im = img.copy()
        p = im.load()
        seen = bytearray(w * h)
        q = deque()

        def push(x, y, ref):
            i = y * w + x
            if not seen[i]:
                seen[i] = 1
                q.append((x, y, ref))

        for x in range(w):
            for y in (0, h - 1):
                push(x, y, bg)
        for y in range(h):
            for x in (0, w - 1):
                push(x, y, bg)
        while q:
            x, y, ref = q.popleft()
            c = p[x, y][:3]
            if not (close(c, bg, tol) or (gradient and close(c, ref, step))):
                continue
            p[x, y] = c + (0,)
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h:
                    push(nx, ny, c)
        return im, sum(1 for q2 in im.getdata() if q2[3] > 40)

    plain, n_plain = flood(False)
    grad, n_grad = flood(True)
    if n_plain > leak_frac * w * h or n_grad >= keep_frac * max(n_plain, 1):
        img = grad
    else:
        img = plain
    px = img.load()

    # PASS 2: clear background trapped INSIDE the animal - the hole in a coiled
    # snake, the gap inside a curled tail, the spaces between a sea spider's
    # legs. Pass 1 cannot reach these; they are not connected to the border.
    #
    # WHY THIS IS GATED NOW. The old version decided by colour alone: near the
    # sampled background, big enough, enclosed - clear it. That is unsound, and
    # not marginally. Measured on the amarok, the wolf's own grey fur is
    # (211,210,209) and the backdrop behind it is (211,208,210). A DIFFERENCE OF
    # TWO. The animal is painted the same colour as the air. On white animals
    # the cel-shaded tone on the lit side lands on the backdrop value just as
    # exactly. So the pass found the wolf's ruff, the angora rabbit's flank, the
    # oryx's shoulder and the ivory gull's wing, called them background, and
    # erased them. Ayr, 2026-09-13: "the rear is transparent in this sprite and
    # it shouldn't be", and the same complaint against four more - every one of
    # them a white or grey animal, which is the whole tell.
    #
    # It ran on 164 of 313 sprites and a hole audit found 226 across the full
    # 1377. Tightening the colour tolerance does not help: at a threshold tight
    # enough to spare the wolf the pass does nothing at all, because there is no
    # colour difference to find. Neither does flatness - these regions really
    # are flat. Colour cannot answer this question.
    #
    # But the pass cannot simply be deleted either. Switched off, the sea
    # spider gets grey slabs between its legs, the namazu a grey disc inside its
    # coil, the capuchin a disc inside its curled tail. It is doing real work on
    # 5 of every 12 sprites it touches.
    #
    # WHAT ACTUALLY SEPARATES THEM IS WHAT FENCES THE REGION IN. A true trapped
    # pocket is ringed by the style's dark linework the whole way round, because
    # the animal drew a closed loop around it. A cel-shading highlight is ringed
    # mostly by more fur, with linework only where it happens to abut an edge.
    # So walk the pocket's rim and measure the fraction that has drawn line
    # within `probe` pixels. Measured: coil and leg gaps score 93-100%, eaten
    # fur scores 2-63%, and the amarok - the worst case there is - tops out at
    # 72.8%.
    #
    # `max_pocket_frac` is the backstop. The angora rabbit's entire body reads
    # as one enclosed near-background region and fences at 81.8%, which would
    # pass. Nothing legitimately trapped inside an animal is a tenth of the
    # canvas; at that size it is the animal.
    #
    # `line_max` IS THE SECOND HALF OF THE TEST, AND IT IS NOT OPTIONAL. Fencing
    # alone scored 12/12 on the twelve sprites it was designed against and then
    # broke twelve others when run over all 316 kept originals: border collie,
    # colobus, northern gannet, European badger, magpie, gentoo penguin. Every
    # one black-and-white. A white patch on a pied animal is ringed by black
    # FUR, and "ringed by something dark" is exactly what fencing measures. The
    # colobus lost 4855px, the border collie 3180.
    #
    # What separates a stroke from a mass is thickness. Linework goes dark and
    # comes back out within a few pixels; black fur goes dark and stays dark. So
    # a rim pixel only counts as fenced if the dark run ENDS within `line_max`.
    #
    # WHY THE THRESHOLD IS DELIBERATELY TIMID. With both tests there is still no
    # clean separation - the settings that clear every coil also eat some fur.
    # The two errors are not equally bad. Eaten anatomy is what Ayr reported and
    # it is disfiguring; leftover background inside a coil is a grey patch on a
    # handful of sprites. So this is tuned to the end of the range that eats
    # nothing: zero false positives across all sixteen known-bad cases, at the
    # cost of leaving some genuine pockets behind. When it is wrong it is wrong
    # in the direction that keeps the animal whole.
    #
    # THE REAL FIX IS UPSTREAM AND IS NOT IN THIS FILE. None of this ambiguity
    # would exist if the backdrop were a colour no animal is. It is light grey,
    # and so are a great many of these animals - hence a wolf painted (211,210,209)
    # against a backdrop of (211,208,210). See the note in gen_runner.py.
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
            if touches_edge:
                continue
            if not (min_pocket_px <= len(comp) <= max_pocket_frac * w * h):
                if on_pocket and len(comp) >= min_pocket_px:
                    on_pocket(len(comp), None, _bbox(comp), False)
                continue
            if clear_enclosed_min is not None:
                if len(comp) >= clear_enclosed_min:
                    if on_pocket:
                        on_pocket(len(comp), None, _bbox(comp), True)
                    for (x, y) in comp:
                        px[x, y] = px[x, y][:3] + (0,)
                elif on_pocket:
                    on_pocket(len(comp), None, _bbox(comp), False)
                continue

            cells = set(comp)
            fenced = total = 0
            for (x, y) in comp:
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    if (x + dx, y + dy) in cells:
                        continue
                    total += 1
                    # Walk outward. A stroke goes dark and comes back out within
                    # a few pixels; a mass of black fur goes dark and stays dark.
                    start, run = None, 0
                    for s in range(1, probe + line_max + 3):
                        nx, ny = x + dx * s, y + dy * s
                        if not (0 <= nx < w and 0 <= ny < h):
                            break
                        if _lum(px[nx, ny][:3]) < DARK:
                            if start is None:
                                if s > probe:
                                    break
                                start = s
                            run += 1
                        elif start is not None:
                            break
                    if start is not None and run <= line_max:
                        fenced += 1
                    break
            pct = 100.0 * fenced / total if total else 0.0
            cleared = bool(total) and pct >= fence
            if on_pocket:
                on_pocket(len(comp), pct, _bbox(comp), cleared)
            if cleared:
                for (x, y) in comp:
                    px[x, y] = px[x, y][:3] + (0,)

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
