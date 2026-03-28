"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsent } from "../hooks/useCookieConsent";

const GA_ID = "G-XQHYE2GQZT";

export default function GoogleAnalytics() {
  const { cookieConsent } = useCookieConsent();
  const pathname = usePathname();

  useEffect(() => {
    if (!cookieConsent || typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname, cookieConsent]);

  if (!cookieConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
