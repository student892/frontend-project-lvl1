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
const mathSigns = ['+', '-', '*'];
const mathSignsLength = mathSigns.length;
const gameFunction = () => {
  const gameStartMessage = 'What is the result of the expression?';
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const currentSign = mathSigns[getRandomNumber(0, mathSignsLength)];
  const question = `${firstNumber} ${currentSign} ${secondNumber}`;
  const correctAnswer = String(solveExpression(currentSign, firstNumber, secondNumber));
  return { gameStartMessage, question, correctAnswer };
};
export default gameFunction;
