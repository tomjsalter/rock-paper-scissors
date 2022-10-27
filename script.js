const buttons = document.querySelectorAll("button");
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let getNumber = Math.floor(Math.random() * 3);
  switch (getNumber) {
    case 0:
      return (getNumber = "rock");
      break;
    case 1:
      return (getNumber = "paper");
      break;
    case 2:
      return (getNumber = "scissors");
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
    return `It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return console.log(
      `Computer wins! Computer chose: ${computerSelection}. Player chose: ${playerSelection}. Computer score: ${++computerScore}`
    );
  } else {
    return console.log(
      `Player wins! Player chose: ${playerSelection}. Computer chose: ${computerSelection}. Player score: ${++playerScore}`
    );
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "rock") {
      playRound("rock");
    } else if (button.id === "paper") {
      playRound("paper");
    } else if (button.id === "scissors") {
      playRound("scissors");
    }
  });
});