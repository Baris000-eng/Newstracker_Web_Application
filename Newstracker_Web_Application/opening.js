const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const darkMode = document.getElementById("dark-mode");

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

signupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

const bgColorDropdown = document.getElementById("bg-color");

bgColorDropdown.addEventListener("change", () => {
  const body = document.querySelector("body");
  const textColor = isBrightColor(bgColorDropdown.value) ? "#333" : "#fff";
  body.style.backgroundColor = bgColorDropdown.value;
  body.style.color = textColor;
});

const bgLabel = document.querySelector("label[for='bg-color']");
const bgColorDiv = document.createElement("div");
bgColorDiv.style.display = "flex";
bgColorDiv.style.justifyContent = "center";
bgColorDiv.style.alignItems = "center";
bgLabel.parentNode.insertBefore(bgColorDiv, bgLabel.nextSibling);
bgColorDiv.appendChild(bgLabel);
bgColorDiv.appendChild(bgColorDropdown);

bgColorDropdown.addEventListener("change", () => {
  const body = document.querySelector("body");
  const textColor =
    isBrightColor(bgColorDropdown.value) ? "#333" : "#fff";
  body.style.backgroundColor = bgColorDropdown.value;
  body.style.color = textColor;
});

const playBckgrnd = document.getElementById("play-music-btn");
const audio = document.getElementById('background-music');
playBckgrnd.addEventListener("click", () => {
  audio.play();
});

const stopBckgrnd = document.getElementById("stop-music-btn");
stopBckgrnd.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

const pauseBckgrnd = document.getElementById("pause-music-btn");
pauseBckgrnd.addEventListener("click", () => {
    audio.pause();
});

function isBrightColor(color) {
  const hex = color.replace('#', '');
  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);
  const brightness = ((red * 298) + (green * 586) + (blue * 113)) / 1000;
  return brightness > 155;
}

// Adding more options to the dropdown
const moreColorOptions = [
  { label: "Dark Gray", value: "#444444" },
  { label: "Deep Sky Blue", value: "#00bfff" },
  { label: "Olive Green", value: "#6b8e23" },
  { label: "Orchid", value: "#da70d6" },
];

moreColorOptions.forEach((colorOption) => {
  const optionEl = document.createElement("option");
  optionEl.textContent = colorOption.label;
  optionEl.value = colorOption.value;
  bgColorDropdown.appendChild(optionEl);
});