// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (open) => {
    setMenuOpen(open);
  };

  return (
    <nav className={styles.nav}>
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
        <ul className={styles.navLinksMobile}>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
