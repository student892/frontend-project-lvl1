import { name, sayHello } from './cli.js';

const startGame = (message, gameFunction) => {
  sayHello();
  message();
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [userAnswer, correctAnswer] = gameFunction();
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
