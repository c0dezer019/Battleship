const gridLayout = []

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
            const cellId = `${i+1}-${j+1}`
            console.log(cellId);
            cell.setAttribute('id', cellId);
            // Give each cell a unique ID corresponding to it's grid coordinates. E.X. Grid 1-1, 1-2, 2-1, and so on. 
        }
    }
    10
}

generateGrid(10, 10);

/* 
 * For each game piece, generate a certain amount of divs to represent health.
 * Divs same size as grid squares 
 */
const pGridContainer = document.querySelector('#playerGridContainer');
// Create a container for the game piece
const pieceContainer = document.createElement('div');
pieceContainer.setAttribute('class', 'pieceContainer');
// Add an image to container
const carrier = document.createElement('img');
carrier.setAttribute('src', '../images/carrier2.png');
pieceContainer.appendChild(carrier);
pGridContainer.appendChild(pieceContainer);


// Append piece container to specified grid coords.
// Rotate piece depending on position settings.