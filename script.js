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
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return `It's a draw. Computer chose: ${computerSelection} Player chose ${playerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return console.log(`Computer wins! Computer chose: ${computerSelection}. Player chose: ${playerSelection}. Computer score: ${++computerScore}`);
  } else {
    return console.log(`Player wins! Player chose: ${playerSelection}. Computer chose: ${computerSelection}. Player score: ${++playerScore}`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (computerScore === playerScore) {
    console.log(`Game is a tie! Computer scored: ${computerScore}. Player scored: ${playerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins the game! Computer scored: ${computerScore}. Player scored: ${playerScore}`);
  } else {
    console.log(`Player wins the game! Player scored: ${playerScore}. Computer scored: ${computerScore}`);
  }
}
