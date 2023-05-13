import {getRandomPoint} from '../mock/trip-point.js';
import {POINT_LIST_RENDER_COUNT} from '../const.js';

export default class TripPointsModel {
  #points;

  constructor() {
    this.#points = Array.from({length: POINT_LIST_RENDER_COUNT}, getRandomPoint);
  }

  get points() {
    return this.#points;
  }
}
