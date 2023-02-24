let rockEmoji = String.fromCodePoint(9994,127997);
let paperEmoji = String.fromCodePoint(9995,127997); 
let scissorsEmoji = String.fromCodePoint(9996,127997);


console.log("\uD83D\uDE00");
console.log(rockEmoji);

let playerChoice;

function startGame () {
    for (let i = 1; i < 6; i++) {
        alert(`round ${i}`);  
        playRound(); 
};
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



let computerCounter = 0;
let playerCounter = 0;
let roundCounter = 0;

function playRound () {
  computerSelection = computerChoice();
  playerSelection = playerChoice;
    
    if (computerSelection == playerSelection){
        alert("it's a draw");
        roundCounter++;
    } else if (computerSelection == 'rock' && playerSelection == 'scissors' 
            || computerSelection == 'scissors' && playerSelection == 'paper' 
            || computerSelection == 'paper' && playerSelection == 'rock') {
        alert("computer wins");
        computerCounter++;
        roundCounter++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'    
            || playerSelection == 'scissors' && computerSelection == 'paper' 
            || playerSelection == 'paper' && computerSelection == 'rock') {
        alert("you win");
        playerCounter++;
        roundCounter++;
    } else {
        alert("invalid choose");
        roundCounter++;
    };



    if (roundCounter == 5 && computerCounter > playerCounter){
        alert('COMPUTER WINS');
        computerCounter = 0;
        playerCounter = 0;
        roundCounter = 0;
    } else if (roundCounter == 5 && computerCounter < playerCounter){
        alert('YOU WIN');
        computerCounter = 0;
        playerCounter = 0;
        roundCounter = 0;
    } else if (roundCounter == 5 && computerCounter == playerCounter){
        alert('IT IS A DRAW');
        computerCounter = 0;
        playerCounter = 0;
        roundCounter = 0;
    };
console.log(computerCounter);
console.log(playerCounter);
};