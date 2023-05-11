import {getRandomPoint} from '../mock/trip-point.js';
import {POINT_LIST_RENDER_COUNT} from '../const.js';

export default class TripPointsModel {
  constructor() {
    this.points = Array.from({length: POINT_LIST_RENDER_COUNT}, getRandomPoint);
  }

  get() {
    return this.points;
  }
}
