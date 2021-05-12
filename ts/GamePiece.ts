export interface GamePiece {
    label: string;
    pSize: number;
    coords: Array<number>
    rotated: boolean
}

export class GamePiece {
    label: string
    pSize: number
    coords: Array<number>
    rotated: boolean

    constructor(label: string, pSize: number, coords: Array<number> = [], rotated: boolean = false) {
        this.label = label;
        this.pSize = pSize;
        this.coords = coords;
        this.rotated = rotated;
    }
}
