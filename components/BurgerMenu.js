import React from "react";
import styles from "../styles/BurgerMenu.module.css";

export default function BurgerMenu({ onToggle, isOpen }) {
  const toggleMenu = () => {
    onToggle(!isOpen);
  };

  return (
    <div
      className={`${styles.burgerMenu} ${isOpen ? styles.fullscreen : ""}`}
      onClick={toggleMenu}
    >
      <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
    </div>
  );
}
