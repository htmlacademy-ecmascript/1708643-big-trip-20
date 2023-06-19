import Observable from '../framework/observable.js';

export default class OffersModel extends Observable {
  #apiService = null;
  #offers = [];

  constructor({apiService}) {
    super();

    this.#apiService = apiService;
  }

  get offers() {
    return this.#offers;
  }

  init = async () => {
    try {
      this.#offers = await this.#apiService.offers;
    } catch (err) {
      this.#offers = [];
    }
  };

  getByType(type) {
    return this.#offers
      .find((offers) => offers.type === type).offers;
  }
}
