const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');
const player_selection = document.getElementById('player-selection');
const computer_selection = document.getElementById('computer-selection');
const player_score = document.getElementById('player-score');
const computer_score = document.getElementById('computer-score');

const selection = ['✊', '✋', '✌️'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 1000);
  return random % 3;
}

function getBetterChoice(player_selection, computer_selection) {
  if(player_selection === computer_selection) {
    return 'tie';
  } else if (player_selection === '✊' && computer_selection === '✌️') {
    return 'player';
  } else if (player_selection === '✋' && computer_selection === '✊') { 
    return 'player';
  } else if(player_selection === '✌️' && computer_selection === '✋') {
    return 'player';
  } else {
    return 'computer';
  }
}

function winner(playerScore, computerScore) {
  if(playerScore === 5) {
    return 'player';
  } else if(computerScore === 5) {
    return 'computer';
  } else {
    return 'none';
  }
}

console.log(getComputerChoice());

rock.addEventListener('click', () => {
  player_selection.textContent = '✊';
  computer_selection.textContent = selection[getComputerChoice()];
  let winner = getBetterChoice(player_selection.textContent, computer_selection.textContent);
  if(winner === 'player') {
    playerScore++;
    player_score.textContent = `Player: ${playerScore}`;
    if(playerScore === 5) {
      alert('Player wins!');
    }
  } else if(winner === 'computer') {
    computerScore++;
    computer_score.textContent = `Computer: ${computerScore}`;
    if(computerScore === 5) {
      alert('Computer wins!');
    }
  }
});

paper.addEventListener('click', () => {
  player_selection.textContent = '✋';
  computer_selection.textContent = selection[getComputerChoice()];
  let winner = getBetterChoice(player_selection.textContent, computer_selection.textContent);
  if(winner === 'player') {
    playerScore++;
    player_score.textContent = `Player: ${playerScore}`;
    if(playerScore === 5) {
      alert('Player wins!');
    }
  } else if(winner === 'computer') {
    computerScore++;
    computer_score.textContent = `Computer: ${computerScore}`;
    if(computerScore === 5) {
      alert('Computer wins!');
    }
  }
});

scissors.addEventListener('click', () => {
  player_selection.textContent = '✌️';
  computer_selection.textContent = selection[getComputerChoice()];
  let winner = getBetterChoice(player_selection.textContent, computer_selection.textContent);
  if(winner === 'player') {
    playerScore++;
    player_score.textContent = `Player: ${playerScore}`;
    if(playerScore === 5) {
      alert('Player wins!');
    }
  } else if(winner === 'computer') {
    computerScore++;
    computer_score.textContent = `Computer: ${computerScore}`;
    if(computerScore === 5) {
      alert('Computer wins!');
    }
  }
});