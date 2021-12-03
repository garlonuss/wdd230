const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=6778ff3ae3c98a1ab1710bfef0023698';
// alert(requestURL); //show me what you're trying to do
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
    const weather_data = jsonObject['list'];
    //    alert("prophets" + prophets[1]);
    //date_found = weather_data[0]["dt_txt"].substring(0, 10);
    //alert(date_found);
    //times = 0;

    let day_data_list1 = weather_data[0].main;
    let day_data_list2 = weather_data[0].weather;
    let t_condition = day_data_list2[0]["description"];
    let t_temp = day_data_list1.temp;
    let t_humid = day_data_list1.humidity;
    let t_speed = weather_data[0].wind.speed;
    let date_found = weather_data[0]["dt_txt"].substring(0, 10);
    document.querySelector('#condition').innerHTML = t_condition;
    //document.querySelector('#temp').innerHTML = Math.round((t_temp - 273.15) * 9 / 5 + 32);
    document.querySelector('#temp').innerHTML = t_temp;
    document.querySelector('#humid').innerHTML = t_humid;
    document.querySelector('#speed').innerHTML = t_speed;
    document.querySelector('#hid1').innerHTML = date_found;
    let ico = jsonObject.list[0].weather[0].icon;
    let iconurl = `https://openweathermap.org/img/w/${ico}.png`;
    // let tmptr = Math.round((weather_data[i].main.temp - 273.15) * 9 / 5 + 32);
    let tmptr = weather_data[0].main.feels_like;
    document.getElementById('d1').setAttribute('src', iconurl);
    document.getElementById('d1').setAttribute('alt', jsonObject.list[0].weather[0].description);
    document.getElementById('t1').innerHTML = tmptr + '&deg;F';
    // document.querySelector('#d1').style.backgroundImage = iconurl;
    // alert(document.getElementById('d1'));
    // alert(document.getElementById('d1').getAttribute('src'));
    // document.getElementById('d1').setAttribute('src', iconurl);
    // document.querySelector('d1').innerHTML = iconurl;
    let daycount = 1;
    for (let i = 0; i < weather_data.length; i++) {
      // let alertext = `i=${i}/daycount=${daycount}`;
      // alert(alertext);
      let timestamp = weather_data[i]["dt_txt"];
      if (document.querySelector('#hid' + daycount).innerHTML != timestamp.substring(0, 10) && timestamp.substring(timestamp.length - 8, timestamp.length) == "00:00:00" && daycount < 5) {
        daycount++;
        date_found = timestamp.substring(0, 10);
        let ico = jsonObject.list[i].weather[0].icon;
        let iconurl = `https://openweathermap.org/img/w/${ico}.png`;
        // let tmptr = Math.round((weather_data[i].main.temp - 273.15) * 9 / 5 + 32);
        let tmptr = weather_data[i].main.feels_like;
        document.getElementById('d' + daycount).setAttribute('src', iconurl);
        document.getElementById('d' + daycount).setAttribute('alt', jsonObject.list[i].weather[0].description);
        document.getElementById('t' + daycount).innerHTML = tmptr + '&deg;F';
        document.querySelector('#hid' + daycount).innerHTML = date_found;
        //alert(date_found);
        // let card = document.createElement('section');
        // let h2 = document.createElement('h2');
        //let bDay = document.createElement('p');
        //bDay.classList.add('MyClass');
        //let bSite = document.createElement('p');
        //      pImg.setAttribute('alt', weather_data[i].temp + ' ' + weather_data[i].feelslike + ' - ' + weather_data[i].pressure + ' - ' + weather_data[i].humidity);
        // let day_data_list1 = weather_data[i].main;
        // let day_data_list2 = weather_data[i].weather;
        // let t_condition = day_data_list2[0]["description"];
        // let t_temp = Math.round((day_data_list1.temp - 273.15) * 9 / 5 + 32);
        // let t_humid = day_data_list1.humidity;
        // let t_speed = weather_data[i].wind.speed;
        // if (i == 0) {
        //   document.querySelector('#condition').innerHTML = t_condition;
        //   document.querySelector('#temp').innerHTML = t_temp;
        //   document.querySelector('#humid').innerHTML = t_humid;
        //   document.querySelector('#speed').innerHTML = t_speed;
        // }


        // h2.textContent = `tmp:${t_temp} cond:${t_condition} humid:${t_humid} spd:${t_speed}`;
        // h2.textContent = weather_data[i].name + ' ' + weather_data[i].lastname;
        // bDay.innerHTML = `<strong>Date of Birth:</strong> ${weather_data[i].birthdate}`;
        // bSite.innerHTML = `<strong>Place of Birth:</strong> ${weather_data[i].birthplace}`;

        // card.appendChild(h2);
        //card.appendChild(bDay);
        //card.appendChild(bSite);
        //      alert(prophets[i].name);

        // document.querySelector('div.fillme').appendChild(card);
      }
    }
  });
const cityURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(cityURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
    const cities = jsonObject['towns'];

    const city = cities.filter((city) => city.name === "Soda Springs");
    for (let i = 0; i < city.length; i++) {

      let eventinfo1 = document.createElement('p')
      let eventinfo2 = document.createElement('p')
      let eventinfo3 = document.createElement('p')
      eventinfo1.classList.add('eventstats')
      eventinfo2.classList.add('eventstats')
      eventinfo3.classList.add('eventstats')
      eventinfo1.textContent = city[i]['events'][0]
      eventinfo2.textContent = city[i]['events'][1]
      eventinfo3.textContent = city[i]['events'][2]

      document.querySelector('#eventinfo').appendChild(eventinfo1);
      document.querySelector('#eventinfo').appendChild(eventinfo2);
      document.querySelector('#eventinfo').appendChild(eventinfo3);
    }
  });
