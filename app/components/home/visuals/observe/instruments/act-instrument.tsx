export function ActInstrument() {
  return (
    <g className="act-instrument">
      <text x="704" y="488">act behavior</text>
      <path d="M704 536 C770 526 820 536 870 552 C912 566 944 560 982 542" />
      <path d="M704 564 C780 578 840 582 910 568" />
      {[748, 810, 872, 934].map((x, index) => (
        <rect key={x} x={x} y={index % 2 === 0 ? 532 : 560} width={10} height={10} />
      ))}
      <circle cx="950" cy="516" r="18" />
      <path d="M940 506 L960 526" />
      <path d="M960 506 L940 526" />
    </g>
  );
}
