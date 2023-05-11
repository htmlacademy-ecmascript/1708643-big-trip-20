import {getDestinations} from '../mock/destination.js';

export default class DestinationsModel {
  #destinations;

  constructor() {
    this.#destinations = getDestinations();
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
