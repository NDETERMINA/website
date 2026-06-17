const pilotMissions = [
  ["01 Send", "Share the system, planned change, and behavior concern."],
  ["02 Rehearse", "Determina runs the change in a production-like world."],
  ["03 Decide", "You get traces, diffs, and a reviewable release packet."]
] as const;

export function PilotMissionList() {
  return (
    <ul className="pilot-outcome-list" aria-label="Pilot deliverables">
      {pilotMissions.map(([step, label]) => (
        <li key={step}>
          <span>{step}</span>
          {label}
        </li>
      ))}
    </ul>
  );
}
