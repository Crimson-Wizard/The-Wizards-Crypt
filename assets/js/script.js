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
//to keep track of the life counter
let lifeDisplay = document.getElementById('life-display-counter');
let currentLife = parseInt(lifeDisplay.innerHTML);
//to keep track of the level counter
let levelDisplay = document.getElementById('level-display-counter');
let currentLevel = parseInt(levelDisplay.innerHTML);
//to keep track of the score counter
let scoreDisplay = document.getElementById('score-display-counter');
let currentScore = parseInt(scoreDisplay.innerHTML);
const defaultSequence = [0, 1, 2, 3, 4];

