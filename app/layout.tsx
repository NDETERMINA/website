import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Determina by NDETERMINA",
    template: "%s | Determina"
  },
  description:
    "Determina finds AI behavior failures ordinary tests miss, running controlled domain coverage for recommender, search, and agent systems before launch.",
  metadataBase: new URL("https://website.ndetermina.com"),
  openGraph: {
    title: "Determina by NDETERMINA",
    description:
      "Behavioral results and trace-backed launch decisions for recommender, search, and agent systems."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const saved = localStorage.getItem("determina-theme");
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
