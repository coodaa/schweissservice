import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactMap = () => {
  const position = [53.2326, 7.4653]; // Hier sind die Koordinaten für Wagemann Schweiß Service UG

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Wagemann Schweiß Service UG <br /> Sägemühlenstraße 89, 26789 Leer
          (Ostfriesland)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
