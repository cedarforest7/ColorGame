var colors = manyRandomColors(6);
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var msg = document.querySelector("#message");
var pickedColor = pickColor();
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var buttons = document.querySelectorAll("button");
var numSquares = 6;
rgbDisplay.textContent = pickedColor;

buttons[1].addEventListener("click", function() {
	numSquares = 3;
	this.classList.toggle("selected");
	buttons[2].classList.toggle("selected");
	resetFunc();
});

buttons[2].addEventListener("click", function() {
	numSquares = 6;
	this.classList.toggle("selected");
	buttons[1].classList.toggle("selected");
	resetFunc();
});

reset.addEventListener("click", resetFunc);

function resetFunc() {
	colors = manyRandomColors(numSquares);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	reset.textContent = "New Color";
	msg.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		if (i > 2) {
			if (numSquares == 3) {
				squares[i].style.display = "none";
			} else {
				squares[i].style.display = "block";
			}
		}	
	}
}

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		if(this.style.background === pickedColor) {
			msg.textContent = "Correct!";
			reset.textContent = "Play Again?";
			changeColors(pickedColor);
		} else {
			msg.textContent = "Try Again";
			this.style.background = "#232323";
		}
	});
}



function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	h1.style.background = color;
}

function pickColor() {
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function manyRandomColors(num) {
	var manyColors = [];
	for (var i = 0; i < num; i++) {
		manyColors.push(randomColor());
	}
	return manyColors;
}

function randomColor() {
	var r, g, b;
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}