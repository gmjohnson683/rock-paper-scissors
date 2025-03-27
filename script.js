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

const humanSelection = humanChoice.toLowerCase();
console.log('The user has selected ' + humanSelection + '.');

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

const computerSelection = getComputerChoice(randomNumber);
console.log('The computer has selected ' + computerSelection + '.');

// The function block that will consolidate lines 4 - 12 (down below) and allows the user to play as many times, or rounds, as the function is invoked. 

function playRound(humanChoice, computerChoice) {
    if (humanSelection == 'rock' && computerSelection == 'scissors') {
        console.log('Rock beats scissors! The user has won this round!');
        return humanScore++;
    } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Scissors beat paper! The user has won this round!');
        return humanScore++;
    } else if (humanSelection == 'paper' && computerSelection == 'rock') {
        console.log('Paper beats rock! The user has won this round!');
        return humanScore++;
    } else if (humanSelection == 'rock' && computerSelection == 'rock') {
        console.log('Rock neutralizes rock! It is a draw!');
    } else if (humanSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('Scissors neutralize scissors! It is a draw!');
    } else if (humanSelection == 'paper' && computerSelection == 'paper') {
        console.log('Paper neutralizes paper! It is a draw!');
    } else if (humanSelection == 'rock' && computerSelection == 'paper') {
        console.log('Paper beats rock! The computer has won this round!');
        return computerScore++;
    } else if (humanSelection == 'scissors' && computerSelection == 'rock') {
        console.log('Rock beats scissors! The computer has won this round!');
        return computerScore++;
    } else if (humanSelection == 'paper' && computerSelection == 'scissors') {
        console.log('Scissors beat paper! The computer has won this round!');
        return computerScore++;
    } else {
        console.log('There seems to be an error with this round of the game. Please check the selection of either the user or the computer.');
    }
}

playRound(humanSelection, computerSelection);
console.log('The user now has ' + humanScore + ' point(s).');
console.log('The computer now has ' + computerScore + ' point(s).');

// Line 4: If the user chose rock and the computer chose scissors, then the display will show "User won!".
// Also, a point will be given to the user's score.

//if(humanSelection == 'rock' && computerSelection == 'scissors') {
//    console.log('Rock beats scissors! The user has won this round!');
//    humanScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 5: If the user chose scissors and the computer chose paper, then the display will show "User won!".
// Also, a point will be given to the user's score.

//if(humanSelection == 'scissors' && computerSelection == 'paper') {
//    console.log('Scissors beat paper! The user has won this round!');
//    humanScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 6: If the user chose paper and the computer chose rock, then the display will show "User won!".
// Also, a point will be given to the user's score.

//if(humanSelection == 'paper' && computerSelection == 'rock') {
//    console.log('Paper beats rock! The user has won this round!');
//    humanScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 7: If the user chose rock and the computer chose rock, then the display will show "It is a draw!".
// Also, no point will be given to either the user or the computer.

//if(humanSelection == 'rock' && computerSelection == 'rock') {
//    console.log('Rock neutralizes rock! It is a draw!');
//    console.log(humanScore);
//   console.log(computerScore);
//}

// Line 8: If the user chose scissors and the computer chose scissors, then the display will show "It is a draw!".
// Also, no point will be given to either the user or the computer.

//if(humanSelection == 'scissors' && computerSelection == 'scissors') {
//    console.log('Scissors neutralize scissors! It is a draw!');
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 9: If the user chose paper and the computer chose paper, then the display will show "It is a draw!".
// Also, no point will be given to either the user or the computer.

//if(humanSelection == 'paper' && computerSelection == 'paper') {
//    console.log('Paper neutralizes paper! It is a draw!');
//   console.log(humanScore);
//    console.log(computerScore);
//}

// Line 10: If the user chose rock and the computer chose paper, then the display will show "Computer won!".
// Also, a point will be given to the computer's score.

//if(humanSelection == 'rock' && computerSelection == 'paper') {
//    console.log('Paper beats rock! The computer has won this round!');
//    computerScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 11: If the user chose scissors and the computer chose rock, then the display will show "Computer won!".
// Also, a point will be given to the computer's score.

//if(humanSelection == 'scissors' && computerSelection == 'rock') {
//    console.log('Rock beats scissors! The computer has won this round!');
//    computerScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}

// Line 12: If the user chose paper and the computer chose scissors, then the display will show "Computer won!".
// Also, a point will be given to the computer's score.

//if(humanSelection == 'paper' && computerSelection == 'scissors') {
//    console.log('Scissors beat paper! The computer has won this round!');
//    computerScore++;
//    console.log(humanScore);
//    console.log(computerScore);
//}