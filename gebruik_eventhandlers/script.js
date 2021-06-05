const alertButton = document.querySelector(".btn-alert");

const clicked = function () {
    alert("Button clicked");
};
alertButton.addEventListener("click", clicked);

const backgroundButton = document.querySelector(".backgrnd");
blueBackground = document.querySelector(".blue-background");
const toggleColor = function () {
    blueBackground.classList.toggle("red-background");
};
backgroundButton.addEventListener("click", toggleColor);
