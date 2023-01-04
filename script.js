'use strict';

// const x = document.querySelector('.message').textContent;
// console.log(x);
// document.querySelector('.message').textContent = 'Correct Number!👍';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 7;
// console.log((document.querySelector('.number').textContent = 7));

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

// const getRandomInt = function (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// };

let getRandomInt = Math.trunc(Math.random() * 10 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreContent = function (value) {
  document.querySelector('.score').textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').style.color = 'white';
  //when no input
  if (!guess) {
    displayMessage('Type a number❗');
    document.querySelector('.message').style.color = 'red';
  }

  //when wins
  else if (guess === getRandomInt) {
    displayMessage('Your number is correct 😍');
    document.querySelector('.number').textContent =
      document.querySelector('.guess').value;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== getRandomInt) {
    displayMessage(
      guess < getRandomInt ? 'Type a higher number' : 'Type a lower number'
    );
    score--;
    scoreContent(score);
    if (score <= 1) {
      displayMessage('You lost a game');
      scoreContent(0);
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
});

//when guess is too low
//   else if (guess < getRandomInt) {
//     if (score === 1) {
//       document.querySelector('.message').textContent = 'You lost a game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'darkred';
//     } else {
//       document.querySelector('.message').textContent = 'Type a higher number';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   }

//   //when guess is too high
//   else if (guess > getRandomInt) {
//     if (score === 1) {
//       document.querySelector('.message').textContent = 'You lost a game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'darkred';
//     } else {
//       document.querySelector('.message').textContent = 'Type a lower number';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

console.log(getRandomInt);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreContent(score);
  getRandomInt = Math.trunc(Math.random() * 10 + 1);

  console.log(getRandomInt);

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
