import { PublicFooter, PublicHeader } from "@/app/components/system/system-page";
import { DecisionSection } from "./sections/decision-section";
import { EvidenceSection } from "./sections/evidence-section";
import { HeroSection } from "./sections/hero-section";
import { HomeProgressRail } from "./home-progress-rail";
import { ObserveSection } from "./sections/observe-section";
import { PilotSection } from "./sections/pilot-section";
import { WorldSection } from "./sections/world-section";

export function HomePage() {
  return (
    <main className="home-shell">
      <PublicHeader />
      <HeroSection />
      <HomeProgressRail />
      <WorldSection />
      <ObserveSection />
      <EvidenceSection />
      <DecisionSection />
      <PilotSection />
      <PublicFooter />
    </main>
  );
}
