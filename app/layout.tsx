import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Evidpath by NDETERMINA",
    template: "%s | Evidpath"
  },
  description:
    "Evidpath finds AI behavior failures ordinary tests miss, running controlled domain coverage for recommender, search, and agent systems before launch.",
  metadataBase: new URL("https://website.ndetermina.com"),
  openGraph: {
    title: "Evidpath by NDETERMINA",
    description:
      "Behavioral evidence and trace-backed launch decisions for recommender, search, and agent systems."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const saved = localStorage.getItem("evidpath-theme");
                const theme = saved === "light" || saved === "dark" ? saved : "light";
                document.documentElement.dataset.theme = theme;
              } catch {
                document.documentElement.dataset.theme = "light";
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
