// . Rock Paper Scissors: Build a "Best of 5" game against a computer that chooses randomly.
const getRock = document.querySelector("#rock");
const getPaper = document.querySelector("#paper");
const getScissor = document.querySelector("#scissor");
const getReset = document.querySelector("#reset");
const getResult = document.querySelector(".result");
const getScore = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

function updateGame(playerChoice,) {
    const choices = ["rock", "paper", "scissor"];

    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    console.log((playerChoice === "scissor" && computerChoice === "paper"),)
    console.log({ computerChoice, playerChoice })

    if (playerChoice === computerChoice) {
        getResult.textContent = " draw";

    } else if ((playerChoice==="rock"&& computerChoice==="scissor")||(playerChoice==="scissor"&&computerChoice==="paper")||(playerChoice==="paper"&&computerChoice==="rock")) { getResult.textContent="players wins";  playerScore++; 
    getScore.textContent = `Player: ${playerScore} ` 
    }
    else{
        getResult.textContent="computer wins";
         computerScore++; 
        getScore.textContent =`Computer: ${ computerScore }`
    }
   
    

}
getRock.addEventListener("click", () => {
    updateGame("rock");
});

getPaper.addEventListener("click", () => {
    updateGame("paper");
});

getScissor.addEventListener("click", () => {
    updateGame("scissor");
});
getReset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    getScore.textContent = ""
    getResult.textContent = ""
    
})