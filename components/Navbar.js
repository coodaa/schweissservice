import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Navbar = ({ scrollPosition }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isSticky = scrollPosition >= 50;

  const handleToggle = (open) => {
    setMenuOpen(open);
  };

  return (
    <nav className={`${styles.nav} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo/logo-original.png"
          alt="WAGEMANN SCHWEISS-SERVICE"
          width={150}
          height={50}
        />
      </div>
      <BurgerMenu onToggle={handleToggle} />
      {menuOpen && (
        <ul
          className={`${styles.navLinksMobile} ${menuOpen ? styles.show : ""}`}
        >
          <li>
            <Link href="/" passHref className={styles.link}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/geschichte" passHref className={styles.link}>
              Geschichte
            </Link>
          </li>
          <li>
            <Link href="/kontakt" passHref className={styles.link}>
              Kontakt
            </Link>
          </li>
        </ul>
      )}
      <ul className={styles.navLinksDesktop}>
        <li>
          <Link href="/" passHref className={styles.link}>
            Service
          </Link>
        </li>
        <li>
          <Link href="/geschichte" passHref className={styles.link}>
            Geschichte
          </Link>
        </li>
        <li>
          <Link href="/kontakt" passHref className={styles.link}>
            Kontakt
          </Link>
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
