import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans, Inter } from "next/font/google";

import "./globals.css";
import "./revamp.css";
import "./revamp-pages.css";
import "./revamp-craft.css";
import "./lab.css";

const labSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-lab", display: "swap" });

const displaySerif = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
  display: "swap"
});

const bodySans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const labelMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  applicationName: "Determina",
  title: {
    default: "Determina by NDETERMINA",
    template: "%s | Determina"
  },
  description:
    "Determina finds AI behavior failures ordinary tests miss, running controlled system-type coverage for recommender, search, and agent systems before launch.",
  metadataBase: new URL("https://determina.dev"),
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Determina",
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1537D7" }]
  },
  openGraph: {
    title: "Determina by NDETERMINA",
    description:
      "Behavioral results and trace-backed launch decisions for recommender, search, and agent systems."
  }
};

export const viewport: Viewport = {
  themeColor: "#eef2f5"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displaySerif.variable} ${bodySans.variable} ${labelMono.variable} ${labSans.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
