import { BookOpen, Boxes, Bot, Bug, Cloud, Code2, FileJson2, GitBranch, ListChecks, Plug, Route, Search, Server, Sparkles, Terminal, Workflow } from "lucide-react";

import Overview from "@/content/docs/start/overview.mdx";
import Quickstart from "@/content/docs/start/quickstart.mdx";
import LocalSmokeTest from "@/content/docs/start/local-smoke-test.mdx";
import Projects from "@/content/docs/core-workflow/projects.mdx";
import Systems from "@/content/docs/core-workflow/systems-and-versions.mdx";
import BehaviorTrials from "@/content/docs/core-workflow/behavior-trials.mdx";
import CompareLaunchDecisions from "@/content/docs/core-workflow/compare-launch-decisions.mdx";
import ResultsPackets from "@/content/docs/core-workflow/results-packets.mdx";
import NativeHttp from "@/content/docs/integrations/native-http.mdx";
import SchemaMappedHttp from "@/content/docs/integrations/schema-mapped-http.mdx";
import PythonCallable from "@/content/docs/integrations/python-callable.mdx";
import AgentHttpSession from "@/content/docs/integrations/agent-http-session.mdx";
import ProviderDrivers from "@/content/docs/integrations/provider-drivers.mdx";
import MpcLangGraph from "@/content/docs/integrations/mcp-langgraph.mdx";
import Recommenders from "@/content/docs/system-types/recommenders.mdx";
import SearchSystems from "@/content/docs/system-types/search.mdx";
import Agents from "@/content/docs/system-types/agents.mdx";
import GeneratedTestCases from "@/content/docs/advanced/generated-test-cases.mdx";
import SourceSpecsPlanFirst from "@/content/docs/advanced/source-specs-plan-first.mdx";
import LocalArtifacts from "@/content/docs/advanced/local-artifacts.mdx";
import CiReleaseGates from "@/content/docs/advanced/ci-release-gates.mdx";
import CliReference from "@/content/docs/reference/cli-reference.mdx";
import ArtifactsContracts from "@/content/docs/reference/artifacts-contracts.mdx";
import Troubleshooting from "@/content/docs/troubleshooting/troubleshooting.mdx";

import type { DocAlias, DocPage } from "./schema";
import { DOC_GROUPS } from "./schema";

export const docsPages: DocPage[] = [
  {
    slug: "overview",
    title: "Determina Docs",
    navTitle: "Overview",
    description:
      "Implementation docs for hosted Behavior Trials, local smoke tests, integrations, system types, Results Packets, and behavior review.",
    group: "Start",
    order: 10,
    kind: "overview",
    Content: Overview,
    headings: [
      { id: "start-with-the-right-lane", title: "Start with the right lane" },
      { id: "core-model", title: "Core model" },
      { id: "where-to-go-next", title: "Where to go next" }
    ]
  },
  {
    slug: "quickstart",
    title: "Hosted Quickstart",
    navTitle: "Hosted quickstart",
    description:
      "Configure the API, create a Project, register a System Version, run a Behavior Trial, and download artifacts.",
    group: "Start",
    order: 20,
    kind: "quickstart",
    Content: Quickstart,
    headings: [
      { id: "before-you-start", title: "Before you start" },
      { id: "configure-the-cli", title: "Configure the CLI" },
      { id: "create-a-project", title: "Create a Project" },
      { id: "register-a-system", title: "Register a System" },
      { id: "create-a-system-version", title: "Create a System Version" },
      { id: "run-a-behavior-trial", title: "Run a Behavior Trial" },
      { id: "download-results-packet-artifacts", title: "Download artifacts" }
    ]
  },
  {
    slug: "local-smoke-test",
    title: "Local Package Smoke Test",
    navTitle: "Local smoke test",
    description:
      "Verify the installed package, local config shape, source specs, and existing artifacts without treating local checks as production.",
    group: "Start",
    order: 30,
    kind: "quickstart",
    badge: "local",
    Content: LocalSmokeTest,
    headings: [
      { id: "what-this-lane-is-for", title: "What this lane is for" },
      { id: "install", title: "Install" },
      { id: "check-a-local-integration-shape", title: "Check a local integration shape" },
      { id: "inspect-local-output", title: "Inspect output" }
    ]
  },
  {
    slug: "projects",
    title: "Projects",
    navTitle: "Projects",
    description: "Use Projects as the hosted container for Systems, runs, artifacts, baselines, and behavior review.",
    group: "Core Workflow",
    order: 10,
    Content: Projects,
    headings: [
      { id: "what-a-project-owns", title: "What a Project owns" },
      { id: "create-and-list-projects", title: "Create and list" },
      { id: "naming-and-boundaries", title: "Naming and boundaries" }
    ]
  },
  {
    slug: "systems-and-versions",
    title: "Systems And Versions",
    navTitle: "Systems and Versions",
    description: "Register the AI System under review and create explicit System Versions for candidates.",
    group: "Core Workflow",
    order: 20,
    Content: Systems,
    headings: [
      { id: "system-vs-system-version", title: "System vs version" },
      { id: "create-a-system", title: "Create a System" },
      { id: "create-a-version", title: "Create a Version" },
      { id: "configuration-shape", title: "Configuration shape" }
    ]
  },
  {
    slug: "behavior-trials",
    title: "Behavior Trials",
    navTitle: "Behavior Trials",
    description: "Run repeatable behavior checks against a System Version and preserve traces, findings, and artifacts.",
    group: "Core Workflow",
    order: 30,
    Content: BehaviorTrials,
    headings: [
      { id: "what-a-behavior-trial-does", title: "What it does" },
      { id: "run-hosted", title: "Run hosted" },
      { id: "scenarios-and-seeds", title: "Scenarios and seeds" }
    ]
  },
  {
    slug: "compare-launch-decisions",
    title: "Compare And Launch Decisions",
    navTitle: "Compare and Launch",
    description: "Compare a candidate System Version against a baseline and interpret the Launch Decision.",
    group: "Core Workflow",
    order: 40,
    Content: CompareLaunchDecisions,
    headings: [
      { id: "compare-baseline-and-candidate", title: "Compare baseline and candidate" },
      { id: "interpret-the-decision", title: "Interpret the decision" },
      { id: "what-compare-does-not-do", title: "What compare does not do" }
    ]
  },
  {
    slug: "results-packets",
    title: "Results Packets",
    navTitle: "Results Packets",
    description: "Understand the durable artifacts that explain Traces, Findings, manifests, generated coverage, and compare output.",
    group: "Core Workflow",
    order: 50,
    Content: ResultsPackets,
    headings: [
      { id: "what-a-results-packet-is", title: "What it is" },
      { id: "common-artifacts", title: "Common artifacts" },
      { id: "compare-artifacts", title: "Compare artifacts" },
      { id: "agent-artifacts", title: "Agent artifacts" }
    ]
  },
  {
    slug: "native-http",
    title: "Native HTTP Integration",
    navTitle: "Native HTTP",
    description: "Expose a recommender, search, or default agent HTTP-session System through a Determina-owned contract.",
    group: "Integrations",
    order: 10,
    Content: NativeHttp,
    headings: [
      { id: "when-to-use-native-http", title: "When to use it" },
      { id: "local-contract-checks", title: "Local checks" },
      { id: "source-contracts", title: "Source contracts" }
    ]
  },
  {
    slug: "schema-mapped-http",
    title: "Schema-Mapped HTTP",
    navTitle: "Schema-mapped HTTP",
    description: "Use a driver config when your HTTP service does not already match the native Determina contract.",
    group: "Integrations",
    order: 20,
    Content: SchemaMappedHttp,
    headings: [
      { id: "when-to-use-schema-mapped-http", title: "When to use it" },
      { id: "generate-a-starter-config", title: "Starter config" },
      { id: "lane-boundaries", title: "Lane boundaries" }
    ]
  },
  {
    slug: "python-callable",
    title: "Python Callable Integration",
    navTitle: "Python callable",
    description: "Run local smoke and development workflows against Python functions, classes, model wrappers, or agent objects.",
    group: "Integrations",
    order: 30,
    badge: "local",
    Content: PythonCallable,
    headings: [
      { id: "where-python-callables-fit", title: "Where it fits" },
      { id: "local-driver-configs", title: "Driver configs" },
      { id: "examples", title: "Examples" }
    ]
  },
  {
    slug: "agent-http-session",
    title: "Agent HTTP Session Integration",
    navTitle: "Agent HTTP session",
    description: "Expose a deployed-style agent through a session lifecycle that Determina can audit and compare.",
    group: "Integrations",
    order: 40,
    Content: AgentHttpSession,
    headings: [
      { id: "session-lifecycle", title: "Session lifecycle" },
      { id: "default-url-shortcut", title: "URL shortcut" },
      { id: "custom-driver-configs", title: "Custom configs" }
    ]
  },
  {
    slug: "provider-drivers",
    title: "Provider Drivers",
    navTitle: "Provider drivers",
    description: "Use OpenAI-compatible or Anthropic-compatible drivers for local agent audits where model APIs are the integration boundary.",
    group: "Integrations",
    order: 50,
    badge: "local",
    Content: ProviderDrivers,
    headings: [
      { id: "what-provider-drivers-cover", title: "What they cover" },
      { id: "safe-configuration", title: "Safe configuration" },
      { id: "boundaries", title: "Boundaries" }
    ]
  },
  {
    slug: "mcp-langgraph",
    title: "MCP And LangGraph-Style Integrations",
    navTitle: "MCP and LangGraph",
    description: "Connect local MCP stdio servers and LangGraph-style Python objects through explicit driver configs.",
    group: "Integrations",
    order: 60,
    badge: "local",
    Content: MpcLangGraph,
    headings: [
      { id: "mcp-stdio", title: "MCP stdio" },
      { id: "langgraph-style-objects", title: "LangGraph-style objects" },
      { id: "what-is-not-claimed", title: "What is not claimed" }
    ]
  },
  {
    slug: "recommenders",
    title: "Recommender System Type",
    navTitle: "Recommenders",
    description: "Test recommendation slates for repetition, novelty drift, cold start, trust collapse, and abandonment.",
    group: "System Types",
    order: 10,
    Content: Recommenders,
    headings: [
      { id: "risks-determina-tests", title: "Risks tested" },
      { id: "supported-workflows", title: "Supported workflows" },
      { id: "results-language", title: "Results language" }
    ]
  },
  {
    slug: "search",
    title: "Search System Type",
    navTitle: "Search",
    description: "Test rankers for relevance loss, freshness gaps, ambiguous intent, typo recovery, and zero-result behavior.",
    group: "System Types",
    order: 20,
    Content: SearchSystems,
    headings: [
      { id: "risks-determina-tests", title: "Risks tested" },
      { id: "supported-workflows", title: "Supported workflows" },
      { id: "generated-test-case-boundary", title: "Generated test case boundary" }
    ]
  },
  {
    slug: "agents",
    title: "Agent System Type",
    navTitle: "Agents",
    description: "Review agent trajectories for tool misuse, grounding gaps, refusal failure, state loss, unsafe effects, and external calls.",
    group: "System Types",
    order: 30,
    Content: Agents,
    headings: [
      { id: "risks-determina-tests", title: "Risks tested" },
      { id: "supported-drivers", title: "Supported drivers" },
      { id: "local-and-hosted-boundaries", title: "Boundaries" }
    ]
  },
  {
    slug: "generated-test-cases",
    title: "Generated Test Cases",
    navTitle: "Generated Test Cases",
    description: "Understand generated coverage maturity, platform/core ownership, and system-type boundaries.",
    group: "Advanced",
    order: 10,
    badge: "advanced",
    Content: GeneratedTestCases,
    headings: [
      { id: "current-support", title: "Current support" },
      { id: "recommender-and-search-packs", title: "Recommender and search" },
      { id: "agent-packs", title: "Agent packs" }
    ]
  },
  {
    slug: "source-specs-plan-first",
    title: "Source Specs And Plan-First Runs",
    navTitle: "Source specs and plans",
    description: "Validate source specs, compile run plans, and execute saved plans when review or deterministic handoff matters.",
    group: "Advanced",
    order: 20,
    badge: "advanced",
    Content: SourceSpecsPlanFirst,
    headings: [
      { id: "when-to-use-this", title: "When to use this" },
      { id: "validate-and-plan", title: "Validate and plan" },
      { id: "execute-a-saved-plan", title: "Execute saved plan" }
    ]
  },
  {
    slug: "local-artifacts",
    title: "Local Artifacts And Corpus",
    navTitle: "Local artifacts",
    description: "Inspect local Results Packets, run indexes, corpus indexes, review summaries, and static workbenches.",
    group: "Advanced",
    order: 30,
    badge: "local",
    Content: LocalArtifacts,
    headings: [
      { id: "what-this-lane-is-for", title: "What this lane is for" },
      { id: "inspect-artifacts", title: "Inspect artifacts" },
      { id: "corpus-review", title: "Corpus review" }
    ]
  },
  {
    slug: "ci-release-gates",
    title: "CI Release Gates",
    navTitle: "CI release gates",
    description: "Attach Determina compare output to CI without implying automatic release approval.",
    group: "Advanced",
    order: 40,
    badge: "advanced",
    Content: CiReleaseGates,
    headings: [
      { id: "what-ci-should-do", title: "What CI should do" },
      { id: "github-actions-example", title: "GitHub Actions" },
      { id: "review-the-output", title: "Review output" }
    ]
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    navTitle: "CLI reference",
    description: "Commands grouped by hosted production path, local setup and smoke tests, artifact utilities, and advanced workflows.",
    group: "Reference",
    order: 10,
    kind: "reference",
    Content: CliReference,
    headings: [
      { id: "hosted-production-commands", title: "Hosted commands" },
      { id: "local-no-key-setup-commands", title: "Local no-key setup" },
      { id: "gated-platform-core-command-surfaces", title: "Gated command surfaces" },
      { id: "advanced-commands", title: "Advanced commands" }
    ]
  },
  {
    slug: "artifacts-contracts",
    title: "Artifacts And Contracts",
    navTitle: "Artifacts and contracts",
    description: "Reference the files Determina writes and the source contracts/examples that define exact integration shapes.",
    group: "Reference",
    order: 20,
    kind: "reference",
    Content: ArtifactsContracts,
    headings: [
      { id: "results-packet-files", title: "Results Packet files" },
      { id: "contract-source-links", title: "Contract source links" },
      { id: "example-source-links", title: "Example source links" }
    ]
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    navTitle: "Troubleshooting",
    description: "Debug API credentials, platform IDs, driver configs, endpoint reachability, outputs, generated packs, and capability mismatches.",
    group: "Troubleshooting",
    order: 10,
    Content: Troubleshooting,
    headings: [
      { id: "api-and-platform-id-errors", title: "API and IDs" },
      { id: "system-or-driver-errors", title: "System or driver" },
      { id: "missing-output", title: "Missing output" },
      { id: "capability-mismatch", title: "Capability mismatch" }
    ]
  }
];

export const docAliases: DocAlias[] = [
  { from: "swarm-model", to: "projects" },
  { from: "system-contract", to: "native-http" },
  { from: "system-type-products", to: "recommenders" },
  { from: "recommender-system-type", to: "recommenders" },
  { from: "search-system-type", to: "search" },
  { from: "agent-system-type", to: "agents" },
  { from: "integration-paths", to: "native-http" },
  { from: "workflows", to: "behavior-trials" },
  { from: "outputs", to: "results-packets" },
  { from: "generation", to: "generated-test-cases" },
  { from: "plan-first", to: "source-specs-plan-first" },
  { from: "system-type-model", to: "recommenders" },
  { from: "platform-roadmap", to: "quickstart" },
  { from: "domain-products", to: "recommenders" },
  { from: "recommender-domain", to: "recommenders" },
  { from: "search-domain", to: "search" },
  { from: "agent-domain", to: "agents" }
];

export const docPageIcons = {
  overview: BookOpen,
  quickstart: Cloud,
  "local-smoke-test": Terminal,
  projects: Boxes,
  "systems-and-versions": Server,
  "behavior-trials": Workflow,
  "compare-launch-decisions": Route,
  "results-packets": FileJson2,
  "native-http": Plug,
  "schema-mapped-http": Plug,
  "python-callable": Code2,
  "agent-http-session": Bot,
  "provider-drivers": Bot,
  "mcp-langgraph": GitBranch,
  recommenders: Boxes,
  search: Search,
  agents: Bot,
  "generated-test-cases": Sparkles,
  "source-specs-plan-first": Route,
  "local-artifacts": FileJson2,
  "ci-release-gates": GitBranch,
  "cli-reference": ListChecks,
  "artifacts-contracts": FileJson2,
  troubleshooting: Bug
} as const;

export function validateDocsRegistry() {
  const slugs = new Set<string>();
  const errors: string[] = [];

  for (const page of docsPages) {
    if (!page.slug || !page.title || !page.navTitle || !page.description || !page.group) {
      errors.push(`Missing required metadata for docs page ${page.slug || page.title || "<unknown>"}`);
    }
    if (!DOC_GROUPS.includes(page.group)) {
      errors.push(`Invalid docs group "${page.group}" for ${page.slug}`);
    }
    if (slugs.has(page.slug)) {
      errors.push(`Duplicate docs slug "${page.slug}"`);
    }
    slugs.add(page.slug);
  }

  for (const alias of docAliases) {
    if (alias.from === alias.to) {
      errors.push(`Docs alias "${alias.from}" points to itself`);
    }
    if (!slugs.has(alias.to)) {
      errors.push(`Docs alias "${alias.from}" points to missing slug "${alias.to}"`);
    }
    if (slugs.has(alias.from)) {
      errors.push(`Docs alias "${alias.from}" conflicts with a public docs page`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Docs registry validation failed:\n${errors.join("\n")}`);
  }
}

validateDocsRegistry();
