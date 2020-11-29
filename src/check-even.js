#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askUser } from './cli.js';

export const checkEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = [15, 6, 7, 20, 11, 14, 3];
  for(let i = 0; i <= 3; i = i + 1) {
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      break;
    }
    let currentNumber = numbers[i];
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`)
      break;
    }
  }
};
