class Forecast {
  constructor() {
    // the api key
    this.key = "c5YWAA9t6JrAcP5gS0SNFkxp2nSAPz5V";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }

  // call the getCity and getWeather functions and return an {}
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const cityWeather = await this.getWeather(cityDetails.Key);
    return { cityDetails, cityWeather };
  }

  // get city weather details function
  async getWeather(cityId) {
    const query = `${cityId}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }

  // get city details function
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
}
