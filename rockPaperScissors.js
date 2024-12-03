/*
Generate random number between 0 and 1
IF the number is less than 1/3,
    RETURN rock
IF the number is more than 1/3 but less than 2/3,
    RETURN paper
IF the number is more than 2/3,
    RETURN scissors
*/

let computerChoice;
let humanChoice;
let humanScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= (1/3)) {
        return 'Rock';
    } else if (choice >= (2/3)) {
    return 'Paper';
    } else {
    return 'Scissors';
    }
}

computerChoice = getComputerChoice();

/* Logic to get the human Choice

OBTAIN input from the user
compare input to saved variables.
store input to variable
*/

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors..? ");
    if  (choice = 'Rock'){
        return 'Rock';
    } else if (choice = 'Paper') {
        return 'Paper';
    } else if (choice = 'Scissors') {
        return 'Scissors';
    } else {
        return 'invalid input';
    }
}

humanChoice = getHumanChoice();

