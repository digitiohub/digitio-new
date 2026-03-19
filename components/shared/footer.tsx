import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const footerGroups = [
  {
    title: "Quick Links",
    links: [
      { label: "Products", href: "/products" },
      { label: "AI Tech Solutions", href: "/ai-solutions" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industry", href: "/#industries" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/digitiohub", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/digitiohub/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@DigitioHub", icon: Youtube },
];

const contactInfo = [
  { label: "Email", value: "info@digitiohub.in", href: "mailto:info@digitiohub.in" },
  { label: "Phone", value: "+91 84839 52398", href: "tel:+918483952398" },
  {
    label: "Address",
    value:
      "Room No. 520, Bhaskarachraya Building, Somaiya Vidyavihar, Vidyavihar (E), Mumbai, Maharashtra 400077",
    href: "https://maps.app.goo.gl/DuKSgAj4cvzqeDUV8",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />


      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        {/* Desktop: flex, links right, contact info far right; Mobile: stacked */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand & copyright */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image src="/logos/Digi_Logo_Full_Cropped_White.png" alt="DigitioHub Logo" width={160} height={45} className="object-contain" />
            </Link>
            <p className="mt-6 text-sm text-white/55">
              &copy; Copyright DigitioHub 2026. All rights reserved.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-white/45 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            {/* Mobile: add gap before links */}
            <div className="block lg:hidden h-6" />
          </div>

          {/* Socials & Legal: 2-col grid on mobile, side-by-side on desktop */}
          <div>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-8">
              {footerGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h3 className="text-base font-semibold tracking-tight text-white/95">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info: Desktop right, Mobile below */}
          <div className="mt-10 lg:mt-0 lg:text-right">
            <div className="space-y-2">
              <h3 className="text-base font-semibold tracking-tight text-white/95 mb-2">Contact</h3>
              {contactInfo.map((info) => (
                <div key={info.label} className="text-[15px] text-white/70">
                  {/* <span className="font-medium mr-2">{info.label}:</span> */}
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-12 overflow-hidden px-4 pt-6 sm:mt-14 sm:px-0 sm:pt-8">
          <p className="select-none whitespace-nowrap text-center text-[clamp(3.5rem,16vw,5rem)] font-bold leading-[0.98] tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white/16 via-white/8 to-transparent sm:text-[clamp(5rem,19vw,15rem)] sm:leading-[0.85] pb-6">
            DigitioHub
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_50%_at_50%_100%,rgba(255,255,255,0.08),transparent)]" />
    </footer>
  );
}
