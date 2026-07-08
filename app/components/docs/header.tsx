import Link from "next/link";
import { GitBranch } from "lucide-react";
import { DocsSearch } from "./search";
import { siteLinks } from "@/app/lib/site";

type SearchEntry = { slug: string; title: string; group: string; description: string };

export function DocsHeader({ searchEntries }: { searchEntries: SearchEntry[] }) {
  return (
    <header className="docs-header">
      <div className="docs-container docs-header-row">
        <Link href="/" className="docs-header-brand">
          <span>Determina</span>
          <span className="docs-header-brand-suffix">docs</span>
        </Link>

        <span aria-hidden className="docs-header-divider" />

        <a
          href="https://ndetermina.com"
          target="_blank"
          rel="noreferrer"
          className="docs-header-by"
        >
          <span className="docs-header-by-label">by</span>
          <span className="docs-header-by-name">NDETERMINA</span>
        </a>

        <nav className="docs-header-main-nav">
          <Link href="/docs" className="docs-header-nav-link">
            Docs
          </Link>
          <a
            href={siteLinks.releases}
            target="_blank"
            rel="noreferrer"
            className="docs-header-nav-link docs-header-nav-link-secondary"
          >
            Changelog
          </a>
          <a
            href={siteLinks.issues}
            target="_blank"
            rel="noreferrer"
            className="docs-header-nav-link docs-header-nav-link-secondary"
          >
            Support
          </a>
        </nav>

        <div className="docs-header-search-wrap">
          <DocsSearch entries={searchEntries} />
        </div>

        <div className="docs-header-actions">
          <a
            href={siteLinks.githubProduct}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            className="docs-header-github"
          >
            <GitBranch size={15} aria-hidden />
          </a>
          <a href={siteLinks.waitlist} className="docs-header-cta">
            <span className="docs-header-cta-full">Request Pilot</span>
            <span className="docs-header-cta-short">Pilot</span>
          </a>
        </div>
      </div>
    </header>
  );
}
