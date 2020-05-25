function computerPlay() {
    let ranNumb = Math.floor(Math.random() * 3);
    let computerSelection = "";

    if (ranNumb === 0) {
        computerSelection = "Rock";
    } else if (ranNumb === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissor";
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    let winner = ""

    if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Rock":
                winner = "Draw";
                break;
            case "Paper":
                winner = "Computer";
                break;
            case "Scissors":
                winner = "Player";
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                winner = "Player";
                break;
            case "Paper":
                winner = "Draw";
                break;
            case "Scissors":
                winner = "Computer";
        }
    } else {
        switch (computerSelection) {
            case "Rock":
                winner = "Computer";
                break;
            case "Paper":
                winner = "Player";
                break;
            case "Scissors":
                winner = "Draw";
        }
    }

    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        const computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if (winner === "Player") {
            alert("You won this round!");
            playerScore++;
        } else if (winner === "Computer") {
            alert("You lost this round =(");
            computerScore++;
        } else {
            alert("It's a draw.");
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulation, you've won!");
    } else if (playerScore < computerScore) {
        console.log("Sorry.. maybe next time =)");
    } else {
        console.log("Oh man... it's a draw. Try again!");
    }

}

console.log("Computer selected: " + computerPlay());


console.log(game());