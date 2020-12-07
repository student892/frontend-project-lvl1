import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const findExpression = (sign, firstNumber, secondNumber) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      throw Error('Unknown Symbol');
  }
};
const calcNumbers = (predicate) => {
  const gameMessage = 'What is the result of the expression?';
  if (predicate === true) {
    console.log(gameMessage);
  }
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const mathSigns = ['+', '-', '*'];
  const currentSign = mathSigns[getRandomNumber(0, 3)];
  console.log(`Question: ${firstNumber} ${currentSign} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(findExpression(currentSign, firstNumber, secondNumber));
  return [userAnswer, correctAnswer];
};
export default calcNumbers;
