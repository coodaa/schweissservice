import React from "react";
import styles from "../styles/Privacy.module.css";

const Privacy = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <h2 className={styles.subTitle}>1. Datenschutz auf einen Blick</h2>
        <p className={styles.paragraph}>
          Allgemeine Hinweise. Die folgenden Hinweise geben einen einfachen
          Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
          wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle
          Daten, mit denen Sie persönlich identifiziert werden können.
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer
          unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        <h2 className={styles.subTitle}>
          2. Datenerfassung auf unserer Website
        </h2>
        <p className={styles.paragraph}>
          <h3>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>

          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>
        </p>
        <h2 className={styles.subTitle}>3. Ihre Rechte</h2>

        <p className={styles.paragraph}>
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
            oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
            Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </p>

        <h2 className={styles.subTitle}>
          4. Haftungsbeschränkung für externe Links
        </h2>
        <p>
          Unsere Webseite enthält Verknüpfungen zu Webseiten Dritter (sog.
          „externe Links“). Da wir auf deren Inhalte keinen Einfluss haben, kann
          für die fremden Inhalte keine Gewähr übernommen werden. Für die
          Inhalte und Richtigkeit der Informationen ist stets der jeweilige
          Informationsanbieter der verlinkten Webseite verantwortlich. Zum
          Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Sobald
          uns eine Rechtsverletzung bekannt wird, werden wir den jeweiligen Link
          umgehend entfernen.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
