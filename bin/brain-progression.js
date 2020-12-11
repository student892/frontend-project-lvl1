#!/usr/bin/env node
import { gameObject, ariphmeticProgression } from '../src/games/ariphmeticProgression.js';
import startGame from '../src/index.js';

startGame(gameObject.gameStartMessage, ariphmeticProgression);
