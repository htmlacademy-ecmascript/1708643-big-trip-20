import Observable from '../framework/observable.js';
import {getRandomPoint} from '../mock/trip-point.js';
import {POINT_LIST_RENDER_COUNT} from '../const.js';

export default class TripPointsModel extends Observable {
  #apiService = null;
  #points = [];

  constructor({apiService}) {
    super();

    this.#apiService = apiService;

    this.#apiService.points.then((points) => {
      console.log(points.map(this.#adaptToClient));
    });

    this.#points = Array.from({length: POINT_LIST_RENDER_COUNT}, getRandomPoint);
  }

  get points() {
    return this.#points;
  }

  updatePoint = (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  };

  addPoint = (updateType, update) => {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  };

  deletePoint = (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  };

  #adaptToClient = (point) => {
    const adaptedPoint = {
      ...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'] ?? new Date(point['date_from']),
      dateTo: point['date_to'] ?? new Date(point['date_to']),
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  };
}
