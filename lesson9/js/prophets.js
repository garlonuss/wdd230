const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//alert(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    //    alert("prophets" + prophets[1]);

    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bDay = document.createElement('p');
      //bDay.classList.add('MyClass');
      let bSite = document.createElement('p');
      let pImg = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      bDay.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      bSite.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      pImg.src = prophets[i].imageurl;

      card.appendChild(h2);
      card.appendChild(bDay);
      card.appendChild(bSite);
      card.appendChild(pImg);
      //      alert(prophets[i].name);

      document.querySelector('div.cards').appendChild(card);
    }
  });
