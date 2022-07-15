let playerWins = 0;
let computerWins = 0;

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
    if (playerChoice === computerChoice) {  return "It's a tie!"; }  // if player and computer choose the same thing, it's a tie
    if (playerChoice === 'rock' && computerChoice === 'paper') {computerWins++; return "You lose! Paper beats rock.";} // if player chooses rock and computer chooses paper, computer wins
    if (playerChoice === 'rock' && computerChoice === 'scissors') {playerWins++; return "You win! Rock beats scissors.";} // if player chooses rock and computer chooses scissors, player wins
    if (playerChoice === 'paper' && computerChoice === 'rock') {playerWins++; return "You win! Paper beats rock.";} // if player chooses paper and computer chooses rock, player wins
    if (playerChoice === 'paper' && computerChoice === 'scissors') {computerWins++; return "You lose! Scissors beats paper.";} // if player chooses paper and computer chooses scissors, computer wins
    if (playerChoice === 'scissors' && computerChoice === 'rock')  {computerWins++; return "You lose! Rock beats scissors.";} // if player chooses scissors and computer chooses rock, computer wins
    if (playerChoice === 'scissors' && computerChoice === 'paper') {playerWins++; return "You win! Scissors beats paper.";} // if player chooses scissors and computer chooses paper, player wins
}

function game(){
    var result;
    var playerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, paper, or scissors?");
        result=singleRound(playerChoice, getComputerChoice());
        console.log(result);
        console.log(`Player: ${playerWins} Computer: ${computerWins}`);
    }
        
    if (playerWins>computerWins) {
        alert("You win!");
    }else{
        alert("You lose!");
    }
}

game();