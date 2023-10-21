async function fetchCityService(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4cb5a31adc4fff6205dbb26aa82448a3`
    );

    const data = await response.json();

    return data;
  } catch (e) {
    console.error("ERRO AO TENTAR BUSCA AS INFORMAÇÕES NA API " + e);
  }
}

export { fetchCityService };
