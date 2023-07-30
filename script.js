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


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
}