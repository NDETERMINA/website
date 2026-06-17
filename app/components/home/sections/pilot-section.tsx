import { PilotBoard } from "../pilot/pilot-board";
import { PilotCopy } from "../pilot/pilot-copy";
import { PilotMissionList } from "../pilot/pilot-mission-list";

export function PilotSection() {
  return (
    <section className="pilot-section" id="pilot" aria-labelledby="pilot-title">
      <div className="pilot-layout">
        <PilotCopy />
        <PilotBoard />
      </div>
      <PilotMissionList />
    </section>
  );
}
