import {
  ClipboardCheck,
  FileJson2,
  GitCompareArrows,
  Plug,
  Route,
  Sparkles,
  TriangleAlert,
  Workflow
} from "lucide-react";

export const heroCopy = {
  eyebrow: "Behavioral evidence for AI products",
  label: "Public package",
  qualifier: "Domain products: recommenders, search, agents",
  headline: "Find the AI behavior your tests miss.",
  subtitle:
    "Evidpath runs controlled domain trials before launch, then writes judged traces and evidence your team can review, rerun, and compare.",
  cta: "Request a domain pilot"
};

export const heroProofPoints = [
  ["Hidden failures", "trust collapse, freshness gaps, tool misuse"],
  ["Rerunnable evidence", "fixed seeds, traces, reports, manifests"],
  ["Launch decisions", "baseline vs candidate before release"]
];

export const clientBenefits = [
  {
    icon: TriangleAlert,
    title: "Catch hidden behavior failures",
    text:
      "Find user trust loss, freshness gaps, tool misuse, and weak edge behavior before customers do."
  },
  {
    icon: Workflow,
    title: "Replace vibe checks",
    text:
      "Turn release concerns into repeatable domain runs with saved traces, judges, and rerunnable evidence."
  },
  {
    icon: GitCompareArrows,
    title: "Compare release candidates",
    text:
      "Run baseline and candidate systems through comparable coverage before approving a change."
  },
  {
    icon: FileJson2,
    title: "Leave a launch packet",
    text:
      "Give reviewers reports, JSON, trace ledgers, manifests, and domain-specific failure language."
  }
];

export const liveCommands = [
  {
    id: "recommender",
    label: "recommender",
    command:
      "evidpath audit --domain recommender --target-url http://127.0.0.1:8051 --scenario returning-user-home-feed",
    state: "slate behavior judged",
    artifact: "trust_collapse + repetition risk",
    trace: "User trial -> Recommender -> Evidence"
  },
  {
    id: "search",
    label: "search",
    command:
      "evidpath audit --domain search --target-url http://127.0.0.1:8051 --scenario time-sensitive-query",
    state: "ranked results judged",
    artifact: "freshness + relevance signals",
    trace: "Query trial -> Search -> Evidence"
  },
  {
    id: "agents",
    label: "agents",
    command:
      "evidpath audit --domain agents --scenario current-info-tool-use --driver-config-path ./driver_config.json",
    state: "trajectory judged",
    artifact: "tool_use + grounding + refusal",
    trace: "Task trial -> Agent -> Evidence"
  },
  {
    id: "compare",
    label: "compare",
    command:
      "evidpath compare --domain recommender --baseline-url http://127.0.0.1:8051 --candidate-url http://127.0.0.1:8052 --rerun-count 2",
    state: "baseline/candidate stable",
    artifact: "regression_summary.json",
    trace: "Baseline -> Candidate -> Release"
  },
  {
    id: "run-swarm",
    label: "run-swarm",
    command:
      'evidpath run-swarm --domain recommender --target-url http://127.0.0.1:8051 --brief "test trust collapse"',
    state: "generated recommender coverage saved",
    artifact: "run_plan.json + run_manifest.json",
    trace: "Brief -> Recommender swarm -> Evidence"
  }
];

export const pipelineSteps = [
  "Release question",
  "Domain swarm",
  "Target run",
  "Trace ledger",
  "Judge",
  "Evidence"
];

export const platformLayers = [
  {
    icon: ClipboardCheck,
    title: "Repeatable behavior trials",
    text: "Fixed seeds, scenarios, tasks, and reruns make behavior reviewable instead of anecdotal."
  },
  {
    icon: Plug,
    title: "Domain product packs",
    text: "Each domain owns target shape, scenario grammar, judge, metrics, and failure language."
  },
  {
    icon: Sparkles,
    title: "Generated coverage where mature",
    text: "Recommender briefs can become structured scenarios, populations, swarms, and reusable run plans."
  },
  {
    icon: GitCompareArrows,
    title: "Launch comparison",
    text: "Compare runs, regression policy, saved plans, and CI-ready outputs turn testing into release review."
  },
  {
    icon: Workflow,
    title: "Behavior evidence",
    text: "Trace ledgers, failure slices, semantic sidecars, and manifests preserve how each conclusion was reached."
  }
];

export const domainNodes = [
  ["Evidence engine", "Seeds, planning, execution"],
  ["Domain product", "Contract, scenarios, judge"],
  ["Target run", "HTTP, Python, protocol driver"],
  ["Evidence", "Traces, reports, manifests"],
  ["Release", "Compare, policy, review"]
];

export const evidenceCards = [
  ["Executive summary", "release question answered with trace-backed evidence"],
  ["Domain finding", "trust collapse, freshness gap, or tool-use regression"],
  ["Trace ledger", "seeded user/task interactions preserved step by step"],
  ["Semantic advisory", "optional explanation sidecar, non-gating"],
  ["Regression summary", "baseline -> candidate with pass, warn, or fail"],
  ["Artifact manifest", "environment, inputs, outputs, and content hashes"]
];

export const artifactList = [
  "run_plan.json",
  "run_manifest.json",
  "report.md",
  "results.json",
  "traces.jsonl",
  "regression_summary.json"
];

export const docTiles = [
  ["Swarm model", "How release questions become seeded behavior swarms.", "/docs/swarm-model"],
  ["Domain products", "Choose recommender, search, or agent trajectory testing.", "/docs/domain-products"],
  ["Integration paths", "Native HTTP, schema-mapped HTTP, Python, and agent drivers.", "/docs/integration-paths"],
  ["Evidence artifacts", "Reports, traces, JSON, manifests, and regression packets.", "/docs/outputs"]
];

export const heroStats = [
  ["Problem", "behavior risk"],
  ["Coverage", "repeatable"],
  ["Evidence", "trace-backed"],
  ["Decision", "launch packet"]
];

export const firstDomainRoutes = [
  ["recommender", "slates, novelty, trust collapse"],
  ["search", "relevance, freshness, ambiguity"],
  ["agents", "tool use, grounding, refusal"]
];

export const docsCtaCards = docTiles;

export const sectionLabels = {
  workflow: "Live workflow",
  domains: "Platform stack",
  evidence: "Evidence dossier",
  business: "Platform advantages",
  firstDomain: "Domain products",
  docs: "Docs first"
};

export const futureDirection =
  "Generated swarm planning is most mature for recommenders today and is expanding across search and agent domains.";

export const platformStackIcon = Route;

export const ctaLabels = {
  primary: "Request a domain pilot",
  secondary: "Choose a domain"
};

export const domainProducts = [
  {
    slug: "recommender",
    title: "Evidpath for Recommenders",
    eyebrow: "Generated swarms most mature",
    summary:
      "Run repeatable user coverage against recommendation slates before release changes reach real users.",
    failures: ["slate repetition", "novelty drift", "cold start", "trust collapse", "abandonment"],
    integrations: ["native HTTP", "schema-mapped HTTP", "Python callable", "Hugging Face adapter"],
    href: "/docs/recommender-domain"
  },
  {
    slug: "search",
    title: "Evidpath for Search",
    eyebrow: "Public audit and compare domain",
    summary:
      "Run repeatable query coverage against rankers to surface relevance, freshness, ambiguity, and zero-result risks.",
    failures: ["relevance loss", "freshness gaps", "ambiguous intent", "typo recovery", "personalization drift"],
    integrations: ["native HTTP", "schema-mapped HTTP", "Python callable"],
    href: "/docs/search-domain"
  },
  {
    slug: "agents",
    title: "Evidpath for Agents",
    eyebrow: "Public trajectory domain",
    summary:
      "Run repeatable task coverage against agents to evaluate tool use, grounding, refusal behavior, state, and latency.",
    failures: ["tool misuse", "ungrounded answer", "refusal failure", "state loss", "latency cliff"],
    integrations: ["Python/LangGraph", "OpenAI-compatible", "Anthropic", "MCP stdio", "HTTP session"],
    href: "/docs/agent-domain"
  }
];

export const platformFlow = [
  ["Release question", "What behavior could break before launch?"],
  ["Domain coverage", "Users, queries, or tasks shaped for the product line."],
  ["Target interaction", "HTTP, Python, or protocol drivers call the system."],
  ["Judged traces", "Domain judges score behavior and surface risks."],
  ["Launch evidence", "Reports, JSON, traces, manifests, and compare decisions."]
];

export const sharedPlatformCapabilities = [
  "seeded runs",
  "trace capture",
  "domain judging",
  "artifact manifests",
  "baseline/candidate compare",
  "CI-ready evidence"
];
