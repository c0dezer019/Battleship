// Handles the combat for both fleets.

const fireControl = {
    player: {
        hits: []
    },
    computer: {
        hits: []
    }
}
const game = {
    stage: 'staging', //'not started', 'staging', 'started', 'ended'
    turn: 'player', // Who's turn is it
    changeStage: function (s) {
        this.stage = s;
    },
    getStage: function () {
        return this.stage;
    },
    getTurn: function () {
        return this.turn;
    }
}

const checkCoords = (coords) => {
    for (let i = 0; i < occupiedCCoords.length; i++) {
        if (occupiedCCoords[i].includes(coords)) {
            return true;
        }
    }
};

const turnController = () => {
    if (game.getTurn() == 'player') {
        const computerGrid = document.querySelectorAll('.comp-grid-item');
        const combatHandler = (e) => {
            if (!fireControl.player.hits.includes(e.target.id)) {
                if (checkCoords(e.target.id)) {
                    document.getElementById(e.target.id).style.backgroundColor = 'red';
                    fireControl.player.hits.push(e.target.id)
                } else {
                    document.getElementById(e.target.id).style.backgroundColor = 'yellow';
                    fireControl.player.hits.push(e.target.id)
                }
            }
        };

        computerGrid.forEach(el => el.addEventListener('click', combatHandler));
    }
}

//Prep the field for combat.
function gameStart() {
    document.querySelector('.theButtonZone').remove()
    // No need for player to attack own field or select ship pieces.
    shipSelect.removeEventListener('click', handleClick);
    pGridCoords.removeEventListener('click', handleClick);
    game.changeStage('started');

    turnController();
}