import {createElement} from '../render.js';

const createEditFormTemplate = () =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    </form>
  </li>`;

export default class EditFormView {
  getTemplate() {
    return createEditFormTemplate();
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
