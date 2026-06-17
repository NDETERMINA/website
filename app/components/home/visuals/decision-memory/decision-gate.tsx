import { DecisionBolts } from "./gate/decision-bolts";
import { DecisionGateFace } from "./gate/decision-gate-face";
import { DecisionGateLabels } from "./gate/decision-gate-labels";
import { DecisionPorts } from "./gate/decision-ports";

export function DecisionGate() {
  return (
    <g className="decision-gate">
      <DecisionGateFace />
      <DecisionBolts />
      <DecisionPorts />
      <DecisionGateLabels />
    </g>
  );
}
