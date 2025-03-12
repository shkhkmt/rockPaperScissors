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
winCond.textContent = "First player to five wins."
rules.appendChild(winCond); 

let weapon = document.createElement('p'); 
weapon.textContent = "Choose your weapon!"; 
rules.appendChild(weapon); 

let human = document.createElement('div'); 
human.id = 'human'; 
let humanIcon = document.createElement('div'); 
humanIcon.id = 'humanIcon'
let humanActions = document.createElement('div'); 
humanActions.id = 'humanActions'; 

let robot = document.createElement('div'); 
robot.id = 'robot'; 
let robotIcon = document.createElement('div');
robotIcon.id = 'robotIcon'; 
let robotActions = document.createElement('div'); 
robotActions.id = 'robotActions';
let hmnScr = document.createElement('p'); 
hmnScr.id = 'hmnScr'; 
hmnScr.textContent = `Human Score:`

let resultsHuman = document.createElement('div'); 
resultsHuman.id = 'hmnRslt'; 
let resultsRobot = document.createElement('div');
resultsRobot.id = 'rbtRslt'; 
let rbtScr = document.createElement('p');
rbtScr.id = 'rbtScr'; 
rbtScr.textContent = 'Robot Score:' 

let footer = document.createElement('footer'); 
footer.id = 'footer'; 
footer.textContent = 'Copyright © 2025 shkhkmt'; 

game.appendChild(human);
human.appendChild(humanIcon);
human.appendChild(resultsHuman);
resultsHuman.appendChild(hmnScr); 
human.appendChild(humanActions);

game.appendChild(robot); 
robot.appendChild(robotIcon);
robot.appendChild(resultsRobot);
resultsRobot.appendChild(rbtScr); 
robot.appendChild(robotActions); 

content.appendChild(footer); 

let imgRck = document.createElement('img'); 
let imgPpr = document.createElement('img'); 
let imgScrs = document.createElement('img'); 
let imgHmn = document.createElement('img'); 
let imgRbt = document.createElement('img')

let btnRock = document.createElement('button');
btnRock.id = 'rckBtn'; 
let btnPaper = document.createElement('button'); 
btnPaper.id = 'pprBtn'; 
let btnScissors = document.createElement('button'); 
btnScissors.id = 'scrsBtn'; 

imgRck.src = './img/rock-svgrepo-com.svg';
imgRck.alt = 'Rock'; 
imgRck.id = 'imgRck';  

imgPpr.src = './img/paper-svgrepo-com.svg'; 
imgPpr.alt = 'Paper';
imgPpr.id = 'imgPpr';  

imgScrs.src = './img/scissors-svgrepo-com.svg'; 
imgScrs.alt = 'Scissors';
imgScrs.id = 'imgScrs'; 

imgHmn.src = './img/human-handsup-svgrepo-com.svg'
imgHmn.alt = 'human icon'; 

imgRbt.src = './img/robot-svgrepo-com (1).svg';
imgRbt.alt = 'robot icon'; 

humanIcon.appendChild(imgHmn); 
robotIcon.appendChild(imgRbt); 
humanActions.appendChild(btnRock); 
humanActions.appendChild(btnPaper); 
humanActions.appendChild(btnScissors);

btnRock.appendChild(imgRck); 
btnPaper.appendChild(imgPpr); 
btnScissors.appendChild(imgScrs); 

let robotRock = btnRock.cloneNode(true); 
let robotPaper = btnPaper.cloneNode(true); 
let robotScissors = btnScissors.cloneNode(true); 

document.getElementById('robotActions').appendChild(robotRock); 
document.getElementById('robotActions').appendChild(robotPaper); 
document.getElementById('robotActions').appendChild(robotScissors);


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

let computerChoice = getComputerChoice(); 
let humanChoice; 

humanActions.addEventListener('click', (event) => {
  let target = event.target; 

  switch(target.id) {
    case 'imgRck': 
      humanChoice = 'rock';
      break; 
    case 'imgPpr':
      humanChoice = 'paper'; 
      break; 
    case 'imgScrs': 
      humanChoice = 'scissors'; 
      break; 
    default:
      return null; 
  }
});

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
      hmnRslt.appendChild(playerWin); 
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

let result = playRound(humanChoice, computerChoice); 
/*
function playGame() {
    while (humanScore < 5 && computerScore <  5) {
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
*/ 
