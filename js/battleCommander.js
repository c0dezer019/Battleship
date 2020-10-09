// Handles the combat for both fleets.
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

//Prep the field for combat.
function gameStart() {
    document.querySelector('.theButtonZone').remove()
    // No need for player to attack own field or select ship pieces.
    shipSelect.removeEventListener('click', handleClick);
    pGridCoords.removeEventListener('click', handleClick);
    game.changeStage('started');

    console.log(game.turn)
    if (game.getStage() == 'started') {
        console.log('Entering started')
        if (game.getTurn() == 'player') {
            console.log('Entering turn')
            const computerGrid = document.querySelectorAll('.comp-grid-item');
            computerGrid.forEach(el => el.addEventListener('click', combatHandler));

            function combatHandler(e) {
                if (checkCoords(e.target.id)) {
                    console.log(e.target.id)
                    document.getElementById(e.target.id).style.backgroundColor = 'red';
                    console.log('Hit!');
                } else {
                    console.log("Something isn't working right.")
                    console.log(e.target.id)
                }
            }
        } else {
            console.log("what is going on here?")
        }

    }
}