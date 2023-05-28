import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBARR.module.css";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { useRouter } from "next/router"; // import useRouter Hook
import Link from "next/link"; // import Link component

const Infobar = ({ scrollPosition }) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
  const router = useRouter(); // Initialize useRouter Hook

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
              {router.pathname === "/" ? (
                <ScrollLink
                  to="serviceSection"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className={styles.link}
                >
                  Service
                </ScrollLink>
              ) : (
                <Link href="/#serviceSection">
                  <a className={styles.link} onClick={() => setMenuOpen(false)}>
                    Service
                  </a>
                </Link>
              )}
            </li>
            <li>
              {router.pathname === "/" ? (
                <ScrollLink
                  to="historySection"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className={styles.link}
                >
                  Geschichte
                </ScrollLink>
              ) : (
                <Link href="/#historySection">
                  <a className={styles.link} onClick={() => setMenuOpen(false)}>
                    Geschichte
                  </a>
                </Link>
              )}
            </li>
            <li>
              {router.pathname === "/" ? (
                <ScrollLink
                  to="contactSection"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className={styles.link}
                >
                  Kontakt
                </ScrollLink>
              ) : (
                <Link href="/#contactSection">
                  <a className={styles.link} onClick={() => setMenuOpen(false)}>
                    Kontakt
                  </a>
                </Link>
              )}
            </li>
          </ul>
        ) : (
          <>
            <BurgerMenu onToggle={handleToggle} />
            {menuOpen && (
              <ul
                className={`${styles.navLinksMobile} ${
                  menuOpen ? styles.show : ""
                }`}
              >
                <li>
                  {router.pathname === "/" ? (
                    <ScrollLink
                      onClick={() => setMenuOpen(false)}
                      to="homeSection"
                      smooth={true}
                      duration={500}
                      offset={-60}
                      className={styles.link}
                    >
                      Home
                    </ScrollLink>
                  ) : (
                    <Link href="/#homeSection">
                      <a
                        className={styles.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        Home
                      </a>
                    </Link>
                  )}
                </li>
                <li>
                  {router.pathname === "/" ? (
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
                  ) : (
                    <Link href="/#serviceSection">
                      <a
                        className={styles.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        Service
                      </a>
                    </Link>
                  )}
                </li>
                <li>
                  {router.pathname === "/" ? (
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
                  ) : (
                    <Link href="/#historySection">
                      <a
                        className={styles.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        Geschichte
                      </a>
                    </Link>
                  )}
                </li>
                <li>
                  {router.pathname === "/" ? (
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
                  ) : (
                    <Link href="/#contactSection">
                      <a
                        className={styles.link}
                        onClick={() => setMenuOpen(false)}
                      >
                        Kontakt
                      </a>
                    </Link>
                  )}
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
