import { GamePiece} from "./GamePiece";

// Makes the game pieces that will make up the board and assign them to the board
/* Piece sizes:
    carrier: 5
    battleship: 4
    cruiser: 3
    submarine: 3
    destroyer: 2

    *By default all game pieces will be set horizontally.
 */


const player = {
    "color": "rgb(79, 79, 241)"
}
const computer = {
    "color": "red"
}

// Create the
const gamePieces = [
    new GamePiece('Carrier', 5),
    new GamePiece('Battleship', 4),
    new GamePiece('Cruiser', 3),
    new GamePiece('Submarine', 3),
    new GamePiece('Destroyer', 2),
];

const players = ['player', 'computer'];

for (let i = 0; i < players.length; i++) {
    const pieces = document.getElementById(`${players[i]}Pieces`);

    for (let j = 0; j < gamePieces.length; j++) {
        const piece  = document.createElement('div');
        piece.setAttribute('id', gamePieces[i].type);
        piece.setAttribute('class', 'gamePiece');
        pieces.appendChild(piece);

        for (let k = 0; k < gamePieces[i].pSize; k++) {
            const pip = document.createElement('span');
            pip.style.backgroundColor = player.color;
            pip.setAttribute('class', 'healthPip');
            pip.setAttribute('id', gamePieces[i].type);
            piece.appendChild(pip)
        }
    }
}

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
