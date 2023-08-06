const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 1/3) {
        return rock;
    } else if (randomChoice > 2/3) {
        return paper;
    } else {
        return scissors;
    }
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("choose rock, paper or scissors!");
        playerSelection = playerSelection.toLowerCase();
    }
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "draw";
                break;
            case "paper":
                return "You lost! Paper beats Rock";
                break;
            case "scissors":
                return "You win! Rock beats Scissors";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats Rock";
                break;
            case "paper":
                return "draw";
                break;
            case "scissors":
                return "You lost! Scissors beats Paper";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lost! Rock beats Scissors";
                break;
            case "paper":
                return "You win! Scissors beats Paper";
                break;
            case "scissors":
                return "draw";
                break;
        }
    } else {
        return "draw";
    }
}

const buttons = document.querySelectorAll("button");
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let result = document.querySelector(".result");
let roundsWon = 0;
let roundsLost = 0;

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        scoreReset();
        const rockPaperScissors = button.className;
        results = playRound(rockPaperScissors);
        result.textContent = results;
        
        if (results.includes("win")) {
            ++roundsWon;
        } else if (results.includes("lost")) {
            ++roundsLost;
        }
        playerScore.textContent = roundsWon;
        computerScore.textContent = roundsLost;
        announceWinner();
    });
});

const scoreReset = () => {
    if (roundsWon === 5 || roundsLost === 5) {
        roundsWon = 0;
        roundsLost = 0;
    }
}

const announceWinner = () => {
    if (roundsWon === 5) {
        result.textContent = "YOU'VE WON! Choose a move to start a new Game";
    } else if (roundsLost === 5) {
        result.textContent = "YOU'VE LOST! Choose a move to start a new Game";
    }
}
