'use strict';

import GamePiece from './GamePiece.mjs';
import { gameState } from "./GameState.mjs";
import { generateAlert } from "./utilities.mjs";

const occupiedPCoords = [];
const occupiedCCoords = [];
const playerPlacedShips = [];
const computerPlacedShips = [];

const pieces = [
	new GamePiece('Carrier', 5),
	new GamePiece('Battleship', 4),
	new GamePiece('Cruiser', 3),
	new GamePiece('Submarine', 3),
	new GamePiece('Destroyer', 3)
];

// We want to setup a function that procedurally generates the game pieces on each side of the
// board.
const setupStagingArea = (items) => {
	const stagingArea = document.getElementsByClassName('stagingArea');

	stagingArea.forEach(el => {

	})
}

const stage = (piece, x, y) => {
	const coords = `${x}-${y}`

};
sdfasdfasdfasdfasdf
