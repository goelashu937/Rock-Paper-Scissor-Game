//building logic in game
let userScore = 0;
let compScore = 0;

const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const mssg = document.querySelector("#msg");
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    console.log("You win!");
    mssg.innerText = `You win!.Your ${userChoice} wins over ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreDisplay.innerText = compScore;
    console.log("You lose");
    mssg.innerText = `You lost.Your ${userChoice} lost over ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawGame = () => {
  console.log("It's a draw");
  mssg.innerText = "It's a draw";
  msg.style.backgroundColor = "#124076";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};
const playGame = (userChoice) => {
  console.log("user choice:-", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice:-", compChoice);
  if (userChoice === compChoice) {
    //It's a Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compChoice could be scissor ,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log(choice)
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
