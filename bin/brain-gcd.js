#!/usr/bin/env node
import { gameMessage, findGsd } from '../src/games/findGcd.js';
import startGame from '../src/index.js';

startGame(gameMessage, findGsd);
