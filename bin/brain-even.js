#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import checkEven from '../src/games/check-even.js';
import startGame from '../src/index.js';

sayHello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
startGame(checkEven);
