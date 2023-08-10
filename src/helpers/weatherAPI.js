const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
