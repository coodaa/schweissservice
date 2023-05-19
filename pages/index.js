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
        <title>
          Wagemann Schweiß-Service | Technische Gase und Schweißlösungen in
          Ostfriesland
        </title>
        <meta
          name="description"
          content="Wagemann Schweiß-Service ist Ihr kompetenter Partner für technische Gase und professionelle Schweißlösungen im Herzen von Ostfriesland."
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
              alt="Logo von Wagemann Schweiß-Service"
              width={450}
              height={200}
              layout="responsive"
            />
            <h2>
              Ihr kompetenter Partner für technische Gase und Schweißlösungen im
              Herzen Ostfrieslands.
            </h2>
          </div>
          <div
            className={styles.backgroundImage}
            alt="Hintergrundbild von Wagemann Schweiß-Service"
          />
        </div>
      </div>

      <div className={styles.serviceSection} id="serviceSection">
        <div className={styles.serviceGas}>
          <div className={styles.imageGas} />
          <div className={styles.textService}>
            <div>
              <h1 className={styles.text}>25+</h1>
              <p className={styles.subtext}>Jahre Erfahrung</p>
            </div>
            <div>
              <h1 className={styles.text}>41+</h1>
              <p className={styles.subtext}>Gase im Angebot</p>
            </div>
            <div>
              <h1 className={styles.text}>200+</h1>
              <p className={styles.subtext}>Artikel</p>
            </div>
            <div>
              <h1 className={styles.text}>230+</h1>
              <p className={styles.subtext}>Quadratmeter Verkaufsfläche</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.historySection} id="historySection">
        <div className={styles.redHistorySquare}>
          <div className={styles.centerItems}>
            <h2 className={styles.historyLabel}>
              QUALITÄT, ERFAHRUNG UND MAßGESCHNEIDERTE LÖSUNGEN
            </h2>
            <p>
              <span className={styles.historyLabel}>
                Entdecken Sie unsere erstklassigen Dienstleistungen: Wir bieten
                Ihnen maßgeschneiderte Lösungen für technische Gase und
                professionelle Schweißarbeiten.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.imageQuality} />
      </div>

      <div className={styles.imageHistory}>
        <div className={styles.overlayText}>
          <h2>HANDWERK</h2>
          <h3>Entstanden im Herzen Ostfriesland</h3>
        </div>
      </div>

      <div className={styles.historySection} id="contactSection">
        <div className={styles.redSquare}>
          <div className={styles.centerItems}>
            <h2>UNSERE</h2>
            <h2>ÖFFNUNGSZEITEN</h2>
            <p>
              <span className={styles.timeLabel}>
                Montag&#8209;&nbsp;Donnerstag:
              </span>
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
        </div>

        <div className={styles.imageLeer} />
      </div>

      <div className={styles.contactSection}>
        <MapComponent showMap={cookieConsent} />
        <div className={styles.redSquare2}>
          <div className={styles.centerItems}>
            <h2>KONTAKT</h2>&nbsp;
            <p>Wagemann Schweiß Service UG</p>
            <p>(haftungsbeschränkt)</p>&nbsp;
            <p>Sägemühlenstraße 89</p>
            <p>26789 Leer (Ostfriesland)</p>
            &nbsp;
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
      </div>

      <div className={styles.imageSheep} />
    </>
  );
}
