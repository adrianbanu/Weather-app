function fillWeatherData(weatherData) {
  document.getElementById('temp').innerHTML =
    Math.round(weatherData.main.temp) + '&#8451';
  document.getElementById('tempF').innerHTML =
    Math.round(weatherData.main.temp * 1.8 + 32) + '&#8457';
  document.getElementById('location').innerHTML =
    weatherData.name + ', ' + weatherData.sys.country;
  document.getElementById('weather-type').innerHTML =
    weatherData.weather[0]['description'];
  document.getElementById('feel-like').innerHTML =
    'Feels like: ' + Math.round(weatherData.main.feels_like) + '&#8451';
  document.getElementById('feel-like-fahrenheit').innerHTML =
    'Feels like: ' +
    Math.round(weatherData.main.feels_like * 1.8 + 32) +
    '&#8457';
  document.getElementById('wind-speed').innerHTML =
    'Wind: ' + Math.round(weatherData.wind.speed * 3.6) + ' km/h';
  document.getElementById('humidity').innerHTML =
    'Humidity: ' + weatherData.main.humidity + '%&nbsp&nbsp';
  document.getElementById('sunrise').innerHTML =
    'Sunrise: ' +
    String(new Date(weatherData.sys.sunrise * 1000)).substring(16, 21);
  document.getElementById('sunset').innerHTML =
    'Sunset: ' +
    String(new Date(weatherData.sys.sunset * 1000)).substring(16, 21);
  document.getElementById('country-flag').src =
    'https://www.countryflags.io/' + weatherData.sys.country + '/flat/64.png';
  document.getElementById(
    'weather-icon'
  ).src = `images\\icons-light\\${weatherData.weather[0]['icon']}.png`;
}

export default fillWeatherData;
