export function DecisionOutcomes() {
  return (
    <g className="decision-outcomes">
      <g className="decision-outcome is-ship" transform="translate(650 112)">
        <circle r="34" />
        <circle className="decision-outcome-inner" r="24" />
        <path d="M-13 0 l8 10 l19 -24" />
      </g>
      <text x="704" y="108">ship</text>
      <text className="decision-outcome-small" x="704" y="132">meets policy threshold</text>
      <g className="decision-outcome is-review is-active" transform="translate(650 212)">
        <circle r="34" />
        <circle className="decision-outcome-inner" r="24" />
        <path d="M-12 0 H12" />
      </g>
      <text x="704" y="208">review</text>
      <text className="decision-outcome-small" x="704" y="232">requires human review</text>
      <g className="decision-outcome is-block" transform="translate(650 312)">
        <circle r="34" />
        <circle className="decision-outcome-inner" r="24" />
        <path d="M-11 -11 L11 11" />
        <path d="M11 -11 L-11 11" />
      </g>
      <text x="704" y="308">block</text>
      <text className="decision-outcome-small" x="704" y="332">violates guardrail</text>
    </g>
  );
}
