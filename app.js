// Declare buttons.
const startBtn = document.querySelector('.btn-start');
const buttons = document.querySelectorAll('.btn-user');
let playCounter = 0; // Play counter.

// Start game when START button is clicked. Rock, Paper, and Scissors buttons are enabled.
startBtn.addEventListener('click', () => {
    buttons.forEach(btn => btn.disabled = false);
});

// Adding event listeners to all buttons and play one round of game when player makes selection.
buttons.forEach(btn => btn.addEventListener('click', playGame));

// Function to make computer selection.
function computerPlay() {
    let ranNumb = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (ranNumb === 0) {
        computerChoice = "ROCK";
    } else if (ranNumb === 1) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

// Function to determine the winner
function playRound(playerSelection, computerSelection) {

    let winner = ""

    if (playerSelection === "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                winner = "Draw";
                break;
            case "PAPER":
                winner = "Computer";
                break;
            case "SCISSORS":
                winner = "Player";
        }
    } else if (playerSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                winner = "Player";
                break;
            case "PAPER":
                winner = "Draw";
                break;
            case "SCISSORS":
                winner = "Computer";
        }
    } else {
        switch (computerSelection) {
            case "ROCK":
                winner = "Computer";
                break;
            case "PAPER":
                winner = "Player";
                break;
            case "SCISSORS":
                winner = "Draw";
        }
    }

    return winner;
}

// Function to play the game.
function playGame() {
    if (playCounter === 5) return; // Stop if playCounter is 5.

    startBtn.disabled = true; // Disable start button.

    // Declare scores.
    let playerScore = 0;
    let computerScore = 0;

    const playerSelection = this.value;
    const computerSelection = computerPlay();

    console.log("player selection:" + playerSelection + " player score: " + playerScore);
    console.log("computer selection:" + computerSelection + " computer score: " + computerScore);

    playCounter++;

    if (playCounter === 5) {
        startBtn.disabled = false; // If play counter is 5, enable START button.
        buttons.forEach(btn => btn.disabled = true); // Disable user buttons.
    }

    // for (let i = 0; i < 5; i++) {
    //     // const playerInput = prompt("Rock, Paper, or Scissors?");
    //     // const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    //     const playerSelection = this.value;
    //     const computerSelection = computerPlay();

    //     console.log("player selection:" + playerSelection + " player score: " + playerScore);
    //     console.log("computer selection:" + computerSelection + " computer score: " + computerScore);

        // let winner = playRound(playerSelection, computerSelection);

        // if (winner === "Player") {
        //     alert("You won this round!");
        //     playerScore++;
        // } else if (winner === "Computer") {
        //     alert("You lost this round =(");
        //     computerScore++;
        // } else {
        //     alert("It's a draw.");
        // }
    // }

    // if (playerScore > computerScore) {
    //     console.log("Congratulation, you've won!");
    // } else if (playerScore < computerScore) {
    //     console.log("Sorry.. maybe next time =)");
    // } else {
    //     console.log("Oh man... it's a draw. Try again!");
    // }

    

}

// console.log("Computer selected: " + computerPlay());


// console.log(game());