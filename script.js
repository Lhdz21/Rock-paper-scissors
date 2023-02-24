let rockEmoji = String.fromCodePoint(9994,127997);
let paperEmoji = String.fromCodePoint(9995,127997); 
let scissorsEmoji = String.fromCodePoint(9996,127997);
let playerChoice;
let computerCounter = 0;
let playerCounter = 0;
let roundCounter = 0;

hideFinalWinner();

const btn = document.querySelectorAll('button.emojiButton');
btn.forEach((button) => {
    button.addEventListener('click', () => {
    playerChoice = `${button.id}`;
    document.getElementById('youChose').textContent = `You Chose`;
    changePlayerEmoji(button.id);
    console.log(playerChoice);
    playRound();
    });

});;

function hideFinalWinner() {

    const displayWinner = document.getElementById("displayWinner");
    const gameCourt = document.getElementById("gameCourt");
        
        if (displayWinner.style.display === "none") {
            gameCourt.style.display = "flex";
        } else {
            displayWinner.style.display = "none";
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

    if(x == 'rock') {
        document.getElementById('cpuChoseEmoji').textContent = rockEmoji;
    } else if(x == 'paper') {
        document.getElementById('cpuChoseEmoji').textContent = paperEmoji;
    } else if(x == 'scissors') {
        document.getElementById('cpuChoseEmoji').textContent = scissorsEmoji;
    }
    
}

function changePlayerEmoji(x){

    if(x == 'rock') {
        document.getElementById('YouChoseEmoji').textContent = rockEmoji;
    } else if(x == 'paper') {
        document.getElementById('YouChoseEmoji').textContent = paperEmoji;
    } else if(x == 'scissors') {
        document.getElementById('YouChoseEmoji').textContent = scissorsEmoji;
    }
    
}

function playRound () {
  computerSelection = computerChoice();
  playerSelection = playerChoice;
    
    if (computerSelection == playerSelection){
        document.getElementById('roundWinner').textContent = `It's a tie`;
        roundCounter++;
        document.getElementById('roundNumber').textContent = roundCounter;

    } else if (computerSelection == 'rock' && playerSelection == 'scissors' 
            || computerSelection == 'scissors' && playerSelection == 'paper' 
            || computerSelection == 'paper' && playerSelection == 'rock') {
            document.getElementById('roundWinner').textContent = `CPU win this round`;
            computerCounter++;
            roundCounter++;
            document.getElementById('roundNumber').textContent = roundCounter;
            document.getElementById('cpuScore').textContent = computerCounter;

    } else if (playerSelection == 'rock' && computerSelection == 'scissors'    
            || playerSelection == 'scissors' && computerSelection == 'paper' 
            || playerSelection == 'paper' && computerSelection == 'rock') {
            document.getElementById('roundWinner').textContent = `You win this round`;
            playerCounter++;
            roundCounter++;
            document.getElementById('roundNumber').textContent = roundCounter;
            document.getElementById('playerScore').textContent = playerCounter;
    };

    if (computerCounter == 5){
        alert('COMPUTER WINS');
        computerCounter = 0;
        document.getElementById('cpuScore').textContent = computerCounter;
        playerCounter = 0;
        document.getElementById('playerScore').textContent = playerCounter;
        roundCounter = 0;
        document.getElementById('roundNumber').textContent = roundCounter;

    } else if (playerCounter == 5 ){
        alert('YOU WIN');
        computerCounter = 0;
        document.getElementById('cpuScore').textContent = computerCounter;
        playerCounter = 0;
        document.getElementById('playerScore').textContent = playerCounter;
        roundCounter = 0;
        document.getElementById('roundNumber').textContent = roundCounter;
    };

};