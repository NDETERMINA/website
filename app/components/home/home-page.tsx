import Link from "next/link";
import { LabArrow, LabHeader } from "@/app/components/lab/site-shell";
import { SignalField } from "@/app/components/lab/signal-field";
import { siteLinks } from "@/app/lib/site";

export function HomePage() {
  return (
    <div className="lab-shell">
      <LabHeader />
      <main id="main-content">
        <section className="lab-home-hero" aria-labelledby="home-title">
          <SignalField />
          <div className="lab-home-intro lab-container">
            <h1 id="home-title"><span>Understand</span>{" "}<span>what AI will do.</span></h1>
            <div className="lab-home-copy">
              <p>We test AI systems by simulating the world around them. See how behavior changes before it reaches users.</p>
              <div className="lab-actions">
                <Link href="#product-systems">Explore Determina <LabArrow /></Link>
                <a href={siteLinks.waitlist}>Get in touch</a>
              </div>
            </div>
          </div>
          <div className="lab-home-index lab-container" id="product-systems">
            <p>Built for systems that change.</p>
            <nav aria-label="System types">
              <Link href="/recomm">Recommenders</Link><Link href="/agents">Agents</Link><Link href="/search">Search</Link>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
