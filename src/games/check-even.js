import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const checkEven = () => {
  let currentNumber = getRandomNumber(1, 100);
  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
};
export default checkEven;
