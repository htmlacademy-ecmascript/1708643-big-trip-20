import AbstractView from '../framework/view/abstract-view.js';
import {filterStubText} from '../const.js';

const createNoTripPointTemplate = () =>
  `<p class="trip-events__msg">
    ${filterStubText.EVERYTHING}
  </p>`;

export default class NoTripPointView extends AbstractView {
  get template() {
    return createNoTripPointTemplate();
  }
}
