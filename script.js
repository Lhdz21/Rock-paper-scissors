//create a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice () {
    const computerChoice = ['Rock','Paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    console.log(`${computerChoice.at(index)}`);
};