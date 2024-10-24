const resultDisplay = document.getElementById('Result');
const winCount = document.getElementById('totalwin');
const loseCount = document.getElementById('totalLose');
const tieCount = document.getElementById('totalTie');
let wins = 0; // Track number of wins
let loses = 0; // Track number of losses
let ties = 0; // Track number of ties

document.getElementById('GAME1').addEventListener('click', playGame);
document.getElementById('GAME2').addEventListener('click', playGame);
document.getElementById('GAME3').addEventListener('click', playGame);
document.getElementById('resetButton').addEventListener('click', resetGame); // Corrected 'restGame' declaration

function playGame(event) {
    const userChoice = event.currentTarget.getAttribute('data-choice');
    const computerChoice = pcMove();
    const result = determineWinner(userChoice, computerChoice);
    updateResultDisplay(userChoice, computerChoice, result);
}

function pcMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateResultDisplay(userChoice, computerChoice, result) {
    let resultString = `You picked ${userChoice}. Computer picked ${computerChoice}. `;
    if (result === 'tie') {
        resultString += "It's a Tie!";
        ties += 1;
        tieCount.innerHTML = `Ties: ${ties}`;
        resultDisplay.className = 'result result-tie';
    } else if (result === 'win') {
        resultString += "You win!";
        wins += 1; // Increment win count
        winCount.innerHTML = `Wins: ${wins}`; // Update the display
        resultDisplay.className = 'result result-win';
    } else {
        resultString += "You lose!";
        loses += 1; // Increment lose count
        loseCount.innerHTML = `Loses: ${loses}`; // Update the display
        resultDisplay.className = 'result result-lose';
    }
    resultDisplay.innerHTML = resultString;
}

function resetGame(event) {
    wins = 0;    // Reset wins count
    loses = 0;   // Reset loses count
    ties = 0;    // Reset ties count
    
    winCount.innerHTML = `Wins: ${wins}`;
    loseCount.innerHTML = `Loses: ${loses}`;
    tieCount.innerHTML = `Ties: ${ties}`;
    
    resultDisplay.innerHTML = `Click the images to play`;
    resultDisplay.className = 'result';
}