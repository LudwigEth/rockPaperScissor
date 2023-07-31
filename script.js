function getComputerChoice() {
    let computerChoice;
    let randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return computerChoice = "rock";
    } else if (randomChoice > 2/3) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissor";
    }
}


function playRound() {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock Paper Scissor?");
    playerSelection = playerSelection.toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {
        playerSelection = prompt("choose rock, paper or scissor!");
        playerSelection = playerSelection.toLowerCase();
    }
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                console.log("draw");
                return "draw";
                break;
            case "paper":
                console.log("You lost! Paper beats Rock");
                return "You lost! Paper beats Rock";
                break;
            case "scissor":
                console.log("You win! Rock beats Scissor");
                return "You win! Rock beats Scissor";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock");
                return "You win! Paper beats Rock";
                break;
            case "paper":
                console.log("draw");
                return "draw";
                break;
            case "scissor":
                console.log("You lost! Scissor beats Paper");
                return "You lost! Scissor beats Paper";
                break;
        }
    } else if (playerSelection === "scissor") {
        switch (computerSelection) {
            case "rock":
                console.log("You lost! Rock beats Scissor");
                return "You lost! Rock beats Scissor";
                break;
            case "paper":
                console.log("You win! Scissor beats Paper");
                return "You win! Scissor beats Paper";
                break;
            case "scissor":
                console.log("draw");
                return "draw";
                break;
        }
    } else {
        return "draw";
    }
}

    
function game() {
    let roundsWon = 0;
    let roundsLost = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        switch (playRound()) {
            case "You win! Rock beats Scissor":
            case "You win! Paper beats Rock":
            case "You win! Scissor beats Paper":
                ++roundsWon;
                break;
            case "You lost! Rock beats Scissor":
            case "You lost! Paper beats Rock":
            case "You lost! Scissor beats Paper":
                ++roundsLost;
                break;
            default:
                ++draws;
        }
    }
    if (roundsWon > roundsLost) {
        console.log("Rounds won: " + roundsWon);
        console.log("Rounds lost: " + roundsLost);
        return "You are the Winner!";
    } else if (roundsWon < roundsLost) {
        console.log("Rounds won: " + roundsWon);
        console.log("Rounds lost: " + roundsLost);
        return "Computer is the Winner!";
    } else {
        console.log("Rounds won: " + roundsWon);
        console.log("Rounds lost: " + roundsLost);
        return "A Draw!";
    }
}

