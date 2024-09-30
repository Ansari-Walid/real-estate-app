import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin.jsx";
import "leaflet/dist/leaflet.css";
import "./map.scss";
const Map = ({ item }) => {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {item.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
