import React from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import CookieConsentBar from "../components/CookieConsentBar";
import MapComponent from "../components/MapComponent";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { MdPhone, MdEmail } from "react-icons/md";

export default function Index() {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  const handleAcceptCookies = () => {
    updateCookieConsent(true);
  };

  return (
    <>
      <Head>
        <title>Wagemann Schweiß-Service</title>
        <meta
          name="description"
          content="Beschreibung von Wagemann Schweiß-Service"
        />
        <meta
          name="keywords"
          content="Schweißen, technische Gase, Leer, Ostfriesland, Wagemann"
        />
      </Head>
      <CookieConsentBar onAccept={handleAcceptCookies} />

      <div id="homeSection">
        <div className={styles.main}>
          <div className={styles.redSquareLogo}>
            <Image
              src="/assets/img/logo/logo-full-white.svg"
              alt="Wagemann Schweiß-Service"
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
            alt="Wagemann Schweiß-Service"
          />
        </div>
      </div>
      {/* <div className={styles.main} id="serviceSection">
        <div className={`fadeIn ${styles.serviceContent}`}>
          <Image
            src="/assets/img/pictures/gasflasche.jpg"
            alt="Beschreibung des Bildes"
            width={500}
            height={500}
            layout="responsive"
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
      </div> */}
      <div className={styles.historySection} id="historySection">
        <div className={styles.redSquare}>
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

        <div className={styles.image} />
      </div>

      <div className={styles.contactSection}>
        <MapComponent showMap={cookieConsent} />

        <div className={styles.redSquare2}>
          <h2>KONTAKT</h2>
          <p>Wagemann Schweiß Service UG</p>
          <p>Sägemühlenstraße 89</p>
          <p>26789 Leer (Ostfriesland)</p>
          <p>&nbsp;</p>
          <p>
            <MdPhone
              className={styles.icon}
              size={20}
              style={{ verticalAlign: "middle" }}
            />
            &nbsp;
            <a href="tel:+4904919293713">+49 (0) 491 9293713</a>
          </p>
          <p>
            <MdEmail
              className={styles.icon}
              size={20}
              style={{ verticalAlign: "middle" }}
            />
            &nbsp;
            <a href="mailto:wagemannschweissservice@t-online.de">
              wagemannschweissservice@t-online.de
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
