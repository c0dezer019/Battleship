'use strict';

class GamePiece{
  constructor(label, pSize, coords = {x: 0, y: 0}, isRotated = false) {
    this.label = label;
    this.pSize = pSize;
    this.coords = coords;
    this.isRotated = isRotated;
  }

  get coordinates() {
    return this.coords
  }

  set coordinates(coords) {
    this.coords.x = coords.x;
    this.coords.y = coords.y;
  }

  get rotationCheck() {
    return this.isRotated
  }

  set setRotation(bool) {
    this.isRotated = bool;
  }
}

export default GamePiece;
