import AbstractView from '../framework/view/abstract-view.js';
import {FilterStubText} from '../const.js';

const createNoTripPointTemplate = (filterType) =>
  `<p class="trip-events__msg">
    ${FilterStubText[filterType]}
  </p>`;

export default class NoTripPointView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();

    this.#filterType = filterType;
  }

  get template() {
    return createNoTripPointTemplate(this.#filterType);
  }
}
