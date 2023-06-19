import Observable from '../framework/observable.js';

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
  };

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
