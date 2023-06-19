import Observable from '../framework/observable.js';
import {getDestinations} from '../mock/destination.js';

export default class DestinationsModel extends Observable {
  #apiService = null;
  #destinations = [];

  constructor({apiService}) {
    super();

    this.#apiService = apiService;

    this.#apiService.destinations.then((destinations) => {
      console.log(destinations);
    });

    this.#destinations = getDestinations();
  }

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
