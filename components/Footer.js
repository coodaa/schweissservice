import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";

// In Ihrer JSX-Datei
export default function Footer() {
  return (
    <div className={styles.footer} id="contactSection">
      <div className={styles.footerLine}>
        <hr className={styles.line} />
        <Image
          className={styles.logoImage}
          src="/assets/img/logo/logo-full-white.png"
          alt="Logo"
          width={350}
          height={150}
          objectFit="contain"
        />
        <hr className={styles.line} />
      </div>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/wagemannschweissservice/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fbLink}
        >
          <FaFacebookSquare size={30} />
        </a>
      </div>
      <div className={styles.info}>
        <p className={styles.design}>Design & Code</p>
        <p className={styles.legal}>Impressum Datenschutz</p>
      </div>
    </div>
  );
}
