import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const gameObject = {
  gameStartMessage: function gameStartMessage() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  },
  questionMessage: function questionMessage(...params) {
    console.log(`Question: ${params.join(' ')}`);
  },
  gameFunction: function gameFunction() {
    const currentNumber = getRandomNumber(1, 100);
    this.questionMessage(currentNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrimeNumber(currentNumber) ? 'yes' : 'no';
    return [userAnswer, correctAnswer];
  },
};
export default gameObject;
