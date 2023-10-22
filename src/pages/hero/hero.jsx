/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./hero.style.css";
import { useContext, useState } from "react";
import { CityContext } from "../../contexts/cityContext";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { latLng } from "leaflet";


function Hero() {
  const { city } = useContext(CityContext);
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  const position = [ latitude, longitude]

  console.log(latitude);
  console.log(longitude);

  useEffect(() => {
    if (city === undefined) {
      return;
    } else {
      setLatitude(city[0].lat);
      setlongitude(city[0].lon);
    }
  }, [city]);

  return (
    <section className="hero-section">
      {city && city[0] && latitude && longitude ? (
        <MapContainer center={position} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        "Digite uma cidade para buscar as informações"
      )}
    </section>
  );
}

export { Hero };
