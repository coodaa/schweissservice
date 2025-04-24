import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBar.module.css";
import { MdAccessTime, MdPhone } from "react-icons/md"; // import the icons
import { useMediaQuery } from "react-responsive"; // import the hook

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 }); //

  return (
    <div className={styles.infoBar}>
      <div className={styles.openingHours}>
        {isClient && (
          <>
            {isDesktopOrLaptop ? (
              <span className={styles.textBold}>Öffnungszeiten: &nbsp;</span>
            ) : (
              <MdAccessTime
                className={styles.icon}
                size={20}
                style={{ verticalAlign: "middle" }}
              />
            )}
            <span>Mo-Do 09:00-19:00 Uhr&nbsp;</span>
            <span className={styles.sundayHours}>| Fr-So: Geschlossen</span>
          </>
        )}
      </div>
      <div className={styles.phoneNumber}>
        {isClient && (
          <>
            {isDesktopOrLaptop ? (
              <span className={styles.textBold}>Telefon: &nbsp;</span>
            ) : (
              <MdPhone
                className={styles.icon}
                size={20}
                style={{ verticalAlign: "middle" }}
              />
            )}
            <a href="tel:+4904919293713">+49 (0) 491 9293713</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
