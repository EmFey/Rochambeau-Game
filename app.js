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
    Tie();
  }

  if ( (playerSelection === 'ROCK' && pcSelection === 'SCISSORS') || (playerSelection === 'PAPER' && pcSelection === 'ROCK') || (playerSelection === 'SCISSORS' && pcSelection === 'PAPER')) {
    Win();
  }

  if ( (pcSelection === 'ROCK' && playerSelection === 'SCISSORS') || (pcSelection === 'PAPER' && playerSelection === 'ROCK') || (pcSelection === 'SCISSORS' && playerSelection === 'PAPER')) ;{
    Lose();
  }
}

function Tie() {
  result.textContent = "It's a draw";
}

function Win() {
  playerScore++;
  result.textContent = "You won";
  userPoint.textContent = playerScore;
  if (playerScore === 5) {
    gameResult.textContent = "You won the game";
    gameResult.classList.add("won");
    disableButtons();
  }
}

function Lose() {
  pcScore++;
  result.textContent = "You lost";
  pcPoint.textContent = pcScore;
  if (pcScore === 5) {
    gameResult.textContent = "Computer won the game";
    gameResult.classList.add("lose");
    disableButtons();
  }
}

function disableButtons() {
  r.disabled = true;
  p.disabled = true;
  s.disabled = true;
}
  
function main() {
  r.addEventListener("click", () => gameRound("ROCK", getComputerChoice()));
  p.addEventListener("click", () => gameRound("PAPER", getComputerChoice()));
  s.addEventListener("click", () => gameRound("SCISSORS", getComputerChoice()));
}
  
main();