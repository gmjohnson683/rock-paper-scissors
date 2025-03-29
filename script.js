// Project: Rock, Paper, Scissors - User versus the Computer Edition

function playGame() {
    // Start the game with both the user and the computer with zero points and display the opening score in the browser's console
    let humanScore = 0;
    let computerScore = 0;
    console.log('User\'s initial score: ' + humanScore);
    console.log('Computer\'s initial score: ' + computerScore);

    // This function asks the user to provide a response to the "rock, paper, scissors" prompt and puts all the characters in the response in lowercase letters
    function getHumanChoice() {
        let userResponse = prompt('Which will you be choosing? Rock, paper, or scissors?');
        return userResponse.toLowerCase();
    }

    // This function generates a random integer that gets assessed by different criteria to determine the computer's selection in the game
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 100);
        if(randomNumber <= 33) {
            return 'rock';
        } else if (randomNumber >= 66) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    // This function takes the user's choice and the computer's choice and run them through the conditional statements that are true in the "rock, paper, scissors" game.
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

    // Round 1 of the "rock, paper, scissors" game
    
    let humanSelection = getHumanChoice();
    console.log('The user has selected ' + humanSelection + '.');

    let computerSelection = getComputerChoice();
    console.log('The computer has selected ' + computerSelection + '.');

    playRound(humanSelection, computerSelection);

    // Round 2 of the "rock, paper, scissors" game

    humanSelection = getHumanChoice();
    console.log('The user has selected ' + humanSelection + '.');

    computerSelection = getComputerChoice();
    console.log('The computer has selected ' + computerSelection + '.');

    playRound(humanSelection, computerSelection);

    // Round 3 of the "rock, paper, scissors" game

    humanSelection = getHumanChoice();
    console.log('The user has selected ' + humanSelection + '.');

    computerSelection = getComputerChoice();
    console.log('The computer has selected ' + computerSelection + '.');

    playRound(humanSelection, computerSelection);
    
    // Round 4 of the "rock, paper, scissors" game

    humanSelection = getHumanChoice();
    console.log('The user has selected ' + humanSelection + '.');

    computerSelection = getComputerChoice();
    console.log('The computer has selected ' + computerSelection + '.');

    playRound(humanSelection, computerSelection);

    // Round 5 of the "rock, paper, scissors" game

    humanSelection = getHumanChoice();
    console.log('The user has selected ' + humanSelection + '.');

    computerSelection = getComputerChoice();
    console.log('The computer has selected ' + computerSelection + '.');

    playRound(humanSelection, computerSelection);

    // The announcement of the two players' score should be displayed in the browser's console
    console.log('The user now has ' + humanScore + ' point(s).');
    console.log('The computer now has ' + computerScore + ' point(s).');

    // Based on the results from the last round of the game, an announcement of the winner will shown in the browser's console
    if(humanScore > computerScore) {
        console.log('The user has won the game! Better luck next time computer!');
    } else if (humanScore < computerScore) {
        console.log('The computer has won the game! Better luck next time user!');
    } else if (humanScore == computerScore) {
        console.log('A draw?!? How is that even possible?');
    } else {
        console.log('Seems to be an error with the code boss.');
    }
}

// Invoke the function to initiate the game of "rock, paper, scissors"
playGame();