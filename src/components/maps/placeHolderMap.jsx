import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function PlaceHolderMap() {
    return (
        <>
            <MapContainer center={[-10, -60]} zoom={2}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
        </>
      );
}

export { PlaceHolderMap }