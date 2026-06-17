export function PilotMapNoise() {
  return (
    <g className="pilot-map-noise">
      {Array.from({ length: 42 }, (_, index) => {
        const x = 74 + (index % 14) * 26 + Math.floor(index / 14) * 44;
        const y = 94 + (index % 7) * 32 + Math.floor(index / 14) * 18;
        const size = index % 5 === 0 ? 6 : index % 3 === 0 ? 4 : 3;

        return <rect key={`${x}-${y}`} x={x} y={y} width={size} height={size} />;
      })}
    </g>
  );
}
