import type { Metadata } from "next";
import { AboutAchievementsSection } from "@/components/about/AboutAchievementsSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutVisionSection } from "@/components/about/AboutVisionSection";
import { AboutWhySection } from "@/components/about/AboutWhySection";

export const metadata: Metadata = {
  title: "About Us | DigitioHub",
  description:
    "Learn about DigitioHub, our vision, achievements, and leadership team building AI-driven digital systems for modern businesses.",
};

export default function AboutRoute() {
  return (
    <section className="relative overflow-hidden bg-[#06090f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,9,15,0.55),rgba(6,9,15,0.96)_35%,rgba(6,9,15,1)_100%)]" />

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
