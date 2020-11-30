import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const calcNumbers = () => {
  let firstNumber = getRandomNumber(1, 100);
  let secondNumber = getRandomNumber(1, 100);
  const mathSigns = ['+', '-', '*'];
  let currentSign = mathSigns[getRandomNumber(0, 3)];
  console.log(`Question: ${firstNumber} ${currentSign} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(eval(firstNumber + currentSign + secondNumber));
  return [userAnswer, correctAnswer];
}
export default calcNumbers;