import type { ReactNode } from "react";
import { DocsHeader } from "./header";
import { DocsSidebar, type DocsSidebarGroupData } from "./sidebar";
import { DocsFooter } from "./footer";

type SearchEntry = { slug: string; title: string; group: string; description: string };

export function DocsShell({
  groups,
  searchEntries,
  children
}: {
  groups: DocsSidebarGroupData[];
  searchEntries: SearchEntry[];
  children: ReactNode;
}) {
  return (
    <div className="lab-shell lab-docs" data-docs-theme="signal">
      <DocsHeader searchEntries={searchEntries} />
      <details className="docs-mobile-nav docs-container">
        <summary>Browse documentation</summary>
        <DocsSidebar groups={groups} mobile />
      </details>
      <div className="docs-container">
        <div className="docs-shell">
          <DocsSidebar groups={groups} />
          {children}
        </div>
      </div>
      <DocsFooter />
    </div>
  );
}
