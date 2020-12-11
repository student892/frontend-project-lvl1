import { name, sayHello } from './cli.js';

const startGame = (game) => {
  sayHello();
  game.gameStartMessage();
  const ROUND_COUNT = 3;
  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const [userAnswer, correctAnswer] = game.gameFunction();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      process.exit(0);
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default startGame;
