const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`;
  const response = await fetch(URL);
  const data = await response.json();
  if (data.length < 1) {
    window.alert('Nenhuma cidade encontrada');
  } else {
    return data;
  }
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
