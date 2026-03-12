import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <CaseStudiesSection />
        <ServicesSection />
        <IndustriesSection />
        <FAQSection />
      </main>

      {/* Simple Footer Placeholder */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Appinventiv Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
