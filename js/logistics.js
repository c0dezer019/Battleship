import { occupiedCoords } from './gridHandler';
// Makes the game pieces that will make up the board and assign them to the board

import occupiedCoords from '../js/gridHandler.js'

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

class Carrier extends Ship [

    
]