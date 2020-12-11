import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

export const gameObject = {
  gameStartMessage: () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },
  questionMessage: (...params) => {
    console.log(`Question: ${params.join(' ')}`);
  },
};
export const checkEven = () => {
  const currentNumber = getRandomNumber(1, 100);
  gameObject.questionMessage(currentNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
};
