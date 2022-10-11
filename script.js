function getComputerChoice() {
  let getNumber = Math.floor(Math.random() * 3);
switch (getNumber) {
  case 0:
    return getNumber = "rock";
    break;
  case 1:
    return getNumber = "paper";
    break;
  case 2:
    return getNumber = "scissors";
    break;
}
}

// make user input case insensitive
// compare computer and users choice and return result

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  playerSelection = prompt('Rock, Paper or Scissors?');
  console.log(playerSelection);

}