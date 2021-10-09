function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
document.getElementById('copyright').textContent = `&#169; ${Date().getFullYear()} | Ryan Peterson | Utah | BYU-I Online Learning`;
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;
