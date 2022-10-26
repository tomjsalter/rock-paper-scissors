const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
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

rockBtn.addEventListener("click", playRound("rock", computerSelection));
paperBtn.addEventListener("click", playRound("paper", computerSelection));
scissorsBtn.addEventListener("click", playRound("scissors", computerSelection));
