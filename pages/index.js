import React from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import CookieConsentBar from "../components/CookieConsentBar";
import MapComponent from "../components/MapComponent";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { MdPhone, MdEmail } from "react-icons/md";
import QuadComponent from "../components/QuadComponent";
import ImageFeature from "../components/ImageFeature";
import ImageFeatureRight from "../components/ImageFeatureRight";
import TextAnimation from "../components/TextAnimation";

export default function Index() {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  const handleAcceptCookies = () => {
    updateCookieConsent(true);
  };

  const quadData = [
    {
      title: "Unser Service",
      text: "Unser Service umfasst eine Vielzahl von Schweißarbeiten. Egal ob kleine Reparaturen oder maßgeschneiderte Projekte – wir sind Ihr zuverlässiger Partner",
    },

    {
      title: "Unsere Gase",
      text: "Acetylon, Alugas, Argon, Ballongas, Diving Sauerstoff, Erdgas, Formiergas, Kohlensäure, Mischgas 82/18, Propan, Stickstoff, Treibgas, Wasserstoff",
    },

    {
      title: "Unsere Artikel",
      text: "Schweißerhandschuhe von Hase Safety Gloves GmbH aus Jever, Schweißgeräte von SR Schweißtechnik GmbH aus Ganderkesee",
    },
    {
      title: "Unser Herz",
      text: "Unser Herz schlägt für technische Gase - unverzichtbare Helfer für Schweiß- und Schneidprozesse. Aber auch für für Schweißgeräte und Arbeitsschutz",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Wagemann Schweiß-Service | Technische Gase und Schweißlösungen in
          Ostfriesland
        </title>
        <meta
          name="description"
          content="Wagemann Schweiß-Service ist Ihr kompetenter Partner für technische Gase und professionelle Schweißlösungen im Herzen von Ostfriesland. Kontaktieren Sie uns für maßgeschneiderte Lösungen."
        />
        <meta
          name="keywords"
          content="Schweißen,Stützpunkt Händler, technische Gase, Leer, Ostfriesland, Wagemann"
        />
        <meta
          property="og:title"
          content="Wagemann Schweiß-Service | Technische Gase und Schweißlösungen in
          Ostfriesland"
        />
        <meta
          property="og:description"
          content="Wagemann Schweiß-Service ist Ihr kompetenter Partner für technische Gase und professionelle Schweißlösungen im Herzen von Ostfriesland. Kontaktieren Sie uns für maßgeschneiderte Lösungen."
        />
        <meta
          property="og:image"
          content="/assets/img/logo/wagemann_logo.svg"
        />
        <meta
          property="og:url"
          content="https://www.wagemann-schweiss-service.de/"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.wagemann-schweiss-service.de/"
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
        <h3 className={styles.headlineRed}>Warum wir</h3>

        <div className={styles.headline}>
          <h1 className={styles.headlineBlack}>
            QUALITÄT, ERFAHRUNG UND MAßGESCHNEIDERTE LÖSUNGEN
          </h1>
          <p className={styles.headlineContent}>
            Willkommen bei Wagemann Schweiß-Service, Ihrem Stützpunkthändler für
            technische Gase in Ostfriesland und Experte für maßgeschneiderte
            Schweißlösungen.
          </p>
        </div>
        <div className={styles.serviceGas}>
          <div className={styles.imageGas} />
          <TextAnimation styles={styles} />
        </div>
      </div>
      <div className={styles.historySection}>
        <div className={styles.redHistorySquare}>
          <div className={styles.centerItems}>
            <h2 className={styles.historyLabel}>
              TOP-SERVICE, FACHKENNTNIS, LÖSUNGEN NACH MAß
            </h2>
            <p>
              <span className={styles.historyLabel}>
                Unsere Mission? Ihre Anforderungen zu übertreffen. Vertrauen Sie
                auf Qualität und Expertise, die Perfektion in jeder Schweißnaht
                garantiert. Mit Wagemann, glänzt Ihr Projekt!
              </span>
            </p>
          </div>
        </div>
        <div className={styles.imageQuality} />
      </div>
      <div className={styles.backgroundWhite}>
        <h3 className={styles.headlineRedCenter}>Unser Service</h3>
        <h1 className={styles.headlineBlackCenter}>
          WELCHE DIENSTE WIR ANBIETEN
        </h1>
      </div>
      <QuadComponent quadData={quadData} />
      <div className={styles.imageHistory}>
        <div className={styles.overlayText}>
          <h2>HANDWERK</h2>
          <h3>Entstanden im Herzen Ostfriesland</h3>
        </div>
      </div>
      <div className={styles.backgroundWhite} id="historySection">
        <h3 className={styles.headlineHistoryRed}>Geschichte</h3>
        <h1 className={styles.headlineHistory}>MANFRED WAGEMANN </h1>

        <ImageFeature
          src="/assets/img/pictures/mannfred.webp"
          alt="Manfred Wagemann ©Ralph Gebler"
          text={
            <>
              <p>
                Im Jahr 1998 gründete Manfred Wagemann den Wagemann
                Schweiß-Service, ein Unternehmen, das sich der Bereitstellung
                von erstklassigen Schweißlösungen und technischen Gasen
                verschrieben hat.
              </p>
              <p>
                Mit einer Vision von Qualität, Zuverlässigkeit und
                Kundenzufriedenheit baute Manfred Wagemann das Unternehmen von
                Grund auf auf und verwandelte es in eine angesehene Adresse für
                Schweiß- und Gasbedürfnisse in Leer, Ostfriesland.
              </p>
              <p>
                Seit seiner Gründung hat sich Wagemann Schweiß-Service
                kontinuierlich weiterentwickelt und angepasst, um die
                Anforderungen einer sich ständig verändernden Branche zu
                erfüllen. Dank des Engagements und der Leidenschaft von Manfred
                Wagemann und seinem Team hat sich das Unternehmen einen Ruf für
                Exzellenz und Innovation erarbeitet.
              </p>
            </>
          }
        />
        <h1 className={styles.headlineHistoryRight}>SUNNA WAGEMANN </h1>

        <ImageFeatureRight
          src="/assets/img/pictures/sunna.webp"
          alt="Sunna Wagemann"
          text={
            <>
              <p>
                Heute, mehr als zwei Jahrzehnte nach seiner Gründung, steht
                Wagemann Schweiß-Service unter der Leitung von Sunna Wagemann.
              </p>
              <p>
                Sunna führt die Tradition ihres Vaters fort, indem sie den
                Kunden weiterhin erstklassige Schweißlösungen, technische Gase
                und einen unübertroffenen Service bietet.
              </p>
              <p>
                Die Werte, die das Unternehmen seit seinen Anfängen leiten, sind
                auch heute noch der Kern unserer Arbeit - wir sind stolz darauf,
                die Vision von Manfred Wagemann in die Zukunft zu tragen.
              </p>
            </>
          }
        />
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
              <span className={styles.timeLabel}>Freitag & Samstag:</span>
              <span>Geschlossen</span>
            </p>
            <p>
              <span className={styles.timeLabel}>Sonntag:</span>
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
              <a href="mailto:kontakt@wagemann-schweiss-service.de">
                kontakt@wagemann-schweiss-service.de
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imageSheep} />
    </>
  );
}
