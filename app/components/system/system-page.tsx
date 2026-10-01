import Link from "next/link";

import { ChevronDown } from "lucide-react";
import { LabArrow, LabFooter, LabHeader } from "@/app/components/lab/site-shell";
import { SignalField } from "@/app/components/lab/signal-field";
import { siteLinks } from "@/app/lib/site";

type Outcome = "SHIP" | "REVIEW" | "BLOCK";
export type RouteKey = "recomm" | "search" | "agents" | "company";
type PublicHeaderActive = RouteKey | "product" | "how";

type SystemPageData = {
  slug: RouteKey;
  eyebrow: string;
  title: string;
  lede: string;
  behavior: string;
  incident: string;
  outcome: Outcome;
  decisionReason: string;
  mechanismTitle: string;
  mechanismIntro: string;
  mechanismItems: Array<[string, string]>;
  inputs: string[];
  artifacts: string[];
  proof: Array<[string, string]>;
  workbenchTitle: string;
  workbenchIntro: string;
  workbenchRunLabel: string;
  pilotTitle: string;
  pilotIntro: string;
  pilotFields: Array<[string, string]>;
  docsHref: string;
  visual: "rank" | "search" | "agent" | "company";
  caseFile?: {
    id: string;
    title: string;
    question: string;
    observation: string;
    world: string;
    evidence: Array<[string, string]>;
    run: Array<[string, string]>;
  };
};

const productRoutes: Array<[Exclude<RouteKey, "company">, string, string, string]> = [
  ["recomm", "Recommenders", "/recomm", "rank behavior"],
  ["search", "Search", "/search", "retrieve behavior"],
  ["agents", "Agents", "/agents", "act behavior"]
];

export const systemPages = {
  recomm: {
    slug: "recomm",
    eyebrow: "recommendation systems",
    title: "Rehearse ranking behavior before rollout.",
    lede:
      "Determina builds a production-like world around a recommender release so teams can see which candidates move, for which cohort, and why the release needs review.",
    behavior: "rank behavior",
    incident: "A sparse-profile merge moves a regulated candidate from #7 to #1 for an enterprise cohort.",
    outcome: "REVIEW",
    decisionReason: "Review cohort policy before rollout.",
    mechanismTitle: "A cohort lens changes the ranking surface.",
    mechanismIntro:
      "Determina replays the release against an enterprise cohort, compares the candidate order before and after the profile merge, then attaches the rank movement to policy evidence.",
    mechanismItems: [
      ["before", "regulated candidate starts at rank #7"],
      ["condition", "sparse-profile merge applied to enterprise cohort"],
      ["after", "regulated candidate lands at rank #1"],
      ["decision", "rank drift crosses review threshold"]
    ],
    inputs: [
      "rank logs",
      "candidate pool",
      "cohort fixtures",
      "profile state",
      "policy thresholds",
      "release version"
    ],
    artifacts: [
      "cohort lens",
      "rank curve",
      "candidate diff",
      "policy verifier",
      "review decision",
      "rerun memory"
    ],
    proof: [
      ["population", "enterprise cohort replay"],
      ["behavior", "candidate order changed"],
      ["evidence", "rank #7 moved to #1"],
      ["memory", "regression case promoted"]
    ],
    workbenchTitle: "Candidate-pool conditions become rank evidence.",
    workbenchIntro:
      "The rehearsal joins logs, cohort fixtures, profile state, policy thresholds, and the release version into one reviewable ranking run.",
    workbenchRunLabel: "rank run",
    pilotTitle: "Bring a recommender release to rehearsal.",
    pilotIntro:
      "Start with one ranking change, one cohort that matters, and the policy question your team needs answered before rollout.",
    pilotFields: [
      ["system", "recommender"],
      ["release", "model, feature, or profile change"],
      ["population", "cohort or segment fixtures"],
      ["return", "rank curve, cohort lens, diff, verifier"]
    ],
    docsHref: "/docs/recommenders",
    visual: "rank",
    caseFile: {
      id: "det-9183",
      title: "Enterprise cohort rank drift",
      question: "Will the profile merge change what enterprise users see?",
      observation: "A regulated candidate moved from rank #7 to rank #1 after the sparse-profile merge.",
      world: "candidate pool + enterprise cohort + profile state + policy threshold",
      evidence: [
        ["cohort lens", "enterprise buyers / sparse profile"],
        ["rank curve", "#7 before -> #1 after"],
        ["candidate diff", "regulated candidate promoted above verified option"],
        ["verifier", "review threshold crossed"]
      ],
      run: [
        ["01", "enterprise cohort enters the rehearsal world"],
        ["02", "profile slabs merge into the candidate surface"],
        ["03", "rank path bends from bottom rail to first position"],
        ["04", "review packet is attached before rollout"]
      ]
    }
  },
  search: {
    slug: "search",
    eyebrow: "search and RAG systems",
    title: "Rehearse retrieval before stale sources reach users.",
    lede:
      "Determina runs search releases against source-state worlds, then shows whether citations are current, supported, and safe to ship.",
    behavior: "retrieve behavior",
    incident: "A refund-policy answer cites an archived source while the current policy says something different.",
    outcome: "BLOCK",
    decisionReason: "Block stale-source support before users receive the answer.",
    mechanismTitle: "A source-state world exposes stale retrieval.",
    mechanismIntro:
      "Determina runs the same query across current and archived source state, traces the citation path, and blocks the release when the answer leans on an unsupported source.",
    mechanismItems: [
      ["query", "refund policy question enters the source world"],
      ["retrieve", "archived policy is selected over the current source"],
      ["support", "citation verifier marks the answer unsupported"],
      ["decision", "release is blocked before users see it"]
    ],
    inputs: [
      "query set",
      "corpus snapshot",
      "current source state",
      "archived source state",
      "citation traces",
      "support verifier"
    ],
    artifacts: [
      "retrieval set",
      "source freshness diff",
      "citation path",
      "support verifier",
      "block decision",
      "stale-source memory"
    ],
    proof: [
      ["population", "simulated policy query"],
      ["behavior", "archived source selected"],
      ["evidence", "current-vs-archived diff"],
      ["memory", "stale-source replay saved"]
    ],
    workbenchTitle: "Source-state conditions become citation evidence.",
    workbenchIntro:
      "The rehearsal joins query sets, corpus snapshots, source freshness, and support verification into one retrieval path the release team can inspect.",
    workbenchRunLabel: "retrieve run",
    pilotTitle: "Bring one retrieval path that cannot be wrong.",
    pilotIntro:
      "Start with a query class, a source-state change, and the citation support your release team needs to trust.",
    pilotFields: [
      ["system", "search or RAG"],
      ["release", "index, corpus, reranker, or prompt change"],
      ["world", "current and archived source state"],
      ["return", "retrieval set, source diff, citation verifier"]
    ],
    docsHref: "/docs/search",
    visual: "search",
    caseFile: {
      id: "S-108",
      title: "Archived source selected",
      question: "Will the release cite the current policy under pressure?",
      observation: "The retrieval path crossed into an archived policy while the current source contradicted it.",
      world: "query set + corpus snapshot + current source + archived source + citation verifier",
      evidence: [
        ["retrieval set", "refund policy query"],
        ["freshness diff", "policy v8 current / policy v6 archived"],
        ["citation path", "answer supported by archived branch"],
        ["verifier", "support blocked before release"]
      ],
      run: [
        ["01", "policy query enters current and archived source state"],
        ["02", "candidate answer follows stale branch"],
        ["03", "citation support fails against current source"],
        ["04", "block packet is saved as stale-source memory"]
      ]
    }
  },
  agents: {
    slug: "agents",
    eyebrow: "agents and tools",
    title: "Rehearse agent actions before tools touch production.",
    lede:
      "Determina wraps tool-using workflows in a sandbox boundary so teams can observe calls, arguments, auth scope, resource diffs, and policy pressure before production records change.",
    behavior: "act behavior",
    incident: "A customer-help agent attempts an exception refund under pressure; the production record stays unchanged.",
    outcome: "BLOCK",
    decisionReason: "Block unsafe mutation while preserving the replay as coverage.",
    mechanismTitle: "A sandbox membrane catches the tool effect.",
    mechanismIntro:
      "Determina lets the agent attempt the workflow inside a resource twin, records the tool call and arguments, and proves the production record stayed unchanged.",
    mechanismItems: [
      ["pressure", "customer-help task pushes for an exception refund"],
      ["tool", "refund tool is attempted with unsafe arguments"],
      ["twin", "sandbox resource records the attempted mutation"],
      ["decision", "production mutation is blocked and replay is saved"]
    ],
    inputs: [
      "task fixture",
      "tool schemas",
      "auth scopes",
      "workflow state",
      "resource twin",
      "pressure scenario"
    ],
    artifacts: [
      "tool-call trace",
      "arguments passed",
      "auth scope",
      "resource diff",
      "policy verifier",
      "unchanged-production proof"
    ],
    proof: [
      ["population", "customer-help pressure case"],
      ["behavior", "refund tool attempted"],
      ["evidence", "+refund_hold_pending in twin"],
      ["memory", "unsafe action replay saved"]
    ],
    workbenchTitle: "Tool-boundary conditions become action evidence.",
    workbenchIntro:
      "The rehearsal joins task fixtures, tool schemas, auth scopes, workflow state, and resource twins into one contained side-effect record.",
    workbenchRunLabel: "act run",
    pilotTitle: "Bring one agent workflow with a real side effect.",
    pilotIntro:
      "Start with a tool call, a resource your team cannot risk, and the policy pressure you want contained before production.",
    pilotFields: [
      ["system", "agent or tool workflow"],
      ["release", "tool, policy, model, or prompt change"],
      ["world", "resource twin and auth boundary"],
      ["return", "tool trace, arguments, resource diff, verifier"]
    ],
    docsHref: "/docs/agents",
    visual: "agent",
    caseFile: {
      id: "A-312",
      title: "Refund mutation contained",
      question: "Will the agent mutate a customer record when pressured?",
      observation: "The refund tool was attempted inside the sandbox; the production record stayed unchanged.",
      world: "task fixture + tool schema + auth scope + resource twin + pressure scenario",
      evidence: [
        ["tool trace", "refund.request attempted"],
        ["arguments", "exception=true / pressure note present"],
        ["resource diff", "+refund_hold_pending only in twin"],
        ["verifier", "unsafe mutation blocked"]
      ],
      run: [
        ["01", "customer-help pressure case starts"],
        ["02", "tool call crosses into sandbox membrane"],
        ["03", "resource twin records attempted mutation"],
        ["04", "production-unchanged proof closes the packet"]
      ]
    }
  },
  company: {
    slug: "company",
    eyebrow: "company standard",
    title: "Behavior claims should be bounded and reviewable.",
    lede:
      "Determina is built around evidence discipline: honest coverage, explicit boundaries, human-owned release review, and reusable memory for teams shipping AI systems.",
    behavior: "evidence discipline",
    incident: "No fake confidence, no automatic approval theater, and no pretending simulation is production.",
    outcome: "REVIEW",
    decisionReason: "Teams own the release decision; Determina makes the evidence inspectable.",
    mechanismTitle: "The company standard is bounded evidence.",
    mechanismIntro:
      "Determina does not claim hidden coverage or automatic approval. It shows what was observed, what remained out of scope, who owns the decision, and what becomes reusable memory.",
    mechanismItems: [
      ["claim", "every product claim has an evidence boundary"],
      ["coverage", "unsupported surfaces stay explicit"],
      ["owner", "release decision remains human-owned"],
      ["memory", "accepted findings become durable review history"]
    ],
    inputs: [
      "evidence discipline",
      "coverage honesty",
      "explicit boundaries",
      "human review",
      "reusable memory",
      "no fake confidence"
    ],
    artifacts: [
      "bounded claim",
      "coverage note",
      "review trail",
      "decision owner",
      "replay memory",
      "audit history"
    ],
    proof: [
      ["standard", "bounded evidence"],
      ["posture", "coverage honesty"],
      ["decision", "human-owned release"],
      ["memory", "durable behavior history"]
    ],
    workbenchTitle: "Bounded claims become review evidence.",
    workbenchIntro:
      "The rehearsal joins observed surfaces, unsupported gaps, decision ownership, and memory into one honest record for release review.",
    workbenchRunLabel: "review run",
    pilotTitle: "Bring one release decision that needs evidence.",
    pilotIntro:
      "Start with a system, a risky change, and the decision owner who needs a bounded story before launch.",
    pilotFields: [
      ["system", "rank, retrieve, or act"],
      ["risk", "behavior that could surprise users"],
      ["boundary", "what must be observed honestly"],
      ["return", "evidence packet and review record"]
    ],
    docsHref: "/docs",
    visual: "company"
  }
} satisfies Record<string, SystemPageData>;

const productHeadlines: Record<RouteKey, string> = {
  recomm: "Test what your users see.",
  agents: "Test what your agents do.",
  search: "Test what your search finds.",
  company: "A clearer view of AI behavior."
};

export function SystemPage({ page }: { page: SystemPageData }) {
  return <div className="lab-shell">
    <LabHeader active="product" />
    <main id="main-content" className="lab-product-page lab-container">
      <nav className="lab-system-switcher" aria-label="System types">
        {productRoutes.map(([key, label, href]) => <Link key={key} href={href} aria-current={page.slug === key ? "page" : undefined}>{label}</Link>)}
      </nav>
      <section className="lab-product-hero" aria-labelledby="system-title">
        <div>
          <h1 id="system-title">{productHeadlines[page.slug]}</h1>
          <p className="lab-lede">{page.lede}</p>
          {page.slug === "search" && <p className="lab-availability">In development. Search examples are available in the engine; the hosted search product is not yet runnable.</p>}
          <div className="lab-actions">
            <a href={siteLinks.waitlist}>Talk about a pilot <LabArrow /></a>
            <Link href={page.docsHref}>Read the docs</Link>
          </div>
        </div>
        <SignalField compact />
      </section>
      <section className="lab-example" aria-labelledby="example-title">
        <div className="lab-example-heading">
          <h2 id="example-title">{page.caseFile?.question ?? page.mechanismTitle}</h2>
          <p>Illustrative scenario</p>
        </div>
        <div className="lab-example-body">
          <p>{page.caseFile?.observation ?? page.incident}</p>
          <dl>
            {(page.caseFile?.evidence ?? page.proof).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <p className="lab-example-decision"><strong>{page.outcome === "REVIEW" ? "Needs review" : page.outcome === "BLOCK" ? "Do not ship" : "Ready for review"}.</strong> {page.decisionReason}</p>
        </div>
      </section>
      <details className="lab-details">
        <summary>Inside this example <ChevronDown size={18} aria-hidden="true" /></summary>
        <div className="lab-details-content">
          <div><h3>What is tested</h3><p>{page.mechanismIntro}</p><ul>{page.mechanismItems.map(([label, value]) => <li key={label}><strong>{label}</strong> {value}</li>)}</ul></div>
          <div><h3>Inputs</h3><ul>{page.inputs.map(item => <li key={item}>{item}</li>)}</ul><h3>Evidence</h3><ul>{page.artifacts.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </details>
      <section className="lab-next" id="pilot">
        <h2>Bring one change.</h2>
        <div><p>{page.pilotIntro}</p><a href={siteLinks.waitlist}>Get in touch <LabArrow /></a></div>
      </section>
    </main>
    <LabFooter />
  </div>;
}

export function PublicHeader({ active }: { active?: PublicHeaderActive }) {
  return <LabHeader active={active === "company" ? "company" : active ? "product" : undefined} />;
}

export function PublicFooter() { return <LabFooter />; }
export function ArrowMark() { return <LabArrow />; }
