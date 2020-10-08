// Makes the game pieces that will make up the board and assign them to the board

const ships = {
    carrier: {
        size: 5,
        rotation: "horizontal"
    },
    battleship: {
        size: 4,
        rotation: "horizontal"
    },
    cruiser: {
        size: 3,
        rotation: "horizontal",
    },
    submarine: {
        size: 3,
        rotation: "horizontal"
    },
    destroyer: {
        size: 2,
        rotation: "horizontal"
    },
    changeRotation: function(type, newRot) {
        type = newRot;
    }
}

/* class Ship {
    constructor(rotation) {
        this.rotation = rotation;
    }

    rotateShip(newRot) {
        return this.rotation = newRot;
    }

    get size() {
        return this.size;
    }

    get color() {
        return this.color;
    }
}

class Carrier extends Ship {
    constructor(color) {
        super(rotation)
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
} */

const player = {
    "color": "rgb(79, 79, 241)",
}

const computer = {
    "color": "red"
}

// Create the pieces


const pPieces = document.getElementById('playerPieces');
const c = document.createElement('div');
pPieces.appendChild(c);
c.setAttribute('id', 'carrierD');
c.setAttribute('class', 'shipPiece');
for (let i = 0; i < ships.carrier.size; i++) {
    const pip = document.createElement('span');
    pip.style.backgroundColor = player.color;
    pip.setAttribute('class', 'healthPip')
    pip.setAttribute('id', 'carrier');
    c.appendChild(pip);
}
const bs = document.createElement('div');
pPieces.appendChild(bs);
bs.setAttribute('id', 'battleshipD');
bs.setAttribute('class', 'shipPiece');
for (let i = 0; i < ships.battleship.size; i++) {
    const pip = document.createElement('span');
    pip.style.backgroundColor = player.color;
    pip.setAttribute('class', 'healthPip')
    pip.setAttribute('id', 'battleship');
    bs.appendChild(pip);
}
const cr = document.createElement('div');
pPieces.appendChild(cr);
cr.setAttribute('id', 'cruiserD');
cr.setAttribute('class', 'shipPiece');
for (let i = 0; i < ships.cruiser.size; i++) {
    const pip = document.createElement('span');
    pip.style.backgroundColor = player.color;
    pip.setAttribute('class', 'healthPip')
    pip.setAttribute('id', 'cruiser');
    cr.appendChild(pip);
}
const sub = document.createElement('div');
pPieces.appendChild(sub);
sub.setAttribute('id', 'submarineD');
sub.setAttribute('class', 'shipPiece');
for (let i = 0; i < ships.submarine.size; i++) {
    const pip = document.createElement('span');
    pip.style.backgroundColor = player.color;
    pip.setAttribute('class', 'healthPip')
    pip.setAttribute('id', 'submarine');
    sub.appendChild(pip);
}
const des = document.createElement('div');
pPieces.appendChild(des);
des.setAttribute('id', 'destroyerD');
des.setAttribute('class', 'shipPiece');
for (let i = 0; i < ships.destroyer.size; i++) {
    const pip = document.createElement('span');
    pip.style.backgroundColor = player.color;
    pip.setAttribute('class', 'healthPip')
    pip.setAttribute('id', 'destroyer');
    des.appendChild(pip);
}
const rotButton = document.createElement('button');
document.getElementById('playerBoard').appendChild(rotButton);
rotButton.setAttribute('id', 'rotate');
rotButton.innerText = "Rotate"