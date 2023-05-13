import {getOffers} from '../mock/offer.js';

export default class OffersModel {
  #offers;

  constructor() {
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
