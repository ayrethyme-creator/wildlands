// HOW TO GET THE FIELD GUIDE ENTRIES OUT.
//
// Same rule as read_ground_truth.js: do NOT parse the .jsx files. The DEX exists in
// two shapes - object literals AND constructor calls - and every regex attempt at it
// has returned a different wrong answer. Run the game and ask it.
//
// The difference here is size. The entries are ~325KB, far too much to carry back
// through a console by hand, so the page POSTs them to a small local receiver which
// writes the file. Nothing is chunked, nothing is copy-pasted, and it is repeatable.
//
// ---------------------------------------------------------------------------------
// THE METHOD
//
//   1.  cd C:/Claude/wildlands
//   2.  python -m http.server 8009 &
//   3.  python design/tools/fg_export_server.py &        (the receiver, on 8010)
//   4.  open http://localhost:8009/gallery.html and WAIT for it to finish loading
//   5.  paste this whole file into the console
//   6.  it writes design/FIELD_GUIDE.txt and prints the row count
//   7.  kill both servers
//
// The text is CORS-simple (Content-Type: text/plain), so the cross-port POST needs no
// preflight and the receiver needs no extra configuration.
// ---------------------------------------------------------------------------------

(async () => {
  const D = window.__DEX, I = window.__INFO;
  if (!D || !I) return 'not loaded yet - wait for the gallery to finish';

  const rows = [];
  Object.keys(I).sort((a, b) => {
    const na = ((D[a] && D[a].n) || a), nb = ((D[b] && D[b].n) || b);
    return na.localeCompare(nb);
  }).forEach(k => {
    const inf = I[k], name = (D[k] && D[k].n) || k;
    // .f is the field-guide entry, .s the IUCN status, .d diet, .h habitat.
    const f = (inf.f || '').replace(/\s+/g, ' ').trim();
    if (!f) return;
    rows.push(name + ' :: ' + ((inf.s || '').trim() || '-') + ' :: ' + f);
  });

  const body = rows.join('\n');
  const r = await fetch('http://localhost:8010/', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: body
  });
  return await r.text();
})()
