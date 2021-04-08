export class GamePiece {
  constructor(type, pSize, coords = [], rotated = false) {
    this.type = type
    this.pSize = pSize
    this.coords = coords;
    this.rotated = rotated;
  }
}
