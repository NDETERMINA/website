import Link from "next/link";
import { GitBranch } from "lucide-react";
import { DocsSearch } from "./search";
import { siteLinks } from "@/app/lib/site";

type SearchEntry = { slug: string; title: string; group: string; description: string };

export function DocsHeader({ searchEntries }: { searchEntries: SearchEntry[] }) {
  return (
    <header className="docs-header">
      <div
        className="docs-container"
        style={{ display: "flex", alignItems: "center", height: "100%", gap: 16 }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: 8,
            color: "var(--docs-text)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.01em"
          }}
        >
          <span>Determina</span>
          <span style={{ fontSize: 11, color: "var(--docs-text-dim)", fontWeight: 500 }}>docs</span>
        </Link>

        <span
          aria-hidden
          style={{
            width: 1,
            height: 16,
            background: "var(--docs-border)",
            marginInline: 4
          }}
        />

        <a
          href="https://ndetermina.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            color: "var(--docs-text-dim)",
            fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
            letterSpacing: "0.06em"
          }}
        >
          <span style={{ textTransform: "uppercase" }}>by</span>
          <span
            style={{
              color: "var(--docs-text-muted)",
              fontWeight: 600,
              letterSpacing: "0.1em"
            }}
          >
            NDETERMINA
          </span>
        </a>

        <nav style={{ display: "flex", gap: 4, marginLeft: 16 }}>
          <Link href="/docs" className="docs-header-nav-link" style={navLink}>
            Docs
          </Link>
          <a href={siteLinks.releases} target="_blank" rel="noreferrer" style={navLink}>
            Changelog
          </a>
          <a href={siteLinks.issues} target="_blank" rel="noreferrer" style={navLink}>
            Support
          </a>
        </nav>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
          <DocsSearch entries={searchEntries} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href={siteLinks.githubProduct}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: 6,
              color: "var(--docs-text-muted)",
              border: "1px solid var(--docs-border)"
            }}
          >
            <GitBranch size={15} aria-hidden />
          </a>
          <a
            href={siteLinks.waitlist}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 34,
              padding: "0 14px",
              borderRadius: 6,
              background: "var(--docs-accent)",
              color: "#1a1107",
              fontSize: 13,
              fontWeight: 600
            }}
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  );
}

const navLink = {
  display: "inline-flex",
  alignItems: "center",
  height: 34,
  padding: "0 10px",
  borderRadius: 6,
  fontSize: 13,
  color: "var(--docs-text-muted)"
} as const;
