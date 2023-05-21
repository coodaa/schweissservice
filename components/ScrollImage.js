import { useEffect, useRef } from "react";
import Image from "next/image";
import useScrollTrigger from "../hooks/useScrollTrigger";
import styles from "../styles/ScrollImage.module.css";

export default function ScrollImage({ imgSrc, text }) {
  const ref = useRef();
  const isVisible = useScrollTrigger({ threshold: ref.current?.offsetTop });

  useEffect(() => {
    if (isVisible) {
      ref.current.style.transform = "translateX(0)";
      ref.current.style.opacity = "1";
    }
  }, [isVisible]);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.imageContainer}>
        <Image src={imgSrc} layout="fill" objectFit="cover" alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}
