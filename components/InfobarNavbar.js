import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import styles from "../styles/InfobarNavbar.module.css";

const InfobarNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.stickyContainer}>
      <div className={scrollPosition > 50 ? styles.scrolled : ""}>
        <InfoBar />
      </div>
      <Navbar />
    </div>
  );
};

export default InfobarNavbar;
