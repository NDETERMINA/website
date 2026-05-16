"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export type DocsSidebarItem = {
  slug: string;
  navTitle: string;
  badge?: "new" | "beta" | "soon";
};

export type DocsSidebarGroupData = {
  group: string;
  pages: DocsSidebarItem[];
};

export function DocsSidebarGroup({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="docs-sidebar-group">
      <span className="docs-sidebar-group-title">{title}</span>
      <div>{children}</div>
    </div>
  );
}

export function DocsSidebar({ groups }: { groups: DocsSidebarGroupData[] }) {
  const pathname = usePathname();
  const currentSlug = pathname?.replace(/^\/docs\/?/, "") || "overview";

  return (
    <aside className="docs-sidebar" aria-label="Docs navigation">
      {groups.map((group) => (
        <DocsSidebarGroup key={group.group} title={group.group}>
          {group.pages.map((item) => {
            const href = item.slug === "overview" ? "/docs" : `/docs/${item.slug}`;
            const isActive =
              currentSlug === item.slug ||
              (item.slug === "overview" && (pathname === "/docs" || pathname === "/docs/"));
            return (
              <Link
                key={item.slug}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="docs-sidebar-link"
              >
                <span>{item.navTitle}</span>
                {item.badge ? (
                  <span className="docs-sidebar-badge">{item.badge}</span>
                ) : null}
              </Link>
            );
          })}
        </DocsSidebarGroup>
      ))}
    </aside>
  );
}
