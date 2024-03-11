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

function playGame(selet) {
    let playerScore = 0;
    let computerScore = 0;

    const ptstu = document.querySelector(".span-tu");
    const ptsCPU = document.querySelector(".span-CPU");
    const playerSelection = selet.toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    const divResults = document.getElementById("results")
    divResults.innerText = roundResult ;

    if (roundResult.includes("Ganaste")) {
        playerScore++;
        
    } else if (roundResult.includes("Perdiste")) {
        computerScore++;
        
    }

    ptstu.innerText = playerScore + parseInt(ptstu.innerText);
    ptsCPU.innerText = computerScore + parseInt(ptsCPU.innerText);
}

const rock = document.getElementById("rock");
rock.addEventListener("click", function() {
    playGame("piedra");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function() {
    playGame("papel");
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
    playGame("tijeras");
});

