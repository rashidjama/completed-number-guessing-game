//Done Get the DOM elements.
//Done retrieve the data in input and save to a variable
//Done generate a random number.
//check if guess is high, low or correct
//Display result
//display history


//Catch the DOM
const inputEl = document.querySelector("#input");
const checkMeBtn = document.getElementById("checkMe");
const restartBtn = document.getElementById("restart");
const resultDisplay = document.querySelector('.result');
const historyEl = document.querySelector(".history");


//Global variables
let correctNumber = randomNumber();
let guesses = [];
console.log(correctNumber)


//retrieve the data in input and save to a variable;

checkMeBtn.addEventListener("click", playGame);
restartBtn.addEventListener("click", restartGame)

//Play Game function
function playGame() {
  let gussedNum = inputEl.value;
  resultCheck(gussedNum);
  saveGuessHistory(gussedNum);
  displayHistory();
  inputEl.value = '';
}

//Generate random number
function randomNumber() {
  let random = Math.floor(Math.random() * 100 + 1);
  return random;
}

//check if guess is high, low or correct
function resultCheck(gussedNum) {
  if(gussedNum > correctNumber) {
    return tooHigh();
  } else if(gussedNum <correctNumber) {
    return tooLow();
  } else {
    return youWon();
  }
}

//retrive the dialog if the guess is wrong or right

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function youWon() {
  const text = "Awesome, you won the game!";
  let dialog = getDialog('won', text);
  resultDisplay.innerHTML = dialog;
}

function tooHigh() {
  const text = "Too high, please try later!";
  let dialog = getDialog('warning', text)
  resultDisplay.innerHTML = dialog;
}
function tooLow() {
  const text = "Too low, please try later!";
  let dialog = getDialog('warning', text);
  resultDisplay.innerHTML = dialog;
}

function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.unshift(guess);
};

function displayHistory() {
  let list = "<ul class='list-group'>";
  for(let i=0; i<guesses.length; i++) {
    list += "<li class='list-group-item'>" + " You gussed " + guesses[i] + "</li>";
  }
  list += "</ul>";
  historyEl.innerHTML = list;
}
function restartGame() {
  resultDisplay.innerHTML = '';
  correctNumber = randomNumber();
  guesses = [];
  displayHistory();
  inputEl.value = '';
}