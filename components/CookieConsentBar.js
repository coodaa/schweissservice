import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "../styles/CookieConsentBar.module.css";

export default function CookieConsentBar({ onAccept }) {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="CookieConsent"
      style={{ background: "#B02B2D" }}
      className={styles.cookieConsent}
      buttonClasses={styles.acceptButton}
      expires={150}
      onAccept={onAccept}
    >
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern
      und den Benutzern zusätzliche Funktionen bereitzustellen.
    </CookieConsent>
  );
}
