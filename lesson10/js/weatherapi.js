const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6778ff3ae3c98a1ab1710bfef0023698';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    use_entry = jsObject.list[0];
    document.querySelector('#current-temp').innerHTML = Math.round((use_entry.main.temp - 273.15) * 9 / 5 + 32);
    let ico = use_entry.weather[0].icon;
    const imagesrc = 'https://openweathermap.org/img/w/' + ico + '.png';
    const desc = use_entry.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });