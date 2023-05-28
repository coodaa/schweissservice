import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBARR.module.css";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { useRouter } from "next/router"; // import useRouter Hook
import Link from "next/link"; // import Link component

const Infobar = ({ scrollPosition }) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(undefined);
  const router = useRouter(); // Initialize useRouter Hook

  useEffect(() => {
    function handleResize() {
      setIsDesktopOrLaptop(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (open) => {
    setMenuOpen(open);
  };

  return (
    <div className={styles.nav}>
      <Link legacyBehavior href="/">
        <a onClick={() => setMenuOpen(false)}>
          <div className={styles.logo}>
            <Image
              src="/assets/img/logo/wagemann_logo.svg"
              alt="WAGEMANN SCHWEISS-SERVICE"
              width={170}
              height={65}
            />
          </div>
        </a>
      </Link>

      <div className={styles.phoneNumber}>
        {isDesktopOrLaptop === undefined ? null : isDesktopOrLaptop ? (
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
                <Link legacyBehavior href="/#serviceSection">
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
                <Link legacyBehavior href="/#historySection">
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
                <Link legacyBehavior href="/#contactSection">
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
                    <Link legacyBehavior href="/#homeSection">
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
                    <Link legacyBehavior href="/#serviceSection">
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
                    <Link legacyBehavior href="/#historySection">
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
                    <Link legacyBehavior href="/#contactSection">
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
