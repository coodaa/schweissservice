// InfobarNavbar.js
import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import styles from "../styles/InfobarNavbar.module.css";

const InfobarNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setIsSticky(currentScrollPosition >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.infobarNavbar} ${isSticky ? styles.sticky : ""}`}>
      <InfoBar />
      <Navbar />
    </div>
  );
};

export default InfobarNavbar;
