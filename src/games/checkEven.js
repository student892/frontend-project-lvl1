import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  const answer = number % 2 === 0;
  return answer;
};
const gameFunction = () => {
  const gameStartMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const currentNumber = getRandomNumber(1, 100);
  const question = `${currentNumber}`;
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
  return { gameStartMessage, question, correctAnswer };
};
export default gameFunction;
