
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { FAQSection } from "@/components/FAQSection";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <CaseStudiesSection />
        <ServicesSection />
        <IndustriesSection />
        <FAQSection />
      </main>
    </>
  );
}
