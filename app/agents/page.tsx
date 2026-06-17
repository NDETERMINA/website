import type { Metadata } from "next";

import { SystemPage, systemPages } from "@/app/components/system/system-page";

export const metadata: Metadata = {
  title: "Agents And Tool Workflows",
  description:
    "Rehearse agent tool calls, auth scope, policy pressure, and resource effects before tools touch production."
};

export default function AgentsPage() {
  return <SystemPage page={systemPages.agents} />;
}
