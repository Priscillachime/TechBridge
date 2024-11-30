let wins = 0;
let losses = 0;
let draws = 0;

document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);
        
        document.getElementById('resultText').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
        updateScore(result);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        wins++;
        document.getElementById('wins').textContent = wins;
    } else if (result === "You lose!") {
        losses++;
        document.getElementById('losses').textContent = losses;
    } else {
        draws++;
        document.getElementById('draws').textContent = draws;
    }
}