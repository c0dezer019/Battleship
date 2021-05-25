

// j represents column, i represents row
const maxLength = []  // x and y maximums
let mode = 'staging';

function generateGrid(row, col) {
  maxLength.push(row, col)

  // Create a dynamic grid. This is what the player sees.
  const pGridContainer = document.getElementById('playerGridContainer');
  pGridContainer.style.setProperty('--grid-rows', row);
  pGridContainer.style.setProperty('--grid-cols', col);

  for (let i = 0; i < row; i++) {
	for (let j = 0; j < col; j++) {
	  const cell = document.createElement('div');
	  pGridContainer.appendChild(cell).className = "player-grid-item";
	  const cellId = `${ j }-${ i }`;
	  // Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on.
	  cell.setAttribute('id', cellId);
	  cell.dataset.column = `${j}`;
	  cell.dataset.row = `${i}`;
	}
  }

  // Generate computer's side of the board.
  const cGridContainer = document.getElementById('computerGridContainer');
  cGridContainer.style.setProperty('--grid-rows', row);
  cGridContainer.style.setProperty('--grid-cols', col);

  for (let i = 0; i < row; i++) {
	for (let j = 0; j < col; j++) {
	  const cell = document.createElement('div');
	  cGridContainer.appendChild(cell).className = "comp-grid-item";
	  const cellId = `c${ j }-${ i }`;
	  cell.setAttribute('id', cellId);
	  cell.dataset.column = `${j}`;
	  cell.dataset.row = `${i}`;
	}
  }
}

generateGrid(10, 10);

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

const pGridCoords = document.getElementById('playerGridContainer');
const cGridCoords = document.getElementById('computerGridContainer');
const rotateBtn = document.getElementById('rotate');
const shipSelect = document.getElementById('playerPieces');
const startBtn = document.getElementById('start');
pGridCoords.addEventListener('click', handleClick);
cGridCoords.addEventListener('click', handleClick);
rotateBtn.addEventListener('click', handleClick);
shipSelect.addEventListener('click', handleClick);
startBtn.addEventListener('click', handleClick );



