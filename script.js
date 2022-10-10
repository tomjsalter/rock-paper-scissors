// create function called getComputerChoice
function getComputerChoice() {

}

// generate random number from 1 to 3
let getNumber = Math.floor(Math.random() * 3);

// assign each number a string: 'rock', 'paper' or 'scissors'
if (getNumber === 0) {
    getNumber = 'rock';
} else if (getNumber === 1) {
    getNumber = 'paper';
} else if (getNumber === 2) {
    getNumber = 'scissors';
}

// return computer choice