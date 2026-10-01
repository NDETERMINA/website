import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteLinks } from "@/app/lib/site";

export function LabMark() {
  return <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
    <path d="M5 5h8l10 10 8 3-8 3-10 10H5" stroke="currentColor" strokeWidth="3.5" />
    <path d="M5 12h7l7 6-7 6H5M5 18h26" stroke="currentColor" strokeWidth="3" />
  </svg>;
}

export function LabHeader({ active }: { active?: "product" | "company" }) {
  return <header className="lab-header">
    <a className="lab-skip" href="#main-content">Skip to content</a>
    <Link href="/" className="lab-brand" aria-label="Determina home"><LabMark /><span>Determina</span></Link>
    <nav aria-label="Main navigation" className="lab-nav">
      <Link href="/#product-systems" aria-current={active === "product" ? "page" : undefined}>Product</Link>
      <Link href="/company" aria-current={active === "company" ? "page" : undefined}>Company</Link>
      <Link href="/docs">Docs</Link>
    </nav>
  </header>;
}

export function LabArrow() {
  return <ArrowRight size={22} strokeWidth={1.5} aria-hidden="true" />;
}

export function LabFooter() {
  return <footer className="lab-footer">
    <Link href="/" className="lab-footer-name">Determina</Link>
    <nav aria-label="Footer navigation">
      <Link href="/company">Company</Link><Link href="/docs">Docs</Link>
      <a href={siteLinks.githubSource}>Website source</a><a href={siteLinks.waitlist}>Get in touch</a>
    </nav>
  </footer>;
}
