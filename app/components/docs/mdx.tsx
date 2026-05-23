import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { DocsCallout } from "./callout";
import { DocsCard, DocsCardGrid } from "./card";
import { DocsCodeBlock } from "./code-block";
import { DocsCommandBlock } from "./command-block";
import { DocsCTA } from "./cta";

function textFromChildren(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return textFromChildren(child.props.children);
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

function slug(value: ReactNode) {
  return textFromChildren(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function H2({ children, id, ...props }: ComponentProps<"h2">) {
  return (
    <h2 id={id ?? slug(children)} {...props}>
      {children}
    </h2>
  );
}

function H3({ children, id, ...props }: ComponentProps<"h3">) {
  return (
    <h3 id={id ?? slug(children)} {...props}>
      {children}
    </h3>
  );
}

export function DocsTable(props: ComponentProps<"table">) {
  return (
    <div className="docs-table-wrap">
      <table className="docs-table" {...props} />
    </div>
  );
}

export function DataTable({
  headings,
  rows
}: {
  headings: string[];
  rows: string[][];
}) {
  return (
    <DocsTable>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("|")}>
            {row.map((cell, index) => (
              <td key={`${index}-${cell}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </DocsTable>
  );
}

export function Lane({
  title,
  children,
  variant = "info"
}: {
  title: string;
  children: ReactNode;
  variant?: "note" | "tip" | "warning" | "danger" | "info";
}) {
  return (
    <DocsCallout variant={variant} title={title}>
      {children}
    </DocsCallout>
  );
}

export function Step({
  number,
  title,
  children
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="docs-step">
      <span className="docs-step-num">{number}</span>
      <h2 id={slug(title)}>{title}</h2>
      {children}
    </div>
  );
}

export function Verify({ children }: { children: ReactNode }) {
  return (
    <div className="docs-verify">
      <span className="docs-verify-label">Verify</span>
      {children}
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: H2,
  h3: H3,
  a: ({ href = "", children, ...props }: ComponentProps<"a">) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  },
  table: DocsTable,
  Callout: DocsCallout,
  Card: DocsCard,
  CardGrid: DocsCardGrid,
  CodeBlock: DocsCodeBlock,
  CommandTabs: DocsCommandBlock,
  CTA: DocsCTA,
  DataTable,
  Lane,
  Step,
  Verify
};
