
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 0;
const scoreDisplay = document.getElementById('score');
const numberDisplay = document.getElementById('number');
const messageDisplay = document.querySelector('.message');
const guessInput = document.getElementById('guessField');
const submitButton = document.querySelector('input[type="submit"]');
const playAgainButton = document.querySelector('.again');


function resetGame() {
    
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 0;
    
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    messageDisplay.textContent = 'Make a guess...';
    guessInput.value = '';
    

    numberDisplay.style.backgroundColor = '#222';
    numberDisplay.style.width = '15rem';
}

playAgainButton.addEventListener('click', resetGame);


