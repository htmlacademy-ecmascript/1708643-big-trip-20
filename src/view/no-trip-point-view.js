import AbstractView from '../framework/view/abstract-view.js';
import {FilterStubText} from '../const.js';

const createNoTripPointTemplate = () =>
  `<p class="trip-events__msg">
    ${FilterStubText.EVERYTHING}
  </p>`;

export default class NoTripPointView extends AbstractView {
  get template() {
    return createNoTripPointTemplate();
  }
}
