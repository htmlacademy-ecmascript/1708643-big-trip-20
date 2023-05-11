import AbstractView from '../framework/view/abstract-view.js';

const createFormDetailsTemplate = () =>
  `<section class="event__details">
  </section>`;

export default class FormDetailsView extends AbstractView {
  get template() {
    return createFormDetailsTemplate();
  }
}
