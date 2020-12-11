import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

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
const gameObject = {
  gameStartMessage: function gameStartMessage() {
    console.log('What is the result of the expression?');
  },
  questionMessage: function questonMessage(...params) {
    console.log(`Question: ${params.join(' ')}`);
  },
  gameFunction: function gameFunction() {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const mathSigns = ['+', '-', '*'];
    const currentSign = mathSigns[getRandomNumber(0, 3)];
    this.questionMessage(firstNumber, currentSign, secondNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(solveExpression(currentSign, firstNumber, secondNumber));
    return [userAnswer, correctAnswer];
  },
};
export default gameObject;
