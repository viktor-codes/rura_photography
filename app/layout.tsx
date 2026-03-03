import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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
  title: "Viktor Rura — Property Photography Dublin",
  description:
    "Premium real estate photography in Dublin and across Ireland. Full-frame interiors, exteriors, and media optimised for Daft.ie, MyHome.ie and high-converting listings.",
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
  children: React.ReactNode;
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
