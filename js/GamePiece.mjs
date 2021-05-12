class GamePiece {
  constructor(label, pSize, coords = [], rotated = false) {
    this.label = label;
    this.pSize = pSize;
    this.coords = coords;
    this.rotated = rotated;
  }
}

export default GamePiece;
