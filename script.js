// Pseudocode Section

// Line 1: Record the current scores of the user and the computer

let humanScore = 0;
let computerScore = 0;

// Line 2: When a user inputs a text of rock, paper, or scissors

function getHumanChoice() {
    let userResponse = prompt('Which will you be choosing? Rock, paper, or scissors?');
    return userResponse;
}

const humanChoice = getHumanChoice();
console.log(humanChoice);


// Line 3: A random text of rock, paper, or scissors will be chosen for the computer

function getComputerChoice(number) {
    if(number <= 33) {
        return 'rock';
    } else if (number >= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);

const computerChoice = getComputerChoice(randomNumber);
console.log(computerChoice);

// Line 4: If the user chose rock and the computer chose scissors, then the display will show "User won!"

if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'scissors') {
    console.log('Rock beats scissors! The user has won this round!');
}

// Line 5: If the user chose scissors and the computer chose paper, then the display will show "User won!"

if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'paper') {
    console.log('Scissors beat paper! The user has won this round!');
}

// Line 6: If the user chose paper and the computer chose rock, then the display will show "User won!"

if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'rock') {
    console.log('Paper beats rock! The user has won this round!');
}

// Line 7: If the user chose rock and the computer chose rock, then the display will show "It is a draw!"

if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'rock') {
    console.log('Rock neutralizes rock! It is a draw!')
}

// Line 8: If the user chose scissors and the computer chose scissors, then the display will show "It is a draw!"

if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'scissors') {
    console.log('Scissors neutralize scissors! It is a draw!')
}

// Line 9: If the user chose paper and the computer chose paper, then the display will show "It is a draw!"

if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'paper') {
    console.log('Paper neutralizes paper! It is a draw!')
}

// Line 10: If the user chose rock and the computer chose paper, then the display will show "Computer won!"

if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'paper') {
    console.log('Paper beats rock! The computer has won this round!')
}

// Line 11: If the user chose scissors and the computer chose rock, then the display will show "Computer won!"

if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'rock') {
    console.log('Rock beats scissors! The computer has won this round!')
}

// Line 12: If the user chose paper and the computer chose scissors, then the display will show "Computer won!"

if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'scissors') {
    console.log('Scissors beat paper! The computer has won this round!')
}