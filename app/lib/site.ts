export const siteLinks = {
  waitlist:
    process.env.NEXT_PUBLIC_WAITLIST_URL ||
    "mailto:alankrit386@gmail.com?subject=Determina%20system%20type%20pilot",
  githubProduct:
    "https://github.com/NDETERMINA/determina/tree/main/packages/python/public/determina",
  githubSource: "https://github.com/NDETERMINA/determina",
  pyPI: "https://pypi.org/project/determina/",
  releases: "https://github.com/NDETERMINA/determina/releases",
  issues: "https://github.com/NDETERMINA/determina/issues",
  externalContract:
    "https://github.com/NDETERMINA/determina/blob/main/packages/python/public/determina/EXTERNAL_SYSTEM_CONTRACT.md",
  searchContract:
    "https://github.com/NDETERMINA/determina/blob/main/packages/python/public/determina/EXTERNAL_SYSTEM_CONTRACT_SEARCH.md",
  agentContract:
    "https://github.com/NDETERMINA/determina/blob/main/packages/python/public/determina/EXTERNAL_SYSTEM_CONTRACT_AGENTS.md",
  demoGuide:
    "https://github.com/NDETERMINA/determina/blob/main/packages/python/public/determina/DEMO.md",
  exampleService:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/recommender_http_service",
  hfExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/hf_recommender_service",
  recommenderSchemaMappedJsonpath:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/recommender_schema_mapped_jsonpath",
  recommenderSchemaMappedTransform:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/recommender_schema_mapped_transform",
  recommenderPythonExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/recommender_in_process_python_api",
  agentPythonExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/agent_in_process_python_api",
  agentHttpSessionExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/agent_http_session",
  agentMcpExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/agent_mcp_stdio",
  agentLangGraphExample:
    "https://github.com/NDETERMINA/determina/tree/main/examples/determina/agent_langgraph_in_process",
  proofStudy:
    "https://github.com/NDETERMINA/determina/tree/main/studies/01-recommender-offline-eval"
};

export const workflowSteps = [
  {
    command:
      "determina projects create --name \"Release checks\"",
    label: "Create a project",
    body: "Create the hosted workspace that owns systems, runs, artifacts, and release results."
  },
  {
    command:
      "determina systems create --project-id prj_123 --name \"Search API\" --system-type search --kind http --config-json '{\"base_url\":\"https://candidate.example.com\"}'",
    label: "Register a system",
    body: "Register the system under test and create a platform system version."
  },
  {
    command:
      "determina audit --project-id prj_123 --system-version-id tv_123",
    label: "Run hosted results",
    body: "Queue a hosted audit and let the platform/private core produce artifacts and status."
  },
  {
    command:
      "determina compare --project-id prj_123 --baseline-id base_123 --candidate-system-version-id tv_456",
    label: "Gate a release",
    body: "Run a hosted compare against an approved baseline before launch."
  }
];

export const docsLinks = [
  {
    title: "Product guide",
    description: "Install, quickstart, workflows, output files, and current packaged-user path.",
    href: siteLinks.githubProduct,
    eyebrow: "Start here"
  },
  {
    title: "PyPI package",
    description: "Current public package page for `python -m pip install determina`.",
    href: siteLinks.pyPI,
    eyebrow: "Install"
  },
  {
    title: "Recommender contract",
    description: "Native recommender HTTP shape: health, metadata, recommendations.",
    href: siteLinks.externalContract,
    eyebrow: "Integrate"
  },
  {
    title: "Search contract",
    description: "Native search HTTP shape: health, metadata, search requests, ranked results.",
    href: siteLinks.searchContract,
    eyebrow: "Integrate"
  },
  {
    title: "Agent contract",
    description: "Agent integration paths: Python, LangGraph-style objects, model APIs, MCP, and HTTP sessions.",
    href: siteLinks.agentContract,
    eyebrow: "Integrate"
  },
  {
    title: "Demo guide",
    description: "A stable local walkthrough for showing audits and compare reports end to end.",
    href: siteLinks.demoGuide,
    eyebrow: "Demo"
  },
  {
    title: "Recommender HTTP example",
    description: "A small external-style HTTP recommender service you can run locally against Determina.",
    href: siteLinks.exampleService,
    eyebrow: "Example"
  },
  {
    title: "Agent HTTP session example",
    description: "A deployed-style agent service with session lifecycle endpoints.",
    href: siteLinks.agentHttpSessionExample,
    eyebrow: "Example"
  },
  {
    title: "Agent MCP stdio example",
    description: "A local MCP server that exposes a Determina-compatible agent task tool.",
    href: siteLinks.agentMcpExample,
    eyebrow: "Example"
  },
  {
    title: "Hugging Face example",
    description: "A model-backed wrapper showing how to expose recommender logic through the contract.",
    href: siteLinks.hfExample,
    eyebrow: "Example"
  },
  {
    title: "Releases",
    description: "Package releases and changelog trail from the source repository.",
    href: siteLinks.releases,
    eyebrow: "Ship"
  },
  {
    title: "Issues",
    description: "File bugs, ask for examples, or track upcoming work.",
    href: siteLinks.issues,
    eyebrow: "Support"
  }
];
