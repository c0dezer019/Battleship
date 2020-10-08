const gridLayout = [];
const occupiedCoords = [];

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
            const cellId = `${i+1}-${j+1}`;
            // console.log(cellId);
            cell.setAttribute('id', cellId);
            // Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on. 
        }
    }
}

generateGrid(10, 10);

let active = null;

const shipSelect = document.getElementById('playerPieces');

shipSelect.addEventListener('click', handleClick);

const gridCoords = document.querySelectorAll('.grid-item');
gridCoords.forEach(el => el.addEventListener('click', handleClick));

function handleClick(e) {
    if (e.target.id === "carrier" || e.target.id === "battleship" || e.target.id === "cruiser" || e.target.id === "submarine" || e.target.id === "destroyer") {

        if (active === null){
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
        // console.log("You clicked me!");
        // console.log(e.target.id);

        c
    }
}