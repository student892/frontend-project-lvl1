import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  const answer = number % 2 === 0;
  return answer;
};
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
