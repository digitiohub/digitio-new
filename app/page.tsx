
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InventivAiSection } from "@/components/home/InventivAiSection";
import { ImpactMarqueeSection } from "@/components/home/ImpactMarqueeSection";
import { TrustedLogosSection } from "@/components/home/TrustedLogosSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FAQSection } from "@/components/home/FAQSection";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <InventivAiSection />
        <ImpactMarqueeSection />
        <CaseStudiesSection />
        <TrustedLogosSection />
        <ServicesSection />
        <IndustriesSection />
        <FAQSection />
      </main>
    </>
  );
}
