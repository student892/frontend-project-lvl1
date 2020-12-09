import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

export const gameMessage = () => {
  console.log('What number is missing in the progression?');
};
export const ariphmeticProgression = () => {
  const firstNumber = getRandomNumber(1, 15);
  const stepNumber = getRandomNumber(1, 8);
  const progressionArr = [firstNumber];
  let currentNumber = firstNumber;
  const progressionSize = 8;
  for (let i = 0; i <= progressionSize; i += 1) {
    currentNumber += stepNumber;
    progressionArr.push(currentNumber);
  }
  const randomPositionInArray = getRandomNumber(0, 10);
  const valueOfRandomPosition = String(progressionArr[randomPositionInArray]);
  progressionArr[randomPositionInArray] = '..';
  const progressionString = progressionArr.join(' ');
  console.log(`Question: ${progressionString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, valueOfRandomPosition];
};
