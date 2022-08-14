const r = document.querySelector(".rock");
const p = document.querySelector(".paper");
const s = document.querySelector(".scissors");
const userPoint = document.querySelector(".userPoint");
const pcPoint = document.querySelector(".pcPoint");
const result = document.querySelector(".result-text");
const gameResult = document.querySelector(".game-result");

let playerScore = 0;
let pcScore = 0;



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


function game() {
    if (playerScore === 5) {
        gameResult.textContent = "You won the game";
    }
    if (pcScore === 5) {
        gameResult.textContent = "Computer won the game";
    }
}



function Tie() {
    result.textContent = "It's a draw";
}

function Win() {
    result.textContent = "You won";
    playerScore++;
    userPoint.textContent = playerScore;
    pcPoint.textContent = pcScore;
}

function Lose() {
    result.textContent = "Yo lost";
    pcScore++;
    userPoint.textContent = playerScore;
    pcPoint.textContent = pcScore;
}



function main() {
    r.addEventListener("click", () => gameRound("ROCK", getComputerChoice()));
    p.addEventListener("click", () => gameRound("PAPER", getComputerChoice()));
    s.addEventListener("click", () => gameRound("SCISSORS", getComputerChoice()));
    game();
}

main();