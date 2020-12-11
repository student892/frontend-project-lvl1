#!/usr/bin/env node
import { gameObject, findGsd } from '../src/games/findGcd.js';
import startGame from '../src/index.js';

startGame(gameObject.gameStartMessage, findGsd);
