const pinOne = document.getElementById('pin-one-input');
const pinTwo = document.getElementById('pin-two-input');
const pinThree = document.getElementById('pin-three-input');
const pinFour = document.getElementById('pin-four-input');
const pinFive = document.getElementById('pin-five-input');
let gameIntro = document.getElementById('game-intro');
let unlockButton = document.getElementById('unlock-button');
let startButton = document.getElementById('start-game');
let resetButton = document.getElementById('reset-game');
let rulesButton = document.getElementById('game-rules');
let instructionsDisplay = document.getElementById('instructions');
let levelDisplay = document.getElementById('level-display');
let scoreDisplay = document.getElementById('score-display');
let lifeDisplay = document.getElementById('life-display');
let gameOverDisplay = document.getElementById('game-over-display');
let level1 = [pinOne, pinTwo, pinThree, pinFour, pinFive];
let level2 = [pinTwo, pinOne, pinThree, pinFive, pinFour];
let level3 = [pinThree, pinFive, pinTwo, pinFour, pinOne];
let level4 = [pinFour, pinThree, pinFive, pinOne, pinTwo];
let level5 = [pinFive, pinFour, pinOne, pinTwo, pinThree];
let level6 = [pinOne, pinThree, pinFour, pinTwo, pinFive];


//function to generate the sequence for each level
/*function generateSequence(level) {
    let sequence = [];
    for (let i = 0; i < level.length; i++) {
        sequence.push(level[i]);
    }
    return sequence;
}

//function to check if the user input matches the sequence
function checksequence() {
    let radiobuttons = document.querySelectorAll('.pin"]');
    let correct = true;

    radiobuttons.forEach(function (radiobutton, index) {
        if (radiobutton.checked !== sequence[index]) {
        correct = false;
    }
});
//incomplete code!! reserach how to check if the user input matches the sequence
    if (correct) {
        alert('Correct, press unlock to move deep into the crypt!');
    } else {
        alert('Lock pick snapped, try again!');
}

//function to change the level

//function to display the level

//function to display the score

//function to display the game over screen

//function to display the win screen
*/