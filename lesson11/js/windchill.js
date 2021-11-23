var temperature = document.querySelector('#temp').textContent;
var windspeed = document.querySelector('#speed').textContent;
var wind_chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16)
if (temperature > 50 || windspeed < 4.8) {
  document.querySelector('#chill').innerHTML = `N/A`;
} else {
  document.querySelector('#chill').innerHTML = `${Math.round(wind_chill)} &deg;F`;
}
