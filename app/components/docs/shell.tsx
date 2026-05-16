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
    <div data-docs-theme="dark" style={{ minHeight: "100vh" }}>
      <DocsHeader searchEntries={searchEntries} />
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
