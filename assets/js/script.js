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
let gameOverDisplay = document.getElementById('game-over-display');
const barrel = document.getElementById('barrel');
let level1 = [pinOne, pinTwo, pinThree, pinFour, pinFive];
let level2 = [pinTwo, pinOne, pinThree, pinFive, pinFour];
let level3 = [pinThree, pinFive, pinTwo, pinFour, pinOne];
let level4 = [pinFour, pinThree, pinFive, pinOne, pinTwo];
let level5 = [pinFive, pinFour, pinOne, pinTwo, pinThree];
let level6 = [pinOne, pinThree, pinFour, pinTwo, pinFive];

//sequence to iterate throu level
const sequence = [level1, level2, level3, level4, level5, level6];
//to keep track of the life counter
let lifeDisplay = document.getElementById('life-display-counter');
let currentLife = parseInt(lifeDisplay.innerHTML);
//to keep track of the level counter
let levelDisplay = document.getElementById('level-display-counter');
let currentLevel = parseInt(levelDisplay.innerHTML);
//to keep track of the score counter
let scoreDisplay = document.getElementById('score-display-counter');
let currentScore = parseInt(scoreDisplay.innerHTML);


// function to hide menu and display game

// Ensure DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const gameArea = document.getElementById('game-area');
  const startButton = document.getElementById('start');
  const gameIntro = document.getElementById('game-intro'); 
  const resetButton = document.getElementById('reset-center');
  let currentLife = parseInt(lifeDisplay.innerHTML);

  // Add event listener to start button

  startButton.addEventListener('click', startGame);

  // Function to start the game
  function startGame() {
    gameIntro.style.display = 'none';
    startButton.style.display = 'none';
    gameArea.style.display = 'block';
    resetButton.style.display = 'block';
    loadsequence();

  }
// function to load the sequence for each level 
  function loadsequence(level) {
    const sequence = [level1, level2, level3, level4, level5, level6];
    return sequence[level - 1];
  }
      pins.forEach(pin => {
        pin.checked = false;
     }) //set state of raido button unchecked 
    let currentGuess = 0;
    sequence.forEach(pin => {
      // Add event listener to each pin
      pin.addEventListener('click', function() {

        if (pin.id === level[currentGuess].id) {
          currentGuess++;
          if (currentGuess === sequence.length) {
            currentGuess = 0;
            //increase life
            currentLife++;  
            lifeDisplay.innerHTML = currentLife;
            //change level
            currentLevel++;
            levelDisplay.innerHTML = currentLevel;
            loadsequence(level2);
            //display level
            levelDisplay.innerHTML = currentLevel;
            //display score
            currentScore++;
            scoreDisplay.innerHTML = currentScore;
          }
        }else {
          //decrease life
          currentLife--;
          //set state of raido buttons unchecked
          pins.forEach(pin => {
            pin.checked = false;
          }) 
          //reset index 
          index = 0;

          alert('Incorrect sequence. Please try again.');
          
        }

    });

    }
    )
});

//function for user input
let userInput = [];

pins.forEach(pin => {
  pin.addEventListener('click', function() {
    userInput.push(pin.id);
  });
});

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
};

//function to restart the game
resetButton.addEventListener('click', function() {
  loadsequence(level1);
  currentLife = 5;
  currentLevel = 1;
  currentScore = 0;
});
//function to display the game over screen

//function to display the win screen
