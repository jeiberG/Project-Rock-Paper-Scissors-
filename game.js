'use strict'

function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Verificar todas las condiciones posibles en las que el jugador gana
    const playerWins =
        (playerSelection === "piedra" && computerSelection === "tijera") ||
        (playerSelection === "papel" && computerSelection === "piedra") ||
        (playerSelection === "tijera" && computerSelection === "papel");

    if (playerWins) {
        return "Ganaste";
    } else if (playerSelection === computerSelection) {
        return "Empate";
    } else {
        return "Perdiste";
    }
}

function playGame(playerSelection, cpuChoice) {
    let playerScore = 0;
    let computerScore = 0;

    const ptstu = document.querySelector(".span-tu");
    const ptsCPU = document.querySelector(".span-CPU");
    const roundResult = playRound(playerSelection, cpuChoice);
    const divResults = document.getElementById("results");
    divResults.innerText = roundResult;

    if (roundResult.includes("Ganaste")) {
        playerScore++;
    } else if (roundResult.includes("Perdiste")) {
        computerScore++;
    }

    ptstu.innerText = playerScore + parseInt(ptstu.innerText);
    ptsCPU.innerText = computerScore + parseInt(ptsCPU.innerText);
}

const eleccionUser = document.querySelector(".eleccionUser");
const eleccionCPU = document.querySelector(".eleccionCPU");

const rock = document.getElementById("rock");
rock.addEventListener("click", function() {
    eleccionUser.innerText = "🗿";
    const cpuChoice = getComputerChoice();
    playGame("piedra", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function() {
    eleccionUser.innerText = "📄";
    const cpuChoice = getComputerChoice();
    playGame("papel", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    eleccionUser.innerText = "✂️";
    const cpuChoice = getComputerChoice();
    playGame("tijera", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});
