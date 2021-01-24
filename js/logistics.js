// Makes the game pieces that will make up the board and assign them to the board
const shipState = {
    car: (rot, coords, pivot) => {
        return {
            carrier: {
                size: 5,
                rotation: !rot ? 'horizontal' : rot,
                coords: !coords ? [] : coords,
                pivot: !pivot ? null : pivot
            }
        }
    },
    bat: (rot, coords, pivot) => {
        return {
            battleship: {
                size: 4,
                rotation: !rot ? 'horizontal' : rot,
                coords: !coords ? [] : coords,
                pivot: !pivot ? null : pivot
            }
        }
    },
    cru: (rot, coords, pivot) => {
        return {
            cruiser: {
                size: 3,
                rotation: !rot ? 'horizontal' : rot,
                coords: !coords ? [] : coords,
                pivot: !pivot ? null : pivot
            }
        }
    },
    sub: (rot, coords, pivot) => {
        return {
            submarine: {
                size: 3,
                rotation: !rot ? 'horizontal' : rot,
                coords: !coords ? [] : coords,
                pivot: !pivot ? null : pivot
            }
        }
    },
    des: (rot, coords, pivot) => {
        return {
            destroyer: {
                size: 2,
                rotation: !rot ? 'horizontal' : rot,
                coords: !coords ? [] : coords,
                pivot: !pivot ? null : pivot
            }
        }
    }
}

const player = {
    "color": "rgb(79, 79, 241)"
}
const computer = {
    "color": "red"
}

// Manipulate ship properties
function changeProps(type, prop) {

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
startButton.innerText = 'Start'
document.querySelector('.theButtonZone').appendChild(startButton);

const rotBtn = document.createElement('button');
rotBtn.setAttribute('id', 'rotate');
rotBtn.innerText = 'Rotate';
document.querySelector('.theButtonZone').appendChild(rotBtn);

const notice = document.getElementById('content');
const modTitle = document.getElementById('modalTitle');

function warning(title, msg) {
    modTitle.innerText = title.toString();
    notice.innerHTML = msg.toString();
    $(document).ready(function () {
        $("#alertModal").modal();
    });
}

export { shipState }