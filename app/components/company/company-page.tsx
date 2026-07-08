import { ArrowMark, PublicFooter, PublicHeader } from "@/app/components/system/system-page";

const founders = [
  {
    name: "Alankrit Verma",
    role: "Co-founder",
    image: "https://github.com/AlankritVerma01.png",
    summary:
      "Alankrit built recommender infrastructure at PlayStation and founded GenAI Genesis. He studies Computer Science at the University of Toronto.",
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
      "Murphy has shipped backend and infrastructure work at Coinbase, Cloudflare, Amazon, and theScore. He studies Computer Science at the University of Toronto.",
    details: ["University of Toronto CS", "Backend and infrastructure engineering", "Previously Coinbase, Cloudflare, Amazon, theScore"],
    links: [
      ["GitHub", "https://github.com/murphylee10"],
      ["LinkedIn", "https://ca.linkedin.com/in/murphylee10"]
    ]
  }
] as const;

const operatingNotes = [
  ["we write the code", "Both founders are in the product every day. There is no layer between you and the decisions."],
  ["small on purpose", "Fewer people, bigger ownership. You ship things with your name on them."],
  ["evidence over vibes", "If a claim about a release cannot be traced to an artifact, it does not count. We hold our own work to that too."]
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
          <h1 id="company-title">The missing step between &ldquo;the demo works&rdquo; and &ldquo;ship it.&rdquo;</h1>
          <p>
            Determina is two engineers, Alankrit Verma and Murphy Lee. We have both watched AI
            changes go out on a good demo and a gut call. This is the tool we kept wishing
            someone would build: run the change against a world that looks like production,
            read the evidence, then decide.
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
        <h2 id="company-note-title">We have been on the launch calls where nobody could say what the model would actually do.</h2>
        <p>
          Between us we have built recommender infrastructure at PlayStation and backend systems
          at Coinbase, Cloudflare, and Amazon. The pattern was the same everywhere: offline
          metrics say one thing, production says another, and the release call gets made on
          gut feel. Determina exists so that call can be made on evidence instead.
        </p>
      </section>

      <section className="company-operating" aria-labelledby="company-operating-title">
        <div>
          <p className="home-label">how we work</p>
          <h2 id="company-operating-title">Two founders, zero layers.</h2>
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
            We want people who would rather own a whole problem than a ticket queue. A short
            note about something you have built beats a resume &mdash; email us directly.
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
