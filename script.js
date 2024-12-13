function refreshWeather(response) {
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "obc25ed040a8998de4b43f2ea367t025";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherCityElement = document.querySelector("#weather-city");

  weatherCityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
