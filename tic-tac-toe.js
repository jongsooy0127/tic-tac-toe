let turns = 0;

const gameBoard = document.querySelector('.container-1');
const h1 = document.querySelector("h1")
const square = document.querySelectorAll('.square');
const button = document.querySelector("button");
let box1 = document.querySelectorAll('.square')[0];
let box2 = document.querySelectorAll('.square')[1];
let box3 = document.querySelectorAll('.square')[2];
let box4 = document.querySelectorAll('.square')[3];
let box5 = document.querySelectorAll('.square')[4];
let box6 = document.querySelectorAll('.square')[5];
let box7 = document.querySelectorAll('.square')[6];
let box8 = document.querySelectorAll('.square')[7];
let box9 = document.querySelectorAll('.square')[8];
let ul = document.querySelector(".container-2>ul");

gameBoard.addEventListener("click", function tictactoe(evt) {
    let clickedArea = evt.target;
    if (clickedArea.style.overflow !== "visible") {
        let nextPlayer = "X"
        if (turns % 2 === 0) {
            nextPlayer = "O";
        }

        let futureTurn = turns + 1
        let futurePlayer = "X";

        if (futureTurn % 2 === 0) {
            futurePlayer = "O";
        }
        h1.innerHTML = `It is ${futurePlayer}'s turn`

        clickedArea.innerHTML = nextPlayer;
        clickedArea.style.overflow = "visible";
        clickedArea.style.textIndent = "0%";

        turns += 1;
        //================================CHECK FOR WINNER=====================================
        if (((box1.innerHTML === box2.innerHTML) && (box1.innerHTML === box3.innerHTML)) ||
            ((box4.innerHTML === box5.innerHTML) && (box4.innerHTML === box6.innerHTML)) ||
            ((box7.innerHTML === box8.innerHTML) && (box7.innerHTML === box9.innerHTML)) ||
            ((box1.innerHTML === box4.innerHTML) && (box1.innerHTML === box7.innerHTML)) ||
            ((box2.innerHTML === box5.innerHTML) && (box2.innerHTML === box8.innerHTML)) ||
            ((box3.innerHTML === box6.innerHTML) && (box3.innerHTML === box9.innerHTML)) ||
            ((box1.innerHTML === box5.innerHTML) && (box1.innerHTML === box9.innerHTML)) ||
            ((box3.innerHTML === box5.innerHTML) && (box3.innerHTML === box7.innerHTML))) {
            h1.innerHTML = `Player ${nextPlayer} wins!`
            button.style.visibility = "visible";
            // h1.style.visibility = "hidden";
            gameBoard.removeEventListener("click", tictactoe);
        }
    } if (turns === 9) {
        h1.innerHTML = `It is a draw!`
        button.style.visibility = "visible";
    }
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${turns}`
});

gameBoard.addEventListener("mousemove", function mouseout(evt) {
    let hoverArea = evt.target;
    if (hoverArea.innerHTML !== "O" && hoverArea.innerHTML !== "X") {
        hoverArea.style.backgroundColor = "#8DECB4";
    } else {
        hoverArea.style.backgroundColor = "#FA7070";
    }
    if (h1.innerHTML === "Player O wins!" || h1.innerHTML === "Player X wins!" || h1.innerHTML === "It is a draw!") {
        gameBoard.removeEventListener("mousemove", mouseout);
    }
})

gameBoard.addEventListener("mouseout", (evt) => {
    let hoverArea = evt.target;
    hoverArea.style.backgroundColor = "white";
})
