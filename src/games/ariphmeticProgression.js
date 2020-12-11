import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

export const gameObject = {
  gameStartMessage: () => {
    console.log('What number is missing in the progression?');
  },
  questionMessage: (...params) => {
    console.log(`Question: ${params.join(' ')}`);
  },
};
export const ariphmeticProgression = () => {
  const firstNumber = getRandomNumber(1, 15);
  const stepNumber = getRandomNumber(1, 8);
  const progressionArr = [firstNumber];
  let currentNumber = firstNumber;
  const PROGRESSION_SIZE = 8;
  for (let i = 0; i <= PROGRESSION_SIZE; i += 1) {
    currentNumber += stepNumber;
    progressionArr.push(currentNumber);
  }
  const randomPositionInArray = getRandomNumber(0, 10);
  const valueOfRandomPosition = String(progressionArr[randomPositionInArray]);
  progressionArr[randomPositionInArray] = '..';
  const progressionString = progressionArr.join(' ');
  gameObject.questionMessage(progressionString);
  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, valueOfRandomPosition];
};
