let playerChoice;
let computerChoice;
let playerWins = 0;
let computerWins = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissor');

const buttons = [rock, paper, scissors];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        computerChoice = getComputerChoice();
        singleRound(playerChoice,computerChoice);
        updateScore();
        }
      )
    }
)

function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function singleRound(playerChoice, computerChoice) {
    playerChoice=playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {  return }  // if player and computer choose the same thing, it's a tie
    if (playerChoice === 'rock' && computerChoice === 'paper') {computerWins++; } // if player chooses rock and computer chooses paper, computer wins
    if (playerChoice === 'rock' && computerChoice === 'scissors') {playerWins++; } // if player chooses rock and computer chooses scissors, player wins
    if (playerChoice === 'paper' && computerChoice === 'rock') {playerWins++; } // if player chooses paper and computer chooses rock, player wins
    if (playerChoice === 'paper' && computerChoice === 'scissors') {computerWins++; } // if player chooses paper and computer chooses scissors, computer wins
    if (playerChoice === 'scissors' && computerChoice === 'rock')  {computerWins++;} // if player chooses scissors and computer chooses rock, computer wins
    if (playerChoice === 'scissors' && computerChoice === 'paper') {playerWins++;} // if player chooses scissors and computer chooses paper, player wins
}

function updateScore(){
    const player_choice_span = document.getElementById('player_choice');
    const computer_choice_span = document.getElementById('computer_choice');
    const span_playerWins = document.getElementById('player_score');
    const span_computerWins = document.getElementById('computer_score');
    const score = document.getElementById('score');
    player_choice_span.textContent = playerChoice;
    computer_choice_span.textContent = computerChoice;
    if (playerWins === 5) {
       score.textContent = 'You win!';
        return;
    }
    if (computerWins === 5) {
        score.textContent = 'You lose!';
        return;
    }
    if (playerWins === 5 || computerWins === 5) {
        return;
    }
    span_playerWins.textContent = playerWins;
    span_computerWins.textContent = computerWins;
}