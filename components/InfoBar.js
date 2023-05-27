import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBARR.module.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";

const Infobar = ({ scrollPosition }) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktopOrLaptop(true);
    } else {
      setIsDesktopOrLaptop(false);
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (open) => {
    setMenuOpen(open);
  };

  return (
    <div className={styles.nav}>
      <ScrollLink
        onClick={() => setMenuOpen(false)}
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
            <BurgerMenu onToggle={handleToggle} isOpen={menuOpen} />
            {menuOpen && (
              <ul
                className={`${styles.navLinksMobile} ${
                  menuOpen ? styles.show : ""
                }`}
              >
                <li>
                  <ScrollLink
                    onClick={() => setMenuOpen(false)}
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
                    onClick={() => setMenuOpen(false)}
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
                    onClick={() => setMenuOpen(false)}
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
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Infobar;
