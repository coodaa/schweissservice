import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Index() {
  const [ScrollReveal, setScrollReveal] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleConfirm = () => {
    setShowMap(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollRevealModule) => {
        setScrollReveal(ScrollRevealModule.default);
        ScrollRevealModule.default().reveal(".fadeIn", {
          duration: 500,
          origin: "bottom",
          distance: "100px",
          delay: 500,
          opacity: 0,
          easing: "ease-in-out",
          viewFactor: 0.2,
        });
      });
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
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
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
        <div className={styles.contactContent}>
          {showMap ? (
            <div className={styles.map}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9578.832482668065!2d7.4592978!3d53.2350412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c4e5c8057b22a9!2sWagemann%20Schwei%C3%9F%20Service%20UG!5e0!3m2!1sen!2sde!4v1625060605309!5m2!1sen!2sde"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              />
            </div>
          ) : (
            <button onClick={handleConfirm} className={styles.confirmButton}>
              Karte anzeigen
            </button>
          )}
          <div className={styles.redSquare}>
            <h2>KONTAKT</h2>
            <p>Wagemann Schweiß Service UG</p>
            <p>Sägemühlenstraße 89</p>
            <p>26789 Leer (Ostfriesland)</p>
            <p>Telefon: +49 (0)491 9293713</p>
            <p>Email: wagemannschweissservice@t-online.de</p>
          </div>
        </div>
      </div>
    </>
  );
}
