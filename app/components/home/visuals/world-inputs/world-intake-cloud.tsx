const intakeMarkers = Array.from({ length: 238 }, (_, index) => {
  const column = index % 34;
  const band = Math.floor(index / 34);
  const x = 2 + column * 9.2 + band * 10 + ((index * 7) % 9);
  const spread = Math.max(0, column - 5) * 2.2;
  const y = 326 + ((column * 13 + band * 31) % 126) - band * 6 - spread * 0.32;
  const size = index % 23 === 0 ? 5.2 : index % 9 === 0 ? 3.8 : index % 4 === 0 ? 2.8 : 1.9;
  const opacity = [0.16, 0.24, 0.34, 0.5, 0.7, 0.82][index % 6];

  return { x, y, size, opacity };
});

export function WorldIntakeCloud() {
  return (
    <g className="world-intake-cloud">
      {intakeMarkers.map(({ opacity, size, x, y }, index) => (
        <rect
          key={`${x}-${y}-${index}`}
          x={x}
          y={y}
          width={size}
          height={size}
          style={{ opacity }}
        />
      ))}
      <path className="world-intake-rule" d="M-28 378 H300" />
      <rect className="world-intake-label-shield" x="6" y="486" width="190" height="64" rx="10" />
      <text x="14" y="502">Incoming behavior streams ▸</text>
      <text className="world-small" x="14" y="527">Traces from production</text>
      <text className="world-small" x="14" y="544">and prior rehearsals.</text>
    </g>
  );
}
