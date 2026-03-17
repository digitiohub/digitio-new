"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TextAnimate } from "@/components/ui/text-animate"

const faqs = [
    {
        question: "How does DigitioHub ensure the ethical and responsible use of AI?",
        answer: "We ensure ethical AI by embedding governance, transparency, and fairness into our development lifecycle. Our models are continuously monitored for bias, and we adhere to stringent data privacy regulations.",
    },
    {
        question: "How does DigitioHub company leverage AI in business and enterprise solutions?",
        answer: "We integrate AI into core enterprise workflows—enhancing decision-making, automating repetitive tasks via Agentic AI, and creating intelligent internal knowledge bases using Generative AI.",
    },
    {
        question: "What types of digital products and services does DigitioHub offer?",
        answer: "Our services span comprehensive digital product engineering, including cloud modernization, AI/ML integrations, IoT ecosystems, computer vision automation, and enterprise cybersecurity framing.",
    },
    {
        question: "How does DigitioHub approach digital transformation for modern and legacy enterprises?",
        answer: "We don't do lift-and-shift. We rethink architectures, slowly decoupling monolithic legacy systems into secure, scalable, and resilient microservices capable of integrating modern AI.",
    },
    {
        question: "How does DigitioHub ensure the security and quality of the software they develop?",
        answer: "Security and quality are baked into every sprint through secure coding standards, code reviews, continuous testing, and compliance-driven delivery practices.",
    },
    {
        question: "What is the average cost and timeline for building an enterprise-grade application?",
        answer: "Project scope, platform complexity, integrations, and compliance needs define the final cost and timeline. We provide a phased estimate after a detailed discovery workshop.",
    },
    {
        question: "Why choose DigitioHub as your digital product engineering company?",
        answer: "We combine product strategy, engineering depth, and AI-first delivery to help enterprises launch faster, scale safely, and build long-term technology value.",
    },
    {
        question: "Can I hire dedicated developers or augment my existing team through your services?",
        answer: "Yes. We provide dedicated pods and flexible augmentation models that align with your internal processes, tooling, and release cadence.",
    },
    {
        question: "Do you provide SLAs and post-launch support?",
        answer: "Yes. We offer SLA-backed support, proactive monitoring, incident response, and iterative enhancement plans to keep production systems stable and evolving.",
    },
    {
        question: "How do you manage collaboration across time zones and ensure clear communication?",
        answer: "Our teams follow structured ceremonies, transparent reporting, and shared collaboration channels to keep stakeholders aligned across all time zones.",
    },
]

export function FAQSection() {
    return (
        <section className="border-t border-slate-900/40 bg-black py-24 text-white">
            <div className="container mx-auto px-6">
                <div className="mb-14 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                        {/* Desktop version: Single line */}
                        <div className="hidden md:flex flex-wrap justify-center items-center">
                            <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Frequently Asked Questions</TextAnimate>
                        </div>
                        {/* Mobile version: Split into 2 lines */}
                        <div className="flex md:hidden flex-col items-center">
                            <div className="flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Frequently Asked</TextAnimate>
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <TextAnimate animation="slideLeft" by="character" as="span" className="inline-block whitespace-nowrap">Questions</TextAnimate>
                            </div>
                        </div>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg">
                        Everything you need to know about our engineering process and enterprise solutions.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                    <div className="order-2 rounded-3xl border border-blue-400/30 bg-linear-to-b from-[#001347] via-[#02206E] to-[#0E59FF] p-7 shadow-[0_30px_80px_rgba(0,68,255,0.25)] lg:order-1">
                        <h3 className="text-2xl font-bold">Did not find what you were looking for?</h3>
                        <p className="mt-3 text-sm leading-relaxed text-blue-100/90">
                            We have more answers waiting for you. If your question did not make the list, do not hesitate to reach out.
                        </p>

                        <form className="mt-7 space-y-10">
                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                                    Name *
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-sm text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none"
                                    />
                                </label>
                                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                                    Contact Number *
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Number"
                                        required
                                        className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-sm text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="block space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                                    Budget Range
                                    <select className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-sm text-white focus:border-white focus:outline-none">
                                        <option value="" className="text-slate-900">
                                            Select a Budget Range
                                        </option>
                                        <option value="25k-50k" className="text-slate-900">
                                            INR 25,000 - INR 50,000
                                        </option>
                                        <option value="50k-100k" className="text-slate-900">
                                            INR 50,000 - INR 1,00,000
                                        </option>
                                        <option value="let's-discuss" className="text-slate-900">
                                            Let&apos;s Discuss
                                        </option>
                                    </select>
                                </label>
                                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                                    Work Email
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-sm text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none"
                                    />
                                </label>
                            </div>

                            <label className="block space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                                Describe Your Project *
                                <textarea
                                    rows={5}
                                    placeholder="Share a short brief"
                                    required
                                    className="w-full resize-none border-0 border-b border-blue-200/50 bg-transparent pb-2 text-sm text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none"
                                />
                            </label>

                            <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
                                <button
                                    type="submit"
                                    className="h-11 min-w-44 rounded-full bg-white px-8 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="order-1 rounded-3xl border border-slate-300/20 bg-[#f2f2f2] p-4 md:p-6 lg:order-2">
                        <div
                            data-lenis-prevent
                            className="faq-scroll max-h-152 overflow-y-auto pr-1"
                        >
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`item-${i}`}
                                        className="border-b border-slate-300/75 px-2 py-1 last:border-b-0"
                                    >
                                        <AccordionTrigger className="py-5 text-left font-semibold text-slate-900 no-underline hover:no-underline">
                                            <div className="grid w-full grid-cols-[52px_1fr] items-start gap-2 pr-2">
                                                <span className="font-medium text-slate-500">[{String(i + 1).padStart(2, "0")}]</span>
                                                <span className="text-lg leading-snug">{faq.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5 pl-13 text-base leading-relaxed text-slate-700">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
