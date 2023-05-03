import EditFormView from './../view/edit-form-view.js';
import {render} from '../render.js';

export default class EditFormPresenter {
  formComponent = new EditFormView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.formComponent, this.parentContainer);
  }
}
