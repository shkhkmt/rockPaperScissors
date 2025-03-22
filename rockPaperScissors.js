// UI 

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
robotRock.id = 'rbtRck'; 
let robotPaper = btnPaper.cloneNode(true);
robotPaper.id = 'rbtPpr';
let robotScissors = btnScissors.cloneNode(true);
robotScissors.id = 'rbtScrs'; 

document.getElementById('robotActions').appendChild(robotRock); 
document.getElementById('robotActions').appendChild(robotPaper); 
document.getElementById('robotActions').appendChild(robotScissors);

document.querySelector('.rules'); 
let rslts = document.createElement('div'); 
rslts.id = 'rslts'; 
rules.appendChild(rslts); 
document.querySelector('.rslts'); 

let roundResult = document.createElement('p');
roundResult.id = "roundResult"; 
rslts.appendChild(roundResult); 

// GAME  

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


// Global variables 

let humanScore = 0;
let computerScore = 0;
let humanChoice; 
let computerChoice;
let result; 
let playerWin = `You win this round. Play again.`
let playerLoss =  `You lose this round. Play again.` 
let resetBtn; 

function updateResult(result) {
  
    document.querySelector('#hmnScr');
    hmnScr.textContent = `Human Score: ${humanScore}`; 
    document.querySelector('#rbtScr'); 
    rbtScr.textContent = `Robot Score: ${computerScore}`;
    document.querySelector('#roundResult'); 
    roundResult.textContent = result; 

}


function playRound(humanChoice, computerChoice) {
  
  if ((humanScore > 4) || (computerScore > 4)) {
    gameOver();
  }
  else if ((humanChoice == 'rock'  && computerChoice  == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')) {
    humanScore++;
    result = playerWin; 
    }
  else if ((humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'paper')) {
    computerScore++;
    result = playerLoss;
    }
  else {
    result = 'Draw! Play another round'
    }
  
  updateResult(result); 
  
  if (humanScore > 4 || computerScore > 4) {
    gameOver()
  }
}


function handleClick(event) {
  
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
      return;
  }
  
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

}

function handleReset(event) {
  
  if (event.target.id == 'resetBtn') {
    resetGame();
  }
}

content.addEventListener('click', handleClick); 

function gameOver(playRound) {

  let resetDiv = document.createElement('div'); 
  resetDiv.id = 'resetDiv'; 
  let resetBtn = document.createElement('button'); 
  resetBtn.id = 'resetBtn'; 
  resetBtn.textContent = 'Reset';
  resetDiv.appendChild(resetBtn); 
  content.insertBefore(resetDiv, game); 

  if (humanScore > 4) {
    result = "Game Over! You win."; 
    } 
    else if (computerScore > 4) {
        result = "Game Over! You lose."; 
    }

  updateResult(result); 
  resetBtn.addEventListener('click', handleReset); 
  content.removeEventListener('click', handleClick); 
  
}

function resetGame(handleReset) { 
  content.removeChild(resetDiv); 
  humanScore = 0; 
  computerScore = 0; 
  hmnScr.textContent = `Human Score: ${humanScore}`;
  rbtScr.textContent = `Robot Score: ${computerScore}`; 
  result = 'New Game Started...';
  updateResult(result); 
  content.addEventListener('click', handleClick);
}
