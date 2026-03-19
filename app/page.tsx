import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { DigitioAiSection } from "@/components/home/DigitioAiSection";
import { ImpactMarqueeSection } from "@/components/home/ImpactMarqueeSection";
import { TrustedLogosSection } from "@/components/home/TrustedLogosSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PreFaqCtaSection } from "@/components/home/PreFaqCtaSection";
import { FAQSection } from "@/components/home/FAQSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("home");

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <DigitioAiSection />
        <ImpactMarqueeSection />
        <CaseStudiesSection />
        <TrustedLogosSection />
        <ServicesSection />
        <IndustriesSection />
        <PreFaqCtaSection />
        <FAQSection />
      </main>
    </>
  );
}
