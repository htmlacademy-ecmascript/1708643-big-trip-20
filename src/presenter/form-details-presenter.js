import FormDetailsView from './../view/form-details-view.js';
import FormOffersPresenter from './form-offers-presenter.js';
import FormDestinationPresenter from './form-destination-presenter.js';
import {render} from '../render.js';

export default class FormDetailsPresenter {
  detailsComponent = new FormDetailsView();

  constructor({parentContainer}) {
    this.parentContainer = parentContainer;
  }

  init() {
    render(this.detailsComponent, this.parentContainer);

    const formOffersPresenter = new FormOffersPresenter({parentContainer: this.detailsComponent.getElement()});
    formOffersPresenter.init();

    const formDestinationPresenter = new FormDestinationPresenter({parentContainer: this.detailsComponent.getElement()});
    formDestinationPresenter.init();
  }
}
