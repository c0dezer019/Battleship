// j represents column, i represents row
const maxLength = []  // x and y maximums
let mode = 'staging';

function generateGrid(row, col, numberOfPlayers) {
	maxLength.push(row, col)

	for (let i = 1; i <= numberOfPlayers; i++) {
		// Create a dynamic grid. This is what the player sees.
		const playerGrid = document.createElement('div');
		const gridId = `player${i}Container`;
		playerGrid.setAttribute('id', gridId);
		playerGrid.style.setProperty('--grid-rows', row);
		playerGrid.style.setProperty('--grid-cols', col);
		// Append container to parent container.
		const container = document.querySelector('#playerOneGridContainer');
		container.appendChild(playerGrid);

		for (let j = 0; j < row; j++) {
			for (let k = 0; k < col; j++) {
				const cell = document.createElement('div');
				gridContainer.appendChild(cell).className = `player${i}GridItem`;
				const cellId = `${k}-${j}`;
				// Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on.
				cell.setAttribute('id', cellId);
				cell.dataset.column = `${k}`;
				cell.dataset.row = `${j}`;
			}
		}
	}
}

window.addEventListener('DOMContentLoaded', () => generateGrid(10, 10, 2));

const buttonZone = document.createElement('div');
buttonZone.setAttribute('class', 'theButtonZone');
document.getElementById('playerBoard').appendChild(buttonZone);

const startButton = document.createElement('button');
startButton.setAttribute('id', 'start');
startButton.innerText = 'Start'
document.querySelector('.theButtonZone').appendChild(startButton);

const rotBtn = document.createElement('button');
rotBtn.setAttribute('id', 'rotate');
rotBtn.innerText = 'Rotate';
document.querySelector('.theButtonZone').appendChild(rotBtn);

const handleClick = () => {};

const pGridCoords = document.getElementById('playerGridContainer');
const cGridCoords = document.getElementById('computerGridContainer');
const rotateBtn = document.getElementById('rotate');
const shipSelect = document.getElementById('playerPieces');
const startBtn = document.getElementById('start');

pGridCoords.addEventListener('click', handleClick);
cGridCoords.addEventListener('click', handleClick);
rotateBtn.addEventListener('click', handleClick);
shipSelect.addEventListener('click', handleClick);
startBtn.addEventListener('click', handleClick);



