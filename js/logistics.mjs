import GamePiece from "./GamePiece.mjs";
import placeShip from "./placeShip.mjs";

/* Piece sizes:
    carrier: 5
    battleship: 4
    cruiser: 3
    submarine: 3
    destroyer: 2

    *By default all game pieces will be set horizontally.
 */

const gamePieces = [
    new GamePiece('Carrier', 5),
    new GamePiece('Battleship', 4),
    new GamePiece('Cruiser', 3),
    new GamePiece('Submarine', 3),
    new GamePiece('Destroyer', 2),
];

const players = [{ 'player': { color: "rgb(79, 79, 241)" } }, { 'computer': { color: 'red' } }];

for (let i = 0; i < players.length; i++) {
    const pieces = document.getElementById(`${players[i]}Pieces`);

    for (let j = 0; j < gamePieces.length; j++) {
        const piece  = document.createElement('div');
        piece.setAttribute('id', gamePieces[j].label);
        piece.setAttribute('class', 'gamePiece');
        pieces.appendChild(piece);

        for (let k = 0; k < gamePieces[j].pSize; k++) {
            const pip = document.createElement('span');
            pip.style.backgroundColor = players[i].color;
            pip.setAttribute('class', 'healthPip');
            pip.setAttribute('id', gamePieces[j].label);
            piece.appendChild(pip)
        }
    }
}

const notice = document.getElementById('content');
const modTitle = document.getElementById('modalTitle');

export const warning = (title, msg) => {
    modTitle.innerText = title.toString();
    notice.innerHTML = msg.toString();
    $(document).ready(function () {
        $("#alertModal").modal();
    });
};
