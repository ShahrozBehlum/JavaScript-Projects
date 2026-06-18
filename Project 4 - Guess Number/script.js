let form = document.querySelector('form')
let button = document.querySelector('button')
let prev_guess = document.querySelector('#prev-guess')
let rem_guess = document.querySelector('#rem-guess')
let result = document.querySelector('.result')

let remaining = 10;
rem_guess.innerText = `Guesses Remaining: ${remaining}`;

let prev = [];

let generateNumber;

function startGame() {
  generateNumber = Math.floor(Math.random() * 100 + 1);
}

startGame();

function reduceGuess() {
    remaining--;

    if (remaining <= 0) {
        alert('Try Again')
        restartGame()
    }
    rem_guess.innerHTML = "Guesses Remaining: " + remaining;
}

function restartGame() {
    remaining = 10;
    prev = []
    startGame();
    prev_guess.innerText = "";
    result.innerText = "";
}


button.addEventListener('click', (e) => {
    e.preventDefault()

    let input = parseInt(document.querySelector('input').value)

    if (!input) {
        alert('Please Enter Any Number!')
        return
    }
    else if (isNaN(input)) {
        alert('Please Enter a Correct Number')
        return
    }
    if (input > 100 || input < 1) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    else if (input === generateNumber) {
        result.innerText = `Congratulation Your Number Is Corrected: ${input}`
        input == ''
        restartGame()
        
    } else {
        result.innerText = `Wrong The correct number is: ${generateNumber}`
        prev.push(input)
        prev_guess.innerText = 'Previous Guesses: ' + prev.join(', ');
        reduceGuess();
        startGame();
    }

})
