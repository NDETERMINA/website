import { ArrowMark, PublicFooter, PublicHeader } from "@/app/components/system/system-page";

const founders = [
  {
    name: "Alankrit Verma",
    role: "Co-founder",
    image: "https://github.com/AlankritVerma01.png",
    summary:
      "Alankrit works across machine learning systems, product engineering, and AI evaluation. He studies Computer Science at the University of Toronto, has built recommender infrastructure at PlayStation, and founded GenAI Genesis.",
    details: ["University of Toronto CS", "ML systems and evaluation", "Founder, GenAI Genesis"],
    links: [
      ["Website", "https://alankrit.me/"],
      ["GitHub", "https://github.com/AlankritVerma01"],
      ["LinkedIn", "https://www.linkedin.com/in/alankritverma"]
    ]
  },
  {
    name: "Murphy Lee",
    role: "Co-founder",
    image: "https://github.com/murphylee10.png",
    summary:
      "Murphy is a software engineer and Computer Science student at the University of Toronto. His public engineering background includes Coinbase, Cloudflare, Amazon, and theScore.",
    details: ["University of Toronto CS", "Backend and infrastructure engineering", "Previously Coinbase, Cloudflare, Amazon, theScore"],
    links: [
      ["GitHub", "https://github.com/murphylee10"],
      ["LinkedIn", "https://ca.linkedin.com/in/murphylee10"]
    ]
  }
] as const;

const operatingNotes = [
  ["builder-led", "We are close to the code, the product surface, and the customer problem."],
  ["small team", "We want high-agency people who can own ambiguous technical work end to end."],
  ["serious AI", "We care about systems that should be trusted before they affect real users."]
] as const;

const roles = [
  "product-minded engineers",
  "systems and infrastructure builders",
  "AI evaluation researchers",
  "design engineers who care about clarity"
] as const;

const foundersEmail = "mailto:founders@ndetermina.com?subject=Joining%20Determina";

export function CompanyPage() {
  return (
    <main className="home-shell company-page">
      <PublicHeader active="company" />

      <section className="company-hero" aria-labelledby="company-title">
        <div className="company-hero-copy">
          <p className="home-label">company</p>
          <h1 id="company-title">We are building Determina for teams shipping serious AI systems.</h1>
          <p>
            Determina is an early company started by Alankrit Verma and Murphy Lee. We are building
            the infrastructure layer for rehearsing AI behavior before release, with the discipline of
            engineering tools and the urgency of real product teams.
          </p>
          <div className="home-actions" aria-label="Company actions">
            <a className="home-button home-button-primary" href="#team">
              Meet the founders
              <ArrowMark />
            </a>
            <a className="home-inline-link" href="#join">
              Join the team
              <ArrowMark />
            </a>
          </div>
        </div>
        <CompanySignal />
      </section>

      <section className="company-founders" id="team" aria-labelledby="company-founders-title">
        <div className="company-section-head">
          <p className="home-label">founders</p>
          <h2 id="company-founders-title">The people building it.</h2>
        </div>
        <div className="company-founder-grid">
          {founders.map((founder) => (
            <article className="company-founder-card" key={founder.name}>
              <div className="company-founder-photo">
                {/* eslint-disable-next-line @next/next/no-img-element -- GitHub profile images are external public assets. */}
                <img src={founder.image} alt={`${founder.name} profile`} />
              </div>
              <div className="company-founder-copy">
                <span>{founder.role}</span>
                <h3>{founder.name}</h3>
                <p>{founder.summary}</p>
                <ul>
                  {founder.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="company-founder-links" aria-label={`${founder.name} links`}>
                  {founder.links.map(([label, href]) => (
                    <a key={label} href={href}>
                      {label}
                      <ArrowMark />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="company-note" aria-labelledby="company-note-title">
        <p className="home-label">why this team</p>
        <h2 id="company-note-title">We have lived the gap between demos, model metrics, and release decisions.</h2>
        <p>
          Our work sits where ML systems, infrastructure, product judgment, and customer trust meet.
          That is the founder-level bet behind Determina: make AI release behavior observable,
          reviewable, and hard to hand-wave.
        </p>
      </section>

      <section className="company-operating" aria-labelledby="company-operating-title">
        <div>
          <p className="home-label">how we work</p>
          <h2 id="company-operating-title">Small, technical, and direct.</h2>
        </div>
        <ul>
          {operatingNotes.map(([title, body]) => (
            <li key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="company-join" id="join" aria-labelledby="company-join-title">
        <span className="company-anchor" id="pilot" aria-hidden="true" />
        <div>
          <p className="home-label">join us</p>
          <h2 id="company-join-title">Help us build the release infrastructure AI teams should already have.</h2>
          <p>
            We are looking for unusually strong builders who want responsibility early. If you can move
            between product judgment, systems work, and careful execution, we want to hear from you.
          </p>
        </div>
        <div className="company-role-panel">
          <span>open conversations</span>
          <ul>
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <a className="home-button home-button-primary" href={foundersEmail}>
            Get in touch
            <ArrowMark />
          </a>
        </div>
      </section>

      <PublicFooter active="company" />
    </main>
  );
}

function CompanySignal() {
  return (
    <div className="company-signal" aria-hidden="true">
      <div className="company-signal-topline">
        <span>NDETERMINA</span>
        <strong>company record</strong>
      </div>
      <div className="company-signal-founders">
        <div>
          <span>co-founder</span>
          <strong>Alankrit Verma</strong>
        </div>
        <div>
          <span>co-founder</span>
          <strong>Murphy Lee</strong>
        </div>
      </div>
      <div className="company-signal-line" />
      <div className="company-signal-statement">
        <span>focus</span>
        <p>AI behavior rehearsal, evidence, and release judgment.</p>
      </div>
    </div>
  );
}
