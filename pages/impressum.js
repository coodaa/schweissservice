import React from "react";
import Head from "next/head";
import styles from "../styles/Impressum.module.css";
import { MdPhone, MdEmail } from "react-icons/md";

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum - Wagemann Schweiß Service UG</title>
        <meta
          name="description"
          content="Impressum der Wagemann Schweiß Service UG. Angaben gemäß § 5 TMG, Kontaktinformationen, Registereintrag, Umsatzsteuer-Identifikationsnummer und weitere rechtliche Informationen."
        />
        <meta
          property="og:title"
          content="Impressum - Wagemann Schweiß Service UG"
        />
        <meta
          property="og:description"
          content="Impressum der Wagemann Schweiß Service UG. Angaben gemäß § 5 TMG, Kontaktinformationen, Registereintrag, Umsatzsteuer-Identifikationsnummer und weitere rechtliche Informationen."
        />
        <meta property="og:type" content="website" />
      </Head>
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
          <p>
            <MdPhone
              className={styles.link}
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
          <h2 className={styles.subtitle}>Registereintrag:</h2>
          <p className={styles.paragraph}>
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht Aurich
            <br />
            Registernummer: HRB 204232
          </p>
          {/* <h2 className={styles.subtitle}>Umsatzsteuer:</h2> */}
          <p className={styles.paragraph}>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE 123456789
          </p>
          <p className={styles.paragraph}>
          <p>
  Herzlichen Dank an Ralph Gebler vom <a href="https://www.sonntags-report.de/cms/front_content.php" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>SonntagsReport</a> für die freundliche Zurverfügungstellung des Fotos von Manfred Wagemann.
</p>
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
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h3 className={styles.subtitle}>Haftung für Inhalte</h3>
          <p className={styles.paragraph}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>
          <h3 className={styles.subtitle}>Haftung für Links</h3>
          <p className={styles.paragraph}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <h3 className={styles.subtitle}>Urheberrecht</h3>
          <p className={styles.paragraph}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </div>
    </>
  );
};

export default Impressum;
