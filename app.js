const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userPoint = document.querySelector(".userPoint");
const pcPoint = document.querySelector(".pcPoint");
const result = document.querySelector(".result-text");
const gameResult = document.querySelector(".game-result");
const winningScore = 5;

let playerScore = 0;
let pcScore = 0;

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function gameRound(playerSelection, pcSelection) {
  switch(playerSelection + pcSelection) {
    case "ROCKSCISSORS":
    case "PAPERROCK":
    case "SCISSORSPAPER":
      win();
      break;
    case "ROCKPAPER":
    case "PAPERSCISSORS":
    case "SCISSORSROCK":
      lose();
      break;
    default:
      tie();
  }
}

function tie() {
  result.textContent = "It's a draw";
}

function win() {
  playerScore++;
  result.textContent = "You won";
  userPoint.textContent = playerScore;
  if (playerScore === winningScore) {
    gameResult.textContent = "You won the game";
    gameResult.classList.add("won");
    disableButtons();
  }
}

function lose() {
  pcScore++;
  result.textContent = "You lost";
  pcPoint.textContent = pcScore;
  if (pcScore === winningScore) {
    gameResult.textContent = "Computer won the game";
    gameResult.classList.add("lose");
    disableButtons();
  }
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function reset() {
  playerScore = 0;
  pcScore = 0;
  userPoint.textContent = playerScore;
  pcPoint.textContent = pcScore;
  result.textContent = "";
  gameResult.textContent = "";
  gameResult.classList.remove("won", "lose");
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

function main() {
  rock.addEventListener("click", () => gameRound("ROCK", getComputerChoice()));
  paper.addEventListener("click", () => gameRound("PAPER", getComputerChoice()));
  scissors.addEventListener("click", () => gameRound("SCISSORS", getComputerChoice()));
}

main();