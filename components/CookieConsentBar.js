import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "../styles/CookieConsentBar.module.css";
import ReactGA from 'react-ga';

export default function CookieConsentBar({ onAccept }) {
  const handleAccept = () => {
    // Google Analytics initialisieren, wenn Cookies akzeptiert werden
    ReactGA.initialize('G-2FVK4ZXYNM');
    onAccept();
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="CookieConsent"
      style={{ background: "#B02B2D" }}
      className={styles.cookieConsent}
      buttonClasses={styles.acceptButton}
      expires={150}
      onAccept={handleAccept} // Verwenden Sie hier handleAccept statt onAccept
    >
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern
      und den Benutzern zusätzliche Funktionen bereitzustellen.
    </CookieConsent>
  );
}
