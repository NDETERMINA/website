import Link from "next/link";
import { GitBranch } from "lucide-react";

import { siteLinks } from "@/app/lib/site";

export function DocsFooter() {
  return (
    <footer className="docs-footer">
      <div className="docs-container docs-footer-grid">
        <div className="docs-footer-brand">
          <div className="docs-footer-wordmark">
            <span>Determina</span>
            <span className="docs-footer-by">
              <span aria-hidden>·</span>
              by <span className="docs-footer-parent">NDETERMINA</span>
            </span>
          </div>
          <p className="docs-footer-tagline">
            Repeatable Behavior Trials, durable Results Packets, and behavior evidence your
            team can audit before launches, rollouts, and regressions.
          </p>
        </div>

        <FooterColumn
          title="Docs"
          links={[
            { label: "Overview", href: "/docs" },
            { label: "Hosted quickstart", href: "/docs/quickstart" },
            { label: "Results Packets", href: "/docs/results-packets" },
            { label: "CLI reference", href: "/docs/cli-reference" }
          ]}
        />

        <FooterColumn
          title="Project"
          links={[
            { label: "GitHub", href: siteLinks.githubProduct, external: true },
            { label: "PyPI", href: siteLinks.pyPI, external: true },
            { label: "Changelog", href: siteLinks.releases, external: true },
            { label: "Issues", href: siteLinks.issues, external: true }
          ]}
        />

        <FooterColumn
          title="Pilot"
          links={[
            { label: "Request access", href: siteLinks.waitlist, external: true },
            { label: "Contact", href: "mailto:founders@ndetermina.com", external: true }
          ]}
        />
      </div>

      <div className="docs-container docs-footer-bottom">
        <span className="docs-footer-meta">
          © {new Date().getFullYear()} NDETERMINA · Determina is open-source under MIT
        </span>
        <a
          href={siteLinks.githubProduct}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="docs-footer-icon"
        >
          <GitBranch size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="docs-footer-col">
      <p className="docs-footer-col-title">{title}</p>
      <ul>
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
