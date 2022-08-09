function getComputerChoice() {
    let pcHand = ["ROCK", "PAPER", "SCISSORS"];
    return pcHand[Math.floor(Math.random() * pcHand.length)];
}

function gameRound(playerSelection, pcSelection) {
    
    if ((playerSelection == "ROCK" && pcSelection == "SCISSORS") || (playerSelection == "PAPER" && pcSelection == "ROCK") || (playerSelection == "SCISSORS" && pcSelection == "PAPER")) {
        console.log(`Congrats! You Win! ${playerSelection} beat ${pcSelection}`);
    } else if (playerSelection === pcSelection) {
        console.log("It is a draw!");
    }
    else { console.log(`HAHA! Loser! ${pcSelection} beat ${playerSelection}`); }
}

const playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
const pcSelection = getComputerChoice();

console.log(gameRound(playerSelection, pcSelection));