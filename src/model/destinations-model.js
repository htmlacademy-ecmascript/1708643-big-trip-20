import Observable from '../framework/observable.js';
import {getDestinations} from '../mock/destination.js';

export default class DestinationsModel extends Observable {
  #destinations;

  constructor() {
    super();

    this.#destinations = getDestinations();
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
