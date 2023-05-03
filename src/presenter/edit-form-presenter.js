import EditFormView from './../view/edit-form-view.js';
import FormHeaderPresenter from './form-header-presenter.js';
import FormDetailsPresenter from './form-details-presenter.js';
import {render} from '../render.js';

export default class EditFormPresenter {
  formContainer = new EditFormView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.formContainer, this.parentContainer);

    const formElement = this.formContainer.getElement().querySelector('.event');

    const formHeaderPresenter = new FormHeaderPresenter({parentContainer: formElement});
    formHeaderPresenter.init();

    const formDetailsPresenter = new FormDetailsPresenter({parentContainer: formElement});
    formDetailsPresenter.init();
  }
}
