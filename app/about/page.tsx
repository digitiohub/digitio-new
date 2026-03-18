import type { Metadata } from "next";
import { AboutAchievementsSection } from "@/components/about/AboutAchievementsSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutVisionSection } from "@/components/about/AboutVisionSection";
import { AboutWhySection } from "@/components/about/AboutWhySection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("about");

export default function AboutRoute() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      <main className="relative">
        <AboutHeroSection />
        <AboutWhySection />
        <AboutVisionSection />
        <AboutAchievementsSection />
        <AboutTeamSection />
        <AboutCtaSection />
      </main>
    </section>
  );
}
