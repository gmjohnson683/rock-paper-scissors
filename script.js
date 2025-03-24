// Pseudocode Section

// Line 1: When a user inputs a text of rock, paper, or scissors
// Line 2: A random text of rock, paper, or scissors will be chosen for the computer

function getComputerChoice(randomNumber) {
    if(randomNumber < 33) {
        return 'rock';
    } else if (randomNumber > 67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let computerChoice = getComputerChoice(randomNumber);
console.log(computerChoice);

// Line 3: If the user chose rock and the computer chose scissors, then the display will show "User won!"
// Line 4: If the user chose scissors and the computer chose paper, then the display will show "User won!"
// Line 5: If the user chose paper and the computer chose rock, then the display will show "User won!"
// Line 6: If the user chose rock and the computer chose rock, then the display will show "It is a draw!"
// Line 7: If the user chose scissors and the computer chose scissors, then the display will show "It is a draw!"
// Line 8: If the user chose paper and the computer chose paper, then the display will show "It is a draw!"
// Line 9: If the user chose rock and the computer chose paper, then the display will show "Computer won!"
// Line 10: If the user chose scissors and the computer chose rock, then the display will show "Computer won!"
// Line 11: If the user chose paper and the computer chose scissors, then the display will show "Computer won!"