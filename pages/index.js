import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <div className={styles.main}>
      <div className={styles.redSquare}>
        <Image
          src="/assets/img/logo/logo-full-white.png"
          alt="WAGEMANN SCHWEISS-SERVICE"
          width={250}
          height={100}
        />
        <h3>
          Ihr kompetenter Partner für technische Gase und Schweißlösungen im
          Herzen Ostfrieslands.
        </h3>
      </div>
      <div className={styles.backgroundImage} alt="WAGEMANN SCHWEISS-SERVICE" />
    </div>
  );
}
