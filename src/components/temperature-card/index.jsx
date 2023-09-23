/* eslint-disable react/prop-types */
import "./temperature-card.styles.css";
import { Loader } from "../loader";
import { useEffect, useState } from "react";
import { fechtWeatherService } from "../../services/weatherService";
import { TemperatureCardTitle } from "./temperature-card-title";
import { TemperatureDisplay } from "./temperature-display";
import { GeneralInfos  } from "./general-infos";
import { getCurrentTimeAndDate } from "../../services/getTimeAndDateService";

function TemperatureCard() {

  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(getCurrentTimeAndDate())

  useEffect(() => {
    function success(pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      async function fetchData() {
        try {
          const weather = await fechtWeatherService(latitude, longitude);

          setWeather(weather);
          setLoading(false);
        } catch (erro) {
          console.error("Erro fetching data", erro);
          setLoading(false);
        }
      }

      fetchData();
    }

    navigator.geolocation.watchPosition(success);

    const intervalID = setInterval(() => {
        setCurrentTime(getCurrentTimeAndDate())
    }, 10000);

    return () => {
      clearInterval(intervalID)
    }
  }, []);

  return (
    <div className="temperature-card">
      {loading ? (
        <Loader />
      ) : (
        <>
          <TemperatureCardTitle
            weather={weather}
            hour={currentTime.hour}
            minutes={currentTime.minutes}
            formatedDate={currentTime.formatedDate}
          />
          <TemperatureDisplay weather={weather} />
          <GeneralInfos weather={weather} />
        </>
      )}
    </div>
  );
}

export { TemperatureCard };
