import Observable from '../framework/observable.js';
import {getOffers} from '../mock/offer.js';

export default class OffersModel extends Observable {
  #offers;

  constructor() {
    super();

    this.#offers = getOffers();
  }

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    return this.#offers
      .find((offers) => offers.type === type).offers;
  }
}
