function getComputerChoice() {
    let pcHand = ["ROCK", "PAPER", "SCISSORS"];
    return pcHand[Math.floor(Math.random() * pcHand.length)];
}

function invalidInput() {
    return console.log("You lose because you dont follow instructions");
}

function gameRound(playerSelection, pcSelection) {

    if ((playerSelection == "ROCK" && pcSelection == "SCISSORS") || (playerSelection == "PAPER" && pcSelection == "ROCK") || (playerSelection == "SCISSORS" && pcSelection == "PAPER")) {
        console.log(`Congrats! You Win! ${playerSelection} beat ${pcSelection}`);
    } else if (playerSelection === pcSelection) {
        console.log("It is a draw!");
    } else if (playerSelection != "ROCK" || "PAPER" || "SCISSORS") {
        invalidInput();
    }
    else { console.log(`HAHA! Loser! ${pcSelection} beat ${playerSelection}`); }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
        const pcSelection = getComputerChoice();
        console.log(gameRound(playerSelection, pcSelection));
    }
}

game();