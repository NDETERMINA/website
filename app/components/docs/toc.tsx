"use client";

import { useEffect, useState } from "react";
import { DocsCopyButton } from "./copy-button";

export type DocsTocItem = { id: string; title: string; depth?: 2 | 3 };

export function DocsTOC({
  items,
  pageUrl
}: {
  items: DocsTocItem[];
  pageUrl?: string;
}) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return <nav className="docs-toc" aria-label="On this page" />;

  return (
    <nav className="docs-toc" aria-label="On this page">
      <div className="docs-toc-title">On this page</div>
      <div>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`docs-toc-link ${item.depth === 3 ? "docs-toc-sub" : ""} ${
              active === item.id ? "is-active" : ""
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
      {pageUrl ? (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--docs-border-soft)" }}>
          <DocsCopyButton value={pageUrl} label="Copy link" />
        </div>
      ) : null}
    </nav>
  );
}
