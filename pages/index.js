import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Index() {
  const [ScrollReveal, setScrollReveal] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollRevealModule) => {
        setScrollReveal(ScrollRevealModule.default);
        ScrollRevealModule.default().reveal(".fadeIn", {
          duration: 500,
          origin: "bottom",
          distance: "100px",
          delay: 500,
          opacity: 0,
          easing: "ease-in-out",
          viewFactor: 0.2,
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>WAGEMANN SCHWEISS-SERVICE</title>
        <meta
          name="description"
          content="Beschreibung von WAGEMANN SCHWEISS-SERVICE"
        />
        <meta
          name="keywords"
          content="Schweißen, technische Gase, Leer, Ostfriesland, Wagemann"
        />
      </Head>
      <div id="homeSection">
        <div className={styles.main}>
          <div className={styles.redSquare}>
            <Image
              src="/assets/img/logo/logo-full-white.png"
              alt="WAGEMANN SCHWEISS-SERVICE"
              width={350}
              height={150}
            />
            <h2>
              Ihr kompetenter Partner für technische Gase und Schweißlösungen im
              Herzen Ostfrieslands.
            </h2>
          </div>
          <div
            className={styles.backgroundImage}
            alt="WAGEMANN SCHWEISS-SERVICE"
          />
        </div>
      </div>
      <div className={styles.main} id="serviceSection">
        <div className="fadeIn">
          <Image
            src="/assets/img/pictures/gasflasche.jpg"
            alt="Beschreibung des Bildes"
            width={500}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      <div className={styles.main} id="contactSection">
        <div className="fadeIn">
          <Image
            src="/assets/img/pictures/gasflasche.jpg"
            alt="Beschreibung des Bildes"
            width={500}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      ;
    </>
  );
}
