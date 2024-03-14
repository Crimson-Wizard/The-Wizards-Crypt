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
let instructionsDisplay = document.getElementById('instructions');
let gameOverDisplay = document.getElementById('game-over-display');
//to keep track of the life counter
let wrongGuess = document.getElementById('wrong-guess-number');
let currentGuess = parseInt(wrongGuess.innerHTML);
//to keep track of the level counter
let levelDisplay = document.getElementById('level-display-counter');
let currentLevel = parseInt(levelDisplay.innerHTML);
//to keep track of the score counter
let scoreDisplay = document.getElementById('score-display-counter');
let currentScore = parseInt(scoreDisplay.innerHTML);
let listenersAttached = false;
const messageElement = document.getElementById('message-box');


// Ensure DOM content is loaded

  
  const defaultCombo = [0, 1, 2, 3, 4];
  let guessCombo = [];
  let successCombo = []; 
  let correctGuesses = 0;

  console.log(pins);
  // function to hide menu and display game
  document.addEventListener('DOMContentLoaded', function() {

      startButton.addEventListener('click', startGame);
      unlockButton.addEventListener('click', unlockDoor);
      clearButton.addEventListener('click', clearButtons);

  });
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

  //function to deactivate event listeners
  function activateLock() {
    if (!listenersAttached) {
        pins.forEach((lockPin, index) => {
            lockPin.addEventListener('click', () => noteUserGuess(index));
        });
        listenersAttached = true; // Prevent future attachment
    }
}

  
  function addToGuessCombo(index) {
      console.log(index);
      guessCombo.push(index);
      console.log('guessCombo', guessCombo)

  }

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


  //function for clearing button
  
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
  // Reset display settings
  gameIntro.style.display = 'none'; // Show the game intro again if needed
  gameArea.style.display = 'block'; // Hide the game area until start is clicked again
  startButton.style.display = 'none'; // Show the start button to allow starting a new game
  resetButton.style.display = 'block'; // Hide reset button until the game starts again
  currentLevel = 1; // Reset level counter to initial value
  currentScore = 0; // Reset score counter to initial value
  currentGuess = 0; // Reset life counter to initial value
  messageElement.textContent = ''; // Clear any messages
/** 
 * Restart counters
*/
  wrongGuess.innerHTML = '0'; // Reset life counter to initial value
  levelDisplay.innerHTML = '1'; // Reset level counter to initial value
  scoreDisplay.innerHTML = '0'; // Reset score counter to initial value

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

  startGame(); // Start the game again
}); 

