#!/usr/bin/env node
import { gameMessage, primeNumber } from '../src/games/primeNumber.js';
import startGame from '../src/index.js';

startGame(gameMessage, primeNumber);
