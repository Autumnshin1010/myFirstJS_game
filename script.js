const choices = ["rock", "paper", "sisscors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore= 0;
let computerScore = 0;

function happyImage() {
  let image = document.getElementById("imageHappy");
  image.src = "/img/happyImage.gif"
  document.getElementById("id_truebtn")
    .style.display = "none";
}

function sadImage() {
  let image = document.getElementById("imageSad");
  image.src = "/img/sadImage.gif"
  document.getElementById("id_falsebtn")
    .style.display = "none";
}

function gameStart() {
  document.getElementById('id_confrmdiv').style.display="block"; 
  document.getElementById('id_truebtn').onclick = function(){
    alert('Congrats!');
    document.getElementById("id_confrmdiv").remove();
    return happyImage()
  }; 
  document.getElementById('id_falsebtn').onclick = function(){
    alert('Refresh the window and try again!');
    document.getElementById("id_confrmdiv").remove();
    sadImage()
  }; 
} 

function removeButton() {
  document.getElementById("id_confrmdiv").remove();
}

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
          break;
        case "paper":
          result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
          break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
         break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText") 

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    } 
  } 
   
