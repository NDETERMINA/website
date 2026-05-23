import type { ComponentType, ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

export const DOC_GROUPS = [
  "Start",
  "Core Workflow",
  "Integrations",
  "System Types",
  "Advanced",
  "Reference",
  "Troubleshooting"
] as const;

export type DocGroup = (typeof DOC_GROUPS)[number];
export type DocKind = "overview" | "guide" | "quickstart" | "reference";
export type DocBadge = "new" | "beta" | "local" | "advanced";

export type DocHeading = {
  id: string;
  title: string;
};

export type DocMeta = {
  slug: string;
  title: string;
  navTitle: string;
  description: string;
  group: DocGroup;
  order: number;
  kind?: DocKind;
  badge?: DocBadge;
  headings?: DocHeading[];
  meta?: string[];
};

export type DocContentComponent = ComponentType<{
  components?: MDXComponents;
}>;

export type DocPage = DocMeta & {
  Content: DocContentComponent;
};

export type DocAlias = {
  from: string;
  to: string;
  permanent?: boolean;
};

export type DocsSidebarItem = {
  slug: string;
  navTitle: string;
  badge?: DocBadge;
};

export type DocsSidebarGroupData = {
  group: string;
  pages: DocsSidebarItem[];
};

export type DocsSearchEntry = {
  slug: string;
  title: string;
  group: string;
  description: string;
};

export type MdxComponentMap = Record<string, ComponentType<unknown> | ((props: never) => ReactNode)>;
