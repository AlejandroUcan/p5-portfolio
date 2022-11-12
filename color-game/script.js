var numSquares = 6;
var colors = [];
var pickedColor = "";
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var btnReset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
   buttons();
   squares();
   resetGame();
}

function buttons() {
   for (let i = 0; i < mode.length; i++) {
      mode[i].addEventListener("click", function() {
         mode[0].classList.remove("selected");
         mode[1].classList.remove("selected");
         this.classList.add("selected");
         numSquares = (this.textContent === "Easy") ? 3 : 6;
         resetGame();
      });
   }   
}

function squares() {
   for (let i = 0; i < square.length; i++) {
      square[i].addEventListener("click", function() {
         let clickedColor = this.style.backgroundColor;
         if (clickedColor === pickedColor) {
            message.textContent = "¡Correcto!";
            btnReset.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
         } else {
            this.style.backgroundColor = "#232323";
            message.textContent = 'Intentalo Nuevamente';
         }
      });
   }
}

function changeColors(color) {
   for (let i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = color;
   } 
}

function resetGame() {
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   
   for (let i = 0; i < square.length; i++) {
      if(colors[i]){
         square[i].style.background = colors[i];
         square[i].style.display="block";
      } else {
         square[i].style.display="none";
      }
   }

   h1.style.backgroundColor = "steelblue";
   message.textContent = "";
   btnReset.textContent = "Nuevos colores";
}

function generateRandomColors(numCuadrados) {
   let arregloColores = [];
   for (let i = 0; i < numCuadrados; i++) {
      arregloColores.push(randomColor());
   }

   return arregloColores;
}

function randomColor() {
   let red = Math.floor(Math.random() * ((255+1)-0) + 0);
   let green = Math.floor(Math.random() * ((255+1)-0) + 0);
   let blue = Math.floor(Math.random() * ((255+1)-0) + 0);

   return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor() {
   let numColor = Math.floor(Math.random() * colors.length);
   return colors[numColor];
}

btnReset.addEventListener("click", function() {
   resetGame();
});