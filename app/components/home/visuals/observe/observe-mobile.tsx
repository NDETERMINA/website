const observedBehaviors = [
  {
    key: "rank",
    label: "Rank behavior",
    detail: "Ranking shifts and candidate movement over time."
  },
  {
    key: "retrieve",
    label: "Retrieve behavior",
    detail: "Source paths, citations, and context coverage."
  },
  {
    key: "act",
    label: "Act behavior",
    detail: "Tool calls, resources used, and side effects."
  }
] as const;

export function ObserveMobile() {
  return (
    <div className="observe-mobile" aria-label="Observed AI behavior: the rehearsal engine records rank, retrieve, and act behavior">
      <div className="observe-mobile-engine">
        <span className="observe-mobile-engine-dial" />
        <span className="tech-label">Rehearsal engine</span>
      </div>
      <ul className="observe-mobile-list">
        {observedBehaviors.map((behavior) => (
          <li key={behavior.key} className="observe-mobile-row" data-behavior={behavior.key}>
            <span className="observe-mobile-label">{behavior.label}</span>
            <span className="observe-mobile-detail">{behavior.detail}</span>
          </li>
        ))}
      </ul>
      <p className="observe-mobile-note tech-label">Evidence attaches</p>
    </div>
  );
}
