import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = createPageMetadata("contact");

const contactMethods = [
    {
        title: "Email",
        value: "info@digitiohub.in",
        href: "mailto:info@digitiohub.in",
        icon: Mail,
    },
    {
        title: "Phone",
        value: "+91 84839 52398",
        href: "tel:+918483952398",
        icon: Phone,
    },
    {
        title: "Location",
        value: "Vidyavihar (E), Mumbai, Maharashtra",
        href: "https://maps.app.goo.gl/DuKSgAj4cvzqeDUV8",
        icon: MapPin,
    },
];

export default function ContactPage() {
    return (
        <section className="relative overflow-hidden bg-black pt-24 pb-18 text-white md:pt-30 md:pb-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_88%_5%,rgba(248,79,57,0.16),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,8,14,0.95)_0%,rgba(6,8,14,0.72)_36%,rgba(0,0,0,0.96)_100%)]" />

            <div className="relative container mx-auto px-6">
                <div className="grid gap-7">
                    <div>
                        <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                            Contact DigitioHub
                        </p>
                        <h1
                            className="mt-4 max-w-3xl text-pretty font-bold leading-[1.08] tracking-tight"
                            style={{ fontSize: "clamp(1.7rem, 4.4vw, 2.9rem)" }}
                        >
                            Let&apos;s discuss your next digital build.
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                            Share your goals, timeline, and product vision.
                            We&apos;ll come back with the right execution plan
                            and clear next steps.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <ContactForm />

                    <div className="space-y-4">
                        {contactMethods.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target={
                                    item.title === "Location"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    item.title === "Location"
                                        ? "noreferrer"
                                        : undefined
                                }
                                className="group block rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-white/25 hover:bg-white/8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl border border-white/20 bg-black/30 p-2 text-blue-300">
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                                            {item.title}
                                        </p>
                                        <p className="mt-1.5 text-sm font-medium text-white/90 group-hover:text-white md:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        <div className="rounded-2xl border border-white/15 bg-linear-to-b from-white/10 to-white/5 p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                                Prefer a discovery call?
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-white/75 md:text-sm">
                                Share your preferred time window and we will
                                schedule a focused call around your roadmap.
                            </p>
                            <Link
                                href="mailto:info@digitiohub.in?subject=Discovery%20Call%20Request"
                                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 md:text-sm"
                            >
                                Request a Call
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
