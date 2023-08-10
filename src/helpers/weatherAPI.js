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

export const lastDays = async (cityURL) => {
  const URL = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}&days=7`;
  const response = await fetch(URL);
  const data = await response.json();
  const { forecast } = data;
  const listDays = [];
  forecast.forecastday.forEach((element) => {
    const result = {
      date: element.date,
      maxTemp: element.day.maxtemp_c,
      minTemp: element.day.mintemp_c,
      condition: element.day.condition.text,
      icon: element.day.condition.icon,
    };
    listDays.push(result);
  });
  return listDays;
};
