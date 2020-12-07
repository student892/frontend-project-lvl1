import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const findCommonDivisor = (first, second) => {
  const min = first < second ? first : second;
  const max = first > second ? first : second;
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

const findGsd = (predicate) => {
  const gameMessage = 'Find the greatest common divisor of given numbers.';
  if (predicate === true) {
    console.log(gameMessage);
  }
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(findCommonDivisor(firstNumber, secondNumber));
  return [userAnswer, correctAnswer];
};
export default findGsd;
