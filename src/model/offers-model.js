import Observable from '../framework/observable.js';
import {getOffers} from '../mock/offer.js';

export default class OffersModel extends Observable {
  #apiService = null;
  #offers = [];

  constructor({apiService}) {
    super();

    this.#apiService = apiService;

    this.#apiService.offers.then((offers) => {
      console.log(offers);
    });

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
