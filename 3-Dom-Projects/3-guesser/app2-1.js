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
    winningNum = 2,
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

// Listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // check if won
    if(guess === winningNum){
        // Game over -WON
        // Disable input
        guessInput.disabled = true;
        // Change border Color
        guessInput.style.borderColor = 'lightgreen';
        // Set message
        setMessage(`${winningNum}' is correct, you win! `, 'green')

    }else{
        // Wrong Number
        guessesLeft -= 1;
        if(guessesLeft === 0 ){
            // Game over - LOST
            // Disable Input
            guessInput.disabled = true;
            // Chage Border Color
            guessInput.style.borderColor = 'orangered';
            setMessage(`Game Over, you lost. The correct number was ${winningNum}.`,'red');
            
        } else {
            // Game continues - answer wrong

            // Change Border Color 
            guessInput.style.borderColor = 'red';
            // Clear Input 
            guessInput.value = '';
            
            // Tell User its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }
    }
});

// Set Message 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}