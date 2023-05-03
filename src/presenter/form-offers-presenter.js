import FormOffersView from './../view/form-offers-view.js';
import {render} from '../render.js';

export default class FormOffersPresenter {
  offersComponent = new FormOffersView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.offersComponent, this.parentContainer);
  }
}
