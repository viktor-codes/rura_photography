import Image from "next/image";
import { Reveal } from "./Reveal";

const portfolioItems = [
  {
    id: 1,
    src: "/house-1.jpg",
    alt: "Living room interior",
    label: "Dublin 4 · Apartment",
    title: "Ballsbridge Residence",
  },
  {
    id: 2,
    src: "/house-2.jpg",
    alt: "Modern kitchen",
    label: "Dublin 6 · House",
    title: "Ranelagh Family Home",
  },
  {
    id: 3,
    src: "/house-3.jpg",
    alt: "Bedroom interior",
    label: "Dublin 2 · Penthouse",
    title: "City Centre Penthouse",
  },
  {
    id: 4,
    src: "/house-4.jpg",
    alt: "Country house exterior",
    label: "Co. Wicklow · Country House",
    title: "Wicklow Retreat",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-light px-8 py-24 md:px-16 md:py-32"
    >
      <header className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal className="inline-block">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
              Selected work
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="portfolio-heading"
              className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight text-page-foreground"
            >
              Properties that
              <br />
              speak for themselves.
            </h2>
          </Reveal>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {portfolioItems.map((item, index) => {
          const layoutClasses =
            index === 0
              ? "col-span-12 md:col-span-7 md:row-span-1 aspect-[16/10]"
              : index === 1
                ? "col-span-12 md:col-span-5 md:row-span-1 aspect-[4/5]"
                : index === 2
                  ? "col-span-12 md:col-span-4 md:row-span-1 aspect-[4/3]"
                  : "col-span-12 md:col-span-8 md:row-span-1 aspect-[16/9]";

          return (
            <Reveal
              key={item.id}
              className={`relative overflow-hidden bg-black ${layoutClasses}`}
            >
              <article>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105 hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]">
                    {item.label}
                  </p>
                  <p className="font-heading text-[1.3rem] font-light text-page">
                    {item.title}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
