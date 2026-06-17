import { ObserveEngine } from "./observe-engine";
import { ObserveInstruments } from "./observe-instruments";
import { ObserveIntake } from "./observe-intake";
import { ObservePipes } from "./observe-pipes";

export function ObserveVisual() {
  return (
    <svg className="observe-visual" viewBox="0 0 1020 620" aria-hidden="true">
      <ObserveIntake />
      <ObserveEngine />
      <ObservePipes />
      <ObserveInstruments />
      <g className="observe-footer-labels">
        <text x="360" y="572">evidence attaches</text>
      </g>
    </svg>
  );
}
