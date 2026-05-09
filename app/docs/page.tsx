import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Terminal } from "lucide-react";

import { CodeBlock } from "@/app/components/code-block";
import { DomainFlowVisual } from "@/app/components/domain-flow-visual";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { docHomeCards } from "@/app/lib/docs";
import { siteLinks } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Docs"
};

export default function DocsPage() {
  return (
    <main className="theme-bg">
      <Header />

      <section className="border-b theme-line theme-section">
        <div className="container py-14">
          <p className="text-sm font-semibold uppercase theme-accent-strong">
            Evidpath documentation · Swarm testing
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-normal md:text-6xl">
                Learn the swarm model, choose a domain, and read the evidence.
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-7 theme-muted">
              This is the main reading path for Evidpath. GitHub is still there
              for source, releases, and issues, but the product documentation
              lives here as a structured site. Start with the swarm model, then
              choose the recommender, search, or agent domain product that
              matches the system you ship.
            </p>
          </div>
        </div>
      </section>

      <section className="theme-section-alt py-12">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase theme-accent">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[var(--text)]">
              The shortest useful path.
            </h2>
            <p className="mt-4 text-base leading-7 theme-muted">
              Install the package, run one domain audit, then compare a
              candidate against a baseline when a release decision needs
              evidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs/quickstart"
                className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-semibold theme-button-primary"
              >
                Quickstart
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={siteLinks.waitlist}
                className="inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold theme-button-secondary"
              >
                Request a domain pilot
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="rounded-md border p-5 theme-panel">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
              <Terminal size={18} aria-hidden="true" />
              Basic flow
            </div>
            <CodeBlock
              code={`python -m pip install evidpath

evidpath audit --domain recommender \\
  --target-url http://127.0.0.1:8051 \\
  --scenario returning-user-home-feed

evidpath audit --domain search \\
  --target-url http://127.0.0.1:8051 \\
  --scenario time-sensitive-query

evidpath audit --domain agents \\
  --driver-config-path ./driver_config.json \\
  --scenario current-info-tool-use`}
            />
          </div>
        </div>
      </section>

      <section className="theme-section py-12">
        <div className="container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase theme-link">
                Guides
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[var(--text)]">
                Read by job, not by repository file.
              </h2>
            </div>
            <a
              href={siteLinks.githubProduct}
              className="inline-flex h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold theme-button-secondary"
            >
              Source repository
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8">
            <DomainFlowVisual />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {docHomeCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-md border p-5 theme-panel hover:border-[var(--accent)]"
              >
                <card.icon className="h-6 w-6 theme-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 theme-muted">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold theme-link">
                  Open guide
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
