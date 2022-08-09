function getComputerChoice() {
    let pcHand = ["ROCK", "PAPER", "SCISSORS"];
    return pcHand[Math.floor(Math.random() * pcHand.length)];
}

function invalidInput() {
    return console.log("You lose because you dont follow instructions");
}

function gameRound(playerSelection, pcSelection) {
    let roundResult;

    if ((playerSelection == "ROCK" && pcSelection == "SCISSORS") || (playerSelection == "PAPER" && pcSelection == "ROCK") || (playerSelection == "SCISSORS" && pcSelection == "PAPER")) {
        roundResult = console.log(`Congrats! You Win! ${playerSelection} beat ${pcSelection}`);
    } else if (playerSelection === pcSelection) {
        roundResult = console.log("It is a draw!");
    } else if (playerSelection != "ROCK" || "PAPER" || "SCISSORS") {
        roundResult = invalidInput();
    }
    else { roundResult = console.log(`HAHA! Loser! ${pcSelection} beat ${playerSelection}`); }

    return roundResult;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
        const pcSelection = getComputerChoice();
        console.log(gameRound(playerSelection, pcSelection));
    }
}

game();