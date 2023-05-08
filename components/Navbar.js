// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (open) => {
    setMenuOpen(open);
  };

  return (
    <nav className={styles.nav}>
      <BurgerMenu onToggle={handleToggle} />
      {menuOpen && (
        <ul className={styles.navLinksMobile}>
          <li>
            <Link href="/" passHref className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" passHref className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      )}
      <ul className={styles.navLinksDesktop}>
        <li>
          <Link href="/" passHref className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" passHref className={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
