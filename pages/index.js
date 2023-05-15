import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import CookieConsentBar from "../components/CookieConsentBar";
import MapComponent from "../components/MapComponent";

export default function Index() {
  const [showMap, setShowMap] = useState(false);

  const handleAcceptCookies = () => {
    setShowMap(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("CookieConsent", "true");
    }
  };

  useEffect(() => {
    // Check if the user has agreed to the cookie policy
    if (typeof window !== "undefined") {
      const cookieConsent = localStorage.getItem("CookieConsent");

      if (cookieConsent === "true") {
        setShowMap(true);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>WAGEMANN SCHWEISS-SERVICE</title>
        <meta
          name="description"
          content="Beschreibung von WAGEMANN SCHWEISS-SERVICE"
        />
        <meta
          name="keywords"
          content="Schweißen, technische Gase, Leer, Ostfriesland, Wagemann"
        />
      </Head>
      <CookieConsentBar onAccept={handleAcceptCookies} />

      <div id="homeSection">
        <div className={styles.main}>
          <div className={styles.redSquare}>
            <Image
              src="/assets/img/logo/logo-full-white.png"
              alt="WAGEMANN SCHWEISS-SERVICE"
              width={350}
              height={150}
            />
            <h2>
              Ihr kompetenter Partner für technische Gase und Schweißlösungen im
              Herzen Ostfrieslands.
            </h2>
          </div>
          <div
            className={styles.backgroundImage}
            alt="WAGEMANN SCHWEISS-SERVICE"
          />
        </div>
      </div>
      <div className={styles.main} id="serviceSection">
        <div className="fadeIn">
          <Image
            src="/assets/img/pictures/gasflasche.jpg"
            alt="Beschreibung des Bildes"
            width={500}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
      </div>
      <div className={styles.historySection} id="historySection">
        <div className={styles.redSquares}>
          <h2>UNSERE ÖFFNUNGSZEITEN</h2>
          <p>
            <span className={styles.timeLabel}>Montag - Donnerstag:</span>{" "}
            <span>08:30 - 11:00 Uhr</span>
          </p>
          <p>
            <span className={styles.timeLabel}>Freitag & Samstag:</span>{" "}
            <span>09:30 - 10:30 Uhr</span>
          </p>
          <p>
            <span className={styles.timeLabel}>Sonntag:</span>{" "}
            <span>Geschlossen</span>
          </p>
        </div>

        <div className={styles.image}>
          <Image
            src="/assets/img/pictures/hafenleer.jpg"
            alt="Hafen Leer"
            width={1000} // Platzhalterwert
            height={500} // Platzhalterwert
          />
        </div>
      </div>

      <div className={styles.contactSection}>
        <MapComponent showMap={showMap} />
        <div className={styles.redSquare}>
          <h2>KONTAKT</h2>
          <p>Wagemann Schweiß Service UG</p>
          <p>Sägemühlenstraße 89</p>
          <p>26789 Leer (Ostfriesland)</p>
          <p>Telefon: +49 (0)491 9293713</p>
          <p>Email: wagemannschweissservice@t-online.de</p>
        </div>
      </div>
    </>
  );
}
