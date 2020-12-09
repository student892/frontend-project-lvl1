#!/usr/bin/env node
import { gameMessage, checkEven } from '../src/games/check-even.js';
import startGame from '../src/index.js';

startGame(gameMessage, checkEven);
