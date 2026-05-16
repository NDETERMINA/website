"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, X } from "lucide-react";

type Entry = {
  slug: string;
  title: string;
  group: string;
  description: string;
};

export function DocsSearch({ entries }: { entries: Entry[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const closeSearch = () => {
      setOpen(false);
      setQ("");
    };

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          closeSearch();
        } else {
          setOpen(true);
        }
      } else if (e.key === "Escape") {
        closeSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const closeSearch = () => {
    setOpen(false);
    setQ("");
  };

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return entries.slice(0, 8);
    return entries
      .filter(
        (e) =>
          e.title.toLowerCase().includes(needle) ||
          e.description.toLowerCase().includes(needle) ||
          e.group.toLowerCase().includes(needle)
      )
      .slice(0, 12);
  }, [q, entries]);

  const grouped = useMemo(() => {
    const map = new Map<string, Entry[]>();
    for (const r of results) {
      if (!map.has(r.group)) map.set(r.group, []);
      map.get(r.group)!.push(r);
    }
    return Array.from(map.entries());
  }, [results]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="docs-search-trigger"
        aria-label="Search docs"
      >
        <SearchIcon size={14} aria-hidden />
        <span style={{ flex: 1, textAlign: "left" }}>Search commands, concepts, errors…</span>
        <span className="docs-kbd">⌘K</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSearch();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(8,9,12,0.6)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "12vh"
          }}
        >
          <div
            style={{
              width: "min(640px, calc(100% - 32px))",
              maxHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              background: "var(--docs-surface)",
              border: "1px solid var(--docs-border)",
              borderRadius: 10,
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                borderBottom: "1px solid var(--docs-border)"
              }}
            >
              <SearchIcon size={15} aria-hidden style={{ color: "var(--docs-text-muted)" }} />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by page, concept, or command…"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: 0,
                  outline: "none",
                  color: "var(--docs-text)",
                  fontSize: 14
                }}
              />
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close"
                style={{
                  background: "transparent",
                  border: 0,
                  color: "var(--docs-text-muted)",
                  cursor: "pointer"
                }}
              >
                <X size={15} aria-hidden />
              </button>
            </div>

            <div style={{ overflowY: "auto", padding: "8px 0" }}>
              {grouped.length === 0 ? (
                <p
                  style={{
                    padding: "20px 16px",
                    color: "var(--docs-text-muted)",
                    fontSize: 13
                  }}
                >
                  No results. Try a different term, or browse the sidebar.
                </p>
              ) : (
                grouped.map(([group, items]) => (
                  <div key={group} style={{ padding: "6px 0" }}>
                    <div
                      style={{
                        padding: "6px 16px",
                        fontSize: 10.5,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--docs-text-dim)",
                        fontWeight: 600
                      }}
                    >
                      {group}
                    </div>
                    {items.map((r) => (
                      <Link
                        key={r.slug}
                        href={r.slug === "overview" ? "/docs" : `/docs/${r.slug}`}
                        onClick={closeSearch}
                        style={{
                          display: "block",
                          padding: "8px 16px",
                          color: "var(--docs-text)",
                          fontSize: 13.5
                        }}
                        className="docs-search-result"
                      >
                        <div style={{ fontWeight: 500 }}>{r.title}</div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--docs-text-muted)",
                            marginTop: 2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {r.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
