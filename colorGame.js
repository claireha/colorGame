var numSquares = 6; 
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init(){
	modeListeners();
	squareListeners();
	reset();
}

function squareListeners(){
	for(var i = 0; i<squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click",function(){
			// grab color of clicked square 
			var clickedColor = this.style.backgroundColor;

			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor; 
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}


function modeListeners(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
			reset();
		});
	}
}

function changeColors(color){
	// loop through all squares
	for(var i=0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor(){
	// picks a color out of the array to be the winning color 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to arr
	for(var i = 0; i < num; i++){
		//get random color and push into array 
		arr.push(randomColor());
	}
	// return that array 
	return arr; 
}


function randomColor(){
	//pick a red from 0 to 255 
	var r = Math.floor(Math.random() * 256)
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256)
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256)
	// return that color
	return "rgb(" + r + ", " + g + ", " + b + ")"

}

function reset(){
	colors = generateRandomColors(numSquares); 	
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = colors[i]; 
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"; 
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click",function(){
	reset();
})

