import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.redSquare}>
          <Image
            src="/assets/img/logo/logo-original.png"
            alt="WAGEMANN SCHWEISS-SERVICE"
            width={200}
            height={80}
          />
          <h1>Hello World</h1>
        </div>
        <div
          className={styles.backgroundImage}
          alt="WAGEMANN SCHWEISS-SERVICE"
        />
      </div>
    </Layout>
  );
}
