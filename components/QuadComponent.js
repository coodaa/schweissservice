// In QuadComponent.js
import styles from "../styles/Quad.module.css";

export default function QuadComponent({ quadData }) {
  return (
    <div className={styles.quadGrid}>
      {quadData.map((quad, i) => (
        <div key={i} className={styles.quadContent}>
          <div className={styles.quadInner}>
            <h3 className={styles.quadTitle}>{quad.title}</h3>
            <p lang="de" className={styles.quadText}>
              {quad.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
