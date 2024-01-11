function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");

  let buttonEl = document.getElementById("button");

  if (buttonEl.innerHTML === "Dark mode") {
    buttonEl.innerHTML = "Light mode";
  } else {
    buttonEl.innerHTML = "Dark mode";
  }
}
