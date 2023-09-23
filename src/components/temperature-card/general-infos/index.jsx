import LinearDeterminate from "../../progress-bar";

/* eslint-disable react/prop-types */
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

export { GeneralInfos }