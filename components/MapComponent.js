import React, { useEffect, useCallback } from "react";
import { useCookieConsent } from "../hooks/useCookieConsent";
import styles from "../styles/MapComponent.module.css";

function MapComponent() {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  const handleLoadMap = useCallback(() => {
    updateCookieConsent(true);
  }, [updateCookieConsent]);

  useEffect(() => {
    if (cookieConsent) {
      handleLoadMap();
    }
  }, [cookieConsent, handleLoadMap]);

  return (
    <div className={styles.mapContainer}>
      {!cookieConsent && (
        <div>
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
          className={styles.iframe}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9555.999632641615!2d7.45894!3d53.21785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b64d95cb5d13f5%3A0x900587c6966f4882!2sWagemann%20Schwei%C3%9F%20Service%20UG%20(haftungsbeschr%C3%A4nkt)!5e0!3m2!1sde!2sde!4v1684187422005!5m2!1sde!2sde"
        ></iframe>
      )}
    </div>
  );
}

export default MapComponent;
