import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import {
  SITE_PAGE_DESCRIPTION,
  SITE_PAGE_TITLE,
} from "@/lib/siteCopy";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_PAGE_TITLE,
  description: SITE_PAGE_DESCRIPTION,
  icons: {
    icon: [
      {
        url: "/house-favicon.svg?v=1",
        type: "image/svg",
      },
    ],
    shortcut: "/house-favicon.svg?v=1",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-page text-page antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
