// components/InfoBar.js
import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBar.module.css";
import { MdAccessTime, MdPhone } from "react-icons/md"; // import the icons
import { useMediaQuery } from "react-responsive"; // import the hook

const InfoBar = ({ isScrolled }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 }); // define the media query

  return (
    <div className={`${styles.infoBar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.openingHours}>
        {isClient &&
          (isDesktopOrLaptop ? (
            <span className={styles.textBold}> Öffnungszeiten: &nbsp;</span>
          ) : (
            <MdAccessTime
              className={styles.icon}
              size={20}
              style={{ verticalAlign: "middle" }}
            />
          ))}
        <span>Mo-Do 08:30-11:00 Uhr | Fr & Sa 09:30-10:30 Uhr &nbsp;</span>
        <span className={styles.sundayHours}>| So: Geschlossen</span>
      </div>
      <div className={styles.phoneNumber}>
        {isClient &&
          (isDesktopOrLaptop ? (
            <span className={styles.textBold}>Telefon: &nbsp;</span>
          ) : (
            <MdPhone
              className={styles.icon}
              size={20}
              style={{ verticalAlign: "middle" }}
            />
          ))}
        <span>+49 (0) 491 9293713</span>
      </div>
    </div>
  );
};

export default InfoBar;
