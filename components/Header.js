// components/Header.js
import React from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

const Header = ({ isScrolled }) => {
  return (
    <div className={styles.header}>
      <InfoBar isScrolled={isScrolled} />
      <Navbar isScrolled={isScrolled} />
    </div>
  );
};

export default Header;
