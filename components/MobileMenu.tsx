import Image from "next/image";
import { X } from "lucide-react";
import type { NavItem } from "@/lib/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-20 bg-black/90 backdrop-blur-md transition-opacity duration-300 md:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-full flex-col px-6 py-3">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={onClose}
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
            onClick={onClose}
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
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
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
  );
}
