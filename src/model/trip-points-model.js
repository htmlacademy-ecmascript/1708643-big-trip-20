import {getRandomPoint} from '../mock/trip-point.js';
import {POINT_LIST_RENDER_COUNT} from '../const.js';

export default class TripPointsModel {
  points = Array.from({length: POINT_LIST_RENDER_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
