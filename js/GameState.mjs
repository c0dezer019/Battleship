'use strict';

class GameState {
	constructor() {
		this.mode = 'staging';
		this.whosTurn = 'No one';
		this.gamePiecesRemaining = {
			playerOne: 0,
			playerTwo: 0,
		};
	}

	get checkMode() {
		return this.mode;
	}

	set setMode(mode) {
		this.mode = mode;
	}

	get checkTurn() {
		return this.whosTurn;
	}

	set changeTurn(player) {
		this.whosTurn = player;
	}

	get remainingPieces() {
		return this.gamePiecesRemaining;
	}

	set playerOnePiecesRemaining(piecesRemaining) {
		this.gamePiecesRemaining.playerOne = piecesRemaining;
	}

	set playerTwoPiecesRemaining(piecesRemaining) {
		this.gamePiecesRemaining.playerTwo = piecesRemaining;
	}
}

export const gameState = new GameState();
