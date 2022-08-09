function getComputerChoice() {
    let pcHand = ["ROCK", "PAPER", "SCISSORS"];
    return console.log(pcHand[Math.floor(Math.random() * pcHand.length)]);
}

function gameRound(playerSelection, pcSelection) {
    playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
    pcSelection = getComputerChoice();
    
    if ((playerSelection == "ROCK" && pcSelection == "SCISSORS") || (playerSelection == "PAPER" && pcSelection == "ROCK") || (playerSelection == "SCISSORS" && pcSelection == "PAPER")) {
        console.log("Congrats! You Win!");
    } else if (playerSelection === pcSelection) {
        console.log("It is a draw!");
    }
    else { console.log(`HAHA! Loser! ${pcSelection} beat ${playerSelection}`); }
}

gameRound();