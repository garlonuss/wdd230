const requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6778ff3ae3c98a1ab1710bfef0023698';
//alert(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
    const weather_data = jsonObject['list'];
    //    alert("prophets" + prophets[1]);
    //date_found = weather_data[0]["dt_txt"].substring(0, 10);
    date_found = '';
    //alert(date_found);
    //times = 0;

    let day_data_list1 = weather_data[0].main;
    let day_data_list2 = weather_data[0].weather;
    let t_condition = day_data_list2[0]["description"];
    let t_temp = day_data_list1.temp;
    let t_humid = day_data_list1.humidity;
    let t_speed = weather_data[0].wind.speed;
    document.querySelector('#condition').innerHTML = t_condition;
    document.querySelector('#temp').innerHTML = Math.round((t_temp - 273.15) * 9 / 5 + 32);
    document.querySelector('#humid').innerHTML = t_humid;
    document.querySelector('#speed').innerHTML = t_speed;
    for (let i = 0; i < weather_data.length; i += 8) {
      if (date_found != weather_data[i]["dt_txt"].substring(0, 10)) {
        date_found = weather_data[i]["dt_txt"].substring(0, 10);
        //alert(date_found);
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        //let bDay = document.createElement('p');
        //bDay.classList.add('MyClass');
        //let bSite = document.createElement('p');
        //      pImg.setAttribute('alt', weather_data[i].temp + ' ' + weather_data[i].feelslike + ' - ' + weather_data[i].pressure + ' - ' + weather_data[i].humidity);
        let day_data_list1 = weather_data[i].main;
        let day_data_list2 = weather_data[i].weather;
        let t_condition = day_data_list2[0]["description"];
        let t_temp = Math.round((day_data_list1.temp - 273.15) * 9 / 5 + 32);
        let t_humid = day_data_list1.humidity;
        let t_speed = weather_data[i].wind.speed;
        // if (i == 0) {
        //   document.querySelector('#condition').innerHTML = t_condition;
        //   document.querySelector('#temp').innerHTML = t_temp;
        //   document.querySelector('#humid').innerHTML = t_humid;
        //   document.querySelector('#speed').innerHTML = t_speed;
        // }


        h2.textContent = `tmp:${t_temp} cond:${t_condition} humid:${t_humid} spd:${t_speed}`;
        // h2.textContent = weather_data[i].name + ' ' + weather_data[i].lastname;
        // bDay.innerHTML = `<strong>Date of Birth:</strong> ${weather_data[i].birthdate}`;
        // bSite.innerHTML = `<strong>Place of Birth:</strong> ${weather_data[i].birthplace}`;

        card.appendChild(h2);
        //card.appendChild(bDay);
        //card.appendChild(bSite);
        //      alert(prophets[i].name);

        document.querySelector('div.fillme').appendChild(card);
      }
    }
  });
