/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { CityContext } from "../../contexts/cityContext";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { PlaceHolderMap } from "./placeHolderMap";

function FlyToNewMapLocation({ latidude, longitude}) {
    const map = useMap()

    map.flyTo([latidude, longitude])
    return null
}

function Map() {

  const { city } = useContext(CityContext);
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  useEffect(() => {
    if (city === undefined) {
      return;
    } else {
      setLatitude(city[0].lat);
      setlongitude(city[0].lon);
    }
  }, [city]);
   
    return (
      <>
        {latitude && longitude ? (
          <MapContainer center={[latitude, longitude]} zoom={10}>
            <FlyToNewMapLocation latidude={latitude} longitude={longitude}/>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <PlaceHolderMap />
        )}
      </>
    );

}

export { Map }