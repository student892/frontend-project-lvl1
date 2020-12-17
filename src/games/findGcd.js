import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const findCommonDivisor = (first, second) => {
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  if (max % min === 0) {
    return min;
  }
  let greatestDivisor = 1;
  for (let i = 2; i <= Math.floor(min / 2); i += 1) {
    if (first % i === 0 && second % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};
const gameStartMessage = 'Find the greatest common divisor of given numbers.';
const gameFunction = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber}, ${secondNumber}`;
  const correctAnswer = String(findCommonDivisor(firstNumber, secondNumber));
  return { gameStartMessage, question, correctAnswer };
};
export default () => startGame(gameStartMessage, gameFunction);
