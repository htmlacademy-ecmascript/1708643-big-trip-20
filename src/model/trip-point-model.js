import {getRandomPoint} from '../mock/trip-point.js';

const POINT_COUNT = 4;

export default class TripPointModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
