import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer} id="contactSection">
      <div className={styles.footerLine}>
        <hr className={styles.line} />
        <Image
          className={styles.logoImage}
          src="/assets/img/logo/logo-full-white.svg"
          alt="Logo"
          width={350}
          height={150}
          style={{ objectFit: "contain" }}
        />
        <hr className={styles.line} />
      </div>

      <div className={styles.info}>
        <div className={styles.design}>
          <p>Design & Code</p>
          <a
            href="https://bouysbouysbouys.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            bouysbouysbouys
          </a>
        </div>

        <div className={styles.social}>
          <a
            href="https://www.facebook.com/wagemannschweissservice/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fbLink}
          >
            <FaFacebookSquare size={50} />
          </a>
        </div>

        <div className={styles.legal}>
          <a href="#impressum">Impressum</a>
          <Link href="/privacy">Datenschutz</Link>
        </div>
      </div>
    </div>
  );
}
