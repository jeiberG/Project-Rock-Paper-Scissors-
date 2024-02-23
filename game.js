function getComputerChoice() {
    const choices = ['piedra','papel','tijera'];
    const ramdomIndex = Math.floor(Math.random() * choices.length);
    return choices[ramdomIndex] ;
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

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Elige: Piedra, Papel o Tijeras").toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log("Ronda " + (i + 1) + ": " + roundResult);

        if (roundResult.includes("Ganaste")) {
            playerScore++;
        } else if (roundResult.includes("Perdiste")) {
            computerScore++;
        }
    }

    console.log("Puntuación final:");
    console.log("Jugador: " + playerScore);
    console.log("Computadora: " + computerScore);

    if (playerScore > computerScore) {
        console.log("¡Felicidades! ¡Ganaste el juego!");
    } else if (playerScore < computerScore) {
        console.log("¡Lo siento! La computadora ganó el juego.");
    } else {
        console.log("¡El juego terminó en empate!");
    }
}


playGame();