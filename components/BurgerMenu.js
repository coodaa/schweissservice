// components/BurgerMenu.js
import React, { useState } from "react";
import styles from "../styles/BurgerMenu.module.css";

export default function BurgerMenu({ onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    onToggle(!menuOpen);
  };

  return (
    <div className={styles.burgerMenu} onClick={toggleMenu}>
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
    </div>
  );
}
