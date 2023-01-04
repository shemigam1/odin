// const body = document.querySelector("body");

// create main container
const main = document.getElementById("main");
// const range = prompt("What is your range? ");
let range = 3;
// setup the board
// create grid of 16x16
for (let i = 0; i < range * range; i++) {
  const boardPiece = document.createElement("div");
  boardPiece.classList.add("board-piece");
  main.appendChild(boardPiece);
}

main.innerHTML = "hello";

// css
// main.style.cssText =
//   "display: grid; background-color: black; width: 1000px; height: 1000px;";
