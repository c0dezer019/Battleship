const pGridLayout = [];
const cGridLayout = [];
const occupiedPCoords = [];
const occupiedCCoords = [];
const playerPlacedShips = [];
const computerPlacedShips = [];


function generateGrid(row, col) {
    const pGridContainer = document.getElementById('playerGridContainer');
    // Create a dynamic grid. This is what the player sees.
    pGridContainer.style.setProperty('--grid-rows', row);
    pGridContainer.style.setProperty('--grid-cols', col);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const cell = document.createElement('div');
            pGridContainer.appendChild(cell).className = "player-grid-item";
            const cellId = `${j}-${i}`;
            // Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on. 
            cell.setAttribute('id', cellId);
            pGridLayout.push(cellId);
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
            const cellId = `c${j}-${i}`;
            cell.setAttribute('id', cellId);
            cGridLayout.push(cellId);
        }
    }
}
generateGrid(10, 10);



let toggle = false;
let active = null;

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

const allShipsPlaced = () => playerPlacedShips.length === 5;

function handleClick(e) {
    if (e.target.id === "carrier" || e.target.id === "battleship" || e.target.id === "cruiser" || e.target.id === "submarine" || e.target.id === "destroyer") {

        if (active === null) {
            active = e.target.id;
            document.querySelectorAll(`#${e.target.id}`).forEach(el => el.style.borderColor = "yellow");

        } else {
            document.querySelectorAll(`#${active}`).forEach(el => el.style.borderColor = "black");
            active = e.target.id;
            document.querySelectorAll(`#${e.target.id}`).forEach(el => el.style.borderColor = "yellow")
        }
    }

    if (e.target.className === "player-grid-item") {
        if (game.stage == 'staging') {
            if (active === null) {
                warning('Warning!', "<div style=\"text-align: center;\"><img class=\"warning_icon\" src=\"images/warning.png\" alt=\"warning_icon\"></img><span>Please select a piece first!</span></div>");
                // initiates the placeShip function to 'paint' the ship on the graph.
            } else {
                const arr = Array.from(e.target.id);
                let x = parseInt(arr[0]);
                let y = parseInt(arr[2]);
                ships.setPivot(active, e.target.id);
                placeShip(x, y);
            }
        }
    }

    if (e.target.id === 'rotate') {
        const arr = Array.from(ships.getPivot(active));
        let x = parseInt(arr[0]);
        let y = parseInt(arr[2]);

        if (!toggle) {
            toggle = true;
            ships.changeRotation(active, 'vertical');
            occupiedPCoords.forEach((item, i) => {
                if (ships.getCoords(active).includes(item)) {
                    occupiedPCoords.splice(i, 1);
                    ships.getCoords(active).splice(ships.getCoords(active).indexOf(item), 1);
                }
            });
            placeShip(x, y);
        } else {
            toggle = false;
            ships.changeRotation(active, 'horizontal');
            occupiedPCoords.forEach((item, i) => {
                if (ships.getCoords(active).includes(item)) {
                    occupiedPCoords.splice(i, 1);
                    ships.getCoords(active).splice(ships.getCoords(active).indexOf(item), 1);
                }
            });
            placeShip(x, y);
        }
    }

    if (e.target.id === "start") {
        if (allShipsPlaced()) {
            for (let i = 0; i < maps.getPreset(1).length; i++) {
                occupiedCCoords.push(maps.getPreset(1)[i]);
            }
            gameStart();
        } else {
            warning('Warning!', "<div style=\"text-align: center;\"><img class=\"warning_icon\" src=\"images/warning.png\" alt=\"warning_icon\"></img><span>Please place all of your pieces first.</span></div>");
        }
    }
}

function placeShip(x, y) {
    // Checks too see if all ships are placed.
    if (allShipsPlaced()) {
        warning('Warning!', "<div style=\"text-align: center;\"><img class=\"warning_icon\" src=\"images/warning.png\" alt=\"warning_icon\"></img><span>You're fleet is already full, please start the game.</span></div>");

        // Prevent duplication of same ship.
    } else if (playerPlacedShips.find(el => el === active) === active) {
        warning('Warning!', "<div style=\"text-align: center;\"><img class=\"warning_icon\" src=\"images/warning.png\" alt=\"warning_icon\"></img><span>You can't place the same ship more than once!</span></div>");
    } else if (ships.getSize(active) + x - 1 >= 10) {
        warning('Warning!', "<div style=\"text-align: center;\"><img class=\"warning_icon\" src=\"images/warning.png\" alt=\"warning_icon\"></img><span>You can't place a ship out of bounds!</span></div>");
        console.log(ships.getSize(active) + x - 1)
    } else {
        // If ship rotation is set horizontal (default rotation), make sure there is space for the piece.
        if (ships.getRot(active) == 'horizontal') {
            if ((ships.getSize(active) - 1) + x <= 9) {
                for (let i = 0; i < ships.getSize(active); i++) {
                    const coord = `${x+i}-${y}`;
                    const gridCell = document.getElementById(coord);
                    gridCell.style.backgroundColor = "blue";
                    occupiedPCoords.push(coord);
                    ships.changeCoords(active, x, y);
                }
                playerPlacedShips.push(active);
            }
        }
    }
}