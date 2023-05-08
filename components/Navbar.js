// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
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
            <Link legacyBehavior href="/" passHref>
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about" passHref>
              <a className={styles.link}>About</a>
            </Link>
          </li>
          {/* Add more nav links here */}
        </ul>
      )}
      <ul className={styles.navLinksDesktop}>
        <li>
          <Link legacyBehavior href="/" passHref>
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about" passHref>
            <a className={styles.link}>About</a>
          </Link>
        </li>
        {/* Add more nav links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
