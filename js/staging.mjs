'use strict';

import GamePiece from './GamePiece.mjs';
import { gameState } from "./GameState.mjs";
import { generateAlert } from "./utilities.mjs";

const occupiedPCoords = [];
const occupiedCCoords = [];
const playerPlacedShips = [];
const computerPlacedShips = [];

const carrier = new GamePiece('Carrier', 5);
const battleship = new GamePiece('Battleship', 4);
const cruiser = new GamePiece('Cruiser', 3);
const submarine = new GamePiece('Submarine', 3);
const destroyer = new GamePiece('Destroyer', 3);

const stage = (piece, x, y) => {
	const coords = `${x}-${y}`

};
