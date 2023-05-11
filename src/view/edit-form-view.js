import AbstractView from '../framework/view/abstract-view.js';

const createEditFormTemplate = () =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    </form>
  </li>`;

export default class EditFormView extends AbstractView {
  get template() {
    return createEditFormTemplate();
  }
}
