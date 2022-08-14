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
    roundWinner = "This is a tie";
  }
  if ( (playerSelection === 'ROCK' && pcSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && pcSelection === 'PAPER') || (playerSelection === 'PAPER' && pcSelection === 'ROCK')) {
    playerScore++;
    roundWinner = "player";
  }
  if ( (pcSelection === 'ROCK' && playerSelection === 'SCISSORS') || (pcSelection === 'SCISSORS' && playerSelection === 'PAPER') || (pcSelection === 'PAPER' && playerSelection === 'ROCK')) {
    pcScore++;
    roundWinner = "pc";
  }
  resultMessage(roundWinner, playerSelection, pcSelection)
}

function resultMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      result.textContent = `You win (${playerSelection} beats ${computerSelection})`;
      return;
    }
    if (winner === 'pc') {
      result.textContent = `You lose (${playerSelection} is beaten by ${computerSelection})`;
      return;
    }
    result.textContent = "Its a draw";
}

const pcSelection = getComputerChoice();

r.addEventListener("click", () => gameRound("ROCK", getComputerChoice()));
p.addEventListener("click", () => gameRound("PAPER", getComputerChoice()));
s.addEventListener("click", () => gameRound("SCISSORS", getComputerChoice()));

console.log(gameRound(playerSelection, pcSelection));

/*
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
        const pcSelection = getComputerChoice();
        console.log(gameRound(playerSelection, pcSelection));
    }
}
*/