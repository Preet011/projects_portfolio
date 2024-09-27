
function getRandomComputerResult() {
    const options = ["Pierre", "Feuille", "Ciseaux"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Pierre" && computer === "Ciseaux") ||
      (player === "Ciseaux" && computer === "Feuille") ||
      (player === "Feuille" && computer === "Pierre")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player gagne! ${userOption} bat ${computerResult}`;
    } else if (computerResult === userOption) {
      return `Égalité ! Les deux ont choisi ${userOption}`;
    } else {
      computerScore++;
      return `Computer gagne! ${computerResult} bat ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } a gagné le jeu !`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  
  };
  function resetGame() {
   playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
  };
  
  resetGameBtn.addEventListener("click", resetGame);
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Pierre");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Feuille");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Ciseaux");
  });
