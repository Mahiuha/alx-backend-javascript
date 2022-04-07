import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    super(sqrt);
    this._floors = floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
