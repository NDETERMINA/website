export const siteLinks = {
  waitlist:
    process.env.NEXT_PUBLIC_WAITLIST_URL ||
    "mailto:alankrit386@gmail.com?subject=Evidpath%20domain%20pilot",
  githubProduct:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath",
  githubSource: "https://github.com/NDETERMINA/limitation",
  pyPI: "https://pypi.org/project/evidpath/",
  releases: "https://github.com/NDETERMINA/limitation/releases",
  issues: "https://github.com/NDETERMINA/limitation/issues",
  externalContract:
    "https://github.com/NDETERMINA/limitation/blob/main/products/evidpath/EXTERNAL_TARGET_CONTRACT.md",
  searchContract:
    "https://github.com/NDETERMINA/limitation/blob/main/products/evidpath/EXTERNAL_TARGET_CONTRACT_SEARCH.md",
  agentContract:
    "https://github.com/NDETERMINA/limitation/blob/main/products/evidpath/EXTERNAL_TARGET_CONTRACT_AGENTS.md",
  demoGuide:
    "https://github.com/NDETERMINA/limitation/blob/main/products/evidpath/DEMO.md",
  exampleService:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/recommender_http_service",
  hfExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/hf_recommender_service",
  recommenderSchemaMappedJsonpath:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/recommender_schema_mapped_jsonpath",
  recommenderSchemaMappedTransform:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/recommender_schema_mapped_transform",
  recommenderPythonExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/recommender_in_process_python_api",
  agentPythonExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/agent_in_process_python_api",
  agentHttpSessionExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/agent_http_session",
  agentMcpExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/agent_mcp_stdio",
  agentLangGraphExample:
    "https://github.com/NDETERMINA/limitation/tree/main/products/evidpath/examples/agent_langgraph_in_process",
  proofStudy:
    "https://github.com/NDETERMINA/limitation/tree/main/studies/01-recommender-offline-eval"
};

export const workflowSteps = [
  {
    command:
      "evidpath check-target --domain recommender --target-url http://127.0.0.1:8051",
    label: "Check the target",
    body: "Validate that a native HTTP target for the selected domain is reachable before a full run."
  },
  {
    command:
      "evidpath audit --domain agents --scenario current-info-tool-use --seed 7",
    label: "Run an audit",
    body: "Run repeatable domain scenarios, judge completed traces, and save an evidence bundle."
  },
  {
    command:
      "evidpath compare --domain search --baseline-url http://127.0.0.1:8051 --candidate-url http://127.0.0.1:8052",
    label: "Compare versions",
    body: "Run baseline and candidate targets through comparable domain coverage before a launch decision."
  },
  {
    command:
      'evidpath run-swarm --domain recommender --target-url http://127.0.0.1:8051 --brief "test trust collapse"',
    label: "Expand coverage",
    body: "Turn a plain-English risk goal into generated recommender swarm coverage where generation is currently strongest."
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
    description: "Current public package page for `python -m pip install evidpath`.",
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
    description: "A small external-style HTTP recommender service you can run locally against Evidpath.",
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
    description: "A local MCP server that exposes an Evidpath-compatible agent task tool.",
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
