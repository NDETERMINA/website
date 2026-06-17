import { boltPositions } from "./bolt-positions";

export function DecisionBolts() {
  return (
    <>
      {boltPositions.map(([x, y], index) => (
        <g className="decision-bolt" key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <circle r={index < 4 ? "7" : "4.2"} />
          <path d={index < 4 ? "M-3.6 0 H3.6" : "M-2.2 0 H2.2"} />
        </g>
      ))}
    </>
  );
}
