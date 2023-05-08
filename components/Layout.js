import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
// import InfoBar from "../components/InfoBar";
// import Navbar from "../components/Navbar";

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
    <div>
      <div>
        {showInfoBar && <InfoBar />}
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
