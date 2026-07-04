import Link from "next/link";

import { HeaderScrollState } from "@/app/components/system/header-scroll-state";
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

const publicNavLinks: Array<["product" | "how" | "docs" | "company", string, string]> = [
  ["product", "Product", "/#product-systems"],
  ["how", "How it works", "/#how-it-works"],
  ["docs", "Docs", "/docs"],
  ["company", "Company", "/company"]
];

const routeStages = [
  ["01", "SYSTEM"],
  ["02", "WORLD INPUTS"],
  ["03", "OBSERVE"],
  ["04", "EVIDENCE"],
  ["05", "DECIDE"],
  ["06", "REMEMBER"]
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
      id: "R-047",
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

export function SystemPage({ page }: { page: SystemPageData }) {
  return (
    <main className="home-shell system-shell">
      <PublicHeader active={page.slug} />
      {page.slug !== "company" ? <ProductRouteRail active={page.slug} /> : null}
      <section className={`system-hero system-hero-${page.visual}`} aria-labelledby="system-title">
        <div className="system-hero-copy">
          <p className="home-label">{page.eyebrow}</p>
          <h1 id="system-title">{page.title}</h1>
          <p>{page.lede}</p>
          <div className="home-actions" aria-label="System page actions">
            <a className="home-button home-button-primary" href={siteLinks.pilot}>
              Request pilot
              <ArrowMark />
            </a>
            <Link className="home-inline-link system-doc-link" href={page.docsHref}>
              Read docs
              <ArrowMark />
            </Link>
          </div>
          <HeroEvidenceRail page={page} />
        </div>
        <SystemInstrument page={page} />
      </section>

      <section className="system-proof" aria-label="System rehearsal proof points">
        {page.proof.map(([label, body]) => (
          <article key={label}>
            <span>{label}</span>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <SystemMechanism page={page} />

      <SystemWorkbench page={page} />

      <SystemCaseFile page={page} />

      <section className="system-decision" aria-label="Example release decision">
        <div>
          <p className="home-label">{page.behavior}</p>
          <h2>{page.incident}</h2>
        </div>
        <div className={`system-decision-stamp outcome-${page.outcome.toLowerCase()}`}>
          <span>decision</span>
          <strong>{page.outcome}</strong>
          <p>{page.decisionReason}</p>
        </div>
      </section>
      <SystemPilotClose page={page} />
      <PublicFooter active={page.slug} />
    </main>
  );
}

export function PublicHeader({ active }: { active?: PublicHeaderActive }) {
  const productNavActive =
    active === "product" || active === "recomm" || active === "search" || active === "agents";
  let activeNav: "product" | "how" | "company" | undefined;

  if (active === "company") {
    activeNav = "company";
  } else if (active === "how") {
    activeNav = "how";
  } else if (productNavActive) {
    activeNav = "product";
  }

  return (
    <header className="home-header">
      <HeaderScrollState />
      <div className="home-header-inner">
        <Link href="/" className="home-brand" aria-label="Determina home">
          <span className="home-brand-mark">D</span>
          <span>Determina</span>
        </Link>
        <nav className="home-nav" aria-label="Main navigation">
          {publicNavLinks.map(([key, label, href]) => (
            <Link key={key} href={href} aria-current={activeNav === key ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="home-header-cta" href={siteLinks.pilot} aria-label="Request pilot">
          <span className="home-cta-full">Request pilot</span>
          <span className="home-cta-compact" aria-hidden="true">
            Pilot
          </span>
          <ArrowMark />
        </a>
      </div>
    </header>
  );
}

function ProductRouteRail({ active }: { active: RouteKey }) {
  return (
    <nav className="system-route-rail" aria-label="Product routes">
      <span>product systems</span>
      <div>
        {productRoutes.map(([key, label, href, detail], index) => (
          <Link
            key={key}
            href={href}
            aria-current={active === key ? "page" : undefined}
            aria-label={`${label}: ${detail}`}
          >
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{label}</strong>
            <em>{detail}</em>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function PublicFooter({ active }: { active?: RouteKey }) {
  return (
    <footer className="home-footer" id="site-footer">
      <div className="home-footer-plate">
        <div className="home-footer-statement" aria-label="Determina release rehearsal summary">
          <span>rehearsal route</span>
          <strong>Know what changed before the release reaches users.</strong>
          <p>
            Determina turns a planned AI-system change into a rehearsal world,
            evidence packet, and reusable review memory.
          </p>
          <a className="home-footer-cta" href={siteLinks.pilot}>
            Request pilot
            <ArrowMark />
          </a>
        </div>
        <ol className="home-footer-route" aria-label="Determina release rehearsal route">
          {routeStages.map(([number, label], index) => (
            <li key={number} className={index === 5 ? "is-active-route" : undefined}>
              <span>{number}</span>
              {label}
            </li>
          ))}
        </ol>
      </div>
      <div className="home-footer-grid">
        <div>
          <Link href="/" className="home-footer-brand">
            Determina
          </Link>
          <p>Production-like rehearsal worlds for AI systems before release.</p>
        </div>
        <nav className="home-footer-products" aria-label="Product routes">
          {productRoutes.map(([key, label, href, detail]) => (
            <Link
              key={key}
              href={href}
              aria-current={active === key ? "page" : undefined}
              aria-label={`${label}: ${detail}`}
            >
              <span>{label}</span>
              <small>{detail}</small>
            </Link>
          ))}
        </nav>
        <nav className="home-footer-links" aria-label="Footer navigation">
          <Link href="/company" aria-current={active === "company" ? "page" : undefined}>
            Company
          </Link>
          <Link href="/docs">Docs</Link>
          <a href={siteLinks.pilot}>Request pilot</a>
        </nav>
      </div>
    </footer>
  );
}

export function ArrowMark() {
  return (
    <svg className="home-arrow" viewBox="0 0 22 12" aria-hidden="true">
      <path d="M1 6H20" />
      <path d="M15 1L20 6L15 11" />
    </svg>
  );
}

function SystemInstrument({ page }: { page: SystemPageData }) {
  return (
    <div className={`system-instrument system-instrument-${page.visual}`} aria-hidden="true">
      <SystemHeroInstrument visual={page.visual} outcome={page.outcome} />
      <div className="system-instrument-label">
        <span>{page.behavior}</span>
        <p>{page.decisionReason}</p>
      </div>
    </div>
  );
}

function HeroEvidenceRail({ page }: { page: SystemPageData }) {
  const items = page.caseFile
    ? page.caseFile.evidence.slice(0, 3)
    : page.proof.slice(0, 3);

  return (
    <dl className="system-hero-evidence" aria-label={`${page.eyebrow} hero evidence preview`}>
      {items.map(([label, body]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{body}</dd>
        </div>
      ))}
    </dl>
  );
}

function SystemHeroInstrument({
  visual,
  outcome
}: {
  visual: SystemPageData["visual"];
  outcome: Outcome;
}) {
  if (visual === "search") {
    return <SearchHeroInstrument outcome={outcome} />;
  }

  if (visual === "agent") {
    return <AgentHeroInstrument outcome={outcome} />;
  }

  if (visual === "company") {
    return <CompanyHeroInstrument outcome={outcome} />;
  }

  return <RankHeroInstrument outcome={outcome} />;
}

function DecisionRail({ outcome }: { outcome: Outcome }) {
  return (
    <g className="system-outcome-rail">
      {["SHIP", "REVIEW", "BLOCK"].map((item, index) => {
        const y = 150 + index * 88;
        return (
          <g key={item} className={item === outcome ? "is-active" : undefined}>
            <circle cx="650" cy={y} r="24" />
            <text x="690" y={y + 5}>{item}</text>
          </g>
        );
      })}
    </g>
  );
}

function RankHeroInstrument({ outcome }: { outcome: Outcome }) {
  return (
    <svg viewBox="0 0 760 520" className="system-instrument-svg rank-hero-instrument">
      <g className="hero-rules">
        <path d="M52 70 H712" />
        <path d="M52 430 H712" />
        <path d="M244 74 V416" />
        <path d="M518 74 V416" />
      </g>
      <g className="hero-candidate-stack">
        <text x="72" y="112">candidate pool</text>
        {["#1 verified option", "#2 stable item", "#3 safe alternate", "#7 regulated"].map((item, index) => (
          <g key={item} transform={`translate(72 ${156 + index * 58})`}>
            <path d="M0 0 H164" />
            <text className={index === 3 ? "is-risk" : undefined} x="0" y="24">
              {item}
            </text>
          </g>
        ))}
      </g>
      <g className="hero-lens">
        <circle cx="380" cy="244" r="66" />
        <circle cx="380" cy="244" r="98" />
        <path d="M380 116 V166" />
        <path d="M380 322 V372" />
        <text x="380" y="238">cohort</text>
        <text x="380" y="263">lens</text>
      </g>
      <g className="hero-rank-path">
        <path d="M160 354 C268 324 304 260 380 244 C472 226 502 156 602 132" />
        <path d="M158 156 C280 164 350 204 432 252 C506 294 560 318 642 338" />
        <circle cx="160" cy="354" r="12" />
        <circle cx="602" cy="132" r="18" />
        <text x="138" y="388">#7 before</text>
        <text x="604" y="110">#1 after merge</text>
      </g>
      <g className="hero-finding-stamp" transform="rotate(-5 584 308)">
        <ellipse cx="584" cy="308" rx="72" ry="42" />
        <text x="584" y="316">rank drift</text>
      </g>
      <DecisionRail outcome={outcome} />
    </svg>
  );
}

function SearchHeroInstrument({ outcome }: { outcome: Outcome }) {
  return (
    <svg viewBox="0 0 760 520" className="system-instrument-svg search-hero-instrument">
      <g className="hero-rules">
        <path d="M56 84 H708" />
        <path d="M56 420 H708" />
        <path d="M216 84 V420" />
        <path d="M546 84 V420" />
      </g>
      <g className="hero-query-node">
        <circle cx="128" cy="246" r="54" />
        <text x="128" y="238">query</text>
        <text x="128" y="264">refund policy</text>
      </g>
      <g className="hero-source-constellation">
        <text x="384" y="118">source constellation</text>
        <path d="M184 246 C276 184 338 178 426 220 C500 256 540 206 606 160" />
        <path d="M184 250 C276 308 340 318 426 274 C510 232 554 304 622 340" />
        <path className="is-stale" d="M184 250 C292 330 390 330 492 284 C542 262 580 310 622 340" />
        {[
          [286, 188, "current"],
          [426, 220, "policy v8"],
          [492, 284, "archive"],
          [622, 340, "policy v6"]
        ].map(([x, y, label]) => (
          <g key={label}>
            <circle cx={Number(x)} cy={Number(y)} r={label === "archive" ? 14 : 10} />
            <text x={Number(x) + 18} y={Number(y) + 4}>{label}</text>
          </g>
        ))}
        <path className="hero-fracture" d="M514 252 l18 -24 l16 24 l20 -34" />
      </g>
      <g className="hero-verifier">
        <rect x="496" y="174" width="118" height="74" />
        <text x="555" y="204">support</text>
        <text x="555" y="230">verifier</text>
      </g>
      <DecisionRail outcome={outcome} />
    </svg>
  );
}

function AgentHeroInstrument({ outcome }: { outcome: Outcome }) {
  return (
    <svg viewBox="0 0 760 520" className="system-instrument-svg agent-hero-instrument">
      <g className="hero-rules">
        <path d="M56 82 H704" />
        <path d="M56 424 H704" />
        <path d="M248 82 V424" />
        <path d="M534 82 V424" />
      </g>
      <g className="hero-task-pressure">
        <text x="94" y="132">task pressure</text>
        <path d="M76 204 C130 168 176 178 226 226" />
        <path d="M76 250 C134 238 178 244 226 226" />
        <path d="M76 296 C138 326 180 306 226 226" />
        <circle cx="92" cy="250" r="22" />
        <text x="92" y="255">task</text>
      </g>
      <g className="hero-sandbox">
        <circle cx="370" cy="248" r="74" />
        <circle cx="370" cy="248" r="108" />
        <circle cx="370" cy="248" r="142" />
        <path d="M228 248 H286" />
        <path d="M454 248 H520" />
        <text x="370" y="238">sandbox</text>
        <text x="370" y="264">membrane</text>
      </g>
      <g className="hero-tool-ports">
        <text x="588" y="126">tool boundary</text>
        {[
          [554, 188, "refund"],
          [592, 252, "message"],
          [548, 316, "record"]
        ].map(([x, y, label]) => (
          <g key={label}>
            <rect x={Number(x)} y={Number(y)} width="86" height="44" />
            <text x={Number(x) + 43} y={Number(y) + 27}>{label}</text>
          </g>
        ))}
        <path d="M454 248 C506 210 522 210 554 210" />
        <path className="is-contained" d="M454 248 C520 284 548 304 548 338" />
      </g>
      <g className="hero-resource-diff">
        <rect x="290" y="366" width="184" height="50" />
        <text x="382" y="396">production unchanged</text>
      </g>
      <DecisionRail outcome={outcome} />
    </svg>
  );
}

function CompanyHeroInstrument({ outcome }: { outcome: Outcome }) {
  return (
    <svg viewBox="0 0 760 520" className="system-instrument-svg company-hero-instrument">
      <g className="hero-rules">
        <path d="M56 96 H704" />
        <path d="M56 408 H704" />
        <path d="M154 96 V408" />
        <path d="M604 96 V408" />
      </g>
      <g className="hero-charter">
        <path d="M112 250 H620" />
        <path d="M176 250 C222 156 338 156 384 250 C338 344 222 344 176 250" />
        <path d="M326 250 C372 170 488 170 534 250 C488 330 372 330 326 250" />
        {[
          [142, "claim"],
          [286, "coverage"],
          [430, "owner"],
          [574, "memory"]
        ].map(([x, label]) => (
          <g key={label}>
            <circle cx={Number(x)} cy="250" r="22" />
            <text x={Number(x)} y="314">{label}</text>
          </g>
        ))}
        <text x="380" y="142">bounded evidence standard</text>
      </g>
      <g className="hero-company-note">
        <rect x="238" y="356" width="284" height="56" />
        <text x="380" y="390">observed surfaces, explicit gaps</text>
      </g>
      <DecisionRail outcome={outcome} />
    </svg>
  );
}

function SystemMechanism({ page }: { page: SystemPageData }) {
  return (
    <section className={`system-mechanism system-mechanism-${page.visual}`} aria-labelledby="mechanism-title">
      <div className="system-mechanism-copy">
        <p className="home-label">{page.behavior}</p>
        <h2 id="mechanism-title">{page.mechanismTitle}</h2>
        <p>{page.mechanismIntro}</p>
        <ol className="system-mechanism-steps">
          {page.mechanismItems.map(([label, body], index) => (
            <li key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
      <MechanismVisual visual={page.visual} outcome={page.outcome} />
    </section>
  );
}

function SystemWorkbench({ page }: { page: SystemPageData }) {
  return (
    <section
      className={`system-workbench system-workbench-${page.visual}`}
      aria-labelledby={`${page.slug}-workbench-title`}
    >
      <div className="system-workbench-copy">
        <p className="home-label">world to evidence</p>
        <h2 id={`${page.slug}-workbench-title`}>{page.workbenchTitle}</h2>
        <p>{page.workbenchIntro}</p>
      </div>
      <div className="system-workbench-board" aria-label={`${page.eyebrow} workbench`}>
        <div className="system-workbench-column">
          <span>world inputs</span>
          <ul>
            {page.inputs.map((input, index) => (
              <li key={input}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {input}
              </li>
            ))}
          </ul>
        </div>
        <div className="system-workbench-core">
          <svg viewBox="0 0 360 360" aria-hidden="true">
            <path d="M42 180 C104 88 256 88 318 180 C256 272 104 272 42 180" />
            <path d="M74 180 C122 118 238 118 286 180 C238 242 122 242 74 180" />
            <path d="M180 42 V318" />
            <path d="M42 180 H318" />
            <circle cx="180" cy="180" r="74" />
            <circle cx="180" cy="180" r="118" />
          </svg>
          <span>rehearsal core</span>
          <strong>{page.workbenchRunLabel}</strong>
          <p className={`outcome-${page.outcome.toLowerCase()}`}>{page.outcome}</p>
        </div>
        <div className="system-workbench-column system-workbench-column-evidence">
          <span>evidence returns</span>
          <ul>
            {page.artifacts.map((artifact, index) => (
              <li key={artifact}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {artifact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SystemCaseFile({ page }: { page: SystemPageData }) {
  if (!page.caseFile) {
    return null;
  }

  return (
    <section className={`system-case-file system-case-file-${page.visual}`} aria-labelledby="system-case-title">
      <div className="system-case-copy">
        <p className="home-label">case file {page.caseFile.id}</p>
        <h2 id="system-case-title">{page.caseFile.title}</h2>
        <p>{page.caseFile.question}</p>
        <dl className="system-case-world">
          <div>
            <dt>world</dt>
            <dd>{page.caseFile.world}</dd>
          </div>
          <div>
            <dt>observed</dt>
            <dd>{page.caseFile.observation}</dd>
          </div>
        </dl>
        <ul className="system-case-side-evidence" aria-label={`${page.caseFile.id} attached evidence`}>
          {page.caseFile.evidence.map(([label, body]) => (
            <li key={label}>
              <span>{label}</span>
              <em>{body}</em>
            </li>
          ))}
        </ul>
      </div>
      <div className="system-case-board" aria-label={`${page.eyebrow} evidence case file`}>
        <div className="system-case-ribbon">
          <span>{page.caseFile.id}</span>
          <strong>{page.behavior}</strong>
          <em>{page.outcome}</em>
        </div>
        <SystemCaseVisual page={page} />
        <ol className="system-case-run">
          {page.caseFile.run.map(([number, body]) => (
            <li key={number}>
              <span>{number}</span>
              <p>{body}</p>
            </li>
          ))}
        </ol>
        <div className="system-case-evidence">
          <span>evidence attached</span>
          <dl>
            {page.caseFile.evidence.map(([label, body]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SystemCaseVisual({ page }: { page: SystemPageData }) {
  if (page.visual === "search") {
    return (
      <div className="system-case-visual search-case-visual" aria-hidden="true">
        <svg viewBox="0 0 720 420">
          <g className="case-grid">
            <path d="M64 74 H656" />
            <path d="M64 346 H656" />
            <path d="M192 74 V346" />
            <path d="M528 74 V346" />
          </g>
          <g className="case-query">
            <circle cx="116" cy="210" r="38" />
            <text x="116" y="205">query</text>
            <text x="116" y="229">refund</text>
          </g>
          <g className="case-sources">
            <path d="M156 208 C246 136 328 126 424 166 C504 200 548 150 618 112" />
            <path className="is-risk" d="M156 212 C260 268 340 294 444 250 C520 218 558 268 624 306" />
            <circle cx="424" cy="166" r="13" />
            <circle cx="444" cy="250" r="17" />
            <circle cx="618" cy="112" r="11" />
            <circle cx="624" cy="306" r="18" />
            <text x="418" y="140">current source</text>
            <text x="468" y="282">archived branch</text>
          </g>
          <g className="case-verifier">
            <path d="M538 188 l22 -32 l18 30 l22 -44" />
            <rect x="526" y="198" width="120" height="58" />
            <text x="586" y="233">support fail</text>
          </g>
        </svg>
      </div>
    );
  }

  if (page.visual === "agent") {
    return (
      <div className="system-case-visual agent-case-visual" aria-hidden="true">
        <svg viewBox="0 0 720 420">
          <g className="case-grid">
            <path d="M70 78 H650" />
            <path d="M70 342 H650" />
            <path d="M240 78 V342" />
            <path d="M512 78 V342" />
          </g>
          <g className="case-agent-task">
            <circle cx="126" cy="212" r="38" />
            <text x="126" y="207">pressure</text>
            <text x="126" y="231">case</text>
          </g>
          <g className="case-agent-membrane">
            <circle cx="352" cy="212" r="76" />
            <circle cx="352" cy="212" r="112" />
            <path d="M164 212 C230 154 282 156 352 212 C426 272 484 268 566 208" />
            <path className="is-risk" d="M164 244 C238 292 302 286 366 246 C430 206 482 226 566 278" />
            <text x="352" y="204">sandbox</text>
            <text x="352" y="228">membrane</text>
          </g>
          <g className="case-agent-tools">
            <rect x="566" y="172" width="92" height="52" />
            <rect x="566" y="252" width="92" height="52" />
            <text x="612" y="203">refund</text>
            <text x="612" y="283">twin diff</text>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="system-case-visual rank-case-visual" aria-hidden="true">
      <svg viewBox="0 0 720 420">
        <g className="case-grid">
          <path d="M62 72 H658" />
          <path d="M62 348 H658" />
          <path d="M214 72 V348" />
          <path d="M506 72 V348" />
        </g>
        <g className="case-rank-before">
          <text x="104" y="104">before</text>
          {["#1 verified", "#2 stable", "#3 safe", "#4 normal", "#5 normal", "#6 normal", "#7 regulated"].map((label, index) => (
            <g key={label} transform={`translate(76 ${130 + index * 30})`}>
              <path d="M0 0 H132" />
              <text x="0" y="18">{label}</text>
            </g>
          ))}
        </g>
        <g className="case-rank-lens">
          <circle cx="360" cy="210" r="58" />
          <circle cx="360" cy="210" r="90" />
          <text x="360" y="205">enterprise</text>
          <text x="360" y="229">cohort lens</text>
        </g>
        <g className="case-rank-path">
          <path d="M170 316 C250 284 302 238 360 210 C450 166 516 122 626 94" />
          <path className="baseline" d="M170 136 C258 144 324 164 386 196 C470 240 530 274 626 300" />
          <circle cx="170" cy="316" r="13" />
          <circle cx="626" cy="94" r="18" />
          <text x="182" y="344">#7</text>
          <text x="626" y="72">#1</text>
        </g>
        <g className="case-rank-after">
          <text x="560" y="142">after merge</text>
          <path d="M530 166 H650" />
          <text x="530" y="190">#1 regulated</text>
          <path d="M530 214 H650" />
          <text x="530" y="238">#2 verified</text>
        </g>
      </svg>
    </div>
  );
}

function SystemPilotClose({ page }: { page: SystemPageData }) {
  return (
    <section id="pilot" className={`system-pilot-close system-pilot-close-${page.visual}`} aria-labelledby="system-pilot-title">
      <div className="system-pilot-copy">
        <p className="home-label">pilot shape</p>
        <h2 id="system-pilot-title">{page.pilotTitle}</h2>
        <p>{page.pilotIntro}</p>
        <a className="home-button home-button-primary" href={siteLinks.waitlist}>
          Request pilot
          <ArrowMark />
        </a>
      </div>
      <div className="system-pilot-ticket" aria-label={`${page.eyebrow} pilot intake preview`}>
        <span>pilot intake</span>
        <strong>{page.behavior}</strong>
        <dl>
          {page.pilotFields.map(([label, body]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{body}</dd>
            </div>
          ))}
        </dl>
        <div className={`system-pilot-outcome outcome-${page.outcome.toLowerCase()}`}>{page.outcome}</div>
      </div>
    </section>
  );
}

function MechanismVisual({
  visual,
  outcome
}: {
  visual: SystemPageData["visual"];
  outcome: Outcome;
}) {
  if (visual === "search") {
    return (
      <div className="mechanism-visual search-mechanism" aria-hidden="true">
        <div className="search-query-node">
          <span>query</span>
          <strong>refund policy</strong>
        </div>
        <div className="search-source-stack">
          <div className="search-source is-current">
            <span>current source</span>
            <strong>policy v8</strong>
            <p>refund exception requires review</p>
          </div>
          <div className="search-source is-archived">
            <span>archived source</span>
            <strong>policy v6</strong>
            <p>exception allowed automatically</p>
          </div>
        </div>
        <svg viewBox="0 0 620 300" className="mechanism-svg">
          <path className="source-path" d="M58 148 C160 96 224 118 304 154 C390 192 450 170 566 92" />
          <path className="source-path is-stale" d="M58 150 C166 178 220 214 318 184 C404 158 468 198 566 218" />
          <path className="fracture" d="M416 170 l18 -24 l14 22 l20 -30" />
          <circle cx="58" cy="148" r="10" />
          <circle cx="304" cy="154" r="7" />
          <circle cx="566" cy="92" r="14" />
          <circle cx="566" cy="218" r="18" />
          <text x="438" y="128">citation path</text>
          <text x="430" y="242">stale branch blocked</text>
        </svg>
        <div className="mechanism-verdict outcome-block">BLOCK</div>
      </div>
    );
  }

  if (visual === "agent") {
    return (
      <div className="mechanism-visual agent-mechanism" aria-hidden="true">
        <svg viewBox="0 0 660 350" className="mechanism-svg">
          <path className="agent-flow" d="M42 174 C136 92 234 98 306 174 C386 260 498 252 610 138" />
          <path className="agent-flow is-contained" d="M42 210 C144 250 234 242 310 206 C390 168 482 196 610 244" />
          <circle cx="84" cy="174" r="34" />
          <circle cx="318" cy="190" r="94" />
          <circle cx="318" cy="190" r="126" />
          <rect x="508" y="104" width="94" height="72" />
          <rect x="508" y="212" width="94" height="72" />
          <text x="84" y="180">task</text>
          <text x="318" y="182">sandbox</text>
          <text x="318" y="208">membrane</text>
          <text x="555" y="96">tool ports</text>
          <text x="555" y="148">refund</text>
          <text x="555" y="256">resource twin</text>
        </svg>
        <div className="agent-ledger">
          <div><span>call</span><strong>refund.request</strong></div>
          <div><span>argument</span><strong>exception=true</strong></div>
          <div><span>production</span><strong>unchanged</strong></div>
        </div>
        <div className="mechanism-verdict outcome-block">BLOCK</div>
      </div>
    );
  }

  if (visual === "company") {
    return (
      <div className="mechanism-visual company-mechanism" aria-hidden="true">
        <svg viewBox="0 0 660 350" className="mechanism-svg">
          <path className="charter-line" d="M56 174 H604" />
          <path className="charter-loop" d="M154 174 C204 82 322 82 372 174 C322 266 204 266 154 174" />
          <path className="charter-loop" d="M304 174 C354 94 470 94 520 174 C470 254 354 254 304 174" />
          {[
            [112, "claim"],
            [238, "coverage"],
            [382, "owner"],
            [520, "memory"]
          ].map(([x, label]) => (
            <g key={label}>
              <circle cx={Number(x)} cy="174" r="18" />
              <text x={Number(x)} y="226">{label}</text>
            </g>
          ))}
          <text x="330" y="92">evidence discipline</text>
        </svg>
        <div className="company-charter">
          <span>standard</span>
          <strong>No fake confidence.</strong>
          <p>Observed surfaces, explicit gaps, review ownership, durable memory.</p>
        </div>
        <div className="mechanism-verdict outcome-review">REVIEW</div>
      </div>
    );
  }

  return (
    <div className="mechanism-visual rank-mechanism" aria-hidden="true">
      <div className="rank-stack before-stack">
        <span>before</span>
        {["#1 verified option", "#2 stable item", "#3 safe alternate", "#4 normal", "#5 normal", "#6 normal", "#7 regulated candidate"].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <svg viewBox="0 0 620 300" className="mechanism-svg">
        <path className="rank-drift" d="M76 246 C162 220 216 178 282 142 C354 102 432 78 552 54" />
        <path className="rank-baseline" d="M76 74 C170 82 238 98 306 130 C390 170 470 202 552 228" />
        <circle cx="76" cy="246" r="14" />
        <circle cx="552" cy="54" r="18" />
        <circle cx="282" cy="142" r="46" />
        <text x="282" y="136">cohort</text>
        <text x="282" y="160">lens</text>
        <text x="80" y="282">#7</text>
        <text x="554" y="36">#1</text>
      </svg>
      <div className="rank-stack after-stack">
        <span>after profile merge</span>
        {["#1 regulated candidate", "#2 verified option", "#3 stable item", "#4 safe alternate"].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={`mechanism-verdict outcome-${outcome.toLowerCase()}`}>{outcome}</div>
    </div>
  );
}
