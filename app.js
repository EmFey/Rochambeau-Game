function getComputerChoice() {
    let pcHand = ["Rock", "Paper", "Scissors"];
    return console.log(pcHand[Math.floor(Math.random() * pcHand.length)]);
}

getComputerChoice();