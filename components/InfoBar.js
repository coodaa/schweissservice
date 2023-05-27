import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBARR.module.css";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";

const Infobar = () => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktopOrLaptop(true);
      } else {
        setIsDesktopOrLaptop(false);
      }
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className={styles.nav}>
      <ScrollLink
        onClick={handleToggle}
        to="homeSection"
        smooth={true}
        duration={500}
        className={styles.link}
      >
        <div className={styles.logo}>
          <Image
            src="/assets/img/logo/wagemann_logo.svg"
            alt="WAGEMANN SCHWEISS-SERVICE"
            width={170}
            height={65}
          />
        </div>
      </ScrollLink>

      <div className={styles.phoneNumber}>
        {isDesktopOrLaptop ? (
          <ul className={styles.navLinksDesktop}>
            <li>
              <ScrollLink
                to="serviceSection"
                smooth={true}
                duration={500}
                offset={-60}
                className={styles.link}
              >
                Service
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="historySection"
                smooth={true}
                duration={500}
                offset={-60}
                className={styles.link}
              >
                Geschichte
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contactSection"
                smooth={true}
                duration={500}
                offset={-60}
                className={styles.link}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        ) : (
          <>
            <BurgerMenu onToggle={handleToggle} />
            {menuOpen && (
              <div
                className={`${styles.navLinksMobile} ${
                  menuOpen ? styles.show : ""
                }`}
              >
                <ul>
                  <li>
                    <ScrollLink
                      onClick={handleToggle}
                      to="serviceSection"
                      smooth={true}
                      duration={500}
                      offset={-60}
                      className={styles.link}
                    >
                      Service
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={handleToggle}
                      to="historySection"
                      smooth={true}
                      duration={500}
                      offset={-60}
                      className={styles.link}
                    >
                      Geschichte
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={handleToggle}
                      to="contactSection"
                      smooth={true}
                      duration={500}
                      offset={-60}
                      className={styles.link}
                    >
                      Kontakt
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Infobar;
