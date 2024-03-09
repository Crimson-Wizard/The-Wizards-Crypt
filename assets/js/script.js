const pinOne = document.getElementById('pin-one-input');
const pinTwo = document.getElementById('pin-two-input');
const pinThree = document.getElementById('pin-three-input');
const pinFour = document.getElementById('pin-four-input');
const pinFive = document.getElementById('pin-five-input');
const pins = document.querySelectorAll('.pin');
const gameBox = document.getElementById('game-box');
const gameIntro = document.getElementById('game-intro');
const gameArea = document.getElementById('game-area');
let unlockButton = document.getElementById('unlock');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset-center');
let instructionsDisplay = document.getElementById('instructions');
let levelDisplay = document.getElementById('level-display-counter');
let scoreDisplay = document.getElementById('score-display-counter');
let lifeDisplay = document.getElementById('life-display-counter');
let gameOverDisplay = document.getElementById('game-over-display');
const barrel = document.getElementById('barrel');
let level1 = [pinOne, pinTwo, pinThree, pinFour, pinFive];
let level2 = [pinTwo, pinOne, pinThree, pinFive, pinFour];
let level3 = [pinThree, pinFive, pinTwo, pinFour, pinOne];
let level4 = [pinFour, pinThree, pinFive, pinOne, pinTwo];
let level5 = [pinFive, pinFour, pinOne, pinTwo, pinThree];
let level6 = [pinOne, pinThree, pinFour, pinTwo, pinFive];

// function to hide menu and display game

// Ensure DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const gameArea = document.getElementById('game-area');
  const startButton = document.getElementById('start');
  const gameIntro = document.getElementById('game-intro'); 
  const resetButton = document.getElementById('reset-center');

  // Add event listener to start button

  startButton.addEventListener('click', startGame);

  // Function to start the game
  function startGame() {
    gameIntro.style.display = 'none';
    startButton.style.display = 'none';
    gameArea.style.display = 'block';
    resetButton.style.display = 'block';
    loadsequence(level1);

  }
// function to load the sequence for each level 
  function loadsequence(level) {
    const barrel = document.getElementById('barrel');
    barrel.innerHTML = '';
    level.forEach(pin => {
      // Add event listener to each pin
      pin.addEventListener('click', function() {
        if (pin.id === sequence[index]) {
          index++;
          barrel.innerHTML += pin.id;
          if (index === sequence.length) {
            index = 0;
            //increase life
            lifeDisplay.innerHTML = lifeDisplay.innerHTML + 1;
            //change level
            loadsequence(level2);
            //display level
            levelDisplay.innerHTML = levelDisplay.innerHTML + 1;
            //display score
            scoreDisplay.innerHTML = scoreDisplay.innerHTML + 1;
          }
        }else {
          //decrease life
          lifeDisplay.innerHTML = lifeDisplay.innerHTML - 1;
          // clear previuos input
          barrel.innerHTML = '';
          //reset index
          index = 0;

          alert('Incorrect sequence. Please try again.');
          
        }

    });

    }
    )
};



//function to generate the sequence for each level
  //if (level === 1) {
    //let sequence = [0, 1, 2, 3, 4,];
//function for user input
let userInput = [];

// Listen for user input events on each pin
//pins.forEach(pin => {
   // pin.addEventListener('click', function() {
        // When a pin is clicked, store its value in the userInput array
     //   userInput.push(pin.id);  
    //});
//});
//function to check if the user input matches the sequence
// still need to add loss of pin and life if wrong  if coirrect add to score
  // Get references to DOM elements
  const unlockButton = document.getElementById('btn-unlock');


  // Add event listener to unlock button
unlockButton.addEventListener('click', function() {
  const isCorrect = checkInput(userInput, sequence);
  if (isCorrect) {
    // Perform actions for correct input
    console.log('Correct input!');
  } else {
    // Perform actions for incorrect input
    console.log('Incorrect input!');
  }
});

function checkInput(userInput, sequence) {
  if (userInput.length !== sequence.length) {
    alert('Invalid input length. Please try again.');
    return false;
  }

  for (let i = 0; i < sequence.length; i++) {
    if (userInput[i] !== sequence[i]) {
      alert('Incorrect sequence. Please try again.');
      return false;
    }
  }

  alert('You unlocked the barrel!');
  return true;
}});

//function to change the level

//function to display the level

//function to display the score

//function to display the game over screen

//function to display the win screen
