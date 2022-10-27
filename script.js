const buttons = document.querySelectorAll("button");
const displayResults = document.querySelector(".results-display");
const drawPara = document.createElement("p");
const compPara = document.createElement("p");
const userPara = document.createElement("p");
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
    drawPara.textContent = `It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`;
    displayResults.appendChild(drawPara);
    console.log(`It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    compPara.textContent = `Computer wins! Computer chose: ${computerSelection}. Player chose: ${playerSelection}. Computer score: ${++computerScore}`;
    displayResults.appendChild(compPara);
    console.log(`Computer wins! Computer chose: ${computerSelection}. Player chose: ${playerSelection}. Computer score: ${++computerScore}`);
  } else {
    userPara.textContent = `Player wins! Player chose: ${playerSelection}. Computer chose: ${computerSelection}. Player score: ${++playerScore}`;
    displayResults.appendChild(userPara);
    console.log(`Player wins! Player chose: ${playerSelection}. Computer chose: ${computerSelection}. Player score: ${++playerScore}`);
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