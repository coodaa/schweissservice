import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import NavbarNew from "../components/NavbarNew";
import FooterNew from "../components/FooterNew";
import CookieConsentBar from "../components/CookieConsentBar";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
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

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#b02c2d" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <NavbarNew />
          <main>{children}</main>
          <FooterNew />
          <CookieConsentBar />
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
