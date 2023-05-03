import FormDestinationView from './../view/form-destination-view.js';
import {render} from '../render.js';

export default class FormDetailsPresenter {
  destinationComponent = new FormDestinationView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.destinationComponent, this.parentContainer);
  }
}
