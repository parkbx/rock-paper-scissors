// Declare buttons.
const startBtn = document.querySelector(".btn-start");
const buttons = document.querySelectorAll(".btn-user");
let playCounter = 0; // Play counter.
let playerScore = 0; // Player score.
let computerScore = 0; // Computer score

// Start game when START button is clicked.
startBtn.addEventListener("click", resetGame);

// Adding event listeners to all buttons and play one round of game when player makes selection.
buttons.forEach((btn) => btn.addEventListener("click", playGame));

// Function to start/reset the game.
function resetGame() {
    document.querySelector(".status").textContent =
        "Choose Rock, Paper, or Scissors.";

    buttons.forEach(enableBtns); // Enable user buttons.

    playerScore = 0; // Reset player score.
    computerScore = 0; // Reset computer score.

    // Reset scores.
    document.querySelector(".span-userScore").textContent = playerScore;
    document.querySelector(".span-compScore").textContent = computerScore;
}

function enableBtns(btn) {
    btn.disabled = false; // Rock, Paper, and Scissors buttons are enabled.
    btn.classList.remove("btn-disabled"); // Remove btn-disabled CSS.
}

function disableBtns(btn) {
    btn.disabled = true; // Rock, Paper, and Scissors buttons are disabled.
    btn.classList.add("btn-disabled"); // Add btn-disabled CSS.
}

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
    let winner = "";

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
    // Remove .btn-selected CSS for player button and .btn-comp-selected for computer button.
    if (playCounter > 0) {
        buttons.forEach((btn) => btn.classList.remove("btn-selected"));
        document.querySelector('.btn-comp-selected').classList.remove('btn-comp-selected');
    }

    if (playCounter === 5) return; // Stop if playCounter is 5.

    startBtn.disabled = true; // Disable start button.
    startBtn.classList.add('btn-disabled'); // Add disabled button CSS.

    // Declare player selection and computer selection.
    const playerSelection = this.value;
    const computerSelection = computerPlay();

    this.classList.add("btn-selected"); // Add .btn-selected CSS for player button.

    // Add .btn-comp-selected CSS for computer button.
    if (computerSelection === "ROCK") {
        document.querySelector('.comp-rock').classList.add('btn-comp-selected');
    } else if (computerSelection === "PAPER") {
        document.querySelector('.comp-paper').classList.add('btn-comp-selected');
    } else {
        document.querySelector('.comp-scissors').classList.add('btn-comp-selected');
    }

    // Declare winner.
    let winner = playRound(playerSelection, computerSelection);

    // Determine the winner of the round.
    if (winner === "Player") {
        document.querySelector(".status").textContent = "You won this round!";
        playerScore++;
        document.querySelector(".span-userScore").textContent = playerScore;
    } else if (winner === "Computer") {
        document.querySelector(".status").textContent = "You lost this round =(";
        computerScore++;
        document.querySelector(".span-compScore").textContent = computerScore;
    } else {
        document.querySelector(".status").textContent = "It's a draw..";
    }

    playCounter++; // Increase play counter by 1.

    // When player counts hits 5.
    if (playCounter === 5) {
        startBtn.disabled = false; // Enable START button.
        buttons.forEach(disableBtns); // Disable user buttons.
        buttons.forEach((btn) => btn.classList.remove("btn-selected"));// Remove .btn-selected CSS.
        startBtn.classList.remove('btn-disabled'); // Remove disabled button CSS.
        document.querySelector('.btn-comp-selected').classList.remove('btn-comp-selected'); // Remove .btn-comp-selected CSS from computer button.


        playCounter = 0; // Reset play counter.

        // Reset status text.
        if (playerScore > computerScore) {
            document.querySelector(".status").textContent =
                "Congrats, you won! Click START button for another round!";
        } else if (playerScore < computerScore) {
            document.querySelector(".status").textContent =
                "Sorry.. maybe next time! Click START button for another round!";
        } else {
            document.querySelector(".status").textContent =
                "It's a draw.. Click START button for another round!";
        }
    }
}
