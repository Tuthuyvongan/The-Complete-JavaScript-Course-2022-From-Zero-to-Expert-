'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 0) {
    // when there is no input
    if (!guess) {
      displayMessage('⛔ No Number');
    }
    // when player wins
    else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highestScore) {
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
      }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game');
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  } else {
    displayMessage('💥 You lost the game');
    document.querySelector('.score').textContent = score;
  }
});

// Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
