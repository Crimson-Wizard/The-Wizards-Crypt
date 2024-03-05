//sequence to generate each level
let sequence = {
    level1: [pin-one-input, pin-two-input, pin-three-input, pin-four-input, pin-five-input],
    level2: [pin-two-input, pin-one-input, pin-three-input, pin-five-input, pin-four-input],
    level3: [pin-three-input, pin-five-input, pin-two-input, pin-four-input, pin-one-input],
    level4: [pin-four-input, pin-three-input, pin-five-input, pin-one-input, pin-two-input],
    level5: [pin-five-input, pin-four-input, pin-one-input, pin-two-input, pin-three-input],
    level6: [pin-one-input, pin-three-input, pin-four-input, pin-two-input, pin-five-input],
}

//function to generate the sequence for each level
function generateSequence(level) {
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



