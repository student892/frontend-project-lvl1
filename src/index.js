import { name } from './cli.js';

const startGame = (gameFunction) => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      break;
    }
    const [userAnswer, correctAnswer] = gameFunction();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
export default startGame;
