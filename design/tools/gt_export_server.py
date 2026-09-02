"""GROUND TRUTH EXPORT RECEIVER - run this, then paste read_ground_truth.js in the gallery.

Same job as fg_export_server.py, for design/GROUND_TRUTH.txt. The rule is the same and
so is the reason: the roster must come out of the RUNNING GAME, never out of a regex
over the .jsx files, which returned 461, 516 and 465 on three separate attempts.

Why this exists, when GROUND_TRUTH.txt is only ~13KB and the field guide is 325KB:
carrying 13KB back through a console means a person retyping it, and a person retyping
13KB of species names - with a Pudu, a Kakapo, an 'Alala and a Nidhoggr in it - will
eventually get one character wrong and nothing will notice. On 2026-09-02 that export
was verified by fetching the written file back and comparing it to the live value
character for character. It passed, and then this was written so nobody has to do it
that way again.

    1.  python -m http.server 8009              (serve the repo)
    2.  python design/tools/gt_export_server.py (this, on 8014)
    3.  open http://localhost:8009/gallery.html and wait for it to finish loading
    4.  paste design/tools/read_ground_truth.js into the console, and POST its result
        here the way read_field_guide.js does
    5.  both servers can be killed once design/GROUND_TRUTH.txt is written

The receiver refuses a body that does not look like ground truth - too few groups, or
a group that is suddenly empty - because writing a truncated roster over the good one
is the single most damaging thing this script could do.
"""
import io, os, sys
from http.server import BaseHTTPRequestHandler, HTTPServer

os.chdir("C:/Claude/wildlands")
OUT = 'design/GROUND_TRUTH.txt'
PORT = 8014
MIN_GROUPS = 15

HEADER_LINES = [
    "! Ground truth, read from the running game on %s.",
    "! Source: serve the repo, open gallery.html, read window.__DEX / __INFO / __RULES",
    "! / __HAND / __MERGE / __NA plus BIOME_FIX, BIOME_MOVE and FR.",
    "! Do NOT regenerate this by parsing the .jsx files with regular expressions.",
    "! DEX entries come in two shapes (object literals AND constructor calls) and every",
    "! regex attempt got a different, wrong answer: 461, 516, 465. The truth is 519.",
    "!",
    "! Written by design/tools/gt_export_server.py. Do not hand-edit: re-export instead.",
    "! Format: group=Name|Name|Name",
]


def check(body):
    """Refuse anything that does not look like a whole roster."""
    groups = [l for l in body.split('\n') if l and not l.startswith('!') and '=' in l]
    if len(groups) < MIN_GROUPS:
        return 'only %d groups; expected at least %d' % (len(groups), MIN_GROUPS)
    for line in groups:
        k, v = line.split('=', 1)
        if not [x for x in v.split('|') if x]:
            return 'group "%s" came back empty' % k
    return None


class Receiver(BaseHTTPRequestHandler):
    def do_POST(self):
        import datetime
        n = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(n).decode('utf-8').rstrip('\n')
        bad = check(body)
        self.send_response(400 if bad else 200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        if bad:
            msg = 'REFUSED, %s has NOT been touched - %s' % (OUT, bad)
        else:
            today = datetime.date.today().isoformat()
            head = '\n'.join(HEADER_LINES) % today
            io.open(OUT, 'w', encoding='utf-8', newline='\n').write(head + '\n' + body + '\n')
            counts = sorted((l.split('=')[0], len([x for x in l.split('=', 1)[1].split('|') if x]))
                            for l in body.split('\n') if l and not l.startswith('!') and '=' in l)
            total = sum(c for _, c in counts)
            msg = 'wrote %s - %d groups, %d species\n%s' % (
                OUT, len(counts), total,
                '\n'.join('   %-12s %d' % c for c in counts))
        self.wfile.write(msg.encode('utf-8'))
        print(msg)
        sys.stdout.flush()

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    print('ground-truth receiver listening on http://localhost:%d' % PORT)
    sys.stdout.flush()
    HTTPServer(('127.0.0.1', PORT), Receiver).serve_forever()
