import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const burgerClassName = isOpen
    ? `${styles.burger} ${styles.burgerX}`
    : styles.burger;

  return (
    <div className={styles.container}>
      <button className={burgerClassName} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link legacyBehavior href="/">
                <a onClick={toggleMenu}>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a onClick={toggleMenu}>About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a onClick={toggleMenu}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
