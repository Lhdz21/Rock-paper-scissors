//create a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice () {
    const computerChoice = ['Rock','Paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    console.log(`${computerChoice.at(index)}`);
};

//create a function where the player will select between ‘Rock’, ‘Paper’ or ‘Scissors’.
function getPlayerSelection () {
    const playerSelection = prompt('choose between rock paper or scissors',);
    console.log(playerSelection);
};

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
