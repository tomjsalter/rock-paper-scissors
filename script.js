function getComputerChoice() {
  let getNumber = Math.floor(Math.random() * 3);
  if (getNumber === 0) {
    return getNumber = "rock";
  } else if (getNumber === 1) {
    return getNumber = "paper";
  } else if (getNumber === 2) {
    return getNumber = "scissors";
  }
}
