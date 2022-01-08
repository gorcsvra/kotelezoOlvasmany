const themeSwitcher = document.getElementById("switch-theme");
function csere() {
  const selectBody = document.body.classList.toggle("active");
}
themeSwitcher.addEventListener("click", csere);