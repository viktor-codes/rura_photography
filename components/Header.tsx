"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#portfolio", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Book" },
];

const LEFT_NAV_ITEMS = NAV_ITEMS.slice(0, 3);
const RIGHT_NAV_ITEMS = NAV_ITEMS.slice(3);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-30 bg-white px-8 py-6 md:px-16">
        <div className="mx-auto flex items-center justify-between">
          {/* Mobile logo + label (unchanged layout) */}
          <a
            href="#top"
            className="pointer-events-auto inline-flex items-center gap-3 text-page md:hidden"
          >
            <Image
              src="/house-logo.svg"
              alt="Viktor Rura logo"
              width={32}
              height={32}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.15em]">
              rura photography
            </span>
          </a>

          {/* Desktop: left nav */}
          <nav
            aria-label="Primary left"
            className="pointer-events-auto hidden md:block"
          >
            <ul className="flex gap-8 text-[0.75rem] uppercase tracking-[0.12em] text-black">
              {LEFT_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop: centered logo with name on sides */}
          <a
            href="#top"
            className="pointer-events-auto hidden items-center gap-3 text-page md:inline-flex"
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.15em]">
              viktor rura
            </span>
            <Image
              src="/house-logo.svg"
              alt="Viktor Rura logo"
              width={32}
              height={32}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.15em]">
              photography
            </span>
          </a>

          {/* Desktop: right nav */}
          <nav
            aria-label="Primary right"
            className="pointer-events-auto hidden md:block"
          >
            <ul className="flex gap-8 text-[0.75rem] uppercase tracking-[0.12em] text-black">
              {RIGHT_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-[rgba(250,250,248,0.85)] shadow-sm backdrop-blur md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/90 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-3 text-page"
            >
              <Image
                src="/house-logo.svg"
                alt="Viktor Rura logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-heading text-xs font-light uppercase tracking-[0.15em]">
                Viktor Rura
              </span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2 text-[rgba(250,250,248,0.85)] shadow-sm backdrop-blur"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="mt-16 space-y-6 text-[0.9rem] uppercase tracking-[0.2em] text-[rgba(250,250,248,0.9)]"
          >
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-3 text-sm"
                  >
                    <span className="h-px w-6 bg-accent" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[rgba(250,250,248,0.5)]">
            <span>Property Photography · Dublin, Ireland</span>
            <span>Available for bookings</span>
          </div>
        </div>
      </div>
    </>
  );
}
