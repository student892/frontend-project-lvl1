import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameStartMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameFunction = () => {
  const currentNumber = getRandomNumber(1, 100);
  const question = `${currentNumber}`;
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => ({
  gameStartMessage,
  gameFunction,
});
