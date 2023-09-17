/* eslint-disable react/prop-types */

import "./temperature-card.styles.css";
import LinearDeterminate from "../progress-bar";
import { Loader } from "../loader";
import { useEffect, useState } from "react";

function TemperatureCardTitle({ weather, hour, minutes, formatedDate }) {
  return (
    <div className="title">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="imagem de teste"
      />

      <div className="title-descrition">
        <span>Today</span>
        <span>
          {hour}:{minutes < 10 ? "0" + minutes : minutes}
        </span>
        <span>{formatedDate}</span>
      </div>
    </div>
  );
}

function TemperatureDisplay({ weather }) {
  return (
    <div className="temparature-display">
      <h3 className="temperature">{weather.main.temp.toFixed(0)}ºC</h3>
      <span className="city">{weather.name}</span>
      <span className="country">{weather.sys.country}</span>
    </div>
  );
}

function GeneralInfos({ weather }) {
  return (
    <div className="general-infos">
      <ul>
        <li>
          <label>Humidity: {weather.main.humidity}%</label>
          <LinearDeterminate
            value={weather.main.humidity}
            className="progress-bar"
          />
        </li>

        <li>
          <label>Wind Speed: {weather.wind.speed.toFixed(0) * 3.6} Km</label>
          <LinearDeterminate value={weather.wind.speed} />
        </li>
      </ul>
    </div>
  );
}

function TemperatureCard() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function success(pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      async function fetchData() {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4cb5a31adc4fff6205dbb26aa82448a3&lang=pt_br&units=metric`
          );

          const data = await response.json();
          setWeather(data);
          setLoading(false);
        } catch (erro) {
          console.error("Erro fetching data", erro);
          setLoading(false);
        }
      }

      fetchData();
    }
    navigator.geolocation.watchPosition(success);
  }, []);

  const date = new Date();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  const formatedDate = date.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    weekday: "long",
  });

  return (
    <div className="temperature-card">
      {loading ? (
        <Loader />
      ) : (
        <>
          <TemperatureCardTitle
            weather={weather}
            hour={hour}
            minutes={minutes}
            formatedDate={formatedDate}
          />
          <TemperatureDisplay weather={weather} />
          <GeneralInfos weather={weather} />
        </>
      )}
    </div>
  );
}

export { TemperatureCard };
