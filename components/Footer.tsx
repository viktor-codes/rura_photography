import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";
import { SITE_REGION_BYLINE, SITE_SOCIAL_LINKS } from "@/lib/siteCopy";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(250,250,248,0.08)] bg-[#0e0e0c] px-8 py-10 text-[0.7rem] text-[rgba(250,250,248,0.7)] md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-center md:text-left">
          <p className="tracking-[0.08em] text-[rgba(250,250,248,0.5)]">
            © 2025 Viktor Rura Photography · {SITE_REGION_BYLINE}
          </p>
          <p className="text-[0.7rem] text-[rgba(250,250,248,0.5)]">
            Real estate photography for agents, developers, and homeowners.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="order-3 md:order-0">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-[0.14em]">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[rgba(250,250,248,0.7)] transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-2 text-center md:items-end">
          <a
            href="tel:+353871960859"
            className="uppercase tracking-[0.14em] text-[rgba(250,250,248,0.7)] transition-colors hover:text-accent"
          >
            +353 87 196 0859
          </a>
          <a
            href="mailto:ruravictor@gmail.com"
            className="uppercase tracking-[0.14em] text-[rgba(250,250,248,0.7)] transition-colors hover:text-accent"
          >
            ruravictor@gmail.com
          </a>
          {SITE_SOCIAL_LINKS.length > 0 ? (
            <div className="mt-1 flex flex-wrap justify-center gap-4 md:justify-end">
              {SITE_SOCIAL_LINKS.map((item) => (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-[0.14em] text-[rgba(250,250,248,0.6)] transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
