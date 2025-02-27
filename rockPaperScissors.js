const linkElement = document.createElement('link'); 
linkElement.rel = 'stylesheet'; 
linkElement.type = 'text/css'; 
linkElement.href = 'styles.css'; 
document.head.appendChild(linkElement); 

let content = document.querySelector('#content'); 
let rules = document.querySelector('.rules'); 
let game = document.querySelector('.game');

let header = document.createElement('header'); 
header.textContent = "Rock, Paper, Scissors"; 
content.insertBefore(header, rules); 

let winCond = document.createElement('p'); 
winCond.textContent = "First player to five wins!"; 
rules.appendChild(winCond); 

let weapon = document.createElement('p'); 
weapon.textContent = "Choose your weapon!"; 
rules.appendChild(weapon); 

let human = document.createElement('div'); 
human.id = 'human'; 
let hrck = document.createElement('div'); 
hrck.id = "hrck"; 
let hppr = document.createElement('div'); 
hppr.id = "hppr"; 
let hscrs = document.createElement('div'); 
hscrs.id = "hscrs"; 

let robot = document.createElement('div'); 
robot.id = "robot"; 
let rrck = document.createElement('div'); 
rrck.id = "rrck";
let rppr = document.createElement('div'); 
rppr.id = "rppr"; 
let rscrs = document.createElement('div'); 
rscrs.id = "rscrs"; 

game.appendChild(human); 
human.appendChild(hrck);
human.appendChild(hppr); 
human.appendChild(hscrs); 

game.appendChild(robot); 
robot.appendChild(rrck); 
robot.appendChild(rppr); 
robot.appendChild(rscrs); 

let btnRock = document.createElement('button'); 
let btnPaper = document.createElement('button'); 
let btnScissors = document.createElement('button'); 

let imgRck = document.createElement('img'); 
let imgPpr = document.createElement('img'); 
let imgScrs = document.createElement('img'); 

imgRck.src = './img/rock-svgrepo-com.svg';
imgRck.alt = 'Rock'; 

imgPpr.src = './img/paper-svgrepo-com.svg'; 
imgPpr.alt = 'Paper'; 

imgScrs.src = './img/scissors-svgrepo-com.svg'; 
imgScrs.alt = 'Scissors'; 

hrck.appendChild(btnRock); 
hppr.appendChild(btnPaper); 
hscrs.appendChild(btnScissors);

btnRock.appendChild(imgRck); 
btnPaper.appendChild(imgPpr); 
btnScissors.appendChild(imgScrs); 

let robotRock = btnRock.cloneNode(true); 
let robotPaper = btnPaper.cloneNode(true); 
let robotScissors = btnScissors.cloneNode(true); 

document.getElementById('rrck').appendChild(robotRock); 
document.getElementById('rppr').appendChild(robotPaper); 
document.getElementById('rscrs').appendChild(robotScissors); 

/*
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
*/ 


