console.log("Helo world");


function getComputerChoice() {
    let computerChoice;
    let randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return computerChoice = "Rock";
    } else if (randomChoice > 2/3) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissor";
    }
}