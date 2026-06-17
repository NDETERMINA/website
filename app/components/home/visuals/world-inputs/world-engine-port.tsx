import { RehearsalEngineCore } from "../rehearsal-engine/rehearsal-engine-core";

export function WorldEnginePort() {
  return (
    <g className="world-engine-port" transform="translate(966 278) scale(0.62)">
      <RehearsalEngineCore idPrefix="world-inputs-engine" />
    </g>
  );
}
