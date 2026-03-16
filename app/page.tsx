
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
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
        <CaseStudiesSection />
        <ServicesSection />
        <IndustriesSection />
        <FAQSection />
      </main>
    </>
  );
}
