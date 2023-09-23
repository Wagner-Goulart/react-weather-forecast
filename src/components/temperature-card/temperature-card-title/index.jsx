/* eslint-disable react/prop-types */
function TemperatureCardTitle({ weather, hour, minutes, formatedDate }) {
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
      <div className="title">
        <img
          src={weatherIcon}
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

export { TemperatureCardTitle }