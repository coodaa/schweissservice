"use client";

import { CookieConsentProvider } from "../hooks/useCookieConsent";

export default function Providers({ children }) {
  return <CookieConsentProvider>{children}</CookieConsentProvider>;
}
