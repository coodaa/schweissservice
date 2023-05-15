// CookieConsentBar.js

import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBar({ onAccept }) {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="CookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      onAccept={onAccept}
    >
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern
      und den Benutzern zusätzliche Funktionen bereitzustellen.
    </CookieConsent>
  );
}
