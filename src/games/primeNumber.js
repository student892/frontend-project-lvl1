import getRandomNumber from '../getRandomNumber.js';

const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameStartMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameFunction = () => {
  const currentNumber = getRandomNumber(1, 100);
  const question = `${currentNumber}`;
  const correctAnswer = isPrimeNumber(currentNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => ({
  gameStartMessage,
  gameFunction,
});
