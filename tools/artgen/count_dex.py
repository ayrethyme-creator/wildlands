import re, glob, os

order_str = """game.part1.jsx game.part2.jsx game.part3.jsx game.part3b.jsx game.part6.jsx game.part7.jsx game.part8.jsx game.part9.jsx game.part10.jsx game.part11.jsx game.part12.jsx game.part13.jsx game.part14.jsx game.part15.jsx game.part16.jsx game.part17.jsx game.part18.jsx game.part19.jsx game.part20.jsx game.part21.jsx game.part22.jsx game.part23.jsx game.part24.jsx game.part25.jsx game.part26.jsx game.part27.jsx game.part28.jsx game.part29.jsx game.part30.jsx game.part31.jsx game.part32.jsx game.part33.jsx game.part34.jsx game.part35.jsx game.part36.jsx game.part37.jsx game.part38.jsx game.part39.jsx game.part40.jsx game.part41.jsx game.part42.jsx game.part43.jsx game.part45.jsx game.part46.jsx game.part47.jsx game.part48.jsx game.part49.jsx game.part50.jsx game.part51.jsx game.part52.jsx game.part53.jsx game.part54.jsx game.part55.jsx game.part56.jsx game.part57.jsx game.part58.jsx game.part59.jsx game.part60.jsx game.part61.jsx game.part62.jsx game.part4.jsx game.part5.jsx"""
order = order_str.split()

repo = "C:/Claude/wildlands"

dex_keys = {}  # key -> (file, line, flags placeholder)

for fname in order:
    path = os.path.join(repo, fname)
    with open(path, encoding='utf-8') as f:
        text = f.read()
    # find all starts of DEX-target blocks: "Object.assign(DEX, {" or "const DEX = {"
    for m in re.finditer(r'(?:Object\.assign\(DEX,\s*\{|const DEX\s*=\s*\{)', text):
        start = m.end() - 1  # position of the opening brace
        depth = 0
        i = start
        n = len(text)
        # walk chars tracking brace depth, also skip over strings/template/regex minimally
        in_str = None
        while i < n:
            c = text[i]
            if in_str:
                if c == '\':
                    i += 2
                    continue
                if c == in_str:
                    in_str = None
                i += 1
                continue
            if c in ('"', "'", '`'):
                in_str = c
                i += 1
                continue
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    break
            i += 1
        block = text[start:i+1]
        # Now extract depth-1 keys: scan block, track depth, when depth==1 and pattern identifier: 
        depth2 = 0
        j = 0
        bn = len(block)
        in_str2 = None
        while j < bn:
            c = block[j]
            if in_str2:
                if c == '\':
                    j += 2
                    continue
                if c == in_str2:
                    in_str2 = None
                j += 1
                continue
            if c in ('"', "'", '`'):
                in_str2 = c
                j += 1
                continue
            if c == '{':
                depth2 += 1
                j += 1
                continue
            if c == '}':
                depth2 -= 1
                j += 1
                continue
            if depth2 == 1:
                mm = re.match(r'\s*//[^\n]*', block[j:])
                if mm:
                    j += mm.end()
                    continue
                mm = re.match(r'\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*:', block[j:])
                if mm:
                    key = mm.group(1)
                    dex_keys[key] = fname
                    j += mm.end()
                    continue
            j += 1

print("TOTAL UNIQUE DEX KEYS:", len(dex_keys))
from collections import Counter
c = Counter(dex_keys.values())
for fname in order:
    if c.get(fname):
        print(fname, c[fname])
