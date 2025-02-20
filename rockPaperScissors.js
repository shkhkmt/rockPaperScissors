
function getComputerChoice() {
    let choice = Math.random();
    if (choice <= (1/3)) { // this can be an arrow function
        return 'rock';
    } else if (choice >= (2/3)) {
    return 'paper';
    } else {
    return 'scissors';
    }
}

function getHumanChoice() {
    let choice = String(prompt("Rock, Paper or Scissors..? ").toLowerCase());
    if  (choice == 'rock'){
        return String(choice)
    } else if (choice == 'paper') {
        return String(choice)
    } else if (choice == 'scissors') {
        return String(choice)
    } else {
        return 'Please try again';
    }
}
// setting global variables for functions.

const humanChoice = String(getHumanChoice());
const computerChoice = String(getComputerChoice());
let humanScore = 0;
let computerScore = 0;

// setting constants to return console output. and logic for playing a round.
function playRound(humanChoice, computerChoice) {
    const playerWin = `You win! ${humanChoice} beats ${computerChoice};`;
    const playerLoss = `You lose! ${computerChoice} beats ${humanChoice};`;

    if ((humanChoice == 'rock'  && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanScore++;
        return playerWin;
    }

    else if ((humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'paper')) {
        computerScore++;
        return playerLoss;
    }
    else {
        return 'Draw! Play another round'
    }
}

//  Looping the game to stop when the first player gets to 5.
function playGame() {
    while (humanScore < 5 && computerScore <  5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let roundResult = playRound(humanChoice, computerChoice); // storing round result from playRound() and printing to console.
        console.log(roundResult);

        console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore === 5) {
        return `You win! Human: ${humanScore} - Computer: ${computerScore};`;
    }

    else if (computerScore === 5){
        return `You lose! Human: ${humanScore} - Computer: ${computerScore};`;
    }
}




