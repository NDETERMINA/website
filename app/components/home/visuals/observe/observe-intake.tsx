export function ObserveIntake() {
  return (
    <g className="observe-intake">
      <path d="M20 210 C104 176 196 182 304 250" />
      <path d="M26 250 C118 230 206 230 304 250" />
      <path d="M20 290 C112 326 202 318 304 250" />
      {[58, 84, 118, 154, 188, 226, 258].map((x, index) => (
        <rect
          key={x}
          x={x}
          y={index % 2 === 0 ? 216 + index * 8 : 306 - index * 9}
          width={index % 3 === 0 ? 8 : 5}
          height={index % 3 === 0 ? 8 : 5}
        />
      ))}
      <text x="138" y="174">rehearsal world</text>
    </g>
  );
}
