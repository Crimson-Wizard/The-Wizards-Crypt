const pinOne = document.getElementById('pin-one-input');
const pinTwo = document.getElementById('pin-two-input');
const pinThree = document.getElementById('pin-three-input');
const pinFour = document.getElementById('pin-four-input');
const pinFive = document.getElementById('pin-five-input');
const gameBox = document.getElementById('game-box');
const gameIntro = document.getElementsByClassName('game-intro');
const gameArea = document.getElementById('game-area');
let unlockButton = document.getElementById('unlock-button');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let instructionsDisplay = document.getElementById('instructions');
let levelDisplay = document.getElementById('level-display-counter');
let scoreDisplay = document.getElementById('score-display-counter');
let lifeDisplay = document.getElementById('life-display-counter');
let gameOverDisplay = document.getElementById('game-over-display');
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

  // Add event listener to start button
  startButton.addEventListener('click', startGame);

  // Function to start the game
  function startGame() {
      // Hide game intro and display game area
      gameIntro[0].style.display = 'none'; 
      gameArea.style.display = 'block';
  }
});
//function to generate the sequence for each level

//function to check if the user input matches the sequence

//incomplete code!! reserach how to check if the user input matches the sequence
  // if (correct) {
     //   alert('Correct, press unlock to move deep into the crypt!');
   // } else {
   //     alert('Lock pick snapped, try again!');
//}

//function to change the level

//function to display the level

//function to display the score

//function to display the game over screen

//function to display the win screen
