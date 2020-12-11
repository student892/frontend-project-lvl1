#!/usr/bin/env node
import { gameObject, calcNumbers } from '../src/games/calcNumbers.js';
import startGame from '../src/index.js';

startGame(gameObject.gameStartMessage, calcNumbers);
