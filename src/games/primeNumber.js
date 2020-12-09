import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

export const gameMessage = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};
const isPrimeNumber = (number) => {
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
export const primeNumber = () => {
  const currentNumber = getRandomNumber(1, 100);
  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrimeNumber(currentNumber) ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
};
