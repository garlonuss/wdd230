const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.6916&units=imperial&lon=112.0011&exclude=hourly,minutely&appid=6778ff3ae3c98a1ab1710bfef0023698';
// alert(requestURL); //show me what you're trying to do
fetch(weatherURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)
    const current = jsonObject['current'];
    const daily = jsonObject['daily'];
    temp_now = current['temp'];
    descr_now = current['weather'][0]['description'];
    humid_now = current['humidity'];
    day1 = daily[0]['temp']['day'];
    day2 = daily[1]['temp']['day'];
    day3 = daily[2]['temp']['day'];
    document.querySelector('#temp').innerHTML = temp_now + '&deg;F';
    document.querySelector('#descr').textContent = descr_now;
    document.querySelector('#humid').textContent = humid_now;
    document.querySelector('#day1').innerHTML = day1 + '&deg;F';
    document.querySelector('#day2').innerHTML = day2 + '&deg;F';
    document.querySelector('#day3').innerHTML = day3 + '&deg;F';
    /**/
    if (console.log('alerts') in jsonObject) {
      const alert_text = jsonObject['alerts'][0]['description'];
      document.querySelector('#alert_text').textContent = alert_text;
      // alert(alert_text);
    } else {
      // document.querySelector('#alert').textContent = "";
      document.querySelector('#alert').classList.toggle("widget");
      document.querySelector('#alert').classList.toggle("hide");
      // alert("nuffin!");
    }/**/
  });
var today = new Date();
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";
weekday[8] = "Monday";
weekday[9] = "Tuesday";

morrow_1 = today.getDay() + 1;
// alert(morrow_1)
morrow_2 = today.getDay() + 2;
morrow_3 = today.getDay() + 3;
document.querySelector('#future1').textContent = weekday[morrow_1] + ":";
document.querySelector('#future2').textContent = weekday[morrow_2] + ":";
document.querySelector('#future3').textContent = weekday[morrow_3] + ":";
