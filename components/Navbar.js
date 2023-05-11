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
            <span>Mo-Do 08:30-11:00 Uhr | Fr & Sa 09:30-10:30 Uhr &nbsp;</span>
            <span className={styles.sundayHours}>| So: Geschlossen</span>
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
            <span>+49 (0) 491 9293713</span>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Navbar;

// // components/Navbar.js
// import React, { useState } from "react";
// import styles from "../styles/Navbar.module.css";
// import Link from "next/link";
// import Image from "next/image";
// import BurgerMenu from "./BurgerMenu";

// const Navbar = ({ scrollPosition }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const isSticky = scrollPosition >= 50; // Navbar wird sticky, wenn der Scroll 50 erreicht

//   const handleToggle = (open) => {
//     setMenuOpen(open);
//   };

//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>
//         <Image
//           src="/assets/img/logo/logo-original.png"
//           alt="WAGEMANN SCHWEISS-SERVICE"
//           width={150}
//           height={50}
//         />
//       </div>
//       <BurgerMenu onToggle={handleToggle} />
//       {menuOpen && (
//         <ul
//           className={`${styles.navLinksMobile} ${menuOpen ? styles.show : ""}`}
//         >
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
//       )}
//       <ul className={styles.navLinksDesktop}>
//         <li>
//           <Link href="/" passHref className={styles.link}>
//             Service
//           </Link>
//         </li>
//         <li>
//           <Link href="/geschichte" passHref className={styles.link}>
//             Geschichte
//           </Link>
//         </li>
//         <li>
//           <Link href="/kontakt" passHref className={styles.link}>
//             Kontakt
//           </Link>
//         </li>{" "}
//       </ul>{" "}
//     </nav>
//   );
// };

// export default Navbar;
