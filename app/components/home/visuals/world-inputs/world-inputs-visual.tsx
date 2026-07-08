import { RegistrationMarks } from "./registration-marks";
import { WorldEnginePort } from "./world-engine-port";
import { WorldIntakeCloud } from "./world-intake-cloud";
import { WorldRowPaths } from "./world-row-paths";

export function WorldInputsVisual() {
  return (
    <svg className="world-visual" viewBox="0 0 1120 530" aria-hidden="true">
      <RegistrationMarks />
      <WorldIntakeCloud />
      <WorldRowPaths />
      <WorldEnginePort />
    </svg>
  );
}
