const gridLayout = [];
const occupiedPCoords = [];
const placedShips = []

function generateGrid(row, col) {
    const pGridContainer = document.getElementById('playerGridContainer');
    // Generate a 2D array for a 10x10 grid space and push to gridLayout. First dimension represents a row A-J. 2nd dimension represents the columns 1-10.
    for (let i = row; i > 0; i--) {
        gridLayout.push(Array.from({
            length: col
        }, (_, i) => i + 1));
    }
    console.log(gridLayout)
    // Create a dynamic grid. This is what the player sees.

    let cell;
    pGridContainer.style.setProperty('--grid-rows', row);
    pGridContainer.style.setProperty('--grid-cols', col);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            cell = document.createElement('div');
            pGridContainer.appendChild(cell).className = "grid-item";
            const cellId = `${j+1}-${i+1}`;
            // console.log(cellId);
            cell.setAttribute('id', cellId);
            // Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on. 
        }
    }
}

generateGrid(10, 10);

let toggle = false;
let active = null;

const shipSelect = document.getElementById('playerPieces');

shipSelect.addEventListener('click', handleClick);

const rotBtn = document.getElementById('rotate');
const gridCoords = document.querySelectorAll('.grid-item');
gridCoords.forEach(el => el.addEventListener('click', handleClick));
rotBtn.addEventListener('click', handleClick);

function handleClick(e) {
    if (e.target.id === "carrier" || e.target.id === "battleship" || e.target.id === "cruiser" || e.target.id === "submarine" || e.target.id === "destroyer") {

        if (active === null) {
            active = e.target.id;
            document.querySelectorAll(`#${e.target.id}`).forEach(el => el.style.borderColor = "yellow");
            console.log(active);
        } else {
            document.querySelectorAll(`#${active}`).forEach(el => el.style.borderColor = "black");
            active = e.target.id;
            document.querySelectorAll(`#${e.target.id}`).forEach(el => el.style.borderColor = "yellow")
            console.log("New active: " + active);
        }
    }

    if (e.target.className === "grid-item") {
        if (game.stage == 'staging') {
            if (active === null) {
                console.log(e.target.id);
                console.log(e.target.className);
               // alert("Please select a piece first.");
                // initiates the placeShip function to 'paint' the ship on the graph.
            } else {
                const arr = Array.from(e.target.id);
                let x = parseInt(arr[0]);
                let y = parseInt(arr[2]);
                placeShip(x, y);
                console.log("Poke")
            }
        }

    }

    /* if (e.target.id === 'rotate') {
        if (!toggle) {
            toggle = true;
            ships.changeRotation(active, 'vertical');
            console.log(active + " rotation changed to " + toggle);
            placeShip(ships.getCoords(active)[0], ships.getCoords(active)[1], true);
        } else {
            toggle = false;
            ships.changeRotation(active, 'horizontal');
            console.log(active + " rotation changed to " + toggle);
            placeShip(ships.getCoords(active)[0], ships.getCoords(active)[1], true);
        }
    } */
}

const allShipsPlaced = () => placedShips.length === 5;


function placeShip(x, y) {

    // Checks too see if all ships are placed.
    if (allShipsPlaced()) {
        alert("You're grid is full, please press play!");

        // Prevent duplication of same ship.
    } else if (placedShips.find(el => el === active) === active) {
        alert("You already placed this piece!");
    } else {
        // If ship rotation is set horizontal (default rotation), make sure there is space for the piece.
        if (ships.getRot(active) == 'horizontal') {
            // Prevent placing ships if ship length exceeds grid boundary.
            if ((ships.getSize(active) - 1) + x <= 10) {
                for (let i = 0; i < ships.getSize(active); i++) {
                    const coord = `${x+i}-${y}`;
                    const gridCell = document.getElementById(coord);
                    gridCell.style.backgroundColor = "blue";
                    occupiedPCoords.push(coord);
                }
            } else if (ships.getSize(active) + y - 1 <= 10) { 
                console.log("Warning, Will Robinson, warning.")
            }
            placedShips.push(active);
            console.log(placedShips);
            console.log(occupiedPCoords)
        }
    }
}



/* function placeShip(x, y) {
    if (ships.getRot(active) !== "horizontal") {
        for (let i = 0; i < x + ships.getSize(active) - 1; i++) {
            const takeCoords = `${x+i}-${y}`;
            occupiedPCoords.push(takeCoords);
            ships.changeCoords(active, x + i, y);
            
        }
        console.log(x + ships.getSize(active) - 1)
        console.log(y)
    } else {
        for (let i = 0; i < y + ships.getSize(active) - 1; i++) {
            const takeCoords = `${x}-${y+i}`;
            occupiedPCoords.push(takeCoords);
            ships.changeCoords(active, x, y + i);
        }
        console.log(y + ships.getSize(active) - 1)
        console.log(x)
    }

   for (let i = 0; i < occupiedPCoords.length; i++) {
        const gridCell = document.getElementById(`${occupiedPCoords[i]}`);
        gridCell.style.backgroundColor = "blue";
    }
} */