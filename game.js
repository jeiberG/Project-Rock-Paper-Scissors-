function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Verificar todas las condiciones posibles en las que el jugador gana
    const playerWins =
        (playerSelection === "piedra" && computerSelection === "tijeras") ||
        (playerSelection === "papel" && computerSelection === "piedra") ||
        (playerSelection === "tijeras" && computerSelection === "papel");

    if (playerWins) {
        return "Ganaste";
    } else if (playerSelection === computerSelection) {
        return "Empate";
    } else {
        return "Perdiste";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    const playerSelection = prompt("Elige: Piedra, Papel o Tijeras").toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult);
}

playGame();
