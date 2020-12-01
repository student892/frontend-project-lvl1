#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import ariphmeticProgression from '../src/games/ariphmeticProgression.js';
import startGame from '../src/index.js';

sayHello();
console.log('What number is missing in the progression?');
startGame(ariphmeticProgression);
