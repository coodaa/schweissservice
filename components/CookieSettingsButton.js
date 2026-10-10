"use client";

import { useCookieConsent } from "../hooks/useCookieConsent";

export default function CookieSettingsButton({ className = "" }) {
  const { resetCookieConsent } = useCookieConsent();
  return (
    <button type="button" onClick={resetCookieConsent} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
