import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import InfoBar from "./InfoBar";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition >= 50);
  }, [scrollPosition]);

  return (
    <>
      <Navbar scrollPosition={scrollPosition} isScrolled={isScrolled} />
      <InfoBar scrollPosition={scrollPosition} isScrolled={isScrolled} />
    </>
  );
};

export default Header;
