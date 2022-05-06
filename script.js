var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

css.textContent = body.style.background + ";"

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

function randomColorAssigner() {
    var rgb1 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    var rgb2 = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    color1.value = rgb1;
    color2.value = rgb2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColorAssigner);

button.addEventListener("click", setGradient);