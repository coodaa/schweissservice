import React from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
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
