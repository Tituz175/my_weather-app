// the api key
const key = "c5YWAA9t6JrAcP5gS0SNFkxp2nSAPz5V";

// get city weather details function
const getWeather = async (cityId) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityId}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// get city details function
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
