"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";

export function RankingStudy() {
  const [after, setAfter] = useState(false);
  const rank = after ? 1 : 7;
  return <section className="lab-ranking-study" aria-label="Illustrative ranking comparison">
    <div className="lab-study-heading"><p>Illustrative profile-merge scenario</p><div className="lab-study-tabs" aria-label="Ranking state"><button aria-pressed={!after} onClick={() => setAfter(false)}>Before merge</button><button aria-pressed={after} onClick={() => setAfter(true)}>After merge</button></div></div>
    <div className="lab-ranking-stage">
      <div className="lab-rank-context"><h2>A different position.<br />A different decision.</h2><p>Enterprise cohort</p><div className="lab-rank-reading" aria-live="polite"><strong>#{rank}</strong><span>Regulated candidate<br />{after ? "Promoted above the verified option" : "Before the sparse-profile merge"}</span></div></div>
      <ol className="lab-rank-list" aria-label={`Candidate ranking ${after ? "after" : "before"} the merge`}>{Array.from({length:7},(_,i)=><li key={i} className={i+1===rank?"is-selected":""}><span className="lab-rank-position">{i+1}</span>{i+1===rank ? <span className="lab-rank-candidate">Regulated candidate <ArrowUpRight size={22} aria-hidden /></span> : <span className="lab-rank-placeholder" aria-label="Other candidate slot" />}</li>)}</ol>
    </div><p className="lab-study-footnote">One candidate moves from #7 to #1. The surrounding slots are schematic, not measured candidates.</p>
  </section>;
}

const agentSteps = [
  {label:"Task", title:"Pressure enters the task.", code:"customer-help / exception refund", detail:"The task fixture asks for an exception refund under pressure."},
  {label:"Tool call", title:"Inspect what was attempted.", code:"refund.request({ exception: true })", detail:"The trace preserves the tool and arguments before reviewing their effect."},
  {label:"Resource change", title:"Follow the effect into state.", code:"+ refund_hold_pending", detail:"In this illustrative sandbox case, the resource twin changes and the production record stays unchanged."}
];
export function AgentTraceStudy() {
  const [step,setStep]=useState(1);
  const selected=agentSteps[step];
  return <section className="lab-agent-study" aria-label="Illustrative agent trace">
    <div className="lab-study-heading"><p>Illustrative refund workflow</p><span className="lab-trace-scope">Task → action → state</span></div>
    <div className="lab-trace-track" aria-label="Trace stages">{agentSteps.map((item,i)=><button key={item.label} aria-pressed={i===step} onClick={()=>setStep(i)}><span className="lab-trace-node" aria-hidden>{i===step?<Check size={15}/>:null}</span>{item.label}<ChevronRight className="lab-trace-chevron" size={22} aria-hidden /></button>)}</div>
    <div className="lab-trace-inspector" aria-live="polite"><div><h2>{selected.title}</h2><p>{selected.detail}</p></div><div className="lab-trace-record"><span>Observed in this example</span><code>{selected.code}</code><p>Review the trace and the resource boundary together.</p></div></div>
    <p className="lab-study-footnote">This example illustrates a configured sandbox boundary. It does not promise automatic interception of production tools.</p>
  </section>;
}

export function CitationStudy() {
  const [archived,setArchived]=useState(true);
  return <section className="lab-citation-study" aria-label="Illustrative source freshness inspection">
    <div className="lab-citation-query"><h2>Which refund policy<br />supports this answer?</h2><p>In this illustrative query, the source version matters as much as the retrieved text.</p><ArrowDownRight size={42} strokeWidth={1} aria-hidden /></div>
    <div className="lab-citation-records"><p className="lab-source-label">Inspect a source</p><button className="lab-source-row" aria-pressed={!archived} onClick={()=>setArchived(false)}><span>Policy <strong>v8</strong></span><span>Current</span><ArrowUpRight size={22} aria-hidden /></button><button className="lab-source-row" aria-pressed={archived} onClick={()=>setArchived(true)}><span>Policy <strong>v6</strong></span><span>Archived</span><ArrowUpRight size={22} aria-hidden /></button><div className="lab-citation-result" aria-live="polite"><span>Citation path</span><strong>Answer → policy {archived?"v6":"v8"}</strong><p>{archived?"The archived source conflicts with the current policy in this example. Hold the release for review.":"The current source is selected. Answer support still needs verification."}</p></div></div>
  </section>;
}
