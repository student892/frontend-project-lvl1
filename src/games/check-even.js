import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const checkEven = (predicate) => {
  const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  if (predicate === true) {
    console.log(gameMessage);
  }
  const currentNumber = getRandomNumber(1, 100);
  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
};
export default checkEven;
