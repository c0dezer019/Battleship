import { occupiedCoords } from './gridHandler';
// Makes the game pieces that will make up the board and assign them to the board

import occupiedCoords from '../js/gridHandler.js'

const ships = {
    carrier: {
        size: 5,
        image: "../images/carrier.png"
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
        this.size = size;
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

    placeShip () {
        
    }
}