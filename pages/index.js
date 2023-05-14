import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import ContactMap from "./components/maps/ContactMap";

export default function Index() {
  const [ScrollReveal, setScrollReveal] = useState(null);

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
      <div className={styles.contactSection} id="contactSection">
        <div className={styles.map}>
          <ContactMap />
        </div>
        <div className={styles.redSquare}>
          <h2>KONTAKT</h2>
          <p>Wagemann Schweiß Service UG</p>
          <p>Sägemühlenstraße 89</p>
          <p>26789 Leer (Ostfriesland)</p>
          <p>Telefon: +49 (0)491 9293713</p>
          <p>Email: wagemannschweissservice@t-online.de</p>
        </div>
      </div>
      ;
    </>
  );
}
