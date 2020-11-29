#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askUser } from './cli.js';

export const checkEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = [15, 6, 7, 20, 11, 14, 3];
  for(let i = 0; i <= 3; i = i + 1) {
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
