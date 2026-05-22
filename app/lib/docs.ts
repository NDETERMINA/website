import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Bot,
  Bug,
  CheckCircle2,
  FileJson2,
  ListChecks,
  Plug,
  Route,
  Search,
  Sparkles,
  Terminal,
  Workflow
} from "lucide-react";

import { siteLinks } from "@/app/lib/site";

export type DocSection = {
  title: string;
  body?: string;
  bullets?: string[];
  code?: string;
  table?: {
    headings: string[];
    rows: string[][];
  };
  visual?: "system-type-flow";
};

export type DocCommand = { label: string; command: string };

export type DocStep = {
  title: string;
  body?: string;
  commands?: DocCommand[];
  code?: string;
  language?: string;
  callout?: { variant: "note" | "tip" | "warning" | "info"; title?: string; body: string };
  verify?: string;
};

export type DocCard = {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  cta?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  navTitle: string;
  eyebrow?: string;
  description: string;
  icon: LucideIcon;
  kind?: "default" | "overview" | "quickstart" | "reference";
  sections: DocSection[];
  next?: string;
  prev?: string;
  /** Overview-only */
  cards?: DocCard[];
  mentalModel?: { steps: string[]; rows: Array<{ noun: string; desc: string; href: string }> };
  /** Quickstart-only */
  steps?: DocStep[];
  /** Reference-only sticky sub-nav (anchor ids) */
  subnav?: Array<{ id: string; label: string }>;
};

/**
 * Sidebar IA = single source of truth for nav labels.
 * navTitle here ALSO drives prev/next labels; do not duplicate this
 * label on the DocPage. (See getNavTitle in this file.)
 */
export const docSidebarIA: Array<{ group: string; pages: Array<{ slug: string; navTitle: string; badge?: "new" | "beta" | "soon" }> }> = [
  {
    group: "Get Started",
    pages: [
      { slug: "overview", navTitle: "Overview" },
      { slug: "quickstart", navTitle: "Quickstart" }
    ]
  },
  {
    group: "Core Concepts",
    pages: [
      { slug: "swarm-model", navTitle: "Mental model" },
      { slug: "system-contract", navTitle: "Systems" },
      { slug: "system-type-products", navTitle: "Specs & System Types" },
      { slug: "outputs", navTitle: "Results Bundles" }
    ]
  },
  {
    group: "Workflows",
    pages: [
      { slug: "workflows", navTitle: "Common workflows" },
      { slug: "cli-reference", navTitle: "CLI reference" },
      { slug: "integration-paths", navTitle: "Integration paths" }
    ]
  },
  {
    group: "Reference",
    pages: [
      { slug: "recommender-system-type", navTitle: "Recommender" },
      { slug: "search-system-type", navTitle: "Search" },
      { slug: "agent-system-type", navTitle: "Agents" },
      { slug: "troubleshooting", navTitle: "Troubleshooting" }
    ]
  }
];

/** Lookup the canonical sidebar title for a slug. Used by prev/next so labels never drift. */
export function getNavTitle(slug: string): string {
  for (const g of docSidebarIA) {
    const p = g.pages.find((pg) => pg.slug === slug);
    if (p) return p.navTitle;
  }
  return slug;
}

const groupNameForSlug = (slug: string): string => {
  for (const g of docSidebarIA) {
    if (g.pages.some((p) => p.slug === slug)) return g.group;
  }
  return "Docs";
};

export function getDocPageGroup(slug: string) {
  return groupNameForSlug(slug);
}

export function getFlatNav() {
  const flat: string[] = [];
  for (const g of docSidebarIA) for (const p of g.pages) flat.push(p.slug);
  return flat;
}

export function getNeighbors(slug: string) {
  const flat = getFlatNav();
  const idx = flat.indexOf(slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined
  };
}

export function getSearchEntries() {
  return docsPages
    .filter((p) => docSidebarIA.some((g) => g.pages.some((pg) => pg.slug === p.slug)))
    .map((p) => ({
      slug: p.slug,
      title: p.navTitle,
      group: groupNameForSlug(p.slug),
      description: p.description
    }));
}

/** Legacy export for backwards-compat with old shell. Prefer docSidebarIA. */

export const docsNav: Array<{ group: string; pages: string[] }> = [
  {
    group: "Model",
    pages: ["overview", "swarm-model", "system-type-products"]
  },
  {
    group: "Domains",
    pages: ["recommender-system-type", "search-system-type", "agent-system-type"]
  },
  {
    group: "Integrate",
    pages: ["integration-paths", "quickstart", "cli-reference"]
  },
  {
    group: "Operate",
    pages: ["workflows", "outputs", "generation", "plan-first", "troubleshooting"]
  }
];

export const docsPages: DocPage[] = [
  {
    slug: "overview",
    title: "Determina",
    eyebrow: "Get Started",
    navTitle: "Overview",
    kind: "overview",
    description:
      "Run repeatable Specs against your System, write an Results Bundle every time, and ship the Report your team can audit before each release.",
    icon: BookOpen,
    next: "quickstart",
    cards: [
      {
        title: "Quickstart",
        description: "Install the CLI, run an audit, inspect the Results Bundle — under five minutes.",
        href: "/docs/quickstart",
        cta: "Start"
      },
      {
        title: "Mental model",
        description: "Project → System → Spec → Run → Results Bundle → Report. The six nouns in depth.",
        href: "/docs/swarm-model",
        cta: "Read"
      },
      {
        title: "Systems",
        description: "How EvidPath reaches your system: HTTP, schema-mapped HTTP, Python, or agent driver.",
        href: "/docs/system-contract",
        cta: "Read"
      },
      {
        title: "Results Bundles",
        description: "Every file every Run writes, and how Reports are derived from them.",
        href: "/docs/outputs",
        cta: "Read"
      }
    ],
    mentalModel: {
      steps: ["project", "system", "spec", "run", "results bundle", "report"],
      rows: [
        { noun: "Project", desc: "The container you configure once: default System, scorers, retention, integrations.", href: "/docs/swarm-model" },
        { noun: "System", desc: "The system under test — an HTTP service, Python callable, or agent endpoint.", href: "/docs/system-contract" },
        { noun: "Spec", desc: "A reusable description of what 'correct' looks like for the System: inputs, expectations, scorers.", href: "/docs/system-type-products" },
        { noun: "Run", desc: "One deterministic execution of a Spec against a System with a fixed seed.", href: "/docs/workflows" },
        { noun: "Results Bundle", desc: "The full set of artifacts the Run produces: traces, manifest, scorer outputs, sidecars.", href: "/docs/outputs" },
        { noun: "Report", desc: "Human-readable summary derived from one or two Results Bundles, with a pass / warn / fail decision.", href: "/docs/outputs" }
      ]
    },
    sections: []
  },
  {
    slug: "swarm-model",
    title: "Mental Model",
    navTitle: "Mental model",
    description:
      "The core Determina model: release questions become seeded behavior swarms, system interactions, judged traces, and launch results.",
    icon: Workflow,
    next: "system-type-products",
    sections: [
      {
        title: "Framework Flow",
        body:
          "A run moves from release question to system type selection, system integration, seeded behavior coverage, trace judging, and results. The flow stays stable while each system type changes the behavior language.",
        visual: "system-type-flow"
      },
      {
        title: "Core Terms",
        table: {
          headings: ["Term", "Meaning"],
          rows: [
            ["Release question", "The behavior risk the team wants results for before launch."],
            ["Swarm", "A repeatable set of users, queries, tasks, journeys, or scenarios used to exercise the system."],
            ["System", "The AI system under test: a service, callable, agent graph, or protocol endpoint."],
            ["Trace", "The recorded interaction between a seeded actor/task and the system."],
            ["Judge", "The system type-owned scorer that interprets completed traces."],
            ["Results", "Human-readable and machine-readable artifacts used for release review."]
          ]
        }
      },
      {
        title: "What Makes It Different",
        bullets: [
          "The run is replayable enough to compare releases, not a one-off prompt review.",
          "The judge is system type-shaped, so the results uses the right failure language.",
          "The artifacts preserve inputs, outputs, traces, manifests, and compare decisions.",
          "Generation is an optional coverage layer, not the source of truth for scoring."
        ]
      }
    ]
  },
  {
    slug: "system-type-products",
    title: "Specs & System Types",
    navTitle: "Specs & System Types",
    description:
      "System Type products are the sellable units built on the Determina swarm engine: recommender swarms, search swarms, and agent trajectory swarms.",
    icon: Boxes,
    next: "recommender-system-type",
    sections: [
      {
        title: "Why Domains Exist",
        body:
          "AI systems fail in system type-shaped ways. A recommender can lose trust through repeated slates. A search ranker can miss freshness or intent. An agent can misuse tools or refuse incorrectly. System Type products make those failures testable.",
        bullets: [
          "The platform owns repeatability, execution, traces, reports, manifests, and compare workflows.",
          "The system type owns the system contract, scenarios, simulated actor or task model, judge, metrics, and report vocabulary.",
          "Customers choose the system type product that matches the AI system they ship."
        ]
      },
      {
        title: "System Type Matrix",
        table: {
          headings: ["Product", "Failure language", "Integration paths"],
          rows: [
            ["Determina for Recommenders", "Slate repetition, novelty drift, cold start, trust collapse, abandonment.", "Native HTTP, schema-mapped HTTP, Python callable, Hugging Face/MLflow/sklearn adapters."],
            ["Determina for Search", "Relevance loss, freshness gaps, ambiguity, typo recovery, zero-result behavior, personalization drift.", "Native HTTP, schema-mapped HTTP, Python callable."],
            ["Determina for Agents", "Tool misuse, grounding gaps, refusal failure, multi-turn state loss, unsafe requests, latency cliffs.", "Python/LangGraph, OpenAI-compatible Chat Completions, Anthropic Messages, MCP stdio, HTTP session."]
          ]
        }
      },
      {
        title: "Maturity Notes",
        bullets: [
          "Audit and compare workflows are public for recommender, search, and agents.",
          "Generated scenario/population coverage and run-swarm workflows are currently strongest for recommenders.",
          "Search and agents should be presented as public system type products without claiming generated swarm parity yet."
        ]
      }
    ]
  },
  {
    slug: "recommender-system-type",
    title: "Recommender System Type",
    navTitle: "Recommenders",
    description:
      "Use Determina for Recommenders to test recommendation slates, simulated users, trust collapse, repetition, novelty, cold start, and abandonment before release.",
    icon: Boxes,
    next: "search-system-type",
    sections: [
      {
        title: "What It Tests",
        bullets: [
          "Whether returning-user and sparse-history sessions receive useful slates.",
          "Whether recommendations become repetitive, stale, over-concentrated, or too popularity-heavy.",
          "Whether low-patience or exploratory users lose trust or abandon.",
          "Whether a candidate release changes cohort behavior relative to a baseline."
        ]
      },
      {
        title: "Native HTTP Contract",
        table: {
          headings: ["Endpoint", "Purpose"],
          rows: [
            ["GET /health", "Confirm the service is alive before a run."],
            ["GET /metadata", "Return stable dataset, model, backend, and artifact metadata."],
            ["POST /recommendations", "Return an ordered recommendation slate for one simulated step."]
          ]
        }
      },
      {
        title: "Useful Commands",
        code:
          "determina check-system --system-type recommender \\\n  --system-url http://127.0.0.1:8051\n\n" +
          "determina audit --system-type recommender \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario returning-user-home-feed \\\n  --seed 7\n\n" +
          "determina run-swarm --system-type recommender \\\n  --system-url http://127.0.0.1:8051 \\\n  --brief \"test trust collapse and weak first-slate behavior\""
      },
      {
        title: "Source Links",
        bullets: [
          `Contract: ${siteLinks.externalContract}`,
          `Native HTTP example: ${siteLinks.exampleService}`,
          `Schema-mapped JSONPath example: ${siteLinks.recommenderSchemaMappedJsonpath}`,
          `Python callable example: ${siteLinks.recommenderPythonExample}`
        ]
      }
    ]
  },
  {
    slug: "search-system-type",
    title: "Search System Type",
    navTitle: "Search",
    description:
      "Use Determina for Search to test rankers across relevance, freshness, ambiguity, typo tolerance, zero-result behavior, and personalization.",
    icon: Search,
    next: "agent-system-type",
    sections: [
      {
        title: "What It Tests",
        bullets: [
          "Navigational queries where the top result should satisfy a direct intent.",
          "Time-sensitive queries where fresh sources need to rank highly.",
          "Ambiguous and typo queries where useful diversity and recall matter.",
          "Zero-result behavior where precision is better than hallucinated matches.",
          "Personalized-vs-anonymous behavior where context should help without collapsing variety."
        ]
      },
      {
        title: "Native HTTP Contract",
        table: {
          headings: ["Endpoint", "Purpose"],
          rows: [
            ["GET /health", "Confirm the search service is alive before a run."],
            ["GET /metadata", "Return stable document, model, backend, and artifact metadata."],
            ["POST /search", "Return ranked results for a system type-built search request."]
          ]
        }
      },
      {
        title: "Useful Commands",
        code:
          "determina check-system --system-type search \\\n  --system-url http://127.0.0.1:8051\n\n" +
          "determina audit --system-type search \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --seed 7\n\n" +
          "determina compare --system-type search \\\n  --baseline-url http://127.0.0.1:8051 \\\n  --candidate-url http://127.0.0.1:8052 \\\n  --rerun-count 2"
      },
      {
        title: "Source Links",
        bullets: [
          `Contract: ${siteLinks.searchContract}`,
          `Product source: ${siteLinks.githubProduct}`,
          `Issues and example requests: ${siteLinks.issues}`
        ]
      }
    ]
  },
  {
    slug: "agent-system-type",
    title: "Agent Trajectory System Type",
    navTitle: "Agents",
    description:
      "Use Determina for Agents to evaluate task trajectories, tool use, grounding, refusal, multi-turn state, unsafe requests, and latency.",
    icon: Bot,
    next: "integration-paths",
    sections: [
      {
        title: "What It Tests",
        bullets: [
          "Current-information tasks that should use a search tool and cite grounding details.",
          "Support tasks that should call a knowledge-base tool with useful arguments.",
          "Multi-turn follow-ups where state needs to survive across conversation context.",
          "Unsafe account-access tasks where refusal calibration matters.",
          "Latency-sensitive direct answers where unnecessary tool use can be a regression."
        ]
      },
      {
        title: "Supported Drivers",
        table: {
          headings: ["Driver", "Use it for"],
          rows: [
            ["in_process", "Python callable, class, class instance, or LangGraph-style object."],
            ["openai_chat_completions", "OpenAI-compatible Chat Completions endpoint."],
            ["anthropic_messages", "Anthropic Messages API endpoint."],
            ["mcp_stdio", "Local MCP server over stdio."],
            ["http_session", "Deployed agent service with session lifecycle endpoints."]
          ]
        }
      },
      {
        title: "Useful Commands",
        code:
          "determina audit --system-type agents \\\n  --scenario current-info-tool-use \\\n  --driver-config-path ./driver_config.json \\\n  --seed 7\n\n" +
          "determina compare --system-type agents \\\n  --baseline-driver-config-path ./baseline.json \\\n  --candidate-driver-config-path ./candidate.json \\\n  --scenario multi-turn-support-follow-up \\\n  --rerun-count 2"
      },
      {
        title: "Source Links",
        bullets: [
          `Contract: ${siteLinks.agentContract}`,
          `Python callable example: ${siteLinks.agentPythonExample}`,
          `HTTP session example: ${siteLinks.agentHttpSessionExample}`,
          `MCP stdio example: ${siteLinks.agentMcpExample}`,
          `LangGraph-style example: ${siteLinks.agentLangGraphExample}`
        ]
      }
    ]
  },
  {
    slug: "integration-paths",
    title: "Integration Paths",
    navTitle: "Integrations",
    description:
      "Choose the smallest integration path that matches your system: native HTTP, schema-mapped HTTP, Python callable, or agent protocol driver.",
    icon: Plug,
    next: "quickstart",
    sections: [
      {
        title: "Pick A Path",
        table: {
          headings: ["Path", "Best for", "Domains"],
          rows: [
            ["Native HTTP", "Services that can speak Determina's system type contract directly.", "recommender, search"],
            ["Schema-mapped HTTP", "Existing HTTP services whose request or response shape differs from the native contract.", "recommender, search"],
            ["Python callable", "Local functions, classes, model wrappers, rankers, or agents.", "recommender, search, agents"],
            ["Agent protocol drivers", "Agent services exposed through model APIs, MCP stdio, LangGraph-style objects, or HTTP sessions.", "agents"]
          ]
        }
      },
      {
        title: "Driver Config",
        body:
          "Use `--driver-config-path` when a system cannot be represented by a simple native system URL. This is the main path for schema-mapped HTTP and agent protocol drivers.",
        code:
          "determina audit --system-type agents \\\n  --driver-config-path ./driver_config.json \\\n  --scenario current-info-tool-use"
      },
      {
        title: "Source Links",
        bullets: [
          `Recommender contract: ${siteLinks.externalContract}`,
          `Search contract: ${siteLinks.searchContract}`,
          `Agent contract: ${siteLinks.agentContract}`,
          `Schema-mapped transform example: ${siteLinks.recommenderSchemaMappedTransform}`
        ]
      }
    ]
  },
  {
    slug: "quickstart",
    title: "Quickstart",
    eyebrow: "Get Started",
    navTitle: "Quickstart",
    kind: "quickstart",
    description:
      "Install Determina, run an audit against a system, and inspect the results bundle — in under five minutes.",
    icon: Terminal,
    next: "swarm-model",
    steps: [
      {
        title: "Install the CLI",
        body: "Determina ships as a Python package. Python 3.11+ required.",
        commands: [
          { label: "pip", command: "python -m pip install determina" },
          { label: "pipx", command: "pipx install determina" },
          { label: "uv", command: "uv pip install determina" }
        ],
        verify: "determina --version → prints the installed version."
      },
      {
        title: "Check a system",
        body: "Confirm your system service speaks the system type contract before a full run.",
        code:
          "determina check-system --system-type recommender \\\n  --system-url http://127.0.0.1:8051",
        verify: "Exit code 0 and a check report listing reachable endpoints."
      },
      {
        title: "Run your first audit",
        body: "Pick a scenario for the system type you ship — recommender, search, or agents.",
        commands: [
          {
            label: "Recommender",
            command:
              "determina audit --system-type recommender \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario returning-user-home-feed \\\n  --seed 7"
          },
          {
            label: "Search",
            command:
              "determina audit --system-type search \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --seed 7"
          },
          {
            label: "Agents",
            command:
              "determina audit --system-type agents \\\n  --scenario current-info-tool-use \\\n  --driver-config-path ./driver_config.json \\\n  --seed 7"
          }
        ],
        verify: "determina-output/ contains report.md, results.json, traces.jsonl, and run_manifest.json."
      },
      {
        title: "Inspect the results bundle",
        body:
          "The bundle is the durable artifact for a release decision. Read report.md first, then dig into traces.jsonl for representative interactions.",
        callout: {
          variant: "tip",
          body: "Pipe report.md into a PR comment or attach the bundle to a release ticket — that's the workflow the manifest is designed for."
        }
      },
      {
        title: "Compare for a release decision",
        body: "When a candidate system needs review against a baseline, use compare to run both under matched coverage.",
        code:
          "determina compare --system-type recommender \\\n  --baseline-url http://127.0.0.1:8051 \\\n  --candidate-url http://127.0.0.1:8052 \\\n  --baseline-label current-prod \\\n  --candidate-label next-build \\\n  --rerun-count 2",
        verify: "regression_report.md prints a baseline-vs-candidate verdict (pass / warn / fail)."
      },
      {
        title: "Wire it into CI",
        body: "Run the same command in your pipeline. The bundle becomes a release artifact.",
        code:
          "# .github/workflows/determina.yml\n- run: |\n    pip install determina\n    determina audit --system-type recommender \\\n      --system-url ${{ env.TARGET_URL }} \\\n      --scenario returning-user-home-feed \\\n      --output-dir ./determina-output\n- uses: actions/upload-artifact@v4\n  with:\n    name: determina-bundle\n    path: ./determina-output",
        language: "yaml",
        callout: {
          variant: "note",
          body: "A first-class GitHub Action is on the roadmap; for now the inline run step is the recommended pattern."
        }
      }
    ],
    sections: []
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    eyebrow: "SDK / CLI",
    navTitle: "CLI reference",
    kind: "reference",
    description:
      "Every command, every flag — grouped by what it does. The CLI is the surface most teams interact with; the SDK is shaping up alongside it.",
    icon: ListChecks,
    next: "integration-paths",
    subnav: [
      { id: "commands", label: "Commands" },
      { id: "system-type", label: "System type" },
      { id: "targets", label: "Systems" },
      { id: "examples", label: "Examples" }
    ],
    sections: [
      {
        title: "Commands",
        body: "Every CLI verb, mapped to the smallest workflow that answers a release question.",
        table: {
          headings: ["Command", "Use it for"],
          rows: [
            ["check-system", "Validate a native external HTTP system before a full run. Supported for system types with native system checks."],
            ["audit", "Run one system type audit and write the standard artifact bundle."],
            ["compare", "Compare baseline and candidate systems across reruns."],
            ["run-swarm", "Generate coverage from one brief and run an audit where generation hooks exist today."],
            ["plan-run", "Create a run_plan.json without executing the workflow."],
            ["execute-plan", "Execute a saved run plan deterministically."],
            ["generate-scenarios / generate-personas", "Generate and save test case packs for system types that support generated test cases."],
            ["serve-reference", "Start the local product-owned reference service for supported system types."]
          ]
        }
      },
      {
        title: "System Type",
        body: "Every command takes --system-type. It selects the contract, scenario grammar, and judge.",
        table: {
          headings: ["Option", "Meaning"],
          rows: [
            ["--system-type recommender", "Recommendation slate audits, compare, generated test cases, and run-swarm."],
            ["--system-type search", "Search ranker audits and compare workflows."],
            ["--system-type agents", "Agent trajectory audits and compare workflows."]
          ]
        }
      },
      {
        title: "Systems",
        body: "How the CLI reaches the system under test. Pick the smallest option that fits.",
        table: {
          headings: ["Option", "Use it when"],
          rows: [
            ["--system-url", "Running against a native external HTTP service."],
            ["--driver-config-path", "Running schema-mapped HTTP, in-process imports, or agent protocol drivers."],
            ["--reference-artifact-dir", "Running the local product-owned reference path where supported."],
            ["--use-mock", "Internal recommender debug/testing only."]
          ]
        }
      },
      {
        title: "Examples",
        body: "Three patterns you'll actually run, copy-paste ready.",
        code:
          "# Smallest useful audit\ndetermina audit --system-type recommender \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario returning-user-home-feed\n\n# Compare for a release decision\ndetermina compare --system-type agents \\\n  --baseline-driver-config-path ./baseline.json \\\n  --candidate-driver-config-path ./candidate.json \\\n  --scenario current-info-tool-use \\\n  --rerun-count 2\n\n# Plan-first review packet\ndetermina plan-run --workflow audit \\\n  --system-type search \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --output-dir ./planned-search-audit"
      }
    ]
  },
  {
    slug: "workflows",
    title: "Common Workflows",
    navTitle: "Workflows",
    description:
      "Pick the smallest workflow that answers the release question: check, audit, compare, plan, or generated test cases where supported.",
    icon: Workflow,
    next: "outputs",
    sections: [
      {
        title: "Check A Native HTTP System",
        code:
          "determina check-system --system-type recommender \\\n  --system-url http://127.0.0.1:8051\n\n" +
          "determina check-system --system-type search \\\n  --system-url http://127.0.0.1:8051"
      },
      {
        title: "Inspect One Concrete Run",
        code:
          "determina audit --system-type search \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario ambiguous-query \\\n  --output-dir ./search-audit"
      },
      {
        title: "Decide Whether A Candidate Is Safer",
        code:
          "determina compare --system-type agents \\\n  --baseline-driver-config-path ./baseline.json \\\n  --candidate-driver-config-path ./candidate.json \\\n  --scenario current-info-tool-use \\\n  --rerun-count 2 \\\n  --output-dir ./agent-compare"
      },
      {
        title: "Generate A Recommender Swarm",
        body:
          "Use run-swarm after the basic workflow is clear. This generated-coverage path is currently strongest for recommender testing.",
        code:
          "determina run-swarm --system-type recommender \\\n  --system-url http://127.0.0.1:8051 \\\n  --brief \"test trust collapse and weak first-slate behavior\""
      }
    ]
  },
  {
    slug: "outputs",
    title: "Results Bundles & Reports",
    navTitle: "Results Bundles",
    description:
      "Determina writes readable and machine-readable results: reports, JSON, traces, manifests, semantic sidecars, and regression packets.",
    icon: FileJson2,
    next: "generation",
    sections: [
      {
        title: "Single Audit Bundle",
        table: {
          headings: ["File", "Purpose"],
          rows: [
            ["report.md", "Human-readable summary of risks, cohorts, scenarios, and representative traces."],
            ["results.json", "Structured audit result for automation or later analysis."],
            ["traces.jsonl", "Trace-level detail for step-by-step inspection."],
            ["run_plan.json", "Saved plan when the workflow supports plan-first execution."],
            ["run_manifest.json", "What actually ran, including workflow metadata, environment, inputs, outputs, and hashes."],
            ["semantic_advisory.json", "Optional advisory explanation sidecar when semantic mode is enabled."]
          ]
        }
      },
      {
        title: "Compare Bundle",
        table: {
          headings: ["File or folder", "Purpose"],
          rows: [
            ["regression_report.md", "Readable baseline-vs-candidate summary."],
            ["regression_summary.json", "Structured compare summary and pass/warn/fail decision fields."],
            ["regression_traces.json", "Trace-level comparison details."],
            ["baseline/ and candidate/", "Nested audit runs used to produce the comparison."],
            ["run_manifest.json", "Compare workflow manifest."]
          ]
        }
      }
    ]
  },
  {
    slug: "generation",
    title: "Generated Test Cases",
    navTitle: "Generation",
    description:
      "Generated test cases expands swarms from testing briefs. It is currently most mature for the recommender system type and remains optional beside deterministic results.",
    icon: Sparkles,
    next: "plan-first",
    sections: [
      {
        title: "Current Scope",
        bullets: [
          "Recommender supports generated scenarios, generated populations, and run-swarm workflows.",
          "Search and agents are public for audit/compare but should not be presented as generated-test-case parity system types yet.",
          "Provider-backed generation and semantic interpretation require provider credentials.",
          "Normal check-system, audit, and compare runs do not require an API key."
        ]
      },
      {
        title: "Generate Recommender Scenarios",
        code:
          "determina generate-scenarios --system-type recommender \\\n  --brief \"test trust collapse for exploratory users\" \\\n  --mode provider \\\n  --scenario-count 3"
      },
      {
        title: "Generate A Recommender Population",
        code:
          "determina generate-personas --system-type recommender \\\n  --brief \"impatient users, explorers, niche users, and trust-sensitive mainstream users\" \\\n  --mode provider \\\n  --population-size 4"
      }
    ]
  },
  {
    slug: "plan-first",
    title: "Plan-First Runs",
    navTitle: "Plan-first",
    description:
      "Plan-first workflows create a durable run_plan.json before execution. Use this when review, approval, or reproducible handoff matters.",
    icon: Route,
    next: "troubleshooting",
    sections: [
      {
        title: "Plan An Audit",
        code:
          "determina plan-run --workflow audit \\\n  --system-type search \\\n  --system-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --output-dir ./planned-search-audit"
      },
      {
        title: "Execute The Plan",
        code:
          "determina execute-plan \\\n  --run-plan-path ./planned-search-audit/run_plan.json"
      },
      {
        title: "When To Use It",
        bullets: [
          "You want a stable run plan checked into a review packet.",
          "You want to separate coverage planning from execution.",
          "You want another person or system to execute the exact same workflow later."
        ]
      }
    ]
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    navTitle: "Troubleshooting",
    description:
      "Most failures come from endpoint reachability, contract shape, driver configuration, unexpected output paths, or missing provider credentials for advanced features.",
    icon: Bug,
    sections: [
      {
        title: "System Or Driver Fails",
        bullets: [
          "Confirm the service process is running and reachable from the terminal.",
          "For recommender native HTTP, confirm GET /health, GET /metadata, and POST /recommendations exist.",
          "For search native HTTP, confirm GET /health, GET /metadata, and POST /search exist.",
          "For agents, confirm the driver config contains the required fields for the selected driver kind.",
          "Use --driver-config-path for schema-mapped HTTP and agent protocol drivers."
        ]
      },
      {
        title: "Generated Test Cases Is Rejected",
        bullets: [
          "Generated test case commands only accept system types with generation hooks.",
          "If run-swarm rejects agents or search, use audit or compare for those system types.",
          "For recommender generation, confirm provider credentials when using --mode provider."
        ]
      },
      {
        title: "Output Is Missing",
        bullets: [
          "Pass --output-dir explicitly when you need a predictable folder.",
          "If you omit --output-dir, check ./determina-output/ in your current working directory.",
          "For compare runs, inspect nested baseline/ and candidate/ folders too."
        ]
      },
      {
        title: "Need Source Material",
        bullets: [
          `Product source: ${siteLinks.githubProduct}`,
          `Issues: ${siteLinks.issues}`,
          `Releases: ${siteLinks.releases}`
        ]
      }
    ]
  },
  {
    slug: "system-contract",
    title: "System Contracts",
    navTitle: "Systems",
    description:
      "Legacy entry point for system contracts. Use integration paths and system type guides for the current multi-system type structure.",
    icon: Plug,
    next: "integration-paths",
    sections: [
      {
        title: "Current Contract Links",
        bullets: [
          `Recommender contract: ${siteLinks.externalContract}`,
          `Search contract: ${siteLinks.searchContract}`,
          `Agent contract: ${siteLinks.agentContract}`
        ]
      }
    ]
  },
  {
    slug: "system-type-model",
    title: "System Type Model",
    navTitle: "System Type model",
    description:
      "Legacy entry point for the system type model. The current docs split the model into swarm model and system type products.",
    icon: Boxes,
    next: "swarm-model",
    sections: [
      {
        title: "Read These Instead",
        bullets: [
          "Swarm model: /docs/swarm-model",
          "System Type products: /docs/system-type-products",
          "Integration paths: /docs/integration-paths"
        ]
      }
    ]
  },
  {
    slug: "platform-roadmap",
    title: "Platform Roadmap",
    navTitle: "Roadmap",
    description:
      "Legacy entry point for roadmap framing. The current site describes public system types plus maturity notes in the system type product guide.",
    icon: Route,
    next: "system-type-products",
    sections: [
      {
        title: "Current Framing",
        bullets: [
          "Recommender, search, and agents are public system type products.",
          "Generated swarm planning is currently most mature for recommenders.",
          "The platform layer provides repeatable runs, traces, reports, manifests, and compare workflows across system types."
        ]
      }
    ]
  }
];

export function getDocPage(slug: string) {
  return docsPages.find((page) => page.slug === slug);
}

export const docHomeCards = [
  {
    title: "Understand swarm testing",
    description: "Learn how release questions become seeded behavior swarms and trace-backed results.",
    href: "/docs/swarm-model",
    icon: Workflow
  },
  {
    title: "Choose a system type product",
    description: "Compare recommender, search, and agent trajectory testing surfaces.",
    href: "/docs/system-type-products",
    icon: Boxes
  },
  {
    title: "Test recommenders",
    description: "Review slates, novelty, repetition, trust collapse, cold start, and abandonment.",
    href: "/docs/recommender-system-type",
    icon: Boxes
  },
  {
    title: "Test search rankers",
    description: "Review relevance, freshness, ambiguity, typo recovery, and zero-result behavior.",
    href: "/docs/search-system-type",
    icon: Search
  },
  {
    title: "Test agents",
    description: "Review tool use, grounding, refusal, multi-turn state, unsafe requests, and latency.",
    href: "/docs/agent-system-type",
    icon: Bot
  },
  {
    title: "Pick an integration path",
    description: "Choose native HTTP, schema-mapped HTTP, Python callable, or agent protocol drivers.",
    href: "/docs/integration-paths",
    icon: Plug
  },
  {
    title: "Run the CLI",
    description: "See audit, compare, generated test cases, and plan-first workflow boundaries.",
    href: "/docs/cli-reference",
    icon: ListChecks
  },
  {
    title: "Read the run outputs",
    description: "Understand reports, JSON, traces, manifests, semantic sidecars, and regression outputs.",
    href: "/docs/outputs",
    icon: FileJson2
  },
  {
    title: "Compare before launch",
    description: "Use baseline/candidate runs to make release review concrete.",
    href: "/docs/workflows",
    icon: Workflow
  },
  {
    title: "Fix common issues",
    description: "Debug endpoint, contract, driver, output, and provider setup problems.",
    href: "/docs/troubleshooting",
    icon: CheckCircle2
  }
];
