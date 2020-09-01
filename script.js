var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// display css code on initial load of webpage
colorChanger();

// change background color based on the two inputs then display code
function colorChanger() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChanger);

color2.addEventListener("input", colorChanger);