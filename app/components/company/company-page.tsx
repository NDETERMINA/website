import { LabArrow, LabFooter, LabHeader } from "@/app/components/lab/site-shell";
import { SignalField } from "@/app/components/lab/signal-field";

const founderLinks = [
  ["Website", "https://alankrit.me/"],
  ["GitHub", "https://github.com/AlankritVerma01"],
  ["LinkedIn", "https://www.linkedin.com/in/alankritverma"]
] as const;

export function CompanyPage() {
  return <div className="lab-shell">
    <LabHeader active="company" />
    <main id="main-content" className="lab-company-page lab-container">
      <section className="lab-company-intro" aria-labelledby="company-title">
        <h1 id="company-title">A clearer view <br />of AI behavior.</h1>
        <div>
          <p>There is a gap between an AI system working in a demo and knowing what it will do in the world.</p>
          <p>Determina is built to explore that gap. We simulate the users, state, and conditions around a system, observe how its behavior changes, and make the evidence inspectable.</p>
        </div>
      </section>
      <SignalField compact />
      <section className="lab-founder" id="team" aria-labelledby="founder-title">
        <div><h2 id="founder-title">Alankrit Verma</h2><p>Founder</p></div>
        <div>
          <p>Alankrit built recommender infrastructure at PlayStation and founded GenAI Genesis. He studies Computer Science at the University of Toronto.</p>
          <nav className="lab-founder-links" aria-label="Alankrit Verma links">{founderLinks.map(([label, href]) => <a key={label} href={href}>{label} <LabArrow /></a>)}</nav>
        </div>
      </section>
      <section className="lab-company-principles">
        <h2>Small by design.</h2>
        <div><p>The founder writes the code and makes the product decisions. We value ownership, clear thinking, and evidence that can be traced back to what happened.</p>
          <details className="lab-details" id="join">
            <summary>Work with us <LabArrow /></summary>
            <div className="lab-details-content">
              <p>We are open to conversations with product-minded engineers, systems builders, AI evaluation researchers, and design engineers. A short note about something you have built is a good place to start.</p>
              <a href="mailto:founders@determina.dev?subject=Joining%20Determina">Get in touch <LabArrow /></a>
            </div>
          </details>
        </div>
      </section>
    </main>
    <LabFooter />
  </div>;
}
