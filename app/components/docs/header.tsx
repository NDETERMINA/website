import Link from "next/link";
import { GitBranch } from "lucide-react";
import { DocsSearch } from "./search";
import { siteLinks } from "@/app/lib/site";
import { LabMark } from "@/app/components/lab/site-shell";

type SearchEntry = { slug: string; title: string; group: string; description: string };

export function DocsHeader({ searchEntries }: { searchEntries: SearchEntry[] }) {
  return <header className="docs-header">
    <a className="lab-skip" href="#main-content">Skip to content</a>
    <div className="docs-container docs-header-row">
      <Link href="/" className="docs-header-brand" aria-label="Determina home"><span className="docs-header-mark"><LabMark /></span><span>Determina</span></Link>
      <nav className="docs-header-main-nav" aria-label="Main navigation"><Link href="/#product-systems" className="docs-header-nav-link">Product</Link><Link href="/company" className="docs-header-nav-link">Company</Link><Link href="/docs" aria-current="page" className="docs-header-nav-link">Docs</Link></nav>
      <div className="docs-header-search-wrap"><DocsSearch entries={searchEntries} /></div>
      <div className="docs-header-actions"><a href={siteLinks.githubSource} aria-label="Public website source on GitHub" className="docs-header-github"><GitBranch size={17} aria-hidden /></a><a href={siteLinks.waitlist} className="docs-header-cta">Get in touch</a></div>
    </div>
  </header>;
}
