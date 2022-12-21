let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    // 1-3
    c = Math.floor(Math.random() * 3);
    switch(c) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function doRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    computerSelection=getComputerChoice().toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie!";
        } else if (computerSelection == "paper") {
            computerScore++;
            return "You lose! Paper beats rock!";
        }
        else if (computerSelection == "scissors") {
            playerScore++;
            return "You win! Rock beats paper!"
        }
        else {
            return;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return "You win! Paper beats rock!";
        } else if (computerSelection == "paper") {
            return "Tie!";
        }
        else if (computerSelection == "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper!"
        }
        else {
            return;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors!";
        } else if (computerSelection == "paper") {
            playerScore++;
            return "You win! Scissors beats paper!";
        }
        else if (computerSelection == "scissors") {
            return "Tie!"
        }
        else {
            return;
        }
    } else {
        return;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(doRound(prompt("Rock, paper, or scissors?", getComputerChoice())));
        alert(`${playerScore}:${computerScore}`);
    }
}

game();