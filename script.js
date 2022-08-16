function getComputerChoice() {
    // Math.random returns [0,1)
    // [0,1) * 3 = [0,3) -> the number is either between 0 and 1, 1 and 2,  2 and 3
    // floor them so now the number is either 0 or 1 or 2 only
    number = Math.floor(Math.random()*3);

    // logic to return a string
    if(number === 0) {
        return 'rock';
    } else if(number === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(_playerSelection, _computerSelection) {
    // 0 means draw
    // 1 means win
    // -1 means lose
    let win = 0;

    // check if a draw happens
    // then check if we win
    // if we are not winning by any cases, we can only lose
    if(_playerSelection === _computerSelection) {
        win = 0;
    } else if(_playerSelection === 'rock' && _computerSelection === 'scissors') {
        win = 1;
    } else if(_playerSelection === 'paper' && _computerSelection === 'rock') {
        win = 1;
    } else if(_playerSelection === 'scissors' && _computerSelection === 'paper') {
        win = 1;
    } else win = -1;
    
    // Beautify format: capitalizing string
    // https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
    if(win === 1) {
        return `You win! ${_playerSelection} beats ${_computerSelection}`;
    } else if (win === 0) {
        return `You draw!`;
    } else {
        return `You lose! ${_computerSelection} beats ${_playerSelection}`;
    }
};

let playerChoices = [];
for(let i=0; i< 3; i++) {
    playerChoices.push(document.createElement("button"));
}

//for (let i = 0; i < 5; i++) {
//    let playerSelection = prompt("Pick a choice: rock, paper, or scissor");
//    console.log(playRound(playerSelection, getComputerChoice()));
//}