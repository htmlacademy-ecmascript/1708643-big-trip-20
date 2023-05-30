import AbstractView from '../framework/view/abstract-view.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const createEditFormTemplate = () =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    </form>
  </li>`;

export default class EditFormView extends AbstractStatefulView {
  #handleFormSubmit = null;

  constructor({tripPoint, handleFormSubmit}) {
    super();

    this._setState(tripPoint);
    this.#handleFormSubmit = handleFormSubmit;

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate();
  }

  _restoreHandlers = () => {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this._state);
  };
}
