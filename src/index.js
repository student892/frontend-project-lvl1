import readlineSync from 'readline-sync';

const startGame = (gameFn) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const game = gameFn();
  console.log(game.gameStartMessage);

  const ROUND_COUNT = 3;

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const { question, correctAnswer } = game.gameFunction();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default startGame;
