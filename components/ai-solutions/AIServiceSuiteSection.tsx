import { Bot, BrainCircuit, Link2, ShieldCheck } from "lucide-react";

const serviceCards = [
  {
    title: "AI Consulting",
    description:
      "We define high-value AI opportunities, data readiness, governance, and execution roadmaps tied to your KPIs.",
    points: ["AI maturity assessment", "Use-case prioritization", "Operating model design"],
    icon: BrainCircuit,
    accent: "from-blue-400/35 via-cyan-300/20 to-transparent",
  },
  {
    title: "AI Development",
    description:
      "From LLM copilots to predictive systems, we engineer production-grade AI products with measurable business outcomes.",
    points: ["Custom model workflows", "Agentic automation", "Evaluation and guardrails"],
    icon: Bot,
    accent: "from-violet-300/30 via-indigo-300/20 to-transparent",
  },
  {
    title: "AI Integration",
    description:
      "We integrate AI into your current apps, data systems, and business tools without disrupting mission-critical operations.",
    points: ["API and platform integration", "Legacy modernization", "ERP/CRM connectivity"],
    icon: Link2,
    accent: "from-emerald-300/28 via-teal-300/20 to-transparent",
  },
  {
    title: "AI Reliability & Scale",
    description:
      "We harden your AI stack with monitoring, performance tuning, compliance controls, and post-launch optimization.",
    points: ["Model observability", "Performance tuning", "Security and compliance"],
    icon: ShieldCheck,
    accent: "from-amber-300/30 via-orange-300/18 to-transparent",
  },
];

export function AIServiceSuiteSection() {
  return (
    <section className="bg-black px-6 py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">Our AI Service Suite</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Consulting, development, and integration built as one execution system.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
            Designed for teams that want strategic clarity and delivery momentum. We help you move from AI ambition to
            operational results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-[#090d14] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${card.accent} opacity-0 transition-opacity duration-400 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/16 bg-black/30 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{card.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/82">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-blue-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

