#!/usr/bin/env node
import { gameMessage, calcNumbers } from '../src/games/calcNumbers.js';
import startGame from '../src/index.js';

startGame(gameMessage, calcNumbers);
