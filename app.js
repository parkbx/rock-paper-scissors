// Declare buttons.
const startBtn = document.querySelector(".btn-start");
const buttons = document.querySelectorAll(".btn-user");
let playCounter = 0; // Play counter.
let playerScore = 0; // Player score.
let computerScore = 0; // Computer score

// Start game when START button is clicked. Rock, Paper, and Scissors buttons are enabled.
startBtn.addEventListener("click", () => {
  document.querySelector(".status").textContent =
    "Choose Rock, Paper, or Scissors.";

  buttons.forEach((btn) => (btn.disabled = false));

  playerScore = 0; // Reset player score.
  computerScore = 0; // Reset computer score.

  // Reset scores.
  document.querySelector(".span-userScore").textContent = playerScore;
  document.querySelector(".span-compScore").textContent = computerScore;
});

// Adding event listeners to all buttons and play one round of game when player makes selection.
buttons.forEach((btn) => btn.addEventListener("click", playGame));

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
  if (playCounter === 5) return; // Stop if playCounter is 5.

  startBtn.disabled = true; // Disable start button.

  // Declare player selection and computer selection.
  const playerSelection = this.value;
  const computerSelection = computerPlay();

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

  if (playCounter === 5) {
    startBtn.disabled = false; // If play counter is 5, enable START button.
    buttons.forEach((btn) => (btn.disabled = true)); // Disable user buttons.

    playCounter = 0; // Reset play counter.

    // Reset status text.
    if (playerScore > computerScore) {
      document.querySelector(".status").textContent =
        "Congratulation, you've won! Click START button for another round!";
    } else if (playerScore < computerScore) {
      document.querySelector(".status").textContent =
        "Sorry.. maybe next time =) Click START button for another round!";
    } else {
      document.querySelector(".status").textContent =
        "Oh man... it's a draw. Try again! Click START button for another round!";
    }
  }
}
