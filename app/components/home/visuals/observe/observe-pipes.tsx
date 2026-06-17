export function ObservePipes() {
  return (
    <g className="observe-pipes">
      <path className="pipe-shadow" d="M492 202 H560 C612 202 596 158 650 158 H696" />
      <path className="pipe-line" d="M492 202 H560 C612 202 596 158 650 158 H696" />
      <path className="pipe-shadow" d="M498 250 H650" />
      <path className="pipe-line" d="M498 250 H650" />
      <path className="pipe-shadow" d="M492 298 H560 C624 298 592 492 650 492 H696" />
      <path className="pipe-line" d="M492 298 H560 C624 298 592 492 650 492 H696" />
      {[526, 604, 708].map((x) => (
        <g key={`rank-${x}`} className="pipe-collar">
          <rect x={x} y="190" width="12" height="24" />
          <rect x={x + 16} y="190" width="12" height="24" />
        </g>
      ))}
      {[540, 654].map((x) => (
        <g key={`retrieve-${x}`} className="pipe-collar">
          <rect x={x} y="238" width="12" height="24" />
          <rect x={x + 16} y="238" width="12" height="24" />
        </g>
      ))}
      {[526, 600, 708].map((x) => (
        <g key={`act-${x}`} className="pipe-collar">
          <rect x={x} y="286" width="12" height="24" />
          <rect x={x + 16} y="286" width="12" height="24" />
        </g>
      ))}
    </g>
  );
}
