export function DecisionGateLabels() {
  return (
    <>
      <path className="decision-gate-axis" d="M430 64 V130 M430 294 V362" />
      <path className="decision-gate-axis decision-axis-ticks" d="M424 82 H436 M424 342 H436 M424 116 H436 M424 308 H436" />
      <path className="decision-gate-cross" d="M392 212 H468 M430 174 V250" />
      <path className="decision-gate-cross decision-label-guides" d="M406 194 H454 M406 230 H454 M412 184 V240 M448 184 V240" />
      <text className="decision-gate-label" x="430" y="74" fill="#656b3c">decision gate</text>
      <path className="decision-title-divider" d="M392 213 H468" />
      <text className="decision-title-text" x="430" y="202">release</text>
      <text className="decision-title-text" x="430" y="230">decision</text>
    </>
  );
}
