// Makes the game pieces that will make up the board and assign them to the board
const ships = {
    carrier: {
        size: 5,
        rotation: "horizontal",
        coords: [],
        
    },
    battleship: {
        size: 4,
        rotation: "horizontal",
        coords: []
    },
    cruiser: {
        size: 3,
        rotation: "horizontal",
        coords: []
    },
    submarine: {
        size: 3,
        rotation: "horizontal",
        coords: []
    },
    destroyer: {
        size: 2,
        rotation: "horizontal",
        coords: []
    },
    changeRotation: function (type, newRot) {
        if (type === "carrier") {
            this.carrier.rotation = newRot;
        } else if (type === "battleship") {
            this.battleship.rotation = newRot;
        } else if (type === "cruiser") {
            this.cruiser.rotation = newRot;
        } else if (type === "submarine") {
            this.submarine.rotation = newRot;
        } else if (type === "destroyer") {
            this.destroyer.rotation = newRot;
        }
    },
    changeCoords: function(type, x, y) {
        if (type === "carrier") {
            this.carrier.coords.push(x, y);
        } else if (type === "battleship") {
            this.battleship.coords.push(x, y);
        } else if (type === "cruiser") {
            this.cruiser.coords.push(x, y);
        } else if (type === "submarine") {
            this.submarine.coords.push(x, y);
        } else if (type === "destroyer") {
            this.destroyer.coords.push(x, y);
        }
    },
    getRot: function(type) {
        if (type === "carrier") {
            return this.carrier.rotation;
        } else if (type === "battleship") {
            return this.battleship.rotation;
        } else if (type === "cruiser") {
            return this.cruiser.rotation;
        } else if (type === "submarine") {
            return this.submarine.rotation;
        } else if (type === "destroyer") {
            return this.destroyer.rotation
        }
    },
    getSize: function(type) {
        if (type === "carrier") {
            return this.carrier.size;
        } else if (type === "battleship") {
            return this.battleship.size;
        } else if (type === "cruiser") {
            return this.cruiser.size;
        } else if (type === "submarine") {
            return this.submarine.size;
        } else if (type === "destroyer") {
            return this.destroyer.size;
        }
    },
    getCoords: function(type) {
        if (type === "carrier") {
            return this.carrier.coords;
        } else if (type === "battleship") {
            return this.battleship.coords;
        } else if (type === "cruiser") {
            return this.cruiser.coords;
        } else if (type === "submarine") {
            return this.submarine.coords;
        } else if (type === "destroyer") {
            return this.destroyer.coords;
        }
    }
}

const player = {
    "color": "rgb(79, 79, 241)"
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

const buttonZone = document.createElement('div');
buttonZone.setAttribute('class', 'theButtonZone');
document.getElementById('playerBoard').appendChild(buttonZone);

const startButton = document.createElement('button');
startButton.setAttribute('id', 'start');
startButton.innerText = "Start"
document.querySelector('.theButtonZone').appendChild(startButton);