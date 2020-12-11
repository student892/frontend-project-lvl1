#!/usr/bin/env node
import { gameObject, checkEven } from '../src/games/check-even.js';
import startGame from '../src/index.js';

startGame(gameObject.gameStartMessage, checkEven);
