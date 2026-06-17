const tickAngles = Array.from({ length: 60 }, (_, index) => index * 6);
const boltAngles = Array.from({ length: 24 }, (_, index) => index * 15);
const lugAngles = [0, 90, 180, 270];
const screwPositions = [
  [-82, -82],
  [82, -82],
  [82, 82],
  [-82, 82]
] as const;

function svgNumber(value: number) {
  return Number(value.toFixed(3)).toString();
}

type RehearsalEngineCoreProps = {
  cx?: number;
  cy?: number;
  scale?: number;
  idPrefix?: string;
  className?: string;
  showField?: boolean;
};

export function RehearsalEngineCore({
  cx = 0,
  cy = 0,
  scale = 1,
  idPrefix = "rehearsal-engine",
  className = "",
  showField = true
}: RehearsalEngineCoreProps) {
  const metalId = `${idPrefix}-metal`;
  const faceId = `${idPrefix}-face`;
  const glassId = `${idPrefix}-glass`;
  const shadowId = `${idPrefix}-shadow`;

  return (
    <g
      className={["rehearsal-engine-core", className].filter(Boolean).join(" ")}
      transform={`translate(${cx} ${cy}) scale(${scale})`}
    >
      <defs>
        <radialGradient id={metalId} cx="42%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#f4efe5" />
          <stop offset="42%" stopColor="#b7ad9c" />
          <stop offset="74%" stopColor="#5f6056" />
          <stop offset="100%" stopColor="#252821" />
        </radialGradient>
        <radialGradient id={faceId} cx="38%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#242821" />
          <stop offset="58%" stopColor="#0c0d0a" />
          <stop offset="100%" stopColor="#010201" />
        </radialGradient>
        <linearGradient id={glassId} x1="-70" y1="-82" x2="54" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="52%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadowId} x="-34%" y="-34%" width="168%" height="168%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#18160f" floodOpacity="0.2" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#18160f" floodOpacity="0.18" />
        </filter>
      </defs>

      {showField ? (
        <g className="rehearsal-engine-field" aria-hidden="true">
          <circle r="168" />
          <circle className="is-dashed" r="138" />
          <path d="M0 -198 V-156 M0 156 V198 M-198 0 H-156 M156 0 H198" />
          <path d="M-136 -136 l14 14 M136 -136 l-14 14 M136 136 l-14 -14 M-136 136 l14 -14" />
        </g>
      ) : null}

      <g className="rehearsal-engine-hardware" filter={`url(#${shadowId})`}>
        {lugAngles.map((angle) => (
          <g key={angle} className="rehearsal-engine-lug" transform={`rotate(${angle}) translate(0 -118)`}>
            <rect x="-18" y="-29" width="36" height="48" rx="10" />
            <path d="M-10 -18 V8 M0 -21 V11 M10 -18 V8" />
            <circle cx="0" cy="20" r="8" />
          </g>
        ))}

        <circle className="rehearsal-engine-halo" r="128" />
        <circle className="rehearsal-engine-rim is-outer" r="118" />
        <circle className="rehearsal-engine-rim is-metal" r="111" fill={`url(#${metalId})`} />
        <circle className="rehearsal-engine-rim is-channel" r="102" />
        <circle className="rehearsal-engine-face" r="89" fill={`url(#${faceId})`} />
        <circle className="rehearsal-engine-face-ring" r="79" />
        <circle className="rehearsal-engine-glass" r="86" fill={`url(#${glassId})`} />

        <g className="rehearsal-engine-bolts">
          {boltAngles.map((angle, index) => {
            const radians = (angle * Math.PI) / 180;
            const radius = index % 2 === 0 ? 105 : 101;
            const x = svgNumber(Math.cos(radians) * radius);
            const y = svgNumber(Math.sin(radians) * radius);

            return (
              <g key={angle} transform={`translate(${x} ${y}) rotate(${angle})`}>
                <circle r={index % 6 === 0 ? "4.8" : "2.8"} />
                {index % 6 === 0 ? <path d="M-2.8 0 H2.8" /> : null}
              </g>
            );
          })}
        </g>

        <g className="rehearsal-engine-ticks">
          {tickAngles.map((angle, index) => (
            <path
              key={angle}
              className={index % 5 === 0 ? "is-major" : undefined}
              d={index % 5 === 0 ? "M0 -78 V-68" : "M0 -78 V-73"}
              transform={`rotate(${angle})`}
            />
          ))}
        </g>

        {screwPositions.map(([x, y]) => (
          <g className="rehearsal-engine-screw" key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
            <circle r="9.5" />
            <circle r="4.2" />
            <path d="M-4.8 0 H4.8" />
          </g>
        ))}

        <path className="rehearsal-engine-crosshair" d="M0 -62 V-40 M0 40 V62 M-62 0 H-40 M40 0 H62" />
        <path className="rehearsal-engine-console" d="M-13 -34 H13 M-18 -25 H18 M-9 -16 H9" />
        <text className="rehearsal-engine-title" x="0" y="-4" textAnchor="middle">REHEARSAL</text>
        <text className="rehearsal-engine-title" x="0" y="25" textAnchor="middle">ENGINE</text>
        <text className="rehearsal-engine-caption" x="0" y="48" textAnchor="middle">run / watch / decide</text>
      </g>
    </g>
  );
}
