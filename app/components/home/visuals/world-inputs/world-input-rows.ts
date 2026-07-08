export const worldInputRows = [
  { number: "01", label: "Population", detail: ["Who actually", "shows up"], y: 72 },
  { number: "02", label: "Cohort", detail: ["Slices that", "break differently"], y: 124 },
  { number: "03", label: "Profile state", detail: ["History, prefs,", "live signals"], y: 176 },
  { number: "04", label: "Source state", detail: ["Index freshness", "and gaps"], y: 228 },
  { number: "05", label: "Candidate pool", detail: ["What's eligible", "to surface"], y: 280 },
  { number: "06", label: "Tool boundary", detail: ["Connectors and", "rate limits"], y: 332 },
  { number: "07", label: "Policy", detail: ["Guardrails and", "eligibility"], y: 384 },
  { number: "08", label: "Resource twin", detail: ["Load, latency,", "contention"], y: 436 },
  { number: "09", label: "Release version", detail: ["Model, prompts,", "config"], y: 488 }
] as const;
