import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';

export default class DestinationsModel extends Observable {
  #apiService = null;
  #destinations = [];

  constructor({apiService}) {
    super();

    this.#apiService = apiService;
  }

  get destinations() {
    return this.#destinations;
  }

  init = async () => {
    try {
      this.#destinations = await this.#apiService.destinations;
    } catch (err) {
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  };

  getById = (id) =>
    this.#destinations.find((destination) => destination.id === id);
}
