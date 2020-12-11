import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

export const gameObject = {
  gameStartMessage: () => {
    console.log('What is the result of the expression?');
  },
  questionMessage: (...params) => {
    console.log(`Question: ${params.join(' ')}`);
  },
};
const solveExpression = (sign, firstNumber, secondNumber) => {
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
export const calcNumbers = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const mathSigns = ['+', '-', '*'];
  const currentSign = mathSigns[getRandomNumber(0, 3)];
  gameObject.questionMessage(firstNumber, currentSign, secondNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(solveExpression(currentSign, firstNumber, secondNumber));
  return [userAnswer, correctAnswer];
};
