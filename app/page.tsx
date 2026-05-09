import Link from "next/link";
import { ArrowRight, BookOpen, Mail, Plug, Route, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/app/components/home/animated-section";
import { CommandRunner } from "@/app/components/home/command-runner";
import { DomainArchitecture } from "@/app/components/home/domain-architecture";
import { EvidenceDossier } from "@/app/components/home/evidence-dossier";
import { HomepageBorderSpirit } from "@/app/components/home/homepage-border-spirit";
import { LiveRunConsole } from "@/app/components/home/live-run-console";
import { SwarmCoverageVisual } from "@/app/components/home/swarm-coverage-visual";
import { SystemMap } from "@/app/components/home/system-map";
import { TestingGapVisual } from "@/app/components/home/testing-gap-visual";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import {
  clientBenefits,
  ctaLabels,
  docTiles,
  domainProducts,
  firstDomainRoutes,
  futureDirection,
  heroCopy,
  heroProofPoints,
  platformFlow,
  platformLayers,
  sharedPlatformCapabilities,
} from "@/app/lib/home";
import { siteLinks } from "@/app/lib/site";

export default function Home() {
  return (
    <main className="theme-bg">
      <Header />
      <HomepageBorderSpirit />

      <section id="problem" className="relative overflow-hidden theme-section signal-field">
        <SystemMap />
        <div className="hero-entry container relative z-10 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-8 text-center">
          <div className="min-w-0">
            <div className="entry-label">
              <Sparkles size={17} aria-hidden="true" />
              <span>{heroCopy.label}</span>
              <span className="entry-dot h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{heroCopy.qualifier}</span>
            </div>
            <p className="mt-6 text-sm font-semibold uppercase theme-accent-strong">
              {heroCopy.eyebrow}
            </p>
            <h1 className="hero-title mx-auto mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              {heroCopy.headline}
            </h1>
            <p className="hero-subtitle mx-auto mt-5 max-w-3xl text-lg leading-8 theme-muted sm:text-xl">
              {heroCopy.subtitle}
            </p>
            <div className="hero-cta mt-6">
              <a
                href={siteLinks.waitlist}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold shadow-sm theme-button-primary focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] sm:w-auto"
              >
                <Mail size={18} aria-hidden="true" />
                {ctaLabels.primary}
              </a>
            </div>

            <div className="hero-proof-strip mx-auto mt-7">
              {heroProofPoints.map(([label, text]) => (
                <div key={label} className="hero-proof-strip-card" data-spirit-frame="">
                  <p>{label}</p>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="theme-section-alt section-shell" id="category-shift">
        <div className="container">
          <div className="mb-8 grid gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-end">
            <div>
              <p className="section-kicker">The category shift</p>
              <h2 className="section-title max-w-2xl">
                AI products do not just return outputs. They exhibit behavior.
              </h2>
            </div>
            <p className="section-copy mt-0">
              Unit tests and thresholds still matter. They just do not tell you
              which users lose trust, which queries miss intent, which agents
              misuse tools, or whether a candidate changed behavior in a risky
              slice.
            </p>
          </div>
          <TestingGapVisual />
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section section-shell" id="benefits">
        <div className="container section-grid">
          <div>
            <p className="section-kicker">Client benefits</p>
            <h2 className="section-title">
              What changes before launch.
            </h2>
            <p className="section-copy">
              Evidpath gives teams a controlled way to find behavior failures,
              rerun the same coverage, compare release candidates, and leave a
              launch packet that can be reviewed by humans.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {clientBenefits.map((benefit) => (
                <article key={benefit.title} className="benefit-card" data-spirit-frame="">
                  <benefit.icon className="h-5 w-5 shrink-0 theme-accent" aria-hidden="true" />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="benefit-proof-wrap">
            <LiveRunConsole />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section section-shell" id="domains">
        <div className="container">
          <div className="mb-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Domain products</p>
              <h2 className="section-title max-w-3xl">
                Choose the behavior trial for the system you ship.
              </h2>
            </div>
            <p className="section-copy mt-0">
              Evidpath is the shared evidence engine. The domain product gives
              it the contract, scenario language, judge, and report vocabulary
              for a specific AI system.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {domainProducts.map((product) => (
              <article key={product.slug} className="data-card flex flex-col p-5" data-spirit-frame="">
                <p className="text-xs font-semibold uppercase theme-accent">
                  {product.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[var(--text)]">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 theme-muted">{product.summary}</p>
                <div className="mt-5">
                  <p className="tiny-label">Failure language</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.failures.map((failure) => (
                      <span
                        key={failure}
                        className="rounded-md border px-2.5 py-1 text-xs font-semibold theme-line theme-muted"
                      >
                        {failure}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <p className="tiny-label">Integration paths</p>
                  <p className="mt-2 text-sm leading-6 theme-muted">
                    {product.integrations.join(" / ")}
                  </p>
                </div>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold theme-button-secondary"
                >
                  Open domain guide
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section-alt section-shell" id="run">
        <div className="container section-grid">
          <div>
            <p className="section-kicker">The method</p>
            <h2 className="section-title">Turn a release question into a controlled behavior trial.</h2>
            <p className="section-copy">
              Evidpath does not stop at a manual spot check. It builds a
              domain-shaped run, calls the target through the right integration
              path, judges completed traces, then writes artifacts a team can
              inspect and rerun.
            </p>
          </div>
          <CommandRunner />
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section section-shell">
        <div className="container">
          <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">Coverage model</p>
              <h2 className="section-title">
                Swarms are the repeatable coverage beneath each domain.
              </h2>
            </div>
            <p className="section-copy mt-0">
              A swarm is coverage with memory: seeded actors, scenarios,
              journeys, tasks, and saved plans that can be rerun when a target
              changes. Generated coverage is currently strongest for the
              recommender domain.
            </p>
          </div>
          <SwarmCoverageVisual />
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section section-shell" id="evidence">
        <div className="container section-grid">
          <div>
            <p className="section-kicker">Launch evidence</p>
            <h2 className="section-title">
              The output is a release packet, not a slogan.
            </h2>
            <p className="section-copy">
              Reports should name the domain, the run, the trace, the concern,
              and the files behind the conclusion. That is the difference
              between “we tried it” and repeatable launch review.
            </p>
            <Link
              href="/docs/outputs"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-semibold theme-button-primary"
            >
              Output guide
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <EvidenceDossier />
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section-alt section-shell">
        <div className="container section-grid">
          <div>
            <p className="section-kicker">Platform shape</p>
            <h2 className="section-title">
              One evidence engine. Multiple domain products.
            </h2>
            <p className="section-copy">
              The platform gives every domain the same repeatable run engine,
              trace ledger, regression workflow, and artifact model. The domain
              product gives each customer the scenarios, contract, judge, and
              failure language that match the system they ship.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="data-card p-4" data-spirit-frame="">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
                  <Plug size={18} aria-hidden="true" />
                  Current domain products
                </div>
                <div className="grid gap-2">
                  {firstDomainRoutes.map(([domain, detail]) => (
                    <Link
                      key={domain}
                      href="/docs/domain-products"
                      className="grid gap-2 rounded-md border px-3 py-2 text-sm theme-line hover:border-[var(--accent)] sm:grid-cols-[7rem_1fr] sm:items-center"
                    >
                      <span className="font-semibold theme-accent">{domain}</span>
                      <span className="text-[var(--text)]">{detail}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="data-card p-4" data-spirit-frame="">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold theme-accent-strong">
                  <Route size={18} aria-hidden="true" />
                  Maturity note
                </div>
                <p className="text-sm leading-6 theme-muted">{futureDirection}</p>
              </div>
              <div className="data-card p-4" data-spirit-frame="">
                <p className="mb-3 text-sm font-semibold theme-accent-strong">
                  Shared platform capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {sharedPlatformCapabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-md border px-2.5 py-1 text-xs font-semibold theme-line theme-muted"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <DomainArchitecture />
            <div className="data-card p-4" data-spirit-frame="">
              <p className="mb-3 text-sm font-semibold theme-accent-strong">
                Platform flow
              </p>
              <div className="grid gap-2">
                {platformFlow.map(([title, text], index) => (
                  <div
                    key={title}
                    className="grid gap-2 rounded-md border px-3 py-2 theme-line bg-[var(--panel)] sm:grid-cols-[2rem_9rem_1fr] sm:items-center"
                  >
                    <span className="mono text-xs theme-muted">{index + 1}</span>
                    <span className="text-sm font-semibold">{title}</span>
                    <span className="text-sm theme-muted">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {platformLayers.slice(0, 4).map((layer) => (
                <article key={layer.title} className="data-card p-4" data-spirit-frame="">
                  <div className="flex gap-3">
                    <layer.icon className="mt-1 h-5 w-5 shrink-0 theme-accent" aria-hidden="true" />
                    <div>
                      <p className="text-base font-semibold text-[var(--text)]">
                        {layer.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 theme-muted">{layer.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="theme-section section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Product manual</p>
            <h2 className="section-title">Docs organized by the jobs teams need.</h2>
            <p className="section-copy">
              The docs explain the swarm model after the buyer story is clear:
              choose a domain product, pick an integration path, run workflows,
              and read the evidence packet.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold theme-button-primary"
              >
                Open docs
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/docs/quickstart"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold theme-button-secondary"
              >
                Multi-domain quickstart
              </Link>
            </div>
          </div>
          <div className="workbench" data-spirit-frame="">
            <div className="workbench-header">
              <div className="workbench-title">
                <BookOpen size={18} aria-hidden="true" />
                Start here
              </div>
              <span className="status-chip">domain product docs</span>
            </div>
            <div className="workbench-body grid gap-3 md:grid-cols-2">
              {docTiles.map(([title, text, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="data-card group p-4 hover:border-[var(--accent)]"
                  data-spirit-frame=""
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[var(--text)]">{title}</p>
                      <p className="mt-2 text-sm leading-6 theme-muted">{text}</p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="shrink-0 theme-muted group-hover:text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="theme-section-alt py-14" id="pilot">
        <div className="container">
          <div className="workbench">
            <div className="workbench-body flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase theme-accent-strong">
                  <Sparkles size={18} aria-hidden="true" />
                  Domain pilot
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-4xl">
                  Have an AI system with behavior risk before launch?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 theme-muted">
                  Bring the target. We will help choose the domain product,
                  implementation path, and first release question to turn into
                  trace-backed evidence.
                </p>
              </div>
              <a
                href={siteLinks.waitlist}
                className="spirit-terminal-cta inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold theme-button-primary focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                data-spirit-frame=""
                data-spirit-terminal=""
              >
                {ctaLabels.primary}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
