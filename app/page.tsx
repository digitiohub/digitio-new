import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CaseStudiesSection />
        <ServicesSection />
        <IndustriesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
