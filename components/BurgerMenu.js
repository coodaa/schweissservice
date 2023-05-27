// components/BurgerMenu.js
import React, { useState } from "react";
import styles from "../styles/BurgerMenu.module.css";

export default function BurgerMenu({ onToggle, isOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    onToggle(newState);
  };

  return (
    <div
      className={`${styles.burgerMenu} ${menuOpen ? styles.fullscreen : ""}`}
      onClick={toggleMenu}
    >
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
    </div>
  );
}
