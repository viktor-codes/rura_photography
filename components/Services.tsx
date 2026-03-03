import { Reveal } from "./Reveal";

const services = [
  {
    id: 1,
    number: "01",
    name: "Listing\nPhotography",
    description:
      "Professional interior and exterior photography for sales and rentals. Optimised for Daft.ie, MyHome.ie, MyHome.ie and major portals.",
    price: "From €250",
    includes: [
      "Up to 25 edited images",
      "Wide & detail shots",
      "24h delivery",
      "Web & print resolution",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Premium\nProperty Pack",
    description:
      "Photography, twilight exteriors, and a short video walkthrough. Ideal for high-value listings and new developments.",
    price: "From €550",
    includes: [
      "40+ edited images",
      "Twilight / dusk exterior",
      "60–90 sec video tour",
      "Social media cuts",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Agent\nPartnership",
    description:
      "Monthly retainer for estate agencies and developers. Consistent quality across all listings, priority booking, and simplified billing.",
    price: "Custom pricing",
    includes: [
      "Dedicated slots each week",
      "Consistent editing style",
      "Priority turnaround",
      "Monthly invoice",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#0e0e0c] px-8 py-24 text-white md:px-16 md:py-32"
    >
      <Reveal className="inline-block">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
          What I offer
        </p>
      </Reveal>
      <Reveal>
        <h2
          id="services-heading"
          className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight text-white"
        >
          Simple packages.
          <br />
          No surprises.
        </h2>
      </Reveal>

      <div className="mt-16 grid border border-white/10 md:grid-cols-3">
        {services.map((service) => (
          <Reveal
            key={service.id}
            className="border-b border-white/10 px-8 py-12 transition-colors last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0 hover:bg-white/5"
          >
            <article>
              <p className="font-heading text-[0.8rem] tracking-widest text-accent">
                {service.number}
              </p>
              <h3 className="mt-6 whitespace-pre-line font-heading text-[1.6rem] font-light leading-snug">
                {service.name}
              </h3>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-[rgba(250,250,248,0.6)]">
                {service.description}
              </p>
              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.12em] text-accent">
                {service.price}
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[0.78rem] text-[rgba(250,250,248,0.5)]"
                  >
                    <span className="inline-block h-px w-3 shrink-0 bg-accent/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
