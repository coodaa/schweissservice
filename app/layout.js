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

export const metadata = {
  metadataBase: new URL("https://www.wagemann-schweiss-service.de"),
  title: {
    default: "Wagemann Schweiß-Service | Technische Gase & Schweißlösungen in Ostfriesland",
    template: "%s | Wagemann Schweiß-Service",
  },
  description:
    "Wagemann Schweiß-Service ist Ihr kompetenter Partner für technische Gase und professionelle Schweißlösungen im Herzen von Ostfriesland.",
  keywords: ["Schweißen", "technische Gase", "Leer", "Ostfriesland", "Wagemann"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Wagemann Schweiß-Service",
    title: "Wagemann Schweiß-Service | Technische Gase & Schweißlösungen",
    description:
      "Ihr Stützpunkthändler für technische Gase & maßgeschneiderte Schweißlösungen in Ostfriesland.",
    images: [
      {
        url: "/assets/img/pictures/quality.webp",
        width: 1200,
        height: 630,
        alt: "Wagemann Schweiß-Service – Qualität in Ostfriesland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagemann Schweiß-Service | Technische Gase & Schweißlösungen",
    description:
      "Ihr Stützpunkthändler für technische Gase & maßgeschneiderte Schweißlösungen in Ostfriesland.",
    images: ["/assets/img/pictures/quality.webp"],
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
