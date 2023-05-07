import {createElement} from '../render.js';

const createFormDetailsTemplate = () =>
  `<section class="event__details">
  </section>`;

export default class FormDetailsView {
  getTemplate() {
    return createFormDetailsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}