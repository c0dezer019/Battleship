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

const checkCoords = (coords) => occupiedCCoords.includes(coords);
const computerGrid = document.querySelectorAll('.comp-grid-item');
//Prep the field for combat.
function gameStart() {
    document.querySelector('.theButtonZone').remove()
    // No need for player to attack own field or select ship pieces.
    shipSelect.removeEventListener('click', handleClick);
    pGridCoords.removeEventListener('click', handleClick);
    game.changeStage('started');

    console.log(game.turn)
    if (game.getStage() == 'started') {
        if (game.getTurn() == 'player') {
            computerGrid.forEach(el => el.addEventListener('click', combatHandler));

            function combatHandler(e) {
                if (e.target.id === checkCoords(e.target.id)) {
                    document.getElementById(e.target.id).style.backgroundColor = 'red';
                    console.log('Hit!');
                } else {
                    console.log("Something isn't working right.")
                }
            }
        } else("what is going on here?")
    }
}