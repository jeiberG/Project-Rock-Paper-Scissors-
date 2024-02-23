function getComputerChoice() {
    const choices = ['rock','paper','scissor'];
    const ramdomIndex = Math.floor(Math.random() * choices.length);
    return choices[ramdomIndex] ;
}

console.log(getComputerChoice());
