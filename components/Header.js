// components/Header.js
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import InfoBar from "./InfoBar";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <InfoBar scrollPosition={scrollPosition} />
      <Navbar scrollPosition={scrollPosition} />
    </>
  );
};

export default Header;
