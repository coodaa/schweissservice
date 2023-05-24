import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import styles from "../styles/ImageFeatureRight.module.css";

function ImageFeatureRight({ src, alt, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once
  });

  const wrapperProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
  });

  const imageProps = useSpring({
    from: { transform: "translateX(100%)" }, // begin off the right edge
    delay: 500, // delay in milliseconds
    to: { transform: inView ? "translateX(0)" : "translateX(100%)" }, // ends just off the right edge if not in view
  });

  return (
    <div className={styles.container} ref={ref}>
      <animated.div className={styles.imageWrapper} style={wrapperProps}>
        <animated.div className={styles.imageContent} style={imageProps}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </animated.div>
      </animated.div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default ImageFeatureRight;
