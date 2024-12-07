function getComputerChoice() {
    let choice = Math.random();
    if (choice <= (1/3)) {
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

/*
Logic to play a single round

GET the computer's choice
GET the human choice.
convert human choice into lower-case

CASE
1)
IF computer choice is Rock & human choice is Paper
	RETURN You win! humanChoice beats computerChoice !
ELSE IF computer choice is Rock & human choice is Scissor
	RETURN You lose! computerChoice beats humanChoice !
2)
ELSE IF computer choice is Paper & human choice is Rock
	RETURN You win! humanChoice beats computerChoice !
ELSE IF computer choice is Paper & human choice is Scissor
	RETURN You lose! computerChoice beats humanChoice !
3)
ELSE IF computer choice is Scissor & human choice is Paper
	RETURN You win! humanChoice beats computerChoice !
ELSE IF computer choice is Scissor & human choice is Rock
	RETURN You lose! computerChoice beats humanChoice !
ELSE
	RETURN Draw! Play another round.
*/

const humanChoice = String(getHumanChoice());
const computerChoice = String(getComputerChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
/*setting output values for each possible game state*/
    const playerWin = `You win! ${humanChoice} beats ${computerChoice};`;
    const playerLoss = `You lose! ${computerChoice} beats ${humanChoice};`;
/*logic for deciding the winner. note that you can use || to seperate conditions if they produce the
 * same output*/
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

/* logic for playing the whole game.
 * LOOP while player score and computer score are both less than 5.
 * SET variables as arguments for function
 * CALL playRound function and set each players choice as an argument
 * return Round result
 * CASE IF humanScore is equal to 5
 * return 'you Win'
 * ELSE IF computerScore is equal to 5
 * return 'you Lose'
 */

function playGame() {
    while (humanScore < 5 && computerScore <  5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();


        let roundResult = playRound(humanChoice, computerChoice);
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





