import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    title: "Customer Support Copilots",
    description: "Deploy multilingual AI assistants that resolve repetitive queries and improve support speed.",
    tag: "Service",
  },
  {
    title: "Sales and Revenue Intelligence",
    description: "Score leads, recommend next-best actions, and accelerate pipeline conversion with predictive insights.",
    tag: "Growth",
  },
  {
    title: "Operations Automation",
    description: "Automate document-heavy workflows, reduce bottlenecks, and improve process consistency.",
    tag: "Efficiency",
  },
  {
    title: "Knowledge and Decision Systems",
    description: "Enable teams to retrieve trusted insights from internal data with role-aware AI search and copilots.",
    tag: "Enablement",
  },
];

const metrics = [
  { label: "Typical pilot timeline", value: "6-10 Weeks" },
  { label: "Workflow automation potential", value: "Up to 65%" },
  { label: "Operational uptime target", value: "99.9%" },
];

export function AIUseCasesSection() {
  return (
    <section className="bg-black px-6 py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">AI Solutions We Build</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Use-case-led AI systems designed for immediate business impact.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="rounded-3xl border border-white/12 bg-[#0a0f18] p-5 md:p-6">
                  <span className="inline-flex rounded-full border border-white/18 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
                    {useCase.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-medium leading-tight text-white">{useCase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/66">{useCase.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/12 bg-[#0a101a] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/82">Outcome-Oriented Engagement</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-3xl">
              Clear milestones, transparent delivery, measurable outcomes.
            </h3>

            <div className="mt-8 space-y-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/52">{metric.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Discuss Your Use Case
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

