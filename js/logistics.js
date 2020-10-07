import { occupiedCoords } from './gridHandler';
// Makes the game pieces that will make up the board and assign them to the board

const ships = {
    carrier: {
        size: 5
    },
    battleship: {
        size: 4
    },
    cruiser: {
        size: 3
    },
    submarine: {
        size: 3
    },
    destroyer: {
        size: 2
    }
}

class Ship {
    constructor(type, size, coords) {
        this.type = type;
        this.size = $;
        this.orientation = 'horizontal';
        this.coords = coords;
    }

    rotateShip(newRot) {
        return this.orientation = newRot;
    }

    get size() {
        return this.size;
    }

    get newRotation() {
        return this.size();
    }

    get color() {
        return this.color;
    }

    placeShip (x, y) {
        const coords = [];
        
        if (this.orientation === 'horizontal') {
            for (let i = y; i <= this.size; i++) {
                coords.push(`${x}-${y}`);
                y += 1;
                console.log(this.type + " placed horizontally.");
            } 
        } else if (this.orientation === 'vertical') {
            for (let i = x; i <= this.size; i++) {
                coords.push(`${x}-${y}`);
                x += 1;
                console.log(this.type + " placed vertically.");
            }
        } else {
            console.log("Incorrect parameter")
        }
        occupiedCoords.push(coords);
    }
}

class Carrier extends Ship {
    constructor(color) {
        this.size = ships.carrier.size;
        this.color = color;
    }
}

class Battleship extends Ship {
    constructor(color) {
        this.size = ships.battleship.size;
        this.color = color;
    }
}

class Cruiser extends Ship {
    constructor(color) {
        this.size = ships.cruiser.size;
        this.color = color;
    }
}

class Submarine extends Ship {
    constructor(color) {
        this.size = ships.submarine.size;
        this.color = color;
    }
}

class Destroyer extends Ship {
    constructor(color) {
        this.size = ships.destroyer.size;
        this.color = color;
    }
}