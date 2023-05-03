import FormHeaderView from './../view/form-header-view.js';
import {render} from '../render.js';

export default class FormHeaderPresenter {
  headerComponent = new FormHeaderView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.headerComponent, this.parentContainer);
  }
}
