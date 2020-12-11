#!/usr/bin/env node
import { gameObject, primeNumber } from '../src/games/primeNumber.js';
import startGame from '../src/index.js';

startGame(gameObject.gameStartMessage, primeNumber);
