import React, { useEffect } from "react";
import { useCookieConsent } from "../hooks/useCookieConsent";

function MapComponent() {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  const handleLoadMap = () => {
    updateCookieConsent(true);
  };

  useEffect(() => {
    if (cookieConsent) {
      handleLoadMap();
    }
  }, [cookieConsent]);

  return (
    <div>
      {!cookieConsent && (
        <div style={{ backgroundColor: "gray", width: "100%", height: "100%" }}>
          <p>
            Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von
            Google.
          </p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mehr erfahren
          </a>
          <button onClick={handleLoadMap}>Karte laden</button>
        </div>
      )}
      {cookieConsent && (
        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9578.832482668065!2d7.4592978!3d53.2350412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c4e5c8057b22a9!2sWagemann%20Schwei%C3%9F%20Service%20UG!5e0!3m2!1sen!2sde!4v1625060605309!5m2!1sen!2sde"
        ></iframe>
      )}
    </div>
  );
}

export default MapComponent;
