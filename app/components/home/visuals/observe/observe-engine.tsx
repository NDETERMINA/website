import { RehearsalEngineCore } from "../rehearsal-engine/rehearsal-engine-core";

export function ObserveEngine() {
  return (
    <g className="observe-engine">
      <RehearsalEngineCore cx={360} cy={250} scale={0.84} idPrefix="observe-engine-core" />
    </g>
  );
}
