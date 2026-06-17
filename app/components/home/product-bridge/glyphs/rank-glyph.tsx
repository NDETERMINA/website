export function RankGlyph() {
  return (
    <svg className="home-product-route-glyph" viewBox="0 0 220 70" aria-hidden="true">
      <path className="glyph-rule" d="M2 56 H218" />
      <path className="glyph-muted" d="M2 26 H218" />
      <path className="glyph-muted is-soft" d="M2 42 H218" />
      <path className="glyph-main" d="M10 47 C32 39 50 32 72 35 C96 38 110 28 130 20 C154 10 172 23 206 15" />
      <path className="glyph-muted is-trace" d="M10 49 C42 45 58 45 78 49 C108 56 134 38 164 40 C184 41 198 32 214 20" />
      <circle cx="44" cy="39" r="5" />
      <circle cx="83" cy="35" r="4.4" />
      <circle className="glyph-fill" cx="137" cy="18" r="7.4" />
      <circle cx="210" cy="15" r="14" />
      <path className="glyph-tick" d="M44 56 V60 M83 56 V60 M137 56 V60 M210 56 V60" />
      <text x="8" y="66">rank drift</text>
      <text x="154" y="66">#7 -&gt; #1</text>
    </svg>
  );
}
