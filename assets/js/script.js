/**
 * This is the main variables for the game
 */
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
let clearButton = document.getElementById('clear');
/**
 * to display the instructions
 */
let instructionsDisplay = document.getElementById('instructions');
/**
 * to display the life counter
 */
let wrongGuess = document.getElementById('wrong-guess-number');
let currentGuess = parseInt(wrongGuess.innerHTML);
/**
 * to display the level counter
 */
let levelDisplay = document.getElementById('level-display-counter');
let currentLevel = parseInt(levelDisplay.innerHTML);
/**
 * to display the score counter
 */
let scoreDisplay = document.getElementById('score-display-counter');
let currentScore = parseInt(scoreDisplay.innerHTML);
/**
 * set the event listeners to false
 */
let listenersAttached = false;
/**
 * to display the message
 */
const messageElement = document.getElementById('message-box');
/**
 * variables for the game combinations and guesses
 */
  const defaultCombo = [0, 1, 2, 3, 4];
  let guessCombo = [];
  let successCombo = []; 
  let correctGuesses = 0;

  console.log(pins);
  
  /**
   * ensure DOM content is loaded
   * and add event listeners to the buttons
   */
  document.addEventListener('DOMContentLoaded', function() {
      startButton.addEventListener('click', startGame);
      unlockButton.addEventListener('click', unlockDoor);
      clearButton.addEventListener('click', clearButtons);
  });
  /**
   * function to activate the lock
   */
  function activateLock() {
      pins.forEach(lockPin => {
          let clickHandler = function(event) {
              const index = event.target.dataset.index;
              noteUserGuess(index);
              lockPin.removeEventListener('click', clickHandler);
          };
          lockPin.addEventListener('click', clickHandler);
      });
  }
/**
 * function to start the game
 * and hide the game intro
 * and display the game area
 */
  function startGame() {
      gameIntro.style.display = 'none';
      gameArea.style.display = 'block';
      startButton.style.display = 'none';
      resetButton.style.display = 'block';
      
      successCombo = shuffle(defaultCombo);
      activateLock();
      console.log("levelCombo", successCombo);
      messageElement.textContent = '';
  }
/**
 * function to note the user guess
 */
  function noteUserGuess(index) {
      addToGuessCombo(index);
      let isCorrect = index == successCombo[guessCombo.length - 1];
      console.log(index, isCorrect);

    if (index == successCombo[guessCombo.length - 1]) {
      updateLockDisplay(index, true);
    } else {
      updateLockDisplay(index,false);
    }
  }     
  /**
   * function to deactivate event listeners Prevent future attachment
   */
  function activateLock() {
    if (!listenersAttached) {
        pins.forEach((lockPin, index) => {
            lockPin.addEventListener('click', () => noteUserGuess(index));
        });
        listenersAttached = true; 
    }
}
  /**
   * function to add the user guess to the guessCombo
   */
  function addToGuessCombo(index) {
      console.log(index);
      guessCombo.push(index);
      console.log('guessCombo', guessCombo)
  }
/**
 * function to update the lock display
 */
  function updateLockDisplay(index, isCorrect) {
    if(isCorrect) {
      pins[index].style.backgroundColor = 'green';
      correctGuesses += 1;
    } else {
      pins[index].style.backgroundColor = 'red';
    }
  }
  // function to shuffle the array
  function shuffle(combination) {
      for (let i = combination.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [combination[i], combination[j]] = [combination[j], combination[i]];
      }
      return combination;
  }
  /**
   * function to unlock the door
   */
  function unlockDoor() {
    if (guessCombo.length < 5) {
      messageElement.textContent = 'You must select 5 pins';
      return;
    } else if (correctGuesses !== 5) {
          messageElement.textContent = 'Incorrect guess, Try again!';
          return;
      }
      if (guessCombo.toString() === successCombo.toString()) {
          messageElement.textContent = 'You have unlocked the door';
        currentLevel += 1;
        currentScore += 1;
        wrongGuess.innerHTML = currentGuess.toString();
        levelDisplay.innerHTML = currentLevel.toString();
        scoreDisplay.innerHTML = currentScore.toString();
        resetGame();
      } else {
        resetGame();
      }
  }
  /**
   * function to clear the buttons
   */
  function clearButtons() {
    guessCombo = [];
    messageElement.textContent = '';
    currentGuess += 1;
    correctGuesses = 0;
    activateLock();
    pins.forEach(pin => {
      pin.style.backgroundColor = 'white';
  });
};
/**
 * function to reset the game
 */
  function resetGame() {
      guessCombo = [];
      correctGuesses = 0;
      pins.forEach(pin => {
          pin.style.backgroundColor = 'white';
      });
      messageElement.textContent = '';
      startGame();
  }
//
/**
 * function to restart the game
 */
resetButton.addEventListener('click', function() {
  gameIntro.style.display = 'none'; 
  gameArea.style.display = 'block';  
  startButton.style.display = 'none';
  resetButton.style.display = 'block'; 
  currentLevel = 1; 
  currentScore = 0; 
  currentGuess = 0; 
  messageElement.textContent = ''; 
/** 
 * Restart counters
*/
  wrongGuess.innerHTML = '0'; 
  levelDisplay.innerHTML = '1'; 
  scoreDisplay.innerHTML = '0'; 

  /** 
  * Reset the success combination to be set on new game start
  */
  guessCombo = []; 
  successCombo = []; 
  /** 
   * Reset pin appearance
  */
    pins.forEach(pin => {
    pin.style.backgroundColor = 'white'; 
  });
  startGame(); 
}); 

