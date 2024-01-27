'use strict';
//  const a = document.querySelector('.message');
//  console.log(a)
//  (document.querySelector('.message').textContent = '🎉 Correct Number');

//  document.querySelector('.number').textContent =13;
//  document.querySelector('.score').textContent =10;

//  console.log(document.querySelector('.guess').value)
//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value)
let highscore=0;
let secretNumber = Math.trunc(1 + Math.random() * 20);
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    //No input case
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  //When player wins
  else if (guess == secretNumber) {
      document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore )
    {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too high
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Implementing reset in the game 
document.querySelector('.again').addEventListener('click',function()
{
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = 20;
  score=20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value=0;
  secretNumber = Math.trunc(1 + Math.random() * 20);
  document.querySelector('.number').textContent = '?';
})