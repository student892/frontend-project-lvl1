import { name, sayHello } from './cli.js';

const startGame = (gameFunction) => {
  sayHello();
  const roundCount = 3;
  const welcomeRound = 0;
  for (let i = 0; i < roundCount; i += 1) {
    let userAnswer;
    let correctAnswer;
    let predicate;
    if (i === welcomeRound) {
      predicate = true;
      [userAnswer, correctAnswer] = gameFunction(predicate);
    } else {
      predicate = false;
      [userAnswer, correctAnswer] = gameFunction(predicate);
    }
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
