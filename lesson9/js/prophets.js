const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//alert(requestURL);
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
  });
/*/
fetch(requestURL)
  .then(response => response.json())
  .then(jsonObject => console.table(jsonObject));
/*/
const prophets = jsonObject['prophets'];
alert("prophets" + prophets[1]);

for (let i = 0; i < prophets.length; i++) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');

  h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

  card.appendChild(h2);
  alert(prophets[i].name);

  document.querySelector('div.cards').appendChild(card);
}
