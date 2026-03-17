import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    value: "digitiohub@gmail.com",
    href: "mailto:digitiohub@gmail.com",
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
              Share your goals, timeline, and product vision. We&apos;ll come back
              with the right execution plan and clear next steps.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-blue-300/30 bg-linear-to-b from-[#001347] via-[#04297e] to-[#0d5aff] p-5 shadow-[0_35px_90px_rgba(0,68,255,0.25)] md:p-6">
            <h2 className="text-xl font-bold md:text-2xl">Tell us about your project</h2>
            <p className="mt-2 text-xs text-blue-100/90 md:text-sm">
              The more detail you share, the faster we can align on scope.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                  Full Name
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                  />
                </label>
                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                  Work Email
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                  Contact Number
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                  />
                </label>
                <label className="space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                  Company
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="h-10 w-full border-0 border-b border-blue-200/50 bg-transparent text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                  />
                </label>
              </div>

              <label className="block space-y-2 text-xs font-medium uppercase tracking-wide text-blue-100/85">
                Project Brief
                <textarea
                  rows={3}
                  placeholder="What are you building and when do you plan to launch?"
                  className="w-full resize-none border-0 border-b border-blue-200/50 bg-transparent pb-2 text-xs text-white placeholder:text-blue-100/65 focus:border-white focus:outline-none md:text-sm"
                />
              </label>

              <div className="rounded-xl border border-blue-200/40 bg-[#00113a]/45 p-3">
                <div className="flex items-start gap-2.5">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                  <p className="text-xs leading-relaxed text-blue-100/90 md:text-sm">
                    We usually respond within 24 hours, Monday to Saturday, 10:00 AM to 7:00 PM IST.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-blue-100/85 md:text-sm">Fast response, NDA-ready discussion.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-200 md:text-sm"
                >
                  Send Inquiry
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {contactMethods.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Location" ? "_blank" : undefined}
                rel={item.title === "Location" ? "noreferrer" : undefined}
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
                Share your preferred time window and we will schedule a focused
                call around your roadmap.
              </p>
              <Link
                href="mailto:digitiohub@gmail.com?subject=Discovery%20Call%20Request"
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
