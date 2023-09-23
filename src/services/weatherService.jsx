async function fechtWeatherService(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4cb5a31adc4fff6205dbb26aa82448a3&lang=pt_br&units=metric`
      );

      const data = await response.json();
      return data
      
    } catch (erro) {
      console.error("Erro fetching data", erro);
    }
  }

export { fechtWeatherService }