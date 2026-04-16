import Image from "next/image";

export function BentoCapabilitiesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black pb-24 pt-8 text-white md:pt-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(20,60,190,0.24),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,16,0.95)_0%,rgba(0,0,0,1)_25%)]" />

      <div className="mx-auto max-w-360 px-3 sm:px-5 lg:px-6">
        <div className="mb-8 max-w-3xl px-2 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/78">Why Teams Choose Us</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Enterprise AI capability without carrying full in-house complexity.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-62.5 lg:auto-rows-67.5">
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#03143f] md:col-span-7 md:row-span-2 md:col-start-1 md:row-start-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(96,164,255,0.2),transparent_48%)]" />
            <div className="absolute inset-0 opacity-35 mask-[linear-gradient(to_bottom,black,transparent)]">
              <div className="h-full w-full bg-[linear-gradient(transparent_0%,rgba(94,149,255,0.22)_50%,transparent_100%)] bg-size-[100%_24px]" />
            </div>
            <div className="relative flex h-full flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
              <div className="md:flex md:flex-1 md:justify-center">
                <p className="max-w-115 text-[1.9rem] leading-[1.12] text-white/95 md:text-center lg:text-[2.2rem]">
                  Enterprise-ready AI delivery without heavy in-house build overhead
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:ml-auto md:w-70 md:grid-cols-1">
                <div className="rounded-2xl border border-[#76a9ff]/30 bg-[#0d2b72]/55 p-4">
                  <p className="text-[2rem] font-semibold leading-none text-white">4x</p>
                  <p className="mt-1 text-sm leading-snug text-white/75">Faster pilot deployment cycles</p>
                </div>
                <div className="rounded-2xl border border-[#76a9ff]/30 bg-[#0d2b72]/55 p-4">
                  <p className="text-[2rem] font-semibold leading-none text-white">60%</p>
                  <p className="mt-1 text-sm leading-snug text-white/75">Lower delivery friction for teams</p>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#06090f] p-6 md:col-span-5 md:row-span-1 md:col-start-8 md:row-start-1 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(255,196,52,0.35),transparent_22%)]" />
            <div className="absolute inset-x-6 bottom-0 top-6 flex items-end gap-6 opacity-80">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-linear-to-t from-[#e6d086]/20 to-[#fff0bd]"
                  style={{ height: `${85 - i * 7}%` }}
                />
              ))}
            </div>
            <div className="relative ml-auto max-w-90">
              <p className="text-[1.75rem] leading-[1.12] text-white/95 lg:text-[2rem]">
                We reduce your costs and complexity of developing
                <br />
                <span className="font-semibold text-white">In-house AI solutions</span>
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#05070d] md:col-span-3 md:row-span-2 md:col-start-8 md:row-start-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,208,75,0.22),transparent_56%)]" />
            <Image
              src="/media/human-ai.webp"
              alt="Human and robotic hand"
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center opacity-90"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07090e] p-6 md:col-span-2 md:row-span-2 md:col-start-11 md:row-start-2 lg:p-8">
            <p className="max-w-65 text-[1.6rem] leading-[1.15] text-white/95 lg:text-[1.8rem]">
              We bring in advanced, certified expertise to integrate AI into your existing workflows
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#05070b] p-6 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-3 lg:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent,rgba(120,255,125,0.16),transparent)]" />
            <p className="relative max-w-65 text-[1.75rem] leading-[1.15] text-white/95 lg:text-[1.95rem]">
              We optimize your value chains and business processes
            </p>
            <div className="relative mt-10 flex items-center">
              <div className="h-14 w-42.5 rounded-full border border-[#60ff7f]/30 bg-[#29d15a]/80 p-2 shadow-[0_0_36px_rgba(32,215,89,0.45)]">
                <div className="h-full w-full rounded-full bg-[#5be77a]/80" />
              </div>
              <div className="-ml-24 h-12 w-12 rounded-full border-2 border-white bg-white/95 shadow-[0_0_24px_rgba(255,255,255,0.45)]" />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#05070c] p-6 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4 lg:p-8">
            <p className="max-w-62.5 text-[1.75rem] leading-[1.15] text-white/95 lg:text-[1.9rem]">
              We remove barriers to slow AI adoption due to scalability and customization issues
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#040906] p-6 md:col-span-3 md:row-span-2 md:col-start-5 md:row-start-3 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_86%,rgba(60,255,143,0.25),transparent_45%)]" />
            <div className="absolute inset-x-0 bottom-0 top-0 opacity-55 mask-[linear-gradient(to_bottom,transparent,black)]">
              <div className="h-full w-full bg-[linear-gradient(rgba(0,255,118,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,118,0.12)_1px,transparent_1px)] bg-size-[26px_26px]" />
            </div>
            <div className="relative flex h-full flex-col justify-between">
              <div className="rounded-2xl border border-[#1aff84]/20 bg-[#06120c]/75 p-4 font-mono text-[11px] leading-relaxed text-[#93ffbd]">
                <p>0100111010010011 00101011</p>
                <p>1010000110111100 11100110</p>
                <p>0011101000011110 01010101</p>
                <p>1100010111001001 10011000</p>
                <p>0110011001011001 11100100</p>
              </div>
              <div className="mt-6 rounded-2xl border border-[#1aff84]/16 bg-[#07150e]/75 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#92ffd0]/85">Workflow Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#1aff84]/35 bg-[#0b2a18]/80 px-2.5 py-1 text-xs text-[#c8ffe4]">
                    Ingestion
                  </span>
                  <span className="rounded-full border border-[#1aff84]/35 bg-[#0b2a18]/80 px-2.5 py-1 text-xs text-[#c8ffe4]">
                    Training
                  </span>
                  <span className="rounded-full border border-[#1aff84]/35 bg-[#0b2a18]/80 px-2.5 py-1 text-xs text-[#c8ffe4]">
                    Validation
                  </span>
                  <span className="rounded-full border border-[#1aff84]/35 bg-[#0b2a18]/80 px-2.5 py-1 text-xs text-[#c8ffe4]">
                    Monitoring
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#1aff84]/15 bg-[#07150e]/70 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#93ffbd]/70">Latency</p>
                  <p className="mt-1 text-lg font-semibold text-[#ddffee]">148ms</p>
                </div>
                <div className="rounded-xl border border-[#1aff84]/15 bg-[#07150e]/70 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#93ffbd]/70">Uptime</p>
                  <p className="mt-1 text-lg font-semibold text-[#ddffee]">99.95%</p>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#06090f] p-6 md:col-span-5 md:row-span-1 md:col-start-8 md:row-start-4 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_40%,rgba(119,176,255,0.24),transparent_38%)]" />
            <div className="absolute inset-x-6 bottom-6 top-auto h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="max-w-95 text-[1.55rem] leading-[1.16] text-white/95 lg:text-[1.8rem]">
                From strategy to rollout, we build practical AI roadmaps your teams can execute.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#76a9ff]" />
                <span>Discovery</span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#74e6a5]" />
                <span>Build</span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#ffc266]" />
                <span>Scale</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
