import getData from './getWeatherData.js';
import reverseTempUnit from './reverseCelsiusFahrenheit.js';

// activate search
function citySearch(event) {
  let weatherData = document.getElementById('weather-location').value;
  document.getElementById('no-data').style.visibility = 'hidden';
  getData(weatherData);
  event.preventDefault();
}

const eventForm = document.getElementById('search-form');
eventForm.addEventListener('submit', citySearch);

document
  .getElementById('temp')
  .addEventListener('click', () => reverseTempUnit('temp'));
document
  .getElementById('tempF')
  .addEventListener('click', () => reverseTempUnit('tempF'));

document.body.addEventListener('load', getData('Bucureşti'));
