function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
document.querySelector('#copyrightyear').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Updated: ${document.lastModified}`;
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
weekday[1] = "Sunday";
weekday[2] = "Monday";
weekday[3] = "Tuesday";
weekday[4] = "Wednesday";
weekday[5] = "Thursday";
weekday[6] = "Friday";
weekday[7] = "Saturday";
document.querySelector('#todaysdate').textContent = `[Today: ${weekday[Date().getUTCDay()]}, ${month[Date().getMonth()]} ${Date().getDay()}, ${Date().getFullYear()}]`;
