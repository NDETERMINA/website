const pilotPins = [
  ["01", "system", "rank / retrieve / act", 126, 220],
  ["02", "world", "conditions around it", 360, 128],
  ["03", "trace", "behavior observed", 514, 228],
  ["04", "evidence", "packet assembled", 682, 274],
  ["05", "review", "decision returned", 840, 166]
] as const;

export function PilotMapPins() {
  return (
    <g className="pilot-map-pins">
      {pilotPins.map(([number, label, detail, x, y]) => (
        <g key={number} transform={`translate(${x} ${y})`}>
          <circle r="12" />
          <circle r="38" />
          <text className="pilot-pin-number" x="-8" y="-58">{number}</text>
          <text x="18" y="-60">{label}</text>
          <text className="pilot-pin-detail" x="18" y="-40">{detail}</text>
        </g>
      ))}
    </g>
  );
}
