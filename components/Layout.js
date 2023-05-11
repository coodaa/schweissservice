// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
