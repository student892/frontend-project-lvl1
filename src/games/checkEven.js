import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const gameObject = {
  gameStartMessage: function gameStartMessage() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },
  questionMessage: function questionMessage(...params) {
    console.log(`Question: ${params.join(' ')}`);
  },
  gameFunction: function gameFunction() {
    const currentNumber = getRandomNumber(1, 100);
    this.questionMessage(currentNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
    return [userAnswer, correctAnswer];
  },
};
export default gameObject;
