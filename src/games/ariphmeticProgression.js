import getRandomNumber from '../getRandomNumber.js';

const makeAriphmeticProgression = (firstNumber, progressionStep, progressionSize) => {
  const progression = [firstNumber];
  let currentNumber = firstNumber;
  for (let i = 1; i < progressionSize; i += 1) {
    currentNumber += progressionStep;
    progression.push(currentNumber);
  }
  return progression;
};
const gameStartMessage = 'What number is missing in the progression?';
const gameFunction = () => {
  const firstNumber = getRandomNumber(1, 15);
  const stepNumber = getRandomNumber(1, 8);
  const PROGRESSION_SIZE = 10;
  const progression = makeAriphmeticProgression(firstNumber, stepNumber, PROGRESSION_SIZE);
  const randomPositionInArray = getRandomNumber(0, PROGRESSION_SIZE);
  const valueOfRandomPosition = String(progression[randomPositionInArray]);
  const correctAnswer = valueOfRandomPosition;
  progression[randomPositionInArray] = '..';
  const progressionString = progression.join(' ');
  const question = `${progressionString}`;
  return { question, correctAnswer };
};
export default () => ({
  gameStartMessage,
  gameFunction,
});
