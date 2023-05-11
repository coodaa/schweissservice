// Header.js
import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <InfoBar isScrolled={isScrolled} />
      <Navbar />
    </header>
  );
};

export default Header;
