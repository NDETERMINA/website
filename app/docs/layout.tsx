import type { ReactNode } from "react";

import { DocsShell } from "@/app/components/docs/shell";
import { docSidebarIA, getSearchEntries, docsPages } from "@/app/lib/docs";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const groups = docSidebarIA.map((g) => ({
    group: g.group,
    pages: g.pages
      .filter((p) => docsPages.some((d) => d.slug === p.slug))
      .map((p) => ({ slug: p.slug, navTitle: p.navTitle, badge: p.badge }))
  }));

  return (
    <DocsShell groups={groups} searchEntries={getSearchEntries()}>
      {children}
    </DocsShell>
  );
}
