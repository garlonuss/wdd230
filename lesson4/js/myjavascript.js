function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
toDate = dateFormat(new Date(), 'pretty-a');
document.querySelector('#copyrightyear').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Updated: ${document.lastModified}<br>[Today: ${toDate}]`;
