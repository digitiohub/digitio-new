import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const valuePoints = [
  "Consulting, build, and integration under one partner",
  "AI solutions aligned to your business model and workflows",
  "Execution with governance, security, and scale in mind",
];

export function AIEngagementCtaSection() {
  return (
    <section className="bg-black px-6 pb-24 pt-10">
      <div className="container mx-auto">
        <article className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0c1321] px-7 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(80,144,255,0.25),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(36,210,170,0.16),transparent_32%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/82">Ready to Build With AI?</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Turn AI opportunities into dependable systems your teams can use every day.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
                Whether you are starting from strategy or scaling live AI products, we help your organization deliver
                with speed, control, and confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:text-base"
                >
                  Book an AI Strategy Call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-white/25 bg-black/20 px-7 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-black/35 md:text-base"
                >
                  Explore Core Services
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {valuePoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/12 bg-black/30 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                  <p className="text-sm leading-relaxed text-white/82">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

