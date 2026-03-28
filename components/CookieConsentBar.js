"use client";

import CookieConsent from "react-cookie-consent";
import { useCookieConsent } from "../hooks/useCookieConsent";

export default function CookieConsentBar() {
  const { updateCookieConsent } = useCookieConsent();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="CookieConsent"
      expires={150}
      onAccept={() => updateCookieConsent(true)}
      style={{
        background: "#18181b",
        borderTop: "1px solid #3f3f46",
        fontSize: "0.875rem",
        alignItems: "center",
      }}
      buttonStyle={{
        background: "#b02c2d",
        color: "#fff",
        fontSize: "0.8rem",
        fontWeight: "600",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.6rem 1.4rem",
        borderRadius: "0",
        margin: "0 1rem",
      }}
      contentStyle={{ margin: "0.75rem 1rem" }}
    >
      Diese Website verwendet Cookies für Google Analytics und Google Maps. Ihre Daten werden erst nach Zustimmung erhoben.
    </CookieConsent>
  );
}
