const enemyFleet = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];

const maps = {
    one: [['c0-9'], ['c0-8'], ['c0-7'], ['c0-6'], ['c0-5'], ['c0-0'], ['c0-1'], ['c4-1'], ['c4-2'], ['c4-3'], ['c9-8'], ['c9-7'], ['c9-6'], ['c4-8'], ['c4-7'], ['c4-6'], ['c4-5']],
    two: [],
    three: [],
    setPreset: function(num, coords) {
        switch (num) {
            case 1:
                this.one.push(coords);
        }
    },
    getPreset: function(val) {
        switch (val) {
            case 1:
                return this.one;
            default:
                alert("There is no " + val);
        }
    }
}

const dupeChecker = (preset, coords) => maps.getPreset(preset).includes(coords);

function randCoords() { 
    for (const key in maps) { 
        for (const index of enemyFleet) {
            let x;
            let y;
        
            do { 
                x = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                y = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                const coords = `${x}-${y}`
            } while (dupeChecker(key, coords))
        }
    }
}

const generateMap = (preset, hull, rotation, x, y) => {
    if (rotation == 'horizontal') {
        for (let i = 0; i < ships.getSize(hull); i++) {
            const coords = `${x + i}-${y}`;
            maps.setPreset(preset, coords);
        }
    }
};