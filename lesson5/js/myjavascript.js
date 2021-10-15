function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
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

if (today.getDay() == 4) {
  document.querySelector('.banner').setAttribute("style", "display: block;");
}