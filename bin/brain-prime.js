#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import primeNumber from '../src/games/primeNumber.js';
import startGame from '../src/index.js';

sayHello();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
startGame(primeNumber);
