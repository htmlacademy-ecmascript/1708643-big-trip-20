import Observable from '../framework/observable.js';
import {getRandomPoint} from '../mock/trip-point.js';
import {POINT_LIST_RENDER_COUNT} from '../const.js';

export default class TripPointsModel extends Observable {
  #points;

  constructor() {
    super();

    this.#points = Array.from({length: POINT_LIST_RENDER_COUNT}, getRandomPoint);
  }

  get points() {
    return this.#points;
  }
}
