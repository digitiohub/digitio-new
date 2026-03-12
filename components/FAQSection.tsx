"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How does Appinventiv ensure the ethical and responsible use of AI?",
        answer: "We ensure ethical AI by embedding governance, transparency, and fairness into our development lifecycle. Our models are continuously monitored for bias, and we adhere to stringent data privacy regulations.",
    },
    {
        question: "How does Appinventiv company leverage AI in business and enterprise solutions?",
        answer: "We integrate AI into core enterprise workflows—enhancing decision-making, automating repetitive tasks via Agentic AI, and creating intelligent internal knowledge bases using Generative AI.",
    },
    {
        question: "What types of digital products and services does Appinventiv offer?",
        answer: "Our services span comprehensive digital product engineering, including cloud modernization, AI/ML integrations, IoT ecosystems, computer vision automation, and enterprise cybersecurity framing.",
    },
    {
        question: "How does Appinventiv approach digital transformation for modern and legacy enterprises?",
        answer: "We don't do lift-and-shift. We rethink architectures, slowly decoupling monolithic legacy systems into secure, scalable, and resilient microservices capable of integrating modern AI.",
    },
]

export function FAQSection() {
    return (
        <section className="py-24 bg-zinc-50 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about our engineering process and enterprise solutions.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 shadow-sm">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0 border-gray-100 py-2">
                            <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-blue-600 transition-colors py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
