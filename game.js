'use strict'

function getComputerChoice() {
    const choices = ['🗿', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Verificar todas las condiciones posibles en las que el jugador gana
    const playerWins =
        (playerSelection === "🗿" && computerSelection === "✂️") ||
        (playerSelection === "📄" && computerSelection === "🗿") ||
        (playerSelection === "✂️" && computerSelection === "📄");

    if (playerWins) {
        return "Ganaste";
    } else if (playerSelection === computerSelection) {
        return "Empate";
    } else {
        return "Perdiste";
    }
}

function playGame(playerSelection, cpuChoice) {
    let playerScore = parseInt(document.querySelector(".span-tu").innerText);
    let computerScore = parseInt(document.querySelector(".span-CPU").innerText);

    const roundResult = playRound(playerSelection, cpuChoice);

    if (roundResult.includes("Ganaste")) {
        playerScore++;
    } else if (roundResult.includes("Perdiste")) {
        computerScore++;
    }

    document.querySelector(".span-tu").innerText = playerScore;
    document.querySelector(".span-CPU").innerText = computerScore;
    const reset = document.querySelector(".reset");
    const results = document.getElementById("results");

    if (playerScore >= 5) {
        reset.classList.add("resetActive");
        results.innerText = "¡Ganaste el juego!";
        results.style.color = "#a1ff00";
    } else if (computerScore >= 5) {
        reset.classList.add("resetActive");
        results.innerText = "¡Perdiste el juego!";
        results.style.color = "#ff6b6b";
    } else {
        results.innerText = roundResult;
    }
}

const eleccionUser = document.querySelector(".eleccionUser");
const eleccionCPU = document.querySelector(".eleccionCPU");

const rock = document.getElementById("rock");
rock.addEventListener("click", function() {
    eleccionUser.innerText = "🗿";
    const cpuChoice = getComputerChoice();
    playGame("🗿", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function() {
    eleccionUser.innerText = "📄";
    const cpuChoice = getComputerChoice();
    playGame("📄", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    eleccionUser.innerText = "✂️";
    const cpuChoice = getComputerChoice();
    playGame("✂️", cpuChoice);
    eleccionCPU.innerText = cpuChoice;
});

const info = document.querySelector(".info");
info.addEventListener('click', ()=>{
    const img = document.querySelector(".img");
    img.classList.remove("img");
    img.classList.add("imgActive");
})

const cerrar = document.querySelector(".cerrar");
cerrar.addEventListener('click', ()=>{
    const img = document.querySelector(".imgActive");
    img.classList.remove("imgActive");
    img.classList.add("img");
})


const reset = document.querySelector(".reset");
const results = document.getElementById("results");

reset.addEventListener("click", ()=>{
    reset.classList.remove("resetActive");
    document.querySelector(".span-tu").innerText = 0;
    document.querySelector(".span-CPU").innerText = 0;
    results.innerText = ".....";
    results.style.color = "#9e9e9e";
    eleccionCPU.innerText = ".....";
    eleccionUser.innerText = ".....";
})