function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
document.querySelector('#copyrightyear').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Updated: ${document.lastModified}`;
document.querySelector('#todaysdate').textContent = `[Today: ${dateFormat(new Date(), 'pretty-a')}]`;
