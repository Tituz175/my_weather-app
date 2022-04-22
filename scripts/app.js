// my variables
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const image = document.querySelector(".time");
const icon = document.querySelector(".icon img");

// this function render the application ui
const updateUi = ({ cityDetails, cityWeather }) => {
  // adjust the card display property
  card.classList.contains("hidden")
    ? card.classList.remove("hidden")
    : card.classList.remove("hidden");

  // set the icon image source attribute
  const iconSrc = `img/icons/${cityWeather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  // set the icon image source attribute
  let imageSource = cityWeather.IsDayTime ? "img/day.svg" : "img/night.svg";
  image.setAttribute("src", imageSource);

  // inject the needed innerHTML for the details class
  details.innerHTML = `
    <h5 class="font-semibold text-xl pt-16 pb-2">${cityDetails.EnglishName}</h5>
    <div class="my-2">${cityDetails.Country.EnglishName}</div>
    <div class="my-2">${cityWeather.WeatherText}</div>
    <div class="text-6xl font-light pt-4 pb-8">
        <span>${cityWeather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
  `;
};

// this function gets the supplied city details and weather details
const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return { cityDetails, cityWeather };
};

// this is the eventlistener submitting the form value
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim().toLowerCase();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUi(data))
    .catch((error) => console.log(error));
});
