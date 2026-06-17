import { observeIncidents } from "./content";

export function ObserveIncidentRail() {
  return (
    <div className="observe-incident-rail" aria-label="Observed behavior examples">
      {observeIncidents.map(([type, title, incident]) => (
        <article key={type} className={`observe-incident observe-incident-${type}`}>
          <span>{type}</span>
          <h3>{title}</h3>
          <p>{incident}</p>
        </article>
      ))}
    </div>
  );
}
