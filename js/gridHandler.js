const gridLayout = []

function generateGrid (row, col) {
    const pGridContainer = document.getElementById('playerGridContainer');
    // Generate a 2D array for a 10x10 grid space and push to gridLayout. First dimension represents a row A-J. 2nd dimension represents the columns 1-10.
    for (let i = 10; i > 0; i--) {
        gridLayout.push(Array.from({length: 10}, (_, i) => i + 1));
    }
    // Create a dynamic grid
    pGridContainer.style.setProperty('--grid-rows', row);
    pGridContainer.style.setProperty('--grid-cols', col);
    for (let i = 0; i < (row * col); i++) {
        let cell = document.createElement('div');
    pGridContainer.appendChild(cell).className = "grid-item";
    }
}

generateGrid(2, 2);

/* For each game piece, generate certain of divs to represent health.
    *Divs same size as grid squares */

/* 
    TODO: Find images for game pieces, 
    */

// Append piece container to specified grid coords.
// Rotate piece depending on position settings.
