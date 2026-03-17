"use client";

import { Marquee } from "@/components/ui/marquee";

const brandNames = [
  "IKEA",
  "Google",
  "BCG",
  "KFC",
  "TGI Fridays",
  "Moo",
  "Krispy Kreme",
  "Hardee's",
  "Bajaj Allianz",
  "Domino's",
  "SuperShe",
  "Wimpy",
  "Empire Hotels",
  "jobget",
  "Asian Bank",
  "American Express",
  "Americana",
  "Honda",
  "The Body Shop",
  "6thStreet.com",
];

const mobileRowOne = brandNames.slice(0, 10);
const mobileRowTwo = brandNames.slice(10, 20);

function LogoChip({ name }: { name: string }) {
  return (
    <div className="flex h-14 min-w-37.5 items-center justify-center rounded-xl border border-white/10 bg-white/2 px-5 text-center text-sm font-semibold tracking-wide text-zinc-300 md:h-18 md:min-w-47.5 md:text-base">
      {name}
    </div>
  );
}

export function TrustedLogosSection() {
  return (
    <section className="w-full bg-black py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight text-white md:text-5xl">
          Trusted by the Disruptors and Fortune 500s
        </h2>

        <div className="mt-10 md:hidden">
          <Marquee className="[--duration:28s] [--gap:12px] px-0">
            {mobileRowOne.map((name) => (
              <LogoChip key={`m1-${name}`} name={name} />
            ))}
          </Marquee>
          <Marquee reverse className="mt-3 [--duration:28s] [--gap:12px] px-0">
            {mobileRowTwo.map((name) => (
              <LogoChip key={`m2-${name}`} name={name} />
            ))}
          </Marquee>
        </div>

        <div className="mt-14 hidden grid-cols-5 gap-x-10 gap-y-10 md:grid">
          {brandNames.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center text-center text-xl font-semibold tracking-wide text-zinc-400"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

