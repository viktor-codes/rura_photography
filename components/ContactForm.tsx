"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type FormState = {
  name: string;
  email: string;
  propertyType: string;
  packageType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  propertyType: "",
  packageType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof FormState,
    value: string,
  ): void => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!values.propertyType) {
      nextErrors.propertyType = "Select a property type.";
    }
    if (!values.packageType) {
      nextErrors.packageType = "Select a package.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Tell me a bit about the property.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative flex min-h-[80vh] items-center bg-[#0e0e0c] px-8 py-24 text-page md:px-16 md:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 font-heading text-[20vw] font-light tracking-[0.2em] text-[rgba(250,250,248,0.03)]"
      >
        BOOK
      </span>
      <div className="relative z-10 max-w-xl">
        <Reveal className="inline-block">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
            Get in touch
          </p>
        </Reveal>
        <Reveal>
          <h2
            id="contact-heading"
            className="mt-2 font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight"
          >
            Let&apos;s shoot
            <br />
            your next listing.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-md text-[0.85rem] leading-relaxed text-[rgba(250,250,248,0.6)]">
            Based in Dublin. Available across Leinster and nationwide for the
            right project.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid max-w-xl grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="border-b border-[rgba(250,250,248,0.2)] bg-transparent pb-2 text-[0.9rem] outline-none transition-colors focus:border-accent"
                placeholder="Sarah Murphy"
                value={values.name}
                onChange={(event) => handleChange("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="text-[0.75rem] text-red-300"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border-b border-[rgba(250,250,248,0.2)] bg-transparent pb-2 text-[0.9rem] outline-none transition-colors focus:border-accent"
                placeholder="sarah@agency.ie"
                value={values.email}
                onChange={(event) => handleChange("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="text-[0.75rem] text-red-300"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="propertyType"
                className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]"
              >
                Property type
              </label>
              <select
                id="propertyType"
                className="border-b border-[rgba(250,250,248,0.2)] bg-transparent pb-2 text-[0.9rem] outline-none transition-colors focus:border-accent"
                value={values.propertyType}
                onChange={(event) =>
                  handleChange("propertyType", event.target.value)
                }
                aria-invalid={Boolean(errors.propertyType)}
                aria-describedby={
                  errors.propertyType ? "propertyType-error" : undefined
                }
              >
                <option value="">Select type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
                <option value="New development">New development</option>
                <option value="Other">Other</option>
              </select>
              {errors.propertyType && (
                <p
                  id="propertyType-error"
                  className="text-[0.75rem] text-red-300"
                >
                  {errors.propertyType}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="packageType"
                className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]"
              >
                Package interest
              </label>
              <select
                id="packageType"
                className="border-b border-[rgba(250,250,248,0.2)] bg-transparent pb-2 text-[0.9rem] outline-none transition-colors focus:border-accent"
                value={values.packageType}
                onChange={(event) =>
                  handleChange("packageType", event.target.value)
                }
                aria-invalid={Boolean(errors.packageType)}
                aria-describedby={
                  errors.packageType ? "packageType-error" : undefined
                }
              >
                <option value="">Select package</option>
                <option value="Listing Photography — from €250">
                  Listing Photography — from €250
                </option>
                <option value="Premium Property Pack — from €550">
                  Premium Property Pack — from €550
                </option>
                <option value="Agent Partnership — custom">
                  Agent Partnership — custom
                </option>
              </select>
              {errors.packageType && (
                <p
                  id="packageType-error"
                  className="text-[0.75rem] text-red-300"
                >
                  {errors.packageType}
                </p>
              )}
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(250,250,248,0.6)]"
              >
                Tell me about the property
              </label>
              <textarea
                id="message"
                className="h-28 resize-none border-b border-[rgba(250,250,248,0.2)] bg-transparent pb-2 text-[0.9rem] outline-none transition-colors focus:border-accent"
                placeholder="Location, size, preferred date..."
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-[0.75rem] text-red-300"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2 mt-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <button
                type="submit"
                className={`px-10 py-3 text-[0.75rem] uppercase tracking-[0.15em] transition-transform ${
                  submitted
                    ? "bg-emerald-500 text-white"
                    : "bg-accent text-page-foreground hover:-translate-y-px hover:bg-[#d4b882]"
                }`}
              >
                {submitted ? "Sent ✓" : "Send enquiry"}
              </button>
              <p className="text-[0.75rem] text-[rgba(250,250,248,0.6)]">
                or email{" "}
                <a
                  href="mailto:hello@viktorrura.ie"
                  className="border-b border-[rgba(250,250,248,0.4)] text-[rgba(250,250,248,0.8)] transition-colors hover:text-page"
                >
                  hello@viktorrura.ie
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

