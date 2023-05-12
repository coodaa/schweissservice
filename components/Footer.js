import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo/logo-full-white.png"
          alt="Logo"
          width={100}
          height={50}
        />
      </div>
      <div className={styles.social}>
        <FaFacebookSquare size={30} />
      </div>
      <div className={styles.info}>
        <p className={styles.design}>Design & Code</p>
        <p className={styles.legal}>Impressum Datenschutz</p>
      </div>
    </div>
  );
}
