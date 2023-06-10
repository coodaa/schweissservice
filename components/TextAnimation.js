import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/TextAnimation.module.css";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const subTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function TextAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.textService} ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={subTextVariants}
      >
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.5 }} // Verzögerung für h1
          variants={textVariants}
          className={styles.text}
        >
          25+
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.7, duration: 0.5 }} // Verzögerung für p
          variants={subTextVariants}
          className={styles.subtext}
        >
          Jahre Erfahrung
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={subTextVariants}
      >
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.5 }} // Verzögerung für h1
          variants={textVariants}
          className={styles.text}
        >
          15+
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.7, duration: 0.5 }} // Verzögerung für p
          variants={subTextVariants}
          className={styles.subtext}
        >
          Gase im Angebot
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={subTextVariants}
      >
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 1.5, duration: 0.5 }} // Verzögerung für h1
          variants={textVariants}
          className={styles.text}
        >
          65+
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 2, duration: 0.5 }} // Verzögerung für p
          variants={subTextVariants}
          className={styles.subtext}
        >
          Artikel
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={subTextVariants}
      >
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 1.5, duration: 0.5 }} // Verzögerung für h1
          variants={textVariants}
          className={styles.text}
        >
          130+
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 2, duration: 0.5 }} // Verzögerung für p
          variants={subTextVariants}
          className={styles.subtext}
        >
          Quadratmeter Verkaufsfläche
        </motion.p>
      </motion.div>
    </div>
  );
}
