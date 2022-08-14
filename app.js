const r = document.querySelector(".rock");
const p = document.querySelector(".paper");
const s = document.querySelector(".scissors");
let playerScore = 0;
let pcScore = 0;
let roundWinner = '';
let result = document.querySelector(".resultMessage");


function getComputerChoice() {
    let pcHand = ["ROCK", "PAPER", "SCISSORS"];
    return pcHand[Math.floor(Math.random() * pcHand.length)];
}


function gameRound(playerSelection, pcSelection) {
  if (playerSelection === pcSelection) {
    return Tie();
  }
  if ( (playerSelection === 'ROCK' && pcSelection === 'SCISSORS') || (playerSelection === 'PAPER' && pcSelection === 'ROCK') || (playerSelection === 'SCISSORS' && pcSelection === 'PAPER')) {
    return Win();
  }
  if ( (pcSelection === 'ROCK' && playerSelection === 'SCISSORS') || (pcSelection === 'PAPER' && playerSelection === 'ROCK') || (pcSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
    return Lose();
  }
}

function Draw() {
    console.log("Its a draw");
}

function Win() {
    console.log("You win");
}

function Lose() {
    console.log("You lose");
}

r.addEventListener("click", () => gameRound("ROCK", getComputerChoice()));
p.addEventListener("click", () => gameRound("PAPER", getComputerChoice()));
s.addEventListener("click", () => gameRound("SCISSORS", getComputerChoice()));

console.log();

/*
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
        const pcSelection = getComputerChoice();
        console.log(gameRound(playerSelection, pcSelection));
    }
}
*/