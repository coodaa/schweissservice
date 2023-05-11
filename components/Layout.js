import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Head>
        <title>WAGEMANN SCHWEISS-SERVICE</title>
        <meta
          name="description"
          content="Beschreibung von WAGEMANN SCHWEISS-SERVICE"
        />
        <meta
          name="keywords"
          content="Schweißen, Gase, technische Gase, Leer, Ostfriesland, Wagemann"
        />
      </Head>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
