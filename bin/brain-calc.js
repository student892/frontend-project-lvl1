#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import calcNumbers from '../src/games/calcNumbers.js';
import startGame from '../src/index.js';

sayHello();
console.log('What is the result of the expression?');
startGame(calcNumbers);