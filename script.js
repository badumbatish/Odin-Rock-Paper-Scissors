function getComputerChoice() {
    // Math.random returns [0,1)
    // [0,1) * 3 = [0,3) -> the number is either between 0 and 1, 1 and 2,  2 and 3
    // floor them so now the number is either 0 or 1 or 2 only
    number = Math.floor(Math.random()*3);

    // logic to return a string
    if(number === 0) {
        return 'ROCK';
    } else if(number === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
};
pScore = document.querySelector('.p-score');
cScore = document.querySelector('.c-score');
function update(score) {
    score.textContent= (Number(score.textContent)+1);
}
function playRound(e) {
    // 0 means draw
    // 1 means win
    // -1 means lose
    let win = 0;
    _playerSelection = e.target.textContent;
    _computerSelection = getComputerChoice();
    // check if a draw happens
    // then check if we win
    // if we are not winning by any cases, we can only lose
    if(_playerSelection === _computerSelection) {
        win = 0;
    } else if(_playerSelection === 'ROCK' && _computerSelection === 'SCISSORS') {
        win = 1;
    } else if(_playerSelection === 'PAPER' && _computerSelection === 'ROCK') {
        win = 1;
    } else if(_playerSelection === 'SCISSORS' && _computerSelection === 'PAPER') {
        win = 1;
    } else win = -1;
    
    // Beautify format: capitalizing string
    // https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
    if(win === 1) {
        console.log(`You win! ${_playerSelection} beats ${_computerSelection}`);
        update(pScore);
    } else if (win === 0) {
        console.log(`You draw!`);
    } else {
        console.log(`You lose! ${_computerSelection} beats ${_playerSelection}`);
        update(cScore);
    }
};

let choices = ['ROCK','PAPER','SCISSOR'];
let playerChoices = [];
let computerChoices = [];
for(let i=0; i< 3; i++) {
    playerChoices.push(document.createElement("button"));
    playerChoices[i].textContent = choices[i];
    playerChoices[i].addEventListener("click", playRound);
    computerChoices.push(document.createElement("button"));
    computerChoices[i].textContent = choices[i];
}


let pChoice = document.querySelector('.p-choice');
pChoice.append(...playerChoices);

let cChoice = document.querySelector('.c-choice');
cChoice.append(...computerChoices);
//for (let i = 0; i < 5; i++) {
//    let playerSelection = prompt("Pick a choice: rock, paper, or scissor");
//    console.log(playRound(playerSelection, getComputerChoice()));
//}
