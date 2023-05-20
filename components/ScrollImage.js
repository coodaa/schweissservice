import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ScrollImage.module.css";
import dynamic from "next/dynamic";

let DynamicScrollTrigger;

const ScrollImage = ({ imgSrc }) => {
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    DynamicScrollTrigger = dynamic(() => import("react-scroll-trigger"), {
      ssr: false,
    });
    setIsMounted(true);
  }, []);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return isMounted ? (
    <DynamicScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={styles.white}>
        <div
          className={
            visible
              ? `${styles.imageContainer} ${styles.visible}`
              : styles.imageContainer
          }
        >
          <div className={styles.imageBackground}></div>
          <Image
            className={styles.image}
            src={imgSrc}
            alt="Bild"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </DynamicScrollTrigger>
  ) : null;
};

export default ScrollImage;
