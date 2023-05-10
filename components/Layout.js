import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [showInfoBar, setShowInfoBar] = useState(true);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setShowInfoBar(currentScrollPosition < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout-container">
      <div>
        {showInfoBar && <InfoBar />}
        <Navbar />
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
