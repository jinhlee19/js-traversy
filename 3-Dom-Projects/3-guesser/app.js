/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min,max),
	guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input');
message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event Listener
game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
	
});

// Listen for guess
guessBtn.addEventListener('click', function () {
	let guess = parseInt(guessInput.value);
	console.log(guess);
	// Validate
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}
	// check if won
	if (guess === winningNum) {
		// // Game over -WON
		// // Disable input
		// guessInput.disabled = true;
		// // Change border Color
		// guessInput.style.borderColor = 'lightgreen';
		// // Set message
		// setMessage(`${winningNum}' is correct, you win! `, 'green');
		gameOver(true, `${winningNum}' is correct, you win!`);
	} else {
		// Wrong Number
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			// // Game over - LOST
			// // Disable Input
			// guessInput.disabled = true;
			// // Chage Border Color
			// guessInput.style.borderColor = 'orangered';
			// setMessage(`Game Over, you lost. The correct number was ${winningNum}.`, 'red');

			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}.`);
		} else {
			// Game continues - answer wrong

			// Change Border Color
			guessInput.style.borderColor = 'red';
			// Clear Input
			guessInput.value = '';

			// Tell User its the wrong number
			setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
		}
	}
});
// Game Over
function gameOver(won, msg) {
	let color;
	won === true ? (color = 'green') : (color = 'red');
	// Disable input
	guessInput.disabled = true;
	// Change border Color
	guessInput.style.borderColor = color;
    guessInput.style.color = color;
	// Set message
	setMessage(msg);

	// Play Again
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';
}

// Set Message
function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}

// get Winning Num
function getRandomNum (min, max){
	// console.log(Math.random()*(max-min+1));
	// (max-min) = (10-1+1) --> returns 0~9
	// console.log(Math.floor(Math.random()*(10+1)+min));
	// console.log(Math.floor(Math.random()*(max-min+1)+min));
	return Math.floor(Math.random()*(max-min+1)+min);
}