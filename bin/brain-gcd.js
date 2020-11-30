#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import findGsd from '../src/games/findGcd.js';
import startGame from '../src/index.js';

sayHello();
console.log('Find the greatest common divisor of given numbers.');
startGame(findGsd);