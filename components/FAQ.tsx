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
      "For standard listings I provide a guaranteed 24-hour turnaround on business days. You receive a link to your professional gallery the very next day after the shoot. Same-day delivery can usually be arranged on request.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "I am based in the heart of the Midlands, allowing me to easily serve Westmeath, Offaly, Laois, and Longford, as well as regular trips to Dublin and nationwide.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Standard listing photography starts from €250, premium photo + video packages from €550, and ongoing agency partnerships are quoted based on volume. Check the Services section for a breakdown and then reach out for a tailored quote if you have multiple properties.",
  },
  {
    question:
      "Do you work with short-term rentals such as Airbnb or Booking.com?",
    answer:
      "Yes. I regularly shoot for short-term rentals and serviced accommodation. We focus on details that perform well on booking platforms — light, warmth, and the key amenities guests care about most.",
  },
  {
    question: "How should I prepare the property?",
    answer:
      "Ideally the property is clean, decluttered, and ready as if for a viewing: worktops cleared, bins hidden, lights working, beds made, and outside areas tidied. I can share a simple prep checklist ahead of the shoot, and I will make small adjustments on site where needed.",
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
      "For exterior shots, I offer Blue Sky Replacement in post-production at no extra cost, so your listing looks great even on a typical Irish rainy day. If conditions are extremely poor, we can also reschedule exteriors while still capturing interiors.",
  },
  {
    question: "Who owns the rights to the photos?",
    answer:
      "The photography fee includes a commercial licence for marketing the specific property across listing portals, your website, and social media for the duration of the sale or rental campaign. If you need broader usage, we can agree this in advance.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "I understand that plans change. Please let me know as soon as possible — there is no fee for weather-related rescheduling. Very late cancellations on the day of the shoot may be subject to a fee, especially for larger bookings.",
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
