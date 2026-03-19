"use client";

import { Database, Eye, Sparkles, Check } from "lucide-react";

const capabilityCards = [
  {
    title: "GenAI Integration",
    icon: Sparkles,
    points: ["AI Agents", "Chatbots", "Coding Assistants"],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    points: ["Quality Control", "Facial Recognition"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    points: ["Building the infrastructure that feeds the AI."],
  },
];

export function DigitioAiSection() {
  return (
    <section className="w-full bg-black py-10 md:h-screen md:py-0">
      <div className="mx-auto h-full w-full max-w-360">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-90 md:h-full md:min-h-0">
            {/* AI Handshake Image */}
            <img
              src="/media/human-ai.webp"
              alt="AI Handshake"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              style={{ objectPosition: 'center' }}
            />
            <div className="relative z-10 p-6 md:p-8">
              <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">DigitioAI</p>
            </div>
          </div>

          <div className="px-6 pb-8 pt-8 md:flex md:h-full md:flex-col md:justify-center md:px-12 md:pb-10 md:pt-14">
            <h2 className="text-xl leading-[1.1] font-medium text-white md:text-3xl">
              Building AI Ecosystem
            </h2>
            <h3 className="mt-2 text-xl leading-[1.1] text-white md:text-3xl">
              That Align With Your Organization
            </h3>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-200 md:text-base">
              <span className="font-semibold text-white">DigitioAI</span> is our dedicated center of
              excellence, to help enterprises navigate the AI revolution. From custom LLMs to automated
              workflows, we move your business beyond the hype into practical, revenue-generating AI
              implementation.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-3">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-white/20 bg-black p-5 text-white"
                  >
                    <div className="mb-5 flex items-center gap-4 md:block">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-900 md:mb-5">
                        <Icon className="h-7 w-7 text-zinc-100" />
                      </div>
                      <h4 className="text-md leading-tight font-semibold md:text-lg">
                        {card.title}
                      </h4>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-base text-zinc-100 md:text-sm">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row">
              <button className="w-full rounded-full bg-zinc-100 px-7 py-4 text-base font-semibold text-black transition hover:bg-white md:w-auto">
                Book Your AI Advisory Session
              </button>
              <button className="w-full rounded-full border border-zinc-200 px-7 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-black md:w-auto">
                Discover DigitioAI <span className="ml-2">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
