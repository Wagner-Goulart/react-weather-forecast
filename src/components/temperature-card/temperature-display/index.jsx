/* eslint-disable react/prop-types */
function TemperatureDisplay({ weather }) {
    return (
      <div className="temparature-display">
        <h3 className="temperature">{weather.main.temp.toFixed(0)}ºC</h3>
        <span className="city">{weather.name}</span>
        <span className="country">{weather.sys.country}</span>
      </div>
    );
  }

export { TemperatureDisplay }