import {getDestinations} from '../mock/destination.js';

export default class DestinationsModel {
  constructor() {
    this.destinations = getDestinations();
  }

  get() {
    return this.destinations;
  }

  getById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
