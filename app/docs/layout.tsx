import type { ReactNode } from "react";

import { DocsShell } from "@/app/components/docs/shell";
import { getSearchEntries, getSidebarGroups } from "@/app/lib/docs";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsShell groups={getSidebarGroups()} searchEntries={getSearchEntries()}>
      {children}
    </DocsShell>
  );
}
