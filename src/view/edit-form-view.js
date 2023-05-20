import AbstractView from '../framework/view/abstract-view.js';

const createEditFormTemplate = () =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    </form>
  </li>`;

export default class EditFormView extends AbstractView {
  #handleFormSubmit = null;

  constructor({onFormSubmit}) {
    super();

    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEditFormTemplate();
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
