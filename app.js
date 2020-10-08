const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";
const RESULT_PLAYER_WINS = "PLAYER WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice Dear! We chose ${DEFAULT_USER_CHOICE} for you !! `);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }  
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
      return RESULT_DRAW
  }else if(cChoice=== ROCK && pChoice=== PAPER ||
     cChoice===PAPER && pChoice=== SCISSORS ||
     cChoice===SCISSORS && pChoice === ROCK){
         return RESULT_PLAYER_WINS
  }else
  {
      return RESULT_COMPUTER_WINS;
  }
};
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting");
  const plyerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner= getWinner(computerChoice,plyerChoice);
  let message;
  if(winner=== RESULT_DRAW){
    message= `You Picked ${plyerChoice}, computer picked${computerChoice}, Therefore there is a DRAW`
  } else if(winner=== RESULT_PLAYER_WINS){
    message= `You Picked ${plyerChoice}, computer picked${computerChoice}, Therefore you won`
  }
  else{
    message= `You Picked ${plyerChoice}, computer picked${computerChoice}, Therefore computer won`
  }
  alert(message)
  gameIsRunning=false;
});

// console.dir(startGame);


// /rest parameters

// const sumUp= (...numbers)=>{
//     console.log(numbers);
// };


// const subtractUp= function(){
//   for(let num of arguments)
//   console.log(num);  
// }



subtractUp(1,2,3,4,5,6,7,8,9,10)