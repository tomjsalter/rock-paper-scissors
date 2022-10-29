const buttons = document.querySelectorAll("button");
const displayResults = document.querySelector(".results-display");
const roundScore = document.querySelector("#roundScore");
const showCompResult = document.querySelector("#compResult");
const showPlayerResult = document.querySelector("#playerResult");
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
    roundScore.textContent = `It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`;
    displayResults.insertBefore(".scoreboard");
    console.log(`It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    roundScore.textContent = `Computer wins! Computer chose: ${computerSelection}. Player chose: ${playerSelection}.`;
    showCompResult.textContent = `${++computerScore}`;
    displayResults.insertBefore(".scoreboard");
  } else {
    roundScore.textContent = `Player wins! Player chose: ${playerSelection}. Computer chose: ${computerSelection}.`;
    showPlayerResult.textContent = `${++playerScore}`;
    displayResults.insertBefore(".scoreboard");
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