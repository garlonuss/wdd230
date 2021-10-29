/*/
This section is for working with the gallery and lazy loading of items in the museum section
/*/
let imagesToLoad = document.querySelectorAll('img[data-src]');
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
}
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/*/
This section is for hiding/showing specific part of the navigation
/*/
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

/*/
This section is for setting the date of the last page update at the bottom of the page
/*/
var today = new Date();
document.querySelector('#copyrightyear').textContent = today.getFullYear();
document.querySelector('#lastupdated').textContent = `Last Updated: ${document.lastModified}`;
var month = new Array();
var weekday = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
document.querySelector('#todaysdate').textContent = `[Today: ${weekday[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}]`;

if (today.getDay() == 5) {
  document.querySelector('.banner').setAttribute("style", "display: block;");
}

/*/
This section is for calculating the number of days since the user has visited the page
/*/
var todaysDate = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
if (!localStorage.getItem('lastVisit')) {
  populateStorage(todaysDate);
} else {
  setVisit(todaysDate);
}

function populateStorage(todaysDate) {
  localStorage.setItem('lastVisit', todaysDate);
  /*/
  alert("last visit: " + todaysDate)
  /*/
  localStorage.setItem('firstVisit', todaysDate);
  /*/
  alert("first visit: " + todaysDate)
  /*/

  setVisit(todaysDate);
}
function parseDateString(dateString) {
  var mdy = dateString.split('/');
  return new Date(mdy[2], mdy[0], mdy[1]);
}
function datediff(first, second) {
  firstDate = parseDateString(first);
  secondDate = parseDateString(second);
  return Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
}

function setVisit(todaysDate) {
  var lastTimeHere = localStorage.getItem('lastVisit');
  var firstTimeHere = localStorage.getItem('firstVisit');
  /*/
  alert(lastTimeHere);
  alert(todaysDate);
  alert(firstTimeHere);
  /*/
  var span = datediff(lastTimeHere, todaysDate);
  /*/
  alert(span);
  /*/
  if (lastTimeHere == todaysDate) {
    if (firstTimeHere == lastTimeHere) {
      document.getElementById('lastTimeHere').textContent = `You haven't visited this page before today.`;
    } else {
      document.getElementById('lastTimeHere').textContent = `Your last visit here was earlier today.`;
    }
  } else {
    document.getElementById('lastTimeHere').textContent = `Your last time viewing this page was ${span} days ago.`;
  }
  localStorage.setItem('lastVisit', todaysDate);
}

/*/
This section is for populating the 5 day forecast
/*/
var dayvalue = today.getDay();
document.querySelector('#day1').textContent = `${weekday[dayvalue]}`;
document.querySelector('#day2').textContent = `${weekday[((dayvalue + 1) % 7)]}`;
document.querySelector('#day3').textContent = `${weekday[((dayvalue + 2) % 7)]}`;
document.querySelector('#day4').textContent = `${weekday[((dayvalue + 3) % 7)]}`;
document.querySelector('#day5').textContent = `${weekday[((dayvalue + 4) % 7)]}`;

