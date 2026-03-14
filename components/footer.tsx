import Link from "next/link";

const footerGroups = [
  {
    title: "Socials",
    links: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    title: "Register",
    links: ["Sign Up", "Login", "Forgot Password"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-1">
            <Link href="#" className="inline-flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-black">
                <span className="text-base font-black leading-none">D</span>
              </span>
              <span className="text-xl font-semibold tracking-tight">DigitioHub</span>
            </Link>

            <p className="mt-6 text-sm text-white/55">
              &copy; Copyright DigitioHub 2026. All rights reserved.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-base font-semibold tracking-tight text-white/95">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pointer-events-none mt-12 overflow-hidden px-4 pt-6 sm:mt-14 sm:px-0 sm:pt-8">
          <p className="select-none whitespace-nowrap text-center text-[clamp(3.5rem,16vw,5rem)] font-bold leading-[0.98] tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white/16 via-white/8 to-transparent sm:text-[clamp(5rem,19vw,15rem)] sm:leading-[0.85]">
            DigitioHub
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_50%_at_50%_100%,rgba(255,255,255,0.08),transparent)]" />
    </footer>
  );
}
