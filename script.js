function startGame () {
    for (let i = 1; i < 6; i++) {
        alert(`round ${i}`);  
        playRound(); 
};
}

let computerCounter = 0;
let playerCounter = 0;
let roundCounter = 0;

function playRound () {
    let playerSelection = prompt('choose between rock paper or scissors',);
    console.log(playerSelection);

    let gameOptions = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    let computerChoice= (`${gameOptions.at(index)}`);
    console.log(computerChoice);
    
    if (computerChoice == playerSelection){
        alert("it's a draw");
        roundCounter++;
    } else if (computerChoice == 'rock' && playerSelection == 'scissors' 
            || computerChoice == 'scissors' && playerSelection == 'paper' 
            || computerChoice == 'paper' && playerSelection == 'rock') {
        alert("computer wins");
        computerCounter++;
        roundCounter++;
    } else if (playerSelection == 'rock' && computerChoice == 'scissors'    
            || playerSelection == 'scissors' && computerChoice == 'paper' 
            || playerSelection == 'paper' && computerChoice == 'rock') {
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