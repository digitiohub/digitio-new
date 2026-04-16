import { Hero } from "@/components/ai-solutions/Hero";
import { BentoCapabilitiesSection } from "@/components/ai-solutions/BentoCapabilitiesSection";

const AITechSolutionsPage = () => {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <BentoCapabilitiesSection />
    </main>
  );
};

export default AITechSolutionsPage;
