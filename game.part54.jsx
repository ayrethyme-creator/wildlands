// ---------- Part 54: THE GROUPS THAT WERE MISSING ----------
// An audit against the major animal groups turned up whole branches with
// nothing in them. Three of them were entire phyla, and one of the gaps was
// embarrassing: the game argues for earthworms twice - at Bathynax's shrine
// and in E. O. Wilson's line about ants turning more soil than earthworms -
// and did not contain an earthworm.
//
// Three shapes had to be invented before any of this could be drawn. Every
// existing generator assumes an animal with a front and a back and eyes on the
// front. A sea star has no front. A sponge has no anything.

/* Radial symmetry. Echinoderms are built on five, not on left-and-right, so
   this draws arms around a centre rather than a body with ends. No eyes: a sea
   star has light-sensitive spots on its arm tips and nothing that reads as a
   face, and giving it one would be a lie about what it is. */
const starA = (o) => (er) => {
  const C = o.skin || "#c96f4a";
  const arms = o.arms || 5;
  const R = o.armLen || 26;
  const w = o.armW || 0.42;
  const paths = [];
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2 - Math.PI / 2 + (o.spin || 0);
    const tip = [32 + Math.cos(a) * R, 32 + Math.sin(a) * R];
    const l = [32 + Math.cos(a - w) * (R * 0.34), 32 + Math.sin(a - w) * (R * 0.34)];
    const r = [32 + Math.cos(a + w) * (R * 0.34), 32 + Math.sin(a + w) * (R * 0.34)];
    paths.push(`M${l[0].toFixed(1)},${l[1].toFixed(1)} Q${(32 + Math.cos(a - w * 0.5) * R * 0.8).toFixed(1)},${(32 + Math.sin(a - w * 0.5) * R * 0.8).toFixed(1)} ${tip[0].toFixed(1)},${tip[1].toFixed(1)} Q${(32 + Math.cos(a + w * 0.5) * R * 0.8).toFixed(1)},${(32 + Math.sin(a + w * 0.5) * R * 0.8).toFixed(1)} ${r[0].toFixed(1)},${r[1].toFixed(1)} Z`);
  }
  return (
    <g>
      <ellipse cx="32" cy="56" rx="16" ry="3.4" fill="#000" opacity=".16" />
      <g fill={C}>
        {paths.map((d, i) => <path key={i} d={d} />)}
        <circle cx="32" cy="32" r={o.discR || 11} />
      </g>
      {o.mottle && (
        <g fill={o.markC || sh(C, -0.22)} opacity=".55">
          {paths.map((d, i) => <path key={i} d={d} transform="translate(32,32) scale(.62) translate(-32,-32)" />)}
        </g>
      )}
      {o.spines && (
        <g stroke={o.spineC || sh(C, -0.3)} strokeWidth={o.longSpines ? 1.6 : 1} strokeLinecap="round">
          {Array.from({ length: o.longSpines ? 28 : 20 }).map((_, i) => {
            const a = (i / (o.longSpines ? 28 : 20)) * Math.PI * 2;
            const r0 = o.longSpines ? 12 : (o.discR || 11) * 0.5;
            const r1 = o.longSpines ? 27 : (o.discR || 11) * 1.15;
            return <line key={i} x1={(32 + Math.cos(a) * r0).toFixed(1)} y1={(32 + Math.sin(a) * r0).toFixed(1)}
              x2={(32 + Math.cos(a) * r1).toFixed(1)} y2={(32 + Math.sin(a) * r1).toFixed(1)} />;
          })}
        </g>
      )}
      {o.tubeFeet && (
        <g fill={o.footC || sh(C, 0.3)} opacity=".8">
          {paths.map((d, i) => {
            const a = (i / arms) * Math.PI * 2 - Math.PI / 2 + (o.spin || 0);
            return [0.55, 0.75, 0.92].map((f, j) => (
              <circle key={i + "-" + j} r="1.5"
                cx={(32 + Math.cos(a) * R * f).toFixed(1)} cy={(32 + Math.sin(a) * R * f).toFixed(1)} />
            ));
          })}
        </g>
      )}
      <circle cx="32" cy="32" r={(o.discR || 11) * 0.3} fill={o.centreC || sh(C, 0.22)} />
    </g>
  );
};

/* A long segmented body. Covers annelids, myriapods, caecilians, worm lizards
   and the velvet worms, which between them are four phyla and two vertebrate
   groups that have nothing else in common except that they are longer than
   they are wide and made of repeated parts. */
const wormA = (o) => (er) => {
  const C = o.skin || "#c98a7a";
  const segs = o.segs || 11;
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    pts.push([8 + t * 48, 40 - Math.sin(t * Math.PI * (o.waves || 1.6)) * (o.amp || 9)]);
  }
  const d = pts.map((p, i) => (i ? `L${p[0].toFixed(1)},${p[1].toFixed(1)}` : `M${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(" ");
  return (
    <g>
      <ellipse cx="32" cy="56" rx="20" ry="3" fill="#000" opacity=".16" />
      {o.legs && (
        <g stroke={o.legC || sh(C, -0.28)} strokeWidth={o.stubby ? 2.6 : 1.2} strokeLinecap="round">
          {pts.slice(1, -1).map((p, i) => (
            <g key={i}>
              <line x1={p[0]} y1={p[1]} x2={p[0] - 2} y2={p[1] + (o.stubby ? 5 : 8)} />
              <line x1={p[0]} y1={p[1]} x2={p[0] + 2} y2={p[1] + (o.stubby ? 5 : 8)} />
            </g>
          ))}
        </g>
      )}
      <path d={d} stroke={C} strokeWidth={o.thick || 9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {o.bands && (
        <g stroke={o.markC || sh(C, -0.24)} strokeWidth={(o.thick || 9) * 0.9} strokeLinecap="butt">
          {pts.filter((_, i) => i % 2 === 1 && i < pts.length - 1).map((p, i) => {
            const n = pts[pts.indexOf(p) + 1] || p;
            return <line key={i} x1={p[0]} y1={p[1]} x2={(p[0] + n[0]) / 2} y2={(p[1] + n[1]) / 2} />;
          })}
        </g>
      )}
      {o.saddle && (
        <ellipse cx={pts[Math.floor(segs * 0.32)][0]} cy={pts[Math.floor(segs * 0.32)][1]}
          rx="5" ry={(o.thick || 9) / 2 + 0.6} fill={o.saddleC || sh(C, 0.24)} />
      )}
      {o.plumes && (
        <g stroke={o.plumeC || "#e8935c"} strokeWidth="1.3" strokeLinecap="round" fill="none">
          {[-1, 0, 1].map((k) => (
            <path key={k} d={`M${pts[pts.length - 1][0]},${pts[pts.length - 1][1]} q${6 + k * 2},${-7 + k * 3} ${9 + k},${-13}`} />
          ))}
        </g>
      )}
      {/* The head is the same body, slightly swollen. Most of these animals do
          not have a head so much as an end that goes first. */}
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={(o.thick || 9) / 2 + (o.headBulge || 0.6)}
        fill={o.headC || sh(C, 0.12)} />
      {o.antennae && (
        <g stroke={o.legC || sh(C, -0.28)} strokeWidth="1.1" strokeLinecap="round" fill="none">
          <path d={`M${pts[pts.length - 1][0]},${pts[pts.length - 1][1] - 2} q5,-4 8,-8`} />
          <path d={`M${pts[pts.length - 1][0]},${pts[pts.length - 1][1] + 1} q6,-1 9,-4`} />
        </g>
      )}
      {o.eyes && <Eye x={pts[pts.length - 1][0] + 1.5} y={pts[pts.length - 1][1] - 1.5} r={1.7} iris={o.iris || "#26221c"} />}
      {o.gape && (
        <circle cx={pts[pts.length - 1][0] + 2} cy={pts[pts.length - 1][1]} r={(o.thick || 9) / 2 - 1}
          fill={o.gapeC || "#8a3a3a"} />
      )}
    </g>
  );
};

/* Animals that do not move. A sponge has no front, no organs and no nervous
   system, and a sea squirt starts with a notochord and then reabsorbs its own
   brain when it settles. Neither can be drawn as a creature, so this draws
   them as what they are: a shape with openings. */
const sessileA = (o) => (er) => {
  const C = o.skin || "#c96f6a";
  return (
    <g>
      <ellipse cx="32" cy="57" rx="15" ry="3.2" fill="#000" opacity=".16" />
      {o.branching ? (
        <g fill={C}>
          {[-11, 0, 11].map((dx, i) => (
            <path key={i} d={`M${32 + dx},54 Q${32 + dx * 1.5},${34 - i * 3} ${32 + dx * 1.25},${20 + Math.abs(dx) * 0.6} Q${32 + dx * 1.1},${14 + Math.abs(dx) * 0.5} ${32 + dx * 0.85},${18 + Math.abs(dx) * 0.6} Q${32 + dx * 0.7},${34 - i * 2} ${32 + dx * 0.45},54 Z`} />
          ))}
        </g>
      ) : (
        <path d="M20,54 Q17,30 24,16 Q32,8 40,16 Q47,30 44,54 Z" fill={C} />
      )}
      {o.texture && (
        <g fill={o.markC || sh(C, -0.2)} opacity=".5">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} r={1 + (i % 3) * 0.5}
              cx={22 + ((i * 7) % 20)} cy={20 + ((i * 11) % 30)} />
          ))}
        </g>
      )}
      {/* The osculum: the opening the water leaves by. On a sponge it is the
          only feature there is. */}
      {!o.branching && <ellipse cx="32" cy="16" rx={o.osculum || 7} ry={(o.osculum || 7) * 0.42} fill={o.insideC || sh(C, -0.42)} />}
      {o.siphons && (
        <g fill={o.insideC || sh(C, -0.38)}>
          <ellipse cx="26" cy="18" rx="3.6" ry="2.2" />
          <ellipse cx="39" cy="22" rx="3" ry="1.9" />
        </g>
      )}
      {o.glow && <ellipse cx="32" cy="16" rx={(o.osculum || 7) + 2} ry={((o.osculum || 7) + 2) * 0.42} fill={o.glowC || "#8ae0d0"} opacity=".35" />}
    </g>
  );
};

Object.assign(ART, {
  // ---- echinoderms: the phylum that was not here at all ----
  ochrestar:      starA({ skin: "#c96f4a", mottle: true, markC: "#a04a30", tubeFeet: true, footC: "#e8a878" }),
  sunflowerstar:  starA({ skin: "#e08a3a", arms: 11, armLen: 27, armW: 0.3, discR: 13, mottle: true, markC: "#b05a1a", tubeFeet: true }),
  crownofthorns:  starA({ skin: "#8a4a5c", arms: 13, armLen: 26, armW: 0.28, discR: 12, spines: true, longSpines: true, spineC: "#3c2a2e" }),
  purpleurchin:   starA({ skin: "#6a4a8a", arms: 0, discR: 15, spines: true, longSpines: true, spineC: "#4a2f6a", centreC: "#8a6aa8" }),
  brittlestar:    starA({ skin: "#8a7458", arms: 5, armLen: 29, armW: 0.16, discR: 7, bands: true, markC: "#5c4436", mottle: true }),
  seacucumber:    wormA({ skin: "#8a5c4a", thick: 13, segs: 7, waves: 0.9, amp: 4, bands: true, markC: "#6b4436", plumes: true, plumeC: "#e8a878", headBulge: 1.2 }),

  // ---- annelids and the soil ----
  earthworm:      wormA({ skin: "#c98a8a", thick: 8, segs: 13, bands: true, markC: "#a86a6a", saddle: true, saddleC: "#e0a8a0" }),
  gippslandworm:  wormA({ skin: "#d9a09a", thick: 12, segs: 15, waves: 2.2, amp: 11, bands: true, markC: "#b57a76", saddle: true, saddleC: "#f0c4b8" }),
  medicinalleech: wormA({ skin: "#4a5c3a", thick: 10, segs: 9, waves: 1.2, amp: 6, bands: true, markC: "#6b8a4a", gape: true, gapeC: "#8a3a3a" }),
  christmastreeworm: sessileA({ skin: "#c9704a", branching: true, texture: true, markC: "#a04a30" }),
  bobbitworm:     wormA({ skin: "#7a5c8a", thick: 8, segs: 15, waves: 2.4, amp: 12, bands: true, markC: "#5a3f6a", antennae: true, eyes: true, iris: "#e8c547" }),

  // ---- myriapods ----
  giantmillipede: wormA({ skin: "#5a463a", thick: 9, segs: 17, waves: 2.1, amp: 10, legs: true, legC: "#c96f2e", bands: true, markC: "#26221c", antennae: true }),
  giantcentipede: wormA({ skin: "#8a3a2a", thick: 7, segs: 15, waves: 2.6, amp: 13, legs: true, legC: "#e8a53a", bands: true, markC: "#5c2418", antennae: true, eyes: true, iris: "#e8c547" }),
  pillmillipede:  wormA({ skin: "#4a4a55", thick: 11, segs: 8, waves: 0.7, amp: 3, legs: true, legC: "#8a8a92", bands: true, markC: "#2f2f38" }),

  // ---- the odd branches ----
  horseshoecrab:  armorA({ hide: "#8a6f42", plates: true, plateC: "#6b5232", scutes: true, scuteC: "#a3855c", spikes: true, beakC: "#5c4436", iris: "#3c2a1e" }),
  tardigrade:     wormA({ skin: "#e0d4b0", thick: 13, segs: 5, waves: 0.8, amp: 4, legs: true, stubby: true, legC: "#c9b083", bands: true, markC: "#c9b88a", gape: true, gapeC: "#a3855c" }),
  velvetworm:     wormA({ skin: "#3a5c6a", thick: 9, segs: 13, waves: 1.9, amp: 9, legs: true, stubby: true, legC: "#2a4450", bands: true, markC: "#2a4450", antennae: true }),
  barrelsponge:   sessileA({ skin: "#8a4a5c", texture: true, markC: "#6b3444", osculum: 9, insideC: "#3c2028" }),
  seasquirt:      sessileA({ skin: "#c95c6a", texture: true, markC: "#a03a4a", siphons: true, insideC: "#5c1a26", osculum: 5 }),

  // ---- songbirds: the largest group of birds on earth, and there was one ----
  housesparrow:   songA({ body: "#a3855c", wingC: "#7a6242", head: "#8a7458", cap: "#6b5442", bib: "#3c3226", cheek: true, cheekC: "#e8dcc3", beakC: "#3c3226", streaks: true, markC: "#5c4436" }),
  europeanrobin:  songA({ body: "#8a7458", wingC: "#6b5442", head: "#8a7458", throat: "#e05a2a", bib: "#e05a2a", belly: "#f2ede0", beakC: "#3c3226", iris: "#26221c" }),
  barnswallow:    songA({ body: "#3d5090", wingC: "#2a3a68", head: "#3d5090", throat: "#c94a3a", belly: "#f2e0c0", longTail: true, tailC: "#1a2a52", beakC: "#26221c" }),
  greattit:       songA({ body: "#8ab54a", wingC: "#6a8ab5", head: "#26221c", cheek: true, cheekC: "#f8f6f0", belly: "#e8d447", bib: "#26221c", beakC: "#26221c" }),
  superblyrebird: songA({ body: "#6b5442", wingC: "#4c3a2c", head: "#6b5442", longTail: true, tailC: "#c9b083", crest: true, crestC: "#4c3a2c", beakC: "#3c3226" }),
  northerncardinal: songA({ body: "#c93a2a", wingC: "#a02a1e", head: "#c93a2a", crest: true, crestC: "#c93a2a", mask: "#26221c", beakC: "#e8935c" }),
  villageweaver:  songA({ body: "#e8c547", wingC: "#c9a43a", head: "#26221c", belly: "#e8d447", beakC: "#3c3226", iris: "#c94a3a" }),
  zebrafinch:     songA({ body: "#a3a3a8", wingC: "#8a8a92", head: "#a3a3a8", cheek: true, cheekC: "#c96f2e", throat: "#f2ede0", streaks: true, markC: "#3c3226", beakC: "#c93a2a", belly: "#f2ede0" }),
  commonstarling: songA({ body: "#46546e", wingC: "#303c52", head: "#46546e", streaks: true, markC: "#e8dcc3", beakC: "#e8c547" }),
  woodthrush:     songA({ body: "#a3652e", wingC: "#8a5228", head: "#a3652e", belly: "#f2ede0", streaks: true, markC: "#3c2a1e", beakC: "#3c3226" }),

  // ---- birds of paradise and bowerbirds ----
  greaterbop:     songA({ body: "#8a5228", wingC: "#6b3a18", head: "#e8d447", throat: "#2a6a4a", longTail: true, tailC: "#e8a53a", crest: true, crestC: "#e8d447", beakC: "#c9c9cf" }),
  satinbowerbird: songA({ body: "#4e4874", wingC: "#3a3458", head: "#4e4874", beakC: "#e8dcc3", iris: "#3a7ad9" }),

  // ---- pigeons and doves: the living family had no representative ----
  rockdove:       birdA({ body: "#6a7280", wingC: "#4c5460", head: "#3a6a7a", neck: true, neckC: "#4a8a7a", beakC: "#3c3226", iris: "#c94a3a", bib: "#5a8a9a" }),
  victoriacrowned: birdA({ body: "#4a7a9a", wingC: "#3a5c7a", head: "#4a7a9a", plume: true, plumeC: "#8ac0d8", mask: "#26221c", beakC: "#5c5344", iris: "#c94a3a", neck: true, neckC: "#4a7a9a" }),
  nicobarpigeon:  birdA({ body: "#3a5c4a", wingC: "#2a6a5a", head: "#3a4450", neck: true, neckC: "#4a6a5a", tailC: "#f2ede0", beakC: "#3c3226", iris: "#c9c9cf" }),

  // ---- shorebirds: an entire order, and one of the great migrations ----
  bartailedgodwit: birdA({ body: "#c9a878", wingC: "#a3855c", head: "#c9b083", longLegs: true, neck: true, neckC: "#c9a878", bill: "long", beakC: "#c96f4a", iris: "#3c3226" }),
  ruddyturnstone: birdA({ body: "#c96f4a", wingC: "#8a4a2e", head: "#f2ede0", mask: "#26221c", longLegs: true, neck: true, neckC: "#f2ede0", beakC: "#3c3226", bib: "#26221c" }),
  oystercatcher:  birdA({ body: "#413c34", wingC: "#2e2a24", head: "#413c34", longLegs: true, neck: true, neckC: "#26221c", bill: "long", beakC: "#e05a2a", iris: "#c93a2a", belly: "#f8f6f0" }),
  piedavocet:     birdA({ body: "#f8f6f0", wingC: "#26221c", head: "#26221c", longLegs: true, neck: true, neckC: "#f8f6f0", bill: "long", beakC: "#26221c", iris: "#3c3226" }),
  redknot:        birdA({ body: "#c96f4a", wingC: "#8a6f52", head: "#c9704a", longLegs: true, neck: true, neckC: "#c96f4a", beakC: "#3c3226", iris: "#3c3226" }),

  // ---- jawless fish: the deepest branch of the vertebrates ----
  sealamprey:     eelA({ body: "#5c6b4a", belly: "#c9b88a", gape: true, markC: "#3c4a2e", spots: true, iris: "#26221c", thick: true }),
  pacifichagfish: eelA({ body: "#8a6f7a", belly: "#c9a8a8", markC: "#6b5260", thick: true, iris: "#3c2a30" }),

  // ---- the limbless ones nobody counts ----
  ringedcaecilian: wormA({ skin: "#3a4a6a", thick: 10, segs: 13, waves: 1.8, amp: 9, bands: true, markC: "#5a6a8a", eyes: false, headBulge: 1.4 }),
  ibericanworm:   wormA({ skin: "#e0b0a8", thick: 9, segs: 13, waves: 1.7, amp: 8, bands: true, markC: "#c98a84", headBulge: 1.4 }),

  // ---- our own closest relatives outside the primates ----
  sundacolugo:    batA({ fur: "#8a7458", muzzle: "#c9b083", wingC: "#a3855c", iris: "#3c2a1e", bigEar: true }),
  commontreeshrew: rodA({ fur: "#8a6f52", belly: "#c9b083", inner: "#c9a0a8", muzzle: "#c9b083", iris: "#26221c", bushyTail: true, tailC: "#8a6f52", bigEye: true }),
});

Object.assign(DEX, {
  // echinoderms
  ochrestar:      A("Ochre Sea Star", "ochrestar", ["Aquatic", "Armor"], B(62, 46, 74, 8), MV.aqua, 0.22),
  sunflowerstar:  A("Sunflower Sea Star", "sunflowerstar", ["Aquatic", "Predator"], B(74, 62, 66, 24), MV.aqua, 0.14),
  crownofthorns:  A("Crown-of-thorns Starfish", "crownofthorns", ["Venom", "Aquatic"], B(66, 58, 78, 10), MV.ven, 0.18),
  purpleurchin:   A("Purple Sea Urchin", "purpleurchin", ["Armor", "Aquatic"], B(52, 34, 88, 6), MV.arm, 0.26),
  brittlestar:    A("Brittle Star", "brittlestar", ["Aquatic", "Swift"], B(38, 30, 42, 46), MV.aqua, 0.28),
  seacucumber:    A("Sea Cucumber", "seacucumber", ["Aquatic", "Armor"], B(70, 22, 72, 6), MV.aqua, 0.26),

  // annelids
  earthworm:      A("Common Earthworm", "earthworm", ["Burrow", "Wild"], B(34, 20, 32, 22), MV.bur, 0.34),
  gippslandworm:  A("Giant Gippsland Earthworm", "gippslandworm", ["Burrow", "Wild"], B(58, 26, 44, 14), MV.bur, 0.16),
  medicinalleech: A("Medicinal Leech", "medicinalleech", ["Venom", "Aquatic"], B(36, 40, 34, 28), MV.ven, 0.28),
  christmastreeworm: A("Christmas Tree Worm", "christmastreeworm", ["Aquatic", "Armor"], B(30, 16, 62, 40), MV.aqua, 0.30),
  bobbitworm:     A("Bobbit Worm", "bobbitworm", ["Predator", "Burrow"], B(58, 82, 44, 62), MV.pred, 0.12),

  // myriapods
  giantmillipede: A("Giant African Millipede", "giantmillipede", ["Armor", "Burrow"], B(48, 26, 74, 16), MV.arm, 0.28),
  giantcentipede: A("Amazonian Giant Centipede", "giantcentipede", ["Venom", "Swift"], B(46, 74, 40, 68), MV.ven, 0.16),
  pillmillipede:  A("Pill Millipede", "pillmillipede", ["Armor", "Burrow"], B(38, 18, 78, 14), MV.arm, 0.32),

  // the odd branches
  horseshoecrab:  A("Horseshoe Crab", "horseshoecrab", ["Armor", "Aquatic"], B(64, 34, 86, 18), MV.arm, 0.20),
  tardigrade:     A("Tardigrade", "tardigrade", ["Armor", "Wild"], B(26, 14, 96, 10), MV.arm, 0.24),
  velvetworm:     A("Velvet Worm", "velvetworm", ["Predator", "Venom"], B(34, 52, 36, 30), MV.ven, 0.22),
  barrelsponge:   A("Giant Barrel Sponge", "barrelsponge", ["Aquatic", "Armor"], B(88, 8, 82, 2), MV.aqua, 0.24),
  seasquirt:      A("Sea Squirt", "seasquirt", ["Aquatic", "Armor"], B(44, 10, 58, 4), MV.aqua, 0.32),

  // songbirds
  housesparrow:   A("House Sparrow", "housesparrow", ["Aerial", "Wild"], B(38, 34, 32, 58), MV.aer, 0.34),
  europeanrobin:  A("European Robin", "europeanrobin", ["Aerial", "Wild"], B(34, 38, 30, 62), MV.aer, 0.32),
  barnswallow:    A("Barn Swallow", "barnswallow", ["Aerial", "Swift"], B(32, 36, 26, 88), MV.aer, 0.28),
  greattit:       A("Great Tit", "greattit", ["Aerial", "Wild"], B(32, 36, 28, 64), MV.aer, 0.32),
  superblyrebird: A("Superb Lyrebird", "superblyrebird", ["Aerial", "Wild"], B(56, 44, 44, 54), MV.wild, 0.16),
  northerncardinal: A("Northern Cardinal", "northerncardinal", ["Aerial", "Ember"], B(38, 42, 32, 60), MV.aer, 0.28),
  villageweaver:  A("Village Weaver", "villageweaver", ["Aerial", "Wild"], B(34, 34, 34, 58), MV.aer, 0.32),
  zebrafinch:     A("Zebra Finch", "zebrafinch", ["Aerial", "Swift"], B(28, 30, 26, 70), MV.aer, 0.34),
  commonstarling: A("Common Starling", "commonstarling", ["Aerial", "Swift"], B(38, 40, 32, 72), MV.aer, 0.30),
  woodthrush:     A("Wood Thrush", "woodthrush", ["Aerial", "Wild"], B(36, 36, 32, 60), MV.aer, 0.28),

  greaterbop:     A("Greater Bird-of-paradise", "greaterbop", ["Aerial", "Wild"], B(46, 44, 38, 62), MV.aer, 0.14),
  satinbowerbird: A("Satin Bowerbird", "satinbowerbird", ["Aerial", "Wild"], B(44, 42, 38, 58), MV.aer, 0.20),

  // pigeons
  rockdove:       A("Rock Dove", "rockdove", ["Aerial", "Swift"], B(42, 34, 36, 76), MV.aer, 0.36),
  victoriacrowned: A("Victoria Crowned Pigeon", "victoriacrowned", ["Aerial", "Wild"], B(64, 44, 52, 44), MV.aer, 0.16),
  nicobarpigeon:  A("Nicobar Pigeon", "nicobarpigeon", ["Aerial", "Wild"], B(48, 40, 42, 62), MV.aer, 0.22),

  // shorebirds
  bartailedgodwit: A("Bar-tailed Godwit", "bartailedgodwit", ["Aerial", "Aquatic"], B(44, 36, 36, 92), MV.aer, 0.18),
  ruddyturnstone: A("Ruddy Turnstone", "ruddyturnstone", ["Aquatic", "Swift"], B(38, 38, 38, 70), MV.aqua, 0.28),
  oystercatcher:  A("Eurasian Oystercatcher", "oystercatcher", ["Aquatic", "Armor"], B(46, 44, 44, 62), MV.aqua, 0.26),
  piedavocet:     A("Pied Avocet", "piedavocet", ["Aquatic", "Aerial"], B(42, 34, 36, 66), MV.aqua, 0.26),
  redknot:        A("Red Knot", "redknot", ["Aerial", "Aquatic"], B(40, 34, 34, 84), MV.aer, 0.20),

  // jawless fish
  sealamprey:     A("Sea Lamprey", "sealamprey", ["Aquatic", "Venom"], B(52, 58, 36, 44), MV.aqua, 0.24),
  pacifichagfish: A("Pacific Hagfish", "pacifichagfish", ["Aquatic", "Armor"], B(56, 30, 64, 26), MV.aqua, 0.24),

  // limbless
  ringedcaecilian: A("Ringed Caecilian", "ringedcaecilian", ["Burrow", "Venom"], B(44, 44, 40, 32), MV.bur, 0.22),
  ibericanworm:   A("Iberian Worm Lizard", "ibericanworm", ["Burrow", "Wild"], B(36, 34, 38, 34), MV.bur, 0.26),

  // near-primates
  sundacolugo:    A("Sunda Colugo", "sundacolugo", ["Aerial", "Canopy"], B(48, 34, 42, 66), MV.can, 0.20),
  commontreeshrew: A("Common Treeshrew", "commontreeshrew", ["Swift", "Canopy"], B(34, 38, 30, 74), MV.can, 0.28),
});

const P54 = ["ochrestar","sunflowerstar","crownofthorns","purpleurchin","brittlestar","seacucumber",
  "earthworm","gippslandworm","medicinalleech","christmastreeworm","bobbitworm",
  "giantmillipede","giantcentipede","pillmillipede",
  "horseshoecrab","tardigrade","velvetworm","barrelsponge","seasquirt",
  "housesparrow","europeanrobin","barnswallow","greattit","superblyrebird","northerncardinal",
  "villageweaver","zebrafinch","commonstarling","woodthrush","greaterbop","satinbowerbird",
  "rockdove","victoriacrowned","nicobarpigeon",
  "bartailedgodwit","ruddyturnstone","oystercatcher","piedavocet","redknot",
  "sealamprey","pacifichagfish","ringedcaecilian","ibericanworm","sundacolugo","commontreeshrew"];

Object.assign(INFO, {
  ochrestar: { d: "Carnivore — mussels, barnacles, snails", h: "Rocky shores of the eastern Pacific, in the tide line", s: "LC",
    f: "The animal that gave ecology the phrase keystone species. Robert Paine pulled every one of them off a stretch of Washington shoreline and watched the mussels take over and the diversity collapse from fifteen species to eight. Nothing about its size or abundance predicted that. It eats by pushing its stomach out through its mouth and digesting the mussel inside its own shell." },
  sunflowerstar: { d: "Carnivore — urchins, snails, other sea stars", h: "Kelp forest and seafloor, Alaska to Baja", s: "CR",
    f: "Up to twenty-four arms and a metre across, and fast for a sea star — it can cross the seafloor at about a metre a minute on fifteen thousand tube feet. Sea star wasting disease removed most of the population from about 2013; it eats urchins, and where it went the urchins ate the kelp forests down to bare rock." },
  crownofthorns: { d: "Carnivore — living coral polyps", h: "Indo-Pacific reefs", s: "LC",
    f: "It eats coral by everting its stomach over the reef, and in outbreak years it is one of the largest single causes of coral loss on the Great Barrier Reef. Whether outbreaks are natural cycles or driven by nutrient runoff feeding its larvae is genuinely argued. The spines are venomous." },
  purpleurchin: { d: "Grazer — kelp and algae", h: "Eastern Pacific rocky reef", s: "LC",
    f: "Five teeth arranged in a structure called Aristotle's lantern, because Aristotle described it. When its predators are removed it grazes kelp forest into urchin barren — bare rock that can persist for decades — and it can then survive in that barren for years, nearly empty, waiting." },
  brittlestar: { d: "Detritivore — particles and small prey", h: "Seafloor worldwide, under rock and in crevices", s: "LC",
    f: "Not a sea star despite the shape: the arms are jointed and whip rather than creep, and it moves fast enough to be startling. It sheds an arm when caught and regrows it. Some beds cover the seafloor at thousands per square metre." },
  seacucumber: { d: "Detritivore — sediment", h: "Seafloor, shallow reef to abyssal plain", s: "EN",
    f: "It eats sediment and passes it back cleaned, which on a reef means it is doing what earthworms do on land. Under threat some species eject their own internal organs to distract a predator and regrow them. Overharvesting for the dried trade has emptied whole regions." },

  earthworm: { d: "Detritivore — dead leaves and soil", h: "Soil, nearly worldwide", s: "LC",
    f: "Darwin's last book was about earthworms, and its argument was that they had ploughed the whole of England slowly over millions of years. He estimated they turn tonnes of soil per acre per year. They have no lungs and breathe through their skin, which is why they come up in rain and why they die on the pavement afterwards." },
  gippslandworm: { d: "Detritivore — soil and root matter", h: "A few river valleys in South Gippsland, Victoria", s: "VU",
    f: "Up to three metres long and living entirely underground in blue-grey clay along a handful of Australian creeks. You can hear them: disturbed, they move in their burrows with an audible gurgling. They lay a single egg capsule at a time and take about five years to mature, which is why a ploughed paddock does not get them back." },
  medicinalleech: { d: "Sanguivore — blood", h: "Freshwater ponds and marshes, Europe", s: "NT",
    f: "Bled patients for two thousand years, collected nearly to extinction in the nineteenth century for that trade, and now used again in reconstructive surgery — after a graft, leeches relieve venous congestion that surgery cannot. Its saliva contains hirudin, an anticoagulant that medicine took directly from it." },
  christmastreeworm: { d: "Filter feeder — plankton", h: "Embedded in living coral heads, tropics", s: "LC",
    f: "The two spirals are gills and mouthparts on a worm whose body is buried in the coral. Touch the water near one and both vanish instantly, then re-emerge. It builds its tube into a living coral head and the coral grows around it." },
  bobbitworm: { d: "Ambush predator — fish", h: "Buried in seafloor sediment, warm oceans", s: "LC",
    f: "A polychaete up to three metres long that lives in a burrow with only its antennae exposed and strikes fast enough to cut small fish in half. Aquarium keepers have found them years after they arrived unnoticed inside live rock, having eaten most of the tank." },

  giantmillipede: { d: "Detritivore — leaf litter and rotting wood", h: "Forest floor, East and West Africa", s: "LC",
    f: "Two pairs of legs per segment, which is what makes a millipede rather than a centipede, and none of them venomous — its defence is to coil and secrete an irritant. It breaks down dead wood, which is unglamorous and is the reason forests are not knee-deep in it." },
  giantcentipede: { d: "Carnivore — insects, lizards, frogs, bats", h: "Rainforest floor and cave mouths, South America", s: "LC",
    f: "Thirty centimetres of animal with venomous forcipules — modified front legs, not jaws. It has been filmed hanging from cave ceilings by its rear legs to catch bats out of the air. One pair of legs per segment; the last pair works as a second set of antennae." },
  pillmillipede: { d: "Detritivore — leaf litter", h: "Woodland leaf litter, Europe", s: "LC",
    f: "Rolls into a sealed sphere when disturbed and is routinely mistaken for a woodlouse, which is a crustacean and not related. The convergence is close enough that the reliable way to tell them apart is to count legs after they unroll." },

  horseshoecrab: { d: "Detritivore — worms and molluscs", h: "Shallow coasts, Atlantic America and Southeast Asia", s: "VU",
    f: "Not a crab and closer to spiders and scorpions than to anything with claws. Its blue, copper-based blood clots around bacterial toxins, which made it the basis of the test that certifies vaccines and implants as sterile — so nearly every injection anyone has had was cleared by this animal. Hundreds of thousands are bled each year and returned to the sea." },
  tardigrade: { d: "Fluid feeder — plant cells, algae, microbes", h: "Moss, lichen, leaf litter, sediment, everywhere", s: "LC",
    f: "Half a millimetre long, eight legs, and able to expel almost all its water and enter a state called a tun in which it survives boiling, freezing to near absolute zero, vacuum, and radiation that would kill anything else. It has survived exposure to open space. It is not indestructible while active — only while shut down." },
  velvetworm: { d: "Predator — insects and other invertebrates", h: "Damp forest litter, tropics and southern temperate", s: "LC",
    f: "Its own phylum, and an old one: it fires two jets of glue from papillae beside its mouth to pin prey, then eats at leisure. Legs are unjointed fluid-filled stubs. Some species are social and hunt in groups with a dominant female, which nobody expected of an animal built like this." },
  barrelsponge: { d: "Filter feeder — bacteria and particles", h: "Caribbean reefs, deeper slopes", s: "LC",
    f: "Called the redwood of the reef, and individuals have been estimated at well over a century old with the largest possibly far older. It has no organs, no nerves and no muscles; it pumps thousands of litres of water a day through its body and takes the bacteria out. If it is pushed through a sieve the cells will find each other and reassemble." },
  seasquirt: { d: "Filter feeder — plankton", h: "Attached to rock and pilings, worldwide coasts", s: "LC",
    f: "The larva swims, has a notochord and a nerve cord and is recognisably related to us. When it settles it attaches head-first, reabsorbs its tail and most of its nervous system, and spends the rest of its life as a bag with two openings. Tunicates are the closest invertebrate relatives of the vertebrates." },

  housesparrow: { d: "Omnivore — seeds, insects, scraps", h: "Wherever people are, on every inhabited continent", s: "LC",
    f: "It follows humans so closely that it is barely found away from us, and it arrived in the Americas by deliberate introduction in the 1850s. Despite the range it has declined steeply in British and northern European cities since the 1990s and nobody has settled why." },
  europeanrobin: { d: "Insectivore — worms, insects, some fruit", h: "Woodland and gardens, Europe", s: "LC",
    f: "It follows gardeners for the same reason it once followed wild boar: turned soil brings up worms. It is strongly territorial and fights over ground, and it may navigate on migration using a magnetically sensitive protein in its eye — a mechanism still being worked out." },
  barnswallow: { d: "Insectivore — insects taken in flight", h: "Open country worldwide, nesting on buildings", s: "LC",
    f: "It builds mud nests on human structures across the northern hemisphere and winters in the south, and before migration was understood people explained its autumn disappearance by supposing it hibernated in the mud at the bottom of ponds. Aristotle said so and it was still being argued in the eighteenth century." },
  greattit: { d: "Omnivore — insects, seeds, nuts", h: "Woodland and gardens, Europe and Asia", s: "LC",
    f: "One of the most studied wild birds alive — the Wytham Woods population near Oxford has been followed since 1947, individually ringed, generation after generation. Much of what is known about how wild birds time their breeding to a food peak comes from this one wood." },
  superblyrebird: { d: "Insectivore — invertebrates raked from the forest floor", h: "Wet forest, southeastern Australia", s: "LC",
    f: "It copies what it hears with extraordinary accuracy, including other species' calls, and captive birds have reproduced mechanical sounds. Claims about chainsaws in the wild are contested and probably passed bird to bird rather than learned from machines. It rakes so much litter that it measurably changes fire behaviour in the forest." },
  northerncardinal: { d: "Granivore — seeds, fruit, insects", h: "Woodland edge and gardens, eastern North America", s: "LC",
    f: "Both sexes sing, which is less common in northern songbirds than the textbooks used to suggest, and pairs countersing to each other. It is the state bird of seven states, more than any other species." },
  villageweaver: { d: "Granivore — seeds and grain", h: "Sub-Saharan Africa, in colonies over water where it can", s: "LC",
    f: "The male ties the nest knot by knot with his beak and feet, hangs it from a branch tip, and the female inspects it; if she rejects it he tears it down and starts again. A single tree may hold over a hundred nests." },
  zebrafinch: { d: "Granivore — grass seed", h: "Arid and semi-arid Australia", s: "LC",
    f: "The standard laboratory songbird, and most of what is known about how a young bird learns a song from a tutor comes from it. It breeds opportunistically after rain rather than by season, which is how anything survives inland Australia." },
  commonstarling: { d: "Omnivore — insects, fruit, grain", h: "Native to Eurasia, introduced widely", s: "LC",
    f: "Its flocks form murmurations of thousands turning together, and the coordination comes from each bird tracking about seven neighbours rather than the flock as a whole. In North America it is an introduced species that spread from a small release in New York in the 1890s and competes with native cavity nesters." },
  woodthrush: { d: "Insectivore — invertebrates and fruit", h: "Eastern North American forest, wintering in Central America", s: "NT",
    f: "It sings with a divided voice box, sounding two notes at once and harmonising with itself. It has lost well over half its population since the 1960s, and the causes are split between forest fragmentation at both ends of the migration and acid rain reducing the snails it needs for calcium." },

  greaterbop: { d: "Frugivore — fruit and arthropods", h: "Lowland forest, New Guinea and the Aru Islands", s: "LC",
    f: "The scientific name means legless bird of paradise: the first skins reaching Europe had the feet removed by the traders who prepared them, and Europeans concluded the birds never landed and lived on air. The flank plumes are display structures grown for a lek, and the trade in them for hats nearly emptied whole islands." },
  satinbowerbird: { d: "Frugivore — fruit, leaves, insects", h: "Wet forest, eastern Australia", s: "LC",
    f: "The male builds a bower — not a nest, a stage — and decorates it with objects, strongly preferring blue ones, which in settled country means bottle tops and pegs. He arranges them by size to create a forced-perspective effect from where the female stands, which is deliberate manipulation of her view." },

  rockdove: { d: "Granivore — seed and scraps", h: "Cliffs originally; now cities worldwide", s: "LC",
    f: "The feral city pigeon is this bird, domesticated for thousands of years and gone loose again. Homing pigeons carried messages in both world wars and one, Cher Ami, is credited with saving a trapped American battalion in 1918. It is one of very few birds that can drink by suction, without tipping its head back." },
  victoriacrowned: { d: "Frugivore — fallen fruit and seeds", h: "Lowland forest floor, northern New Guinea", s: "NT",
    f: "The largest pigeon alive, about the size of a turkey, walking the forest floor with a lace-tipped crest. Like all pigeons it feeds its young on crop milk, a secretion from the crop lining that both parents produce — a form of lactation in a bird." },
  nicobarpigeon: { d: "Frugivore — seeds and fruit, swallowing stones to grind them", h: "Small islands from the Andamans to the Solomons", s: "NT",
    f: "Its closest living relative is the dodo, and it is the nearest thing to that bird still alive. It is an island pigeon that stayed able to fly, moving between islands too small to support a permanent population — which is precisely the strategy the dodo abandoned." },

  bartailedgodwit: { d: "Probing feeder — invertebrates in mudflats", h: "Breeds in Arctic Alaska and Siberia, winters in New Zealand and Australia", s: "NT",
    f: "It holds the record for the longest non-stop flight of any bird: a tagged juvenile flew from Alaska to Tasmania in 2022, over eleven days without landing, eating, or drinking. It shrinks its own digestive organs before departure to save weight and rebuilds them on arrival." },
  ruddyturnstone: { d: "Omnivore — invertebrates, carrion, almost anything", h: "Arctic breeding, coasts worldwide in winter", s: "LC",
    f: "Named for what it does: it flips stones, shells and seaweed to take what is underneath, and will work a wrack line methodically. It is among the least fussy of birds and has been recorded eating carrion and other birds' eggs." },
  oystercatcher: { d: "Molluscivore — cockles, mussels, worms", h: "Coasts and increasingly inland fields, Europe", s: "NT",
    f: "Individuals specialise: some hammer shells open, others stab between the valves to cut the muscle, and the bill wears to a different shape depending on which. Chicks learn the technique from their parents rather than inheriting it." },
  piedavocet: { d: "Filter feeder — small invertebrates in shallow water", h: "Shallow brackish lagoons, Europe and Asia", s: "LC",
    f: "The upturned bill is swept side to side through soft mud to catch what it touches. It stopped breeding in Britain in the nineteenth century and returned during the Second World War, when coastal land was deliberately flooded as a defence against invasion and made exactly the habitat it needed. It is the RSPB's emblem." },
  redknot: { d: "Probing feeder — bivalves, and horseshoe crab eggs on migration", h: "High Arctic breeding, coasts as far as Tierra del Fuego", s: "NT",
    f: "One subspecies times its northward migration to arrive at Delaware Bay exactly when horseshoe crabs spawn, and doubles its weight on the eggs in a fortnight. When crab harvesting cut the egg supply the knots arrived to nothing, and the two species' conservation is now a single problem." },

  sealamprey: { d: "Parasite — blood and body fluid of fish", h: "Atlantic coasts and rivers; invasive in the Great Lakes", s: "LC",
    f: "No jaws: a sucking disc of rasping teeth that attaches to a fish and takes fluid. Lampreys are among the oldest living vertebrate lineages, older than jaws themselves. In the Great Lakes, reached through shipping canals, it collapsed the lake trout fishery and is still held down by an ongoing control programme." },
  pacifichagfish: { d: "Scavenger — carcasses on the seafloor", h: "Cold deep water, eastern Pacific", s: "LC",
    f: "It produces slime in astonishing volume — a few grams of gland exudate expands into litres of it within seconds — which clogs the gills of anything trying to eat it. It has a skull and no vertebrae, ties itself in a knot to tear food, and can absorb nutrients through its skin." },

  ringedcaecilian: { d: "Carnivore — worms and soil invertebrates", h: "Damp soil and stream banks, South America", s: "LC",
    f: "An amphibian with no legs, eyes reduced to almost nothing under skin or bone, and a pair of retractable tentacles for chemical sensing. In some species the young eat the mother's outer layer of skin, which she regrows for them — a feeding strategy called dermatophagy. There are around 200 species and most people have never heard of the order." },
  ibericanworm: { d: "Insectivore — ants, termites, larvae", h: "Under soil and stones, Iberia and northwest Africa", s: "LC",
    f: "A reptile, not a worm and not a snake: amphisbaenians are their own group, tunnelling head-first with a reinforced skull and skin that moves over the body like a concertina. Some species have kept their front legs and lost the rest, which is a strange thing to find halfway." },

  sundacolugo: { d: "Folivore — leaves, shoots, flowers", h: "Forest canopy, Southeast Asia", s: "LC",
    f: "The most complete gliding membrane of any mammal, running to the fingertips, toes and tail tip, and glides of over a hundred metres have been recorded. Its teeth are extraordinary: the lower incisors are combs with up to twenty tines each. Colugos and treeshrews are the closest living branches to primates." },
  commontreeshrew: { d: "Omnivore — insects and fruit", h: "Forest, Southeast Asia", s: "LC",
    f: "Not a shrew and only distantly related, but close to primates, which is why it has been used as a model animal. It has one of the highest brain-to-body mass ratios of any mammal. Some populations drink fermented palm nectar daily at alcohol levels that would impair a human, apparently without effect." },
});

/* Learnsets and placement.

   part17 and part31 sweep the whole dex long before this file loads, so these
   45 would otherwise know no moves. Same builder, same rules, applied to the
   new keys only. */
{
  let built = 0; const thin = [];
  P54.forEach((k) => {
    const b = buildLearnset(k);
    if (!b || !b.start.length) { thin.push(k); return; }
    DEX[k].m = b.start.slice(0, 3);
    DEX[k].l = b.learn.filter(([, mv]) => !DEX[k].m.includes(mv));
    built++;
  });

  /* Where they live. Added to existing pools rather than given a region: these
     are animals that were always supposed to be part of the world, not a new
     place to visit. An earthworm belongs under the same soil the moles are in.

     Weights are low. Adding 45 species to the pools they belong in would
     otherwise thin out everything already there. */
  const PLACE = {
    Aquatic: ["ochrestar", "sunflowerstar", "crownofthorns", "purpleurchin", "brittlestar",
              "seacucumber", "christmastreeworm", "bobbitworm", "barrelsponge", "seasquirt",
              "horseshoecrab", "sealamprey", "pacifichagfish", "medicinalleech",
              "ruddyturnstone", "oystercatcher", "piedavocet", "redknot", "bartailedgodwit"],
    Burrow:  ["earthworm", "gippslandworm", "giantmillipede", "pillmillipede", "tardigrade",
              "velvetworm", "ringedcaecilian", "ibericanworm", "giantcentipede"],
    Aerial:  ["housesparrow", "europeanrobin", "barnswallow", "greattit", "northerncardinal",
              "villageweaver", "zebrafinch", "commonstarling", "woodthrush", "rockdove",
              "nicobarpigeon", "greaterbop", "satinbowerbird", "victoriacrowned", "superblyrebird"],
    Canopy:  ["sundacolugo", "commontreeshrew"],
  };
  const placed = new Set();
  let added = 0;
  Object.entries(PLACE).forEach(([type, list]) => {
    // Every map whose existing pool already leans this way, so a sea star ends
    // up on a shore and not in a desert.
    const maps = Object.keys(MAPS).filter((m) => {
      const pool = MAPS[m].pool;
      if (!pool || !pool.length || m.startsWith("vig") || m.startsWith("arc")) return false;
      const share = pool.filter(([sp]) => DEX[sp] && DEX[sp].t.includes(type)).length / pool.length;
      return share >= 0.4;
    });
    list.forEach((k) => {
      maps.forEach((m) => { MAPS[m].pool = [...MAPS[m].pool, [k, 2]]; added++; });
      if (maps.length) placed.add(k);
    });
  });

  // Anything with nowhere to go would be visible in the guide and impossible to
  // meet, which is worse than not adding it.
  const homeless = P54.filter((k) => !placed.has(k));
  homeless.forEach((k) => {
    const t = DEX[k].t[0];
    const best = Object.keys(MAPS).filter((m) => MAPS[m].pool && MAPS[m].pool.length && !m.startsWith("vig") && !m.startsWith("arc"))
      .sort((a, b) => {
        const sc = (m) => MAPS[m].pool.filter(([sp]) => DEX[sp] && DEX[sp].t.includes(t)).length / MAPS[m].pool.length;
        return sc(b) - sc(a);
      }).slice(0, 3);
    best.forEach((m) => { MAPS[m].pool = [...MAPS[m].pool, [k, 2]]; added++; });
    if (best.length) placed.add(k);
  });

  console.log(`[part54] missing groups: ${P54.length} species | learnsets: ${built}`
    + ` | pool entries added: ${added} | reachable: ${placed.size}/${P54.length}`
    + (thin.length ? ` | NO MOVES: ${thin.join(", ")}` : "")
    + (placed.size < P54.length ? ` | UNREACHABLE: ${P54.filter((k) => !placed.has(k)).join(", ")}` : ""));
}
