import React, { useState } from "react";
import InfoBar from "./Navbar";
import Navbar from "./InfoBar";
import styles from "../styles/InfobarNavbar.module.css";
import burgerStyles from "../styles/BurgerMenu.module.css";

const InfobarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <InfoBar className={styles.infobar} />
      <div className={burgerStyles.burgerMenu} onClick={handleToggle}>
        <div className={isOpen ? "bar open" : "bar"} />
        <div className={isOpen ? "bar open" : "bar"} />
        <div className={isOpen ? "bar open" : "bar"} />
      </div>
      {isOpen && (
        <div className={styles.navbar}>
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default InfobarNavbar;
