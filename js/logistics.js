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
const rotButton = document.createElement('button');
document.getElementById('playerBoard').appendChild(rotButton);
rotButton.setAttribute('id', 'rotate');
rotButton.innerText = "Rotate"