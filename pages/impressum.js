import React from "react";
import styles from "../styles/Impressum.module.css";

const Impressum = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Impressum</h1>
        <h2 className={styles.subtitle}>Angaben gemäß § 5 TMG:</h2>

        <p className={styles.paragraph}>
          Wagemann Schweiß Service UG <br />
          (haftungsbeschränkt) <br />
          Sägemühlenstraße 89
          <br />
          26789 Leer (Ostfriesland)
        </p>

        <h2 className={styles.subtitle}>Vertreten durch:</h2>

        <p className={styles.paragraph}>Geschäftsführer Helga Wagemann</p>

        <h2 className={styles.subtitle}>Kontakt:</h2>

        <p className={styles.paragraph}>
          Telefon: <a href="tel:+4904919293713">+49 (0) 491 9293713</a> <br />
          <br />
          E-Mail:{" "}
          <a href="mailto:kontakt@wagemann-schweiss-service.de">
            kontakt@wagemann-schweiss-service.de
          </a>
        </p>

        <h2 className={styles.subtitle}>Registereintrag:</h2>

        <p className={styles.paragraph}>
          Eintragung im Handelsregister.
          <br />
          Registergericht: Amtsgericht Musterstadt
          <br />
          Registernummer: HRB 123456
        </p>

        <h2 className={styles.subtitle}>Umsatzsteuer:</h2>

        <p className={styles.paragraph}>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          <br />
          DE 123456789
        </p>

        <h2 className={styles.subtitle}>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>

        <p className={styles.paragraph}>
          Helga Wagemann <br />
          Sägemühlenstraße 89
          <br />
          26789 Leer (Ostfriesland)
        </p>

        <h2 className={styles.subtitle}>Streitschlichtung</h2>

        <p className={styles.paragraph}>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
          <br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h3 className={styles.subtitle}>Haftung für Inhalte</h3>

        <p className={styles.paragraph}>Hier folgt der Haftungsausschluss</p>

        <h3 className={styles.subtitle}>Haftung für Links</h3>

        <p className={styles.paragraph}>
          Hier folgt der Haftungsausschluss für Links
        </p>

        <h3 className={styles.subtitle}>Urheberrecht</h3>

        <p className={styles.paragraph}>
          Hier folgt der Hinweis zum Urheberrecht
        </p>
      </div>
    </div>
  );
};

export default Impressum;
