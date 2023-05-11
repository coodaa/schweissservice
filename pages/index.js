import React from "react";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Index() {
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
    </>
  );
}
