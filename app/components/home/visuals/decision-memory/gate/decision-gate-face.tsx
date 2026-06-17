export function DecisionGateFace() {
  return (
    <>
      <circle className="decision-gate-calibration is-wide" cx="430" cy="212" r="158" />
      <circle className="decision-gate-bolt-ring" cx="430" cy="212" r="128" />
      <circle className="decision-gate-calibration" cx="430" cy="212" r="146" />
      <circle className="decision-gate-outer" cx="430" cy="212" r="104" />
      <circle className="decision-gate-rim-highlight" cx="430" cy="212" r="98" />
      <circle className="decision-gate-rim-dark" cx="430" cy="212" r="90" />
      <circle className="decision-gate-face" cx="430" cy="212" r="81" />
      <circle className="decision-gate-inner" cx="430" cy="212" r="65" />
      {Array.from({ length: 40 }, (_, index) => {
        const angle = index * 9;
        const radians = (angle * Math.PI) / 180;
        const major = index % 5 === 0;
        const x1 = 430 + Math.cos(radians) * (major ? 68 : 72);
        const y1 = 212 + Math.sin(radians) * (major ? 68 : 72);
        const x2 = 430 + Math.cos(radians) * 77;
        const y2 = 212 + Math.sin(radians) * 77;
        return <path key={angle} className="decision-gate-tick" d={`M${x1} ${y1} L${x2} ${y2}`} />;
      })}
    </>
  );
}
