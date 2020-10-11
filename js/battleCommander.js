// Handles the combat for both fleets.

const radar = {
    player: {
        hits: []
    },
    computer: {
        hits: []
    },
    addHits: function (player, coords) {
        switch (player) {
            case 'player':
                this.player.hits.push(coords);
                break;
            case 'computer':
                this.computer.hits.push(coords);
                break;
            default:
                warning.innerHTML = radar_obj;
                $(function () {
                    $("#warning_notice").dialog();
                });
        }
    },
    getHits: function (player) {
        switch (player) {
            case 'player':
                return this.player.hits;
            case 'computer':
                return this.computer.hits;
            default:
                warning.innerHTML = radar_obj;
                $(function () {
                    $("#warning_notice").dialog();
                });
        }
    }
}

const game = {
    stage: 'staging', //'not started', 'staging', 'started', 'ended'
    turn: 'player', // Who's turn is it
    changeStage: function (s) {
        this.stage = s;
    },
    changeTurn: function (who) {
        this.turn = who;
    },
    getStage: function () {
        return this.stage;
    },
    getTurn: function () {
        return this.turn;
    }
}

// Checks to see if the attack hits anything.
const spotter = (coords) => {
    if (game.getTurn() == 'player') {
        for (let i = 0; i < occupiedCCoords.length; i++) {
            if (occupiedCCoords[i].includes(coords)) {
                return true;
            }
        }
    } else {
        for (let i = 0; i < occupiedPCoords.length; i++) {
            if (occupiedPCoords[i].includes(coords)) {
                return true;
            }
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

    theCon();
}

// Controls the flow of combat.
function theCon() {
    if (game.getStage() == 'started') {
        const computerGrid = document.querySelectorAll('.comp-grid-item');
        if (game.getTurn() == 'player') {
            computerGrid.forEach(el => el.addEventListener('click', combatHandler));

            function combatHandler(e) {
                if (!radar.getHits('player').includes(e.target.id)) {
                    if (spotter(e.target.id)) {
                        document.getElementById(e.target.id).style.backgroundColor = 'red';
                        radar.addHits('player', e.target.id);
                        const index = occupiedCCoords.indexOf(occupiedCCoords.find(el => el == e.target.id));
                        console.log(index);

                        if (index > -1) {
                            occupiedCCoords.splice(index, 1);
                            console.log("Computer health: " + occupiedCCoords);
                        }
                        // If computer has no more occupied spaces left.
                        if (occupiedCCoords.length == 0) {
                            // VICTORY!
                            computerGrid.forEach(el => el.removeEventListener('click', combatHandler));
                            modTitle.innerText = "Victory!"
                            notice.innerText = "Congratulations, Admiral. You have beaten the enemy fleet.";
                            $(document).ready(function () {
                                $("#alertModal").modal();
                            });
                            game.changeStage('ended');
                        }
                        game.changeTurn('computer');
                        theCon();
                    } else {
                        document.getElementById(e.target.id).style.backgroundColor = 'yellow';
                        radar.addHits('player', e.target.id)
                        game.changeTurn('computer');
                        theCon();
                    }
                }
            }

        } else {
            computerGrid.forEach(el => el.removeEventListener('click', combatHandler));
            let target;
            pGridLayout[Math.floor(Math.random() * ((pGridLayout.length - 1) - 0 + 1) + 0)];
            do {
                target = pGridLayout[Math.floor(Math.random() * ((pGridLayout.length - 1) - 0 + 1) + 0)];
            } while (radar.getHits('computer').includes(target))
            if (!radar.getHits('computer').includes(target)) {
                if (spotter(target)) {
                    document.getElementById(target).style.backgroundColor = 'red';
                    radar.addHits('computer', target);
                    const index = occupiedPCoords.indexOf(occupiedPCoords.find(el => el == target));
                    console.log(index);

                    if (index > -1) {
                        occupiedPCoords.splice(index, 1);
                        console.log("Player health: " + occupiedPCoords)
                    }
                    // if player has no more occupied spaces left.
                    if (occupiedPCoords.length == 0) {
                        // Defeated
                        computerGrid.forEach(el => el.removeEventListener('click', combatHandler));
                        modTitle.innerText = "Defeated"
                        notice.innerHTML = "<img src=\"https://memegenerator.net/img/instances/66976681/you-have-failed-me-for-the-last-time-admiral.jpg\" alt=\"You have failed me for the last time, Admiral.\" style=\"width: 100%; height: 100%;\"></img>"
                        $(document).ready(function () {
                            $("#alertModal").modal();
                        });
                        game.changeStage('ended');
                        window.open('')
                    }
                    game.changeTurn('player');
                    theCon();
                    // Miss
                } else {
                    document.getElementById(target).style.backgroundColor = 'yellow';
                    radar.addHits('computer', target);
                    game.changeTurn('player');
                    theCon();
                }
            }
        }

    }
}