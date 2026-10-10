import localFont from "next/font/local";
import "./globals.css";
import Providers from "../components/Providers";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ConsentBanner from "../components/ConsentBanner";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

// Archivo als eine variable Datei (Gewicht und Breite), lokal ausgeliefert.
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const TITLE = "Technische Gase und Schweißservice in Leer | Wagemann Schweiß-Service";
const DESCRIPTION =
  "Technische Gase in Leer (Ostfriesland): Acetylen, Argon, CO₂, Mischgas, Propan, Stickstoff und Wasserstoff. Dazu Schweißarbeiten, Schweißgeräte und Zubehör. Geöffnet Mo–Do 9–12 Uhr.";

export const metadata = {
  metadataBase: new URL("https://www.wagemann-schweiss-service.de"),
  title: {
    default: TITLE,
    template: "%s | Wagemann Schweiß-Service",
  },
  description: DESCRIPTION,
  keywords: [
    "technische Gase Leer",
    "Schweißgas Leer",
    "Gasflaschen Leer",
    "Propangas Leer",
    "Argon",
    "Acetylen",
    "Schweißarbeiten Leer",
    "Schweißservice Ostfriesland",
    "Wagemann",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Wagemann Schweiß-Service",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Wagemann Schweiß-Service: Technische Gase und Schweißservice in Leer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/img/og.jpg"],
  },
};

export const viewport = {
  themeColor: "#14212b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={archivo.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <ConsentBanner />
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
