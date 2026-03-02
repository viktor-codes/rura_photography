import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid gap-10 bg-page px-8 py-24 md:grid-cols-2 md:gap-20 md:px-16 md:py-32"
    >
      <Reveal className="relative aspect-3/4 overflow-hidden md:aspect-3/4">
        <div className="absolute inset-0 border border-black/10" />
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=85"
          alt="Viktor Rura at work with camera"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-full w-full object-cover grayscale transition duration-700 ease-out hover:scale-105 hover:grayscale-0"
        />
      </Reveal>

      <div className="md:pr-8">
        <Reveal className="inline-block">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
            About
          </p>
        </Reveal>
        <Reveal>
          <h2
            id="about-heading"
            className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight"
          >
            Precision.
            <br />
            Not just pixels.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-[1rem] leading-relaxed text-[#444440]">
            I&apos;m Viktor — a photographer and fullstack developer based in
            Dublin. I shoot property with a technical eye: every frame is
            composed for how it will actually be seen — on screen, in listings,
            on social.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-4 text-[1rem] leading-relaxed text-[#444440]">
            Sony A7M3 full-frame camera, professional lighting, and a 17–300mm
            lens range means I can work any space — from compact city
            apartments to large country properties — without compromise.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-3">
          {[
            "Sony A7M3 · Full-frame sensor",
            "17mm–300mm lens coverage",
            "Professional LED lighting",
            "Gimbal stabilisation for video",
            "Based in Dublin, available nationwide",
          ].map((item) => (
            <Reveal key={item}>
              <div className="flex items-center gap-3 text-[0.8rem] tracking-[0.05em] text-grey">
                <span className="inline-block h-px w-5 shrink-0 bg-accent" />
                <span>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

