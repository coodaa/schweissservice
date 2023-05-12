import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import ScrollReveal from "scrollreveal";

export default function Index() {
  useEffect(() => {
    ScrollReveal().reveal(".scroll-reveal", {
      distance: "100px",
      origin: "bottom",
      opacity: 0,
      duration: 2000,
      delay: 500,
    });
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
      <div id="serviceSection">
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
      <div className={styles.main} id="historySection">
        <div className="scroll-reveal">
          <Image
            src="/assets/img/pictures/gasflasche.jpg"
            alt="Beschreibung des Bildes"
            width={500}
            height={500}
          />
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className={styles.main} id="contactSection">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      ;
    </>
  );
}
