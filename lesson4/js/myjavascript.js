function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
document.querySelector('#copyrightyear').textContent = new Date().getFullYear();
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;
