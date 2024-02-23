function getComputerChoice() {
    const choices = ['piedra','papel','tijera'];
    const ramdomIndex = Math.floor(Math.random() * choices.length);
    return choices[ramdomIndex] ;
}


function playRound(playerSelection, computerSelection) {

    // Convertir ambas selecciones a minúsculas para comparación sin distinción entre mayúsculas y minúsculas
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Verificar todas las condiciones posibles en las que el jugador gana
    const playerWins =
    (playerSelection === "piedra" && computerSelection === "tijeras") ||
    (playerSelection === "papel" && computerSelection === "piedra") ||
    (playerSelection === "tijeras" && computerSelection === "papel");

    if (playerWins) {
        return "¡Ganaste! " + playerSelection + " vence a " + computerSelection;
    } else if (playerSelection === computerSelection) {
        return "Empate";
    } else {
        return "¡Perdiste! " + computerSelection + " vence a " + playerSelection;
    }

}