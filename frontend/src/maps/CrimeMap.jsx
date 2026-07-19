import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function CrimeMap() {
  return (
    <MapContainer
      center={[20.2961, 85.8245]}
      zoom={7}
      style={{ height: "300px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[20.2961, 85.8245]}>
        <Popup>Bhubaneswar Crime Hotspot</Popup>
      </Marker>
    </MapContainer>
  );
}

export default CrimeMap;