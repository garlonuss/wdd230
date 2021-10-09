function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
document.getElementById('copyrightyear').textContent = new Date().getFullYear();
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;
