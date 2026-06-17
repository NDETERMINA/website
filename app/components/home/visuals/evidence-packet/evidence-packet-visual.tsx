import {
  Check,
  Crosshair,
  Database,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal
} from "lucide-react";

const processSteps = [
  {
    icon: SlidersHorizontal,
    number: "01",
    label: "Trace",
    detail: "behavior path as executed"
  },
  {
    icon: Crosshair,
    number: "02",
    label: "Lens",
    detail: "who, where, and how"
  },
  {
    icon: RotateCcw,
    number: "03",
    label: "Diff",
    detail: "what changed and by how much"
  },
  {
    icon: ShieldCheck,
    number: "04",
    label: "Verifier",
    detail: "policy checks and signals"
  },
  {
    icon: Check,
    number: "05",
    label: "Decision",
    detail: "review, ship, or block"
  },
  {
    icon: Database,
    number: "06",
    label: "Memory",
    detail: "reusable for future reruns"
  }
] as const;

export function EvidencePacketVisual() {
  return (
    <div className="evidence-board" aria-hidden="true">
      <span className="evidence-corner-mark evidence-corner-mark-a" />
      <span className="evidence-corner-mark evidence-corner-mark-b" />
      <svg className="evidence-connectors" viewBox="0 0 1000 610" preserveAspectRatio="none">
        <path d="M214 136 H372 Q390 136 390 154 V188 H468" />
        <path d="M224 296 H360 Q380 296 380 272 V248 H468" />
        <path d="M138 446 H330 Q354 446 354 390 V338 H482" />
        <path d="M666 182 H724 Q746 182 746 142 V126 H910" />
        <path d="M660 318 H770 Q792 318 792 294 H858" />
        <path d="M642 468 H734 Q758 468 758 432 H836" />
      </svg>

      <article className="evidence-paper artifact-card trace-card">
        <span className="paper-pin" />
        <span className="paper-tab" />
        <h3>Trace Path</h3>
        <p>ranker &rarr; profile_merge &rarr;</p>
        <p>candidate_pool &rarr; rerank &rarr;</p>
        <p>results</p>
        <svg className="trace-graph" viewBox="0 0 210 88">
          <path d="M10 50 H40 C66 50 70 22 98 22 C132 22 132 66 164 66 H198" />
          <path d="M10 76 H44 C82 76 84 48 112 48 C140 48 142 24 176 24 H198" />
          <path d="M10 24 H52 C86 24 92 68 124 68 C150 68 156 48 198 48" />
          <circle cx="10" cy="50" r="5" />
          <circle cx="40" cy="50" r="5" />
          <circle cx="98" cy="22" r="5" />
          <circle cx="112" cy="48" r="5" />
          <circle cx="164" cy="66" r="5" />
          <circle cx="176" cy="24" r="5" />
          <rect x="194" y="43" width="8" height="8" />
          <rect x="194" y="62" width="8" height="8" />
        </svg>
        <footer>trace_8f92.json</footer>
      </article>

      <article className="evidence-paper artifact-card lens-card">
        <span className="paper-pin" />
        <span className="lens-crosshair" />
        <h3>
          Cohort / Source / Tool
          <span>Lens</span>
        </h3>
        <dl className="lens-list">
          <div><dt>cohort</dt><dd>enterprise users</dd></div>
          <div><dt>source</dt><dd>catalog_search</dd></div>
          <div><dt>tool</dt><dd>policy_scorer v2</dd></div>
        </dl>
        <footer>lens_1a7c.yml</footer>
      </article>

      <article className="evidence-paper artifact-card diff-card">
        <span className="paper-pin" />
        <h3>State Diff</h3>
        <table>
          <thead>
            <tr>
              <th />
              <th>Before</th>
              <th>After</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>rank position</td>
              <td>7</td>
              <td>1</td>
              <td>&uarr; +6</td>
            </tr>
            <tr>
              <td>score</td>
              <td>0.412</td>
              <td>0.782</td>
              <td>&uarr; +0.370</td>
            </tr>
            <tr>
              <td>policy flag</td>
              <td>false</td>
              <td>true</td>
              <td>changed</td>
            </tr>
          </tbody>
        </table>
        <footer>diff_a1b2.ndjson</footer>
      </article>

      <article className="evidence-dossier" aria-label="Evidence packet DET-9183">
        <span className="dossier-sheet dossier-sheet-back" />
        <span className="dossier-sheet dossier-sheet-mid" />
        <div className="dossier-front">
          <span className="dossier-hole dossier-hole-top" />
          <span className="dossier-hole dossier-hole-bottom" />
          <span className="dossier-cord" />
          <span className="dossier-fold" />
          <div className="dossier-inner">
            <h3>Evidence Packet</h3>
            <p className="dossier-id">det-9183</p>
            <p>assembled 05 / 14 / 25 16:42</p>
            <p>scenario: policy update</p>
            <p>cohort: enterprise</p>
            <p>system: recommender v4.7.2</p>
            <div className="review-stamp">
              <span>Ready for decision</span>
              <strong>Review</strong>
              <span>Before rollout</span>
            </div>
            <div className="dossier-stats">
              <span>43 artifacts</span>
              <span>7 findings</span>
            </div>
            <div className="barcode">
              {Array.from({ length: 32 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="evidence-paper artifact-card verifier-card">
        <span className="paper-pin" />
        <ShieldCheck className="card-icon" aria-hidden="true" />
        <h3>Verifier Result</h3>
        <p className="strong">Policy Support: Present</p>
        <p>ordering: unstable</p>
        <footer>verifier_9c4d.log</footer>
      </article>

      <div className="decision-cluster">
        <article className="evidence-paper artifact-card decision-card">
          <span className="paper-pin" />
          <h3>Decision</h3>
          <div className="decision-review-box">Review</div>
          <p>review cohort policy</p>
          <p>before rollout</p>
          <footer>decision.yml</footer>
        </article>
        <div className="decision-options">
          <p><span /> <strong>Ship</strong><em>meets threshold</em></p>
          <p className="is-selected"><span /> <strong>Review</strong><em>needs attention</em></p>
          <p><span /> <strong>Block</strong><em>doesn&apos;t meet bar</em></p>
        </div>
      </div>

      <article className="evidence-paper artifact-card memory-card">
        <span className="paper-pin" />
        <Database className="card-icon" aria-hidden="true" />
        <h3>Rerun Memory</h3>
        <p>promotion candidate</p>
        <p>for similar profiles</p>
        <footer>memory_ref_77a1</footer>
      </article>

      <div className="evidence-process-row">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div className="evidence-process-step" key={step.number}>
              <span className="process-icon"><Icon size={24} strokeWidth={1.45} /></span>
              <div>
                <p><span>{step.number}</span> {step.label}</p>
                <small>{step.detail}</small>
              </div>
              {index < processSteps.length - 1 ? <i className="process-arrow" /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
