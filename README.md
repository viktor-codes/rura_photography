# Rura Photography

**Premium property photography — Midlands & Dublin, Ireland**

**Live site:** [ruraphotography.vercel.app](https://ruraphotography.vercel.app/)

A single-page marketing site for a real-estate photographer: portfolio grid, services, process, FAQ, and a contact form wired to email via [Resend](https://resend.com). Built as a fast, accessible Next.js app with Tailwind CSS v4.

---

## Preview

Click through to the **[live deployment](https://ruraphotography.vercel.app/)** for the full experience.

Hero screenshot (add your own file as `docs/preview-hero.png`

![Hero section — placeholder until docs/preview-hero.png is added](docs/hero-screenshot.png)

---

## Highlights

- **Performance** — Next.js App Router, static page generation, optimised `next/image` assets
- **UX** — Fixed header, smooth anchor navigation with scroll padding, mobile menu, reveal-on-scroll sections
- **Forms** — Client-side validation; server-side checks against shared option lists (`lib/contactEnquiry.ts`)
- **Content** — Centralised copy and metadata in `lib/siteCopy.ts` for consistent region messaging

---

## Tech stack

| Area      | Choice                             |
| --------- | ---------------------------------- |
| Framework | Next.js 16 (App Router)            |
| UI        | React 19, Tailwind CSS 4           |
| Language  | TypeScript (strict)                |
| Email API | Resend                             |
| Icons     | Lucide React                       |
| Delight   | canvas-confetti on successful send |

---

## Getting started

**Requirements:** Node.js 20+ (recommended), npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Development server      |
| `npm run build` | Production build        |
| `npm run start` | Run production server   |
| `npm run lint`  | ESLint (Next.js config) |

---

## Environment variables

Create **`.env.local`** in the project root (never commit it). The contact API needs:

| Variable             | Required | Description                                                                              |
| -------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Yes\*    | Resend API key                                                                           |
| `CONTACT_TO_EMAIL`   | Yes\*    | Inbox that receives enquiries                                                            |
| `CONTACT_FROM_EMAIL` | No       | `From:` address (must be allowed in Resend). Defaults to `no-reply@rura-photography.com` |

\*Without these, `POST /api/contact` returns `500` with a clear JSON error; the rest of the site still runs.

---

## Project layout

```
app/
  api/contact/route.ts   # Resend email handler
  layout.tsx             # Fonts, metadata
  page.tsx               # Composes all sections
  globals.css            # Tokens, animations, FAQ styles
components/              # Header, Hero, sections, Footer, Logo, …
hooks/useRevealOnScroll.ts
lib/
  contactEnquiry.ts      # Form payload type + select options + server validation helpers
  navigation.ts          # Primary nav items
  siteCopy.ts            # Taglines, SEO strings, optional social URLs
docs/                    # Optional README screenshots (e.g. preview-hero.png)
public/                  # Images, favicon, logo SVG
```

---

## Deployment

Production example: **[ruraphotography.vercel.app](https://ruraphotography.vercel.app/)** (Vercel).

Deploy on [Vercel](https://vercel.com) (or any Node host that supports Next.js). Add the same environment variables in the project settings. Ensure your Resend domain/`From` address is verified.

---

## Licence

Private project — all rights reserved unless otherwise stated.
