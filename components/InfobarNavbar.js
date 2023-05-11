import React from "react";
import InfoBar from "./Navbar";
import Navbar from "./InfoBar";
import styles from "../styles/InfobarNavbar.module.css";

const InfobarNavbar = () => {
  return (
    <div className={styles.container}>
      <InfoBar className={styles.infobar} />
      <Navbar className={styles.navbar} />
    </div>
  );
};

export default InfobarNavbar;
