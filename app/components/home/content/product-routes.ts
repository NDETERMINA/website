export const productRoutes = [
  {
    type: "rank",
    number: "01",
    label: "Recommenders",
    href: "/recomm",
    detail: "rank behavior",
    question: "Did the release change what a cohort sees?",
    incident: "regulated candidate moved #7 to #1",
    returns: "cohort lens + rank curve + policy verifier"
  },
  {
    type: "retrieve",
    number: "02",
    label: "Search",
    href: "/search",
    detail: "retrieve behavior",
    question: "Did retrieval cite the current source?",
    incident: "answer cited an archived policy",
    returns: "source diff + citation path + support verifier"
  },
  {
    type: "act",
    number: "03",
    label: "Agents",
    href: "/agents",
    detail: "act behavior",
    question: "Did an agent attempt a risky side effect?",
    incident: "refund call contained before mutation",
    returns: "tool trace + resource diff + unchanged proof"
  }
] as const;
