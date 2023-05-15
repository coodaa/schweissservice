import React, { useState, useEffect } from "react";

function MapComponent() {
  const [showMap, setShowMap] = useState(false);

  const handleLoadMap = () => {
    setShowMap(true);
  };

  useEffect(() => {
    const cookieValue = localStorage.getItem("cookieAccepted");
    if (cookieValue === "true") {
      setShowMap(true);
    }
  }, []);

  return (
    <div>
      {!showMap && (
        <div style={{ backgroundColor: "gray", width: "100%", height: "100%" }}>
          <p>
            Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von
            Google.
          </p>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mehr erfahren
          </a>
          <button onClick={handleLoadMap}>Karte laden</button>
        </div>
      )}
      {showMap && (
        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9578.832482668065!2d7.4592978!3d53.2350412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c4e5c8057b22a9!2sWagemann%20Schwei%C3%9F%20Service%20UG!5e0!3m2!1sen!2sde!4v1625060605309!5m2!1sen!2sde"
        ></iframe>
      )}
    </div>
  );
}

export default MapComponent;
