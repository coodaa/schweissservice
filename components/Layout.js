// Layout.js
import React from "react";
import InfobarNavbar from "./InfobarNavbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <InfobarNavbar />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
