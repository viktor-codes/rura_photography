"use client";

import Image from "next/image";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export function Hero() {
  const { ref: labelRef, isVisible: labelVisible } =
    useRevealOnScroll<HTMLParagraphElement>();
  const { ref: titleRef, isVisible: titleVisible } =
    useRevealOnScroll<HTMLHeadingElement>();
  const { ref: subRef, isVisible: subVisible } =
    useRevealOnScroll<HTMLParagraphElement>();
  const { ref: ctaRef, isVisible: ctaVisible } =
    useRevealOnScroll<HTMLAnchorElement>();

  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden bg-page text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/house-hero.webp"
          alt="Luxury living room interior"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-linear-to-b from-black via-black/50 to-black/95" /> */}

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/70" />
      </div>

      <div className="relative z-10 w-full px-8 pb-24 md:px-16 md:pb-32">
        <div className="max-w-3xl space-y-6">
          <p
            ref={labelRef}
            className={`reveal font-sans text-[0.7rem] uppercase tracking-[0.25em] text-accent ${
              labelVisible ? "reveal--visible" : ""
            }`}
          >
            Property Photography · Dublin, Ireland
          </p>
          <h1
            id="hero-heading"
            ref={titleRef}
            className={`reveal font-serif text-[clamp(3.5rem,7vw,6rem)] font-light leading-none text-white ${
              titleVisible ? "reveal--visible" : ""
            }`}
          >
            Every space
            <br />
            deserves to be
            <br />
            <em className="not-italic text-accent">seen right.</em>
          </h1>
          <p
            ref={subRef}
            className={`reveal max-w-md text-[0.85rem] leading-relaxed tracking-[0.05em] text-[rgba(250,250,248,0.6)] ${
              subVisible ? "reveal--visible" : ""
            }`}
          >
            Full-frame property photography that sells faster and commands
            better prices. Professional, clean, delivered fast.
          </p>
          <a
            ref={ctaRef}
            href="#contact"
            className={`reveal inline-flex items-center gap-4 text-[0.75rem] uppercase tracking-[0.15em] text-white  transition-all hover:gap-6 ${
              ctaVisible ? "reveal--visible" : ""
            }`}
          >
            Book a shoot
          </a>
        </div>
      </div>

      <div className="hidden pointer-events-none absolute bottom-16 right-16 z-10 md:flex flex-col items-center gap-2">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(250,250,248,0.4)] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="h-16 w-px origin-top bg-linear-to-b from-accent to-transparent animate-[scrollline_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
