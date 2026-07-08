export function PilotTicket() {
  return (
    <>
      <span>checklist</span>
      <strong>What to send</strong>
      <dl className="pilot-intake-list">
        <div>
          <dt>System</dt>
          <dd>Recommender, search/RAG, or agent workflow.</dd>
        </div>
        <div>
          <dt>Change</dt>
          <dd>Model, policy, source, or tool update.</dd>
        </div>
        <div>
          <dt>Concern</dt>
          <dd>The behavior your team wants checked before rollout.</dd>
        </div>
        <div>
          <dt>Return</dt>
          <dd>An evidence packet your team can inspect and reuse.</dd>
        </div>
      </dl>
    </>
  );
}
