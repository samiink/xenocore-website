import IntroOverlay from "../../components/home/IntroOverlay";
import HeroSection from "../../components/home/HeroSection";
import FactionChamber from "../../components/home/FactionChamber";
import WarDashboard from "../../components/home/WarDashboard";
import HiddenSignalTeaser from "../../components/home/HiddenSignalTeaser";
import LorePreview from "../../components/home/LorePreview";
import TokenomicsSection from "../../components/home/TokenomicsSection";
import CommunitySection from "../../components/home/CommunitySection";
import FinalCTA from "../../components/home/FinalCTA";
import Footer from "../../components/layout/Footer";
import RevealSection from "../../components/ui/RevealSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <IntroOverlay />
      <HeroSection />

      <RevealSection>
        <FactionChamber />
      </RevealSection>

      <RevealSection>
        <WarDashboard />
      </RevealSection>

      <RevealSection>
        <HiddenSignalTeaser />
      </RevealSection>

      <RevealSection>
        <LorePreview />
      </RevealSection>

      <RevealSection>
        <TokenomicsSection />
      </RevealSection>

      <RevealSection>
        <CommunitySection />
      </RevealSection>

      <RevealSection>
        <FinalCTA />
      </RevealSection>

      <Footer />
    </main>
  );
}