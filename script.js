let playerScore = 0;
let computerScore = 0;
let tie = 0;
let numRounds = 5;
let restart = false;

let computerPlay = () => {
    let rand = Math.floor(Math.random() * 2);
    let result = '';
    if(rand === 0) {
        result = 'Rock';
    }
    else if(rand === 1) {
        result = 'Paper';
    }
    else {
        result = 'Scissors';
    }
    return result;
}

let restartGame = () => {
    playerScore = 0;
    document.getElementById('player-score').textContent = 0;

    computerScore = 0;
    document.getElementById('computer-score').textContent = 0;
    
    tie = 0;
    document.getElementById('tie-score').textContent = 0;

    document.getElementById('results').textContent = '';

    restart = false;
}

let playRound = (playerSelection) => {

    // Restart after someone wins certain amount of rounds.
    if(restart) {
        restartGame();
    }
    
    // Get player moves.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    // Show player moves in view.
    document.getElementById('player-move').textContent = playerSelection;
    document.getElementById('computer-move').textContent = computerSelection;
    
    let result = '';
    let playerWin = 0;
    
    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            result = 'Tie!';
        }
        else if(computerSelection === 'paper') {
            result = 'You lose! Paper beats rock.';
            playerWin = 2;
        }
        else {
            result = 'You win! Rock beats scissors.';
            playerWin = 1;
        }
    }
    else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            result = 'You win! Paper beats rock.';
            playerWin = 1;
        }
        else if(computerSelection === 'paper') {
            result = 'Tie!';
        }
        else {
            result = 'You lose! Scissors beats paper.';
            playerWin = 2;
        }
    }
    else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            result = 'You lose! Rock beats scissors.';
            playerWin = 2;
        }
        else if(computerSelection === 'paper') {
            result = 'You win! Scissors beats paper.';
            playerWin = 1;
        }
        else {
            result = 'Tie';
        }
    }

    // Update counter and view
    if(playerWin === 0) {
        tie += 1;
        document.getElementById('tie-score').textContent = tie;

    }
    else if(playerWin === 1) {
        playerScore += 1;
        document.getElementById('player-score').textContent = playerScore;
    }
    else {
        computerScore += 1;
        document.getElementById('computer-score').textContent = computerScore;

    }

    // Display winners name and indicate that game should be restarted after next move.
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            document.getElementById('results').textContent = 'You win!';
        }
        else {
            document.getElementById('results').textContent = 'Computer wins!';
        }
        restart = true;
    }

    return result;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id);
    });
});