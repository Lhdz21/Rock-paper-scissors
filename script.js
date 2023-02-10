function startGame () {
    for (let i = 1; i < 6; i++) { // shows 0, then 1, then 2
        alert(`round ${i}`);  
        playRound(); 
};
}


function playRound () {
    let playerSelection = prompt('choose between rock paper or scissors',);
    console.log(playerSelection);

    let gameOptions = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    let computerChoice= (`${gameOptions.at(index)}`);
    console.log(computerChoice);

    if (computerChoice == playerSelection){
        alert("it's a draw");
    } else if (computerChoice == 'rock' && playerSelection == 'scissors' 
            || computerChoice == 'scissors' && playerSelection == 'paper' 
            || computerChoice == 'paper' && playerSelection == 'rock') {
        alert("computer wins");
    } else if (playerSelection == 'rock' && computerChoice == 'scissors'    
            || playerSelection == 'scissors' && computerChoice == 'paper' 
            || playerSelection == 'paper' && computerChoice == 'rock') {
        alert("you win");
    } else {
        alert("invalid choose");
    }
};