"use client"

import Image from "next/image"

export function PreFaqCtaSection() {
    return (
        <section className="bg-black pb-24">
            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-300/70 bg-[#efefef] text-slate-900">
                    <div className="grid items-stretch lg:grid-cols-[1fr_1.15fr]">
                        <div className="z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700/85">
                                Partner With DigitioHub
                            </p>
                            <h2 className="max-w-xl text-4xl font-bold leading-tight text-blue-700 md:text-5xl">
                                Have an Idea?
                                <br />
                                Let&apos;s Build It Together.
                            </h2>
                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-700">
                                From discovery and product strategy to launch and scale, our team works with you
                                end-to-end to turn ambitious ideas into dependable digital products.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Start Your Journey
                                </a>
                            </div>
                        </div>

                        <div className="relative min-h-[360px] lg:min-h-[560px]">
                            <div className="absolute -right-24 -top-10 h-[280px] w-[540px] rotate-[-14deg] rounded-[7rem] bg-[#1155ff]/20 blur-0" />
                            <div className="absolute -right-14 bottom-12 h-[260px] w-[540px] rotate-[18deg] rounded-[7rem] bg-[#2f6bff]/16 blur-0" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,#f7ef00_0%,#f7ef00_28%,transparent_29%),radial-gradient(circle_at_56%_58%,#f7ef00_0%,#f7ef00_34%,transparent_35%)]" />

                            <div className="absolute inset-x-6 bottom-0 top-8 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/30">
                                <Image
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                                    alt="Team collaboration and project planning"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
