const deliverySteps = [
  {
    id: "01",
    title: "Discovery and Opportunity Mapping",
    description:
      "We align AI initiatives with business priorities, identify high-impact use cases, and map success metrics upfront.",
  },
  {
    id: "02",
    title: "Data and Architecture Planning",
    description:
      "We design the data, model, and system architecture needed to support reliable and scalable AI implementation.",
  },
  {
    id: "03",
    title: "Pilot Build and Validation",
    description:
      "We launch focused pilots quickly, validate model quality, and benchmark value before broad rollout decisions.",
  },
  {
    id: "04",
    title: "Integration and Workflow Automation",
    description:
      "We embed AI into your products and business systems so teams can use it directly within existing workflows.",
  },
  {
    id: "05",
    title: "Security, Governance, and Compliance",
    description:
      "We establish robust controls for privacy, auditability, and model safety to ensure trustworthy long-term operation.",
  },
  {
    id: "06",
    title: "Scale, Optimize, and Evolve",
    description:
      "We monitor performance continuously, optimize costs, and expand capabilities as your AI maturity grows.",
  },
];

export function AIDeliveryProcessSection() {
  return (
    <section className="border-y border-white/8 bg-[#06090f] px-6 py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/75">Delivery Framework</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A practical AI lifecycle built for predictable execution.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverySteps.map((step) => (
            <article
              key={step.id}
              className="rounded-3xl border border-white/10 bg-black/35 px-5 py-6 backdrop-blur-sm md:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-200/88">{step.id}</span>
                <span className="h-px flex-1 bg-white/12" />
              </div>
              <h3 className="mt-4 text-xl font-medium leading-tight text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

