// components/InfoBar.js
import React from "react";
import styles from "../styles/InfoBar.module.css";

const InfoBar = () => {
  return (
    <div className={styles.infoBar}>
      <div className={styles.openingHours}>
        Öffnungszeiten:
        <span className={styles.mobileBreak}>
          <br />
        </span>
        Mo-Do 08:30-11:00 Uhr | Fr & Sa 09:30-10:30 Uhr | So: Geschlossen
      </div>
      <div className={styles.phoneNumber}>Telefon: +49 (0) 491 9293713</div>
    </div>
  );
};

export default InfoBar;
