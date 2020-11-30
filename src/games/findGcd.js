import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const commonDivisor = (first, second) => {
  const min = first < second ? first : second;
  const max = first > second ? first : second;
  if (max % min === 0) {
    return min;
  }
  let greatestDivisor = 1;
  for(let i = 2; i <= Math.floor(min / 2); i = i + 1) {
    if (first % i === 0 && second % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const findGsd = () => {
  let firstNumber = getRandomNumber(1, 100);
  let secondNumber = getRandomNumber(1, 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(commonDivisor(firstNumber, secondNumber));
  return [userAnswer, correctAnswer];
};
export default findGsd;
