// import React, { useState, useEffect } from "react";
// import styles from "../styles/InfoBARR.module.css";
// import { useMediaQuery } from "react-responsive";
// import Image from "next/image";
// import Link from "next/link";
// import BurgerMenu from "./BurgerMenu";

// const Infobar = ({ scrollPosition }) => {
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const [menuOpen, setMenuOpen] = useState(false);

//   const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

//   const handleToggle = (open) => {
//     setMenuOpen(open);
//   };

//   return (
//     <div className={styles.nav}>
//       <div className={styles.logo}>
//         <Image
//           src="/assets/img/logo/logo-original.png"
//           alt="WAGEMANN SCHWEISS-SERVICE"
//           width={170}
//           height={65}
//         />
//       </div>
//       <div className={styles.phoneNumber}>
//         <BurgerMenu onToggle={handleToggle} />
//         {menuOpen && (
//           <ul
//             className={`${styles.navLinksMobile} ${
//               menuOpen ? styles.show : ""
//             }`}
//           >
//             <li>
//               <Link href="/" passHref className={styles.link}>
//                 Service
//               </Link>
//             </li>
//             <li>
//               <Link href="/geschichte" passHref className={styles.link}>
//                 Geschichte
//               </Link>
//             </li>
//             <li>
//               <Link href="/kontakt" passHref className={styles.link}>
//                 Kontakt
//               </Link>
//             </li>
//           </ul>
//         )}
//         <ul className={styles.navLinksDesktop}>
//           <li>
//             <Link href="/" passHref className={styles.link}>
//               Service
//             </Link>
//           </li>
//           <li>
//             <Link href="/geschichte" passHref className={styles.link}>
//               Geschichte
//             </Link>
//           </li>
//           <li>
//             <Link href="/kontakt" passHref className={styles.link}>
//               Kontakt
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Infobar;

import React, { useState, useEffect } from "react";
import styles from "../styles/InfoBARR.module.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";

const Infobar = ({ scrollPosition }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

  const handleToggle = (open) => {
    setMenuOpen(open);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo/logo-original.png"
          alt="WAGEMANN SCHWEISS-SERVICE"
          width={170}
          height={65}
        />
      </div>
      <div className={styles.phoneNumber}>
        {" "}
        <BurgerMenu onToggle={handleToggle} />
        {menuOpen && (
          <ul
            className={`${styles.navLinksMobile} ${
              menuOpen ? styles.show : ""
            }`}
          >
            <li>
              <ScrollLink
                to="serviceSection"
                smooth={true}
                duration={500}
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
                className={styles.link}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        )}
        <ul className={styles.navLinksDesktop}>
          <li>
            <ScrollLink
              to="serviceSection"
              smooth={true}
              duration={500}
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
              className={styles.link}
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Infobar;
