import {getOffers} from '../mock/offer.js';

export default class OffersModel {
  constructor() {
    this.offers = getOffers();
  }

  get() {
    return this.offers;
  }

  getByType(type) {
    return this.offers
      .find((offers) => offers.type === type).offers;
  }
}
