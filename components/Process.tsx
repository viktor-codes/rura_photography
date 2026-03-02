import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "You book online",
    description:
      "Fill the form below. I'll confirm within a few hours and lock in your date.",
  },
  {
    number: "02",
    title: "I arrive & shoot",
    description:
      "Usually 1–2 hours on site. I handle setup, lighting, and every angle.",
  },
  {
    number: "03",
    title: "Edit & deliver",
    description:
      "Photos professionally edited and delivered via download link within 24 hours.",
  },
  {
    number: "04",
    title: "You go live",
    description:
      "Upload to Daft, MyHome, or wherever — ready to use immediately.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-light px-8 py-24 md:px-16 md:py-32"
    >
      <Reveal className="inline-block">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
          How it works
        </p>
      </Reveal>
      <Reveal>
        <h2
          id="process-heading"
          className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight"
        >
          Four steps
          <br />
          from brief to live.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-4 md:gap-12">
        {steps.map((step, index) => (
          <Reveal key={step.number}>
            <article className="relative">
              <div className="font-heading text-[2.5rem] font-light text-light">
                {step.number}
              </div>
              <h3 className="mt-2 text-[0.85rem] font-medium uppercase tracking-[0.05em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-grey">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <span className="pointer-events-none absolute -right-6 top-5 hidden h-px w-10 bg-linear-to-r from-accent to-transparent md:block" />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
