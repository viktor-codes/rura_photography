"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How fast will I receive the photos?",
    answer:
      "I provide a guaranteed 24-hour turnaround. You will receive a link to your professional gallery the very next day after the shoot.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "I am based in Dublin and cover the entire Greater Dublin Area. I am also available for projects across Leinster and nationwide upon request.",
  },
  {
    question: "Do you provide floor plans or video?",
    answer:
      "Yes, I offer floor plans and cinematic video walkthroughs as part of my Premium Property Pack. Check the Services section for details.",
  },
  {
    question: "How many photos will I get?",
    answer:
      "Depending on the package and property size, you typically receive between 15 to 40 high-end edited images optimized for Daft.ie and MyHome.ie.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "For exterior shots, I offer Blue Sky Replacement in post-production at no extra cost, so your listing looks great even on a typical Irish rainy day.",
  },
  {
    question: "Who owns the rights to the photos?",
    answer:
      "The photography fee includes a commercial license for the duration of the property listing (sale or rent).",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-page px-8 py-24 md:px-16 md:py-32"
    >
      <Reveal className="inline-block">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
          FAQ
        </p>
      </Reveal>
      <Reveal>
        <h2
          id="faq-heading"
          className="mt-2 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight"
        >
          Answers for agents
          <br />
          before we book.
        </h2>
      </Reveal>

      <div className="mt-10">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-trigger-${index}`;

          return (
            <div key={item.question} className="border-t border-black/10">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(index)}
              >
                <span className="flex-1 font-sans text-[0.9rem] leading-relaxed">
                  {item.question}
                </span>
                <span className="faq-icon relative ml-4 h-4 w-4 shrink-0">
                  <span
                    className="faq-icon-line faq-icon-line--horizontal"
                    aria-hidden="true"
                  />
                  <span
                    className="faq-icon-line faq-icon-line--vertical"
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`faq-panel ${
                  isOpen ? "faq-panel--open" : ""
                } text-[0.85rem] leading-relaxed text-grey`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

