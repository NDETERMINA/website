import { PilotTicket } from "./pilot-ticket";

export function PilotBoard() {
  return (
    <div className="pilot-intake-card" aria-label="Pilot intake summary">
      <PilotTicket />
    </div>
  );
}
