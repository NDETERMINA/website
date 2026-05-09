import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Bot,
  Bug,
  CheckCircle2,
  FileJson2,
  GitCompareArrows,
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
  visual?: "domain-flow";
};

export type DocPage = {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  icon: LucideIcon;
  sections: DocSection[];
  next?: string;
};

export const docsNav: Array<{ group: string; pages: string[] }> = [
  {
    group: "Model",
    pages: ["overview", "swarm-model", "domain-products"]
  },
  {
    group: "Domains",
    pages: ["recommender-domain", "search-domain", "agent-domain"]
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
    title: "Evidpath Docs",
    navTitle: "Overview",
    description:
      "Evidpath is a swarm testing and evidence system for AI products. The platform runs repeatable domain swarms, judges traces, and writes launch evidence for recommender, search, and agent systems.",
    icon: BookOpen,
    next: "swarm-model",
    sections: [
      {
        title: "What Evidpath Does",
        body:
          "Evidpath turns a release question into a repeatable run: choose a domain product, run seeded behavior coverage against a target, judge the traces, and review the evidence bundle before launch.",
        bullets: [
          "Use one swarm engine for seeded runs, trace capture, judging, reports, manifests, and compare workflows.",
          "Use domain products for the behavior language that matters to the system under test.",
          "Evaluate recommender systems, search rankers, and agent trajectories through public package workflows.",
          "Keep generated swarm coverage scoped honestly: it is currently strongest for recommenders and expanding across domains."
        ]
      },
      {
        title: "Platform And Products",
        table: {
          headings: ["Layer", "What it owns"],
          rows: [
            ["Evidpath platform", "Planning, deterministic seeds, execution, trace ledger, reports, manifests, and compare artifacts."],
            ["Domain product", "Target contract, scenario grammar, simulated actors or tasks, judge, metrics, and report language."],
            ["Integration path", "Native HTTP, schema-mapped HTTP, Python callable, or agent protocol driver depending on the domain."],
            ["Evidence packet", "report.md, results.json, traces.jsonl, run_manifest.json, and compare outputs."]
          ]
        }
      },
      {
        title: "Public Domains",
        table: {
          headings: ["Domain", "Use it for", "Current notes"],
          rows: [
            ["recommender", "Recommendation slates, novelty, repetition, cold start, trust collapse, and abandonment.", "Audit, compare, generated scenarios/populations, run-swarm, native/schema-mapped HTTP, Python, and optional adapters."],
            ["search", "Ranked results, relevance, freshness, ambiguity, typo recovery, zero-result behavior, and personalization.", "Audit and compare with native HTTP, schema-mapped HTTP, Python, and reference runs."],
            ["agents", "Tool use, grounding, refusal, multi-turn state, unsafe requests, and latency.", "Audit and compare with Python/LangGraph, OpenAI-compatible, Anthropic, MCP stdio, HTTP session, and reference runs."]
          ]
        }
      }
    ]
  },
  {
    slug: "swarm-model",
    title: "Swarm Testing Model",
    navTitle: "Swarm model",
    description:
      "The core Evidpath model: release questions become seeded behavior swarms, target interactions, judged traces, and launch evidence.",
    icon: Workflow,
    next: "domain-products",
    sections: [
      {
        title: "Framework Flow",
        body:
          "A run moves from release question to domain selection, target integration, seeded behavior coverage, trace judging, and evidence. The flow stays stable while each domain changes the behavior language.",
        visual: "domain-flow"
      },
      {
        title: "Core Terms",
        table: {
          headings: ["Term", "Meaning"],
          rows: [
            ["Release question", "The behavior risk the team wants evidence for before launch."],
            ["Swarm", "A repeatable set of users, queries, tasks, journeys, or scenarios used to exercise the target."],
            ["Target", "The AI system under test: a service, callable, agent graph, or protocol endpoint."],
            ["Trace", "The recorded interaction between a seeded actor/task and the target."],
            ["Judge", "The domain-owned scorer that interprets completed traces."],
            ["Evidence", "Human-readable and machine-readable artifacts used for release review."]
          ]
        }
      },
      {
        title: "What Makes It Different",
        bullets: [
          "The run is replayable enough to compare releases, not a one-off prompt review.",
          "The judge is domain-shaped, so the evidence uses the right failure language.",
          "The artifacts preserve inputs, outputs, traces, manifests, and compare decisions.",
          "Generation is an optional coverage layer, not the source of truth for scoring."
        ]
      }
    ]
  },
  {
    slug: "domain-products",
    title: "Domain Products",
    navTitle: "Domain products",
    description:
      "Domain products are the sellable units built on the Evidpath swarm engine: recommender swarms, search swarms, and agent trajectory swarms.",
    icon: Boxes,
    next: "recommender-domain",
    sections: [
      {
        title: "Why Domains Exist",
        body:
          "AI systems fail in domain-shaped ways. A recommender can lose trust through repeated slates. A search ranker can miss freshness or intent. An agent can misuse tools or refuse incorrectly. Domain products make those failures testable.",
        bullets: [
          "The platform owns repeatability, execution, traces, reports, manifests, and compare workflows.",
          "The domain owns the target contract, scenarios, simulated actor or task model, judge, metrics, and report vocabulary.",
          "Customers choose the domain product that matches the AI system they ship."
        ]
      },
      {
        title: "Domain Matrix",
        table: {
          headings: ["Product", "Failure language", "Integration paths"],
          rows: [
            ["Evidpath for Recommenders", "Slate repetition, novelty drift, cold start, trust collapse, abandonment.", "Native HTTP, schema-mapped HTTP, Python callable, Hugging Face/MLflow/sklearn adapters."],
            ["Evidpath for Search", "Relevance loss, freshness gaps, ambiguity, typo recovery, zero-result behavior, personalization drift.", "Native HTTP, schema-mapped HTTP, Python callable."],
            ["Evidpath for Agents", "Tool misuse, grounding gaps, refusal failure, multi-turn state loss, unsafe requests, latency cliffs.", "Python/LangGraph, OpenAI-compatible Chat Completions, Anthropic Messages, MCP stdio, HTTP session."]
          ]
        }
      },
      {
        title: "Maturity Notes",
        bullets: [
          "Audit and compare workflows are public for recommender, search, and agents.",
          "Generated scenario/population coverage and run-swarm workflows are currently strongest for recommenders.",
          "Search and agents should be presented as public domain products without claiming generated swarm parity yet."
        ]
      }
    ]
  },
  {
    slug: "recommender-domain",
    title: "Recommender Domain",
    navTitle: "Recommenders",
    description:
      "Use Evidpath for Recommenders to test recommendation slates, simulated users, trust collapse, repetition, novelty, cold start, and abandonment before release.",
    icon: Boxes,
    next: "search-domain",
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
          "evidpath check-target --domain recommender \\\n  --target-url http://127.0.0.1:8051\n\n" +
          "evidpath audit --domain recommender \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario returning-user-home-feed \\\n  --seed 7\n\n" +
          "evidpath run-swarm --domain recommender \\\n  --target-url http://127.0.0.1:8051 \\\n  --brief \"test trust collapse and weak first-slate behavior\""
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
    slug: "search-domain",
    title: "Search Domain",
    navTitle: "Search",
    description:
      "Use Evidpath for Search to test rankers across relevance, freshness, ambiguity, typo tolerance, zero-result behavior, and personalization.",
    icon: Search,
    next: "agent-domain",
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
            ["POST /search", "Return ranked results for a domain-built search request."]
          ]
        }
      },
      {
        title: "Useful Commands",
        code:
          "evidpath check-target --domain search \\\n  --target-url http://127.0.0.1:8051\n\n" +
          "evidpath audit --domain search \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --seed 7\n\n" +
          "evidpath compare --domain search \\\n  --baseline-url http://127.0.0.1:8051 \\\n  --candidate-url http://127.0.0.1:8052 \\\n  --rerun-count 2"
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
    slug: "agent-domain",
    title: "Agent Trajectory Domain",
    navTitle: "Agents",
    description:
      "Use Evidpath for Agents to evaluate task trajectories, tool use, grounding, refusal, multi-turn state, unsafe requests, and latency.",
    icon: Bot,
    next: "integration-paths",
    sections: [
      {
        title: "What It Tests",
        bullets: [
          "Current-information tasks that should use a search tool and cite grounded evidence.",
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
          "evidpath audit --domain agents \\\n  --scenario current-info-tool-use \\\n  --driver-config-path ./driver_config.json \\\n  --seed 7\n\n" +
          "evidpath compare --domain agents \\\n  --baseline-driver-config-path ./baseline.json \\\n  --candidate-driver-config-path ./candidate.json \\\n  --scenario multi-turn-support-follow-up \\\n  --rerun-count 2"
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
            ["Native HTTP", "Services that can speak Evidpath's domain contract directly.", "recommender, search"],
            ["Schema-mapped HTTP", "Existing HTTP services whose request or response shape differs from the native contract.", "recommender, search"],
            ["Python callable", "Local functions, classes, model wrappers, rankers, or agents.", "recommender, search, agents"],
            ["Agent protocol drivers", "Agent services exposed through model APIs, MCP stdio, LangGraph-style objects, or HTTP sessions.", "agents"]
          ]
        }
      },
      {
        title: "Driver Config",
        body:
          "Use `--driver-config-path` when a target cannot be represented by a simple native target URL. This is the main path for schema-mapped HTTP and agent protocol drivers.",
        code:
          "evidpath audit --domain agents \\\n  --driver-config-path ./driver_config.json \\\n  --scenario current-info-tool-use"
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
    title: "Multi-Domain Quickstart",
    navTitle: "Quickstart",
    description:
      "Install Evidpath, run one audit in each public domain, and compare two versions before launch.",
    icon: Terminal,
    next: "cli-reference",
    sections: [
      {
        title: "Install",
        bullets: ["Python 3.11 or newer.", "A target service, Python callable, or driver config for the domain you want to test."],
        code: "python -m pip install evidpath"
      },
      {
        title: "Recommender Audit",
        code:
          "evidpath audit --domain recommender \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario returning-user-home-feed \\\n  --seed 7"
      },
      {
        title: "Search Audit",
        code:
          "evidpath audit --domain search \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --seed 7"
      },
      {
        title: "Agent Audit",
        code:
          "evidpath audit --domain agents \\\n  --scenario current-info-tool-use \\\n  --driver-config-path ./driver_config.json \\\n  --seed 7"
      },
      {
        title: "Compare Before Launch",
        body:
          "Use compare when a candidate target should be reviewed against a baseline under comparable domain coverage.",
        code:
          "evidpath compare --domain recommender \\\n  --baseline-url http://127.0.0.1:8051 \\\n  --candidate-url http://127.0.0.1:8052 \\\n  --baseline-label current-prod \\\n  --candidate-label next-build \\\n  --rerun-count 2"
      }
    ]
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    navTitle: "CLI reference",
    description:
      "The CLI exposes shared workflows across public domains, with generated coverage commands limited to domains that currently provide generation hooks.",
    icon: ListChecks,
    next: "workflows",
    sections: [
      {
        title: "Recommended Commands",
        table: {
          headings: ["Command", "Use it for"],
          rows: [
            ["check-target", "Validate a native external HTTP target before a full run. Supported for domains with native target checks."],
            ["audit", "Run one domain audit and write the standard artifact bundle."],
            ["compare", "Compare baseline and candidate targets across reruns."],
            ["run-swarm", "Generate coverage from one brief and run an audit where generation hooks exist today."],
            ["plan-run", "Create a run_plan.json without executing the workflow."],
            ["execute-plan", "Execute a saved run plan deterministically."],
            ["generate-scenarios / generate-population", "Generate and save coverage packs for domains that support generated coverage."],
            ["serve-reference", "Start the local product-owned reference service for supported domains."]
          ]
        }
      },
      {
        title: "Domain Option",
        table: {
          headings: ["Option", "Meaning"],
          rows: [
            ["--domain recommender", "Recommendation slate audits, compare, generated coverage, and run-swarm."],
            ["--domain search", "Search ranker audits and compare workflows."],
            ["--domain agents", "Agent trajectory audits and compare workflows."]
          ]
        }
      },
      {
        title: "Target Options",
        table: {
          headings: ["Option", "Use it when"],
          rows: [
            ["--target-url", "Running against a native external HTTP service."],
            ["--driver-config-path", "Running schema-mapped HTTP, in-process imports, or agent protocol drivers."],
            ["--reference-artifact-dir", "Running the local product-owned reference path where supported."],
            ["--use-mock", "Internal recommender debug/testing only."]
          ]
        }
      }
    ]
  },
  {
    slug: "workflows",
    title: "Common Workflows",
    navTitle: "Workflows",
    description:
      "Pick the smallest workflow that answers the release question: check, audit, compare, plan, or generated coverage where supported.",
    icon: Workflow,
    next: "outputs",
    sections: [
      {
        title: "Check A Native HTTP Target",
        code:
          "evidpath check-target --domain recommender \\\n  --target-url http://127.0.0.1:8051\n\n" +
          "evidpath check-target --domain search \\\n  --target-url http://127.0.0.1:8051"
      },
      {
        title: "Inspect One Concrete Run",
        code:
          "evidpath audit --domain search \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario ambiguous-query \\\n  --output-dir ./search-audit"
      },
      {
        title: "Decide Whether A Candidate Is Safer",
        code:
          "evidpath compare --domain agents \\\n  --baseline-driver-config-path ./baseline.json \\\n  --candidate-driver-config-path ./candidate.json \\\n  --scenario current-info-tool-use \\\n  --rerun-count 2 \\\n  --output-dir ./agent-compare"
      },
      {
        title: "Generate A Recommender Swarm",
        body:
          "Use run-swarm after the basic workflow is clear. This generated-coverage path is currently strongest for recommender testing.",
        code:
          "evidpath run-swarm --domain recommender \\\n  --target-url http://127.0.0.1:8051 \\\n  --brief \"test trust collapse and weak first-slate behavior\""
      }
    ]
  },
  {
    slug: "outputs",
    title: "Outputs And Reports",
    navTitle: "Outputs",
    description:
      "Evidpath writes readable and machine-readable evidence: reports, JSON, traces, manifests, semantic sidecars, and regression packets.",
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
    title: "Generated Coverage",
    navTitle: "Generation",
    description:
      "Generated coverage expands swarms from testing briefs. It is currently most mature for the recommender domain and remains optional beside deterministic evidence.",
    icon: Sparkles,
    next: "plan-first",
    sections: [
      {
        title: "Current Scope",
        bullets: [
          "Recommender supports generated scenarios, generated populations, and run-swarm workflows.",
          "Search and agents are public for audit/compare but should not be presented as generated-coverage parity domains yet.",
          "Provider-backed generation and semantic interpretation require provider credentials.",
          "Normal check-target, audit, and compare runs do not require an API key."
        ]
      },
      {
        title: "Generate Recommender Scenarios",
        code:
          "evidpath generate-scenarios --domain recommender \\\n  --brief \"test trust collapse for exploratory users\" \\\n  --mode provider \\\n  --scenario-count 3"
      },
      {
        title: "Generate A Recommender Population",
        code:
          "evidpath generate-population --domain recommender \\\n  --brief \"impatient users, explorers, niche users, and trust-sensitive mainstream users\" \\\n  --mode provider \\\n  --population-size 4"
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
          "evidpath plan-run --workflow audit \\\n  --domain search \\\n  --target-url http://127.0.0.1:8051 \\\n  --scenario time-sensitive-query \\\n  --output-dir ./planned-search-audit"
      },
      {
        title: "Execute The Plan",
        code:
          "evidpath execute-plan \\\n  --run-plan-path ./planned-search-audit/run_plan.json"
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
        title: "Target Or Driver Fails",
        bullets: [
          "Confirm the service process is running and reachable from the terminal.",
          "For recommender native HTTP, confirm GET /health, GET /metadata, and POST /recommendations exist.",
          "For search native HTTP, confirm GET /health, GET /metadata, and POST /search exist.",
          "For agents, confirm the driver config contains the required fields for the selected driver kind.",
          "Use --driver-config-path for schema-mapped HTTP and agent protocol drivers."
        ]
      },
      {
        title: "Generated Coverage Is Rejected",
        bullets: [
          "Generated coverage commands only accept domains with generation hooks.",
          "If run-swarm rejects agents or search, use audit or compare for those domains.",
          "For recommender generation, confirm provider credentials when using --mode provider."
        ]
      },
      {
        title: "Output Is Missing",
        bullets: [
          "Pass --output-dir explicitly when you need a predictable folder.",
          "If you omit --output-dir, check ./evidpath-output/ in your current working directory.",
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
    slug: "target-contract",
    title: "Target Contracts",
    navTitle: "Contracts",
    description:
      "Legacy entry point for target contracts. Use integration paths and domain guides for the current multi-domain structure.",
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
    slug: "domain-model",
    title: "Domain Model",
    navTitle: "Domain model",
    description:
      "Legacy entry point for the domain model. The current docs split the model into swarm model and domain products.",
    icon: Boxes,
    next: "swarm-model",
    sections: [
      {
        title: "Read These Instead",
        bullets: [
          "Swarm model: /docs/swarm-model",
          "Domain products: /docs/domain-products",
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
      "Legacy entry point for roadmap framing. The current site describes public domains plus maturity notes in the domain product guide.",
    icon: Route,
    next: "domain-products",
    sections: [
      {
        title: "Current Framing",
        bullets: [
          "Recommender, search, and agents are public domain products.",
          "Generated swarm planning is currently most mature for recommenders.",
          "The platform layer provides repeatable runs, traces, reports, manifests, and compare workflows across domains."
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
    description: "Learn how release questions become seeded behavior swarms and trace-backed evidence.",
    href: "/docs/swarm-model",
    icon: Workflow
  },
  {
    title: "Choose a domain product",
    description: "Compare recommender, search, and agent trajectory testing surfaces.",
    href: "/docs/domain-products",
    icon: Boxes
  },
  {
    title: "Test recommenders",
    description: "Review slates, novelty, repetition, trust collapse, cold start, and abandonment.",
    href: "/docs/recommender-domain",
    icon: Boxes
  },
  {
    title: "Test search rankers",
    description: "Review relevance, freshness, ambiguity, typo recovery, and zero-result behavior.",
    href: "/docs/search-domain",
    icon: Search
  },
  {
    title: "Test agents",
    description: "Review tool use, grounding, refusal, multi-turn state, unsafe requests, and latency.",
    href: "/docs/agent-domain",
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
    description: "See audit, compare, generated coverage, and plan-first workflow boundaries.",
    href: "/docs/cli-reference",
    icon: ListChecks
  },
  {
    title: "Read the evidence packet",
    description: "Understand reports, JSON, traces, manifests, semantic sidecars, and regression outputs.",
    href: "/docs/outputs",
    icon: FileJson2
  },
  {
    title: "Compare before launch",
    description: "Use baseline/candidate runs to make release review concrete.",
    href: "/docs/workflows",
    icon: GitCompareArrows
  },
  {
    title: "Fix common issues",
    description: "Debug endpoint, contract, driver, output, and provider setup problems.",
    href: "/docs/troubleshooting",
    icon: CheckCircle2
  }
];
