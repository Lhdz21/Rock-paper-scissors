const rockEmoji = String.fromCodePoint(9994,127997);
const paperEmoji = String.fromCodePoint(9995,127997); 
const scissorsEmoji = String.fromCodePoint(9996,127997);

let playerChoice;
let computerCounter = 0;
let playerCounter = 0;
let roundCounter = 0;

const gameCourt = document.getElementById("gameCourt");
const scoreBoard = document.getElementById("scoreBoard");
const displayWinner = document.getElementById("displayWinner");

hideFinalWinner();

const btn = document.querySelectorAll('button.emojiButton');

btn.forEach((button) => {

    button.addEventListener('click', () => {
    playerChoice = `${button.id}`;
    document.getElementById('youChose').textContent = `You Chose`;
    changePlayerEmoji(button.id);
    playRound();
    });
});;

const btnPlayAgain = document.getElementById('playAgain');
btnPlayAgain.addEventListener('click', showGameCourt);

function hideFinalWinner() {

    displayWinner.style.display = "none";
    }

function showGameCourt() {

    gameCourt.style.display = "grid";
    displayWinner.style.display = "none";
    scoreBoard.style.display = "grid";
    cleanUpGame();
    }

function cleanUpGame() {

    document.getElementById('YouChoseEmoji').textContent = '';
    document.getElementById('cpuChoseEmoji').textContent = '';
    document.getElementById('cpuChose').textContent = ``;
    document.getElementById('youChose').textContent = ``;
    document.getElementById('roundWinner').textContent = ``;
    }

function ShowFinalWinner() {

    if (displayWinner.style.display === "none") {
        displayWinner.style.display = "grid";
        gameCourt.style.display = "none";
        scoreBoard.style.display = "none";
    } 
    }

function computerChoice() {
    
    let gameOptions = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    let cpuChoice = `${gameOptions.at(index)}`
    document.getElementById('cpuChose').textContent = `CPU Chose`;
    changeCpuEmoji(cpuChoice);
 
    return cpuChoice;
    }

function changeCpuEmoji(x){

    (x == 'rock')     ? document.getElementById('cpuChoseEmoji').textContent = rockEmoji:   
    (x == 'paper')    ? document.getElementById('cpuChoseEmoji').textContent = paperEmoji:
    (x == 'scissors') ? document.getElementById('cpuChoseEmoji').textContent = scissorsEmoji:
    '';
}

function changePlayerEmoji(x){

    (x == 'rock')     ? document.getElementById('YouChoseEmoji').textContent = rockEmoji:
    (x == 'paper')    ? document.getElementById('YouChoseEmoji').textContent = paperEmoji:
    (x == 'scissors') ? document.getElementById('YouChoseEmoji').textContent = scissorsEmoji:
    '';
}
function increaseRoundCounter() {
    roundCounter++;
    document.getElementById('roundNumber').textContent = roundCounter;
}

function playRound () {
  computerSelection = computerChoice();
  playerSelection = playerChoice;
    
    if (computerSelection == playerSelection){
        document.getElementById('roundWinner').textContent = `It's a tie`;
        increaseRoundCounter();

    } else if (computerSelection == 'rock' && playerSelection == 'scissors' 
            || computerSelection == 'scissors' && playerSelection == 'paper' 
            || computerSelection == 'paper' && playerSelection == 'rock') {
            document.getElementById('roundWinner').textContent = `CPU win this round`;
            computerCounter++;
            increaseRoundCounter();
            document.getElementById('cpuScore').textContent = computerCounter;

    } else if (playerSelection == 'rock' && computerSelection == 'scissors'    
            || playerSelection == 'scissors' && computerSelection == 'paper' 
            || playerSelection == 'paper' && computerSelection == 'rock') {
            document.getElementById('roundWinner').textContent = `You win this round`;
            playerCounter++;
            increaseRoundCounter();
            document.getElementById('playerScore').textContent = playerCounter;
    };

    if (computerCounter == 5){
        document.getElementById('theWinner').textContent = 'COMPUTER WINS';
        ShowFinalWinner();
        resetCounters();
    } else if (playerCounter == 5 ){
        document.getElementById('theWinner').textContent = 'YOU WIN';
        ShowFinalWinner();
        resetCounters() };
};

function resetCounters() {
    computerCounter = 0;
    document.getElementById('cpuScore').textContent = computerCounter;
    playerCounter = 0;
    document.getElementById('playerScore').textContent = playerCounter;
    roundCounter = 0;
    document.getElementById('roundNumber').textContent = roundCounter;
}