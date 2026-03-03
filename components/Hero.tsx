"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      className="relative flex min-h-screen overflow-hidden bg-page text-white"
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

      <div className="relative z-10 w-full flex items-end px-8 pb-24 md:px-16 md:pb-32">
        <div className="max-w-5xl space-y-6">
          <p
            ref={labelRef}
            className={`reveal font-sans text-[0.7rem] uppercase tracking-[0.25em] text-accent ${
              labelVisible ? "reveal--visible" : ""
            }`}
          >
            Property Photography · Midlands, Ireland
          </p>
          <h1
            id="hero-heading"
            ref={titleRef}
            className={`reveal font-serif text-[clamp(3.5rem,7vw,6rem)] font-light leading-none text-white ${
              titleVisible ? "reveal--visible" : ""
            }`}
          >
            Property photography
            <br />
            that makes your listings
            <br />
            <em className="not-italic text-accent">stand out.</em>
          </h1>
          <p
            ref={subRef}
            className={`reveal max-w-md text-[0.85rem] leading-relaxed tracking-[0.05em] text-[rgba(250,250,248,0.6)] ${
              subVisible ? "reveal--visible" : ""
            }`}
          >
            Based in the heart of Ireland. Providing clean, high-end visuals and
            24-hour delivery for agents, landlords, and hosts in the Midlands,
            Dublin, and beyond.
          </p>
          <a
            ref={ctaRef}
            href="#contact"
            className={`reveal group inline-flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-3 text-[0.75rem] uppercase tracking-[0.15em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all hover:bg-white/10 hover:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-px active:scale-[0.98] active:shadow-[0_4px_18px_rgba(0,0,0,0.6)] ${
              ctaVisible ? "reveal--visible" : ""
            }`}
          >
            <span className="font-medium">Request availability</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-0.5" />
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
