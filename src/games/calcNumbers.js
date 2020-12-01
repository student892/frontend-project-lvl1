import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const calcNumbers = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const mathSigns = ['+', '-', '*'];
  const currentSign = mathSigns[getRandomNumber(0, 3)];
  console.log(`Question: ${firstNumber} ${currentSign} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const choiceSign = (sign) => {
    switch (sign) {
      default:
        return firstNumber + secondNumber;
      case '*':
        return firstNumber * secondNumber;
      case '-':
        return firstNumber - secondNumber;
    }
  };
  const correctAnswer = String(choiceSign(currentSign));
  return [userAnswer, correctAnswer];
};
export default calcNumbers;
