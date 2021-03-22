import fillWeatherData from './populateWeatherData.js';

let getData = async function (weatherLocation) {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        weatherLocation +
        '&units=metric&appid=a08ea732cde67f6c4e8a5d3187124bc3&lang=en',
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    fillWeatherData(weatherData);
  } catch {
    document.getElementById('no-data').style.visibility = 'visible';
  }
};

export default getData;
