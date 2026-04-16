import { Hero } from "@/components/ai-solutions/Hero";
import { BentoCapabilitiesSection } from "@/components/ai-solutions/BentoCapabilitiesSection";
import { AIServiceSuiteSection } from "@/components/ai-solutions/AIServiceSuiteSection";
import { AIDeliveryProcessSection } from "@/components/ai-solutions/AIDeliveryProcessSection";
import { AIUseCasesSection } from "@/components/ai-solutions/AIUseCasesSection";
import { AIEngagementCtaSection } from "@/components/ai-solutions/AIEngagementCtaSection";

const AITechSolutionsPage = () => {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <AIServiceSuiteSection />
      <BentoCapabilitiesSection />
      <AIDeliveryProcessSection />
      <AIUseCasesSection />
      <AIEngagementCtaSection />
    </main>
  );
};

export default AITechSolutionsPage;
